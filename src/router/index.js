import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from "./router"
import { setTitle } from "@/lib/util.js"

Vue.use(VueRouter)

const router = new VueRouter({
	// mode: 'history',
	routes
})

const HAS_LOGINED = true

//全局守卫
router.beforeEach((to, from, next) => {
	to.meta && setTitle(to.meta.title)
	if (to.name !== 'login') {
		HAS_LOGINED ? next() : next({
			name: 'login'
		})
	} else {
		HAS_LOGINED ? next({
			name: 'home'
		}) : next()
	}
})

// router.beforeResolve() 全局守卫 在导航被确认前 所有组件内守卫和异步路由之后调用 参数等同beforeEach

//后置钩子 不能阻止路由跳转 没有next
router.afterEach((to,from)=>{

})

/**
 * 完整导航解析流程
 * 1.导航激活
 * 2.在失活组件里调用离开守卫
 * 3.调用全局的前置守卫 beforeEach
 * 4.在复用组件里调用 beforeRouteUpdate
 * 5.调用路由独享守卫 beforeEnter
 * 6.解析异步路由组件
 * 7.在被激活的组件里调用 beforeRouteEnter
 * 8.调用全局解析守卫 beforeResolve
 * 9.导航确认
 * 10.调用全局后置守卫 afterEach
 * 11.触发DOM更新渲染
 * 12.用创建好的实例调用 beforeRouteEnter守卫里的next()里的回调函数
 */

export default router
