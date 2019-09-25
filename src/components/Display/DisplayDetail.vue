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
					<img  id="pict" :src="picone">
					<div v-if="BtnShow">
						<button id="prev" @click="prve" v-if="prveShow">上一张</button>
						<button id="next" @click="next" v-if="nextShow">下一张</button>
					</div>
				</div>
				<!-- 右边 -->
				<div class="det-right">
					<div class="righttext">
						<h2>{{productDetail.title}}</h2>
						<div class="text">
							<p>
								{{productDetail.desc}}
							</p>
						</div>
						<ul>
							<li><span>时间：</span>{{moment(productDetail.date).format('YYYY-MM-DD')}}</li>
							<li><span>作者：</span>admin</li>
							<li><span>点击：</span>{{productDetail.clicks}}</li>
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
    	length:1,
    	newsId:0,
    	productDetail:[],
    	i:0,
    	BtnShow:false,
    	prveShow:false,
    	nextShow:true,
    	title:"网页设计",
    	pic:[],
    	picone:[],
    	max:0,
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
		if(this.i<this.length){
			this.i++;
			if(this.i==this.length-1){
				this.nextShow=false;
			}
		}else{
			this.nextShow=false;
		}
		this.prveShow=true;
		//事件驱动程序
		// console.log(this.i);
		pict.src='http://'+this.productDetail.images[this.i].url;
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
		pict.src='http://'+this.productDetail.images[this.i].url;
  	},
  	//详情
  	getproductDetail(){
  		// this.dates=this.$route.params.dates;
  		// console.log(this.$route.params);
  		this.$http.productDetail(this.$route.params.newsId)
      	.then(res=>{
	        this.productDetail=res;
	        this.length= this.productDetail.images.length;
	        // console.log(this.length);
	        if(this.length==1){
	        	this.prveShow=false;
	        	this.nextShow=false;
	        }
	        this.picone='http://'+this.productDetail.images[0].url;

	        // console.log(this.i);
      	})
      	.catch(err=>{
        	console.log(err);
      	})
  	},
  },
  created(){
  	this.getproductDetail();
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
