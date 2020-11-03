<template>
  <div>
    <p>Count to</p>
    <count-to :end-val="endVal" ref="countTo" @on-animation-end="handleEnd">
      <span slot="left">总金额</span>
      <span slot="right">元</span>
    </count-to>
    <button @click="getNumber">获取数据</button>
    <button @click="updateNumber">更新值</button>
  </div>
</template>
<script>
import CountTo from "@/components/count-to";
export default {
  name: "count_to",
  components: {
    CountTo,
  },
  data() {
    return {
      endVal: 100,
    };
  },
  methods: {
    getNumber() {
			console.log(`now -> ${this.$refs.countTo.getCount()}`);
    },
    updateNumber() {
      this.endVal += Math.random() * 100;
    },
    handleEnd(endVal) {
      console.log(`end -> ${endVal}`);
    },
  },
};
</script>
