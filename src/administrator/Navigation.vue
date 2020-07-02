<template>
  <el-card>
    <div class="header">
      <p>顶部导航</p>
      <el-button type="text" @click="dialogVisible = true">+ 新增顶部导航</el-button>
      <el-dialog title="新增顶部导航" :visible.sync="dialogVisible" width="550px">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="导航标题：">
            <el-select v-model="form.region" placeholder="请选择导航标题">
              <el-option label="首页" value="homepage"></el-option>
              <el-option label="课件" value="courseware "></el-option>
              <el-option label="教案" value="lesson"></el-option>
              <el-option label="套题试卷" value="tests"></el-option>
              <el-option label="题库" value="question"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="状态：">
            <el-select v-model="form.regions" placeholder="请选择状态">
              <el-option label="启用" value="start"></el-option>
              <el-option label="禁用" value="forbidden"></el-option>
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

    <el-table :data="tableData" border style="width: 50%">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="date" label="导航标题" width="180"></el-table-column>
      <el-table-column prop="name" label="状态" width="180"></el-table-column>
      <el-table-column prop="address" label="操作" show-overflow-tooltip>
        <el-button type="text" size="small">
          <img src="../assets/images/editors.png" alt />
          <img src="../assets/images/disabled.png" alt />
        </el-button>
        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">
          <img src="../assets/images/delete.png" alt />
        </el-button>
      </el-table-column>
    </el-table>
    <el-checkbox
      :indeterminate="isIndeterminate"
      v-model="checkAll"
      @change="handleCheckAllChange"
    >全选</el-checkbox>
    <div class="delete">
      <p>删除</p>
    </div>

    <div class="headers">
      <p>分类栏目</p>
      <el-button type="text" @click="dialogVisibles = true">+ 新增分类栏目</el-button>
      <el-dialog title="新增分类栏目" :visible.sync="dialogVisibles" width="550px">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="导航标题：">
            <el-select v-model="form.title" placeholder="请选择导航标题">
              <el-option label="精品资源" value="resources"></el-option>
              <el-option label="热门资源" value="hottest"></el-option>
              <el-option label="最新资源" value="current"></el-option>
              <el-option label="精品课件" value="showpiece"></el-option>
              <el-option label="精品套卷" value="volume"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="状态：">
            <el-select v-model="form.status" placeholder="请选择状态">
              <el-option label="启用" value="starts"></el-option>
              <el-option label="禁用" value="forbiddens"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div class="const">
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisibles = false" class="cancelt">取 消</el-button>
            <el-button type="primary" @click="dialogVisibles = false" class="suret">确 定</el-button>
          </span>
        </div>
      </el-dialog>
    </div>

    <el-table :data="tableData" border style="width: 50%">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="dates" label="导航标题" width="180"></el-table-column>
      <el-table-column prop="names" label="状态" width="180"></el-table-column>
      <el-table-column prop="addres" label="操作" show-overflow-tooltip>
        <el-button type="text" size="small">
          <img src="../assets/images/editors.png" alt />
          <img src="../assets/images/disabled.png" alt />
        </el-button>
        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">
          <img src="../assets/images/delete.png" alt />
        </el-button>
      </el-table-column>
    </el-table>
    <el-checkbox
      :indeterminate="isIndeterminate"
      v-model="checkAlls"
      @change="handleCheckAllsChange"
    >全选</el-checkbox>
    <div class="delete">
      <p>删除</p>
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
      checkAlls: false,
      isIndeterminate: true,
      // checkedCities: [''],
      form: {
        region: "",
        regions: "",
        title: "",
        status: ""
      },
      tableData: [
        {
          date: "首页",
          name: "启用",
          dates: "精品资源",
          names: "启用",
          address: "",
          addres: ""
        },
        {
          date: "课件",
          name: "启用",
          dates: "热门资源",
          names: "启用",
          address: "",
          addres: ""
        },
        {
          date: "教案",
          name: "禁用",
          dates: "最新资源",
          names: "启用",
          address: "",
          addres: ""
        },
        {
          date: "套题试卷",
          name: "启用",
          dates: "精品课件",
          names: "禁用",
          address: "",
          addres: ""
        },
        {
          date: "题库",
          name: "禁用",
          dates: "精品套卷",
          names: "启用",
          address: "",
          addres: ""
        }
      ]
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    handleCheckAllChange(val) {
      this.checkedCities = val ? cityOptions : [];
      this.isIndeterminate = false;
    },
    handleCheckAllsChange(val) {
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
.header .el-button,
.headers .el-button {
  width: 105px;
  height: 20px;
  line-height: 0px;
  /* margin-left: 100px; */
  position: absolute;
  left: 120px;
  /* top: 41px; */
  border: 1px solid #2753b2;
  background-color: #f0f3fa;
}
.header .el-button {
  top: 41px;
}
.headers .el-button {
  top: 425px;
}
.el-button--danger {
  background-color: #fff;
  border-color: #fff;
}
.el-button img {
  margin-left: 50px;
}
.el-dialog {
  height: 360px;
}
.el-dialog__body {
  padding: 5px 60px;
}
.el-dialog__header {
  /* height: 360px; */
  /* margin: 5px 60px; */
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
.el-textarea {
  width: 63%;
  /* height: 75px; */
}
.el-table td,
.el-table th {
  padding: 0px;
}
.el-table th,
.el-table tr {
  height: 45px;
}
.el-button--danger.is-active,
.el-button--danger:active {
  background-color: #fff;
  border-color: #fff;
}
.el-checkbox__input.is-checked .el-checkbox__inner,
.el-checkbox__input.is-indeterminate .el-checkbox__inner {
  color: #565a64;
}
.el-checkbox__input.is-checked .el-checkbox__inner,
.el-checkbox__input.is-indeterminate .el-checkbox__inner {
  /* background-color: #fff; */
  border-color: #eee;
}
.el-checkbox__input.is-checked + .el-checkbox__label {
  color: #565a64;
}
.el-checkbox__label {
  padding-left: 60px;
  line-height: 60px;
}
.const .cancel,
.const .cancelt {
  margin-left: 290px;
  color: #96a2bc;
  border: 1px solid #dddee0;
  background-color: #fff;
}
.const .sure,
.const .suret {
  margin-left: 190px;
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
  margin-top: 160px;
}
.const .cancelt,
.const .suret {
  margin-top: -190px;
}

.const .cancel,
.const .sure,
.const .cancelt,
.const .suret {
  width: 55px;
  height: 30px;
}
</style>

<style lang="less" scoped>
.header,
.headers {
  width: 600px;
  height: 45px;
}
.header p,
.headers p {
  width: 85px;
  height: 20px;
  font-size: 20px;
  color: #565a64;
}

.delete p {
  margin-top: -40px;
  margin-left: 115px;
  font-size: 14px;
  font-weight: 400;
  color: #565a64;
}
</style>