//入口文件
import Vue from 'vue'
 //导入App根组件
 import App from './App'
import router from './router'
Vue.config.productionTip = false

// 安装vue-resource 之后 才可以使用Vue.$http对象
import VueResource from 'vue-resource'
Vue.use(VueResource)

// 按需导入Mint-UI 中的组件
// import { Header } from 'mint-ui'

import './lib/mui/css/mui.min.css'
// Vue.use(Header)
// Vue.component(Header.name, Header);

// 全局导入
import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'

 new Vue({
    el: '#app',
    router,
    render: h => h(App)
  })

