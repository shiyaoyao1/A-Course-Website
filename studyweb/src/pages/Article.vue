<template>
  <el-main>
      <el-row>
          <el-col :span='16' push='4'>
              <el-card class="box-card, articleList">
  <div slot="header" class="clearfix">
    <span class='aricleListTitleList'><span class='editIcon'><i class="el-icon-tickets"></i></span> 文章列表</span>
    <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
  </div>
  <el-link   :underline="false"  class='articleListTitle' v-for='(item) in messageList' :key='item.id'>
      <el-row type='flex' justify="start">
          <el-col :span='24' >
              <a @click='pushToArticleContent(item)'>{{item.messageTitle}} <span >{{item.messageDate}}</span></a>
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
        messageList:[{
        id:'001',
        messageTitle:'关于 2020 版培养方案指导意见的修订说明',
        messageDate:'(2022/5/26)',
        messageText:'为贯彻落实上级文件精神，根据学校相关文件要求，全面加强和改进学校思想政治理论课改革创新和体美劳教育工作，培养信念坚定、志存高远、德智体美劳全面发展，具有扎实的专业知识、持续的发展能力、执着的行业情怀的高素质创新型人才，结合学校实际，决定对 2020 版培养方案指导意见进行相应修订，并从 2022 级学生开始执行。具体说明如下'
        },
        {
        id:'002',
        messageTitle:'重庆邮电大学关于同意朱昱光等十八名学生延长修业期的通知',
        messageDate:'(2022/5/15)',
        messageText:'根据《普通高等学校学生管理规定》和《重庆邮电大学本生学籍管理规定》的有关条款，经学生本人申请、所在学院同意、教务处审批，同意朱昱光等十八名学生的延长修业期申请，学生相关信息见附表。'
        },
        {
        id:'003',
        messageTitle:'重庆邮电大学关于同意朱昱光等十八名学生延长修业期的通知',
        messageDate:'(2022/5/15)',
        messageText:'根据《普通高等学校学生管理规定》和《重庆邮电大学本生学籍管理规定》的有关条款，经学生本人申请、所在学院同意、教务处审批，同意朱昱光等十八名学生的延长修业期申请，学生相关信息见附表。'
        },
        {
        id:'004',
        messageTitle:'关于 2020 版培养方案指导意见的修订说明',
        messageDate:'(2022/5/26)',
        messageText:'为贯彻落实上级文件精神，根据学校相关文件要求，全面加强和改进学校思想政治理论课改革创新和体美劳教育工作，培养信念坚定、志存高远、德智体美劳全面发展，具有扎实的专业知识、持续的发展能力、执着的行业情怀的高素质创新型人才，结合学校实际，决定对 2020 版培养方案指导意见进行相应修订，并从 2022 级学生开始执行。具体说明如下'
        },
        {
        id:'005',
        messageTitle:'重庆邮电大学关于同意朱昱光等十八名学生延长修业期的通知',
        messageDate:'(2022/5/15)',
        messageText:'根据《普通高等学校学生管理规定》和《重庆邮电大学本生学籍管理规定》的有关条款，经学生本人申请、所在学院同意、教务处审批，同意朱昱光等十八名学生的延长修业期申请，学生相关信息见附表。'
        },
        ],
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
        }
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
.articleListLine{
    margin-top: 16px;
    margin-bottom: 12px;
     display: inline-block;
    background: 0 0;
    border-top: 1px solid #E6EBF5;
}

</style>