<template>
<div>
	<div class="produce_top_nav pb7 flex aItemCenter">
		<p class="fl fs20" style="width: 15%;"><i class="iconfont icon-fanhui2"></i></p>
		<p class="flex flex_center produce_top fl">
			<i class="fs14">确认订单</i>
		</p>
		<p class="fl" style="width: 15%;"></p>
		<div class="clearfix"></div>
	</div>
	
	<div class="shouhuo_info">
		<div class="left">
			<i class="iconfont icon-location"></i>
		</div>
		<div class="right">
			<p class="fs14 flex flex_between">
				<span>收货人：王晓</span>
				<span>19899888888</span>
			</p>
			<p class="lh18 fs12 mt10 flex flex_between">
				<span>收货地址：重庆是重庆加班达到零零落落零零落落零零落落了首创鸿恩</span>
				<i class="iconfont icon-jiantou-copy-copy grey fs18"></i>
			</p>
		</div>
	</div>
	<div class="shouhuo_border_img"></div>
	
	<div class="dianpu_dingdan">
		<div class="flex aItemCenter">
			<img src="../../../static/img/home_icon.png" width="22" height="22" class="radius50" />
			<b class="ml5 fs12">鲜果生鲜店</b>
		</div>
		<div class="flex aItemCenter mt10">
			<div class="border_back">
				<img src="../../../static/img/home_icon.png" width="92" height="92" />
			</div>
			<div class="ml10">
				<p class="fs14 lh20"><span class="red_btn">秒杀</span>【洛川苹果】2018新鲜农家设哪些红富士水果10斤包</p>
				<p class="grey fs12 mt5">颜色：21#复古色；尺寸：M</p>
				<p class="mt5 flex flex_between aItemCenter">
					<span>
						<i class="red fs14"><span class="fs10">￥</span>68.90</i>&nbsp;
						<i class="grey_light through fs10">￥13.9</i>
					</span>
					<span>x3</span>
				</p>
			</div>
		</div>
	</div>
	
 	<div class="dingdan_lists">
		<div class="border_bottom">
			此商品性质不支持7天退货
		</div>
		<div class="border_bottom flex flex_between">
			<span>配送方式</span>
			<p class="flex aItemCenter">
				<span>自取&nbsp;免邮</span>
				<span class="iconfont grey fs18 icon-jiantou-copy-copy"></span>
			</p>
		</div>
		<div class="border_bottom flex flex_between">
			<span>配送时间</span>
			<span>16:00前付款，预计1月23日(周一)送达</span>
		</div>
		<div class="border_bottom  flex flex_between">
			<span>运费险</span>
			<span class="iconfont grey fs20 icon-jiantou-copy-copy"></span>
		</div>
		<div class="border_bottom flex flex_between">
			<p style="width: 60px;flex: 0 1 auto;">买家留言</p>
			<input type="text" placeholder="选填：对本次交易的说明(建议填写已和卖家进行的交易)" name="" id="" value="" style="flex: 1 1 auto;" />
		</div>
		<div class="border_bottom flex flex_end">
			共1件商品&nbsp;小计：&nbsp;<span class="red"><i class="fs10">￥</i>68.80</span>
		</div>
	</div>
	
	<div class="mt10 pl10 white_bac">
		<div class="dingdan_items">
			<span>邀请码填写</span>
			<input type="text" class="radius5 h30 plr10 grey_border" name="" id="" value="" />
		</div>
		<div class="dingdan_items">
			<div class="lh18">
				<span>可抵扣购币<i class="red">￥13.9</i></span><br/>
				<span class="grey">抵用规则</span>
			</div>
			<div class="bg_con pt15">
				<input id="checked_1" type="checkbox" class="switch" />
				<label for="checked_1"></label>
			</div>
		</div>
		<div class="dingdan_items">
			<div>现金余额<span class="red">￥13.9</span></div>
			<div class="bg_con pt15">
				<input id="checked_2" type="checkbox" class="switch" />
				<label for="checked_2"></label>
			</div>
		</div>
	</div>
	
	<div class="dingdan_footer flex_end">
		<span>合计：<span class="red"><i class="fs10">￥</i>68.80</span></span>
		<span class="huanren_submit">更换支付账号</span>
		<span class="dingdan_submit">提交订单</span>
	</div>
</div>	
</template>

<script>
</script>

<style scoped>
.shouhuo_info {
    background: #fff;
    padding: 1.5rem 0;
    display: flex;
    justify-content: flex-start;
}
.shouhuo_info .left {
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
}
.shouhuo_info .right {
    width: 75%;
}	
.shouhuo_border_img {
    width: 100%;
    height: 0.5rem;
    background: url(../../../static/img/bac_wuliu.png) repeat-x;
}
.dianpu_dingdan {
    background: #F0F0F0;
    padding: 1.25rem;
}
.dingdan_lists {
    border-bottom: 0.083rem solid #E8E8E8; 
    padding-left: 0.84rem;
}
.dingdan_lists .border_bottom {
    height: 3.35rem;
    line-height: 3.35rem;
    padding-right: 0.84rem;
}
.dingdan_items {
    border-bottom: 0.083rem solid #E8E8E8;
    height: 4.17rem;
    line-height: 4.17rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 0.84rem;
}
.white_bac{
	margin-bottom: 5.5rem;
}
.dingdan_footer {
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    background: #fff;
    border-top: 0.08333333333333333rem solid #E8E8E8;
}
.huanren_submit {
    background: orange;
    color: #fff;
    width: 9.166666666666666rem;
    padding: 1.25rem 0;
    text-align: center;
    font-size: 1.1666666666666667rem;
    margin-left: 1.1666666666666667rem;
    margin-right: -1.1666666666666667rem;
}
</style>