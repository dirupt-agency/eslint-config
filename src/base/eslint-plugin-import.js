/*
| Developed by Dirupt
| Filename : eslint-plugin-import.mjs
| Author : Philippe DESPLATS (philippe@dirupt.com)
*/

import importPlugin from "eslint-plugin-import";

/**
 * Object containing the plugin
 */
export const pluginImport = {
	import: importPlugin,
};

/**
 * Object containing the rules
 */
export const rulesImport = {
	"no-unused-vars": "off",
	"import/order": [
		"error",
		{
			groups: [
				"builtin",
				"external",
				"parent",
				"sibling",
				"index",
				"internal",
				"object",
			],
		},
	],
	"import/extensions": [
		"error",
		{
			js: "never",
			jsx: "never",
			svg: "always",
			ts: "never",
			tsx: "never",
		},
	],
	"import/prefer-default-export": "off",
};

/**
 * ESLint configuration for import plugin :
 * ```js
 * import { configImport } from "@dirupt/eslint-config";
 * ```
 */
export default {
	plugins: {
		import: pluginImport,
	},
	rules: rulesImport,
};
