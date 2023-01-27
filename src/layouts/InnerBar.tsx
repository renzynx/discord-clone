import UserMenu from '@/layouts/UserMenu';

const InnerBar = () => {
	return (
		<nav className="min-w-[240px] h-[calc(100vh-3rem)] flex flex-col items-center justify-center bg-discord-sidebar ">
			<section className="flex-grow">Items</section>

			<UserMenu />
		</nav>
	);
};

export default InnerBar;
