<template>
	<div class="mainDisplay">
		<!-- 文本组件二 -->
		<div class="displayText">
			<my-SecondText :title="title"></my-SecondText>
		</div>
		<!-- 展示案例 -->
		<div class="water">
			<!-- 非手机样式 -->
			<div class="waterfall-wrapper">
			    <!-- 左边 -->
			    <ul class="left-waterfall" ref="left">
			      	<li class="item" v-for="(item, index) in leftItems" >
			        	<my-thirdAnimation :item="item" :productList="productList"></my-thirdAnimation>
			      	</li>
			    </ul>
			    <!-- 中间 -->
			    <ul class="center-waterfall" ref="center">
			      	<li class="item" v-for="(item, index) in centerItems" >
			        	<my-thirdAnimation :item="item" :productList="productList"></my-thirdAnimation>
			      	</li>
			    </ul>
			    <!-- 右边 -->
			    <ul class="right-waterfall" ref="right">
			      	<li class="item" v-for="(item, index) in rightItems" >
			        	<my-thirdAnimation :item="item" :productList="productList"></my-thirdAnimation>
			      	</li>
			    </ul>
 	 		</div>
			<!-- 手机样式 -->
 	 		<div class="productsList">
 	 			<ul class="left-waterfall" ref="left">
			      	<li class="item" v-for="(item, index) in productList" >
			        	<my-thirdAnimation :item="item" :productList="productList"></my-thirdAnimation>
			      	</li>
			    </ul>
 	 		</div>
		</div>
		<!-- 分页 -->
		<div class="pagings">
			<my-pag :allpages="allpages" :long="long"></my-pag>
		</div>
		<!-- 蓝色栏 -->
		<div class="displayBlue">
			<h1 class="container">智慧城市运营商</h1>
		</div>
	</div>
</template>

<script>
export default {

  name: 'Display',


  data() {
    return {
    	width:"360px",
    	title:"产品展示",
    	leftItems: [],
	    centerItems: [],
	    rightItems: [],
	    productList:[],
	    page:1,
	    id:0,
	    newsId:0,
	    allpages:0,
	    long:0,
    };
  },
  	methods:{
    	// 获取案列
	    getproductList(){
	      	this.$http.productList(this.$store.state.page)
	      	.then(res=>{
	        	this.productList=res.results;
	        	this.allpages=res.count;
	        	this.long=res.results.length;
	        	var length=this.productList.length;
            	//将数据一个一个依次分配给三个数组
            	this.leftItems=[];
	    	this.centerItems=[];
	    	this.rightItems=[];
            	for(let i=0;i<length;){
            		//将数据给左边
            		this.leftItems.push(this.productList[i]);
            		i++;
            		if(i>=length){
            			break;
            		}
            		//将数据给中间
            		this.centerItems.push(this.productList[i]);
            		i++;
            		if(i>=length){
            			break;
            		}
            		//将数据给右边
            		this.rightItems.push(this.productList[i]);
            		i++;
            		if(i>=length){
            			break;
            		}
            	}
	      	}).catch(err=>{
	        	console.log(err);
	      	})
	    },
  	},
  	created(){
    	this.getproductList();
  	},
};
</script>

<style lang="css" scoped>
/*手机*/
@media screen and (max-width: 767px){
	.mainDisplay{
		background-color: #ecf0f1;
	}
	/*文本组件*/
	.displayText{
		margin-bottom: 100px;
	}
	/*案例展示*/
	.displayAni{
		width: 100%;
		height: auto;
	}
	.displayAni ul{
		padding: 15px 0;
	}
	/*瀑布流*/
	.water{
		width:100%;
		/*height: 3000px;*/
		overflow: hidden;
	}
	.productsList{
		width: 88%;
    	margin: 0 auto;
	}
	.waterfall-wrapper{
	    width: 88%;
		display: none;
	    margin: 0 auto;
	  }
	  ul {
	    /*width:360px;*/
	  }

	  ul.left-waterfall {
	    width: 100%;
	    float: left;
	  }
	  ul.center-waterfall{
	    float: left;
	    width: 100%;
	  }
	  ul.right-waterfall {
	    float: left;
	    width: 100%;
	  }
	  li.item {
	    width: 100%;
	  }
	/*分页*/
	.pagings{
		height: 150px;
		/*background-color: green;*/
		width:88%;
		margin:0 auto;
		padding-left: 22px;
	}
	/*蓝色栏*/
	.displayBlue{
		width:100%;
		height: 50px;
		background-color: #1dcfd1;
		padding: 75px 0;
		line-height: 50px;
	}
	.displayBlue h1{
		color: #fff;
		font-size: 32px;
		font-weight: 400;
		text-align: center;
	}
}
/*其他*/
@media screen and (min-width: 768px){
	.productsList{
		display: none;
	}
	.mainDisplay{
		background-color: #ecf0f1;
	}
	/*文本组件*/
	.displayText{
		margin-bottom: 100px;
	}
	/*案例展示*/
	.displayAni{
		width: 100%;
		height: auto;
	}
	.displayAni ul{
		padding: 15px 0;
	}
	/*瀑布流*/
	.water{
		width:100%;
		/*height: 3000px;*/
		overflow: hidden;
	}
	.waterfall-wrapper{
	    width: 88%;
	    /*height:2000px;*/
	    /*background-color: pink;*/
	    margin: 0 auto;
	  }
	  ul {
	    width:360px;
	    margin: 0 17.5px;
	  }

	  ul.left-waterfall {
	    width:360px;
	    float: left;
	  }
	  ul.center-waterfall{
	    float: left;
	  }
	  ul.right-waterfall {
	    float: left;
	  }

	  li.item {
	    width: 360px;
	  }
	/*分页*/
	.pagings{
		height: 150px;
		/*background-color: green;*/
		width:88%;
		margin:0 auto;
		padding-left: 22px;
	}
	/*蓝色栏*/
	.displayBlue{
		width:100%;
		height: 50px;
		background-color: #1dcfd1;
		padding: 75px 0;
		line-height: 50px;
	}
	.displayBlue h1{
		color: #fff;
		font-size: 32px;
		font-weight: 400;
	}
}
</style>
