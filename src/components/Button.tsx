import { ReactNode, ButtonHTMLAttributes, FC } from 'react';

type ButtonProps = {
	children: ReactNode;
	fullWidth?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({ children, fullWidth, ...props }) => {
	return (
		<button
			{...props}
			className={`bg-discord-blurple ${
				fullWidth && 'flex-grow w-full'
			} py-[10px] px-1 rounded-sm hover:bg-discord-blurple/60 transition-all text-ellipsis`}
		>
			{children}
		</button>
	);
};

export default Button;
