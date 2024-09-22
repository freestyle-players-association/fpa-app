export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          operationName?: string
          query?: string
          variables?: Json
          extensions?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      event_organizers: {
        Row: {
          event_id: string
          userprofile_id: string
        }
        Insert: {
          event_id: string
          userprofile_id: string
        }
        Update: {
          event_id?: string
          userprofile_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "event_organizers_tournament_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "event_organizers_userprofile_id_fkey"
            columns: ["userprofile_id"]
            isOneToOne: false
            referencedRelation: "userprofiles"
            referencedColumns: ["id"]
          },
        ]
      }
      event_organizers_invitations: {
        Row: {
          event_id: string
          userprofile_id: string
        }
        Insert: {
          event_id: string
          userprofile_id: string
        }
        Update: {
          event_id?: string
          userprofile_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "event_organizers_invitations_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "event_organizers_invitations_userprofile_id_fkey"
            columns: ["userprofile_id"]
            isOneToOne: false
            referencedRelation: "userprofiles"
            referencedColumns: ["id"]
          },
        ]
      }
      event_schedules: {
        Row: {
          description: string | null
          end_time: string
          event_id: string
          full_address: string | null
          id: string
          lat: number | null
          lng: number | null
          place_id: string | null
          start_time: string
        }
        Insert: {
          description?: string | null
          end_time: string
          event_id: string
          full_address?: string | null
          id?: string
          lat?: number | null
          lng?: number | null
          place_id?: string | null
          start_time: string
        }
        Update: {
          description?: string | null
          end_time?: string
          event_id?: string
          full_address?: string | null
          id?: string
          lat?: number | null
          lng?: number | null
          place_id?: string | null
          start_time?: string
        }
        Relationships: [
          {
            foreignKeyName: "event_schedules_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
        ]
      }
      events: {
        Row: {
          description: string
          end_date: string | null
          id: string
          name: string
          start_date: string | null
        }
        Insert: {
          description: string
          end_date?: string | null
          id?: string
          name: string
          start_date?: string | null
        }
        Update: {
          description?: string
          end_date?: string | null
          id?: string
          name?: string
          start_date?: string | null
        }
        Relationships: []
      }
      userprofiles: {
        Row: {
          avatar_url: string | null
          email: string
          id: string
          username: string
        }
        Insert: {
          avatar_url?: string | null
          email: string
          id: string
          username: string
        }
        Update: {
          avatar_url?: string | null
          email?: string
          id?: string
          username?: string
        }
        Relationships: [
          {
            foreignKeyName: "userprofiles_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
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

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

