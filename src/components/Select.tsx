import { FC, SelectHTMLAttributes } from 'react';

type Option = {
	value: string;
	label: string;
};

type SelectProps = {
	label?: string;
	options: Option[];
} & SelectHTMLAttributes<HTMLSelectElement>;

const Select: FC<SelectProps> = ({ label, options }) => {
	return (
		<div className="w-full">
			<label className="block text-[12px] tracking-[.02em]  leading-[16px] mb-2 font-bold text-discord-input-label select-none uppercase">
				{label}
			</label>
			<select className="outline-none bg-transparent p-2 shadow-md rounded-sm w-full bg-discord-input-background border-none active:border-none focus:border-none">
				{options.map(({ label, value }, idx) => (
					<option key={idx} value={value}>
						{label}
					</option>
				))}
			</select>
		</div>
	);
};

export default Select;
