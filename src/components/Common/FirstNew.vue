<template>
	<div class="firstnewouter">
		<ul class="container">
			<li class="fnli">
				<div class="title" v-html='newsItem.title' @click='enterNewsDetail(newsItem.id)'>						
				</div>
				<span class="time">{{moment(newsItem.date).format('YYYY-MM-DD')}}</span>
			</li>
			
		</ul>
	</div>
</template>

<script>
export default {

  name: 'FirstNew',
  props:['newsItem'],
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
       });

  	}
  }
};
</script>

<style lang="css" scoped>
/*手机*/
@media screen and (max-width: 767px){
	.firstnewouter .fnli{
		text-align:center;
		padding-bottom: 35px;
		border-bottom: 1px solid #E8E8E8;
	}
	.firstnewouter .fnli .title{
		cursor: pointer;
		font-size: 22px;
		margin-top: 25px;
		margin-bottom: 15px;
	}
	.firstnewouter .fnli .title:hover{
		color:  rgb(29,207,209);
	}
	.firstnewouter .fnli .time{
		color:#BFBFBF;
		font-size: 12px;
	}
}
/*其他*/
@media screen and (min-width: 768px){
	.firstnewouter .fnli{
		text-align:center;
		padding-bottom: 35px;
		border-bottom: 1px solid #E8E8E8;
	}
	.firstnewouter .fnli .title{
		cursor: pointer;
		font-size: 25px;
		margin-top: 25px;
		margin-bottom: 15px;
	}
	.firstnewouter .fnli .title:hover{
		color:  rgb(29,207,209);
	}
	.firstnewouter .fnli .time{
		color:#BFBFBF;
		font-size: 12px;
	}
}
</style>
