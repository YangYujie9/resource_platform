<template>
  <el-card>
    <div class="header">
      <p>学段管理</p>
      <el-button type="text" @click="dialogVisible = true">+ 添加</el-button>
      <el-dialog title="添加学段" :visible.sync="dialogVisible" width="550px">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="学段名称：">
            <el-select v-model="form.region" placeholder="请选择学段名称">
              <el-option label="小学" value="school"></el-option>
              <el-option label="初中" value="junior"></el-option>
              <el-option label="高中" value="high"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div class="const">
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false" class="cancel">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false" class="sure">确 定</el-button>
          </span>
        </div>
      </el-dialog>
    </div>

    <div class="baner">
      <p>高中</p>
      <img src="../assets/images/editor.png" alt />
      <p>编辑</p>
      <p>|</p>
      <img src="../assets/images/delet.png" alt />
      <p>删除</p>
    </div>
    <div class="baner">
      <p>初中</p>
      <img src="../assets/images/editor.png" alt />
      <p>编辑</p>
      <p>|</p>
      <img src="../assets/images/delet.png" alt />
      <p>删除</p>
    </div>
    <div class="baner">
      <p>小学</p>
      <img src="../assets/images/editor.png" alt />
      <p>编辑</p>
      <p>|</p>
      <img src="../assets/images/delet.png" alt />
      <p>删除</p>
    </div>

    <div class="management">
      <div class="headers">
        <p>年级管理</p>
        <el-button type="text" @click="dialogVisibles = true">+ 添加</el-button>
        <el-dialog title="添加年级" :visible.sync="dialogVisibles" width="550px">
          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="所属学段：">
              <el-select v-model="form.region" placeholder="请选择学段名称">
                <el-option label="小学" value="school"></el-option>
                <el-option label="初中" value="junior"></el-option>
                <el-option label="高中" value="high"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="年级：">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
          </el-form>
          <div class="const">
            <span slot="footer" class="dialog-footer">
              <el-button @click="dialogVisible = false" class="cancel">取 消</el-button>
              <el-button type="primary" @click="dialogVisible = false" class="sure">确 定</el-button>
            </span>
          </div>
        </el-dialog>
      </div>
    </div>
  </el-card>
</template>

<script>
const cityOptions = ["selection"];
export default {
  data() {
    return {
      dialogVisible: false,
      dialogVisibles: false,
      checkAll: false,
      isIndeterminate: true,
      // checkedCities: [''],
      form: {
        region: "",
        name: ""
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    handleCheckAllChange(val) {
      this.checkedCities = val ? cityOptions : [];
      this.isIndeterminate = false;
    }
  }
};
</script>


<style>
[class*=" el-icon-"],
[class^="el-icon-"] {
  /* color: #5e7fc6; */
  color: blue;
}
.header .el-button {
  width: 70px;
  height: 20px;
  line-height: 0px;
  position: absolute;
  left: 120px;
  top: 41px;
  border: 1px solid #2753b2;
  background-color: #f0f3fa;
}
.headers .el-button {
  width: 70px;
  height: 20px;
  line-height: 0px;
  position: absolute;
  left: 370px;
  top: 41px;
  border: 1px solid #2753b2;
  background-color: #f0f3fa;
}
.el-dialog {
  width: 465px;
  height: 220px;
}
.el-dialog__body {
  padding: 5px 60px;
}
.el-dialog__header {
  padding: 20px 60px 10px;
}
.el-input__inner {
  height: 30px;
}
.el-input__icon {
  line-height: 30px;
}
.el-form-item__label {
  padding: 0;
}

.const .cancel {
  margin-left: 260px;
  color: #96a2bc;
  border: 1px solid #dddee0;
  background-color: #fff;
}
.const .sure {
  margin-left: 170px;
  border: none;
  color: #fff;
  background-color: #5182f4;
}
.const span {
  margin-left: -7px;
}
.const .cancel,
.const .sure {
  width: 55px;
  height: 30px;
  margin-top: 100px;
}
.el-form-item__label {
  padding: 0px;
  margin-left: 25px;
}
</style>
<style lang="less" scoped>
.header {
  width: 240px;
  height: 95px;
  // background-color: pink;
}
.baner {
  width: 220px;
  height: 100px;
  margin-top: -60px;
  margin-left: 10px;
  //   background-color: #ccc;
}
.baner p {
  display: inline-block;
  // margin: 5px;
  margin-left: 5px;
  margin-top: 20px;
  font-size: 18px;
  color: #565a64;
}
.baner img {
  margin-left: 10px;
}
.management {
  width: 1305px;
  height: 600px;
  margin: auto;
  margin-top: -230px;
  margin-left: 255px;
  // background-color: pink;
}
</style>