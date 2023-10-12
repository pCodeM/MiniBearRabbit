<template>
    <div class='layout'>
        <!-- 菜单栏 -->
        <div class="layout_slider" :class="settingStore.isFold ? 'Fold' : ''">
            <Logo></Logo>
            <el-scrollbar class="scrollbar">
                <el-menu :collapse="settingStore.isFold" :default-active="$route.path" background-color="#001529" text-color="#fff">
                    <Menu :menuList="constantRoutes"></Menu>
                </el-menu>
            </el-scrollbar>
        </div>
        <!-- 导航栏 -->
        <div class="layout_tabbar" :class="settingStore.isFold ? 'Expand' : ''">
            <Tabbar></Tabbar>
        </div>
        <!-- 内容区 -->
        <div class="layout_main" :class="settingStore.isFold ? 'Expand' : ''">
            <Main></Main>
        </div>
    </div>
</template>
<script lang='ts' setup>
import Menu from '@/layout/menu/index.vue'
import Logo from '@/layout/logo/index.vue'
import Main from '@/layout/main/index.vue'
import Tabbar from '@/layout/tabbar/index.vue'
import { constantRoutes } from '@/router/routes'
import { useRoute } from 'vue-router'
import useUserStore from '@/store/modules/user' 
import useSettingStore from '@/store/modules/setting'
import { onMounted } from 'vue'


const $route = useRoute()
let settingStore = useSettingStore()
let useStore = useUserStore()
onMounted( ()=>{
    useStore.getUserInfo()
})
</script>
<style scoped lang='scss'>
.layout {
    width: 100%;
    height: 100vh;

    .layout_slider {
        width: $base-menu-width;
        height: 100vh;
        color: white;
        background-color: $base-menu-bac;
        transition: all 1s ease;

        .scrollbar {
            width: 100%;
            height: calc(100vh - $base-tabbar-height );

            .el-menu {
                border-right: none;
            }
        }

        &.Fold {
            width: $base-fold-minwidth;
        }
    }

    .layout_tabbar {
        width: calc(100% - $base-menu-width);
        height: $base-tabbar-height;
        position: fixed;
        top: 0;
        left: $base-menu-width;
        color: white;
        background-color: $base-menu-bac;
        transition: all 1s ease;

        &.Expand {
            width: calc(100% - $base-fold-minwidth);
            left: $base-fold-minwidth;
        }
    }

    .layout_main {
        position: absolute;
        left: $base-menu-width;
        top: $base-tabbar-height;
        width: calc(100% - $base-menu-width);
        height: calc(100vh - $base-tabbar-height);
        padding: 20px;
        overflow: auto;
        // background-color: skyblue;
        transition: all 1s ease;

        &.Expand {
            width: calc(100% - $base-fold-minwidth);
            left: $base-fold-minwidth;
        }
    }
}</style>