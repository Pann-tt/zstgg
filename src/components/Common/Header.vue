<template>
	<el-container	:style="style">
      	<el-header height ='60px' :style="style">
            <div class="mainHeader">

                <div class="nav-left">
                    <img src="../../assets/images/logo.png">
                </div>

                <div class="nav-right">
                	<!-- 非手机样式 -->
                    <ul class="right-list">
                      	<li v-for='(list,index) in Headerlist' :key='list.id' @click='bgcAdd(index)' :class="{active:index==current}">
                        	<router-link :to='{name:list.name}'>{{list.title}}</router-link>
                      	</li>
                    </ul>
                	<!-- 手机样式 -->
                	<div class="right_ipone">
                		<span class="iconfont" @click="openIphone">&#xe6e5;</span>
                	</div>
                </div>
            </div>
      	</el-header>
      	 <!-- 展开列表 -->
            <transition name="draw">
	            <div class="openlist" v-show="iponelist">
		    		<ul>
		    			<li v-for='(list,index) in Headerlist' :key='list.id' @click='bgcAdd(index)' :class="{active:index==current}">
			                <router-link :to='{name:list.name}'>{{list.title}}</router-link>
			            </li>
		    		</ul>
		    	</div>
            </transition>
      	<div class="clear"></div>
    </el-container>
</template>

<script>
export default {
  	name: 'Header',
    data() {
      	return {
      		Headerlist:[
        		{id:1,name:'Home',title:'首页'},
		        {id:2,name:'Display',title:'产品展示'},
		        {id:3,name:'News',title:'新闻中心'},
		        {id:4,name:'About',title:'关于我们'}
		    ],
		    current:0,
		    show:false,
		    iponelist:false,
		    style:{
		    	width:'',
		    }
      	};
    },
    methods:{
    	bgcAdd(index){
    		this.$store.state.pageId=1;
      		this.current=index;
      		this.$store.state.page=1;
      		this.iponelist=false;
    	},
    	openIphone(){
    		this.iponelist=!this.iponelist;
    	}
    },
    watch:{
    	'$route' (to, from){
	     	if(to.name=="DisplayDetail"){
	     		this.bgcAdd(1);
	     	}
	     	if(to.name=="NewsDetail"){
	     		this.bgcAdd(2);
	     	}
	     	for(let i=0;i<4;i++){
	     		if(to.name==this.Headerlist[i].name){
	     			this.bgcAdd(i);
	     		}
	     	}
    	}
  	},
  	created(){
  		// console.log(this.$store.state.isname);
  		for(let i=0;i<4;i++){
	     	if(this.$store.state.isname==this.Headerlist[i].name){
	     		this.bgcAdd(i);
	     	}
	    }
	    if(this.$store.state.isname=="DisplayDetail"){
	     	this.bgcAdd(1);
	    }
	    if(this.$store.state.isname=="NewsDetail"){
	     	this.bgcAdd(2);
	    }

	    this.style.width=document.body.clientWidth+'px';
	    console.log(this.style.width);
  	}
};
</script>

<style lang="css" scoped>
/*手机*/
@media screen and (max-width: 767px){
	.openlist{
	    height:200px;width: 200px;
	    background-color:black;
	}
	.draw-enter-active, .draw-leave-active{
	    transition: all 1s ease;
	}
	.draw-enter, .draw-leave-to /* .fade-leave-active below version 2.1.8 */ {
	    height: 0;
	}
	.clear{ clear:both} 
	/*点击添加背景色*/
	.active{
		color: #1dcfd1;
		font-weight: bold;
	}
	.openlist ul .active a{
		color: #1dcfd1;
	}
	/*导航栏*/
	.el-container{
		position: fixed;
		width: 100%;
		height: 60px;
		z-index: 100;
		background-color: #fff;
		box-shadow: 4px 6px 11px rgba(200,200,200,0.2);
	}
	.el-header{
		width: 100%;
		height:60px;
	}
	.mainHeader{
		width: 88%;
		height: 100%;
		margin: 0 auto;
	}
	/*左边*/
	.mainHeader .nav-left{
		width: 50%;
		height: 100%;
		float: left;
		/*text-align: center;*/
		line-height:85px;
	}
	.mainHeader .nav-left img{
		width: 100%;
	    height: 35px;
	    margin-top: 15px;
	}
	/*右边*/
	.mainHeader .nav-right{
		width: 50%;
		height: 100%;
		/*background-color: pink;*/
		float: right;
	}
	.right-list{
		display: none;
	}
	.right_ipone{
		width: 100%;
		height: 100%;
	}
	.right_ipone>span{
		float: right;
		width: 40px;
		height: 40px;
		line-height: 60px;
		font-size: 40px;
	}
	/*展开列表*/
	.openlist{
		width: 100%;
		background-color: #fff;
	}
	.openlist ul{
		width: 88%;
		margin: 0 auto;
		height: 244px;
	}
	.openlist ul li{
		width: 100%;
		height: 60px;
		margin-bottom: 1px;
	}
	.openlist ul li a{
		display: inline-block;
		width: 100%;
		height: 30px;
		padding: 15px 0;
    	border-bottom: 1px solid #ecf0f1;
    	font-size: 15px;
    	color: rgb(69,70,75);
    	line-height: 30px;
	}
}
/*其他*/
@media screen and (min-width: 768px){
	.right_ipone{
		display: none;
	}
	.clear{ clear:both} 
	/*点击添加背景色*/
	.active{
		color: #1dcfd1;
		font-weight: bold;
	}
	.nav-right ul .active a{
		color: #1dcfd1;
	}
	/*导航栏*/
	.el-container{
		position: fixed;
		width: 100%;
		height: 130px;
		z-index: 100;
		background-color: #fff;
		box-shadow: 4px 6px 11px rgba(200,200,200,0.2);
	}
	.el-header{
		width: 100%;
		height:130px;
	}
	.mainHeader{
		width: 88%;
		height: 100%;
		margin: 0 auto;
	}
	/*左边*/
	.mainHeader .nav-left{
		width: 30%;
		height: 100%;
		float: left;
		/*text-align: center;*/
		line-height: 165px;
	}
	.mainHeader .nav-left img{
		width: 150px;
		height: 35px;
	}
	/*右边*/
	.mainHeader .nav-right{
		width: 50%;
		height: 100%;
		/*background-color: pink;*/
		float: right;
	}
	.mainHeader .nav-right ul{
		width: 100%;
		height: 100%;
	}
	.mainHeader .nav-right ul li{
		float: left;
		width: 25%;
		text-align: center;
		line-height: 130px;
		font-size: 15px;
		color: rgb(51,51,51);
	}
	.nav-right ul li>a{
		width: 100%;
		height: 100%;
		color: rgb(51,51,51);
	}
	.nav-right ul li a:hover{
		color: #1dcfd1;
	}
}
</style>
