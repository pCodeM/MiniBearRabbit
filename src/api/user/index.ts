//用户相关接口
import request from '@/utils/request'
import { LoginForm, LoginResponseData, UserInfoResponse, LogOutParams, LogOutResponse } from '@/api/user/type'
//统一管理接口
enum API {
    LOGIN_URL = "/admin/acl/index/login",
    LOGININFO_URL = "/admin/acl/index/info",
    LOGINOUT_URL = "/admin/acl/index/logout"
}

//登录
export const reqLogin = (data: LoginForm) => {
    return request.post<any, LoginResponseData>(API.LOGIN_URL, data)
}
//获取用户信息
export const reqUserInfo = () => {
    return request.get<any, UserInfoResponse>(API.LOGININFO_URL)
}
//退出登录
export const logOut = (data: LogOutParams)=>{
    return request.post<any, LogOutResponse>(API.LOGINOUT_URL,data)
}