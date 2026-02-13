
-- ==========================================
-- REPAIR LEADS POLICY
-- Run this in your Supabase SQL Editor to allow the form to save data.
-- ==========================================

-- 1. Ensure RLS is enabled
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- 2. Drop existing policies to avoid conflicts
DROP POLICY IF EXISTS "Public can insert leads" ON public.leads;
DROP POLICY IF EXISTS "Leads are insertable by anyone" ON public.leads;

-- 3. Create robust insert policy for public
CREATE POLICY "Leads are insertable by anyone" 
ON public.leads 
FOR INSERT 
WITH CHECK (true);

-- 4. Create select policy for debugging/verification
DROP POLICY IF EXISTS "Public can select leads" ON public.leads;
CREATE POLICY "Public can select leads" 
ON public.leads 
FOR SELECT 
USING (true);

-- 5. Verify columns match our form expectations
-- (This is just an insert check, if it fails here, we know the schema is wrong)
-- INSERT INTO public.leads (name, contact_method, city, service_type, message) 
-- VALUES ('System Test', 'test@example.com', 'System', 'test', 'Testing policy...');
