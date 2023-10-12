// 公用返回值
export interface base {
    code: number,
    message: string,
    ok: boolean,
}
// --Login Start-- 
//定义login相关的数据类型(post) 
export interface LoginForm {//login请求
    username: string,
    password: string
}
export interface LoginResponseData {//login返回
    code: number,
    message: string,
    ok: boolean,
    data: string
}
// -- Login End --

// -- UserInfo Start -- 定义userInfo的数据类型（get）
export interface UserInfoResponse {//userInfo返回
    code: number,
    message: string,
    ok: boolean,
    data: UserInfo
}
export interface UserInfo {//UserInfo
    avatar: string,
    buttons: string[],
    name: string,
    roles: string[],
    routes: string[],
}
// -- UserInfo End --
//-- LogOut Start --
export interface LogOutParams{
    token: string 
}
export interface LogOutResponse{
    code: number,
    message: string,
    ok: boolean,
    data: any
}

//-- LogOut End --


