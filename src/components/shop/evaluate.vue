<template>
<div class="shop-block">
	<div class="evaluate">
		<div class="left">
			<p class="red fs30" style="color: #FF5959;">4.9</p>
			<p class="grey fs14">综合评分</p>
			<p class="grey_light fs12 mt2">商家好评率96%</p>
		</div>
		<div class="right">
			<div class="flex flex_start aItemCenter">
				<p class="grey mt2 fs14">配送评分</p>
				<p class="stars">
					<i class="icon iconfont icon-xingzhuang60kaobei2"></i>
					<i class="icon iconfont icon-xingzhuang60kaobei2"></i>
					<i class="icon iconfont icon-xingzhuang60kaobei2"></i>
					<i class="icon iconfont icon-xingzhuang60kaobei2"></i>
					<i class="icon iconfont icon-xingzhuang60kaobei2"></i>
				</p>
				<p class="fs20 orange ml5 mt2" style="color: #FF5959;">4.9</p>
			</div>
			<div class="flex flex_start aItemCenter">
				<p class="grey mt2 fs14">商家评分</p>
				<p class="stars">
					<i class="icon iconfont icon-xingzhuang60kaobei2"></i>
					<i class="icon iconfont icon-xingzhuang60kaobei2"></i>
					<i class="icon iconfont icon-xingzhuang60kaobei2"></i>
					<i class="icon iconfont icon-xingzhuang60kaobei2"></i>
					<i class="icon iconfont icon-xingzhuang60kaobei2"></i>
				</p>
				<p class="fs20 orange ml5 mt2">4.9</p>
		    </div>
	    </div>
	</div>
</div>	
</template>

<script>
</script>

<style scoped>
.evaluate {
    padding: 1.25rem 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.evaluate .left {
    border-right: 0.08rem solid #C1C1C1;
    text-align: center;
    width: 30%;
    padding: 0 3%;
}
.fs30 {
    font-size: 2.5rem;
}
.evaluate .right {
    width: 68%;
    padding-left: 0.83rem;
}	
.icon-xingzhuang60kaobei2{
	color: #F4C837
}
.aItemCenter {
    align-items: center;
}
.fs14 {
    margin-right: 1.3rem;
}
.mt2{
	font-size: 1.4rem;
}

</style>