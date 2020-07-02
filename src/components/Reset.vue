// 重置
<template>
  <div class="all">
    <!-- 导航 s  -->
    <div class="pas">
      <div class="nav_a">你好，欢迎来到简至教育云</div>
      <div class="nav_b">
        <ui>
          <li>首页</li>
          <li>|</li>
          <li>设为主页</li>
          <li>|</li>
          <li>加入收藏</li>
        </ui>
      </div>

      <div class="ban">
        <ul>
          <li>客服热线：400-989-9898</li>
          <li>手机客户端</li>
          <li>|</li>
          <li>注册</li>
          <li>|</li>
          <li>登录</li>
        </ul>
      </div>
    </div>
    <!-- 导航 e  -->

    <!-- logo s  -->
    <div class="platform">
      <div class="education">
        <img src="../assets/images/logo1.png" alt />
        <p>重置密码</p>
      </div>
      <div class="help">
        <ul>
          <li>帮助中心</li>
          <li>|</li>
          <li>回到首页</li>
        </ul>
      </div>
    </div>
    <!-- logo e  -->

    <!-- center s  -->

    <div class="center">
      <div class="reconsider">重置密码</div>
      <div class="two">
        <el-form
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="新密码：" prop="pass">
            <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="确认新密码：" prop="checkPass">
            <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <div class="next">
        <el-row>
          <router-link :to="{ path: '/Login'}" replace>
            <el-button type="primary">下一步</el-button>
          </router-link>
        </el-row>
      </div>
    </div>
    <!-- center e  -->

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
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("年龄不能为空"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入数字值"));
        } else {
          if (value < 18) {
            callback(new Error("必须年满18岁"));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        pass: "",
        checkPass: ""
        // age: ""
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        age: [{ validator: checkAge, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style>
.center .el-input__inner {
  width: 310px;
  height: 30px;
  border: 1px solid #909399;
}
.center .el-input {
  width: 310px;
}
.next .el-button {
  width: 310px;
  height: 30px;
  padding: 0px;
  margin-left: 98px;
}
</style>    
<style lang="less" scoped>
.all {
  padding: 60px;
}
.pas {
  margin-top: -60px;
  height: 50px;
  background-color: #f2f2f2;
}
li {
  list-style-type: none;
}
.nav_a {
  margin-left: 30px;
}
.nav_b {
  float: left;
  margin-left: 125px;
}
.nav_b li {
  margin-left: 10px;
}
.nav_a,
.nav_b li {
  float: left;
  line-height: 50px;
  font-size: 14px;
  color: #909399;
}
.ban {
  float: right;
  width: 555px;
  height: 50px;
  margin-right: 15px;
}
.ban li {
  float: right;
  margin-right: 15px;
  font-size: 14px;
  color: #909399;
}

.platform {
  height: 60px;
  margin-top: 40px;
}
.education {
  float: left;
  width: 425px;
  height: 60px;
}
.education img {
  margin-top: 5px;
  margin-left: 20px;
  vertical-align: middle;
}
.education p {
  display: inline-block;
  margin-left: 30px;
  font-size: 20px;
  color: #606266;
}
.help {
  float: right;
  width: 210px;
  height: 60px;
  margin-right: 20px;
}
.help li {
  float: right;
  margin-right: 10px;
  font-size: 14px;
  color: #606266;
}
.center {
  width: 520px;
  height: 310px;
  margin: auto;
  margin-top: 150px;
}
.reconsider {
  text-align: center;
  font-size: 20px;
  color: #606266;
}
.two {
  margin-top: 50px;
}
.foot {
  height: 50px;
  margin-top: 210px;
  border-top: 1px solid #c0c4cc;
}
.foot p {
  margin-top: 30px;
  margin-left: 760px;
  font-size: 12px;
  color: #cacaca;
}
</style>