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
      	};
    },
    methods:{
    	bgcAdd(index){
    		this.$store.state.pageId=1;
      		this.current=index;
      		this.$store.state.page=1;
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
  	}
};
</script>

<style lang="css" scoped>
</style>
