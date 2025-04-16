
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
				// AnimeVerse custom colors
				anime: {
					purple: {
						light: '#9b87f5',
						DEFAULT: '#7E69AB',
						dark: '#6E59A5',
					},
					pink: {
						light: '#FFDEE2',
						DEFAULT: '#D946EF',
						dark: '#B91DAF',
					},
					blue: {
						light: '#D3E4FD',
						DEFAULT: '#0EA5E9',
						dark: '#0284C7',
					},
					orange: {
						DEFAULT: '#F97316',
					},
					gray: {
						light: '#F1F1F1',
						DEFAULT: '#8E9196',
						dark: '#403E43',
					},
					// Cyberpunk colors
					neon: {
						pink: '#FF00FF',
						blue: '#00FFFF',
						green: '#00FF00',
						yellow: '#FFFF00'
					},
					cyber: {
						black: '#0D0221',
						purple: '#290742',
						pink: '#F806CC',
						blue: '#41EAD4'
					}
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
				"fade-in": {
					"0%": {
						opacity: "0",
						transform: "translateY(10px)"
					},
					"100%": {
						opacity: "1",
						transform: "translateY(0)"
					}
				},
				"fade-out": {
					"0%": {
						opacity: "1",
						transform: "translateY(0)"
					},
					"100%": {
						opacity: "0",
						transform: "translateY(10px)"
					}
				},
				"scale-in": {
					"0%": {
						transform: "scale(0.95)",
						opacity: "0"
					},
					"100%": {
						transform: "scale(1)",
						opacity: "1"
					}
				},
				"pulse-soft": {
					"0%, 100%": { opacity: "1" },
					"50%": { opacity: "0.8" }
				},
				"float": {
					"0%, 100%": { transform: "translateY(0)" },
					"50%": { transform: "translateY(-10px)" }
				},
				"glow": {
					"0%": { boxShadow: "0 0 5px rgba(126, 105, 171, 0.5)" },
					"100%": { boxShadow: "0 0 20px rgba(217, 70, 239, 0.7)" }
				},
				"neon-pulse": {
					"0%, 100%": { textShadow: "0 0 5px rgba(126, 105, 171, 0.5), 0 0 10px rgba(217, 70, 239, 0.5)" },
					"50%": { textShadow: "0 0 10px rgba(126, 105, 171, 0.8), 0 0 20px rgba(217, 70, 239, 0.8)" }
				},
				"cyber-grid": {
					"0%": { backgroundPosition: "0% 0%" },
					"100%": { backgroundPosition: "100% 100%" }
				}
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"fade-in": "fade-in 0.4s ease-out",
				"scale-in": "scale-in 0.3s ease-out",
				"pulse-soft": "pulse-soft 3s ease-in-out infinite",
				"float": "float 6s ease-in-out infinite",
				"glow": "glow 2s ease-in-out infinite alternate",
				"neon-pulse": "neon-pulse 2s ease-in-out infinite alternate",
				"cyber-grid": "cyber-grid 20s linear infinite"
			},
			backgroundImage: {
				'hero-pattern': "url('/hero-bg.svg')",
				'gradient-anime': "linear-gradient(45deg, #7E69AB, #D946EF)",
				'gradient-anime-soft': "linear-gradient(90deg, rgba(155,135,245,0.2) 0%, rgba(217,70,239,0.2) 100%)",
				'cyber-grid': "linear-gradient(to right, rgba(126, 105, 171, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(126, 105, 171, 0.1) 1px, transparent 1px)",
				'cyber-glow': "radial-gradient(circle at 50% 50%, rgba(217, 70, 239, 0.2), transparent 50%)",
				'cyberpunk-gradient': "linear-gradient(45deg, #290742, #F806CC, #41EAD4)",
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				display: ['Lexend', 'sans-serif'],
				future: ['Orbitron', 'sans-serif'], // Futuristic anime font
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
