
"use server";

import { supabase } from "@/lib/supabase";

export async function submitLead(formData: {
    name: string;
    contact_method: string;
    city: string;
    service_type: string;
    message: string;
}) {
    try {
        const { data, error } = await supabase
            .from('leads')
            .insert([{
                ...formData,
                status: 'pending'
            }])
            .select();

        if (error) {
            console.error('Server Action - Lead Insertion Error:', error);
            return { success: false, error: error.message };
        }

        console.log('Server Action - Lead Inserted:', data);
        return { success: true, data };
    } catch (err: any) {
        console.error('Server Action - Unexpected Error:', err);
        return { success: false, error: err.message || 'Unknown error' };
    }
}
