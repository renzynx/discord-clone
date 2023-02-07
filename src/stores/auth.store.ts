import { Database } from '@/generated/supabase';
import { create } from 'zustand';

type User = Database['public']['Tables']['profiles']['Row'];

interface AuthStore {
	user: User | null;
	setUser: (user: User) => void;
	loading: boolean;
	setLoading: (loading: boolean) => void;
}

const useAuthStore = create<AuthStore>((set) => ({
	user: null,
	setUser: (user: User) => set({ user }),
	loading: true,
	setLoading: (loading: boolean) => set({ loading }),
}));

export default useAuthStore;
