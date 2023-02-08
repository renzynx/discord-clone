import Button from '@/components/Button';
import IconFriend from '@/components/IconFriend';
import Input from '@/components/Input';

const items = ['Online', 'All', 'Pending', 'Blocked'];

const TopBar = () => {
	return (
		<div className="flex">
			<div className="min-w-[240px] w-[240px] h-12 flex items-center justify-center bg-discord-sidebar border-b-2 border-b-discord-dark/80">
				<div className="max-w-[90%] h-full w-full">
					<Input compact placeholder="Find or start a conversation" />
				</div>
			</div>
			<div className="h-full flex flex-grow gap-5 items-center bg-discord-chat border-b-2 border-b-discord-dark/40 pl-2">
				<div className="flex items-center gap-2">
					<IconFriend className="text-discord-dimmed" />
					<p className="font-semibold">Friends</p>
				</div>
				<div className="w-[1px] h-[50%] bg-discord-sidebar">&nbsp;</div>

				<div className="flex items-center gap-8">
					{items.map((item, i) => (
						<p
							key={i}
							className="text-discord-dimmed font-medium cursor-pointer hover:text-discord-white"
						>
							{item}
						</p>
					))}

					<Button compact className="font-medium p-0" color="success">
						Add Friend
					</Button>
				</div>
			</div>
		</div>
	);
};

export default TopBar;
