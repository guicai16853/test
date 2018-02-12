<template>
	<div class="home-items" >
		<!--循环的列表 begin-->
		<router-link to="/shopHome" class="items" v-for="item in shopInfoList" :key="item">
			<div class="items-left" >
				<div><img :src="item.pic" /></div>
				<div class="ml10 mt10">
					<p class="bold fs14" >{{item.Authentication}}
						<i class="icon iconfont icon-renzheng"></i>
						<i class="icon iconfont icon-yunying"></i>
					</p>
					<p class="mt5 fs12" ><i class="iconfont icon-yueliang yellow"></i>&nbsp;{{item.distance}}m</p>
					<p class="mt5 grey fs12" >{{item.industry}}</p>
				</div>
			</div>
			<div class="items-right" >
				<div class="fs20 light_blue">
					<p><i class="icon iconfont icon-location blue"></i></p>
					<p><i class="icon iconfont icon-liuyan blue"></i></p>
					<p><i class="icon iconfont icon-phone blue"></i></p>
				</div>
				<div>
					<p class="grey fs10" >浏览{{item.scan}}&nbsp;•&nbsp;留言{{item.words}}</p>
				</div>
			</div>
		</router-link>
					<!--循环的列表 end-->
	</div>
		
</template>

<script>
	export default {
	name:'infoShop',
	data(){
		return {
			shopInfoList:[
			{ pic:require("../../../static/img/pic4.jpg"),
			  Authentication:'未实名认证',
			  distance:130,
			  industry:'制造行业',
			  scan:330,
			  words:10	
		    },
	   { pic:require("../../../static/img/pic5.jpg"),
			  Authentication:'未实名认证',
			  distance:330,
			  industry:'it行业',
			  scan:630,
			  words:18	
		    },
		    { pic:require("../../../static/img/pic6.jpg"),
			  Authentication:'未实名认证',
			  distance:830,
			  industry:'it行业',
			  scan:430,
			  words:18	
		    },     
			]
		}
	}
	   }
</script>

<style scoped>
 .home-items{
 	padding-left: 1.25rem;
 	margin-bottom: 5.8rem;
 }	
 .home-items .items {
     padding: 0.8rem 0.84rem 0.84rem 0;
     display: flex;
     justify-content: space-between;
     color: #333333;
}

 .home-items .items .items-left {
     display: flex;
     justify-content: space-around;
}
 .home-items .items .items-left img {
     width: 5rem;
     height: 5rem;
     border-radius: 0.3rem;
}
 .home-items .items .items-left .ml10{
 	margin-left: 0.7rem;
 }
  .home-items .items .items-left .ml10 p{
  	margin-top: 0.4rem;
  }
 .home-items .items .items-right {
     display: flex;
     justify-content: space-between;
     flex-direction: column;
}
 .home-items .items .items-right div {
     display: flex;
     justify-content: space-around;
}
 .home-items .items .items-right div p {
     margin-right: 0.4rem;
}	
</style>