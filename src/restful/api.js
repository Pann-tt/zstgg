//导入axios
import Axios from 'axios'
//挂载使用Axios插件
// Vue.prototype.$http=Axios;
//设置公共的URL
Axios.defaults.baseURL='http://yz320.cn:8000/'

//分类列表api
//获取轮播图
export const cyclePicture=()=>{
    return Axios.get('api/carousel/').then(res=>res.data);
}
//全部
export const allproductList=()=>{
    return Axios.get(`api/product/`).then(res=>res.data);
}
//获取案列
export const productList=(page)=>{
    return Axios.get(`api/product/?category=&page=${page}`).then(res=>res.data);
}
//获取案列详情
export const productDetail=(newsId)=>{
    return Axios.get(`api/product/${newsId}`).then(res=>res.data);
}