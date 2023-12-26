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
			'-webkit-mask': 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
			'mask-composite': 'exclude',
		},
		'.mask-shine-hover': {
			'-webkit-mask': 'radial-gradient(#000 50%,#000 0)',
			'-webkit-mask-repeat': 'no-repeat',
		}
	});
});

const noScrollbar = plugin(function({addUtilities}) {
	addUtilities({
		'.no-scrollbar::-webkit-scrollbar': {
			display: 'none',
		},
		'.no-scrollbar': {
			'-ms-overflow-style': 'none',
			'scrollbar-width': 'none',
		}
	})
})

const textStroke = plugin(function({addUtilities}) {
	addUtilities({
		'.text-stroke': {
			'-webkit-text-stroke': '1px rgb(255 255 255 / 50%)',
			'text-stroke': '1px rgb(255 255 255 / 50%)',
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
				'gradient-1': 'gradient-1 11s cubic-bezier(0.1, 0, 0.9, 1) infinite',
				'gradient-2': 'gradient-2 11s cubic-bezier(0.1, 0, 0.9, 1) infinite',
				'gradient-3': 'gradient-3 11s cubic-bezier(0.1, 0, 0.9, 1) infinite',
				'pulse-circle': 'pulse-circle 1800ms linear infinite both',
				'typing': 'typing 1.5s linear infinite',
			},
			aria: {
				'current': 'current="page"',
			},
			backgroundImage: {
				'circle-after': 'linear-gradient(1.72deg,hsla(0,0%,100%,0) 8.89%,#7dd3fc 30.41%,#0ea5e9 50.24%,#0284c7 67.59%,hsla(0,0%,100%,0) 86.81%)',
				'circle-before': 'linear-gradient(277deg,rgba(240,238,255,0) 1.13%,rgba(240,238,255,.05) 50.81%,rgba(240,238,255,0) 98.38%)',
				'gradient-radial': 'radial-gradient(#0ea5e9, #0ea5e9, hsla(0,0%,100%,.3), transparent 100%)',
			},
			blur: {
				'pulse-after': '100px',
				'pulse-before': '110px',
				'shine': '180px',
				'shine-soft': '90px',
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
				'gradient-1': {
					'0%': {
						transform: 'translateY(-50%) translateX(-50%) rotate(-20deg) translateX(20%)',
					},
					'25%': {
						transform: 'translateY(-50%) translateX(-50%) skew(-15deg, -15deg) rotate(80deg) translateX(30%)',
					},
					'50%':  {
						transform: 'translateY(-50%) translateX(-50%) rotate(180deg) translateX(25%)',
					},
					'75%': {
						transform: 'translateY(-50%) translateX(-50%) skew(15deg, 15deg) rotate(240deg) translateX(15%)',
					},
					'100%': {
						transform: 'translateY(-50%) translateX(-50%) rotate(340deg) translateX(20%)',
					},
				},
				'gradient-2': {
					'0%': {
						transform: 'translateY(-50%) translateX(-50%) rotate(40deg) translateX(-20%)',
					},
					'25%': {
						transform: 'translateY(-50%) translateX(-50%) skew(-15deg, -15deg) rotate(110deg) translateX(-5%)',
					},
					'50%': {
						transform: 'translateY(-50%) translateX(-50%) rotate(210deg) translateX(-35%)',
					},
					'75%': {
						transform: 'translateY(-50%) translateX(-50%) skew(15deg, 15deg) rotate(200deg) translateX(-10%)',
					},
					'100%': {
						transform: 'translateY(-50%) translateX(-50%) rotate(400deg) translateX(-20%)',
					},
				},
				'gradient-3': {
					'0%': {
						transform: 'translateY(-50%) translateX(-50%) translateX(-15%) translateY(-10%)',
					},
					'20%': {
						transform: 'translateY(-50%) translateX(-50%) translateX(20%) translateY(-30%)',
					},
					'40%': {
						transform: 'translateY(-50%) translateX(-50%) translateX(-25%) translateY(-15%)',
					},
					'60%': {
						transform: 'translateY(-50%) translateX(-50%) translateX(30%) translateY(20%)',
					},
					'80%': {
						transform: 'translateY(-50%) translateX(-50%) translateX(5%) translateY(35%)',
					},
					'100%':  {
						transform: 'translateY(-50%) translateX(-50%) translateX(-15%) translateY(-10%)',
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
				'screen': '100vw',
			},
			scale: {
				'30': '.30',
			},
			spacing: {
				'4.5': '18px',
				'13': '3.25rem',
				'18': '4.5rem',
				'26': '6.5rem',
				'34': '8.5rem',
				'38': '9.5rem',
				'67': '16.75rem',
				'74': '18.5rem',
				'90': '22.5rem',
				'98': '24.5rem',
				'108': '27rem',
				'112': '28rem',
				'113': '28.25rem',
				'124': '31rem',
				'125': '31.25rem',
				'148': '37rem',
				'150': '37.5rem',
				'160': '40rem',
				'164': '41rem',
				'175': '43.75rem',
				'220': '55rem',
				'256': '64rem',
				'275': '68.75rem',
				'276': '69rem',
				'280': '70rem',
				'1/12': '8.333333%',
				'1/5': '20%',
				'2/5': '40%',
				'3/5': '60%',
				'4/5': '80%',
			},
			transformOrigin: {
				'0': '0 0',
			},
			transitionProperty: {
				'height': 'height',
				'stroke-dashoffset': 'stroke-dashoffset',
			},
			typography: (theme) => ({
				DEFAULT: {
					css: {
						'code::before': {
							content: '""',
						},
						code: {
							backgroundColor: theme('colors.neutral.800'), // bg-neutral-800
							fontSize: theme('fontSize.sm'), // text-sm
							fontWeight: theme('fontWeight.normal'), // font-normal
							padding: `${theme('spacing[0.5]')} ${theme('spacing[1.5]')}`, // py-0.5 px-1.5
						},
						'code::after': {
							content: '""',
						},
					},
				},
			}),
			willChange: {
				'background-opacity': 'background, opacity',
				'height': 'height',
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
		noScrollbar,
		textStroke,
		require('@tailwindcss/typography'),
	],
}
