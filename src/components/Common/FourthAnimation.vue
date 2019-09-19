<template>
	<div class="fourAni">
		<div class="title">
			最新产品
		</div>
		<div class="productimg">
			<ul>
				<li>
					<img src="../../assets/images/product1.jpg">
					<div class="mask"></div>
				</li>
				<li>
					<img src="../../assets/images/product1.jpg">
					<div class="mask"></div>
				</li>
				<li>
					<img src="../../assets/images/product1.jpg">
					<div class="mask"></div>
				</li>
				<li>
					<img src="../../assets/images/product1.jpg">
					<div class="mask"></div>
				</li>
				<li>
					<img src="../../assets/images/product1.jpg">
					<div class="mask"></div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {

  name: 'FourthAnimation',

  data() {
    return {

    };
  },
};
</script>

<style lang="css" scoped>
	.fourAni{
		display: inline-block;
	}
	.fourAni .title{
		color: #fff;
		font-size: 18px;
		font-weight: 450;
		margin-bottom: 25px;
	}

	.fourAni .productimg li{
		position: relative;
		display: inline-block;
		width:86px;
		height: 86px;
		cursor: pointer;
	}
	.fourAni .productimg li .mask{
		position: absolute;
		top:0;
		width:86px;
		height: 86px;
	}
	.fourAni .productimg img{
		overflow: hidden;
		width:86px;
		height: 86px;
	}
	.fourAni .productimg li:hover .mask{
		background-color: rgba(50,50,50,.5);
	}
</style>
