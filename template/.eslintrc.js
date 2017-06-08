module.exports = {
	root: true,
	parser: 'babel-eslint',
	parserOptions: {
		sourceType: 'module'
	},
	env: {
		browser: true,
	},
	{{#if_eq lintConfig "standard"}}
	// https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
	extends: 'standard',
	{{/if_eq}}
	{{#if_eq lintConfig "airbnb"}}
	extends: 'airbnb-base',
	{{/if_eq}}
	// add your custom rules here
	rules: {
		indent: [2, 'tab'],
		'no-tabs': 0,
		'no-console': 0,
		'arrow-parens': 0,
		{{#if_eq lintConfig "airbnb"}}
		'import/extensions': 0,
	  	{{/if_eq}}
	  	{{#if_eq lintConfig "standard"}}
	  	// allow paren-less arrow functions
	  	'arrow-parens': 0,
	  	// allow async-await
	  	'generator-star-spacing': 0
	  	{{/if_eq}}
	}
};
