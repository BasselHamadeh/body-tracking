-- Einmal im Supabase SQL Editor ausführen.
create table if not exists public.docs (
  user_id    uuid not null default auth.uid() references auth.users(id) on delete cascade,
  coll       text not null,
  doc_id     text not null,
  data       jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now(),
  primary key (user_id, coll, doc_id)
);

alter table public.docs enable row level security;

create policy "docs_select_own" on public.docs for select using (auth.uid() = user_id);
create policy "docs_insert_own" on public.docs for insert with check (auth.uid() = user_id);
create policy "docs_update_own" on public.docs for update using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "docs_delete_own" on public.docs for delete using (auth.uid() = user_id);
