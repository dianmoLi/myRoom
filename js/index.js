$(document).ready(function(){
	$("#startButton").click(function(){
		window.location.href="searchW.html?searchName="+$("#searchName").val();
	});
});