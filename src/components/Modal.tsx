import { FC, ReactNode } from 'react';
import Portal from '@/components/Portal';
import ggsans from '@/lib/fonts/ggsans';

type ModalProps = {
	children: ReactNode;
	open: boolean;
	onClose: () => void;
};

const Modal: FC<ModalProps> = ({ children, open, onClose }) => {
	return open ? (
		<Portal>
			<div className="w-screen h-screen bg-black opacity-80 absolute inset-0"></div>

			<div
				className={`${ggsans.className} absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[440px] h-fit flex flex-col bg-discord-chat text-white rounded-md shadow-md`}
			>
				<div className="flex-grow flex justify-end mt-3">
					<button
						onClick={onClose}
						className="text-discord-white/90 hover:text-discord-white/100 focus:outline-none mr-2"
					>
						<svg
							className="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</button>
				</div>
				{children}
			</div>
		</Portal>
	) : null;
};

export default Modal;
