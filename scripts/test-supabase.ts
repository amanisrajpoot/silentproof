
import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import path from 'path';

// Load environment variables from .env.local
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

console.log("---------------------------------------------------");
console.log("Supabase Debug Script");
console.log("---------------------------------------------------");
console.log(`URL: ${supabaseUrl ? supabaseUrl.substring(0, 20) + '...' : 'UNDEFINED'}`);
console.log(`Key: ${supabaseKey ? supabaseKey.substring(0, 10) + '...' : 'UNDEFINED'}`);

if (!supabaseUrl || !supabaseKey) {
    console.error("ERROR: Missing Supabase credentials.");
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function testConnection() {
    const headers = {
        'apikey': supabaseKey!,
        'Authorization': `Bearer ${supabaseKey}`,
        'Content-Type': 'application/json'
    };

    // 1. CONTROL TEST: Case Studies
    console.log("\n--- TEST 1: Case Studies (Control) ---");
    try {
        const response = await fetch(`${supabaseUrl}/rest/v1/case_studies?select=id,title&limit=1`, { headers });
        if (response.ok) {
            const data = await response.json();
            console.log(`✅ Case Studies Success: Found ${data.length}`);
        } else {
            console.error(`❌ Case Studies Failed: ${response.status} ${response.statusText}`);
        }
    } catch (e: any) { console.error("❌ Case Studies Network Error:", e.message); }

    // 2. EXISTENCE TEST: Services HEAD
    console.log("\n--- TEST 2: Services Table Existence (HEAD) ---");
    try {
        const response = await fetch(`${supabaseUrl}/rest/v1/services`, { method: 'HEAD', headers });
        if (response.ok) {
            console.log(`✅ Services Exists. Status: ${response.status}`);
        } else {
            console.error(`❌ Services HEAD Failed: ${response.status} ${response.statusText}`);
        }
    } catch (e: any) { console.error("❌ Services HEAD Network Error:", e.message); }

    // 3. DATA TEST: Services Fetch Limit 1
    console.log("\n--- TEST 3: Services Fetch (Limit 1) ---");
    try {
        const response = await fetch(`${supabaseUrl}/rest/v1/services?select=id,title&limit=1`, { headers });
        if (response.ok) {
            const data = await response.json();
            console.log(`✅ Services Fetch Success: Found ${data.length}`);
            if (data.length) console.log("   Item:", data[0]);
        } else {
            console.error(`❌ Services Fetch Failed: ${response.status} ${response.statusText}`);
            const text = await response.text();
            console.error("   Response:", text.substring(0, 100));
        }
    } catch (e: any) { console.error("❌ Services Fetch Network Error:", e.message); }

    // 4. LOCATIONS
    console.log("\n--- TEST 4: Locations (Control) ---");
    try {
        const response = await fetch(`${supabaseUrl}/rest/v1/locations?select=id,city&limit=1`, { headers });
        if (response.ok) {
            const data = await response.json();
            console.log(`✅ Locations Success: Found ${data.length}`);
        } else {
            console.error(`❌ Locations Failed: ${response.status} ${response.statusText}`);
        }
    } catch (e: any) { console.error("❌ Locations Network Error:", e.message); }
}

testConnection();
