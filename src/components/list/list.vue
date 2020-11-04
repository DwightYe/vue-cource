<template>
  <div>
    <p>list component</p>
    <ul>
      <li v-for="(item, index) in list" :key="`item_${index}`">
        <span v-if="!render">{{ item.name }}</span>
        <render-dom v-else :render-func="render" :name="item.name"></render-dom>
      </li>
    </ul>
  </div>
</template>
<script>
import RenderDom from "_c/render-dom";
export default {
  name: "list",
  components: { RenderDom },
  props: {
    list: {
      type: Array,
      default: () => [],
    },
    render: {
      type: Function,
      default: () => {},
    },
  },
};
</script>
