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
</style>
