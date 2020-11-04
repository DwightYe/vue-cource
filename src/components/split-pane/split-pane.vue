<template>
  <div class="split-pane-wrapper" ref="outer">
    <div
      class="pane pane-left"
      :style="{
        width: leftOffsetPrecent,
        paddingRight: `${this.triggerWidth / 2}px`,
      }"
    >
      <slot name="left"></slot>
    </div>
    <div
      class="pane-trigger-con"
      @mousedown="handleMousedown"
      :style="{ left: triggrLeft, width: `${triggerWidth}px` }"
    ></div>
    <div
      class="pane pane-right"
      :style="{
        left: leftOffsetPrecent,
        paddingLeft: `${this.triggerWidth / 2}px`,
      }"
    >
      <slot name="right"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "SplitPane",
  props: {
    value: {
      type: Number,
      default: 0.5,
    },
    triggerWidth: {
      type: Number,
      default: 8,
    },
    min: {
      type: Number,
      default: 0.1,
    },
    max: {
      type: Number,
      default: 0.9,
    },
  },
  data() {
    return {
      initOffset: 0,
      canMove: true,
    };
  },
  computed: {
    leftOffsetPrecent() {
      return `${this.value * 100}%`;
    },
    triggrLeft() {
      return `calc(${this.value * 100}% - ${this.triggerWidth / 2}px)`;
    },
  },
  methods: {
    handleMousedown(event) {
      document.addEventListener("mousemove", this.handleMousemove);
      document.addEventListener("mouseup", this.handleMouseup);
      this.initOffset =
        event.pageX - event.srcElement.getBoundingClientRect().left;
      this.canMove = true;
    },
    handleMousemove(event) {
      if (!this.canMove) return;
      const outerRect = this.$refs.outer.getBoundingClientRect();
      let offsetPrecent =
        (event.pageX -
          this.initOffset +
          this.triggerWidth / 2 -
          outerRect.left) /
        outerRect.width;
      if (offsetPrecent < this.min) offsetPrecent = this.min;
      if (offsetPrecent > this.max) offsetPrecent = this.max;
      //子组件改动父组件参数需要调用方法
      // this.$emit("input", offsetPrecent);
      this.$emit("update:value", offsetPrecent);
    },
    handleMouseup() {
      this.canMove = false;
    },
  },
};
</script>
<style lang="less">
.split-pane-wrapper {
  width: 100%;
  height: 100%;
  position: relative;
  .pane {
    position: absolute;
    height: 100%;
    top: 0%;
    &-left {
      background: rgb(167, 211, 255);
    }
    &-right {
      right: 0;
      bottom: 0;
      background: rgb(255, 238, 182);
    }
    &-trigger-con {
      width: 8px;
      height: 100%;
      top: 0%;
      position: absolute;
      z-index: 10;
      background: #fff;
			user-select: none;
			cursor: e-resize;
    }
  }
}
</style>
