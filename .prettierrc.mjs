// .prettierrc.mjs
/** @type {import("prettier").Config} */
export default {
	plugins: [
		'@prettier/plugin-oxc',
		'prettier-plugin-astro',
		'prettier-plugin-tailwindcss',
	],
	tailwindStylesheet: './src/styles/global.css',
	useTabs: true,
	tabWidth:2,
	singleQuote: true,
	semi: false,
	quoteProps: 'as-needed',
	jsxSingleQuote: true,
	overrides: [
		{
			files: '*.astro',
			options: {
				parser: 'astro',
			},
		},
	],
};
