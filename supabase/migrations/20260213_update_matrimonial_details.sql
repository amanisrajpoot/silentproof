
-- ==========================================
-- UPDATE MATRIMONIAL SERVICE DETAILS
-- Run this in your Supabase SQL Editor.
-- ==========================================

UPDATE public.service_offerings
SET 
    title = 'Matrimonial Investigation',
    description = 'Ensuring clarity and trust before life''s biggest commitment. We provide comprehensive background checks for prospective brides and grooms.',
    cta = 'Secure Your Future',
    features = '["Character & Lifestyle Assessment", "Employment & Financial Verification", "Family Background & Reputation Check", "Social Media & Online Presence Audit", "Previous Marriage/Relationship History"]'::jsonb,
    process = '["Initial Secure Consultation", "Discreet Field Investigation", "Evidence Collection (Photos/Videos)", "Comprehensive Digital Audit", "Final Confidential Report Delivery"]'::jsonb
WHERE slug = 'matrimonial';
