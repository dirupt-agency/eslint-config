/*
| Developed by Dirupt
| Filename : react.js
| Author : Philippe DESPLATS (philippe@di-rupt.com)
*/

module.exports = {
	extends: [
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
	],
	rules: {
		'react/jsx-props-no-spreading': 'off',
		'react/no-children-prop': ['warn'],
		'react/jsx-no-leaked-render': ['warn', { validStrategies: ['ternary'] }],
		'react/jsx-filename-extension': ['warn', { extensions: ['.ts', '.tsx'] }],
		'react/no-namespace': 'off',
		'react/react-in-jsx-scope': 'off',
		'react-hooks/exhaustive-deps': 'warn',
		'no-restricted-imports': [
			'error',
			{
				'patterns': ['@mui/*/*/*']
			}
		]
	},
}
