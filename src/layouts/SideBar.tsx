import Tooltip from '@/components/Tooltip';
import useAuthStore from '@/stores/auth.store';
import { useEffect, useState } from 'react';
import { FaDiscord } from 'react-icons/fa';
import { BsPlus } from 'react-icons/bs';
import CreateServerModal from '@/components/CreateServerModal';
import useSupabase from '@/hooks/useSupabase';
import { Database } from '@/generated/supabase';
import Guild from '../components/Guild';

type GuildType = Database['public']['Tables']['guilds']['Row'];

const SideBar = () => {
	const loading = useAuthStore((state) => state.loading);
	const user = useAuthStore((state) => state.user);
	const [guilds, setGuilds] = useState<{ guilds: GuildType }[]>([]);
	const [open, setOpen] = useState(false);
	const supabase = useSupabase();
	const [fetching, setFetching] = useState(true);

	useEffect(() => {
		if (!user || loading) {
			return;
		}

		supabase
			.from('members')
			.select(
				`
				guilds (
					id,
					name,
					icon_url
				)
				`
			)
			.eq('user_id', user.id)
			.then(({ data, error }) => {
				if (error || !data) {
					return;
				}

				setGuilds(data as unknown as any);

				setFetching(false);
			});
	}, [loading, supabase, user]);

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
			{fetching
				? 'fetching...'
				: guilds.map(({ guilds: guild }, i) => (
						<Tooltip key={i} title={guild.name} direction="right">
							<Guild icon={guild.name} iconURL={guild.icon_url} />
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
