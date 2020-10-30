import Vue from 'vue'
import Vuex from 'vuex'
import state from "./state"
import getters from "./getters"
import mutations from "./mutations"
import actions from "./actions"
import user from "./modules/user"
import saveInLocal from "./plugin/saveInLocal"

Vue.use(Vuex)

export default new Vuex.Store({
	//严格模式 true状态直接赋值会报错
	strict: process.env.NODE_ENV === 'development',
	state,
	mutations,
	actions,
	getters,
	modules: {
		user
	},
	plugins: [saveInLocal]
})
