<template>
	<div  class="secouter">
		<div class="container">
			<div class="title">{{title}}</div>
			<div class="right">
				<span>智尚科技</span>&nbsp;&nbsp;&nbsp;
				<span>{{title}}</span>
			</div>
		</div>	
	</div>
</template>

<script>
export default {

  name: 'SecondText',
  props:['title'],
  data() {
    return {

    };
  },
};
</script>

<style lang="css" scoped>
	.secouter{
		width: 100%;
		height: 150px;
		background:url(../../assets/images/breadcrumbs_bg.jpg) no-repeat;
	}
	.secouter .container{
		line-height: 150px;
	}
	.secouter .title{
		display: inline-block;
		font-size: 40px;
		color: #fff;
	}
	.secouter .right{
		display:inline-block;
		float: right;
		color: rgb(152,162,164);
	}
	.secouter .right span{
		cursor: pointer;
	}
	.secouter .right span:hover{
		color: rgb(29,207,209);
	}
</style>
