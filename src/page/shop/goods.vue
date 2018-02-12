<template>
<div class="goods bcwhite">
	<div class="one">
	    <yd-tab active-color="#00B7EE">
	        <yd-tab-panel label="商品"><goodsindex></goodsindex></yd-tab-panel>
	        <yd-tab-panel label="详情"></yd-tab-panel>
	        <yd-tab-panel label="评价"></yd-tab-panel>
	    </yd-tab>
	</div> 
	<shopNav></shopNav>
</div>	
</template>

<script>
import goodsindex from '../../components/shop/goods/goodsindex'	
import shopNav from '../../components/common/shopNav'
export default {
    components:{
       goodsindex,
       shopNav
    }
	
}	
</script>

<style> 
.goods .one .yd-tab-nav{
	width: 50%;
	margin: 0 auto;
}
.goods .one .yd-tab-nav-item{
	font-size: 1.35rem;
	line-height: 3.3rem;
}	
</style>