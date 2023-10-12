<template>
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script lang='ts' setup>

</script>
<style scoped lang='scss'>
.fade-enter-from {
  opacity: 0;
  scale: 0;
  // transform: rotate(0deg);
}
.fade-enter-active {
  transition: all 1s;
}
.fade-enter-to {
  opacity: 1;
  scale: 100%;
  // transform: rotate(360deg);
}
</style>