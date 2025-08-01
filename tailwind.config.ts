import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}"
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
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				cyber: {
					black: '#0A0A0A',
					cyan: '#00FFFF',
					red: '#FF073A',
					green: '#39FF14',
					purple: '#8A2BE2',
					dark: '#1A1A1A',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				glitch: {
					'0%, 100%': { transform: 'translateX(0)' },
					'10%': { transform: 'translateX(-2px)' },
					'20%': { transform: 'translateX(2px)' },
					'30%': { transform: 'translateX(-2px)' },
					'40%': { transform: 'translateX(2px)' },
					'50%': { transform: 'translateX(-2px)' },
					'60%': { transform: 'translateX(2px)' },
					'70%': { transform: 'translateX(-2px)' },
					'80%': { transform: 'translateX(2px)' },
					'90%': { transform: 'translateX(-2px)' }
				},
				'neon-pulse': {
					from: { opacity: '0.8' },
					to: { opacity: '1' }
				},
				float: {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'glitch': 'glitch 0.5s infinite',
				'neon-pulse': 'neon-pulse 2s ease-in-out infinite alternate',
				'float': 'float 3s ease-in-out infinite'
			},
			boxShadow: {
				neon: '0 0 20px #00FFFF, 0 0 40px #00FFFF',
				'neon-red': '0 0 20px #FF073A, 0 0 40px #FF073A',
				'neon-green': '0 0 20px #39FF14, 0 0 40px #39FF14',
				'neon-purple': '0 0 20px #8A2BE2, 0 0 40px #8A2BE2',
			},
			fontFamily: {
				cyber: ['IBM Plex Sans', 'system-ui', 'sans-serif']
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;