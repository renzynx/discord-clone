import style from '@/styles/tooltip.module.css';
import { ComponentProps, FC, ReactNode } from 'react';

type GuildProps = {
	active?: boolean;
	tooltip: string;
	icon?: ReactNode;
	iconURL?: string;
} & ComponentProps<'div'>;

const Guild: FC<GuildProps> = ({ active, tooltip, icon, ...props }) => {
	return (
		<div
			{...props}
			className="relative w-full flex justify-center group z-[99999]"
		>
			<div
				className={`${
					active ? 'h-10 top-1' : 'h-2 top-5'
				} absolute left-0 bg-discord-white h-8 top-2 w-1 rounded-r-lg`}
			/>
			<div
				className={`w-12 h-12 rounded-3xl flex justify-center items-center hover:rounded-xl hover:bg-discord-blurple duration-200 ease-linear transition-all overflow-hidden cursor-pointer ${
					active ? 'bg-discord-blurple rounded-2xl' : 'bg-discord-gray/20'
				}`}
			>
				{icon ? icon : tooltip.charAt(0)}
				<span
					className={`z-[9999] text-sm font-semibold w-auto min-w-max absolute rounded-md shadow-md left-[75px] m-1 p-2 bg-black origin-left scale-0 group-hover:scale-100 transition-all after:absolute after:top-[40%] after:right-[100%] after:-ml-[5px] after:border-[5px] after:border-solid ${style.tooltip}`}
				>
					{tooltip}
				</span>
			</div>
		</div>
	);
};

export default Guild;
