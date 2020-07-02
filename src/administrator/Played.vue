<template>
  <div class="headers">
    <el-container>
      <el-header>
        <div class="handle">
          <router-link :to="{ path: '/Played'}">
            <img src="../assets/images/root.png" alt />
          </router-link>
        </div>
        <div class="platform">
          <p>教育管理平台 > 基础管理</p>
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-container>
            <el-aside width="200px">
              <div class="toggle" @click="toggleCollapse">
                <img src="../assets/images/peak.png" alt="">
              </div>
              <el-menu
                :default-openeds="['1', '3']"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                :collapse="isCollapse"
                router>
                <el-submenu index="1" :collapse="isCollapse" :collapse-transition="false">
                  <template slot="title">基础数据</template>
                  <el-menu-item-group>
                    <el-menu-item index="Rolemanagement">角色管理</el-menu-item>
                    <el-menu-item index="Learning">学段年级</el-menu-item>
                    <el-menu-item index="Discipline">学科管理</el-menu-item>
                    <el-menu-item index="Organizational">组织架构</el-menu-item>
                    <el-menu-item index="Classmanagement">班级管理</el-menu-item>
                    <el-menu-item index="Usermanagement">用户管理</el-menu-item>
                    <el-menu-item index="Rightsmanagement">权限管理</el-menu-item>
                    <el-menu-item index="Sitemanagement">站点管理</el-menu-item>
                    <el-menu-item index="Chapterknowledge">章节知识</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
                <el-submenu index="2">
                  <template slot="title">审核管理</template>
                  <el-menu-item-group>
                    <el-menu-item index="Auditing">密码审核</el-menu-item>
                    <el-menu-item index="Resource">资源管理</el-menu-item>
                    <el-menu-item index="Exampool">题库管理</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
                <el-submenu index="3">
                  <template slot="title">系统配置</template>
                  <el-menu-item-group>
                    <el-menu-item index="System">系统配置</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
              </el-menu>
            </el-aside>
          </el-container>
        </el-aside>
        <el-main>
          <!-- <route-view></route-view> -->
          Main
          <!-- <el-card></el-card> -->
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: true,
      isCollapse: false
    };
    // 是否折叠
    isCollapse: false;
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

<style>
.el-header,
.el-footer {
  line-height: 60px;
  color: #fefeff;
  background-color: #5a8bff;
}
.el-aside {
  margin-top: 10px;
  background-color: #fff;
  color: #333;
  text-align: center;
  line-height: 200px;
}
.el-radio-button__orig-radio:checked + 
.el-radio-button__inner {
  border-color: #5182f4;
  background-color: #5182f4;
  -webkit-box-shadow: -1px 0 0 0 #5182f4;
}
.handle .el-radio-button:first-child 
.el-radio-button__inner {
  border: none;
  border-radius: none;
}
.handle .el-radio-button__inner {
  border: 1px solid #5182f4;
  height: 57px;
  width: 50px;
  padding: 13px 0px;
  background: #5182f4;
}
.el-main {
  background-color: #fff;
  color: #333;
  text-align: center;
  line-height: 160px;
  margin: 10px 20px 0px 20px;
}
.el-menu {
  margin-left: -15px;
  width: 185px;
  border-right: 1px solid #fff;
}
.el-submenu__title i {
  color: #565a64;
  font-size: 20px;
  font-weight: 700;
}
.el-submenu__icon-arrow {
  right: -15px;
}
.el-menu-item.is-active {
  color: #565a64;
}
.el-submenu__title:hover {
  background-color: #9cb9ff;
}
.el-menu-item,
.el-submenu__title {
  height: 40px;
  line-height: 40px;
}
.el-submenu .el-menu-item:hover {
  /* padding: 0 0px; */
  line-height: 25px;
  margin-left: 30px;
  background-color: #9cb9ff;
}
.el-submenu .el-menu-item {
  height: 35px;
  line-height: 30px;
  padding: 5px 0px;
}
.el-menu-item-group__title {
  padding: 0px;
}
body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>

<style lang="less" scoped>
.headers {
  height: 100%;
  background-color: #f0f3fa;
}
.handle {
  width: 260px;
  height: 60px;
  margin-left: -18px;
  background-color: #5182f4;
}
.handle img {
  width: 75px;
  margin: 14px 35px;
}
.toggle {
  width: 65px;
  height: 60px;
  letter-spacing: 0.2em;
  cursor: pointer;
  position: absolute;
  top: -70px;
  left: 180px;
  font-size: 22px;
  color: #fff;
}
.toggle img {
  width: 15px;
  height: 15px;
}
.platform {
  margin: -60px 365px;
}
.platform p {
  display: inline-block;
  margin-left: -80px;
  line-height: 20px;
  font-size: 16px;
  color: #fff;
}
</style>