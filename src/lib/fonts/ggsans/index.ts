import localFont from '@next/font/local';

const ggsans = localFont({
	src: [
		{
			path: './Normal.woff2',
			weight: '400',
			style: 'normal',
		},
		{
			path: './SemiBold.woff2',
			weight: '500',
			style: 'normal',
		},
		{
			path: './Semibold.woff2',
			weight: '600',
			style: 'normal',
		},
		{
			path: './Bold.woff2',
			weight: '700',
			style: 'normal',
		},
	],
	variable: '--font-ggsans',
});

export default ggsans;
