<template>
<div class="personal-home bcwhite">	
	<div class="personal-header bc-blue pd-header white">
		<div class="top flex_between fs15">
			<a href="javascript:;"><i class="icon iconfont icon-saoma fs24 white"></i></a>
			<router-link to="/set"><i class="icon iconfont icon-ttpodicon fs24 white"></i></router-link>
		</div>
		<div class="content flex_between mt06 aItemCenter">
			<div class="left flex">
				<div class="photo">
					<img src="../../static/img/home_icon.png" />
					<p class="photo-label">待实名认证</p>
				</div>
				<div class="ml20 personal-info">
					<p>
						<b class="fs18">然</b>&nbsp;&nbsp;
						<i class="icon iconfont icon-xingbie-nan"></i>&nbsp;&nbsp;
						<span>第一天</span>
					</p>
					<p>134*****4567</p>
					<p>第68位用户</p>
					<p>
						<a class="button" style="color: white;" href="javascript:;">签到</a>
					</p>
				</div>
			</div>
			<div class="right">
				<a href="javascript:;">
					<p class="icon iconfont icon-shoufukuan fs36 white"></p>
					<p class="fs12 white">收付款</p>
				</a>
			</div>
		</div>
	</div>
	
	<div class="personal-code flex_between fs12">
		<div>
			<p><span class="red">20.00</span>元</p>
			<p>购物币<span class="light_blue">[明细]</span></p>
		</div>
		<div>
			<p><span class="red">100.00</span>元</p>
			<p>现金<span class="light_blue">[明细]</span></p>
		</div>
		<div>
			<p><span class="red">D123455</span></p>
			<p>店铺号<span class="light_blue">[进入]</span></p>
			<p>邀请码<span class="light_blue">[进入]</span></p>
		</div>
		<div style="border-right: none;">
			<a href="javascript:;"><i class="icon iconfont icon-zuji fs30 light_blue"></i></a>
			<p style="font-size: 1.1rem">我的足迹</p>
		</div>	
	</div>	
	
	<userNav></userNav>
	
	 <div class="personal-section pl15 mb50">
		<div>
			<a href="javascript:;">
				<p><i class="icon iconfont icon-dizhiguanli fs18" style="color: #00b7ee;"></i>&nbsp;地址管理</p>
				<p class="grey"><i class="icon iconfont icon-jiantou-copy-copy"></i></p>
			</a>
		</div>
		<div>
			<a href="javascript:;">
				<p><i class="icon iconfont icon-bianqian fs18" style="color: #ff80c2;"></i>&nbsp;订单管理</p>
				<p class="grey"><i class="icon iconfont icon-jiantou-copy-copy"></i></p>
			</a>
		</div>
		<div>
			<a href="../shop/shopManagement.html">
				<p><i class="icon iconfont icon-dianpu fs18" style="color: #fed341;"></i>&nbsp;店铺管理</p>
				<p class="grey"><i class="icon iconfont icon-jiantou-copy-copy"></i></p>
			</a>
		</div>
		<div>
			<a href="javascript:;">
				<p><i class="icon iconfont icon-dianpurenzheng fs18" style="color: #fca024;"></i>&nbsp;店铺认证</p>
				<p class="grey"><i class="icon iconfont icon-jiantou-copy-copy"></i></p>
			</a>
		</div>
		<div>
			<a href="javascript:;">
				<p><i class="icon iconfont icon-yunying1 fs18" style="color: #fca024;"></i>&nbsp;申请运营中心</p>
				<p class="grey"><i class="icon iconfont icon-jiantou-copy-copy"></i></p>
			</a>
		</div>
		<div>
			<a href="javascript:;">
				<p><i class="icon iconfont icon-liuyan fs18" style="color: #00b7ee;"></i>&nbsp;互动</p>
				<p class="grey"><i class="icon iconfont icon-jiantou-copy-copy"></i></p>
			</a>
		</div>
		<div>
			<a href="javascript:;" >
				<p><i class="icon iconfont icon-paimai fs18" style="color: #ff80c2;"></i>&nbsp;我的拍卖</p>
				<p class="grey"><i class="icon iconfont icon-jiantou-copy-copy"></i></p>
			</a>
		</div>
	</div>	

	<bottomNav></bottomNav>  
   
</div>

</template>

<script>
import userNav from '../components/common/userNav'
import { mapActions } from 'vuex';
import bottomNav from '../components/common/bottomNav.vue';
 export default {
	name:'',
	data(){
		return {
			
		}
	},

	methods:{
		
	},
	components:{
       	userNav,
       	bottomNav
	}
   }
</script>

<style scoped>

.personal-home .personal-header .content .left .photo {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    background: rgba(225, 225, 225, 0.2);
    padding: 0.4rem;
    position: relative;
}
.personal-home .personal-header .content .left .photo img {
    width: 100%;
    height: 100%;
}
.personal-home .personal-header .content .left .photo .photo-label {
    position: absolute;
    width: 5.8rem;
    left: 0;
    background: #787878;
    border-radius: 0.8rem;
    padding: 0.16rem 0;
    font-size: 0.8rem;
    text-align: center;
    box-shadow: 0 0.08rem 0.16rem #333;
}
.personal-home .personal-header .content .left .personal-info p {
    margin-top: 0.5rem;
    font-size: 1.0rem;
}
.personal-home .personal-header .content .left .personal-info .button {
    display: inline-block;
    background: #fc755f;
    border-radius: 0.25rem;
    padding: 0.4rem 1rem;
}
.personal-code > div {
    padding: 1rem 0;
    width: 25%;
    border-right: 0.08rem solid #e8e8e8;
    text-align: center;
}
.personal-section div a {
	padding: 0.8rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 0.2px solid gainsboro;
}
.personal-section div a p{
	font-size: 1.2rem;
}
</style>