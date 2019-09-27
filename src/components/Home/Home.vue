<template>
	<div class="homePage">
		<!-- 轮播图 -->
		<div>
			<my-cyclePic></my-cyclePic>
		</div>
		<!-- 动画组件一 -->		
		<div class="container homeFirAni">
			<my-FirstAnimation></my-FirstAnimation>
		</div>
		<!-- 中间产品名展示 -->
		<div class="blackLine">
			<h1>产品展示</h1>
		</div>
		<!-- 动画组件二 -->
		<div class="homeTwoAni">
			<ul>
				<li v-for="homeitem in allproductList" :key="homeitem.id">
					<my-secodAnimation :homeitem='homeitem'/></my-secodAnimation>
				</li>
			</ul>
		</div>
		<!--蓝色条条 -->
		<div class="blueLine">
			<div class="container">
				<p>www.zhishangpark.com</p>
				<h1>智慧城市运营商</h1>
				<p>公司将充分利用珠三角众多湘籍深圳高科技企业人士的技术、产品、资金等各方资源，致力于以长、株、潭为核心的湖南智慧城市建设。</p>
			</div>
		</div>
		<!-- 文字组件一 -->
		<div class="homeText">
			<my-FirstText :title="title" :des="des"></my-FirstText>
		</div>
		<div class="honeNews">
			<ul>
				<li v-for='(newsItem,index) in newNews' :key="index" >
					<my-FirstNew :newsItem='newsItem'></my-FirstNew>
				</li>
			</ul>
			
		</div>
	</div>
</template>

<script>
export default {
  name: 'Home',

  	data() {
	    return {
	    	allproductList:[],
	    	title:"新闻中心",
	    	des:"Latest News",
	    	newNews:{},
	    };
  	},
  	methods:{
  		getallproductList(){
	      	this.$http.allproductList()
	      	.then(res=>{
	        	this.allproductList=res.results;
	      	}).catch(err=>{
	        	console.log(err);
	      	})
	    },
	    getAllNews(){
	  		this.$http.AllNews()
	  		.then(res=>{
	  			this.newNews=res.results;
	  			this.newNews.length = 3;
	  		})
	  		.catch(err=>{
	  			console.log(err);
	  		})
  		},
  	},
  	created(){
    	this.getallproductList();
    	this.getAllNews();
  	},
};
</script>

<style lang="css" scoped>
</style>
