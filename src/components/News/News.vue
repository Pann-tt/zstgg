<template>
	<div>
		<!-- 文字组件二 -->
		<my-SecondText :title='titleone'/>
		<div class="newscontent">
			<div class="container">
				<!-- 左边新闻组件 -->
				<div class="nnew">
						<ul>
							<li class="news" v-for="subItem in news">
								<my-secondNews :subItem='subItem'/>
							</li>
						</ul>
						<!-- 引入分页组件 -->
					<div class="paging">
						<my-Page :pages='pages'/><!-- @next-page='NextPage' @prev-page='PrevPage' @current-change='CurrentChange' -->
					</div>
				</div>
				<!-- 右边侧栏目 -->
				<div class="sideright">
					<div class="relaside">
						<h4>相关栏目</h4>
						<div @click='CompanyNews'><p>公司新闻</p><i class="iconfont">&#xe656;</i><br/></div>
						<div  @click='IndustryNews'><p>行业新闻</p><i class="iconfont">&#xe656;</i><br/></div>
						<div @click='BackNews'><p>最新动态</p><i class="iconfont">&#xe656;</i></div>
					</div>
					<div class="hotnews">
						<div class="headline">
							<span class="one" @click='mostNew' ref='one'>最新新闻</span>
							<span class="two" @click='mostHot' ref='two'>热门新闻</span>
						</div>
						<div class="xinnews" v-if='shownews'>
							<div class="dynamic" v-for='(New,index) in newNews' :key="index">
								<div class="title" v-html='New.title' @click='enterNewsDetail(New.id)'>
									
								</div>
								<span class="time">{{moment(New.date).format('YYYY-MM-DD')}}/</span><span class="author">{{New.user}}</span>
							</div>					
						</div>
						<div class="renews" v-else>
							<div class="dynamic" v-for='Recommend in recommend'>
								<div class="title" v-html='Recommend.title' @click='enterNewsDetail(Recommend.id)'>
									
								</div>
								<span class="time">{{moment(Recommend.date).format('YYYY-MM-DD')}}/</span><span class="author">{{Recommend.user}}</span>
							</div>
						</div>
					</div>
					<!-- 产品展示 -->
					<div class="fourAni">
						<div class="title">
							最新产品
						</div>
						<div class="productimg">
							<ul>
								<li v-for="item in allproductList" :key="item.id" @click="getdetail(item.id)">
									<img :src="item.img">
									<div class="mask"></div>
								</li>
							</ul>
						</div>
					</div>
				</div>
				
			</div>
		</div>
	</div>
</template>

<script>
export default {

  name: 'News',

  data() {
    return {
    	allproductList:[],
    	titleone:'新闻中心',
    	shownews:true,
    	newsCategory:[
	    	{id:1,cate:"公司新闻"},
	    	{id:2,cate:"行业新闻"},
	    	{id:3,cate:"最新动态"}
    	],
    	categoryId:'',
    	// pageId:1,
    	news:{},
    	pages:{},
    	recommend:{},
    	newNews:{},
    	newsId:1,
    };
  },
  methods:{
  	mostNew(){
  		this.shownews=true;
  		this.$refs.one.style.backgroundColor = "rgb(236,240,241)";
  		this.$refs.two.style.backgroundColor = "#fff";
  	},
  	mostHot(){
  		this.shownews=false;
  		this.$refs.two.style.backgroundColor = "rgb(236,240,241)";
  		this.$refs.one.style.backgroundColor = "#fff";
  	},
  	BackNews(){
  		this.titleone='最新动态';
  		this.categoryId='';
  		this.$store.state.pageId=1;
  		this.getNews(this.categoryId,this.$store.state.pageId);
  	},
  	CompanyNews(){
  		this.titleone='公司新闻'; 		
  		this.categoryId=1;
  		this.$store.state.pageId=1;
  		this.getNews(this.categoryId,this.$store.state.pageId);
  	},
  	IndustryNews(){
  		this.titleone='行业新闻';
  		this.categoryId=2;
  		this.$store.state.pageId=1;
  		this.getNews(this.categoryId,this.pageId);
  	},
  	enterNewsDetail(id){
  		this.$router.push({
        name:"NewsDetail",
        params:{
        	newsId:id
        }
       });

  	},
  	//获取全部新闻
  	getAllNews(){
  		this.$http.AllNews()
  		.then(res=>{
  			this.newNews=res.results;
  			this.newNews.length=3;
  		})
  		.catch(err=>{
  			console.log(err);
  		})
  	},
  	//获取详情
  	getNewsDetail(){
  		this.$http.NewsDetail(1)
  		.then(res=>{	
  			this.recommend=res.recommend_list; 		
  		})
  		.catch(err=>{
  			console.log(err);
  		})
  	},
  	// 获取分类新闻信息
  	getNews(){
  		this.$http.News(this.categoryId,this.$store.state.pageId)
      .then(res=>{
        this.pages=res;
        this.news=res.results; 
      }).catch(err=>{
        console.log(err);
      })
  	},
  	getallproductList(){
	      	this.$http.allproductList()
	      	.then(res=>{
	        	this.allproductList=res.results;
	      	}).catch(err=>{
	        	console.log(err);
	      	})
	    },
  	getdetail(id){
		console.log(id);
	  	this.$router.push({
		    name:'DisplayDetail',
		    params:{
	          	newsId:id,
	        }
       	})
  	},
  },
  created(){
    this.getNews();
    this.getAllNews();
    this.getNewsDetail();
    this.getallproductList();
  },
};
</script>