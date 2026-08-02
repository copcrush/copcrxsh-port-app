-- Add live preview URL for HR-friendly project links
alter table public.works
  add column if not exists live_url text;
