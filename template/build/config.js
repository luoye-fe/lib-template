var path = require('path');

var babel = require('rollup-plugin-babel');

var commonjs = require('rollup-plugin-commonjs');
var nodeResolve = require('rollup-plugin-node-resolve');
var eslint = require('rollup-plugin-eslint');
{{#less}}
var postcss = require('rollup-plugin-postcss');
var less = require('postcss-less-engine');
var autoprefixer = require('autoprefixer');
{{/less}}

var env = require('./env.js');

var config = {
	entry: path.join(__dirname, '../src/index.js'),
	plugins: [
		{{#less}}
		postcss({
			extensions: ['.less'],
			plugins: [
				less(),
				autoprefixer({
	                browsers: ['>1%', 'ie 9']
	            })
			],
			parser: less.parser
		}),
		{{/less}}
		eslint(),
		nodeResolve({
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
