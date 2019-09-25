<template>
	<div class="fourAni">
		<div class="title">
			最新产品
		</div>
		<div class="productimg">
			<ul>
				<li v-for="item in allproductList" :key="item.id" @click="getdetail(item.id)">
					<img :src="item.img">
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
    	allproductList:[],
    };
  },
  methods:{
  	getallproductList(){
	      	this.$http.allproductList()
	      	.then(res=>{
	        	this.allproductList=res.results;
	      	}).catch(err=>{
	        	console.log(err);
	      	})
	    },
  	getdetail(id){
		console.log(id);
	  	this.$router.push({
		    name:'DisplayDetail',
		    params:{
	          	newsId:id,
	        }
       	})
  	},
  },
  created(){
    	this.getallproductList();
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
		margin-right: 4px;
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
