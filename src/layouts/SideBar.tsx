import Guild from '@/layouts/Guild';
import Tooltip from '@/components/Tooltip';
import { FaDiscord } from 'react-icons/fa';

const generateRandomName = () => {
	const names = [
		'hello',
		'world',
		'foo',
		'bar',
		'baz',
		'qux',
		'quux',
		'corge',
		'grault',
		'garply',
		'waldo',
		'fred',
		'plugh',
		'xyzzy',
		'thud',
	];
	return names[Math.floor(Math.random() * names.length)];
};

const SideBar = () => {
	return (
		<nav
			className="w-[72px] shadow-lg bg-discord-dark h-screen flex-shrink-0 flex flex-col gap-2 py-3 select-none overflow-y-scroll overflow-x-visible z-[999]"
			style={{ scrollbarWidth: 'none' }}
		>
			<Tooltip title="Direct Messages" direction="right">
				<Guild active icon={<FaDiscord size={29} />} />
			</Tooltip>
			<div className="w-8 h-[3px] bg-discord-chat my-[1px] rounded-full mx-auto">
				&nbsp;
			</div>
			{[...Array(15)].map((_, i) => (
				<Tooltip key={i} title={generateRandomName()} direction="right">
					<Guild icon={generateRandomName()} />
				</Tooltip>
			))}
		</nav>
	);
};

export default SideBar;
