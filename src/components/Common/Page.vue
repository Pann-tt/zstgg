<template>
 <div class="paging" id="displayPag">
  <el-pagination
    hide-on-single-page
          @prev-click="prevPage(pageId)"
          @next-click="nextPage(pageId)"
       @size-change="handleSizeChange"
       @current-change="handleCurrentChange"
       :current-page.sync="$store.state.pageId"
       :page-size="5"
       layout="prev, pager, next, jumper"
       :total="pages.count">
     </el-pagination>
 </div>
</template>

<script>
export default {

  name: 'Page',
  props:['pages'],
  data() {
    return {
      
    };
  },
  methods:{
      handleSizeChange(val) {

      },
      handleCurrentChange(val){
       this.$store.commit('isPage',1);
       this.$parent.getNews(this.$store.state.pageId);
        this.$store.commit('isPage',val);
        this.$parent.getNews(this.$store.state.pageId);
      },
      // 下一页
     nextPage(pageId){       
         this.pageId++;
         this.$store.commit('isPage',this.$store.state.pageId);
         this.$parent.getNews(this.$store.state.pageId);
                    
     },
     //上一页
     prevPage(pageId){
         this.pageId--;
         this.$store.commit('isPage',this.$store.state.pageId);
         this.$parent.getNews(this.$store.state.pageId);         
     },
   
 
}

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