/** save laylo data to the window so that we can fetch and store it before the Drop app is ready to receive it. as long as we see the iFrame we can begin requesting data because the iframe properties tell us the dropId */
const laylo = {
  userLocation: {},
  drops: {},
  users: {},
  appConfigs: {},
};

/** extract the 'dropId' value from the URL string */
laylo.getIdFromUrl = (url) => {
  // Define a regex pattern to extract the 'dropId' parameter value
  const regex = /(?:\?|&)dropId=([^&]+)/;

  // Use the regex pattern to extract the 'dropId' value from the URL string
  const match = url.match(regex);

  // Extract the 'dropId' value from the matched array
  const dropId = match ? match[1] : null;

  return dropId;
};

/** fetch the Drop and User records from the Laylo API */
laylo.fetchDrop = (dropId) => {
  if (laylo.drops[dropId]) {
    return;
  }

  const isLocalhost =
    (window.location.href.includes("iframeTest.html") ||
      window.location.href.includes("singleDrop.html")) &&
    (window.location.href.includes("127.0.0.1") ||
      window.location.href.includes("localhost"));

  const dropCdnHost = isLocalhost
    ? "."
    : "https://d21i0hc4hl3bvt.cloudfront.net";
  fetch(`${dropCdnHost}/drops/${dropId}.json`, {
    method: "GET",
  }).then((res) => {
    /** Get the lat and long from cloudfront's headers */
    const userLat = res.headers.get("CloudFront-Viewer-Latitude");
    const userLong = res.headers.get("CloudFront-Viewer-Longitude");
    const userCountry = res.headers.get("CloudFront-Viewer-Country");

    laylo.userLocation.latitude = userLat;
    laylo.userLocation.longitude = userLong;
    laylo.userLocation.country = userCountry;

    res.json().then((data) => {
      laylo.drops[dropId] = data;
      const userId = data.user.id;

      if (laylo.users[userId]) {
        return;
      }

      const userCdnHost = isLocalhost
        ? "."
        : "https://d3oyaxbt9vo0fg.cloudfront.net";
      fetch(`${userCdnHost}/users/${userId}.json`, {
        method: "GET",
      }).then((res) => {
        res.json().then((data) => {
          laylo.users[userId] = data;
        });
      });
    });
  });
};

/** initialize the Laylo SDK */
laylo.initialize = () => {
  const layloSdkScripts = document.querySelectorAll("#laylo-sdk") || [];

  if ([...layloSdkScripts].length > 1) {
    console.error(
      `You can only load the Laylo SDK once per page. Please remove any duplicate scripts from your page. Script: <script id="laylo-sdk" src="https://embed.laylo.com/laylo-sdk.js"></script>`
    );
  } else {
    window.layloSdkLoading = true;
  }

  // fetch records without waiting for the iframes and react apps to load
  const iframeElements =
    document.querySelectorAll('iframe[id*="laylo-drop"]') || [];

  [...iframeElements].forEach((iframe) => {
    const dropId =
      laylo.getIdFromUrl(iframe.src) || iframe.id.replace("laylo-drop-", "");
    laylo.fetchDrop(dropId);
  });

  // fetch popups records and handle adding popup to the dom
  const popupElements =
    document.querySelectorAll('div[id*="laylo-drop"]') || [];

  [...popupElements].forEach((popup) => {
    const dropId = popup.id.replace("laylo-drop-", "");
    laylo.fetchDrop(dropId);
    setTimeout(
      laylo.renderPopup({
        id: dropId,
        src: popup.getAttribute("data-laylo-src"),
      }),
      +popup.getAttribute("data-laylo-popup-timer") * 1000 || 5000
    );
  });

  // make sure that any iframes or popups added after the page has loaded are also sent data
  function mutationCallback(mutationsList, observer) {
    mutationsList.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        // If the added node is an iframe with an ID containing 'laylo-drop'
        if (
          node instanceof HTMLIFrameElement &&
          node.id.includes("laylo-drop")
        ) {
          const dropId =
            laylo.getIdFromUrl(node.src) || node.id.replace("laylo-drop-", "");
          laylo.fetchDrop(dropId);
        }

        if (node instanceof HTMLDivElement && node.id.includes("laylo-drop")) {
          const dropId = node.id.replace("laylo-drop-", "");
          laylo.fetchDrop(dropId);
          laylo.renderPopup({
            id: dropId,
            src: node.getAttribute("data-laylo-src"),
          });
        }
      });
    });
  }

  // Create a MutationObserver instance
  const observer = new MutationObserver(mutationCallback);

  // Start observing changes in the DOM
  observer.observe(document.documentElement || document.body, {
    childList: true,
    subtree: true,
  });
};

laylo.createAppConfig = (dropId) => {
  const appConfig = {};

  const isOnLayloWeb = window.location.href.includes("https://laylo.com");
  const maxHeight = isOnLayloWeb ? window.innerHeight : undefined;

  appConfig.maxHeight = maxHeight;
  laylo.appConfigs[dropId] = appConfig;

  return appConfig;
};

/** send the Drop, User, and viewer location data to the Drop app */
laylo.postDrop = (dropId) => {
  let layloIframe =
    document.querySelector(`iframe[id="laylo-drop-${dropId}"]`) ||
    document.getElementById("laylo-drop");

  // if the records haven't loaded yet then wait 10ms and try again
  if (!laylo.drops[dropId] || !laylo.users[laylo.drops[dropId].user.id]) {
    setTimeout(() => {
      laylo.postDrop(dropId);
    }, 10);

    return;
  }

  if (layloIframe) {
    layloIframe.contentWindow.postMessage(
      {
        type: "setUserLocation",
        payload: {
          location: laylo.userLocation,
        },
      },
      "*"
    );

    layloIframe.contentWindow.postMessage(
      {
        type: "setProduct",
        payload: {
          product: laylo.drops[dropId],
          userLocation: laylo.userLocation,
        },
      },
      "*"
    );

    layloIframe.contentWindow.postMessage(
      {
        type: "setUser",
        payload: {
          user: laylo.users[laylo.drops[dropId].user.id],
        },
      },
      "*"
    );

    const appConfig = laylo.createAppConfig(dropId);

    layloIframe.contentWindow.postMessage(
      {
        type: "setAppConfig",
        payload: {
          config: appConfig,
        },
      },
      "*"
    );

    /** we can call iframe resize from the SDK because it lives in the parent window */
    window.iFrameResize({}, `iframe[id="laylo-drop-${dropId}"]`);
  }
};

/** send the window metadata to the Drop app for use in pixel tracking */
laylo.postWindowMetadata = (dropId) => {
  let layloIframe =
    document.querySelector(`iframe[id="laylo-drop-${dropId}"]`) ||
    document.getElementById("laylo-drop");

  if (layloIframe) {
    layloIframe.contentWindow.postMessage(
      {
        type: "setWindowMetadata",
        payload: {
          href: window.location.href,
          hostname: window.location.hostname,
          title: document.title,
        },
      },
      "*"
    );
  }
};

/** listen for the Drop app to tell the SDK that it is ready to receive data that the SDK has retrieved */
window.addEventListener("message", (event) => {
  if (event.data.dropLoaded) {
    let layloIframe =
      document.getElementById(`laylo-drop-${event.data.dropId}`) ||
      document.getElementById("laylo-drop");

    if (!layloIframe) {
      console.error(
        "Laylo iframe not found. Please make sure you have properly copied the embed code into your page."
      );

      return;
    }

    laylo.postWindowMetadata(event.data.dropId);
    laylo.postDrop(event.data.dropId);
  }
});

/** wait for the page to load before attempting to fetch records and initializing the mutation observer */
laylo.checkDomLoaded = () => {
  if (
    document.readyState === "complete" ||
    document.readyState === "loaded" ||
    document.readyState === "interactive"
  ) {
    laylo.initialize();
  } else {
    setTimeout(() => {
      laylo.checkDomLoaded();
    }, 5);
  }
};

laylo.checkDomLoaded();

laylo.previousBodyOverflow = null;

laylo.renderPopup = ({ id, src }) => {
  laylo.previousBodyOverflow = document.body.style.overflow;

  const scrim = document.createElement("div");
  scrim.id = `laylo-popup-scrim-${id}`;
  scrim.role = "dialog";
  scrim.ariaLabelledby = "modal-title";
  scrim.ariaModal = "true";
  scrim.style =
    "position: fixed; z-index: 1000; left: 0; top: 0; width: 100%; height: 100vh; overflow: auto; background-color: rgba(0, 0, 0, 0.2); display:flex; flex-direction: column; align-items: center;";
  scrim.onclick = (e) => laylo.closeModal(e, id);
  document.body.appendChild(scrim);

  const modalContent = document.createElement("div");
  modalContent.id = "laylo-popup-scrim-content";
  modalContent.style =
    "display: flex; flex-direction: column; margin: auto; padding: 20px; width: 80%; max-width: 600px; align-items: center;";
  scrim.appendChild(modalContent);

  const scrimCloseButton = document.createElement("span");
  scrimCloseButton.id = "laylo-popup-scrim-close";
  scrimCloseButton.innerHTML = "&times;";
  scrimCloseButton.style =
    "color: #000; font-size: 28px; font-weight: bold; align-self: flex-end; cursor: pointer;";
  scrimCloseButton.onclick = (e) => laylo.closeModal(e, id);
  modalContent.appendChild(scrimCloseButton);

  const layloIframe = document.createElement("iframe");
  layloIframe.id = `laylo-drop-${id}`;
  layloIframe.frameborder = "0";
  layloIframe.scrolling = "no";
  layloIframe.allowtransparency = "true";
  layloIframe.style =
    "width: 1px; min-width: 100%; max-width: 1000px;border: none";
  layloIframe.src = src;
  modalContent.appendChild(layloIframe);

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && scrim.style.display === "flex") {
      laylo.closeModal(event, id);
    }
  });

  document.body.style.overflow = "hidden";
};

laylo.closeModal = (e, id) => {
  e.stopPropagation();
  e.preventDefault();
  const modal = document.getElementById(`laylo-popup-scrim-${id}`);
  document.body.removeChild(modal);
  document.body.style.overflow = laylo.previousBodyOverflow;
};

laylo.openPopup = ({
  id,
  minimal = "",
  customCTA = "",
  color = "",
  theme = "",
  collapse = "",
  background = "",
  fullWidth = "",
  secondsToWait = 5,
}) => {
  setTimeout(() => {
    laylo.renderPopup({
      id,
      src: `https://embed.laylo.com?dropId=${id}&minimal=${minimal}&customTitle=${customCTA}&color=${color}&theme=${theme}&collapse=${collapse}&background=${background}&fullWidth=${fullWidth}`,
    });
  }, secondsToWait * 1000);
};

laylo.setContact = ({ email, phoneNumber }) => {
  const layloIframes = document.querySelectorAll(`iframe[id*="laylo-drop"]`);

  layloIframes.forEach((iframe) => {
    iframe.contentWindow.postMessage(
      {
        type: "setContact",
        payload: {
          email,
          phoneNumber,
        },
      },
      "*"
    );
  });
};

/*! iFrame Resizer (iframeSizer.min.js ) - v4.3.9 - 2023-11-10
 *  Desc: Force cross domain iframes to size to content.
 *  Requires: iframeResizer.contentWindow.min.js to be loaded into the target frame.
 *  Copyright: (c) 2023 David J. Bradshaw - dave@bradshaw.net
 *  License: MIT
 */
!(function (d) {
  var c, u, a, v, x, I, M, r, f, k, i, l, z;

  function m() {
    return (
      window.MutationObserver ||
      window.WebKitMutationObserver ||
      window.MozMutationObserver
    );
  }

  function F(e, n, i) {
    e.addEventListener(n, i, !1);
  }

  function B(e, n, i) {
    e.removeEventListener(n, i, !1);
  }

  function p(e) {
    return (
      x +
      "[" +
      ((n = "Host page: " + (e = e)),
      (n =
        window.top !== window.self
          ? window.parentIFrame && window.parentIFrame.getId
            ? window.parentIFrame.getId() + ": " + e
            : "Nested host page: " + e
          : n)) +
      "]"
    );
    var n;
  }

  function t(e) {
    return k[e] ? k[e].log : u;
  }

  function O(e, n) {
    o("log", e, n, t(e));
  }

  function E(e, n) {
    o("info", e, n, t(e));
  }

  function R(e, n) {
    o("warn", e, n, !0);
  }

  function o(e, n, i, t) {
    !0 === t && "object" == typeof window.console && console[e](p(n), i);
  }

  function w(e) {
    function i() {
      t("Height"),
        t("Width"),
        P(
          function () {
            H(w), C(b), l("onResized", w);
          },
          w,
          "init"
        );
    }

    function n() {
      var e = p.slice(I).split(":"),
        n = e[1] ? parseInt(e[1], 10) : 0,
        i = k[e[0]] && k[e[0]].iframe,
        t = getComputedStyle(i);
      return {
        iframe: i,
        id: e[0],
        height:
          n +
          (function (e) {
            if ("border-box" !== e.boxSizing) return 0;
            var n = e.paddingTop ? parseInt(e.paddingTop, 10) : 0,
              e = e.paddingBottom ? parseInt(e.paddingBottom, 10) : 0;
            return n + e;
          })(t) +
          (function (e) {
            if ("border-box" !== e.boxSizing) return 0;
            var n = e.borderTopWidth ? parseInt(e.borderTopWidth, 10) : 0,
              e = e.borderBottomWidth ? parseInt(e.borderBottomWidth, 10) : 0;
            return n + e;
          })(t),
        width: e[2],
        type: e[3],
      };
    }

    function t(e) {
      var n = Number(k[b]["max" + e]),
        i = Number(k[b]["min" + e]),
        e = e.toLowerCase(),
        t = Number(w[e]);
      O(b, "Checking " + e + " is in range " + i + "-" + n),
        t < i && ((t = i), O(b, "Set " + e + " to min value")),
        n < t && ((t = n), O(b, "Set " + e + " to max value")),
        (w[e] = "" + t);
    }

    function o() {
      var t = e.origin,
        o = k[b] && k[b].checkOrigin;
      if (
        o &&
        "" + t != "null" &&
        !(function () {
          if (o.constructor !== Array)
            return (
              (e = k[b] && k[b].remoteHost),
              O(b, "Checking connection is from: " + e),
              t === e
            );
          var e,
            n = 0,
            i = !1;
          for (
            O(b, "Checking connection is from allowed list of origins: " + o);
            n < o.length;
            n++
          )
            if (o[n] === t) {
              i = !0;
              break;
            }
          return i;
        })()
      )
        throw new Error(
          "Unexpected message received from: " +
            t +
            " for " +
            w.iframe.id +
            ". Message was: " +
            e.data +
            ". This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains."
        );
      return 1;
    }

    function a(e) {
      return p.slice(p.indexOf(":") + v + e);
    }

    function s(i, t) {
      var e, n, o;
      (e = function () {
        var e, n;
        A(
          "Send Page Info",
          "pageInfo:" +
            ((e = document.body.getBoundingClientRect()),
            (n = w.iframe.getBoundingClientRect()),
            JSON.stringify({
              iframeHeight: n.height,
              iframeWidth: n.width,
              clientHeight: Math.max(
                document.documentElement.clientHeight,
                window.innerHeight || 0
              ),
              clientWidth: Math.max(
                document.documentElement.clientWidth,
                window.innerWidth || 0
              ),
              offsetTop: parseInt(n.top - e.top, 10),
              offsetLeft: parseInt(n.left - e.left, 10),
              scrollTop: window.pageYOffset,
              scrollLeft: window.pageXOffset,
              documentHeight: document.documentElement.clientHeight,
              documentWidth: document.documentElement.clientWidth,
              windowHeight: window.innerHeight,
              windowWidth: window.innerWidth,
            })),
          i,
          t
        );
      }),
        (n = 32),
        z[(o = t)] ||
          (z[o] = setTimeout(function () {
            (z[o] = null), e();
          }, n));
    }

    function r(e) {
      e = e.getBoundingClientRect();
      return (
        W(b),
        {
          x: Math.floor(Number(e.left) + Number(M.x)),
          y: Math.floor(Number(e.top) + Number(M.y)),
        }
      );
    }

    function d(e) {
      var n = e ? r(w.iframe) : { x: 0, y: 0 },
        i = { x: Number(w.width) + n.x, y: Number(w.height) + n.y };
      O(
        b,
        "Reposition requested from iFrame (offset x:" + n.x + " y:" + n.y + ")"
      ),
        window.top === window.self
          ? ((M = i), c(), O(b, "--"))
          : window.parentIFrame
          ? window.parentIFrame["scrollTo" + (e ? "Offset" : "")](i.x, i.y)
          : R(
              b,
              "Unable to scroll to requested position, window.parentIFrame not found"
            );
    }

    function c() {
      !1 === l("onScroll", M) ? S() : C(b);
    }

    function u(e) {
      var e = e.split("#")[1] || "",
        n = decodeURIComponent(e),
        n = document.getElementById(n) || document.getElementsByName(n)[0];
      n
        ? ((n = r(n)),
          O(
            b,
            "Moving to in page link (#" + e + ") at x: " + n.x + " y: " + n.y
          ),
          (M = { x: n.x, y: n.y }),
          c(),
          O(b, "--"))
        : window.top === window.self
        ? O(b, "In page link #" + e + " not found")
        : window.parentIFrame
        ? window.parentIFrame.moveToAnchor(e)
        : O(
            b,
            "In page link #" +
              e +
              " not found and window.parentIFrame not found"
          );
    }

    function f(e) {
      var n,
        i = {};
      (i =
        0 === Number(w.width) && 0 === Number(w.height)
          ? { x: (n = a(9).split(":"))[1], y: n[0] }
          : { x: w.width, y: w.height }),
        l(e, {
          iframe: w.iframe,
          screenX: Number(i.x),
          screenY: Number(i.y),
          type: w.type,
        });
    }

    function l(e, n) {
      return T(b, e, n);
    }

    function m() {
      switch ((k[b] && k[b].firstRun && k[b] && (k[b].firstRun = !1), w.type)) {
        case "close":
          N(w.iframe);
          break;
        case "message":
          (n = a(6)),
            O(
              b,
              "onMessage passed: {iframe: " +
                w.iframe.id +
                ", message: " +
                n +
                "}"
            ),
            l("onMessage", { iframe: w.iframe, message: JSON.parse(n) }),
            O(b, "--");
          break;
        case "mouseenter":
          f("onMouseEnter");
          break;
        case "mouseleave":
          f("onMouseLeave");
          break;
        case "autoResize":
          k[b].autoResize = JSON.parse(a(9));
          break;
        case "scrollTo":
          d(!1);
          break;
        case "scrollToOffset":
          d(!0);
          break;
        case "pageInfo":
          s(k[b] && k[b].iframe, b),
            (r = b),
            e("Add ", F),
            k[r] && (k[r].stopPageInfo = o);
          break;
        case "pageInfoStop":
          k[b] &&
            k[b].stopPageInfo &&
            (k[b].stopPageInfo(), delete k[b].stopPageInfo);
          break;
        case "inPageLink":
          u(a(9));
          break;
        case "reset":
          j(w);
          break;
        case "init":
          i(), l("onInit", w.iframe);
          break;
        default:
          0 === Number(w.width) && 0 === Number(w.height)
            ? R(
                "Unsupported message received (" +
                  w.type +
                  "), this is likely due to the iframe containing a later version of iframe-resizer than the parent page"
              )
            : i();
      }

      function e(n, i) {
        function t() {
          k[r] ? s(k[r].iframe, r) : o();
        }

        ["scroll", "resize"].forEach(function (e) {
          O(r, n + e + " listener for sendPageInfo"), i(window, e, t);
        });
      }

      function o() {
        e("Remove ", B);
      }

      var r, n;
    }

    var g,
      h,
      p = e.data,
      w = {},
      b = null;
    if ("[iFrameResizerChild]Ready" === p)
      for (var y in k) A("iFrame requested init", L(y), k[y].iframe, y);
    else
      x === ("" + p).slice(0, I) && p.slice(I).split(":")[0] in k
        ? ((w = n()),
          (b = w.id),
          k[b] && (k[b].loaded = !0),
          (h = w.type in { true: 1, false: 1, undefined: 1 }) &&
            O(b, "Ignoring init message from meta parent page"),
          !h &&
            ((h = !0),
            k[(g = b)] ||
              ((h = !1),
              R(w.type + " No settings for " + g + ". Message was: " + p)),
            h) &&
            (O(b, "Received: " + p),
            (g = !0),
            null === w.iframe &&
              (R(b, "IFrame (" + w.id + ") not found"), (g = !1)),
            g && o() && m()))
        : E(b, "Ignored: " + p);
  }

  function T(e, n, i) {
    var t = null,
      o = null;
    if (k[e]) {
      if ("function" != typeof (t = k[e][n]))
        throw new TypeError(n + " on iFrame[" + e + "] is not a function");
      o = t(i);
    }
    return o;
  }

  function g(e) {
    e = e.id;
    delete k[e];
  }

  function N(e) {
    var n = e.id;
    if (!1 === T(n, "onClose", n))
      O(n, "Close iframe cancelled by onClose event");
    else {
      O(n, "Removing iFrame: " + n);
      try {
        e.parentNode && e.parentNode.removeChild(e);
      } catch (e) {
        R(e);
      }
      T(n, "onClosed", n), O(n, "--"), g(e);
    }
  }

  function W(e) {
    null === M &&
      O(
        e,
        "Get page position: " +
          (M = {
            x:
              window.pageXOffset === d
                ? document.documentElement.scrollLeft
                : window.pageXOffset,
            y:
              window.pageYOffset === d
                ? document.documentElement.scrollTop
                : window.pageYOffset,
          }).x +
          "," +
          M.y
      );
  }

  function C(e) {
    null !== M &&
      (window.scrollTo(M.x, M.y),
      O(e, "Set page position: " + M.x + "," + M.y),
      S());
  }

  function S() {
    M = null;
  }

  function j(e) {
    O(
      e.id,
      "Size reset requested by " + ("init" === e.type ? "host page" : "iFrame")
    ),
      W(e.id),
      P(
        function () {
          H(e), A("reset", "reset", e.iframe, e.id);
        },
        e,
        "reset"
      );
  }

  function H(o) {
    function i(e) {
      var n;

      function i() {
        Object.keys(k).forEach(function (e) {
          function n(e) {
            return "0px" === (k[i] && k[i].iframe.style[e]);
          }

          var i;
          k[(i = e)] &&
            null !== k[i].iframe.offsetParent &&
            (n("height") || n("width")) &&
            A("Visibility change", "resize", k[i].iframe, i);
        });
      }

      function t(e) {
        O("window", "Mutation observed: " + e[0].target + " " + e[0].type),
          h(i, 16);
      }

      !a &&
        "0" === o[e] &&
        ((a = !0),
        O(r, "Hidden iFrame detected, creating visibility listener"),
        (e = m())) &&
        ((n = document.querySelector("body")),
        new e(t).observe(n, {
          attributes: !0,
          attributeOldValue: !1,
          characterData: !0,
          characterDataOldValue: !1,
          childList: !0,
          subtree: !0,
        }));
    }

    function e(e) {
      var n;
      (n = e),
        o.id
          ? ((o.iframe.style[n] = o[n] + "px"),
            O(o.id, "IFrame (" + r + ") " + n + " set to " + o[n] + "px"))
          : O("undefined", "messageData id not set"),
        i(e);
    }

    var r = o.iframe.id;
    k[r] && (k[r].sizeHeight && e("height"), k[r].sizeWidth) && e("width");
  }

  function P(e, n, i) {
    i !== n.type && r && !window.jasmine
      ? (O(n.id, "Requesting animation frame"), r(e))
      : e();
  }

  function A(n, i, t, o, e) {
    function r() {
      var e;
      t && "contentWindow" in t && null !== t.contentWindow
        ? ((e = k[o] && k[o].targetOrigin),
          O(
            o,
            "[" +
              n +
              "] Sending msg to iframe[" +
              o +
              "] (" +
              i +
              ") targetOrigin: " +
              e
          ),
          t.contentWindow.postMessage(x + i, e))
        : R(o, "[" + n + "] IFrame(" + o + ") not found");
    }

    function a() {
      e &&
        k[o] &&
        k[o].warningTimeout &&
        (k[o].msgTimeout = setTimeout(function () {
          !k[o] ||
            k[o].loaded ||
            s ||
            ((s = !0),
            R(
              o,
              "IFrame has not responded within " +
                k[o].warningTimeout / 1e3 +
                " seconds. Check iFrameResizer.contentWindow.js has been loaded in iFrame. This message can be ignored if everything is working, or you can set the warningTimeout option to a higher value or zero to suppress this warning."
            ));
        }, k[o].warningTimeout));
    }

    var s = !1;
    (o = o || t.id), k[o] && (r(), a());
  }

  function L(e) {
    return (
      e +
      ":" +
      k[e].bodyMarginV1 +
      ":" +
      k[e].sizeWidth +
      ":" +
      k[e].log +
      ":" +
      k[e].interval +
      ":" +
      k[e].enablePublicMethods +
      ":" +
      k[e].autoResize +
      ":" +
      k[e].bodyMargin +
      ":" +
      k[e].heightCalculationMethod +
      ":" +
      k[e].bodyBackground +
      ":" +
      k[e].bodyPadding +
      ":" +
      k[e].tolerance +
      ":" +
      k[e].inPageLinks +
      ":" +
      k[e].resizeFrom +
      ":" +
      k[e].widthCalculationMethod +
      ":" +
      k[e].mouseEvents
    );
  }

  function s(t, i) {
    function e(i) {
      var e = m();
      e &&
        ((e = e), t.parentNode) &&
        new e(function (e) {
          e.forEach(function (e) {
            Array.prototype.slice.call(e.removedNodes).forEach(function (e) {
              e === t && N(t);
            });
          });
        }).observe(t.parentNode, { childList: !0 }),
        F(t, "load", function () {
          var e, n;
          A("iFrame.onload", i, t, d, !0),
            (e = k[r] && k[r].firstRun),
            (n = k[r] && k[r].heightCalculationMethod in f),
            !e && n && j({ iframe: t, height: 0, width: 0, type: "init" });
        }),
        A("init", i, t, d, !0);
    }

    function o(e) {
      var n = e.split("Callback");
      2 === n.length &&
        ((this[(n = "on" + n[0].charAt(0).toUpperCase() + n[0].slice(1))] =
          this[e]),
        delete this[e],
        R(
          r,
          "Deprecated: '" +
            e +
            "' has been renamed '" +
            n +
            "'. The old method will be removed in the next major version."
        ));
    }

    function n(e) {
      if (
        ((e = e || {}),
        (k[r] = Object.create(null)),
        (k[r].iframe = t),
        (k[r].firstRun = !0),
        (k[r].remoteHost = t.src && t.src.split("/").slice(0, 3).join("/")),
        "object" != typeof e)
      )
        throw new TypeError("Options is not an object");
      Object.keys(e).forEach(o, e);
      var n,
        i = e;
      for (n in l)
        Object.prototype.hasOwnProperty.call(l, n) &&
          (k[r][n] = (Object.prototype.hasOwnProperty.call(i, n) ? i : l)[n]);
      k[r] &&
        (k[r].targetOrigin =
          !0 !== k[r].checkOrigin ||
          "" === (e = k[r].remoteHost) ||
          null !== e.match(/^(about:blank|javascript:|file:\/\/)/)
            ? "*"
            : e);
    }

    var r = (function (e) {
      if ("string" != typeof e)
        throw new TypeError("Invaild id for iFrame. Expected String");
      var n;
      return (
        "" === e &&
          ((t.id =
            ((n = (i && i.id) || l.id + c++),
            null !== document.getElementById(n) && (n += c++),
            (e = n))),
          (u = (i || {}).log),
          O(e, "Added missing iframe ID: " + e + " (" + t.src + ")")),
        e
      );
    })(t.id);
    if (r in k && "iFrameResizer" in t) R(r, "Ignored iFrame, already setup.");
    else {
      switch (
        (n(i),
        O(
          r,
          "IFrame scrolling " +
            (k[r] && k[r].scrolling ? "enabled" : "disabled") +
            " for " +
            r
        ),
        (t.style.overflow =
          !1 === (k[r] && k[r].scrolling) ? "hidden" : "auto"),
        k[r] && k[r].scrolling)
      ) {
        case "omit":
          break;
        case !0:
          t.scrolling = "yes";
          break;
        case !1:
          t.scrolling = "no";
          break;
        default:
          t.scrolling = k[r] ? k[r].scrolling : "no";
      }
      s("Height"),
        s("Width"),
        a("maxHeight"),
        a("minHeight"),
        a("maxWidth"),
        a("minWidth"),
        ("number" != typeof (k[r] && k[r].bodyMargin) &&
          "0" !== (k[r] && k[r].bodyMargin)) ||
          ((k[r].bodyMarginV1 = k[r].bodyMargin),
          (k[r].bodyMargin = k[r].bodyMargin + "px")),
        e(L(r)),
        k[r] &&
          (k[r].iframe.iFrameResizer = {
            close: N.bind(null, k[r].iframe),
            removeListeners: g.bind(null, k[r].iframe),
            resize: A.bind(null, "Window resize", "resize", k[r].iframe),
            moveToAnchor: function (e) {
              A("Move to anchor", "moveToAnchor:" + e, k[r].iframe, r);
            },
            sendMessage: function (e) {
              A(
                "Send Message",
                "message:" + (e = JSON.stringify(e)),
                k[r].iframe,
                r
              );
            },
          });
    }

    function a(e) {
      var n = k[r][e];
      1 / 0 !== n &&
        0 !== n &&
        ((t.style[e] = "number" == typeof n ? n + "px" : n),
        O(r, "Set " + e + " = " + t.style[e]));
    }

    function s(e) {
      if (k[r]["min" + e] > k[r]["max" + e])
        throw new Error(
          "Value for min" + e + " can not be greater than max" + e
        );
    }
  }

  function h(e, n) {
    null === i &&
      (i = setTimeout(function () {
        (i = null), e();
      }, n));
  }

  function e() {
    "hidden" !== document.visibilityState &&
      (O("document", "Trigger event: Visibility change"),
      h(function () {
        b("Tab Visible", "resize");
      }, 16));
  }

  function b(i, t) {
    Object.keys(k).forEach(function (e) {
      var n;
      k[(n = e)] &&
        "parent" === k[n].resizeFrom &&
        k[n].autoResize &&
        !k[n].firstRun &&
        A(i, t, k[e].iframe, e);
    });
  }

  function y() {
    F(window, "message", w),
      F(window, "resize", function () {
        var e;
        O("window", "Trigger event: " + (e = "resize")),
          h(function () {
            b("Window " + e, "resize");
          }, 16);
      }),
      F(document, "visibilitychange", e),
      F(document, "-webkit-visibilitychange", e);
  }

  function n() {
    function t(e, n) {
      if (n) {
        if (!n.tagName)
          throw new TypeError("Object is not a valid DOM element");
        if ("IFRAME" !== n.tagName.toUpperCase())
          throw new TypeError(
            "Expected <IFRAME> tag, found <" + n.tagName + ">"
          );
        s(n, e), o.push(n);
      }
    }

    for (
      var o, e = ["moz", "webkit", "o", "ms"], n = 0;
      n < e.length && !r;
      n += 1
    )
      r = window[e[n] + "RequestAnimationFrame"];
    return (
      r
        ? (r = r.bind(window))
        : O("setup", "RequestAnimationFrame not supported"),
      y(),
      function (e, n) {
        var i;
        switch (
          ((o = []),
          (i = e) &&
            i.enablePublicMethods &&
            R(
              "enablePublicMethods option has been removed, public methods are now always available in the iFrame"
            ),
          typeof n)
        ) {
          case "undefined":
          case "string":
            Array.prototype.forEach.call(
              document.querySelectorAll(n || "iframe"),
              t.bind(d, e)
            );
            break;
          case "object":
            t(e, n);
            break;
          default:
            throw new TypeError("Unexpected data type (" + typeof n + ")");
        }
        return o;
      }
    );
  }

  function q(e) {
    e.fn
      ? e.fn.iFrameResize ||
        (e.fn.iFrameResize = function (i) {
          return this.filter("iframe")
            .each(function (e, n) {
              s(n, i);
            })
            .end();
        })
      : E("", "Unable to bind to jQuery, it is not fully loaded.");
  }

  "undefined" != typeof window &&
    ((c = 0),
    (a = u = !1),
    (v = "message".length),
    (I = (x = "[iFrameSizer]").length),
    (M = null),
    (r = window.requestAnimationFrame),
    (f = Object.freeze({
      max: 1,
      scroll: 1,
      bodyScroll: 1,
      documentElementScroll: 1,
    })),
    (k = {}),
    (i = null),
    (l = Object.freeze({
      autoResize: !0,
      bodyBackground: null,
      bodyMargin: null,
      bodyMarginV1: 8,
      bodyPadding: null,
      checkOrigin: !0,
      inPageLinks: !1,
      enablePublicMethods: !0,
      heightCalculationMethod: "bodyOffset",
      id: "iFrameResizer",
      interval: 32,
      log: !1,
      maxHeight: 1 / 0,
      maxWidth: 1 / 0,
      minHeight: 0,
      minWidth: 0,
      mouseEvents: !0,
      resizeFrom: "parent",
      scrolling: !1,
      sizeHeight: !0,
      sizeWidth: !1,
      warningTimeout: 5e3,
      tolerance: 0,
      widthCalculationMethod: "scroll",
      onClose: function () {
        return !0;
      },
      onClosed: function () {},
      onInit: function () {},
      onMessage: function () {
        R("onMessage function not defined");
      },
      onMouseEnter: function () {},
      onMouseLeave: function () {},
      onResized: function () {},
      onScroll: function () {
        return !0;
      },
    })),
    (z = {}),
    window.jQuery !== d && q(window.jQuery),
    "function" == typeof define && define.amd
      ? define([], n)
      : "object" == typeof module &&
        "object" == typeof module.exports &&
        (module.exports = n()),
    (window.iFrameResize = window.iFrameResize || n()));
})();
//# sourceMappingURL=iframeResizer.map
