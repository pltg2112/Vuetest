<template>
  <div style="height: 700px">
    <el-container style="height: 100%; border: 1px solid #eee">
          <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
            <el-menu router :default-openeds="['1','2']"
                     background-color="#545c64"
                     text-color="#fff"
                     active-text-color="#ffd04b">
              <el-submenu v-for="(item,j) in $router.options.routes" :index="j+''" :key="j">
                <template #title><i class="el-icon-menu"></i>{{item.name}}</template>
                <el-menu-item v-for="(item2,k) in item.children" :index="item2.path"
                :class="$route.path==item2.path?'is-active':''" :key="k">{{item2.name}}</el-menu-item>
              </el-submenu>
            </el-menu>
          </el-aside>
          <el-container>
            <el-header style="text-align: right;margin-right:25px; font-size: 15px">
              <el-dropdown>
                <i class="el-icon-menu" style="margin-right: 15px"></i>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item>个人信息</el-dropdown-item>
                    <el-dropdown-item>
                      <router-link :to="{path:'/'}">退出登录</router-link>
                    </el-dropdown-item>
                    </el-dropdown-menu>
                </template>
              </el-dropdown>
              <span>破浪踏歌</span>
            </el-header>
            <el-main>
            <router-view></router-view>
            </el-main>
          </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
name: "index"
}
</script>

<style scoped>
.el-header{
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;
}
.el-aside{
  color: #333;
}
</style>