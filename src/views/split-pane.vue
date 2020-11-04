<template>
  <div class="split-pane-con">
    <split-pane :value.sync="offset">
      <div slot="left">left</div>
      <div slot="right">right</div>
    </split-pane>
  </div>
</template>
<script>
import SplitPane from "_c/split-pane";
export default {
  components: {
    SplitPane,
  },
  data() {
    return {
      offset: 0.8,
    };
  },
};
</script>
<style lang="less" scoped>
.split-pane-con {
  width: 600px;
  height: 400px;
  background: #edfff3;
  border: 1px solid #ddd;
  margin: 30px auto;
}
</style>
