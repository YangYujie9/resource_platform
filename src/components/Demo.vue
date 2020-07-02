<template>
  <!-- background-image s  -->
  <div class="whole">
    <div class="ban">
      <img src="../assets/images/ban.png" alt />
      <div class="logo"></div>
    </div>
    <!-- background-image e  -->

    <div class="right">
      <div class="account">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="账号登录系统" name="first">
            <div class="center">
              <el-input placeholder="账号" prefix-icon="iconfont icon-icon-" v-model="input1"></el-input>
              <el-input
                placeholder="密码"
                prefix-icon="iconfont icon-jiesuo"
                v-model="input2"
                show-password
              ></el-input>
            </div>
            <el-form>
              <el-form-item class="login">
                <el-button type="primary" @click="login">登录</el-button>
              </el-form-item>
              <div class="automatic">
                <el-checkbox v-model="checked">自动登录</el-checkbox>
                <div class="peak">
                  <router-link :to="{ path: '/Forgotten'}" replace>忘记密码</router-link>
                  <p>|</p>
                  <router-link :to="{ path: '/Enrolled'}" replace>注册</router-link>
                </div>
              </div>
            </el-form>
          </el-tab-pane>
          <el-tab-pane label="二维码登录系统" name="second">
            <div class="qcode">
              <img src="../assets/images/code.png" alt="二维码" />
            </div>
            <div class="foot">
                <el-tabs v-model="activeName" @tab-click="handleClick">
                  <el-tab-pane label="账号登录" name="first"></el-tab-pane>
                </el-tabs>
              <p>|</p>
              <router-link :to="{ path: '/Enrolled'}" replace>注册新账号</router-link>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "first",
      activeNames: "first",
      input1: "",
      input2: "",
      checked: true,
      loginForm: {
        username: "101",
        password: "rootAa!@#"
      }
    };
  },
  methods: {
    login() {
      this.$refs.login(async valid => {
        if (!valid) return;
        const { data: res } = await this.$http.post("login", this.loginForm);
        if (res.meta.status != 200) return console.log("登录失败");
        console.log(res);
      });
    }
  },
  handleClick(tab, event) {
    console.log(tab, event);
  }
};
</script>

<style>
.account .el-link {
  font-size: 20px;
  margin-left: 50px;
  color: #239ff7;
}
.account .el-tabs__header {
  margin-left: 45px;
  width: 340px;
}
.el-tabs__item {
  padding: 0 40px;
  height: 40px;
  box-sizing: border-box;
  line-height: 40px;
  display: inline-block;
  list-style: none;
  font-size: 20px;
  font-weight: 500;
  color: #239ff7;
  position: relative;
}
.foot .el-tabs__item {
  /* margin-bottom: -100px; */
  font-size: 14px;
  color: #606266;
}
.el-tabs__nav-wrap::after {
  background-color: #fff;
}
.center .el-input--prefix {
  margin-top: 35px;
  font-size: 15px;
}
.center .el-input__inner {
  border: none;
  border-radius: 0px;
  border-bottom: 2px #5ca5fb solid;
}
.center .el-input .el-input__clear {
  margin-right: 5px;
}
.el-input--prefix .el-input__inner {
  margin-top: 3px;
}
.center .icon-icon-:before,
.center .icon-jiesuo:before {
  color: #69befa;
  font-size: 22px;
}
.login .el-button--primary {
  width: 350px;
  height: 50px;
}
.automatic .el-checkbox {
  margin-left: 55px;
  margin-top: 20px;
}
.automatic .el-checkbox__input.is-checked + .el-checkbox__label {
  color: #606266;
}
a {
  font-size: 14px;
  color: #606266;

  text-decoration: none;
}
</style>

<style lang='less' scoped>
.whole {
  width: 1501px;
  height: 936px;
}
.ban img {
  position: absolute;
  height: 937px;
  // background-repeat:no-repeat;
}
.logo {
  position: absolute;
  left: 20px;
  top: 20px;
  background-image: url("../assets/images/logo.png");
  background-repeat: no-repeat;
  width: 272px;
  height: 55px;
  margin: 50px 0px 0px 60px;
}

.right {
  float: right;
  position: absolute;
  top: 302px;
  right: 243px;
  width: 440px;
  height: 356px;
}
.center {
  width: 350px;
  height: 115px;
  margin-left: 45px;
}
.login {
  width: 350px;
  height: 50px;
  margin: auto;
  margin-top: 80px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: #4cb1f9;
}
.login p {
  text-align: center;
  line-height: 50px;
  font-size: 16px;
  color: #fff;
}
.automatic {
  width: 350px;
  // height: 30px;
}
.peak {
  float: right;
  height: 20px;
  margin-right: -40px;
}
.peak p,
.foot p {
  display: inline-block;
  line-height: 30px;
  font-size: 14px;
  color: #606266;
}
.qcode {
  width: 165px;
  height: 155px;
  border: 1px solid #c0c4cc;
  margin: 0 auto;
  margin-top: 60px;
}
.qcode img {
  width: 145px;
  height: 145px;
  padding: 10px;
}
.foot {
  width: 230px;
  margin: auto;
  // margin: 25px 155px;
}
</style>