-- ==========================================
-- SILENT PROOF COMPLETE DATABASE SETUP
-- Run this in your Supabase SQL Editor to initialize the database.
-- ==========================================

-- PART 1: SCHEMA DEFINITION
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
-- RLS POLICIES
-- ==========================================
alter table public.leads enable row level security;
alter table public.nodes enable row level security;
alter table public.tasks enable row level security;
alter table public.reports enable row level security;
alter table public.transactions enable row level security;
alter table public.case_studies enable row level security;
alter table public.locations enable row level security;
alter table public.services enable row level security;
alter table public.plans enable row level security;

-- Public Access Policies
create policy "Public can insert leads" on public.leads for insert with check (true);
create policy "Tasks are visible to anyone" on public.tasks for select using (true);
create policy "Case studies are public" on public.case_studies for select using (true);
create policy "Locations are public" on public.locations for select using (true);
create policy "Services are public" on public.services for select using (true);
create policy "Plans are public" on public.plans for select using (true);

-- Node Access Policies
create policy "Nodes can see own record" on public.nodes for select using (true);
create policy "Nodes can see own reports" on public.reports for select using (true);
create policy "Nodes can see own transactions" on public.transactions for select using (true);


-- PART 2: SEED DATA
-- ==========================================

-- 1. NODES
insert into public.nodes (node_id, phone, upi_id, balance, status)
values 
('OP-X921', '+919876543210', 'op.x921@upi', 2400, 'active')
on conflict (node_id) do nothing;

-- 2. TASKS
insert into public.tasks (id, title, location, type, description, reward, urgency, status)
values 
('SN-901', 'Address Verification', 'Gomti Nagar, Lucknow', 'Physical Verify', 'Confirm if the resident at Sector 4, Plot 12 is active. No contact required.', 500, 'High', 'open'),
('SN-902', 'Entrance Photography', 'Saket, Delhi', 'Visual Support', 'Take 3 clear photos of the main entrance and parking lot of Rectangle One.', 800, 'Standard', 'open'),
('SN-903', 'Document Drop', 'Indiranagar, Bangalore', 'Logistics', 'Drop a sealed envelope (provided) at the reception of Tech Park Alpha.', 400, 'Standard', 'open'),
('SN-904', 'Vehicle Spotting', 'Bandra West, Mumbai', 'Surveillance', 'Verify presence of vehicle MH-02-AB-XXXX at designated location between 2 PM - 4 PM.', 1200, 'High', 'open')
on conflict (id) do nothing;

-- 3. SERVICES
insert into public.services (slug, title, description, icon, cta, features, process)
values 
('matrimonial', 'Matrimonial Check', 'Ensuring clarity and trust before life biggest commitment.', 'UserCheck', 'Secure Your Future', '["Character Assessment", "Financial Verification", "Family Background", "Social Audit"]'::jsonb, '["Secure Consult", "Field Investigation", "Evidence Collection", "Final Report"]'::jsonb),
('corporate', 'Corporate Fraud', 'Protecting business interests through due diligence and asset tracing.', 'Building2', 'Protect Your Business', '["Employee Theft", "IP Protection", "Competitor Intel", "Supply Chain Verify"]'::jsonb, '["Risk Assessment", "Internal Audit", "Forensics", "Legal Reporting"]'::jsonb),
('background', 'Person Search', 'Comprehensive background checks for high-stakes hiring.', 'Search', 'Verify Now', '["Criminal Records", "Degree Verification", "Employment Validation", "Address Proofing"]'::jsonb, '["Doc Submission", "Database Search", "Physical Verify", "Status Report"]'::jsonb),
('surveillance', 'Pro Surveillance', 'High-discretion physical and digital monitoring.', 'EyeOff', 'Start Surveillance', '["24/7 Monitoring", "GPS Tracking", "Video Logs", "Counter-Surveillance"]'::jsonb, '["Case Mapping", "Field Deployment", "Real-time Updates", "Case Closing"]'::jsonb)
on conflict (slug) do nothing;

-- 4. LOCATIONS
insert into public.locations (slug, city, description, phone)
values 
('delhi', 'Delhi NCR', 'Our primary hub for Northern India investigations and high-court legal verifications.', '+91 11 4XXX XXXX'),
('lucknow', 'Lucknow', 'Leading investigative firm in the capital of Uttar Pradesh, specializing in civil disputes.', '+91 522 4XXX XXXX'),
('bangalore', 'Bangalore', 'Technical surveillance and I.P. infringement specialists in the tech capital.', '+91 80 4XXX XXXX'),
('mumbai', 'Mumbai', 'Financial fraud and corporate espionage response team.', '+91 22 4XXX XXXX')
on conflict (slug) do nothing;

-- 5. PLANS
insert into public.plans (name, price, description, features, is_popular)
values 
('Standard Discovery', '₹15,000', 'Ideal for initial background checks and single-day field surveillance.', '["24-Hour Field Work", "Basic Digital Audit", "Standard Photo Evidence", "Digital Report Delivery"]'::jsonb, false),
('Strategic Investigation', '₹45,000+', 'Comprehensive multi-day investigation for matrimonial or corporate fraud.', '["72-Hour Monitoring", "Deep-Web Asset Tracing", "Video Evidence Logs", "Senior Consultant Review"]'::jsonb, true),
('Corporate Retainer', 'Custom', 'Ongoing due diligence and risk assessment for businesses.', '["Dedicated Field Team", "Forensic Data Analysis", "Bi-Weekly Reporting", "Priority Support"]'::jsonb, false);

-- 6. CASE STUDIES
insert into public.case_studies (title, category, outcome, tags, color_theme)
values 
('Extortion Threat Resolution', 'Corporate', 'Identified the source of a digital extortion campaign.', '{"Forensics", "Surveillance", "Cyber Trace"}', 'bg-blue-50 text-blue-700'),
('Pre-Matrimonial Background', 'Personal', 'Exposed undisclosed financial liabilities.', '{"Background Verify", "Reputation Audit"}', 'bg-purple-50 text-purple-700'),
('Warehouse Inventory Leakage', 'Corporate', 'Dismantled an internal theft ring in Mumbai.', '{"Undercover", "Internal Audit"}', 'bg-emerald-50 text-emerald-700');
