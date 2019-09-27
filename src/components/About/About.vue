<template>
	<div>
		<!-- 文字组件二 -->
		<my-SecondText :title='titleone'/>
		<div class="produce">
			<!-- 左边图片 -->
			<div class="produceimg">
				<img src="../../assets/images/aboutus1.jpg">
			</div>
			<!-- 右边文字 -->
			<div class="producetext">
				<div class="title">
					湖南智尚科技发展有限公司
				</div>
				<p>
					湖南智尚科技发展有限公司,由多位湘籍深圳高科技企业人士应株洲市政府相关单位招商引资，与湖南本土有识人士于2013年10月共同投资成立。智尚科技以位于湖南省株洲市天元区泰山西路1986号的智尚科技大厦为智慧城市产业基地，为长、株、潭智慧城市建设而诞生。<br/>
					公司将充分利用珠三角众多湘籍深圳高科技企业人士的技术、产品、资金等各方资源，汇集数千项在智能化系统、旅游项目等领域的项目开发与实施经验，致力于以长、株、潭为核心的湖南智慧城市建设。
				</p>
				<div class="reach">
					<p><i class="iconfont">&#xe600;</i>&nbsp;智能化系统</p>
					<p><i class="iconfont">&#xe600;</i>&nbsp;站点集成</p>
					<p><i class="iconfont">&#xe600;</i>&nbsp;系统集成</p>
				</div>
			</div>
		</div>
		<div class="goal">
			<!-- 引入文字组件一 -->
			<my-FirstText :title='titletwo' :des='destwo'/>
			<!-- 左边文字 -->
			<div class="goaltext">
				在智尚科技的未来发展中，将以株洲的智慧社区等项目建设为起点，通过建设示范，逐步推进智慧旅游、智慧交通、智慧校园、智慧医疗等等项目的开发建设，逐步形成一套行之有效、持续运营的智慧城市运营体系，进而以株洲为智慧城市运营样板，以深圳为营销基地，向全国推广运营模式，成为国内领先的智慧城市运营商。
			</div>
			<!-- 右边图片 -->
			<!-- <div class="goalimg">
				<img src="../../assets/images/goal7.jpg">
			</div> -->
		</div>
		<div class="bottomtab">
			<div class="english">Smart City Operator</div>
			<div class="chinese">智慧城市运营商</div>
			<p>公司将充分利用珠三角众多湘籍深圳高科技企业人士的技术、产品、资金等各方资源，致力于以长、株、潭为核心的湖南智慧城市建设</p>
		</div>

	</div>
</template>

<script>
export default {

  name: 'About',

  data() {
    return {
    	titleone:'关于我们',
    	titletwo:'我们的目标',destwo:'Our Goal',
    };
  },
};
</script>

<style lang="css" scoped>
/*手机*/
@media screen and (max-width: 767px){
	.produce{
		font-size: 0px;
	}
	.produce .produceimg,.produce .producetext{
		display: inline-block;
	}
	.produce .produceimg{
		width: 375px;
    	height: 480px;
		overflow: hidden;
	}
	.produce .produceimg img{
		width:auto;
		height: 100%;
		display: block;
	}
	.produce .producetext{
		margin: 50px 38px 12px 38px;
		width:300px;
	}
	.produce .producetext .title{
		font-size:28px ;
	}
	.produce .producetext p{
		margin:20px 0;
		line-height: 30px;
		font-size: 16px;
		color: rgb(152,162,164);
	}
	.produce .producetext .reach i{
		font-size: 18px;
		font-weight: 600;
		color:  rgb(29,207,209);
	}
	.goal{
		padding-top: 12px;
		height: 660px;
		background-color: rgb(236,240,241);
	}
	.goal .goaltext{
		font-size: 19px;
		display: inline-block;
		margin: 0 38px;
		line-height: 39px;
		/*transition:all 1.5s ease;*/
	}
	/*.goal .goaltext:hover{
		color:#fff;
		animation:Glow 1s ease infinite alternate;
	}
	@keyframes Glow {
		from {
		text-shadow:0 0 10px #fff,0 0 20px #fff,0 0 30px #fff,0 0 40px #00a67c,0 0 70px #00a67c,0 0 80px #00a67c,0 0 100px #00a67c,0 0 150px #00a67c;
		}
		to {
			text-shadow:0 0 5px #fff,0 0 10px #fff,0 0 15px #fff,0 0 20px #00a67c,0 0 35px #00a67c,0 0 40px #00a67c,0 0 50px #00a67c,0 0 75px #00a67c;
		}
	}*/
	.goal .goalimg{
		display:inline-block;
		width:668px;
		height: 340px;
		overflow: hidden;
		float: right;
	}
	.goal .goalimg img{
		width:auto;
		height: 100%;
	}
	.bottomtab{
		background:url(../../assets/images/cta1.jpg) no-repeat fixed  0 0; 
		 background-position: center center;
		 background-size: cover;
		height: 385px;
		text-align: center;
	}
	.bottomtab .english,.chinese,p{
		color: #fff;
	}
	.bottomtab .english{
		font-size:18px;
		padding-top:50px;

	}
	.bottomtab .chinese{
		font-size:36px;
		margin:40px 0;
	}
	.bottomtab p{
		font-size: 18px;
		margin: 0 auto;
    	width: 90%;
	}
}
/*其他*/
@media screen and (min-width: 768px){
	.produce{
		font-size: 0px;
	}
	.produce .produceimg,.produce .producetext{
		display: inline-block;
	}
	.produce .produceimg{
		width:668px;
		height: 550px;
		overflow: hidden;
	}
	.produce .produceimg img{
		width:auto;
		height: 100%;
		display: block;
	}
	.produce .producetext{
		float: right;
		margin: 50px 200px 0px 50px;
		width:400px;
	}
	.produce .producetext .title{
		font-size:28px ;
	}
	.produce .producetext p{
		margin:20px 0;
		line-height: 30px;
		font-size: 16px;
		color: rgb(152,162,164);
	}
	.produce .producetext .reach i{
		font-size: 18px;
		font-weight: 600;
		color:  rgb(29,207,209);
	}
	.goal{
		padding-top: 12px;
		height: 570px;
		background-color: rgb(236,240,241);
	}
	.goal .goaltext{
		/*cursor: pointer;*/
		font-size: 22px;
		display: inline-block;
		/* width: 400px; */
		margin: 35px 200px;
		line-height: 39px;
		/*transition:all 1.5s ease;*/
	}
	/*.goal .goaltext:hover{
		color:#fff;
		animation:Glow 1s ease infinite alternate;
	}
	@keyframes Glow {
		from {
		text-shadow:0 0 10px #fff,0 0 20px #fff,0 0 30px #fff,0 0 40px #00a67c,0 0 70px #00a67c,0 0 80px #00a67c,0 0 100px #00a67c,0 0 150px #00a67c;
		}
		to {
			text-shadow:0 0 5px #fff,0 0 10px #fff,0 0 15px #fff,0 0 20px #00a67c,0 0 35px #00a67c,0 0 40px #00a67c,0 0 50px #00a67c,0 0 75px #00a67c;
		}
	}*/
	.goal .goalimg{
		display:inline-block;
		width:668px;
		height: 340px;
		overflow: hidden;
		float: right;
	}
	.goal .goalimg img{
		width:auto;
		height: 100%;
	}
	.bottomtab{
		background:url(../../assets/images/cta1.jpg) no-repeat fixed  0 0; 
		 background-position: center center;
		 background-size: cover;
		height: 400px;
		text-align: center;
	}
	.bottomtab .english,.chinese,p{
		color: #fff;
	}
	.bottomtab .english{
		font-size:18px;
		padding-top:50px;

	}
	.bottomtab .chinese{
		font-size:50px;
		margin:40px 0;
	}
	.bottomtab p{
		font-size: 20px;

	}
}
</style>
