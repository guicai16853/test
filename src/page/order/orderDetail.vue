<template>
<div>

	<div class="order bcwhite">
		<div class="orderhead flex aItemCenter">
			<p class="flex aItemCenter">
				<img src="../../../static/img/home_icon.png" style="width: 22px; height: 22px;" class="radius50" />
				<b class="ml10 fs11">鲜果生鲜店</b>
			</p>
		</div>
		<div class="pd08">
			<div class="flex aItemCenter mt10 pd-bottom08 bdd">
				<div class="border_back">
					<img src="../../../static/img/home_icon.png" style="width: 7.3rem;height: 7.3rem;" />
				</div>
				<div class="ml10">
					<p class="fs12 lh20">【洛川苹果】2018新鲜农家设哪些红富士水果10斤包</p>
					<p class="grey  mt5">颜色：21#复古色；尺寸：M</p>
					<p class="fs12 red mt5">￥13.9x1</p>
				</div>
			</div>
			<div class="flex flex_between ptb05 aItemCenter bdd">
				<div class="fs10">
					<p>商品金额总计：</p>
					<p class="mt05">运费</p>
				</div>
				<div class="bold fs12">
					<p>￥13.9</p>
					<p class="mt5">￥13.9</p>
				</div>
			</div>
			<div class="pt08 fs10 flex flex_between aItemCenter">
				<span>合计：</span>
				<span class="fs12 red">￥13.9</span>
			</div>
		</div>
    </div>
	<div class="detaile_common">
		<p class="left0">
			<i class="iconfont icon-liuyan light_blue mr10"></i>联系卖家
		</p>
		<p>
			<i class="iconfont icon-phone light_blue  mr10"></i>拨打电话
		</p>
    </div>
		<div class="dingdan_detaile_list fs10 pd-bottom08">
			<div>
				<p class="grey">订单号</p>
				<p>98907898787876</p>
			</div>
			<div>
				<p class="grey">下单时间</p>
				<p>20117-08-28&nbsp;12:02:22</p>
			</div>
			<div>
				<p class="grey">预计送达时间</p>
				<p>预计01月23日送达</p>
			</div>
	    </div>
		<div class="footer_bar">
			<div>
				<span class="cansle_btn_base mr12 ">取消订单</span>
				<span class="sure_btn_pay">立即支付</span>
			</div>
	    </div>	   
</div>	
</template>

<script>
</script>

<style scoped>
.orderhead{
	padding: 1rem;
	border-bottom: 1px solid #EEEEEE;
}	
.detaile_common {
    border-top: 0.0833rem solid #E8E8E8;
    display: flex;
    justify-content: space-around;
    padding: 0.16rem 0;
    background: #fff;
}
.detaile_common > p {
    display: flex;
    justify-content: center;
    padding: 1rem 0;
    font-size: 1.167rem;
    align-items: center;
    cursor: pointer;
    width: 50%;
    border-left: 0.0833rem solid #E8E8E8;
}	
.detaile_common > p i{
	font-size: 1.65rem;
}
.dingdan_detaile_list {
    border-top: 0.0833rem solid #E8E8E8;
    border-bottom: 0.0833rem solid #E8E8E8;
    padding-left: 0.834rem;
    background: #fff;
}
.footer_bar {
    background: #fff;
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
    border-top: 0.0833rem solid #E8E8E8;
    z-index: 10;
}
.footer_bar > div {
    padding: 1.25rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}
</style>