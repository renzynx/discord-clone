import { FC, SelectHTMLAttributes } from 'react';

type Option = {
	value: string;
	label: string;
};

type SelectProps = {
	label?: string;
	options: Option[];
} & SelectHTMLAttributes<HTMLSelectElement>;

const Select: FC<SelectProps> = ({ label, options, ...props }) => {
	return (
		<div className="w-full">
			<label className="block text-[12px] tracking-[.02em]  leading-[16px] mb-2 font-bold text-discord-input-label select-none uppercase">
				{label}
			</label>
			<select
				{...props}
				style={{
					WebkitAppearance: 'none',
					MozAppearance: 'none',
					appearance: 'none',
				}}
				className="outline-none p-2 shadow-md rounded-sm w-full bg-discord-input-background border-none active:border-none focus:border-none text-ellipsis"
			>
				{options.map(({ label, value }, idx) => (
					<option className="font-sans bg-discord-chat" key={idx} value={value}>
						{label}
					</option>
				))}
			</select>
		</div>
	);
};

export default Select;
