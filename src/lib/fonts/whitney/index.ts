import localFont from '@next/font/local';

const whitney = localFont({
	src: [
		{
			path: './Regular.woff',
			weight: '400',
			style: 'normal',
		},
		{
			path: './SemiBold.woff',
			weight: '500',
			style: 'normal',
		},
		{
			path: './Semibold.woff',
			weight: '600',
			style: 'normal',
		},
		{
			path: './Bold.woff',
			weight: '700',
			style: 'normal',
		},
	],
	variable: '--font-whitney',
});

export default whitney;
