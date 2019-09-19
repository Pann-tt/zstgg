<template>
	<div>
		<!-- 文字组件二 -->
		<my-SecondText :title='titleone'/>
		<div class="newscontent">
			<div class="container">
				<!-- 左边新闻组件 -->
				<div class="nnew">
					<div class="news">
					<my-secondNews />
					</div>
					<div class="news">
						<my-secondNews />
					</div>
					<div class="news">
						<my-secondNews />
					</div>
						<!-- 引入分页组件 -->
					<div class="paging">
						<my-pag />
					</div>
				</div>
				
				<!-- 右边侧栏目 -->
				<div class="sideright">
					<div class="relaside">
						<h4>相关栏目</h4>
						<div><p>公司新闻</p><i class="iconfont">&#xe656;</i><br/></div>
						<div><p>行业新闻</p><i class="iconfont">&#xe656;</i><br/></div>
						<div><p>最新动态</p><i class="iconfont">&#xe656;</i></div>
					</div>
					<div class="hotnews">
						<div class="headline">
							<span class="one" @click='mostNew' ref='one'>最新新闻</span>
							<span class="two" @click='mostHot' ref='two'>热门新闻</span>
						</div>
						<div class="xinnews" v-if='shownews'>
							<div class="dynamic">
								<div class="title">
									创客云-建站资源共享学习平台
								</div>
								<span class="time">2016-03-07/</span><span class="author">admin</span>
							</div>
							<div class="dynamic">
								<div class="title">
									创客云-建站资源共享学习平台
								</div>
								<span class="time">2016-03-07/</span><span class="author">admin</span>
							</div>
							<div class="dynamic">
								<div class="title">
									创客云-建站资源共享学习平台
								</div>
								<span class="time">2016-03-07/</span><span class="author">admin</span>
							</div>
						</div>
						<div class="renews" v-else>
							<div class="dynamic">
								<div class="title">
									创客云-建站资源共享学习平台
								</div>
								<span class="time">2016-03-07/</span><span class="author">admin</span>
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
								<li>
									<img src="../../assets/images/product1.jpg">
									<div class="mask"></div>
								</li>
								<li>
									<img src="../../assets/images/product1.jpg">
									<div class="mask"></div>
								</li>
								<li>
									<img src="../../assets/images/product1.jpg">
									<div class="mask"></div>
								</li>
								<li>
									<img src="../../assets/images/product1.jpg">
									<div class="mask"></div>
								</li>
								<li>
									<img src="../../assets/images/product1.jpg">
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
    	titleone:'新闻中心',
    	shownews:true,
    	newsCategory:[
	    	{id:1,cate:"公司新闻"},
	    	{id:2,cate:"行业新闻"},
	    	{id:3,cate:"最新动态"}
    	]
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
  	}
  }
};
</script>

<style lang="css" scoped>
	.newscontent{
		padding-top: 70px;
		padding-bottom: 50px;
		background-color: rgb(245,249,250);
	}
	.newscontent .nnew{
		float: left;
		width:740px;
	}
	.newscontent .news{
		display: inline-block;
		margin:25px 0;
	}
	.newscontent .container{
		position: relative;
		height: auto;
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
		height: 300px;
	}
	.newscontent .sideright .hotnews .headline{
		font-size: 18px;
		margin:20px 0;
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
</style>
