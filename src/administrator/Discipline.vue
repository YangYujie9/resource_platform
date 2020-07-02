<template>
  <el-card>
    <div class="header">
      <p>学科管理</p>
      <el-button type="text" @click="dialogVisible = true">+ 添加</el-button>
      <el-dialog title="添加学科" :visible.sync="dialogVisible" width="550px">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="所属学段：">
            <el-select v-model="form.region" placeholder="请选择所属学段">
              <el-option label="小学" value="school"></el-option>
              <el-option label="初中" value="junior"></el-option>
              <el-option label="高中" value="high"></el-option>
              <el-option label="大专" value="college"></el-option>
              <el-option label="大学" value="university"></el-option>
              <el-option label="幼儿园" value="nursery"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="学科名称：">
            <el-select v-model="form.regions" placeholder="请选择学科名称">
              <el-option label="语文" value="chinese"></el-option>
              <el-option label="数学" value="math"></el-option>
              <el-option label="英语" value="english"></el-option>
              <el-option label="化学" value="chemistry"></el-option>
              <el-option label="物理" value="physics"></el-option>
              <el-option label="生物" value="biology"></el-option>
              <el-option label="历史" value="history"></el-option>
              <el-option label="政治" value="political"></el-option>
              <el-option label="地理" value="geography"></el-option>
              <el-option label="美术" value="art"></el-option>
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
      <el-table-column prop="date" label="角色名称" width="180"></el-table-column>
      <el-table-column prop="name" label="角色类型" width="180"></el-table-column>
      <el-table-column prop="address " label="操作" show-overflow-tooltip>
        <el-button type="text" size="small">
          <img src="../assets/images/editors.png" alt />
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
        region: "",
        regions: "",
        name: "",
      },
      tableData: [
        {
          date: "语文",
          name: "初中",
        },
        {
          date: "语文",
          name: "初中",
        },
        {
          date: "语文",
          name: "初中",
        },
        {
          date: "语文",
          name: "初中",
        },
        {
          date: "语文",
          name: "初中",
        },
        {
          date: "语文",
          name: "初中",
        },
        {
          date: "语文",
          name: "初中",
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
.el-button--danger {
  background-color: #fff;
  border-color: #fff;
}
.el-dialog {
  height: 260px;
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
.const .cancel  {
  margin-left: 285px;
  /* text-align: center; */
  color: #96a2bc;
  border: 1px solid #dddee0;
  background-color: #fff;
}
.const .sure {
  margin-left: 190px;
  /* text-align: center; */
  border: none;
  color: #fff;
  background-color: #5182f4;
}
.const span {
margin-left: -7px;
}
.const .cancel, .const .sure {
  width: 55px;
  height: 30px;
  margin-top: 150px;
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