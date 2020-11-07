import { login, authorization } from "@/api/user"
import { setToken } from '@/lib/util'

const state = {
	userName: "Dylan"
}

const getters = {
	firstLetter: (state) => state.userName.substr(0, 1)
}

const mutations = {
	SET_USER_NAME(state, params) {
		state.userName = params
	}
}

const actions = {
	//rootState 根State
	undateUserName({ commit, state, rootState, dispatch }){
		//dispatch触发其他actions
		// dispatch('xxx')
	},
  login ({ commit }, { userName, password }) {
    return new Promise((resolve, reject) => {
      login({ userName, password }).then(res => {
        if (res.code === 200 && res.data.token) {
          setToken(res.data.token)
          resolve()
        } else {
          reject(new Error('错误'))
        }
      }).catch(error => {
        reject(error)
      })
    })
  },
  authorization ({ commit }, token) {
    return new Promise((resolve, reject) => {
      authorization().then(res => {
        if (parseInt(res.code) === 401) {
          reject(new Error('token error'))
        } else {
          setToken(res.data.token)
          resolve(res.data.rules.page)
        }
      }).catch(error => {
        reject(error)
      })
    })
	},
	logout(){
		setToken('')
	}
}

export default {
	//命名空间 模块密闭 如果不开启命名空间 mapGetters/Action/State 就可以全局查找了
	namespaced: true,
	state,
	getters,
	mutations,
	actions,
	modules:{

	}
}
