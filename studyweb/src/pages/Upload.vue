<template>
<el-main>
      <el-row>
          <el-col :span='16' push='4'>
              <el-card class="box-card, articleList">
  <div slot="header" class="clearfix">
    <span class='aricleListTitleList'><span class='editIcon'><i class="el-icon-folder-opened"></i></span> 上传列表</span>
    <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
  </div>
  <el-upload
  class="upload-demo"
  action="https://jsonplaceholder.typicode.com/posts/"
  :on-change="handleChange"
  :file-list="fileList">
  <el-button size="small" type="primary">点击上传</el-button>
  <div slot="tip" class="el-upload__tip">文件不超过200mb</div>
  
</el-upload>
  
</el-card>
          </el-col>
      </el-row>
  </el-main>
</template>

<script>
export default {
    name:'UploadApp',

}
</script>

<style>

</style>