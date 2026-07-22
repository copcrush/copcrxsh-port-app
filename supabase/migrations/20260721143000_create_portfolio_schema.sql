create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  role text not null default 'admin' check (role = 'admin'),
  created_at timestamptz not null default now()
);

create table if not exists public.works (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  cover_image_url text,
  description text not null default '',
  tags text[] not null default '{}',
  content jsonb not null default '{}'::jsonb,
  published boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.profiles enable row level security;
alter table public.works enable row level security;

create policy "profiles can read their own row"
on public.profiles for select
to authenticated
using (id = (select auth.uid()));

create policy "published works are public"
on public.works for select
to anon, authenticated
using (
  published
  or exists (
    select 1
    from public.profiles
    where profiles.id = (select auth.uid())
      and profiles.role = 'admin'
  )
);

create policy "admins can create works"
on public.works for insert
to authenticated
with check (
  exists (
    select 1
    from public.profiles
    where profiles.id = (select auth.uid())
      and profiles.role = 'admin'
  )
);

create policy "admins can update works"
on public.works for update
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

create policy "admins can delete works"
on public.works for delete
to authenticated
using (
  exists (
    select 1
    from public.profiles
    where profiles.id = (select auth.uid())
      and profiles.role = 'admin'
  )
);

insert into storage.buckets (id, name, public)
values ('work-images', 'work-images', true)
on conflict (id) do update set public = excluded.public;

create policy "work images are publicly readable"
on storage.objects for select
to public
using (bucket_id = 'work-images');

create policy "admins can upload work images"
on storage.objects for insert
to authenticated
with check (
  bucket_id = 'work-images'
  and exists (
    select 1
    from public.profiles
    where profiles.id = (select auth.uid())
      and profiles.role = 'admin'
  )
);

create policy "admins can update work images"
on storage.objects for update
to authenticated
using (
  bucket_id = 'work-images'
  and exists (
    select 1
    from public.profiles
    where profiles.id = (select auth.uid())
      and profiles.role = 'admin'
  )
);

create policy "admins can delete work images"
on storage.objects for delete
to authenticated
using (
  bucket_id = 'work-images'
  and exists (
    select 1
    from public.profiles
    where profiles.id = (select auth.uid())
      and profiles.role = 'admin'
  )
);
