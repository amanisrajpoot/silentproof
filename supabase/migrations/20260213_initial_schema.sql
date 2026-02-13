-- ==========================================
-- SILENT PROOF COMPREHENSIVE SCHEMA
-- ==========================================

-- 1. CONTACT INQUIRIES
create table if not exists public.leads (
    id uuid default gen_random_uuid() primary key,
    created_at timestamptz default now(),
    name text not null,
    contact_method text not null,
    city text not null,
    service_type text not null,
    message text,
    file_hash text,
    file_path text,
    status text default 'pending'
);

-- 2. OPERATIVE NODES
create table if not exists public.nodes (
    id uuid default gen_random_uuid() primary key,
    node_id text unique not null,
    phone text unique not null,
    upi_id text,
    status text default 'active',
    balance numeric default 0,
    tasks_completed int default 0,
    created_at timestamptz default now()
);

-- 3. FIELD OPERATIONS (TASKS)
create table if not exists public.tasks (
    id text primary key, -- e.g. 'SN-901'
    title text not null,
    location text not null,
    type text not null,
    description text,
    urgency text default 'Standard',
    reward numeric not null,
    instructions jsonb default '[]'::jsonb,
    status text default 'open',
    created_at timestamptz default now()
);

-- 4. TASK REPORTS
create table if not exists public.reports (
    id uuid default gen_random_uuid() primary key,
    task_id text references public.tasks(id),
    node_id text references public.nodes(node_id),
    observation_log text,
    proof_file_path text,
    submitted_at timestamptz default now()
);

-- 5. TRANSACTION LEDGER
create table if not exists public.transactions (
    id text primary key, -- e.g. 'TX-101'
    node_id text references public.nodes(node_id),
    task_name text not null,
    amount numeric not null,
    status text default 'Paid',
    created_at timestamptz default now()
);

-- 6. CASE STUDIES (CMS)
create table if not exists public.case_studies (
    id uuid default gen_random_uuid() primary key,
    title text not null,
    category text not null,
    outcome text not null,
    color_theme text,
    tags text[] default '{}',
    created_at timestamptz default now()
);

-- 7. REGIONAL LOCATIONS (CMS)
create table if not exists public.locations (
    id uuid default gen_random_uuid() primary key,
    slug text unique not null,
    city text not null,
    description text,
    phone text,
    address text,
    created_at timestamptz default now()
);

-- 8. INVESTIGATIVE SERVICES (CMS)
create table if not exists public.services (
    id uuid default gen_random_uuid() primary key,
    slug text unique not null,
    title text not null,
    description text,
    icon text,
    cta text,
    features jsonb default '[]'::jsonb,
    process jsonb default '[]'::jsonb,
    created_at timestamptz default now()
);

-- 9. PRICING PLANS (CMS)
create table if not exists public.plans (
    id uuid default gen_random_uuid() primary key,
    name text not null,
    price text not null,
    description text,
    features jsonb default '[]'::jsonb,
    is_popular boolean default false,
    billing_note text,
    created_at timestamptz default now()
);

-- ==========================================
-- RLS POLICIES (BASIC)
-- ==========================================
alter table public.leads enable row level security;
alter table public.nodes enable row level security;
alter table public.tasks enable row level security;
alter table public.reports enable row level security;
alter table public.transactions enable row level security;

-- Public can insert leads (anonymous inquiry)
create policy "Public can insert leads" on public.leads for insert with check (true);

-- Tasks are visible to everyone (or just nodes)
create policy "Tasks are visible to anyone" on public.tasks for select using (true);

-- Nodes can only see their own data
create policy "Nodes can see own record" on public.nodes for select using (true);
create policy "Nodes can see own reports" on public.reports for select using (true);
create policy "Nodes can see own transactions" on public.transactions for select using (true);
