<template>
  <el-main>
      <el-row>
          <el-col :span='16' push='4'>
              <el-card class="box-card, articleList">
  <div slot="header" class="clearfix">
    <span class='aricleListTitleList'><span class='editIcon'><i class="el-icon-tickets"></i></span> 文章列表</span>
    <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
  </div>
  <el-link   :underline="false"  class='articleListTitle' v-for='(item) in articleList' :key='item.id'>
      <el-row type='flex' justify="start">
          <el-col :span='24' >
              <a @click='pushToArticleContent(item)'>{{item.title}} <span >{{item.time}}</span></a>
              <el-divider class='articleListLine'></el-divider>
          </el-col>
      </el-row>
      
  </el-link>
  
</el-card>
          </el-col>
      </el-row>
  </el-main>
</template>

<script>
export default {
    name:'ArticleApp',
    data() {
      return {
        
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
        //获取文章列表
        getArticleList(){
              this.$store.dispatch("getArticleList");
              //可以通过异步方法使得请求返回后再写入data，但是通过vuex直接获取更安全方便，所以弃用该段代码
              /* setTimeout(()=>{
                this.articleList = this.$store.getters.articleList
              },30) */
        }
        
        
    },
    created() {
        if(!sessionStorage.getItem('articleList')){
            this.getArticleList();
        }
        
    },
    computed:{
        articleList(){
            return this.$store.getters.articleList
        }
    }
    
   
    
    
    
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
.articleListLine{
    margin-top: 16px;
    margin-bottom: 12px;
     display: inline-block;
    background: 0 0;
    border-top: 1px solid #E6EBF5;
}

</style>