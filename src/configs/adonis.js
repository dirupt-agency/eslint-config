/*
| Developed by Dirupt
| Filename : adonis.mjs
| Author : Philippe DESPLATS (philippe@dirupt.com)
*/

import { pluginImport, rulesImport } from '../base/eslint-plugin-import'
import { pluginUnusedImports, rulesUnusedImports } from '../base/eslint-plugin-unused-imports'

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
