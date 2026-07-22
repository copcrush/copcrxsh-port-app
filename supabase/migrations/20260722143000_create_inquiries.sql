-- Future backoffice: store freelance hire inquiries from the contact form.
-- Apply when you are ready to manage leads in admin (not required for Gmail flow).

create table if not exists public.inquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  company text,
  project_type text not null,
  budget text not null,
  timeline text not null,
  message text not null,
  status text not null default 'new' check (status in ('new', 'replied', 'archived')),
  created_at timestamptz not null default now()
);

alter table public.inquiries enable row level security;

create policy "anyone can submit an inquiry"
on public.inquiries for insert
to anon, authenticated
with check (true);

create policy "admins can read inquiries"
on public.inquiries for select
to authenticated
using (
  exists (
    select 1
    from public.profiles
    where profiles.id = (select auth.uid())
      and profiles.role = 'admin'
  )
);

create policy "admins can update inquiries"
on public.inquiries for update
to authenticated
using (
  exists (
    select 1
    from public.profiles
    where profiles.id = (select auth.uid())
      and profiles.role = 'admin'
  )
)
with check (
  exists (
    select 1
    from public.profiles
    where profiles.id = (select auth.uid())
      and profiles.role = 'admin'
  )
);
