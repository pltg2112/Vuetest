<template>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
    <el-form-item label="图书名称" prop="name" class="input-box">
      <el-input v-model="ruleForm.name"></el-input>
    </el-form-item>
    <el-form-item label="作者" prop="author" class="input-box">
      <el-input v-model="ruleForm.author"></el-input>
    </el-form-item>
    <el-form-item label="简介" prop="introduction" style="width: 700px">
      <el-input v-model="ruleForm.introduction"></el-input>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        name: '',
        author: '',
        introduction: '',
      },
      rules: {
        name: [
          { required: true, message: '请输入图书名称', trigger: 'blur' },
        ],
        author: [
          { required: true, message: '请输入作者', trigger: 'blur' }
        ],
        introduction: [
          { required: true, message: '请输入简介', trigger: 'blur' }
        ],
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
            const _this = this
            axios.post('http://localhost:8181/book/save',this.ruleForm).then(function(resp){
                if(resp.data == "success"){
                  _this.$alert('《'+_this.ruleForm.name+'》添加成功','消息',{
                    confirmButtonText: '确定',
                    callback: action => {
                       _this.$router.push('/index/bookManage')
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
