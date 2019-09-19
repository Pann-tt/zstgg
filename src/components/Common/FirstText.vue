<template>
	<div class="firsttextouter">
	  	<div class="title">{{title}}</div>
	  	<div class="describe">{{des}}</div>
	  	<div class="line"></div>
	</div>
</template>

<script>
export default {

  name: 'FirstText',
  props:['title','des'],
  data() {
    return {

    };
  },
};
</script>

<style lang="css" scoped>
 .firsttextouter{
  text-align: center;
  margin:30px 0;
 }
 .firsttextouter div{
  margin-bottom: 20px;
 }
 .firsttextouter .title{
  font-size: 34px;
 }
 .firsttextouter .line{
  width:35px;
  height: 6px;
  border-bottom: 2px solid rgb(29,207,209);
  display:inline-block;
 }
 .firsttextouter .describe{
     font-style:italic;
  color:rgb(152,162,164);
  font-size:20px;
 }
</style>
