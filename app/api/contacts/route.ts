import { createServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()

    // Validation
    if (!name || !email || !message) {
      return Response.json({ error: "Missing required fields" }, { status: 400 })
    }

    if (email.length > 255) {
      return Response.json({ error: "Email too long" }, { status: 400 })
    }

    if (message.length > 5000) {
      return Response.json({ error: "Message too long" }, { status: 400 })
    }

    // Create Supabase client
    const cookieStore = cookies()
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL || "",
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "",
      {
        cookies: {
          getAll() {
            return cookieStore.getAll()
          },
          setAll(cookiesToSet) {
            cookiesToSet.forEach(({ name, value, options }) => {
              cookieStore.set(name, value, options)
            })
          },
        },
      },
    )

    // Insert into database
    const { data, error } = await supabase.from("contacts").insert([{ name, email, message }]).select()

    if (error) {
      console.error("Supabase error:", error)
      return Response.json({ error: "Failed to save message" }, { status: 500 })
    }

    return Response.json({ success: true, data }, { status: 200 })
  } catch (error) {
    console.error("API error:", error)
    return Response.json({ error: "Internal server error" }, { status: 500 })
  }
}
