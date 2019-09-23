//1.引入
import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex);

//2.创建实例
const store = new Vuex.Store({
	//三大将
	state:{
		//创建一个对象用于存储信息
		page:1,
		pageId:1,
	},
	//修改状态的唯一方法是提交mutations
	mutations:{
		ispage(state,val){
			state.page=val;
		},
		isPage(state,val){
		   state.pageId=val;
		},
	},
	actions:{
		
	}
});

//抛出
export default store;