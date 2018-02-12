<template>
<div>
	<div class="dan_lists" v-for="item in Detail">
		<div class="flex aItemCenter flex_between bdd pd08">
			<p class="flex aItemCenter">
				<img src="../../../../static/img/home_icon.png" style="width:22px;height:22px;" class="radius50" />
				<b class="ml10 fs11">{{item.name}}</b>
				<i class="iconfont icon-jiantou-copy-copy fs12 grey ml5"></i>
			</p>
			<p class="light_blue">已送达</p>
		</div>
	
		<div class="pd08 lanlv_bac" >
			<div class="flex aItemCenter mt10" >
				<div class="border_back">
					<img :src="item.pic" width="92" height="92" />
				</div>
				<div class="ml10">
					<div class="flex flex_between">
						<div>
							<p class="fs10">{{item.introduce}}</p>
							<p class="grey fs10 mt05 mb05">{{item.size}}</p>
						</div>
						<div class="fs10">
							<p class="bold">￥13.9</p>
							<p class="through grey">￥13.9</p>
							<p>x3</p>
						</div>
					</div>
					<div class="flex flex_end aItemCenter">
						<span class="btn_grey_border mr08">评论晒图</span>
						<span class="btn_grey_border">退款/售后</span>
					</div>
				</div>
			</div>
		</div>
		<div class="pd08 flex flex_end aItemCenter bdd">
			共1件商品&nbsp;合计：<b class="fs10">￥69.90</b>（含运费￥0.00）
		</div>
		<div class="ptb05 bdd flex flex_end pr08">
			<span class="cansle_btn_base">取消订单</span>
		</div>
    </div>
</div>	
</template>

<script>
export default {

	data(){
		return {	
			Detail:[
			{
			  name:'鲜果生鲜店',
			  pic:require("../../../../static/img/home_icon.png"),
			  introduce:'【洛川苹果】2018新鲜农家设哪些红富士水果10斤包',
			  size:'颜色：21#复古色；尺寸：M',
			  price:'13.9',			  
			},
			{
			  name:'鲜果生鲜店',
			  pic:require("../../../../static/img/home_icon.png"),
			  introduce:'【洛川苹果】2018新鲜农家设哪些红富士水果10斤包',
			  size:'颜色：21#复古色；尺寸：M',
			  price:'13.9',			  
			},
			{
			  name:'鲜果生鲜店',
			  pic:require("../../../../static/img/home_icon.png"),
			  introduce:'【洛川苹果】2018新鲜农家设哪些红富士水果10斤包',
			  size:'颜色：21#复古色；尺寸：M',
			  price:'13.9',			  
			},
			]		
		}
	},
}	
</script>

<style scoped>
.btn_grey_border {
    display: inline-block;
    border: 1px solid #787878;
    padding: 0.25rem 0.416rem;
    font-size: 1.16rem;
    color: #555;
    border-radius: 0.33rem;
    cursor: pointer;
}
.cansle_btn_base {
    display: inline-block;
    border: 1px solid #333;
    padding: 0.41rem 0.83rem;
    color: #666666;
    border-radius: 0.41rem;
    font-size: 1.1rem;
    cursor: pointer;
}
</style>