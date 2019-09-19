<template>
  <div class="waterfall-wrapper">
    <!-- 左边 -->
    <ul class="left-waterfall" ref="left">
      <li class="item" v-for="(item, index) in leftItems" :key="item.id">
        <my-thirdAnimation :item="item"></my-thirdAnimation>
      </li>
    </ul>
    <!-- 中间 -->
    <ul class="center-waterfall" ref="center">
      <li class="item" v-for="(item, index) in centerItems" :key="item.id">
        <my-thirdAnimation :item="item"></my-thirdAnimation>
      </li>
    </ul>
    <!-- 右边 -->
    <ul class="right-waterfall" ref="right">
      <li class="item" v-for="(item, index) in rightItems" :key="item.id">
        <my-thirdAnimation :item="item"></my-thirdAnimation>
      </li>
    </ul>
    
  </div>
</template>

<script>
export default {
  data () {
    return {
      leftItems: [
          {id:1,imgSrc:require('../../assets/images/left1.jpg'),text:"从摄影的角度看世界"},
          {id:2,imgSrc:require('../../assets/images/left2.jpg'),text:"那些色彩纷呈的导向页"},
          {id:3,imgSrc:require('../../assets/images/left3.png'),text:"UI不是对立而是共生"},
      ],
      centerItems: [
          {id:1,imgSrc:require('../../assets/images/center1.jpeg'),text:"UI不是对立而是共生"},
          {id:2,imgSrc:require('../../assets/images/center2.png'),text:"好想立刻跳进海里"},
          {id:3,imgSrc:require('../../assets/images/center3.png'),text:"从摄影的角度看世界"},
      ],
      rightItems: [
          {id:1,imgSrc:require('../../assets/images/right1.jpeg'),text:"那些色彩纷呈的导向页"},
          {id:2,imgSrc:require('../../assets/images/right2.jpg'),text:"UI不是对立而是共生"},
          {id:3,imgSrc:require('../../assets/images/right3.png'),text:"好想立刻跳进海里"}, 
      ]
    }
  },
};
</script>

<style lang="css" scoped>
  .waterfall-wrapper{
    width: 88%;
    /*height:2000px;*/
    /*background-color: pink;*/
    margin: 0 auto;
  }
  ul {
    width:360px;
    margin: 0 17.5px;
  }

  ul.left-waterfall {
    width:360px;
    float: left;
  }
  ul.center-waterfall{
    float: left;
  }
  ul.right-waterfall {
    float: left;
  }

  li.item {
    width: 360px;
  }

</style>
