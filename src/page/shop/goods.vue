<template>
<div class="goods bcwhite">
	<div class="one">
	    <yd-tab active-color="#00B7EE">
	        <yd-tab-panel label="商品"><goodsindex></goodsindex></yd-tab-panel>
	        <yd-tab-panel label="详情"></yd-tab-panel>
	        <yd-tab-panel label="评价"></yd-tab-panel>
	    </yd-tab>
	</div> 

	<shopNav v-on:showbottom1="showbottom123"></shopNav>

	<yd-popup v-model="showbottom" position="bottom" height="30%">
          <div class="confirm">
			  <div class="goods pd08">
				  <div class="left flex aItemCenter">
				 		<img style="width:6.5rem;height:6rem" src="../../../static/img/pic3.jpg">
						<div class="msg ml10">
							<span class="red">￥2.00</span>
							<p>库存： 188件</p>
						</div>
				  </div>
				  <div class="flex flex_between mt10">
					  <h1 class="fs12">购买数量</h1>
					  <numSelect></numSelect>
				  </div>
			  </div>
			  <router-link to="/firmOrder">
			  <div class="btn_sure">
				  <p>确定</p>
			  </div>
			  </router-link>
		  </div>
	</yd-popup>
</div>	
</template>

<script>
import goodsindex from '../../components/shop/goods/goodsindex'	
import shopNav from '../../components/common/shopNav'
import numSelect from '../../components/common/numSelect'
export default {
	data() {
		return {
			showbottom: false,
		}
	},
    components:{
       goodsindex,
	   shopNav,
	   numSelect
	},
	methods:{
		showbottom123(){	
		 this.showbottom = true
		},
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
.btn_sure{
	position: fixed;
	bottom: 0
}
</style>