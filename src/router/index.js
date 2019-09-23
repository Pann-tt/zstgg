import Vue from 'vue'
import Router from 'vue-router'

//引入路由模块
import Home from '@/components/Home/Home.vue'
import Display from '@/components/Display/Display.vue'
import DisplayDetail from '@/components/Display/DisplayDetail.vue'
import News from '@/components/News/News.vue'
import NewsDetail from '@/components/News/NewsDetail.vue'
import About from '@/components/About/About.vue'

Vue.use(Router)

export default new Router({
	//路由匹配规则
	linkActiveClass:'is-active',
	mode:'history',//改成history模式
  	routes: [
  		{
  			path:'/',
  			redirect:'/home'
  		},
    	{
     	 	path: '/home',
      		name: 'Home',
      		component: Home
    	},
    	{
     	 	path: '/display',
      		name: 'Display',
      		component: Display
    	},
      {
        path: '/display/displaydetail',
          name: 'DisplayDetail',
          component: DisplayDetail
      },
    	{
     	 	path: '/news',
      		name: 'News',
      		component: News
    	},
      {
        path: '/news/newsdetail:newsId',
          name: 'NewsDetail',
          component: NewsDetail,
         
      },
    	{
     	 	path: '/about',
      		name: 'About',
      		component: About
    	}
  	],
    scrollBehavior (to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    return { x: 0, y: 0 }
  }

})