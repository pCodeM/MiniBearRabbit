import { createApp } from 'vue'
import App from './App.vue'
//引入element_plus 图标组件库和图标及组件的样式文件
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/el-message-box.css'
//国际化
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
//引入全局svg
import 'virtual:svg-icons-register'
import GlobalSvgComponent from "@/components/index.ts"
//引入vueRouter
import VueRouter from "@/router/index"
//引入全局样式文件
import "@/style/index.scss"
import pinia from './store'
//引入路由鉴权文件
import './permission'
const app = createApp(App)
app.use(ElementPlus, {
    locale: zhCn,//elementPlus 国际化
})
//全局注册图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(VueRouter)
app.use(pinia)
app.use(GlobalSvgComponent)
app.mount('#app')