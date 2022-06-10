<template>


  <el-main>
    <el-row class='homeIntroduce' type='flex'>
      <el-col :span='4' push='4' class='welcomeText'>Welcome!</el-col>
      <el-col :span='13' push='6'>
        <div class='homeIntroduceArticle'>数据库技术是计算机学科的一个重要分支，已经成为信息基础设施的核心技术和重要基础。数据库技术作为数据管理的最有效的手段，极大的促进了计算机应用的发展。 </div>
        <div class='homeIntroduceArticle'>本课程主要介绍数据库系统的基本概念、数据模型、关系数据库及其标准语言SQL、数据库安全性和完整性的概念，关系规范化理论，数据库设计方法和步骤，数据库恢复和并发控制，关系查询处理和查询优化等有关数据库系统的基础理论、基本技术和基本方法。</div>
        <div class='homeIntroduceArticle'>通过本课程学习，要求学生系统地掌握数据库系统的基本原理和基本技术。在掌握数据库系统基本概念的基础上，能熟练使用SQL语言在某一个数据库管理系统（如SQL Server、Oracle）上进行数据库操作；掌握数据库设计方法和步骤，具有设计数据库模式以及开发数据库应用系统的基本能力；通过具体案例了解数据库技术在电力企业信息化中的应用。
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
          <li>掌握数据库的基本理论</li>
          <li>掌握结构化查询语言（SQL）</li>
          <li>掌握数据库管理软件MySQL的使用方法</li>
          <li>了解HTML、CSS和PHP</li>
          <li>掌握构建网络数据库的方法</li>
          <li> 最终目标：在Linux环境下构建一个能通过网络进行查询、修改、添加、删除、维护数据的生物（医学）数据库</li>
        </ul>
        </div></el-col>
    </el-row>
    <el-row>
      <el-col span='11' push='8'>
        <el-divider></el-divider>
      </el-col>
    </el-row>
    <el-row>
      <el-col span='4' push='3' class='LatestNews'>网站推荐</el-col>
    </el-row>
    <el-row class='latestNewsCard'>
      
  <el-col :span="5" push='4' class="latestNewsCard1">
    <el-card shadow="hover" :body-style="{ padding: '0px' }" class="homeLatestNewsCard1">
      <el-link :underline="false" href='https://www.w3school.com.cn/index.html' target="_blank"><img src="../assets/w3cSchool.png" class="W3cSchoolImage"></el-link>
    
    </el-card>
  </el-col>

  <el-col :span="5" push='4' class="latestNewsCard2">
    <el-card shadow="hover" :body-style="{ padding: '0px' }" class="homeLatestNewsCard2">
      <el-link :underline="false" href='https://www.runoob.com/' target="_blank"><img src="../assets/runnoob.jpeg" class="RunnoobImage"></el-link>
      
    </el-card>
  </el-col>


  <el-col :span="4" push='4' class="latestNewsCard3">
    <el-card shadow="hover" :body-style="{ padding: '0px' }" class="homeLatestNewsCard3">
      <el-link :underline="false" href='https://www.webofscience.com' target="_blank"><img src="../assets/webOfScience.png" class="webOfScienceImage"></el-link>
      
    </el-card>
  </el-col>
</el-row>

<!-- 第二行 -->
<el-row class='latestNewsCard'>
  <el-col :span="5" push='4' class="latestNewsCard4">
    <el-card shadow="hover" :body-style="{ padding: '0px' }" class="homeLatestNewsCard4">
      <el-link :underline="false" href='https://pubmed.ncbi.nlm.nih.gov/' target="_blank"><img src="../assets/pubMed.png" class="pubMedImage"></el-link>
    
    </el-card>
  </el-col>
  <el-col :span="6" push='4' class="latestNewsCard5">
    <el-card shadow="hover" :body-style="{ padding: '0px' }" class="homeLatestNewsCard5">
      <el-link :underline="false" href='https://www.ebi.ac.uk/Tools/psa/emboss_water/' target="_blank"><img src="../assets/EMBossWater.png" class="EMBossWaterImage"></el-link>
    
    </el-card>
  </el-col>
  <el-col :span="3" push='4' class="latestNewsCard6">
    <el-card shadow="hover" :body-style="{ padding: '0px' }" class="homeLatestNewsCard6">
      <el-link :underline="false" href='https://www.uniprot.org/' target="_blank"><img src="../assets/UniProKB.png" class="UniProKBImage"></el-link>
    
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
.homeLatestNewsCard1{
  padding: 0px;
  display: block;
  float: left;
  border: none;
  margin-right: 30px;
}
.latestNewsCard2{
  padding-bottom: 22px;
  display: block;
  float: left;
  border: none;
  margin-left: 40px;
  margin-right: 40px;
  

}
.latestNewsCard3{
  padding: 0px;
  display: block;
  float: left;
  border: none;
  margin-left: 20px;
}
.latestNewsCard4{
  padding: 0px;
  display: block;
  float: left;
  border: none;
  margin-top: -35px;
}
.latestNewsCard5{
  padding: 0px;
  display: block;
  float: left;
  border: none;
  margin-left: 50px;
  margin-top: 12px;
}
.latestNewsCard6{
  display: block;
  margin-top: 2px;
  margin-left: 48px;
}
.homeLatestNewsTitle{
  display: block;
  font-size: 16px;
  padding-top: 10px;
  padding-left: 30px;
  padding-right: 35px;
  margin-bottom: 9px;
  line-height: 1.4;
}
.homeLatestNewsTime{
  font-size: 15px;
  text-align: left;
  padding-left: 32px;
  line-height: 1.4;
  letter-spacing: 0.1rem;
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
    margin-right: 40px;
    margin-bottom: 26px;
    margin-top: 4px;
  }
.W3cSchoolImage{
  width: 100%;
  padding: 0px;
}
.RunnoobImage{
  width: 100%;
  height: 50%;
}
.webOfScienceImage{
  width: 100%;
  
}
.pubMedImage{
  width: 100%;
}
.EMBossWaterImage{
  width: 100%;
  display: block;
}
.UniProKBImage{
  width: 100%;
  display: block;
  height: 95%;
}
</style>