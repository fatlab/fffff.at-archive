var heightY;
$( document ).ready(function() {
	heightY=localStorage.getItem("scrollKey");
	window.scrollTo(0,heightY);
});
$(".thumbLink").click(function(){
	const container = document.querySelector('body');
	heightY = container.scrollTop;
	localStorage.setItem("scrollKey", heightY);
});