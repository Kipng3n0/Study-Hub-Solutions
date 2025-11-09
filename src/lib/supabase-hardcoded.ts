import { createClient } from '@supabase/supabase-js'

// Temporary hardcoded values for testing
const supabaseUrl = 'https://sgaddhyvbsofucamcbco.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNnYWRkaHl2YnNvZnVjYW1jYmNvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA2MjM3NzUsImV4cCI6MjA3NjE5OTc3NX0.arnKsDuwZsZsF4habgSfJlCbOGeSw9bQpXOhYRglGQY'

console.log('Using hardcoded Supabase credentials for testing')

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  db: {
    schema: 'public',
  },
  auth: {
    persistSession: false,
  },
})
