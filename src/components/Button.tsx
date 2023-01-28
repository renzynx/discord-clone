import { ReactNode, ButtonHTMLAttributes, FC } from 'react';

type ButtonProps = {
	children: ReactNode;
	fullWidth?: boolean;
	color?: 'primary' | 'secondary' | 'gray';
	compact?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({
	children,
	fullWidth,
	color = 'primary',
	compact,
	...props
}) => {
	let className = '';
	switch (color) {
		case 'primary':
			className = 'bg-discord-blurple hover:bg-discord-blurple/60';
			break;
		case 'secondary':
			className = 'bg-discord-gray/20 hover:bg-discord-gray/40';
			break;
		case 'gray':
			className = 'bg-discord-gray/10 hover:bg-discord-gray/20';
			break;
	}

	return (
		<button
			{...props}
			className={`${className} ${fullWidth && 'flex-grow w-full'} ${
				compact ? 'py-2 px-1' : 'py-[10px] px-4'
			} rounded-sm  transition-all text-ellipsis min-h-[2.5rem] min-w-[5rem]`}
		>
			{children}
		</button>
	);
};

export default Button;
