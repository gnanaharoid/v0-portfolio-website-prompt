-- Create contacts table for storing contact form submissions
CREATE TABLE IF NOT EXISTS contacts (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Drop indexes if they exist before recreating them to avoid conflicts
DROP INDEX IF EXISTS idx_contacts_email;
DROP INDEX IF EXISTS idx_contacts_created_at;

CREATE INDEX idx_contacts_email ON contacts(email);
CREATE INDEX idx_contacts_created_at ON contacts(created_at DESC);

-- Enable Row Level Security
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- Drop and recreate policies for clean application
DROP POLICY IF EXISTS "Allow public inserts" ON contacts;
CREATE POLICY "Allow public inserts" ON contacts
  FOR INSERT
  WITH CHECK (true);

DROP POLICY IF EXISTS "Allow reading all contacts" ON contacts;
CREATE POLICY "Allow reading all contacts" ON contacts
  FOR SELECT
  USING (true);
