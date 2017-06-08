var path = require('path');

var babel = require('rollup-plugin-babel');

var commonjs = require('rollup-plugin-commonjs');
var nodeResolve = require('rollup-plugin-node-resolve');

{{#lint}}
var eslint = require('rollup-plugin-eslint');{{/lint}}

var env = require('./env.js');

var config = {
	entry: path.join(__dirname, '../src/index.js'),
	plugins: [
		{{#lint}}eslint(),
		{{/lint}}nodeResolve({
	      	jsnext: true,
	      	main: true
	    }),
	    commonjs({
	    	include: 'node_modules/**',
	    }),
	    babel({
	    	exclude: 'node_modules/**'
	    })
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
