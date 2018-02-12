<template>
<div>
	<div class="revisephone bcwhite">
		<div class="item">
			<span class="mr12">原手机号码</span><input type="text" placeholder="请输入原手机号">
		</div>
		<div class="item">
			<span class="mr12">新手机号码</span><input type="text" placeholder="请输入新手机号码">
			 <yd-sendcode slot="right" v-model="start1" @click.native="sendCode1" type="warning"></yd-sendcode>
		</div>	
		<div class="item">
			<span class="mr12">验证码  &nbsp; &nbsp; &nbsp; &nbsp;</span><input type="text" placeholder="请输入验证码">
		</div>	
	</div>
	
	<div class="btn-save">
		<p>提交</p>
	</div>
</div>	
</template>

<script>
 export default {
        data() {
            return {
                start1: false
            }
        },
        methods: {
            sendCode1() {
                this.$dialog.loading.open('发送中...');
                setTimeout(() => {

                    this.start1 = true;
                    this.$dialog.loading.close();

                    this.$dialog.toast({
                        mes: '已发送',
                        icon: 'success',
                        timeout: 1500
                    });

                }, 1000);
            }
        }
    }	
</script>

<style scoped>
.revisephone{
	padding: 1.5rem 1.5rem 0rem;
	font-size: 1.15rem;
	color: dimgray
}
.revisephone input{
	font-size: 1.1rem;
}
.revisephone .item{
	padding: 0.8rem 0;
	border-bottom: 1px solid gainsboro;
}
.revisephone .item .yd-btn{
	height: 1.5rem;
	background-color:deepskyblue
}
.btn-save{
	margin-top: 0.6rem;
}
</style>