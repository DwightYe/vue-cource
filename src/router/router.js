import Home from '@/views/Home.vue'

export default [{
	path: '/',
	alias: '/home_page',
	name: 'home',
	component: Home,
	props: route => ({
		food: route.query.food
	}),
	//路由独享守卫 添加了beforeEnter()之后 一定要调用next() 否则不跳转
	beforeEnter: ((to, from, next) => {
		//if (from.name == 'about') console.log('这是从about页过来的')
		//else console.log('这不是从about页过来的');
		next()
	})
}, {
	path: '/about',
	name: 'about',
	component: () => import('@/views/About.vue'),
	props: {
		food: 'banana'
	},
	meta: {
		title: '关于'
	}
}, {
	path: '/argu/:name',
	name: 'argu',
	component: () => import('@/views/argu.vue'),
	props: true
}, {
	path: '/parent',
	name: 'parent',
	component: () => import('@/views/parent.vue'),
	children: [{
		path: 'child',
		component: () => import('@/views/child.vue')
	}]
}, {
	path: '/name_view',
	components: {
		default: () => import('@/views/child.vue'),
		email: () => import('@/views/email.vue'),
		tel: () => import('@/views/tel.vue')
	}
}, {
	path: "/main",
	redirect: to => '/'
}, {
	path: "/login",
	name: 'login',
	component: () => import('@/views/login.vue')
}, {
	path: "/store",
	name: 'store',
	component: () => import('@/views/store.vue')
}, {
	path: "/count-to",
	name: 'count_to',
	component: () => import('@/views/count-to.vue')
},{
	path: "/split-pane",
	name: 'split_pane',
	component: () => import('@/views/split-pane.vue')
}, {
	path: "*",
	component: () => import('@/views/error_404.vue')
}]
