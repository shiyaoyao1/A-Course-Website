<template>
    <el-header>
      <el-row type='flex' 
          justify='center'>
        <el-col :span='24'>
          <el-row>
        <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          
          router='true'
          show-alpha
          
          >
          <el-col :span='2' offset='3'><el-menu-item index="1" @click='pushHome'>主页</el-menu-item></el-col>
          <el-col :span='2' >
            <el-submenu index="2">
            <template slot="title">我的工作台</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项1</el-menu-item>
              <el-menu-item index="2-4-2">选项2</el-menu-item>
              <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu>
          </el-submenu>
          </el-col>
          <el-col :span='2' ><el-menu-item  @click='pushMessage' >消息中心</el-menu-item></el-col>
          <el-col :span='2' offset='9'><el-menu-item index="4" ><a to='/Login' target="_blank">登陆/注册</a></el-menu-item></el-col>
        </el-menu>
        </el-row>
        </el-col>
      </el-row>
    </el-header>

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

</style>