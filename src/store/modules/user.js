const state = {
	userName: "Dylan"
}

const getters = {
	firstLetter: (state) => state.userName.substr(0, 1)
}

const mutations = {

}

const actions = {

}

export default {
	//命名空间 模块密闭 如果不开启命名空间 mapGetters/Action/State 就可以全局查找了
	namespaced: true,
	state,
	getters,
	mutations,
	actions
}
