<template>
    
    <el-breadcrumb separator="">
  
  <el-breadcrumb-item :to="{ path: '/index' }" class="bannerSelector">首页<span class="EditIcon"><i class="el-icon-s-home"></i></span></el-breadcrumb-item>
  <el-breadcrumb-item :to="{ path: '/Message' }" class="bannerSelector">消息<span class="EditIcon"><i class="el-icon-chat-line-round"></i></span></el-breadcrumb-item>
   <el-breadcrumb-item :to="{ path: '/Download' }" class="bannerSelector">资料下载<span class=""><i class="el-icon-download"></i></span></el-breadcrumb-item>
  <el-breadcrumb-item :to="{ path: '/Article' }" class="bannerSelector">文章<span class="EditIcon"><i class="el-icon-tickets"></i></span></el-breadcrumb-item>
   <el-breadcrumb-item :to="{ path: '/index' }" class="bannerSelector">资料编辑<span class="EditIcon"><i class="el-icon-edit-outline"></i></span></el-breadcrumb-item>
  <el-breadcrumb-item :to="{ path: '/Login' }" class="bannerSelector">登录<span class="EditIcon"><i class="el-icon-user"></i></span></el-breadcrumb-item>
   <!-- <el-breadcrumb-item :to="{ path: '/index' }" class="bannerSelector">学生信息编辑<span class="EditIcon"><i class="el-icon-edit"></i></span></el-breadcrumb-item> -->
  <el-breadcrumb-item :to="{ path: '/index' }" class="bannerSelector"></el-breadcrumb-item>
   

  </el-breadcrumb>
    

        

</template>

<script>
export default {
    name:'BannerApp',
    data() {
      return {
        
      }
    },
    methods:{
      pushHome(){
        this.$router.push({
          path:'/index',
          query:{

          }
        })
      },
      pushMessage(){
        this.$router.push({
          path:'/Message',
        })
      }
    },
}
</script>

<style scoped>
.bannerSelector{
  margin-right: 30px;
  /* margin-top: 20px; */
  font-size: 17px;
}
.EditIcon{
  margin-left: 4px;
  margin-right: 3px;
}
</style>