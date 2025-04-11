import daisyui from "daisyui";
/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#1DA1F2",
				darkGray: "#14171A",
				lightGray: "#AAB8C2",
				extraLightGray: "#E1E8ED",
				white: "#FFFFFF",
			},
		},
	},
	plugins: [daisyui],
	daisyui: {
		themes: [
			{
				light: {
					primary: "#1DA1F2",
					secondary: "#FFFFFF",
					accent: "#AAB8C2",
					neutral: "#E1E8ED",
					"base-100": "#FFFFFF",
				},
			},
			{
				dark: {
					primary: "#1DA1F2",
					secondary: "#14171A",
					accent: "#AAB8C2",
					neutral: "#14171A",
					"base-100": "#14171A",
				},
			},
		],
	},
};
