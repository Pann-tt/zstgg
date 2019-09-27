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
/*手机*/
@media screen and (max-width: 767px){
	.secouter{
		width: 100%;
		height: 134px;
		background:url(../../assets/images/breadcrumbs_bg.jpg) no-repeat;
		-webkit-background-size: auto;
		background-size: cover;
	}
	.secouter .container{
	}
	.secouter .title{
		text-align: center;
	    line-height: 91px;
	    font-size: 32px;
		color: #fff;
	}
	.secouter .right{
		text-align: center;
	    margin: 0 auto;
	    line-height: 13px;
		color: rgb(152,162,164);
	}
	.secouter .right span{
		cursor: pointer;
	}
	.secouter .right span:hover{
		color: rgb(29,207,209);
	}
}
/*其他*/
@media screen and (min-width: 768px){
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
}
</style>