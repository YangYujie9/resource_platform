<template>
  <div class="management">
    <!-- <p>站点管理</p> -->
    <el-menu
      :default-openeds="['1', '3']"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      router>
      <el-submenu index="1" :collapse="isCollapse" :collapse-transition="false">
        <template slot="title">站点管理</template>
        <el-menu-item-group>
          <el-menu-item index="information">站点信息</el-menu-item>
          <el-menu-item index="navigation">导航栏目</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: true,
      isCollapse: false
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    //  点击按钮，切换菜单的折叠与展开
    toggleCollapse() {
      this.isCollapse = !this.isCollapse;
    }
  }
};
</script>

<style lang="less" scoped>
.management {
  width: 350px;
  height: 800px;
  margin-top: 20px;
  margin-left: 215px;
  // background-color: #ccc;
}
.management p {
  // margin: 0px 225px 0 20px;
  // margin-top: 30px;
  margin-left: 35px;
  color: #565a64;
}
</style>