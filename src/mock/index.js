import Mock from 'mockjs'
import { getUserInfo } from './response/user'
const Random = Mock.Random

Mock.mock(/\/getUserInfo/, 'post', getUserInfo)

Mock.setup({timeout:'100-600'})

Random.extend({
	fruit(){
		const fruit = ['apple','banana','orange']
		return this.pick(fruit)
	}
})

export default Mock
