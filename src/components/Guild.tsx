import Image from 'next/image';
import { ComponentProps, FC, ReactNode } from 'react';

type GuildProps = {
	active?: boolean;
	icon: ReactNode | string;
	iconURL?: string | null;
	hoverColor?: string;
	sideLine?: boolean;
} & ComponentProps<'div'>;

const Guild: FC<GuildProps> = ({
	active,
	icon,
	iconURL,
	hoverColor,
	sideLine = true,
	...props
}) => {
	return (
		<div {...props} className="w-full flex justify-center relative">
			{sideLine && (
				<div
					className={`absolute motion-safe:transition-all duration-300 left-0 bg-discord-white w-1 rounded-r-lg -translate-y-[50%] top-[50%] ${
						active ? 'h-10' : 'h-2 group-hover:h-5'
					} 
				`}
				/>
			)}
			<div
				className={`${
					hoverColor ? hoverColor : 'hover:bg-discord-blurple'
				} w-12 h-12 rounded-3xl flex justify-center items-center hover:rounded-xl duration-200 ease-linear motion-safe:transition-all overflow-hidden cursor-pointer ${
					active ? 'bg-discord-blurple rounded-2xl' : 'bg-discord-gray/20'
				}`}
			>
				{iconURL ? (
					<Image
						src={iconURL}
						alt={typeof icon === 'string' ? icon : 'Guild Icon'}
						className="w-8 h-8 rounded-2xl"
						width={32}
						height={32}
					/>
				) : typeof icon === 'string' ? (
					icon[0]
				) : (
					icon
				)}
			</div>
		</div>
	);
};

export default Guild;
