<template>
<div class="bac" @click="warpclick">	
	<div class="flex_between">
		<div v-for="(itemul,index) in List"  class="dropList">		
			<div v-bind:class="[List[index].isshow ? isactive : '','ultitle']" @click.stop="dropshow(index)">
				<p>{{itemul.ultitle}}</p>
				<i class="iconfont icon-youxia"></i>
			</div>			
			<ul class="liList">
			   	<li v-for="(itemli,innerindex) in itemul.lititle">
			   		<div v-show="itemul.isshow" @click="inputText(index,innerindex)"  class="xian">
			   			{{itemli.title}}
			   		</div>
			   	</li>
		    </ul>		
		</div>	
	</div>
</div>	
</template>

<script>
	export default {
	props:{	
	},
	 data(){
	 	return {
 		 isactive:'isactive',
	 	 List:[
	 	{
	 	  ultitle:'其他',
	 	  isshow:false,
	      	lititle:[
		 	 {title:'其他'},
		 	 {title:'全部'},
		 	 {title:'加盟'},
		 	 {title:'招聘'},	 	
		 	]
	      	
	    },	
 	 	{
 	 	  ultitle:'优惠',
 	 	  isshow:false,
	      	lititle:[
		 	 {title:'优惠'},
		 	 {title:'秒杀'},
		 	 {title:'团购'},
		 	 {title:'批发'},
		 	]
	     },	
 	 	{
 	 	  ultitle:'类型',
 	 	  isshow:false,
	      	lititle:[
	      	 {title:'类型'},
		 	 {title:'全部'},
		 	 {title:'行业'},
		 	 {title:'职业'},
		 	]
	     },		 	 
 	 	{
 	 	  ultitle:'黄页',
 	 	  isshow:false, 
	      	lititle:[
		 	 {title:'黄页'},
		 	 {title:'地名'},
		 	 {title:'名录'},
		 	 {title:'目录'},
		 	]
	     },	
	    {
 	 	  ultitle:'距离',
 	 	  isshow:false, 
	      	lititle:[
		 	 {title:'全部'},
		 	 {title:'500米内'},
		 	 {title:'500-1000米'},
		 	 {title:'1000米以上'},
		 	]
	     },	
	 	 ],	 
	 	}
	 },
	methods:{
		dropshow: function (index) {
			if (this.List[index].isshow==true) {
				this.List[index].isshow=!this.List[index].isshow
		    } else{
                this.List.forEach((itemul) => {
                 itemul.isshow=false
                })                
			    this.List[index].isshow=true
		    }
		},
		inputText: function (index,innerindex) {
			this.List[index].ultitle=this.List[index].lititle[innerindex].title
		},
		warpclick: function () {
			this.List.forEach((itemul) => {
                 itemul.isshow=false
            })         
		}
	}		
}
</script>

<style scoped>
.xian{
	height: 100%;
}	
.bac{
	height: 100%;
}	
.isactive{
	color: #FF9900!important;
}
.dropList{
	width: 25%;
}
.ultitle{
	padding: 0.8rem 1rem;
	border-right: 0.5px solid #E0E0E0;
	border-top: 0.1px solid #E8E8E8;
	border-bottom: 0.1px solid #E8E8E8;
    position: relative;
    white-space: nowrap;
    text-align: center;
    color:grey;
}
.ultitle i{
	position: absolute;
	right: 0.8rem;
	bottom: 0;
	font-size: 0.6rem;
	
}
.liList li{
	text-align: center;
	padding: 0.8rem 0;
}
</style>