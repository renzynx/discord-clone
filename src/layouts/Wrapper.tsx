import { FC, ReactNode, useEffect } from 'react';
import InnerBar from './InnerBar';
import SideBar from './SideBar';
import TopBar from './TopBar';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import router from 'next/router';
import useUserStore from '@/store/user';

const Wrapper: FC<{ children: ReactNode }> = ({ children }) => {
	const setUser = useUserStore((state) => state.setUser);
	const setLoading = useUserStore((state) => state.setLoading);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (!user) {
				router.push('/login');
			} else {
				setUser({
					uid: user.uid,
					email: user.email,
					displayName: user.displayName,
					photoURL: user.photoURL,
				});
			}
		});

		setLoading(false);

		return () => unsubscribe();
	}, [setLoading, setUser]);

	return (
		<div className="flex">
			<section>
				<SideBar />
			</section>
			<section className="flex flex-col flex-grow">
				<TopBar />
				<div className="flex flex-grow">
					<InnerBar />
					<div className="p-2">{children}</div>
				</div>
			</section>
		</div>
	);
};

export default Wrapper;
