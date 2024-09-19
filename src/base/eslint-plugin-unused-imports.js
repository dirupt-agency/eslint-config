/*
| Developed by Dirupt
| Filename : eslint-plugin-unused-imports.mjs
| Author : Philippe DESPLATS (philippe@dirupt.com)
*/

import unusedImports from 'eslint-plugin-unused-imports'

/**
 * Object containing the plugin
 */
export const pluginUnusedImports = {
	unusedImports: unusedImports,
}

/**
 * Object containing the rules
 */
export const rulesUnusedImports = {
	'no-unused-vars': 'off',
	'unused-imports/no-unused-imports': 'error',
	'unused-imports/no-unused-vars': [
		'warn',
		{
			vars: 'all',
			varsIgnorePattern: '^_',
			args: 'after-used',
			argsIgnorePattern: '^_',
		},
	],
}

export default {
	plugins: {
		'unused-imports': pluginUnusedImports,
	},
	rules: rulesUnusedImports,
}
