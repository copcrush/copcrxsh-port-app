// Generated from the connected Supabase project on 2026-07-21.
// Regenerate after every migration; do not edit application tables by hand.
export type Database = {
  public: {
    Tables: {
      _prisma_migrations: {
        Row: {
          applied_steps_count: number;
          checksum: string;
          finished_at: string | null;
          id: string;
          logs: string | null;
          migration_name: string;
          rolled_back_at: string | null;
          started_at: string;
        };
        Insert: {
          applied_steps_count?: number;
          checksum: string;
          finished_at?: string | null;
          id: string;
          logs?: string | null;
          migration_name: string;
          rolled_back_at?: string | null;
          started_at?: string;
        };
        Update: Partial<
          Database["public"]["Tables"]["_prisma_migrations"]["Insert"]
        >;
        Relationships: [];
      };
      addresses: {
        Row: {
          city: string;
          country: string;
          createdAt: string;
          id: string;
          isDefault: boolean;
          label: string | null;
          line1: string;
          line2: string | null;
          postalCode: string;
          recipientName: string;
          stateRegion: string | null;
          updatedAt: string;
          userId: string;
        };
        Insert: {
          city: string;
          country: string;
          createdAt?: string;
          id: string;
          isDefault?: boolean;
          label?: string | null;
          line1: string;
          line2?: string | null;
          postalCode: string;
          recipientName: string;
          stateRegion?: string | null;
          updatedAt: string;
          userId: string;
        };
        Update: Partial<Database["public"]["Tables"]["addresses"]["Insert"]>;
        Relationships: [
          {
            foreignKeyName: "addresses_userId_fkey";
            columns: ["userId"];
            isOneToOne: false;
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
      };
      artists: {
        Row: {
          color_end: string | null;
          color_start: string;
          created_at: string | null;
          gradient_angle: number;
          id: string;
          name: string;
          slug: string;
          updated_at: string | null;
        };
        Insert: {
          color_end?: string | null;
          color_start?: string;
          created_at?: string | null;
          gradient_angle?: number;
          id?: string;
          name: string;
          slug: string;
          updated_at?: string | null;
        };
        Update: Partial<Database["public"]["Tables"]["artists"]["Insert"]>;
        Relationships: [];
      };
      products: {
        Row: {
          artist_name: string | null;
          created_at: string | null;
          description: string | null;
          detail_images: string[] | null;
          id: string;
          image_url: string | null;
          name: string;
          price: number;
          product_status: string | null;
          stock_quantity: number | null;
        };
        Insert: {
          artist_name?: string | null;
          created_at?: string | null;
          description?: string | null;
          detail_images?: string[] | null;
          id?: string;
          image_url?: string | null;
          name: string;
          price: number;
          product_status?: string | null;
          stock_quantity?: number | null;
        };
        Update: Partial<Database["public"]["Tables"]["products"]["Insert"]>;
        Relationships: [];
      };
      users: {
        Row: {
          createdAt: string;
          email: string;
          firstName: string | null;
          id: string;
          lastName: string | null;
          password: string;
          passwordResetExpires: string | null;
          passwordResetToken: string | null;
          phone: string | null;
          refreshToken: string | null;
          role: Database["public"]["Enums"]["Role"];
          updatedAt: string;
        };
        Insert: {
          createdAt?: string;
          email: string;
          firstName?: string | null;
          id: string;
          lastName?: string | null;
          password: string;
          passwordResetExpires?: string | null;
          passwordResetToken?: string | null;
          phone?: string | null;
          refreshToken?: string | null;
          role?: Database["public"]["Enums"]["Role"];
          updatedAt: string;
        };
        Update: Partial<Database["public"]["Tables"]["users"]["Insert"]>;
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: {
      Role: "USER" | "ADMIN";
    };
    CompositeTypes: Record<string, never>;
  };
};
