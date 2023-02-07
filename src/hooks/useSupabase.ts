import { Database } from '@/generated/supabase';
import { useSupabaseClient } from '@supabase/auth-helpers-react';

export default function useSupabase() {
	return useSupabaseClient<Database>();
}
