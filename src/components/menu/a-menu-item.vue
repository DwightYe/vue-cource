<template>
  <li class="a-menu-item">
    <slot></slot>
  </li>
</template>
<script>
export default {
  name: "AMenuItem",
};
</script>
<style lang="less">
.a-menu-item {
  padding: 5px 15px;
  color: #515a61;
  cursor: pointer;
  &:hover {
    color: #2d8cf0;
    background: #f0faff;
  }
}
</style>
