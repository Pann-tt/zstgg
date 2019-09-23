//导入axios
import Axios from 'axios'
//挂载使用Axios插件
// Vue.prototype.$http=Axios;
//设置公共的URL

Axios.defaults.baseURL='http://yz320.cn:8000/api/'

//分类列表api
//获取轮播图
export const cyclePicture=()=>{
    return Axios.get('carousel/').then(res=>res.data);
}
//全部案例
export const allproductList=()=>{
    return Axios.get(`product/`).then(res=>res.data);
}
//获取案列
export const productList=(page)=>{
    return Axios.get(`product/?category=&page=${page}`).then(res=>res.data);
}
//获取案列详情
export const productDetail=(newsId)=>{
    return Axios.get(`product/${newsId}`).then(res=>res.data);
}


//分类列表api
// 全部新闻信息
export const AllNews=()=>{
    return Axios.get(`news/`).then(res=>res.data);
}
//分类新闻信息
export const News=(categoryId,pageId)=>{
    return Axios.get(`news/?category=${categoryId}&page=${pageId}`).then(res=>res.data);
}
//新闻详细信息
export const NewsDetail=(newsId)=>{
    // console.log('44444',casesId)
    return Axios.get(`news/${newsId}`).then(res=>res.data);
}
