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