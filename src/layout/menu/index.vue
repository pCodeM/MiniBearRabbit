<template class='menu_items'>
    <template v-for="item in menuList" :key="item.path">
      <!-- 无子路由  -->
      <template v-if="!item.children && !item.meta.hidden">
        <el-menu-item :index="item.path" :key="item.path" @click="GoRoute">
          <el-icon>
            <component :is="item.meta.icon"></component>
          </el-icon>
          <template #title>
            <span>{{ item.meta.title }}</span>
          </template>
        </el-menu-item>
      </template>
      <template v-if="item.children && item.children.length == 1 && !item.meta.hidden">
        <el-menu-item :index="item.children[0].path" :key="item.children[0].path" @click="GoRoute">
          <el-icon>
            <component :is="item.meta.icon"></component>
          </el-icon>
          <template #title>
            <span>{{ item.children[0].meta.title }}</span>
          </template>
        </el-menu-item>
      </template>
      <el-sub-menu v-if="item.children && item.children.length > 1 && !item.meta.hidden" :index="item.path" :key="item.path">
        <template #title>
          <el-icon>
            <component :is="item.meta.icon"></component>
          </el-icon>
          <span>{{ item.meta.title }}</span>
        </template>
        <Menu1 :menuList="item.children"></Menu1>
      </el-sub-menu>
    </template>
</template>
<script lang='ts' setup name="Menu1">
import router from '@/router';
defineProps(['menuList'])
const GoRoute = (vc) => {
  let routeUrl = vc.index
  router.push(routeUrl)
}
</script>
<style scoped lang='scss'>
.menu_items {
  color: white;
}
</style>