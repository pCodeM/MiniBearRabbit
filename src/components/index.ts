import SvgIcon from "@/components/SvgIcon/SvgIcon.vue";
import Category from "./category/index.vue";
//引入element-plus提供全部图标组件
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// 封装全局svg组件自动注册使用
const GlobalSvgComponents: any = { SvgIcon, Category };
//对外暴露插件对象
export default {
  //务必叫做install方法
  install(app: any) {
    //注册项目全部的全局组件
    Object.keys(GlobalSvgComponents).forEach((key) => {
      //注册为全局组件
      app.component(key, GlobalSvgComponents[key]);
    });
    //将element-plus提供图标注册为全局组件
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }
  },
}
