<template>
<div class="personal-data">
 	<yd-cell-group>
        <yd-cell-item arrow type="link" href="/set/reviseHead">
            <span slot="left">头像</span>
            <span slot="right"><img class="headpic" src='../../../static/img/pic10.jpg'></span>
        </yd-cell-item>
        <yd-cell-item arrow type="link" href="/set/reviseName">
            <span slot="left">昵称</span>
            <span slot="right">XXX</span>
        </yd-cell-item>
        <yd-cell-item arrow type="link" href="/set/setSex">
            <span slot="left">性别</span>
            <span slot="right">男</span>
        </yd-cell-item>
    
		<yd-cell-group>
	     	<yd-cell-item arrow>
	            <span slot="left">出生日期：</span>
	            <yd-datetime type="date" v-model="datetime4" slot="right"></yd-datetime>
	        </yd-cell-item>
        </yd-cell-group>
     
        <yd-cell-item arrow type="label">
            <span slot="left">我的二维码</span>
            <span slot="right"></span>
        </yd-cell-item>
        <yd-cell-item arrow type="label">
            <span slot="left">支付密码</span>
            <span slot="right"></span>
        </yd-cell-item>        
        <yd-cell-item arrow type="label">
            <span slot="left">更改手机号</span>
            <span slot="right"></span>
        </yd-cell-item>
        <yd-cell-item arrow type="label">
            <span slot="left">卡号</span>
            <span slot="right"></span>
        </yd-cell-item>        
  </yd-cell-group>	
</div>	
</template>

<script>
	import {DateTime} from 'vue-ydui/dist/lib.rem/datetime';
export default {
        data() {
            return {      
                datetime4: '2017-05-11',
                yearFormat: '<span style="color:#F00;">{value}<i style="font-size: 12px;margin-left: 1px;">年</i></span>',
                monthFormat: '<span style="color:#0BB20C;">{value}<i style="font-size: 12px;margin-left: 1px;">月</i></span>',
                dayFormat: '<span style="color:#FFB400;">{value}<i style="font-size: 12px;margin-left: 1px;">日</i></span>'
            }
        },
       	components: {
    
    	DateTime
    
  	},
    }	
</script>

<style>
.personal-data .yd-cell-item {
    background-color: #fff;
    padding: 1.4rem;
    
}	
.personal-data .headpic{
	width: 3.8rem;
	height: 3.5rem;
	border-radius: 50%;
}
.personal-data .yd-datetime-input{
	display: inline-block;
	text-align: right;
}
</style>