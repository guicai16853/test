<template>
<div>
	<yd-slider autoplay="4000" speed="800" >   	
		    <yd-slider-item v-for="(item,index) in slider" :key="index">
		            <img :src="item.pic">	      
		    </yd-slider-item>
	</yd-slider>
	
	<div class="produce_content_base">
		<h6 class="mt10 fs15">陕西红富士苹果 1kg/份</h6>
		<p class="grey fs11 mt10">
			<span>品牌：山西牌</span>
			<span class="inlineblock ml5">类型：洛阳红富士</span>
			<span class="inlineblock ml5">编号：0052</span>
		</p>
		<p class="grey fs11 mt10">
			<span>月销 3339 笔</span>
			<span class="inlineblock ml10">库存 28件</span>
			<span class="inlineblock ml10">产地：洛阳</span>
		</p>
		<p class="grey fs11 mt10">
			<span class="red_btn">秒杀</span>
			<span class="inlineblock ml5 red"><i class="fs12">￥</i>200.00</span>
			<span class="inlineblock ml5 grey"><i class="fs12 through">￥399.00</i></span>
			<span class="inlineblock ml5">可抵扣购物币0.00元</span>
		</p>
		<p class="grey fs11 mt10">
			<span>运费：10元</span>
			<span class="inlineblock ml5">配送费：1公里以内5元 自取免费</span>
		</p>
	</div>
	
	<div class="produce_content_base">
		<div class="flex flex_start fs11">
			<div class="grey nowarpp" style="width: 50px;">送至：</div>
			<div class="flex11auto">
				<p>
					<i class="icon iconfont icon-location red"></i>
					<span class="inlineblock ml5">重庆 江北区 寸滩镇</span>
				</p>
				<p class="fs11 mt10">
					<span class="red">现货</span>&nbsp;23:00前完成下单，预计明天(02月05日)送达
				</p>
			</div>
		</div>
		<div class="mt10 fs11 grey">
			<span>重量：13.39kg</span>
			<span class="inlineblock ml10">体积：124cm³</span>
		</div>
	</div>	
</div>	
</template>

<script>
export default {
	props:{
		
	},
  	data () {
      return {  
		slider:[
			{pic: require("../../../../static/img/pic2.jpg")},
			{pic: require("../../../../static/img/pic3.jpg")},
			{pic: require("../../../../static/img/pic2.jpg")},
		],
		}
    }
}
</script>

<style scoped>
.yd-slider{
	height: 240px;
}		
.produce_content_base {
    padding: 1.25rem 0.8333333333333334rem;
    background: #fff;
    overflow: hidden;
}
.red_btn {
    padding: 0.16666666666666666rem 0.25rem;
    background: #FF5959;
    color: #fff;
    font-size: 1rem;
    font-weight: normal;
    border-radius: 0.16666666666666666rem;
}
</style>