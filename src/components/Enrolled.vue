<template>
  <div>
    <div class="header">
      <img src="../assets/images/logo2.png" alt />
      <p>用户注册</p>
    </div>
    <div class="barn">
      <div class="barn_l">
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

          <!-- 登录密码 s  -->
          <el-form-item label="登录密码：" prop="pass">
            <el-input
              placeholder="8-20位，数字/字母/符号组合"
              show-password
              v-model="ruleForms.pwdee"
              id="inputValue"
              auto-complete="off"
            ></el-input>
          </el-form-item>
          <!-- 登录密码 e  -->

          <!-- 选择省市区 s-->
          <el-form-item label="所在区域：" prop="region">
            <div id="app">
              <el-cascader
                size="large"
                :options="options"
                v-model="ruleForm.region"
                @change="handleChange"
                placeholder="请选择省/市/区"
              ></el-cascader>
            </div>
          </el-form-item>
          <!-- 选择省市区 e-->

          <el-form-item label="所在学段：" prop="regions">
            <el-select v-model="ruleForm.regions" placeholder="请选择所在学段">
              <el-option label="小学" value="Primary"></el-option>
              <el-option label="初中" value="junior"></el-option>
              <el-option label="高中" value="schools"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="所在年级：" prop="name" style="  padding: 0 12px 10px 0;"></el-form-item>
          <div style="margin: 15px 0;"></div>
          <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
            <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
            <el-checkbox v-for="city in cities1" :label="city" :key="city">{{city}}</el-checkbox>
            <div style="margin-left: 15px;">
              <el-checkbox v-for="city in cities2" :label="city" :key="city">{{city}}</el-checkbox>
            </div>
          </el-checkbox-group>
          <el-form-item label="电话号码：" prop="telephone">
            <el-input v-model="ruleForm.telephone" placeholder="请输入电话号码" maxlength="11"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <div class="barn_r">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="用户账号：" prop="users">
            <el-input placeholder="8-16位，中文/字母/下滑线组合" v-model="ruleForm.users"></el-input>
          </el-form-item>

          <!-- <el-form-item label="确认密码" prop="checkPass">
            <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
          </el-form-item>-->

          <el-form-item label="确认密码：" prop="pass">
            <el-input
              placeholder="8-20位，数字/字母/符号组合"
              show-password
              v-model="ruleForms.pwdee"
              id="inputValue"
              auto-complete="off"
            ></el-input>
          </el-form-item>

          <el-form-item label="用户角色：" prop="part">
            <el-select v-model="ruleForm.part" placeholder="请选择用户角色">
              <el-option label="老师" value="teacher"></el-option>
              <el-option label="学生" value="students"></el-option>
              <el-option label="家长" value="parents "></el-option>
              <el-option label="录题员" value="member"></el-option>
              <el-option label="区域管理员" value="manager"></el-option>
              <el-option label="学校管理员" value="administrator"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="所在学校：" prop="school">
            <el-select v-model="ruleForm.school" placeholder="请选择所在学校">
              <el-option label="杭州一中" value="Primary"></el-option>
              <el-option label="西湖实验中学" value="junior"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="班级：" prop="region">
            <el-select v-model="ruleForms.region" placeholder="请选择班级">
              <el-option label="1班" value="one"></el-option>
              <el-option label="2班" value="two"></el-option>
              <el-option label="3班" value="three"></el-option>
              <el-option label="4班" value="for"></el-option>
              <el-option label="5班" value="fiv"></el-option>
              <el-option label="6班" value="sex"></el-option>
              <el-option label="7班" value="seven"></el-option>
              <el-option label="8班" value="eight"></el-option>
              <el-option label="9班" value="nine"></el-option>
              <el-option label="10班" value="ten"></el-option>
            </el-select>
          </el-form-item>
        </el-form>

        <el-form
          :model="dynamicValidateForm"
          ref="dynamicValidateForm"
          label-width="100px"
          class="demo-dynamic">
          <el-form-item
            prop="email"
            label="邮箱："
            :rules="[
      { required: true, message: '请输入邮箱地址', trigger: 'blur' },
      { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }]">
            <el-input v-model="dynamicValidateForm.email" placeholder="请输入邮箱"></el-input>
          </el-form-item>

          <el-form-item class="next">
            <router-link :to="{ path: '/Login'}" replace>
              <el-button type="primary">下一步</el-button>
            </router-link>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { regionData } from "element-china-area-data";
const cityOptions = ["1年级", "2年级", "3年级"];
const cityOptions1 = ["4年级", "5年级", "6年级"];
const cityOptions2 = ["7年级", "8年级", "9年级"];
export default {
  data() {
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
      options: regionData,
      // selectedOptions: [],
      checkAll: false,
      checkedCities: [""],
      cities: cityOptions,
      cities1: cityOptions1,
      cities2: cityOptions2,
      isIndeterminate: true,
      ruleForm: {
        name: "",
        region: "",
        regions: "",
        telephone: "",
        users: "",
        checkPass: "",
        part: "",
        school: "",
        email: ""
      },
      ruleForms: {
        pass: "",
        region: ""
      },

      dynamicValidateForm: {
        email: ""
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
          { required: true, message: "请选择活动区域", trigger: "change" }
        ],
        regions: [
          { required: true, message: "请选择活动区域", trigger: "change" }
        ],
        school: [
          { required: true, message: "请选择活动区域", trigger: "change" }
        ],
        part: [
          { required: true, message: "请选择活动区域", trigger: "change" }
        ],

        users: [
          {
            required: true,
            message: "请输入8-16位，中文/字母/下滑线组合",
            trigger: "blur"
          },
          { min: 8, max: 16, message: "长度在 8 到 16 个字符", trigger: "blur" }
        ],
        telephone: [
          {
            required: true,
            message: "请输入电话号码",
            trigger: "blur"
          }
        ],

        pass: [
          {
            required: true,
            message: "请输入8-20位，数字/字母/符号组合",
            trigger: "blur"
          },
          { min: 8, max: 20, message: "长度在 8 到 20 个字符", trigger: "blur" }
        ]
      },
      msgText: "",
      pwdee: ""
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
    },
    removeDomain(item) {
      var index = this.dynamicValidateForm.domains.indexOf(item);
      if (index !== -1) {
        this.dynamicValidateForm.domains.splice(index, 1);
      }
    },
    addDomain() {
      this.dynamicValidateForm.domains.push({
        value: "",
        key: Date.now()
      });
    },
    handleChange(value) {
      console.log(value);
    },
    handleCheckAllChange(val) {
      this.checkedCities = val ? cityOptions : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.cities.length;
    }
  }
};
</script>


<style>
.el-input__inner {
  width: 310px;
  height: 30px;
  border: 1px solid #909399;
}
.el-input--suffix {
  width: 60%;
}
/* .barn_l .el-input .el-input__clear {
  margin-right: -160px;
} */
.el-form-item.is-required:not(.is-no-asterisk) > .el-form-item__label:before {
  color: #7a7c7f;
}
.el-select .el-input.is-focus .el-input__inner {
  border-color: #909399;
}
.el-cascader .el-input .el-icon-arrow-down,
.el-select .el-input .el-select__caret {
  font-size: 20px;
  font-weight: 700;
  color: #6a6c70;
}
.el-icon-arrow-down,
.el-select__caret {
  margin-right: -200px;
}
.el-checkbox__input.is-checked + .el-checkbox__label {
  color: #c0c4cc;
}
.el-checkbox__label {
  line-height: 35px;
}
.el-checkbox {
  margin-right: 65px;
  color: #c0c4cc;
}
.el-checkbox__input.is-checked .el-checkbox__inner,
.el-checkbox__input.is-indeterminate .el-checkbox__inner {
  background-color: #c0c4cc;
  border-color: #c0c4cc;
}
.el-checkbox__inner {
  background-color: #c0c4cc;
}
.el-checkbox-group {
  margin-left: 85px;
  margin-top: -71px;
}
.next .el-button--primary {
  width: 310px;
  height: 30px;
  margin: 80px -305px;
  line-height: 5px;
}
</style>


<style lang="less" scoped>
.header {
  height: 80px;
  background-color: #3fa2fa;
}
.header img {
  margin: 15px 60px;
  vertical-align: middle;
}
.header p {
  display: inline-block;
  margin-left: -30px;
  font-size: 20px;
  color: #fff;
}
.barn {
  width: 1235px;
  height: 600px;
  margin: auto;
  margin-top: 110px;
  //   background-color: skyblue;
}
.barn_l {
  float: left;
  width: 600px;
  height: 500px;
  //   background-color: #ccc;
}
.barn_r {
  float: right;
  width: 600px;
  height: 500px;
  // margin: -500px 190px;
}
</style>