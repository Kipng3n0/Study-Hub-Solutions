export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      contacts: {
        Row: {
          id: string
          created_at: string
          name: string
          email: string
          subject: string
          message: string
          status: 'new' | 'read' | 'replied'
        }
        Insert: {
          id?: string
          created_at?: string
          name: string
          email: string
          subject: string
          message: string
          status?: 'new' | 'read' | 'replied'
        }
        Update: {
          id?: string
          created_at?: string
          name?: string
          email?: string
          subject?: string
          message?: string
          status?: 'new' | 'read' | 'replied'
        }
        Relationships: []
      }
      bookings: {
        Row: {
          id: string
          created_at: string
          service: string
          date: string
          time: string
          name: string
          email: string
          phone: string
          message: string | null
          status: 'pending' | 'confirmed' | 'cancelled' | 'completed'
        }
        Insert: {
          id?: string
          created_at?: string
          service: string
          date: string
          time: string
          name: string
          email: string
          phone: string
          message?: string | null
          status?: 'pending' | 'confirmed' | 'cancelled' | 'completed'
        }
        Update: {
          id?: string
          created_at?: string
          service?: string
          date?: string
          time?: string
          name?: string
          email?: string
          phone?: string
          message?: string | null
          status?: 'pending' | 'confirmed' | 'cancelled' | 'completed'
        }
        Relationships: []
      }
      blog_posts: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          title: string
          excerpt: string
          content: string
          image: string
          category: string
          author: string
          read_time: string
          published: boolean
          slug: string
        }
        Insert: {
          id?: string
          created_at?: string
          updated_at?: string
          title: string
          excerpt: string
          content: string
          image: string
          category: string
          author: string
          read_time: string
          published?: boolean
          slug: string
        }
        Update: {
          id?: string
          created_at?: string
          updated_at?: string
          title?: string
          excerpt?: string
          content?: string
          image?: string
          category?: string
          author?: string
          read_time?: string
          published?: boolean
          slug?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
