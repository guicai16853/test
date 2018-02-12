<template>
<div class="bcwhite">
	<div class="myorder">
	 	<yd-tab active-color="#00B7EE">
			<yd-tab-panel label="全部"><all></all></yd-tab-panel>
	        <yd-tab-panel label="代付款"></yd-tab-panel>
	        <yd-tab-panel label="代发货"></yd-tab-panel>
	        <yd-tab-panel label="待收货"></yd-tab-panel>
	        <yd-tab-panel label="待评价"></yd-tab-panel>        
	    </yd-tab>
    </div>
</div>	
</template>

<script>
import all from '@/components/order/myorder/all';
export default{
  	components: {
  		all,
  	}
}  	
</script>

<style>
.myorder .yd-tab-nav-item {
    line-height: 3.3rem;
    font-size: 1rem;
}	
</style>