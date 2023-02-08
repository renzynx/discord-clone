import Input from './Input';

const DMPage = () => {
	return (
		<div className="flex h-full gap-2">
			<div className="w-9/12">
				<div className="max-w-[95%] mx-auto">
					<Input className="py-1" placeholder="Search" />
				</div>
			</div>
			<div className="h-full w-[1px] bg-discord-gray/20">&nbsp;</div>
			<div className="px-2 py-5">
				<h1 className="text-xl font-bold">Active now</h1>
			</div>
		</div>
	);
};

export default DMPage;
