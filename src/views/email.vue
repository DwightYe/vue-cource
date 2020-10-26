<template>
  <div>
		<p>Email : ttasearfk@163.com</p>
		<button @click="handleClik">click</button>
	</div>
</template>

<script>
export default {
	methods:{
		handleClik(){
			//$emit 触发当前实例的事件
			this.$bus.$emit('on-click','hello')
		}
	},
  mounted() {
    console.log(this.$bus);
  },
};
</script>

<style scoped>
</style>
