import { FC, ReactNode } from 'react';
import InnerBar from './InnerBar';
import SideBar from './SideBar';
import TopBar from './TopBar';
import { FirestoreProvider, useFirebaseApp } from 'reactfire';
import { getFirestore } from 'firebase/firestore';

const Wrapper: FC<{ children: ReactNode }> = ({ children }) => {
	const firestore = getFirestore(useFirebaseApp());

	return (
		<FirestoreProvider sdk={firestore}>
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
		</FirestoreProvider>
	);
};

export default Wrapper;
