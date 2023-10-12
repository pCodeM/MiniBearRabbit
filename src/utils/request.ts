import axios from "axios";
import { ElMessage } from 'element-plus/es/components/index.mjs';
import useUserStore from '@/store/modules/user'
import router from "@/router";
let request = axios.create({
    baseURL: import.meta.env.VITE_SERVE,
    timeout: 5000,
    /* headers: {
        'content-type': 'application/x-www-form-urlencoded'
    } */
})
request.interceptors.request.use((config) => {//请求拦截器
    let userStore = useUserStore()
    if(userStore.Token){
        config.headers.token = userStore.Token
    }
    return config
})
request.interceptors.response.use(//响应拦截器
    (response) => {//成功的回调
        return response.data
    },
    (error) => {
        let msg = ''
        const status = error.response.status
        switch (status) {
            case 401:
                msg = 'Token过期!'
                router.push('/login')
                break;
            case 403:
                msg = '无权访问!'
                break
            case 404:
                msg = '请求地址错误!'
                break
            case 500:
                msg = '服务器出现问题!'
                break
            default:
                msg = '网络出现问题!'
                break;
        }
        ElMessage({
            type: 'error',
            message: msg
        })
        return Promise.reject(error)
    }
)
export default request