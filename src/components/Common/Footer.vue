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
			<!-- 右一部分 动画组件四 -->
			<div class="rightone">
				<my-FourthAnimation />
			</div>
		</div>
		<!-- 底部 -->
		<div class="bottom">
			<div>Copyright © 创客云 版权所有</div>
		</div>
	</div>
</template>

<script>
export default {

  name: 'Footer',

  data() {
    return {

    };
  },
  methods:{
  	
  },
};
</script>

<style lang="css" scoped>
	#oneDiv .leftone,#oneDiv .lefttwo{
		width: 255px;
	}
	.footouter{
		background-color: rgb(27,28,31);
		height: 580px;
		color: rgb(152,162,164);
		font-size: 16px;
		position: relative;
	}
	.footouter .leftone,.footouter .lefttwo,.footouter .righttwo,.footouter .rightone{
		display: inline-block;
		width:270px;
		float: left;
		padding: 100px 0;
		margin:0 6px;
	}
	.footouter h5{
		color: #fff;
		font-size: 18px;
		font-weight: 450;
	}
	.footouter .sp{
		color: #fff;
	}
	.footouter .leftone p{
		margin:25px 0;
		line-height: 28px;
		text-indent: 3px;
	}
	.footouter .leftone i{
		cursor: pointer;
		margin:0 12px;
	}
	.footouter .leftone i:hover{
		color: #fff;
	}
	.footouter .lefttwo .up h5{
		margin-bottom:25px;
	}
	.footouter .lefttwo .up p{
		margin-bottom: 15px;
	}
	.footouter .lefttwo .down .sp{
		margin-top:45px;
	}
	.footouter .lefttwo .down p{
		margin:20px 0;
	}
	.footouter .righttwo h5{
		margin-bottom:25px;
	}
	.footouter .righttwo .title{
		margin-bottom:15px;
		cursor: pointer;
	}
	.footouter .righttwo .title:hover{
		color: rgb(29,207,209);
	}
	.footouter .righttwo span{
		font-size: 12px;
		color:rgb(69,70,75);
	}
	.footouter .righttwo .dynamic{
		margin-top: 10px;
		padding-bottom:20px;
		border-bottom:1px solid rgb(69,70,75);
	}
	.footouter .bottom{
		position: absolute;
		bottom:0;
		background-color: rgb(22,23,26);
		height: 100px;
		width:100%;
	}
	.footouter .bottom div{
		text-align: center;
		line-height: 100px;
	}
</style>
