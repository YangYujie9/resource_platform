// 找回密码
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
    <div class="back">
      <p>请输入您需要找回登录密码的账户</p>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户姓名：" prop="name">
          <el-input placeholder="8-16位，中文/字母/下滑线组合" v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="用户账号：" prop="name">
          <el-input placeholder="8-16位，中文/字母/下滑线组合" v-model="ruleForms.name"></el-input>
        </el-form-item>

        <el-form-item label="用户角色：" prop="region">
          <el-select v-model="ruleForm.region" placeholder="请选择用户角色">
            <el-option label="老师" value="teacher"></el-option>
            <el-option label="学生" value="students"></el-option>
            <el-option label="家长" value="parents"></el-option>
            <el-option label="录题员" value="Subject"></el-option>
            <el-option label="区域管理员" value="area"></el-option>
            <el-option label="学校管理员" value="manage "></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="所在学校：" prop="region">
          <el-select v-model="ruleForms.regions" placeholder="请选择所在学校">
            <el-option label="杭州一中" value="school1"></el-option>
            <el-option label="西湖实验中学" value="school2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item class="next">
          <router-link :to="{ path: '/Reset'}" replace>
            <el-button type="primary">下一步</el-button>
          </router-link>
        </el-form-item>
      </el-form>
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
    return {
      ruleForm: {
        name: "",
        region: ""
      },
      ruleForms: {
        name: "",
        regions: ""
      },
      rules: {
        name: [
          {
            required: true,
            message: "请输入8-16位，中文/字母/下滑线组合",
            trigger: "blur"
          },
          { min: 8, max: 16, message: "长度在 8 到 16 个字符", trigger: "blur" }
        ],
        region: [
          { required: true, message: "请选择用户角色", trigger: "change" }
        ],
        regions: [
          { required: true, message: "请选择所在学校", trigger: "change" }
        ]
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
.back .element.style： {
  margin-left: 50px;
}
.back .el-input__inner {
  width: 310px;
  height: 30px;
  border: 1px solid #909399;
}
.back .el-select .el-input.is-focus .el-input__inner {
  border-color: #909399;
}
.back
  .el-form-item.is-required:not(.is-no-asterisk)
  > .el-form-item__label:before {
  color: #7a7c7f;
}
.back .el-icon-arrow-up:before {
  color: #606266;
  font-size: 20px;
}
.next .el-button--primary {
  width: 310px;
  height: 30px;
  line-height: 5px;
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
  margin-left: 85px;
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

.back {
  width: 600px;
  height: 420px;
  margin: 90px 695px;
}
.back p {
  margin-left: 105px;
  font-size: 14px;
  color: #606266;
}
.foot {
  height: 50px;
  border-top: 1px solid #c0c4cc;
}
.foot p {
  margin-top: 30px;
  margin-left: 760px;
  font-size: 12px;
  color: #cacaca;
}
</style>