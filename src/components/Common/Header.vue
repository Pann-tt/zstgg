<template>
	<el-container>
      	<el-header height ='130px' >
            <div class="mainHeader">
                <div class="nav-left">
                    <img src="../../assets/images/logo.png">
                </div>
                <div class="nav-right">
                    <ul>
                      	<li v-for='(list,index) in Headerlist' :key='list.id' @click='bgcAdd(index)' :class="{active:index==current}">
                        	<router-link :to='{name:list.name}'>{{list.title}}</router-link>
                      	</li>
                    </ul>
                </div>
            </div>
      	</el-header>
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
		    index:0,
      	};
    },
    methods:{
    	bgcAdd(index){
    		this.$store.state.pageId=1;
      		this.current=index;
      		this.$store.state.page=1;

      		console.log(this.$store.state.isname);

    	},
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
  	}
};
</script>

<style lang="css" scoped>
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
</style>
