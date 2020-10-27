import vue from 'vue'


//同步修改操作
const mutations = {
	SET_APP_NAME(state, params) {
		state.appName = params
	},
	SET_APP_VERSION(stste) {
		// vue响应式 在实例创建的时候没有的属相无法在修改后响应式更新 需要使用vue.set添加 同时会添加get和set
		vue.set(stste, 'appVersion', 'v1.0')
	}
}

export default mutations
