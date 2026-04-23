/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#6366F1",
                accent: "#8B5CF6",
                secondary: {
                    light: "#F5F3FF",
                    dark: "#12121C",
                },
                "text-primary": {
                    light: "#1E1B4B",
                    dark: "#E0E7FF",
                },
                "text-secondary": {
                    light: "#6B7280",
                    dark: "#A5B4FC",
                },
                background: {
                    light: "#FFFFFF",
                    dark: "#0A0A14",
                },
                dark: {
                    100: "#1C1C2E",
                    200: "#16162A",
                    300: "#0E0E1E",
                }
            },
            backdropBlur: {
                'xs': '2px',
            },
            animation: {
                'glow': 'glow 2s ease-in-out infinite alternate',
                'gradient': 'gradient 8s linear infinite',
                'float': 'float 6s ease-in-out infinite',
            },
            keyframes: {
                glow: {
                    '0%': { boxShadow: '0 0 8px rgba(99, 102, 241, 0.4)' },
                    '100%': { boxShadow: '0 0 28px rgba(139, 92, 246, 0.7)' }
                },
                gradient: {
                    '0%, 100%': {
                        'background-size': '200% 200%',
                        'background-position': 'left center'
                    },
                    '50%': {
                        'background-size': '200% 200%',
                        'background-position': 'right center'
                    }
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' },
                }
            },
            backgroundImage: {
                'gradient-text': 'linear-gradient(135deg, #6366F1, #8B5CF6)',
                'gradient-primary': 'linear-gradient(135deg, #6366F1, #8B5CF6)',
            },
            fontFamily: {
                sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
            },
            screens: {
                'sm': '640px',
                'md': '768px',
                'lg': '1024px',
                'xl': '1280px',
                '2xl': '1536px',
            },
        },
    },
    plugins: [
        function ({ addComponents, theme }) {
            addComponents({
                '.glass-button': {
                    background: 'rgba(99, 102, 241, 0.12)',
                    border: '1px solid rgba(99, 102, 241, 0.25)',
                    color: theme('colors.primary'),
                    borderRadius: '10px',
                    transition: 'all 0.25s ease',
                    '.dark &': {
                        background: 'rgba(99, 102, 241, 0.15)',
                        borderColor: 'rgba(99, 102, 241, 0.3)',
                        color: '#A5B4FC',
                    },
                    '&:hover': {
                        background: 'rgba(99, 102, 241, 0.22)',
                        borderColor: 'rgba(99, 102, 241, 0.45)',
                        boxShadow: '0 0 16px rgba(99, 102, 241, 0.2)',
                    },
                },
                '.glass-button-secondary': {
                    background: 'rgba(30, 27, 75, 0.05)',
                    border: '1px solid rgba(30, 27, 75, 0.12)',
                    color: theme('colors.text-primary.light'),
                    borderRadius: '10px',
                    transition: 'all 0.25s ease',
                    '.dark &': {
                        background: 'rgba(255, 255, 255, 0.05)',
                        borderColor: 'rgba(255, 255, 255, 0.1)',
                        color: theme('colors.text-primary.dark'),
                    },
                    '&:hover': {
                        background: 'rgba(30, 27, 75, 0.1)',
                        borderColor: 'rgba(30, 27, 75, 0.2)',
                        '.dark &': {
                            background: 'rgba(255, 255, 255, 0.08)',
                            borderColor: 'rgba(255, 255, 255, 0.15)',
                        },
                    },
                },
                '.glass-pill': {
                    background: 'rgba(30, 27, 75, 0.06)',
                    border: '1px solid rgba(30, 27, 75, 0.1)',
                    color: theme('colors.text-primary.light'),
                    padding: '0.5rem 1rem',
                    borderRadius: '9999px',
                    fontSize: '0.875rem',
                    transition: 'all 0.25s ease',
                    '.dark &': {
                        background: 'rgba(99, 102, 241, 0.12)',
                        borderColor: 'rgba(99, 102, 241, 0.22)',
                        color: theme('colors.text-primary.dark'),
                    },
                    '&:hover': {
                        background: 'rgba(99, 102, 241, 0.1)',
                        borderColor: 'rgba(99, 102, 241, 0.2)',
                        '.dark &': {
                            background: 'rgba(99, 102, 241, 0.2)',
                            borderColor: 'rgba(99, 102, 241, 0.35)',
                        },
                    },
                },
                '.glass-card': {
                    background: 'rgba(255, 255, 255, 0.75)',
                    border: '1px solid rgba(30, 27, 75, 0.08)',
                    borderRadius: '16px',
                    backdropFilter: 'blur(12px)',
                    transition: 'all 0.3s ease',
                    '.dark &': {
                        background: 'rgba(28, 28, 46, 0.7)',
                        borderColor: 'rgba(99, 102, 241, 0.18)',
                    },
                    '&:hover': {
                        background: 'rgba(255, 255, 255, 0.85)',
                        borderColor: 'rgba(99, 102, 241, 0.2)',
                        boxShadow: '0 8px 32px rgba(99, 102, 241, 0.12)',
                        '.dark &': {
                            background: 'rgba(28, 28, 46, 0.85)',
                            borderColor: 'rgba(99, 102, 241, 0.3)',
                            boxShadow: '0 8px 32px rgba(99, 102, 241, 0.15)',
                        },
                    },
                },
                '.text-gradient': {
                    background: theme('backgroundImage.gradient-text'),
                    '-webkit-background-clip': 'text',
                    '-webkit-text-fill-color': 'transparent',
                    'background-clip': 'text',
                },
            })
        }
    ],
}
