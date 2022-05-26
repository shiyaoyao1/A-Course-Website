<template>
<el-containner>
  <Index />
  <el-main>
    <el-row :span='24'>
      <h2>Home内容</h2>
    </el-row>
  </el-main>
  </el-containner>
</template>

<script>
import Index from '../components/BannerBar.vue'
export default {
    name:'HomeApp',
    components:{
      Index
    }
}
</script>

<style>

</style>