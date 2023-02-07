export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      guilds: {
        Row: {
          created_at: string | null
          icon_url: string | null
          id: string
          name: string
          owner_id: string
        }
        Insert: {
          created_at?: string | null
          icon_url?: string | null
          id?: string
          name: string
          owner_id: string
        }
        Update: {
          created_at?: string | null
          icon_url?: string | null
          id?: string
          name?: string
          owner_id?: string
        }
      }
      members: {
        Row: {
          guild_id: string
          id: string
          user_id: string
        }
        Insert: {
          guild_id: string
          id?: string
          user_id: string
        }
        Update: {
          guild_id?: string
          id?: string
          user_id?: string
        }
      }
      profiles: {
        Row: {
          auth_id: string | null
          avatar_url: string | null
          discriminator: string | null
          guilds: string[] | null
          id: string
          updated_at: string | null
          username: string | null
        }
        Insert: {
          auth_id?: string | null
          avatar_url?: string | null
          discriminator?: string | null
          guilds?: string[] | null
          id: string
          updated_at?: string | null
          username?: string | null
        }
        Update: {
          auth_id?: string | null
          avatar_url?: string | null
          discriminator?: string | null
          guilds?: string[] | null
          id?: string
          updated_at?: string | null
          username?: string | null
        }
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
