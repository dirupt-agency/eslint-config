/*
| Developed by Dirupt
| Filename : recommended.js
| Author : Philippe DESPLATS (philippe@di-rupt.com)
*/

module.exports = {
	extends: [
		'eslint:recommended',
		'plugin:import/recommended',
		'plugin:import/typescript',
		'plugin:prettier/recommended',
		'prettier',
	],
	plugins: ['prettier', 'import', 'unused-imports'],
	ignorePatterns: ['node_modules/'],
	rules: {
		semi: ['error', 'never'],
		'comma-dangle': ['error', 'always-multiline'],
		'quote-props': ['error', 'as-needed'],
		'no-unused-vars': 'off',
		'no-use-before-define': ['error', { variables: false }],
		'import/order': [
			'error',
			{
				groups: ['builtin', 'external', 'parent', 'sibling', 'index', 'internal', 'object'],
			},
		],
		'import/extensions': [
			'error',
			{
				js: 'never',
				jsx: 'never',
				svg: 'always',
				ts: 'never',
				tsx: 'never',
			},
		],
		'import/prefer-default-export': 'off',
		'unused-imports/no-unused-imports': 'error',
		'unused-imports/no-unused-vars': [
			'warn',
			{ 'vars': 'all', 'varsIgnorePattern': '^_', 'args': 'after-used', 'argsIgnorePattern': '^_' }
		],
		'prettier/prettier': [
			'error',
			{
				printWidth: 120,
				tabWidth: 4,
				useTabs: true,
				semi: false,
				singleQuote: true,
				quoteProps: 'as-needed',
				jsxSingleQuote: false,
				trailingComma: 'all',
				bracketSpacing: true,
				jsxBracketSameLine: false,
				arrowParens: 'always',
				proseWrap: 'preserve',
				htmlWhitespaceSensitivity: 'css',
				endOfLine: 'lf',
			},
		],
	},
}
