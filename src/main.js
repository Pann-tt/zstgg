// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//element Ui导入
import ElementUI from 'element-ui';
//导入样式
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';
//调用插件
Vue.use(ElementUI);

//引入全局的css
import '../static/global/global.css'

// 引入icon图标
import './fonts.css'

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


//引入脚部
import Footer from '@/components/Common/Footer.vue' 
Vue.component('Footer',Footer);





Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
