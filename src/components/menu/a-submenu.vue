<template>
  <ul class="a-submenu">
    <div class="a-submenu-title" @click="handClick">
      <slot name="title"></slot>
      <span class="shink-icon" :style="{ transform:`rotateZ(${showChild? 0:180}deg)` }">^</span>
    </div>
    <div v-show="showChild" class="a-sub-menu-child-box">
      <slot></slot>
    </div>
  </ul>
</template>
<script>
export default {
  name: "ASubmenu",
  data() {
    return {
      showChild: true,
    };
  },
  methods: {
    handClick() {
      this.showChild = !this.showChild;
    },
  },
};
</script>
<style lang="less">
.a-submenu {
  &-title {
    position: relative;
    .shink-icon {
			position: absolute;
			transition: transform .3s;
    }
  }
  &-child-box {
    overflow: hidden;
  }
}
</style>
