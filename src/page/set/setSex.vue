<template>
<div>
<div class="setsex bcwhite">
	<div class="choise">
	   <input type="radio" v-model="radio5" value="男" id="0"/>
	   <label for="男">男</label>
   </div>
  	<div class="choise">
	   <input type="radio" v-model="radio5" value="女" id="1"/>
	   <label for="女">女</label>
   </div>
  	<div class="choise">
	   <input type="radio" v-model="radio5" value="未知" id="2"/>
	   <label for="未知">未知</label>
   </div> 
</div>	
	<div class="btn-save mt12">
		<p>保存</p>
	</div>
</div>		
</template>

<script>
   	export default {
    data() {
        return {
            radio5: ''
        }
    }
}
</script>

<style scoped>
.setsex{
	padding: 1.2rem 1.2rem 0;
}	
.choise{
	padding: 0.6rem 0;
	border-bottom: 1px solid gainsboro;
	font-size: 1.2rem;
}
</style>