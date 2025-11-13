const exgptList = {
  gpt_pc_blog_overlay: [
    {
      id: 'gpt_pc_blog_overlay',
      size: [
        [970, 90],
        [728, 90]
      ],
      path: '/18333008/PC_blog_overlay',
      display: true,
      aps: true,
      apssize: [
        [970, 90],
        [728, 90]
      ],
      load: 'gptAdSlots',
      genieePath: ['584/612/a1584612'],
      genieeSize: [[728, 90]]
    }
  ],
  gpt_pc_blog_header: [
    {
      id: 'gpt_pc_blog_header_left',
      genieePath: ['584/613/a1584613'],
      genieeSize: [[300, 250]]
    }
  ],
  gpt_pc_blog_inarticle_rec: [
    {
      id: 'gpt_pc_blog_inarticle_rec_left',
      size: [300, 250],
      path: '/18333008/PC_blog_inarticle_rec_left',
      display: true,
      aps: true,
      apssize: [300, 250],
      load: 'gptLazyAdSlots',
      genieePath: ['584/615/a1584615'],
      genieeSize: [[300, 250]]
    },
    {
      id: 'gpt_pc_blog_inarticle_rec_2_left',
      size: [300, 250],
      path: '/18333008/PC_blog_inarticle_rec_2_left',
      display: true,
      aps: true,
      apssize: [300, 250],
      load: 'gptLazyAdSlots',
      genieePath: ['584/617/a1584617'],
      genieeSize: [[300, 250]]
    },
    {
      id: 'gpt_pc_blog_inarticle_rec_3_left',
      size: [300, 250],
      path: '/18333008/PC_blog_inarticle_rec_3_left',
      display: true,
      aps: true,
      apssize: [300, 250],
      load: 'gptLazyAdSlots',
      genieePath: ['584/619/a1584619'],
      genieeSize: [[300, 250]]
    },
    {
      id: 'gpt_pc_blog_inarticle_rec_4_left',
      size: [300, 250],
      path: '/18333008/PC_blog_inarticle_rec_4_left',
      display: true,
      aps: true,
      apssize: [300, 250],
      load: 'gptLazyAdSlots',
      genieePath: ['584/621/a1584621'],
      genieeSize: [[300, 250]]
    },
    {
      id: 'gpt_pc_blog_inarticle_rec_5_left',
      size: [300, 250],
      path: '/18333008/PC_blog_inarticle_rec_5_left',
      display: true,
      aps: true,
      apssize: [300, 250],
      load: 'gptLazyAdSlots',
      genieePath: ['584/623/a1584623'],
      genieeSize: [[300, 250]]
    }
  ],
  gpt_pc_blog_article_native: [
    {
      id: 'gpt_pc_blog_article_native_left',
      size: [
        [336, 280],
        [300, 250]
      ],
      path: '/18333008/Userblog_footer_rect',
      display: true,
      aps: true,
      apssize: [
        [336, 280],
        [300, 250]
      ],
      load: 'gptLazyAdSlots',
      genieePath: ['584/610/a1584610'],
      genieeSize: [[300, 250]]
    }
  ],
  referrer: [
    {
      value: 'Google',
      normalPattern: 'google',
      irregularValue: 'GoogleNews',
      irregularPattern: 'news.google.com/'
    },
    {
      value: 'Yahoo',
      normalPattern: 'yahoo',
      irregularValue: 'chiebukuro',
      irregularPattern: 'detail.chiebukuro.yahoo.co.jp/'
    },
    {
      value: 'docomo',
      normalPattern: 'docomo',
      irregularValue: 'search.smt.docomo',
      irregularPattern: 'search.smt.docomo'
    },
    {
      value: 'Direct',
      normalPattern: '(direct)'
    },
    {
      value: 'Twitter',
      normalPattern: '/t.co/'
    },
    {
      value: 'Bing',
      normalPattern: 'bing'
    },
    {
      value: 'SmartNews',
      normalPattern: 'smartnews.com/'
    },
    {
      value: 'webpush',
      normalPattern: 'webpush'
    },
    {
      value: 'msn',
      normalPattern: 'msn.com/'
    },
    {
      value: 'ourbrain',
      normalPattern: 'outbrain.com/'
    },
    {
      value: 'Gunosy',
      normalPattern: 'gunosy'
    },
    {
      value: 'Facebook',
      normalPattern: 'm.facebook.com/'
    },
    {
      value: 'auone',
      normalPattern: 'sp-web.search.auone.jp/'
    },
    {
      value: 'duckduckgo',
      normalPattern: 'duckduckgo'
    },
    {
      value: 'Rakuten',
      normalPattern: 'websearch.rakuten.co.jp/'
    },
    {
      value: 'Wikipedia',
      normalPattern: '.wikipedia.org/'
    },
    {
      value: 'LINE',
      normalPattern: 'news.line.me/'
    },
    {
      value: 'searchdesk',
      normalPattern: 'searchdesk.com/'
    },
    {
      value: 'NEWSBREAK',
      normalPattern: 'newsbreakapp.com/'
    },
    {
      value: 'girlschannel',
      normalPattern: 'girlschannel.net/'
    },
    {
      value: 'newspicks',
      normalPattern: 'newspicks.com/'
    }
  ]
};
var exgpt = {
  url: window.location.href,
  dmp: {
    tag: 'https://image.excite.co.jp/jp/ox/gpt/dmp.js',
    set: function (v) {
      if (window.exat_f_dfp) {
        switch (v) {
          case 'gender':
            return window.exat_f_dfp.gender();
            break;
          case 'age':
            return window.exat_f_dfp.age();
            break;
          case 'im':
            return window.exat_f_dfp.im();
            break;
          default:
            return 'null';
            break;
        }
      } else {
        return 'null';
      }
    }
  },
  site: {
    topPage: () => {
      return exgpt.chkFlg(exgpt.url.match(/^(https|http):\/\/(www|www-stage).exblog.jp\/($|\?.*)/));
    },
    topPageLower: () => {
      return exgpt.chkFlg(
        exgpt.url.match(
          /^(https|http):\/\/(www|www-stage).exblog.jp\/(genre|ranking|tag|\.*)\/($|.*)/
        )
      );
    },
    userTopPage: () => {
      return exgpt.chkFlg(exgpt.url.match(/^(?!.*www).*exblog.jp\/($|\?.*)/));
    },
    catgoryTop: function () {
      return exgpt.chkFlg(exgpt.url.indexOf('exblog.jp/i00/') != -1);
    },
    catgory: function () {
      return exgpt.chkFlg(
        exgpt.site.catgoryTop() === false && exgpt.url.indexOf('exblog.jp/i') != -1
      );
    },
    tagsTop: function () {
      return exgpt.chkFlg(exgpt.url.indexOf('exblog.jp/tags/_titles/') != -1);
    },
    tags: function () {
      return exgpt.chkFlg(
        exgpt.site.tagsTop() === false && exgpt.url.indexOf('exblog.jp/tags/') != -1
      );
    },
    monthTop: function () {
      return exgpt.chkFlg(exgpt.url.indexOf('exblog.jp/m1900-01-01/') != -1);
    },
    month: function () {
      return exgpt.chkFlg(
        exgpt.site.monthTop() === false && exgpt.url.indexOf('exblog.jp/m') != -1
      );
    },
    imglist: function () {
      return exgpt.chkFlg(exgpt.url.indexOf('exblog.jp/iv/') != -1);
    },
    article: function () {
      return exgpt.chkFlg(
        exgpt.url.match(/^(https|http):\/\/.*exblog.jp\/[0-9]{1,}\/($|\?.*)/) ||
          exgpt.url.match(/^(https|http):\/\/blog.excite.co.jp\/.*\/[0-9]{1,}\/($|\?.*)/)
      );
    }
  },
  catTarget: function () {
    var m = document.getElementsByTagName('meta');
    var n = m.length;
    for (var i = 0; i < n; i++) {
      var b = m[i].getAttribute('property');
      var c = m[i].getAttribute('content');
      if (b == 'exblog:genre_id') {
        return c;
        break;
      }
    }
  },
  getMetaContent: metaContentName => {
    let metaContent = document.querySelector(`meta[name="${metaContentName}"]`);
    if (metaContent !== null) {
      return metaContent.content;
    } else {
      return '';
    }
  },
  extractFromReferrer: () => {
    const target = document.referrer;
    const referrerLength = exgptList.referrer.length;
    for (let i = 0; i < referrerLength; i++) {
      let irregularStrEmpty = false;
      let resultKey = false;
      if (target === '') {
        return '';
      }
      if (exgptList.referrer[i].hasOwnProperty('irregularPattern')) {
        irregularStrEmpty = exgptList.referrer[i].irregularPattern === '';
        resultKey = target.includes(exgptList.referrer[i].irregularPattern);
      }
      if (!exgptList.referrer[i].hasOwnProperty('irregularPattern') || irregularStrEmpty) {
        resultKey = target.includes(exgptList.referrer[i].normalPattern);
      }
      if (!irregularStrEmpty) {
        resultIrregular = target.includes(exgptList.referrer[i].irregularPattern);
      }
      if (resultIrregular) {
        return exgptList.referrer[i].irregularValue;
      }
      if (!resultKey) {
        resultKey = target.includes(exgptList.referrer[i].normalPattern);
      }
      if (resultKey) {
        return exgptList.referrer[i].value;
      }
    }
    return 'Other';
  },
  slotData: function (reqSlots, adSlots, lazyLoad) {
    var l = adSlots.length;
    var gt = [];
    for (var i = 0; i < l; i++) {
      var a = adSlots[i];
      // TAM並走有りの枠
      if (a.aps === true) {
        gt.push({
          divId: a.id,
          gpt: {
            unitCode: a.path,
            sizes: a.size
          },
          aps: {
            slotName: a.path,
            sizes: a.apssize
          }
        });
      } else {
        var b = googletag.defineSlot(a.path, a.size, a.id).addService(googletag.pubads());
        if (a.display === true) {
          reqSlots.push(b);
        } else {
          reqSlots.push(b.setCollapseEmptyDiv(true, true));
        }
      }
    }
    // 最後にprebid有り枠を含める
    reqSlots.push(gt);
  },
  lazyLoad: slotData => {
    const elemIdName = [
      'gpt_pc_blog_article_native_left',
      'gpt_pc_blog_inarticle_rec_left',
      'gpt_pc_blog_inarticle_rec_2_left',
      'gpt_pc_blog_inarticle_rec_3_left',
      'gpt_pc_blog_inarticle_rec_4_left',
      'gpt_pc_blog_inarticle_rec_5_left'
    ];
    let requestFlux = false;
    // slotData.divIdがない = gptrequest.
    if (typeof slotData.gpt === 'undefined') {
      // 処理
      var elemId = slotData.getSlotElementId();
    } else {
      var elemId = slotData.divId;
      requestFlux = true;
    }

    const elem = document.getElementById(elemId);
    if (elem !== null) {
      const displayHeight = window.innerHeight;
      let refreshed = false;
      let timing;
      let fnAheadOfLazy = num => {
        timing = elem.getBoundingClientRect().top + window.pageYOffset - num;
      };
      if (elemIdName.includes(elemId)) {
        fnAheadOfLazy(1500);
      } else {
        fnAheadOfLazy(100);
      }

      let listener = () => {
        let scroll = document.documentElement.scrollTop || document.body.scrollTop;
        let scrollPosition = displayHeight + scroll;

        if (scrollPosition >= timing) {
          refresh();
        }
      };
      if (displayHeight < timing) {
        window.addEventListener('scroll', listener);
      } else {
        refresh();
      }

      function refresh() {
        if (requestFlux) {
          window.fluxtag.renderAds([slotData], window.fluxtag.failSafeTimeout);
        } else {
          googletag.pubads().refresh([slotData]);
        }
        refreshed = true;
        window.removeEventListener('scroll', listener);
      }
    }
  },
  jsLoad: function (v) {
    var a = document.createElement('script');
    a.async = true;
    a.src = v;
    var b = document.getElementsByTagName('script')[0];
    b.parentNode.insertBefore(a, b);
  },
  styleLoad: function (v) {
    var a = document.createElement('style');
    var b = document.getElementsByTagName('script')[0];
    b.parentNode.insertBefore(a, b);
    a.innerHTML = v;
  },
  chkMeta: function (v) {
    var a = document.getElementsByTagName('meta');
    var n = a.length;
    var c = false;
    for (var i = 0; i < n; i++) {
      var b = a[i].getAttribute('name');
      if (b == v) {
        c = true;
        break;
      }
    }
    return c;
  },
  chkTypeForeign: function () {
    let meta = document.querySelector('[name=contents-type-foreign][content]');
    return meta !== null && meta.content === 'true';
  },
  chkGdn: function () {
    if (exgpt.chkMeta('outbrain-crawl') === true) {
      return 'NG';
    } else {
      return 'OK';
    }
  },
  chkFlg: function (e) {
    if (e) {
      return true;
    } else {
      return false;
    }
  },
  userAdDisplay: () => {
    let k = document.getElementsByTagName('meta');
    let n = k.length;
    for (let i = 0; i < n; i++) {
      let key = k[i];
      let name = key.getAttribute('name');
      if (name == 'ad') {
        let str = key.getAttribute('content');
        if (str === 'true') {
          return true;
        } else {
          return false;
        }
      }
    }
    return false;
  },
  targetBrowser: () => {
    const targetBrowser = ['msie', 'trident', 'ie', 'edge', 'chrome', 'safari'];
    return targetBrowser;
  },
  browserCheck: targetBrowser => {
    const browser = window.navigator.userAgent.toLowerCase();
    if (
      browser.indexOf(exgpt.targetBrowser()[0]) !== -1 ||
      browser.indexOf(exgpt.targetBrowser()[1]) !== -1
    ) {
      return exgpt.targetBrowser()[0] === targetBrowser;
    }
    if (browser.indexOf(exgpt.targetBrowser()[2]) !== -1) {
      return exgpt.targetBrowser()[2] === targetBrowser;
    }
    if (browser.indexOf(exgpt.targetBrowser()[3]) !== -1) {
      return exgpt.targetBrowser()[3] === targetBrowser;
    }
    if (browser.indexOf(exgpt.targetBrowser()[4]) !== -1) {
      return exgpt.targetBrowser()[4] === targetBrowser;
    }
    if (browser.indexOf(exgpt.targetBrowser()[5]) !== -1) {
      return exgpt.targetBrowser()[5] === targetBrowser;
    }
  },
  genieeOutput: className => {
    let genieeElem = document.getElementsByClassName(className);
    [...genieeElem].forEach((exgptListClass, i) => {
      let genieeNum = exgptList[className][i].genieePath;
      let genieeHeight = exgptList[className][i].genieeSize[0][1];
      let iframe = document.createElement('iframe');
      exgptListClass.insertAdjacentElement('beforeend', iframe);
      let doc = iframe.contentWindow.document;
      iframe.setAttribute('scrolling', 'no');
      iframe.setAttribute('frameborder', '0');
      iframe.setAttribute('style', `width: 100%; height: ${genieeHeight}px;`);
      doc.open();
      let html = `
        <html>
          <body style="margin: 0; padding: 0; display: flex; justify-content: center; align-items: center;">
            <script src="https://js.gsspcln.jp/t/${genieeNum}.js"></script>
          </body>
        </html>
      `;
      doc.write(html);
      doc.close();
    });
  },
  addClass: idName => {
    let ids = ['gpt_pc_blog_overlay', 'gpt_pc_blog_article_native_left'];
    let idElem = document.getElementById(idName);
    if (idElem !== null && ids.includes(idName)) {
      if (idName === 'gpt_pc_blog_overlay') {
        idElem.classList.add('gpt_pc_blog_overlay');
      }
      if (idName === 'gpt_pc_blog_article_native_left') {
        idElem.classList.add('gpt_pc_blog_article_native');
      }
    }
  },
  pushAfterApsConfirmation: (slotName, obj) => {
    if (obj.aps === true) {
      slotName.push({
        id: obj.id,
        size: obj.size,
        aps: true,
        apssize: obj.apssize,
        path: obj.path,
        display: obj.display
      });
    } else {
      slotName.push({
        id: obj.id,
        size: obj.size,
        path: obj.path,
        display: obj.display
      });
    }
  },
  loadByClass: className => {
    const exgptListClassLength = exgptList[className].length;
    const elem = document.getElementsByClassName(className);

    var reqSlots = [];
    var adSlots = [];
    var lazyAdSlots = [];
    var reqLazyAdSlots = [];

    let baseLength = elem.length;
    if (baseLength > exgptListClassLength) {
      baseLength = exgptListClassLength;
    }

    for (i = 0; i < baseLength; i++) {
      let obj = exgptList[className][i];
      // idを付与
      elem[i].setAttribute('id', obj.id);
      if (obj.load == 'gptAdSlots') {
        exgpt.pushAfterApsConfirmation(adSlots, obj);
      }
      if (obj.load == 'gptLazyAdSlots') {
        exgpt.pushAfterApsConfirmation(lazyAdSlots, obj);
      }
    }
    googletag.cmd.push(function () {
      if (adSlots.length > 0) {
        exgpt.slotData(reqSlots, adSlots, false);
        var fluxSlots = reqSlots.pop();
        googletag.pubads().refresh(reqSlots);
        if (fluxSlots.length > 0) {
          window.fluxtag.renderAds([fluxSlots], window.fluxtag.failSafeTimeout);
        }
      }
      if (lazyAdSlots) {
        exgpt.slotData(reqLazyAdSlots, lazyAdSlots, true);
        var fluxLazySlots = reqLazyAdSlots.pop();
        var l = reqLazyAdSlots.length;
        for (var i = 0; i < l; i++) {
          exgpt.lazyLoad(reqLazyAdSlots[i]);
        }
        // flux request
        var l2 = fluxLazySlots.length;
        for (var i = 0; i < l2; i++) {
          exgpt.lazyLoad(fluxLazySlots[i]);
        }
      }
    });
  },
  loadForNgPage: () => {
    if (!exgpt.chkMeta('display-dfp') && !exgpt.chkMeta('tieup') && exgpt.chkGdn() === 'NG') {
      exgpt.styleLoad(`
        .ad-aside_rectangle_side-by-side,
        .ad-aside-rectangle,
        #gpt_pc_blog_header,
        #gpt_pc_blog_overlay {
          display: none !important;
        }
      `);
    }
  },
  pasteDirectly: (targetId, positionNum) => {
    const elem = window.top.document.getElementById(targetId);
    if (elem !== null) {
      const scrPrimary = document.createElement('script');
      const scrSecondary = document.createElement('script');
      scrPrimary.async = true;
      scrPrimary.src =
        'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8544321996124660';
      scrPrimary.crossOrigin = 'anonymous';
      scrSecondary.innerHTML = '(adsbygoogle = window.adsbygoogle || []).push({});';
      elem.style.textAlign = 'center';
      elem.insertAdjacentHTML(
        'beforeend',
        `<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-8544321996124660" data-ad-slot="${positionNum}"></ins>`
      );
      elem.insertAdjacentElement('beforeend', scrPrimary);
      elem.insertAdjacentElement('beforeend', scrSecondary);
    }
  },
  removeElem: elem => {
    let elems = document.querySelectorAll(elem);
    [...elems].forEach((elem, i) => {
      if (i >= 5) {
        elem.remove();
      }
    });
  },
  limitAdBlockToOne: (parentSelector, childSelector) => {
    document.querySelectorAll(parentSelector).forEach(container => {
      const children = container.querySelectorAll(childSelector);
      children.forEach((el, index) => {
        if (index > 0) el.remove();
      });
    });
  },
  bot: () => {
    const ua = navigator.userAgent;
    if (ua.indexOf('bot') != -1) {
      return 'true';
    } else {
      return '';
    }
  }
};

if (exgpt.chkTypeForeign()) {
  exgpt.styleLoad(`
    body .ad-aside-rectangle,
    body .ad-aside-top_rectangle-sp,
    body .ad-aside-top_billboard,
    body .ad-aside-billboard,
    body .ad-aside_article_infeed {
      display: none;
    }
  `);
}

exgpt.loadForNgPage();

if (
  !exgpt.chkMeta('display-dfp') &&
  !exgpt.chkMeta('tieup') &&
  !exgpt.chkTypeForeign() &&
  exgpt.chkGdn() === 'OK'
) {
  exgpt.styleLoad(`
    html {
      padding-bottom: 90px !important;
    }
  `);

  function adload() {
    exgpt.limitAdBlockToOne('.ad-aside_rectangle_side-by-side', '.gpt_pc_blog_inarticle_rec');
    exgpt.addClass('gpt_pc_blog_overlay');
    if (exgpt.chkTypeForeign()) {
      exgpt.genieeOutput('gpt_pc_blog_overlay');
    }
    exgpt.removeElem('.ad-aside_rectangle_side-by-side');
    if (exgpt.chkTypeForeign()) {
      exgpt.genieeOutput('gpt_pc_blog_inarticle_rec');
    } else {
      exgpt.loadByClass('gpt_pc_blog_inarticle_rec');
    }
    if (
      document.getElementById('gpt_pc_blog_header') &&
      !document.getElementById('blog_billboard_iframe')
    ) {
      let parentElem = document.getElementById('gpt_pc_blog_header');
      let div_left = document.createElement('div');
      parentElem.insertAdjacentElement('beforeend', div_left);
      div_left.id = 'gpt_pc_blog_header_left';
      div_left.classList.add('gpt_pc_blog_header');
      if (exgpt.chkTypeForeign()) {
        exgpt.genieeOutput('gpt_pc_blog_header');
      } else {
        exgpt.pasteDirectly('gpt_pc_blog_header_left', '6450136543');
      }
    }
    if (document.getElementById('gpt_pc_blog_imglist_1st_rec')) {
      exgpt.jsLoad('https://yads.c.yimg.jp/js/yads-async.js');
      exgpt.styleLoad(`
        #yads_text1 {
          margin: 10px 0;
        }.
        yads_ad_item {
          display: block;
          margin-bottom: 20px;
          text-decoration: none;
        }
        .yads_ad_item:hover {
          border: none;
          text-decoration: underline;
        }
        .yads_ad_title {
          display: inline-block;
          margin-bottom: 10px;
          font-size: 14px;
        }
        .yads_ad_adv {
          display: inline-block;
          margin-left: 5px;
          font-size: 80%;
          opacity: 0.8;
        }
        .yads_ad_desc {
          margin-top: 5px;
          font-size: 90%;
        }
        .yads_ad_info {
          font-size: 85%;
          text-align: right;
        }
        .yads_ad_info a {
          text-decoration: none;
          opacity: 0.8;
        }
        .yads_ad_info a:hover {
          border: none;
          text-decoration: underline;
        }
        .yads_ad_info span {
          line-height: 13px;
        }
        .yads_ad_info img {
          margin-left: 3px;
          vertical-align: top;
        }
      `);
      (function () {
        var elem = document.getElementById('gpt_pc_blog_imglist_1st_rec');
        var iframe = document.createElement('iframe');
        elem.appendChild(iframe);
        var doc = iframe.contentWindow.document;
        iframe.setAttribute('scrolling', 'no');
        iframe.setAttribute('frameborder', '0');
        iframe.style.width = '300px';
        iframe.style.height = '250px';
        if (exgpt.chkMeta('outbrain-crawl') === true) {
          doc.open();
          var d = '';
          d += '<html><head></head>';
          d += '<body style="margin: 0; padding: 0;">';
          d +=
            '<scr' +
            'ipt type="text/javascript" src="//i.socdm.com/sdk/js/adg-script-loader.js?id=118672&targetID=adg_118672&displayid=1&adType=PC&width=300&height=250&sdkType=3&async=true&tagver=2.0.0"></scr' +
            'ipt>';
          d += '</body></html>';
          doc.write(d);
          doc.close();
        } else {
          doc.open();
          var d = '';
          d += '<html><head></head>';
          d += '<body style="margin: 0; padding: 0;">';
          d +=
            '<scr' +
            'ipt type="text/javascript" src="//img.ak.impact-ad.jp/ic/pone/tags/0939/036459_7.js"></scr' +
            'ipt>';
          d += '</body></html>';
          doc.write(d);
          doc.close();
        }
        setTimeout(function () {
          if (document.getElementById('articlePhoto')) {
            var a = document.getElementById('articlePhoto');
          } else {
            var a = document.getElementById('container');
          }
          var b = document.createElement('div');
          b.id = 'yads_text1';
          a.appendChild(b);
          yadsRequestAsync({
            yads_ad_ds: '58512_110727',
            yads_parent_element: 'yads_text1'
          });
        }, 300);
      })();
    }
    if (document.getElementById('gpt_pc_blog_article_native') !== null) {
      exgpt.styleLoad(`
        #gpt_pc_blog_article_native {
          overflow: hidden;
          margin: 0 auto;
        }
      `);
      let parentElem = document.getElementById('gpt_pc_blog_article_native');
      let div_left = document.createElement('div');
      parentElem.parentElement.style.display = 'block';
      parentElem.setAttribute(
        'style',
        'display:flex; justify-content: space-evenly; margin-top: 20px'
      );
      parentElem.insertAdjacentElement('beforeend', div_left);
      div_left.id = 'gpt_pc_blog_article_native_left';
      div_left.classList.add('gpt_pc_blog_article_native');
      if (exgpt.chkTypeForeign()) {
        exgpt.genieeOutput('gpt_pc_blog_article_native');
      }
    }
  }

  var gptAdSlots = [];
  var gptLazyAdSlots = [];
  var gptScrollAdSlots = [];
  var defSlots = [];
  var lazySlots = [];
  var scrollSlots = [];
  var pbjsSlots = [];
  var apsSlots = [];

  exgpt.jsLoad(exgpt.dmp.tag);
  exgpt.jsLoad('https://securepubads.g.doubleclick.net/tag/js/gpt.js');
  exgpt.jsLoad('https://flux-cdn.com/client/00125/exblog_00138.min.js');
  (function (t, n, e, a, s, i, c) {
    n[t] ||
      ((n[t] = {
        init: function () {
          o('i', arguments);
        },
        fetchBids: function () {
          o('f', arguments);
        },
        setDisplayBids: function () {},
        _Q: []
      }),
      ((i = e.createElement(a)).async = !0),
      (i.src = s),
      (c = e.getElementsByTagName(a)[0]).parentNode.insertBefore(i, c));
    function o(e, a) {
      n[t]._Q.push([e, a]);
    }
  })('apstag', window, document, 'script', '//c.amazon-adsystem.com/aax2/apstag.js');
  apstag.init({ pubID: '3402', adServer: 'googletag', bidTimeout: 3e3 });

  exgpt.styleLoad(`
    .ad-aside-top_rectangle-pc {
      position: absolute;
      width: 320px;
      left: 50%;
      margin-left: 500px;
    }
  `);

  window.fluxtag = {
    readyBids: {
      prebid: false,
      amazon: false,
      google: false
    },
    failSafeTimeout: 3000,
    isFn: function (object) {
      var _t = 'Function';
      var toString = Object.prototype.toString;
      return toString.call(object) === '[object ' + _t + ']';
    },
    launchAdServer: function () {
      if (!fluxtag.readyBids.prebid || !fluxtag.readyBids.amazon) {
        return;
      }
      fluxtag.requestAdServer();
    },
    requestAdServer: function () {
      if (!fluxtag.readyBids.google) {
        fluxtag.readyBids.google = true;
        googletag.cmd.push(function () {
          if (!!pbjs.setTargetingForGPTAsync && fluxtag.isFn(pbjs.setTargetingForGPTAsync)) {
            pbjs.que.push(function () {
              pbjs.setTargetingForGPTAsync();
            });
          }
          googletag.pubads().refresh();
        });
      }
    },
    renderAds: function (lines, failSafeTimeout) {
      googletag.cmd.push(function () {
        var failSafeTimeout = failSafeTimeout || window.fluxtag.failSafeTimeout;
        var bidRequestTimeout = failSafeTimeout - 500 > 0 ? failSafeTimeout - 500 : failSafeTimeout;
        var refreshLines = [];
        var params = (function () {
          // GAMを呼び出したかを確認にするフラグ
          var readyBids = {
            amazon: false,
            google: false,
            prebid: false
          };
          var definedSlots = [];
          var adsInfo = {
            gpt: {
              slots: [],
              displayDivIds: []
            },
            aps: {
              slots: [],
              divIds: []
            },
            pb: {
              divIds: []
            }
          };
          // window幅に合わせてサイズ一覧を返す関数
          var getSizeList = function (width, height, sizeMappings) {
            // サイズマッピングをfilterして、reduce関数で近い方のサイズを取得
            const sizeMapping = sizeMappings
              .filter(function (mappingObject) {
                return mappingObject[0][0] <= width && mappingObject[0][1] <= height;
              })
              .reduce(function (a, b) {
                return Math.abs(b[0][0] - width) <= Math.abs(a[0][0] - width) &&
                  Math.abs(b[0][1] - height) <= Math.abs(a[0][1] - height)
                  ? b
                  : a;
              });
            // 取得したサイズマッピングのサイズ一覧が空なら空の配列を追加する
            if (!sizeMapping[1].length) {
              sizeMapping[1].push([]);
            }
            // 取得したサイズマッピングのサイズ一覧を返す
            return sizeMapping[1];
          };
          googletag
            .pubads()
            .getSlots()
            .forEach(function (slot) {
              // 既にdefineSlotされていた場合
              definedSlots[slot.getSlotElementId()] = slot;
            });

          lines.forEach(function (line) {
            var divId = line.divId;

            adsInfo.pb.divIds.push(divId);

            refreshLines.push({
              code: line.gpt.unitCode,
              id: divId
            });

            if (definedSlots[divId]) {
              adsInfo.gpt.slots.push(definedSlots[divId]);
            } else {
              var slot = googletag
                .defineSlot(line.gpt.unitCode, line.gpt.sizes, divId)
                .addService(googletag.pubads());

              if (line.gpt.sizeMapping && line.gpt.sizeMapping.length > 0) {
                var sizeMapping = googletag.sizeMapping();
                line.gpt.sizeMapping.forEach(function (size) {
                  sizeMapping.addSize(size[0], size[1]);
                });
                slot.defineSizeMapping(sizeMapping.build());
              }
              if (line.gpt.keyValues && line.gpt.keyValues.length > 0) {
                line.gpt.keyValues.forEach(function (param) {
                  slot.setTargeting(param.key, param.value);
                });
              }
              adsInfo.gpt.slots.push(slot);
              adsInfo.gpt.displayDivIds.push(divId);
            }

            // TAM並走枠の場合
            if (!!line.aps) {
              if (line.gpt.sizeMapping && line.gpt.sizeMapping.length > 0) {
                line.aps.sizes = getSizeList(
                  window.innerWidth,
                  window.innerHeight,
                  line.gpt.sizeMapping
                );
              }
              adsInfo.aps.slots.push({
                slotID: divId,
                slotName: line.aps.slotName,
                sizes: line.aps.sizes
              });
              adsInfo.aps.divIds.push(divId);
            }
          });
          // APSの枠がない場合
          if (adsInfo.aps.slots.length === 0) {
            readyBids.amazon = true;
          }
          // Prebid、APSでオークション後に起動する関数 (GAMコール、広告Display)
          var adServerSend = function () {
            if (!readyBids.amazon || !readyBids.prebid) {
              return;
            }
            if (!readyBids.google) {
              readyBids.google = true;
              adsInfo.gpt.displayDivIds.forEach(function (divId) {
                googletag.display(divId);
              });
              if (!!pbjs.setTargetingForGPTAsync && fluxtag.isFn(pbjs.setTargetingForGPTAsync)) {
                pbjs.que.push(function () {
                  pbjs.setTargetingForGPTAsync(adsInfo.pb.divIds);
                });
              }
              if (
                adsInfo.aps.slots.length > 0 &&
                !!window.apstag &&
                fluxtag.isFn(window.apstag.fetchBids)
              ) {
                window.apstag.setDisplayBids(adsInfo.aps.divIds);
              }
              googletag.pubads().refresh(adsInfo.gpt.slots);
            }
          };
          // APSオークション後に起動する関数
          var apsCallback = function () {
            readyBids.amazon = true;
            adServerSend();
          };
          // Prebidオークション後に起動する関数
          var pbCallback = function () {
            readyBids.prebid = true;
            adServerSend();
          };
          // もしtimeout以内にPrebidが動作できなかった場合、最終的にGAMをコール
          setTimeout(function () {
            readyBids.amazon = true;
            readyBids.prebid = true;
            adServerSend();
          }, failSafeTimeout);

          return {
            aps: {
              slots: adsInfo.aps.slots,
              callback: apsCallback
            },
            prebid: {
              callback: pbCallback
            }
          };
        })();

        if (!!window.pbFlux && window.pbFlux.refresh && fluxtag.isFn(window.pbFlux.refresh)) {
          // Prebid呼び出し
          pbjs.que.push(function () {
            window.pbFlux.refresh({
              lines: refreshLines,
              callback: params.prebid.callback,
              timeout: bidRequestTimeout
            });
          });
        } else {
          params.prebid.callback();
        }

        if (
          params.aps.slots.length > 0 &&
          !!window.apstag &&
          fluxtag.isFn(window.apstag.fetchBids)
        ) {
          // APS呼び出し
          window.apstag.fetchBids(
            {
              slots: params.aps.slots,
              timeout: bidRequestTimeout
            },
            function (bids) {
              params.aps.callback();
            }
          );
        } else {
          params.aps.callback();
        }
      });
    }
  };

  googletag.cmd.push(function () {
    if (exgpt.userAdDisplay()) {
      gptLazyAdSlots.push({
        id: 'gpt_pc_blog_article_native_left',
        size: [
          [336, 280],
          [300, 250]
        ],
        aps: true,
        apssize: [
          [336, 280],
          [300, 250]
        ],
        path: '/18333008/Userblog_footer_rect',
        display: true
      });
      if (!exgpt.site.topPage() && !exgpt.site.topPageLower()) {
        gptAdSlots.push({
          id: 'gpt_pc_blog_overlay',
          size: [
            [970, 90],
            [728, 90]
          ],
          aps: true,
          apssize: [
            [970, 90],
            [728, 90]
          ],
          path: '/18333008/PC_blog_overlay',
          display: true
        });
      }
    }
  });

  googletag.cmd.push(function () {
    exgpt.slotData(defSlots, gptAdSlots, false);
    exgpt.slotData(lazySlots, gptLazyAdSlots, true);
    googletag.pubads().setTargeting('contents-type', exgpt.getMetaContent('contents-type'));
    googletag.pubads().setTargeting('contents-category', exgpt.getMetaContent('contents-category'));
    googletag.pubads().setTargeting('contents-tag', exgpt.getMetaContent('contents-tag'));
    googletag.setConfig('contents-type-flb', exgpt.getMetaContent('contents-type-flb'));
    googletag.pubads().setTargeting('blog_pc_referrer', exgpt.extractFromReferrer());
    googletag.pubads().setTargeting('isBot', exgpt.bot());
    googletag.pubads().enableSingleRequest();
    googletag.pubads().setCentering(true);
    googletag.pubads().collapseEmptyDivs();
    googletag.pubads().disableInitialLoad();
    googletag.enableServices();
    setTimeout(function () {
      // gptAdslotsのリクエスト
      var fluxSlots = defSlots.pop();
      if (defSlots.length > 0) {
        googletag.pubads().refresh(defSlots);
      }
      window.fluxtag.renderAds(fluxSlots, window.fluxtag.failSafeTimeout);

      // gptLazyAdslotsのリクエスト
      if (lazySlots.length > 0) {
        var fluxLazySlots = lazySlots.pop();
        var l = lazySlots.length;
        for (var i = 0; i < l; i++) {
          exgpt.lazyLoad(lazySlots[i]);
        }
        // flux request
        var l2 = fluxLazySlots.length;
        for (var i = 0; i < l2; i++) {
          exgpt.lazyLoad(fluxLazySlots[i]);
        }
      }
    }, window.fluxtag.failSafeTimeout);
  });

  window.addEventListener('DOMContentLoaded', adload);
}
