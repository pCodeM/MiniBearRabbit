<template>
    <div class='login_container'>
        <img src="../../../public/logo.png" alt="">
        <p v-show="!settingStore.isFold">小熊兔管理系统</p>
    </div>
</template>

<script lang='ts' setup>
import useSettingStore from '@/store/modules/setting'
let settingStore = useSettingStore()
</script>
<style scoped lang='scss'>
.login_container {
    width: $base-menu-width;
    height: $base-tabbar-height;
    display: flex;
    padding: 0 20px 0 10px;
    box-sizing: border-box;
    align-items: center;
    img {
        height: $base-meun-logo-img-height;
    }
    p{
        margin: 10px 0 0 15px;
        font-size: $base-menu-logo-p-fontsize;
    }
}
</style>