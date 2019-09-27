<template>
	<div  class="secouter">
		<div class="container">
			<div class="title">{{title}}</div>
			<div class="right">
				<span>智尚科技</span>&nbsp;&nbsp;&nbsp;
				<span>{{title}}</span>
			</div>
		</div>	
	</div>
</template>

<script>
export default {

  name: 'SecondText',
  props:['title'],
  data() {
    return {

    };
  },
};
</script>