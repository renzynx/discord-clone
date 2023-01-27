/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		colors: {
			'discord-blue': '#7289da',
			'discord-blurple': '#5865f2',
			'discord-white': '#ffffff',
			'discord-gray': '#99aab5',
			'discord-black': '#2c2f33',
			'discord-dark': '#23272a',
			'discord-chat': '#36393F',
			'discord-sidebar': '#2F3136',
			'discord-user-background': '#292b2f',
			'discord-dimmed': '#a3a6aa',
			'discord-input-background': '#202225',
			'discord-input-label': '#b9bbbe',
			'discord-link': '#00aff4',
			black: '#000000',
			transparent: 'transparent',
		},
		animation: {
			'discord-bounce': 'discord-bounce .25s ease-in-out',
		},
		extend: {
			keyframes: {
				'discord-bounce': {
					'0%': {
						transform: 'scale(1) translateY(0) translateZ(0)',
					},
					'50%': {
						transform: 'scale(1.05) translateY(-70px) translateZ(0)',
					},
					'100%': {
						transform: 'scale(1) translateY(0) translateZ(0)',
					},
				},
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
};
