<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{ name: 'home' }">Home</router-link> |
      <router-link :to="{ name: 'about' }">About</router-link>
    </div>
		<!--
			路由切换动效 多个组件用 transition-group 单个组件用 transition
			需要为每个组件设置一个key值
			给transition一个name值
			css:
			name-enter/name-enter-active/name-enter-to
			name-leave/name-leave-active/name-leave-to
			-->
    <transition-group name="router">
      <router-view key="default" />
      <router-view key="email" name="email" />
      <router-view key="tel" name="tel" />
    </transition-group>
  </div>
</template>

<style lang="less">
.router-enter {
  opacity: 0;
}
.router-enter-active {
  transition: opacity 1s;
}
.router-enter-to {
  opacity: 1;
}
.router-leave {
  opacity: 1;
}
.router-leave-active {
  transition: opacity .3s;
}
.router-leave-to {
  opacity: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
