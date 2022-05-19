<template>
  <div id="app">
        <router-view v-if="isRouterAlive"></router-view>
  </div>
</template>

<script>
export default {
  provide(){
    return{
      reload:this.reload
    }
  },
  data() {
    const item = {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    };
    return {
      isRouterAlive:true,
      tableData: Array(20).fill(item)
    }
  },
  methods:{
    reload(){
      this.isRouterAlive = false
      this.$nextTick(function () {
        this.isRouterAlive =  true
      })
    },
  }
};
</script>
<style scoped>

</style>