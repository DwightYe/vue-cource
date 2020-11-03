<template>
  <div>
    <p>count to 组件</p>
		<!-- 明明插槽 -->
    <slot name="left"></slot>
    <span :id="eleId" :class="countClass" ref="number"></span>
    <slot name="right"></slot>
  </div>
</template>
<script>
import { CountUp } from "countup.js";
export default {
  name: "CountTo",
  computed: {
    eleId() {
      //每个组件都不同的uid
      return `count_up_${this._uid}`;
    },
    countClass() {
      return `count-to-number${this.className}`;
    },
  },
  data() {
    return {
      counter: {},
      options: {},
    };
  },
  props: {
    startVal: { type: Number, default: 0 },
    endVal: { type: Number, default: 200 },
    decimalPlaces: { type: Number, default: 0 },
    duration: { type: Number, default: 2 },
    useEasing: { type: Boolean, default: true },
    useGrouping: { type: Boolean, default: true },
    separator: { type: String, default: "," },
    decimal: { type: String, default: "." },
    prefix: { type: String, default: "" },
    suffix: { type: String, default: "" },
    className: { type: String, default: "" },
  },
  methods: {
    getCount() {
      return this.$refs.number.innerText;
    },
    emitEndEvent() {
      setTimeout(() => {
        this.$emit("on-animation-end", Number(this.getCount()));
      }, this.duration * 1000 + 5);
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.options = {
        startVal: this.startVal,
        decimalPlaces: this.dec,
        duration: this.duration,
        useEasing: this.useEasing,
        useGrouping: this.useGrouping,
        separator: this.separator,
        decimal: this.decimal,
        prefix: this.prefix,
        suffix: this.suffix,
      };
      this.counter = new CountUp(this.eleId, this.endVal, this.options);
      this.counter.start();
      this.emitEndEvent();
    });
  },
  watch: {
    endVal(newVal, oldVal) {
      this.counter.update(newVal);
      this.emitEndEvent();
    },
  },
};
</script>
<style lang="less">
@import "./count-to.less";
</style>
