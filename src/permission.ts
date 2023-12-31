//路由鉴权
import router from "./router";
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
router.beforeEach((to: any, from:any, next) => {
    nprogress.start()
    next()
})
router.afterEach((to, from) => {
    nprogress.done()
})