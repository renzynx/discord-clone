/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import UserMenu from '@/components/UserMenu';

const InnerBar = () => {
	return (
		<nav className="h-[calc(100vh-3rem)] col-start-1 col-end-2 flex flex-col items-center justify-center bg-discord-sidebar ">
			<section className="flex-grow">Items</section>
			<section className="bg-discord-user-background h-12 p-2 w-full flex items-center justify-between">
				<div className="flex flex-grow items-center cursor-pointer hover:bg-discord-gray/20 rounded-md">
					<img
						src="https://cdn.discordapp.com/avatars/610692482312830978/483d77c397a64e4c19065360f4560571.webp?size=40"
						className="rounded-full w-[32px] h-[32px]"
					/>
					<div className="ml-2 flex-wrap">
						<p className="font-semibold text-sm break-all">renzynx</p>
						<p className="text-discord-gray text-[11px] -mt-[2px]">#0001</p>
					</div>
				</div>
				<UserMenu />
			</section>
		</nav>
	);
};

export default InnerBar;
