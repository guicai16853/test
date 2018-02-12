<template>
<div>
	<div class="uppic bcwhite">
		<span>上传头像图片：</span>
		<div class="content flex flex_center mt20" >
			<div class="pic flex flex_center aItemCenter">
				<i class="fs15 grey">+</i>
			</div>		
		</div>
		<p class="tips flex flex_center mt10">上传头像</p>			
	</div>
	
	<div class="btn-save mt05" @click="submitmsg">
		<p>确认提交</p>
	</div>
</div>	
</template>

<script>
</script>

<style scoped>
span{
	font-size: 1.2rem;
}	
.uppic{
	padding: 1rem;
}	
.uppic .tips{
	font-weight: 200;
}
.uppic .content .pic{	
	border: 1px solid gainsboro;
	width: 30%;
	height: 8rem;
}
</style>