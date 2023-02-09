import { cacheExchange } from '@urql/exchange-graphcache';
import { NextUrqlClientConfig } from 'next-urql';
import { defaultExchanges } from 'urql';
import isServer from './isServer';

const createUrqlClient: NextUrqlClientConfig = (ssrExchange, ctx) => {
	let cookie = '';

	if (isServer()) {
		cookie = ctx?.req?.headers?.cookie!;
	}

	return {
		url: process.env.NEXT_PUBLIC_SUPABASE_URL + '/graphql/v1',
		fetchOptions: {
			headers: cookie ? { cookie } : undefined,
		},
		exchanges: [...defaultExchanges, cacheExchange()],
	};
};

export default createUrqlClient;
