<template>
<div>
	<div class="my_dingdan">
			<p>我的订单<i>查看全部</i><i class="icon iconfont icon-jiantou-copy-copy"></i></p>		
	</div>
	<div class="personal_row flex_between">
		<a href="index.html" class="mui-col-xs">
			<div>
				<p><i class="icon iconfont icon-waitpayment"></i></p>
				<p>待付款</p>
			</div>
		</a>
		<a href="商品模式/商品模式.html" class="mui-col-xs">
			<div >
				<p><i class="icon iconfont icon-1106"></i></p>
				<p>待分享</p>
			</div>
		</a>
		<a href="" class="mui-col-xs">
			<div>
				<p><i class="icon iconfont icon-yunying1"></i></p>
				<p>待发货</p>
			</div>
		</a>
		<a href="" class="mui-col-xs">
			<div>
				<p><i class="icon iconfont icon-zhuye" ></i></p>
				<p>待收货</p>
			</div>
		</a>
		<a href="" class="mui-col-xs">
			<div>
				<p><i class="icon iconfont icon-liuyan" ></i></p>
				<p>待评价</p>
			</div>
		</a>	
	</div>	
</div>	
</template>

<script>
</script>

<style scoped>
.my_dingdan {
    height: 2.9rem;
    font-size: 1.2rem;
    line-height: 2.9rem;
    padding: 0 0.8rem;
}
.my_dingdan p{
	display: flex;
	justify-content: space-between;
}
.my_dingdan i:nth-child(1) {
    position: absolute;
    right: 1.6rem;
    color: grey;
}
.icon-jiantou-copy-copy {
    right: 2px;
    position: absolute;
}
.personal_row {
    border-top: 0.08rem solid lightgray;
    border-bottom: 0.08rem solid lightgray;
}

.personal_row div {
    color: #333333;
    padding: 0.41rem 0.8rem;
    text-align: center;
    margin-top: 0.4rem;
}
.personal_row div p {
    font-size: 0.8rem;
}
.personal_row div p i {
    font-size: 1.7rem;
}	
</style>