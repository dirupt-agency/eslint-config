/*
| Developed by Dirupt
| Filename : index.js
| Author : Philippe DESPLATS (philippe@dirupt.com)
*/

import importPlugin from 'eslint-plugin-import'
import unusedImports from 'eslint-plugin-unused-imports'

/*
|--------------------------------------------------------------------------
| Common
|--------------------------------------------------------------------------
*/

/**
 * Default set of files to ignore (credit: https://github.com/adonisjs/eslint-config)
 */
export const IGNORE_LIST = [
	'eslint.config.js',
	'eslint.config.ts',
	'*.min.*',
	'*.d.ts',
	'CHANGELOG.md',
	'dist/**',
	'LICENSE*',
	'output/**',
	'coverage/**',
	'temp/**',
	'build/**',
	'dist/**',
	'public/assets/**',
	'pnpm-lock.yaml',
	'yarn.lock',
	'package-lock.json',
	'__snapshots__/**',
	'resources/**',
	'!.github',
	'!.vscode',
	// Next.js specific
	'.next/**',
	'out/**',
	'node_modules/**',
	'*.lock',
	'*.log',
	'next-env.d.ts',
	'.vercel',
	'sw.js',
	'workbox-*.js',
]

/*
|--------------------------------------------------------------------------
| Bases
|--------------------------------------------------------------------------
*/

// eslint-plugin-import
// ---------------------------------------------------------------------------

/**
 * Object containing the plugin
 */
export const pluginImport = {
	import: importPlugin,
}

/**
 * Object containing the rules
 */
export const rulesImport = {
	'no-unused-vars': 'off',
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
}

/**
 * ```js
 * import { baseEslintImport } from "@dirupt/eslint-config";
 *
 * export default [
 * 	baseEslintImport(),
 * ]
 * ```
 */
export function baseEslintImport() {
	return {
		plugins: pluginImport,
		rules: rulesImport,
	}
}

// eslint-plugin-unused-imports
// ---------------------------------------------------------------------------

/**
 * Object containing the plugin
 */
export const pluginUnusedImports = {
	'unused-imports': unusedImports,
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

/**
 * ```js
 * import { baseEslintUnusedImports } from "@dirupt/eslint-config";
 *
 * export default [
 * 	baseEslintUnusedImports(),
 * ]
 * ```
 */
export function baseEslintUnusedImports() {
	return {
		plugins: pluginUnusedImports,
		rules: rulesUnusedImports,
	}
}

/*
|--------------------------------------------------------------------------
| Configs
|--------------------------------------------------------------------------
*/

/**
 * ESLint configuration for AdonisJS, please add in your eslint.config.js :
 * ```js
 * import { configApp } from '@adonisjs/eslint-config'
 * import { configAdonis } from '@dirupt/eslint-config'
 *
 * export default configApp(configAdonis())
 * ```
 */
export function configAdonis() {
	return {
		plugins: {
			...pluginImport,
			...pluginUnusedImports,
		},
		rules: {
			...rulesImport,
			...rulesUnusedImports,
		},
	}
}
