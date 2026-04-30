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
                    light: "#102334",
                    dark: "#E6FCFF",
                },
                "text-secondary": {
                    light: "#5E7381",
                    dark: "#8B949E",
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
                sans: ['Inter', 'system-ui', 'sans-serif'],
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
                    background: '#e6edf3',
                    border: '1px solid transparent',
                    color: '#0d1117',
                    borderRadius: '12px',
                    transition: 'all 0.25s ease',
                    '.dark &': {
                        background: '#e6edf3',
                        borderColor: 'transparent',
                        color: '#0d1117',
                    },
                    '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: '0 8px 30px rgba(255,255,255,0.18)',
                    },
                },
                '.glass-button-secondary': {
                    background: 'rgba(22, 27, 34, 0.45)',
                    border: '1px solid rgba(240, 246, 252, 0.1)',
                    color: '#e6edf3',
                    borderRadius: '12px',
                    transition: 'all 0.25s ease',
                    '.dark &': {
                        background: 'rgba(22, 27, 34, 0.45)',
                        borderColor: 'rgba(240, 246, 252, 0.1)',
                        color: '#e6edf3',
                    },
                    '&:hover': {
                        background: 'rgba(30, 36, 45, 0.72)',
                        borderColor: 'rgba(103, 207, 232, 0.35)',
                        '.dark &': {
                            background: 'rgba(30, 36, 45, 0.72)',
                            borderColor: 'rgba(103, 207, 232, 0.35)',
                        },
                    },
                },
                '.glass-pill': {
                    background: 'rgba(22, 27, 34, 0.45)',
                    border: '1px solid rgba(240, 246, 252, 0.08)',
                    color: '#e6edf3',
                    padding: '0.5rem 1rem',
                    borderRadius: '9999px',
                    fontSize: '0.875rem',
                    transition: 'all 0.25s ease',
                    '.dark &': {
                        background: 'rgba(22, 27, 34, 0.45)',
                        borderColor: 'rgba(240, 246, 252, 0.08)',
                        color: '#e6edf3',
                    },
                    '&:hover': {
                        background: 'rgba(30, 36, 45, 0.72)',
                        borderColor: 'rgba(103, 207, 232, 0.25)',
                        '.dark &': {
                            background: 'rgba(30, 36, 45, 0.72)',
                            borderColor: 'rgba(103, 207, 232, 0.25)',
                        },
                    },
                },
                '.glass-card': {
                    background: 'linear-gradient(145deg, rgba(30, 36, 45, 0.72), rgba(22, 27, 34, 0.38))',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    borderRadius: '22px',
                    backdropFilter: 'blur(18px)',
                    transition: 'all 0.3s ease',
                    '.dark &': {
                        background: 'linear-gradient(145deg, rgba(30, 36, 45, 0.72), rgba(22, 27, 34, 0.38))',
                        borderColor: 'rgba(255, 255, 255, 0.05)',
                    },
                    '&:hover': {
                        background: 'linear-gradient(145deg, rgba(30, 36, 45, 0.84), rgba(22, 27, 34, 0.52))',
                        borderColor: 'rgba(103, 207, 232, 0.24)',
                        boxShadow: '0 25px 60px rgba(0, 0, 0, 0.5)',
                        '.dark &': {
                            background: 'linear-gradient(145deg, rgba(30, 36, 45, 0.84), rgba(22, 27, 34, 0.52))',
                            borderColor: 'rgba(103, 207, 232, 0.22)',
                            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.5)',
                        },
                    },
                },
                '.text-gradient': {
                    background: 'linear-gradient(135deg, #ffffff 0%, #8cf0ff 100%)',
                    '-webkit-background-clip': 'text',
                    '-webkit-text-fill-color': 'transparent',
                    'background-clip': 'text',
                },
            })
        }
    ],
}
