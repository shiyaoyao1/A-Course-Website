<template>
  <el-main>
      <el-row>
          <el-col :span='16' push='4'>
              <el-card class="box-card, articleList">
  <div slot="header" class="clearfix">
    <span @click='getArticleList' class='aricleListTitleList'><span class='editIcon'><i class="el-icon-tickets"></i></span> 文章列表</span><span class='addArticleBtn'><el-button class='addArticleBtnText' size='small' type="primary" >添加文章</el-button></span>
    <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
  </div>
  <el-item   :underline="false"  class='articleListTitle' v-for='(item) in articleList' :key='item.id'>
      <el-row type='flex' justify="start">
          <el-col :span='24' >
              <el-link :underline="false" class='articleListTitleLink'   @click.stop='pushToArticleContent(item)'>{{item.title}} <span >{{item.time}}</span></el-link>
              <el-button-group class='articleEditBtn'>
  <el-button  size='mini' type="warning" >修改</el-button>
  <el-button @click='deleteArticleBtn(item)' size='mini' type="danger">删除</el-button>
</el-button-group>
              <el-divider class='articleListLine'></el-divider>
          </el-col>
      </el-row>
      
  </el-item>
  
</el-card>
          </el-col>
      </el-row>
  </el-main>
</template>

<script>
export default {
    name:'ArticleEdit',
    data() {
      return {
        articleList:[],
      }
    },
    methods: {
        //跳转并且是push模式
        pushToArticleContent(item){
            // console.log(this.$router)
            this.$router.push({
                name:'ArticleContent',
                query:{
                    id:item.id,
                }
            })
        },
        getArticleList(){
              this.$store.dispatch("getArticleList");
              setTimeout(()=>{
                this.articleList = this.$store.getters.articleList;
                sessionStorage.setItem('articleList', JSON.stringify(this.$store.getters.articleList));
              },30)
        },
        deleteArticleBtn(item){
            item.content = null;
            this.$store.diapatch("updateArticle",item);
        }
        
        
    },
    mounted() {
        this.getArticleList();
    },
    updated() {
        this.getArticleList();
    },
   
    
    
    
}
</script>

<style>
.articleList{
    display: block;
}
.aricleListTitleList{
    font-size: 20px;
    display: block;
    float: left;
    padding-left: 20px;
}
.articleListTitle{
    display: block;
    font-size: 18px;
    margin-bottom: 12px;
    text-align: left;
    margin-left: 20px;
}
.articleListTitleLink{
    font-size: 18px;
}
.articleListLine{
    margin-top: 16px;
    margin-bottom: 12px;
     display: inline-block;
    background: 0 0;
    border-top: 1px solid #E6EBF5;
}
.articleEditBtn{
  margin-left: 30px;
}
.addArticleBtn{
    display: block;
    float: right;
    margin-right: 20px;
    font-size: 20px;
}
.addArticleBtnText{
    font-size: 15px;
    padding-top: 7px;
    padding-bottom: 7px;
}
</style>