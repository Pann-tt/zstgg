<template>
	<div class="mainDisplay">
		<!-- 文本组件二 -->
		<div class="displayText">
			<my-SecondText :title="title"></my-SecondText>
		</div>
		<!-- 展示案例 -->
		<div class="water">
			<my-waterfall></my-waterfall>
		</div>
		<!-- 分页 -->
		<div class="pagings">
			<my-pag></my-pag>
		</div>
		<!-- 蓝色栏 -->
		<div class="displayBlue">
			<h1 class="container">智慧城市运营商</h1>
		</div>
	</div>
</template>

<script>
export default {

  name: 'Display',

  data() {
    return {
    	width:"360px",
    	title:"产品展示",
    };
  },
};
</script>

<style lang="css" scoped>
.mainDisplay{
	background-color: #ecf0f1;
}
/*文本组件*/
.displayText{
	margin-bottom: 100px;
}
/*案例展示*/
.displayAni{
	width: 100%;
	height: auto;
}
.displayAni ul{
	padding: 15px 0;
}
/*瀑布流*/
.water{
	width:100%;
	/*height: 3000px;*/
	overflow: hidden;
}
/*分页*/
.pagings{
	height: 150px;
	/*background-color: green;*/
	width:88%;
	margin:0 auto;
	padding-left: 22px;
}
/*蓝色栏*/
.displayBlue{
	width:100%;
	height: 50px;
	background-color: #1dcfd1;
	padding: 75px 0;
	line-height: 50px;
}
.displayBlue h1{
	color: #fff;
	font-size: 32px;
	font-weight: 400;
}
</style>
