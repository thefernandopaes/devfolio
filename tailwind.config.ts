
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				mono: ["JetBrains Mono", "Consolas", "Monaco", "Andale Mono", "monospace"],
				sans: ["Inter", "system-ui", "sans-serif"],
			},
			colors: {
				border: 'hsl(240, 3.7%, 15.9%)',
				input: 'hsl(240, 3.7%, 15.9%)',
				ring: 'hsl(240, 4.9%, 83.9%)',
				background: '#0A0A0A',
				foreground: 'hsl(0, 0%, 98%)',
				terminal: {
					green: '#4AF626',
					yellow: '#FFC53D',
					red: '#FF5F56',
					prompt: '#4AF626',
				},
				primary: {
					DEFAULT: 'hsl(0, 0%, 98%)',
					foreground: 'hsl(240, 5.9%, 10%)'
				},
				secondary: {
					DEFAULT: 'hsl(240, 3.7%, 15.9%)',
					foreground: 'hsl(0, 0%, 98%)'
				},
				destructive: {
					DEFAULT: '#FF5F56',
					foreground: 'hsl(0, 0%, 98%)'
				},
				muted: {
					DEFAULT: 'hsl(240, 3.7%, 15.9%)',
					foreground: 'hsl(240, 5%, 64.9%)'
				},
				accent: {
					DEFAULT: 'hsl(240, 3.7%, 15.9%)',
					foreground: 'hsl(0, 0%, 98%)'
				},
				popover: {
					DEFAULT: '#121212',
					foreground: 'hsl(0, 0%, 98%)'
				},
				card: {
					DEFAULT: '#121212',
					foreground: 'hsl(0, 0%, 98%)'
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				'blink': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'blink': 'blink 1s step-start infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
