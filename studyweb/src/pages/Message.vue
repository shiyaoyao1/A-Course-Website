<template>
  <el-main>
    <el-row type='flex' justify='center'>
      
      
        <el-col :span='16' push='0'>
              <el-card class="box-card, articleList">
  <div slot="header" class="clearfix">
    <span class='aricleListTitleList'><span class='editIcon'><i class="el-icon-tickets"></i></span> 消息列表</span>
    <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
  </div>
  <el-col :span='20' push='2' class='messageListBox'>
        <el-collapse accordion>
  <el-collapse-item v-for='(item) in messageList' :key='item.id'>
    <template slot="title">
      {{item.messageTitle}} <span class='messageDate'>{{item.messageDate}}</span>
    </template>
    <div>{{item.messageText}}</div>
    
  </el-collapse-item>
  <!-- <el-collapse-item  title="反馈 Feedback">
    <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
    <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
  </el-collapse-item>
  <el-collapse-item  title="效率 Efficiency">
    <div>简化流程：设计简洁直观的操作流程；</div>
    <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
    <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
  </el-collapse-item>
  <el-collapse-item title="可控 Controllability">
    <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
    <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
  </el-collapse-item> -->
</el-collapse>
        </el-col>
  
</el-card>
          </el-col>
    </el-row>
   
  </el-main>
</template>

<script>
export default {
    name:'MessageApp',
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
        messageTitle:'关于 2020 版培养方案指导意见的修订说明',
        messageDate:'(2022/5/26)',
        messageText:'为贯彻落实上级文件精神，根据学校相关文件要求，全面加强和改进学校思想政治理论课改革创新和体美劳教育工作，培养信念坚定、志存高远、德智体美劳全面发展，具有扎实的专业知识、持续的发展能力、执着的行业情怀的高素质创新型人才，结合学校实际，决定对 2020 版培养方案指导意见进行相应修订，并从 2022 级学生开始执行。具体说明如下'
        },
        ],
      }
    },
    methods:{
      isReady(){
        this.item.haveRead = true;
      }
    }
}
</script>

<style >
.el-collapse-item__header{
  font-size:23px;
}
.el-collapse-item__content{
  font-size: 17px;
  padding-left: 5em;
  padding-right: 5em;
  text-indent:2em;
  text-align:justify;
  text-justify:inter-ideograph;
}
/* .el-main{
  padding-left: 20em;
  padding-right: 20em;
} */
.header-icon{
  color: rgb(28, 172, 38);
}
.messageDate{
  /* color: rgb(187, 33, 33); */
  padding-left: 9px;
  padding-right: 2px;
}
.messageListBox{
  height: 500px;
  /* padding-bottom: 100px; */
  padding-top: 12px;
}

</style>