<template>
<div>
	
</div>	
</template>

<script>
 export default {
  created:function(){
	if(!this.$cookies.get('token')) {
  		let ua = window.navigator.userAgent.toLowerCase()
	    if(ua.match(/MicroMessenger/i) == 'micromessenger'){
	       // 跳转到微信授权页面
	     return  window.location.href = 'http://mapi2.qmsjmyx.com/user/authorize';
	    }
	} else {
  		console.log('========='+this.$cookies.get('token'));
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

<style>
</style>