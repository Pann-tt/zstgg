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
				<li v-for="homeitem in displayImg" :key="homeitem.id">
					<my-secodAnimation :homeitem='homeitem'/></my-secodAnimation>
				</li>
			</ul>
		</div>
		<!--蓝色条条 -->
		<div class="blueLine">
			<div class="container">
				<p>www.baidu.com</p>
				<h1>智慧城市运营商</h1>
				<p>公司将充分利用珠三角众多湘籍深圳高科技企业人士的技术、产品、资金等各方资源，致力于以长、株、潭为核心的湖南智慧城市建设。</p>
			</div>
		</div>
		<!-- 文字组件一 -->
		<div class="homeText">
			<my-FirstText :title="title" :des="des"></my-FirstText>
		</div>
		<div class="honeNews">
			<my-FirstNew></my-FirstNew>
		</div>
	</div>
</template>

<script>
export default {
  name: 'Home',

  data() {
    return {
    	displayImg:[
    		{id:1,imgSrc:require('../../assets/images/secondAni1.jpg'),text:"UI不是对立而是共生"},
	        {id:2,imgSrc:require('../../assets/images/secondAni2.jpeg'),text:"好想立刻跳进海里，全世界最大的游泳池"},
	        {id:3,imgSrc:require('../../assets/images/secondAni3.jpg'),text:"从摄影的角度看世界"},
	        {id:4,imgSrc:require('../../assets/images/secondAni4.jpg'),text:"那些色彩纷呈的导向页"},
    	],
    	title:"新闻中心",
    	des:"Latest News"
    };
  },
};
</script>

<style lang="css" scoped>
/*动画组件一*/
.homeFirAni{
	padding: 80px 0;
}
/*产品展示栏*/
.blackLine{
	width: 100%;
	height: 40px;
	background-color: #1b1c1f;
	padding:80px 0;
	text-align: center;
}
.blackLine>h1{
	font-size: 32px;
	font-weight: 400;
	color: #fff;
}
/*动画组件二*/
.homeTwoAni{
	width: 100%;
	height: 260px;
}
.homeTwoAni>ul{
	width: 100%;
	height: 100%;
	background-color: pink;
}
.homeTwoAni>ul li{
	height: 100%;
	float: left;
}
/*蓝色栏*/
.blueLine{
	width: 100%;
	height:180px;
	padding: 100px 0;
	background-color: #1dcfd1;
	color: #fff;
	text-align: center;
}
.blueLine>.container>h1{
	font-size: 54px;
	font-weight: 400;
	margin: 30px 0;
}
.blueLine>.container>p{
	font-size: 15px;
	font-weight: 400;
}
/*文字组件*/
.homeText{
	margin-top: 80px;
}
/*新闻组件*/
.honeNews{
	margin-bottom: 80px;
}
</style>
