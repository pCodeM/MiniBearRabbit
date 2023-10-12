//小仓库，用户相关的数据
import { defineStore } from "pinia";
import { reqLogin, reqUserInfo, logOut }  from "@/api/user/index.ts";
import { constantRoutes } from '@/router/routes'
import router from '@/router';
import { LoginResponseData, LogOutResponse } from "@/api/user/type";
let useUserStore = defineStore('User',{
    state: ()=>{
        return { 
            Token: localStorage.getItem('Token'),
            menuRoutes: constantRoutes,
            userId: 0,
            avatar: '',
            username: '',
            password: '',
            desc: '',
            roles: [],
            buttons: '',
            routes: [],
            token: '',
        }
    },
    actions: {
        async UserLogin(loginForm){//用户登录
            const res: any= await reqLogin(loginForm)
            if(res.code == 200){
                this.Token = res.data
                localStorage.setItem('Token',res.data)
                return 'ok'
            }else if(res.code == 201){
                return Promise.reject(new Error(res.data))
            }
        },
        async getUserInfo(){//进入主页获取用户信息，存于Store中
            let res: any =  await reqUserInfo()
            if(res.code == 200){
                this.avatar = res.data.avatar
                this.username = res.data.name
                this.roles = res.data.roles
                this.routes = res.data.routes
            }else{
                ElNotification({
                    type: 'warning',
                    title: '提示',
                    message: '获取用户信息失败!'
                })
                return 
            }
        },
        async userCheckOut(LogOutParams){//退出登录
            //1 发请求是token失效
            LogOutParams = this.Token
            const res: LogOutResponse = await logOut(LogOutParams)
            if(res.code == 200){
                //2 清空数据
                this.avatar = ''
                this.username = ''
                this.token = ''
                localStorage.setItem('Token','')
                //3 跳转到登录页面
                router.push('/login')
                ElMessage({
                    type: 'success',
                    message: '退出成功!',
                })
            }else{
                ElMessage({
                    type: 'failure',
                    message: '退出!',
                })

            }
        }
    },
    getters: {

    }
})
export default useUserStore