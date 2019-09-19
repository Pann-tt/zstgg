<template>
	<div class="outer">
		<ul>
			<li>
				<div class="firstAniOuter">
					<div class="iconouter">
						<div class="icons">
							<i class="iconfont">&#xe602;</i>
						</div>
					</div>
					
					<div class="title">
						智能化系统
					</div>
					<div class="line"></div>
					<div class="content">
						由现代通信与信息技术、计算机网络技术、行业技术、智能控制技术汇集而成的针对某一个方面的应用的智能集合
					</div>
				</div>
			</li>
			<li class="litwo">
				<div class="firstAniOuter">
					<div class="iconouter">
						<div class="icons">
							<i class="iconfont">&#xe673;</i>
						</div>
					</div>
					
					<div class="title">
						站点集成
					</div>
					<div class="line"></div>
					<div class="content">
						解决方案为客户提供从规划设计、集成实施到验收的端到端解决方案，其内容涵盖：站点新建、站点改造、外线、ODN
					</div>
				</div>
			</li>
			<li class="lithree">
				<div class="firstAniOuter">
					<div class="iconouter">
						<div class="icons">
							<i class="iconfont">&#xe615;</i>
						</div>
					</div>
					
					<div class="title">
						系统集成
					</div>
					<div class="line"></div>
					<div class="content">
						系统集成作为一种新兴的服务方式，是近年来国际信息服务业中发展势头最猛的一个行业。系统集成的本质就是最优化的综合统筹设计
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {

  name: 'FirstAnimation',

  data() {
    return {

    };
  },
};
</script>

<style lang="css" scoped>
	
	.outer ul li{
		display: inline-block;
		width:340px;
		margin:0 1.5%;
	}
	.firstAniOuter{
		margin:30px auto;
		display:inline-block;
		text-align: center;
		width:340px;
	}
	.firstAniOuter .iconouter{
		display:inline-block;
		cursor: pointer;
		width: 110px;
		height: 110px;
		text-align: center;
		border: 4px solid #fff;
		border-radius: 57px;
		/*line-height: 118px;*/
	}
	.firstAniOuter .icons{
		width: 100px;
		height: 100px;
		border: 1px solid #ededed;
		border-radius: 50px;
		text-align: center;
		line-height: 100px;
		margin:4px 4px;
		transition: background 0.8s;
	}
	.firstAniOuter  .icons:hover{
		background-color: rgb(29,207,209);	
	    transition: transform 0.5s, opacity 0.4s;
	    transform: scale(1.1);
	}	
	.litwo .firstAniOuter .icons:hover{
		background-color: rgb(114,72,245);
	}
	.lithree .firstAniOuter .icons:hover{
		background-color: rgb(240,81,53);
	}
	.firstAniOuter .icons:hover .iconfont{
		color: #fff;
	}
	.litwo .firstAniOuter .icons:hover .iconfont{
		color: #fff;
	}
	.lithree .firstAniOuter .icons:hover .iconfont{
		color: #fff;
	}
	.firstAniOuter .icons .iconfont{
		font-size: 52px;
		color: rgb(29,207,209);
	}
	.litwo .firstAniOuter .icons .iconfont{
		color: rgb(114,72,245);
	}
	.lithree .firstAniOuter .icons .iconfont{
		color: rgb(240,81,53);
	}
	.firstAniOuter .title{
		font-size: 20px;
		margin-top:5%;
		margin-bottom:3%;
	}
	.firstAniOuter .line{
		width:35px;
		height: 6px;
		border-bottom: 2px solid rgb(29,207,209);
		display:inline-block;
	}
	.litwo .firstAniOuter .line{	
		border-bottom: 2px solid rgb(114,72,245);
	}
	.lithree .firstAniOuter .line{	
		border-bottom: 2px solid rgb(240,81,53);
	}
	.firstAniOuter .content{
		margin-top:5%;
		margin-bottom:5%;
		color: #9d9d9d;
		font-size: 16px;
	}
</style>
