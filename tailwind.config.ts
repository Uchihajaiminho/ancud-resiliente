import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                'verde-bosque': '#1e3a1f',
                'gris-piedra': '#4b5563',
                'madera-calida': '#78350f',
            },
            fontFamily: {
                // Assuming Inter is loaded in layout
                sans: ['var(--font-inter)'],
            }
        },
    },
    plugins: [],
};
export default config;
