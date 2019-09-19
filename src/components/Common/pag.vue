<template>
	<div class="paging" id="displayPag">
		<el-pagination
	      @size-change="handleSizeChange"
	      @current-change="handleCurrentChange"
	      :current-page.sync="currentPage3"
	      :page-size="9"
	      layout="prev, pager, next, jumper"
	      :total="13">
	    </el-pagination>
	</div>
</template>

<script>
export default {

  name: 'pag',

  data() {
    return {
    	currentPage3:1,
    };
  },
  methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
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
