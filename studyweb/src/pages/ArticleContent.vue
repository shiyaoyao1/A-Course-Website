<template>
  <el-main>
      <el-row>
          <el-col :span='16' push='4'>
              <el-card class="box-card, articleList">
  <div slot="header" class="clearfix">
    <span @click='getArticleList' class='aricleListTitleList'><span class='editIcon'><i class="el-icon-tickets"></i></span> 文章内容</span>
    <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
  </div>
    <el-row>
        <el-col class='articleContentTitle'>
            {{article.title}}
        </el-col>
        
    </el-row>
    <el-row>
        <el-col class='articleContentDate'>
            {{article.time}}
        </el-col>
    </el-row>
    <el-row>
        <el-col class='articleContentText'>
            <div>{{article.content}}</div>
        </el-col>
    </el-row>
  
</el-card>
          </el-col>
      </el-row>
  </el-main>
</template>

<script>
export default {
    name:'ArticleContent',
    data() {
        return {
            articleList:[],
            article:{},
        }
    },
    methods: {
        getArticleList(){
            this.$store.dispatch("getArticleList");
              setTimeout(()=>{
                this.articleList = this.$store.getters.articleList
                this.article = this.articleList[this.$route.query.id-1]
              },30)
        }
    },
    mounted() {
        this.getArticleList();
        this.article = sessionStorage.articleList[this.$route.query.id-1] || this.articleList[this.$route.query.id-1]

    },
    updated() {
         this.getArticleList();
    },
    
}

</script>

<style>
.articleContentTitle{
    font-size: 27px;
}
.articleContentDate{
    font-size: 17px;
    margin-top: 12px;

}
.articleContentText{
    font-size: 17px;
    margin-top: 40px;
    padding-left: 60px;
    padding-right: 60px;
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;

  line-height: 1.4;
  text-indent:2em;
  text-align:justify;
  /* text-justify:inter-ideograph; */
  margin-bottom: 18px;
}
</style>