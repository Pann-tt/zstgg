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