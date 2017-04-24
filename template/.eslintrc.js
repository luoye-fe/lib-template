module.exports = {
	root: true,
	{{#if_eq typeScript false}}
	parser: 'babel-eslint',
	{{/if_eq}}
	{{#if_eq typeScript true}}
	parser: 'typescript-eslint-parser',
	{{/if_eq}}
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
	  	{{#if_eq lintConfig "standard"}}
	  	// allow paren-less arrow functions
	  	'arrow-parens': 0,
	  	// allow async-await
	  	'generator-star-spacing': 0
	  	{{/if_eq}}
	}
};
