<template>
<router-link to="/goods">
   <div class="pro_lists">
		<div class="left">
			<img src="../../../static/img/pic8.jpg"/>
		</div>
		<div class="right">
			<h5 class="lh20">
				<i class="red_btn">秒杀</i>
				山西洛阳苹果红富士苹果水果40枚75送礼礼盒新鲜水果苹果包邮
			</h5>
			<p class="mt5 grey">
				<span>品牌：山西牌</span>&nbsp;
				<span>分类：生鲜蔬果</span>&nbsp;&nbsp;
				<span>编号：000012</span>
			</p>
			<div class="flex flex_between">
				<div class="">
					<p class="mt5">
						<span class="red">¥15.99</span>&nbsp;
						<span class="grey_light">¥<i class="through">8.50</i></span>
						<span class="inlineblock ml10">可抵扣物币5.00元</span>
					</p>
					<p class="mt10">
						<span>月销12笔</span>
						<span>5公里内5元起配</span>
					</p>
				</div>
				<div class="flex aItemCenter">
					<i class="iconfont icon-dianpu-gouwuche stor_gouwu"></i>
				</div>
			</div>
		</div>
	</div>
</router-link>	
</template>

<script>
</script>

<style scoped>
.pro_lists {
    padding: 0.8rem 0.8rem;
    border-bottom: 0.083rem solid #E6E6E6;
    display: flex;
    justify-content: flex-start;
}
.pro_lists .left img {
    width: 8.2rem;
    height: 7.2rem;
}
.pro_lists .right {
    margin-left: 0.41rem;
    flex: 1 1 auto;
    width: 50%;
    font-size: 1rem;
}	
.red_btn {
    padding: 0.16rem 0.25rem;
    background: #FF5959;
    color: #fff;
    font-size: 1rem;
    font-weight: normal;
    border-radius: 0.16rem;
}
</style>