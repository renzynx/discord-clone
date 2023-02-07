import { FC, ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
type PortalProps = {
	children: ReactNode;
};

const Portal: FC<PortalProps> = ({ children }) => {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);

		return () => setMounted(false);
	}, []);

	return mounted
		? createPortal(children, document.querySelector('#portal')!)
		: null;
};

export default Portal;
