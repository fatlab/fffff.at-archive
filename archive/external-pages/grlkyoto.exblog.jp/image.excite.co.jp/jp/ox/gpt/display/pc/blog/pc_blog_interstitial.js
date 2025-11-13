let exgptInst = {
  url: window.location.href,
  metaCheck: metaName => {
    let meta = document.querySelector(`[name=${metaName}][content]`);
    return meta !== null && meta.content === 'true' || meta !== null && meta.content === 'no-rec';
  }
};
(() => {
  if (
     exgptInst.url === 'https://blog.excite.co.jp'
  || exgptInst.url === 'https://www.exblog.jp'
  || exgptInst.metaCheck('contents-type-foreign')
  || exgptInst.metaCheck('outbrain-crawl')
  || !(exgptInst.metaCheck('ad'))
  ) return;
  let google_interstitial_slot, staticSlot;
  googletag.cmd.push(() => {
    google_interstitial_slot = googletag.defineOutOfPageSlot('/18333008/PC_blog_interstitial', googletag.enums.OutOfPageFormat.INTERSTITIAL);
    if (google_interstitial_slot) {
      google_interstitial_slot.addService(googletag.pubads());
      let status = document.getElementById('status');
      let link = document.getElementById('link');
      if (status) {
        status.innerText = '';
      }
      googletag.pubads().addEventListener('slotOnload', event => {
        if (google_interstitial_slot === event.slot) {
          if (link) {
            link.style.display = 'block';
          }
          if (status) {
            status.innerText = '';
          }
        }
      });
    }
    googletag.pubads().enableSingleRequest();
    googletag.enableServices();
    googletag.display(google_interstitial_slot);
  });
})();
