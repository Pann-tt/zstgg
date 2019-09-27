<template>
	<div class="mainDisplay">
		<!-- 文本组件二 -->
		<div class="displayText">
			<my-SecondText :title="title"></my-SecondText>
		</div>
		<!-- 展示案例 -->
		<div class="water">
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
</style>
