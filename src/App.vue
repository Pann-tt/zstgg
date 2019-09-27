<template>
  <div id="app"> 
    <div id="target"></div>
    <Header />
    
    <!-- 导航区域 -->
    <div class="head">
      
    </div>
    
    <router-view :key="key"/>
      <Footer />
      <div class="slideTop">
        <my-slide />
      </div>
  </div>
</template>

<script>
import Header from '@/components/Common/Header.vue'
export default {
  name: 'App',
  components:{
    Header,
  },
  computed: {
    key() {
        return this.$route.name !== undefined? this.$route.name +new Date(): this.$route +new Date()
    }
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
/*手机*/
@media screen and (max-width: 767px){
  .clear{ clear:both}
  .head{
    width: 100%;
    height: 60px;
  }
  .slideTop{
    widows: 40px;
    height: 40px;
    position: fixed;
    bottom: 40px;
    right: 40px;
  }
}
/*其他*/
@media screen and (min-width: 768px){
  .clear{ clear:both} 
  .head{
    width: 100%;
    height: 130px;
  }
  .slideTop{
    widows: 40px;
    height: 60px;
    position: fixed;
    bottom: 40px;
    right: 20px;
  }
}
</style>

