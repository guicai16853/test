<template>
<div>
	<div class="shop-info flex flex_between aItemCenter">
		
		<div class="left flex">
			<div class="shop-pic">
				<img src="../../../static/img/home_icon.png" />
			</div>
			<div class="name ml5">
				<p class="flex">
					<b style="width: 55px;" class="fs12">益生心生鲜店</b>
					<span class="flex flex_start fs18">
						<i class="icon iconfont icon-renzheng1 yellow"></i>
						<i class="icon iconfont icon-yunying1 orange"></i>
					</span>
			    </p>
				<p>
					<i class="icon iconfont icon-taiyang yellow"></i>
					<i class="icon iconfont icon-taiyang yellow"></i>
					<span class="grey fs12 inlineblock">100m</span>
				</p>
			</div>
		</div>
		
		<div class="right flex">
			<div>
				<p class="fs15 magenta"><i class="icon iconfont icon-aixin"></i></p>
				<p class="grey fs10">320</p>
			</div>
			<div>
				<p class="fs15 red"><i class="icon iconfont icon-bianqian"></i></p>
				<p class="grey fs10">便签墙</p>
			</div>
			<div>
			 <router-link to="/setupShop">
				<p class="fs15 light_blue"><i class="icon iconfont icon-dianpu"></i></p>
				<p class="grey fs10">我也要开店</p>
			</router-link>	
			</div>
		</div>		
	</div>	
	
	<div class="announcement ">
		<div class="wrap flex flex_between aItemCenter ml15" >
			<p>公告</p>
		    <yd-rollnotice autoplay="2000">
		        <yd-rollnotice-item><span style="color:#F00;"> 荐 </span>荣耀V9 3月超级钜惠！</yd-rollnotice-item>
		        <yd-rollnotice-item><span style="color:#F00;"> 荐 </span>3.23京东超级品牌日格力盛典</yd-rollnotice-item>
		        <yd-rollnotice-item><span style="color:#F00;"> 荐 </span>京东服饰 早春新品低至7折</yd-rollnotice-item>
		    </yd-rollnotice>
	    </div>
    </div>
    
	<div>
	  	   <yd-search v-model="value1" :on-submit="submitHandler"></yd-search>
    </div>
</div>	
</template>

<script>
</script>

<style scoped>
.shop-home .shop-info {
padding: 0.8rem 0 1.25rem 1.6rem;
}
.shop-home .shop-info .left .shop-pic{
	width: 4rem;
	height: 4rem;
}
.shop-home .shop-info .right p {
    text-align: center;
    margin-right: 0.8rem;
}
.announcement{
	padding: 0.4rem 1.6rem;
    border-top: 1px solid #F0F0F0;
}
.announcement .wrap p{
	padding: 0.16rem 0.3rem;
    background: #00B7EE;
    margin-right: 0.83rem;
    text-align: center;
    color: white;
    display: inline-block;
    white-space: nowrap;
}
</style>