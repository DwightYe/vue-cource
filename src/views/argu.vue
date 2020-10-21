<template>
  <div>name : {{ name }}</div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: "Dylan",
    },
  },
  //路发生变化 组件复用的时候调用 可以使用this当前实例
  beforeRouteUpdate(to, from, next) {
    console.log(from.name, to.name);
  },
};
</script>

<style scoped>
</style>
