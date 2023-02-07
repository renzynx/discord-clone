import { FC, InputHTMLAttributes } from 'react';

type InputProps = {
	label?: string;
	error?: string;
	compact?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

const Input: FC<InputProps> = ({ label, compact, ...props }) => {
	return (
		<div className="w-full">
			<label
				className={`block text-[12px] tracking-[.02em] leading-[16px] mb-2 font-bold text-discord-input-label select-none uppercase ${
					props.error ? 'text-rose-400 mr-2' : ''
				}`}
			>
				{label}
				{props.required && <span className="text-discord-red ml-1">*</span>}
				{props.error && (
					<span className="text-rose-400 normal-case ml-1 space-x-2 font-normal italic">
						- {props.error}
					</span>
				)}
			</label>
			<input
				{...props}
				className={`outline-none bg-transparent ${
					compact ? 'p-1 text-sm' : 'p-2'
				} shadow-md rounded-sm w-full bg-discord-input-background border-none active:border-none focus:border-none ${
					props.className
				}`}
			/>
		</div>
	);
};

export default Input;
