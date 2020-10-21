const BASE_URL = process.env.NODE_ENV === 'prodution' ? '/iview-admin/' : '/'

const path = require('path')

const resolve = dir => path.join(__dirname, dir)

module.exports = {
	lintOnSave: false,
	publicPath: BASE_URL,
	chainWebpack: config => {
		config.resolve.alias
			.set('@', resolve('src'))
			.set('_c', resolve('src/components'))
	},
	productionSourceMap: false,
	devServer: {
		proxy: 'http://localhost:4000'
	}
}
