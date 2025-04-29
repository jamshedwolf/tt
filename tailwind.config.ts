
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
				crypto: {
					dark: "#0B0C22",
					darker: "#050618",
					purple: "#8B5CF6",
					"purple-light": "#A78BFA",
					blue: "#0EA5E9",
					"blue-dark": "#0284C7",
					cyan: "#06B6D4",
					teal: "#14B8A6",
					neon: "#6EE7B7",
					indigo: "#6366F1",
					violet: "#7C3AED",
					pink: "#EC4899",
				},
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
				float: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				pulse: {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.5' },
				},
				shimmer: {
					from: { backgroundPosition: '0 0' },
					to: { backgroundPosition: '-200% 0' },
				},
				"glow-pulse": {
					"0%, 100%": { opacity: "1", boxShadow: "0 0 20px rgba(124, 58, 237, 0.5)" },
					"50%": { opacity: "0.7", boxShadow: "0 0 30px rgba(124, 58, 237, 0.8)" },
				},
				"rotate-slow": {
					"0%": { transform: "rotate(0deg)" },
					"100%": { transform: "rotate(360deg)" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				float: 'float 5s ease-in-out infinite',
				pulse: 'pulse 3s ease-in-out infinite',
				shimmer: 'shimmer 2s linear infinite',
				"glow-pulse": "glow-pulse 3s ease-in-out infinite",
				"rotate-slow": "rotate-slow 12s linear infinite",
			},
			backgroundImage: {
				'hero-pattern': "url('/lovable-uploads/8703f10d-cc1c-4f69-a2fb-e318d17abe7b.png')",
				'gradient-crypto': 'linear-gradient(225deg, #7C3AED 0%, #EC4899 50%, #0EA5E9 100%)',
				'gradient-blue': 'linear-gradient(90deg, #0EA5E9 0%, #06B6D4 100%)',
				'gradient-purple': 'linear-gradient(90deg, #8B5CF6 0%, #EC4899 100%)',
				'gradient-dark': 'linear-gradient(180deg, #0B0C22 0%, #050618 100%)',
				'glass-card': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
				'grid-pattern': "radial-gradient(circle, rgba(124, 58, 237, 0.05) 1px, transparent 1px)",
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
