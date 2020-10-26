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
    <button @click="handleChangeAppName">修改AppName</button>
  </div>
</template>

<script>
import AInput from "_c/AInput.vue";
import AShow from "_c/AShow.vue";
import { mapState, mapGetters } from "vuex";
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
    handleChangeAppName() {
      this.$store.commit("SET_APP_NAME", "newAppName");
      this.$store.commit("SET_APP_VERSION");
    },
  },
};
</script>

<style scoped>
</style>
