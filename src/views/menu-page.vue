<template>
  <div class="menu-box">
    <!-- <a-menu>
      <a-menu-item>浙江理工大学</a-menu-item>
      <a-menu-item>杭州电子科技大学</a-menu-item>
      <a-submenu>
        <span slot="title">杭州电子科技大学-院系所</span>
        <a-menu-item>电子信息学院</a-menu-item>
        <a-menu-item>自动化学院</a-menu-item>
        <a-submenu>
          <span slot="title">自动化学院-专业</span>
          <a-menu-item>仪器科学与技术</a-menu-item>
          <a-menu-item>电气工程</a-menu-item>
        </a-submenu>
      </a-submenu>
    </a-menu> -->
    <a-menu>
      <template v-for="(item, index) in list">
        <a-menu-item v-if="!item.children" :key="`menu_item_${index}`">{{
          item.title
        }}</a-menu-item>
        <re-submenu
          v-else
          :key="`menu_item_${index}`"
          :parent="item"
          :index="index"
        ></re-submenu>
      </template>
    </a-menu>
  </div>
</template>
<script>
import menuComponents from "_c/menu";
import ReSubmenu from "./re-submenu";
export default {
  name: "menu_page",
  components: {
    ...menuComponents,
    ReSubmenu,
  },
  data() {
    return {
      list: [
        {
          title: "浙江大学",
        },
        {
          title: "浙江理工大学",
        },
        {
          title: "杭州电子科技大学",
          children: [
            {
              title: "电子信息学院",
              children: [
                {
                  title: "电子科学与技术（学术学位）",
                },
                {
                  title: "电子信息（专业学位）",
                },
              ],
            },
            {
              title: "通信工程学院",
              children: [
                {
                  title: "信息与通信工程（学术学位）",
                },
                {
                  title: "电子信息（专业学位）",
                },
              ],
            },
            {
              title: "自动化学院",
            },
          ],
        },
      ],
    };
  },
};
</script>
<style lang="less" scoped>
.menu-box {
  width: 600px;
  border: 1px solid ddd;
  box-shadow: 0 0 2px #ccc;
  border-radius: 5px;
  margin: 40px;
  padding: 20px;
  line-height: 1.6;
}
</style>
