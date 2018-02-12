<template>
<div class="shopsubnav">
	<div class="one">
	    <yd-tab active-color="#00B7EE">
	        <yd-tab-panel label="店铺简介"></yd-tab-panel>
	        <yd-tab-panel label="分类" ></yd-tab-panel>
	        <yd-tab-panel label="全部宝贝"></yd-tab-panel>
	        <yd-tab-panel label="上新"></yd-tab-panel>
	        <yd-tab-panel label="评价"></yd-tab-panel>
	    </yd-tab>
    </div>
    
    <div class="two">
	    <yd-tab active-color="#00B7EE" >
	        <yd-tab-panel label="推荐" ></yd-tab-panel>
	        <yd-tab-panel label="销量" ></yd-tab-panel>
	        <yd-tab-panel label="价格"></yd-tab-panel>
	        <yd-tab-panel label="好评"></yd-tab-panel>
	        <yd-tab-panel label="最新"></yd-tab-panel>
	    </yd-tab>	
    </div>
    
</div>	
</template>

<script>
	export default {
	props:{
		
		
		
	},
	data(){
		return{
			
		}
	}
	}
</script>

<style>
.shopsubnav .one{
	padding: 0 1.5rem;
}
.shopsubnav .two .yd-tab-nav-item{
	font-size: 0.95rem;
}
.shopsubnav .yd-tab-nav-item {
    line-height: 3.3rem;
    font-size: 1.2rem;
}	

</style>