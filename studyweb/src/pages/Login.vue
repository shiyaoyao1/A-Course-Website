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
  <el-form-item label="学号" prop="id" class='loginInputBox'>
    <el-input type="text" v-model="ruleForm.pass" autocomplete="off" ></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="pass" class='loginInputBox'>
    <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off" ></el-input>
  </el-form-item>
  
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')" class='loginSubmitBtn'>登录</el-button>
  </el-form-item>
</el-form>
                </div>
                  </el-col>
                </el-row>
                
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
        ruleForm: {
          pass: '',
          checkPass: '',
        },
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
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
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
  margin-right: 92px;
  padding-left: 47px;
  padding-right: 47px;
}
</style>