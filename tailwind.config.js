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
                primary: "#67CFE8",
                accent: "#1F7A8C",
                secondary: {
                    light: "#EDF7FB",
                    dark: "#07131A",
                },
                "text-primary": {
                    light: "#08202B",
                    dark: "#E6FCFF",
                },
                "text-secondary": {
                    light: "#4D6771",
                    dark: "#8FB4BE",
                },
                background: {
                    light: "#F8FEFF",
                    dark: "#041018",
                },
                dark: {
                    100: "#0A1B24",
                    200: "#07141C",
                    300: "#041018",
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
                    '0%': { boxShadow: '0 0 8px rgba(103, 207, 232, 0.35)' },
                    '100%': { boxShadow: '0 0 28px rgba(31, 122, 140, 0.55)' }
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
                'gradient-text': 'linear-gradient(135deg, #E6FCFF 0%, #67CFE8 35%, #1F7A8C 100%)',
                'gradient-primary': 'linear-gradient(135deg, #67CFE8 0%, #2BA8C4 45%, #1F7A8C 100%)',
            },
            fontFamily: {
                sans: ['Space Grotesk', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
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
                    background: 'rgba(103, 207, 232, 0.14)',
                    border: '1px solid rgba(103, 207, 232, 0.28)',
                    color: theme('colors.primary'),
                    borderRadius: '10px',
                    transition: 'all 0.25s ease',
                    '.dark &': {
                        background: 'rgba(103, 207, 232, 0.14)',
                        borderColor: 'rgba(103, 207, 232, 0.26)',
                        color: '#C7F8FF',
                    },
                    '&:hover': {
                        background: 'rgba(103, 207, 232, 0.22)',
                        borderColor: 'rgba(103, 207, 232, 0.42)',
                        boxShadow: '0 0 18px rgba(103, 207, 232, 0.18)',
                    },
                },
                '.glass-button-secondary': {
                    background: 'rgba(8, 32, 43, 0.05)',
                    border: '1px solid rgba(8, 32, 43, 0.12)',
                    color: theme('colors.text-primary.light'),
                    borderRadius: '10px',
                    transition: 'all 0.25s ease',
                    '.dark &': {
                        background: 'rgba(255, 255, 255, 0.04)',
                        borderColor: 'rgba(143, 180, 190, 0.14)',
                        color: theme('colors.text-primary.dark'),
                    },
                    '&:hover': {
                        background: 'rgba(8, 32, 43, 0.1)',
                        borderColor: 'rgba(31, 122, 140, 0.22)',
                        '.dark &': {
                            background: 'rgba(255, 255, 255, 0.07)',
                            borderColor: 'rgba(143, 180, 190, 0.22)',
                        },
                    },
                },
                '.glass-pill': {
                    background: 'rgba(8, 32, 43, 0.05)',
                    border: '1px solid rgba(8, 32, 43, 0.08)',
                    color: theme('colors.text-primary.light'),
                    padding: '0.5rem 1rem',
                    borderRadius: '9999px',
                    fontSize: '0.875rem',
                    transition: 'all 0.25s ease',
                    '.dark &': {
                        background: 'rgba(103, 207, 232, 0.1)',
                        borderColor: 'rgba(103, 207, 232, 0.2)',
                        color: theme('colors.text-primary.dark'),
                    },
                    '&:hover': {
                        background: 'rgba(103, 207, 232, 0.08)',
                        borderColor: 'rgba(103, 207, 232, 0.18)',
                        '.dark &': {
                            background: 'rgba(103, 207, 232, 0.16)',
                            borderColor: 'rgba(103, 207, 232, 0.3)',
                        },
                    },
                },
                '.glass-card': {
                    background: 'rgba(255, 255, 255, 0.72)',
                    border: '1px solid rgba(103, 207, 232, 0.16)',
                    borderRadius: '22px',
                    backdropFilter: 'blur(18px)',
                    transition: 'all 0.3s ease',
                    '.dark &': {
                        background: 'rgba(10, 27, 36, 0.72)',
                        borderColor: 'rgba(103, 207, 232, 0.14)',
                    },
                    '&:hover': {
                        background: 'rgba(255, 255, 255, 0.82)',
                        borderColor: 'rgba(103, 207, 232, 0.24)',
                        boxShadow: '0 18px 40px rgba(21, 88, 103, 0.12)',
                        '.dark &': {
                            background: 'rgba(10, 27, 36, 0.84)',
                            borderColor: 'rgba(103, 207, 232, 0.22)',
                            boxShadow: '0 18px 40px rgba(0, 0, 0, 0.25)',
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
