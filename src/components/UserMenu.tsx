import React from 'react';
import { BsHeadphones } from 'react-icons/bs';
import { FaMicrophone } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';

const UserMenu = () => {
	return (
		<section className="flex flex-grow justify-between items-center">
			<div className="hover:bg-discord-gray/20 rounded-md p-2 -mr-2">
				<FaMicrophone size={18} />
			</div>
			<div className="hover:bg-discord-gray/20 rounded-md p-2 -mx-2">
				<BsHeadphones size={18} />
			</div>
			<div className="hover:bg-discord-gray/20 rounded-md p-2 -ml-2">
				<FiSettings size={18} />
			</div>
		</section>
	);
};

export default UserMenu;
