/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.tsx", "./index.html"],
	theme: {
		fontFamily: {
			sans: ["Space Mono", "sans-serif"],
		},
		extend: {
			colors: {
				white: "hsl(0, 0%, 100%)",
				cyan: {
					very_dark: "hsl(183, 100%, 15%)",
					dark: "hsl(186, 14%, 43%)",
					gray: "hsl(184, 14%, 56%)",
					light: "hsl(185, 41%, 84%)",
					very_light: "hsl(189, 41%, 97%)",
				},
			},
		},
	},
	plugins: [],
};
