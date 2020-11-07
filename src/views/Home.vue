<template>
  <div class="home">
    <button @click="handleClick('back')">返回上一页</button>
    <button @click="handleClick('push')">跳转到argu</button>
    <button @click="handleClick('replace')">替换到parent</button>
    <p>{{ food }}</p>
    <button @click="getInfo">请求数据</button>
    <button @click="handleLogout">登出</button>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import { getUserInfo } from "@/api/user";
import { mapActions } from "vuex";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  props: {
    food: {
      type: String,
      default: "apple",
    },
  },
  //组件内守卫 每个组件都有三个钩子 一定要加next() 在路由触发 页面渲染前
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      //不能使用this当前实例 可以使用回调函数获取实例 vm就是组件的实例
      //console.log(vm);
    });
  },
  //即将离开页面的时候触发 next(false)页面不跳转 可以使用this当前实例
  beforeRouteLeave(to, from, next) {
    //confirm("您确定要离开吗？") ? next() : next(false);
    next();
  },
  methods: {
    ...mapActions({
      logout: "user/logout",
    }),
    handleClick(type) {
      if (type == "back") this.$router.go(-1);
      //else if (type == "push") this.$router.push("/parent");
      //else if (type == "push") this.$router.push("/argu");
      //else if (type == "push") this.$router.push({name:'argu',params:{name:'Dylan'}});
      // else if (type == "push") this.$router.push({name:'argu',params:{name:'lison'}});
      /*else if (type == "push") {
        const name = "Dylan";
        this.$router.push({ path: `/argu/${name}` });
			} */ else if (
        type == "push"
      ) {
        this.$router.push({ name: `argu`, params: { name: "Dylan" } });
      } else if (type == "replace") this.$router.replace({ name: "Parent" });
    },
    getInfo() {
      getUserInfo({ userId: 21 }).then((res) => {
        console.log("res:", res);
      });
    },
    handleLogout() {
      this.logout();
      this.$router.push("/login");
    },
  },
};
</script>
