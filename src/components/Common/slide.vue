<template>
	<div class="slide" @click="goTop">
		<span class="iconfont">&#xe601;</span>
	</div>
</template>

<script>
export default {

  name: 'slide',

  data() {
    return {

    };
  },
  methods:{
  	goTop(){
		target.scrollIntoView();
	},
  }
};
</script>

<style lang="css" scoped>
.slide{
	width: 50px;
    height: 50px;
	color: #c2cbcd;
	background-color: #666;
	text-align: center;
	line-height: 50px;
	cursor: pointer;
	border-radius: 10px;
}
.slide .iconfont{
	font-size: 40px;	
	text-align: center;
	line-height:50px;
}
</style>
