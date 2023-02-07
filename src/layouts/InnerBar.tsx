import IconFriend from '@/components/IconFriend';
import IconNitro from '@/components/IconNitro';
import UserMenu from '@/layouts/UserMenu';
import { useRouter } from 'next/router';

const items = [
	{
		name: 'Friends',
		icon: <IconFriend />,
	},
	{
		name: 'Nitro',
		icon: <IconNitro />,
	},
];

const DMSection = () => {
	return (
		<ul className="flex flex-col gap-2 w-full p-2">
			{items.map((item, index) => (
				<li
					key={index}
					className="flex items-center gap-4 p-[10px] justify-start w-full rounded-md hover:bg-discord-gray/20 cursor-pointer text-discord-dimmed hover:text-discord-white"
				>
					{item.icon}
					<p className="font-medium">{item.name}</p>
				</li>
			))}
		</ul>
	);
};

const InnerBar = () => {
	const router = useRouter();
	const isDM = router.pathname.includes('@me');

	return (
		<nav className="min-w-[240px] h-[calc(100vh-3rem)] flex flex-col items-center justify-between bg-discord-sidebar">
			{isDM && <DMSection />}

			<UserMenu />
		</nav>
	);
};

export default InnerBar;
