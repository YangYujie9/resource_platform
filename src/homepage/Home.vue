<template>
  <div class="header">
    <div class="pass">
      <div class="fl">
        <p>UFO您好，欢迎来到教育云资源平台！</p>
      </div>
      <div class="fr">
        <ul>
          <li>
            <img src="../assets/images/user.png" alt />
            <sapn class="ziyuia">UFO</sapn>
          </li>
          <li>
            <img src="../assets/images/ben.png" alt />
            <sapn class="ziyuia">校本资源</sapn>
          </li>
          <li>
            <img src="../assets/images/zi.png" alt />
            <sapn class="ziyuia">公共资源</sapn>
          </li>
        </ul>
      </div>
    </div>

    <div class="navigation">
      <div class="logo">
        <img src="../assets/images/logo3.png" alt />
      </div>
      <div class="search">
        <el-tabs type="border-card">
          <el-tab-pane label="课件"></el-tab-pane>
          <el-tab-pane label="学案"></el-tab-pane>
          <el-tab-pane label="教案"></el-tab-pane>
          <el-tab-pane label="习题"></el-tab-pane>
          <el-tab-pane label="微课"></el-tab-pane>
          <el-tab-pane label="教学反思"></el-tab-pane>
          <el-tab-pane label="在线课程"></el-tab-pane>
          <el-tab-pane label="学校"></el-tab-pane>
          <el-tab-pane label="老师"></el-tab-pane>
        </el-tabs>

        <div class="search_s">
          <el-input placeholder="请输入内容" v-model="input" class="input-with-select">
            <el-button slot="append">搜索</el-button>
          </el-input>
        </div>
      </div>
    </div>

    <div class="nav">
      <div class="nav_a">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="首页" name="first"></el-tab-pane>
          <el-tab-pane label="课件" name="second"></el-tab-pane>
          <el-tab-pane label="教案" name="third"></el-tab-pane>
          <el-tab-pane label="学案" name="fourth"></el-tab-pane>
          <el-tab-pane label="套题试卷" name="exam"></el-tab-pane>
          <el-tab-pane label="教学反思" name="rethink"></el-tab-pane>
          <el-tab-pane label="微课" name="micro"></el-tab-pane>
          <el-tab-pane label="题库" name="problem"></el-tab-pane>
        </el-tabs>
      </div>
    </div>
    <!-- 轮播左侧 s  -->
    <div class="banner">
      <div class="right">
        <div class="account">
          <el-tabs v-model="active" @tab-click="handleClick">
            <el-tab-pane label="章节" name="firs">
              <div class="people">
                <p>人教新版： 七年级上</p>
                <img src="../assets/images/set.png" alt />
                <el-tree
                  :data="data"
                  show-checkbox
                  node-key="id"
                  :default-expanded-keys="[2, 3]"
                  :default-checked-keys="[5]"
                  :props="defaultProps">
                </el-tree>
              </div>
            </el-tab-pane>
            <el-tab-pane label="知识点" name="secon">123</el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
    <!-- 轮播左侧 e  -->

    <!-- 轮播图 -->
    <div class="promotion">
      <el-carousel :interval="4000" arrow="always">
    <el-carousel-item v-for="item in 3" :key="item">
      <!-- <h3>{{ item }}</h3> -->
      <img src="../assets/images/carousel.png" alt="">
    </el-carousel-item>
  </el-carousel>
  </div>
    <!-- 轮播图 -->

    <!-- 轮播右侧 s  -->
    <div class="banner_r">
      <div class="left">
        <img src="../assets/images/uploads.png" alt />
        <div class="resources">
          <p>
            已有资源
            <span>156412</span> 份
          </p>
        </div>
        <div class="box"></div>
        <div class="resources">
          <p>资源统计</p>
        </div>
        <div class="tap">
          <ui>
            <li>课件</li>
            <li>学案</li>
            <li>教案</li>
            <li>习题</li>
            <li>微课</li>
            <li>教学反思</li>
            <li>在线资源</li>
            <li>套题试卷</li>
            <li>微课</li>
          </ui>
        </div>
      </div>
    </div>
    <!-- 轮播右侧 e  -->

    <!-- 精品资源 s  -->
    <div class="nav">
      <div class="nav_a">
        <p>精品资源</p>
      </div>
      <div class="nav_b">
        <p>换一批</p>
      </div>
    </div>
    <div class="nav_c">
      <div class="five">
        <ul>
          <li>
            <img src="../assets/images/book.png" alt="">
            <p>岳阳楼记</p>
          </li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
    <!-- 精品资源 e  -->

    <!-- 热门资源 s  -->
    <div class="nav">
      <div class="nav_a">
        <p>热门资源</p>
      </div>
      <div class="nav_b">
        <p>换一批</p>
      </div>
    </div>
    <div class="nav_c"></div>
    <!-- 热门资源 e  -->
    <!-- 最新资源 s  -->
    <div class="nav">
      <div class="nav_a">
        <p>最新资源</p>
      </div>
      <div class="nav_b">
        <p>换一批</p>
      </div>
    </div>
    <div class="nav_c"></div>
    <!-- 最新资源 e  -->

    <!-- foot s  -->
    <div class="foot">
      <p>Copyright © 2020 All Rights Reserved.版权所有 苏ICP备12081046号</p>
    </div>
    <!-- foot e  -->
  </div>
</template>

<script>
export default {
  data() {
    return {
             data: [{
          id: 1,
          label: '第1章 有理数',
            children: [{
              id: 9,
              label: '1.1正数和负数'
            }, {
              id: 10,
              label: '1.1正数和负数'
            }, {
              id: 11,
              label: '1.1正数和负数'
            }]
        }, {
          id: 2,
          label: '第2章 整式的加减',
          children: [{
            id: 5,
            label: '2.2 函数和元素'
          }, {
            id: 6,
            label: '2.2 函数和元素'
          }]
        }, {
          id: 2,
          label: '第2章 整式的加减',
          children: [{
            id: 5,
            label: '2.2 函数和元素'
          }, {
            id: 6,
            label: '2.2 函数和元素'
          }]
        },{
          id: 2,
          label: '第2章 整式的加减',
          children: [{
            id: 5,
            label: '2.2 函数和元素'
          }, {
            id: 6,
            label: '2.2 函数和元素'
          }]
        },{
          id: 2,
          label: '第2章 整式的加减',
          children: [{
            id: 5,
            label: '2.2 函数和元素'
          }, {
            id: 6,
            label: '2.2 函数和元素'
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        },
      
      input: "",
      select: "",
      activeName: "first",
      active: "firs"
      
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>
<style>
.el-menu.el-menu--horizontal {
  border-bottom: none;
}
.el-menu {
  width: 60px;
  height: 20px;
  padding-left: 3px;
  background-color: #f2f2f2;
}

/* 轮播 s  */

  .el-carousel__container {
    width: 1079px;
    height: 480px;
    /* margin: 20px 15px; */
  }
  .el-carousel--horizontal {
    width: 1079px;
  }
  .el-carousel__arrow--right {
    right: 65px;
}
.el-carousel__indicators--horizontal {
    bottom: 30px;
    left: 45%;
}
.el-carousel__button {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}
/* 轮播 e  */

.el-submenu {
  margin-top: -20px;
  margin-left: 5px;
}
.el-tabs--border-card > .el-tabs__content {
  padding: 0px;
}
.el-tabs--border-card > .el-tabs__header .el-tabs__item {
  color: #606266;
}
.el-tabs--border-card > .el-tabs__header .el-tabs__item.is-active {
  color: #fff;
  background-color: #5182f4;
}
.el-tabs--border-card {
  border: 1px solid #fff;
  box-shadow: none;
  margin: 0px 0px -1px -1px;
}
.el-tabs--border-card > .el-tabs__header {
  background-color: #fff;
  border-bottom: 1px solid #fff;
  margin: 0;
}

.el-select .el-input {
  width: 130px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
.el-input-group__append,
.el-input-group__prepend {
  background-color: #5182f4;
  color: #fff;
  vertical-align: middle;
  display: table-cell;
  position: relative;
  border: 1px solid #5182f4;
  margin-left: 1px;
  padding: 0 20px;
  width: 1px;
  white-space: nowrap;
}
.el-input__inner {
  border-radius: 0px;
  border: 1px solid #5182f4;
}
.el-input-group {
  background-color: #5182f4;
}
.el-input-group__append .el-button,
.el-input-group__append .el-select,
.el-input-group__prepend .el-button,
.el-input-group__prepend .el-select {
  margin: 0px;
}
.nav_a .el-tabs__nav-scroll {
  margin-left: -30px;
}
.el-tabs__header {
  margin: 0px;
}
.el-tabs__nav-wrap::after {
  background-color: #5182f4;
}

.el-tabs__item,
.el-tabs__item.is-active,
.el-tabs__item:hover {
  color: #fff;
}
.nav_a .el-tabs__item {
  margin: 0px 30px;
}
.nav_a .el-tabs__item:hover {
  background-color: rgba(0, 0, 0, 0.1);
}
.nav_a .el-tabs__active-bar {
  background-color: #5182f4;
}

.el-tabs--bottom .el-tabs__item.is-bottom:nth-child(2),
.el-tabs--bottom .el-tabs__item.is-top:nth-child(2),
.el-tabs--top .el-tabs__item.is-bottom:nth-child(2),
.el-tabs--top .el-tabs__item.is-top:nth-child(2) {
  padding-left: 20px;
}
.el-tabs--bottom .el-tabs__item.is-bottom:last-child,
.el-tabs--bottom .el-tabs__item.is-top:last-child,
.el-tabs--top .el-tabs__item.is-bottom:last-child,
.el-tabs--top .el-tabs__item.is-top:last-child {
  padding-right: 20px;
}

.banner .el-tabs__nav-wrap::after {
  background-color: #fcfdff;
}
.banner .el-tabs__item {
  padding: 0 20px;
  margin-left: 15px;
  color: #909399;
}

.banner .el-tabs__active-bar {
  position: absolute;
  bottom: 0;
  left: 0px;
  height: 2px;
  width: 70px !important;
  background-color: #188eee;
  z-index: 1;
}
.banner .el-tabs__item.is-active {
  color: #188eee;
  font-size: 18px;
  font-weight: 700;
}
</style>


<style lang="less" scoped>
.header {
  height: 100%;
  padding: 285px;
}
li {
  list-style: none;
}
.pass {
  width: 1900px;
  height: 60px;
  margin: -285px 0px 0px -282px;
  background-color: #f2f2f2;
}
.fl {
  float: left;
  margin-left: 65px;
}
.fl p {
  line-height: 30px;
  font-size: 13px;
  color: #909399;
}
.fr {
  float: right;
  width: 345px;
  height: 60px;
  margin-right: 285px;
}
.fr ul li {
  float: left;
  margin-left: 20px;
}
.fr  img {
margin-bottom: -4px;
}
.ziyuia {
  margin-left: 5px;
  font-size: 13px;
  color: #909399;
}

.navigation {
  height: 90px;
  margin-top: 40px;
}
.logo img {
  float: left;
  height: 50px;
  margin-left: -220px;
  margin-top: 40px;
}
.search {
  float: right;
  width: 745px;
  height: 90px;
  margin-right: 90px;
}
.nav {
  width: 1900px;
  height: 40px;
  margin: -285px 0px 0px -283px;
  margin-top: 40px;
  background-color: #5182f4;
}
.nav_a {
  margin-left: 285px;
}
.search_s {
  width: 810px;
  border: 2px solid #5182f4;
}
.banner {
  position: absolute;
  bottom: 157px;
  left: 60px;
  width: 225px;
  height: 490px;
  border: 1px solid #efeff0;
  background-color: #fcfdff;
}
.right {
  width: 200px;
  height: 465px;
  margin: auto;
  margin-top: 20px;
  // background-color: pink;
}
.people {
  margin-top: -5px;
}
.people p {
  // vertical-align: middle;
  line-height: 20px;
  font-size: 18px;
  color: #188eee;
}
.people img {
  vertical-align: middle;
  margin-top: -83px;
  margin-left: 182px;
}

.promotion {
  margin: 20px 15px;
}
.promotion img {
  height: 457px;
}
.banner_r {
  position: absolute;
  top: 290px;
  right: 300px;
  width: 255px;
  height: 457px;
  border: 1px solid #efeff0;
  background-color: #fcfdff;
}

.nav_a p {
  float: left;
  line-height: 10px;
  margin-left: 15px;
  color: #fefeff;
}
.nav_b p {
  float: right;
  line-height: 10px;
  margin-right: 300px;
  color: #fefeff;
}
.nav_c {
  width: 1300px;
  height: 760px;
  margin: auto;
  margin-top: 30px;
  background-color: #ccc;
}
.five {
  height: 355px;
  background-color: #eee;
}
.five img {
  width: 230px;
  height: 300px;
  margin-left: -40px;
}
.five p {
  margin-left: 10px;
  font-size: 15px;
  color: #606266;
}
.foot {
  width: 1900px;
  height: 60px;
  margin: 40px 0px 0px -283px;
  // margin-top: 40px;
  background-color: #75777c;
}
.foot p {
  text-align: center;
  line-height: 60px;
  font-size: 12px;
  color: #f8f8f8;
}

.left {
  width: 210px;
  height: 420px;
  margin: 20px;
  // background-color: #ccc;
}
.resources {
  width: 165px;
  height: 20px;
  margin: 20px;
}
.resources p {
  color: #606266;
  font-size: 18px;
}
.resources span {
  color: #6badf2;
}
.box {
  border-bottom: 1px dashed #a1a1a7;
}
.tap {
  margin: 20px;
  font-size: 14px;
  color: #606266;
}
.tap li {
  margin-bottom: 10px;
}
</style>