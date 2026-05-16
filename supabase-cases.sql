-- ============================================================
-- 贺 · 01 AI 实战资源库 — cases 表
-- 请在 Supabase SQL Editor 中手动执行本文件。
-- 不要改 tutorials 表、resources 表。
-- ============================================================

-- 1. 创建 cases 表
create table if not exists cases (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  category text,
  summary text,
  content text,
  background text,
  process text,
  result text,
  lessons text,
  upgrades text,
  tools_used text[],
  cover_url text,
  tags text[],
  case_status text default '展示中',
  status text default 'draft',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- 2. 开启 RLS
alter table cases enable row level security;

-- 3. public 可以读取已发布案例
create policy "Public can read published cases"
  on cases
  for select
  using (status = 'published');

-- 4. authenticated 可以 insert / update / delete / select 全部案例
create policy "Authenticated can insert cases"
  on cases
  for insert
  with check (auth.role() = 'authenticated');

create policy "Authenticated can update cases"
  on cases
  for update
  using (auth.role() = 'authenticated');

create policy "Authenticated can delete cases"
  on cases
  for delete
  using (auth.role() = 'authenticated');

create policy "Authenticated can select all cases"
  on cases
  for select
  using (auth.role() = 'authenticated');

-- 5. updated_at 自动更新触发器（复用已有 function）
do $$
begin
  if not exists (
    select 1 from pg_trigger where tgname = 'set_cases_updated_at'
  ) then
    create trigger set_cases_updated_at
      before update on cases
      for each row
      execute function update_updated_at_column();
  end if;
end $$;
