<template>
	<div class="secondNew">
		<!-- 标题 -->
		<div class="title">
			<h1 @click='enterNewsDetail(subItem.id)' v-html='subItem.title'></h1>
		</div>
		<!-- 时间 -->
		<div class="date">
			<span>{{moment(subItem.date).format('YYYY-MM-DD')}}</span>&nbsp;/&nbsp;<span v-html="subItem.user"></span>
		</div>
		<!-- 文本 -->
		<div class="content">
			<p v-html="subItem.content" style="-webkit-line-clamp:3;height:80px;"></p>
		</div>
		<!-- 按钮 -->
		<div class="btn" @click='enterNewsDetail(subItem.id)'>
			<div>查看详情</div>
		</div>
	</div>
</template>

<script>
export default {

  name: 'secondNews',
  props:['subItem'],
  data() {
    return {

    };
  },
  methods:{
  	enterNewsDetail(id){
  		this.$router.push({
        name:"NewsDetail",
        params:{
        	newsId:id
        }
       })
  	}
  }
};
</script>

<style lang="css" scoped>
/*手机*/
@media screen and (max-width: 767px){
	.secondNew{
		width: 265px;
		height:285px;
		padding: 40px;
		background-color: #fff;
		position: relative;
		margin:0 2%;
	}
	/*标题*/
	.secondNew .title{
		width: 100%;
	}
	.secondNew .title h1{
		color:#45464b;
		font-weight: normal;
		cursor: pointer;
		font-size: 24px;
	}
	.secondNew .title h1:hover{
		color: #1dcfd1;
	}
	/*时间*/
	.secondNew .date{
		width: 100%;
		padding: 10px 0;
		font-size: 14px;
		color: #bac4c6;
	}
	/*新闻内容*/
	.secondNew .content{
		width: 100%;
		height: 50px;
		padding: 20px 0;
	}
	.secondNew .content p{
		font-size: 16px;
		overflow: hidden;
	    text-overflow: ellipsis;
	    display: -webkit-box;
	    -webkit-line-clamp: 3;
	    -webkit-box-orient: vertical;
    	color: #98a2a4;
    	font-weight: normal;
    	line-height: 27px;
	}
	/*按钮*/
	.secondNew .btn{
		/*width: 100%;*/
		height: 70px;
		position: absolute;
		bottom: 0;
		cursor: pointer;
	}
	.secondNew .btn>div:hover{
		background-color: #1dcfd1;
		border: 2px solid #1dcfd1;
		color:#fff;
	}
	.secondNew .btn>div{
		width: 100px;
		height: 36px;
		border: 2px solid #bac4c6;
		border-radius: 18px;
		text-align: center;
		line-height: 36px;
		color:#45464b;
	}	
}
/*其他*/
@media screen and (min-width: 768px){
	.secondNew{
		width: 740px;
		height:200px;
		padding: 40px;
		background-color: #fff;
		position: relative;
	}
	/*标题*/
	.secondNew .title{
		width: 100%;
	}
	.secondNew .title h1{
		color:#45464b;
		font-weight: normal;
		cursor: pointer;
	}
	.secondNew .title h1:hover{
		color: #1dcfd1;
	}
	/*时间*/
	.secondNew .date{
		width: 100%;
		padding: 5px 0;
		font-size: 14px;
		color: #bac4c6;
	}
	/*新闻内容*/
	.secondNew .content{
		width: 100%;
		height: 50px;
		padding: 20px 0;
	}
	.secondNew .content p{
		font-size: 16px;
		overflow: hidden;
	    text-overflow: ellipsis;
	    display: -webkit-box;
	    -webkit-line-clamp: 3;
	    -webkit-box-orient: vertical;
    	color: #98a2a4;
    	font-weight: normal;
    	line-height: 27px;
	}
	/*按钮*/
	.secondNew .btn{
		width: 100%;
		height: 70px;
		position: absolute;
		bottom: 0;
		cursor: pointer;
	}
	.secondNew .btn>div:hover{
		background-color: #1dcfd1;
		border: 2px solid #1dcfd1;
		color:#fff;
	}
	.secondNew .btn>div{
		width: 100px;
		height: 36px;
		border: 2px solid #bac4c6;
		border-radius: 18px;
		text-align: center;
		line-height: 36px;
		color:#45464b;
	}	
}
</style>
