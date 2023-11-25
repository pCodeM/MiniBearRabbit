<template>
  <div class="tradmark_top">
    <el-autocomplete class="search" popper-class="my-autocomplete" placeholder="请输入关键字" @select="">
      <template #suffix>
        <el-icon class="el-input__icon" @click="">
          <search />
        </el-icon>
      </template>
      <template #default="{ }">
        <div class="value">1</div>
        <span class="link">2</span>
      </template>
    </el-autocomplete>
    <el-button class="addBtn" type="primary" icon="Plus" @click="addRecord">添加</el-button>
  </div>
  <hr />
  <el-table :data="productsData" style="width: 100%; height: 70vh;margin-bottom: 20px;"
    row-class-name="tableRowClassName">
    <el-table-column type="index" label="序号" width="100px" align="center" />
    <el-table-column prop="tmName" label="品牌名称" align="center" />
    <el-table-column prop="logoUrl" label="品牌 Logo" align="center">
      <template #default="scope">
        <el-image style="width: 100px; height: 80px" lazy :src="scope.row.logoUrl" fit="fill" />
      </template>
    </el-table-column>
    <el-table-column prop="createTime" label="创建时间" align="center" />
    <el-table-column label="品牌操作" align="center">
      <template #default="scope">
        <el-button type="primary" plain @click="editRecord(scope.row)">编辑</el-button>
        <el-popconfirm 
          title="确定删除?" 
          @confirm="delRecord(scope.row.id)"
          >
          <template #reference>
            <el-button type="danger" plain >删除</el-button>
          </template>
        </el-popconfirm>
      </template>
    </el-table-column>
  </el-table>
  <el-pagination v-model:current-page="currentPage" v-model:page-size="pageSize" background :page-sizes="[5, 10, 20, 30]"
    layout="jumper ,prev, pager, next, ->,sizes ,total, " :total="total" @size-change="changeSize"
    @current-change="changePage" />
  <!-- 添加窗口 -->
  <el-dialog v-model="dialogFormVisible" title="商品添加">
    <el-form :model="productForm" :rules="rules" ref="formRef">
      <el-form-item prop="tmName" label="品牌名称" :label-width="formLabelWidth">
        <el-input v-model="productForm.tmName" autocomplete="off" />
      </el-form-item>
      <el-form-item label="品牌LOGO" prop="logoUrl">
        <el-upload class="avatar-uploader" :validate="isUploadRule" action="http://sph-api.atguigu.cn/admin/product/fileUpload" :headers="headers"
          :show-file-list="false" :before-upload="beforeAvatarUpload" :on-success="handleAvatarSuccess">
          <img v-if="productForm.logoUrl" :src="productForm.logoUrl" class="avatar" />
          <el-icon v-else class="avatar-uploader-icon">
            <Plus />
          </el-icon>
        </el-upload>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button type="primary" @click="ConfirmForm">
          提交
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang='ts' setup>
import { onMounted, ref, reactive, watch } from 'vue';
import { getProduct, delProduct, addProduct } from '@/api/products/trademark'
import useUserStore from '@/store/modules/user'
// import {useTardMarkStore} from '@/store/modules/trademark';
// const TardMarkStore = useTardMarkStore()
let currentPage = ref(1)
let pageSize = ref(5)
let productsData = ref([])
let total = ref(0)
let headers = {
  Token: useUserStore().Token
}
//对话框
let dialogFormVisible = ref(false)
let formLabelWidth = '80px'
let productForm = reactive({
  id: '',
  tmName: '',
  logoUrl: '',
})


//表单校验
const tmNameRule = (rule: any, value, callback) => {
  if (value.trim().length > 2){
    callback()
  }else{
    callback(new Error('标签名称不能少于 2 个字!'))
  }
}
const isUploadRule = (rule, value, callback) => {
    if(value){
      callback()
    }else{
      callback(new Error('请选择Logo!'))
    }
}
let rules = {
  tmName: [
    {required: true, trigger: 'blur', validator: tmNameRule }
  ],
  logoUrl: [
    {required: true, validator: isUploadRule}
  ]
}
let formRef = ref()
onMounted(() => {
  getList(currentPage.value, pageSize.value)
})
watch(dialogFormVisible, (val) => {
  if (!val) {
    changePage()
  }
})
const getList = async (currPage, currLimit) => {//刷新列表
  let res = await getProduct({
    page: currPage,
    limit: currLimit
  })
  total.value = res.data.total
  productsData.value = res.data.records
}
const addRecord = () => {//新增数据
  dialogFormVisible.value = true
  productForm.tmName = ''
  productForm.logoUrl = ''
  productForm.id = ''
  formRef.value?.clearValidate()//可选链操作符
}
const ConfirmForm = async () => {//提交
  await formRef.value.validate()
  const res: any = await addProduct(productForm)
  if (res.code == 200 && res.ok) {
    ElMessage({
      message: '提交成功!',
      type: 'success'
    })
  } else {
    ElMessage({
      message: '提交失败!',
      type: 'error'
    })
  }
  dialogFormVisible.value = false
}
const changePage = () => {//改变页码
  getList(currentPage.value, pageSize.value)
}
const changeSize = () => {//改变页面数据条数
  currentPage.value = 1
  getList(currentPage.value, pageSize.value)
}
const editRecord = (data) => {//修改当前记录
  dialogFormVisible.value = true
  productForm.tmName = data.tmName
  productForm.logoUrl = data.logoUrl
  productForm.id = data.id
  formRef.value?.clearValidate()//可选链操作符
}
const delRecord = async (id) => {//删除当前记录
  const res: any = await delProduct(id)
  if (res.ok&&res.code==200) {
    ElMessage.success('删除成功!')
    changeSize()
  }else{
    ElMessage.error(res.data)
  }
  dialogFormVisible.value = false
  return
}
//上传图片
const handleAvatarSuccess = (response) => {
  if (response.ok) {
    productForm.logoUrl = response.data
    formRef.value.clearValidate('logoUrl')
    ElMessage({
      message: '上传成功!',
      type: 'success'
    })
  }
}
const beforeAvatarUpload = (rawFile) => {
  if (rawFile.type !== 'image/jpeg' && rawFile.type !== 'image/png' && rawFile.type !== 'image/jpg' && rawFile.type !== 'image/gif') {
    ElMessage.error('图片格式只能是jpeg/png/jpg/gif/jfif')
    return false
  } else if (rawFile.size / 1024 / 1024 > 5) {
    ElMessage.error('图片大小最大不超过5MB!')
    return false
  }
  return true
}

/* const blurName = ()=>{
  console.log(123123);
} */
</script>
<style scoped lang='scss'>
.tradmark_top {
  height: 50px;
}

.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar {
  width: 180px;
  height: 180px;
  border-radius: 7px;
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>