<template>
	<div class="paging" id="displayPag">
		<el-pagination
			hide-on-single-page
			@prev-click="prve(page)"
			@next-click="next(page)"
	      	@current-change="handleCurrentChange"
	      	:current-page.sync="$store.state.page"
	      	:page-size="5"
	      	layout="prev, pager, next, jumper"
	      	:total="11">
	    </el-pagination>
	</div>
</template>

<script>
export default {

  name: 'pag',

  data() {
    return {
    	page:1,
    	currentPage:1,
    	leftItems: [],
	    centerItems: [],
	    rightItems: [],
	    productList:[],
    };
  },
  	methods: {
      	handleCurrentChange(val) {
      		this.$store.commit('ispage',val)
        	this.$parent.getproductList(this.page);
     	},
      	prve(page){
      		this.page--;
      		this.$store.commit('ispage',this.page)
      		console.log(this.$store.state.page)
      		this.$parent.getproductList(this.page);

      	},
      	next(page){
	      	this.page++;
	      	this.$store.commit('ispage',this.page)
	      	console.log(this.$store.state.page)
	      	this.$parent.getproductList(this.page);
      	},
  	},
};
</script>

<style lang="css">
	#displayPag{
		width: 100%;
		margin: 20px 0;
	}
	.el-pagination{
		width:500px;
	}
	#displayPag>.el-pagination .el-pagination__jump{
		height:35px;
	}
	#displayPag>.el-pagination .el-input__inner{
		height: 35px;
	}
	#displayPag>.el-pagination button{
		height: 35px;
		line-height: 35px;
	}
	#displayPag>.el-pagination .el-pager li{
		height: 35px;
		line-height: 35px;
	}
</style>
