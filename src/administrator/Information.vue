<template>
  <el-card>
    <div class="header">
      <p>站点信息</p>
      <el-form ref="form" :model="form" label-width="86px">
        <el-form-item label="活动名称:">
          <el-input v-model="form.name" placeholder="教育资源云平台"></el-input>
        </el-form-item>
        <el-form-item label="站点版权:">
          <el-input v-model="form.copyright" placeholder="Copyright@2018-2025 版权所有"></el-input>
        </el-form-item>
        <el-form-item label="ICP备案号:">
          <el-input v-model="form.prius" placeholder="粤ICP1800099123号"></el-input>
        </el-form-item>
        <el-form-item label="公安备案号:">
          <el-input v-model="form.police" placeholder="粤ICP1800099123号"></el-input>
        </el-form-item>
        <el-form-item label="网站LOGO:" class="logo">
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
             multiple
            :limit="3"
            :on-exceed="handleExceed"
            :file-list="fileList">
            <el-button size="small" type="primary">上传</el-button>
          </el-upload>
           <el-button slot="reference">删除</el-button>
            <p>请上传jpg, gif, png格式的图片。logo图片尺寸建议不超过250×50px。图片大小建议不超过2MB。</p>
           
            <a href="#">如何制作合适的图片？</a>
            <el-popover placement="top" width="160" v-model="visible" class="delete">
              <p>确定删除该网站logo吗？</p>
              <div style="text-align: right; margin: 0">
                <el-button size="mini" type="text" @click="visible = false">取消</el-button>
                <el-button type="primary" size="mini" @click="visible = false">确定</el-button>
              </div>
            </el-popover>

        </el-form-item>
      </el-form>
    </div>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        copyright: "",
        prius: "",
        police: ""
      },
      visible: false
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    }
  }
};
</script>

<style>
.el-card {
  height: 1500px;
}
.el-input__inner {
  width: 400px;
  height: 27px;
}
.el-form-item {
  margin-top: 5px;
  margin-bottom: 0px;
}
.el-button--primary {
  background-color: #5182f4;
}
.delete .el-button {
  color: #fff;
  padding: 10px 14px;
  margin-left: 70px;
  border: 1px solid #fff;
  background-color: #5182f4;
}
.el-button--small, .el-button--small.is-round {
  margin-right: 745px;
}
.el-button--mini, .el-button--small {
  line-height: 5px;
}
</style>


<style lang="less" scoped>
.header {
  width: 600px;
  height: 45px;
}
.header p {
  width: 95px;
  height: 20px;
  margin-left: 10px;
  font-size: 20px;
  color: #565a64;
}
.logo p {
  width: 792px;
  height: 50px;
  margin-left: 25px;
  font-size: 18px;
  color: #96a2bc;
}
.logo a {
  text-decoration: none;
  font-size: 18px;
  color: #5182f4;
}
</style>