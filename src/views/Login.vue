<template>
  <div class="login-box">
    <el-form ref="form" :rules="rules" :model="form" label-width="80px">
      <h2 class="login-title" >图书管理员登录</h2>
      <el-form-item label="账号" prop="username">
        <el-input type="text" placeholder="请输入账号" v-model="form.username"/>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" placeholder="请输入密码" v-model="form.password"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('form')">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: "Login",
    data(){
      return{
        form:{
          username: '',
          password: ''
        },
        database:{
          username:'pltg',
          password:'pltg',
        },
        rules:{
          username: [
            { required: true, message: '请输入账号', trigger: 'blur' },
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
          ],
        }
      }
    },
    methods:{
      submitForm(formName){
        this.$refs[formName].validate((valid) => {
          if (valid) {
            if(this.form.username==this.database.username&&this.form.password==this.database.password)
            {this.$router.push('/index');}
            else{
              this.$message({
                message: '账号或密码错误',
                type: 'warning'
              });
            }
          } else {
            this.$message({
              message: '请输入账号或密码',
              type: 'warning'
            });
            return false;
          }
        });
      }
    }
}
</script>

<style scoped>
.login-box{
  width: 350px;
  margin: 150px auto;
  border: 1px solid #DCDFE6;
  border-radius: 5px;
  padding: 25px;
  box-shadow: 0 0 25px #DCDFE6;
}
.login-title{
  text-align: center;
}
</style>