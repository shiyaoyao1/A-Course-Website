<template>
    
    <el-breadcrumb separator="">
  
  <el-breadcrumb-item :to="{ path: '/index' }" class="bannerSelector">首页</el-breadcrumb-item>
  <el-breadcrumb-item :to="{ path: '/index' }" class="bannerSelector">消息</el-breadcrumb-item>
  <el-breadcrumb-item :to="{ path: '/index' }" class="bannerSelector">资料</el-breadcrumb-item>
  <el-breadcrumb-item :to="{ path: '/index' }" class="bannerSelector">其他</el-breadcrumb-item>
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
  font-size: 15px;
}
</style>