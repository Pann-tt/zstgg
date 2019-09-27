<template>
	<div class="footouter">
		<div class="container" id="oneDiv">
			<!-- 左一部分 -->
			<div class="leftone">
				<h5>关于我们</h5>
				<p>	智慧城市运营商
					公司将充分利用珠三角众多湘籍深圳高科技企业人士的技术、产品、资金等各方资源，致力于以长、株、潭为核心的湖南智慧城市建设。</p>
				<div class="icons">
					<i class="iconfont">&#xe613;</i>
					<i class="iconfont">&#xe650;</i>
					<i class="iconfont">&#xe603;</i>
					<i class="iconfont">&#xe667;</i>
					<i class="iconfont">&#xe6e5;</i>				
				</div>
			</div>
			<!-- 左二部分 -->
			<div class="lefttwo">
				<div class="up">
					<h5>上班时间</h5>
					<p class="sp">每周一至周五</p>
					<p>早上8:30 ——下午18:00</p>
				</div>
				<div class="down">
					<p class="sp">联系我们</p>
					<p>电话: 028-88888888</p>
					<p>邮箱: 88888889@qq.com</p>
					<p>地址: 南山区科技园腾讯大厦A309</p>
				</div>
			</div>
			<!-- 右二部分 -->
			<div class="righttwo">
				<h5>企业动态</h5>
				<div class="dynamic"  v-for='(New,index) in newNews' :key="index">
					<div class="title" v-html='New.title' @click='enterNewsDetail(New.id)'>			
					</div>
					<span class="time">{{moment(New.date).format('YYYY-MM-DD')}}/</span><span class="author">{{New.user}}</span>
				</div>
			</div>
			<!-- 右一部分 动画组件四 -->
			<div class="rightone">
				<my-FourthAnimation />
			</div>
		</div>
		<!-- 底部 -->
		<div class="bottom">
			<div>Copyright © 智尚科技 版权所有</div>
		</div>
	</div>
</template>

<script>
export default {

  name: 'Footer',
  data() {
    return {
    	newNews:{},
    };
  },
  methods:{
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
  	enterNewsDetail(id){
  		this.$router.push({
        name:"NewsDetail",
        params:{
        	newsId:id
        }
       });
  	}
  },
  created(){
  	this.getAllNews();
  },
};
</script>