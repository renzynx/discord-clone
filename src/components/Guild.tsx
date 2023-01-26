import { ComponentProps, FC, ReactNode } from 'react';

type GuildProps = {
	active?: boolean;
	icon: ReactNode | string;
	iconURL?: string;
} & ComponentProps<'div'>;

const Guild: FC<GuildProps> = ({ active, icon, iconURL, ...props }) => {
	return (
		<div {...props} className="w-full flex justify-center relative group">
			<div
				className={`${
					active
						? 'h-10 top-1'
						: 'h-2 top-5 group-hover:h-5 group-hover:top-3 transition-all'
				} absolute left-0 bg-discord-white w-1 rounded-r-lg`}
			/>
			<div
				className={`w-12 h-12 rounded-3xl flex justify-center items-center hover:rounded-xl hover:bg-discord-blurple duration-200 ease-linear transition-all overflow-hidden cursor-pointer ${
					active ? 'bg-discord-blurple rounded-2xl' : 'bg-discord-gray/20'
				}`}
			>
				{iconURL ? iconURL : typeof icon === 'string' ? icon[0] : icon}
			</div>
		</div>
	);
};

export default Guild;
