var path = require('path');

var babel = require('rollup-plugin-babel');

var env = require('./env.js');

var config = {
	entry: path.join(__dirname, '../src/app.js'),
	plugins: [
		babel()
	]
};


if (env === 'dev') {
	module.exports = Object.assign({
		format: 'umd',
		moduleName: '{{ moduleName }}'
		dest: path.join(__dirname, '../dist/{{ name }}.js')
	}, config);
} else {
	module.exports = config;
}
