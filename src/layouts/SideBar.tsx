import Guild from '@/components/Guild';
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
			className="w-[72px] shadow-lg bg-discord-dark h-screen flex-shrink-0 overflow-y-scroll flex flex-col gap-2 py-3"
			style={{ scrollbarWidth: 'none' }}
		>
			<Guild active tooltip="Direct Messages" icon={<FaDiscord size={29} />} />
			<div className="w-8 h-[3px] bg-discord-chat my-[1px] rounded-full mx-auto">
				&nbsp;
			</div>
			{[...Array(15)].map((_, i) => (
				<Guild key={i} tooltip={generateRandomName()} />
			))}
		</nav>
	);
};

export default SideBar;
