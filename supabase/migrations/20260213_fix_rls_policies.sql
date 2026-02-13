-- FIX RLS POLICIES FOR PUBLIC GENERIC READ ACCESS
-- The initial schema enabled RLS but likely missed adding SELECT policies for the 'anon' role on these CMS tables.

-- 1. SERVICES
drop policy if exists "Public can view services" on public.services;
create policy "Public can view services" on public.services for select using (true);

-- 2. CASE STUDIES
drop policy if exists "Public can view case studies" on public.case_studies;
create policy "Public can view case studies" on public.case_studies for select using (true);

-- 3. LOCATIONS
drop policy if exists "Public can view locations" on public.locations;
create policy "Public can view locations" on public.locations for select using (true);

-- 4. PLANS (Pricing)
drop policy if exists "Public can view plans" on public.plans;
create policy "Public can view plans" on public.plans for select using (true);

-- 5. TASKS (Silent Network)
-- Ensure tasks are viewable. We might have added this, but reaffirming.
drop policy if exists "Public can view open tasks" on public.tasks;
create policy "Public can view open tasks" on public.tasks for select using (status = 'open');
