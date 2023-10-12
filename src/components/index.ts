import Home from "@/components/SvgIcon/SvgIcon.vue";
// 封装全局svg组件自动注册使用
const GlobalSvgComponents: any = { Home }
export default {
    install(app: { component: (arg0: string, arg1: any) => void; }){
        for (const key in GlobalSvgComponents) {
            const element = GlobalSvgComponents[key];
            console.log(key);
            app.component(key,element)
        }
        
    }
}