import { BsHeadphones } from 'react-icons/bs';
import { FaMicrophone } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';
import Tooltip from './Tooltip';

const UserMenu = () => {
	return (
		<section className="flex flex-grow justify-between items-center ml-6">
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
		</section>
	);
};

export default UserMenu;
