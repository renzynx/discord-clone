import React, { FC, ReactNode, useState } from 'react';
import ggsans from '@/lib/fonts/ggsans';
import dynamic from 'next/dynamic';

const Portal = dynamic(() => import('@/components/Portal'), { ssr: false });

type TooltipProps = {
	title: string;
	children: ReactNode;
	direction: 'left' | 'right' | 'top' | 'bottom';
};

// TODO: Figure out how to make the tooltip centered on the element

const Tooltip: FC<TooltipProps> = ({ children, title, direction }) => {
	const [open, setOpen] = useState(false);
	const [coords, setCoords] = useState({ x: 0, y: 0 });
	let className;

	switch (direction) {
		case 'left':
			className =
				'after:-mr-[5px] origin-right right-16 after:border-t-transparant after:border-r-transparent after:border-b-transparent after:border-l-black after:left-[100%] after:top-[40%] top-1/2 -translate-y-1/2';
			break;
		case 'right':
			className =
				'after:right-[100%] after:top-[40%] left-16 origin-left after:border-t-transparent after:border-r-black after:border-b-transparent after:border-l-transparent';
			break;
		case 'top':
			className =
				'after:top-[100%] after:right-[40%] origin-bottom after:border-b-transparent after:border-r-transparent after:border-t-black after:border-l-transparent left-[50%]';
			break;
		case 'bottom':
			className =
				'after:bottom-full after:right-[40%] after:-ml-[5px] origin-top top-16 after:border-t-transparent after:border-r-transparent after:border-b-black after:border-l-transparent';
			break;
	}

	return (
		<>
			<div
				onMouseOver={(e) => {
					const rect = e.currentTarget.getBoundingClientRect();
					switch (direction) {
						case 'left':
							setCoords({
								x: rect.x - rect.width,
								y: rect.y,
							});
							break;
						case 'right':
							setCoords({
								x: rect.x + rect.width,
								y: rect.y,
							});
							break;
						case 'top':
							setCoords({
								x: rect.x - rect.width / 2,
								y: rect.y - rect.height * 1.5,
							});
							break;
						case 'bottom':
							setCoords({
								x: rect.x - rect.width / 2,
								y: rect.y + rect.height * 1.5,
							});
							break;
					}
					setOpen(true);
				}}
				onMouseOut={() => {
					setOpen(false);
				}}
			>
				{children}
				{open && (
					<Portal>
						<span
							style={{ left: coords.x, top: coords.y }}
							className={`${className} ${ggsans.className} animate-pop-in text-discord-white/90 text-sm after:absolute font-semibold w-auto min-w-max absolute rounded-md shadow-md m-1 p-2 flex justify-center items-center bg-black transition-all after:border-[5px] after:border-solid after:content-['']`}
						>
							{title}
						</span>
					</Portal>
				)}
			</div>
		</>
	);
};

export default Tooltip;
