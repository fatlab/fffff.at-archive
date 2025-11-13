function OpenHelp(url){
	open(url, "_blank", "width=400,height=400,toolbar=no,directories=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=no");
}

function OpenHelpParams(url, opts){
	if (opts.length < 1)
	{
		opts = "width=400,height=400,toolbar=no,directories=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=no";
	}
	open(url, "_blank", opts);
}

function newImage(arg) {
	if (document.images) {
		rslt = new Image();
		rslt.src = arg;
		return rslt;
	}
}

function ci(a1, a2) {
	if (document.images && (preloadFlag == true)) {
		document[a1].src = ipth(a1+a2);
	}
}

function ipth(name) {
  return "/newdesign/images/nav/" + name + ".gif";
}

var preloadFlag = false;
function preloadImages() {
	if (document.images) {
	mainnav_presentation_over = newImage(ipth('mainnav_presentation-over'));
	mainnav_acchome_over = newImage(ipth('mainnav_acchome-over'));
	mainnav_support_over = newImage(ipth('mainnav_support-over'));
	mainnav_faq_over = newImage(ipth('mainnav_faq-over'));
mainnav_support_over = newImage(ipth('mainnav_support-over'));
nav_orders_over = newImage(ipth('nav_orders-over'));
nav_domains_over = newImage(ipth('nav_domains-over'));
nav_home_over = newImage(ipth('nav_home-over'));
nav_email_over = newImage(ipth('nav_email-over'));
nav_sitebuilder_over = newImage(ipth('nav_sitebuilder-over'));
nav_accountinfo_over = newImage(ipth('nav_accountinfo-over'));
nav_aff_over = newImage(ipth('nav_aff-over'));
nav_orders_over = newImage(ipth('nav_orders-over'));
nav_hitlogs_over = newImage(ipth('nav_hitlogs-over'));
nav_upline_over = newImage(ipth('nav_upline-over'));
nav_special_products_over = newImage(ipth('nav_special_products-over'));
nav_downline_over = newImage(ipth('nav_downline-over'));
nav_banners_over = newImage(ipth('nav_banners-over'));
nav_invite_over = newImage(ipth('nav_invite-over'));
nav_leaders_over = newImage(ipth('nav_leaders-over'));
nav_leads_over = newImage(ipth('nav_leads-over'));
nav_rtl_over = newImage(ipth('nav_rtl-over'));
nav_dvd_over = newImage(ipth('nav_dvd-over'));
nav_aboutus_over = newImage(ipth('nav_aboutus-over'));
nav_hqhighlights_over = newImage(ipth('nav_hqhighlights-over'));
nav_requestsupport_over = newImage(ipth('nav_requestsupport-over'));
nav_logout_over = newImage(ipth('nav_logout-over'));
nav_registrars_over = newImage(ipth('nav_registrars-over'));
nav_news_over = newImage(ipth('nav_news-over'));
nav_partners_over = newImage(ipth('nav_partners-over'));
nav_forum_over = newImage(ipth('nav_forum-over'));
nav_pwd_over = newImage(ipth('nav_pwd-over'));
nav_username_over = newImage(ipth('nav_username-over'));
nav_ppm_over = newImage(ipth('nav_ppm-over'));
nav_prefcom_over = newImage(ipth('nav_prefcom-over'));
nav_contpref_over = newImage(ipth('nav_contpref-over'));
nav_doc_over = newImage(ipth('nav_doc-over'));
nav_doc_over = newImage(ipth('nav_giftcertificates-over'));
		preloadFlag = true;
	}
}

var inSearch = false;
function searchIn(fm) {
		if (!inSearch)
		{
			fm.domain.value='';
			inSearch = true;
		}

}
