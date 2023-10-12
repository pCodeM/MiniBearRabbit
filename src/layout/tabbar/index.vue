<template>
    <div class='tabbar'>
        <div class="tabbar_left">
            <el-icon class="tabbar_Expand" color="white" @click="expandMenu">
                <Expand />
            </el-icon>
            <el-breadcrumb separator-icon="ArrowRight" >
                <template v-for="item in $route.matched" :key="item.path">
                    <el-breadcrumb-item :to="item.path" >
                        <!-- <el-icon color="white"><component :is='item.meta.icon'></component></el-icon> -->
                        <span style="color:white;margin-left: 5px;">{{ item.meta.title }}</span>
                    </el-breadcrumb-item>
                </template>
            </el-breadcrumb>
        </div>
        <div class="tabbar_right">
            <el-button class="tababar_rightIcon" icon="Refresh" @click="Refresh" circle />
            <el-button class="tababar_rightIcon" icon="FullScreen" circle />
            <el-button class="tababar_rightIcon" icon="Setting" circle />
            <img :src="useStore.avatar" alt="" style="border-radius: 100%; margin: 0 10px; background-color: orange;width: 32px;height: 32px;">
            <el-dropdown class="tabbar_dropdown">
                <span class="el-dropdown-link">
                    <span style="margin-right: 5px;">Settings Options</span>
                    <el-icon class="el-icon--right">
                        <arrow-down />
                    </el-icon>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item @click="checkOut">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>
</template>

<script lang='ts' setup>
import { useRoute } from 'vue-router';
import useUserStore from '@/store/modules/user';
const useStore = useUserStore()
const $route = useRoute()
import useSettingStore from '@/store/modules/setting'
const expandMenu = () => {// 折叠
    let settingStore = useSettingStore()
    settingStore.isFold = !settingStore.isFold
}
const Refresh = ()=>{//刷新
    console.log('Refresh');
}
const checkOut = ()=>{//退出登录
    useStore.userCheckOut(useStore.Token)
}
</script>
<style scoped lang='scss'>
.tabbar {
    width: 100%;
    height: 100%;
    padding: 0 10px;
    color: white;
    .tabbar_left {
        float: left;
        height: 100%;
        display: flex;
        align-items: center;
        .tabbar_Expand {
            margin: 0 20px 0 10px;
            font-size: 20px;
        }
    }
    .tabbar_right {
        float: right;
        display: flex;
        height: 100%; 
        align-items: center;
        justify-content: space-between;
        .tababar_rightIcon{
            margin: 0 10px;
            color: black;
        }
        .tabbar_dropdown{
            color: white;
        }
    }
}</style>