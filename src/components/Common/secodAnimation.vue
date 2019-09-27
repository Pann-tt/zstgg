<template>
	<div class="secodAni">
		<div class="sAbgImg" @mouseenter="sAenter" @mouseleave="sAleave">
			<img :src="homeitem.img">
			<!-- 上半部分 -->
			<transition name="el-zoom-in-top">
        		<div v-show="sAshow" class="transition-box sAmaskOne">
        			<div class="cycleLinkTop">
<!--         				<span class="iconfont">&#xe6bc;</span> -->
        				<span class="iconfont" @click="getdetail(homeitem.id)">&#xe627;</span>
        			</div>
        		</div>
      		</transition>
      		<!-- 下部分 -->
			<transition name="el-zoom-in-bottom">
        		<div v-show="sAshow" class="transition-box sAmaskTwo">
        			<div class="cycleLinkBottom">
        				<p @click="getdetail(homeitem.id)">{{homeitem.title}}</p>
        				<p>网页设计</p>
        			</div>
        		</div>
      		</transition>
		</div>
	</div>
</template>

<script>
export default {

  name: 'secodAnimation',

  data() {
    return {
    	sAshow:false,
    };
  },
  props:["homeitem"],
  
  methods:{
  	sAenter(){
  		this.sAshow=true;
  		event.stopPropagation(); 
  	},
  	sAleave(){
  		this.sAshow=false;
  		 event.stopPropagation(); 
  	},
  	getdetail(id){
		// console.log(id);
	  	this.$router.push({
		    name:'DisplayDetail',
		    params:{
	          	newsId:id,
	        }
       	})
  	},
  }

};
</script>

<style lang="css" scoped>
</style>