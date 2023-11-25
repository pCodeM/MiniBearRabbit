import request from '@/utils/request.ts'
enum API {
    C1_URL = '/admin/product/getCategory1',
    C2_URL = '/admin/product/getCategory2/',
    C3_URL = '/admin/product/getCategory3/'
}
//获取一级分类数据
export const reqC1 = ()=>{
    return request.get<any,any>(API.C1_URL)
}
//获取二级分类数据
export const reqC2 = (c1id) => {
  return request.get(API.C2_URL + c1id);
};
//获取三级分类数据
export const reqC3 = (c2id)=>{
    return request.get(API.C3_URL+c2id)
}