window.onresize=function(){  
     changeFrameHeight();  
}

function changeFrameHeight(){
    var ifm= document.getElementById("iframepage"); 
    ifm.height=document.documentElement.clientHeight;
    var obj = getPars();
    ifm.src = "https://www.baidu.com/baidu?&ie=utf-8&word="+obj.searchName;
}
function getPars(){
	var obj = {};
	var href = window.location.href;
	var pars = href.substring(href.indexOf("?")+1);
	var arr=pars.split("&");
   	for(var i=0;i < arr.length;i++){ 
    	num=arr[i].indexOf("="); 
	    if(num>0){ 
		    name=arr[i].substring(0,num);
		    value=arr[i].substr(num+1);
		    obj[name]=value;
	    } 
    } 
	return obj;
}