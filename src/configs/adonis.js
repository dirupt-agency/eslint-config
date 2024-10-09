/*
| Developed by Dirupt
| Filename : adonis.js
| Author : Philippe DESPLATS (philippe@dirupt.com)
*/

import { pluginImport, rulesImport } from '../plugins/import.js'
import { pluginUnusedImports, rulesUnusedImports } from '../plugins/unused-imports.js'

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
			...rulesUnusedImports,
			...Object.fromEntries(Object.entries(rulesImport).filter(([key]) => key !== 'import/extensions')),
			'import/extensions': 'off',
		},
	}
}
