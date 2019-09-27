<template>
	<div>
		<!-- 文字组件二 -->
		<my-SecondText :title='titleone'/>
		<div class="newscontent">
			<div class="container">
				<!-- 左边新闻详情 -->
				<div class="newdetail">
					<div class="heading" v-html='newsdetail.title'></div>
					<span class="time" >{{moment(newsdetail.date).format('YYYY-MM-DD')}}/</span><span class="author">{{newsdetail.user}}</span>&nbsp;&nbsp;<span class="iconfont">&#xe60b;&nbsp;{{newsdetail.clicks}}</span>
					<p v-html='newsdetail.content'></p>
				</div>
				<!-- 右边侧栏目 -->
				<div class="sideright">
					<div class="relaside">
						<h4>相关栏目</h4>
						<div @click='CompanyNews'><p>公司新闻</p><i class="iconfont">&#xe656;</i><br/></div>
						<div @click='IndustryNews'><p>行业新闻</p><i class="iconfont">&#xe656;</i><br/></div>
						<div @click='BackNews'><p>最新动态</p><i class="iconfont">&#xe656;</i></div>
					</div>
					<div class="hotnews">
						<div class="headline">
							<span class="one" @click='mostNew' ref='one'>最新新闻</span>
							<span class="two" @click='mostHot' ref='two'>热门新闻</span>
						</div>
						<div class="xinnews" v-if='shownews'>
							<div class="dynamic" v-for='(New,index) in newNews' :key="index">
								<div class="title" v-html='New.title'  @click='enterNewsDetail(New.id)'>
									
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

  name: 'NewsDetail',

  data() {
    return {
    	allproductList:[],
    	titleone:'公司新闻',
    	shownews:true,
    	newsCategory:[
	    	{id:1,cate:"公司新闻"},
	    	{id:2,cate:"行业新闻"},
	    	{id:3,cate:"最新动态"}
    	],
    	newsdetail:{},
    	newsId:1,
    	recommend:{},
    	newNews:{},
    	news:{},
    	pages:{},
    	categoryId:'',
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
  		this.$router.push({
        name:"News",
       });
  		this.titleone='最新动态';
  		this.categoryId='';
  		this.$store.state.pageId=1;
  		this.getNews(this.categoryId,this.$store.state.pageId);
  	},
  	CompanyNews(){
  		this.$router.push({
        name:"News",
       });
  		this.titleone='公司新闻'; 		
  		this.categoryId=1;
  		this.$store.state.pageId=1;
  		this.getNews(this.categoryId,this.$store.state.pageId);
  	},
  	IndustryNews(){
  		this.$router.push({
        name:"News",
       });
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
  			this.newNews.length = 3;
  		})
  		.catch(err=>{
  			console.log(err);
  		})
  	},
  	getNewsDetail(){
  		this.$http.NewsDetail(this.$route.params.newsId)
  		.then(res=>{	
  			this.newsdetail = res;
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
    this.getNewsDetail();
    this.getAllNews();
    this.getallproductList();
  },
  activated() {
    this.getNewsDetail();
  }
};
</script>
<style lang="css" scoped>
/*手机*/
@media screen and (max-width: 767px){
	.newscontent{
		padding-top: 70px;
		padding-bottom: 50px;
		background-color: rgb(245,249,250);
	}
	.newscontent .container{
		width:100%;
	}
	.newscontent .newdetail{
		padding: 35px;
	    width: 275px;
	    margin: 25px 15px;
		background-color: #fff;
	}
	.newscontent .newdetail .heading{
		font-size: 35px;
		font-weight: 500;
		margin-bottom: 10px;
	}
	.newscontent .newdetail span{
		color: #C1C1C1;
		font-size: 14px;
	}
	.newscontent .newdetail p{
		margin:30px 0;
		color: #969595;
		font-size: 16px;
		line-height: 35px;
	}
	.newscontent .container{
		height: auto;
	}
	.newscontent .container::after{
		content:'';
		clear: both;
		display: block;
	}
	.newscontent .sideright{
		margin: 25px 30px 70px 16px;
	    width: 344px;
	}
	.newscontent .sideright .relaside{
		background-color: #fff;
		padding:20px;
		height: 195px;
	}
	.newscontent .sideright .relaside h4{
		margin:10px 0;
		font-size: 18px;
		font-weight: 500;
	}
	.newscontent .sideright .relaside div{
		padding:14px 0;
		border-bottom: 1px solid #ececec;
		color:#B9B9B9 ;
	}
	.newscontent .sideright .relaside p{
		display: inline-block;
		cursor: pointer;
	}
	.newscontent .sideright .relaside p:hover{
		color:rgb(29,207,209);
	}
	.newscontent .sideright .relaside i{
		float: right;
	}
	.newscontent .sideright .hotnews{
		margin-top:40px;
		background-color: #fff;
		padding:20px;
		height: 315px;
	}
	.newscontent .sideright .hotnews .headline{
		font-size: 18px;
		margin: 20px 0 35px 0;
	}
	.newscontent .sideright .hotnews .headline span{
		cursor: pointer;
	}
	.newscontent .sideright .hotnews .headline span:hover{
		color: rgb(29,207,209);
	}
	.newscontent .sideright .hotnews .headline .one{
		padding:16px 36px;
		background-color:rgb(236,240,241);
		border-radius: 8px;
	}
	.newscontent .sideright .hotnews .headline .two{
		padding:16px 36px;
		border-radius: 8px;
	}
	.newscontent .sideright .hotnews .xinnews,.renews{
		margin-top: 15px;
	}
	.newscontent .sideright .hotnews .dynamic{
		margin-top: 10px;
		padding-bottom:20px;
		border-bottom:1px solid #BFBFBF;
		color: #BFBFBF;
	}
	.newscontent .sideright .hotnews .dynamic .title{
		overflow: hidden;
	    text-overflow: ellipsis;
	    display: -webkit-box;
	    -webkit-line-clamp:1;
	    -webkit-box-orient: vertical;
		margin-bottom:10px;
		cursor: pointer;
	}
	.newscontent .sideright .hotnews .dynamic .title:hover{
		color: rgb(29,207,209);
	}
	.newscontent .sideright .hotnews .dynamic span{
		font-size: 12px;
	}
	.newscontent .sideright .fourAni{
		width:304px;
		margin-top:40px;
		background-color: #fff;
		padding:20px;
		height: 205px;
	}
	.newscontent .sideright	.fourAni{
		display: inline-block;
	}
	.newscontent .sideright .fourAni .title{
		font-size: 18px;
		font-weight: 450;
		margin-bottom: 25px;
	}
	.newscontent .sideright .fourAni .productimg li{
		position: relative;
		display: inline-block;
		width:65px;
		height: 65px;
		cursor: pointer;
		margin-right: 4px;
	}
	.newscontent .sideright .fourAni .productimg li .mask{
		position: absolute;
		top:0;
		width:65px;
		height: 65px;
	}
	.newscontent .sideright .fourAni .productimg img{
		overflow: hidden;
		width:65px;
		height: 65px;
	}
	.newscontent .sideright .fourAni .productimg li:hover .mask{
		background-color: rgba(50,50,50,.5);
	}
}
/*其他*/
@media screen and (min-width: 768px){
	.newscontent{
		padding-top: 70px;
		padding-bottom: 50px;
		background-color: rgb(245,249,250);
	}
	.newscontent .newdetail{
		padding:40px;
		width:770px;
		margin:25px 0;
		background-color: #fff;
		float: left;
	}
	.newscontent .newdetail .heading{
		font-size: 40px;
		font-weight: 500;
		margin-bottom: 10px;
	}
	.newscontent .newdetail span{
		color: #C1C1C1;
		font-size: 14px;
	}
	.newscontent .newdetail p{
		margin:30px 0;
		color: #969595;
		font-size: 16px;
		line-height: 35px;
	}
	.newscontent .container{
		position: relative;
		height: auto;
		/*overflow:auto;*/
	}
	.newscontent .container::after{
		content:'';
		clear: both;
		display: block;
	}
	.newscontent .sideright{
		float: right;
		top:0;
		right: 0;
		margin-top:25px;
		margin-bottom: 70px;
		width:265px;
		height:900px;
	}
	.newscontent .sideright .relaside{
		background-color: #fff;
		padding:20px;
		height: 195px;
	}
	.newscontent .sideright .relaside h4{
		margin:10px 0;
		font-size: 18px;
		font-weight: 500;
	}
	.newscontent .sideright .relaside div{
		padding:14px 0;
		border-bottom: 1px solid #ececec;
		color:#B9B9B9 ;
	}
	.newscontent .sideright .relaside p{
		display: inline-block;
		cursor: pointer;
	}
	.newscontent .sideright .relaside p:hover{
		color:rgb(29,207,209);
	}
	.newscontent .sideright .relaside i{
		float: right;
	}
	.newscontent .sideright .hotnews{
		margin-top:40px;
		background-color: #fff;
		padding:20px;
		height: 315px;
	}
	.newscontent .sideright .hotnews .headline{
		font-size: 18px;
		margin: 20px 0 35px 0;
	}
	.newscontent .sideright .hotnews .headline span{
		cursor: pointer;
	}
	.newscontent .sideright .hotnews .headline span:hover{
		color: rgb(29,207,209);
	}
	.newscontent .sideright .hotnews .headline .one{
		padding:16px;
		background-color:rgb(236,240,241);
		border-radius: 8px;
	}
	.newscontent .sideright .hotnews .headline .two{
		padding:16px;
		border-radius: 8px;
	}
	.newscontent .sideright .hotnews .xinnews,.renews{
		margin-top: 15px;
	}
	.newscontent .sideright .hotnews .dynamic{
		margin-top: 10px;
		padding-bottom:20px;
		border-bottom:1px solid #BFBFBF;
		color: #BFBFBF;
	}
	.newscontent .sideright .hotnews .dynamic .title{
		overflow: hidden;
	    text-overflow: ellipsis;
	    display: -webkit-box;
	    -webkit-line-clamp:1;
	    -webkit-box-orient: vertical;
		margin-bottom:10px;
		cursor: pointer;
	}
	.newscontent .sideright .hotnews .dynamic .title:hover{
		color: rgb(29,207,209);
	}
	.newscontent .sideright .hotnews .dynamic span{
		font-size: 12px;
	}
	.newscontent .sideright .fourAni{
		margin-top:40px;
		background-color: #fff;
		padding:20px;
		height: 205px;
	}
	.newscontent .sideright	.fourAni{
		display: inline-block;
	}
	.newscontent .sideright .fourAni .title{
		font-size: 18px;
		font-weight: 450;
		margin-bottom: 25px;
	}
	.newscontent .sideright .fourAni .productimg li{
		position: relative;
		display: inline-block;
		width:65px;
		height: 65px;
		cursor: pointer;
		margin-right: 4px;
	}
	.newscontent .sideright .fourAni .productimg li .mask{
		position: absolute;
		top:0;
		width:65px;
		height: 65px;
	}
	.newscontent .sideright .fourAni .productimg img{
		overflow: hidden;
		width:65px;
		height: 65px;
	}
	.newscontent .sideright .fourAni .productimg li:hover .mask{
		background-color: rgba(50,50,50,.5);
	}
}
</style>