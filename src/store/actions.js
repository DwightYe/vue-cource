import {
	getAppName
} from '@/api/app'

//异步修改操作 ajax
const actions = {
	//es6 类似回调形式
	// undateAppName({commit}) {  //es6解构赋值
	// 	getAppName().then(res => {
	// 		const { info: { appName } } = res
	// 		commit('SET_APP_NAME', appName)
	// 	}).catch(err => {
	// 		console.log(err);
	// 	})
	// }
	//es8 async处理异步
	async undateAppName ({ commit }){
		try {
			const { info: { appName } } = await getAppName()
			commit('SET_APP_NAME', appName)
		} catch (error) {
			console.log(error);
		}
	}
}
export default actions
