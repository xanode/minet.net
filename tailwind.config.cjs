const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

const backfaceVisibility = plugin(function({addUtilities}) {
  addUtilities({
    '.backface-visible': {
      'backface-visibility': 'visible',
    },
    '.backface-hidden': {
      'backface-visibility': 'hidden',
    },
  });
});

const background = plugin(function({addUtilities}) {
	addUtilities({
		'.background-tooltip': {
			'background': 'linear-gradient(#0a0a0a,#0a0a0a) padding-box,linear-gradient(124.84deg,#1e40af 12.97%,hsla(0,0%,100%,0) 50.94%) border-box',
		},
	});
});

const maskProperty = plugin(function({addUtilities}) {
	addUtilities({
		'.mask-circle': {
			'mask': 'linear-gradient(#fff 0 0) content-box exclude, linear-gradient(#fff 0 0) exclude',
		}
	});
});

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			animation: {
				'circle-scale': 'circle-scale 0.84s cubic-bezier(0.09,0,0,1) 80ms forwards, 0.72s linear 80ms forwards',
				'floatting': 'floatting 6s ease-in-out infinite',
				'pulse-circle': 'pulse-circle 1800ms linear infinite both',
				'typing': 'typing 1.5s linear infinite',
			},
			backgroundImage: {
				'circle-after': 'linear-gradient(1.72deg,hsla(0,0%,100%,0) 8.89%,#7dd3fc 30.41%,#0ea5e9 50.24%,#0284c7 67.59%,hsla(0,0%,100%,0) 86.81%)',
				'circle-before': 'linear-gradient(277deg,rgba(240,238,255,0) 1.13%,rgba(240,238,255,.05) 50.81%,rgba(240,238,255,0) 98.38%)',
				'gradient-radial': 'radial-gradient(calc(var(--circle-radius) * 2) at var(--x) var(--y), #0ea5e9, #0ea5e9, hsla(0,0%,100%,.3), transparent 100%)',
			},
			blur: {
				'pulse-after': '100px',
				'pulse-before': '110px',
				'shine': '180px',
			},
			borderWidth: {
				'1': '1px',
				'3': '3px',
			},
			boxShadow: {
				'pulse': '0 8px 8px rgba(0,0,0,.1)',
				'tooltip': '-17px 9px 34px -20px rgba(79,85,227,.3),0 24px 54px rgba(255,92,178,.05)',
			},
			content: {
				'empty': '""',
			},
			dropShadow: {
				'pseudo': [
					'0 10px 8px rgba(239,68,68,.12)',
					'0 4px 3px rgba(239,68,68,.3)',
				],
				'typing': [
					'0 10px 8px rgba(56,189,248,.24)',
					'0 4px 3px rgba(56,189,248,.18)',
				]
			},
			duration: {
				'1200': '1200ms',
			},
			fontFamily: {
				sans: ['Inter', ...defaultTheme.fontFamily.sans],
			},
			gap: {
				'18': '4.5rem',
			},
			keyframes: {
				'circle-scale': {
					'0%': {
						transform: 'scale(0)',
					},
					'100%': {
						transform: 'scale(1)',
					},
				},
				'floatting': {
					'0%, 100%': {
						'box-shadow': 'rgba(79,85,227,0.3) -17px 9px 34px -20px, rgba(255,92,178,0.05) 0px 24px 54px 0px',
						transform: 'translateY(0px)',
					},
					'50%': {
						'box-shadow': 'rgba(79,85,227,0.3) -17px 9px 34px -20px, rgba(255,92,178,0.05) 0px 24px 54px 0px, rgba(0,0,0,0.2) 0px 25px 15px 0px',
						transform: 'translateY(-10px)',
					},
				},
				'pulse-circle': {
					'0%': {
						opacity: '0',
						transform: 'scale(.31)',
					},
					'33%': {
						opacity: '.3',
					},
					'100%': {
						opacity: '0',
						transform: 'scale(1.2)',
					},
				},
				'typing': {
					'0%': {
						opacity: '0',
					},
					'49%': {
						opacity: '0',
					},
					'51%': {
						opacity: '1',
					},
					'100%': {
						opacity: '1',
					},
				},
			},
			maxWidth: {
				'8xl': '90rem',
			},
			scale: {
				'30': '.30',
			},
			spacing: {
				'4.5': '18px',
				'34': '8.5rem',
				'38': '9.5rem',
				'74': '18.5rem',
				'98': '24.5rem',
				'108': '27rem',
				'112': '28rem',
				'164': '41rem',
				'220': '55rem',
				'256': '64rem',
				'275': '68.75rem',
				'276': '69rem',
				'280': '70rem',
				'1/12': '8.333333%',
			},
			transformOrigin: {
				'0': '0 0',
			},
			transitionProperty: {
				'stroke-dashoffset': 'stroke-dashoffset',
			},
			willChange: {
				'background-opacity': 'background, opacity',
			},
			zIndex: {
				'1': '1',
				'11': '11',
				'100': '100',
			},
		},
	},
	plugins: [
		backfaceVisibility,
		background,
		maskProperty,
		require('@tailwindcss/typography'),
	],
}
