<template>
	<div class="home-buttonNav">
		<div class="light_blue" >
			<router-link to="/" exact><p  ><i class="icon iconfont icon-zhuye" ></i>首页</p></router-link>			
		</div>
		<div>
			<p ><i class="icon iconfont icon-aixin"></i>收藏</p>			
		</div>
		<div>
			<router-link to="/cartEditor">
				<p><i class="icon iconfont icon-gouwuche2"></i>购物车</p>
			</router-link>
		</div>
		<div>
			<p><i class="icon iconfont icon-1106"></i>社区</p>			
		</div>		
		<div>
			<router-link to="/personalHome" exact>
				<p><i class="icon iconfont icon-people" ></i>我的</p>		
			</router-link>
		</div>
	
	</div>
</template>

<script>
export default {
    props : {
      
    }
}	
	
</script>

<style>
a.router-link-active {
  color: #f66;
}
.home-buttonNav{
    position: fixed;
    left: 0;
    width: 100%;
    bottom: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #fff;
    z-index: 99;	
    border-top: 2px solid whitesmoke;
}	
.home-buttonNav div{
	color: #848c99;
    padding: 0.85rem 0.8rem 0.3rem;
    text-align: center;
}
.home-buttonNav div p{
  font-size: 0.75rem;
}
.home-buttonNav div i{
	display: block;
}
.home-buttonNav .name{
	margin-top: 0.2rem;
}
.home-buttonNav div p i{
  font-size: 1.7rem;	
}
.blue{
color: deepskyblue;	
}
</style>