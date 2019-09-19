<template>
  <div id="app"> 
    <!-- 导航区域 -->
    <div class="head">
      <Header />
    </div>
     <router-view/>  
    <!-- 脚部 -->
    <Footer />
      
  </div>
</template>

<script>
import Header from '@/components/Common/Header.vue'
export default {
  name: 'App',
  components:{
    Header,
  },
  created(){
    let loading=document.getElementById('loading')
    if(loading != null){
      document.body.removeChild(loading);
    }
  }
};
</script>

<style>
</style>

