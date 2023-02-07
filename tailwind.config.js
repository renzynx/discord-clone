const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
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
				'discord-red': '#ed4245',
				'discord-green': '#3ba55d',
				'discord-btn-success': '#2d7d46',
				black: '#000000',
				transparent: 'transparent',
			},
			animation: {
				'discord-bounce': 'discord-bounce .3s ease-in-out',
				'pop-in': 'pop .2s ease-in-out',
				'grow-up': 'grow-up .2s ease-in-out',
			},
			fontFamily: {
				sans: ['var(--font-ggsans)', ...defaultTheme.fontFamily.sans],
			},
			keyframes: {
				pop: {
					'0%': {
						transform: 'scale(0)',
					},
					'100%': {
						transform: 'scale(1)',
					},
				},
				'discord-bounce': {
					'0%': {
						transform: 'scale(1) translateY(0) translateZ(0)',
						opacity: '1',
					},
					'50%': {
						transform: 'scale(1.05) translateY(-70px) translateZ(0)',
						opacity: '0.5',
					},
					'100%': {
						transform: 'scale(1) translateY(0) translateZ(0)',
						opacity: '1',
					},
				},
				'grow-up': {
					'0%': {
						transform: 'scale(.8) translateY(0) translateZ(0)',
						opacity: '1',
					},
					'100%': {
						transform: 'scale(1) translateY(0) translateZ(0)',
						opacity: '1',
					},
				},
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
};
