import Tooltip from '@/components/Tooltip';
import { db } from '@/lib/firebase';
import { Guild as GuildType } from '@/lib/types';
import useUserStore from '@/store/user';
import { getDoc, doc } from 'firebase/firestore';
import Guild from './Guild';
import { useEffect, useState } from 'react';
import { FaDiscord } from 'react-icons/fa';
import { BsPlus } from 'react-icons/bs';
import CreateServerModal from './CreateServerModal';

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
	const loading = useUserStore((state) => state.loading);
	const user = useUserStore((state) => state.user);
	const [guilds, setGuilds] = useState<GuildType[]>([]);
	const [open, setOpen] = useState(false);

	useEffect(() => {
		const fetchUsers = async () => {
			if (!user || loading) {
				console.log('no user or loading');
				return;
			}

			const snapshot = await getDoc(doc(db, 'users', user.uid));

			if (!snapshot.exists()) {
				console.log('no user');
				return;
			}

			setGuilds(snapshot.data().guilds as GuildType[]);
		};

		fetchUsers();

		return () => {};
	}, [user, loading]);

	const toggleOpen = () => {
		setOpen(!open);
	};

	const close = () => {
		setOpen(false);
	};

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
			{guilds.map((_, i) => (
				<Tooltip key={i} title={generateRandomName()} direction="right">
					<Guild icon={generateRandomName()} />
				</Tooltip>
			))}
			<CreateServerModal
				onClose={close}
				open={open}
				controller={
					<Tooltip title="Add a server" direction="right">
						<Guild
							onClick={toggleOpen}
							sideLine={false}
							hoverColor="hover:bg-discord-green"
							icon={
								<BsPlus
									size={35}
									className="text-discord-green hover:text-discord-white transition-all"
								/>
							}
						/>
					</Tooltip>
				}
			/>
		</nav>
	);
};

export default SideBar;
