import DMPage from '@/components/DMPage';
import createUrqlClient from '@/lib/functions/createUrqlClient';
import { withUrqlClient } from 'next-urql';

const DM = () => {
	return <DMPage />;
};

export default withUrqlClient(createUrqlClient, { ssr: false })(DM);
