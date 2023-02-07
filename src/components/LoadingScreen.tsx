import { FaDiscord } from 'react-icons/fa';

const LoadingScreen = () => {
	return (
		<div className="flex justify-center items-center w-screen h-screen select-none">
			<div className="flex flex-col items-center justify-between max-w-xs h-screen">
				<div className="flex justify-center pt-10 flex-col items-center h-full">
					<div className="animate-spin mb-10">
						<FaDiscord className="animate" size={80} />
					</div>
					<div className="">
						<p className="text-discord-blue text-center text-xs font-semibold uppercase">
							Did you know
						</p>
						<p className="text-center">
							Discord was almost called Wyvern before we picked our name. Not
							too proud of that one.
						</p>
					</div>
				</div>

				<div className="mb-8 w-full flex flex-col justify-center items-center">
					<p className="text-discord-dimmed text-center text-sm">
						Connection Problem? Let us know!
					</p>
					<div className="flex w-full gap-5 justify-center items-center text-discord-link cursor-pointer">
						<a className="hover:underline">Tweet Us</a>
						<a className="hover:underline">Server Status</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoadingScreen;
