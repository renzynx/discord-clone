import { FC, ReactNode, useEffect } from 'react';
import InnerBar from './InnerBar';
import SideBar from './SideBar';
import TopBar from './TopBar';
import router from 'next/router';
import dynamic from 'next/dynamic';
import useAuthStore from '@/stores/auth.store';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import useSupabase from '@/hooks/useSupabase';

const LoadingScreen = dynamic(() => import('@/components/LoadingScreen'), {
	ssr: false,
});

const RootLayout: FC<{ children: ReactNode }> = ({ children }) => {
	const { setUser, setLoading, loading, user } = useAuthStore((state) => state);
	const supabase = useSupabase();

	useEffect(() => {
		supabase.auth
			.getSession()
			.then(({ data, error }) => {
				if (error) {
					router.push('/login');
					return;
				}

				supabase
					.from('profiles')
					.select('*')
					.eq('id', data?.session?.user?.id)
					.single()
					.then(({ data, error }) => {
						if (!data || error) {
							router.push('/login');
						} else {
							console.log(data);
							setUser(data);
						}
					});
			})
			.finally(() => setLoading(false));
	}, [setLoading, setUser, supabase]);

	return loading || !user ? (
		<LoadingScreen />
	) : (
		<div className="flex">
			<section>
				<SideBar />
			</section>
			<section className="flex flex-col flex-grow">
				<TopBar />
				<div className="flex flex-grow">
					<InnerBar />
					<div className="p-2 flex-grow">{children}</div>
				</div>
			</section>
		</div>
	);
};

export default RootLayout;
