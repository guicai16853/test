<template>
<div @click="clickDt" class="home bcwhite">
	<h1>{{$store.state.count}}</h1>
	<div class="adress">
	<i class="icon iconfont icon-location" style="color: deepskyblue;"></i>
	<span>重庆九龙区石桥铺帝豪名都</span>
	</div>
	   <!-- 顶部轮播   -->
    <yd-slider autoplay="4000" speed="800" >   	
	    <yd-slider-item v-for="item in slider">
	            <img :src="item.pic">	      
	    </yd-slider-item>
	</yd-slider>
	   <!-- 顶部导航 -->
	<div class="nav-home flex flex_around mt12">
	  	<a class="tc">
	  		<img src="../../static/img/home/home_01.png" />
	  		<p>拍卖</p>
	  	</a>
	  	<a class="tc">
	  		<img src="../../static/img/home/home_02.png" />
	  		<p>转让</p>
	  	</a>
	  	<a class="tc">
	  		<img src="../../static/img/home/home_03.png"/>
	  		<p>链接</p>
	  	</a>
	  	<a class="tc">
	  		<img src="../../static/img/home/home_04.png" />
	  		<p>家谱</p>
	  	</a>
	</div>
	    <!-- 轮播新闻   -->
	  <div class="news flex aItemCenter flex_center pd04 mt12">
	  	<div class="news_title">
	  	   <h6 class="nowarp ml16 mr12"><span class="">商城</span><span class="red ">动态: </span></h6>
	  	</div>
	    <yd-rollnotice autoplay="3000" >
	        <yd-rollnotice-item><span style="color:#F00;"> 荐 </span>荣耀V9 3月超级钜惠！</yd-rollnotice-item>
	        <yd-rollnotice-item><span style="color:#F00;"> 荐 </span>3.23京东超级品牌日格力盛典</yd-rollnotice-item>
	        <yd-rollnotice-item><span style="color:#F00;"> 荐 </span>京东服饰 早春新品低至7折</yd-rollnotice-item>
        </yd-rollnotice>
	  </div>
	  <div class="news flex aItemCenter flex_center pd04 ">
	  	<div class="news_title">
	  	   <h6 class="nowarp ml16 mr12"><span class="">全民</span><span class="red ">晒晒: </span></h6>
	  	</div>
	    <yd-rollnotice autoplay="3000" >
	        <yd-rollnotice-item><span style="color:#F00;"> 荐 </span>荣耀V9 3月超级钜惠！</yd-rollnotice-item>
	        <yd-rollnotice-item><span style="color:#F00;"> 荐 </span>3.23京东超级品牌日格力盛典</yd-rollnotice-item>
	        <yd-rollnotice-item><span style="color:#F00;"> 荐 </span>京东服饰 早春新品低至7折</yd-rollnotice-item>
        </yd-rollnotice>
    </div>
	     <!-- 搜索 -->
	<div>
	  	   <yd-search v-model="value1" :on-submit="submitHandler"></yd-search>
    </div>
    	  
	<div class="subNav">
			<div class="header">
				<div>
				<a  v-for="(item,index) in navList" :class="{blue: changeblue == index}" @click="blue(index)" >{{item.title}}	
				</a>
				</div>
				<p class="header-right">
					
						<span class="iconfont icon-dianpu tc blue"></span>
						<span class="fs14">我要开店</span>
					
				</p>
			</div>	
	</div>	
	
	<dropDown ref="profile"></dropDown>
		
	<List></List>	
	<bottomNav></bottomNav>
	
</div>	
</template>

<script>
import { mapActions } from 'vuex';
import List from '../components/home/List.vue'
import dropDown from '../components/home/dropDown'
import bottomNav from '../components/common/bottomNav.vue';

export default {
	props:{
		
	},
  	data () {
      return {  
		slider:[
			{pic: require("../../static/img/pic16.jpg")},
			{pic: require("../../static/img/pic15.jpg")},
			{pic: require("../../static/img/pic13.jpg")},
		],
  		navList:[
  		{
  			title:"附近模式"
  		},
  		{
  			title:"产品模式"
  		}],
  		changeblue:'',
      	}
    },
 
    methods:{   	
        ...mapActions([   
         
        ]),

	    blue:function(index){
	   	this.changeblue = index;
        },
   		clickDt: function () {
			this.$refs.profile.warpclick();        
		}
    },
    created() {
    	axios.get('http://rapapi.org/mockjsdata/31481/index/adAndNews')
    	.then(reponse => {
    		console.log(reponse);
    	})
    	.catch(error =>{
    		console.log(error);
    	})
    },
  
    components:{
     	List,
     	dropDown, 
     	bottomNav
    }
    
  }
	
	
	
</script>

<style >
.adress{
	position: absolute;
	top:0.5rem;
	left: 0.8rem;
	z-index: 99;
}
.yd-slider{
	height: 100px;
}	
.yd-slider img{
	height: 100%;
}
.nowarp{
	font-size: 0.8rem;
}
.subNav .header {
    align-items: center;
    padding: 0.41rem 0.1rem 0.4rem 0.08rem;
    display: flex;
    position: relative;
    justify-content: space-between;
    margin-top: 0.7rem;
    font-size: 0.9rem;
}
</style>