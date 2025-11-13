$(window).load(function(){ 
	
	var orderFormHeight = $('#product-order-form').height();
	var marketingMessageHeight = $('#product-marketing-message').height();
	var productTitle =  $('.title').height();
	if(orderFormHeight < 150) { var orderFormHeight = 180; }
	
	var sliderHeight =  orderFormHeight - marketingMessageHeight - productTitle - 79;

	//alert("ord:"+ orderFormHeight+" markm:"+marketingMessageHeight+" prodtitle: "+productTitle+" = "+sliderHeight); 
	// Show the slider content
	$('.slider').show();
	
	$('.slider').each(function () {
		var current = $(this);
		current.attr("box_h", current.height());
	});
	
	$(".slider").css("height", sliderHeight);
	$(".slider").attr("orig_h", sliderHeight);
	if( sliderHeight >= $('.slider').attr("box_h")-5  ){ $(".slider_menu").css("visibility", "hidden");  }


});

// Set the initial slider state
var slider_state = "close";

function sliderAction()
{
	if (slider_state == "close")
	{
		sliderOpen();
		slider_state = "open"
		$(".slider_menu").html('<a href="#" onclick="return sliderAction();">Close</a>');
	}
	else if (slider_state == "open")
	{
		sliderClose();
		slider_state = "close";
		$(".slider_menu").html('<a href="#" onclick="return sliderAction();">More...</a>');
	}
	
	return false;
}

function sliderOpen()
{
	var open_height = $(".slider").attr("box_h") + "px";
	$(".slider").animate({"height": open_height}, {duration: "slow" });
}

function sliderClose()
{
	var close_height = $(".slider").attr("orig_h") + "px";
	$(".slider").animate({"height": close_height}, {duration: "slow" });
}