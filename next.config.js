/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ['api.dicebear.com'],
		dangerouslyAllowSVG: true,
		contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
	},
	redirects: async () => {
		return [
			{
				source: '/',
				destination: '/channels/@me',
				permanent: false,
			},
		];
	},
};

module.exports = nextConfig;
