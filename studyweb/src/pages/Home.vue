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
      <el-col :span='4' push='3' class='studyTargetText'>学习目标</el-col>
      <el-col :span='10' push='4'><div>
        <ul class="studyTargetTextContent">
          <li>Designing molecular switches, enzymes, and motors</li>
          <li>Designing delivery vehicles for targeted intracellular delivery of biologics</li>
          <li>Designing high-affinity binders to arbitrary small molecule and protein targets</li>
          <li>Designing membrane-permeable macrocyclic peptide therapeutics</li>
          <li>Generating novel hybrid materials through designed biomineralization</li>
          <li>Deep learning for protein structure refinement and protein design</li>
        </ul>
        </div></el-col>
    </el-row>
    <el-row>
      <el-col span='11' push='8'>
        <el-divider></el-divider>
      </el-col>
    </el-row>
    <el-row>
      <el-col span='4' push='3' class='LatestNews'>最新内容</el-col>
    </el-row>
    <el-row class='latestNewsCard'>
  <el-col :span="5" push='4' class="latestNewsCard" v-for="(o, index) in 3" :key="o" :offset="index > 0 ? 2 : 0">
    <el-card :body-style="{ padding: '0px' }" class="homeLatestNewsCard">
      <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
      <div style="padding: 0px;">
        <span>{{homeLatestNews[0].title}}</span>
        <div class="bottom clearfix">
          <time class="time">{{ homeLatestNews[0].date }}</time>
        
        </div>
      </div>
    </el-card>
  </el-col>
</el-row>
<el-row class='latestNewsCard'>
  <el-col :span="5" push='4' class="latestNewsCard" v-for="(o, index) in 3" :key="o" :offset="index > 0 ? 2 : 0">
    <el-card :body-style="{ padding: '0px' }" class="homeLatestNewsCard">
      <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
      <div style="padding: 0px;">
        <span>{{homeLatestNews[0].title}}</span>
        <div class="bottom clearfix">
          <time class="time">{{ homeLatestNews[0].date }}</time>
        </div>
      </div>
    </el-card>
  </el-col>
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
    
    },
    data() {
      return {
        homeLatestNews:[
          {
            title:'Custom biosensors for detecting coronavirus antibodies in blood	',
            date:'五月28日,2022',
            linkUrl:''
            }
        ]
      }
    },

}
</script>

<style>
.homeIntroduce{
   padding-right: 180px;
}
.welcomeText{
  line-height: 1.4;
  padding-top: 12px;
  font-size: 30px;
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
.studyTargetText{
  line-height: 1.4;
  padding-top: 60px;
  font-size: 30px;
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    font-weight: bold;
    line-height: 1;
    letter-spacing: 1px;
    word-spacing: 1px;
    line-height:1.5 
}
.studyTargetTextContent{
  font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
  font-size: 15px;
  padding-right: 1em;
  line-height: 1.4;
  /* text-indent:2em; */
  text-align:justify;
  /* text-justify:inter-ideograph; */
  margin-bottom: 18px;
  margin-top: 48px;
}
.LatestNews{
   line-height: 1.4;
  padding-top: 55px;
  font-size: 30px;
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    font-weight: bold;
    line-height: 1;
    letter-spacing: 1px;
    word-spacing: 1px;
    line-height:1.5 
}
.homeLatestNewsCard{
  padding: 0px;
  display: block;
  float: left;

}
.clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
  .latestNewsCard{
    margin-left: 0px;
    margin-right: 50px;
    margin-bottom: 26px;
    margin-top: 4px;
  }

</style>