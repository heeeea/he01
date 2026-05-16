-- ============================================================
-- 贺 · 01 AI 实战资源库 — tools 表
-- 请在 Supabase SQL Editor 中手动执行本文件。
-- 不要改 tutorials 表、resources 表、cases 表。
-- ============================================================

-- 1. 创建 tools 表
create table if not exists tools (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  category text,
  description text,
  suitable_for text,
  usage_tip text,
  official_url text,
  tutorial_url text,
  cover_url text,
  tags text[],
  tool_status text default '整理中',
  status text default 'draft',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- 2. 开启 RLS
alter table tools enable row level security;

-- 3. public 可以读取已发布工具
create policy "Public can read published tools"
  on tools
  for select
  using (status = 'published');

-- 4. authenticated 可以 insert / update / delete / select 全部工具
create policy "Authenticated can insert tools"
  on tools
  for insert
  with check (auth.role() = 'authenticated');

create policy "Authenticated can update tools"
  on tools
  for update
  using (auth.role() = 'authenticated');

create policy "Authenticated can delete tools"
  on tools
  for delete
  using (auth.role() = 'authenticated');

create policy "Authenticated can select all tools"
  on tools
  for select
  using (auth.role() = 'authenticated');

-- 5. updated_at 自动更新触发器（复用已有 function）
do $$
begin
  if not exists (
    select 1 from pg_trigger where tgname = 'set_tools_updated_at'
  ) then
    create trigger set_tools_updated_at
      before update on tools
      for each row
      execute function update_updated_at_column();
  end if;
end $$;
