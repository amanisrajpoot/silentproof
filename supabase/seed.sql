-- SEED DATA FOR SILENT PROOF

-- 1. NODES (Sample Operative)
insert into public.nodes (node_id, phone, upi_id, balance, status)
values 
('OP-X921', '+919876543210', 'op.x921@upi', 2400, 'active');

-- 2. TASKS (Silent Network)
insert into public.tasks (id, title, location, type, description, reward, urgency, status)
values 
('SN-901', 'Address Verification', 'Gomti Nagar, Lucknow', 'Physical Verify', 'Confirm if the resident at Sector 4, Plot 12 is active. No contact required.', 500, 'High', 'open'),
('SN-902', 'Entrance Photography', 'Saket, Delhi', 'Visual Support', 'Take 3 clear photos of the main entrance and parking lot of Rectangle One.', 800, 'Standard', 'open'),
('SN-903', 'Document Drop', 'Indiranagar, Bangalore', 'Logistics', 'Drop a sealed envelope (provided) at the reception of Tech Park Alpha.', 400, 'Standard', 'open'),
('SN-904', 'Vehicle Spotting', 'Bandra West, Mumbai', 'Surveillance', 'Verify presence of vehicle MH-02-AB-XXXX at designated location between 2 PM - 4 PM.', 1200, 'High', 'open');

-- 3. SERVICES
insert into public.services (slug, title, description, icon, cta, features, process)
values 
('matrimonial', 'Matrimonial Check', 'Ensuring clarity and trust before life biggest commitment.', 'UserCheck', 'Secure Your Future', '["Character Assessment", "Financial Verification", "Family Background", "Social Audit"]'::jsonb, '["Secure Consult", "Field Investigation", "Evidence Collection", "Final Report"]'::jsonb),
('corporate', 'Corporate Fraud', 'Protecting business interests through due diligence and asset tracing.', 'Building2', 'Protect Your Business', '["Employee Theft", "IP Protection", "Competitor Intel", "Supply Chain Verify"]'::jsonb, '["Risk Assessment", "Internal Audit", "Forensics", "Legal Reporting"]'::jsonb),
('background', 'Person Search', 'Comprehensive background checks for high-stakes hiring.', 'Search', 'Verify Now', '["Criminal Records", "Degree Verification", "Employment Validation", "Address Proofing"]'::jsonb, '["Doc Submission", "Database Search", "Physical Verify", "Status Report"]'::jsonb),
('surveillance', 'Pro Surveillance', 'High-discretion physical and digital monitoring.', 'EyeOff', 'Start Surveillance', '["24/7 Monitoring", "GPS Tracking", "Video Logs", "Counter-Surveillance"]'::jsonb, '["Case Mapping", "Field Deployment", "Real-time Updates", "Case Closing"]'::jsonb);

-- 4. LOCATIONS
insert into public.locations (slug, city, description, phone)
values 
('delhi', 'Delhi NCR', 'Our primary hub for Northern India investigations and high-court legal verifications.', '+91 11 4XXX XXXX'),
('lucknow', 'Lucknow', 'Leading investigative firm in the capital of Uttar Pradesh, specializing in civil disputes.', '+91 522 4XXX XXXX'),
('bangalore', 'Bangalore', 'Technical surveillance and I.P. infringement specialists in the tech capital.', '+91 80 4XXX XXXX'),
('mumbai', 'Mumbai', 'Financial fraud and corporate espionage response team.', '+91 22 4XXX XXXX');

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
