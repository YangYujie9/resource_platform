<template>
  <el-card>
    <div class="header">
      <p>班级管理</p>
      <el-button type="text" @click="dialogVisible = true">+ 新增班级</el-button>
      <el-dialog title="新增班级" :visible.sync="dialogVisible" width="550px">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="年级：">
            <el-select v-model="form.region" placeholder="请选择年级">
              <el-option label="一年级" value="homepage"></el-option>
              <el-option label="二年级" value="courseware "></el-option>
              <el-option label="三年级" value="lesson"></el-option>
              <el-option label="四年级" value="tests"></el-option>
              <el-option label="五年级" value="question"></el-option>
              <el-option label="六年级" value="question"></el-option>
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
      <el-table-column prop="date" label="一年级" width="180"></el-table-column>
      <el-table-column prop="name" label="二年级" width="180"></el-table-column>
      <el-table-column prop="junior" label="三年级"></el-table-column>
      <el-table-column prop="fourth" label="四年级"></el-table-column>
      <el-table-column prop="five" label="五年级"></el-table-column>
      <el-table-column prop="sixt" label="六年级"></el-table-column>
    </el-table>

    <div class="foot">
      <el-checkbox
      :indeterminate="isIndeterminate"
      v-model="checkAlls"
      @change="handleCheckAllsChange"
    >全选</el-checkbox>
    <div class="delete">
      <p>删除</p>
    </div>
    </div>


<!-- 分页 -->
  <div class="block">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-size="20"
      layout="total, sizes, prev, pager, next, jumper"
      :total="20">
    </el-pagination>
  </div>
  </el-card>
</template>

<script>
export default {
  methods: {
    handleSizeChange(val) {
      console.log('每页 ${val} 条');
    },
    handleCurrentChange(val) {
      console.log('当前页：${val}');
    }
  },
  data() {
    return {
      dialogVisible: false,
      checkAll: false,
      isIndeterminate: true,

      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      form: {
        region: ""
      },
            tableData: [
        {
          date: "1班",
          name: "1班",
          junior: "1班",
          fourth: "1班",
          five: "1班",
          sixt: "1班",
        },
        {
          date: "2班",
          name: "2班",
          junior: "2班",
          fourth: "2班",
          five: "2班",
          sixt: "2班",
        },
        {
          date: "3班",
          name: "3班",
          junior: "3班",
          fourth: "3班",
          five: "3班",
          sixt: "3班",
        },
        {
          date: "4班",
          name: "4班",
          junior: "4班",
          fourth: "4班",
          five: "4班",
          sixt: "4班",
        },
        {
          date: "5班",
          name: "5班",
          junior: "5班",
          fourth: "5班",
          five: "5班",
          sixt: "5班",
        },
        {
          date: "6班",
          name: "6班",
          junior: "6班",
          fourth: "6班",
          five: "6班",
          sixt: "6班",
        }
      ]
    };
  }
};
</script>
<style>
.el-table td,
.el-table th {
  text-align: center;
}
.header .el-button {
  width: 105px;
  height: 20px;
  line-height: 0px;
  /* margin-left: 100px; */
  position: absolute;
  left: 120px;
  top: 41px;
  border: 1px solid #2753b2;
  background-color: #f0f3fa;
}
.const .cancel {
  margin-left: 290px;
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
.const .cancel,
.const .sure {
  margin-top: 100px;
}
.const .cancelt,
.const .suret {
  margin-top: -190px;
}

.const .cancel,
.const .sure {
  width: 55px;
  height: 30px;
}
.el-pager li {
    min-width: 25.5px;
    height: 25px;
    line-height: 22px;
    color: #51545b;
    font-weight: 400;
    border: 1px solid #859bcf;
    background-color: #859bcf;
}
.el-pager li.active {
  color: #51545b;
}
.block .el-pagination {
  margin-top: -42px;
  margin-left: 505px;
}
/* .el-pagination .btn-next .el-icon, 
.el-pagination .btn-prev .el-icon {
  width: 25px;
  height: 23px;
  line-height: 23;
  background-color: #fff;
  border: 1px solid #ccc;
} */
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
.foot {
  margin-top: 30px;
}
.delete p {
  margin-top: -19px;
  margin-left: 80px;
  font-size: 14px;
  font-weight: 400;
  color: #565a64;
}
</style>