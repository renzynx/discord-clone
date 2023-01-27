import { create } from 'zustand';
import { User } from 'firebase/auth';

interface UserState {
	user: {
		uid: User['uid'];
		email: User['email'];
		displayName: User['displayName'];
		photoURL: User['photoURL'];
	} | null;
	loading: boolean;
	setUser: (user: UserState['user']) => void;
	setLoading: (loading: UserState['loading']) => void;
}

const useUserStore = create<UserState>((set) => ({
	user: null,
	loading: true,
	setUser: (user: UserState['user']) => set({ user }),
	setLoading: (loading: UserState['loading']) => set({ loading }),
}));

export default useUserStore;
