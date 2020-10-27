<template>
  <div>
    <!-- v-model 语法糖 相当于:value :input -->
    <a-input v-model="inputValue" />
    <p>{{ inputValue }}-->{{ inputValueLastLetter }}</p>
    <a-show :content="inputValue" />
    <p>
      appName:{{ appName }},appWithVersion:{{ appWithVersion }},appVersion:{{
        appVersion
      }}
    </p>
    <p>userName:{{ userName }},firstLetter:{{ firstLetter }}</p>
    <button @click="handleChangeAppName">修改AppName和UserName</button>
    <button @click="registerModule">动态注册模块</button>
		<p v-for="(li,index) in todoList" :key="index"> {{ li }} </p>
  </div>
</template>

<script>
import AInput from "_c/AInput.vue";
import AShow from "_c/AShow.vue";
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "store",
  data() {
    return {
      inputValue: "",
    };
  },
  computed: {
    // appName() {
    //   return this.$store.state.appName;
    // },
    // userName() {
    // 	console.log(this.$store.state);
    //   return this.$store.state.user.userName;
    // },
    //...展开操作符
    ...mapState({
      appName: (state) => state.appName,
      userName: (state) => state.user.userName,
			appVersion: (state) => state.appVersion,
			//动态添加的模块需要特殊处理否则报错
      todoList: (state) => (state.user.todo ? state.user.todo.todoList : []),
    }),
    ...mapGetters({
      appWithVersion: "appWithVersion",
      firstLetter: "user/firstLetter",
    }),
    // appWithVersion() {
    // 	console.log(this.$store);
    //   return this.$store.getters.appWithVersion;
    // },
    inputValueLastLetter() {
      return this.inputValue.substr(-1, 1);
    },
  },
  components: {
    AInput,
    AShow,
  },
  methods: {
    ...mapMutations({
      SET_APP_NAME: "SET_APP_NAME",
      SET_USER_NAME: "user/SET_USER_NAME",
    }),
    ...mapActions({
      undateAppName: "undateAppName",
    }),
    handleChangeAppName() {
      //commit调用mutations  ，  dispatch 调用actions
      // this.$store.commit("SET_APP_NAME", "newAppName");
      // this.$store.commit("SET_APP_VERSION");
      // this.SET_APP_NAME("newAppName");
      // this.SET_USER_NAME("newUserName");
      // this.undateAppName()
      this.$store.dispatch("undateAppName");
    },
    registerModule() {
      //registerModule动态注册模块 在user里添加todo模块
      this.$store.registerModule(['user', 'todo'], {
        state: { todoList: ["学习Mutations", "学习Actions"] },
      });
    },
  },
};
</script>

<style scoped>
</style>
