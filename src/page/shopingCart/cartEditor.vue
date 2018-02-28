<template>
<div v-if="items.length">
	<div style="margin-bottom: 12rem;">
	<div class="dianpu_dingdan gouwuche_store" v-for="(item,index) in items">
		<div class="flex aItemCenter shopname">
	
			<img :src="item.pic" style="width: 22px;height: 22px;" class="radius50 ml10" />
			<b class="ml5 fs10">{{item.shopName}}</b>&nbsp;
			<i class="fs16 grey iconfont icon-jiantou-copy-copy"></i>
		</div>
		<div class="flex overflow">
			<div class="flex aItemCenter flex_center flex01auto plr10">
				<i @click="toggle(index)"  :class="[item.selected ? 'iconfont icon-yuanActive fs18 red' : 'fs18 grey iconfont icon-yuan']"></i>
			</div>
			<div class="flex11auto">
				<div class="pr10 flex aItemCenter">
					<div class="">
						<img :src="item.pic" width="50" height="50" />
					</div>
					<div class="ml10 ptb10">
						<p class="fs14 lh20"><span class="red_btn">秒杀</span>【洛川苹果】2018新鲜农家设哪些红富士水果10斤包</p>
						<p class="grey fs12 mt5 edit_info">
							<span>颜色：21#复古色；尺寸：M</span>			
						</p>
						<div class="mt5 flex flex_between aItemCenter">
							<p>
								<i class="red fs14"><span class="fs10">￥</span>{{item.price}}</i>&nbsp;						
							</p>
							<p class="flex aItemCenter">
								<numSelect></numSelect>
							</p>
						</div>
					</div>
				</div>
			</div>
			<div @click="removeItem(index)"  class="gouwuche_dele">
				删除
			</div>
		</div>
	</div>	
	</div>
	<div class="dingdan_footer flex_between" style="bottom: 56px;">
		<p class="pl10">
			<i @click="allSelect()" v-model="checked" :class="[checked ? 'iconfont icon-yuanActive fs18 red' : 'fs18 grey iconfont icon-yuan']"></i>&nbsp;
			<b class="fs14">全选</b>{{checkedCount}}
		</p>
		<p class="flex flex_end aItemCenter">
			<span>合计：<span class="red"><i class="fs10">￥</i>{{total}}</span></span>
			<span class="grey fs12 inlineblock ml5">不含运费</span>
			<span class="dingdan_submit" style="width: 80px;">结算{{checkedCount}}</span>
		</p>
	</div>
  <bottomNav></bottomNav>
</div>	

	<div v-else class="tc pt50">
		<p class="mt20"><img src="../../../static/img/gouwuche.png" style="width:40%; height:40%"/></p>
		<p class="mt10 grey fs18">购物车还是空的</p>
		<p class=""><span class="kong_btn_blue">马上逛逛</span></p>
		<bottomNav></bottomNav>
	</div>	

</template>

<script>
import numSelect from '../../components/common/numSelect.vue'	
import bottomNav from '../../components/common/bottomNav.vue';
   	export default {
		name:'',
		data(){		
			return {
			 checked:true,			
				items:[
				   {pic:require("../../../static/img/home_icon.png"),
				    shopName:'鲜果生鲜店',
				    price:68.90,
				    id:'1',
				    selected:true,
				    num:1
				   },
				   {pic:require("../../../static/img/home_icon.png"),
				    shopName:'鲜果生鲜店',
			      	price:68.90,
				    selected:true, 	
				    id:'2',
				    num:1

				   },
				   {pic:require("../../../static/img/home_icon.png"),
				    shopName:'鲜果生鲜店2',
				    price:68.90,	
				    selected:true,
				     id:'3',
				      num:1
				   },
				   {pic:require("../../../static/img/home_icon.png"),
				    shopName:'鲜果生鲜店2',
				    price:68.90,	
				    selected:true,
				     id:'3',
				      num:1
				   },   
				]
			}
		},
		
		components:{
			numSelect,	
			bottomNav
		},
		
		computed:{
	   		checkedCount:function() {	       
                var i = 0;
                this.items.forEach((item) => {
                    if(item.selected == true){ 
                	i++;}
                    if(i==this.items.length){
                	 this.checked=true                 
                	}else{
                	 this.checked=false
                	}
                })                    
  	          	return i;                    
 		  	},
 		  	total: function() {
 		  		var total=0;
 		  		this.items.forEach((item,index) => {
 		  			if(item.selected == true){
 		  				total+=this.items[index].price*this.items[index].num;
 		  				
 		  			}
 		  		})
 		  		return total.toFixed(2)
 		  	}
    
	 	},
	  		  	
		methods:{
	          toggle(index){            
                    this.items[index].selected = !this.items[index].selected;
               },
              allSelect() {	
              this.checked=!this.checked;
              if(this.checked==true){
		       this.items.forEach((item) =>{
		          item.selected=true
		         });
    	       }else{
    	       	 this.items.forEach((item) =>{
		          item.selected=false
		         });  	       	
    	       }
	         },
	          removeItem(index){
	          	this.items.splice(index,1);
			  },
		
	}
}
</script>

<style scoped>
.fs18{
	font-size: 1.6rem;
}	
.shopname{
	height: 3.3rem;
    padding-left: 0.833rem;
}
.gouwuche_store {
    background: #fff;
    padding: 0;
    margin-top: 0.83rem;
}
.gouwuche_dele {
    background: red;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 1.16rem;
    width: 4.16rem;
    white-space: nowrap;

}
.dingdan_footer {
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    background: #fff;
    border-top: 0.08rem solid #E8E8E8;
}
.dingdan_submit {
    background: #FF463C;
    color: #fff;
    width: 9.16rem;
    padding: 1.25rem 0;
    text-align: center;
    font-size: 1.167rem;
    margin-left: 1.167rem;
}
.kong_btn_blue {
    padding: 1.17rem 4.16rem;
    color: #fff;
    margin: 1.67rem auto;
    display: inline-block;
    font-size: 1.5rem;
    background: #00B7EE;
    border-radius: 0.25rem;
    cursor: pointer;
}	
</style>