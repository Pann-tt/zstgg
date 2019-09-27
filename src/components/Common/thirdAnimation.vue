<template>
	<div class="thirdAni">
		<div class="topImg" @mouseenter="enterPic" @mouseleave="leavePic">
			<img :src="item.img" ref="getheight">
			<div class="thirdMask" v-if="bgcshow">
				<div class="picLink">
					<span class="iconfont" @click="openbigger(item.id)">&#xe6bc;</span>
					<span class="iconfont" @click="getdetail(item.id)">&#xe627;</span>
				</div>
			</div>
		</div>
		<div class="bigBGC"  @touchmove.prevent v-if="bigshow">
			<div class="openbig(item.id)" :style="style">
				<div class="imgDetail">
					<img id="pict" :src="item.img" :title="title" />
					<div v-if="BtnShow">
						<button id="prev" class="iconfont" @click="prve" v-if="prveShow">&#xe665;</button>
						<button id="next" class="iconfont" @click="next" v-if="nextShow">&#xe666;</button>
					</div>
					<p><span class="iconfont" @click="closebig">&#xe658;</span></p>
				</div>
			</div>
		</div>
		<div class="Bottomtext">
			<p class="title" @click="getdetail(item.id)">{{item.title}}</p>
			<p class="text">{{item.desc}}</p>
		</div>
	</div>
</template>

<script>
export default {

  name: 'thirdAnimation',

  	data() {
   	 	return {
   	 		title:"",
   	 		picture:'',
   	 		i:'',
   	 		prveShow:false,
   	 		nextShow:true,
   	 		BtnShow:true,
   			bgcshow:false,
   			bigshow:false,
   			style:{
        		height:'',
        		width:'',
      		},
      		length:0,
    	};
  	},
  	mounted () {
		this.$nextTick(function() {
       	 	// 获取窗口宽度*图片的比例，定义页面初始的轮播图高度
        	this.style.height = document.documentElement.clientHeight+'px';
        	this.style.width = document.documentElement.clientWidth+'px';
        	// console.log(this.style.width);
    	});
    	this.title=`image ${this.item.id} of 9`;
  	},
  	methods:{
		enterPic(){
			this.bgcshow=true;
		},
		leavePic(){
			this.bgcshow=false;
		},
		openbigger(id){
			this.i=id-1;
			this.bigshow=true;
			if(this.i>0){
				this.prveShow=true;
			}else if(this.i==length){
				this.nextShow=true;
			}

			//禁止页面滑动
			var mo=function(e){e.preventDefault();};
	      	document.body.style.overflow='hidden';
	      	document.addEventListener("touchmove",mo,false);
		},
		closebig(){
			this.bigshow=false;

			var mo=function(e){e.preventDefault();};
        	document.body.style.overflow='';//出现滚动条
        	document.removeEventListener("touchmove",mo,false);
		},
		getdetail(id){
	  		this.$router.push({
		        name:'DisplayDetail',
		        params:{
	          		newsId:id,
	          	}
        	})
  		},
  		next(){
	  		var pict=document.getElementById("pict");
			var nextBtn=document.getElementById("next");
			var prevBtn=document.getElementById("prev");
			//2.绑定事件

			this.length=this.productList.length;

			if(this.i<this.length-1){
				this.i++;
				if(this.i==this.length-1){
					this.nextShow=false;
				}
			}else{
				this.nextShow=false;
			}
			this.prveShow=true;
			//事件驱动程序
			pict.src=this.productList[this.i].img;
  		},
  		prve(){
	  		var pict=document.getElementById("pict");
			var nextBtn=document.getElementById("next");
			var prevBtn=document.getElementById("prev");
			//2.绑定事件
			if(this.i>0){
				this.i--;
				if(this.i==0){
					this.prveShow=false;
				}	
			}else{
				this.prveShow=false;
			}
			this.nextShow=true;
			//事件驱动程序
			pict.src=this.productList[this.i].img;
  		}
	},

	props:["item","productList"]
};
</script>

<style lang="css" scoped>
/*手机*/
@media screen and (max-width: 767px){
	.bigBGC{
		position: fixed;
		top: 0;
		left: 0;
		background-color: rgba(0,0,0,0.5);
		z-index:101;
	}
	.thirdAni{
		width: 100%;
		height: auto;
		margin-bottom:30px;
		padding:15px 0;
	}
	/*顶部图片*/
	.thirdAni .topImg{
		width: 100%;
		position: relative;
		height: auto;
	}
	.thirdAni .topImg img{
		width: 100%;
		display: block;
	}
	/*灰色背景*/
	.thirdMask{
		width:100%;
		height: 100%;
		background-color: rgb(0,0,0,0.7);
		position: absolute;
		top: 0;
		left: 0;
		/*z-index: 1;*/
	}
	.picLink{
		width:100%;
		height: 40px;
		position: absolute;
		top:45%;
		left:0;
		text-align: center;
	}
	.picLink span{
		display: inline-block;
		width:40px;
		height: 40px;
		border-radius: 20px;
		margin: 0 10px;
		background-color: #fff;
		color:#333333;
		font-size: 25px;
		text-align: center;
		line-height: 40px;
		cursor: pointer;
	}
	.picLink span:hover{
		color:#fff;
		background-color: #1dcfd1;
	}
	/*底部文本*/
	.thirdAni .Bottomtext{
		/*width: 290px;*/
		height: 50px;
		background-color: #fff;
		color: rgb(51,51,51);
		text-align: center;
		padding:40px 20px;
	}
	.thirdAni .Bottomtext p{
		width: 100%;
		display: block;
		text-align: center;
		margin-bottom: 10px;
	}
	.thirdAni .Bottomtext .title{
		cursor: pointer;
	}
	.thirdAni .Bottomtext .title:hover{
		color:#1dcfd1;
	}
	.thirdAni .Bottomtext .title{
		color:rgb(51,51,51);
		font-size: 16px;
	}
	.thirdAni .Bottomtext .text{
		color:rgb(186,196,198);
		font-size: 14px;
		line-height: 1.4;
	}
	/*展开*/
	.openbig{
		background-color: rgba(0,0,0,0.5);
	}
	.imgDetail{
		width:100%;
		text-align: center;
		padding-top:70px;
		color: #fff;
		position: relative;
	}
	.imgDetail img{
		border: 2px solid #fff;
		border-radius: 10px;
		max-width: 300px;
		margin: 0 auto;
	}
	.imgDetail button{
		width:40px;
		height:40px;
		border: none;
		color: #fff;
		background-color: rgba(0,0,0,0.5);
	}
	#prev{
		position: absolute;
		left: 38px;
		top:50%;
	}
	#next{
		position: absolute;
		right:38px;
		top:50%;
	}
	/*关闭*/
	.imgDetail span{
		display: block;
		width:60px;
		margin: 0 auto;
		height: 40px;
		/*background-color: pink;*/
		cursor: pointer;
		font-size: 30px;
	}
}
/*其他*/
@media screen and (min-width: 768px){
	.bigBGC{
		position: fixed;
		top: 0;
		left: 0;
		background-color: rgba(0,0,0,0.5);
		z-index:101;
	}
	.thirdAni{
		width: 360px;
		height: auto;
		margin-bottom:30px;
		padding:15px 0;
	}
	/*顶部图片*/
	.thirdAni .topImg{
		width: 100%;
		position: relative;
		height: auto;
	}
	.thirdAni .topImg img{
		width: 100%;
		display: block;
	}
	/*灰色背景*/
	.thirdMask{
		width:100%;
		height: 100%;
		background-color: rgb(0,0,0,0.7);
		position: absolute;
		top: 0;
		left: 0;
		/*z-index: 1;*/
	}
	.picLink{
		width:100%;
		height: 40px;
		position: absolute;
		top:45%;
		left:0;
		text-align: center;
	}
	.picLink span{
		display: inline-block;
		width:40px;
		height: 40px;
		border-radius: 20px;
		margin: 0 10px;
		background-color: #fff;
		color:#333333;
		font-size: 25px;
		text-align: center;
		line-height: 40px;
		cursor: pointer;
	}
	.picLink span:hover{
		color:#fff;
		background-color: #1dcfd1;
	}
	/*底部文本*/
	.thirdAni .Bottomtext{
		width: 320px;
		height: 50px;
		background-color: #fff;
		color: rgb(51,51,51);
		text-align: center;
		padding:40px 20px;
	}
	.thirdAni .Bottomtext p{
		width: 100%;
		display: block;
		text-align: center;
		margin-bottom: 10px;
	}
	.thirdAni .Bottomtext .title{
		cursor: pointer;
	}
	.thirdAni .Bottomtext .title:hover{
		color:#1dcfd1;
	}
	.thirdAni .Bottomtext .title{
		color:rgb(51,51,51);
		font-size: 16px;
	}
	.thirdAni .Bottomtext .text{
		color:rgb(186,196,198);
		font-size: 14px;
	}
	/*展开*/
	.openbig{
		background-color: rgba(0,0,0,0.5);
	}
	.imgDetail{
		width:100%;
		text-align: center;
		padding-top:70px;
		color: #fff;
		position: relative;
	}
	.imgDetail img{
		border: 5px solid #fff;
		border-radius: 10px;
		max-height: 488px;
		min-height: 300px;
		margin: 0 auto;
	}
	.imgDetail button{
		width:60px;
		height:40px;
		border: none;
		color: #fff;
		background-color: rgba(0,0,0,0.5);
	}
	#prev{
		position: absolute;
		left: 0;
		top:50%;
	}
	#next{
		position: absolute;
		right: 0;
		top:50%;
	}
	/*关闭*/
	.imgDetail span{
		display: block;
		width:60px;
		margin: 0 auto;
		height: 40px;
		/*background-color: pink;*/
		cursor: pointer;
		font-size: 30px;
	}
}
</style>