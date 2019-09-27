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