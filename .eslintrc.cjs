module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		'next/core-web-vitals',
		'eslint:recommended',
		'plugin:react-hooks/recommended',
		'plugin:@typescript-eslint/recommended',
	],
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	parser: '@typescript-eslint/parser',
	plugins: ['react-refresh'],
	rules: {
		'react-refresh/only-export-components': [
			'warn',
			{ allowConstantExport: true },
		],
	},
};