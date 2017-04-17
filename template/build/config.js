var path = require('path');

var complieTools = {{#if isActive}}require('rollup-plugin-babel'){{else}}require('rollup-plugin-typescript'){{/if}};
{{#lint}}
var eslint = require('rollup-plugin-eslint');{{/lint}}

var env = require('./env.js');

var config = {
	entry: path.join(__dirname, '../src/index.{{#if_eq typeScript false}}js{{/if_eq}}{{#if_eq typeScript true}}ts{{/if_eq}}'),
	plugins: [
		{{#lint}}eslint(),
		{{/lint}}complieTools()
	]
};

if (env === 'dev') {
	module.exports = Object.assign({
		format: 'umd',
		moduleName: '{{ moduleName }}',
		dest: path.join(__dirname, '../dist/{{ name }}.js')
	}, config);
} else {
	module.exports = config;
}
