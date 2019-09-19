<template>
	<div>
		<div class="detailText">
			<my-SecondText :title="title"></my-SecondText>
		</div>
		<!-- 案例详情 -->
		<div class="details">
			<div class="container">
				<!-- 左边 -->
				<div class="det-left"  @mouseover="enterPic" @mouseleave="leavePic">
					<img  id="pict" src="../../assets/images/left1.jpg">
					<div v-if="BtnShow">
						<button id="prev" @click="prve" v-if="prveShow">上一张</button>
						<button id="next" @click="next" v-if="nextShow">下一张</button>
					</div>
				</div>
				<!-- 右边 -->
				<div class="det-right">
					<div class="righttext">
						<h2>Ux与UI不是对立而是共生</h2>
						<div class="text">
							<p>
								对于网站来说，公司设计团队完善UI的目的通常是为了提高UX。菜单项、按钮、文字、图像、视频以及其各自在页面上的位置构成了界面，所有这些要素都应当仔细规划。而这些就是UX的组成元素，它们的使用方式直接影响着用户的感觉。
							</p>
							<p>
								我们首先通过几个示例来概览一下UI，说明有哪些策略可以帮助你了解为什么优秀的UX取决于UI的优劣，然后再详细讲解一下为什么塑造UI要比塑造UX容易（虽容易，但不一定就能做对）。
							</p>
							<h5>Web端UI的是与非</h5>
							<p>
								在web端，比方说设计师想添加拖拽文件作为整理内容的方式。这就属于UI的范畴。又比方说用户觉得这个网站没有另一家竞争对手的网站做得好，因为在另一家网站上用户能够轻松简单地听几个小时的音乐。这就属于UX的范畴。
							</p>
						</div>
						<ul>
							<li><span>时间：</span>2016-03-07 20:18</li>
							<li><span>作者：</span>admin</li>
							<li><span>点击：</span>10次</li>
						</ul>
						<div class="icon">
							<span class="iconfont"><a href="#">&#xe650;</a></span>
							<span class="iconfont"><a href="#">&#xe650;</a></span>
							<span class="iconfont"><a href="#">&#xe650;</a></span>
							<span class="iconfont"><a href="#">&#xe650;</a></span>
							<span class="iconfont"><a href="#">&#xe650;</a></span>
							<span class="iconfont"><a href="#">&#xe650;</a></span>
						</div>
					</div>
				</div>
				<div class="clearfix"></div>
			</div>
		</div>
	</div>
</template>

<script>
export default {

  name: 'DisplayDetail',

  data() {
    return {
    	i:1,
    	BtnShow:false,
    	prveShow:false,
    	nextShow:true,
    	title:"网页设计",
    	pic:[
    		{id:1,imgSrc:require("../../assets/images/ui1.jpg")},
    		{id:2,imgSrc:require("../../assets/images/ui2.jpg")}
    	]
    };
  },
  methods:{
  	enterPic(){
  		this.BtnShow=true;
  	},
  	leavePic(){
  		this.BtnShow=false;
  	},
  	next(){
  		var pict=document.getElementById("pict");
		var nextBtn=document.getElementById("next");
		var prevBtn=document.getElementById("prev");
		//2.绑定事件
		var max=2,min=1;
		if(this.i<max){
			this.i++;
			if(this.i==max){
				this.nextShow=false;
			}
		}else{
			this.nextShow=false;
		}
		this.prveShow=true;
		//事件驱动程序
		pict.src=require(`../../assets/images/left${this.i}.jpg`);
		
  	},
  	prve(){
  		var pict=document.getElementById("pict");
		var nextBtn=document.getElementById("next");
		var prevBtn=document.getElementById("prev");
		//2.绑定事件
		var max=2,min=1;
		if(this.i>min){
			this.i--;
			if(this.i=min){
				this.prveShow=false;
			}			
		}else{
			this.prveShow=false;
		}
		this.nextShow=true;
		//事件驱动程序
		pict.src=require(`../../assets/images/left${this.i}.jpg`);
  	}
  }
};
</script>

<style lang="css" scoped>
.clearfix{
	content:'';
  	clear: both;
  	display: block;
}
.details{
	width: 100%;
	/*height: auto;*/
	padding: 120px 0;
	background-color: rgb(236,240,241);
}
/*左边*/
.det-left{
	width:66%;
	height:100%;
	float: left;
	position: relative;
	/*background-color: pink;*/
}
.det-left img{
	width:100%;
}
.det-left button{
	width:60px;
	height:40px;
	border: none;
	color: #fff;
	background-color: rgba(0,0,0,0.5);
}
#prev{
	position: absolute;
	left: 0;
	top:40%;
}
#next{
	position: absolute;
	right: 0;
	top:40%;
}
.quan{
	width:100%;
	height: 8px;
	margin: 5px 0;
	text-align: center;
}
.quan span{
	display: inline-block;
	width:10px;
	height:10px;
	margin: 0 10px;
	border-radius: 5px;
	background-color: #1dcfd1;
}
/*右边*/
.det-right{
	width:32%;
	height:100%;
	float: right;
}
.righttext{
	width:90%;
	margin-left: 10%;
}
.righttext h2{
	font-size: 24px;
	color: #454646;
	font-weight: 400;
	margin-bottom: 20px;
}
.righttext .text{
	width:100%;
	margin-bottom: 30px;
	font-size: 16px;
	color: #98a2a4;
	font-weight: normal;
	line-height: 27px;
}
.righttext .text p{
	width:100%;
	font-size: 14px;
	color: #98a2a4;
	margin-bottom: 30px;
	line-height: 27px;
}
.righttext .text h5{
	margin-bottom: 20px;
	/*line-height: 27px;*/
}
.righttext ul{
	width:100%;
	height:96px;
	color:#98a2a4;
	font-size: 16px;
	margin-bottom: 30px;
}
.righttext ul li{
	line-height: 32px;
}
.righttext ul li>span{
	color:#45464b;
}
.icon{
	width:100%;
	height:44px;
}
.icon span a{
	color:orange;
	height:32px;
	width:32px;
	margin: 6px 6px 6px 0;
	font-size: 32px;
}
</style>
