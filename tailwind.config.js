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
                primary: "#7289DA",
                secondary: {
                    light: "#F8FAFC",
                    dark: "#181821",
                },
                "text-primary": {
                    light: "#1E293B",
                    dark: "#E2E8F0",
                },
                "text-secondary": {
                    light: "#64748B",
                    dark: "#94A3B8",
                },
                background: {
                    light: "#FFFFFF",
                    dark: "#0F172A",
                },
                dark: {
                    100: "#1E1E2A",
                    200: "#16161F",
                    300: "#121218",
                }
            },
            backdropBlur: {
                'xs': '2px',
            },
            animation: {
                'glow': 'glow 2s ease-in-out infinite alternate',
                'gradient': 'gradient 8s linear infinite',
            },
            keyframes: {
                glow: {
                    '0%': { boxShadow: '0 0 5px rgba(114, 137, 218, 0.5)' },
                    '100%': { boxShadow: '0 0 20px rgba(114, 137, 218, 0.8)' }
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
                }
            },
            backgroundImage: {
                'gradient-text': 'linear-gradient(45deg, #7289DA, #9eb3ff)',
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
                    background: 'rgba(114, 137, 218, 0.1)',
                    border: '1px solid rgba(114, 137, 218, 0.2)',
                    color: theme('colors.primary'),
                    borderRadius: '8px',
                    transition: 'all 0.3s ease',
                    '.dark &': {
                        background: 'rgba(114, 137, 218, 0.1)',
                        borderColor: 'rgba(114, 137, 218, 0.2)',
                    },
                    '&:hover': {
                        background: 'rgba(114, 137, 218, 0.2)',
                        borderColor: 'rgba(114, 137, 218, 0.3)',
                    },
                },
                '.glass-button-secondary': {
                    background: 'rgba(30, 41, 59, 0.05)',
                    border: '1px solid rgba(30, 41, 59, 0.1)',
                    color: theme('colors.text-primary.light'),
                    borderRadius: '8px',
                    transition: 'all 0.3s ease',
                    '.dark &': {
                        background: 'rgba(255, 255, 255, 0.05)',
                        borderColor: 'rgba(255, 255, 255, 0.1)',
                        color: theme('colors.text-primary.dark'),
                    },
                    '&:hover': {
                        background: 'rgba(30, 41, 59, 0.1)',
                        borderColor: 'rgba(30, 41, 59, 0.2)',
                        '.dark &': {
                            background: 'rgba(255, 255, 255, 0.1)',
                            borderColor: 'rgba(255, 255, 255, 0.2)',
                        },
                    },
                },
                '.glass-pill': {
                    background: 'rgba(30, 41, 59, 0.05)',
                    border: '1px solid rgba(30, 41, 59, 0.1)',
                    color: theme('colors.text-primary.light'),
                    padding: '0.5rem 1rem',
                    borderRadius: '9999px',
                    fontSize: '0.875rem',
                    transition: 'all 0.3s ease',
                    '.dark &': {
                        background: 'rgba(114, 137, 218, 0.1)',
                        borderColor: 'rgba(114, 137, 218, 0.2)',
                        color: theme('colors.text-primary.dark'),
                    },
                    '&:hover': {
                        background: 'rgba(30, 41, 59, 0.1)',
                        borderColor: 'rgba(30, 41, 59, 0.2)',
                        '.dark &': {
                            background: 'rgba(114, 137, 218, 0.2)',
                            borderColor: 'rgba(114, 137, 218, 0.3)',
                        },
                    },
                },
                '.glass-card': {
                    background: 'rgba(255, 255, 255, 0.7)',
                    border: '1px solid rgba(30, 41, 59, 0.1)',
                    transition: 'all 0.3s ease',
                    '.dark &': {
                        background: 'rgba(114, 137, 218, 0.1)',
                        borderColor: 'rgba(114, 137, 218, 0.2)',
                    },
                    '&:hover': {
                        background: 'rgba(255, 255, 255, 0.8)',
                        borderColor: 'rgba(30, 41, 59, 0.2)',
                        '.dark &': {
                            background: 'rgba(114, 137, 218, 0.15)',
                            borderColor: 'rgba(114, 137, 218, 0.25)',
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

