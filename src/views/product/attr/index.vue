<template>
  <div class='attr'>
    <Category></Category>
    <el-card style="margin: 20px 0;">
      <el-button type="primary" width="100px" icon="Plus">添加属性</el-button>
      <el-table stripe border style="margin: 10px 0;">
        <el-table-column label="序号" width="100px" type="index" align="center"></el-table-column>
        <el-table-column label="属性名" width="200px" align="center"></el-table-column>
        <el-table-column label="属性值" align="center"></el-table-column>
        <el-table-column label="操作" width="200px" align="center"></el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script lang='ts' setup>
import Category from '@/components/category/index.vue'

</script>
<style scoped lang='scss'></style>