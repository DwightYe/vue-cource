import axios from "axios"
import { baseURL } from '@/config/index'

class HttpRequest {
	constructor(baseUrl = baseURL) {
		//this 指代要创建的实例
		this.baseUrl = baseUrl
		this.queue = {}
	}

	//全局通用配置
	getInsideConfig() {
		const config = {
			baseURL: this.baseUrl,
			headers: {

			}
		}
		return config
	}

	//拦截器
	interceptors(instance, url) {
		//请求拦截器
		instance.interceptors.request.use(config => {
			//Spin.show() loading效果
			if (!Object.keys(this.queue).length) { /* Spin.show() */ }
			this.queue[url] = true
			return config
		}, error => {
			return Promise.reject(error)
		})
		//响应拦截器
		instance.interceptors.response.use(res => {
			delete this.queue[url]
			const { data,status } = res
			return { data,status }
		}, error => {
			delete this.queue[url]
			return Promise.reject(error)
		})
	}

	request(options) {
		const instance = axios.create()
		//es6方法 合并配置属性
		options = Object.assign(this.getInsideConfig(), options)
		this.interceptors(instance, options.url)
		return instance(options)
	}

}

export default HttpRequest
