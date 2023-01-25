import { FC, ReactNode } from 'react';
import InnerBar from './InnerBar';
import SideBar from './SideBar';
import TopBar from './TopBar';

const Wrapper: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<main className="flex">
			<SideBar />
			<section className="grid grid-cols-6 flex-grow">
				<TopBar />
				<InnerBar />
				<div className="col-start-2 col-end-7 p-2">{children}</div>
			</section>
		</main>
	);
};

export default Wrapper;
