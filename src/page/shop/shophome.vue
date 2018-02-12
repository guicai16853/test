<template>
<div class="shop-home bcwhite">
	<!-- 顶部导航    -->
    <yd-slider autoplay="4000" speed="800" style="height: 120px;"> 	
	    <yd-slider-item v-for="item in slider"> 
            <img :src="item.pic">	      
	    </yd-slider-item>
	</yd-slider>
	
	<shopInfo></shopInfo>
	
	<subNav></subNav>
	
	<goodsInfo></goodsInfo>
	
	<evaluate></evaluate>
</div>
</template>

<script>
import shopInfo from '@/components/shop/shop-info';	
import subNav from '@/components/shop/sub-nav';
import goodsInfo from '@/components/shop/goods-info';	
import evaluate from '@/components/shop/evaluate';	
	export default{
  	components: {
    	shopInfo,
    	subNav,
    	goodsInfo,
    	evaluate
  	},
	data(){
		return{
			slider:[
			{pic: require("../../../static/img/home_icon.png")},
			{pic: require("../../../static/img/home_icon.png")},
			{pic: require("../../../static/img/home_icon.png")},
			]
				
		}
	},
	
	
	}
</script>

<style scoped>

</style>