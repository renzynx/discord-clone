/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import { BsHeadphones } from 'react-icons/bs';
import { FaMicrophone } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';
import Tooltip from '../components/Tooltip';

const UserMenu = () => {
	return (
		<section className="bg-discord-user-background h-14 p-2 w-full flex items-center">
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
