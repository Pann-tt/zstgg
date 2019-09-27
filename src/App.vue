<template>
  <div id="app"> 
    <div id="target"></div>
    <!-- 导航区域 -->
    <Header />
    <div class="head">
      <Header />
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
.head{
  width: 100%;
  /*height: 130px;*/
}
.slideTop{
  widows: 40px;
  height: 60px;
  position: fixed;
  bottom: 40px;
  right: 20px;
}
</style>

