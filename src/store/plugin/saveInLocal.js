//持久化存储插件

export default store => {
	if ( localStorage.state ) store.replaceState(JSON.parse(localStorage.state))
	//每次提交mutation之后都会执行这个回调函数subscribe
	store.subscribe((mutation, state) => {
		//
		localStorage.state = JSON.stringify(state)
	})
}
