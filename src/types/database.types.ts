export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  __InternalSupabase: {
    PostgrestVersion: "14.4"
  }
  public: {
    Tables: {
      _prisma_migrations: {
        Row: {
          applied_steps_count: number
          checksum: string
          finished_at: string | null
          id: string
          logs: string | null
          migration_name: string
          rolled_back_at: string | null
          started_at: string
        }
        Insert: {
          applied_steps_count?: number
          checksum: string
          finished_at?: string | null
          id: string
          logs?: string | null
          migration_name: string
          rolled_back_at?: string | null
          started_at?: string
        }
        Update: {
          applied_steps_count?: number
          checksum?: string
          finished_at?: string | null
          id?: string
          logs?: string | null
          migration_name?: string
          rolled_back_at?: string | null
          started_at?: string
        }
        Relationships: []
      }
      addresses: {
        Row: {
          city: string
          country: string
          createdAt: string
          id: string
          isDefault: boolean
          label: string | null
          line1: string
          line2: string | null
          postalCode: string
          recipientName: string
          stateRegion: string | null
          updatedAt: string
          userId: string
        }
        Insert: {
          city: string
          country: string
          createdAt?: string
          id: string
          isDefault?: boolean
          label?: string | null
          line1: string
          line2?: string | null
          postalCode: string
          recipientName: string
          stateRegion?: string | null
          updatedAt: string
          userId: string
        }
        Update: {
          city?: string
          country?: string
          createdAt?: string
          id?: string
          isDefault?: boolean
          label?: string | null
          line1?: string
          line2?: string | null
          postalCode?: string
          recipientName?: string
          stateRegion?: string | null
          updatedAt?: string
          userId?: string
        }
        Relationships: [
          {
            foreignKeyName: "addresses_userId_fkey"
            columns: ["userId"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      artists: {
        Row: {
          color_end: string | null
          color_start: string
          created_at: string | null
          gradient_angle: number
          id: string
          name: string
          slug: string
          updated_at: string | null
        }
        Insert: {
          color_end?: string | null
          color_start?: string
          created_at?: string | null
          gradient_angle?: number
          id?: string
          name: string
          slug: string
          updated_at?: string | null
        }
        Update: {
          color_end?: string | null
          color_start?: string
          created_at?: string | null
          gradient_angle?: number
          id?: string
          name?: string
          slug?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      products: {
        Row: {
          artist_name: string | null
          created_at: string | null
          description: string | null
          detail_images: string[] | null
          id: string
          image_url: string | null
          name: string
          price: number
          product_status: string | null
          stock_quantity: number | null
        }
        Insert: {
          artist_name?: string | null
          created_at?: string | null
          description?: string | null
          detail_images?: string[] | null
          id?: string
          image_url?: string | null
          name: string
          price: number
          product_status?: string | null
          stock_quantity?: number | null
        }
        Update: {
          artist_name?: string | null
          created_at?: string | null
          description?: string | null
          detail_images?: string[] | null
          id?: string
          image_url?: string | null
          name?: string
          price?: number
          product_status?: string | null
          stock_quantity?: number | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          created_at: string
          id: string
          role: string
        }
        Insert: {
          created_at?: string
          id: string
          role?: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: string
        }
        Relationships: []
      }
      users: {
        Row: {
          createdAt: string
          email: string
          firstName: string | null
          id: string
          lastName: string | null
          password: string
          passwordResetExpires: string | null
          passwordResetToken: string | null
          phone: string | null
          refreshToken: string | null
          role: Database["public"]["Enums"]["Role"]
          updatedAt: string
        }
        Insert: {
          createdAt?: string
          email: string
          firstName?: string | null
          id: string
          lastName?: string | null
          password: string
          passwordResetExpires?: string | null
          passwordResetToken?: string | null
          phone?: string | null
          refreshToken?: string | null
          role?: Database["public"]["Enums"]["Role"]
          updatedAt: string
        }
        Update: {
          createdAt?: string
          email?: string
          firstName?: string | null
          id?: string
          lastName?: string | null
          password?: string
          passwordResetExpires?: string | null
          passwordResetToken?: string | null
          phone?: string | null
          refreshToken?: string | null
          role?: Database["public"]["Enums"]["Role"]
          updatedAt?: string
        }
        Relationships: []
      }
      works: {
        Row: {
          content: Json
          cover_image_url: string | null
          created_at: string
          description: string
          id: string
          live_url: string | null
          published: boolean
          slug: string
          tags: string[]
          title: string
          updated_at: string
        }
        Insert: {
          content?: Json
          cover_image_url?: string | null
          created_at?: string
          description?: string
          id?: string
          live_url?: string | null
          published?: boolean
          slug: string
          tags?: string[]
          title: string
          updated_at?: string
        }
        Update: {
          content?: Json
          cover_image_url?: string | null
          created_at?: string
          description?: string
          id?: string
          live_url?: string | null
          published?: boolean
          slug?: string
          tags?: string[]
          title?: string
          updated_at?: string
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
      Role: "USER" | "ADMIN"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      Role: ["USER", "ADMIN"],
    },
  },
} as const
