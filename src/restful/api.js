//导入axios
import Axios from 'axios'
//挂载使用Axios插件
// Vue.prototype.$http=Axios;
//设置公共的URL
Axios.defaults.baseURL='http://yz320.cn:8000/api/'

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
