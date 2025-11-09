import { createClient } from '@supabase/supabase-js'
import type { Database } from './database.types'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

console.log('=== Supabase Configuration ===')
console.log('URL:', supabaseUrl)
console.log('Key exists:', !!supabaseAnonKey)
console.log('Key length:', supabaseAnonKey?.length || 0)
console.log('First 20 chars of key:', supabaseAnonKey?.substring(0, 20))
console.log('==============================')

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('CRITICAL: Missing Supabase environment variables!')
  console.error('URL:', supabaseUrl)
  console.error('Key:', supabaseAnonKey ? 'EXISTS' : 'MISSING')
  throw new Error('Missing Supabase environment variables')
}

// Create client without type constraints to avoid potential type-related issues
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  db: {
    schema: 'public',
  },
  auth: {
    persistSession: false,
  },
})
