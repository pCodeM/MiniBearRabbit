<template>
    <el-card>
        <el-form inline>
            <el-form-item label="一级分类">
                <el-select v-model="AttrStore.c1id" @change="changeC1">
                    <el-option v-for="item1 in AttrStore.C1Data" :label="item1.name" :value="item1.id"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="二级分类">
                <el-select v-model="AttrStore.c2id" @change="changeC2">
                    <el-option v-for="item2 in  AttrStore.C2Data" :label="item2.name" :value="item2.id"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="三级分类">
                <el-select v-model="AttrStore.c3id">
                    <el-option v-for="item3 in  AttrStore.C3Data" :label="item3.name" :value="item3.id"></el-option>
                </el-select>
            </el-form-item>
        </el-form>
    </el-card>
</template>
<script lang='ts' setup>
import UseAttrStore from '@/store/modules/attr'
import { onMounted } from 'vue'
const AttrStore = UseAttrStore()
onMounted(() => {
    getC1()
})
// 获取一级分类数据
const getC1 = async () => {
    await AttrStore.getC1Data()
}
const changeC1 = () => {
    getC2(AttrStore.c1id)
}
// 获取二级分类数据
const getC2 = async (id) => {
    await AttrStore.getC2Data(id)
}
const changeC2 = () => {
    getC3(AttrStore.c2id)
}
// 获取三级分类数据
const getC3 = async (id) => {
    await AttrStore.getC3Data(id)
}
</script>
<style scoped lang='scss'></style>