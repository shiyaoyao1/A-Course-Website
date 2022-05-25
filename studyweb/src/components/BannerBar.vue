<template>
  <el-container>
    <el-header>
      <el-row :span='24'>
        <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          type='flex' 
          justify='center'
          router='true'>
          <el-menu-item index="1">主页</el-menu-item>
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
          <el-menu-item index="3" disabled>消息中心</el-menu-item>
          <el-menu-item index="4" ><a href="https://www.ele.me" target="_blank">登陆/注册</a></el-menu-item>
        </el-menu>
      </el-row>
    </el-header>
    <router-view></router-view>
  </el-container>
</template>

<script>
export default {
    name:'BannerApp'
}
</script>

<style>

</style>