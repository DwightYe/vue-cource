<template>
  <ul class="a-menu">
    <slot></slot>
  </ul>
</template>
<script>
export default {
  name: "AMenu",
};
</script>
<style lang="less">
.a-menu {
  padding: 0;
  &,
  * {
    list-style: none;
  }
}
</style>
