<template>
  <el-card>
    <div class="header">
      <p>新增难度</p>
      <el-button type="text" @click="dialogVisible = true">+ 新增</el-button>
      <el-dialog title="新增难度" :visible.sync="dialogVisible" width="550px">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="题目难度：">
            <el-select v-model="form.region" placeholder="请选择题目难度">
              <el-option label="容易" value="easy"></el-option>
              <el-option label="较易" value="easily"></el-option>
              <el-option label="一般" value="usually"></el-option>
              <el-option label="较难" value="difficult"></el-option>
              <el-option label="难" value="difficults"></el-option>
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

    <div class="five">
      <p>容易</p>
      <p>较易</p>
      <p>一般</p>
      <p>较难</p>
      <p>难</p>
    </div>
  </el-card>
</template>

<script>

  const cityOptions = ["selection"];
  export default {
    data() {
      return {
        dialogVisible: false,
        checkAll: false,
        isIndeterminate: true,
        // checkedCities: [''],
        form: {
          region: ""
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
.el-table td,
.el-table th {
  text-align: center;
}
.header .el-button {
  width: 70px;
  height: 20px;
  line-height: 0px;
  /* margin-left: 100px; */
  position: absolute;
  left: 120px;
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
  /* text-align: center; */
  color: #96a2bc;
  border: 1px solid #dddee0;
  background-color: #fff;
}
.const .sure {
  margin-left: 170px;
  /* text-align: center; */
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
</style>
<style lang="less" scoped>
.header {
  width: 600px;
  height: 45px;
}
.header p {
  width: 85px;
  height: 20px;
  font-size: 20px;
  color: #4269bc;
}
.five {
  width: 240px;
  height: 355px;
}
.five p {
  display: inline-block;
  margin-left: 15px;
  line-height: 1px;
  cursor: pointer;
  font-size: 16px;
  color: #5182f4;
}
</style>