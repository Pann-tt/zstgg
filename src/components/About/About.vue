<template>
	<div>
		<!-- 文字组件二 -->
		<my-SecondText :title='titleone'/>
		<div class="produce">
			<div class="produceimg">
				<img src="../../assets/images/about_us_intro.jpg">
			</div>
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
	</div>
</template>

<script>
export default {

  name: 'About',

  data() {
    return {
    	titleone:'关于我们',
    	
    };
  },
};
</script>

<style lang="css" scoped>
	.produce .produceimg,.produce .producetext{
		display: inline-block;
	}
	.produce .produceimg img{
		width:668px;
		height: 550px;
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
		margin:25px 0;
		line-height: 30px;
		font-size: 16px;
		color: rgb(152,162,164);
	}
	.produce .producetext .reach i{
		font-size: 18px;
		font-weight: 600;
		color:  rgb(29,207,209);
	}
</style>
