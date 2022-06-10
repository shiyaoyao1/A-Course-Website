<template>
  <div>
      <el-container>
        <el-main>
          <el-row>
            <el-col :span='8' push='8' class='loginBox'>
              <el-card class="box-card">
                <el-row>
                  <el-col>
                    <img style=" max-width: 30%;height: auto;margin-top: 14px ;margin-bottom: 20px ;" src="../assets/shengwu.jpg" alt="picture">
                  </el-col>
                </el-row>
                <el-row>
                  <el-col>
                    <span class="loginTitle">LOGIN</span>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col>
                    <div class='loginFormBox'>
                  <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="账号"  class='loginInputBox'>
    <el-input type="text" v-model="submitForm.id" autocomplete="off" ></el-input>
  </el-form-item>
  <el-form-item label="密码"  class='loginInputBox'>
    <el-input type="password" v-model="submitForm.password" autocomplete="off" ></el-input>
  </el-form-item>
  
  <el-form-item>
    <el-button type="primary"  class='loginSubmitBtn'>登录</el-button>
    <el-button type="info" @click="submitRegister" class='loginSubmitBtn'>注册</el-button>
  </el-form-item>
  
</el-form>
                </div>
                  </el-col>
                </el-row>
               <!--  <el-row>
                  <el-col :span='4' class='headPicUpload'>
                    
                    <el-upload
  action="https://jsonplaceholder.typicode.com/posts/"
  list-type="picture-card"
  :on-preview="handlePictureCardPreview"
  :on-remove="handleRemove">
  <i class="el-icon-plus"></i>
</el-upload>


<el-row><el-col :span='4' class='headPicUpload2'><el-button type="primary">点击上传</el-button></el-col></el-row>
                  </el-col>
                  <el-col :span='10' push='2' class='userBox'>
                    <el-form ref="form" :model="form" label-width="80px">
  <el-form-item  label="昵称">
    <el-input placeholder="Admin" :disabled="true" v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item
    prop="email"
    label="邮箱"
    :rules="[
      { required: true, message: '请输入邮箱地址', trigger: 'blur' },
      { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
    ]"
  >
    <el-input v-model="form.email"></el-input>
  </el-form-item>
  <el-form-item label="电话号码">
    <el-input v-model="form.num"></el-input>
  </el-form-item>
  <el-form-item label="年龄">
    <el-input v-model="form.age"></el-input>
  </el-form-item>
  
  <el-form-item label="生日">
    <el-col :span="11">
      <el-date-picker
      v-model="value1"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
    </el-col>
    <el-col class="line" :span="2">-</el-col>
    
  </el-form-item>
  <el-form-item label="账户状态">
    <el-switch v-model="form.delivery" ></el-switch>
  </el-form-item>
  
  <el-form-item label="性别">
    <el-radio-group v-model="form.resource">
      <el-radio label="男"></el-radio>
      <el-radio label="女"></el-radio>
       <el-radio label="不显示"></el-radio>
    </el-radio-group>
  </el-form-item>
  <el-form-item label="个性签名">
    <el-input type="textarea" v-model="form.desc"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">立即创建</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</el-form>
                  </el-col>
                </el-row> -->
              </el-card>
            </el-col>
          </el-row>
        </el-main>
      </el-container>
  </div>
</template>

<script>
export default {
    name:'LoginApp',
    data() {
      
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        }else {
          callback();
        }
      };
      return {
        submitForm: {
          id: '',
          password: '',
        },
        articles:'',
        form: {
          name: '',
          age: '',
          date1: '',
          date2: '',
          num:'',
          mail:'',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        value1: '',
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
        }
      };
    },
    methods: {
      submitRegister(){
        this.$store.dispatch('register',this.submitForm)
      },
      demo(){
        this.$store.dispatch('getArticle')
        console.log(JSON.parse(this.articles))
      }
    }
}
</script>

<style>
.loginBox{
  margin-top: 24px;
  margin-bottom: 50px;
}
.loginFormBox{
  display: block;
}
.loginTitle{
  display: block;
  font-family: Helvetica;
  font-size: 30px;
  color: rgb(105, 105, 105);
  font-weight:bold;
  margin-bottom: 65px;
}
.loginInputBox{
  padding-right: 77px;
  font-size: 20px;
}
.loginSubmitBtn{
  text-align: center;
  /* margin-right: 92px;
  padding-left: 47px;
  padding-right: 47px; */
  /* padding-right: 40px; */
  margin-right: 70px;
  margin-top: 20px;
}
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  .headPicUpload{
    /* margin-top: 14px; */
    margin-left: 90px;
    margin-top: 20px;
  }
  .headPicUpload2{
   margin-top: 20px; 
   margin-left: 30px;
  }
  .userBox{
    margin-top: 40px;
  }
</style>