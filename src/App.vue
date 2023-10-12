<script setup lang="ts">
  import { ElMessage } from 'element-plus/es/components/index.mjs'
  import { onMounted } from 'vue'
  onMounted(() => {
    ElMessage({
      type: 'success',
      message: 'Congrats, this is a success message.',
    }) 
  })
</script>

<template>
  <RouterView></RouterView>
</template>

<style scoped lang="scss">
</style>
