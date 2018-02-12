<template>
	<div class="produce_nav">
		<div class="gray_left">
			<p><i class="iconfont icon-1106" style="font-size: 1.5rem;"></i></p>
			<p class="fs10 mt2">商家</p>
		</div>
		<div class="gray_left">
			<p><i class="iconfont icon-dianpu"></i></p>
			<p class="fs10 mt2">店铺</p>
		</div>
		<div class="gray_left">
			<p><i class="iconfont icon-aixin"></i></p>
			<p class="fs10 mt2">收藏</p>
		</div>
		<div class="flex01auto flex flex_end" style="width: 200px;">
			<div class="buuton_right right_orange">加入购物车</div>
			<div class="buuton_right right_red">立即购买</div>
		</div>
	</div>	
</template>

<script>
</script>

<style scoped>
.produce_nav {
    width: 100%;
    height: 3.65rem;
    position: fixed;
    left: 0;
    bottom: 0;
    background: #F7F7F7;
    border-top: 0.0833rem solid #dedede;
    justify-content: space-between;
    align-items: center;
    display: flex;
}
.produce_nav .gray_left {
    color: #404040;
    text-align: center;
    flex: 1 1 auto;
}
.produce_nav .buuton_right {
    width: 8.34rem;
    height: 3.65rem;
    text-align: center;
    line-height: 3.65rem;
    color: #fff;
    font-size: 1.333rem;
}
.produce_nav .right_orange {
    background: #f98e1d;
}
.produce_nav .right_red {
    background: #fc3f47;
}	
.mt2 {
    margin-top: 0.16rem;
}
</style>