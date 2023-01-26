import { FC, ReactNode } from 'react';
import InnerBar from './InnerBar';
import SideBar from './SideBar';
import TopBar from './TopBar';

const Wrapper: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<main className="flex">
			<section>
				<SideBar />
			</section>
			<section className="flex flex-col flex-grow">
				<TopBar />
				<div className="flex flex-grow">
					<InnerBar />
					<div className="p-2">{children}</div>
				</div>
			</section>
		</main>
	);
};

export default Wrapper;
