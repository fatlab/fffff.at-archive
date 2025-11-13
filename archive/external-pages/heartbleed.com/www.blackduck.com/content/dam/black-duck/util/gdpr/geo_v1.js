(function () {
    var hasKfData = sessionStorage.getItem('kickfire');
    if (hasKfData == null || hasKfData != '1') {
        console.log('Making API calls'); //TODO: REMOVE
        // getCompanyInfo();
    }
})();

//DB Empty variables for existing functionality
(function () {
    db_annual_sales = db_audience = db_audience_segment = db_city = db_company_name = db_country = db_country_name = db_demandb_sid = db_employee_count = db_employee_range =
        db_forbes_2000 = db_fortune_1000 = db_industry = db_ip = db_isp = db_marketing_alias = db_phone = db_primary_sic = db_region_name = db_revenue_range =
        db_state = db_street_address = db_sub_industry = db_traffic = db_web_site = db_zip = "";
})();

//Populating the session storage values
function populateSessionStorage(data) {
    sessionStorage.setItem('kickfire', '1');
    for (var k in data) {
        if (data.hasOwnProperty(k)) {
            sessionStorage.setItem(k, data[k]);
        }
    }
};
//Make Kick Fire API Consolidated Call and Get Company Data
function getCompanyInfo() {
    var endpoint = '//api.kickfire.com/v3/company:(all)?key=0f4406209bd48327&vlocKey=33e1cf7s3b87c2b9';
    var kfSecReq = new XMLHttpRequest();
    kfSecReq.open("GET", endpoint);

    kfSecReq.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var kfResp = JSON.parse(kfSecReq.responseText);
            var data = kfResp.data[0];
            populateSessionStorage(data);
            console.log('Country code - from API :' + data.visitorCountryShort);
        }
    }
    kfSecReq.send(null);
};

//       Sets the cookie only on pages accessed from GDPR countries
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// ----------------------------------------------------------------- Reads the cookie value
var getSatTrackCookie = function (c_name) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=");
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1;
            c_end = document.cookie.indexOf(";", c_start);
            if (c_end == -1) {
                c_end = document.cookie.length;
            }
            return unescape(document.cookie.substring(c_start, c_end));
        }
    }
    return "";
}
//Custom Privacy Banner for GPC Signal
/*var observer = new MutationObserver(function (mutations, mutationInstance) {
    var element = document.getElementById('onetrust-banner-sdk');
    if (element != null && navigator.globalPrivacyControl) {
        // Update Markup
        $('#onetrust-pc-btn-handler').hide();
        $('#onetrust-accept-btn-handler').hide();
        $('#onetrust-reject-all-handler').hide();
        $('#onetrust-button-group').append('<button id="syn-done-btn-handler">Done<' + '/button>');
        $('#syn-done-btn-handler').css({'background-color':'#f7f7fa', 'border-color':'#f7f7fa','colo': '#111c24', 'font-size': '.813em','font-weight': '600', 'margin': '0'});
        $('#onetrust-policy-text').html('Synopsys uses cookies to enable and improve the use of the website.  GPC signal detected and only "Required" cookies have been enabled.')

        // Listen for button and close
        $('#syn-done-btn-handler').click(function() {
            OneTrust.RejectAll();
            OneTrust.Close();
        });

        observer.disconnect();
    }
});
observer.observe(document, {attributes: false, childList: true, characterData: false, subtree:true});*/
