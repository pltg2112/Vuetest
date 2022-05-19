import Vue from 'vue'
import VueRouter from 'vue-router'
import BookManage from '../views/BookManage'
import AddBook from '../views/AddBook'
import PersonalInfo from '../views/PersonalInfo'
import studentList from '../views/studentList'
import index from '../views/Index'
import login from '../views/Login'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name:"图书管理系统",
    component: login,
  },
  {
    path: '/index',
    name: '图书管理',
    component: index,
    children: [
      {
        path: '/index/bookManage',
        name: '查询图书',
        component: BookManage
      },
      {
        path: '/index/addBook',
        name: '添加图书',
        component: AddBook
      }
    ]
  },
  {
    path: '/index',
    name: '用户管理',
    component: index,
    children: [
      {
        path: '/index/personalInfo',
        name: '个人信息',
        component: PersonalInfo
      },
      {
        path: '/index/studentList',
        name: '学生列表',
        component: studentList
      }
    ]
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
