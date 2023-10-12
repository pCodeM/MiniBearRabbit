// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { createRouter, createWebHashHistory } from "vue-router";
import { constantRoutes } from "@/router/routes"
const router = createRouter({
    history: createWebHashHistory(),
    routes: constantRoutes,
    scrollBehavior() {
        return {
            left: 0,
            top: 0
        }
    }
})
export default router