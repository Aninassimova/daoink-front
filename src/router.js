import VueRouter from 'vue-router'

// 导入对应的路由组件

import HomeContainer from './components/tabbar/HomeContainer'
import DocContainer from './components/tabbar/DocContainer'
import FriendsContainer from './components/tabbar/FriendsContainer'
import MineContainer from './components/tabbar/MineContainer'
import Login from './components/single_pages/login'
import Register from './components/single_pages/register'


// 创建路由对象
var router = new VueRouter({
  routes: [ // 配置路由规则
    { path: '/', component: HomeContainer },
    { path: '/doc', component: DocContainer },
    { path: '/friends', component: FriendsContainer },
    { path: '/mine', component: MineContainer },
    { path: '/mine/login', component: Login },
    { path: '/mine/register', component: Register }
  ],
  // linkActiveClass: ''
})

// 页面刷新时，重新赋值token 
// if (sessionStorage.getItem('token')) { 
//   this.$store.commit('set_token', sessionStorage.getItem('token')) 
//   } 


// router.beforeEach((to, from, next) => {
//   if (to.matched.some(r => r.meta.requireAuth)) {      //这里的requireAuth为路由中定义的 meta:{requireAuth:true}，意思为：该路由添加该字段，表示进入该路由需要登陆的 
//     if (this.$store.state.token) {
//       next();
//     }
//     else {
//       next({
//         path: '/login',
//         query: { redirect: to.fullPath }
//       })
//     }
//   }
//   else {
//     next();
//   }
// })



// 把对象暴露出去
export default router