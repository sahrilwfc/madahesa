tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['Poppins', 'sans-serif'],
            },
            colors: {
                pramuka: {
                    50: '#f6f4f2',
                    100: '#e8e2d9',
                    200: '#d1c0b1',
                    300: '#b79a83',
                    400: '#a3795b',
                    500: '#946146',
                    600: '#89513d',
                    700: '#714033',
                    800: '#5e372e',
                    900: '#53312c',
                    950: '#2b1714',
                }
            },
            animation: {
                'blob': 'blob 7s infinite',
            },
            keyframes: {
                blob: {
                    '0%': { transform: 'translate(0px, 0px) scale(1)' },
                    '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
                    '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
                    '100%': { transform: 'translate(0px, 0px) scale(1)' },
                }
            }
        }
    }
}
