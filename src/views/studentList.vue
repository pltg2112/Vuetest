<template>
  <div class="table-body">
    <el-table
        :data="userData"
        border
    >
      <el-table-column
          fixed
          prop="id"
          label="编号"
          width="200"
          >
      </el-table-column>
      <el-table-column
          prop="name"
          label="账号"
          width="240"
          >
      </el-table-column>
      <el-table-column
          prop="author"
          label="密码"
          width="240"
          >
      </el-table-column>
      <el-table-column
          fixed="right"
          label="操作"
          width="200">
        <template #default="scope">
          <el-button type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
        background
        layout="prev, pager, next"
        class="page-box">
    </el-pagination>
  </div>
</template>
<script>
export default {
  inject: ['reload'],
  data() {
    return {
      total: null,
      userData: []
    }
  },
  created() {
    const _this = this
    axios.get('http://localhost:8181/user/getAll').then(function (resp) {
      console.log(resp.data)
      _this.userData = resp.data
    })
  },
  methods: {
    editBook(row) {
      console.log(row);
    },
    // deleteBook(row){
    //   const _this = this
    //   axios.delete('http://localhost:8181/book/deleteById/'+row.id).then(function(resp){
    //     _this.$alert('删除成功','消息',{
    //       confirmButtonText: '确定',
    //       callback: action => {
    //         _this.reload()
    //       }
    //     })
    //
    //   })
    // },
    //   page(currentPage){
    //     const _this = this
    //     axios.get('http://localhost:8181/user/getAll/'+currentPage+'/8').then(function(resp){
    //       _this.tableData = resp.data.content
    //       _this.total = resp.data.totalElements
    //     })
    //   },
    // }
  }
}
</script>

<style scoped>
.table-body{
  width: 100%;
}
.page-box{
  text-align: center;
  margin-top: 20px;
}
</style>

