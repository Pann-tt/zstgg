// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Router from 'vue-router'

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}



//引入全局的css
import '../static/global/global.css'

// 导入axios
import * as api from './restful/api.js'
Vue.prototype.$http=api;

//element Ui导入
import ElementUI from 'element-ui';
//导入样式
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';
//调用插件
Vue.use(ElementUI);


// 引入icon图标
import './fonts.css'

// 引入瀑布流式布局
import Waterfall from 'vue-waterfall/lib/waterfall'
import WaterfallSlot from 'vue-waterfall/lib/waterfall-slot'

// 引入时间戳插件
import moment from 'moment'       
Vue.prototype.moment=moment; 

// 引入轮播图组件
import cyclePic from '@/components/Common/cyclePic.vue'
Vue.component('my-cyclePic',cyclePic);
//引入动画组件二secodAnimation
import secodAnimation from '@/components/Common/secodAnimation.vue'
Vue.component('my-secodAnimation',secodAnimation);
//引入动画组件三thirdAnimation
import thirdAnimation from '@/components/Common/thirdAnimation.vue'
Vue.component('my-thirdAnimation',thirdAnimation);
//新闻组件二 secondNews
import secondNews from '@/components/Common/secondNews.vue'
Vue.component('my-secondNews',secondNews);
//pag
import pag from '@/components/Common/pag.vue'
Vue.component('my-pag',pag);
import Page from '@/components/Common/Page.vue'
Vue.component('my-Page',Page);

//引入动画组件一
import FirstAnimation from '@/components/Common/FirstAnimation.vue' 
Vue.component('my-FirstAnimation',FirstAnimation);
// 引入动画组件四
import FourthAnimation from '@/components/Common/FourthAnimation.vue' 
Vue.component('my-FourthAnimation',FourthAnimation);

// 引入文本组件一
import FirstText from '@/components/Common/FirstText.vue' 
Vue.component('my-FirstText',FirstText);
// 引入文本组件二
import SecondText from '@/components/Common/SecondText.vue' 
Vue.component('my-SecondText',SecondText);

// 引入新闻组件一
import FirstNew from '@/components/Common/FirstNew.vue' 
Vue.component('my-FirstNew',FirstNew);
//引入新闻右边组件
import NewsRight from '@/components/Common/NewsRight.vue' 
Vue.component('my-NewsRight',NewsRight);

//引入脚部
import Footer from "@/components/Common/Footer.vue"
Vue.component('Footer',Footer);
//引入侧边栏
import slide from "./components/Common/slide.vue"
Vue.component('my-slide',slide);
//DisplayDetail
import DisplayDetail from "./components/Display/DisplayDetail.vue"
Vue.component('my-DisplayDetail',DisplayDetail);


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  	el: '#app',
  	router,
    store,
  	components:{ 
  		App,
  		Waterfall,
  		WaterfallSlot,
  	},
  	template: '<App/>'
})
