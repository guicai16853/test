/*  var btn_back=document.getElementsByClassName("iconfont icon-shenqing-fanhui")
 for(var i=0;i<btn_back.length;i++){
 	btn_back[i].addEventListener("click", function(){
   history.back();
   alert("as");
});
 }   */
(function(){
var btn=document.getElementsByClassName("iconfont icon-shenqing-fanhui");
var btn=document.getElementsByClassName("iconfont icon-shenqing-fanhui");
	for(var i=0;i<btn.length;i++){
		btn[i].addEventListener("click", function(){
     history.back();
})
	}
	(function(){  
    function w() {  
    var r = document.documentElement;  
    var a = r.getBoundingClientRect().width;//获取当前设备的宽度  
        if (a > 720 ){//720不固定，根据设计稿的高度定  
            a = 720;  
            }   
         rem = a /31;  
        r.style.fontSize = rem + "px"  
        }  
    w();  
    window.addEventListener("resize", function() {//监听横竖屏切换  
        w()  
    }, false);  
    })(); 

 })()
	
