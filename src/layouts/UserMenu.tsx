/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import useUserStore from '@/store/user';
import Image from 'next/image';
import { BsHeadphones } from 'react-icons/bs';
import { FaMicrophone } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';
import Tooltip from '../components/Tooltip';

const UserMenu = () => {
	const user = useUserStore((state) => state.user);
	const loading = useUserStore((state) => state.loading);

	return (
		<section className="bg-discord-user-background h-14 p-2 w-full flex items-center">
			<div className="flex flex-grow items-center cursor-pointer hover:bg-discord-gray/20 rounded-md">
				{loading || !user ? (
					<div className="animate-pulse rounded-full w-[32px] h-[32px] bg-discord-gray/20" />
				) : (
					<Image
						src={
							user?.photoURL ??
							`https://api.dicebear.com/5.x/identicon/svg?seed=${user.uid}`
						}
						width={32}
						height={32}
						alt="User Avatar"
						className="rounded-full"
					/>
				)}
				<div className="ml-2 flex-wrap">
					{loading || !user ? (
						<>
							<div className="animate-pulse rounded-full w-[80px] h-[10px] bg-discord-gray/20 mb-1" />

							<div className="animate-pulse rounded-full w-[50px] h-[10px] bg-discord-gray/20" />
						</>
					) : (
						<>
							<p className="font-semibold text-sm break-all">
								{user?.displayName?.split('#').shift()}
							</p>
							<p className="text-discord-gray text-[11px] -mt-[2px]">
								#{user?.displayName?.split('#').pop()}
							</p>
						</>
					)}
				</div>
			</div>
			<div className="flex items-center">
				<Tooltip title="Mute" direction="top">
					<div className="hover:bg-discord-gray/20 rounded-md p-2 cursor-pointer">
						<FaMicrophone size={18} />
					</div>
				</Tooltip>
				<Tooltip title="Deafen" direction="top">
					<div className="hover:bg-discord-gray/20 rounded-md p-2 cursor-pointer">
						<BsHeadphones size={18} />
					</div>
				</Tooltip>

				<Tooltip title="Settings" direction="top">
					<div className="hover:bg-discord-gray/20 rounded-md p-2  cursor-pointer">
						<FiSettings size={18} />
					</div>
				</Tooltip>
			</div>
		</section>
	);
};

export default UserMenu;
