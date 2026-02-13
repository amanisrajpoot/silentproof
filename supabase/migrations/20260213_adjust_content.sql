
-- ==========================================
-- ADJUST CONTENT: Add Matrimonial Service & Remove Mumbai
-- Run this in your Supabase SQL Editor.
-- ==========================================

-- 1. Insert "Matrimonial Check" into service_offerings
INSERT INTO public.service_offerings (slug, title, description, icon, cta, features, process)
VALUES 
('matrimonial', 'Matrimonial Check', 'Our matrimonial investigation service provides a comprehensive background check on prospective partners. We verify personal details, financial status, employment history, and character references to ensure you make an informed decision with peace of mind. All investigations are conducted with the utmost discretion and confidentiality.', 'UserCheck', 'Secure Your Future', '["Character Assessment", "Financial Verification", "Family Background", "Social Audit"]'::jsonb, '["Secure Consult", "Field Investigation", "Evidence Collection", "Final Report"]'::jsonb)
ON CONFLICT (slug) DO UPDATE SET 
    title = EXCLUDED.title,
    description = EXCLUDED.description,
    icon = EXCLUDED.icon,
    cta = EXCLUDED.cta,
    features = EXCLUDED.features,
    process = EXCLUDED.process;

-- 2. Remove "Mumbai" from locations
DELETE FROM public.locations WHERE slug = 'mumbai';
