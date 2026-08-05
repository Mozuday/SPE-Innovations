// =========================================================
// SPE Visions — Supabase Database Types
// =========================================================
// This file is HAND-WRITTEN to match supabase/migrations/0001_init_schema.sql
//
// Once you run that migration against your live Supabase project, regenerate
// the real version with:
//   npx supabase gen types typescript --project-id YOUR_PROJECT_ID > src/types/supabase.ts
//
// The generated file should match this one closely. If it doesn't, that's a
// signal the migration didn't apply the way we expect — worth comparing.
// =========================================================

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          full_name: string | null;
          avatar_url: string | null;
          role: "user" | "admin";
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          full_name?: string | null;
          avatar_url?: string | null;
          role?: "user" | "admin";
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          full_name?: string | null;
          avatar_url?: string | null;
          role?: "user" | "admin";
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [];
      };

      services: {
        Row: {
          id: string;
          title: string;
          slug: string;
          description: string | null;
          icon: string | null;
          is_published: boolean;
          order_index: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          slug: string;
          description?: string | null;
          icon?: string | null;
          is_published?: boolean;
          order_index?: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          slug?: string;
          description?: string | null;
          icon?: string | null;
          is_published?: boolean;
          order_index?: number;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [];
      };

      courses: {
        Row: {
          id: string;
          title: string;
          slug: string;
          description: string | null;
          thumbnail_url: string | null;
          price: number | null;
          duration: string;
          level: "Beginner" | "Intermediate" | "Advanced" | "Beginner to Advanced" | null;
          is_published: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          slug: string;
          description?: string | null;
          thumbnail_url?: string | null;
          price?: number | null;
          duration?: string;
          level?: "Beginner" | "Intermediate" | "Advanced" | "Beginner to Advanced" | null;
          is_published?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          slug?: string;
          description?: string | null;
          thumbnail_url?: string | null;
          price?: number | null;
          duration?: string;
          level?: "Beginner" | "Intermediate" | "Advanced" | "Beginner to Advanced" | null;
          is_published?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [];
      };

      course_videos: {
        Row: {
          id: string;
          course_id: string;
          title: string;
          description: string | null;
          provider: string;
          provider_video_id: string | null;
          video_url: string | null;
          thumbnail_url: string | null;
          duration: number | null;
          order_index: number;
          is_published: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          course_id: string;
          title: string;
          description?: string | null;
          provider?: string;
          provider_video_id?: string | null;
          video_url?: string | null;
          thumbnail_url?: string | null;
          duration?: number | null;
          order_index?: number;
          is_published?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          course_id?: string;
          title?: string;
          description?: string | null;
          provider?: string;
          provider_video_id?: string | null;
          video_url?: string | null;
          thumbnail_url?: string | null;
          duration?: number | null;
          order_index?: number;
          is_published?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "course_videos_course_id_fkey";
            columns: ["course_id"];
            isOneToOne: false;
            referencedRelation: "courses";
            referencedColumns: ["id"];
          }
        ];
      };

      internships: {
        Row: {
          id: string;
          title: string;
          slug: string;
          description: string | null;
          duration: string | null;
          stipend: string | null;
          category: string | null;
          eligibility: string | null;
          skills: string[];
          seats: number | null;
          deadline: string | null;
          is_published: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          slug: string;
          description?: string | null;
          duration?: string | null;
          stipend?: string | null;
          category?: string | null;
          eligibility?: string | null;
          skills?: string[];
          seats?: number | null;
          deadline?: string | null;
          is_published?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          slug?: string;
          description?: string | null;
          duration?: string | null;
          stipend?: string | null;
          category?: string | null;
          eligibility?: string | null;
          skills?: string[];
          seats?: number | null;
          deadline?: string | null;
          is_published?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [];
      };

      internship_applications: {
        Row: {
          id: string;
          internship_id: string | null;
          full_name: string;
          email: string;
          phone: string | null;
          resume_url: string | null;
          cover_note: string | null;
          status: "pending" | "reviewed" | "accepted" | "rejected";
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          internship_id?: string | null;
          full_name: string;
          email: string;
          phone?: string | null;
          resume_url?: string | null;
          cover_note?: string | null;
          status?: "pending" | "reviewed" | "accepted" | "rejected";
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          internship_id?: string | null;
          full_name?: string;
          email?: string;
          phone?: string | null;
          resume_url?: string | null;
          cover_note?: string | null;
          status?: "pending" | "reviewed" | "accepted" | "rejected";
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "internship_applications_internship_id_fkey";
            columns: ["internship_id"];
            isOneToOne: false;
            referencedRelation: "internships";
            referencedColumns: ["id"];
          }
        ];
      };

      jobs: {
        Row: {
          id: string;
          title: string;
          slug: string;
          description: string | null;
          location: string | null;
          employment_type: "Full Time" | "Part Time" | "Internship" | "Contract" | "Freelance" | null;
          company: string | null;
          work_mode: "Remote" | "On-site" | "Hybrid" | null;
          experience: string | null;
          salary: string | null;
          skills: string[];
          application_link: string | null;
          deadline: string | null;
          is_published: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          slug: string;
          description?: string | null;
          location?: string | null;
          employment_type?: "Full Time" | "Part Time" | "Internship" | "Contract" | "Freelance" | null;
          company?: string | null;
          work_mode?: "Remote" | "On-site" | "Hybrid" | null;
          experience?: string | null;
          salary?: string | null;
          skills?: string[];
          application_link?: string | null;
          deadline?: string | null;
          is_published?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          slug?: string;
          description?: string | null;
          location?: string | null;
          employment_type?: "Full Time" | "Part Time" | "Internship" | "Contract" | "Freelance" | null;
          company?: string | null;
          work_mode?: "Remote" | "On-site" | "Hybrid" | null;
          experience?: string | null;
          salary?: string | null;
          skills?: string[];
          application_link?: string | null;
          deadline?: string | null;
          is_published?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [];
      };

      job_applications: {
        Row: {
          id: string;
          job_id: string | null;
          full_name: string;
          email: string;
          phone: string | null;
          resume_url: string | null;
          cover_note: string | null;
          status: "pending" | "reviewed" | "accepted" | "rejected";
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          job_id?: string | null;
          full_name: string;
          email: string;
          phone?: string | null;
          resume_url?: string | null;
          cover_note?: string | null;
          status?: "pending" | "reviewed" | "accepted" | "rejected";
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          job_id?: string | null;
          full_name?: string;
          email?: string;
          phone?: string | null;
          resume_url?: string | null;
          cover_note?: string | null;
          status?: "pending" | "reviewed" | "accepted" | "rejected";
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "job_applications_job_id_fkey";
            columns: ["job_id"];
            isOneToOne: false;
            referencedRelation: "jobs";
            referencedColumns: ["id"];
          }
        ];
      };

      blogs: {
        Row: {
          id: string;
          title: string;
          slug: string;
          excerpt: string | null;
          content: string | null;
          cover_image_url: string | null;
          author_id: string | null;
          is_published: boolean;
          published_at: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          slug: string;
          excerpt?: string | null;
          content?: string | null;
          cover_image_url?: string | null;
          author_id?: string | null;
          is_published?: boolean;
          published_at?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          slug?: string;
          excerpt?: string | null;
          content?: string | null;
          cover_image_url?: string | null;
          author_id?: string | null;
          is_published?: boolean;
          published_at?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "blogs_author_id_fkey";
            columns: ["author_id"];
            isOneToOne: false;
            referencedRelation: "profiles";
            referencedColumns: ["id"];
          }
        ];
      };

      portfolio_projects: {
        Row: {
          id: string;
          title: string;
          slug: string;
          description: string | null;
          cover_image_url: string | null;
          project_url: string | null;
          tags: string[] | null;
          is_published: boolean;
          order_index: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          slug: string;
          description?: string | null;
          cover_image_url?: string | null;
          project_url?: string | null;
          tags?: string[] | null;
          is_published?: boolean;
          order_index?: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          slug?: string;
          description?: string | null;
          cover_image_url?: string | null;
          project_url?: string | null;
          tags?: string[] | null;
          is_published?: boolean;
          order_index?: number;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [];
      };

      certificates: {
        Row: {
          id: string;
          user_id: string;
          course_id: string;
          certificate_number: string;
          issued_at: string;
          file_url: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          course_id: string;
          certificate_number: string;
          issued_at?: string;
          file_url?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          course_id?: string;
          certificate_number?: string;
          issued_at?: string;
          file_url?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "certificates_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "profiles";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "certificates_course_id_fkey";
            columns: ["course_id"];
            isOneToOne: false;
            referencedRelation: "courses";
            referencedColumns: ["id"];
          }
        ];
      };

      contact_messages: {
        Row: {
          id: string;
          name: string;
          email: string;
          phone: string | null;
          subject: string | null;
          message: string;
          status: "new" | "read" | "replied" | "archived";
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          email: string;
          phone?: string | null;
          subject?: string | null;
          message: string;
          status?: "new" | "read" | "replied" | "archived";
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          email?: string;
          phone?: string | null;
          subject?: string | null;
          message?: string;
          status?: "new" | "read" | "replied" | "archived";
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      is_admin: {
        Args: Record<PropertyKey, never>;
        Returns: boolean;
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}

// ---------------------------------------------------------
// Convenience helper types — use these in components instead
// of reaching into Database[...] every time.
//
// Example:
//   import type { Tables } from "../types/supabase";
//   const service: Tables<"services"> = ...
// ---------------------------------------------------------
export type Tables<T extends keyof Database["public"]["Tables"]> =
  Database["public"]["Tables"][T]["Row"];

export type InsertTables<T extends keyof Database["public"]["Tables"]> =
  Database["public"]["Tables"][T]["Insert"];

export type UpdateTables<T extends keyof Database["public"]["Tables"]> =
  Database["public"]["Tables"][T]["Update"];