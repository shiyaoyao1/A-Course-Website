<template>


  <el-main>
    <el-row class='homeIntroduce' type='flex'>
      <el-col :span='4' push='4' class='welcomeText'>Welcome!</el-col>
      <el-col :span='13' push='6'>
        <div class='homeIntroduceArticle'>We seek to understand the fundamental principles underlying protein structure and function, to encode these principles in the Rosetta computer program, and to use them to create a new world of de novo designed proteins to address 21st-century challenges in health and technology. In all cases, we start entirely from first principles; we do not re-engineer native proteins. By iterating between computation and experiment, we continually improve our design methodology. </div>
        <div class='homeIntroduceArticle'>We are always looking for talented, enthusiastic, and diverse scientists to join our efforts. Our philosophy is that the more closely interacting a research group is, the better the science and the more fun overall. </div>
        <div class='homeIntroduceArticle'>We are located within the Institute for Protein Design at the University of Washington in Seattle. Click here to learn about available child-care options.
</div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span='7' push='4'><img src="../assets/home2.jpeg" alt="图片走丢了!" id='homeIntroducePic1' class='homeIntroducePic'></el-col>
      <el-col :span='7' push='5'><img src="../assets/home1.jpeg" alt="图片走丢了" class='homeIntroducePic'></el-col>
    </el-row>
    <el-row>
      <el-col :span='4'>学习目标</el-col>
      <el-col :span='8'><div>
        123
        </div></el-col>
    </el-row>
  </el-main>
  

</template>

<script>
// import Index from '../components/BannerBar.vue'
// import Header from '../pages/Header.vue'
export default {
    name:'HomeApp',
    components:{
      // Index,
    
    }
}
</script>

<style>
.homeIntroduce{
   padding-right: 180px;
}
.welcomeText{
  line-height: 1.4;
  padding-top: 12px;
  font-size: 27px;
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    font-weight: bold;
    line-height: 1;
    letter-spacing: 1px;
    word-spacing: 1px;
    line-height:1.5 
}


.homeIntroduceArticle{
  font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
  font-size: 15px;
  padding-right: 1em;
  line-height: 1.4;
  text-indent:2em;
  text-align:justify;
  /* text-justify:inter-ideograph; */
  margin-bottom: 18px;
}
.homeIntroducePic{
  /* min-width: 80%; */
  max-width: 100%;
  width: auto;
  display:block;
  position: relative;
  margin-left: 20px;
  margin-top: 30px;
  
}

</style>