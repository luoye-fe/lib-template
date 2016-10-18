var path = require('path');

var babel = require('rollup-plugin-babel');

var env = require('./env.js');

var config = {
	entry: path.join(__dirname, '../src/app.js'),
	moduleName: '{{ moduleName }}',
	format: 'umd',
	plugins: [
		babel()
	]
};

if (env === 'dev') {
	module.exports = Object.assign({
		dest: path.join(__dirname, '../dist/{{ name }}.js')
	}, config);
} else {
	module.exports = config;
}