<template>
	<div class="NewConsignee">
	 	<div class="top flex flex_center bcwhite ">
	 		<p>新建收货人</p>
	 	</div>
	 	
	 	<div class="content mt10 bcwhite">
	 		<div class="msg flex"><p>收货人：</p><input type="text" v-model="ruleForm.userName" placeholder="请输入收货人"></div>
			
			<div class="msg flex"><p>联系方式：</p><input type="text" v-model="ruleForm.userphone" placeholder="请输入手机号码"></div>	
		 	
		 	<div>
		        <yd-cell-group>
		            <yd-cell-item arrow>
		                <span slot="left">所在地区：{{model}}</span>
		                <input slot="right" type="text" @click.stop="show1 = true" v-model="model1" readonly placeholder="">
		            </yd-cell-item>
		        </yd-cell-group>
		
		        <yd-cityselect v-model="show1" :callback="result1" :items="district"></yd-cityselect>
		   </div>
			
			<div class="msg flex"><p>详细地址 :</p><input type="text" v-model="ruleForm.address" placeholder="请输入街道楼牌号"></div>	
	 	
	 	</div>
	 	<p class="flex flex_center mt10">{{ruleForm.errMsg}}</p>

		
		<div class="btn-save" @click="submitmsg">
			<p>保存</p>
		</div>
	</div>	
</template>

<script>
import District from 'ydui-district/dist/jd_province_city_area_id';
export default {
        data() {
            return {
                show1: false,
                model1: '',
                district: District,
                model:'',
        		ruleForm: {
		          userName: '',
		          userphone: '',
		          address: '',
		          errMsg: ''
		        },
            }
        },
        methods: {
            result1(ret) {
                this.model = ret.itemName1 + ' ' + ret.itemName2 + ' ' + ret.itemName3;     
            },
            submitmsg() {
            	if(this.ruleForm.userName && this.ruleForm.userphone && this.ruleForm.address){
            		console.log('good')	
            	}else {
            		if(!this.ruleForm.userName){
            			this.ruleForm.errMsg = '请填写完整信息'
            		}    			

        		}
            }
        },
        
    }
</script>

<style scoped>
.NewConsignee .top{
	padding: 0.8rem 0;
	font-size: 1.4rem;
}	
.NewConsignee .content{
	font-size: 1.2rem;
	padding: 0rem 1.2rem;
}
.NewConsignee .content .msg{
	border-bottom: 1px solid #D8D8D8;
	padding: 0.7rem 0.5rem;
}
.NewConsignee .content .yd-cell-item{
	padding: 0.5rem ;	
}
.NewConsignee .content .yd-cell-left span{
	font-size: 1.2rem;
	color: black;
}
.NewConsignee .content .yd-cell-right input{
	font-size: 1.2rem;
	height: 1.2rem;
}
input{
	border: none;
	font-size: 1.2rem;
}
</style>