<template>
	<div class="firsttextouter">
		<div class="title">新闻中心</div>
		<div class="describe">Latest News</div>
		<div class="line"></div>
	</div>
</template>

<script>
export default {

  name: 'FirstText',

  data() {
    return {

    };
  },
};
</script>

<style lang="css" scoped>
	.firsttextouter{
		text-align: center;
		margin:30px 0;
	}
	.firsttextouter div{
		margin-bottom: 20px;
	}
	.firsttextouter .title{
		font-size: 34px;
	}
	.firsttextouter .line{
		width:35px;
		height: 6px;
		border-bottom: 2px solid rgb(29,207,209);
		display:inline-block;
	}
	.firsttextouter .describe{
	    font-family: "Lato", 'Helvetica', 'Arial', 'sans-serif';
		color:rgb(152,162,164);
		font-size:20px;
	}
</style>
