<template>
  <div>
    <p>render-page</p>
    <list :list="list" :render="renderFunc"></list>
  </div>
</template>
<script>
import List from "_c/list";
export default {
  data() {
    return {
      list: [{ name: "赵" }, { name: "钱" }],
    };
  },
  components: { List },
  methods: {
    renderFunc(h, name) {
			// return h("i", { style: { color: "orange" } }, name);
			return (
				<i style={{color:"pink"}}>{name}</i>
			)
    },
  },
};
</script>
