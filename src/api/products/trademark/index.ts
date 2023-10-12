import request from '@/utils/request'
enum API {
    GETPRODUCT_URL = "/admin/product/baseTrademark/",
    ADDPRODUCT_URL = '/admin/product/baseTrademark/save',
    UPDATEPRODUCT_URL = '/admin/product/baseTrademark/update',
    DELPRODECT_URL = '/admin/product/baseTrademark/remove/'
}
export const getProduct = (data)=>{//获取商标数据
    return request.get(API.GETPRODUCT_URL + `${data.page}/${data.limit}`)
}
export const delProduct = (id)=>{//删除商标数据
    return request.delete(API.DELPRODECT_URL + id)
}
export const addProduct = (data)=>{//添加/修改商标
    if(!data.id){
        return request.post(API.ADDPRODUCT_URL,data)
    }else{
        return request.post(API.UPDATEPRODUCT_URL,data)
    }
}
