<template>
  <div id="app">
    <!-- <LoginApp />
    <FooterApp /> -->
    <!-- Vue中借助router-link标签实现路由切换 -->
    <!-- <router-link  to='/index'></router-link> -->
    <!-- <router-link class="demo" to='/Footer'>Footer</router-link> -->
    <!-- <BannerBar /> -->
    <!-- 指定组件的呈现位置 -->
    <router-view></router-view>
    
  </div>
</template>

<script>
// import BannerBar from './components/BannerBar.vue'

// import LoginApp from './components/LoginApp.vue'
// import FooterApp from './components/FooterApp.vue'

export default {
  name: 'App',
  components: {
    // BannerBar
    // LoginApp,
    // FooterApp,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
