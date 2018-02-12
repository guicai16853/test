<template>
<div>
	<div class="produce_top_nav pb7 flex aItemCenter">
		<p class="fl fs20" style="width: 15%;"><i class="iconfont icon-fanhui2"></i></p>
		<p class="flex flex_center produce_top fl">
			<i class="fs14">收货地址</i>
		</p>
		<p class="fl" style="width: 15%;"></p>
		<div class="clearfix"></div>
	</div>	
	
	<div class="shouhuo_adress">
		<h4 class="fs14 pt15">漠然<span class="inlineblock ml15">179***9098</span></h4>
		<p class="grey fs14 mt5 lh20">重庆渝北区就将实话实说</p>
		<div class="border_top flex flex_between mt15 ptb10">
			<p class="flex aItemCenter">
				<i class="iconfont icon-yuanActive fs20 red "></i>
				<span class="inlineblock ml10 grey">默认地址</span>
			</p>
			<p class="grey fs14 flex">
				<span class="inlineblock mr10 flex aItemCenter">
					<i class="iconfont icon-bj fs18"></i>&nbsp;编辑
				</span>
				<span class="flex aItemCenter">
					<i class="iconfont icon-shanchu fs18"></i>&nbsp;删除
				</span>
			</p>
		</div>
	</div>

	<div class="dingdan_footer flex_center" style="background: none;border: none;">
			<span class="adress_submit radius3">
				<i class="fs18 iconfont icon-jia inlineblock mr15"></i>新建地址
			</span>
	</div>
</div>	
</template>

<script>
  export default {
  	  components: {
           
        }
  }
</script>

<style scoped>
.shouhuo_adress {
    background: #fff;
    padding: 0 0.84rem;
    margin-top: 0.84rem;
}
.dingdan_footer {
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    background: #fff;
    border-top: 0.083rem solid #E8E8E8;
}
.adress_submit {
    background: #FF463C;
    color: #fff;
    padding: 0.84rem 0;
    text-align: center;
    font-size: 1.33rem;
    width: 90%;
    margin-bottom: 0.84rem;
}
.radius3 {
    border-radius: 0.25rem;
}	
</style>