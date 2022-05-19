<template>
  <el-form :model="userInfo" :rules="rules" ref="userInfo" label-width="100px" class="demo-ruleForm">
    <el-form-item label="图书名称" prop="name" class="input-box">
      <el-input v-model="userInfo.name"></el-input>
    </el-form-item>
    <el-form-item label="作者" prop="author" class="input-box">
      <el-input v-model="userInfo.author"></el-input>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="submitForm('userInfo')">提交</el-button>
      <el-button @click="resetForm('userInfo')">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      userInfo: {
        name: '',
        author: '',
      },
      rules: {
        account: [
          { required: true, message: '请输入账号', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const _this = this
          axios.post('http://localhost:8181/book/save',this.userInfo).then(function(resp){
            if(resp.data == "success"){
              _this.$alert(_this.userInfo.name+'添加成功','消息',{
                confirmButtonText: '确定',
                callback: action => {
                  _this.$router.push('/BookManage')
                }
              })
            }
          })
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>
<style scoped>
.input-box{
  width: 500px;
}
</style>
