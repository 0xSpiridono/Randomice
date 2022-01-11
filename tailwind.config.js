const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
	mode: "jit",
	purge: [
		"./src/pages/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",
		"./src/containers/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				sans: ["Roboto", ...defaultTheme.fontFamily.sans],
				comfortaa: ["'Comfortaa', cursive"],
			},
			colors: {
				sky: colors.sky,
				cyan: colors.cyan,
				primary: "#ffaacd",
				secondary: "#6161fb",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
