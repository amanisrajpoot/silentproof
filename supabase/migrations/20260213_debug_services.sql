-- FIX SERVICES TABLE LOCK/CORRUPTION
-- 1. Drop the stuck table
drop table if exists public.services;

-- 2. Re-create the table
create table public.services (
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

-- 3. Enable RLS
alter table public.services enable row level security;

-- 4. Add Public Read Policy
create policy "Public can view services" on public.services for select using (true);

-- 5. Re-seed Data
insert into public.services (slug, title, description, icon, cta, features, process)
values 
('matrimonial', 'Matrimonial Check', 'Ensuring clarity and trust before life biggest commitment.', 'UserCheck', 'Secure Your Future', '["Character Assessment", "Financial Verification", "Family Background", "Social Audit"]'::jsonb, '["Secure Consult", "Field Investigation", "Evidence Collection", "Final Report"]'::jsonb),
('corporate', 'Corporate Fraud', 'Protecting business interests through due diligence and asset tracing.', 'Building2', 'Protect Your Business', '["Employee Theft", "IP Protection", "Competitor Intel", "Supply Chain Verify"]'::jsonb, '["Risk Assessment", "Internal Audit", "Forensics", "Legal Reporting"]'::jsonb),
('background', 'Person Search', 'Comprehensive background checks for high-stakes hiring.', 'Search', 'Verify Now', '["Criminal Records", "Degree Verification", "Employment Validation", "Address Proofing"]'::jsonb, '["Doc Submission", "Database Search", "Physical Verify", "Status Report"]'::jsonb),
('surveillance', 'Pro Surveillance', 'High-discretion physical and digital monitoring.', 'EyeOff', 'Start Surveillance', '["24/7 Monitoring", "GPS Tracking", "Video Logs", "Counter-Surveillance"]'::jsonb, '["Case Mapping", "Field Deployment", "Real-time Updates", "Case Closing"]'::jsonb);
