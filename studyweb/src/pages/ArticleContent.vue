<template>
  <el-main>
      <el-row>
          <el-col :span='16' push='4'>
              <el-card class="box-card, articleList">
  <div slot="header" class="clearfix">
    <span class='aricleListTitleList'><span class='editIcon'><i class="el-icon-tickets"></i></span> 文章内容</span>
    <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
  </div>
    <el-row>
        <el-col class='articleContentTitle'>
            文章标题
        </el-col>
        
    </el-row>
    <el-row>
        <el-col class='articleContentDate'>
            时间
        </el-col>
    </el-row>
    <el-row>
        <el-col class='articleContentText'>
            <div>为贯彻落实上级文件精神，根据学校相关文件要求，全面加强和改进学校思想政治理论课改革创新和体美劳教育工作，
                培养信念坚定、志存高远、德智体美劳全面发展，具有扎实的专业知识、持续的发展能力、执着的行业情怀的高素质创新型人才，
                结合学校实际，决定对 2020 版培养方案指导意见进行相应修订，并从 2022 级学生开始执行。为贯彻落实上级文件精神，根据学校相
                关文件要求，全面加强和改进学校思想政治理论课改革创新和体美劳教育工作，培养信念坚定、志存高远、德智体美劳全面发展，具有扎实
                的专业知识、持续的发展能力、执着的行业情怀的高素质创新型人才，结合学校实际，决定对 2020 版培养方案指导意见进行相应修订，并从
                 2022 级学生开始执行。为贯彻落实上级文件精神，根据学校相关文件要求，全面加强和改进学校思想政治理论课改革创新和体美劳教
                 育工作，培养信念坚定、志存高远、德智体美劳全面发展，具有扎实的专业知识、持续的发展能力、执着的行业情怀的高素质创新
                 型人才，结合学校实际，决定对 2020 版培养方案指导意见进行相应修订，并从 2022 级学生开始执行。为贯彻落实上级文件精神，根
                 据学校相关文件要求，全面加强和改进学校思想政治理论课改革创新和体美劳教育工作，培养信念坚定、志存高远、德智体美劳全面
                 发展，具有扎实的专业知识、持续的发展能力、执着的行业情怀的高素质创新型人才，
                结合学校实际，决定对 2020 版培养方案指导意见进行相应修订，并从 2022 级学生开始执行。</div>
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