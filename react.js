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
	plugins: ['jsx-a11y'],
	rules: {
		'jsx-a11y/anchor-is-valid': 'off',
		'jsx-a11y/label-has-associated-control': [
			'error',
			{
				assert: 'either',
			},
		],
		'jsx-a11y/label-has-for': 'off',
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
