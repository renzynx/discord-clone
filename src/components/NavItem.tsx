import Image from 'next/image';
import { ComponentPropsWithoutRef, FC, ReactNode } from 'react';

type NavItemProps = {
	text: string;
	icon: ReactNode;
	image: string;
} & ComponentPropsWithoutRef<'div'>;

const NavItem: FC<NavItemProps> = ({ icon, text, image, ...props }) => {
	return (
		<div
			{...props}
			className="font-bold flex items-center ring-1 ring-discord-gray/10 p-2 rounded-md hover:bg-discord-black/70 cursor-pointer motion-safe:transition-all"
		>
			<div className="space-x-2 flex items-center">
				<Image src={image} width={50} height={50} alt="" />
				<p>{text}</p>
			</div>
			{icon}
		</div>
	);
};

export default NavItem;
