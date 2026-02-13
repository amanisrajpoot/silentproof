-- Rename 'services' to 'service_offerings' to fix fetch issues
alter table public.services rename to service_offerings;

-- Update RLS Policy
drop policy if exists "Public can view services" on public.service_offerings;
create policy "Public can view service_offerings" on public.service_offerings for select using (true);
