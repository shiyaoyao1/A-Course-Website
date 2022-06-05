<template>
  <el-footer>
    <div>
    <el-row >
      <el-col :span='24'>
        Footer内容
      </el-col>
    </el-row>
    </div>
  </el-footer>
</template>

<script>
export default {
    name:'FooterApp',
    
}
</script>

<style>
.el-footer{
  padding-top: 6em;
  padding-bottom: 8em;
  background-color: rgb(185, 185, 185);
  margin-top: 100px;
}
</style>