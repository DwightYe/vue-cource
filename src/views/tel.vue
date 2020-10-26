<template>
  <div>
    <p>Tel : 17888888888</p>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "",
    };
  },
  mounted() {
		//$on 给当前实例绑定监听
    this.$bus.$on("on-click", (mes) => {
      this.message = mes;
    });
  },
};
</script>
