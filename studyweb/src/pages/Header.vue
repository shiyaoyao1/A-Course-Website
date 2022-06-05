<template>
  <el-container direction="vertical">
      <el-header class='headerText' height='230px'>
          <el-row  type='flex' align='top'>
  <el-col :span="4" :offset="4"><div class="grid-content bg-purple headerLogo">生物医学数据库</div>
  </el-col>
  <el-col :span="6" push='6'><div class="grid-content bg-purple headerSearch">
    <el-input v-model="input" size="small" class="headerSearchInput" placeholder="请输入搜索内容"></el-input>
  </div>
  </el-col>
</el-row>
<el-row  type='flex' >
  <el-col :span="5" :offset='4'><div class="grid-content bg-purple headerSchoolName">Major in Bioinformatics,CQUPT</div></el-col>
</el-row>
<el-row type='flex' justify='center'>
  <el-col :span='16' >
    <el-divider class='splitLine1'></el-divider>
    <BannerApp />
    <el-divider></el-divider>
  </el-col>
 
</el-row>
      </el-header>
      </el-container>
      
  

</template>

<script>
import BannerApp from '../components/BannerBar.vue'
export default {
    name:'HeaderApp',
    components:{
      BannerApp,
    }

}
</script>

<style>
.headerText{
    font-family: Arial;
}
.headerLogo{
    font-size: 34px;
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    padding-top: 44px;
    font-weight: bold;
    line-height: 1;
    letter-spacing: 1px;
    word-spacing: 1px;
    line-height:1.5 
}
.headerSchoolName{
  font-size: 14px;
  margin-top: 11px;
  margin-bottom: 22px;
  padding-bottom: 22px;
  padding-bottom: 0%;
  padding-right: 62px;
  line-height: 1;
  letter-spacing: 0px;
  text-transform: uppercase;
}
.headerSearch{
  padding-top: 52px;
  padding-right: 14px;
  padding-left: 188px;
}
.headerSearchInput{
  padding-left: 14px;
}
.headerSearchInput
 .el-select .el-input {
    width: 130px;
  }
.input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
  .splitLine1{
    margin-top: 8px;
    /* margin-bottom: 0px; */

  }
</style>