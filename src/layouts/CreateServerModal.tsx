import Button from '@/components/Button';
import NavItem from '@/components/NavItem';
import dynamic from 'next/dynamic';
import { FC, ReactNode, useState } from 'react';
const Modal = dynamic(() => import('@/components/Modal'), { ssr: false });
import { FiChevronRight } from 'react-icons/fi';

const CreateServerModal: FC<{
	open: boolean;
	onClose: () => void;
	controller: ReactNode;
}> = ({ controller, open, onClose }) => {
	return (
		<div>
			<Modal open={open} onClose={onClose}>
				<div className="-mt-2 select-none flex flex-col justify-between gap-2 py-1 text-discord-white">
					<div className="px-3 text-center space-y-2 mx-auto max-w-[440px]">
						<h2 className="text-2xl font-bold">Create a server</h2>
						<p className="pb-2">
							Your server is where you and your friends hang out. Make yours and
							start talking.
						</p>
						<NavItem
							text="Create my own"
							image="/create_server.svg"
							icon={<FiChevronRight className="ml-auto" size={27} />}
						/>
					</div>

					<div className="space-y-3 px-3 py-2 max-h-[16rem] overflow-y-scroll overflow-x-visible min-w-full">
						<p className="font-bold text-xs uppercase text-left -mb-2">
							Start from a template
						</p>
						<NavItem
							text="Gaming"
							image="/gaming.svg"
							icon={<FiChevronRight className="ml-auto" size={27} />}
						/>

						<NavItem
							text="School Club"
							image="/school_club.svg"
							icon={<FiChevronRight className="ml-auto" size={27} />}
						/>
						<NavItem
							text="Study Group"
							image="/study_group.svg"
							icon={<FiChevronRight className="ml-auto" size={27} />}
						/>
						<NavItem
							text="Friends"
							image="/friend.svg"
							icon={<FiChevronRight className="ml-auto" size={27} />}
						/>

						<NavItem
							text="Artists & Creators"
							image="/artist_creator.svg"
							icon={<FiChevronRight className="ml-auto" size={27} />}
						/>

						<NavItem
							text="Local Community"
							image="/local_community.svg"
							icon={<FiChevronRight className="ml-auto" size={27} />}
						/>
					</div>
				</div>

				<div className="flex justify-center items-center left-0 bottom-0 bg-discord-black w-full flex-wrap space-y-2 p-5 select-none">
					<h3 className="text-xl font-semibold">Have an invite already?</h3>
					<Button color="gray" compact fullWidth>
						<p className="text-sm font-medium">Join a server</p>
					</Button>
				</div>
			</Modal>
			{controller}
		</div>
	);
};

export default CreateServerModal;
