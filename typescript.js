/*
| Developed by Dirupt
| Filename : typescript.js
| Author : Philippe DESPLATS (philippe@di-rupt.com)
*/

module.exports = {
	overrides: [
		{
			parser: '@typescript-eslint/parser',
			files: ['*.ts', '*.tsx'], // Your TypeScript files extension
			// As mentioned in the comments, you should extend TypeScript plugins here,
			// instead of extending them outside the `overrides`.
			// If you don't want to extend any rules, you don't need an `extends` attribute.
			extends: [
				'plugin:@typescript-eslint/eslint-recommended',
				'plugin:@typescript-eslint/recommended',
				'plugin:@typescript-eslint/recommended-requiring-type-checking',
			],
			plugins: ['@typescript-eslint'],
			parserOptions: {
				project: ['./tsconfig.json'], // Specify it only for TypeScript files
			},
			rules: {
				'@typescript-eslint/ban-ts-comment': 'off',
				'@typescript-eslint/no-empty-interface': 'off',
				'@typescript-eslint/no-unsafe-assignment': 'off',
				'@typescript-eslint/no-unsafe-return': 'off',
				'@typescript-eslint/no-unsafe-member-access': 'off',
				'@typescript-eslint/no-misused-promises': 'off',
				'@typescript-eslint/no-unsafe-argument': 'off',
				'@typescript-eslint/unbound-method': 'off',
				'@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true }],
				'@typescript-eslint/no-unsafe-call': 'off',
				'@typescript-eslint/no-explicit-any': 'off',
				'@typescript-eslint/require-await': 'off',
				'@typescript-eslint/restrict-template-expressions': 'off',
				'@typescript-eslint/no-use-before-define': ['error', { variables: false }],
				'@typescript-eslint/explicit-member-accessibility': 'off',
			},
		},
	],
}
