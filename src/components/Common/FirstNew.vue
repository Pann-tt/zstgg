<template>
	<div class="firstnewouter">
		<ul>
			<li class="fnli">
				<div class="title">
						创客云-建站资源共享学习平台
				</div>
				<span class="time">2016-03-07</span>
			</li>
			<li class="fnli">
				<div class="title">
						创客云-建站资源共享学习平台
				</div>
				<span class="time">2016-03-07</span>
			</li>
			<li class="fnli">
				<div class="title">
						2015年的网站设计重心会更倾向于“用户体验”
				</div>
				<span class="time">2016-03-07</span>
			</li>
		</ul>
	</div>
</template>

<script>
export default {

  name: 'FirstNew',

  data() {
    return {

    };
  },
};
</script>

<style lang="css" scoped>
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
</style>
