<template>
    <div class='login_page'>
        <el-row>
            <el-col :span="12" :xs="0"></el-col>
            <el-col :span="12" :xs="24">
                <el-form class="login_form" :model="loginForm" :rules="rules" ref="loginDatas">
                    <h1> Welcom To My System </h1>
                    <h2> 笨笨小兔熊 </h2>
                    <el-form-item prop="username">
                        <el-input v-model="loginForm.username" prefix-icon="User"></el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input v-model="loginForm.password" prefix-icon="Lock" type="password" show-password></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button class="login_btn" type="primary" loading-icon="Loading" :loading="isLoad"
                            @keyup.enter="BtnLoginEnter" @click="BtnLogin">登录</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
    </div>
</template>
<script lang='ts' setup>
import { reactive, ref } from 'vue';
import router from "@/router";
import useUserStore from "@/store/modules/user.ts";
import { ElNotification } from "element-plus/es/components/index.mjs";
import { onMounted } from 'vue';

let loginDatas = ref()
let userStore = useUserStore()
let loginForm: any = reactive({ username: 'admin', password: 'atguigu123' })
let isLoad = ref(false)
onMounted(() => {
    
})
const BtnLogin = async () => {
    await loginDatas.value.validate()
    isLoad.value = true
    try {
        await userStore.UserLogin(loginForm)
        router.push('/home')
        ElNotification({
            type: 'success',
            message: '登陆成功！'
        })
    } catch (error) {
        isLoad.value = false
        ElNotification({
            type: 'error',
            message: (error as Error).message
        })
    }
}
const BtnLoginEnter = () => {
    console.log(123);
    BtnLogin()
}
const rules = {
    username: [
        { required: true, message: 'Please input Activity name', trigger: 'blur' },
        { min: 5, max: 15, message: '长度需为5-15', trigger: 'change' },
    ],
    password: [
        { required: true, min: 5, max: 15, message: '密码长度需为5-15', trigger: 'blur' }
    ]
}


</script>
<style scoped lang='less'>
.login_page {
    width: 100%;
    height: 100vh;
    background: url(@/assets/images/background.jpg) no-repeat;
    background-size: cover;

    .login_form {
        position: relative;
        top: 30vh;
        left: 10%;
        width: 75%;
        background: url('@/assets/images/login_form.png') no-repeat;
        background-size: cover;
        padding: 40px;

        h1 {
            font-size: 40px;
            color: rgb(234, 244, 145);
        }

        h2 {
            font-size: 30px;
            margin: 20px 10px;
            color: rgb(234, 244, 145);
        }

        .login_btn {
            width: 100%;
        }
    }
}
</style>