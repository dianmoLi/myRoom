function toSearch(){
	window.location.href="searching.html?searchName="+$("#searchName").val();
}
$(document).ready(function(){
	$("#startButton").click(function(){
		window.location.href="searching.html?searchName="+$("#searchName").val();
	});
	$("#searchName").keydown(function(e){
		if(e.keyCode == 13) {
	       toSearch();
	    } 
	});
	$("#startButton").addEventListener('touchstart', function(event) {
    	toSearch();
	}, false);    
});