<template>
	<div class="slide">
		<el-carousel :interval="5000" arrow="always">
	    	<el-carousel-item v-for="Item in cyclePicture" :key="Item.id">
	    		<img :src="Item.img" class="bmp" style="height:680px;width:100%">
	    		<h2 class="htitle">{{Item.title}}</h2>
	    	</el-carousel-item>
  		</el-carousel>
	</div>

</template>

<script>
export default {

  name: 'cyclePic',

  data() {
    return {
    	cyclePicture:{},
    };
  },
  methods:{
    // 获取轮播图
    getSlideShow(){
        this.$http.cyclePicture()
        .then(res=>{
            this.cyclePicture=res;
        }).catch(err=>{
            console.log(err);
        })
    },
  },
  created(){
    this.getSlideShow();
  },
  

};
</script>

<style lang="css">
  .el-carousel__item:nth-child(2n){
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1){
    background-color: #d3dce6;
  }
  .slide .el-carousel__container{
	height: 680px;
  }
  .slide{
  	position: relative;
  }
  .htitle{
  	position: absolute;
  	width: 100%;
  	text-align: center;
  	top: 55%;
  	color:#fff;
  	font-size: 50px;
  }
  .el-carousel-item .bmp{
    height:680px;
    width:100%;
  }
</style>
