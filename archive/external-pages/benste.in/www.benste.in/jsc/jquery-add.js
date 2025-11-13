var checkType 	= "single";

$(document).ready(function() {
	temp = new Image();
	temp.setAttribute("src", "./images/domaincheck-button-pruefen-on.gif");
	temp = new Image();
	temp.setAttribute("src", "./images/background-domaincheck-sammelsuche.jpg");
	$(".tab-domaincheck, .tab-multicheck").click(function(eventObject) {
		if($(this).hasClass("tab-domaincheck")) {
			checkType = "single";
			$("div.domaincheck .domaintype").fadeIn();
			$("input[name=search_type]").val("domaincheck");
			$("div.domaincheck div.input-layer form").attr("action", "https://www.checkdomain.de/domains/suchen/");

			var domains = $("textarea.domainname").val();
			domains = domains.replace(/\r/g, "");
			domains = domains.split("\n");

			if(domains.length == 0 || domains[0] == "") {
				$("textarea.domainname").val("mustermann.de");
			} else {
				$("textarea.domainname").val(domains[0]);
			}
		} else if($(this).hasClass("tab-multicheck")) {
			checkType = "multi";
			$("div.domaincheck .domaintype").css("display", "none");
			$("input[name=search_type]").val("multicheck");
			$("div.domaincheck div.input-layer form").attr("action", "https://www.checkdomain.de/domains/multicheck/");
		}

		$("div.domaincheck")
			.removeClass("multi")
			.removeClass("single")
			.addClass(checkType);
		
		eventObject.stopPropagation();
		eventObject.preventDefault();
	});

	$("#check-submit").hover(
		function() {
			$(this).attr("src", "./images/domaincheck-button-pruefen-on.gif");
		},
		function() {
			$(this).attr("src", "./images/domaincheck-button-pruefen.gif");
		}
	);

	$("textarea.domainname").keypress(function(eventObject) {
		var key = (eventObject.which) ? eventObject.which : eventObject.keyCode;

		if(key == 13) {
			if($("div.domaincheck").hasClass("single")) {
				$("div.domaincheck div.input-layer form").submit();
				
				eventObject.preventDefault();
				eventObject.stopPropagation();
			}
		}
	});
});