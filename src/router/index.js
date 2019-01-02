import Vue from 'vue'
import Router from 'vue-router'
// @符号 表示 src 目录
import homeContainer from '../pages/home'
import memberContainer from '../pages/member'
import shopcarContainer from '../pages/shopcar'
import searchContainer from '../pages/search'

Vue.use(Router)

export default new Router({
    routes:[
        {path:'/', redirect:'/home'},
        {path:'/home',component:homeContainer},
        {path:'/member',component:memberContainer},
        {path:'/shopcar',component:shopcarContainer},
        {path:'/search',component:searchContainer}
    ],
    linkActiveClass:'mui-active'
}) 




