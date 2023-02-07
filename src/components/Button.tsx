import { ReactNode, ButtonHTMLAttributes, FC } from 'react';

type ButtonProps = {
	children: ReactNode;
	fullWidth?: boolean;
	color?: 'primary' | 'secondary' | 'gray' | 'success';
	compact?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({
	children,
	fullWidth,
	color = 'primary',
	compact,
	...props
}) => {
	let className =
		'rounded-sm transition-all text-ellipsis min-h-[2.5rem] min-w-[5rem] ';
	switch (color) {
		case 'primary':
			className += 'bg-discord-blurple hover:bg-discord-blurple/60';
			break;
		case 'secondary':
			className += 'bg-discord-gray/20 hover:bg-discord-gray/40';
			break;
		case 'gray':
			className += 'bg-discord-gray/10 hover:bg-discord-gray/20';
			break;
		case 'success':
			className += 'bg-discord-btn-success hover:bg-discord-btn-success/60';
	}

	if (compact) className += ' text-sm font-medium py-2 px-1';
	if (!compact) className += ' py-[10px] px-4';
	if (fullWidth) className += ' w-full';

	return (
		<button {...props} className={`${className} ${props.className}`}>
			{children}
		</button>
	);
};

export default Button;
