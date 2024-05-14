export default {
	semi: true,
	tabWidth: 4,
	useTabs: true,
	printWidth: 120,
	singleQuote: true,
	bracketSpacing: true,
	trailingComma: 'none',
	arrowParens: 'always',
	quoteProps: 'as-needed',
	bracketSameLine: false,
	tailwindConfig: 'config/tailwind.config.mjs',
	tailwindFunctions: ['classNames', 'classnames', 'twMerge'],
	tailwindAttributes: ['wrapperClassName', 'wrapClassName', 'rootClassName'],
	plugins: ['prettier-plugin-tailwindcss']
};
