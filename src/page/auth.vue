<template>
<div>
	<h1>觅一下正在授权</h1>
</div>	
</template>

<script>
  export default {
  created:function() {
  	var token = this.$cookies.get('token');
  	console.log('token===>>>>>>>>>>>>>'+token);
	if(!token) {
  		let ua = window.navigator.userAgent.toLowerCase()
	    if(ua.match(/MicroMessenger/i) == 'micromessenger'){
	        // 跳转到微信授权页面
	        window.location.href = 'http://mapi2.qmsjmyx.com/user/authorize';
	    }
	} else {
		window.localStorage.setItem('token',token);
		var beforeLoginUrl = window.localStorage.getItem('beforeLoginUrl');
		console.log('token==='+token);
		console.log('beforeLoginUrl==='+beforeLoginUrl);
		this.$router.push({path:beforeLoginUrl})
	}
 }, 
  components:{
  	
  },
  
  methods:{   	
     getCookie:	function(name){
        var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)"); //正则匹配
        if(arr=document.cookie.match(reg)){
            return unescape(arr[2]);
        }
        else{
            return null;
        }
    }

 },
}
</script>	

<style scoped>
div{
	display: flex;
	justify-content: center;
	align-items: center;
}
h1{
	font-size: 20px;
}
</style>