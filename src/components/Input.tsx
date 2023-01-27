import { FC, InputHTMLAttributes } from 'react';

type InputProps = {
	label?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Input: FC<InputProps> = ({ label, ...props }) => {
	return (
		<div className="w-full">
			<label className="block text-[12px] tracking-[.02em]  leading-[16px] mb-2 font-bold text-discord-input-label select-none uppercase">
				{label}
			</label>
			<input
				{...props}
				className="outline-none bg-transparent p-2 shadow-md rounded-sm w-full bg-discord-input-background border-none active:border-none focus:border-none"
			/>
		</div>
	);
};

export default Input;
