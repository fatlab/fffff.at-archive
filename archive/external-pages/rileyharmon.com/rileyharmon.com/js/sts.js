(function(){
    
    function sendLog(urlLabel) {
        var deviceId = localStorage.getItem('device_id') || '-';
        navigator.sendBeacon('../../stats/logger.php', JSON.stringify({
            event: urlLabel,
            url: urlLabel,
            device_id: deviceId
        }));
    }

    
    var clouds = document.getElementById('cloud-link');
    if (clouds) {
        clouds.addEventListener('click', function(e){
            e.preventDefault();
            sendLog('/cloud-click');
        });
    }

    
    var lab = document.getElementById('lab-link');
    if (lab) {
        lab.addEventListener('click', function(){
            sendLog('/lab-icon-click');
            // Let the normal navigation to /lab proceed
        });
    }
})();


(function() {
  let deviceId = localStorage.getItem('device_id');
  if (!deviceId) {
    deviceId = Math.random().toString(36).substr(2, 12);
    localStorage.setItem('device_id', deviceId);
  }

  const referer = document.referrer || '-';

  navigator.sendBeacon('../../stats/logger.php', JSON.stringify({ // modify dir
    device_id: deviceId,
    url: window.location.pathname + window.location.search,
    referer: referer
  }));
})();