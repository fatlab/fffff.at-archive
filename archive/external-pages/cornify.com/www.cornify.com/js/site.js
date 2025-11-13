"use strict";

var storage = storage || {};

storage.getLocal = function (key, def) {
  var result = null;

  if (storage.localAvailable()) {
    var resultString = localStorage.getItem(key);

    if (resultString && resultString.length > 0) {
      result = JSON.parse(resultString);
    }
  }

  if (!result && result !== false && def) {
    result = def;
  } // console.log('storage.getLocal', key, result);


  return result;
};

storage.setLocal = function (key, data) {
  if (storage.localAvailable()) {
    localStorage.setItem(key, JSON.stringify(data));
  } // console.log('storage.setLocal', key);

};

storage.localAvailable = function () {
  return window.localStorage;
};
"use strict";

var siteData = siteData || {
  palette: [{
    r: 245,
    g: 0,
    b: 196,
    hex: 'F500C4'
  }, {
    r: 122,
    g: 36,
    b: 187,
    hex: '7A24BB'
  }, {
    r: 0,
    g: 72,
    b: 178,
    hex: '0048B2'
  }, {
    r: 12,
    g: 127,
    b: 181,
    hex: '0C7FB5'
  }, {
    r: 24,
    g: 183,
    b: 182,
    hex: '18B7B6'
  }, {
    r: 65,
    g: 193,
    b: 196,
    hex: '41C1C4'
  }, {
    r: 116,
    g: 202,
    b: 51,
    hex: '74CA33'
  }, {
    r: 186,
    g: 213,
    b: 23,
    hex: 'BAD517'
  }, {
    r: 255,
    g: 228,
    b: 4,
    hex: 'FFE404'
  }, {
    r: 254,
    g: 186,
    b: 2,
    hex: 'FEBA02'
  }, {
    r: 252,
    g: 144,
    b: 0,
    hex: 'FC9000'
  }, {
    r: 234,
    g: 96,
    b: 16,
    hex: 'EA6010'
  }, {
    r: 216,
    g: 49,
    b: 33,
    hex: 'D83121'
  }],
  unicorns: [{
    index: 0,
    src: '/assets/unicorns/unicorn_01.png',
    retina: '/assets/unicorns/unicorn_01@2x.png',
    width: 500,
    height: 427
  }, {
    index: 1,
    src: '/assets/unicorns/unicorn_02.png',
    retina: '/assets/unicorns/unicorn_02@2x.png',
    width: 500,
    height: 373
  }, {
    index: 2,
    src: '/assets/unicorns/unicorn_03.png',
    retina: '/assets/unicorns/unicorn_03@2x.png',
    width: 500,
    height: 430
  }, {
    index: 3,
    src: '/assets/unicorns/unicorn_04.png',
    retina: '/assets/unicorns/unicorn_04@2x.png',
    width: 500,
    height: 380
  }, {
    index: 4,
    src: '/assets/unicorns/unicorn_05.png',
    retina: '/assets/unicorns/unicorn_05@2x.png',
    width: 500,
    height: 519
  }],
  coloring: {
    templates: [{
      index: 0,
      src: '/assets/coloring/templates/1.png',
      width: 870,
      height: 1100
    }, {
      index: 1,
      src: '/assets/coloring/templates/2.png',
      width: 744,
      height: 877
    }, {
      index: 2,
      src: '/assets/coloring/templates/3.png',
      width: 741,
      height: 920
    }, {
      index: 3,
      src: '/assets/coloring/templates/4.png',
      width: 860,
      height: 1050
    }, {
      index: 4,
      src: '/assets/coloring/templates/5.png',
      width: 1282,
      height: 1400
    }],
    brushes: [{
      index: 0,
      src: '/assets/coloring/brushes/1.png',
      width: 669,
      height: 759
    }, {
      index: 1,
      src: '/assets/coloring/brushes/2.png',
      width: 453,
      height: 453
    }, {
      index: 2,
      src: '/assets/coloring/brushes/3.png',
      width: 124,
      height: 117
    }, {
      index: 3,
      src: '/assets/coloring/brushes/4.png',
      width: 103,
      height: 118
    }, {
      index: 4,
      src: '/assets/coloring/brushes/5.png',
      width: 104,
      height: 74
    }, {
      index: 5,
      src: '/assets/coloring/brushes/6.png',
      width: 155,
      height: 141
    }, {
      index: 6,
      src: '/assets/coloring/brushes/7.png',
      width: 283,
      height: 333
    }, {
      index: 7,
      src: '/assets/coloring/brushes/8.png',
      width: 360,
      height: 480
    }]
  },
  sparkles: [{
    index: 0,
    src: '/assets/sparkles/sparkle-biggy.png',
    width: 117,
    height: 117
  }, {
    index: 0,
    src: '/assets/sparkles/sparkle-puffy.png',
    width: 150,
    height: 147
  }, {
    index: 0,
    src: '/assets/sparkles/sparkle-spiky.png',
    width: 114,
    height: 114
  }, {
    index: 0,
    src: '/assets/sparkles/sparkle-tight-with-glow.png',
    width: 114,
    height: 114
  }, {
    index: 0,
    src: '/assets/sparkles/sparkle.png',
    width: 35,
    height: 35
  }]
};
"use strict";

var siteData = siteData || {};
siteData.store = new Vuex.Store({
  state: {
    isMobile: $(window).width() < 640,
    isTablet: $(window).width() >= 640 && $(window).width() < 1024,
    isDesktop: $(window).width() >= 1024,
    navExpanded: false,
    data: null,
    lightbox: null,
    windowWidth: $(window).width(),
    windowHeight: $(window).height(),
    photos: null,
    quotes: null,
    unicornpics: null,
    younicorns: null,
    enabledYounicornSecrets: storage.getLocal('enabledyounicornsecrets', []),
    gifts: null,
    chromeExtensionInstalled: false,
    firefoxExtensionInstalled: false,
    bookmarkletYounicorns: storage.getLocal('bookmarkletyounicorns', []),
    photoeditordata: {},
    coloringdata: {},
    builderdata: {},
    lightningInvoiceId: storage.getLocal('lightninginvoiceid', null),
    lightningInvoiceStatus: storage.getLocal('lightninginvoicestatus', null),
    likedPhotos: storage.getLocal('likedphotos', []),
    likedPics: storage.getLocal('likedpics', []),
    likedYounicorns: storage.getLocal('likedyounicorns', [])
  },
  mutations: {
    updateMobile: function updateMobile(state, data) {
      Vue.set(state, 'isMobile', data); // storage.setLocal('language', data);
    },
    updateEnabledYounicornSecrets: function updateEnabledYounicornSecrets(state, data) {
      Vue.set(state, 'enabledYounicornSecrets', data);
      storage.setLocal('enabledyounicornsecrets', data);
    },
    updateTablet: function updateTablet(state, data) {
      Vue.set(state, 'isTablet', data); // storage.setLocal('language', data);
    },
    updateDesktop: function updateDesktop(state, data) {
      Vue.set(state, 'isDesktop', data); // storage.setLocal('language', data);
    },
    updateData: function updateData(state, data) {
      Vue.set(state, 'data', data); // storage.setLocal('language', data);
    },
    updateChromeExtensionInstalled: function updateChromeExtensionInstalled(state, data) {
      Vue.set(state, 'chromeExtensionInstalled', data);
    },
    updateFirefoxExtensionInstalled: function updateFirefoxExtensionInstalled(state, data) {
      Vue.set(state, 'firefoxExtensionInstalled', data);
    },
    updateBookmarkletYounicorns: function updateBookmarkletYounicorns(state, data) {
      Vue.set(state, 'bookmarkletYounicorns', data);
      storage.setLocal('bookmarkletyounicorns', data);
    },
    updateNavExpanded: function updateNavExpanded(state, data) {
      Vue.set(state, 'navExpanded', data); // storage.setLocal('language', data);
    },
    updateLightbox: function updateLightbox(state, data) {
      Vue.set(state, 'lightbox', data); // storage.setLocal('language', data);
    },
    updateWindowWidth: function updateWindowWidth(state, data) {
      Vue.set(state, 'windowWidth', data);
    },
    updateWindowHeight: function updateWindowHeight(state, data) {
      Vue.set(state, 'windowHeight', data);
    },
    updatePhotos: function updatePhotos(state, data) {
      if (config.isDev) {
        console.log('store.updatePhotos', data);
      }

      Vue.set(state, 'photos', data);
    },
    updateQuotes: function updateQuotes(state, data) {
      if (config.isDev) {
        console.log('store.updateQuotes', data);
      }

      Vue.set(state, 'quotes', data);
    },
    updateUnicornPics: function updateUnicornPics(state, data) {
      if (config.isDev) {
        console.log('store.updateUnicornPics', data);
      }

      Vue.set(state, 'unicornpics', data);
    },
    updateYounicorns: function updateYounicorns(state, data) {
      if (config.isDev) {
        console.log('store.updateYounicorns', data);
      }

      Vue.set(state, 'younicorns', data);
    },
    updateGifts: function updateGifts(state, data) {
      if (config.isDev) {
        console.log('store.updateGifts', data);
      }

      Vue.set(state, 'gifts', data);
    },
    updatePhotoEditorData: function updatePhotoEditorData(state, data) {
      if (config.isDev) {
        console.log('store.updatePhotoEditorData', data);
      }

      Vue.set(state, 'photoeditordata', data);
    },
    updateColoringData: function updateColoringData(state, data) {
      if (config.isDev) {
        console.log('store.updateColoringData', data);
      }

      Vue.set(state, 'coloringdata', data);
    },
    updateBuilderData: function updateBuilderData(state, data) {
      if (config.isDev) {
        console.log('store.updateBuilderData', data);
      }

      Vue.set(state, 'builderdata', data);
    },
    updateLikedPhotos: function updateLikedPhotos(state, data) {
      if (config.isDev) {
        console.log('store.updateLikedPhotos', data);
      }

      Vue.set(state, 'likedPhotos', data);
      storage.setLocal('likedphotos', data);
    },
    updateLikedPics: function updateLikedPics(state, data) {
      if (config.isDev) {
        console.log('store.updateLikedPics', data);
      }

      Vue.set(state, 'likedPics', data);
      storage.setLocal('likedpics', data);
    },
    updateLikedYounicorns: function updateLikedYounicorns(state, data) {
      if (config.isDev) {
        console.log('store.updateLikedYounicorns', data);
      }

      Vue.set(state, 'likedYounicorns', data);
      storage.setLocal('likedyounicorns', data);
    },
    updateLightningInvoiceId: function updateLightningInvoiceId(state, data) {
      Vue.set(state, 'lightningInvoiceId', data);
      storage.setLocal('lightninginvoiceid', data);
    },
    updateLightningInvoiceStatus: function updateLightningInvoiceStatus(state, data) {
      Vue.set(state, 'lightningInvoiceStatus', data);
      storage.setLocal('lightninginvoicestatus', data);
    }
  }
});
"use strict";

siteData.alltheinfo = [{
  title: "What's a Younicorn?",
  text: "Is it \"Yo, Unicorn!\"? That would also be fun, but it's a mix of \"You\" and \"Unicorn\", because those are special unicorns designed by amazingly creative people like you. Hop over to your <a href=\"/younicorn\">Younicorn designer</a> and create your own. Or create 5. And then do whatever you like to do with your unicorns."
}, {
  title: "Well, what do I do with a Younicorn?",
  text: "That's really up to you, but what is the main purpose of unicorns? Right, to spread happiness. Here on this website, you can download images of your Younicorns for your computer or smatphone background, or profile image if you'd like. You can get mugs, shirts and stickers with your Younicorn on them. And maybe most importantly, you can get a custom version of the Cornify bookmarklet, button or Chrome extension that only shows the Younicorns you choose."
}];
"use strict";

/*

These are the builder parts that can take up slots.

{
	id: 'body-base-default', // Unique ID for this part
	slot: 'body-base', // Which slot this is to be displayed in
	name: 'Unicorn body', // Part name, used for display
	insertBefore: '', // If this is an optional/unique spot, before or after which slot it should be inserted
	insertAfter: '',
	if: '', // Requires a certain slot to be filled
	elements: [
	{
		tint: 'body-color', // The color ID (allows for grouping colors across slots)
		file: 'body.svg',
		blendMode: 'overlay'
	}
}

A part can consist of multiple elements.
For example, the spiky hair prop has:
- Color one
- Color two
- Outline

This part fills one slot, and consists of three elements.

 */
var siteData = siteData || {};
siteData.builder = siteData.builder || {};
siteData.builder.categories = {
  body: {
    name: 'Body',
    fixed: true,
    required: true
  },
  hair: {
    name: 'Hair',
    required: true
  },
  tail: {
    name: 'Tail',
    required: true
  },
  alicorn: {
    name: 'Alicorn',
    required: true
  },
  eyes: {
    name: 'Eyes',
    required: true
  },
  mouth: {
    name: 'Mouth',
    required: true
  },
  nose: {
    name: 'Nose',
    required: true
  },
  'cheek': {
    name: 'Cheek',
    preview: 'cheek/cheek-dots-preview.svg'
  },
  'ears': {
    name: 'Ears',
    required: true
  },
  hooves: {
    name: 'Hooves',
    preview: 'hooves/hooves-preview.svg'
  },
  'body-pattern': {
    name: 'Body pattern',
    preview: 'body-pattern/body-pattern-bottom-preview.svg'
  },
  'head-pattern': {
    name: 'Head pattern',
    preview: 'head-pattern/head-pattern-light-nose-preview.svg'
  },
  'hair-prop': {
    name: 'Hair prop',
    preview: 'hair-prop/hair-prop-spikes-preview.svg'
  },
  'tail-prop': {
    name: 'Tail prop',
    preview: 'tail-prop/tail-prop-spikes-preview.svg'
  },
  'body-prop': {
    name: 'Body prop',
    preview: 'body-prop/body-prop-heart-preview.svg'
  },
  'body-prop-chest': {
    name: 'Body chest prop',
    preview: 'body-prop-chest/body-prop-chest-necklace-preview.svg'
  },
  background: {
    name: 'background',
    preview: 'background/background-meadow-preview.svg',
    renderSeparate: true,
    required: true
  }
};
"use strict";

/*

The unicorn display consists of slots.
Some are mandatory to be filled, others are optional.

The user picks parts.
A part is a list of elements that go into slots.

Parts have categories and the user can only pick one of each (tail, hair, alicorn...).


Required categories:

Body
Hair
Tail
Hooves
Alicorn
Eyes
Nose
Mouth
Ears

Optional categories

Tail prop
Body pattern
Body prop
Body chest prop
Head pattern
Head prop
Cheeks


Slots

Hair color
Hair shading
Hair outline

Tail color
Tail shading
Tail outline
Tail prop

Body color
Body pattern
Body shading
Body outline
Body prop
Body chest prop

Head color
Head pattern
Head shading
Head outline

Alicorn shadow
Alicorn color
Alicorn shading
Alicorn outline

Hooves
Eyes
Nose
Mouth
Ears
Cheeks

Hair prop
Hair front color
Hair front shading
Hair front outline




Body prop 1

Hair 1
Head prop back
Hair 2

Tail prop 1
Tail back

Body chest prop 1

Body color
Body pattern
Head pattern
Body shading
Body outline

Body chest prop 2
Body prop 2
Hooves

Tail prop 2
Tail front
Tail prop 3

Ear left
Hair 3
Head prop front
Hair 4
Alicorn
Hair 5
Ear right
Hair 6

Eyes
Nose
Mouth
Cheeks





 */
siteData.builder.slots = {
  'background': {},
  'cheek-back': {},
  'cheek-back-outline': {},
  'body-prop-back-color': {},
  'body-prop-back-shading': {
    blendMode: 'overlay'
  },
  'body-prop-back-outline': {},
  'hair-back-color': {},
  'hair-back-shading': {
    blendMode: 'overlay'
  },
  'hair-back-highlight': {
    opacity: 0.2
  },
  'hair-back-outline': {},
  'left-ear-color': {},
  'left-ear-shading': {
    blendMode: 'overlay'
  },
  'left-ear-outline': {},
  'tail-color': {},
  'tail-color-two': {},
  'tail-color-three': {},
  'tail-shading': {
    blendMode: 'overlay'
  },
  'tail-highlight': {
    blendMode: 'lighten'
  },
  'tail-outline': {},
  'tail-front-color': {},
  'tail-front-shading': {
    blendMode: 'overlay'
  },
  'tail-front-outline': {},
  'hair-color': {},
  'tail-prop-color': {},
  'tail-prop-color-two': {},
  'tail-prop-shading': {
    blendMode: 'overlay'
  },
  'tail-prop-outline': {},
  'hair-shading': {
    blendMode: 'overlay'
  },
  'hair-highlight': {
    opacity: 0.2
  },
  'hair-outline': {},
  'hair-prop-color': {},
  'hair-prop-color-two': {},
  'hair-prop-shading': {
    blendMode: 'overlay'
  },
  'hair-prop-highlight': {
    opacity: 0.2
  },
  'hair-prop-outline': {},
  'body-color': {},
  'body-pattern-color': {},
  'body-pattern-color-two': {},
  'body-pattern-color-three': {},
  'body-shading': {
    blendMode: 'overlay'
  },
  'body-pattern-outline': {},
  'head-pattern': {},
  'body-outline': {},
  'hooves-color': {},
  'hooves-shading': {
    blendMode: 'overlay'
  },
  'hooves-outline': {},
  'eyes-white': {},
  'eyes-color': {},
  'eyes-shading': {},
  'eyes-outline': {},
  'hair-front-color': {},
  'hair-front-shading': {
    blendMode: 'overlay'
  },
  'hair-front-highlight': {
    opacity: 0.2
  },
  'hair-front-outline': {},
  'hair-front-two-color': {},
  'hair-front-two-shading': {
    blendMode: 'overlay'
  },
  'hair-front-two-outline': {},
  'mouth': {},
  'nose-shading': {
    blendMode: 'overlay'
  },
  'nose-outline': {},
  'body-prop': {},
  'body-prop-shading': {
    blendMode: 'overlay'
  },
  'body-prop-outline': {},
  'body-prop-two': {},
  'body-prop-two-shading': {
    blendMode: 'overlay'
  },
  'body-prop-two-outline': {},
  'body-prop-chest-color': {},
  'body-prop-chest-color-two': {},
  'body-prop-chest-shading': {
    blendMode: 'overlay'
  },
  'body-prop-chest-outline': {},
  'cheek': {},
  'cheek-outline': {},
  'alicorn-shadow': {
    blendMode: 'overlay'
  },
  'alicorn-color': {},
  'alicorn-color-two': {},
  'alicorn-color-three': {},
  'alicorn-color-four': {},
  'alicorn-color-five': {},
  'alicorn-shading': {
    blendMode: 'overlay'
  },
  'alicorn-outline': {},
  'hair-front-three-color': {},
  'hair-front-three-shading': {
    blendMode: 'overlay'
  },
  'hair-front-three-highlight': {
    opacity: 0.2
  },
  'hair-front-three-outline': {},
  'hair-front-four-color': {},
  'hair-front-four-shading': {
    blendMode: 'overlay'
  },
  'hair-front-four-outline': {},
  'hair-prop-middle-color': {},
  'hair-prop-middle-color-two': {},
  'hair-prop-middle-shading': {
    blendMode: 'overlay'
  },
  'hair-prop-middle-outline': {},
  'body-prop-three': {},
  'body-prop-three-color-two': {},
  'body-prop-three-color-three': {},
  'body-prop-three-color-four': {},
  'body-prop-three-color-five': {},
  'body-prop-three-shading': {
    blendMode: 'overlay'
  },
  'body-prop-three-outline': {},
  'right-ear-color': {},
  'right-ear-color-two': {},
  'right-ear-shading': {
    blendMode: 'overlay'
  },
  'right-ear-outline': {},
  'hair-prop-front-color': {},
  'hair-prop-front-color-two': {},
  'hair-prop-front-shading': {
    blendMode: 'overlay'
  },
  'hair-prop-front-highlight': {
    opacity: 0.2
  },
  'hair-prop-front-outline': {}
};
"use strict";

siteData.builder.templates = {
  cornify: {
    name: 'The Grand Unicorn',
    preview: 'templates/the-grand-unicorn.png',
    bitcornPreview: 'templates/the-grand-unicorn-bitcorn.png',
    parts: {
      alicorn: 'alicorn-pointy'
    },
    colors: {}
  },
  greenie: {
    name: 'Greenie',
    preview: 'templates/greenie.png',
    bitcornPreview: 'templates/greenie-bitcorn.png',
    parts: {
      alicorn: 'alicorn-simple',
      'body-pattern': 'body-pattern-front-with-hearts',
      mouth: 'mouth-open-tongue',
      hooves: 'hooves-toes',
      'tail-prop': 'tail-prop-spikes',
      'hair-prop': 'hair-prop-spikes',
      'body-prop': null,
      cheek: 'cheek-heart'
    },
    colors: {
      body: {
        r: 188,
        g: 220,
        b: 170
      },
      alicorn: {
        r: 239,
        g: 13,
        b: 149
      },
      hooves: {
        r: 239,
        g: 13,
        b: 149
      },
      tail: {
        r: 39,
        g: 68,
        b: 41
      },
      hair: {
        r: 39,
        g: 68,
        b: 41
      }
    }
  },
  blacky: {
    name: 'Blacky',
    preview: 'templates/blacky.png',
    bitcornPreview: 'templates/blacky-bitcorn.png',
    parts: {
      'body-prop': 'body-prop-rainbow',
      eyes: 'eyes-color',
      ears: 'ears-pointy',
      hooves: 'hooves-toes'
    },
    colors: {
      body: {
        r: 37,
        g: 35,
        b: 35
      },
      eyes: {
        r: 255,
        g: 65,
        b: 235
      },
      'head-pattern': {
        r: 80,
        g: 79,
        b: 79
      },
      pattern: {
        r: 230,
        g: 224,
        b: 215
      },
      hair: {
        r: 230,
        g: 224,
        b: 215
      }
    }
  },
  brownie: {
    name: 'Brownie',
    preview: 'templates/brownie.png',
    bitcornPreview: 'templates/brownie-bitcorn.png',
    parts: {
      'body-prop-chest': 'body-prop-chest-necklace',
      'body-prop': null,
      'body-pattern': null
    },
    colors: {
      body: {
        r: 192,
        g: 117,
        b: 16
      },
      hair: {
        r: 95,
        g: 45,
        b: 2
      },
      'head-pattern': {
        r: 204,
        g: 144,
        b: 63
      },
      alicorn: {
        r: 255,
        g: 255,
        b: 255
      }
    }
  },
  canvas: {
    name: 'Canvas',
    preview: 'templates/canvas.png',
    bitcornPreview: 'templates/canvas-bitcorn.png',
    parts: {
      'body-prop': null,
      'body-pattern': null,
      cheek: null
    },
    colors: {
      body: {
        r: 255,
        g: 255,
        b: 255
      },
      hair: {
        r: 255,
        g: 255,
        b: 255
      },
      'head-pattern': {
        r: 255,
        g: 255,
        b: 255
      },
      alicorn: {
        r: 255,
        g: 255,
        b: 255
      },
      tail: {
        r: 255,
        g: 255,
        b: 255
      }
    }
  },
  random: {
    name: 'Random',
    preview: 'templates/random.png',
    bitcornPreview: 'templates/random-bitcorn.png',
    parts: {},
    colors: {}
  }
};
"use strict";

siteData.builder.categories.body.parts = {
  'body': {
    name: 'The perfect unicorn body',
    slots: {
      'body-color': {
        color: 'body',
        defaultColor: {
          r: 254,
          g: 191,
          b: 254
        },
        file: 'body/body-color.svg'
      },
      'body-shading': {
        file: 'body/body-shading.svg'
      },
      'body-outline': {
        file: 'body/body-outline.svg'
      }
    }
  }
};
"use strict";

siteData.builder.categories.eyes.parts = {
  'eyes': {
    name: 'Eyes',
    preview: 'eyes/eyes-preview.svg',
    slots: {
      'eyes-outline': {
        file: 'eyes/eyes.svg'
      }
    }
  },
  'eyes-color': {
    name: 'Colorful',
    preview: 'eyes/eyes-color-preview.svg',
    slots: {
      'eyes-white': {
        file: 'eyes/eyes-color-white.svg'
      },
      'eyes-color': {
        color: 'eyes',
        defaultColor: {
          r: 255,
          g: 65,
          b: 235
        },
        file: 'eyes/eyes-color-color.svg'
      },
      'eyes-outline': {
        file: 'eyes/eyes-color-outline.svg'
      }
    }
  },
  'eyes-confident': {
    name: 'Confident',
    preview: 'eyes/eyes-confident-preview.svg',
    slots: {
      'eyes-outline': {
        file: 'eyes/eyes-confident.svg'
      }
    }
  },
  'eyes-confident-two': {
    name: 'Confident',
    preview: 'eyes/eyes-confident-two-preview.svg',
    slots: {
      'eyes-outline': {
        file: 'eyes/eyes-confident-two.svg'
      }
    }
  },
  'eyes-glisten': {
    name: 'Glistening',
    preview: 'eyes/eyes-glisten-preview.svg',
    slots: {
      'eyes-outline': {
        file: 'eyes/eyes-glisten.svg'
      }
    }
  },
  'eyes-squint': {
    name: 'Squinty',
    preview: 'eyes/eyes-squint-preview.svg',
    slots: {
      'eyes-outline': {
        file: 'eyes/eyes-squint.svg'
      }
    }
  }
};
"use strict";

siteData.builder.categories.alicorn.parts = {
  'alicorn-simple': {
    name: 'Simple',
    preview: 'alicorn/alicorn-basic-preview.svg',
    slots: {
      'alicorn-shadow': {
        file: 'alicorn/alicorn-basic-shadow.svg'
      },
      'alicorn-color': {
        color: 'alicorn',
        defaultColor: {
          r: 236,
          g: 196,
          b: 248
        },
        file: 'alicorn/alicorn-basic-color.svg'
      },
      'alicorn-shading': {
        file: 'alicorn/alicorn-basic-shading.svg'
      },
      'alicorn-outline': {
        file: 'alicorn/alicorn-basic-outline.svg'
      }
    }
  },
  'alicorn': {
    name: 'Alicorn',
    preview: 'alicorn/alicorn-preview.svg',
    slots: {
      'alicorn-shadow': {
        file: 'alicorn/alicorn-shadow.svg'
      },
      'alicorn-color': {
        color: 'alicorn',
        defaultColor: {
          r: 255,
          g: 223,
          b: 54
        },
        file: 'alicorn/alicorn-color.svg'
      },
      'alicorn-shading': {
        file: 'alicorn/alicorn-shading.svg'
      },
      'alicorn-outline': {
        file: 'alicorn/alicorn-outline.svg'
      }
    }
  },
  'alicorn-pointy': {
    name: 'Pointy alicorn',
    preview: 'alicorn/alicorn-pointy-preview.svg',
    slots: {
      'alicorn-shadow': {
        file: 'alicorn/alicorn-pointy-shadow.svg'
      },
      'alicorn-color': {
        color: 'alicorn',
        defaultColor: {
          r: 228,
          g: 222,
          b: 207
        },
        file: 'alicorn/alicorn-pointy-color.svg'
      },
      'alicorn-shading': {
        file: 'alicorn/alicorn-pointy-shading.svg'
      },
      'alicorn-outline': {
        file: 'alicorn/alicorn-pointy-outline.svg'
      }
    }
  },
  'alicorn-angles': {
    name: 'Alicorn with angle pattern',
    preview: 'alicorn/alicorn-angles-preview.svg',
    slots: {
      'alicorn-shadow': {
        file: 'alicorn/alicorn-angles-shadow.svg'
      },
      'alicorn-color': {
        color: 'alicorn',
        defaultColor: {
          r: 28,
          g: 220,
          b: 218
        },
        file: 'alicorn/alicorn-angles-color.svg'
      },
      'alicorn-color-two': {
        color: 'alicorn-two',
        defaultColor: {
          r: 128,
          g: 255,
          b: 254
        },
        file: 'alicorn/alicorn-angles-color-two.svg'
      },
      'alicorn-shading': {
        file: 'alicorn/alicorn-angles-shading.svg'
      },
      'alicorn-outline': {
        file: 'alicorn/alicorn-angles-outline.svg'
      }
    }
  },
  'alicorn-rainbow': {
    name: 'Alicorn with rainbow pattern',
    preview: 'alicorn/alicorn-rainbow-preview.svg',
    slots: {
      'alicorn-shadow': {
        file: 'alicorn/alicorn-rainbow-shadow.svg'
      },
      'alicorn-color': {
        color: 'alicorn',
        defaultColor: {
          r: 216,
          g: 49,
          b: 33
        },
        file: 'alicorn/alicorn-rainbow-color.svg'
      },
      'alicorn-color-two': {
        color: 'alicorn-two',
        defaultColor: {
          r: 255,
          g: 228,
          b: 4
        },
        file: 'alicorn/alicorn-rainbow-color-two.svg'
      },
      'alicorn-color-three': {
        color: 'alicorn-three',
        defaultColor: {
          r: 116,
          g: 202,
          b: 51
        },
        file: 'alicorn/alicorn-rainbow-color-three.svg'
      },
      'alicorn-color-four': {
        color: 'alicorn-four',
        defaultColor: {
          r: 12,
          g: 127,
          b: 181
        },
        file: 'alicorn/alicorn-rainbow-color-four.svg'
      },
      'alicorn-color-five': {
        color: 'alicorn-five',
        defaultColor: {
          r: 122,
          g: 36,
          b: 187
        },
        file: 'alicorn/alicorn-rainbow-color-five.svg'
      },
      'alicorn-shading': {
        file: 'alicorn/alicorn-rainbow-shading.svg'
      },
      'alicorn-outline': {
        file: 'alicorn/alicorn-rainbow-outline.svg'
      }
    }
  },
  'alicorn-banana': {
    name: 'Bananacorn',
    preview: 'alicorn/alicorn-banana-preview.svg',
    aprilfools: true,
    slots: {
      'alicorn-shadow': {
        file: 'alicorn/alicorn-banana-shadow.svg'
      },
      'alicorn-outline': {
        file: 'alicorn/alicorn-banana-outline.svg'
      }
    }
  },
  'alicorn-ice-cream-cone': {
    name: 'Icecreamcorn',
    preview: 'alicorn/alicorn-ice-cream-cone-preview.svg',
    aprilfools: true,
    slots: {
      'alicorn-shadow': {
        file: 'alicorn/alicorn-ice-cream-cone-shadow.svg'
      },
      'alicorn-outline': {
        file: 'alicorn/alicorn-ice-cream-cone-outline.svg'
      }
    }
  }
};
"use strict";

siteData.builder.categories.background.parts = {
  'background-easter': {
    disabled: true,
    name: 'Easter',
    preview: 'background/background-easter-preview.svg',
    ground: '#AFDC60',
    sky: '#B7F6FF',
    slots: {
      'background': {
        file: 'background/background-easter.svg',
        full: 'background/background-easter-full.svg',
        scene: 'background/background-easter-scene.jpg',
        portrait: 'background/background-easter-portrait.svg',
        bw: 'background/background-easter-bw.svg'
      }
    }
  },
  'background-unicorn-day': {
    disabled: true,
    name: 'International Unicorn Day',
    preview: 'background/background-unicorn-day-preview.svg',
    ground: '#ffffff',
    sky: '#ffaac1',
    unicornday: true,
    slots: {
      'background': {
        file: 'background/background-unicorn-day.svg',
        full: 'background/background-unicorn-day-full.svg',
        scene: 'background/background-unicorn-day-scene.jpg',
        portrait: 'background/background-unicorn-day-portrait.svg',
        bw: 'background/background-unicorn-day-bw.svg'
      }
    }
  },
  'background-valentines': {
    name: 'Valentines',
    preview: 'background/background-valentines-preview.svg',
    ground: '#ffffff',
    sky: '#ffffff',
    valentines: true,
    slots: {
      'background': {
        file: 'background/background-valentines.svg',
        full: 'background/background-valentines-full.svg',
        scene: 'background/background-valentines-scene.jpg',
        portrait: 'background/background-valentines-portrait.svg',
        bw: 'background/background-valentines-bw.svg'
      }
    }
  },
  'background-meadow': {
    name: 'Meadow',
    preview: 'background/background-meadow-preview.svg',
    ground: '#AFDC60',
    sky: '#9BEFFF',
    slots: {
      'background': {
        file: 'background/background-meadow.svg',
        full: 'background/background-meadow-full.svg',
        scene: 'background/background-meadow-scene.jpg',
        portrait: 'background/background-meadow-portrait.svg',
        bw: 'background/background-meadow-bw.svg'
      }
    }
  },
  'background-meadow-night': {
    name: 'Starry night',
    preview: 'background/background-meadow-night-preview.svg',
    ground: '#546C2B',
    sky: '#0A3346',
    slots: {
      'background': {
        file: 'background/background-meadow-night.svg',
        full: 'background/background-meadow-night-full.svg',
        scene: 'background/background-meadow-night-scene.jpg',
        portrait: 'background/background-meadow-night-portrait.svg',
        bw: 'background/background-meadow-night-bw.svg'
      }
    }
  },
  'background-clouds': {
    name: 'Clouds',
    preview: 'background/background-clouds-preview.svg',
    ground: '#9BEFFF',
    sky: '#9BEFFF',
    slots: {
      'background': {
        file: 'background/background-clouds.svg',
        full: 'background/background-clouds-full.svg',
        scene: 'background/background-clouds-scene.jpg',
        portrait: 'background/background-clouds-portrait.svg',
        bw: 'background/background-clouds-bw.svg'
      }
    }
  },
  'background-blue-grid': {
    name: 'Blue grid',
    preview: 'background/background-blue-grid-preview.svg',
    ground: '#ffffff',
    sky: '#ffffff',
    slots: {
      'background': {
        file: 'background/background-blue-grid.svg',
        full: 'background/background-blue-grid-full.svg',
        scene: 'background/background-blue-grid-scene.jpg',
        portrait: 'background/background-blue-grid-portrait.svg',
        bw: 'background/background-blue-grid-bw.svg'
      }
    }
  },
  'background-stage-pink': {
    name: 'Pink stage',
    preview: 'background/background-stage-pink-preview.svg',
    ground: '#F3BAE3',
    sky: '#F3BAE3',
    weekday: "0",
    slots: {
      'background': {
        file: 'background/background-stage-pink.svg',
        full: 'background/background-stage-pink-full.svg',
        scene: 'background/background-stage-pink-scene.jpg',
        portrait: 'background/background-stage-pink-portrait.svg',
        bw: 'background/background-stage-bw.svg'
      }
    }
  },
  'background-stage-salmon': {
    name: 'Salmon stage',
    preview: 'background/background-stage-salmon-preview.svg',
    ground: '#FDB1B1',
    sky: '#FFBBBB',
    weekday: "1",
    slots: {
      'background': {
        file: 'background/background-stage-salmon.svg',
        full: 'background/background-stage-salmon-full.svg',
        scene: 'background/background-stage-salmon-scene.jpg',
        portrait: 'background/background-stage-salmon-portrait.svg',
        bw: 'background/background-stage-bw.svg'
      }
    }
  },
  'background-stage-orange': {
    name: 'Orange stage',
    preview: 'background/background-stage-orange-preview.svg',
    ground: '#FFD49E',
    sky: '#FED8A9',
    weekday: "2",
    slots: {
      'background': {
        file: 'background/background-stage-orange.svg',
        full: 'background/background-stage-orange-full.svg',
        scene: 'background/background-stage-orange-scene.jpg',
        portrait: 'background/background-stage-orange-portrait.svg',
        bw: 'background/background-stage-bw.svg'
      }
    }
  },
  'background-stage': {
    name: 'Stage',
    preview: 'background/background-stage-preview.svg',
    ground: '#FEBA02',
    sky: '#FEBA02',
    weekday: "3",
    slots: {
      'background': {
        file: 'background/background-stage.svg',
        full: 'background/background-stage-full.svg',
        scene: 'background/background-stage-scene.jpg',
        portrait: 'background/background-stage-portrait.svg',
        bw: 'background/background-stage-bw.svg'
      }
    }
  },
  'background-stage-green': {
    name: 'Green stage',
    preview: 'background/background-stage-green-preview.svg',
    ground: '#D5EDA6',
    sky: '#DCF2B0',
    weekday: "4",
    slots: {
      'background': {
        file: 'background/background-stage-green.svg',
        full: 'background/background-stage-green-full.svg',
        scene: 'background/background-stage-green-scene.jpg',
        portrait: 'background/background-stage-green-portrait.svg',
        bw: 'background/background-stage-bw.svg'
      }
    }
  },
  'background-stage-teal': {
    name: 'Teal stage',
    preview: 'background/background-stage-teal-preview.svg',
    ground: '#BBEFDD',
    sky: '#BBEFDD',
    weekday: "5",
    slots: {
      'background': {
        file: 'background/background-stage-teal.svg',
        full: 'background/background-stage-teal-full.svg',
        scene: 'background/background-stage-teal-scene.jpg',
        portrait: 'background/background-stage-teal-portrait.svg',
        bw: 'background/background-stage-bw.svg'
      }
    }
  },
  'background-stage-blue': {
    name: 'Blue stage',
    preview: 'background/background-stage-blue-preview.svg',
    ground: '#C0DAFD',
    sky: '#C0DAFD',
    weekday: "6",
    slots: {
      'background': {
        file: 'background/background-stage-blue.svg',
        full: 'background/background-stage-blue-full.svg',
        scene: 'background/background-stage-blue-scene.jpg',
        portrait: 'background/background-stage-blue-portrait.svg',
        bw: 'background/background-stage-bw.svg'
      }
    }
  },
  'background-retro-wave': {
    name: 'Retro wave',
    preview: 'background/background-retro-wave-preview.svg',
    ground: '#220A31',
    sky: '#1E0528',
    bitcoin: true,
    slots: {
      'background': {
        file: 'background/background-retro-wave.svg',
        full: 'background/background-retro-wave-full.svg',
        scene: 'background/background-retro-wave-scene.jpg',
        portrait: 'background/background-retro-wave-portrait.svg',
        bw: 'background/background-retro-wave-bw.svg'
      }
    }
  },
  'background-forest': {
    name: 'Forest',
    preview: 'background/background-forest-preview.svg',
    ground: '#AFDC60',
    sky: '#F0FFA3',
    slots: {
      'background': {
        file: 'background/background-forest.svg',
        full: 'background/background-forest-full.svg',
        scene: 'background/background-forest-scene.jpg',
        portrait: 'background/background-forest-portrait.svg',
        bw: 'background/background-forest-bw.svg'
      }
    }
  },
  'background-snow': {
    name: 'Snow',
    preview: 'background/background-snow-preview.svg',
    ground: '#F7FFFE',
    sky: '#86AEDF',
    slots: {
      'background': {
        file: 'background/background-snow.svg',
        full: 'background/background-snow-full.svg',
        scene: 'background/background-snow-scene.jpg',
        portrait: 'background/background-snow-portrait.svg',
        bw: 'background/background-snow-bw.svg'
      }
    }
  },
  'background-desert': {
    name: 'Desert',
    preview: 'background/background-desert-preview.svg',
    ground: '#E89755',
    sky: '#FAD881',
    slots: {
      'background': {
        file: 'background/background-desert.svg',
        full: 'background/background-desert-full.svg',
        scene: 'background/background-desert-scene.jpg',
        portrait: 'background/background-desert-portrait.svg',
        bw: 'background/background-desert-bw.svg'
      }
    }
  },
  'background-full-moon': {
    name: 'Full moon',
    preview: 'background/background-full-moon-preview.svg',
    ground: '#5D6880',
    sky: '#283654',
    fullmoon: true,
    slots: {
      'background': {
        file: 'background/background-full-moon.svg',
        full: 'background/background-full-moon-full.svg',
        scene: 'background/background-full-moon-scene.jpg',
        portrait: 'background/background-full-moon-portrait.svg',
        bw: 'background/background-full-moon-bw.svg'
      }
    }
  }
};
"use strict";

siteData.builder.categories.hooves.parts = {
  'hooves': {
    name: 'Hooves',
    preview: 'hooves/hooves-preview.svg',
    slots: {
      'hooves-color': {
        file: 'hooves/hooves-color.svg'
      }
    }
  },
  'hooves-toes': {
    name: 'Toe hooves',
    preview: 'hooves/hooves-toes-preview.svg',
    slots: {
      'hooves-color': {
        color: 'hooves',
        defaultColor: {
          r: 255,
          g: 255,
          b: 255
        },
        file: 'hooves/hooves-toes-color.svg'
      },
      'hooves-outline': {
        file: 'hooves/hooves-toes-outline.svg'
      }
    }
  },
  'hooves-boots': {
    name: 'Boot hooves',
    preview: 'hooves/hooves-boots-preview.svg',
    slots: {
      'hooves-color': {
        color: 'hooves',
        defaultColor: {
          r: 236,
          g: 234,
          b: 226
        },
        file: 'hooves/hooves-boots-color.svg'
      },
      'hooves-shading': {
        file: 'hooves/hooves-boots-shading.svg'
      },
      'hooves-outline': {
        file: 'hooves/hooves-boots-outline.svg'
      }
    }
  }
};
"use strict";

siteData.builder.categories['hair-prop'].parts = {
  'hair-prop-spikes': {
    name: 'Spikes',
    preview: 'hair-prop/hair-prop-spikes-preview.svg',
    slots: {
      'hair-prop-color': {
        color: 'hair-prop',
        defaultColor: {
          r: 239,
          g: 13,
          b: 149
        },
        file: 'hair-prop/hair-prop-spikes-color-one.svg',
        if: {
          hair: {
            'hair-punk': 'hair-prop/hair-prop-spikes-color-one-hair-punk.svg',
            'hair-pony-tail': 'hair-prop/hair-prop-spikes-color-one-hair-pony-tail.svg'
          }
        }
      },
      'hair-prop-color-two': {
        color: 'hair-prop-two',
        defaultColor: {
          r: 39,
          g: 68,
          b: 41
        },
        file: 'hair-prop/hair-prop-spikes-color-two.svg',
        if: {
          hair: {
            'hair-punk': 'hair-prop/hair-prop-spikes-color-two-hair-punk.svg',
            'hair-pony-tail': 'hair-prop/hair-prop-spikes-color-two-hair-pony-tail.svg'
          }
        }
      },
      'hair-prop-outline': {
        file: 'hair-prop/hair-prop-spikes-outline.svg',
        if: {
          hair: {
            'hair-punk': 'hair-prop/hair-prop-spikes-outline-hair-punk.svg',
            'hair-pony-tail': 'hair-prop/hair-prop-spikes-outline-hair-pony-tail.svg'
          }
        }
      }
    }
  },
  'hair-prop-crown': {
    name: 'Crown',
    preview: 'hair-prop/hair-prop-crown-preview.svg',
    slots: {
      'hair-prop-color': {
        color: 'hair-prop',
        defaultColor: {
          r: 254,
          g: 214,
          b: 79
        },
        file: 'hair-prop/hair-prop-crown-color-one.svg'
      },
      'hair-prop-color-two': {
        color: 'hair-prop-two',
        defaultColor: {
          r: 255,
          g: 255,
          b: 255
        },
        file: 'hair-prop/hair-prop-crown-color-two.svg'
      },
      'hair-prop-outline': {
        file: 'hair-prop/hair-prop-crown-outline.svg'
      }
    }
  },
  'hair-prop-ribbon': {
    name: 'Ribbon',
    preview: 'hair-prop/hair-prop-ribbon-preview.svg',
    slots: {
      'hair-prop-front-color': {
        color: 'hair-prop',
        defaultColor: {
          r: 150,
          g: 255,
          b: 66
        },
        file: 'hair-prop/hair-prop-ribbon-color-one.svg'
      },
      'hair-prop-front-color-two': {
        color: 'hair-prop-two',
        defaultColor: {
          r: 66,
          g: 200,
          b: 255
        },
        file: 'hair-prop/hair-prop-ribbon-color-two.svg'
      },
      'hair-prop-front-shading': {
        file: 'hair-prop/hair-prop-ribbon-shading.svg'
      },
      'hair-prop-front-outline': {
        file: 'hair-prop/hair-prop-ribbon-outline.svg'
      }
    }
  },
  'hair-prop-butterfly': {
    name: 'Butterfly',
    preview: 'hair-prop/hair-prop-butterfly-preview.svg',
    slots: {
      'hair-prop-front-color': {
        color: 'hair-prop',
        defaultColor: {
          r: 194,
          g: 221,
          b: 168
        },
        file: 'hair-prop/hair-prop-butterfly-color.svg'
      },
      'hair-prop-front-shading': {
        file: 'hair-prop/hair-prop-butterfly-shading.svg'
      },
      'hair-prop-front-highlight': {
        file: 'hair-prop/hair-prop-butterfly-highlight.svg'
      },
      'hair-prop-front-outline': {
        file: 'hair-prop/hair-prop-butterfly-outline.svg'
      }
    }
  },
  'hair-prop-santa-hat': {
    disabled: true,
    name: 'Santa hat',
    preview: 'hair-prop/hair-prop-santa-hat-preview.svg',
    slots: {
      'hair-prop-middle-color': {
        color: 'hair-prop',
        defaultColor: {
          r: 255,
          g: 255,
          b: 255
        },
        file: 'hair-prop/hair-prop-santa-hat-color.svg',
        if: {
          hair: {
            'hair-punk': 'hair-prop/hair-prop-santa-hat-color-hair-punk.svg'
          }
        }
      },
      'hair-prop-middle-color-two': {
        color: 'hair-prop-two',
        defaultColor: {
          r: 238,
          g: 48,
          b: 48
        },
        file: 'hair-prop/hair-prop-santa-hat-color-two.svg',
        if: {
          hair: {
            'hair-punk': 'hair-prop/hair-prop-santa-hat-color-two-hair-punk.svg'
          }
        }
      },
      'hair-prop-middle-shading': {
        file: 'hair-prop/hair-prop-santa-hat-shading.svg',
        if: {
          hair: {
            'hair-punk': 'hair-prop/hair-prop-santa-hat-shading-hair-punk.svg'
          }
        }
      },
      'hair-prop-middle-outline': {
        file: 'hair-prop/hair-prop-santa-hat-outline.svg',
        if: {
          hair: {
            'hair-punk': 'hair-prop/hair-prop-santa-hat-outline-hair-punk.svg'
          }
        }
      }
    }
  }
};
"use strict";

siteData.builder.categories.hair.parts = {
  'hair': {
    name: 'Hair',
    preview: 'hair/hair-preview.svg',
    slots: {
      'hair-color': {
        color: 'hair',
        defaultColor: {
          r: 255,
          g: 213,
          b: 86
        },
        file: 'hair/hair-back-color.svg'
      },
      'hair-shading': {
        file: 'hair/hair-back-shading.svg'
      },
      'hair-outline': {
        file: 'hair/hair-back-outline.svg'
      }
    }
  },
  'hair-curly': {
    name: 'Curly hair',
    preview: 'hair/hair-curly-preview.svg',
    slots: {
      'hair-color': {
        color: 'hair',
        defaultColor: {
          r: 144,
          g: 89,
          b: 73
        },
        file: 'hair/hair-curly-color.svg'
      },
      'hair-shading': {
        file: 'hair/hair-curly-shading.svg'
      },
      'hair-highlight': {
        file: 'hair/hair-curly-highlight.svg'
      },
      'hair-outline': {
        file: 'hair/hair-curly-outline.svg'
      }
    }
  },
  'hair-long-wavy': {
    name: 'Long & wavy hair',
    preview: 'hair/hair-long-wavy-preview.svg',
    slots: {
      'hair-back-color': {
        color: 'hair',
        defaultColor: {
          r: 95,
          g: 42,
          b: 2
        },
        file: 'hair/hair-long-wavy-1-color.svg'
      },
      'hair-back-highlight': {
        file: 'hair/hair-long-wavy-1-highlight.svg'
      },
      'hair-back-outline': {
        file: 'hair/hair-long-wavy-1-outline.svg'
      },
      'hair-color': {
        color: 'hair',
        defaultColor: {
          r: 95,
          g: 42,
          b: 2
        },
        file: 'hair/hair-long-wavy-2-color.svg'
      },
      'hair-highlight': {
        file: 'hair/hair-long-wavy-2-highlight.svg'
      },
      'hair-outline': {
        file: 'hair/hair-long-wavy-2-outline.svg'
      },
      'hair-front-color': {
        color: 'hair',
        defaultColor: {
          r: 95,
          g: 42,
          b: 2
        },
        file: 'hair/hair-long-wavy-3-color.svg'
      },
      'hair-front-highlight': {
        file: 'hair/hair-long-wavy-3-highlight.svg'
      },
      'hair-front-outline': {
        file: 'hair/hair-long-wavy-3-outline.svg'
      },
      'hair-front-three-color': {
        color: 'hair',
        file: 'hair/hair-long-wavy-4-color.svg'
      },
      'hair-front-three-highlight': {
        file: 'hair/hair-long-wavy-4-highlight.svg'
      },
      'hair-front-three-outline': {
        file: 'hair/hair-long-wavy-4-outline.svg'
      }
    }
  },
  'hair-punk': {
    name: 'Punk hair',
    preview: 'hair/hair-punk-preview.svg',
    slots: {
      'hair-color': {
        color: 'hair',
        defaultColor: {
          r: 66,
          g: 200,
          b: 255
        },
        file: 'hair/hair-punk-1-color.svg'
      },
      'hair-shading': {
        file: 'hair/hair-punk-1-shading.svg'
      },
      'hair-outline': {
        file: 'hair/hair-punk-1-outline.svg'
      },
      'hair-front-color': {
        color: 'hair',
        defaultColor: {
          r: 66,
          g: 200,
          b: 255
        },
        file: 'hair/hair-punk-2-color.svg'
      },
      'hair-front-outline': {
        file: 'hair/hair-punk-2-outline.svg'
      }
    }
  },
  'hair-pony-tail': {
    name: 'Long & wavy hair',
    preview: 'hair/hair-pony-tail-preview.svg',
    slots: {
      'hair-back-color': {
        color: 'hair',
        defaultColor: {
          r: 255,
          g: 172,
          b: 27
        },
        file: 'hair/hair-pony-tail-1-color.svg'
      },
      'hair-back-shading': {
        file: 'hair/hair-pony-tail-1-shading.svg'
      },
      'hair-back-outline': {
        file: 'hair/hair-pony-tail-1-outline.svg'
      },
      'hair-front-color': {
        color: 'hair',
        defaultColor: {
          r: 255,
          g: 172,
          b: 27
        },
        file: 'hair/hair-pony-tail-2-color.svg'
      },
      'hair-front-shading': {
        file: 'hair/hair-pony-tail-2-shading.svg'
      },
      'hair-front-outline': {
        file: 'hair/hair-pony-tail-2-outline.svg'
      },
      'hair-front-four-color': {
        color: 'hair-two',
        defaultColor: {
          r: 0,
          g: 226,
          b: 255
        },
        file: 'hair/hair-pony-tail-5-color.svg'
      },
      'hair-front-four-outline': {
        file: 'hair/hair-pony-tail-5-outline.svg'
      },
      'hair-front-three-color': {
        color: 'hair',
        defaultColor: {
          r: 255,
          g: 172,
          b: 27
        },
        file: 'hair/hair-pony-tail-3-color.svg'
      },
      'hair-front-three-shading': {
        file: 'hair/hair-pony-tail-3-shading.svg'
      },
      'hair-front-three-outline': {
        file: 'hair/hair-pony-tail-3-outline.svg'
      }
    }
  }
};
"use strict";

siteData.builder.categories['tail-prop'].parts = {
  'tail-prop-spikes': {
    name: 'Spikes',
    preview: 'tail-prop/tail-prop-spikes-preview.svg',
    slots: {
      'tail-prop-color': {
        color: 'tail-prop',
        defaultColor: {
          r: 239,
          g: 13,
          b: 149
        },
        file: 'tail-prop/tail-prop-spikes-color-one.svg',
        if: {
          tail: {
            'tail-curly': 'tail-prop/tail-prop-spikes-color-one-tail-curly.svg',
            'tail-bushy': 'tail-prop/tail-prop-spikes-color-one-tail-bushy.svg',
            'tail-super-curly': 'tail-prop/tail-prop-spikes-color-one-tail-super-curly.svg',
            'tail-pony-tail': 'tail-prop/tail-prop-spikes-color-one-tail-pony-tail.svg'
          }
        }
      },
      'tail-prop-color-two': {
        color: 'tail-prop-two',
        defaultColor: {
          r: 136,
          g: 173,
          b: 133
        },
        file: 'tail-prop/tail-prop-spikes-color-two.svg',
        if: {
          tail: {
            'tail-curly': 'tail-prop/tail-prop-spikes-color-two-tail-curly.svg',
            'tail-bushy': 'tail-prop/tail-prop-spikes-color-two-tail-bushy.svg',
            'tail-super-curly': 'tail-prop/tail-prop-spikes-color-two-tail-super-curly.svg',
            'tail-pony-tail': 'tail-prop/tail-prop-spikes-color-two-tail-pony-tail.svg'
          }
        }
      },
      'tail-prop-outline': {
        file: 'tail-prop/tail-prop-spikes-outline.svg',
        if: {
          tail: {
            'tail-curly': 'tail-prop/tail-prop-spikes-outline-tail-curly.svg',
            'tail-bushy': 'tail-prop/tail-prop-spikes-outline-tail-bushy.svg',
            'tail-super-curly': 'tail-prop/tail-prop-spikes-outline-tail-super-curly.svg',
            'tail-pony-tail': 'tail-prop/tail-prop-spikes-outline-tail-pony-tail.svg'
          }
        }
      }
    }
  },
  'tail-prop-flowers': {
    name: 'Flowers',
    preview: 'tail-prop/tail-prop-flowers-preview.svg',
    slots: {
      'tail-prop-color': {
        color: 'tail-prop',
        defaultColor: {
          r: 49,
          g: 219,
          b: 255
        },
        file: 'tail-prop/tail-prop-flowers-color-one.svg',
        if: {
          tail: {
            'tail-curly': 'tail-prop/tail-prop-flowers-color-one-tail-curly.svg',
            'tail-bushy': 'tail-prop/tail-prop-flowers-color-one-tail-bushy.svg'
          }
        }
      },
      'tail-prop-color-two': {
        color: 'tail-prop-two',
        defaultColor: {
          r: 255,
          g: 255,
          b: 255
        },
        file: 'tail-prop/tail-prop-flowers-color-two.svg',
        if: {
          tail: {
            'tail-curly': 'tail-prop/tail-prop-flowers-color-two-tail-curly.svg',
            'tail-bushy': 'tail-prop/tail-prop-flowers-color-two-tail-bushy.svg'
          }
        }
      },
      'tail-prop-outline': {
        file: 'tail-prop/tail-prop-flowers-outline.svg',
        if: {
          tail: {
            'tail-curly': 'tail-prop/tail-prop-flowers-outline-tail-curly.svg',
            'tail-bushy': 'tail-prop/tail-prop-flowers-outline-tail-bushy.svg'
          }
        }
      }
    }
  },
  'tail-prop-ribbon': {
    name: 'Ribbon',
    preview: 'tail-prop/tail-prop-ribbon-preview.svg',
    slots: {
      'tail-prop-color': {
        color: 'tail-prop',
        defaultColor: {
          r: 66,
          g: 200,
          b: 255
        },
        file: 'tail-prop/tail-prop-ribbon-color-one.svg',
        if: {
          tail: {
            'tail-curly': 'tail-prop/tail-prop-ribbon-color-one-tail-curly.svg',
            'tail-bushy': 'tail-prop/tail-prop-ribbon-color-one-tail-bushy.svg'
          }
        }
      },
      'tail-prop-color-two': {
        color: 'tail-prop-two',
        defaultColor: {
          r: 255,
          g: 226,
          b: 190
        },
        file: 'tail-prop/tail-prop-ribbon-color-two.svg',
        if: {
          tail: {
            'tail-curly': 'tail-prop/tail-prop-ribbon-color-two-tail-curly.svg',
            'tail-bushy': 'tail-prop/tail-prop-ribbon-color-two-tail-bushy.svg'
          }
        }
      },
      'tail-prop-shading': {
        file: 'tail-prop/tail-prop-ribbon-shading.svg',
        if: {
          tail: {
            'tail-curly': 'tail-prop/tail-prop-ribbon-shading-tail-curly.svg',
            'tail-bushy': 'tail-prop/tail-prop-ribbon-shading-tail-bushy.svg'
          }
        }
      },
      'tail-prop-outline': {
        file: 'tail-prop/tail-prop-ribbon-outline.svg',
        if: {
          tail: {
            'tail-curly': 'tail-prop/tail-prop-ribbon-outline-tail-curly.svg',
            'tail-bushy': 'tail-prop/tail-prop-ribbon-outline-tail-bushy.svg'
          }
        }
      }
    }
  }
};
"use strict";

siteData.builder.categories.tail.parts = {
  'tail': {
    name: 'Tail',
    preview: 'tail/tail-preview.svg',
    slots: {
      'tail-color': {
        color: 'tail',
        defaultColor: {
          r: 255,
          g: 213,
          b: 86
        },
        file: 'tail/tail-color.svg'
      },
      'tail-shading': {
        file: 'tail/tail-shading.svg'
      },
      'tail-outline': {
        file: 'tail/tail-outline.svg'
      }
    }
  },
  'tail-curly': {
    name: 'Curly tail',
    preview: 'tail/tail-curly-preview.svg',
    slots: {
      'tail-color': {
        color: 'tail',
        defaultColor: {
          r: 144,
          g: 89,
          b: 73
        },
        file: 'tail/tail-curly-color.svg'
      },
      'tail-shading': {
        file: 'tail/tail-curly-shading.svg'
      },
      'tail-highlight': {
        file: 'tail/tail-curly-shading.svg'
      },
      'tail-outline': {
        file: 'tail/tail-curly-outline.svg'
      }
    }
  },
  'tail-bushy': {
    name: 'Bushy tail',
    preview: 'tail/tail-bushy-preview.svg',
    slots: {
      'tail-color': {
        color: 'tail',
        defaultColor: {
          r: 255,
          g: 213,
          b: 86
        },
        file: 'tail/tail-bushy-color.svg'
      },
      'tail-color-two': {
        color: 'tail-two',
        defaultColor: {
          r: 201,
          g: 163,
          b: 48
        },
        file: 'tail/tail-bushy-color-two.svg'
      },
      'tail-shading': {
        file: 'tail/tail-bushy-shading.svg'
      },
      'tail-outline': {
        file: 'tail/tail-bushy-outline.svg'
      }
    }
  },
  'tail-super-curly': {
    name: 'Super curly tail',
    preview: 'tail/tail-super-curly-preview.svg',
    slots: {
      'tail-color': {
        color: 'tail',
        defaultColor: {
          r: 250,
          g: 246,
          b: 201
        },
        file: 'tail/tail-super-curly-color.svg'
      },
      'tail-color-two': {
        color: 'tail-two',
        defaultColor: {
          r: 227,
          g: 73,
          b: 189
        },
        file: 'tail/tail-super-curly-color-two.svg'
      },
      'tail-color-three': {
        color: 'tail-three',
        defaultColor: {
          r: 134,
          g: 61,
          b: 158
        },
        file: 'tail/tail-super-curly-color-three.svg'
      },
      'tail-shading': {
        file: 'tail/tail-super-curly-shading.svg'
      },
      'tail-outline': {
        file: 'tail/tail-super-curly-outline.svg'
      }
    }
  },
  'tail-pony-tail': {
    name: 'Pony tail',
    preview: 'tail/tail-pony-tail-preview.svg',
    slots: {
      'tail-color': {
        color: 'tail',
        defaultColor: {
          r: 255,
          g: 172,
          b: 27
        },
        file: 'tail/tail-pony-tail-1-color.svg'
      },
      'tail-shading': {
        file: 'tail/tail-pony-tail-1-shading.svg'
      },
      'tail-outline': {
        file: 'tail/tail-pony-tail-1-outline.svg'
      },
      'tail-front-color': {
        color: 'tail-two',
        defaultColor: {
          r: 0,
          g: 226,
          b: 255
        },
        file: 'tail/tail-pony-tail-2-color.svg'
      },
      'tail-front-outline': {
        file: 'tail/tail-pony-tail-2-outline.svg'
      }
    }
  }
};
"use strict";

siteData.builder.categories.mouth.parts = {
  'mouth': {
    name: 'Mouth',
    preview: 'mouth/mouth-preview.svg',
    slots: {
      'mouth': {
        file: 'mouth/mouth.svg'
      }
    }
  },
  'mouth-smile': {
    name: 'Smile',
    preview: 'mouth/mouth-smile-preview.svg',
    slots: {
      'mouth': {
        file: 'mouth/mouth-smile.svg'
      }
    }
  },
  'mouth-smirk': {
    name: 'Smirk',
    preview: 'mouth/mouth-smirk-preview.svg',
    slots: {
      'mouth': {
        file: 'mouth/mouth-smirk.svg'
      }
    }
  },
  'mouth-open-tongue': {
    name: 'Open mouth',
    preview: 'mouth/mouth-open-tongue-preview.svg',
    slots: {
      'mouth': {
        file: 'mouth/mouth-open-tongue.svg'
      }
    }
  },
  'mouth-open-wide': {
    name: 'Wide mouth',
    preview: 'mouth/mouth-wide-preview.svg',
    slots: {
      'mouth': {
        file: 'mouth/mouth-wide.svg'
      }
    }
  },
  'mouth-open-angled': {
    name: 'Open mouth',
    preview: 'mouth/mouth-open-angled-preview.svg',
    slots: {
      'mouth': {
        file: 'mouth/mouth-open-angled.svg'
      }
    }
  },
  'mouth-squiggly': {
    name: 'Squiggly mouth',
    preview: 'mouth/mouth-squiggly-preview.svg',
    slots: {
      'mouth': {
        file: 'mouth/mouth-squiggly.svg'
      }
    }
  },
  'mouth-round': {
    name: 'Round mouth',
    preview: 'mouth/mouth-round-preview.svg',
    slots: {
      'mouth': {
        file: 'mouth/mouth-round.svg'
      }
    }
  },
  'mouth-tongue': {
    name: 'Tongue sticking out',
    preview: 'mouth/mouth-tongue-preview.svg',
    slots: {
      'mouth': {
        file: 'mouth/mouth-tongue.svg'
      }
    }
  }
};
"use strict";

siteData.builder.categories.nose.parts = {
  'nose': {
    name: 'Nose',
    preview: 'nose/nose-preview.svg',
    slots: {
      'nose-outline': {
        file: 'nose/nose.svg'
      }
    }
  },
  'nose-detailed': {
    name: 'Detailed nose',
    preview: 'nose/nose-detailed-preview.svg',
    slots: {
      'nose-outline': {
        file: 'nose/nose-detailed.svg'
      },
      'nose-shading': {
        file: 'nose/nose-detailed-shading.svg'
      }
    }
  },
  'nose-dot': {
    name: 'Dot nose',
    preview: 'nose/nose-dot-preview.svg',
    slots: {
      'nose-outline': {
        file: 'nose/nose-dot.svg'
      }
    }
  }
};
"use strict";

siteData.builder.categories.cheek.parts = {
  'cheek-dots': {
    name: 'Dots',
    preview: 'cheek/cheek-dots-preview.svg',
    slots: {
      'cheek': {
        file: 'cheek/cheek-dots.svg',
        color: 'cheek',
        defaultColor: {
          r: 0,
          g: 0,
          b: 0
        }
      }
    }
  },
  'cheek-heart': {
    name: 'Heart',
    preview: 'cheek/cheek-heart-preview.svg',
    slots: {
      'cheek': {
        file: 'cheek/cheek-heart.svg',
        color: 'cheek',
        defaultColor: {
          r: 87,
          g: 188,
          b: 61
        }
      }
    }
  },
  'cheek-bridle': {
    name: 'Bridle',
    preview: 'cheek/cheek-bridle-preview.svg',
    slots: {
      'cheek-back': {
        file: 'cheek/cheek-bridle-color-back.svg',
        color: 'cheek',
        defaultColor: {
          r: 251,
          g: 173,
          b: 35
        }
      },
      'cheek-back-outline': {
        file: 'cheek/cheek-bridle-outline-back.svg'
      },
      'cheek': {
        file: 'cheek/cheek-bridle-color.svg',
        color: 'cheek',
        defaultColor: {
          r: 251,
          g: 173,
          b: 35
        }
      },
      'cheek-outline': {
        file: 'cheek/cheek-bridle-outline.svg'
      }
    }
  }
};
"use strict";

siteData.builder.categories['head-pattern'].parts = {
  'head-pattern-light': {
    name: 'Light',
    preview: 'head-pattern/head-pattern-light-nose-preview.svg',
    slots: {
      'head-pattern': {
        color: 'head-pattern',
        defaultColor: {
          r: 255,
          g: 255,
          b: 255
        },
        file: 'head-pattern/head-pattern-light-nose.svg'
      }
    }
  }
};
"use strict";

siteData.builder.categories['body-pattern'].parts = {
  'body-pattern-bottom': {
    name: 'Bottom',
    preview: 'body-pattern/body-pattern-bottom-preview.svg',
    slots: {
      'body-pattern-color': {
        color: 'pattern',
        defaultColor: {
          r: 255,
          g: 255,
          b: 255
        },
        file: 'body-pattern/body-pattern-bottom.svg'
      }
    }
  },
  'body-pattern-top': {
    name: 'Top',
    preview: 'body-pattern/body-pattern-top-preview.svg',
    slots: {
      'body-pattern-color': {
        color: 'pattern',
        defaultColor: {
          r: 163,
          g: 23,
          b: 86
        },
        file: 'body-pattern/body-pattern-top.svg'
      }
    }
  },
  'body-pattern-front-with-hearts': {
    name: 'Front with hearts',
    preview: 'body-pattern/body-pattern-front-with-hearts-preview.svg',
    slots: {
      'body-pattern-color': {
        color: 'pattern',
        defaultColor: {
          r: 87,
          g: 188,
          b: 61
        },
        file: 'body-pattern/body-pattern-front-with-hearts.svg'
      }
    }
  },
  'body-pattern-circles': {
    name: 'Circles',
    preview: 'body-pattern/body-pattern-circles-preview.svg',
    slots: {
      'body-pattern-color': {
        color: 'pattern',
        defaultColor: {
          r: 159,
          g: 170,
          b: 172
        },
        file: 'body-pattern/body-pattern-circles-color.svg'
      },
      'body-pattern-outline': {
        file: 'body-pattern/body-pattern-circles-outline.svg'
      }
    }
  },
  'body-pattern-camouflage': {
    name: 'Camouflage',
    preview: 'body-pattern/body-pattern-camouflage-preview.svg',
    slots: {
      'body-pattern-color': {
        color: 'pattern',
        defaultColor: {
          r: 248,
          g: 111,
          b: 194
        },
        file: 'body-pattern/body-pattern-camouflage-color-one.svg'
      },
      'body-pattern-color-two': {
        color: 'pattern-two',
        defaultColor: {
          r: 27,
          g: 49,
          b: 246
        },
        file: 'body-pattern/body-pattern-camouflage-color-two.svg'
      },
      'body-pattern-color-three': {
        color: 'pattern-three',
        defaultColor: {
          r: 156,
          g: 111,
          b: 255
        },
        file: 'body-pattern/body-pattern-camouflage-color-three.svg'
      }
    }
  },
  'body-pattern-zebra': {
    name: 'Zebra',
    preview: 'body-pattern/body-pattern-zebra-preview.svg',
    slots: {
      'body-pattern-color': {
        color: 'pattern',
        defaultColor: {
          r: 0,
          g: 0,
          b: 0
        },
        file: 'body-pattern/body-pattern-zebra.svg'
      }
    }
  },
  'body-pattern-dots': {
    name: 'Dots',
    preview: 'body-pattern/body-pattern-dots-preview.svg',
    slots: {
      'body-pattern-color': {
        color: 'pattern',
        defaultColor: {
          r: 198,
          g: 78,
          b: 198
        },
        file: 'body-pattern/body-pattern-dots.svg'
      }
    }
  },
  'body-pattern-sprinkles': {
    name: 'Sprinkles',
    preview: 'body-pattern/body-pattern-sprinkles-preview.svg',
    slots: {
      'body-pattern-color': {
        color: 'pattern',
        defaultColor: {
          r: 198,
          g: 78,
          b: 198
        },
        file: 'body-pattern/body-pattern-sprinkles.svg'
      }
    }
  },
  'body-pattern-back-stripes': {
    name: 'Back stripes',
    preview: 'body-pattern/body-pattern-back-stripes-preview.svg',
    slots: {
      'body-pattern-color': {
        color: 'pattern',
        defaultColor: {
          r: 24,
          g: 183,
          b: 182
        },
        file: 'body-pattern/body-pattern-back-stripes.svg'
      }
    }
  }
};
"use strict";

siteData.builder.categories['body-prop'].parts = {
  'body-prop-heart': {
    name: 'Heart',
    preview: 'body-prop/body-prop-heart-preview.svg',
    slots: {
      'body-prop': {
        color: 'body-prop',
        defaultColor: {
          r: 220,
          g: 3,
          b: 5
        },
        file: 'body-prop/body-prop-heart.svg'
      }
    }
  },
  'body-prop-rainbow': {
    name: 'Rainbow',
    preview: 'body-prop/body-prop-rainbow-preview.svg',
    slots: {
      'body-prop': {
        file: 'body-prop/body-prop-rainbow.svg'
      }
    }
  },
  'body-prop-lightning': {
    name: 'Lightning',
    preview: 'body-prop/body-prop-lightning-preview.svg',
    slots: {
      'body-prop': {
        color: 'body-prop',
        defaultColor: {
          r: 255,
          g: 183,
          b: 37
        },
        file: 'body-prop/body-prop-lightning.svg'
      }
    }
  },
  'body-prop-star': {
    name: 'Star',
    preview: 'body-prop/body-prop-star-preview.svg',
    slots: {
      'body-prop': {
        color: 'body-prop',
        defaultColor: {
          r: 220,
          g: 3,
          b: 5
        },
        file: 'body-prop/body-prop-star.svg'
      }
    }
  },
  'body-prop-musical-note': {
    name: 'Musical note',
    preview: 'body-prop/body-prop-musical-note-preview.svg',
    slots: {
      'body-prop': {
        color: 'body-prop',
        defaultColor: {
          r: 37,
          g: 185,
          b: 255
        },
        file: 'body-prop/body-prop-musical-note.svg'
      }
    }
  },
  'body-prop-clover': {
    name: 'Four-leaf clover',
    preview: 'body-prop/body-prop-clover-preview.svg',
    slots: {
      'body-prop': {
        color: 'body-prop',
        defaultColor: {
          r: 120,
          g: 169,
          b: 78
        },
        file: 'body-prop/body-prop-clover.svg'
      }
    }
  },
  'body-prop-bitcoin': {
    name: 'Bitcoin',
    preview: 'body-prop/body-prop-bitcoin-preview.svg',
    bitcoin: true,
    slots: {
      'body-prop': {
        file: 'body-prop/body-prop-bitcoin.svg'
      }
    }
  },
  'body-prop-wings': {
    name: 'Wings',
    preview: 'body-prop/body-prop-wings-preview.svg',
    secret: true,
    slots: {
      'body-prop-back-color': {
        color: 'body-prop',
        defaultColor: {
          r: 254,
          g: 191,
          b: 254
        },
        file: 'body-prop/body-prop-wings-back-color.svg'
      },
      'body-prop-back-shading': {
        file: 'body-prop/body-prop-wings-back-shading.svg'
      },
      'body-prop-back-outline': {
        file: 'body-prop/body-prop-wings-back-outline.svg'
      },
      'body-prop-three': {
        color: 'body-prop',
        file: 'body-prop/body-prop-wings-front-color.svg'
      },
      'body-prop-three-shading': {
        file: 'body-prop/body-prop-wings-front-shading.svg'
      },
      'body-prop-three-outline': {
        file: 'body-prop/body-prop-wings-front-outline.svg'
      }
    }
  },
  'body-prop-rainbow-wings': {
    name: 'Rainbow wings',
    preview: 'body-prop/body-prop-rainbow-wings-preview.svg',
    secret: true,
    slots: {
      'body-prop-back-color': {
        color: 'body-prop',
        defaultColor: {
          r: 122,
          g: 36,
          b: 187
        },
        file: 'body-prop/body-prop-rainbow-wings-back-color.svg'
      },
      'body-prop-back-outline': {
        file: 'body-prop/body-prop-rainbow-wings-back-outline.svg'
      },
      'body-prop-three': {
        color: 'body-prop',
        defaultColor: {
          r: 122,
          g: 36,
          b: 187
        },
        file: 'body-prop/body-prop-rainbow-wings-color.svg'
      },
      'body-prop-three-color-two': {
        color: 'body-prop-two',
        defaultColor: {
          r: 12,
          g: 127,
          b: 181
        },
        file: 'body-prop/body-prop-rainbow-wings-color-two.svg'
      },
      'body-prop-three-color-three': {
        color: 'body-prop-three',
        defaultColor: {
          r: 116,
          g: 202,
          b: 51
        },
        file: 'body-prop/body-prop-rainbow-wings-color-three.svg'
      },
      'body-prop-three-color-four': {
        color: 'body-prop-four',
        defaultColor: {
          r: 255,
          g: 228,
          b: 4
        },
        file: 'body-prop/body-prop-rainbow-wings-color-four.svg'
      },
      'body-prop-three-color-five': {
        color: 'body-prop-five',
        defaultColor: {
          r: 252,
          g: 144,
          b: 0
        },
        file: 'body-prop/body-prop-rainbow-wings-color-five.svg'
      },
      'body-prop-three-shading': {
        file: 'body-prop/body-prop-rainbow-wings-shading.svg'
      },
      'body-prop-three-outline': {
        file: 'body-prop/body-prop-rainbow-wings-outline.svg'
      }
    }
  },
  'body-prop-saddle': {
    name: 'Saddle',
    preview: 'body-prop/body-prop-saddle-preview.svg',
    slots: {
      'body-prop': {
        color: 'body-prop',
        defaultColor: {
          r: 231,
          g: 35,
          b: 31
        },
        file: 'body-prop/body-prop-saddle-color-one.svg'
      },
      'body-prop-two': {
        color: 'body-prop-two',
        defaultColor: {
          r: 251,
          g: 173,
          b: 35
        },
        file: 'body-prop/body-prop-saddle-color-two.svg'
      },
      'body-prop-two-shading': {
        file: 'body-prop/body-prop-saddle-shading.svg'
      },
      'body-prop-two-outline': {
        file: 'body-prop/body-prop-saddle-outline.svg'
      }
    }
  }
};
"use strict";

siteData.builder.categories['body-prop-chest'].parts = {
  'body-prop-chest-heart': {
    name: 'Heart',
    preview: 'body-prop-chest/body-prop-chest-heart-preview.svg',
    slots: {
      'body-prop-chest-color': {
        color: 'body-prop-chest',
        defaultColor: {
          r: 250,
          g: 194,
          b: 219
        },
        file: 'body-prop-chest/body-prop-chest-heart-color.svg'
      },
      'body-prop-chest-outline': {
        file: 'body-prop-chest/body-prop-chest-heart-outline.svg'
      }
    }
  },
  'body-prop-chest-necklace': {
    name: 'Necklace',
    preview: 'body-prop-chest/body-prop-chest-necklace-preview.svg',
    slots: {
      'body-prop-chest-color': {
        color: 'body-prop-chest',
        defaultColor: {
          r: 255,
          g: 255,
          b: 255
        },
        file: 'body-prop-chest/body-prop-chest-necklace-color.svg'
      },
      'body-prop-chest-outline': {
        file: 'body-prop-chest/body-prop-chest-necklace-outline.svg'
      }
    }
  },
  'body-prop-chest-fur': {
    name: 'Fur',
    preview: 'body-prop-chest/body-prop-chest-fur-preview.svg',
    slots: {
      'body-prop-chest-color': {
        color: 'body-prop-chest',
        defaultColor: {
          r: 0,
          g: 0,
          b: 0
        },
        file: 'body-prop-chest/body-prop-chest-fur-color.svg'
      }
    }
  },
  'body-prop-chest-neckband': {
    name: 'Neckband',
    preview: 'body-prop-chest/body-prop-chest-neckband-preview.svg',
    slots: {
      'body-prop-chest-color': {
        color: 'body-prop-chest',
        defaultColor: {
          r: 203,
          g: 244,
          b: 252
        },
        file: 'body-prop-chest/body-prop-chest-neckband-color.svg'
      },
      'body-prop-chest-color-two': {
        color: 'body-prop-chest-two',
        defaultColor: {
          r: 255,
          g: 23,
          b: 23
        },
        file: 'body-prop-chest/body-prop-chest-neckband-color-two.svg'
      },
      'body-prop-chest-outline': {
        file: 'body-prop-chest/body-prop-chest-neckband-outline.svg'
      }
    }
  },
  'body-prop-chest-scarf': {
    name: 'Scarf',
    preview: 'body-prop-chest/body-prop-chest-scarf-preview.svg',
    slots: {
      'body-prop-chest-color': {
        color: 'body-prop-chest',
        defaultColor: {
          r: 242,
          g: 89,
          b: 26
        },
        file: 'body-prop-chest/body-prop-chest-scarf-color.svg'
      },
      'body-prop-chest-shading': {
        file: 'body-prop-chest/body-prop-chest-scarf-shading.svg'
      },
      'body-prop-chest-outline': {
        file: 'body-prop-chest/body-prop-chest-scarf-outline.svg'
      }
    }
  },
  'body-prop-chest-scarf-2': {
    disabled: true,
    name: 'Winter scarf',
    preview: 'body-prop-chest/body-prop-chest-scarf-2-preview.svg',
    slots: {
      'body-prop-chest-color': {
        color: 'body-prop-chest',
        defaultColor: {
          r: 255,
          g: 255,
          b: 255
        },
        file: 'body-prop-chest/body-prop-chest-scarf-2-color.svg'
      },
      'body-prop-chest-color-two': {
        color: 'body-prop-chest-two',
        defaultColor: {
          r: 238,
          g: 48,
          b: 48
        },
        file: 'body-prop-chest/body-prop-chest-scarf-2-color-two.svg'
      },
      'body-prop-chest-shading': {
        file: 'body-prop-chest/body-prop-chest-scarf-2-shading.svg'
      },
      'body-prop-chest-outline': {
        file: 'body-prop-chest/body-prop-chest-scarf-2-outline.svg'
      }
    }
  }
};
"use strict";

siteData.builder.categories['ears'].parts = {
  'ears': {
    name: 'Ears',
    preview: 'ears/ears-preview.svg',
    slots: {
      'left-ear-color': {
        color: 'body',
        defaultColor: {
          r: 254,
          g: 191,
          b: 254
        },
        file: 'ears/left-ear-color.svg'
      },
      'left-ear-outline': {
        file: 'ears/left-ear-outline.svg'
      },
      'right-ear-color': {
        color: 'body',
        defaultColor: {
          r: 254,
          g: 191,
          b: 254
        },
        file: 'ears/right-ear-color.svg'
      },
      'right-ear-outline': {
        file: 'ears/right-ear-outline.svg'
      }
    }
  },
  'ears-round': {
    name: 'Round',
    preview: 'ears/ears-round-preview.svg',
    slots: {
      'left-ear-color': {
        color: 'body',
        defaultColor: {
          r: 254,
          g: 191,
          b: 254
        },
        file: 'ears/left-ear-round-color.svg'
      },
      'left-ear-shading': {
        file: 'ears/left-ear-round-shading.svg'
      },
      'left-ear-outline': {
        file: 'ears/left-ear-round-outline.svg'
      },
      'right-ear-color': {
        color: 'body',
        defaultColor: {
          r: 254,
          g: 191,
          b: 254
        },
        file: 'ears/right-ear-round-color.svg'
      },
      'right-ear-shading': {
        file: 'ears/right-ear-round-shading.svg'
      },
      'right-ear-outline': {
        file: 'ears/right-ear-round-outline.svg'
      }
    }
  },
  'ears-pointy': {
    name: 'Pointy',
    preview: 'ears/ears-pointy-preview.svg',
    slots: {
      'left-ear-color': {
        color: 'body',
        defaultColor: {
          r: 254,
          g: 191,
          b: 254
        },
        file: 'ears/left-ear-pointy-color.svg'
      },
      'left-ear-outline': {
        file: 'ears/left-ear-pointy-outline.svg'
      },
      'right-ear-color': {
        color: 'body',
        defaultColor: {
          r: 254,
          g: 191,
          b: 254
        },
        file: 'ears/right-ear-pointy-color.svg'
      },
      'right-ear-color-two': {
        color: 'ear',
        defaultColor: {
          r: 255,
          g: 255,
          b: 255
        },
        file: 'ears/right-ear-pointy-color-two.svg'
      },
      'right-ear-outline': {
        file: 'ears/right-ear-pointy-outline.svg'
      }
    }
  }
};
"use strict";

Vue.mixin({
  data: function data() {
    var id = this.$options.name ? this.$options.name : this._uid; // console.log('fhdksjhfkdjhfkjhjks', this.$options.name, this, id);

    return {
      id: id,
      uid: id + '_' + new Date().getTime() + '_' + Math.round(Math.random() * 1000000),
      log: config.isDev
    };
  },
  methods: {
    l: function l() {
      if (this.log) {
        var args = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments);
        args.splice(0, 0, this.id); // console.log(this.id.toUpperCase());

        console.log.apply(null, args);
      }
    }
  },
  beforeDestroy: function beforeDestroy() {
    gbks.events.clearListener(this.id);
  }
});
"use strict";

var gbks = gbks || {};
gbks.browser = gbks.browser || {};
gbks.browser.extension = {
  id: 'browser.extension',
  log: true,
  browser: null,
  init: function init() {
    var result = false;

    if (gbks.browser.firefox.browserIsFirefox()) {
      this.browser = 'firefox';
      gbks.browser.firefox.init();
      gbks.browser.firefox.installed();
      result = true;
    } else if (gbks.browser.chrome.browserIsChrome()) {
      this.browser = 'chrome';
      gbks.browser.chrome.installed();
      result = true;
    }

    if (this.log) {
      console.log(this.id, 'init', result, this.browser);
    }

    return result;
  },
  hasExtension: function hasExtension() {
    return siteData.store.state.firefoxExtensionInstalled || siteData.store.state.chromeExtensionInstalled;
  },
  getYounicorns: function getYounicorns() {
    if (this.browser && this.hasExtension) {
      gbks.browser[this.browser].getYounicorns();
    }
  },
  addYounicorn: function addYounicorn(younicornId) {
    if (this.browser && this.hasExtension) {
      gbks.browser[this.browser].addYounicorn(younicornId);
    }
  },
  removeYounicorn: function removeYounicorn(younicornId) {
    if (this.browser && this.hasExtension) {
      gbks.browser[this.browser].removeYounicorn(younicornId);
    }
  }
};
"use strict";

var gbks = gbks || {};
gbks.browser = gbks.browser || {};
gbks.browser.chrome = {
  id: 'browsers.chrome',
  log: !true,
  browserIsChrome: function browserIsChrome() {
    var result = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);

    if (this.log) {
      console.log(this.id, 'browserIsChrome', result);
      console.log('window.chrome', window.chrome, window.chrome.runtime);
    }

    return result;
  },
  // Check if installed.
  installed: function installed() {
    if (this.log) {
      console.log(this.id, 'installed');
    }

    window.chrome.runtime.sendMessage(config.chromeExtensionId, {
      type: 'installed'
    }, $.proxy(this.onInstalled, this));
  },
  onInstalled: function onInstalled(reply) {
    if (this.log) {
      console.log(this.id, 'onInstalled');
    }

    if (reply) {
      if (reply.installed === true) {
        siteData.store.commit('updateChromeExtensionInstalled', true);
        this.getYounicorns();
      }
    }
  },
  // Get younicorns
  getYounicorns: function getYounicorns() {
    chrome.runtime.sendMessage(config.chromeExtensionId, {
      type: 'getYounicorns'
    }, $.proxy(this.onGetYounicorns, this));
  },
  onGetYounicorns: function onGetYounicorns(reply) {
    if (this.log) {
      console.log(this.id, 'onGetYounicorns', reply);
    }

    if (reply && reply.younicorns) {
      siteData.store.commit('updateBookmarkletYounicorns', reply.younicorns);
    }
  },
  // Add a younicorn
  addYounicorn: function addYounicorn(younicornId) {
    chrome.runtime.sendMessage(config.chromeExtensionId, {
      type: 'addYounicorn',
      younicornId: younicornId
    }, $.proxy(this.onAddYounicorn, this));
  },
  onAddYounicorn: function onAddYounicorn(reply) {
    if (this.log) {
      console.log(this.id, 'onAddYounicorn', reply);
    }

    if (reply && reply.younicorns) {
      siteData.store.commit('updateBookmarkletYounicorns', reply.younicorns);
    }
  },
  // Remove a younicorn
  removeYounicorn: function removeYounicorn(younicornId) {
    chrome.runtime.sendMessage(config.chromeExtensionId, {
      type: 'removeYounicorn',
      younicornId: younicornId
    }, $.proxy(this.onRemoveYounicorn, this));
  },
  onRemoveYounicorn: function onRemoveYounicorn(reply) {
    if (this.log) {
      console.log(this.id, 'onRemoveYounicorn', reply);
    }

    if (reply && reply.younicorns) {
      siteData.store.commit('updateBookmarkletYounicorns', reply.younicorns);
    }
  }
};
"use strict";

var gbks = gbks || {};
gbks.browser = gbks.browser || {};
gbks.browser.firefox = {
  id: 'browsers.firefox',
  log: true,
  browserIsFirefox: function browserIsFirefox() {
    return navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
  },
  init: function init() {
    window.addEventListener('message', $.proxy(this.onMessage, this));
  },
  onMessage: function onMessage(event) {
    // if(this.log) {
    // 	console.log(this.id, 'onMessage', event);
    // }
    var data = event.data;

    if (data) {
      var source = data.source;
      var type = data.type;

      if (source == 'cornify-firefox') {
        if (this.log) {
          console.log(this.id, 'onMessage', event, this);
        }

        switch (type) {
          case 'installed':
            this.onInstalled(data);
            break;

          case 'getYounicorns':
            this.onGetYounicorns(data);
            break;

          case 'addYounicorn':
            this.onAddYounicorn(data);
            break;

          case 'removeYounicorn':
            this.onRemoveYounicorn(data);
            break;

          default:
            console.log(this.id, 'onMessage', 'unrecognized event', data);
        }
      }
    }
  },
  // Check if installed.
  installed: function installed() {
    window.postMessage({
      source: 'cornify',
      type: 'installed'
    }, '*');
  },
  onInstalled: function onInstalled(reply) {
    if (this.log) {
      console.log(this.id, 'onInstalled', reply);
    }

    if (reply) {
      if (reply.installed === true) {
        console.log(this.id, 'the extension is installed');
        siteData.store.commit('updateFirefoxExtensionInstalled', true);
        this.getYounicorns();
      }
    }
  },
  // Get younicorns
  getYounicorns: function getYounicorns() {
    if (this.log) {
      console.log(this.id, 'getYounicorns');
    }

    window.postMessage({
      source: 'cornify',
      type: 'getYounicorns'
    }, '*');
  },
  onGetYounicorns: function onGetYounicorns(reply) {
    if (this.log) {
      console.log(this.id, 'onGetYounicorns', reply);
    }

    if (reply.younicorns) {
      siteData.store.commit('updateBookmarkletYounicorns', reply.younicorns);
    }
  },
  // Add a younicorn
  addYounicorn: function addYounicorn(younicornId) {
    window.postMessage({
      source: 'cornify',
      type: 'addYounicorn',
      younicornId: younicornId
    }, '*');
  },
  onAddYounicorn: function onAddYounicorn(reply) {
    if (this.log) {
      console.log(this.id, 'onAddYounicorn', reply);
    }

    siteData.store.commit('updateBookmarkletYounicorns', reply.younicorns);
  },
  // Remove a younicorn
  removeYounicorn: function removeYounicorn(younicornId) {
    window.postMessage({
      source: 'cornify',
      type: 'removeYounicorn',
      younicornId: younicornId
    }, '*');
  },
  onRemoveYounicorn: function onRemoveYounicorn(reply) {
    if (this.log) {
      console.log(this.id, 'onRemoveYounicorn', reply);
    }

    siteData.store.commit('updateBookmarkletYounicorns', reply.younicorns);
  }
};
"use strict";

/*

Connects to Metamask for account info and transactions.

Functionality:
- Is Metamask available
- Log in
- Is a specific transaction confirmed
- Make a transaction

Stores transactions with addresses in a database to track whether users have made purchases.
Validates those with the Ethereum blockchain.

 */
var gbks = gbks || {};
gbks.crypto = gbks.crypto || {};
gbks.crypto.ethereum = {
  id: 'crypto.ethereum',
  log: true,
  accounts: null,
  // https://metamask.github.io/metamask-docs/Main_Concepts/Getting_Started
  isMetamaskInstalled: function isMetamaskInstalled() {
    return typeof window.ethereum !== 'undefined';
  },
  // Ask user to log in and connect accounts.
  enable: function enable() {
    console.log('enable', ethereum);
    ethereum.enable().then($.proxy(this.onEnabled, this)); // https://metamask.github.io/metamask-docs/Main_Concepts/Accessing_Accounts

    ethereum.on('accountsChanged', $.proxy(this.onAccountsChanged, this));
  },
  onEnabled: function onEnabled(accounts) {
    console.log('onEnabled', accounts);
    this.accounts = accounts;
  },
  onAccountsChanged: function onAccountsChanged(accounts) {
    console.log('onAccountsChanged', accounts);
    this.accounts = accounts;
  },
  // Send a transaction.
  // https://metamask.github.io/metamask-docs/Main_Concepts/Sending_Transactions
  sendTransaction: function sendTransaction() {
    console.log('sendTransaction');

    if (!this.accounts) {
      console.log('no accounts');
      return;
    }

    var params = [{
      "from": "0xb60e8dd61c5d32be8058bb8eb970870f07233155",
      "to": "0xd46e8dd67c5d32be8058bb8eb970870f07244567",
      "gas": "0x76c0",
      // 30400
      "gasPrice": "0x9184e72a000",
      // 10000000000000
      "value": "0x9184e72a",
      // 2441406250
      "data": "0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675"
    }];
    ethereum.send({
      method: 'eth_sendTransaction',
      params: params,
      from: this.accounts[0] // Provide the user's account to use.

    }).then($.proxy(this.onSendTransaction, this)).catch($.proxy(this.onSendTransactionError, this));
  },
  onSendTransaction: function onSendTransaction(result) {
    console.log('onSendTransaction', result); // The result varies by method, per the JSON RPC API.
    // For example, this method will return a transaction hash on success.
  },
  onSendTransactionError: function onSendTransactionError(reason) {
    console.log('onSendTransactionError', reason); // Like a typical promise, returns a reason on rejection.
  },
  // Get a transaction.
  getTransaction: function getTransaction(hash) {
    console.log('getTransaction', hash);
    ethereum.send({
      method: 'eth_getTransactionByHash',
      params: [hash]
    }).then($.proxy(this.onGetTransaction, this)).catch($.proxy(this.onGetTransactionError, this));
  },
  onGetTransaction: function onGetTransaction(result) {
    console.log('onGetTransaction', result);
  },
  onGetTransactionError: function onGetTransactionError(reason) {
    console.log('onGetTransactionError', reason);
  }
};
"use strict";

/* 

Global event helper.

*/
var gbks = gbks || {};
gbks.events = gbks.events || {};
gbks.event = gbks.event || {}; // Available events to listent to

gbks.event = gbks.event || {};
gbks.eventListeners = gbks.eventListeners || {};
gbks.event.PageMountStart = 'page-mount-start';
gbks.event.PageMounted = 'page-mounted';
gbks.event.Resize = 'resize';
gbks.events.AnnMouseEnter = 'ann-mouse-enter';
gbks.events.AnnMouseLeave = 'ann-mouse-leave';
gbks.events.Search = 'search';
gbks.events.ClearSearch = 'clear-search';
gbks.events.CloseSearch = 'close-search';

gbks.events.add = function (events) {
  var i = 0,
      length = events.length,
      event;

  for (; i < length; i++) {
    event = events[i];

    if (gbks.event[event]) {
      console.log('gbks.events.add event already registered: ' + event);
    } else {
      gbks.event[event] = event;
      gbks.eventListeners[event] = [];
    }
  }
};
/**
 * Pass in the event name, a callback and an Id.
 * The Id is used for debugging and also to easily remove
 * all listeners from a specific object when destroying it.
 */


gbks.events.listen = function (event, callback, id) {
  var listeners = gbks.events.getListenersByEvent(event); // console.log('gbks.events.listen', event, id, listeners);

  var alreadyListening = false;
  var i = 0,
      length = listeners.length,
      listener;

  for (; i < length; i++) {
    listener = listeners[i];

    if (listener.id == id) {
      alreadyListening = true;
      break;
    }
  }

  if (!alreadyListening) {
    listeners.push({
      callback: callback,
      id: id
    });
  }

  gbks.events.updateListenersByEvent(event, listeners);
};

gbks.events.unlisten = function (event, id) {
  var listeners = gbks.events.getListenersByEvent(event);
  var i = 0,
      length = listeners.length,
      listener;

  for (; i < length; i++) {
    listener = listeners[i];

    if (listener.id == id) {
      listeners.splice(i, 1);
      break;
    }
  }

  gbks.events.updateListenersByEvent(event, listeners);
};

gbks.events.call = function (event, data) {
  // console.log('gbks.events.call', event);
  if (!data) {
    data = {};
  }

  var listeners = gbks.events.getListenersByEvent(event);

  if (listeners) {
    var i = 0,
        length = listeners.length,
        listener;

    for (; i < length; i++) {
      listener = listeners[i];

      if (listener.callback) {
        listener.callback(data);
      }
    }
  }
};

gbks.events.getListenersByEvent = function (event) {
  return gbks.eventListeners[event] || [];
};

gbks.events.updateListenersByEvent = function (event, listeners) {
  gbks.eventListeners[event] = listeners;
};

gbks.events.clearListener = function (id) {
  for (var event in gbks.eventListeners) {
    var listeners = gbks.eventListeners[event],
        listener;
    var length = listeners.length;

    for (var i = 0; i < length; i++) {
      listener = listeners[i];

      if (listener.id === id) {
        listeners.splice(i, 1);
        i--;
        length--;
      }
    }
  }
};
"use strict";

/**
 * http://stackoverflow.com/questions/18377891/how-can-i-let-user-paste-image-data-from-the-clipboard-into-a-canvas-element-in
 */
var gbks = gbks || {};
gbks.tools = gbks.tools || {};

gbks.tools.FileDropper = function () {
  this.init = function (callback) {
    this.callback = callback;
    this.dragOverMethod = $.proxy(this.onDragOver, this);
    this.dragLeaveMethod = $.proxy(this.onDragLeave, this);
    this.dragDropMethod = $.proxy(this.onDragDrop, this);
    this.collectElements();
    this.setupEvents();
  };

  this.collectElements = function () {
    var e = {};
    e.body = $('body');
    this.e = e;
  };

  this.setupEvents = function () {
    this.e.body.bind('dragover', this.dragOverMethod);
    this.e.body.bind('dragleave', this.dragLeaveMethod);
    this.e.body.bind('drop', this.dragDropMethod);
  };

  this.destroy = function () {
    this.e.body.unbind('dragover', this.dragOverMethod);
    this.e.body.unbind('dragleave', this.dragLeaveMethod);
    this.e.body.unbind('drop', this.dragDropMethod);
  };

  this.onDragOver = function (event) {
    event.stopPropagation();
    event.preventDefault(); // console.log('onDragOver', event.originalEvent);
    // console.log(event.originalEvent.target.files);
    // console.log(event.originalEvent.dataTransfer.files);
    // var files = event.originalEvent.target.files || event.originalEvent.dataTransfer.files;
    // console.log('files', files);
  };

  this.onDragLeave = function (event) {
    event.stopPropagation();
    event.preventDefault();
  };

  this.onDragDrop = function (event) {
    event.stopPropagation();
    event.preventDefault();
    console.log('onDragDrop', event.originalEvent);
    var files = event.originalEvent.target.files || event.originalEvent.dataTransfer.files;
    console.log('files', files);
    var i = 0,
        length = files.length,
        file;

    for (; i < length; i++) {
      file = files[i];
      console.log('i', i, file);

      if (file.type.indexOf("image") == 0) {
        // Read image from hard drive.
        var reader = new FileReader();
        reader.onload = $.proxy(this.onReadFile, this, file, reader);
        reader.readAsDataURL(file);
      }
    }
  };

  this.onReadFile = function (file, reader, event) {
    console.log('onReadFile', arguments);
    console.log('file', file);
    console.log('reader', reader);
    console.log('event', event); // Cache image in browser.

    var image = new Image();
    image.onload = $.proxy(this.onLoadImage, this, file, reader, image);
    image.src = reader.result; //var image = $('<img>');
    //$('body').append(image);
    //image.attr('src', reader.result);
  };

  this.onLoadImage = function (file, reader, image, event) {
    console.log('onLoadImage', arguments);
    console.log('name', file.name);
    console.log('type', file.type);
    console.log('size', file.size);
    console.log('pixels', image.width, image.height); // Display the image.
    // var img = $('<img>');
    // $('body').append(img);
    // img.attr('src', image.src);

    this.callback(file, reader, image, event);
  };
};
"use strict";

var gbks = gbks || {};
gbks.icons = gbks.icons || {};
gbks.icons.gbks = '<svg width="476px" height="146px" viewBox="0 0 476 146" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill-rule="evenodd"><g transform="translate(-3482.000000, -1174.000000)"><path d="M3586.4,1261.8 L3553.6,1261.8 L3553.6,1235 L3618.8,1235 L3618.8,1290.2 C3603.6,1310.8 3581,1319.4 3556.4,1319.4 C3514.2,1319.4 3482,1289.8 3482,1247 C3482,1206.2 3515.2,1174.6 3556.2,1174.6 C3580.8,1174.6 3600.8,1184.4 3617,1203.2 L3594.6,1222.8 C3585,1211.2 3572.2,1202.6 3556.4,1202.6 C3533.2,1202.6 3516.4,1222.4 3516.4,1247 C3516.4,1272.8 3531.8,1291.4 3556.2,1291.4 C3566.4,1291.4 3578,1287 3586.4,1279 L3586.4,1261.8 Z M3630.63636,1317 L3630.63636,1177 L3668.83636,1177 C3682.43636,1177 3696.63636,1179.2 3707.03636,1186 C3718.43636,1193.4 3724.03636,1204.6 3724.03636,1217.4 C3724.03636,1228.2 3718.03636,1238.6 3708.03636,1243.4 C3720.83636,1248 3730.03636,1260.6 3730.03636,1274.8 C3730.03636,1291.6 3719.63636,1304.8 3704.03636,1311.4 C3693.43636,1315.8 3679.83636,1317 3667.23636,1317 L3630.63636,1317 Z M3695.63636,1275.4 C3695.63636,1264.8 3689.03636,1258.4 3676.43636,1258.4 L3663.03636,1258.4 L3663.03636,1290.4 L3668.03636,1290.4 C3675.43636,1290.4 3683.43636,1290.4 3688.83636,1287.6 C3693.03636,1285.4 3695.63636,1281.8 3695.63636,1275.4 Z M3663.03636,1203.6 L3663.03636,1232.8 L3668.83636,1232.8 C3683.63636,1232.8 3691.63636,1228 3691.63636,1218.4 C3691.63636,1212.6 3689.63636,1209 3686.63636,1206.8 C3682.03636,1203.6 3674.83636,1203.6 3667.03636,1203.6 L3663.03636,1203.6 Z M3853.67273,1177 L3805.87273,1234 L3854.07273,1317 L3816.67273,1317 L3784.07273,1259.8 L3772.07273,1274 L3772.07273,1317 L3739.67273,1317 L3739.67273,1177 L3772.07273,1177 L3772.07273,1229.2 L3814.67273,1177 L3853.67273,1177 Z M3935.90909,1214.8 C3927.70909,1208 3917.70909,1201.8 3906.90909,1201.8 C3899.50909,1201.8 3891.70909,1205.8 3891.70909,1213.8 C3891.70909,1224 3904.30909,1226.4 3913.30909,1229.6 C3933.10909,1236.4 3957.30909,1245.6 3957.30909,1276.2 C3957.30909,1306.2 3928.50909,1319.4 3902.90909,1319.4 C3880.90909,1319.4 3863.70909,1310.6 3848.30909,1295 L3869.30909,1274.4 C3880.10909,1284.4 3888.30909,1292.2 3903.30909,1292.2 C3913.10909,1292.2 3922.90909,1287.6 3922.90909,1276.8 C3922.90909,1265.8 3909.90909,1261.4 3897.30909,1256.8 C3878.70909,1249.8 3859.30909,1241 3859.30909,1214 C3859.30909,1187.4 3883.10909,1174.8 3906.50909,1174.8 C3924.90909,1174.8 3939.30909,1180.8 3954.10909,1192 L3935.90909,1214.8 Z"></path></g></g></svg>';
gbks.icons.logo = '<svg width="84px" height="84px" viewBox="0 0 84 84" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill-rule="evenodd"><path d="M71,34 L71,50 L81,50 C82.6568542,50 84,51.3431458 84,53 L84,81 C84,82.6568542 82.6568542,84 81,84 L53,84 C51.3431458,84 50,82.6568542 50,81 L50,71 L34,71 L34,81 C34,82.6568542 32.6568542,84 31,84 L3,84 C1.34314575,84 2.02906125e-16,82.6568542 0,81 L0,53 C-2.02906125e-16,51.3431458 1.34314575,50 3,50 L13,50 L13,34 L3,34 C1.34314575,34 2.02906125e-16,32.6568542 0,31 L0,3 C-2.02906125e-16,1.34314575 1.34314575,3.04359188e-16 3,0 L31,0 C32.6568542,-3.04359188e-16 34,1.34314575 34,3 L34,31 C34,32.6568542 32.6568542,34 31,34 L21,34 L21,50 L31,50 C32.6568542,50 34,51.3431458 34,53 L34,63 L50,63 L50,53 C50,51.3431458 51.3431458,50 53,50 L63,50 L63,34 L53,34 C51.3431458,34 50,32.6568542 50,31 L50,3 C50,1.34314575 51.3431458,3.04359188e-16 53,0 L81,0 C82.6568542,-3.04359188e-16 84,1.34314575 84,3 L84,31 C84,32.6568542 82.6568542,34 81,34 L71,34 Z"></path></g></svg>'; // General

gbks.icons.download = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="50px" height="50px" viewBox="0 0 50 50" enable-background="new 0 0 50 50" xml:space="preserve" stroke="none"><title>Download</title><path d="M26,16v16.586l6.293-6.293c0.391-0.391,1.023-0.391,1.414,0s0.391,1.023,0,1.414L25,36.414l-8.707-8.707  c-0.391-0.391-0.391-1.023,0-1.414s1.023-0.391,1.414,0L24,32.586V16H7v34h36V16H26z"/><path d="M26,2c0-0.552-0.447-1-1-1c-0.552,0-1,0.448-1,1v14h2V2z"/></svg>';
gbks.icons.chrome = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50" xml:space="preserve" stroke="none"><g><circle cx="25" cy="25" r="8"/><path d="M25,2C12.317,2,2,12.317,2,25s10.317,23,23,23s23-10.317,23-23S37.683,2,25,2z M22.329,45.811l6.647-11.64   C27.756,34.702,26.413,35,25,35c-3.559,0-6.682-1.875-8.454-4.683c-0.023-0.029-0.049-0.053-0.069-0.085L6.832,14.516   c0.371-0.641,0.776-1.257,1.211-1.852l7.004,11.413C15.515,18.995,19.798,15,25,15h18.462c0.351,0.646,0.663,1.316,0.946,2H30.974   C33.412,18.825,35,21.727,35,25c0,1.787-0.477,3.463-1.302,4.916c-0.007,0.014-0.006,0.029-0.014,0.043l-9.147,16.018   C23.79,45.96,23.055,45.903,22.329,45.811z"/></g></svg>';
gbks.icons.firefox = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50" xml:space="preserve" stroke="none"><path d="M48.579,18.621c-0.103-0.433-0.492-0.748-0.937-0.748c-0.005,0-0.01,0-0.013,0c-0.38-2.756-1.289-6.538-3.471-8.691  C43.973,9,43.729,8.906,43.483,8.906c-0.18,0-0.358,0.05-0.516,0.151c-0.121,0.077-0.219,0.177-0.292,0.291  c-0.538-0.605-1.17-1.18-1.91-1.706C38.897,6.408,36.02,5,32.057,5c-0.651,0-1.335,0.018-2.054,0.056  c0.367,0.002,0.702,0.024,1.049,0.039c-0.336-0.014-0.664-0.034-1.018-0.036c-0.011,0-0.02-0.003-0.031-0.003  c2.908,0.025,5.061,2.851,5.31,3.635c-0.327-0.067-0.643-0.095-0.943-0.1c-0.249-0.004-0.486,0.007-0.707,0.032  c-0.51,0.058-0.945,0.174-1.256,0.283c4.629,1.974,9.544,4.665,8.899,8.899c-0.456-0.771-1.389-1.336-1.856-1.336  c0.008,0,0.019,0.006,0.025,0.006c-0.019,0-0.041-0.006-0.06-0.005c1.351,2.698,0.996,6.189,0.275,9.372  c-0.21-1.568-1.435-2.979-1.435-2.979s1.292,7.463-2.539,11.248c0.602-1.488,0.52-3.669,0.52-3.669S32.078,37,27.003,37  s-8.16-3.205-9-4c0.318,0.026,1.077,0.064,1.381,0.064c-0.004,0-0.009-0.001-0.013-0.001c0.291,0.001,0.574-0.011,0.851-0.031  c3.974-0.296,6.264-2.625,6.503-2.797c0.357-0.256,0.6-0.351,0.868-0.351c0.173,0,0.355,0.039,0.585,0.101  c0.061,0.017,0.133,0.01,0.205,0c0.294-0.039,0.621-0.28,0.621-0.649c0-0.675-1.38-2.335-3.405-2.335  c-2.324,0-2.45,1.639-4.743,1.639c-2.328,0-5.147-3.502-5.229-3.791c0-0.368,0.066-1.587,1.371-1.782  c1.711,0.271,2.91,0.6,3.255,0.615c0.316-1.769-0.63-3.33-0.779-3.629c0.673-0.856,2.91-2.269,3.125-2.42  c0.399-0.279,0.826-0.978,0.826-1.376c0-0.344-0.367-0.428-0.367-0.428s-0.524-0.021-1.376-0.092  c-1.585-0.133-1.712-0.397-2.507-1.101c-0.569-0.503-1.529-1.59-1.529-1.59s0.245-2.079,3.456-4.984  c-2.63,0-6.177,3.088-6.177,3.088s-0.764-0.367-1.896-0.367c-2.049,0-3.425,0.704-3.425,0.704s-1.07-1.2-1.717-5.233  C7.888,6.25,7.89,6.247,7.893,6.243c0-0.002-0.001-0.004-0.001-0.007C7.839,5.871,7.577,5.57,7.222,5.462  c-0.091-0.027-0.184-0.04-0.276-0.04c-0.267,0-0.527,0.111-0.711,0.316c-2.515,2.777-2.651,7.735-2.64,9.069  C1.433,17.96,1.002,19.284,1,20.476c0,0.838,0.098,1.232,0.375,1.507c0.123,0.122,0.271,0.204,0.428,0.247  c-0.234,1.035-0.435,2.342-0.435,3.782c0,9.222,8.207,21.997,23.617,21.997c10.074,0,15.946-5.967,19.097-10.973  C47.665,31.348,49,24.937,49,22.232C48.999,20.395,48.682,19.06,48.579,18.621z" stroke="none"/><path style="fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10" d="  M8.727,10.602C12.769,5.945,18.733,3,25.384,3c5.139,0,9.869,1.759,13.618,4.707"/></svg>';
gbks.icons.unicorn = '<svg width="177px" height="190px" viewBox="0 0 177 190" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill-rule="evenodd"><g transform="translate(-74.000000, -55.000000)" stroke="none"><path d="M148.877609,61.63285 C149.504631,59.9997972 150.006362,58.2988115 150.358398,56.4365234 C151.837456,58.1319237 152.926343,60.1375324 153.672237,62.3461842 C155.561185,62.7829589 157.346406,63.4049277 159.001406,64.2410547 C167.37118,68.4695703 175.113076,73.719529 177.404482,79.290127 C173.495059,79.290127 170.030215,80.311123 167.944277,81.054043 C172.759219,85.1883203 176.846133,88.7151758 180.301211,98.2469141 C183.756289,107.778652 185.366152,114.725186 192.666445,122.315762 C186.709414,123.46835 182.563174,123.46835 177.878359,122.315762 C179.493594,129.850267 179.034609,138.412604 176.501406,148.002773 C174.020286,145.379727 172.039492,142.71306 170.559023,140.002773 C171.112246,146.374355 168.780947,152.132943 166.001406,158.458845 C162.650088,156.002773 160.862246,154.553066 159.001406,152.132943 C160.05069,155.479092 161.393496,159.865322 163.802676,162.537686 C164.578583,163.346332 165.574806,164.09991 166.791343,164.798422 C169.782517,164.358975 172.60468,164 174.579102,164 C177.058351,164 179.775057,164.361812 182.370359,165.153383 C182.378523,165.114769 182.386906,165.076011 182.395508,165.037109 C184.152832,157.089844 194,151.523926 199.320801,152.183105 C197.045898,153.797852 194.959961,155.620117 194,157.094238 C198.458496,156 206.916992,157.094238 212.821289,160.286133 C218.725586,163.478027 225.507812,169.894531 230,170.966309 C234.492187,172.038086 241.095703,169.978516 243.791504,168.272461 C243.109375,170.966309 242.290527,172.903809 240.220215,175.164551 C243.791504,173.296387 247.766113,170.966309 250.349609,168.272461 C250.349609,174.638992 247.457031,184.53125 240.220215,190.25 C232.983398,195.96875 224.416504,199 214.199707,195.39209 C203.98291,191.78418 199.95752,177.465332 194,176.190918 C193.910699,176.171815 193.821073,176.152564 193.731158,176.133148 C193.90684,177.016257 194,177.95395 194,178.948242 C194,190.313477 192.476563,192.980225 195.046875,195.174805 C196.813358,196.68306 204.336426,196.691277 204.336426,199 C204.336426,204.463867 208.982588,223.362305 207.699385,232.925781 C205.223799,235.816406 197.669434,236.126953 195.317871,233.34082 C195.317871,229.378906 193.293945,216.896093 193.293945,212.680273 C193.293945,211.238085 190.926986,210.115791 187.773923,208.943748 C187.560055,214.331676 187.121018,222.86108 186.485222,232.088653 C183.845085,233.474395 178.731804,233.474395 175.76403,232.733185 C175.76403,222.362091 176.739616,212.102813 175.76403,210.29422 C175.263236,209.365821 167.92696,209.553788 164.908203,207.126953 C164.005196,206.401009 163.531261,205.420426 163.291048,204.324133 C161.266085,205.3931 159.004402,206.471498 156.562907,207.440572 C154.883723,208.215506 152.999894,209.139998 151.269287,210.113564 C151.269287,218.535073 149.469781,239.799805 149.579346,243.050108 C147.128333,244.435547 139.59848,245.911436 136.278049,243.050108 C136.5976,229.615365 136.711278,219.399774 135.201023,210.583695 C134.156039,210.380294 133.129455,210.10461 132.1279,209.761631 C130.662859,218.846582 128.810563,229.501543 128.423267,240.777832 C124.062915,242.425293 119.651294,242.425293 115.559497,240.777832 C117.813477,221.773418 117.121094,205.4375 116,188.595703 C115.973335,188.195123 115.974013,187.815766 116.000019,187.457177 C116.01125,175.033399 120.90625,167.04338 120.90625,164 C120.90625,160.953125 119.075195,160.953125 116,158.454185 C87.4541016,158.454185 74,148.478516 74,140 C74,131.521484 80.0009766,129.792969 81.2802734,122.646484 C82.2173494,117.411735 84.306113,105.71957 88.5356292,96.7302616 C86.6539163,90.4987008 86.8144451,77.8990558 89.6423354,74.0578859 C87.1023051,67.7607331 85.7614752,62.4047371 87.3294973,61.6515323 C89.6403039,60.5415285 98.944952,67.549984 106.462425,74.3933738 C112.829916,61.5711246 121.144993,55.16 131.407656,55.16 C130.951113,58.5913965 130.390811,60.2971591 127.327334,64.2410547 C134.772855,62.3291551 142.258019,61.12988 148.877609,61.63285 L148.877609,61.63285 Z"></path></g></g></svg>';
gbks.icons.invertColor = '<svg width="34px" height="48px" viewBox="0 0 34 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" stroke="none" fill-rule="evenodd"><path d="M17.771,0.363 C17.392,-0.097 16.609,-0.097 16.23,0.363 C15.566,1.165 0,20.131 0,31.019 C0,40.382 7.626,48 17,48 C26.374,48 34,40.383 34,31.02 C34,20.131 18.434,1.165 17.771,0.363 Z M2,31.019 C2,22.926 11.881,9.236 16,3.881 L16,45.949 C8.195,45.431 2,38.942 2,31.019 Z" stroke="none" fill-rule="nonzero"></path></g></svg>';
gbks.icons.color = '<svg width="34px" height="48px" viewBox="0 0 34 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill-rule="evenodd"><path d="M17.771,0.363 C17.392,-0.097 16.609,-0.097 16.23,0.363 C15.566,1.165 0,20.131 0,31.019 C0,40.382 7.626,48 17,48 C26.374,48 34,40.383 34,31.02 C34,20.131 18.434,1.165 17.771,0.363 Z" stroke="none" fill-rule="nonzero"></path></g></svg>';
gbks.icons.brush = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="50px" height="50px" viewBox="0 0 50 50" enable-background="new 0 0 50 50" xml:space="preserve" stroke="none"><path d="M31.15-0.062L17.456,13.629l0,0l-5.336,5.335c-0.292,0.291-0.374,0.731-0.209,1.108c1.685,3.844,2.973,8.716,2.127,9.561  c-1.883,1.883-3.745,2.653-5.546,3.399c-1.482,0.613-2.883,1.193-4.018,2.33C0.64,39.197-1.546,45.556,1.447,48.55  c0.911,0.911,2.222,1.393,3.792,1.393c3.026,0,6.714-1.732,9.399-4.416c1.249-1.251,2.168-3.187,3.058-5.059  c0.818-1.72,1.664-3.498,2.669-4.504c0.247-0.246,0.741-0.376,1.43-0.376c3.044,0,8.038,2.457,8.088,2.481  c0.385,0.191,0.847,0.117,1.151-0.188l5.338-5.338l0.001,0.001l8.552-8.554c0.039-0.034,0.09-0.075,0.113-0.098  c0.014-0.014,0.018-0.032,0.03-0.046l4.994-4.995L31.15-0.062z M7,45.001c-1.104,0-2-0.896-2-2s0.896-2,2-2s2,0.896,2,2  S8.104,45.001,7,45.001z M36.373,29.716L20.285,13.629l2.867-2.866c0.158,0.479,0.44,0.945,0.875,1.38  c1.873,1.869,5.138-0.057,5.772-0.462c2.255-1.436,3.226-1.399,3.316-1.348c0.135,0.282,0.05,1.198-1.119,3.96l-0.077,0.182  c-1.007,2.392-0.077,3.831,0.567,4.477c1.059,1.06,2.54,0.688,3.729,0.389c1.063-0.268,1.784-0.415,2.137-0.064  c0.434,0.434,0.147,1.516-0.104,2.47c-0.313,1.189-0.639,2.418,0.202,3.259c0.532,0.532,1.168,0.758,1.829,0.804L36.373,29.716z"/></svg>';
gbks.icons.camera = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50" xml:space="preserve" stroke="none"><path d="M46,11l-8.956,0.006c-0.279-0.101-0.854-1.02-1.164-1.514C35.111,8.267,34.317,7,33,7H17c-1.317,0-2.111,1.267-2.88,2.492  C13.811,9.986,13.235,10.905,13,11H4c-1.654,0-3,1.346-3,3v26c0,1.654,1.346,3,3,3h42c1.654,0,3-1.346,3-3V14  C49,12.346,47.654,11,46,11z M25,37c-5.514,0-10-4.486-10-10s4.486-10,10-10s10,4.486,10,10S30.514,37,25,37z"/><path d="M25,21c0,0-1.209,3.209-2,4c-0.791,0.791-4,2-4,2s3.209,1.209,4,2c0.791,0.791,2,4,2,4s1.209-3.209,2-4c0.791-0.791,4-2,4-2  s-3.209-1.209-4-2C26.209,24.209,25,21,25,21z"/></svg>';
gbks.icons.arrowLeftBlueYellow = '<svg width="22px" height="30px" viewBox="0 0 22 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>Arrow</title><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(0.656854, 0.656854)" fill-rule="nonzero"><path d="M18.7279221,18.7279221 C21.0710678,21.0710678 21.0710678,24.8700577 18.7279221,27.2132034 C16.3847763,29.5563492 12.5857864,29.5563492 10.2426407,27.2132034 L1.75735931,18.7279221 C-0.585786438,16.3847763 -0.585786438,12.5857864 1.75735931,10.2426407 L10.2426407,1.75735931 C12.5857864,-0.585786438 16.3847763,-0.585786438 18.7279221,1.75735931 C21.0710678,4.10050506 21.0710678,7.89949494 18.7279221,10.2426407 L14.4852814,14.4852814 L18.7279221,18.7279221 Z" fill="#FEFE12"></path><path d="M11.6568542,14.4852814 L17.3137085,8.82842712 C18.8758057,7.26632996 18.8758057,4.73367004 17.3137085,3.17157288 C15.7516113,1.60947571 13.2189514,1.60947571 11.6568542,3.17157288 L3.17157288,11.6568542 C1.60947571,13.2189514 1.60947571,15.7516113 3.17157288,17.3137085 L11.6568542,25.7989899 C13.2189514,27.361087 15.7516113,27.361087 17.3137085,25.7989899 C18.8758057,24.2368927 18.8758057,21.7042328 17.3137085,20.1421356 L11.6568542,14.4852814 Z" fill="#3AB1FB"></path></g></g></svg>';
gbks.icons.linkbox = '<svg width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill-rule="evenodd"><g transform="translate(-1009.000000, -385.000000)" fill-rule="nonzero"><g transform="translate(242.000000, 370.000000)"><g transform="translate(767.000000, 15.000000)"><path d="M17.1428571,0 L0.857142857,0 C0.384428571,0 0,0.384428571 0,0.857142857 L0,17.1428571 C0,17.6155714 0.384428571,18 0.857142857,18 L17.1428571,18 C17.6155714,18 18,17.6155714 18,17.1428571 L18,0.857142857 C18,0.384428571 17.6155714,0 17.1428571,0 Z M15.8571429,9 C15.8571429,9.237 15.6651429,9.42857143 15.4285714,9.42857143 C15.192,9.42857143 15,9.237 15,9 L15,3.606 L5.87442857,12.7315714 C5.79085714,12.8151429 5.68114286,12.8571429 5.57142857,12.8571429 C5.46171429,12.8571429 5.352,12.8151429 5.26842857,12.7315714 C5.10085714,12.564 5.10085714,12.2931429 5.26842857,12.1255714 L14.394,3 L9,3 C8.76342857,3 8.57142857,2.80842857 8.57142857,2.57142857 C8.57142857,2.33442857 8.76342857,2.14285714 9,2.14285714 L15.4285714,2.14285714 C15.4842857,2.14285714 15.54,2.154 15.5922857,2.17585714 C15.6972857,2.21914286 15.7808571,2.30271429 15.8241429,2.40771429 C15.8455714,2.46 15.8571429,2.51571429 15.8571429,2.57142857 L15.8571429,9 Z"></path></g></g></g></g></svg>';
gbks.icons.day = '<svg width="46px" height="48px" viewBox="0 0 46 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill-rule="evenodd"><g transform="translate(-970.000000, -267.000000)" fill-rule="nonzero" stroke="none"><g transform="translate(970.000000, 267.000000)"><path d="M0,15 L46,15 L46,46 C46,47.105 45.105,48 44,48 L2,48 C0.895,48 0,47.105 0,46 L0,15 Z M14,4 L32,4 L32,2 C32,0.89571525 32.8957153,0 34,0 L36,0 C37.1042847,0 38,0.89571525 38,2 L38,4 L44,4 C45.159,4 46,4.841 46,6 L46,13 L0,13 L0,6 C0,4.841 0.841,4 2,4 L8,4 L8,2 C8,0.89571525 8.89571525,0 10,0 L12,0 C13.1042847,0 14,0.89571525 14,2 L14,4 Z M24.654,35.526 L24.654,22.926 L22.98,22.926 C22.908,23.31 22.755,23.634 22.521,23.898 C22.287,24.162 22.005,24.378 21.675,24.546 C21.345,24.714 20.976,24.834 20.568,24.906 C20.16,24.978 19.74,25.014 19.308,25.014 L19.308,26.634 L22.404,26.634 L22.404,35.526 L24.654,35.526 Z M36,8 L36,2 L34,2 L34,8 L36,8 Z M12,8 L12,2 L10,2 L10,8 L12,8 Z"></path></g></g></g></svg>';
gbks.icons.month = '<svg width="46px" height="48px" viewBox="0 0 46 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill-rule="evenodd"><g transform="translate(-1031.000000, -267.000000)" fill-rule="nonzero" stroke="none"><g transform="translate(1031.000000, 267.000000)"><path d="M0,15 L46,15 L46,46 C46,47.105 45.105,48 44,48 L2,48 C0.895,48 0,47.105 0,46 L0,15 Z M23.443,33.537 C23.684,33.063 23.804,32.526 23.802,31.926 C23.802,31.11 23.6,30.417 23.199,29.847 C22.796,29.277 22.235,28.92 21.515,28.776 L21.515,28.74 C22.128,28.524 22.578,28.179 22.866,27.705 C23.153,27.231 23.298,26.676 23.298,26.04 C23.298,25.489 23.184,24.999 22.956,24.573 C22.728,24.147 22.425,23.796 22.047,23.52 C21.669,23.244 21.244,23.034 20.769,22.89 C20.296,22.746 19.812,22.674 19.32,22.674 C18.684,22.674 18.115,22.782 17.61,22.998 C17.106,23.214 16.678,23.514 16.324,23.898 C15.969,24.282 15.69,24.735 15.486,25.257 C15.282,25.779 15.168,26.346 15.144,26.958 L17.197,26.958 C17.184,26.634 17.22,26.319 17.304,26.013 C17.388,25.707 17.517,25.431 17.691,25.185 C17.865,24.939 18.084,24.744 18.348,24.6 C18.612,24.456 18.925,24.384 19.285,24.384 C19.86,24.384 20.332,24.546 20.698,24.87 C21.063,25.194 21.247,25.626 21.247,26.166 C21.247,26.551 21.166,26.874 21.004,27.138 C20.842,27.402 20.629,27.609 20.365,27.759 C20.101,27.909 19.801,28.014 19.465,28.074 C19.129,28.134 18.793,28.158 18.457,28.146 L18.457,29.676 C18.864,29.664 19.263,29.676 19.653,29.712 C20.044,29.748 20.395,29.841 20.707,29.991 C21.019,30.141 21.271,30.36 21.463,30.648 C21.654,30.936 21.751,31.326 21.751,31.818 C21.751,32.538 21.52,33.093 21.058,33.483 C20.596,33.873 20.023,34.068 19.339,34.068 C18.535,34.068 17.931,33.813 17.529,33.303 C17.128,32.793 16.939,32.154 16.963,31.386 L14.911,31.386 C14.923,32.046 15.025,32.646 15.217,33.186 C15.408,33.726 15.688,34.188 16.054,34.572 C16.42,34.956 16.876,35.253 17.422,35.463 C17.968,35.673 18.607,35.778 19.339,35.778 C19.939,35.778 20.509,35.688 21.049,35.508 C21.589,35.328 22.063,35.074 22.471,34.743 C22.88,34.413 23.203,34.011 23.443,33.537 Z M14,4 L32,4 L32,2 C32,0.89571525 32.8957153,0 34,0 L36,0 C37.1042847,0 38,0.89571525 38,2 L38,4 L44,4 C45.159,4 46,4.841 46,6 L46,13 L0,13 L0,6 C0,4.841 0.841,4 2,4 L8,4 L8,2 C8,0.89571525 8.89571525,0 10,0 L12,0 C13.1042847,0 14,0.89571525 14,2 L14,4 Z M30.661,35.526 L30.661,22.926 L28.987,22.926 C28.916,23.31 28.762,23.634 28.528,23.898 C28.294,24.162 28.012,24.378 27.682,24.546 C27.352,24.714 26.983,24.834 26.575,24.906 C26.167,24.978 25.748,25.014 25.315,25.014 L25.315,26.634 L28.411,26.634 L28.411,35.526 L30.661,35.526 Z M36,8 L36,2 L34,2 L34,8 L36,8 Z M12,8 L12,2 L10,2 L10,8 L12,8 Z"></path></g></g></g></svg>';
gbks.icons.moon = '<svg width="37" height="35" viewBox="0 0 37 35" xmlns="http://www.w3.org/2000/svg"><g fill-rule="nonzero" stroke="none"><path d="M10 6a1 1 0 0 1-1-1V1a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1z"/><path d="M12 4H8a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2zM2 16a1 1 0 0 1-1-1v-2a1 1 0 0 1 2 0v2a1 1 0 0 1-1 1z"/><path d="M3 15H1a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2zM23 35c-7.72 0-14-6.28-14-14 0-6.913 5.161-12.864 12.005-13.843l1.318-.189-.187 1.319A12.112 12.112 0 0 0 22 10c0 6.617 5.383 12 12 12 .51 0 1.055-.043 1.714-.137l1.318-.187-.188 1.318C35.863 29.839 29.911 35 23 35z"/></g></svg>';
gbks.icons.sun = '<svg width="42" height="42" viewBox="0 0 42 42" xmlns="http://www.w3.org/2000/svg"><g fill-rule="evenodd"><path d="M21 31c-5.514 0-10-4.486-10-10s4.486-10 10-10 10 4.486 10 10-4.486 10-10 10z" fill-rule="nonzero" stroke="none"/><path d="M21 41v-6M21 7V1M1 21h6M35 21h6M6.858 35.143l4.243-4.243M30.898 11.102l4.245-4.244M6.858 6.858l4.243 4.244M30.898 30.9l4.245 4.243" fill="none" stroke-width="2" stroke-linecap="round"/></g></svg>';
gbks.icons.graph = '<svg width="26" height="23" viewBox="0 0 26 23" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M1 0v22" fill="none" stroke-width="1.023"/><path stroke="none" fill-rule="nonzero" d="M1 10.744v1.023h4.847l-.306-1.023zM17.327 10.744l-.256 1.023h-7.04l-.358-1.023zM21.459 10.744l-.255 1.023H26v-1.023z"/><path d="M25.49 1.535c-6.786 0-5.919 19.442-11.735 19.442S7.837 1.535 1 1.535" fill="none" stroke-width="2.558"/></g></svg>';
gbks.icons.gear = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M19.636 8.357l-2.57-.42a7.362 7.362 0 0 0-.614-1.48l1.5-2.138a.435.435 0 0 0-.048-.558l-1.691-1.69a.435.435 0 0 0-.562-.045L13.546 3.54a7.294 7.294 0 0 0-1.493-.62L11.605.36a.435.435 0 0 0-.428-.36H8.785a.435.435 0 0 0-.43.365L7.94 2.91a7.326 7.326 0 0 0-1.494.614l-2.1-1.5a.435.435 0 0 0-.56.046L2.094 3.76a.434.434 0 0 0-.049.557L3.524 6.43c-.263.476-.472.98-.625 1.504l-2.535.422a.435.435 0 0 0-.364.43v2.39c0 .211.151.392.359.429l2.535.45c.152.522.362 1.026.625 1.504l-1.496 2.092a.436.436 0 0 0 .046.56l1.69 1.692c.15.15.385.17.558.049l2.117-1.483c.476.261.978.469 1.498.62l.425 2.547c.034.21.215.363.428.363h2.392c.21 0 .391-.151.427-.359l.455-2.56a7.312 7.312 0 0 0 1.491-.624l2.133 1.496c.173.122.408.1.558-.049l1.69-1.691c.15-.151.17-.39.045-.562l-1.52-2.112c.257-.47.462-.966.611-1.482l2.573-.451a.435.435 0 0 0 .36-.429v-2.39a.434.434 0 0 0-.364-.43zM10 13.043a3.044 3.044 0 1 1 0-6.087 3.044 3.044 0 0 1 0 6.087z" stroke="none" fill-rule="nonzero"/></svg>';
gbks.icons.down = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="50px" height="50px" viewBox="0 0 50 50" enable-background="new 0 0 50 50" xml:space="preserve"><polygon points="47.25,15 45.164,12.914 25,33.078 4.836,12.914 2.75,15 25,37.25 "/></svg>';
gbks.icons.arrowUp = '<svg width="24px" height="34px" viewBox="0 0 24 34" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill-rule="evenodd"><g fill-rule="nonzero" stroke="none"><path d="M10,6.88508191 L10,32 C10,33.1045695 10.8954305,34 12,34 C13.1045695,34 14,33.1045695 14,32 L14,6.88508194 L20.4768579,13.3612851 C21.257946,14.1422942 22.524276,14.1422301 23.3052851,13.3611421 C24.0862942,12.580054 24.0862301,11.313724 23.3051421,10.5327149 L13.4141421,0.642714946 C12.6331098,-0.138238312 11.3668902,-0.138238316 10.5858579,0.642714939 L0.69585794,10.5317149 C-0.0852301311,11.312724 -0.0852941551,12.579054 0.695714939,13.3601421 C1.47672403,14.1412301 2.74305399,14.1412942 3.52414206,13.3602851 L10,6.88508191 Z"></path></g></g></svg>';
gbks.icons.close = '<svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title>Close</title><g stroke-width="3" fill="none" fill-rule="evenodd" stroke-linecap="round"><path d="M1.875 1.875l28.375 28.25M30.25 1.875L1.875 30.125"/></g></svg>';
gbks.icons.check = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="50px" height="50px" viewBox="0 0 50 50" enable-background="new 0 0 50 50" xml:space="preserve"><polyline fill="none" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="  8,29.312 21.921,41.348 42,10.652 "/></svg>';
gbks.icons.star = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path fill="none" stroke-width="2" stroke-linejoin="round" stroke-miterlimit="10" d="M25 2l6.4 16.5 17.6.9-13.7 11.2 4.5 17L25 38.1l-14.8 9.5 4.5-17L1 19.4l17.6-.9z"/></svg>';
gbks.icons.starFilled = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M10.2 48.6c-.2 0-.4-.1-.6-.2-.3-.2-.5-.7-.4-1.1l4.4-16.4L.4 20.2c-.4-.2-.5-.7-.4-1.1.1-.4.5-.7.9-.7l17-.9L24 1.6c.2-.3.6-.6 1-.6s.8.3.9.6L32 17.5l17 .9c.4 0 .8.3.9.7.1.4 0 .8-.3 1.1L36.4 30.9l4.4 16.4c.1.4 0 .8-.4 1.1-.3.2-.8.3-1.1 0L25 39.2l-14.3 9.2c-.2.2-.3.2-.5.2z"/></svg>';
gbks.icons.checkInCircleFilled = '<svg width="100px" height="100px" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M50,0 C22.4295455,0 0,22.4295455 0,50 C0,77.5704545 22.4295455,100 50,100 C77.5704545,100 100,77.5704545 100,50 C100,22.4295455 77.5704545,0 50,0 Z M46.5977273,71.6590909 L25.9772727,53.05 L29.0227273,49.6772727 L45.675,64.7045455 L70.5909091,26.0409091 L74.4136364,28.5022727 L46.5977273,71.6590909 Z" stroke="none" fill-rule="nonzero"></path></svg>';
gbks.icons.infoInCircle = '<svg width="106px" height="106px" viewBox="0 0 106 106" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M53,105.083333 C24.2351693,105.083333 0.916666667,81.7648307 0.916666667,53 C0.916666667,24.2351693 24.2351693,0.916666667 53,0.916666667 C81.7648307,0.916666667 105.083333,24.2351693 105.083333,53 C105.083333,81.7648307 81.7648307,105.083333 53,105.083333 Z M53,100.916667 C79.4636443,100.916667 100.916667,79.4636443 100.916667,53 C100.916667,26.5363557 79.4636443,5.08333333 53,5.08333333 C26.5363557,5.08333333 5.08333333,26.5363557 5.08333333,53 C5.08333333,79.4636443 26.5363557,100.916667 53,100.916667 Z M50.45625,34.7520833 C50.00625,34.7520833 49.7125,34.4520833 49.7125,34.0041667 L49.7125,28.55 C49.7125,28.1020833 50.0083333,27.8020833 50.45625,27.8020833 L55.5375,27.8020833 C55.9854167,27.8020833 56.2854167,28.1020833 56.2854167,28.55 L56.2854167,34.0041667 C56.2854167,34.4520833 55.9833333,34.7520833 55.5375,34.7520833 L50.45625,34.7520833 Z M50.6083333,78.6104167 C50.1604167,78.6104167 49.8625,78.3125 49.8625,77.8645833 L49.8625,43.56875 C49.8625,43.1208333 50.1625,42.8208333 50.6083333,42.8208333 L55.3895833,42.8208333 C55.8395833,42.8208333 56.1375,43.1208333 56.1375,43.56875 L56.1375,77.8645833 C56.1375,78.3145833 55.8375,78.6104167 55.3895833,78.6104167 L50.6083333,78.6104167 Z" stroke="none" fill-rule="nonzero"></path></svg>';
gbks.icons.infoInCircleFilled = '<svg width="46" height="46" viewBox="0 0 46 46" xmlns="http://www.w3.org/2000/svg"><path d="M23 0C10.318 0 0 10.318 0 23s10.318 23 23 23 23-10.318 23-23S35.682 0 23 0zm1.506 34.935c0 .216-.144.358-.359.358h-2.295c-.215 0-.358-.143-.358-.358V18.473c0-.215.144-.359.358-.359h2.295c.216 0 .359.144.359.359v16.462zm.071-21.053c0 .215-.145.359-.359.359h-2.439c-.216 0-.357-.144-.357-.359v-2.618c0-.215.142-.359.357-.359h2.439c.215 0 .359.144.359.359v2.618z" fill-rule="nonzero" stroke="none"/></svg>';
gbks.icons.news = '<svg width="18" height="22" viewBox="0 0 18 22" xmlns="http://www.w3.org/2000/svg"><g fill-rule="evenodd"><rect fill="none" stroke-width="1.5" x=".75" y=".75" width="16.5" height="20.5" rx="2"/><rect stroke="none" x="3" y="3" width="6" height="1.5" rx=".75"/><path stroke="none" d="M3 7h12v12H3z"/></g></svg>';
gbks.icons.magnify = '<svg width="23px" height="23px" viewBox="0 0 23 23" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g stroke-width="1" stroke="none" fill-rule="evenodd"><g transform="translate(-296.000000, -626.000000)" stroke="none"><g transform="translate(296.000000, 626.000000)"><path d="M15.9711916,14.6927523 L22.4933106,21.2148713 C22.8838349,21.6053956 22.8838349,22.2385606 22.4933106,22.6290849 C22.1027863,23.0196091 21.4696214,23.0196091 21.0790971,22.6290849 L14.5418852,16.0918729 C13.0141483,17.2873972 11.0902928,18 9,18 C4.02943725,18 0,13.9705627 0,9 C0,4.02943725 4.02943725,0 9,0 C13.9705627,0 18,4.02943725 18,9 C18,11.1597011 17.2392874,13.1417283 15.9711916,14.6927523 Z M9,16 C12.8659932,16 16,12.8659932 16,9 C16,5.13400675 12.8659932,2 9,2 C5.13400675,2 2,5.13400675 2,9 C2,12.8659932 5.13400675,16 9,16 Z"></path></g></g></g></svg>';
gbks.icons.sparkle = '<svg width="47px" height="47px" viewBox="0 0 47 47" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g stroke-width="1" fill-rule="evenodd"><g transform="translate(1.000000, 0.000000)"><path d="M23,23 L0,46" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><circle stroke="none" fill-rule="nonzero" cx="33" cy="37" r="1"></circle><circle stroke="none" fill-rule="nonzero" cx="33" cy="3" r="1"></circle><path d="M19.259,6.372 C19.414,6.765 19.791,7.004 20.189,7.004 C20.311,7.004 20.436,6.981 20.557,6.933 C21.07,6.73 21.322,6.149 21.119,5.635 L19.93,2.632 C19.727,2.119 19.148,1.866 18.632,2.07 C18.118,2.273 17.867,2.854 18.07,3.368 L19.259,6.372 Z" stroke="none" fill-rule="nonzero"></path><path d="M45,19 L29.89,19 L42.38,13.93 C42.89,13.72 43.13,13.14 42.93,12.62 C42.72,12.11 42.14,11.86 41.62,12.07 L31.04,16.37 L41.71,5.71 C42.1,5.32 42.1,4.68 41.71,4.29 C41.32,3.9 40.68,3.9 40.29,4.29 L28.7,15.89 L31.94,7.35 C32.13,6.84 31.87,6.26 31.35,6.06 C30.84,5.87 30.26,6.13 30.06,6.65 L27,14.718 L27,1 C27,0.45 26.55,0 26,0 C25.45,0 25,0.45 25,1 L25.01,15.38 L22.7,9.63 C22.5,9.12 21.92,8.87 21.4,9.08 C20.89,9.28 20.64,9.87 20.85,10.38 L22.89,15.48 L12.71,5.29 C12.32,4.9 11.68,4.9 11.29,5.29 C10.9,5.68 10.9,6.32 11.29,6.71 L21.66,17.08 L15.38,14.47 C14.87,14.26 14.28,14.5 14.07,15.01 C13.86,15.52 14.1,16.11 14.61,16.32 L21.08,19 L7,19 C6.45,19 6,19.45 6,20 C6,20.55 6.45,21 7,21 L19.65,21 L9.62,25.07 C9.11,25.28 8.87,25.86 9.07,26.38 C9.23,26.76 9.61,27 10,27 C10.13,27 10.25,26.98 10.38,26.93 L21.45,22.43 L7.44,36.44 C6.85,37.02 6.85,37.98 7.44,38.56 C7.73,38.85 8.12,39 8.5,39 C8.88,39 9.27,38.85 9.56,38.56 L23.09,25.03 L21.34,29.65 C21.14,30.16 21.4,30.74 21.92,30.94 C22.04,30.98 22.16,31 22.28,31 C22.68,31 23.06,30.75 23.21,30.35 L25.01,25.61 L25,39 C25,39.55 25.45,40 26,40 C26.55,40 27,39.55 27,39 L26.988,25.757 L30.07,33.37 C30.23,33.76 30.6,34 31,34 C31.12,34 31.25,33.98 31.37,33.93 C31.88,33.72 32.13,33.14 31.93,32.63 L28.39,23.8 L39.29,34.71 C39.49,34.9 39.74,35 40,35 C40.26,35 40.51,34.9 40.71,34.71 C41.1,34.32 41.1,33.68 40.71,33.29 L30.19,22.77 L36.62,25.44 C36.74,25.49 36.87,25.51 37,25.51 C37.39,25.51 37.76,25.28 37.92,24.9 C38.13,24.39 37.89,23.8 37.38,23.59 L31.13,21 L45,21 C45.55,21 46,20.55 46,20 C46,19.45 45.55,19 45,19 Z M25.494,23 C24.118,23 23,21.882 23,20.506 C23,19.118 24.118,18 25.494,18 C26.882,18 28,19.118 28,20.506 C28,21.882 26.882,23 25.494,23 Z" stroke="none" fill-rule="nonzero"></path><path d="M21.493,32.065 C20.979,31.87 20.4,32.128 20.203,32.646 L19.065,35.646 C18.869,36.162 19.129,36.74 19.646,36.936 C19.762,36.979 19.882,37 20,37 C20.403,37 20.783,36.754 20.935,36.354 L22.073,33.354 C22.269,32.838 22.009,32.261 21.493,32.065 Z" stroke="none" fill-rule="nonzero"></path><path d="M43.383,26.076 L40.386,24.834 C39.873,24.623 39.29,24.865 39.079,25.375 C38.868,25.885 39.11,26.47 39.62,26.682 L42.617,27.924 C42.743,27.976 42.872,28 43,28 C43.393,28 43.765,27.767 43.924,27.382 C44.135,26.873 43.893,26.288 43.383,26.076 Z" stroke="none" fill-rule="nonzero"></path><path d="M8.629,13.929 L11.626,15.127 C11.748,15.175 11.873,15.199 11.997,15.199 C12.394,15.199 12.77,14.961 12.926,14.57 C13.131,14.057 12.881,13.475 12.368,13.27 L9.371,12.072 C8.857,11.868 8.276,12.116 8.071,12.63 C7.866,13.142 8.116,13.724 8.629,13.929 Z" stroke="none" fill-rule="nonzero"></path></g></g></svg>';
gbks.icons.link = '<svg width="16px" height="15px" viewBox="0 0 16 15" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M7.86086957,9.06818182 C8.17391304,9.92045455 7.96521739,10.875 7.30434783,11.5568182 L5.2173913,13.6022727 C4.76521739,14.0454545 4.13913043,14.2840909 3.51304348,14.2840909 C2.85217391,14.2840909 2.26086957,14.0454545 1.80869565,13.6022727 C0.869565217,12.6818182 0.869565217,11.1477273 1.80869565,10.2272727 L3.89565217,8.18181818 C4.34782609,7.73863636 4.97391304,7.5 5.6,7.5 C5.87826087,7.5 6.15652174,7.53409091 6.4,7.63636364 L6.92173913,7.125 C6.50434783,6.92045455 6.0173913,6.81818182 5.56521739,6.81818182 C4.76521739,6.81818182 3.96521739,7.125 3.33913043,7.70454545 L1.25217391,9.75 C0.0347826087,10.9431818 0.0347826087,12.8863636 1.25217391,14.0795455 C1.87826087,14.6931818 2.67826087,15 3.47826087,15 C4.27826087,15 5.07826087,14.6931818 5.70434783,14.1136364 L7.79130435,12.0681818 C8.76521739,11.1136364 8.93913043,9.71590909 8.3826087,8.59090909 L7.86086957,9.06818182 Z M14.7478261,0.886363636 C14.1217391,0.306818182 13.3217391,0 12.5217391,0 C11.7217391,0 10.9217391,0.306818182 10.2956522,0.886363636 L8.20869565,2.93181818 C7.23478261,3.88636364 7.06086957,5.28409091 7.6173913,6.40909091 L8.13913043,5.89772727 C7.82608696,5.04545455 8.03478261,4.09090909 8.69565217,3.40909091 L10.7826087,1.36363636 C11.2347826,0.920454545 11.8608696,0.681818182 12.4869565,0.681818182 C13.1478261,0.681818182 13.7391304,0.920454545 14.1913043,1.36363636 C15.1304348,2.28409091 15.1304348,3.81818182 14.1913043,4.73863636 L12.1043478,6.78409091 C11.6521739,7.22727273 11.026087,7.46590909 10.4,7.46590909 C10.1217391,7.46590909 9.84347826,7.43181818 9.6,7.32954545 L9.07826087,7.84090909 C9.49565217,8.04545455 9.94782609,8.14772727 10.4347826,8.14772727 C11.2347826,8.14772727 12.0347826,7.84090909 12.6608696,7.26136364 L14.7478261,5.21590909 C15.9652174,4.05681818 15.9652174,2.07954545 14.7478261,0.886363636 Z M10.4695652,5.07954545 C10.4,5.01136364 10.3304348,4.97727273 10.226087,4.97727273 C10.1565217,4.97727273 10.0521739,5.01136364 9.9826087,5.07954545 L5.56521739,9.40909091 C5.42608696,9.54545455 5.42608696,9.75 5.56521739,9.88636364 C5.63478261,9.95454545 5.73913043,9.98863636 5.80869565,9.98863636 C5.87826087,9.98863636 5.9826087,9.95454545 6.05217391,9.88636364 L10.4695652,5.55681818 C10.6086957,5.42045455 10.6086957,5.21590909 10.4695652,5.07954545 Z" stroke="none" fill-rule="evenodd"></path></svg>';
gbks.icons.heart = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="50px" height="50px" viewBox="0 0 50 50" enable-background="new 0 0 50 50" xml:space="preserve"><title>Heart</title><path fill="none" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" d="M33.637,10c-3.606,0-6.78,1.832-8.637,4.605C23.144,11.832,19.97,10,16.364,10C10.641,10,6,14.606,6,20.286c0,12,13.817,18.427,19,22.714c5.183-4.287,19-10.714,19-22.714C44,14.606,39.359,10,33.637,10z"/></svg>';
gbks.icons.heartFilled = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="50px" height="50px" viewBox="0 0 50 50" enable-background="new 0 0 50 50" xml:space="preserve" stroke="none" ><title>Heart</title><path d="M25,47.302l-0.64-0.533c-1.217-1.015-2.861-2.115-4.765-3.39C12.169,38.408,2,31.601,2,20C2,12.832,7.832,7,15,7  c3.896,0,7.542,1.734,10,4.699C27.458,8.734,31.104,7,35,7c7.168,0,13,5.832,13,13c0,11.601-10.169,18.408-17.595,23.379  c-1.904,1.274-3.548,2.375-4.765,3.39L25,47.302z" stroke="none" /></svg>';
gbks.icons.plus = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="50px" height="50px" viewBox="0 0 50 50" enable-background="new 0 0 50 50" xml:space="preserve"><line fill="none" stroke-width="4" stroke-miterlimit="10" x1="9" y1="25" x2="41" y2="25"/><line fill="none" stroke-width="4" stroke-miterlimit="10" x1="25" y1="9" x2="25" y2="41"/></svg>';
gbks.icons.twitterInCircle = '<svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g fill-rule="evenodd"><circle fill="none" cx="16" cy="16" r="15.5"/><path d="M25.675 10.942a6.976 6.976 0 0 1-2.045.579 3.664 3.664 0 0 0 1.566-2.032 7 7 0 0 1-2.261.89 3.5 3.5 0 0 0-2.598-1.159c-1.966 0-3.56 1.644-3.56 3.672 0 .288.032.568.094.837-2.959-.153-5.582-1.615-7.338-3.837a3.753 3.753 0 0 0-.481 1.847c0 1.274.627 2.397 1.583 3.057a3.458 3.458 0 0 1-1.612-.46v.047c0 1.78 1.227 3.262 2.854 3.601a3.436 3.436 0 0 1-1.608.062c.455 1.458 1.768 2.522 3.326 2.552a7.001 7.001 0 0 1-5.27 1.52 9.845 9.845 0 0 0 5.456 1.649c6.548 0 10.129-5.596 10.129-10.447 0-.16-.004-.32-.01-.476a7.364 7.364 0 0 0 1.775-1.902z" stroke="none" fill-rule="nonzero"/></g></svg>';
gbks.icons.facebookInCircle = '<svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g fill-rule="evenodd"><circle fill="none" cx="16" cy="16" r="15.5"/><path d="M20 9.919h-1.5c-1.073 0-1.5.245-1.5.973v1.46h3l-.5 2.918H17V25h-3.5v-9.73H12v-2.919h1.5v-1.46C13.5 8.618 14.29 7 17 7c1.451 0 3 .486 3 .486V9.92z" stroke="none" fill-rule="nonzero"/></g></svg>';
gbks.icons.instagramInCircle = '<svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title>Cornify on Instagram</title><g fill-rule="evenodd"><circle fill="none" cx="16" cy="16" r="15.5"/><path d="M16 12.087A3.917 3.917 0 0 0 12.087 16 3.917 3.917 0 0 0 16 19.913 3.917 3.917 0 0 0 19.913 16 3.917 3.917 0 0 0 16 12.087z" stroke="none" fill-rule="nonzero"/><path d="M19.913 7h-7.826A5.093 5.093 0 0 0 7 12.087v7.826A5.093 5.093 0 0 0 12.087 25h7.826A5.093 5.093 0 0 0 25 19.913v-7.826A5.093 5.093 0 0 0 19.913 7zM16 20.696A4.7 4.7 0 0 1 11.304 16 4.7 4.7 0 0 1 16 11.304 4.7 4.7 0 0 1 20.696 16 4.7 4.7 0 0 1 16 20.696zm5.087-9a.782.782 0 1 1 0-1.565.782.782 0 0 1 0 1.565z" stroke="none" fill-rule="nonzero"/></g></svg>';
gbks.icons.instagram = '<svg width="32px" height="32px" viewBox="1060 28 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>Cornify on Instagram</title><g stroke="none" stroke-width="1" fill-rule="evenodd" transform="translate(1060.000000, 28.000000)"><path d="M16,2.88704762 C20.2708571,2.88704762 20.7766984,2.90330159 22.4633016,2.98025397 C24.0227937,3.05142857 24.8697143,3.312 25.4333968,3.53098413 C26.1799365,3.82114286 26.7128254,4.16780952 27.2725079,4.72749206 C27.8321905,5.2871746 28.1788571,5.82006349 28.4689524,6.56660317 C28.688,7.13028571 28.9485714,7.97720635 29.019746,9.53663492 C29.0966984,11.2233016 29.1129524,11.7291429 29.1129524,16 C29.1129524,20.2708571 29.0966984,20.7766984 29.019746,22.4633016 C28.9485714,24.0227937 28.688,24.8697143 28.4689524,25.4333968 C28.1788571,26.1799365 27.8321905,26.7128254 27.2725079,27.2725079 C26.7128254,27.8321905 26.1799365,28.1788571 25.4333968,28.4689524 C24.8697143,28.688 24.0227937,28.9485714 22.4633016,29.019746 C20.7769524,29.0966984 20.2711111,29.1129524 16,29.1129524 C11.7288889,29.1129524 11.2230476,29.0966984 9.53669841,29.019746 C7.97720635,28.9485714 7.13028571,28.688 6.56666667,28.4689524 C5.82006349,28.1788571 5.2871746,27.8321905 4.72749206,27.2725079 C4.16780952,26.7128254 3.82114286,26.1799365 3.53104762,25.4333968 C3.312,24.8697143 3.05142857,24.0227937 2.98025397,22.4633651 C2.90330159,20.7766984 2.88704762,20.2708571 2.88704762,16 C2.88704762,11.7291429 2.90330159,11.2233016 2.98025397,9.53669841 C3.05142857,7.97720635 3.312,7.13028571 3.53104762,6.56660317 C3.82114286,5.82006349 4.16780952,5.2871746 4.72749206,4.72749206 C5.2871746,4.16780952 5.82006349,3.82114286 6.56666667,3.53098413 C7.13028571,3.312 7.97720635,3.05142857 9.53663492,2.98025397 C11.2233016,2.90330159 11.7291429,2.88704762 16,2.88704762 M16,0.00501587302 C11.656,0.00501587302 11.1113651,0.0234285714 9.40533333,0.101269841 C7.70279365,0.178984127 6.54012698,0.449333333 5.52266667,0.844761905 C4.47085714,1.25352381 3.57885714,1.80044444 2.68965079,2.68965079 C1.80044444,3.57885714 1.25352381,4.47085714 0.844761905,5.52266667 C0.449333333,6.54012698 0.178984127,7.70279365 0.101269841,9.40533333 C0.0234285714,11.1113016 0.00507936508,11.656 0.00507936508,16 C0.00507936508,20.344 0.0234285714,20.8886984 0.101269841,22.5946667 C0.178984127,24.2972063 0.449333333,25.459873 0.844761905,26.4773333 C1.25352381,27.5290794 1.80044444,28.4211429 2.68965079,29.3103492 C3.57885714,30.1995556 4.47085714,30.7464762 5.52266667,31.1552381 C6.54012698,31.5506667 7.70279365,31.8210159 9.40533333,31.8987302 C11.1113651,31.9765714 11.656,31.9949206 16,31.9949206 C20.344,31.9949206 20.8886984,31.9765714 22.5946667,31.8987302 C24.2972063,31.8210159 25.459873,31.5506667 26.4773333,31.1552381 C27.5291429,30.7464762 28.4211429,30.1995556 29.3103492,29.3103492 C30.1995556,28.4211429 30.7464762,27.5291429 31.1552381,26.4773333 C31.5506667,25.459873 31.8210159,24.2972063 31.8987302,22.5946667 C31.9765714,20.8886984 31.9949841,20.344 31.9949841,16 C31.9949841,11.656 31.9765714,11.1113016 31.8987302,9.40533333 C31.8210159,7.70279365 31.5506667,6.54012698 31.1552381,5.52266667 C30.7464762,4.47085714 30.1995556,3.57885714 29.3103492,2.68965079 C28.4211429,1.80044444 27.5291429,1.25352381 26.4773333,0.844761905 C25.459873,0.449333333 24.2972063,0.178984127 22.5946667,0.101269841 C20.8886984,0.0234285714 20.344,0.00501587302 16,0.00501587302"></path><path d="M16,7.78634921 C11.463746,7.78634921 7.78634921,11.463746 7.78634921,16 C7.78634921,20.536254 11.463746,24.2136508 16,24.2136508 C20.536254,24.2136508 24.2136508,20.536254 24.2136508,16 C24.2136508,11.463746 20.536254,7.78634921 16,7.78634921 L16,7.78634921 Z M16,21.3316825 C13.0554286,21.3316825 10.6683175,18.9445714 10.6683175,16 C10.6683175,13.0554286 13.0554286,10.6683175 16,10.6683175 C18.9445714,10.6683175 21.3316825,13.0554286 21.3316825,16 C21.3316825,18.9445714 18.9445714,21.3316825 16,21.3316825 L16,21.3316825 Z"></path><path d="M26.4575238,7.46184127 C26.4575238,8.52190476 25.5982222,9.38126984 24.5381587,9.38126984 C23.4780952,9.38126984 22.6187302,8.52190476 22.6187302,7.46184127 C22.6187302,6.40177778 23.4780952,5.54247619 24.5381587,5.54247619 C25.5982222,5.54247619 26.4575238,6.40177778 26.4575238,7.46184127"></path></g></svg>';
gbks.icons.twitter = '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50"><title>Cornify on Twitter</title><path d="M50.061 10.438a20.646 20.646 0 0 1-5.908 1.62 10.31 10.31 0 0 0 4.523-5.688 20.6 20.6 0 0 1-6.531 2.493 10.258 10.258 0 0 0-7.504-3.247c-5.68 0-10.284 4.604-10.284 10.282 0 .805.092 1.589.269 2.343-8.546-.429-16.124-4.523-21.197-10.744a10.257 10.257 0 0 0-1.391 5.172c0 3.567 1.812 6.713 4.574 8.56a10.229 10.229 0 0 1-4.657-1.288v.131c0 4.984 3.544 9.134 8.245 10.084-.86.236-1.769.36-2.707.36-.664 0-1.309-.064-1.938-.186 1.313 4.081 5.108 7.06 9.607 7.143a20.626 20.626 0 0 1-12.77 4.399c-.833 0-1.649-.048-2.452-.144a29.086 29.086 0 0 0 15.762 4.619c18.915 0 29.26-15.668 29.26-29.252 0-.448-.011-.894-.03-1.332a20.893 20.893 0 0 0 5.129-5.325z"/></svg>';
gbks.icons.facebook = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><title>Cornify on Facebook</title><path d="M41 4H9C6.24 4 4 6.24 4 9v32c0 2.76 2.24 5 5 5h32c2.76 0 5-2.24 5-5V9c0-2.76-2.24-5-5-5zm-4 15h-2c-2.14 0-3 .5-3 2v3h5l-1 5h-4v15h-5V29h-4v-5h4v-3c0-4 2-7 6-7 2.9 0 4 1 4 1v4z"/></svg>';
gbks.icons.github = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M17.791 46.836A1.999 1.999 0 0 0 19 45v-5.4c0-.197.016-.402.041-.61A.611.611 0 0 1 19 39h-3.6c-1.5 0-2.8-.6-3.4-1.8-.7-1.3-1-3.5-2.8-4.7-.3-.2-.1-.5.5-.5.6.1 1.9.9 2.7 2 .9 1.1 1.8 2 3.4 2 2.487 0 3.82-.125 4.622-.555C21.356 34.056 22.649 33 24 33v-.025c-5.668-.182-9.289-2.066-10.975-4.975-3.665.042-6.856.405-8.677.707a21.537 21.537 0 0 1-.151-.987c1.797-.296 4.843-.647 8.345-.714a8.162 8.162 0 0 1-.291-.849c-3.511-.178-6.541-.039-8.187.097-.02-.332-.047-.663-.051-.999 1.649-.135 4.597-.27 8.018-.111a9.832 9.832 0 0 1-.13-1.543c0-1.7.6-3.5 1.7-5-.5-1.7-1.2-5.3.2-6.6 2.7 0 4.6 1.3 5.5 2.1C21 13.4 22.9 13 25 13s4 .4 5.6 1.1c.9-.8 2.8-2.1 5.5-2.1 1.5 1.4.7 5 .2 6.6 1.1 1.5 1.7 3.2 1.6 5 0 .484-.045.951-.11 1.409 3.499-.172 6.527-.034 8.204.102-.002.337-.033.666-.051.999-1.671-.138-4.775-.28-8.359-.089a8.272 8.272 0 0 1-.325.98c3.546.046 6.665.389 8.548.689-.043.332-.093.661-.151.987-1.912-.306-5.171-.664-8.879-.682-1.665 2.878-5.22 4.755-10.777 4.974V33c2.6 0 5 3.9 5 6.6V45c0 .823.498 1.53 1.209 1.836C41.37 43.804 48 35.164 48 25 48 12.318 37.683 2 25 2S2 12.318 2 25c0 10.164 6.63 18.804 15.791 21.836z"/></svg>';
gbks.icons.reddit = '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50"><path d="M25 14C12.869 14 3 20.178 3 29s9.869 16 22 16 22-7.178 22-16-9.869-15-22-15zM14 26a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm20.918 9.575C34.8 35.743 31.939 39.7 25 39.7c-6.94 0-9.8-3.957-9.918-4.125a1.002 1.002 0 0 1 1.634-1.155c.107.149 2.451 3.28 8.284 3.28 5.912 0 8.259-3.242 8.281-3.275a1 1 0 0 1 1.637 1.15zM33 29a3.001 3.001 0 0 1 0-6 3 3 0 0 1 0 6zM47.491 22.847c.985-2.051.638-4.532-1.084-6.254-1.06-1.06-2.447-1.643-3.907-1.643-.865 0-1.694.227-2.455.614 3.355 1.859 5.936 4.356 7.446 7.283z"/><path d="M9.956 15.564c-.762-.387-1.591-.614-2.456-.614-1.46 0-2.848.583-3.907 1.643-1.722 1.722-2.069 4.204-1.084 6.254 1.51-2.927 4.091-5.424 7.447-7.283zM41 12c-2.206 0-4-1.795-4-4s1.794-4 4-4 4 1.795 4 4-1.794 4-4 4zM35 8c0-.422.045-.834.128-1.231-1.375-.376-2.112-1.16-2.823-1.931C31.511 3.977 30.61 3 29 3c-2.104 0-4.573 1.637-4.946 9.016.314-.008.628-.016.946-.016.353 0 .702.008 1.051.018C26.289 7.585 27.354 5 29 5c.703 0 1.091.388 1.835 1.194.867.94 2.008 2.144 4.225 2.605A5.858 5.858 0 0 1 35 8z"/></svg>';
gbks.icons.linkedin = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="50px" height="50px" viewBox="0 0 50 50" enable-background="new 0 0 50 50" xml:space="preserve"><polygon stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="8,19 16,19 16,34.9 16,42 8,42 "/><path stroke-width="1.9758" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M12,16.5L12,16.5c-2.4,0-4-1.7-4-3.8C8,10.6,9.6,9,12,9c2.4,0,3.9,1.6,4,3.7C16,14.8,14.5,16.5,12,16.5z"/><path stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M42,42h-8c0,0,0-12.1,0-13s-0.1-4-3.5-4c-3,0-3.5,2.9-3.5,4s0,13,0,13h-8V19h8v3.1c0,0,1.6-3.1,6.3-3.1c4.8,0,8.7,3.3,8.7,10V42z"/></svg>';
gbks.icons.dribbble = '<svg width="769px" height="769px" viewBox="0 0 769 769" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill-rule="evenodd"><g  fill-rule="nonzero"><path d="M384.094,768.732 C172.365,768.732 0.112,596.479 0.112,384.75 C0.112,173.021 172.365,0.768 384.094,0.768 C595.823,0.768 768.076,173.021 768.076,384.75 C768.076,596.479 595.822,768.732 384.094,768.732 Z M707.926,437.312 C696.705,433.77 606.408,406.839 503.626,423.291 C546.526,541.174 563.981,637.191 567.342,657.137 C640.927,607.384 693.307,528.571 707.926,437.312 Z M512.209,687.164 C507.331,658.389 488.288,558.103 442.242,438.445 C441.52,438.691 440.8,438.925 440.078,439.176 C255.086,503.638 188.678,631.928 182.778,643.994 C276.597444,717.148309 402.7082,733.674384 512.209,687.164 Z M140.43,604.548 C147.859,591.83 237.872,442.791 407.024,388.115 C411.298667,386.733 415.606667,385.433 419.948,384.215 C411.715,365.584 402.748,346.931 393.358,328.556 C229.568,377.574 70.631,375.526 56.281,375.231 C56.181,378.561 56.114,381.899 56.114,385.253 C56.0507683,466.278284 86.1012535,544.435705 140.43,604.548 Z M63.042,318.076 C77.711,318.269 212.842,318.856 366.255,278.115 C311.911,181.515 253.301,100.291 244.655,88.433 C152.9,131.713 84.309,216.3 63.042,318.076 Z M307.235,66.388 C316.301,78.526 375.869,159.646 429.614,258.388 C546.239,214.675 595.614,148.315 601.514,139.913 C521.359903,68.7309726 411.449442,41.2700711 307.235,66.388 Z M637.971,177.843 C631.057,187.2 576.1,257.652 454.83,307.162 C462.462,322.785 469.778,338.674 476.59,354.668 C479.004,360.334667 481.359,365.976667 483.655,371.594 C592.787,357.872 701.221,379.864 712.034,382.151 C711.406317,307.588077 685.269377,235.487488 637.971,177.843 Z"></path></g></g></svg>';
gbks.icons.plusInCircle = '<svg width="18px" height="18px" viewBox="7 7 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(8.000000, 8.000000)"><path d="M3.80952381,8 L12.1904762,8"></path><path d="M8,3.80952381 L8,12.1904762"></path><circle cx="8" cy="8" r="8"></circle></g></svg>';
gbks.icons.plusInCircleFilled = '<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M12.25 12.25H6.714a.75.75 0 1 0 0 1.5h5.536v5.536a.75.75 0 0 0 1.5 0V13.75h5.536a.75.75 0 0 0 0-1.5H13.75V6.714a.75.75 0 1 0-1.5 0v5.536zM13 26C5.82 26 0 20.18 0 13S5.82 0 13 0s13 5.82 13 13-5.82 13-13 13z" stroke="none" fill-rule="evenodd"/></svg>';
gbks.icons.share = '<svg width="21px" height="20px" viewBox="-2 -1 21 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g stroke-width="1" fill="none" fill-rule="evenodd"><polygon points="0 9.75 5.4 11.5125 15 3.75 8.3625 12.9375 13.5 18 18 0"></polygon><polyline points="8.3625 12.9375 4.875 16.875 5.4 11.5125"></polyline></g></svg>';
gbks.icons.shareBubble = '<svg width="23" height="22" viewBox="0 0 23 22" xmlns="http://www.w3.org/2000/svg"><path d="M11.5 0C5.15 0 0 4.5 0 10c0 3.1 1.65 6.05 4.5 7.9-.05.55-.35 1.8-1.4 3.3l-.55.8h1c2.7 0 4.55-1.65 5.15-2.3.9.2 1.85.3 2.8.3C17.85 20 23 15.5 23 10S17.85 0 11.5 0zm-5 11c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm5 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm5 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" fill-rule="nonzero" stroke="none"/></svg>';
gbks.icons.lockFilled = '<svg width="14px" height="17px" viewBox="0 -1 14 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g stroke-width="1" fill-rule="evenodd"><path d="M10.52,5.72 L10.52,3.8 C10.52,1.848 8.952,0.28 7,0.28 C5.048,0.28 3.48,1.848 3.48,3.8 L3.48,5.72" stroke-width="0.64" stroke-linecap="round" fill="none"></path><path d="M12.12,5.4 L1.88,5.4 C1.336,5.4 0.92,5.816 0.92,6.36 L0.92,14.04 C0.92,14.584 1.336,15 1.88,15 L12.12,15 C12.664,15 13.08,14.584 13.08,14.04 L13.08,6.36 C13.08,5.816 12.664,5.4 12.12,5.4 Z M7.64,10.264 L7.64,11.16 C7.64,11.512 7.352,11.8 7,11.8 C6.648,11.8 6.36,11.512 6.36,11.16 L6.36,10.264 C6.168,10.104 6.04,9.848 6.04,9.56 C6.04,9.016 6.456,8.6 7,8.6 C7.544,8.6 7.96,9.016 7.96,9.56 C7.96,9.848 7.832,10.104 7.64,10.264 Z" fill-rule="nonzero" stroke="none"></path></g></svg>';
gbks.icons.peopleFilled = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="50px" height="50px" viewBox="0 0 50 50" enable-background="new 0 0 50 50" xml:space="preserve"><g stroke="none"><path d="M30.645,7.771c2.156,3.472,1.492,8.205,0.726,11.185c0.424,0.898,0.584,1.935,0.454,3.012c-0.278,2.325-1.157,3.657-2.055,4.419c-0.409,1.515-1.129,3.046-1.935,4.129c-0.006,0.757-0.007,1.407,0.041,2.166c0.544,0.612,2.378,1.337,3.759,1.883c3.061,1.209,7.323,2.909,9.297,7.021h9.13l-0.063-1.06c-0.312-5.209-4.444-6.84-7.766-8.15c-1.844-0.728-3.589-1.416-4.097-2.527c-0.076-0.934-0.069-1.664-0.063-2.504l0.002-0.342c0.796-0.832,1.516-2.47,1.799-3.84c0.616-0.347,1.348-1.147,1.57-2.994c0.109-0.923-0.146-1.646-0.513-2.14c0.503-1.74,1.467-6.042-0.266-8.829c-0.738-1.188-1.851-1.942-3.31-2.244c-0.835-1.014-2.387-1.565-4.455-1.565c-1.417,0.026-2.643,0.266-3.715,0.666C29.747,6.546,30.238,7.117,30.645,7.771z"/><path d="M39.998,45.94c-0.025-0.421-0.076-0.817-0.143-1.198c-0.018-0.097-0.041-0.185-0.061-0.278c-0.061-0.289-0.127-0.572-0.21-0.841c-0.023-0.077-0.051-0.151-0.076-0.228c-0.097-0.284-0.202-0.56-0.322-0.82c-0.02-0.042-0.039-0.084-0.059-0.126c-0.145-0.3-0.302-0.587-0.474-0.857c-1.784-2.798-5.006-4.08-7.758-5.168c-2.339-0.924-4.368-1.725-4.98-3.131c-0.096-1.134-0.088-2.015-0.079-3.027l0.003-0.479c0.897-0.917,1.821-2.865,2.157-4.602c0.704-0.364,1.579-1.26,1.842-3.454c0.131-1.09-0.187-1.929-0.624-2.48c0.581-1.98,1.78-7.124-0.27-10.423C28.496,8.104,27.92,7.53,27.234,7.09l0,0c-0.313-0.201-0.649-0.374-1.009-0.518c-0.362-0.142-0.745-0.257-1.154-0.338c-0.944-1.193-2.754-1.843-5.184-1.843c-3.681,0.068-6.375,1.193-8.007,3.343c-1.933,2.548-2.292,6.41-1.069,11.484   c-0.451,0.551-0.783,1.401-0.65,2.513c0.265,2.205,1.122,3.104,1.844,3.465c0.343,1.732,1.288,3.68,2.208,4.597l0.002,0.467   c0.009,1.015,0.017,1.896-0.08,3.032c-0.612,1.405-2.649,2.207-4.999,3.131c-3.908,1.538-8.771,3.451-9.135,9.517L-0.062,47h40.124L39.998,45.94z"/></g></svg>';
gbks.icons.alphaSorting = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="50px" height="50px" viewBox="0 0 50 50" enable-background="new 0 0 50 50" xml:space="preserve"><g><path d="M8.196,1.591h3.191l6.601,17.136h-3.216l-1.608-4.536h-6.84l-1.608,4.536H1.62L8.196,1.591z M7.14,11.91h5.232L9.804,4.543H9.732L7.14,11.91z"/><path d="M3.553,30.391h13.031v2.279L6.601,44.935h10.224v2.592H2.784v-2.448l9.984-12.096H3.553V30.391z"/></g><polyline fill="none" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" points="48.89,32.054 40,40.943 31.11,32.053 "/><line fill="none" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" x1="40" y1="9" x2="40" y2="40.445"/></svg>';
gbks.icons.dateSorting = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 50 50" enable-background="new 0 0 50 50" xml:space="preserve"><polyline fill="none" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" points="33,11 42,11 42,2 "/><path fill="none" stroke-width="2" stroke-miterlimit="10" d="M41.7,10.7C37.7,6,31.7,3,25,3C12.8,3,3,12.8,3,25s9.8,22,22,22s22-9.8,22-22c0-3.6-0.9-7.1-2.4-10.1"/><polyline fill="none" stroke-width="2" stroke-miterlimit="10" points="25,9 25,25 33,33 "/><circle cx="25" cy="25" r="2"/></svg>';
gbks.icons.group = '<svg width="24px" height="25px" viewBox="10 9 24 25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M10,12.1813982 C10,10.9766452 10.968109,10 12.1813982,10 L18.7276927,10 C19.9324457,10 20.9090909,10.968109 20.9090909,12.1813982 L20.9090909,18.7276927 C20.9090909,19.9324457 19.9409819,20.9090909 18.7276927,20.9090909 L12.1813982,20.9090909 C10.9766452,20.9090909 10,19.9409819 10,18.7276927 L10,12.1813982 Z M23.0909091,12.1813982 C23.0909091,10.9766452 24.0590181,10 25.2723073,10 L31.8186018,10 C33.0233548,10 34,10.968109 34,12.1813982 L34,18.7276927 C34,19.9324457 33.031891,20.9090909 31.8186018,20.9090909 L25.2723073,20.9090909 C24.0675543,20.9090909 23.0909091,19.9409819 23.0909091,18.7276927 L23.0909091,12.1813982 Z M23.0909091,25.2723073 C23.0909091,24.0675543 24.0590181,23.0909091 25.2723073,23.0909091 L31.8186018,23.0909091 C33.0233548,23.0909091 34,24.0590181 34,25.2723073 L34,31.8186018 C34,33.0233548 33.031891,34 31.8186018,34 L25.2723073,34 C24.0675543,34 23.0909091,33.031891 23.0909091,31.8186018 L23.0909091,25.2723073 Z M10,25.2723073 C10,24.0675543 10.968109,23.0909091 12.1813982,23.0909091 L18.7276927,23.0909091 C19.9324457,23.0909091 20.9090909,24.0590181 20.9090909,25.2723073 L20.9090909,31.8186018 C20.9090909,33.0233548 19.9409819,34 18.7276927,34 L12.1813982,34 C10.9766452,34 10,33.031891 10,31.8186018 L10,25.2723073 Z" id="path-1"></path><mask id="mask-2" maskContentUnits="userSpaceOnUse" maskUnits="objectBoundingBox" x="0" y="0" width="24" height="24" fill="white"><use xlink:href="#path-1"></use></mask></defs><use mask="url(#mask-2)" stroke-width="2" fill="none" xlink:href="#path-1"></use></svg>';
gbks.icons.eye = '<svg width="32" height="18" viewBox="0 0 32 18" xmlns="http://www.w3.org/2000/svg"><g transform="translate(1 1)" fill="none" fill-rule="evenodd"><path d="M30 8s-6.715 8-15 8S0 8 0 8s6.715-8 15-8 15 8 15 8z" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M20.318 1.077A7.397 7.397 0 0 1 22.174 6c0 4.05-3.211 7.333-7.174 7.333-3.963 0-7.174-3.282-7.174-7.333 0-1.889.698-3.61 1.845-4.91" fill="none" stroke-linecap="round" stroke-linejoin="round"/><ellipse stroke="none" fill-rule="nonzero" cx="15" cy="6" rx="3.261" ry="3.333"/></g></svg>';
gbks.icons.eyeFilled = '<svg width="30" height="16" viewBox="0 0 30 16" xmlns="http://www.w3.org/2000/svg"><g fill-rule="nonzero" stroke="none"><path d="M29.85 7.6c-.227-.26-4.792-5.42-11.051-7.085 1.853 1.212 3.075 3.284 3.076 5.639v.001c-.001 3.74-3.078 6.768-6.875 6.768S8.126 9.894 8.125 6.156v-.002c0-2.355 1.224-4.427 3.076-5.639C4.941 2.18.377 7.34.151 7.6a.608.608 0 0 0 0 .802C.42 8.711 6.867 16 15 16s14.579-7.29 14.85-7.6c.2-.23.2-.57 0-.8z"/><ellipse cx="15" cy="6.154" rx="3.125" ry="3.077"/></g></svg>';
gbks.icons.settings = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="50px" height="50px" viewBox="0 0 50 50" enable-background="new 0 0 50 50" xml:space="preserve"><path fill="none" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" d="M49,27.954v-6l-7.141-1.167  c-0.423-1.691-1.087-3.281-1.962-4.737l4.162-5.932l-4.243-4.241l-5.856,4.21c-1.46-0.884-3.06-1.558-4.763-1.982l-1.245-7.106h-6  l-1.156,7.083c-1.704,0.418-3.313,1.083-4.777,1.963L10.18,5.873l-4.243,4.241l4.107,5.874c-0.888,1.47-1.563,3.077-1.992,4.792  L1,21.954v6l7.044,1.249c0.425,1.711,1.101,3.318,1.992,4.79l-4.163,5.823l4.241,4.245l5.881-4.119  c1.468,0.882,3.073,1.552,4.777,1.973l1.18,7.087h6l1.261-7.105c1.695-0.43,3.297-1.105,4.751-1.99l5.922,4.155l4.242-4.245  l-4.227-5.87c0.875-1.456,1.539-3.048,1.958-4.739L49,27.954z M25,33c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S29.418,33,25,33  z"/></svg>';
gbks.icons.loader = '<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M17.041753,5.23684211 C15.4809279,2.93141767 12.8669823,1.5 10,1.5 C5.30577395,1.5 1.5,5.30577395 1.5,10 C1.5,10.2761424 1.27614237,10.5 1,10.5 C0.723857625,10.5 0.5,10.2761424 0.5,10 C0.5,4.7534892 4.7534892,0.5 10,0.5 C13.0169668,0.5 15.7837755,1.91880925 17.5526316,4.23530622 L17.5526316,1.47368421 C17.5526316,1.19754184 17.7764892,0.973684211 18.0526316,0.973684211 C18.328774,0.973684211 18.5526316,1.19754184 18.5526316,1.47368421 L18.5526316,6.23684211 L17.9387901,6.23684211 C17.9322317,6.23697135 17.92568,6.23697097 17.9191378,6.23684211 L13.7894737,6.23684211 C13.5133313,6.23684211 13.2894737,6.01298448 13.2894737,5.73684211 C13.2894737,5.46069973 13.5133313,5.23684211 13.7894737,5.23684211 L17.041753,5.23684211 Z M2.95861646,14.7632703 C4.51920189,17.0685525 7.13310324,18.5 10,18.5 C14.694226,18.5 18.5,14.694226 18.5,10 C18.5,9.72385763 18.7238576,9.5 19,9.5 C19.2761424,9.5 19.5,9.72385763 19.5,10 C19.5,15.2465108 15.2465108,19.5 10,19.5 C6.98292953,19.5 4.21600701,18.0809903 2.44736842,15.7643514 L2.44736842,18.5263158 C2.44736842,18.8024582 2.2235108,19.0263158 1.94736842,19.0263158 C1.67122605,19.0263158 1.44736842,18.8024582 1.44736842,18.5263158 L1.44736842,13.7631023 L6.21058187,13.7636316 C6.48672424,13.7636623 6.710557,13.9875448 6.71052631,14.2636871 C6.71049563,14.5398295 6.48661313,14.7636623 6.21047076,14.7636316 L2.95861646,14.7632703 Z" stroke="none" fill-rule="nonzero"></path></svg>';
gbks.icons.tag = '<svg width="17px" height="16px" viewBox="0 0 17 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M10.6617647,11.71875 L4.54411765,11.71875 L4.23529412,15 L3.29411765,15 L3.60294118,11.71875 L0.188235294,11.71875 L0.282352941,10.78125 L3.69117647,10.78125 L4.26470588,4.6875 L0.847058824,4.6875 L0.941176471,3.75 L4.35294118,3.75 L4.70588235,0 L5.64705882,0 L5.29411765,3.75 L11.4117647,3.75 L11.7647059,0 L12.7058824,0 L12.3529412,3.75 L16,3.75 L15.9058824,4.6875 L12.2647059,4.6875 L11.6911765,10.78125 L15.3411765,10.78125 L15.2470588,11.71875 L11.6029412,11.71875 L11.2941176,15 L10.3529412,15 L10.6617647,11.71875 Z M10.75,10.78125 L11.3235294,4.6875 L5.20588235,4.6875 L4.63235294,10.78125 L10.75,10.78125 Z" stroke="none" fill-rule="evenodd"></path></svg>';
gbks.icons.video = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50" xml:space="preserve"><path d="M25,2C12.317,2,2,12.317,2,25s10.317,23,23,23s23-10.317,23-23S37.683,2,25,2z M19,35V15l17,10L19,35z"/></svg>';
gbks.icons.messageFilled = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="50px" height="50px" viewBox="0 0 50 50" enable-background="new 0 0 50 50" xml:space="preserve"><rect x="0" stroke="none" fill="none" width="50" height="50"/><g><path d="M50,12.436c-3.051,2.655-10.144,8.828-15.115,13.155L50,37.486V12.436z"/><path d="M21.666,28.642C23.072,29.867,24.466,30,25,30s1.928-0.133,3.334-1.358C29.752,27.406,48.046,11.487,50,9.786V7H0v2.781   C3.012,12.403,20.299,27.45,21.666,28.642z"/><path d="M33.349,26.928c-1.937,1.686-3.347,2.913-3.701,3.222C27.731,31.819,25.759,32,25,32s-2.731-0.181-4.648-1.851   c-0.351-0.306-1.76-1.533-3.701-3.223L0,40.075V43h50v-2.969L33.349,26.928z"/><path d="M15.115,25.59C10.214,21.323,3.231,15.244,0,12.431v25.094L15.115,25.59z"/></g></svg>';
gbks.icons.leftInCircle = '<svg width="28" height="28" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg"><path d="M10.18 14.793l2.786 2.786a.75.75 0 1 1-1.06 1.06l-4.939-4.938 4.937-4.938a.75.75 0 0 1 1.061 1.06l-3.469 3.47h10.94a.75.75 0 1 1 0 1.5H10.18zM13.75 27.5C6.156 27.5 0 21.344 0 13.75S6.156 0 13.75 0 27.5 6.156 27.5 13.75 21.344 27.5 13.75 27.5zm0-1.5C20.515 26 26 20.515 26 13.75S20.515 1.5 13.75 1.5 1.5 6.985 1.5 13.75 6.985 26 13.75 26z" fill-rule="nonzero" stroke="none"/></svg>';
gbks.icons.rightInCircle = '<svg width="28" height="28" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg"><path d="M17.57 15.043H7.314a.75.75 0 1 1 0-1.5h10.94l-3.47-3.47a.75.75 0 0 1 1.062-1.06l4.937 4.938-4.938 4.939a.75.75 0 1 1-1.061-1.06l2.786-2.787zM14 27.75C6.406 27.75.25 21.594.25 14S6.406.25 14 .25 27.75 6.406 27.75 14 21.594 27.75 14 27.75zm0-1.5c6.765 0 12.25-5.485 12.25-12.25S20.765 1.75 14 1.75 1.75 7.235 1.75 14 7.235 26.25 14 26.25z" fill-rule="nonzero" stroke="none"/></svg>';
gbks.icons.rightInCircleFilled = '<svg width="22px" height="22px" viewBox="0 0 22 22" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill-rule="evenodd"><g transform="translate(-406.000000, -434.000000)"><g><g transform="translate(240.000000, 122.000000)"><g transform="translate(0.000000, 298.000000)"><g><path d="M181.100799,24.1851852 L170.888889,24.1851852 C170.438879,24.1851852 170.074074,24.5499902 170.074074,25 C170.074074,25.4500098 170.438879,25.8148148 170.888889,25.8148148 L181.100228,25.8148148 L178.342478,28.4891325 C178.019423,28.8024131 178.0115,29.3182645 178.324781,29.6413188 C178.638061,29.9643731 179.153913,29.9722962 179.476967,29.6590156 L184.281516,24.9998236 L179.477846,20.3410131 C179.154808,20.0277161 178.638956,20.0356132 178.325659,20.3586516 C178.012362,20.6816901 178.020259,21.1975419 178.343298,21.5108388 L181.100799,24.1851852 Z M177,36 C170.924868,36 166,31.0751322 166,25 C166,18.9248678 170.924868,14 177,14 C183.075132,14 188,18.9248678 188,25 C188,31.0751322 183.075132,36 177,36 Z"></path></g></g></g></g></g></g></svg>';
gbks.icons.opacity = '<svg width="42px" height="42px" viewBox="0 0 42 42" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g stroke-width="1" fill-rule="evenodd"><g stroke="none" fill-rule="nonzero"><rect x="0" y="0" width="9" height="9"></rect><rect x="9" y="9" width="8" height="8"></rect><rect x="17" y="0" width="8" height="9"></rect><rect x="25" y="9" width="8" height="8"></rect><rect x="9" y="25" width="8" height="8"></rect><rect x="25" y="25" width="8" height="8"></rect><rect x="33" y="0" width="9" height="9"></rect><rect x="0" y="17" width="9" height="8"></rect><rect x="17" y="17" width="8" height="8"></rect><rect x="33" y="17" width="9" height="8"></rect><rect x="0" y="33" width="9" height="9"></rect><rect x="17" y="33" width="8" height="9"></rect><rect x="33" y="33" width="9" height="9"></rect></g></g></svg>'; // gbks.icons.color = '<svg width="34px" height="48px" viewBox="0 0 34 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g fill="#000000" fill-rule="nonzero"><path d="M17.771,0.363 C17.392,-0.097 16.609,-0.097 16.23,0.363 C15.566,1.165 0,20.131 0,31.019 C0,40.382 7.626,48 17,48 C26.374,48 34,40.383 34,31.02 C34,20.131 18.434,1.165 17.771,0.363 Z M2,31.019 C2,22.926 11.881,9.236 16,3.881 L16,45.949 C8.195,45.431 2,38.942 2,31.019 Z"></path></g></g></svg>';

gbks.icons.scale = '<svg width="40px" height="40px" viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g stroke-width="1" fill-rule="evenodd" stroke-linecap="round"><g transform="translate(2.000000, 2.000000)" fill="none" stroke-width="4"><polyline points="13.4 36 0 36 0 22.6"></polyline><polyline points="22.6 0 36 0 36 13.4"></polyline><path d="M35.406,0.594 L1.125,34.875"></path></g></g></svg>';
gbks.icons.erase = '<svg width="44px" height="44px" viewBox="0 0 44 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g stroke-width="1" fill-rule="evenodd"><g transform="translate(-1.000000, 0.000000)" stroke="none" fill-rule="nonzero"><path d="M44.107,13.993 L31.053,0.941 C30.02,-0.237 27.946,-0.26 26.793,0.893 L1.941,25.747 C1.361,26.255 1.027,26.971 1.001,27.765 C0.974,28.596 1.298,29.413 1.893,30.007 L14.993,43.108 C15.569,43.684 16.317,44 17.1,44 C17.883,44 18.631,43.684 19.207,43.107 L44.06,18.252 C44.639,17.745 44.973,17.028 44.999,16.235 C45.026,15.404 44.701,14.587 44.107,13.993 Z M17.793,41.693 C17.392,42.095 16.809,42.095 16.407,41.693 L3.307,28.592 C3.103,28.389 2.991,28.11 3,27.831 C3.004,27.695 3.044,27.44 3.307,27.207 L15.85,14.664 L30.336,29.15 L17.793,41.693 Z"></path></g></g></svg>';
gbks.icons.left = '<svg width="19" height="34" viewBox="0 0 19 34" xmlns="http://www.w3.org/2000/svg"><path d="M17 32L2 17 17 2" stroke-width="3" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"/></svg>';
gbks.icons.right = '<svg width="19" height="34" viewBox="0 0 19 34" xmlns="http://www.w3.org/2000/svg"><path d="M2 2l15 15L2 32" stroke-width="3" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"/></svg>';
gbks.icons.move = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><g fill="none" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10"><path d="M20 10l5-4.943L30 10M25 18V5.354M20 40.057L25 45l5-4.943M25 32.057v12.646M40.028 20.028l4.944 5-4.944 5M32.028 25.028h12.647M9.972 20.028l-4.943 5 4.943 5M17.972 25.028H5.325"/></g></svg>';
gbks.icons.message = '<svg width="32" height="23" viewBox="0 0 32 23" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path stroke-linecap="round" d="M1 1h30v21H1z"/><path d="M21.223 11.909l9.708 7.585M1.069 19.494l10.129-7.916M1.069 3.503l12.437 10.712c.937.806 1.912.99 2.494.99.582 0 1.558-.184 2.494-.99L30.931 3.504"/></g></svg>';
gbks.icons.hamburger = '<svg viewBox="0 0 29 22" xmlns="http://www.w3.org/2000/svg"><title>Hamburger</title><g stroke-width="2.857" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M2 20.6c8.129-2.08 16.584 0 24.99-.773M2 11.779c8.129-2.08 16.584 0 24.99-.774M2 2.956c8.129-2.08 16.584 0 24.99-.773"/></g></svg>';
"use strict";

// Helper for smooth scrolling.
// 
var gbks = gbks || {};

gbks.Scroller = function () {
  this.init = function () {
    this.mousewheelFunction = $.proxy(this.onMouseWheel, this);
  };

  this.scrollToPosition = function (position, canvas, duration) {
    if (!canvas) {
      canvas = window;
    } // console.log('Scroller.scrollToPosition', canvas);


    if (!duration) {
      duration = 500;
    }

    var startValue = 0;

    if (canvas == window) {
      startValue = canvas.pageYOffset;
    } else {
      startValue = canvas.scrollTop;
    }

    this.scrollInfo = {
      startTime: new Date().getTime(),
      startValue: startValue,
      endValue: position,
      duration: duration,
      lastUpdate: new Date().getTime(),
      canvas: canvas
    }; // console.log('scrollToPosition', this.scrollInfo);

    $(window).unbind('mousewheel', this.mousewheelFunction);
    $(window).bind('mousewheel', this.mousewheelFunction);
    clearTimeout(this.scrollInterval);
    this.scrollInterval = setTimeout($.proxy(this.onScrollInterval, this), 25);
  };

  this.onScrollInterval = function (event) {
    var info = this.scrollInfo;
    var delta = new Date().getTime() - info.startTime;
    delta = Math.min(delta, info.duration);
    var pos = this.easeInOutCubic(null, delta, info.startValue, info.endValue - info.startValue, info.duration);

    if (info.canvas == window) {
      info.canvas.scrollTo(0, pos);
    } else {
      info.canvas.scrollTop = pos;
    }

    if (Math.abs(delta) < info.duration) {
      var timePassed = new Date().getTime() - info.lastUpdate;
      var timer = Math.max(5, 25 - timePassed);
      clearTimeout(this.scrollInterval);
      this.scrollInterval = setTimeout($.proxy(this.onScrollInterval, this), timer);
    } else {
      $(window).unbind('mousewheel', this.mousewheelFunction);
    }

    info.lastUpdate = new Date().getTime();
  };

  this.onMouseWheel = function (event) {
    $(window).unbind('mousewheel', g.common.scroller.mousewheelFunction);
    clearInterval(g.common.scroller.scrollInterval);
  };

  this.easeInOutCubic = function (x, t, b, c, d) {
    if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
    return c / 2 * ((t -= 2) * t * t + 2) + b;
  };
};
"use strict";

/*

Add .scroll-effect class to elements to have them activate/deactive on scroll.
Add .scroll-parallax and 'data-speed' to create parallax effect.

 */
var gbks = gbks || {};

gbks.ScrollEffects = function () {
  this.init = function () {
    this.id = 'ScrollEffects';
    this.log = !true;
    this.scrollTimer = null;
    this.body = $('body');
    this.win = $(window);
    this.windowHeight = this.win.height();
    this.isPaused = true;
    this.data = {
      scrollPosition: 0,
      elements: []
    };
    this.classes = {
      elements: '.scroll-effect',
      parallax: '.scroll-parallax'
    };
    this.scrollMethod = $.proxy(this.onScroll, this);
    this.setupEvents();
  };

  this.collectElements = function () {
    var elements = $(this.classes.elements, this.container);
    var i = 0,
        length = elements.length;

    for (; i < length; i++) {
      this.collectElement($(elements[i]));
    }

    if (this.log) {
      console.log(this.id + '.collectElements', this.data, elements);
    }
  };

  this.collectElement = function (element) {
    var data = {
      isVisible: false,
      isActive: false,
      element: element,
      position: element.position(),
      height: element.outerHeight(),
      data: element.data(),
      parallax: this.collectParallaxElements(element)
    };
    this.data.elements.push(data);
  };

  this.collectParallaxElements = function (container) {
    var result = [];
    var containedScrollElements = $(this.classes.elements, container);

    if (containedScrollElements.length == 0) {
      var elements = $(this.classes.parallax, container);
      var i = 0,
          length = elements.length,
          element;

      for (; i < length; i++) {
        element = $(elements[i]);
        result.push({
          element: element,
          speed: element.data('speed')
        });
      }
    }

    if (this.log) {
      console.log(this.id + '.collectParallaxElements', result, container);
    }

    return result;
  };

  this.setupEvents = function () {
    this.win.bind('scroll', this.scrollMethod);
    this.win.bind('resize', $.proxy(this.onResize, this));
    gbks.events.listen(gbks.event.PageMountStart, $.proxy(this.onPageMountStart, this), this.id);
    gbks.events.listen(gbks.event.PageMounted, $.proxy(this.onPageMounted, this), this.id);
  };

  this.onPageMountStart = function (data) {
    this.isPaused = true;
  };

  this.onPageMounted = function (data) {
    this.isPaused = false;
    this.container = $(data.container);
    setTimeout($.proxy(this.refresh, this), 500);
  };

  this.refresh = function () {
    this.clearElements();
    this.collectElements();
    this.update();
  };

  this.onScroll = function (event) {
    // this.update();
    window.requestAnimationFrame($.proxy(this.update, this)); // clearTimeout(this.scrollTimer);
    // this.scrollTimer = setTimeout($.proxy(this.update, this), 1);
  };

  this.update = function () {
    if (this.isPaused) {
      return;
    }

    this.data.scrollPosition = this.win.scrollTop(); // console.log('ScrollEffects.update', this.data);

    if (this.data.elements.length == 0) {
      return;
    }

    var topLine = this.data.scrollPosition;
    var centerLine = this.data.scrollPosition + this.windowHeight / 2;
    var bottomLine = this.data.scrollPosition + this.windowHeight;
    var activeElement = null;
    var i = 0,
        length = this.data.elements.length,
        element;

    for (; i < length; i++) {
      element = this.data.elements[i];
      this.updateElement(element, topLine, centerLine, bottomLine);
    }
  };

  this.updateElement = function (element, topLine, centerLine, bottomLine) {
    var elementTop = element.position.top;
    var elementBottom = elementTop + element.height;
    var isActive = elementTop < centerLine && elementBottom > centerLine;
    var isVisible = elementTop < bottomLine && elementBottom > topLine;

    if (!isVisible) {// console.log('not visible', element, topLine, centerLine, bottomLine, elementTop, elementBottom);
    }

    if (isVisible) {
      if (!element.isVisible) {
        element.isVisible = true;
        element.element.addClass('is-visible');
      }

      if (element.parallax.length > 0) {
        var elementCenter = (elementTop + elementBottom) / 2;
        var offset = centerLine - elementCenter;
        this.updateParallax(element, offset);
      }
    } else {
      if (element.isVisible) {
        element.isVisible = false;
        element.element.removeClass('is-visible');
      }
    }

    if (isActive) {
      if (!element.isActive) {
        this.activateElement(element);
      }
    } else {
      if (element.isActive) {
        this.deactivateElement(element);
      }
    }
  };

  this.updateParallax = function (data, offset) {
    var i = 0,
        length = data.parallax.length,
        element,
        top,
        transform;

    for (; i < length; i++) {
      element = data.parallax[i];
      top = -element.speed * offset / 10;
      transform = 'translate3d(0, ' + top + 'px, 0)';
      element.element.css('transform', transform);
    }

    if (this.log) {
      console.log(this.id + '.updateParallax', data, offset);
    }
  };

  this.clearElements = function () {
    // console.log('ScrollEffects.clearElements');
    var i = 0,
        length = this.data.elements.length,
        element;

    for (; i < length; i++) {
      element = this.data.elements[i];

      if (element.isActive) {
        this.deactivateElement(element);
      }
    }

    this.data.elements = [];
  };

  this.activateElement = function (element) {
    // console.log('ScrollEffects.activateElement', element);
    element.isActive = true;
    element.element.addClass('is-active');

    if (element.data.class) {
      this.body.addClass('scroll-effect-' + element.data.class);
    }
  };

  this.deactivateElement = function (element) {
    // console.log('ScrollEffects.deactivateElement', element);
    element.isActive = false; // element.element.removeClass('is-active');

    if (element.data.class) {
      this.body.removeClass('scroll-effect-' + element.data.class);
    }
  };

  this.destroy = function () {
    this.data = null;
    $(window).unbind('scroll', this.scrollMethod);
  };

  this.onResize = function (event) {
    console.log('ScrollEffects.onResize');
    this.windowHeight = this.win.height();
    var i = 0,
        length = this.data.elements.length,
        element;

    for (; i < length; i++) {
      element = this.data.elements[i];
      element.position = element.element.position(), element.height = element.element.outerHeight();
    }
  };
};
"use strict";

var trackman = trackman || {};
/*

page: /home

 */

trackman.page = function (page) {
  // console.log('trackman.page', page, window.ga);
  if (window.ga) {
    window.ga('set', 'page', page);
    window.ga('send', 'pageview');
  } else {// console.log('trackman.page GA not found.');
  }
};

trackman.event = function (category, action, label, value) {
  // console.log('trackman.page', category, action, label, value, window.ga);
  if (window.ga) {
    window.ga('send', {
      hitType: 'event',
      eventCategory: category,
      eventAction: action,
      eventLabel: label,
      eventValue: value,
      nonInteraction: true
    });
  } else {// console.log('trackman.event GA not found.');
  }
};
"use strict";

var gbks = gbks || {};
gbks.cornify = gbks.cornify || {};

gbks.cornify.Rainbow = function () {
  this.init = function (context) {
    this.mouseX = null;
    this.mouseY = null;
    this.painters = null;
    this.interval = null;
    this.BRUSH_SIZE = 1;
    this.BRUSH_PRESSURE = 1;
    this.context = context;
    this.context.globalCompositeOperation = 'source-over';
    this.mouseX = window.innerWidth;
    this.mouseY = 200;
    this.maxBrushSize = Math.round(Math.random() * 10 + 5);
    this.painters = new Array();
    var ease;

    for (var i = 0; i < 13; i++) {
      ease = 0.7 + i * 0.05;
      this.painters.push({
        x: -50,
        y: 225 - i * 10 + 60,
        speedX: 0,
        speedY: 0,
        speedSpeedX: 0,
        speedSpeedY: 0,
        speedFactor: 0.01,
        speedEase: ease
      });
    } // console.log('Rainbow', this.painters);

  };

  this.update = function () {
    var i;
    this.context.lineWidth = this.BRUSH_SIZE * 10;
    this.context.lineCap = 'round'; //this.context.strokeStyle = "rgba(" + this.COLOR[0] + ", " + this.COLOR[1] + ", " + this.COLOR[2] + ", " + 0.15 * this.BRUSH_PRESSURE + ")";

    var colors = [[216, 48, 32], [234, 96, 16], [252, 144, 0], [253, 186, 0], [255, 228, 0], [186, 213, 25], [116, 202, 51], [66, 193, 116], [23, 183, 182], [12, 127, 181], [0, 72, 179], [122, 36, 187], [245, 0, 196]];
    var i = 0;
    var painterLength = this.painters.length;
    var painter;
    var context = this.context;
    var before, deltaX, deltaY, length;

    for (; i < painterLength; i++) {
      this.context.strokeStyle = "rgba(" + colors[i][0] + ", " + colors[i][1] + ", " + colors[i][2] + ", " + 1 * this.BRUSH_PRESSURE + ")";
      painter = this.painters[i];
      this.context.beginPath();
      context.moveTo(painter.x * this.scaleFactor, painter.y * this.scaleFactor);
      before = [painter.x, painter.y];
      painter.speedX *= 0.75;
      painter.speedY *= 0.75;
      painter.speedX += (this.mouseX - painter.x) * painter.speedFactor * painter.speedEase;
      painter.speedY += (this.mouseY - painter.y) * painter.speedFactor * painter.speedEase;
      painter.speedSpeedX += (painter.speedX - painter.speedSpeedX) * painter.speedFactor * painter.speedEase;
      painter.speedSpeedY += (painter.speedY - painter.speedSpeedY) * painter.speedFactor * painter.speedEase;
      painter.x += painter.speedSpeedX;
      painter.y += painter.speedSpeedY;
      deltaX = Math.abs(painter.x - before[0]);
      deltaY = Math.abs(painter.y - before[1]);
      length = Math.max(1, Math.sqrt(deltaX * deltaX + deltaY * deltaY));
      this.context.lineWidth = Math.min(10, Math.round(this.BRUSH_SIZE * 10 * length / 10)); //this.context.lineWidth = 10;

      if (i > 0) {
        var previousPainter = this.painters[i - 1];
        var dx = previousPainter.x - painter.x;
        var dy = previousPainter.y - painter.y;
        var distance = Math.sqrt(dx * dx + dy * dy);
        this.context.lineWidth = distance / 2;
      }

      context.lineTo(painter.x * this.scaleFactor, painter.y * this.scaleFactor);
      context.stroke();
    }
  };

  this.destroy = function () {
    clearInterval(this.interval);
  };

  this.strokeStart = function (mouseX, mouseY) {
    this.mouseX = mouseX;
    this.mouseY = mouseY;
    var i;
    var length = this.painters.length;
    var painter;

    for (; i < length; i++) {
      painter = this.painters[i];
      painter.dx = mouseX;
      painter.dy = mouseY;
    }

    this.shouldDraw = true;
  };

  this.stroke = function (mouseX, mouseY) {
    this.mouseX = mouseX;
    this.mouseY = mouseY;
  };

  this.strokeEnd = function () {};
};

gbks.cornify.RainbowCanvas = function () {
  this.init = function (holder) {
    this.SCREEN_WIDTH = window.innerWidth;
    this.SCREEN_HEIGHT = window.innerHeight;
    this.BRUSH_SIZE = 1;
    this.BRUSH_PRESSURE = 1;
    this.COLOR = [0, 0, 0];
    this.BACKGROUND_COLOR = [173, 222, 229];
    this.mouseX = 0;
    this.mouseY = 0;
    this.USER_AGENT = navigator.userAgent.toLowerCase();
    this.scaleFactor = 2;
    this.mouseMoveMethod = $.proxy(this.onCanvasMouseMove, this);
    this.resizeMethod = $.proxy(this.onWindowResize, this); // var holder = $('#rainbow');
    // if(holder.length == 0) {
    //     return;
    // }
    // holder.css({
    //     'background-repeat': 'no-repeat',
    //     'background-position': 'center center'
    // });
    // var container = $('<div></div>');
    // holder.append(container);

    var canvas = $('canvas', holder);
    this.canvas = canvas; //canvas = document.createElement("canvas");

    canvas.attr({
      width: this.SCREEN_WIDTH * this.scaleFactor,
      height: this.SCREEN_HEIGHT * this.scaleFactor
    }); // container.append(canvas);

    this.context = canvas[0].getContext("2d");
    this.brush = new gbks.cornify.Rainbow();
    this.brush.init(this.context);
    this.brush.BRUSH_SIZE = this.BRUSH_SIZE;
    this.brush.BRUSH_PRESSURE = this.BRUSH_PRESSURE;
    this.brush.scaleFactor = this.scaleFactor; //this.brush = eval('new Ribbon(context)');

    $(window).bind('mousemove', this.mouseMoveMethod);
    $(window).bind('resize', this.resizeMethod); //window.addEventListener('mousemove', this.mouseMoveMethod, false);
    //window.addEventListener('resize', this.onWindowResize, false);

    this.onWindowResize(null);
    this.onCanvasMouseDown(null);
  };

  this.update = function () {
    this.context.globalAlpha = 0.01;
    this.context.fillStyle = 'rgba(' + this.BACKGROUND_COLOR[0] + ',' + this.BACKGROUND_COLOR[1] + ',' + this.BACKGROUND_COLOR[2] + ', 1)';
    this.context.fillRect(0, 0, this.SCREEN_WIDTH * this.scaleFactor, this.SCREEN_HEIGHT * this.scaleFactor);
    this.context.globalAlpha = 1;
    this.brush.update();
  };

  this.onWindowMouseMove = function (event) {
    this.mouseX = event.clientX;
    this.mouseY = event.clientY;
  };

  this.onWindowResize = function (event) {
    this.SCREEN_WIDTH = window.innerWidth;
    this.SCREEN_HEIGHT = window.innerHeight; //rainbowCanvas.canvas.width = this.SCREEN_WIDTH;

    this.canvas.attr({
      width: this.SCREEN_WIDTH * this.scaleFactor,
      height: this.SCREEN_HEIGHT * this.scaleFactor
    });
  };

  this.onCanvasMouseDown = function (event) {
    $(window).bind('onmousemove', this.mouseMoveMethod);
  };

  this.onCanvasMouseMove = function (event) {
    this.brush.stroke(event.clientX, event.clientY);
  };

  this.setBackgroundColor = function (r, g, b) {
    this.BACKGROUND_COLOR = [r, g, b];
  };

  this.start = function () {
    clearInterval(this.interval);
    this.interval = setInterval($.proxy(this.update, this), 1000 / 60);
  };

  this.stop = function () {
    clearInterval(this.interval);
  };
};
"use strict";

var gbks = gbks || {};
gbks.cornify = gbks.cornify || {};

gbks.cornify.Effects = function () {
  this.init = function () {
    this.id = 'Effects';
    this.container = $('#effects');
    this.canvas = $('canvas', this.container);
    this.context = this.canvas[0].getContext('2d');
    this.scaleFactor = 2;
    $(window).bind('resize', $.proxy(this.resize, this));
    gbks.events.listen('effect', $.proxy(this.effect, this), this.id);
    this.resize();
  };

  this.effect = function (data) {
    console.log('effect', data);
  };

  this.resize = function () {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
    this.canvas.attr({
      width: this.screenWidth * this.scaleFactor,
      height: this.screenWidth * this.scaleFactor
    });
  };
};
"use strict";

var gbks = gbks || {};
gbks.helpers = gbks.helpers || {};

gbks.helpers.getPositionFromEvent = function (event, position) {
  var result = null;

  if (event.pageX || event.pageX === 0) {
    result = {
      x: event.pageX,
      y: event.pageY
    };
  } else if (event.originalEvent && event.originalEvent.touches.length > 0) {
    result = {
      x: event.originalEvent.touches[0].screenX,
      y: event.originalEvent.touches[0].screenY
    };
  } else if (event.touches && event.touches.length > 0) {
    result = {
      x: event.touches[0].screenX,
      y: event.touches[0].screenY
    };
  } // console.log('getPositionFromEvent', event, result, position);


  if (result && position) {
    result.x -= position.left;
    result.y -= position.top;
  }

  return result;
};

gbks.helpers.shuffle = function (a) {
  var j, x, i;

  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }

  return a;
};

gbks.helpers.componentToHex = function (c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
};

gbks.helpers.rgbToHex = function (r, g, b) {
  return "#" + gbks.helpers.componentToHex(r) + gbks.helpers.componentToHex(g) + gbks.helpers.componentToHex(b);
};

gbks.helpers.hexToRgb = function (hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
};

gbks.helpers.stringToSlug = function (str, separator) {
  if (!separator) {
    separator = '-';
  }

  str = str.trim();
  str = str.toLowerCase(); // remove accents, swap ñ for n, etc

  var from = "åàáãäâèéëêìíïîòóöôùúüûñç·/_,:;";
  var to = "aaaaaaeeeeiiiioooouuuunc------";

  for (var i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
  }

  return str.replace(/[^a-z0-9 -]/g, "") // remove invalid chars
  .replace(/\s+/g, "-") // collapse whitespace and replace by -
  .replace(/-+/g, "-") // collapse dashes
  .replace(/^-+/, "") // trim - from start of text
  .replace(/-+$/, "") // trim - from end of text
  .replace(/-/g, separator);
};

gbks.helpers.moonPhase = function (year, month, day) {
  if (!year && !month && !day) {
    var d = new Date();
    year = d.getFullYear();
    month = d.getMonth();
    day = d.getDate();
  }

  var phases = ['new', 'waxing-crescent', 'quarter', 'waxing-gibbous', 'full', 'waning-gibbous', 'last-quarter', 'waning-crescent'];
  var c, e, jd, b, p;

  if (month < 3) {
    year--;
    month += 12;
  }

  ++month;
  c = 365.25 * year;
  e = 30.6 * month;
  jd = c + e + day - 694039.09; // jd is total days elapsed

  jd /= 29.5305882; // divide by the moon cycle

  b = parseInt(jd); // int(jd) -> b, take integer part of jd

  jd -= b; // subtract integer part to leave fractional part of original jd

  b = Math.round(jd * 8); // scale fraction from 0-8 and round

  jd = Math.round(jd * 100);
  p = 100 - Math.abs(jd - 50) * 2;
  if (b >= 8) b = 0; // 0 and 8 are the same so turn 8 into 0

  return {
    phase: b,
    percent: p,
    name: phases[b]
  };
};
"use strict";

var _gbks$api;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var gbks = gbks || {};
gbks.api = (_gbks$api = {
  id: 'Api',
  log: true,
  baseUrl: 'https://www.cornify.com/happyi/',
  photos: {},
  singlePhotos: {},
  relatedPhotos: {},
  unicornpics: {},
  singleUnicornpic: {},
  perPage: 10,
  loadingGifts: false,
  loadingQuotes: false,
  loadingUnicornPics: false
}, _defineProperty(_gbks$api, "photos", function photos(page, count) {
  if (!count) count = 9;
  var id = page + '-' + count;

  if (this.photos[id]) {
    gbks.events.call('api-photos-success', this.photos[id]);
  } else {
    $.ajax({
      url: this.baseUrl + 'photos',
      data: {
        page: page,
        count: count
      },
      dataType: config.isDev ? 'jsonp' : 'json',
      success: $.proxy(this.onPhotos, this, page, count),
      error: $.proxy(this.onPhotosError, this, page, count)
    });
  }
}), _defineProperty(_gbks$api, "onPhotos", function onPhotos(page, count, data) {
  if (this.log) {
    console.log(this.id, 'onPhotos', page, count, data);
  }

  var id = page + '-' + count;
  this.photos[id] = data; // Put in storage.

  var photos = [];
  var item;

  for (var i in this.photos) {
    item = this.photos[i];

    if (item.photos && item.photos.length) {
      photos = photos.concat(item.photos);
    }
  }

  siteData.store.commit('updatePhotos', photos);
  gbks.events.call('api-photos-success', data);
}), _defineProperty(_gbks$api, "onPhotosError", function onPhotosError(data) {
  if (this.log) {
    console.log(this.id, 'onPhotosError', data);
  }

  gbks.events.call('api-photos-error', data);
}), _defineProperty(_gbks$api, "photo", function photo(id) {
  if (this.singlePhotos[id]) {
    gbks.events.call('api-photo-success', this.singlePhotos[id]);
  } else {
    $.ajax({
      url: this.baseUrl + 'photo',
      data: {
        id: id
      },
      dataType: config.isDev ? 'jsonp' : 'json',
      success: $.proxy(this.onPhoto, this, id),
      error: $.proxy(this.onPhotoError, this, id)
    });
  }
}), _defineProperty(_gbks$api, "onPhoto", function onPhoto(id, data) {
  if (this.log) {
    console.log(this.id, 'onPhoto', id, data);
  }

  this.singlePhotos[id] = data;
  gbks.events.call('api-photo-success', data);
}), _defineProperty(_gbks$api, "onPhotoError", function onPhotoError(data) {
  if (this.log) {
    console.log(this.id, 'onPhotoError', data);
  }

  gbks.events.call('api-photo-error', data);
}), _defineProperty(_gbks$api, "votePhoto", function votePhoto(id, value) {
  if (this.log) {
    console.log(this.id, 'votePhoto', id, value);
  }

  $.ajax({
    url: this.baseUrl + 'lovephoto',
    data: {
      id: id,
      value: value
    },
    dataType: config.isDev ? 'jsonp' : 'json',
    success: $.proxy(this.onVotePhoto, this, id, value),
    error: $.proxy(this.onVotePhotoError, this, id, value)
  });
}), _defineProperty(_gbks$api, "onVotePhoto", function onVotePhoto(id, value, data) {
  if (this.log) {
    console.log(this.id, 'onVotePhoto', id, value, data);
  }

  gbks.events.call('api-vote-photo-success', data);
}), _defineProperty(_gbks$api, "onVotePhotoError", function onVotePhotoError(id, value, data) {
  if (this.log) {
    console.log(this.id, 'onVotePhotoError', id, value, data);
  }

  gbks.events.call('api-vote-photo-error', data);
}), _defineProperty(_gbks$api, "relatedPhotos", function relatedPhotos(id, count) {
  if (!count) count = 9;

  if (this.relatedPhotos[id]) {
    gbks.events.call('api-related-photos-success', this.relatedPhotos[id]);
  } else {
    $.ajax({
      url: this.baseUrl + 'relatedphotos',
      data: {
        id: id,
        count: count
      },
      dataType: 'jsonp',
      success: $.proxy(this.onRelatedPhotos, this, id),
      error: $.proxy(this.onRelatedPhotosError, this, id)
    });
  }
}), _defineProperty(_gbks$api, "onRelatedPhotos", function onRelatedPhotos(id, data) {
  if (this.log) {
    console.log(this.id, 'onRelatedPhotos', id, data);
  }

  this.relatedPhotos[id] = data;
  gbks.events.call('api-related-photos-success', data);
}), _defineProperty(_gbks$api, "onRelatedPhotosError", function onRelatedPhotosError(data) {
  if (this.log) {
    console.log(this.id, 'onRelatedPhotosError', data);
  }

  gbks.events.call('api-related-photos-error', data);
}), _defineProperty(_gbks$api, "unicornPics", function unicornPics(page, count) {
  if (!count) count = 9;
  var id = page + '-' + count;

  if (this.unicornpics[id]) {
    gbks.events.call('api-unicorn-pics-success', this.unicornpics[id]);
  } else if (!this.loadingUnicornPics) {
    this.loadingUnicornPics = true;
    $.ajax({
      url: this.baseUrl + 'unicornpics',
      data: {
        page: page,
        count: count ? count : this.perPage
      },
      dataType: config.isDev ? 'jsonp' : 'json',
      success: $.proxy(this.onUnicornPics, this, page, count),
      error: $.proxy(this.onUnicornPicsError, this, page, count)
    });
  }
}), _defineProperty(_gbks$api, "onUnicornPics", function onUnicornPics(page, count, data) {
  if (this.log) {
    console.log(this.id, 'onUnicornPics', page, count, data);
  }

  var id = page + '-' + count;
  this.unicornpics[id] = data; // Put in storage.

  var unicornpics = [];
  var item;

  for (var i in this.unicornpics) {
    item = this.unicornpics[i];

    if (item.pics && item.pics.length) {
      unicornpics = unicornpics.concat(item.pics);
    }
  }

  siteData.store.commit('updateUnicornPics', unicornpics);
  gbks.events.call('api-unicorn-pics-success', data);
}), _defineProperty(_gbks$api, "onUnicornPicsError", function onUnicornPicsError(data) {
  if (this.log) {
    console.log(this.id, 'onUnicornPicsError', data);
  }

  gbks.events.call('api-unicorn-pics-error', data);
}), _defineProperty(_gbks$api, "unicornPic", function unicornPic(id) {
  if (this.log) {
    console.log(this.id, 'unicornpic', id);
  }

  if (this.singleUnicornpic[id]) {
    gbks.events.call('api-unicorn-pic-success', this.singleUnicornpic[id]);
  } else {
    $.ajax({
      url: this.baseUrl + 'unicornpic',
      data: {
        id: id
      },
      dataType: config.isDev ? 'jsonp' : 'json',
      success: $.proxy(this.onUnicornPic, this, id),
      error: $.proxy(this.onUnicornPicError, this, id)
    });
  }
}), _defineProperty(_gbks$api, "onUnicornPic", function onUnicornPic(id, data) {
  if (this.log) {
    console.log(this.id, 'onUnicornPic', id, data);
  }

  this.singleUnicornpic[id] = data;
  gbks.events.call('api-unicorn-pic-success', data);
}), _defineProperty(_gbks$api, "onUnicornPicError", function onUnicornPicError(data) {
  if (this.log) {
    console.log(this.id, 'onUnicornPicError', data);
  }

  gbks.events.call('api-unicorn-pic-error', data);
}), _defineProperty(_gbks$api, "voteUnicornPic", function voteUnicornPic(id, value) {
  if (this.log) {
    console.log(this.id, 'voteUnicornPic', id, value);
  }

  $.ajax({
    url: this.baseUrl + 'loveunicornpic',
    data: {
      id: id,
      value: value
    },
    dataType: config.isDev ? 'jsonp' : 'json',
    success: $.proxy(this.onVoteUnicornPic, this, id, value),
    error: $.proxy(this.onVoteUnicornPicError, this, id, value)
  });
}), _defineProperty(_gbks$api, "onVoteUnicornPic", function onVoteUnicornPic(id, value, data) {
  if (this.log) {
    console.log(this.id, 'onVoteUnicornPic', id, value, data);
  }

  gbks.events.call('api-vote-unicorn-pic-success', data);
}), _defineProperty(_gbks$api, "onVoteUnicornPicError", function onVoteUnicornPicError(id, value, data) {
  if (this.log) {
    console.log(this.id, 'onVoteUnicornPicError', id, value, data);
  }

  gbks.events.call('api-vote-unicorn-pic-error', data);
}), _defineProperty(_gbks$api, "quotes", function quotes(id) {
  if (!this.loadingQuotes) {
    this.loadingQuotes = true;
    $.ajax({
      url: this.baseUrl + 'quotes',
      dataType: config.isDev ? 'jsonp' : 'json',
      success: $.proxy(this.onQuotes, this, id),
      error: $.proxy(this.onQuotesError, this, id)
    });
  }
}), _defineProperty(_gbks$api, "onQuotes", function onQuotes(id, data) {
  if (this.log) {
    console.log(this.id, 'onQuotes', id, data);
  }
  /*
  var shortest = 1000;
  var longest = 0;
  var total = 0;
  var count = 0;
  var quote;
        for(var i=0; i<data.quotes.length; i++) {
            quote = data.quotes[i].quote;
             shortest = Math.min(shortest, quote.length);
            longest = Math.max(longest, quote.length);
            total += quote.length;
            count++;
        }
         console.log('shortest', shortest);
        console.log('longest', longest);
        console.log('total', total);
        console.log('count', count);
        console.log('average', total/count);
        */


  siteData.store.commit('updateQuotes', data.quotes);
  gbks.events.call('api-quotes-success', data);
}), _defineProperty(_gbks$api, "onQuotesError", function onQuotesError(data) {
  if (this.log) {
    console.log(this.id, 'onQuotesError', data);
  }

  gbks.events.call('api-quotes-error', data);
}), _defineProperty(_gbks$api, "gifts", function gifts(id) {
  if (!this.loadingGifts) {
    this.loadingGifts = true;
    $.ajax({
      url: this.baseUrl + 'gifts',
      dataType: config.isDev ? 'jsonp' : 'json',
      success: $.proxy(this.onGifts, this, id),
      error: $.proxy(this.onGiftsError, this, id)
    });
  }
}), _defineProperty(_gbks$api, "onGifts", function onGifts(id, data) {
  if (this.log) {
    console.log(this.id, 'onGifts', id, data);
  }

  siteData.store.commit('updateGifts', data.gifts);
  gbks.events.call('api-gifts-success', data);
}), _defineProperty(_gbks$api, "onGiftsError", function onGiftsError(data) {
  if (this.log) {
    console.log(this.id, 'onGiftsError', data);
  }

  gbks.events.call('api-gifts-error', data);
}), _gbks$api);
"use strict";

gbks.api.younicorns = {};
gbks.api.singleYounicorns = {};
gbks.api.relatedYounicorns = {};
gbks.api.loadingGifts = false;

gbks.api.younicorns = function (page, count) {
  if (!count) count = 9;
  var id = page + '-' + count;

  if (this.younicorns[id]) {
    gbks.events.call('api-younicorns-success', this.younicorns[id]);
  } else {
    $.ajax({
      url: this.baseUrl + 'younicorns',
      data: {
        page: page,
        count: count
      },
      dataType: config.isDev ? 'jsonp' : 'json',
      success: $.proxy(this.onYounicorns, this, page, count),
      error: $.proxy(this.onYounicornsError, this, page, count)
    });
  }
};

gbks.api.onYounicorns = function (page, count, data) {
  if (this.log) {
    console.log(this.id, 'onYounicorns', page, count, data);
  }

  var id = page + '-' + count;
  this.younicorns[id] = data; // Put in storage.

  var younicorns = [];
  var item;

  for (var i in this.younicorns) {
    item = this.younicorns[i];

    if (item.younicorns && item.younicorns.length) {
      younicorns = younicorns.concat(item.younicorns);
    }
  } // Convert 'bits' variable to an Object.


  for (i = 0; i < younicorns.length; i++) {
    item = younicorns[i];

    if (typeof item.bits == 'string') {
      item.bits = JSON.parse(item.bits);
    }
  }

  siteData.store.commit('updateYounicorns', younicorns);
  gbks.events.call('api-younicorns-success', data);
};

gbks.api.onYounicornsError = function (data) {
  if (this.log) {
    console.log(this.id, 'onYounicornsError', data);
  }

  gbks.events.call('api-younicorns-error', data);
}; // Single younicorn


gbks.api.younicorn = function (id) {
  if (this.singleYounicorns[id]) {
    gbks.events.call('api-younicorn-success', this.singleYounicorns[id]);
  } else {
    $.ajax({
      url: this.baseUrl + 'younicorn',
      data: {
        id: id
      },
      dataType: config.isDev ? 'jsonp' : 'json',
      success: $.proxy(this.onYounicorn, this, id),
      error: $.proxy(this.onYounicornError, this, id)
    });
  }
};

gbks.api.onYounicorn = function (id, data) {
  if (this.log) {
    console.log(this.id, 'onYounicorn', id, data);
  }

  this.singleYounicorns[id] = data;
  gbks.events.call('api-younicorn-success', data);
};

gbks.api.onYounicornError = function (data) {
  if (this.log) {
    console.log(this.id, 'onYounicornError', data);
  }

  gbks.events.call('api-younicorn-error', data);
}; // Vote on a younicorn


gbks.api.voteYounicorn = function (id, value) {
  if (this.log) {
    console.log(this.id, 'voteYounicorn', id, value);
  }

  $.ajax({
    url: this.baseUrl + 'loveyounicorn',
    data: {
      id: id,
      value: value
    },
    dataType: config.isDev ? 'jsonp' : 'json',
    success: $.proxy(this.onVoteYounicorn, this, id, value),
    error: $.proxy(this.onVoteYounicornError, this, id, value)
  });
};

gbks.api.onVoteYounicorn = function (id, value, data) {
  if (this.log) {
    console.log(this.id, 'onVoteYounicorn', id, value, data);
  }

  gbks.events.call('api-vote-younicorn-success', data);
};

gbks.api.onVoteYounicornError = function (id, value, data) {
  if (this.log) {
    console.log(this.id, 'onVoteYounicornError', id, value, data);
  }

  gbks.events.call('api-vote-younicorn-error', data);
}; // Related younicorns


gbks.api.relatedYounicorns = function (id, count) {
  if (!count) count = 9;

  if (this.relatedYounicorns[id]) {
    gbks.events.call('api-related-younicorns-success', this.relatedYounicorns[id]);
  } else {
    $.ajax({
      url: this.baseUrl + 'relatedyounicorns',
      data: {
        id: id,
        count: count
      },
      dataType: 'jsonp',
      success: $.proxy(this.onRelatedYounicorns, this, id),
      error: $.proxy(this.onRelatedYounicornsError, this, id)
    });
  }
};

gbks.api.onRelatedYounicorns = function (id, data) {
  if (this.log) {
    console.log(this.id, 'onRelatedYounicorns', id, data);
  }

  this.relatedYounicorns[id] = data;
  gbks.events.call('api-related-younicorns-success', data);
};

gbks.api.onRelatedYounicornsError = function (data) {
  if (this.log) {
    console.log(this.id, 'onRelatedYounicornsError', data);
  }

  gbks.events.call('api-related-younicorns-error', data);
};
"use strict";

gbks.api.lightningInvoices = {}; // Create a new invoice

gbks.api.createLightningInvoice = function (options) {
  var error = null;

  if (!options) {
    error = 'Options missing';
  } else if (!options.amount) {
    error = 'Amount missing'; // } else if(!options.description) {
    // 	error = 'Description missing';
  }

  if (error && this.log) {
    console.log(this.id, 'createLightningInvoice error', error);
    return false;
  }

  $.ajax({
    url: this.baseUrl + 'createlightninginvoice',
    data: options,
    dataType: config.isDev ? 'jsonp' : 'json',
    processData: false,
    success: $.proxy(this.onCreateLightningInvoice, this, options),
    error: $.proxy(this.onCreateLightningInvoiceError, this, options)
  });
};

gbks.api.onCreateLightningInvoice = function (options, data) {
  if (this.log) {
    console.log(this.id, 'onCreateLightningInvoice', options, data);
  } // Store it.


  this.lightningInvoices[data.id] = data;
  gbks.events.call('api-create-lightning-invoice-success', data);
};

gbks.api.onCreateLightningInvoiceError = function (options, data) {
  if (this.log) {
    console.log(this.id, 'onCreateLightningInvoiceError', data);
  }

  gbks.events.call('api-create-lightning-invoice-error', data);
}; // Load an existing invoice


gbks.api.getLightningInvoice = function (options) {
  var error = null;

  if (!options) {
    error = 'Options missing';
  } else if (!options.id) {
    error = 'Id missing';
  }

  if (error && this.log) {
    console.log(this.id, 'getLightningInvoice error', error);
    return false;
  }

  $.ajax({
    url: this.baseUrl + 'getlightninginvoice',
    data: options,
    dataType: config.isDev ? 'jsonp' : 'json',
    success: $.proxy(this.onGetLightningInvoice, this, options),
    error: $.proxy(this.onGetLightningInvoiceError, this, options)
  });
};

gbks.api.onGetLightningInvoice = function (options, data) {
  if (this.log) {
    console.log(this.id, 'onGetLightningInvoice', options, data);
  } // Store it.


  this.lightningInvoices[data.id] = data;
  gbks.events.call('api-get-lightning-invoice-success', data);
};

gbks.api.onGetLightningInvoiceError = function (options, data) {
  if (this.log) {
    console.log(this.id, 'onGetLightningInvoiceError', options, data);
  }

  gbks.events.call('api-get-lightning-invoice-error', data);
};
"use strict";

Vue.component('like-button', {
  template: "\n        <button \n            type=\"button\" \n            :class=\"classObject\" \n            :title=\"title\"\n            :aria-pressed=\"active\"\n            @click.prevent=\"click\"\n        >\n            <div class=\"hearts\">\n                <span v-html=\"heart\" />\n            </div>\n            <p>I&nbsp;love&nbsp;it</p>\n            <p>{{ count ? count : '-' }}</p>\n        </button>\n    ",
  props: ['count', 'active'],
  data: function data() {
    return {
      log: true,
      heart: gbks.icons.heartFilled
    };
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];

      if (this.active) {
        c.push('-active');
      }

      return c.join(' ');
    },
    title: function title() {
      var result = 'Spread the love!';

      if (this.active) {
        result = 'You like this!';
      }

      if (this.count && this.count > 0) {
        result = this.count + ' like' + (this.count == 1 ? '' : 's');
      }

      return result;
    }
  },
  methods: {
    click: function click(event) {
      var position = gbks.helpers.getPositionFromEvent(event);
      position.y -= window.scrollY;
      gbks.events.call('glitter-hearts', position); // gbks.events.call('glitter-hearts', {
      //     x: event.pageX,
      //     y: event.pageY - window.scrollY
      // });

      if (!this.active) {
        this.$emit('click');
      }
    }
  }
});
"use strict";

Vue.component('like-button-small', {
  template: "\n        <button \n            type=\"button\" \n            :class=\"classObject\"\n            :title=\"title\"\n            :aria-pressed=\"active\"\n            @click.prevent=\"click\"\n        >\n            <div class=\"hearts\">\n                <span v-html=\"heart\" />\n            </div>\n        </button>\n    ",
  props: ['count', 'active'],
  data: function data() {
    return {
      log: true,
      heart: gbks.icons.heartFilled
    };
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];

      if (this.active) {
        c.push('-active');
      }

      return c.join(' ');
    },
    title: function title() {
      var result = 'Spread the love!';

      if (this.active) {
        result = 'You like this!';
      }

      if (this.count && this.count > 0) {
        result = this.count + ' like' + (this.count == 1 ? '' : 's');
      }

      return result;
    }
  },
  methods: {
    click: function click(event) {
      var position = gbks.helpers.getPositionFromEvent(event);
      position.y -= window.scrollY;
      gbks.events.call('glitter-hearts', position); // gbks.events.call('glitter-hearts', {
      //     x: event.pageX,
      //     y: event.pageY - window.scrollY
      // });

      if (!this.active) {
        this.$emit('click');
      }
    }
  }
});
"use strict";

Vue.component('next-button', {
  template: "\n        <router-link\n            :to=\"url\"\n            :class=\"classObject\"\n            @click.native=\"click\"\n        >\n            <div class=\"icon\">\n                <span v-html=\"icon\" />\n            </div>\n            <p>Next, please</p>\n        </router-link>\n    ",
  props: ['url'],
  data: function data() {
    return {
      log: true,
      clicked: false,
      icon: gbks.icons.rightInCircleFilled
    };
  },
  beforeMount: function beforeMount() {},
  computed: {
    classObject: function classObject() {
      var c = [this.id];

      if (this.clicked) {
        c.push('-active');
      }

      return c.join(' ');
    }
  },
  methods: {
    click: function click(event) {
      // this.$emit('click');
      this.l('click', event);
      this.active = true;
      gbks.events.call('glitter-sparkles', {
        x: event.pageX,
        y: event.pageY - window.scrollY
      });
      setTimeout($.proxy(this.deactivate, this), 300);
    },
    deactivate: function deactivate() {
      this.active = false;
    }
  }
});
"use strict";

Vue.component('slider', {
  template: "\n        <div :class=\"classObject\">\n            <div class=\"wrap\">\n                <div class=\"content\" ref=\"canvas\">\n                    <div\n                        class=\"bar\"\n                        :style=\"barStyle\"\n                        @click=\"clickBar\"\n                    />\n                    <div\n                        class=\"handle\"\n                        :style=\"handleStyle\"\n                        @mousedown=\"onMouseDown\"\n                        @touchstart=\"onMouseDown\"\n                    >\n                        <div class=\"handle-wrap\">\n                            <div\n                                class=\"handle-inner\"\n                                :style=\"handleInnerStyle\"\n                                v-html=\"displayIcon\"\n                            />\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    ",
  props: ['type', // Type of effect to apply to icon, scale/opacity
  'percentage', 'icon'],
  data: function data() {
    return {
      log: true,
      dragging: false,
      mouseDown: false,
      touchMoveMethod: $.proxy(this.onMouseMove, this),
      touchEndMethod: $.proxy(this.onMouseUp, this),
      minSize: 0,
      maxSize: 1,
      barWidth: 100,
      minHandleSize: 10,
      maxHandleSize: 30,
      size: this.percentage,
      displayIcon: gbks.icons[this.icon]
    };
  },
  beforeMount: function beforeMount() {
    this.l('beforeMount', this.id);
  },
  watch: {
    percentage: function percentage(next, previous) {
      this.size = next;
    }
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];
      return c.join(' ');
    },
    barStyle: function barStyle() {
      var position = this.sizeToPosition(this.size);
      return {
        width: position + '%'
      };
    },
    handleStyle: function handleStyle() {
      var position = this.sizeToPosition(this.size);
      return {
        left: position + '%'
      };
    },
    handleInnerStyle: function handleInnerStyle() {
      var result = {};

      if (this.type == 'scale') {
        var percentage = this.minHandleSize + this.sizeToPercentage(this.size) * (this.maxHandleSize - this.minHandleSize);
        result.width = percentage + 'px';
        result.height = percentage + 'px';
      } else if (this.type == 'opacity') {
        result.opacity = 0.2 + this.size * 0.8;
        result.width = '20px';
        result.height = '20px';
      }

      return result;
    }
  },
  methods: {
    onMouseDown: function onMouseDown(event) {
      this.l('onMouseDown');
      this.mouseDown = true;
      var position = $(this.$refs.canvas).offset();
      this.position = event.pageX - position.left;
      $('body').bind('mousemove touchmove', this.touchMoveMethod);
      $('body').bind('mouseup touchend', this.touchEndMethod);
    },
    onMouseMove: function onMouseMove(event) {
      this.l('onMouseMove');

      if (this.mouseDown) {
        if (!this.dragging) {
          this.startDrag(event);
        }

        this.updateDrag(event);
      }
    },
    onMouseUp: function onMouseUp(event) {
      this.l('onMouseUp');
      this.mouseDown = false;
      $('body').unbind('mousemove touchmove', this.touchMoveMethod);
      $('body').unbind('mouseup touchend', this.touchEndMethod);

      if (this.dragging) {
        this.stopDrag();
      }
    },
    startDrag: function startDrag(event) {
      this.l('startDrag', event);
      this.dragging = true; // this.drag.start.page.x = event.pageX; // Cursor position on the page.
      // this.drag.start.page.y = event.pageY;
      // this.drag.start.x = this.drag.x; //  Unicorn position within it's container.
      // this.drag.start.y = this.drag.y;
    },
    updateDrag: function updateDrag(event) {
      this.previousPosition = this.position;
      var position = $(this.$refs.canvas).offset();
      var x = event.pageX - position.left; // var maxPosition = 100;
      // x = Math.max(x, 0);
      // x = Math.min(x, maxPosition);

      this.saveSize(this.positionToSize(x));
    },
    stopDrag: function stopDrag(event) {
      this.l('stopDrag');
      this.dragging = false;
    },
    clickBar: function clickBar(event) {
      var position = $(this.$refs.canvas).offset();
      var x = event.pageX - position.left;
      this.saveSize(this.positionToSize(x));
    },
    sizeToPercentage: function sizeToPercentage(size) {
      var percentage = (size - this.minSize) / this.maxSize;
      percentage = Math.max(percentage, 0);
      percentage = Math.min(percentage, 1);
      return percentage;
    },
    sizeToPosition: function sizeToPosition(size) {
      // var percentage = (size - this.minSize) / this.maxSize;
      // percentage = Math.max(percentage, 0);
      // percentage = Math.min(percentage, 1);
      // var position = percentage * this.barWidth;
      var position = this.sizeToPercentage(size) * this.barWidth;
      return position;
    },
    positionToSize: function positionToSize(position) {
      var percentage = position / this.barWidth;
      percentage = Math.max(percentage, 0);
      percentage = Math.min(percentage, 1);
      var size = this.minSize + (this.maxSize - this.minSize) * percentage;
      return size;
    },
    saveSize: function saveSize(size) {
      this.size = size;
      this.$emit('change', size); // var editorData = siteData.store.state.coloringdata;
      // Vue.set(editorData.editor, 'size', size);
      // siteData.store.commit('updateColoringData', editorData);
    }
  }
});
"use strict";

Vue.component('slider-vertical', {
  template: "\n        <div :class=\"classObject\">\n            <div class=\"wrap\">\n                <div \n                    class=\"content\" \n                    ref=\"canvas\" \n                    @click=\"clickBar\"\n                >\n                    <div\n                        class=\"bar\"\n                        :style=\"barStyle\"\n                    />\n                    <div\n                        class=\"handle\"\n                        :style=\"handleStyle\"\n                        @mousedown=\"onMouseDown\"\n                        @touchstart=\"onMouseDown\"\n                    >\n                        <div class=\"handle-wrap\">\n                            <div\n                                class=\"handle-inner\"\n                                :style=\"handleInnerStyle\"\n                            />\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    ",
  props: ['value'],
  data: function data() {
    return {
      log: true,
      dragging: false,
      mouseDown: false,
      touchMoveMethod: $.proxy(this.onMouseMove, this),
      touchEndMethod: $.proxy(this.onMouseUp, this),
      minSize: 0,
      maxSize: 1,
      barHeight: 100,
      minHandleSize: 10,
      maxHandleSize: 30,
      size: this.value,
      displayIcon: gbks.icons[this.icon]
    };
  },
  watch: {
    value: function value(next, previous) {
      this.size = next;
    }
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];
      return c.join(' ');
    },
    barStyle: function barStyle() {
      var position = this.sizeToPosition(this.size);
      return {
        top: position + '%',
        height: 100 - position + '%'
      };
    },
    handleStyle: function handleStyle() {
      var position = this.sizeToPosition(this.size);
      return {
        top: position + '%'
      };
    },
    handleInnerStyle: function handleInnerStyle() {
      var result = {}; // if(this.type == 'scale') {
      //     var percentage = this.minHandleSize + this.sizeToPercentage(this.size) * (this.maxHandleSize - this.minHandleSize);
      //     result.width = percentage+'px';
      //     result.height = percentage+'px';
      // } else if(this.type == 'opacity') {
      //     result.opacity = 0.2 + this.size*0.8;
      //     result.width = '20px';
      //     result.height = '20px';
      // }

      return result;
    }
  },
  methods: {
    onMouseDown: function onMouseDown(event) {
      this.l('onMouseDown');
      this.mouseDown = true;
      var position = $(this.$refs.canvas).offset();

      if (event.pageY) {
        this.position = event.pageY - position.top;
      } else {
        this.position = event.originalEvent.touches[0].screenY - position.top;
      }

      $('body').bind('mousemove touchmove', this.touchMoveMethod);
      $('body').bind('mouseup touchend', this.touchEndMethod);
    },
    onMouseMove: function onMouseMove(event) {
      this.l('onMouseMove');

      if (this.mouseDown) {
        if (!this.dragging) {
          this.startDrag(event);
        }

        this.updateDrag(event);
      }
    },
    onMouseUp: function onMouseUp(event) {
      this.l('onMouseUp');
      this.mouseDown = false;
      $('body').unbind('mousemove touchmove', this.touchMoveMethod);
      $('body').unbind('mouseup touchend', this.touchEndMethod);

      if (this.dragging) {
        this.stopDrag();
      }
    },
    startDrag: function startDrag(event) {
      this.l('startDrag', event);
      this.dragging = true; // this.drag.start.page.x = event.pageX; // Cursor position on the page.
      // this.drag.start.page.y = event.pageY;
      // this.drag.start.x = this.drag.x; //  Unicorn position within it's container.
      // this.drag.start.y = this.drag.y;
    },
    updateDrag: function updateDrag(event) {
      this.previousPosition = this.position;
      var position = $(this.$refs.canvas).offset();
      var y;

      if (event.pageY) {
        y = event.pageY - position.top;
      } else {
        y = event.originalEvent.touches[0].screenY - position.top;
      } // var maxPosition = 100;
      // x = Math.max(x, 0);
      // x = Math.min(x, maxPosition);


      this.saveSize(this.positionToSize(y));
    },
    stopDrag: function stopDrag(event) {
      this.l('stopDrag');
      this.dragging = false;
    },
    clickBar: function clickBar(event) {
      var position = $(this.$refs.canvas).offset();
      var y;

      if (event.pageY) {
        y = event.pageY - position.top;
      } else {
        y = event.originalEvent.touches[0].screenY - position.top;
      }

      this.saveSize(this.positionToSize(y));
    },
    sizeToPercentage: function sizeToPercentage(size) {
      var percentage = (size - this.minSize) / this.maxSize;
      percentage = 1 - percentage;
      percentage = Math.max(percentage, 0);
      percentage = Math.min(percentage, 1);
      return percentage;
    },
    sizeToPosition: function sizeToPosition(size) {
      // var percentage = (size - this.minSize) / this.maxSize;
      // percentage = Math.max(percentage, 0);
      // percentage = Math.min(percentage, 1);
      // var position = percentage * this.barWidth;
      var position = this.sizeToPercentage(size) * this.barHeight;
      return position;
    },
    positionToSize: function positionToSize(position) {
      var percentage = position / this.barHeight;
      percentage = 1 - percentage;
      percentage = Math.max(percentage, 0);
      percentage = Math.min(percentage, 1);
      var size = this.minSize + (this.maxSize - this.minSize) * percentage;
      return size;
    },
    saveSize: function saveSize(size) {
      this.size = size;
      this.$emit('change', size); // var editorData = siteData.store.state.coloringdata;
      // Vue.set(editorData.editor, 'size', size);
      // siteData.store.commit('updateColoringData', editorData);
    }
  }
});
"use strict";

Vue.component('svg-multiline-text', {
  template: "\n        <div\n            :class=\"classObject\"\n            @click=\"click\"\n        >\n            <svg-text\n                v-for=\"(line, index) in lines\"\n                :key=\"'line_'+index\"\n                :ref=\"'line_'+index\"\n                :text=\"line\"\n                :padding=\"padding\"\n                :autoResize=\"autoResize\"\n            />\n        </div>\n    ",
  props: ['text', 'padding', 'autoResize', 'charactersPerLine', 'color'],
  data: function data() {
    return {
      log: !true
    };
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];

      if (this.color) {
        c.push('-' + this.color);
      }

      return c.join(' ');
    },
    lines: function lines() {
      var result = [];

      if (this.charactersPerLine) {
        result = this.breakTextByWord();
      } else {
        result.push(this.text);
      }

      return result;
    }
  },
  watch: {
    text: function text(next, previous) {}
  },
  mounted: function mounted() {// this.measureLines();
  },
  updated: function updated() {// this.measureLines();
  },
  beforeDestroy: function beforeDestroy() {},
  methods: {
    measureLines: function measureLines() {
      var lines = this.lines;
      var line;

      for (var i = 0; i < lines.length; i++) {
        line = this.$refs['line_' + i];
        this.l('i', i, line, line[0].getSize());
      }
    },
    breakTextByWord: function breakTextByWord() {
      var result = [];
      var text = this.text.trim();
      var words = text.split(' ');

      if (words.length == 1) {
        result = this.breakTextByCharacters();
      } else {
        var wordIndex = 0;
        var characterIndex = 0;
        var word,
            line = [],
            lineLength,
            newLineLength,
            remainingCharacters;

        while (wordIndex < words.length) {
          word = words[wordIndex];

          if (word.length == 0) {
            continue;
          }

          lineLength = line.join(' ').length;
          newLineLength = lineLength + word.length + 1;
          var lineIsLongerThanAllowed = newLineLength > this.charactersPerLine;
          var wordIsLongerThanAllowed = word.length + 1 > this.charactersPerLine;
          this.l(wordIndex, word, lineLength, newLineLength);

          if (lineIsLongerThanAllowed) {
            if (wordIsLongerThanAllowed) {
              // Break the word and split across lines.
              remainingCharacters = this.charactersPerLine - lineLength - 1;
              line.push(word.substr(0, remainingCharacters));
              result.push(line.join(' '));
              line = [word.substr(remainingCharacters)];
            } else {
              // Put the word in the next line.
              result.push(line.join(' '));
              line = [word];
            }
          } else {
            // Put the word in the current line.
            line.push(word);
          }

          this.l('line', wordIndex, line, result);
          wordIndex += 1;
        }

        if (line.length > 0) {
          result.push(line.join(' '));
        }
      }

      this.l('breakTextByWord', this.text, words, result);
      return result;
    },
    breakTextByCharacters: function breakTextByCharacters() {
      var result = [];
      var index = 0;
      var characters = parseInt(this.charactersPerLine);
      this.l('lines', this.text);
      var line;

      while (index < this.text.length) {
        line = this.text.slice(index, index + characters);
        result.push(line);
        this.l('line', index, line);
        index += characters;
      }

      return result;
    },
    click: function click() {
      this.$emit('select');
    }
  }
});
"use strict";

Vue.component('svg-text', {
  template: "\n            <svg\n                :class=\"classObject\"\n                ref=\"canvas\"\n                role=\"img\"\n                :width=\"width\"\n                :height=\"height\"\n                :aria-labelledby=\"uid\"\n            >\n                <title :id=\"uid\">{{ text }}</title>\n                <text\n                    x=\"50%\" \n                    y=\"50%\" \n                    text-anchor=\"middle\" \n                    alignment-baseline=\"central\"\n                >{{ text }}</text>\n            </svg>\n    ",
  props: ['text', 'padding', 'autoResize', 'color'],
  data: function data() {
    return {
      log: !true,
      width: null,
      height: null
    };
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];

      if (this.color) {
        c.push('-' + this.color);
      }

      return c.join(' ');
    }
  },
  watch: {
    text: function text(next, previous) {}
  },
  beforeMount: function beforeMount() {
    gbks.events.listen('font-loaded', $.proxy(this.fontLoaded, this));
  },
  mounted: function mounted() {
    this.updateSize();

    if (this.autoResize) {
      gbks.events.listen(gbks.event.Resize, $.proxy(this.resize, this), this.uid);
    }
  },
  updated: function updated() {
    this.updateSize();
  },
  beforeDestroy: function beforeDestroy() {
    gbks.events.clearListener(this.uid);
  },
  methods: {
    updateSize: function updateSize() {
      var box = this.$refs.canvas.getBBox(); // this.l('updateSize', box, this.padding, this.text);

      var width = box.width + (this.padding ? this.padding : 10);
      var height = box.height + (this.padding ? this.padding : 10);
      var delta = Math.abs(width - this.width) + Math.abs(height - this.height);

      if (delta > 4) {
        this.width = width;
        this.height = height;
      }
    },
    getSize: function getSize() {
      var result = null;

      if (this.$refs.canvas) {
        result = this.$refs.canvas.getBBox();
      }

      return result;
    },
    fontLoaded: function fontLoaded() {
      this.l('fontLoaded');
      this.updateSize();
    }
  }
});
"use strict";

Vue.component('younicorn-list', {
  template: "\n        <div :class=\"classObject\" v-if=\"younicornIds && younicornIds.length > 0\">\n            <router-link\n                v-for=\"(id, index) in younicornIds\"\n                :key=\"id\"\n                :to=\"'/younicorn/'+id\"\n            >\n                <img\n                    :src=\"'https://www.cornify.com/younicorn-stable/500/'+id+'.png'\"\n                >\n            </router-link>\n        </div>\n    ",
  props: ['younicornIds'],
  data: function data() {
    return {
      log: true
    };
  },
  beforeMount: function beforeMount() {
    this.l('beforeMount', this.younicornIds);
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];
      return c.join(' ');
    }
  },
  methods: {}
});
"use strict";

Vue.component('site-nav', {
  template: "\n        <div :class=\"classObject\">\n            <button\n                v-if=\"!isDesktop\"\n                class=\"-menu\"\n                id=\"siteNavMenuButton\"\n                :aria-pressed=\"expanded\"\n                aria-haspopup=\"true\"\n                aria-controls=\"siteNavMenu\"\n                title=\"See what you can do on Cornify\"\n                @click=\"toggleMenu\"\n            >Menu</button>\n            <nav\n                id=\"siteNavMenu\"\n                :aria-labelledby=\"isDesktop ? null : 'siteNavMenuButton'\"\n            >\n                <router-link\n                    v-for=\"(item, index) in options\"\n                    :class=\"item.id == activeOption ? '-active' : ''\"\n                    :to=\"item.to\"\n                    :key=\"item.id\"\n                    :title=\"item.title\"\n                    @click.native=\"click\"\n                >{{ item.name }}</router-link>\n\n                <a\n                    v-for=\"(item, index) in socialOptions\"\n                    :class=\"'-social -index-'+index\"\n                    :href=\"item.to\"\n                    :key=\"item.id\"\n                    :title=\"item.title\"\n                    target=\"_blank\"\n                    rel=\"me\"\n                    v-html=\"item.icon\"\n                    @click=\"clickSocial(item.id)\"\n                />\n            </nav>\n        </div>\n    ",
  props: [],
  data: function data() {
    var options = [{
      id: '/',
      to: '/',
      name: 'Home',
      title: 'Cornify home page'
    }, {
      id: 'photo',
      to: '/photo',
      name: 'Cornify a photo',
      title: 'Add unicorns and rainbows to photos'
    }, {
      id: 'younicorns',
      to: '/younicorns',
      name: 'Younicorns',
      title: 'Design your own unicorns'
    }, {
      id: 'coloring',
      to: '/coloring',
      name: 'Coloring',
      title: 'Color a unicorn'
    }, {
      id: 'unicornpictures',
      to: '/unicornpictures',
      name: 'Gallery',
      title: 'Beautiful unicorn images'
    }, {
      id: 'extras',
      to: '/extras',
      name: 'Button',
      title: 'Get the cornify button & code'
    }, {
      id: 'gifts',
      to: '/gifts',
      name: 'Store',
      title: 'Unicorn gifts and products'
    }, {
      id: 'quotes',
      to: '/quotes',
      name: 'Quotes',
      title: 'What people say about Cornify'
    }, {
      id: 'about',
      to: '/about',
      name: 'About',
      title: 'The story of Cornify'
    }];
    var socialOptions = [{
      id: 'twitter',
      to: 'https://www.twitter.com/cornify',
      name: 'Cornify on Twitter',
      icon: gbks.icons.twitter,
      title: 'Follow Cornify on Twitter'
    }, {
      id: 'instagram',
      to: 'https://www.instagram.com/cornifylove/',
      name: 'Cornify on Instagram',
      icon: gbks.icons.instagram,
      title: 'Unicorns and rainbows on the Insta'
    }, {
      id: 'facebook',
      to: 'https://www.facebook.com/unicornhappiness',
      name: 'Cornify on the Facies',
      icon: gbks.icons.facebook,
      title: 'Facebook - unicorns - rainbows'
    }];
    var activeOption = '/';
    return {
      log: !true,
      expanded: false,
      hidden: false,
      activeOption: activeOption,
      options: options,
      socialOptions: socialOptions,
      scrolledToTop: true,
      size: 'normal'
    };
  },
  beforeMount: function beforeMount() {
    this.l('beforeMount', this.id);
    $(window).bind('scroll', $.proxy(this.scroll, this));
    this.updateHidden();
  },
  watch: {
    $route: function $route(after, before) {
      this.expanded = false;
      this.updateHidden();
      this.l('watch.$route', arguments);
      siteData.store.commit('updateNavExpanded', this.expanded);
    }
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];

      if (this.expanded) {
        c.push('-expanded');
      } else {
        if (this.scrolledToTop) {
          c.push('-at-top');
        }
      }

      if (this.size) {
        c.push('-' + this.size);
      }

      return c.join(' ');
    },
    isMobile: function isMobile() {
      return siteData.store.state.isMobile;
    },
    isDesktop: function isDesktop() {
      return siteData.store.state.isDesktop;
    }
  },
  methods: {
    toggleMenu: function toggleMenu() {
      this.expanded = !this.expanded; // this.l('toggleMenu', this.expanded);

      siteData.store.commit('updateNavExpanded', this.expanded);
    },
    updateHidden: function updateHidden() {
      this.l('updateHidden', this.$route);
      var size = 'medium';

      switch (this.$route.path) {
        case '/':
          size = 'large';
          break;

        case '/cornify-a-photo':
        case '/photo':
        case '/unicorn-coloring':
        case '/coloring':
        case '/younicorn':
          size = 'small';
          break;
      }

      this.size = size;
    },
    click: function click(event) {
      // this.toggleMenu();
      gbks.events.call('glitter-sparkle', {
        x: event.pageX,
        y: event.pageY
      });
    },
    scroll: function scroll(event) {
      var y = window.scrollY;
      this.scrolledToTop = y < 100;
    },
    clickSocial: function clickSocial(id) {
      trackman.event('site-nav', 'click-social', id);
    }
  }
});
"use strict";

Vue.component('site-logo', {
  template: "\n        <div :class=\"classObject\" ref=\"canvas\" @click=\"click\">\n            <router-link \n                to=\"/\" \n                title=\"Cornify your life!!!\"\n            >\n                <img\n                    src=\"/assets/logo.png\"\n                    width=\"92\"\n                    height=\"112\"\n                    alt=\"The Grand Unicorn in all it's sparkly glory\"\n                    title=\"Unicorns and rainbows are the best\"\n                >\n                <h2>Cornify</h2>\n                <h3>Unicorn & Rainbows On-Demand</h3>\n            </router-link>\n        </div>\n    ",
  props: [],
  data: function data() {
    return {
      log: true,
      size: 'medium',
      scrolledToTop: true
    };
  },
  beforeMount: function beforeMount() {
    this.l('beforeMount', this.id);
    $(window).bind('scroll', $.proxy(this.scroll, this));
    this.updateHidden();
  },
  watch: {
    $route: function $route(after, before) {
      this.updateHidden();
    }
  },
  // beforeRouteUpdate: function(to, from, next) {
  //     this.l('beforeRouteUpdate', to, from, next);
  // },
  computed: {
    classObject: function classObject() {
      var c = [this.id];

      if (siteData.store.state.navExpanded) {
        c.push('-nav-expanded');
      } else {
        if (this.size) {
          c.push('-' + this.size);
        } // if(!this.scrolledToTop && this.size != 'small') {
        //     c.push('-small');
        // }


        if (this.scrolledToTop) {
          c.push('-at-top');
        }
      }

      return c.join(' ');
    }
  },
  methods: {
    updateHidden: function updateHidden() {
      this.l('updateHidden', this.$route);
      /*
      
      -small - sub-pages (quotes, about...) or when scrolled to the top
      -tiny - full-screen pages (editor, coloring)
      
      -nav-expanded - overrides all size and scroll settings
        */

      var size = 'medium';

      switch (this.$route.path) {
        case '/':
          size = 'large';
          break;

        case '/cornify-a-photo':
        case '/photo':
        case '/unicorn-coloring':
        case '/coloring':
        case '/younicorn':
          size = 'small';
          break;
      }

      this.size = size;
    },
    click: function click(event) {
      var x = event.pageX;
      var y = event.pageY;
      var position = gbks.helpers.getPositionFromEvent(event);
      position.y -= window.scrollY;
      gbks.events.call('glitter-sparkle', position);

      if (this.$route.path == '/') {
        siteData.scroller.scrollToPosition(0);
      }
    },
    scroll: function scroll(event) {
      var y = window.scrollY;
      this.scrolledToTop = y < 100;
    }
  }
});
"use strict";

Vue.component('site-top-bar', {
  template: "\n        <header :class=\"classObject\">\n            <div class=\"wrap\">\n                <div class=\"content\">\n                    <site-nav />\n                    <site-logo />\n                    <photo-editor-back-button\n                        v-if=\"showBackButton\"\n                    />\n                </div>\n            </div>\n        </header>\n    ",
  props: [],
  data: function data() {
    return {
      log: !true,
      hidden: false,
      showBackButton: false
    };
  },
  beforeMount: function beforeMount() {
    this.updateHidden();
  },
  watch: {
    $route: function $route(after, before) {
      this.updateHidden();
    }
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];

      if (this.pageName) {
        c.push('-' + this.pageName);
      }

      if (this.hidden) {
        c.push('-hidden');
      }

      return c.join(' ');
    }
  },
  methods: {
    pageMounted: function pageMounted(data) {
      this.pageName = data.pageName;
    },
    updateHidden: function updateHidden() {
      this.l('updateHidden', this.$route);
      var hidden = false;
      var showBackButton = false;

      switch (this.$route.path) {
        case '/cornify-a-photo':
        case '/photo':
        case '/unicorn-coloring':
        case '/coloring':
          hidden = true;
          showBackButton = true;
          break;
      }

      this.hidden = hidden;
      this.showBackButton = showBackButton;
    }
  }
});
"use strict";

Vue.component('site-footer', {
  template: "\n        <footer :class=\"classObject\">\n            <div class=\"wrap\">\n                <div class=\"content\">\n                    <button\n                        role=\"button\"\n                        aria-label=\"Sparkle up your website\"\n                        @click.prevent=\"cornify\"\n                    >\n                        <img\n                            src=\"/assets/photo/button-snap.png\"\n                            width=\"162\"\n                            height=\"162\"\n                            alt=\"Cornify\"\n                            title=\"Add magical unicorns and colorful rainbows\"\n                        >\n                    </button>\n\n                    <h2>Cornify wishes you sparkly happiness forever!!!</h2>\n\n                    <p>Copyright \xA9 2009 - 2020 Cornify | By <a href=\"http://www.germanysbestkeptsecret.com/\" target=\"_blank\" title=\"Psst! It's a secret!\">Germany's Best Kept Secret</a> | Cornify Your Life! | <a title=\"Email Cornify\" href=\"mailto:rainbows@cornify.com\">rainbows@cornify.com</a></p>\n                </div>\n            </div>\n        </footer>\n    ",
  props: [],
  data: function data() {
    return {
      log: true,
      hide: false
    };
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];

      if (this.hide) {
        c.push('-hide');
      }

      return c.join(' ');
    }
  },
  beforeMount: function beforeMount() {
    this.updateHidden();
  },
  watch: {
    $route: function $route(after, before) {
      this.updateHidden();
    }
  },
  methods: {
    updateHidden: function updateHidden() {
      // this.l('updateHidden', this.$route);
      var hide = false;

      switch (this.$route.path) {
        case '/cornify-a-photo':
        case '/photo':
        case '/unicorn-coloring':
        case '/coloring':
        case '/quotes':
        case '/younicorn':
          hide = true;
          break;
      }

      this.hide = hide;
    },
    cornify: function cornify() {
      cornify_add();
      trackman.event('site-footer', 'cornify');
    }
  }
});
"use strict";

Vue.component('glitter-heart', {
  template: "\n        <div :class=\"classObject\" :style=\"styleObject\">\n            <div class=\"wrap\">\n                <div class=\"content\" v-html=\"icon\" />\n            </div>\n        </div>\n    ",
  props: ['data'],
  data: function data() {
    var colors = ['white', 'green', 'blue', 'orange', 'pink', 'purple'];
    return {
      log: !true,
      scale: 0.2,
      alpha: 1,
      lifeExpectancy: Math.random() * 800 + 300,
      mode: 'birth',
      x: this.data.x,
      y: this.data.y,
      color: colors[Math.floor(Math.random() * colors.length)],
      icon: Math.random() > 0.25 ? gbks.icons.heartFilled : gbks.icons.heart,
      angle: 0
    };
  },
  beforeMount: function beforeMount() {
    this.l('beforeMount', this.id);
    setTimeout($.proxy(this.stepOne, this), 25);
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id, '-' + this.color];
      return c.join(' ');
    },
    styleObject: function styleObject() {
      var s = {
        left: this.x + 'px',
        top: this.y + 'px',
        transform: 'scale(' + this.scale + ', ' + this.scale + ') rotate(' + this.angle + 'deg)',
        opacity: this.alpha,
        transitionDuration: this.lifeExpectancy + 'ms'
      };
      return s;
    }
  },
  methods: {
    stepOne: function stepOne() {
      this.scale = Math.random() + 1;
      this.alpha = 1;
      this.mode = 'life';
      var offset = Math.random() * 50 + 150;
      var x = this.data.x + Math.random() * offset - offset / 2;
      var y = this.data.y + Math.random() * offset - offset / 2;
      this.x = x;
      this.y = y;
      this.angle = Math.round(Math.random() * 150 - 75);
      setTimeout($.proxy(this.stepTwo, this), this.lifeExpectancy / 2);
    },
    stepTwo: function stepTwo() {
      // this.scale = 0;
      this.alpha = 0;
      setTimeout($.proxy(this.stepThree, this), this.lifeExpectancy / 2);
    },
    stepThree: function stepThree() {
      this.$emit('destroy', this.data.id);
    }
  }
});
"use strict";

Vue.component('glitter-sparkle', {
  template: "\n        <div :class=\"classObject\" :style=\"styleObject\">\n            <div class=\"wrap\">\n                <div class=\"content\">\n                </div>\n            </div>\n        </div>\n    ",
  props: ['data'],
  data: function data() {
    var colors = ['white', 'green', 'blue', 'orange', 'pink', 'purple'];
    var shapes = ['circle', 'square', 'star'];
    return {
      log: !true,
      scale: 0.2,
      alpha: 1,
      lifeExpectancy: Math.random() * 500 + 200,
      mode: 'birth',
      x: this.data.x,
      y: this.data.y,
      color: colors[Math.floor(Math.random() * colors.length)],
      shape: shapes[Math.floor(Math.random() * shapes.length)]
    };
  },
  beforeMount: function beforeMount() {
    this.l('beforeMount', this.id);
    setTimeout($.proxy(this.stepOne, this), 25);
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id, '-' + this.color, '-' + this.shape];
      return c.join(' ');
    },
    styleObject: function styleObject() {
      var s = {
        left: this.x + 'px',
        top: this.y + 'px',
        transform: 'scale(' + this.scale + ', ' + this.scale + ')',
        opacity: this.alpha,
        transitionDuration: this.lifeExpectancy + 'ms'
      };
      return s;
    }
  },
  methods: {
    stepOne: function stepOne() {
      this.scale = 1;
      this.alpha = 1;
      this.mode = 'life';
      var offset = Math.random() * 50 + 150;
      var x = this.data.x + Math.random() * offset - offset / 2;
      var y = this.data.y + Math.random() * offset - offset / 2;
      this.x = x;
      this.y = y;
      setTimeout($.proxy(this.stepTwo, this), this.lifeExpectancy / 2);
    },
    stepTwo: function stepTwo() {
      // this.scale = 0;
      this.alpha = 0;
      setTimeout($.proxy(this.stepThree, this), this.lifeExpectancy / 2);
    },
    stepThree: function stepThree() {
      this.$emit('destroy', this.data.id);
    }
  }
});
"use strict";

/*

Global sparkle layer for amazing effects.

gbks.events.call('glitter-sparkle', {
    x: 100,
    y: 100
});

 */
Vue.component('glitter', {
  template: "\n        <div :class=\"classObject\" aria-hidden=\"true\">\n            <div class=\"wrap\">\n                <div class=\"content\">\n                    <glitter-sparkle\n                        v-for=\"(item, index) in sparkles\"\n                        :key=\"item.id\"\n                        :data=\"item\"\n                        @destroy=\"destroySparkle\"\n                    />\n                    <glitter-heart\n                        v-for=\"(item, index) in hearts\"\n                        :key=\"item.id\"\n                        :data=\"item\"\n                        @destroy=\"destroyHearts\"\n                    />\n                    <glitter-text\n                        v-for=\"(item, index) in texts\"\n                        :key=\"item.id\"\n                        :data=\"item\"\n                        @destroy=\"destroyText\"\n                    />\n                    <glitter-motivate\n                        v-for=\"(item, index) in motivations\"\n                        :key=\"item.id\"\n                        :data=\"item\"\n                        @destroy=\"destroyMotivation\"\n                    />\n                </div>\n            </div>\n        </div>\n    ",
  props: [],
  data: function data() {
    return {
      log: !true,
      sparkleIndex: 1,
      textIndex: 1,
      heartIndex: 1,
      motivationIndex: 1,
      hearts: [],
      sparkles: [],
      texts: [],
      motivations: []
    };
  },
  beforeMount: function beforeMount() {
    gbks.events.listen('glitter-hearts', $.proxy(this.addHearts, this), this.id);
    gbks.events.listen('glitter-sparkle', $.proxy(this.addSparkles, this), this.id);
    gbks.events.listen('glitter-text', $.proxy(this.addText, this), this.id);
    gbks.events.listen('glitter-motivate', $.proxy(this.addMotivation, this), this.id);
  },
  beforeDestroy: function beforeDestroy() {
    gbks.events.clearListener(this.id);
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];
      return c.join(' ');
    }
  },
  methods: {
    addSparkles: function addSparkles(options) {
      this.l('addSparkles', options);
      var count = 20;

      while (count > 0) {
        count--;
        this.addSparkle($.extend({}, options));
      }
    },
    addSparkle: function addSparkle(options) {
      options.id = 'sparkle_' + this.sparkleIndex;
      this.sparkleIndex++;
      this.sparkles.push(options);
    },
    destroySparkle: function destroySparkle(id) {
      var sparkle;

      for (var i = 0; i < this.sparkles.length; i++) {
        sparkle = this.sparkles[i];

        if (sparkle.id == id) {
          this.sparkles.splice(i, 1);
          break;
        }
      }
    },
    addText: function addText(data) {
      data.id = 'text_' + this.textIndex;
      this.textIndex++;
      this.texts.push(data);
    },
    destroyText: function destroyText(id) {
      var text;

      for (var i = 0; i < this.texts.length; i++) {
        text = this.texts[i];

        if (text.id == id) {
          this.texts.splice(i, 1);
          break;
        }
      }
    },
    addHearts: function addHearts(options) {
      this.l('addHearts', options);
      var count = 20;

      while (count > 0) {
        count--;
        this.addHeart($.extend({}, options));
      }
    },
    addHeart: function addHeart(options) {
      options.id = 'heart_' + this.heartIndex;
      this.heartIndex++;
      this.hearts.push(options);
    },
    destroyHearts: function destroyHearts(id) {
      var heart;

      for (var i = 0; i < this.hearts.length; i++) {
        heart = this.hearts[i];

        if (heart.id == id) {
          this.hearts.splice(i, 1);
          break;
        }
      }
    },
    addMotivation: function addMotivation(data) {
      data.id = 'motivation_' + this.motivationIndex;
      this.motivationIndex++;
      this.motivations.push(data);
    },
    destroyMotivation: function destroyMotivation(id) {
      var motivation;

      for (var i = 0; i < this.motivations.length; i++) {
        motivation = this.motivations[i];

        if (motivation.id == id) {
          this.motivations.splice(i, 1);
          break;
        }
      }
    }
  }
});
"use strict";

Vue.component('glitter-text', {
  template: "\n        <div :class=\"classObject\" :style=\"styleObject\">\n            <div class=\"wrap\">\n                <div class=\"content\">\n                    <p v-html=\"text\" />\n                </div>\n            </div>\n        </div>\n    ",
  props: ['data'],
  data: function data() {
    return {
      log: !true,
      stepOneActive: false,
      stepTwoActive: false
    };
  },
  beforeMount: function beforeMount() {
    this.l('beforeMount', this.id);
    setTimeout($.proxy(this.stepOne, this), 25);
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];

      if (this.stepOneActive) {
        c.push('-step-one');
      }

      if (this.stepTwoActive) {
        c.push('-step-two');
      }

      return c.join(' ');
    },
    styleObject: function styleObject() {
      var s = {};
      return s;
    },
    text: function text() {
      return '<span>' + this.data.text.split('').join('</span><span>') + '</span>';
    }
  },
  methods: {
    stepOne: function stepOne() {
      this.stepOneActive = true;
      setTimeout($.proxy(this.stepTwo, this), 1500);
    },
    stepTwo: function stepTwo() {
      this.stepTwoActive = true;
      setTimeout($.proxy(this.stepThree, this), 500);
    },
    stepThree: function stepThree() {
      // this.stepTwoActive = false;
      // this.stepOneActive = false;
      // setTimeout($.proxy(this.stepOne, this), 500);
      this.$emit('destroy', this.data.id);
    }
  }
});
"use strict";

Vue.component('glitter-motivate', {
  template: "\n        <div :class=\"classObject\" :style=\"styleObject\">\n            <div class=\"wrap\">\n                <div class=\"content\">\n                    <div class=\"rainbows\">\n                        <div class=\"rainbow\"><div class=\"rainbow-inner\" /></div>\n                        <div class=\"rainbow\"><div class=\"rainbow-inner\" /></div>\n                        <div class=\"rainbow\"><div class=\"rainbow-inner\" /></div>\n                        <div class=\"rainbow\"><div class=\"rainbow-inner\" /></div>\n                        <div class=\"rainbow\"><div class=\"rainbow-inner\" /></div>\n                    </div>\n                    <div class=\"unicorn\">\n                        <img\n                            :src=\"unicorn.src\"\n                            :width=\"unicorn.width\"\n                            :height=\"unicorn.height\"\n                            @load=\"imageLoaded\"\n                        >\n                        <p v-html=\"text\" />\n                    </div>\n                </div>\n            </div>\n        </div>\n    ",
  props: ['data'],
  data: function data() {
    var unicorn = siteData.unicorns[Math.floor(Math.random() * siteData.unicorns.length)];
    var text = this.data.text;
    var texts = ['Sparkly<br/>Happiness<br/>Forever!', 'Super<br/>sparkles!', 'The Grand<br/>Unicorn<br/>is proud!', 'Unicorn<br/>friends<br/>forever!', 'You are<br/>the best!'];

    if (!text) {
      text = texts[Math.floor(Math.random() * texts.length)];
    }

    return {
      log: !true,
      unicorn: unicorn,
      text: text,
      stepOneActive: false,
      stepTwoActive: false,
      lifeExpectancy: 3000
    };
  },
  beforeMount: function beforeMount() {// setTimeout($.proxy(this.stepOne, this), 25);
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];

      if (this.stepOneActive) {
        c.push('-step-one');
      }

      if (this.stepTwoActive) {
        c.push('-step-two');
      }

      return c.join(' ');
    },
    styleObject: function styleObject() {
      var s = {};
      return s;
    }
  },
  methods: {
    imageLoaded: function imageLoaded() {
      setTimeout($.proxy(this.stepOne, this), 25);
    },
    stepOne: function stepOne() {
      this.stepOneActive = true;
      setTimeout($.proxy(this.stepTwo, this), this.lifeExpectancy / 2);
    },
    stepTwo: function stepTwo() {
      this.stepTwoActive = true;
      setTimeout($.proxy(this.stepThree, this), this.lifeExpectancy / 2);
    },
    stepThree: function stepThree() {
      this.$emit('destroy', this.data.id);
    }
  }
});
"use strict";

Vue.component('photo-editor-bottom-bar', {
  template: "\n        <div :class=\"classObject\">\n            <div class=\"wrap\">\n                <div class=\"content\" v-if=\"visible\">\n                    <photo-editor-color-button\n                        v-if=\"showModeButton\"\n                        :editorMode=\"data.editor.mode\"\n                        @changeMode=\"changeMode\"\n                    />\n                    <photo-editor-palette\n                        v-if=\"data.mode == 'edit' && data.editor.mode == 'draw'\"\n                        @close=\"closePalette\"\n                    />\n                    <photo-editor-cornify-button\n                        v-if=\"data.mode == 'edit' && data.editor.mode == 'cornify'\"\n                        @cornify=\"cornify\"\n                    />\n                    <photo-editor-save-button\n                        v-if=\"showSaveButton\"\n                        @save=\"save\"\n                    />\n                </div>\n            </div>\n        </div>\n    ",
  props: ['data'],
  data: function data() {
    return {
      log: !true
    };
  },
  beforeMount: function beforeMount() {
    this.l('beforeMount', this.id);
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];
      return c.join(' ');
    },
    isMobile: function isMobile() {
      return siteData.store.state.isMobile;
    },
    showModeButton: function showModeButton() {
      var result = false;

      if (this.data.mode == 'edit') {
        if (this.isMobile && this.data.editor.mode == 'draw') {} else {
          result = true;
        }
      }

      return result;
    },
    showSaveButton: function showSaveButton() {
      var result = false;

      if (this.data.mode == 'edit') {
        if (this.isMobile && this.data.editor.mode == 'draw') {} else {
          result = true;
        }
      }

      return result;
    },
    visible: function visible() {
      // Hide when keyboard expanded (text focused) on mobile.
      return !(this.isMobile && this.data.editor.text.focused);
    }
  },
  methods: {
    cornify: function cornify() {
      this.$emit('cornify');
    },
    save: function save() {
      this.$emit('save');
    },
    changeMode: function changeMode() {
      var mode = this.data.editor.mode == 'cornify' ? 'draw' : 'cornify';
      Vue.set(this.data.editor, 'mode', mode);
      siteData.store.commit('updatePhotoEditorData', this.data);
    },
    closePalette: function closePalette() {
      Vue.set(this.data.editor, 'mode', 'cornify');
      siteData.store.commit('updatePhotoEditorData', this.data);
    }
  }
});
"use strict";

Vue.component('photo-editor-color-button', {
  template: "\n        <a\n            ref=\"canvas\"\n            :class=\"classObject\"\n            href=\"#\"\n            @mousedown=\"mousedown\"\n            @click.prevent=\"click\"\n        >{{ label }}</a>\n    ",
  props: ['editorMode'],
  data: function data() {
    return {
      log: !true
    };
  },
  beforeMount: function beforeMount() {
    this.l('beforeMount', this.id);
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];
      return c.join(' ');
    },
    label: function label() {
      return this.editorMode == 'cornify' ? 'Draw' : 'Cornify';
    }
  },
  methods: {
    click: function click() {
      this.$emit('changeMode');
    },
    mousedown: function mousedown() {
      this.sparkle();
    },
    sparkle: function sparkle() {
      var canvas = $(this.$refs.canvas);
      var position = canvas.offset();
      gbks.events.call('glitter-sparkle', {
        x: position.left + canvas.width() / 2,
        y: position.top + canvas.height() / 2
      });
    }
  }
});
"use strict";

Vue.component('photo-editor-cornify-button', {
  template: "\n        <a \n            ref=\"canvas\"\n            :class=\"classObject\" \n            href=\"#\" \n            @click.prevent=\"click\"\n            @mousedown=\"mousedown\"\n            @mouseup=\"mouseup\"\n        >\n            <div class=\"wrap\">\n                <div class=\"content\">\n                    <img\n                        class=\"-default\"\n                        src=\"/assets/photo/button-snap.png\"\n                        width=\"162\"\n                        height=\"162\"\n                        alt=\"Add a unicorn\"\n                    />\n                    <img\n                        class=\"-active\"\n                        src=\"/assets/photo/button-snap-active.png\"\n                        width=\"162\"\n                        height=\"162\"\n                        alt=\"You did it!!!\"\n                    />\n                    <div\n                        v-if=\"!clicked || thanking\"\n                        class=\"-tip\"\n                    >\n                        <p v-html=\"message\" />\n                    </div>\n                </div>\n            </div>\n        </a>\n    ",
  props: [],
  data: function data() {
    return {
      log: !true,
      active: false,
      clicked: false,
      thanking: true
    };
  },
  beforeMount: function beforeMount() {
    this.l('beforeMount', this.id);
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];

      if (this.active) {
        c.push('-active');
      }

      return c.join(' ');
    },
    message: function message() {
      return !this.clicked ? 'Click here for 🦄 + 🌈' : 'Woohoo!!!';
    }
  },
  methods: {
    click: function click() {
      if (!this.clicked) {
        this.clicked = true;
        setTimeout($.proxy(this.hideTip, this), 2000);
      }

      this.$emit('cornify');
      trackman.event('photoeditor', 'cornify');
    },
    hideTip: function hideTip() {
      this.thanking = false;
    },
    mousedown: function mousedown() {
      this.active = true;
      this.sparkle();
    },
    mouseup: function mouseup() {
      this.active = false;
    },
    sparkle: function sparkle() {
      var canvas = $(this.$refs.canvas);
      var position = canvas.offset();
      gbks.events.call('glitter-sparkle', {
        x: position.left + canvas.width() / 2,
        y: position.top + canvas.height() / 2
      });
    }
  }
});
"use strict";

Vue.component('photo-editor-palette-color', {
  template: "\n        <li :class=\"classObject\">\n            <a\n                :style=\"styleObject\"\n                href=\"#\"\n                v-html=\"icon\"\n                @click.prevent=\"click\"\n            />\n        </li>\n    ",
  props: ['data', 'index', 'activeIndex'],
  data: function data() {
    return {
      log: !true
    };
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];

      if (this.activeIndex == this.index) {
        c.push('-active');
      }

      if (this.data.icon) {
        c.push('-icon');
      }

      return c.join(' ');
    },
    styleObject: function styleObject() {
      var result = {};

      if (!this.data.type) {
        result.backgroundColor = 'rgb(' + this.data.r + ', ' + this.data.g + ', ' + this.data.b + ')';
      }

      return result;
    },
    icon: function icon() {
      return this.data.icon ? gbks.icons[this.data.icon] : null;
    }
  },
  methods: {
    click: function click(event) {
      this.$emit('select', this.index);
    }
  }
});
"use strict";

Vue.component('photo-editor-palette', {
  template: "\n        <div :class=\"classObject\">\n            <div class=\"wrap\">\n                <div class=\"content\">\n                    <ol>\n                        <photo-editor-palette-color\n                            v-for=\"(item, index) in colors\"\n                            :key=\"index\"\n                            :index=\"index\"\n                            :data=\"item\"\n                            :activeIndex=\"activeIndex\"\n                            @select=\"select\"\n                        />\n                        <li v-if=\"false\" class=\"-toggle\">\n                            <a\n                                href=\"#\"\n                                @click.prevent=\"expand\"\n                                v-html=\"closeIcon\"\n                            />\n                        </li>\n                    </ol>\n                </div>\n            </div>\n        </div>\n    ",
  props: [],
  data: function data() {
    var palette = siteData.palette.slice();
    palette.push({
      r: 0,
      g: 0,
      b: 0
    });
    palette.push({
      r: 245,
      g: 245,
      b: 245
    });
    palette.push({
      type: 'erase',
      icon: 'erase'
    });
    palette.push({
      type: 'sparkle',
      icon: 'sparkle'
    });

    if (siteData.store.state.isMobile) {
      palette.push({
        type: 'close',
        icon: 'close'
      });
    }

    return {
      log: true,
      colors: palette,
      activeIndex: 0,
      expanded: true,
      closeIcon: gbks.icons.close
    };
  },
  beforeMount: function beforeMount() {
    this.l('beforeMount', this.id);
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];

      if (this.expanded) {
        c.push('-expanded');
      }

      if (this.colors.length % 2 == 0) {
        c.push('-even-count');
      }

      return c.join(' ');
    }
  },
  methods: {
    select: function select(activeIndex) {
      this.activeIndex = activeIndex;
      var editorData = siteData.store.state.photoeditordata;
      this.l('select', activeIndex, this.colors, editorData, this.colors[activeIndex]); // Vue.set(editorData.editor, 'color', this.colors[activeIndex]);

      var color = this.colors[activeIndex];

      if (!color.type) {
        Vue.set(editorData.editor, 'drawMode', 'draw');
        Vue.set(editorData.editor.color, 0, color.r);
        Vue.set(editorData.editor.color, 1, color.g);
        Vue.set(editorData.editor.color, 2, color.b);
        siteData.store.commit('updatePhotoEditorData', editorData);
        trackman.event('photoeditor', 'pick-color', activeIndex);
      } else if (color.type == 'close') {
        this.$emit('close');
        trackman.event('photoeditor', 'close-palette');
      } else {
        Vue.set(editorData.editor, 'drawMode', color.type ? color.type : 'draw');
        siteData.store.commit('updatePhotoEditorData', editorData);
        trackman.event('photoeditor', 'mode-' + color.type);
      }
    },
    expand: function expand() {
      this.expanded = !this.expanded;
      trackman.event('photoeditor', 'palette-expand');
    }
  }
});
"use strict";

Vue.component('photo-editor-save-button', {
  template: "\n        <a\n            ref=\"canvas\"\n            :class=\"classObject\"\n            href=\"#\"\n            @mousedown=\"mousedown\"\n            @click.prevent=\"click\"\n        >Save</a>\n    ",
  props: [],
  data: function data() {
    return {
      log: !true
    };
  },
  beforeMount: function beforeMount() {
    this.l('beforeMount', this.id);
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];
      return c.join(' ');
    }
  },
  methods: {
    click: function click() {
      this.$emit('save');
      gbks.events.call('glitter-motivate', {// text: 'You\'re the best'
      });
    },
    mousedown: function mousedown() {
      this.sparkle();
    },
    sparkle: function sparkle() {
      var canvas = $(this.$refs.canvas);
      var position = canvas.offset();
      gbks.events.call('glitter-sparkle', {
        x: position.left + canvas.width() / 2,
        y: position.top + canvas.height() / 2
      });
    }
  }
});
"use strict";

Vue.component('photo-editor-back-button', {
  template: "\n        <button\n            :class=\"classObject\"\n            type=\"button\"\n            v-html=\"icon\"\n            @click=\"click\"\n        />\n    ",
  props: [],
  data: function data() {
    return {
      log: !true,
      icon: gbks.icons.close
    };
  },
  beforeMount: function beforeMount() {
    this.l('beforeMount', this.id);
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];
      return c.join(' ');
    }
  },
  methods: {
    click: function click(event) {
      if (confirm("Sure you want to go back?")) {
        this.$router.push('/');
      } else {}
    }
  }
});
"use strict";

Vue.component('photo-editor-top-bar', {
  template: "\n        <div :class=\"classObject\">\n            <div class=\"wrap\">\n                <div class=\"content\">\n                    <photo-editor-back-button v-if=\"false\" />\n                </div>\n            </div>\n        </div>\n    ",
  props: [],
  data: function data() {
    return {
      log: !true
    };
  },
  beforeMount: function beforeMount() {
    this.l('beforeMount', this.id);
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];
      return c.join(' ');
    }
  },
  methods: {}
});
"use strict";

Vue.component('photo-editor-filter-list-item', {
  template: "\n        <div :class=\"classObject\">\n            <div class=\"wrap\">\n                <div class=\"content\">\n\n                </div>\n            </div>\n        </div>\n    ",
  props: [],
  data: function data() {
    return {
      log: !true
    };
  },
  beforeMount: function beforeMount() {
    this.l('beforeMount', this.id);
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];
      return c.join(' ');
    }
  },
  methods: {}
});
"use strict";

Vue.component('photo-editor-filter-list', {
  template: "\n        <div :class=\"classObject\">\n            <div class=\"wrap\">\n                <div class=\"content\">\n\n                </div>\n            </div>\n        </div>\n    ",
  props: [],
  data: function data() {
    return {
      log: !true
    };
  },
  beforeMount: function beforeMount() {
    this.l('beforeMount', this.id);
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];
      return c.join(' ');
    }
  },
  methods: {}
});
"use strict";

Vue.component('photo-editor-text', {
  template: "\n        <div \n            ref=\"canvas\"\n            :class=\"classObject\"\n            :style=\"styleObject\"\n            @mousedown=\"onMouseDown\"\n            @touchstart=\"onMouseDown\"\n        >\n            <div class=\"wrap\">\n                <div class=\"content\">\n                    <p\n                        v-if=\"data.mode == 'edit'\"\n                        ref=\"field\"\n                        contenteditable\n                        data-placeholder=\"Enter some text...\"\n                        @focus=\"focus\"\n                        @blur=\"blur\"\n                        @keypress=\"keypress\"\n                        @keyup=\"keyup\"\n                    >{{ text }}</p>\n                    <p\n                        v-else\n                    >{{ text }}</p>\n                </div>\n            </div>\n        </div>\n    ",
  props: ['data'],
  data: function data() {
    return {
      log: true,
      active: false,
      dragging: false,
      mouseDown: false,
      touchMoveMethod: $.proxy(this.onMouseMove, this),
      touchEndMethod: $.proxy(this.onMouseUp, this),
      drag: {
        start: {
          page: {
            x: 0,
            y: 0
          },
          x: 0,
          y: 0
        },
        now: {
          x: 0,
          y: 0
        },
        x: this.data.editor.text.x,
        y: this.data.editor.text.y
      },
      text: this.data.editor.text.text
    };
  },
  beforeMount: function beforeMount() {
    this.l('beforeMount', this.id);
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];

      if (this.active) {
        c.push('-active');
      }

      return c.join(' ');
    },
    styleObject: function styleObject() {
      var s = {
        left: this.data.editor.text.x + 'px',
        top: this.data.editor.text.y + 'px'
      };
      return s;
    }
  },
  methods: {
    focus: function focus() {
      this.active = true;
      var editorData = siteData.store.state.photoeditordata;
      Vue.set(editorData.editor.text, 'focused', true);
      siteData.store.commit('updatePhotoEditorData', editorData);
    },
    blur: function blur() {
      this.active = false;
      var editorData = siteData.store.state.photoeditordata;
      Vue.set(editorData.editor.text, 'focused', false);
      siteData.store.commit('updatePhotoEditorData', editorData);
    },
    keypress: function keypress(event) {
      this.l('keypress', event);

      if (event.which == 13) {
        event.preventDefault();
        event.stopPropagation();
      }
    },
    keyup: function keyup(event) {
      this.l('keyup', event);
      var newText = this.$refs.field.innerText;
      this.data.editor.text.text = newText;
      var field = $(this.$refs.field);
      this.data.editor.text.width = field.width();
      this.data.editor.text.height = field.height();
    },
    onMouseDown: function onMouseDown(event) {
      if (this.data.mode !== 'edit') {
        return;
      }

      this.l('onMouseDown');
      this.mouseDown = true;
      $('body').bind('mousemove touchmove', this.touchMoveMethod);
      $('body').bind('mouseup touchend', this.touchEndMethod);
    },
    onMouseMove: function onMouseMove(event) {
      this.l('onMouseMove');

      if (this.mouseDown && !this.draggingHandle) {
        if (!this.dragging) {
          this.startDrag(event);
        }

        this.updateDrag(event);
      }
    },
    onMouseUp: function onMouseUp(event) {
      this.l('onMouseUp');
      this.mouseDown = false;
      $('body').unbind('mousemove touchmove', this.touchMoveMethod);
      $('body').unbind('mouseup touchend', this.touchEndMethod);

      if (this.dragging) {
        this.stopDrag();
      }
    },
    startDrag: function startDrag(event) {
      this.l('startDrag', event);
      this.dragging = true;
      this.drag.start.page = this.getPositionFromEvent(event); // this.drag.start.page.x = event.pageX; // Cursor position on the page.
      // this.drag.start.page.y = event.pageY;

      var position = $(this.$refs.canvas).offset(); // this.data.drag.start.x = position.left; //  Unicorn position within it's container.
      // this.data.drag.start.y = position.top;

      this.drag.start.x = this.drag.x; //  Unicorn position within it's container.

      this.drag.start.y = this.drag.y;
    },
    updateDrag: function updateDrag(event) {
      this.drag.now = this.getPositionFromEvent(event); // this.drag.now.x = event.pageX;
      // this.drag.now.y = event.pageY;

      var deltaX = this.drag.now.x - this.drag.start.page.x;
      var deltaY = this.drag.now.y - this.drag.start.page.y;
      var x = this.drag.start.x + deltaX;
      var y = this.drag.start.y + deltaY;
      this.drag.x = x;
      this.drag.y = y;
      this.data.editor.text.x = x;
      this.data.editor.text.y = y;
      this.l('updateDrag', event);
      this.l('now', this.drag.now);
      this.l('start', this.drag.start);
      this.l('x', this.drag.x);
      this.l('y', this.drag.y); // this.e.canvas.css({
      //     left: x+'px',
      //     top: y+'px'
      // });
    },
    stopDrag: function stopDrag(event) {
      this.l('stopDrag');
      this.dragging = false;
    },
    getPositionFromEvent: function getPositionFromEvent(event) {
      var result = null;

      if (event.pageX) {
        result = {
          x: event.pageX,
          y: event.pageY
        };
      } else {
        result = {
          x: event.originalEvent.touches[0].screenX,
          y: event.originalEvent.touches[0].screenY
        };
      }

      return result;
    }
  }
});
"use strict";

Vue.component('photo-editor-unicorn-handle', {
  template: "\n        <button \n            ref=\"canvas\"\n            :class=\"classObject\"\n            aria-label=\"Click to resize\"\n            @mousedown=\"onMouseDown\"\n            @touchstart=\"onMouseDown\"\n        >\n            <div class=\"wrap\">\n                <div class=\"content\">\n\n                </div>\n            </div>\n        </button>\n    ",
  props: ['data', 'editorData'],
  data: function data() {
    return {
      log: true,
      dragging: false,
      mouseDown: false,
      touchMoveMethod: $.proxy(this.onMouseMove, this),
      touchEndMethod: $.proxy(this.onMouseUp, this),
      drag: {
        start: {
          page: {
            x: 0,
            y: 0
          },
          x: 0,
          y: 0
        },
        now: {
          x: 0,
          y: 0
        },
        x: 0,
        y: 0
      }
    };
  },
  beforeMount: function beforeMount() {
    this.l('beforeMount', this.id);
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];

      if (this.dragging) {
        c.push('-dragging');
      }

      return c.join(' ');
    }
  },
  methods: {
    onMouseDown: function onMouseDown(event) {
      this.l('onMouseDown');
      this.mouseDown = true;
      $('body').bind('mousemove touchmove', this.touchMoveMethod);
      $('body').bind('mouseup touchend', this.touchEndMethod);
    },
    onMouseMove: function onMouseMove(event) {
      // this.l('onMouseMove');
      event.preventDefault();
      event.stopPropagation();

      if (this.mouseDown) {
        if (!this.dragging) {
          this.startDrag(event);
        }

        this.updateDrag(event);
      }
    },
    onMouseUp: function onMouseUp(event) {
      this.l('onMouseUp');
      this.mouseDown = false;
      $('body').unbind('mousemove touchmove', this.touchMoveMethod);
      $('body').unbind('mouseup touchend', this.touchEndMethod);

      if (this.dragging) {
        this.stopDrag();
      }
    },
    startDrag: function startDrag(event) {
      this.l('startDrag', event);
      this.dragging = true;
      this.$emit('startDrag');
      this.drag.start.page = this.getPositionFromEvent(event); // this.drag.start.page.x = event.pageX; // Cursor position on the page.
      // this.drag.start.page.y = event.pageY;

      var position = $(this.$refs.canvas).offset(); // this.data.drag.start.x = position.left; //  Unicorn position within it's container.
      // this.data.drag.start.y = position.top;

      this.drag.start.x = this.drag.x; //  Unicorn position within it's container.

      this.drag.start.y = this.drag.y;
    },
    updateDrag: function updateDrag(event) {
      // this.l('updateDrag', this.data);
      // this.drag.now.x = event.pageX;
      // this.drag.now.y = event.pageY;
      // var deltaX = this.drag.now.x - this.drag.start.page.x;
      // var deltaY = this.drag.now.y - this.drag.start.page.y;
      // var x = this.drag.start.x + deltaX;
      // var y = this.drag.start.y + deltaY;
      // this.drag.x = x;
      // this.drag.y = y;
      // this.l('now', this.drag.now);
      // this.l('start', this.drag.start);
      // this.l('x', this.drag.x);
      // this.l('y', this.drag.y);
      var cursorPosition = this.getPositionFromEvent(event); // Calculate distance between unicorn center and cursor position.

      var x = cursorPosition.x - this.editorData.editor.x;
      var y = cursorPosition.y - this.editorData.editor.y;
      var deltaX = x - this.data.x;
      var deltaY = y - this.data.y;
      var delta = Math.sqrt(deltaX * deltaX + deltaY * deltaY); // Calculate angle.
      // cos alpha = an / hyp
      // alpha = Math.acos(an / hyp) * 180 / Math.PI

      var angle = Math.acos(deltaX / delta) * 180 / Math.PI;

      if (deltaY < 0) {
        angle *= -1;
      }

      angle -= 45;
      this.l('deltaX', deltaX);
      this.l('deltaY', deltaY);
      this.l('angle', angle);
      this.data.rotation = angle; // Calculate scale.

      var imageWidth = this.data.imageSize.width;
      var imageHeight = this.data.imageSize.height;
      var imageDelta = Math.sqrt(imageWidth * imageWidth + imageHeight * imageHeight) / 2;
      var scale = delta / imageDelta;
      this.data.scale = scale;
      this.l('a', imageWidth, imageHeight, imageDelta, delta);
      this.l('scale', scale); // this.e.canvas.css({
      //     left: x+'px',
      //     top: y+'px'
      // });
    },
    stopDrag: function stopDrag(event) {
      this.l('stopDrag');
      this.$emit('stopDrag');
      this.dragging = false;
    },
    getPositionFromEvent: function getPositionFromEvent(event) {
      var result = null;

      if (event.pageX) {
        result = {
          x: event.pageX,
          y: event.pageY
        };
      } else {
        result = {
          x: event.originalEvent.touches[0].screenX,
          y: event.originalEvent.touches[0].screenY
        };
      }

      return result;
    }
  }
});
"use strict";

Vue.component('photo-editor-unicorn', {
  template: "\n        <div \n            ref=\"canvas\"\n            :class=\"classObject\" \n            :style=\"styleObject\"\n        >\n            <div class=\"wrap\">\n                <div\n                    class=\"content\"\n                    @mousedown=\"onMouseDown\"\n                    @touchstart=\"onMouseDown\"\n                    @click=\"onClick\"\n                    @tap=\"onClick\"\n                >\n                    <img\n                        ref=\"image\"\n                        :src=\"data.file\"\n                        draggable=\"false\"\n                        alt=\"Unicorn or rainbow\"\n                        :width=\"imageWidth\"\n                        :height=\"imageHeight\"\n                        @load=\"imageLoaded\"\n                    >\n                    <photo-editor-unicorn-handle\n                        v-if=\"selected\"\n                        :data=\"data\"\n                        :editorData=\"editorData\"\n                        @startDrag=\"handleStartDrag\"\n                        @stopDrag=\"handleStopDrag\"\n                    />\n                </div>\n            </div>\n        </div>\n    ",
  props: ['data', 'canvasWidth', 'canvasHeight', 'activeId', 'editorData'],
  data: function data() {
    return {
      log: true,
      loaded: false,
      dragging: false,
      mouseDown: false,
      touchMoveMethod: $.proxy(this.onMouseMove, this),
      touchEndMethod: $.proxy(this.onMouseUp, this),
      draggingHandle: false,
      imageWidth: null,
      imageHeight: null
    };
  },
  beforeMount: function beforeMount() {
    this.l('beforeMount', this.id);
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];

      if (this.loaded) {
        c.push('-loaded');
      }

      if (this.dragging || this.draggingHandle) {
        c.push('-dragging');
      }

      if (this.data.id == this.activeId) {
        c.push('-active');
      }

      return c.join(' ');
    },
    styleObject: function styleObject() {
      var s = {
        left: this.data.x + 'px',
        top: this.data.y + 'px',
        transform: 'scale(' + this.data.scale + ', ' + this.data.scale + ') rotate(' + this.data.rotation + 'deg)'
      };
      return s;
    },
    selected: function selected() {
      return this.data.id == this.activeId;
    }
  },
  methods: {
    imageLoaded: function imageLoaded(event) {
      this.l('imageLoaded', event, this.$refs.image);
      this.data.image = this.$refs.image;
      this.data.imageSize.width = this.$refs.image.naturalWidth;
      this.data.imageSize.height = this.$refs.image.naturalHeight;
      this.imageWidth = this.$refs.image.naturalWidth;
      this.imageHeight = this.$refs.image.naturalHeight;
      this.l('this.data', this.data);
      setTimeout($.proxy(this.setLoaded, this), 50);
    },
    setLoaded: function setLoaded() {
      this.l('setLoaded');
      this.loaded = true;
      this.data.x = Math.random() * this.editorData.editor.width;
      this.data.y = Math.random() * this.editorData.editor.height;
      this.data.rotation = Math.random() * 10 - 5;
      this.data.scale = Math.random() * 0.5 + 0.5;
    },
    onClick: function onClick() {
      this.$emit('select', this.data.id);
    },
    onMouseDown: function onMouseDown(event) {
      this.l('onMouseDown');
      this.mouseDown = true;
      $('body').bind('mousemove touchmove', this.touchMoveMethod);
      $('body').bind('mouseup touchend', this.touchEndMethod);
    },
    onMouseMove: function onMouseMove(event) {
      this.l('onMouseMove');

      if (this.mouseDown && !this.draggingHandle) {
        if (!this.dragging) {
          this.startDrag(event);
        }

        this.updateDrag(event);
      }
    },
    onMouseUp: function onMouseUp(event) {
      this.l('onMouseUp');
      this.mouseDown = false;
      $('body').unbind('mousemove touchmove', this.touchMoveMethod);
      $('body').unbind('mouseup touchend', this.touchEndMethod);

      if (this.dragging) {
        this.stopDrag();
      }
    },
    startDrag: function startDrag(event) {
      this.l('startDrag', event);
      this.dragging = true;
      this.data.drag.start.page = this.getPositionFromEvent(event); // this.data.drag.start.page.x = event.pageX; // Cursor position on the page.
      // this.data.drag.start.page.y = event.pageY;

      var position = $(this.$refs.canvas).offset(); // this.data.drag.start.x = position.left; //  Unicorn position within it's container.
      // this.data.drag.start.y = position.top;

      this.data.drag.start.x = this.data.x; //  Unicorn position within it's container.

      this.data.drag.start.y = this.data.y;
    },
    updateDrag: function updateDrag(event) {
      this.data.drag.now = this.getPositionFromEvent(event); // this.data.drag.now.x = event.pageX;
      // this.data.drag.now.y = event.pageY;

      var deltaX = this.data.drag.now.x - this.data.drag.start.page.x;
      var deltaY = this.data.drag.now.y - this.data.drag.start.page.y;
      var x = this.data.drag.start.x + deltaX;
      var y = this.data.drag.start.y + deltaY;
      this.data.x = x;
      this.data.y = y;
      this.l('updateDrag', event);
      this.l('now', this.data.drag.now);
      this.l('start', this.data.drag.start);
      this.l('x', this.data.x);
      this.l('y', this.data.y); // this.e.canvas.css({
      //     left: x+'px',
      //     top: y+'px'
      // });
    },
    stopDrag: function stopDrag(event) {
      this.l('stopDrag');
      this.dragging = false;
    },
    handleStartDrag: function handleStartDrag() {
      this.draggingHandle = true;
    },
    handleStopDrag: function handleStopDrag() {
      this.draggingHandle = false;
    },
    getPositionFromEvent: function getPositionFromEvent(event) {
      var result = null;

      if (event.pageX) {
        result = {
          x: event.pageX,
          y: event.pageY
        };
      } else {
        result = {
          x: event.originalEvent.touches[0].screenX,
          y: event.originalEvent.touches[0].screenY
        };
      }

      return result;
    }
  }
});
"use strict";

Vue.component('photo-editor-unicorns', {
  template: "\n        <div :class=\"classObject\" ref=\"canvas\">\n            <div class=\"wrap\">\n                <div class=\"content\">\n                    <photo-editor-unicorn\n                        v-for=\"(item, index) in data.editor.unicorns\"\n                        :key=\"index\"\n                        :data=\"item\"\n                        :canvasWidth=\"canvasWidth\"\n                        :canvasHeight=\"canvasHeight\"\n                        :activeId=\"activeId\"\n                        :editorData=\"data\"\n                        @select=\"select\"\n                    />\n                </div>\n            </div>\n        </div>\n    ",
  props: ['data'],
  data: function data() {
    return {
      log: true,
      activeId: null
    };
  },
  beforeMount: function beforeMount() {
    this.l('beforeMount', this.id);
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];
      return c.join(' ');
    },
    canvasWidth: function canvasWidth() {
      return this.$refs.canvas.offsetWidth;
    },
    canvasHeight: function canvasHeight() {
      return this.$refs.canvas.offsetHeight;
    }
  },
  methods: {
    select: function select(id) {
      if (this.data.mode !== 'edit') {
        return;
      }

      this.l('select', id);
      this.activeId = id;
    }
  }
});
"use strict";

Vue.component('photo-editor-frame', {
  template: "\n        <div :class=\"classObject\" :style=\"styleObject\">\n            <div class=\"wrap\">\n                <div class=\"content\">\n                    <photo-editor-upload\n                        v-if=\"data.mode == 'upload'\" \n                        :data=\"data\"\n                    />\n                    <photo-editor \n                        v-if=\"data.mode == 'edit' || data.mode == 'success'\" \n                        :data=\"data\"\n                    />\n                    <photo-editor-success \n                        v-if=\"data.mode == 'success'\"\n                        :data=\"data\"\n                    />\n                </div>\n            </div>\n        </div>\n    ",
  props: ['data'],
  data: function data() {
    return {
      log: true,
      windowHeight: null
    };
  },
  beforeMount: function beforeMount() {
    gbks.events.listen(gbks.event.Resize, $.proxy(this.resize, this), this.id);
    this.resize();
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];
      return c.join(' ');
    },
    styleObject: function styleObject() {
      var height = this.windowHeight - 100;
      return {
        height: height + 'px'
      };
    }
  },
  methods: {
    fileLoaded: function fileLoaded(data) {
      this.$emit('fileLoaded', data);
    },
    resize: function resize() {
      this.windowHeight = window.innerHeight;
    }
  }
});
"use strict";

Vue.component('photo-editor-coloring', {
  template: "\n        <div :class=\"classObject\" ref=\"container\">\n            <div class=\"wrap\">\n                <div class=\"content\">\n                    <canvas\n                        ref=\"canvas\"\n                        :width=\"canvasWidth\"\n                        :height=\"canvasHeight\"\n                        @mousedown=\"onMouseDown\"\n                        @touchstart=\"onMouseDown\"\n                    />\n                </div>\n            </div>\n        </div>\n    ",
  props: [],
  data: function data() {
    // console.log('coloring', siteData.store.state);
    return {
      log: !true,
      active: false,
      dragging: false,
      mouseDown: false,
      touchMoveMethod: $.proxy(this.onMouseMove, this),
      touchEndMethod: $.proxy(this.onMouseUp, this),
      position: null,
      previousPosition: null,
      previousLineWidth: null,
      sparkles: null
    };
  },
  beforeMount: function beforeMount() {
    this.l('beforeMount', this.id);
  },
  mounted: function mounted() {},
  watch: {
    data: function data(next, previous) {
      this.l('data', this.sparkles);

      if (this.data.editor.drawMode == 'draw' && !this.sparkles) {
        this.loadSparkles();
      }
    }
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];

      if (this.data.editor.mode !== 'draw') {
        c.push('-inactive');
      }

      return c.join(' ');
    },
    canvasWidth: function canvasWidth() {
      return this.data.editor.width;
    },
    canvasHeight: function canvasHeight() {
      return this.data.editor.height;
    },
    data: function data() {
      return siteData.store.state.photoeditordata;
    }
  },
  methods: {
    getPositionFromEvent: function getPositionFromEvent(event, position) {
      return gbks.helpers.getPositionFromEvent(event, position); // var result = null;
      // if(event.pageX) {
      //     result = {
      //         x: event.pageX - position.left,
      //         y: event.pageY - position.top
      //     }
      // } else {
      //     result = {
      //         x: event.originalEvent.touches[0].screenX - position.left,
      //         y: event.originalEvent.touches[0].screenY - position.top
      //     }
      // }
      // return result;
    },
    onMouseDown: function onMouseDown(event) {
      if (this.data.mode !== 'edit') {
        return;
      }

      this.mouseDown = true;
      var position = $(this.$refs.container).offset();
      this.position = this.getPositionFromEvent(event, position); // this.position = {
      //     x: event.pageX - position.left,
      //     y: event.pageY - position.top
      // }

      var color = this.data.editor.color;
      var opacity = this.data.editor.opacity;
      this.l('onMouseDown', color, opacity);
      var context = this.$refs.canvas.getContext('2d');

      if (this.data.editor.drawMode == 'sparkle') {
        this.drawSparkles(this.position.x, this.position.y);
      } else {
        if (this.data.editor.drawMode == 'erase') {
          context.globalCompositeOperation = 'destination-out';
        } else {
          context.globalCompositeOperation = 'source-over';
        }

        context.fillStyle = 'rgba(' + color[0] + ',' + color[1] + ',' + color[2] + ',' + opacity + ')';
        context.beginPath();
        context.arc(this.position.x, this.position.y, 2.5, 0, 2 * Math.PI);
        context.fill();
      }

      this.previousLineWidth = 5;
      $('body').bind('mousemove touchmove', this.touchMoveMethod);
      $('body').bind('mouseup touchend', this.touchEndMethod);
    },
    onMouseMove: function onMouseMove(event) {
      // this.l('onMouseMove');
      if (this.mouseDown) {
        if (!this.dragging) {
          this.startDrag(event);
        }

        this.updateDrag(event);
      }
    },
    onMouseUp: function onMouseUp(event) {
      this.l('onMouseUp');
      this.mouseDown = false;
      $('body').unbind('mousemove touchmove', this.touchMoveMethod);
      $('body').unbind('mouseup touchend', this.touchEndMethod);

      if (this.dragging) {
        this.stopDrag();
      }
    },
    startDrag: function startDrag(event) {
      this.l('startDrag', event);
      this.dragging = true; // this.drag.start.page.x = event.pageX; // Cursor position on the page.
      // this.drag.start.page.y = event.pageY;
      // this.drag.start.x = this.drag.x; //  Unicorn position within it's container.
      // this.drag.start.y = this.drag.y;
    },
    updateDrag: function updateDrag(event) {
      this.previousPosition = this.position;
      var position = $(this.$refs.container).offset(); // this.position = {
      //     x: event.pageX - position.left,
      //     y: event.pageY - position.top
      // }

      this.position = this.getPositionFromEvent(event, position);
      var color = this.data.editor.color;
      var opacity = this.data.editor.opacity;
      this.l('updateDrag', color, this.data);
      var deltaX = this.position.x - this.previousPosition.x;
      var deltaY = this.position.y - this.previousPosition.y;
      var delta = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      var lineWidth = Math.max(2, 10 - delta);
      lineWidth = this.previousLineWidth + (lineWidth - this.previousLineWidth) * 0.2;

      if (this.data.editor.drawMode == 'sparkle') {
        this.drawSparkles(this.position.x, this.position.y);
      } else {
        var context = this.$refs.canvas.getContext('2d');

        if (this.data.editor.drawMode == 'erase') {
          context.globalCompositeOperation = 'destination-out';
        } else {
          context.globalCompositeOperation = 'source-over';
        }

        context.strokeStyle = 'rgba(' + color[0] + ',' + color[1] + ',' + color[2] + ',' + opacity + ')';
        context.lineWidth = lineWidth;
        context.lineCap = 'round';
        context.beginPath();
        context.moveTo(this.previousPosition.x, this.previousPosition.y);
        context.lineTo(this.position.x, this.position.y);
        context.stroke();
      }

      this.previousLineWidth = lineWidth; // this.e.canvas.css({
      //     left: x+'px',
      //     top: y+'px'
      // });
    },
    stopDrag: function stopDrag(event) {
      // this.l('stopDrag');
      this.dragging = false;
    },
    loadSparkles: function loadSparkles() {
      this.l('loadSparkles');
      var sparkles = [],
          image;

      for (var i = 0; i < siteData.sparkles.length; i++) {
        image = new Image();
        image.src = siteData.sparkles[i].src;
        this.l('i', i, image);
        sparkles.push(image);
      }

      this.sparkles = sparkles;
    },
    drawSparkles: function drawSparkles(x, y) {
      this.l('drawSparkles');

      if (!this.sparkles) {
        this.loadSparkles();
      } else {
        if (Math.random() > 0.8) {
          return;
        }

        var sparkle = this.sparkles[Math.floor(Math.random() * this.sparkles.length)];
        this.l('sparkle', sparkle);
        var width = Math.random() * 30 + 10;
        var height = width * sparkle.height / sparkle.width;
        x += Math.random() * 40 - 20;
        y += Math.random() * 40 - 20;
        var context = this.$refs.canvas.getContext('2d');
        context.drawImage(sparkle, x - width / 2, y - height / 2, width, height);
      }
    }
  }
});
"use strict";

Vue.component('photo-editor-photo-display', {
  template: "\n        <div :class=\"classObject\">\n            <img\n                :src=\"data.file.dataUrl\"\n                :width=\"data.file.width\"\n                :height=\"data.file.height\"\n                :alt=\"data.file.name\"\n            >\n        </div>\n    ",
  props: ['data'],
  data: function data() {
    return {
      log: true
    };
  },
  beforeMount: function beforeMount() {
    this.l('beforeMount', this.data);
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];
      return c.join(' ');
    }
  },
  methods: {}
});
"use strict";

Vue.component('photo-editor-share-options', {
  template: "\n        <div :class=\"classObject\">\n            <div class=\"wrap\">\n                <div class=\"content\">\n                    <h1>Woohoo!!!</h1>\n                    <p class=\"-copy\">Your image turned out so amazing, now go and share the happiness with he world! You can always view it at this link:</p>\n                    <a\n                        :href=\"link\" \n                        target=\"_blank\"\n                        @click=\"clickUrl\"\n                    >{{ link }}</a>\n\n                    <div class=\"-share-options\">\n                        <a\n                            role=\"button\"\n                            :href=\"data.upload.data.image\"\n                            download\n                            @click=\"download\"\n                        >Download image</a>\n                        <button\n                            v-if=\"supportsWebShare\"\n                            @click=\"webshare\"\n                        >Share image</button>\n                    </div>\n\n                    <div class=\"-next-options\">\n                        <button\n                            href=\"#\"\n                            @click.prevent=\"again\"\n                        >Cornify another image</button>\n                        <router-link\n                            to=\"/\"\n                            @click.native=\"done\"\n                        >I'm done for now</router-link>\n                    </div>\n                </div>\n            </div>\n        </div>\n    ",
  props: ['data'],
  data: function data() {
    return {
      log: !true
    };
  },
  beforeMount: function beforeMount() {
    this.l('beforeMount', this.id);
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];
      return c.join(' ');
    },
    supportsWebShare: function supportsWebShare() {
      return window.navigator.share ? true : false;
    },
    link: function link() {
      return this.data.upload.data.url;
    }
  },
  methods: {
    download: function download() {
      trackman.event('photoeditor', 'share-options', 'download');
    },
    webshare: function webshare() {
      trackman.event('photoeditor', 'share-options', 'webshare');
      navigator.share({
        title: this.data.upload.caption,
        url: this.data.upload.data.url
      });
    },
    again: function again() {
      trackman.event('photoeditor', 'share-options', 'again');
      gbks.events.call('photo-editor-reset');
    },
    clickUrl: function clickUrl() {
      trackman.event('photoeditor', 'share-options', 'url');
    },
    done: function done() {
      trackman.event('photoeditor', 'share-options', 'done');
    }
  }
});
"use strict";

Vue.component('photo-editor-share-question', {
  template: "\n        <div\n            :class=\"classObject\"\n            role=\"dialog\" \n            aria-labelledby=\"photoEditorShareQuestionTitle\"\n        >\n            <div class=\"wrap\">\n                <div class=\"content\">\n                    <div class=\"-name\">\n                        <h2 id=\"photoEditorShareQuestionTitle\">What's your lovely&nbsp;name?</h2>\n                        <input\n                            type=\"text\"\n                            v-model=\"name\"\n                            aria-labelledby=\"photoEditorShareQuestionTitle\"\n                            placeholder=\"Enter your name here...\"\n                        />\n                    </div>\n\n                    <div class=\"-approval\">\n                        <p>Can we post this for others to&nbsp;see?</p>\n                        <button\n                            :class=\"approved ? '-active' : ''\"\n                            :aria-pressed=\"approved\" \n                            @click=\"approve\"\n                        >Yes, sure</button>\n                        <button\n                            :class=\"approved ? '' : '-active'\"\n                            :aria-pressed=\"!approved\" \n                            @click=\"decline\"\n                        >No, thanks</button>\n                    </div>\n\n                    <button\n                        class=\"-done\"\n                        @click=\"next\"\n                    >Next</button>\n                </div>\n            </div>\n        </div>\n    ",
  props: [],
  data: function data() {
    return {
      log: !true,
      name: '',
      approved: true
    };
  },
  beforeMount: function beforeMount() {
    this.l('beforeMount', this.id);
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];
      return c.join(' ');
    }
  },
  methods: {
    approve: function approve() {
      this.approved = true;
    },
    decline: function decline() {
      this.approved = false;
    },
    next: function next() {
      var editorData = siteData.store.state.photoeditordata;
      this.l('next', editorData);
      Vue.set(editorData.upload, 'name', this.name);
      Vue.set(editorData.upload, 'public', this.approved);
      siteData.store.commit('updatePhotoEditorData', editorData);
      this.$emit('next');
    }
  }
});
"use strict";

Vue.component('photo-editor-success', {
  template: "\n        <div :class=\"classObject\">\n            <div class=\"wrap\">\n                <div class=\"content\">\n                    <photo-editor-share-question\n                        v-if=\"mode == 'approve'\"\n                        @next=\"next\"\n                    />\n                    <photo-editor-share-options\n                        v-else\n                        :data=\"data\"\n                    />\n                </div>\n            </div>\n        </div>\n    ",
  props: ['data'],
  data: function data() {
    return {
      log: !true,
      mode: 'approve'
    };
  },
  beforeMount: function beforeMount() {
    this.l('beforeMount', this.id);
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];
      return c.join(' ');
    }
  },
  methods: {
    next: function next(data) {
      gbks.cornify.photoEditorUpdater.update();
      trackman.event('photoeditor', 'success', 'next');
      this.mode = 'share';
    }
  }
});
"use strict";

Vue.component('photo-editor-upload-progress', {
  template: "\n        <div :class=\"classObject\">\n            <div class=\"wrap\">\n                <div class=\"content\">\n                    <p>Uploading...</p>\n                </div>\n            </div>\n        </div>\n    ",
  props: [],
  data: function data() {
    return {
      log: !true
    };
  },
  beforeMount: function beforeMount() {
    this.l('beforeMount', this.id);
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];
      return c.join(' ');
    }
  },
  methods: {}
});
"use strict";

Vue.component('photo-editor-upload-prompt', {
  template: "\n        <div :class=\"classObject\">\n            <label for=\"input--photo\">\n                <input \n                    ref=\"fileSelector\"\n                    type=\"file\" \n                    name=\"photo\" \n                    id=\"input--photo\"\n                    @click=\"clickInput\"\n                    @change.prevent=\"changeInput\"\n                >\n                <div class=\"copy\">\n                    <img src=\"/assets/photo/snaps.png\" width=\"178\" height=\"83\" alt=\"Snaps\">\n                    <h1 v-html=\"label\" />\n                    <p v-if=\"!isMobile\">Or drag and drop it here</p>\n                </div>\n            </label>\n        </div>\n    ",
  props: [],
  data: function data() {
    return {
      log: !true,
      active: false,
      files: null,
      fileDropper: null
    };
  },
  beforeMount: function beforeMount() {
    this.l('beforeMount', this.id);
    this.fileDropper = new gbks.tools.FileDropper();
    this.fileDropper.init($.proxy(this.onDropFile, this));
  },
  beforeDestroy: function beforeDestroy() {
    this.fileDropper.destroy();
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];

      if (this.active) {
        c.push('-active');
      }

      if (this.files) {
        c.push('-has-files');
      }

      return c.join(' ');
    },
    isMobile: function isMobile() {
      return siteData.store.state.isMobile;
    },
    label: function label() {
      return this.isMobile ? 'Tap here to select&nbsp;a&nbsp;photo</h1' : 'Click here to select&nbsp;a&nbsp;photo</h1';
    }
  },
  methods: {
    clickInput: function clickInput() {
      this.l('clickInput');
      this.active = true;
    },
    changeInput: function changeInput() {
      this.l('changeInput', this.$refs.fileSelector, $(this.$refs.fileSelector));
      var fileSelector = $(this.$refs.fileSelector)[0];
      var files = fileSelector.files;
      this.l('files', files);

      if (files && files[0]) {
        this.files = files; // var reader = new FileReader();
        // reader.onload = $.proxy(this.onFileRead, this, files[0], reader);
        // reader.readAsDataURL(files[0]);

        this.$emit('loadFile', files[0]);
        trackman.event('photoeditor', 'select-file');
      } else {
        this.active = false;
        this.files = null;
      }
    },
    // onFileRead: function(file, reader, event) {
    //     this.l('onFileRead', arguments);
    //     var result = event.target.result;
    //     var image = new Image();
    //     image.onload = $.proxy(this.onLoadImage, this, file, reader, image);
    //     image.src = reader.result;
    // },
    // onLoadImage: function(file, reader, image, event) {
    //     this.l('onLoadImage', file, reader, image, event);
    //     console.log('name', file.name);
    //     console.log('type', file.type);
    //     console.log('size', file.size);
    //     console.log('pixels', image.width, image.height);
    //     this.$emit('fileLoaded', {
    //         name: file.name,
    //         type: file.type,
    //         size: file.size,
    //         width: image.width,
    //         height: image.height,
    //         dataUrl: reader.result
    //     });
    // },
    onDropFile: function onDropFile(file, reader, image, event) {
      this.l('onDropFile', arguments);
      this.$emit('dropFile', {
        file: file,
        reader: reader,
        image: image,
        event: event
      });
      trackman.event('photoeditor', 'drop-file'); // this.onLoadImage(file, reader, image, event);
    }
  }
});
"use strict";

Vue.component('photo-editor-upload', {
  template: "\n        <div :class=\"classObject\">\n            <div class=\"wrap\">\n                <div class=\"content\">\n                    <photo-editor-upload-progress\n                        v-if=\"mode == 'upload'\"\n                        :data=\"data\"\n                    />\n                    <photo-editor-upload-prompt\n                        v-else\n                        :data=\"data\"\n                        @loadFile=\"loadFile\"\n                        @dropFile=\"dropFile\"\n                    />\n                </div>\n            </div>\n        </div>\n    ",
  props: ['data'],
  data: function data() {
    return {
      log: true,
      mode: 'prompt'
    };
  },
  beforeMount: function beforeMount() {
    this.l('beforeMount', this.id);
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];
      return c.join(' ');
    }
  },
  methods: {
    loadFile: function loadFile(file) {
      this.l('loadFile', file);
      this.mode = 'upload';
      var reader = new FileReader();
      reader.onload = $.proxy(this.onFileRead, this, file, reader);
      reader.readAsDataURL(file);
    },
    onFileRead: function onFileRead(file, reader, event) {
      this.l('onFileRead', arguments);
      var result = event.target.result;
      var image = new Image();
      image.onload = $.proxy(this.onLoadImage, this, file, reader, image);
      image.onerror = $.proxy(this.onLoadImageError, this, file, reader, image);
      image.src = reader.result;
    },
    onLoadImage: function onLoadImage(file, reader, image, event) {
      this.l('onLoadImage', file, reader, image, event);
      this.l('width', image.width);
      this.l('height', image.height);
      var data = {
        file: file,
        reader: reader,
        image: image,
        name: file.name,
        type: file.type,
        size: file.size,
        width: image.width,
        height: image.height,
        dataUrl: reader.result
      };
      this.loadFileForOrientation(data);
    },
    onOrientationFixed: function onOrientationFixed(data) {
      this.l('onOrientationFixed', data);
      this.l('width', data.width);
      this.l('height', data.height);
      this.saveLoadedFile({
        name: data.name,
        type: data.type,
        size: data.size,
        width: data.width,
        height: data.height,
        dataUrl: data.dataUrl
      });
    },
    // Helper for fixing EXIF rotation.
    loadFileForOrientation: function loadFileForOrientation(data) {
      var reader = new FileReader();
      reader.onload = $.proxy(this.onLoadFileForOrientation, this, data);
      reader.readAsArrayBuffer(data.file);
    },
    onLoadFileForOrientation: function onLoadFileForOrientation(data, event) {
      var orientation = this.getOrientation(event);
      this.l('onLoadFileForOrientation', orientation);
      data.orientation = orientation;

      if (orientation > 1) {
        this.resetOrientation(data);
      }

      this.onOrientationFixed(data);
    },
    getOrientation: function getOrientation(event) {
      var view = new DataView(event.target.result);

      if (view.getUint16(0, false) != 0xFFD8) {
        return -2;
      }

      var length = view.byteLength,
          offset = 2;

      while (offset < length) {
        if (view.getUint16(offset + 2, false) <= 8) {
          return -1;
        }

        var marker = view.getUint16(offset, false);
        offset += 2;

        if (marker == 0xFFE1) {
          if (view.getUint32(offset += 2, false) != 0x45786966) {
            return -1;
          }

          var little = view.getUint16(offset += 6, false) == 0x4949;
          offset += view.getUint32(offset + 4, little);
          var tags = view.getUint16(offset, little);
          offset += 2;

          for (var i = 0; i < tags; i++) {
            if (view.getUint16(offset + i * 12, little) == 0x0112) {
              return view.getUint16(offset + i * 12 + 8, little);
            }
          }
        } else if ((marker & 0xFF00) != 0xFF00) {
          break;
        } else {
          offset += view.getUint16(offset, false);
        }
      }

      return -1;
    },
    resetOrientation: function resetOrientation(data) {
      this.l('resetOrientation', data);
      var width = data.width,
          height = data.height,
          canvas = document.createElement('canvas'),
          ctx = canvas.getContext("2d"); // $(canvas).attr('id', 'orientation-canvas'); 
      // $(canvas).css({
      //     position: 'absolute',
      //     left: '5px',
      //     top: '5px',
      //     transform: 'scale(0.2, 0.2)'
      // });
      // $('body').append(canvas);
      // set proper canvas dimensions before transform & export

      if (4 < data.orientation && data.orientation < 9) {
        canvas.width = height;
        canvas.height = width;
        data.width = height;
        data.height = width;
      } else {
        canvas.width = width;
        canvas.height = height;
        data.width = height;
        data.height = width;
      } // transform context before drawing image


      switch (data.orientation) {
        case 2:
          ctx.transform(-1, 0, 0, 1, width, 0);
          break;

        case 3:
          ctx.transform(-1, 0, 0, -1, width, height);
          break;

        case 4:
          ctx.transform(1, 0, 0, -1, 0, height);
          break;

        case 5:
          ctx.transform(0, 1, 1, 0, 0, 0);
          break;

        case 6:
          ctx.transform(0, 1, -1, 0, height, 0);
          break;

        case 7:
          ctx.transform(0, -1, -1, 0, height, width);
          break;

        case 8:
          ctx.transform(0, -1, 1, 0, 0, width);
          break;

        default:
          break;
      } // draw image


      ctx.drawImage(data.image, 0, 0); // export base64

      data.dataUrl = canvas.toDataURL();
    },
    // Image loading.
    onLoadImageError: function onLoadImageError(error) {
      this.l('onLoadImageError', error);
    },
    dropFile: function dropFile(data) {
      this.l('dropFile', data); // this.$emit('fileLoaded', {
      //     name: data.file.name,
      //     type: data.file.type,
      //     size: data.file.size,
      //     width: data.image.width,
      //     height: data.image.height,
      //     dataUrl: data.reader.result
      // });

      this.saveLoadedFile({
        name: data.file.name,
        type: data.file.type,
        size: data.file.size,
        width: data.image.width,
        height: data.image.height,
        dataUrl: data.reader.result
      });
    },
    saveLoadedFile: function saveLoadedFile(data) {
      Vue.set(this.data, 'file', data);
      Vue.set(this.data, 'mode', 'edit');
      siteData.store.commit('updatePhotoEditorData', this.data);
    }
  }
});
"use strict";

Vue.component('photo-editor', {
  template: "\n        <div :class=\"classObject\" :style=\"styleObject\">\n            <div class=\"wrap\">\n                <div class=\"content\">\n                    <photo-editor-photo-display\n                        :data=\"data\"\n                    />\n                    <photo-editor-unicorns\n                        :data=\"data\"\n                    />\n                    <photo-editor-coloring\n                        :data=\"data\"\n                    />\n                    <photo-editor-text\n                        :data=\"data\"\n                    />\n                </div>\n            </div>\n        </div>\n    ",
  props: ['data'],
  data: function data() {
    console.log('photo-editor', this.data);
    return {
      log: true,
      size: null
    };
  },
  beforeMount: function beforeMount() {
    this.l('beforeMount', this.data);
    this.calculateSize();
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];
      return c.join(' ');
    },
    styleObject: function styleObject() {
      var s = {};

      if (this.size) {
        s = {
          left: this.size.left + 'px',
          top: this.size.top + 'px',
          width: this.size.width + 'px',
          height: this.size.height + 'px'
        };
      }

      return s;
    }
  },
  methods: {
    calculateSize: function calculateSize() {
      var windowWidth = $(window).width();
      var windowHeight = $(window).height();
      var imageWidth = this.data.file.width;
      var imageHeight = this.data.file.height;
      var imageRatio = imageWidth / imageHeight;
      var topMargin = 50;
      var bottomMargin = 50;
      var leftMargin = 20;
      var rightMargin = 20;
      var maxWidth = windowWidth - leftMargin - rightMargin;
      var maxHeight = windowHeight - topMargin - bottomMargin;
      var newWidth = imageWidth;
      var newHeight = imageHeight;

      if (newWidth > maxWidth) {
        newWidth = maxWidth;
        newHeight = newWidth / imageRatio;
      }

      if (newHeight > maxHeight) {
        newHeight = maxHeight;
        newWidth = newHeight * imageRatio;
      }

      var left = leftMargin + (maxWidth - newWidth) / 2;
      var top = topMargin + (maxHeight - newHeight) / 2;
      var s = {
        left: left,
        top: top,
        width: newWidth,
        height: newHeight
      };
      this.data.editor.x = left;
      this.data.editor.y = top;
      this.data.editor.width = newWidth;
      this.data.editor.height = newHeight; // Place the text.

      if (!this.data.editor.text.x) {
        this.data.editor.text.x = newWidth / 2;
        this.data.editor.text.y = 50;
      }

      this.size = s;
    }
  }
});
"use strict";

var gbks = gbks || {};
gbks.cornify = gbks.cornify || {};
gbks.cornify.composer = {
  data: null,
  canvas: null,
  context: null,
  compose: function compose(data) {
    this.data = data;

    if (!this.canvas) {
      this.canvas = $('<canvas class="composer"></canvas>');
      this.context = this.canvas[0].getContext('2d');
      $('body').append(this.canvas);
    }

    console.log('composer', data);
    var scale = data.file.width / data.editor.width;
    this.canvas.attr({
      width: data.editor.width,
      height: data.editor.height
    }); // Draw the image.

    var image = new Image();
    image.src = data.file.dataUrl;
    this.context.drawImage(image, 0, 0, data.editor.width, data.editor.height); // Draw unicorns.

    this.drawUnicorns(); // Draw coloring

    this.drawColoring(); // Draw the text.

    this.drawText();
    return this.prepareOutputData();
  },
  drawImage: function drawImage() {
    // context.drawImage(img,sx,sy,swidth,sheight,x,y,width,height);
    // context.drawImage(img,x,y,width,height);
    // context.drawImage(img,x,y);
    var image = this.data.selectedFileData;
    image = $('.image-display img')[0];
    var scale = this.canvasSize.width / this.imageSize.width;
    console.log('drawImage', scale);
    this.drawingScale = scale;
    this.context.scale(scale, scale);
    this.context.drawImage(image, 0, 0, this.imageSize.width, this.imageSize.height);
    this.context.scale(1 / scale, 1 / scale);
  },
  drawUnicorns: function drawUnicorns() {
    var i = 0,
        length = this.data.editor.unicorns.length,
        unicorn;

    for (; i < length; i++) {
      unicorn = this.data.editor.unicorns[i];
      this.drawUnicorn(unicorn);
    }
  },
  drawColoring: function drawColoring() {
    var canvas = $('.photo-editor-coloring canvas');
    var context = canvas[0].getContext('2d');
    console.log('drawColoring', canvas, context);
    this.context.drawImage(canvas[0], 0, 0, this.data.editor.width, this.data.editor.height);
  },
  drawUnicorn: function drawUnicorn(unicorn) {
    console.log('drawUnicorn', unicorn); // Get position and scale.

    var x = unicorn.x;
    var y = unicorn.y;
    var scale = unicorn.scale;
    var rotation = unicorn.rotation * Math.PI / 180; // x = 0;
    // y = 0;
    // Grab the image.

    var image = unicorn.image;
    var imageWidth = image.naturalWidth;
    var imageHeight = image.naturalHeight; // x -= imageWidth/2 * scale;
    // y -= imageHeight/2 * scale;

    var rotationOffsetX = -imageWidth / 2 * scale;
    var rotationOffsetY = -imageHeight / 2 * scale;
    console.log('drawUnicorn', x, y, scale, rotation); // Adjust context.

    this.context.translate(x, y);
    this.context.rotate(rotation);
    this.context.translate(rotationOffsetX, rotationOffsetY);
    this.context.scale(scale, scale); // Draw.

    this.context.drawImage(image, 0, 0, imageWidth, imageHeight); // Reset context.

    this.context.scale(1 / scale, 1 / scale);
    this.context.translate(-rotationOffsetX, -rotationOffsetY);
    this.context.rotate(-rotation);
    this.context.translate(-x, -y);
  },
  drawText: function drawText() {
    var x = this.data.editor.text.x;
    var y = this.data.editor.text.y + this.data.editor.text.height / 2;
    console.log('drawText', this.data.editor.text);
    this.context.font = 'bold 48px Comic Sans';
    this.context.strokeStyle = "white";
    this.context.fillStyle = "#ff00ff";
    this.context.textAlign = "center"; // this.context.fontWeight = "bold";

    this.context.lineWidth = 8;
    this.context.strokeText(this.data.editor.text.text, x, y);
    this.context.fillText(this.data.editor.text.text, x, y);
  },
  prepareOutputData: function prepareOutputData() {
    var width = this.data.editor.width;
    var height = this.data.editor.height;
    var factor = width / height;
    var maxSize = 1200;
    var composedImage; // Redraw it smaller if needed

    if (width > maxSize || height > maxSize) {
      if (width > maxSize) {
        width = maxSize;
        height = width / factor;
      }

      if (height > maxSize) {
        height = maxSize;
        width = height * factor;
      }

      var canvas = $('<canvas width="' + width + '" height="' + height + '"></canvas>');
      var context = canvas[0].getContext('2d');
      context.drawImage(this.canvas[0], 0, 0, width, height);
      composedImage = canvas[0].toDataURL("image/jpeg", 0.85);
    } else {
      composedImage = this.canvas[0].toDataURL("image/jpeg", 0.85);
    } // console.log('prepareOutputData', composedImage, this.e.drawing);
    // this.data.composedImage = composedImage;
    // this.data.composedImageWidth = width;
    // this.data.composedImageHeight = height;


    console.log('prepareOutputData', this.data);
    return {
      composedImage: composedImage,
      width: width,
      height: height,
      text: this.data.editor.text
    };
  }
};
"use strict";

var gbks = gbks || {};
gbks.cornify = gbks.cornify || {};
gbks.cornify.photoEditorUpdater = {
  baseUrl: 'https://www.cornify.com/happyi/',
  update: function update() {
    var editorData = siteData.store.state.photoeditordata;
    console.log('ImageSaver.update', editorData.upload);
    trackman.event('photoeditor', 'saver', 'update');

    if (editorData.upload.success === true) {
      this.performUpdate();
    } else if (editorData.upload.started === true) {
      // Still saving
      this.startUpdateTimer();
    } else {
      // Didn't event start saving? Probably an error happening
      console.log('ImageSaver.update image not saving yet?');
      trackman.event('photoeditor', 'imagesaver', 'could not update');
    }
  },
  startUpdateTimer: function startUpdateTimer() {
    console.log('ImageSaver.startUpdateTimer');
    trackman.event('photoeditor', 'saver', 'startUpdateTimer');
    clearTimeout(this.updateTimer);
    this.updateTimer = setTimeout($.proxy(this.update, this), 500);
  },
  performUpdate: function performUpdate() {
    var editorData = siteData.store.state.photoeditordata;
    var data = {
      id: editorData.upload.data.id,
      name: editorData.upload.name,
      public: editorData.upload.public ? 1 : 0
    }; // Grab current time

    var d = new Date();
    this.updateStartTime = d.getTime();
    console.log('ImageSaver.performUpdate', data);

    if (config.isDev) {
      setTimeout($.proxy(this.onUpdateSuccess, this, {
        success: true,
        id: 467,
        name: 'Peter',
        public: 1
      }), 250);
    } else {
      $.ajax({
        url: this.baseUrl + 'updatephoto',
        data: data,
        dataType: 'jsonp',
        type: 'POST',
        success: $.proxy(this.onUpdateSuccess, this),
        error: $.proxy(this.onUpdateError, this)
      });
    }
  },
  onUpdateSuccess: function onUpdateSuccess(data) {
    console.log('ImageSaver.onUpdateSuccess', data); // Calculate time passed since start of this call

    var d = new Date();
    var t = d.getTime();
    var delta = t - this.updateStartTime;
    trackman.event('photoeditor', 'saver', 'updatesuccess', delta);
    this.updateEditorData({
      update: data
    });
    gbks.events.call(gbks.event.PhotoUploadError);
  },
  onUpdateError: function onUpdateError(data) {
    console.log('ImageSaver.onUpdateError', data); // Calculate time passed since start of this call

    var d = new Date();
    var t = d.getTime();
    var delta = t - this.updateStartTime;
    trackman.event('photoeditor', 'saver', 'updateerror', delta);
  },
  updateEditorData: function updateEditorData(props) {
    var editorData = siteData.store.state.photoeditordata;

    for (var i in props) {
      Vue.set(editorData.upload, i, props[i]);
    }

    siteData.store.commit('updatePhotoEditorData', editorData);
  }
};
"use strict";

var gbks = gbks || {};
gbks.cornify = gbks.cornify || {};
gbks.cornify.photoEditorSaver = {
  init: function init(data) {
    this.baseUrl = 'https://www.cornify.com/happyi/';
    console.log('ImageSaver.init', data);
    this.data = data;
    this.saveStartTime = null;
    this.updateStartTime = null;
    this.save();
  },
  updateEditorData: function updateEditorData(props) {
    var editorData = siteData.store.state.photoeditordata;

    for (var i in props) {
      Vue.set(editorData.upload, i, props[i]);
    }

    siteData.store.commit('updatePhotoEditorData', editorData);
  },
  save: function save() {
    var data = {
      photo: this.data.composedImage,
      width: this.data.width,
      height: this.data.height,
      text: this.data.text.text
    }; // if(this.data.text.text != this.data.text.defaultText) {
    //     data.caption = this.data.text.text;
    // }
    // this.data.save.isSaving = true;

    this.updateEditorData({
      started: true
    });
    trackman.event('photoeditor', 'saver', 'save');
    console.log('ImageSaver.save', data); // gbks.tools.track('Photoeditor', 'imagesaver', 'save');
    // Grab current time

    var d = new Date();
    this.saveStartTime = d.getTime();

    if (config.isDev) {
      setTimeout($.proxy(this.onSaveSuccess, this, {
        success: true,
        id: 467,
        width: 400,
        height: 400,
        caption: 'Test text!',
        file: 'file.jpg',
        image: 'https://www.cornify.com/cornfied/file.jpg',
        url: 'https://www.cornify.com/unicorn/' + 467
      }), 250);
    } else {
      $.ajax({
        url: this.baseUrl + 'uploadphoto',
        data: data,
        dataType: 'json',
        type: 'POST',
        method: 'POST',
        success: $.proxy(this.onSaveSuccess, this),
        error: $.proxy(this.onSaveError, this)
      });
    }
  },
  onSaveSuccess: function onSaveSuccess(data) {
    console.log('ImageSaver.onSaveSuccess', data); // Calculate time passed since start of this call

    var d = new Date();
    var t = d.getTime();
    var delta = t - this.saveStartTime;
    trackman.event('photoeditor', 'saver', 'savesuccess', delta);
    this.updateEditorData({
      success: true,
      data: data
    }); // this.data.save.isSaving = false;
    // this.data.save.isSaved = true;
    // this.data.save.success = true;
    // this.data.save.result = data;
    // gbks.events.call(gbks.event.PhotoUploadSuccess);
  },
  onSaveError: function onSaveError(data) {
    console.log('ImageSaver.onSaveError', data); // Calculate time passed since start of this call

    var d = new Date();
    var t = d.getTime();
    var delta = t - this.saveStartTime;
    trackman.event('photoeditor', 'saver', 'saveerror', delta);
    this.updateEditorData({
      error: true
    }); // this.data.save.isSaving = false;
    // this.data.save.isSaved = false;
    // this.data.save.success = false;
    // this.data.save.result = data;
    // gbks.events.call(gbks.event.PhotoUploadError);
  }
};
"use strict";

Vue.component('builder-editor', {
  template: "\n        <div :class=\"classObject\">\n            <div\n                class=\"sky\"\n                :style=\"skyStyle\"\n            />\n            <div\n                class=\"ground\"\n                :style=\"groundStyle\"\n            />\n            <div class=\"wrap\">\n                <div class=\"content\">\n                    <div class=\"top\">\n                        <div class=\"top-wrap\">\n                            <div class=\"top-content\">\n                                <builder-editor-background\n                                    :data=\"data\"\n                                />\n                                <builder-editor-display\n                                    :data=\"data\"\n                                />\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"options\" v-if=\"!disabled\">\n                        <div class=\"wrap\">\n                            <builder-editor-category-list\n                                v-if=\"activeTabId == 'parts'\"\n                                :activeColorId=\"activeColorId\"\n                                :data=\"data\"\n                                @clickCategory=\"clickCategory\"\n                                @clickColor=\"clickColor\"\n                            />\n                            <builder-editor-part-list\n                                v-if=\"!activeColorId\"\n                                :data=\"data\"\n                                @clickColor=\"clickColor\"\n                            />\n                            <builder-editor-color-list\n                                v-if=\"activeColorId\"\n                                :activeColorId=\"activeColorId\"\n                                :data=\"data\"\n                                @clickColor=\"clickColor\"\n                            />\n                            <div class=\"tip\" v-if=\"showTip\">\n                                <p>Get creative and make it yours!</p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <button\n                v-if=\"!disabled\"\n                :class=\"saveButtonClasses\"\n                type=\"button\"\n                @click=\"save\"\n            >Save</button>\n            <button\n                v-if=\"!disabled\"\n                class=\"-back\"\n                type=\"button\"\n                v-html=\"backIcon\"\n                aria-label=\"Cancel\"\n                @click=\"back\"\n            />\n        </div>\n    ",
  props: ['disabled'],
  data: function data() {
    return {
      log: true,
      activeTabId: 'parts',
      activeColorId: null,
      scrollMethod: $.proxy(this.scroll, this),
      showTip: false,
      backIcon: gbks.icons.arrowLeftBlueYellow
    };
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];

      if (this.disabled) {
        c.push('-disabled');
      }

      return c.join(' ');
    },
    data: function data() {
      return siteData.store.state.builderdata;
    },
    isMobile: function isMobile() {
      return siteData.store.state.isMobile;
    },
    saveButtonClasses: function saveButtonClasses() {
      var result = ['-save', 'funky-button', '-filled', '-pink'];

      if (this.isMobile) {
        result.push('-small');
      }

      return result.join(' ');
    },
    skyStyle: function skyStyle() {
      var style = {};

      if (this.backgroundPart) {
        style.backgroundColor = this.backgroundPart.sky;
      }

      return style;
    },
    groundStyle: function groundStyle() {
      var style = {};

      if (this.backgroundPart) {
        style.backgroundColor = this.backgroundPart.ground;
      }

      return style;
    },
    backgroundPart: function backgroundPart() {
      var result = null;
      var backgroundId = this.data.editor.parts.background; // this.l('backgroundId', backgroundId);

      if (backgroundId) {
        // this.l('sss', siteData.builder.categories.background);
        var part = siteData.builder.categories.background.parts[backgroundId];
        var file = part.slots.background.full; // this.l(backgroundId, part);

        result = part;
      }

      return result;
    }
  },
  methods: {
    setMode: function setMode(mode) {
      Vue.set(this.data, 'mode', 'edit');
      siteData.store.commit('updateBuilderData', this.data);
    },
    save: function save(event) {
      var position = gbks.helpers.getPositionFromEvent(event);
      position.y -= window.scrollY;
      gbks.events.call('glitter-sparkle', position);
      this.$emit('save');
      trackman.event('builder', 'editor', 'click-save'); // var data = gbks.cornify.builder.composer.compose(this.data);
      // // Store the data to upload
      // Vue.set(this.data.upload, 'image', data.image);
      // Vue.set(this.data.upload, 'width', data.width);
      // Vue.set(this.data.upload, 'height', data.height);
      // // Start the upload.
      // console.log('do iit now');
      // gbks.cornify.builder.saver.init(data);
      // // Change the display mode
      // Vue.set(this.data, 'mode', 'success');
      // siteData.store.commit('updateBuilderData', this.data);
    },
    reset: function reset() {
      var data = {
        mode: 'pick',
        // pick, success
        editor: {
          category: 'eyes',
          parts: {
            // List of parts the user has picked.
            eyes: 'eyes',
            body: 'body',
            alicorn: 'alicorn',
            hooves: 'hooves',
            hair: 'hair',
            tail: 'tail',
            mouth: 'mouth',
            nose: 'nose',
            'body-pattern': 'body-pattern-bottom',
            'body-prop': 'body-prop-heart',
            'body-prop-chest': null,
            'ears': 'ears',
            'cheek': 'cheek-dots',
            'head-pattern': 'head-pattern-light',
            'hair-prop': null,
            'tail-prop': null
          },
          colors: {}
        },
        upload: {
          image: null,
          width: null,
          height: null,
          text: null,
          started: false,
          success: false,
          error: false,
          data: null,
          name: null,
          public: null
        }
      };
      siteData.store.commit('updateBuilderData', data);
    },
    scroll: function scroll(event) {// event.preventDefault();
    },
    setActiveTabId: function setActiveTabId(tabId) {
      this.activeTabId = tabId;
    },
    clickColor: function clickColor(colorId) {
      this.l('clickColor', colorId);
      this.activeColorId = colorId; // this.activeTabId = 'colors';

      this.showTip = false;
    },
    clickCategory: function clickCategory(categoryId) {
      this.activeColorId = null; // this.activeTabId = 'colors';

      var data = siteData.store.state.builderdata;
      Vue.set(data.editor, 'category', categoryId);
      siteData.store.commit('updateBuilderData', data);
      this.showTip = false;
    },
    back: function back() {
      this.l('back');
      this.$emit('back');
    }
  }
});
"use strict";

Vue.component('builder-success', {
  template: "\n        <div :class=\"classObject\">\n            <div class=\"wrap\">\n                <div class=\"content\">\n                    <builder-success-name\n                        v-if=\"mode == 'name'\"\n                        @next=\"showApprove\"\n                    />\n                    <builder-success-question\n                        v-else-if=\"mode == 'approve'\"\n                        @next=\"saveAndNavigate\"\n                    />\n                </div>\n            </div>\n        </div>\n    ",
  props: ['data'],
  data: function data() {
    return {
      log: !true,
      mode: 'name'
    };
  },
  beforeMount: function beforeMount() {
    this.l('beforeMount', this.data);
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];
      return c.join(' ');
    },
    link: function link() {
      var result = '/younicorn/' + this.data.upload.data.id;
      var name = this.data.upload.data.name;

      if (name && name.length > 0) {
        if (name && name.length > 0) {
          var slug = gbks.helpers.stringToSlug(name);
          result += '/' + slug;
        }
      }

      return result;
    }
  },
  methods: {
    showApprove: function showApprove(data) {
      trackman.event('builder', 'success', 'approve');
      this.mode = 'approve';
    },
    showPrivacy: function showPrivacy(data) {
      trackman.event('builder', 'success', 'privacy');
      this.mode = 'privacy';
    },
    showOptions: function showOptions(data) {
      gbks.cornify.builder.updater.update();
      trackman.event('builder', 'success', 'share'); // Navigate to younicorn page.

      this.$router.push(this.link); // this.mode = 'share';
    },
    saveAndNavigate: function saveAndNavigate(data) {
      gbks.cornify.builder.updater.update();
      trackman.event('builder', 'success', 'share'); // Navigate to younicorn page.

      this.$router.push(this.link); // this.mode = 'share';
    }
  }
});
"use strict";

Vue.component('builder-template', {
  template: "\n        <div :class=\"classObject\">\n            <div class=\"wrap\">\n                <div class=\"content\">\n                    <h1><svg-text\n                        id=\"builderTemplateTitle\"\n                        :text=\"title\"\n                        :padding=\"10\"\n                        :autoResize=\"true\"\n                    /></h1>\n                    <p>Pick one to start with</p>\n                    <builder-template-list\n                        :activeTemplateId=\"templateId\"\n                        :isBitcorn=\"isBitcorn\"\n                        @pickTemplate=\"pickTemplate\"\n                    />\n                    <button\n                        class=\"funky-button -filled -pink\"\n                        type=\"button\"\n                        aria-label=\"Love it\"\n                        @click=\"next\"\n                    >Love it</button>\n                </div>\n            </div>\n            <button\n                class=\"-back\"\n                v-html=\"backIcon\"\n                aria-label=\"Cancel\"\n                @click=\"back\"\n            />\n        </div>\n    ",
  props: [],
  data: function data() {
    return {
      log: true,
      templateId: 'cornify',
      testWidth: null,
      testHeight: null,
      backIcon: gbks.icons.arrowLeftBlueYellow
    };
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];
      return c.join(' ');
    },
    title: function title() {
      return this.isBitcorn ? 'Design your Bitcorn' : 'Design your Younicorn';
    },
    isBitcorn: function isBitcorn() {
      var invoiceStatus = siteData.store.state.lightningInvoiceStatus;
      return invoiceStatus === 'paid';
    }
  },
  methods: {
    pickTemplate: function pickTemplate(templateId) {
      this.templateId = templateId;
    },
    next: function next(event) {
      var position = gbks.helpers.getPositionFromEvent(event);
      position.y -= window.scrollY;
      gbks.events.call('glitter-sparkle', position);
      this.$emit('pickTemplate', this.templateId);
    },
    back: function back() {
      this.$emit('back');
    }
  }
});
"use strict";

var gbks = gbks || {};
gbks.cornify = gbks.cornify || {};
gbks.cornify.builder = gbks.cornify.builder || {};
gbks.cornify.builder.saver = {
  log: true,
  init: function init(data) {
    this.baseUrl = 'https://www.cornify.com/happyi/';

    if (this.log) {
      console.log('BuilderSaver.init', data);
    }

    this.data = data;
    this.saveStartTime = null;
    this.updateStartTime = null;
    this.save();
  },
  updateBuilderData: function updateBuilderData(props) {
    var editorData = siteData.store.state.builderdata;

    for (var i in props) {
      Vue.set(editorData.upload, i, props[i]);
    }

    siteData.store.commit('updateBuilderData', editorData);
  },
  save: function save() {
    var composedImage = this.data.canvas.toDataURL("image/png");
    var editorData = siteData.store.state.builderdata;
    var backgroundSceneFile = null;
    var backgroundId = editorData.editor.parts.background;

    if (backgroundId) {
      var part = siteData.builder.categories.background.parts[backgroundId];
      var file = part.slots.background.scene;
      backgroundSceneFile = '/assets/builder/' + file;
    }

    var data = {
      younicorn: composedImage,
      width: this.data.canvasSize,
      height: this.data.canvasSize,
      bits: JSON.stringify(this.data.bits),
      background: backgroundSceneFile
    }; // if(this.data.text.text != this.data.text.defaultText) {
    //     data.caption = this.data.text.text;
    // }
    // this.data.save.isSaving = true;

    this.updateBuilderData({
      started: true
    });

    if (this.log) {
      console.log('BuilderSaver.save', data);
    } // gbks.tools.track('Photoeditor', 'imagesaver', 'save');
    // Grab current time


    var d = new Date();
    this.saveStartTime = d.getTime();

    if (config.isDev) {
      var tempId = 467;
      setTimeout($.proxy(this.onSaveSuccess, this, {
        success: true,
        id: tempId,
        width: 2000,
        height: 2000,
        file: 'file_' + tempId + '.jpg',
        image: 'https://www.cornify.com/younicorn-stable/file_' + tempId + '.jpg',
        url: 'https://www.cornify.com/younicorn/' + tempId
      }), 250);
    } else {
      $.ajax({
        url: this.baseUrl + 'uploadyounicorn',
        data: data,
        dataType: 'json',
        type: 'POST',
        method: 'POST',
        success: $.proxy(this.onSaveSuccess, this),
        error: $.proxy(this.onSaveError, this)
      });
    }
  },
  onSaveSuccess: function onSaveSuccess(data) {
    if (this.log) {
      console.log('BuilderSaver.onSaveSuccess', data);
    } // Calculate time passed since start of this call


    var d = new Date();
    var t = d.getTime();
    var delta = t - this.saveStartTime;
    trackman.event('builder', 'imagesaver', 'savesuccess', delta); // Favorite this corn.

    var hasExtension = siteData.store.state.chromeExtensionInstalled || siteData.store.state.firefoxExtensionInstalled;

    if (hasExtension) {
      gbks.browser.extension.addYounicorn(data.id);
    }

    var younicorns = siteData.store.state.bookmarkletYounicorns;
    younicorns.push(data.id);
    siteData.store.commit('updateBookmarkletYounicorns', younicorns);
    this.updateBuilderData({
      success: true,
      data: data
    }); // this.data.save.isSaving = false;
    // this.data.save.isSaved = true;
    // this.data.save.success = true;
    // this.data.save.result = data;
    // gbks.events.call(gbks.event.PhotoUploadSuccess);
  },
  onSaveError: function onSaveError(data) {
    if (this.log) {
      console.log('BuilderSaver.onSaveError', data);
    } // Calculate time passed since start of this call


    var d = new Date();
    var t = d.getTime();
    var delta = t - this.saveStartTime;
    trackman.event('builder', 'imagesaver', 'saveerror', delta);
    this.updateBuilderData({
      error: true
    }); // this.data.save.isSaving = false;
    // this.data.save.isSaved = false;
    // this.data.save.success = false;
    // this.data.save.result = data;
    // gbks.events.call(gbks.event.PhotoUploadError);
  }
};
"use strict";

var gbks = gbks || {};
gbks.cornify = gbks.cornify || {};
gbks.cornify.builder = gbks.cornify.builder || {};
gbks.cornify.builder.updater = {
  log: true,
  baseUrl: 'https://www.cornify.com/happyi/',
  update: function update() {
    var editorData = siteData.store.state.builderdata;

    if (this.log) {
      console.log('BuilderUpdater.update', editorData.upload);
    }

    trackman.event('builder', 'updater', 'update');

    if (editorData.upload.success === true) {
      this.performUpdate();
    } else if (editorData.upload.started === true) {
      // Still saving
      this.startUpdateTimer();
    } else {
      // Didn't event start saving? Probably an error happening
      console.log('BuilderUpdater.update image not saving yet?');
      trackman.event('builder', 'updater', 'could not update');
    }
  },
  startUpdateTimer: function startUpdateTimer() {
    if (this.log) {
      console.log('BuilderUpdater.startUpdateTimer');
    }

    trackman.event('builder', 'updater', 'startUpdateTimer');
    clearTimeout(this.updateTimer);
    this.updateTimer = setTimeout($.proxy(this.update, this), 500);
  },
  performUpdate: function performUpdate() {
    var editorData = siteData.store.state.builderdata;
    var data = {
      id: editorData.upload.data.id,
      name: editorData.upload.name,
      username: editorData.upload.username,
      public: editorData.upload.public ? 1 : 0
    }; // Grab current time

    var d = new Date();
    this.updateStartTime = d.getTime();

    if (this.log) {
      console.log('BuilderUpdater.performUpdate', data);
    }

    if (config.isDev) {
      setTimeout($.proxy(this.onUpdateSuccess, this, {
        success: true,
        id: 467,
        name: 'Sparkles',
        username: 'Peter',
        public: 1
      }), 250);
    } else {
      $.ajax({
        url: this.baseUrl + 'updateyounicorn',
        data: data,
        dataType: 'jsonp',
        type: 'POST',
        success: $.proxy(this.onUpdateSuccess, this),
        error: $.proxy(this.onUpdateError, this)
      });
    }
  },
  onUpdateSuccess: function onUpdateSuccess(data) {
    if (this.log) {
      console.log('BuilderUpdater.onUpdateSuccess', data);
    } // Calculate time passed since start of this call


    var d = new Date();
    var t = d.getTime();
    var delta = t - this.updateStartTime;
    trackman.event('builder', 'updater', 'updatesuccess', delta);
    this.updateBuilderData({
      update: data
    });
    gbks.events.call(gbks.event.PhotoUploadError);
  },
  onUpdateError: function onUpdateError(data) {
    if (this.log) {
      console.log('BuilderUpdater.onUpdateError', data);
    } // Calculate time passed since start of this call


    var d = new Date();
    var t = d.getTime();
    var delta = t - this.updateStartTime;
    trackman.event('builder', 'updater', 'updateerror', delta);
  },
  updateBuilderData: function updateBuilderData(props) {
    var editorData = siteData.store.state.builderdata;

    for (var i in props) {
      Vue.set(editorData.upload, i, props[i]);
    }

    siteData.store.commit('updateBuilderData', editorData);
  }
};
"use strict";

Vue.component('builder-template-list-item', {
  template: "\n        <button\n            type=\"button\"\n            role=\"radio\"\n            :class=\"classObject\"\n            :title=\"data.name\"\n            :style=\"styleObject\"\n            :aria-label=\"data.name\"\n            :aria-checked=\"active\"\n            :tabindex=\"active ? '0' : '-1'\"\n            @click=\"click\"\n        >\n            <div class=\"wrap\">\n                <img\n                    :src=\"previewImage\"\n                    :alt=\"data.name\"\n                    width=\"600\"\n                    height=\"600\"\n                    @load=\"imageLoaded\"\n                >\n            </div>\n        </button>\n    ",
  props: ['templateId', 'data', 'active', 'isBitcorn'],
  data: function data() {
    return {
      log: true,
      loading: true
    };
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];

      if (this.active) {
        c.push('-active');
      }

      if (this.loading) {
        c.push('-loading');
      }

      return c.join(' ');
    },
    styleObject: function styleObject() {
      return {
        backgroundImage: 'url(' + this.previewImage + ')'
      };
    },
    previewImage: function previewImage() {
      var result = '/assets/builder/' + this.data.preview;

      if (this.isBitcorn) {
        result = '/assets/builder/' + this.data.bitcornPreview;
      }

      return result;
    }
  },
  methods: {
    click: function click() {
      this.$emit('click', this.templateId);
    },
    imageLoaded: function imageLoaded() {
      this.loading = false;
    }
  }
});
"use strict";

Vue.component('builder-template-list', {
  template: "\n        <div :class=\"classObject\">\n            <div class=\"wrap\">\n                <div\n                    class=\"content\"\n                    role=\"radiogroup\"\n                    aria-labelledby=\"builderTemplateTitle\"\n                >\n                    <builder-template-list-item\n                        v-for=\"(item, templateId) in templates\"\n                        :key=\"templateId\"\n                        :data=\"item\"\n                        :templateId=\"templateId\"\n                        :active=\"templateId == activeTemplateId\"\n                        :isBitcorn=\"isBitcorn\"\n                        @click=\"click\"\n                    />\n                </div>\n            </div>\n        </div>\n    ",
  props: ['activeTemplateId', 'data', 'isBitcorn'],
  data: function data() {
    return {
      log: true
    };
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];
      return c.join(' ');
    },
    templates: function templates() {
      return siteData.builder.templates;
    }
  },
  methods: {
    click: function click(templateId) {
      this.$emit('pickTemplate', templateId);
    }
  }
});
"use strict";

Vue.component('builder-success-name', {
  template: "\n        <div\n            :class=\"classObject\"\n            role=\"dialog\" \n            aria-labelledby=\"builderSuccessNameTitle\"\n        >\n            <div class=\"wrap\">\n                <div class=\"content\">\n                    <div class=\"-name\">\n                        <h2 id=\"builderSuccessNameTitle\">What's your unicorns&nbsp;name?</h2>\n                        <input\n                            type=\"text\"\n                            v-model=\"name\"\n                            placeholder=\"Enter a unicorn name...\"\n                            minlength=\"3\"\n                            maxlength=\"100\"\n                        />\n                        <p v-if=\"nameError\" class=\"-error\">{{ nameError }}</p>\n                    </div>\n                    <button\n                        class=\"funky-button -filled -pink -done\"\n                        type=\"button\"\n                        @click=\"next\"\n                    >Next</button>\n                </div>\n            </div>\n        </div>\n    ",
  props: [],
  data: function data() {
    return {
      log: !true,
      name: '',
      nameError: null
    };
  },
  beforeMount: function beforeMount() {
    this.l('beforeMount', this.id);
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];
      return c.join(' ');
    }
  },
  methods: {
    next: function next(event) {
      if (this.name.length > 0) {
        var position = gbks.helpers.getPositionFromEvent(event);
        position.y -= window.scrollY;
        gbks.events.call('glitter-sparkle', position);
        this.nameError = null;
        var editorData = siteData.store.state.builderdata;
        Vue.set(editorData.upload, 'name', this.name);
        siteData.store.commit('updateBuilderData', editorData);
        this.$emit('next');
        trackman.event('builder', 'success-name', 'click-next');
      } else {
        this.nameError = 'Please enter a name...';
      }
    }
  }
});
"use strict";

Vue.component('builder-success-options', {
  template: "\n        <div :class=\"classObject\">\n            <div class=\"wrap\">\n                <div class=\"content\">\n                    <h1>Woohoo!!!</h1>\n                    <p class=\"-copy\">Your Younicorn turned out so amazing, now go and share it with he world! You can always view it at this link:</p>\n                    <a\n                        :href=\"link\"\n                        target=\"_blank\"\n                        @click=\"clickUrl\"\n                    >{{ link }}</a>\n\n                    <div class=\"-share-options\">\n                        <a\n                            :href=\"data.upload.data.image\"\n                            download\n                            @click=\"download\"\n                        >Download image</a>\n                        <a\n                            v-if=\"supportsWebShare\"\n                            href=\"#\"\n                            @click.prevent=\"webshare\"\n                        >Share image</a>\n                    </div>\n\n                    <div class=\"-next-options\">\n                        <a\n                            href=\"#\"\n                            @click.prevent=\"again\"\n                        >Again</a>\n                        <router-link\n                            to=\"/\"\n                            @click.native=\"done\"\n                        >I'm done</router-link>\n                    </div>\n                </div>\n            </div>\n        </div>\n    ",
  props: ['data'],
  data: function data() {
    return {
      log: !true
    };
  },
  beforeMount: function beforeMount() {
    this.l('beforeMount', this.id);
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];
      return c.join(' ');
    },
    supportsWebShare: function supportsWebShare() {
      return window.navigator.share ? true : false;
    },
    link: function link() {
      return this.data.upload.data.url;
    }
  },
  methods: {
    download: function download() {
      trackman.event('builder', 'share-options', 'download');
    },
    webshare: function webshare() {
      trackman.event('builder', 'share-options', 'webshare');
      navigator.share({
        title: this.data.upload.caption,
        url: this.data.upload.data.url
      });
    },
    again: function again() {
      trackman.event('builder', 'share-options', 'again');
      gbks.events.call('builder-reset');
    },
    clickUrl: function clickUrl() {
      trackman.event('builder', 'share-options', 'url');
    },
    done: function done() {
      trackman.event('builder', 'share-options', 'done');
    }
  }
});
"use strict";

Vue.component('builder-success-privacy', {
  template: "\n        <div :class=\"classObject\">\n            <div class=\"wrap\">\n                <div class=\"content\">\n                    <div class=\"-approval\">\n                        <h2>Can we share your Younicorn with&nbsp;others?</h2>\n                        <a\n                            :class=\"approved ? '-active' : ''\"\n                            href=\"#\" \n                            @click.prevent=\"approve\"\n                        >Yes, sure</a>\n                        <a\n                            :class=\"approved ? '' : '-active'\"\n                            href=\"#\" \n                            @click.prevent=\"decline\"\n                        >No, thanks</a>\n                    </div>\n\n                    <a\n                        class=\"-done\"\n                        href=\"#\"\n                        @click.prevent=\"next\"\n                    >Next</a>\n                </div>\n            </div>\n        </div>\n    ",
  props: ['data'],
  data: function data() {
    return {
      log: !true,
      approved: true
    };
  },
  beforeMount: function beforeMount() {
    this.l('beforeMount', this.id);
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];
      return c.join(' ');
    }
  },
  methods: {
    approve: function approve() {
      this.approved = true;
      trackman.event('builder', 'success-privacy', 'click-approve');
    },
    decline: function decline() {
      this.approved = false;
      trackman.event('builder', 'success-privacy', 'click-decline');
    },
    next: function next() {
      var editorData = siteData.store.state.builderdata;
      Vue.set(editorData.upload, 'public', this.approved);
      siteData.store.commit('updateBuilderData', editorData);
      this.$emit('next');
      trackman.event('builder', 'success-privacy', 'click-next');
    }
  }
});
"use strict";

Vue.component('builder-success-question', {
  template: "\n        <div\n            :class=\"classObject\"\n            role=\"dialog\" \n            aria-labelledby=\"builderSuccessQuestionTitle\"\n        >\n            <div class=\"wrap\">\n                <div class=\"content\">\n                    <div class=\"-name\">\n                        <h2 id=\"builderSuccessQuestionTitle\">What's your lovely&nbsp;name?</h2>\n                        <input\n                            type=\"text\"\n                            v-model=\"name\"\n                            placeholder=\"Enter your name here...\"\n                            minlength=\"3\"\n                            maxlength=\"100\"\n                        />\n                        <p v-if=\"nameError\" class=\"-error\">{{ nameError }}</p>\n                    </div>\n                    <button\n                        :class=\"doneClasses\"\n                        type=\"button\"\n                        :disabled=\"!saveComplete\"\n                        @click=\"next\"\n                    >{{ nextLabel }}</button>\n                </div>\n            </div>\n        </div>\n    ",
  props: [],
  data: function data() {
    return {
      log: !true,
      name: '',
      nameError: null
    };
  },
  beforeMount: function beforeMount() {
    this.l('beforeMount', this.id);
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];
      return c.join(' ');
    },
    saveComplete: function saveComplete() {
      var editorData = siteData.store.state.builderdata;
      return editorData.upload.success === true;
    },
    nextLabel: function nextLabel() {
      return this.saveComplete ? 'Next' : 'Saving...';
    },
    doneClasses: function doneClasses() {
      var c = ['funky-button -filled -pink -done'];

      if (!this.saveComplete) {
        c.push('-disable');
      }

      return c.join(' ');
    }
  },
  methods: {
    next: function next(event) {
      if (this.name.length > 0) {
        var position = gbks.helpers.getPositionFromEvent(event);
        position.y -= window.scrollY;
        gbks.events.call('glitter-sparkle', position);
        this.nameError = null;

        if (this.saveComplete) {
          var editorData = siteData.store.state.builderdata;
          this.l('next', editorData);
          Vue.set(editorData.upload, 'username', this.name);
          siteData.store.commit('updateBuilderData', editorData);
          this.$emit('next');
          trackman.event('builder', 'success-question', 'click-next');
        }
      } else {
        this.nameError = 'Please enter a name...';
      }
    }
  }
});
"use strict";

Vue.component('builder-editor-background', {
  template: "\n        <div :class=\"classObject\">\n            <div class=\"wrap\">\n                <div class=\"content\">\n                    <img\n                        :src=\"file\"\n                        :alt=\"part.name\"\n                        :width=\"imageWidth\"\n                        :height=\"imageHeight\"\n                    >\n                </div>\n            </div>\n        </div>\n    ",
  props: ['data'],
  data: function data() {
    return {
      log: true
    };
  },
  watch: {
    data: function data(next, previous) {
      this.l('watch.data', next);
    },
    builderData: function builderData(next, previous) {
      this.l('watch.builderData', next);
    }
  },
  beforeMount: function beforeMount() {
    this.l('beforeMount', this.data, this.part);
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];
      return c.join(' ');
    },
    builderData: function builderData() {
      return siteData.store.state.builderdata;
    },
    imageWidth: function imageWidth() {
      return this.isMobile ? 300 : 720;
    },
    imageHeight: function imageHeight() {
      return this.isMobile ? 533 : 300;
    },
    isMobile: function isMobile() {
      return siteData.store.state.isMobile;
    },
    part: function part() {
      var result = null;
      var backgroundId = this.builderData.editor.parts.background; // this.l('backgroundId', backgroundId);

      if (backgroundId) {
        // this.l('sss', siteData.builder.categories.background);
        result = siteData.builder.categories.background.parts[backgroundId];
      }

      return result;
    },
    file: function file() {
      var result = null;
      var backgroundId = this.builderData.editor.parts.background; // this.l('backgroundId', backgroundId);

      if (backgroundId) {
        // this.l('sss', siteData.builder.categories.background);
        var part = siteData.builder.categories.background.parts[backgroundId];
        var file = part.slots.background.full;

        if (this.isMobile) {
          file = part.slots.background.portrait;
        } // this.l(backgroundId, part);


        result = '/assets/builder/' + file;
      }

      return result;
    }
  }
});
"use strict";

var gbks = gbks || {};
gbks.builder = gbks.builder || {};
gbks.builder.displayRenderer = {
  id: 'DisplayRenderer',
  log: !true,
  imageCache: {},
  activeRenderer: null,
  renderIdIndex: 0,
  getRenderId: function getRenderId() {
    this.renderIdIndex++;
    return 'render_' + this.renderIdIndex;
  },
  render: function render(data) {
    if (this.activeRenderer) {
      this.activeRenderer.destroy = true;
      this.activeRenderer = null;
    }

    data.slotLoadIndex = 0;
    data.slotId = null;
    data.slotToLoad = null;
    this.activeRenderer = data;
    this.loadSlots(data);
    return data.renderId;
  },
  loadSlots: function loadSlots(data) {
    var canvas = $('<canvas />');
    canvas.attr({
      width: data.canvasSize,
      height: data.canvasSize
    });
    var context = canvas[0].getContext('2d');
    context.clearRect(0, 0, canvas[0].width, canvas[0].height);
    data.canvas = canvas[0];
    data.context = context;
    this.loadSlot(data);
  },
  getSlotFile: function getSlotFile(slot, data) {
    var file = slot.element.file;
    var builderData = siteData.store.state.builderdata; // Check if statements.
    // For example, different tail spikes are used based on what tail graphic is picked.

    if (slot.element.if) {
      // console.log('getSlotFile', slot, data);
      var partId;

      for (var categoryId in slot.element.if) {
        for (partId in slot.element.if[categoryId]) {
          if (builderData.editor.parts[categoryId] == partId) {
            file = slot.element.if[categoryId][partId]; // console.log('changing to ', file);
          }
        }
      }
    }

    return file;
  },
  loadSlot: function loadSlot(data) {
    var slots = data.slots;
    var keys = Object.keys(slots);
    var slotId = keys[data.slotLoadIndex];
    var slotToLoad = slots[slotId]; // console.log('display-renderer-loadSlot', slotId, slotToLoad);

    var file = this.getSlotFile(slotToLoad, data);

    if (this.imageCache[file]) {
      this.drawCachedSlot(data, slotToLoad);
      this.loadNextSlot(data);
    } else {
      data.slotId = slotId;
      data.slotToLoad = slotToLoad;
      var img = new Image();
      data.image = img;
      img.onload = $.proxy(this.slotLoaded, this, data);
      img.onerror = $.proxy(this.slotLoadError, this, data);
      img.src = '/assets/builder/' + file;
    }
  },
  loadNextSlot: function loadNextSlot(data) {
    if (data.destroy === true && !data.destroyed) {
      this.destroy(data);
      return;
    }

    data.slotLoadIndex += 1;
    var slots = data.slots;
    var keys = Object.keys(slots);

    if (data.slotLoadIndex < keys.length) {
      this.loadSlot(data);
    } else {
      data.callback(data);
    }
  },
  appendTempImage: function appendTempImage(element) {
    if (this.log) {
      var holder = $('#tempImageHolder');

      if (holder.length == 0) {
        holder = $('<div id="tempImageHolder"></div>');
        console.log('holder', holder);
        holder.css({
          display: 'block',
          position: 'fixed',
          top: 0,
          left: 0
        });
        $('body').append(holder);
      }

      console.log('appendTempImage', element);
      element.css({
        width: 100,
        height: 100
      });
      holder.append(element);
    }
  },
  drawCachedSlot: function drawCachedSlot(data, slotToLoad) {
    if (this.log) {
      console.log('display-renderer-drawCachedSlot', slotToLoad);
    }

    var file = this.getSlotFile(slotToLoad, data);
    var canvas = data.canvas;
    var img = this.imageCache[file];
    var context = canvas.getContext('2d');
    var colorId = slotToLoad.element.color;
    var builderData = siteData.store.state.builderdata;

    if (this.log) {
      console.log('drawCachedSlot', colorId, file);
    }

    if (colorId && builderData.editor.colors[colorId]) {
      if (config.isFirefox) {
        this.drawTintedCachedSlotOnFirefox(builderData, canvas, colorId, img, context);
      } else {
        this.drawTintedCachedSlotDefault(builderData, canvas, colorId, img, context);
      }
    } else {
      if (config.isFirefox) {
        this.drawCachedSlotOnFirefox(slotToLoad, canvas, context, img);
      } else {
        this.drawCachedSlotDefault(slotToLoad, canvas, context, img);
      }
    } // console.log('display-renderer-drawCachedSlot', slotToLoad, context, img.width, canvas.width);

  },
  drawCachedSlotDefault: function drawCachedSlotDefault(slotToLoad, canvas, context, img) {
    if (this.log) {
      console.log('drawCachedSlotDefault', slotToLoad, canvas, context, img);
    }

    if (slotToLoad.blendMode) {
      context.globalCompositeOperation = slotToLoad.blendMode;
    } else {
      context.globalCompositeOperation = 'source-over';
    }

    if (slotToLoad.opacity) {
      context.globalAlpha = slotToLoad.opacity;
    } else {
      context.globalAlpha = 1;
    }

    context.drawImage(img, 0, 0, img.width, img.height, 0, 0, canvas.width, canvas.height);
  },
  drawCachedSlotOnFirefox: function drawCachedSlotOnFirefox(slotToLoad, canvas, context, img) {
    if (this.log) {
      console.log('drawCachedSlotOnFirefox', slotToLoad, canvas, context, img);
    }

    var imageCopy = $('<canvas />');
    imageCopy.attr({
      width: canvas.width,
      height: canvas.height
    });
    var imageCopyContext = imageCopy[0].getContext('2d');
    imageCopyContext.drawImage(img, 0, 0, img.width, img.height, 0, 0, canvas.width, canvas.height);

    if (slotToLoad.blendMode) {
      context.globalCompositeOperation = slotToLoad.blendMode;
    } else {
      context.globalCompositeOperation = 'source-over';
    }

    if (slotToLoad.opacity) {
      context.globalAlpha = slotToLoad.opacity;
    } else {
      context.globalAlpha = 1;
    }

    context.drawImage(imageCopy[0], 0, 0, canvas.width, canvas.height, 0, 0, canvas.width, canvas.height);
    this.appendTempImage(imageCopy); // this.appendTempImage($('canvas'));
  },
  drawTintedCachedSlotDefault: function drawTintedCachedSlotDefault(builderData, canvas, colorId, img, context) {
    // Tint the image before drawing.
    var tint = $('<canvas />');
    tint.attr({
      width: canvas.width,
      height: canvas.height
    });
    var tintContext = tint[0].getContext('2d');
    var color = builderData.editor.colors[colorId];
    tintContext.fillStyle = 'rgb(' + color.r + ', ' + color.g + ', ' + color.b + ')';
    tintContext.fillRect(0, 0, canvas.width, canvas.height);
    tintContext.globalCompositeOperation = "destination-atop";
    tintContext.drawImage(img, 0, 0, img.width, img.height, 0, 0, canvas.width, canvas.height);
    context.globalCompositeOperation = 'source-over';
    context.drawImage(tint[0], 0, 0, canvas.width, canvas.height, 0, 0, canvas.width, canvas.height);
  },
  drawTintedCachedSlotOnFirefox: function drawTintedCachedSlotOnFirefox(builderData, canvas, colorId, img, context) {
    // Tint the image before drawing.
    var tint = $('<canvas />');
    tint.attr({
      width: canvas.width,
      height: canvas.height
    });
    var tintContext = tint[0].getContext('2d');
    var color = builderData.editor.colors[colorId];

    if (this.log) {
      console.log('drawCachedSlotOnFirefox', color);
    } // Draw colored rectangle.


    tintContext.fillStyle = 'rgb(' + color.r + ', ' + color.g + ', ' + color.b + ')';
    tintContext.fillRect(0, 0, canvas.width, canvas.height); // Draw image into a blank rectangle.

    var imageCopy = $('<canvas />');
    imageCopy.attr({
      width: canvas.width,
      height: canvas.height
    });
    var imageCopyContext = imageCopy[0].getContext('2d');
    imageCopyContext.drawImage(img, 0, 0, img.width, img.height, 0, 0, canvas.width, canvas.height); // Combine images.

    tintContext.globalCompositeOperation = "destination-atop";
    tintContext.drawImage(imageCopy[0], 0, 0, canvas.width, canvas.height, 0, 0, canvas.width, canvas.height); // this.appendTempImage(tint);
    // this.appendTempImage(imageCopy);
    // this.appendTempImage($(data.canvas));

    context.globalCompositeOperation = 'source-over';
    context.drawImage(tint[0], 0, 0, canvas.width, canvas.height, 0, 0, canvas.width, canvas.height);
  },
  slotLoaded: function slotLoaded(data) {
    if (data.destroy === true && !data.destroyed) {
      this.destroy(data);
      return;
    } // console.log('slotLoaded', data.image.width);


    setTimeout($.proxy(this.slotLoadedTwo, this, data), 5);
  },
  slotLoadedTwo: function slotLoadedTwo(data) {
    if (this.log) {
      console.log('display-renderer-slotLoadIndex', data.slotToLoad.element.file, data.slotToLoad.element.color);
    }

    var canvas = data.canvas;
    var img = data.image;
    var context = canvas.getContext('2d');
    var colorId = data.slotToLoad.element.color;
    var builderData = siteData.store.state.builderdata;

    if (colorId && builderData.editor.colors[colorId]) {
      if (config.isFirefox) {
        this.drawTintedCachedSlotOnFirefox(builderData, canvas, colorId, img, context);
      } else {
        this.drawTintedCachedSlotDefault(builderData, canvas, colorId, img, context);
      } // Tint the image before drawing.

      /*
      var tint = $('<canvas />');
      tint.attr({
          width: canvas.width,
          height: canvas.height
      });
      var tintContext = tint[0].getContext('2d');
       var color = builderData.editor.colors[colorId];
       if(this.log) {
          console.log('display-renderer-color', color);
      }
       tintContext.fillStyle = 'rgb('+color.r+', '+color.g+', '+color.b+')';
      tintContext.fillRect(0, 0, canvas.width, canvas.height);
       tintContext.globalCompositeOperation = "destination-atop";
       tintContext.drawImage(img, 0, 0, img.width, img.height, 0, 0, canvas.width, canvas.height);
       context.globalCompositeOperation = 'source-over';
       context.drawImage(tint[0], 0, 0, canvas.width, canvas.height, 0, 0, canvas.width, canvas.height);
      */

    } else {
      if (config.isFirefox) {
        this.drawCachedSlotOnFirefox(data.slotToLoad, canvas, context, img);
      } else {
        this.drawCachedSlotDefault(data.slotToLoad, canvas, context, img);
      }
    } // Cache the image.
    // var cache = $('<canvas />');
    // cache.attr({
    //     width: canvas.width,
    //     height: canvas.height
    // });
    // var cacheContext = cache[0].getContext('2d');
    // cacheContext.drawImage(img, 0, 0, img.width, img.height, 0, 0, canvas.width, canvas.height);


    var file = this.getSlotFile(data.slotToLoad, data);
    this.imageCache[file] = img; // this.imageCache[data.slotToLoad.element.file] = img;

    this.loadNextSlot(data);
  },
  slotLoadError: function slotLoadError(data) {
    this.loadNextSlot(data);
  },
  destroy: function destroy(data) {
    data.destroyed = true;
    data.canvas = null;
    data.context = null;
  }
};
"use strict";

Vue.component('builder-editor-display', {
  template: "\n        <div :class=\"classObject\">\n            <div class=\"wrap\">\n                <div class=\"content\">\n                    <canvas\n                        ref=\"canvas\"\n                        :width=\"canvasSize\"\n                        :height=\"canvasSize\"\n                        alt=\"Younicorn\"\n                    />\n                    <img\n                        v-if=\"slotToLoad\"\n                        ref=\"image\"\n                        :key=\"slotId\"\n                        :src=\"'/assets/builder/'+slotToLoad.element.file\"\n                        @load=\"slotLoaded\"\n                        @error=\"slotLoadError\"\n                    >\n                </div>\n            </div>\n        </div>\n    ",
  props: ['data'],
  data: function data() {
    return {
      log: !true,
      slots: null,
      slotLoadIndex: 0,
      slotId: null,
      slotToLoad: null,
      imageCache: {},
      maxCanvasSize: 600,
      canvasSize: 1200,
      renderId: null,
      firstRender: true
    };
  },
  beforeMount: function beforeMount() {
    this.updateCanvasSize();
    gbks.events.listen('builder-select-part', $.proxy(this.onSelectPart, this), this.id);
    gbks.events.listen('builder-change-color', $.proxy(this.onChangeColor, this), this.id);
    gbks.events.listen(gbks.event.Resize, $.proxy(this.onResize, this), this.id);
  },
  mounted: function mounted() {
    this.l('mounted', this.parts);
    this.slots = this.getSlots();
    this.render();
  },
  beforeDestroy: function beforeDestroy() {
    this.renderId = null;
  },
  watch: {
    parts: function parts(next, previous) {
      this.l('watch.parts', next);
      this.slots = this.getSlots(); // this.loadSlots();

      this.render();
    },
    builderData: function builderData(next, previous) {
      this.l('watch.builderData', next);
    }
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];

      if (this.firstRender) {
        c.push('-first-render');
      }

      return c.join(' ');
    },
    builderData: function builderData() {
      return siteData.store.state.builderdata;
    },
    parts: function parts() {
      return this.builderData.parts;
    }
  },
  methods: {
    onSelectPart: function onSelectPart() {
      // this.l('onSelectPart');
      this.slots = this.getSlots(); // this.loadSlots();

      this.render();
    },
    onChangeColor: function onChangeColor() {
      // this.l('onChangeColor');
      this.slots = this.getSlots(); // this.loadSlots();

      this.render();
    },
    render: function render() {
      var renderId = gbks.builder.displayRenderer.getRenderId();
      this.renderId = renderId;
      gbks.builder.displayRenderer.render({
        renderId: renderId,
        slots: this.slots,
        canvasSize: this.canvasSize,
        callback: $.proxy(this.onRender, this),
        startTime: new Date().getTime()
      }); // this.l('render', renderId);
    },
    onRender: function onRender(data) {
      // var finish = new Date().getTime();
      // var delta = finish - data.startTime;
      // this.l('onRender', data, delta);
      // return;
      this.firstRender = false;

      if (data.renderId != this.renderId) {
        this.l('RenderId outdated', data.renderId, this.renderId);
        return;
      }

      var canvas = this.$refs.canvas;

      if (!canvas) {
        this.l('onRender no canvas', canvas);
        return;
      }

      var context = canvas.getContext('2d');
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(data.canvas, 0, 0, data.canvasSize, data.canvasSize, 0, 0, this.canvasSize, this.canvasSize);
      data.canvas = null;
      data.context = null;
    },

    /*
        
    Gather a list of slots that need to be drawn, in the correct order.
      */
    getSlots: function getSlots() {
      var result = {};

      for (var k in siteData.builder.slots) {
        result[k] = $.extend({}, siteData.builder.slots[k]);
      } // Loop over all parts and collect a list of slots.


      var parts = this.data.editor.parts;
      var categoryId, partId, part;
      var slotId, slot, category;

      for (var categoryId in parts) {
        partId = parts[categoryId]; // this.l('i', categoryId, partId, siteData.builder.categories);

        category = siteData.builder.categories[categoryId];

        if (!category) {
          console.log(this.id, 'getSlots category data missing', categoryId);
          continue;
        }

        part = category.parts[partId]; // this.l('i', categoryId, partId, part, slotId);

        if (part && !category.renderSeparate) {
          for (slotId in part.slots) {
            if (result[slotId]) {
              result[slotId].element = part.slots[slotId];
            } else {
              console.log(this.id, 'getSlots slot doesnt exist', slotId);
            }
          }
        } // result.push(part);

      }

      for (var slotId in result) {
        if (!result[slotId].element) {
          // this.l('deleting', slotId);
          delete result[slotId];
        }
      } // this.l('slots', result);
      // this.l('siteData.builder.slots', siteData.builder.slots);


      return result;
    },
    onResize: function onResize() {
      this.updateCanvasSize(); // this.loadSlots();

      this.render();
    },
    updateCanvasSize: function updateCanvasSize() {
      var windowWidth = siteData.store.state.windowWidth;
      var canvasSize = Math.min(windowWidth, this.maxCanvasSize);
      var scale = window.devicePixelRatio;

      if (scale) {
        canvasSize *= scale;
      }

      this.canvasSize = canvasSize;
    }
  }
});
"use strict";

Vue.component('builder-editor-part-list-item', {
  template: "\n        <div :class=\"classObject\">\n            <button\n                type=\"button\"\n                role=\"radio\"\n                :aria-label=\"data.name\"\n                :aria-checked=\"active\"\n                :tabindex=\"active ? '0' : '-1'\"\n                @click=\"click\"\n            >\n                <img\n                    v-if=\"data.preview\"\n                    :src=\"'/assets/builder/'+data.preview\"\n                    :alt=\"data.name\"\n                    width=\"60\"\n                    height=\"60\"\n                >\n            </button>\n        </div>\n    ",
  props: ['partId', 'data', 'active'],
  data: function data() {
    return {
      log: !true,
      colorIcon: gbks.icons.color
    };
  },
  beforeMount: function beforeMount() {
    this.l('beforeMount', this.data);
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];

      if (this.active) {
        c.push('-active');
      }

      return c.join(' ');
    }
  },
  methods: {
    click: function click() {
      if (!this.active) {
        this.l('click', this.data);
        trackman.event('builder', 'past-list-item', 'click-' + this.partId);
        this.$emit('click', this.partId);
      }
    }
  }
});
"use strict";

Vue.component('builder-editor-part-list', {
  template: "\n        <div :class=\"classObject\">\n            <div class=\"wrap\">\n                <div\n                    class=\"content\"\n                    role=\"radiogroup\"\n                    :aria-label=\"ariaLabel\"\n                >\n                    <builder-editor-part-list-item\n                        v-for=\"(item, partId) in parts\"\n                        :key=\"partId\"\n                        :data=\"item\"\n                        :partId=\"partId\"\n                        :active=\"partId == activePartId\"\n                        @click=\"click\"\n                        @clickColor=\"clickColor\"\n                    />\n                    <div \n                        v-if=\"!category.required\"\n                        :class=\"clearClass\"\n                    >\n                        <button\n                            type=\"button\"\n                            role=\"radio\"\n                            aria-label=\"Clear option\"\n                            :aria-checked=\"!this.activePartId\"\n                            :tabindex=\"this.activePartId ? '-1' : '0'\"\n                            v-html=\"closeIcon\"\n                            @click=\"clearPart\"\n                        />\n                    </div>\n                </div>\n            </div>\n        </div>\n    ",
  props: ['data'],
  data: function data() {
    return {
      log: !true,
      closeIcon: gbks.icons.close
    };
  },
  beforeMount: function beforeMount() {
    this.l('beforeMount', this.data, this.category);
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];
      return c.join(' ');
    },
    clearClass: function clearClass() {
      var c = ['-clear'];

      if (!this.activePartId) {
        c.push('-active');
      }

      return c.join(' ');
    },
    ariaLabel: function ariaLabel() {
      return this.category ? 'Options for ' + this.category.name : null;
    },
    activePartId: function activePartId() {
      return this.data.editor.parts[this.data.editor.category];
    },
    category: function category() {
      return siteData.builder.categories[this.data.editor.category];
    },
    parts: function parts() {
      var parts = {};
      var allParts = this.category.parts;
      var secrets = siteData.store.state.enabledYounicornSecrets;
      var today = new Date();
      var weekday = today.getDay(); // 0 - 6

      var part, addPart;

      for (var partId in allParts) {
        part = allParts[partId];
        addPart = true; // If it's a Bitcoin part, only add it if we have a valid invoice.

        if (part.disabled === true) {
          addPart = false;
        } else if (part.bitcoin) {
          var invoiceId = siteData.store.state.lightningInvoiceId;
          var status = siteData.store.state.lightningInvoiceStatus;

          if (!(invoiceId && status && status == 'paid')) {
            addPart = false;
          }
        } else if (part.secret) {
          // If it's a secret part, only add it if we have it enabled.
          if (secrets.indexOf(partId) === -1) {
            addPart = false;
          }
        } else if (part.weekday) {
          // If part should only be shown on a specific weekday, figure that out.
          if (parseInt(part.weekday) !== weekday) {
            addPart = false;
          }
        } else if (part.fullmoon) {
          // Only show this part during a full moon.
          var moonPhase = gbks.helpers.moonPhase();
          var isFullMoon = moonPhase.phase == 4 && moonPhase.percent >= 92;

          if (!isFullMoon) {
            addPart = false;
          }
        } else if (part.valentines) {
          if (!(today.getMonth() === 1 && today.getDate() === 14)) {
            addPart = false;
          }
        } else if (part.aprilfools) {
          if (!(today.getMonth() === 3 && today.getDate() === 1)) {
            addPart = false;
          }
        } else if (part.unicornday) {
          if (!(today.getMonth() === 3 && today.getDate() === 9)) {
            addPart = false;
          }
        } // console.log('p', partId, part.secret, secrets);


        if (addPart) {
          parts[partId] = part;
        }
      }

      return parts;
    }
  },
  methods: {
    click: function click(partId) {
      // this.l('click', partId, this.data);
      var data = siteData.store.state.builderdata;
      Vue.set(data.editor.parts, this.data.editor.category, partId);
      siteData.store.commit('updateBuilderData', data);
      gbks.events.call('builder-select-part');
    },
    clickColor: function clickColor(colorId) {
      this.l('clickColor', colorId);
      this.$emit('clickColor', colorId);
    },
    clearPart: function clearPart() {
      var data = siteData.store.state.builderdata;
      Vue.set(data.editor.parts, this.data.editor.category, null);
      siteData.store.commit('updateBuilderData', data);
      gbks.events.call('builder-select-part');
    }
  }
});
"use strict";

Vue.component('builder-editor-category-list-item-color', {
  template: "\n        <button\n            type=\"button\"\n            role=\"radio\"\n            :class=\"classObject\"\n            :aria-label=\"colorId + ' color'\"\n            :aria-checked=\"active\"\n            :tabindex=\"active ? '0' : '-1'\"\n            :style=\"styleObject\"\n            @click=\"click\"\n        />\n    ",
  props: ['categoryId', 'colorId', 'active', 'part'],
  data: function data() {
    return {
      log: !true
    };
  },
  beforeMount: function beforeMount() {
    this.l('beforeMount', this.colorId);
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];

      if (this.active) {
        c.push('-active');
      }

      return c.join(' ');
    },
    styleObject: function styleObject() {
      var s = {};
      var color = this.color;

      if (color) {
        s.backgroundColor = 'rgb(' + color.r + ', ' + color.g + ', ' + color.b + ')';
      } else {
        s.backgroundColor = '#fbfbfb';
      }

      return s;
    },
    color: function color() {
      var builderData = siteData.store.state.builderdata;
      var color;
      this.l('---');
      this.l('builderData', builderData);
      this.l('categoryId', this.categoryId);
      this.l('part', this.part);
      this.l('colorId', this.colorId); // See if the user has picked a color for this colorId.

      var colorData = builderData.editor.colors[this.colorId];

      if (colorData) {
        this.l('has user pick');
        color = colorData;
      } else {
        // If not, see what the default is for this slot.
        var slots = this.part.slots;

        for (var slotId in slots) {
          if (slots[slotId].color == this.colorId) {
            if (slots[slotId].defaultColor) {
              this.l('found default', slotId, slots[slotId]);
              color = slots[slotId].defaultColor;
            }
          }
        }
      }

      this.l('color', color);
      return color;
    }
  },
  methods: {
    click: function click() {
      this.$emit('click', this.colorId);
    }
  }
});
"use strict";

Vue.component('builder-editor-category-list-item-part', {
  template: "\n        <button\n            type=\"button\"\n            role=\"radio\"\n            :class=\"classObject\"\n            :aria-label=\"data.name\"\n            :aria-checked=\"active\"\n            :tabindex=\"active ? '0' : '-1'\"\n            @click=\"click\"\n        >\n            <img\n                :src=\"previewImage\"\n                :alt=\"data.name\"\n                width=\"60\"\n                height=\"60\"\n            >\n        </button>\n    ",
  props: ['categoryId', 'data', 'active'],
  data: function data() {
    return {
      log: !true
    };
  },
  beforeMount: function beforeMount() {
    this.l('beforeMount', this.data, this.categoryId);
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];

      if (this.active) {
        c.push('-active');
      }

      return c.join(' ');
    },
    builderData: function builderData() {
      return siteData.store.state.builderdata;
    },
    part: function part() {
      var partId = this.builderData.editor.parts[this.categoryId];
      var part = this.data.parts[partId];
      return part;
    },
    previewImage: function previewImage() {
      this.l('previewImage', this.part, this.data);

      if (this.part) {
        return '/assets/builder/' + this.part.preview;
      } else {
        return '/assets/builder/' + this.data.preview;
      }
    }
  },
  methods: {
    click: function click() {
      this.$emit('click', this.categoryId);
    }
  }
});
"use strict";

Vue.component('builder-editor-category-list-item', {
  template: "\n        <div :class=\"classObject\">\n            <builder-editor-category-list-item-part\n                v-if=\"!data.fixed\"\n                :categoryId=\"categoryId\"\n                :data=\"data\"\n                :active=\"active && !activeColorId\"\n                @click=\"click\"\n            />\n            <builder-editor-category-list-item-color\n                v-if=\"(active || data.fixed) && colors\"\n                v-for=\"(colorId, index) in colors\"\n                :key=\"colorId\"\n                :categoryId=\"categoryId\"\n                :part=\"part\"\n                :colorId=\"colorId\"\n                :active=\"colorId == activeColorId\"\n                @click=\"clickColor\"\n            />\n        </div>\n    ",
  props: ['categoryId', 'data', 'active', 'activeColorId'],
  data: function data() {
    return {
      log: !true
    };
  },
  beforeMount: function beforeMount() {
    this.l('beforeMount', this.data, this.categoryId);
  },
  watch: {
    active: function active(next, previous) {
      this.l('active', this.colors);
    }
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];

      if (this.active) {
        c.push('-active');

        if (this.colors) {
          c.push('-colors-' + this.colors.length);
        }
      }

      return c.join(' ');
    },
    builderData: function builderData() {
      return siteData.store.state.builderdata;
    },
    part: function part() {
      var partId = this.builderData.editor.parts[this.categoryId];
      var part = this.data.parts[partId];
      return part;
    },
    previewImage: function previewImage() {
      this.l('previewImage', this.part, this.data);

      if (this.part) {
        return '/assets/builder/' + this.part.preview;
      } else {
        return '/assets/builder/' + this.data.preview;
      }
    },
    colors: function colors() {
      var result = null;

      if (this.part) {
        var slots = this.part.slots;

        if (slots) {
          var i, length, slot;

          for (i in slots) {
            slot = slots[i];

            if (slot.color) {
              if (!result) {
                result = [];
              }

              if (result.indexOf(slot.color) === -1) {
                result.push(slot.color);
              }
            }
          }
        }
      }

      this.l('colors', result);
      return result;
    }
  },
  methods: {
    click: function click() {
      trackman.event('builder', 'category-list-item', 'click-' + this.categoryId);
      this.$emit('click', this.categoryId);
    },
    clickColor: function clickColor(colorId) {
      this.$emit('clickColor', colorId);
    }
  }
});
"use strict";

Vue.component('builder-editor-category-list', {
  template: "\n        <div :class=\"classObject\">\n            <div class=\"wrap\">\n                <div\n                    class=\"content\"\n                    role=\"radiogroup\"\n                    aria-label=\"Younicorn part groups\"\n                >\n                    <builder-editor-category-list-item\n                        v-for=\"(item, categoryId) in categories\"\n                        :key=\"categoryId\"\n                        :data=\"item\"\n                        :categoryId=\"categoryId\"\n                        :active=\"categoryId == activeCategoryId\"\n                        :activeColorId=\"activeColorId\"\n                        @click=\"click\"\n                        @clickColor=\"clickColor\"\n                    />\n                </div>\n            </div>\n        </div>\n    ",
  props: ['activeColorId', 'data'],
  data: function data() {
    return {
      log: !true
    };
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];
      return c.join(' ');
    },
    activeCategoryId: function activeCategoryId() {
      return this.data.editor.category;
    },
    categories: function categories() {
      return siteData.builder.categories;
    }
  },
  methods: {
    click: function click(categoryId) {
      this.l('click', categoryId);
      this.$emit('clickCategory', categoryId);
    },
    clickColor: function clickColor(colorId) {
      this.$emit('clickColor', colorId);
    }
  }
});
"use strict";

Vue.component('builder-editor-color-list-item', {
  template: "\n        <a \n            href=\"#\"\n            :class=\"classObject\"\n            @click.prevent=\"click\"\n        >\n            <img :src=\"'/assets/builder/'+part.preview\">\n        </a>\n    ",
  props: ['colorId', 'active'],
  data: function data() {
    return {
      log: !true
    };
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];

      if (this.active) {
        c.push('-active');
      }

      return c.join(' ');
    },
    builderData: function builderData() {
      return siteData.store.state.builderdata;
    },
    part: function part() {
      var result = null;
      var parts = this.builderData.editor.parts;
      var partId, partsTwo, part;

      for (var categoryId in parts) {
        partId = parts[categoryId];
        partsTwo = siteData.builder.categories[categoryId].parts;
        part = partsTwo[partId];

        if (part) {
          for (var slotId in part.slots) {
            if (part.slots[slotId].color == this.colorId) {
              result = part;
              break;
            }
          }
        }
      }

      this.l('part', this.partId, result);
      return result;
    }
  },
  methods: {
    click: function click() {
      this.$emit('click', this.colorId);
      trackman.event('builder', 'color-list-item', 'click-' + this.colorId);
    }
  }
});
"use strict";

Vue.component('builder-editor-color-list', {
  template: "\n        <div :class=\"classObject\">\n            <div v-if=\"false\" class=\"wrap\">\n                <div class=\"content\">\n                    <builder-editor-color-list-item\n                        v-for=\"(colorId, index) in colors\"\n                        :key=\"colorId\"\n                        :colorId=\"colorId\"\n                        :active=\"colorId == activeColorIdModel\"\n                        @click=\"click\"\n                    />\n                </div>\n            </div>\n            <builder-editor-color-picker\n                :activeColorId=\"activeColorIdModel\"\n                @pick=\"pickColor\"\n            />\n        </div>\n    ",
  props: ['data', 'activeColorId'],
  data: function data() {
    return {
      log: !true,
      colors: null,
      activeColorIdModel: this.activeColorId
    };
  },
  beforeMount: function beforeMount() {
    this.l('beforeMount', this.data, this.activeColorId);
    gbks.events.listen('builder-select-part', $.proxy(this.onSelectPart, this), this.id);
    this.colors = this.getColors(); // this.activeColorId = this.colors[0];
  },
  watch: {
    activeColorId: function activeColorId(next, previous) {
      this.l('activeColorId', next);
      this.activeColorIdModel = next;
    }
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];
      return c.join(' ');
    }
  },
  methods: {
    onSelectPart: function onSelectPart() {
      this.l('onSelectPart');
      this.colors = this.getColors();
    },
    onSelectColor: function onSelectColor(colorId) {
      this.l('onSelectColor', colorId);
      this.$emit('selectColor', colorId);
    },
    getColors: function getColors() {
      var result = []; // Loop over all parts and collect a list of slots.

      var parts = this.data.editor.parts;
      var categoryId, partId, part;
      var slotId, slot, color;

      for (var categoryId in parts) {
        partId = parts[categoryId];
        part = siteData.builder.categories[categoryId].parts[partId];
        this.l('i', categoryId, partId, part, slotId);

        if (part) {
          for (slotId in part.slots) {
            color = part.slots[slotId].color;
            this.l('slotId', slotId, color);
            this.l('part.slots[slotId]', part.slots[slotId]);

            if (color) {
              if (result.indexOf(color) === -1) {
                result.push(color);
              }
            }
          }
        }
      }

      this.l('colors', result);
      return result;
    },
    pickColor: function pickColor(color) {
      this.l('pickColor', color);
      var data = siteData.store.state.builderdata;
      this.l('this.activeColorId', this.activeColorId);
      this.l('data', data);
      Vue.set(data.editor.colors, this.activeColorId, color);
      siteData.store.commit('updateBuilderData', data);
      gbks.events.call('builder-change-color');
    },
    click: function click(colorId) {
      this.l('click', colorId);
      this.$emit('clickColor', colorId);
    }
  }
});
"use strict";

Vue.component('builder-editor-color-picker', {
  template: "\n        <div :class=\"classObject\">\n            <div class=\"wrap\">\n                <div class=\"content\">\n                    <builder-editor-color-picker-palette\n                        :palette=\"palette\"\n                        :activeColorId=\"activeColorId\"\n                        @add=\"add\"\n                        @pick=\"pick\"\n                    />\n                </div>\n                <builder-editor-color-picker-spectrum\n                    v-if=\"spectrumActive\"\n                    :activeColorElement=\"activeColorElement\"\n                    @pick=\"changeSpectrum\"\n                    @close=\"closeSpectrum\"\n                />\n            </div>\n        </div>\n    ",
  props: [],
  data: function data() {
    var colorIdIndex = 1;
    var palette = $.extend([], siteData.palette);

    for (var i = 0; i < palette.length; i++) {
      palette[i].id = 'color_' + colorIdIndex;
      colorIdIndex++;
    }

    return {
      log: !true,
      colorIdIndex: colorIdIndex,
      paletteDead: palette,
      spectrumActive: false,
      activeColorId: null,
      activeColorElement: null
    };
  },
  beforeMount: function beforeMount() {// this.l('beforeMount', this.id);
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];
      return c.join(' ');
    },
    isMobile: function isMobile() {
      return siteData.store.state.isMobile;
    },
    builderData: function builderData() {
      return siteData.store.state.builderdata;
    },
    palette: function palette() {
      return this.builderData.editor.palette;
    }
  },
  methods: {
    pick: function pick(data) {
      this.l('pick', data);

      if (data.data.id == this.activeColorId) {
        if (!this.spectrumActive) {
          this.activeColorElement = data.element;
        } else {
          this.activeColorElement = null;
        }

        this.spectrumActive = !this.spectrumActive;
      } else {
        this.spectrumActive = false;
        this.activeColorId = data.data.id;
        this.$emit('pick', data.data);
      }
    },
    add: function add() {
      this.l('add');
      var colorIdIndex = this.palette.length;
      var colorId = 'color_' + colorIdIndex;
      var builderData = this.builderData;
      this.palette.splice(0, 0, {
        id: colorId,
        r: Math.floor(Math.random() * 255),
        g: Math.floor(Math.random() * 255),
        b: Math.floor(Math.random() * 255)
      });
      Vue.set(builderData.editor, 'palette', this.palette);
      siteData.store.commit('updateBuilderData', builderData);
      this.activeColorId = colorId;
      this.spectrumActive = true;
    },
    changeSpectrum: function changeSpectrum(color) {
      this.l('changeSpectrum', color, this.activeColorId);
      var paletteColor;

      for (var i = 0; i < this.palette.length; i++) {
        paletteColor = this.palette[i];
        this.l('i', paletteColor);

        if (paletteColor.id == this.activeColorId) {
          this.l('applying', paletteColor.id);
          paletteColor.r = color.r;
          paletteColor.g = color.g;
          paletteColor.b = color.b;
        }
      }

      this.$emit('pick', color);
    },
    closeSpectrum: function closeSpectrum() {
      this.spectrumActive = false;
    }
  }
});
"use strict";

Vue.component('builder-editor-color-picker-palette-color', {
  template: "\n        <button\n            type=\"button\"\n            role=\"radio\"\n            ref=\"canvas\"\n            :class=\"classObject\"\n            :style=\"styleObject\"\n            :aria-label=\"label\"\n            :aria-checked=\"active\"\n            :tabindex=\"active ? '0' : '-1'\"\n            @click=\"click\"\n        >\n            <div class=\"wrap\">\n                <div class=\"content\">\n                    <p>{{ label }}</p>\n                </div>\n            </div>\n        </button>\n    ",
  props: ['index', 'data', 'active'],
  data: function data() {
    return {
      log: !true
    };
  },
  beforeMount: function beforeMount() {
    this.l('beforeMount', this.data);
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];

      if (this.active) {
        c.push('-active');
      }

      return c.join(' ');
    },
    label: function label() {
      return 'Color #' + this.data.hex;
    },
    styleObject: function styleObject() {
      return {
        backgroundColor: 'rgb(' + this.data.r + ', ' + this.data.g + ', ' + this.data.b + ')'
      };
    }
  },
  methods: {
    click: function click() {
      this.$emit('click', {
        data: $.extend({}, this.data),
        element: this.$refs.canvas
      });
      trackman.event('builder', 'color-palette-color', 'click-' + this.data.id);
    }
  }
});
"use strict";

Vue.component('builder-editor-color-picker-palette', {
  template: "\n        <div :class=\"classObject\">\n            <div class=\"wrap\">\n                <div \n                    class=\"content\"\n                    role=\"radiogroup\"\n                    aria-label=\"Color options\"\n                >\n                    <button\n                        class=\"-add\"\n                        type=\"button\"\n                        role=\"radio\"\n                        v-html=\"plusIcon\"\n                        aria-label=\"Add color\"\n                        @click=\"add\"\n                    >Add</button>\n                    <builder-editor-color-picker-palette-color\n                        v-for=\"(item, index) in palette\"\n                        :key=\"item.id\"\n                        :data=\"item\"\n                        :active=\"activeColorId == item.id\"\n                        @click=\"click\"\n                    />\n                </div>\n            </div>\n        </div>\n    ",
  props: ['activeColorId', 'palette'],
  data: function data() {
    return {
      log: true,
      plusIcon: gbks.icons.plus
    };
  },
  beforeMount: function beforeMount() {// this.l('beforeMount', this.id);
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];
      return c.join(' ');
    }
  },
  methods: {
    click: function click(data) {
      this.$emit('pick', data);
    },
    add: function add() {
      this.$emit('add');
    }
  }
});
"use strict";

Vue.component('builder-editor-color-picker-spectrum-color', {
  template: "\n        <div :class=\"classObject\">\n            <canvas\n                ref=\"canvas\"\n                :width=\"canvasWidth\"\n                :height=\"canvasHeight\"\n                alt=\"Color spectrum\"\n                @click=\"click\"\n                @mousedown=\"onMouseDown\"\n                @touchstart=\"onMouseDown\"\n            />\n            <div\n                class=\"handle\"\n                :style=\"handleStyle\"\n                aria-label=\"Selected color indicator\"\n            />             \n        </div>\n    ",
  props: ['color', 'darkness'],
  data: function data() {
    return {
      log: !true,
      x: 0,
      y: 0,
      dragging: false,
      mouseDown: false,
      touchMoveMethod: $.proxy(this.onMouseMove, this),
      touchEndMethod: $.proxy(this.onMouseUp, this)
    };
  },
  mounted: function mounted() {
    this.draw();
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];
      return c.join(' ');
    },
    handleStyle: function handleStyle() {
      return {
        left: this.x + 'px',
        top: this.y + 'px'
      };
    },
    isMobile: function isMobile() {
      return siteData.store.state.isMobile;
    },

    /*
        170 = 255 / 7.5 * 5
     */
    canvasWidth: function canvasWidth() {
      return this.isMobile ? 255 : 170;
    },
    canvasHeight: function canvasHeight() {
      return this.isMobile ? 100 : 100;
    }
  },
  methods: {
    draw: function draw() {
      var r = 255;
      var g = 0;
      var b = 0;
      var position = 0;
      var down = 100;
      var canvas = this.$refs.canvas;
      var context = canvas.getContext('2d');
      context.fillStyle = 'white';
      context.fillRect(0, 0, canvas.width, canvas.height);
      var offset = this.isMobile ? 5 : 7.5;
      var y;

      while (g < 255) {
        g += offset;
        down = 0;

        while (down <= 100) {
          y = 1 - down / 100;
          context.fillStyle = 'rgba(' + r + ',' + g + ',' + b + ', ' + y + ')';
          context.fillRect(position, down, 1, 1);
          down++;
        }

        position++;
      }

      while (r > 0) {
        r -= offset;
        down = 0;

        while (down <= 100) {
          y = 1 - down / 100;
          context.fillStyle = 'rgba(' + r + ',' + g + ',' + b + ', ' + y + ')';
          context.fillRect(position, down, 1, 1);
          down++;
        }

        position++;
      }

      while (b < 255) {
        b += offset;
        down = 0;

        while (down <= 100) {
          y = 1 - down / 100;
          context.fillStyle = 'rgba(' + r + ',' + g + ',' + b + ', ' + y + ')';
          context.fillRect(position, down, 1, 1);
          down++;
        }

        position++;
      }

      while (g > 0) {
        g -= offset;
        down = 0;

        while (down <= 100) {
          y = 1 - down / 100;
          context.fillStyle = 'rgba(' + r + ',' + g + ',' + b + ', ' + y + ')';
          context.fillRect(position, down, 1, 1);
          down++;
        }

        position++;
      }

      while (r < 255) {
        r += offset;
        down = 0;

        while (down <= 100) {
          y = 1 - down / 100;
          context.fillStyle = 'rgba(' + r + ',' + g + ',' + b + ', ' + y + ')';
          context.fillRect(position, down, 1, 1);
          down++;
        }

        position++;
      }

      while (b > 0) {
        b -= offset;
        down = 0;

        while (down <= 100) {
          y = 1 - down / 100;
          context.fillStyle = 'rgba(' + r + ',' + g + ',' + b + ', ' + y + ')';
          context.fillRect(position, down, 1, 1);
          down++;
        }

        position++;
      }
    },
    click: function click(event) {
      // this.l('click', event);
      // var x = event.layerX;
      // var y = event.layerY;
      var x = event.offsetX;
      var y = event.offsetY;
      this.l('x', x, y);
      x = Math.max(x, 0);
      x = Math.min(x, this.canvasWidth);
      y = Math.max(y, 0);
      y = Math.min(y, this.canvasHeight);
      this.x = x;
      this.y = y;
      this.pickFromCoordinates(x, y);
    },
    pickFromCoordinates: function pickFromCoordinates(x, y) {
      this.x = x;
      this.y = y;
      this.l('x2', x, y);
      var canvas = this.$refs.canvas;
      var context = canvas.getContext('2d');
      var imageData = context.getImageData(x, y, 1, 1);
      var r = imageData.data[0];
      var g = imageData.data[1];
      var b = imageData.data[2];
      this.l('imageData', imageData, r, g, b); // this.color = {
      //     r: r,
      //     g: g,
      //     b: b
      // };

      this.$emit('pick', {
        r: r * (1 - this.darkness),
        g: g * (1 - this.darkness),
        b: b * (1 - this.darkness),
        x: x,
        y: y,
        d: this.darkness
      });
    },
    // Drag
    onMouseDown: function onMouseDown(event) {
      this.mouseDown = true;
      $('body').bind('mousemove touchmove', this.touchMoveMethod);
      $('body').bind('mouseup touchend', this.touchEndMethod);
    },
    onMouseMove: function onMouseMove(event) {
      if (this.mouseDown) {
        if (!this.dragging) {
          this.startDrag(event);
        }

        this.updateDrag(event);
      }
    },
    onMouseUp: function onMouseUp(event) {
      this.mouseDown = false;
      $('body').unbind('mousemove touchmove', this.touchMoveMethod);
      $('body').unbind('mouseup touchend', this.touchEndMethod);

      if (this.dragging) {
        this.stopDrag();
      }
    },
    startDrag: function startDrag() {
      this.dragging = true;
    },
    stopDrag: function stopDrag(event) {
      this.dragging = false;
    },
    updateDrag: function updateDrag(event) {
      var offset = $(this.$refs.canvas).offset();
      var position = gbks.helpers.getPositionFromEvent(event, offset);
      var x = position.x;
      var y = position.y;
      this.l('updateDrag', position);
      x = Math.max(x, 0);
      x = Math.min(x, this.canvasWidth - 1);
      y = Math.max(y, 0);
      y = Math.min(y, this.canvasHeight - 1);
      this.pickFromCoordinates(x, y); // var y = position.y/100;
      // y = Math.max(0, y);
      // y = Math.min(100, y);
      // this.$emit('pick', y);
      // this.l('updateDrag', y);
    }
  }
});
"use strict";

Vue.component('builder-editor-color-picker-spectrum-darkness', {
  template: "\n        <div :class=\"classObject\">\n            <canvas\n                ref=\"canvas\"\n                :width=\"canvasWidth\"\n                height=\"100\"\n                alt=\"Brightness scale\"\n                @click=\"click\"\n                @mousedown=\"onMouseDown\"\n                @touchstart=\"onMouseDown\"\n            />\n            <div\n                class=\"handle\"\n                :style=\"styleObject\"\n                aria-label=\"Brightness selection indicator\"\n            />\n        </div>\n    ",
  props: ['color', 'darkness'],
  data: function data() {
    return {
      log: !true,
      dragging: false,
      mouseDown: false,
      touchMoveMethod: $.proxy(this.onMouseMove, this),
      touchEndMethod: $.proxy(this.onMouseUp, this)
    };
  },
  beforeMount: function beforeMount() {// this.l('beforeMount', this.id);
  },
  mounted: function mounted() {
    this.draw();
  },
  watch: {
    color: function color(next, previous) {
      this.draw();
    }
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];
      return c.join(' ');
    },
    styleObject: function styleObject() {
      return {
        top: this.darkness * 100 + '%'
      };
    },
    canvasWidth: function canvasWidth() {
      return siteData.store.state.isMobile ? 40 : 20;
    }
  },
  methods: {
    draw: function draw() {
      var canvas = this.$refs.canvas;
      var context = canvas.getContext('2d');
      context.fillStyle = 'white';
      context.fillRect(0, 0, canvas.width, canvas.height);
      var position = 0;
      var r, g, b;

      while (position <= 100) {
        r = Math.floor(this.color.r * (1 - position / 100));
        g = Math.floor(this.color.g * (1 - position / 100));
        b = Math.floor(this.color.b * (1 - position / 100));
        context.fillStyle = 'rgba(' + r + ',' + g + ',' + b + ')';
        context.fillRect(0, position, canvas.width, 1);
        position++;
      }
    },
    click: function click(event) {
      // this.l('click', event);
      var x = event.layerX;
      var y = event.layerY; // this.l('x', x, y);

      var canvas = this.$refs.canvas;
      var context = canvas.getContext('2d');
      var imageData = context.getImageData(x, y, 1, 1);
      var r = imageData.data[0];
      var g = imageData.data[1];
      var b = imageData.data[2];
      this.l('imageData', imageData, r, g, b);
      this.$emit('pick', y / 100);
    },
    onMouseDown: function onMouseDown(event) {
      this.mouseDown = true;
      $('body').bind('mousemove touchmove', this.touchMoveMethod);
      $('body').bind('mouseup touchend', this.touchEndMethod);
    },
    onMouseMove: function onMouseMove(event) {
      if (this.mouseDown) {
        if (!this.dragging) {
          this.startDrag(event);
        }

        this.updateDrag(event);
      }
    },
    onMouseUp: function onMouseUp(event) {
      this.mouseDown = false;
      $('body').unbind('mousemove touchmove', this.touchMoveMethod);
      $('body').unbind('mouseup touchend', this.touchEndMethod);

      if (this.dragging) {
        this.stopDrag();
      }
    },
    startDrag: function startDrag() {
      this.dragging = true;
    },
    stopDrag: function stopDrag(event) {
      this.dragging = false;
    },
    updateDrag: function updateDrag(event) {
      var offset = $(this.$refs.canvas).offset();
      var position = gbks.helpers.getPositionFromEvent(event, offset);
      var y = position.y / 100;
      y = Math.max(0, y);
      y = Math.min(1, y);
      this.$emit('pick', y);
      this.l('updateDrag', y);
    }
  }
});
"use strict";

Vue.component('builder-editor-color-picker-spectrum', {
  template: "\n        <div\n            :class=\"classObject\"\n            :style=\"styleObject\"\n            role=\"dialog\"\n            aria-label=\"Color picker\"\n        >\n            <div class=\"wrap\">\n                <div class=\"content\">\n                    <builder-editor-color-picker-spectrum-color\n                        :color=\"color\"\n                        :darkness=\"darkness\"\n                        @pick=\"pickColor\"\n                    />\n                    <builder-editor-color-picker-spectrum-darkness\n                        :color=\"color\"\n                        :darkness=\"darkness\"\n                        @pick=\"pickDarkness\"\n                    />                  \n                </div>\n                <button\n                    type=\"button\"\n                    aria-label=\"Close\"\n                    v-html=\"closeIcon\"\n                    @click=\"close\"\n                />  \n            </div>\n        </div>\n    ",
  props: ['activeColorElement'],
  data: function data() {
    return {
      log: !true,
      color: {
        r: 255,
        g: 0,
        b: 0
      },
      darkness: 0,
      closeIcon: gbks.icons.close
    };
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];
      return c.join(' ');
    },
    styleObject: function styleObject() {
      var s = {};

      if (!siteData.store.state.isMobile && this.activeColorElement) {
        var position = $(this.activeColorElement).offset();
        this.l('styleObject');
        this.l('position', $(this.activeColorElement).position());
        this.l('offset', $(this.activeColorElement).offset());
        s.left = position.left + 30 + 'px';
      }

      return s;
    }
  },
  methods: {
    pickColor: function pickColor(color) {
      this.l('pickColor', color);
      this.color = color;
      this.$emit('pick', color);
    },
    pickDarkness: function pickDarkness(value) {
      this.l('pickDarkness', value, this.color);
      this.darkness = value;
      this.$emit('pick', {
        r: this.color.r * (1 - this.darkness),
        g: this.color.g * (1 - this.darkness),
        b: this.color.b * (1 - this.darkness)
      }); // this.$emit('pick', data);
    },
    close: function close() {
      this.$emit('close');
    }
  }
});
"use strict";

Vue.component('coloring-bottom-bar', {
  template: "\n        <div :class=\"classObject\">\n            <div class=\"wrap\">\n                <div class=\"content\">\n                    <template v-if=\"data.mode == 'pick'\">\n                        <p>Pick a template</p>\n\n                        <a\n                            class=\"button -white-outlined\"\n                            @click.prevent=\"next\"\n                        >Next template</a>\n\n                        <a\n                            class=\"button -white-outlined\"\n                            @click.prevent=\"pick\"\n                        >Start coloring</a>\n                    </template>\n\n                    <template v-if=\"data.mode == 'draw'\">\n                        <coloring-color-button />\n                        <coloring-brush-button />\n                        <coloring-size-button />\n                        <coloring-opacity-button />\n                        <a\n                            :class=\"saveClasses\"\n                            v-html=\"saveLabel\"\n                            @click.prevent=\"save\"\n                        >Save</a>\n                    </template>\n                </div>\n            </div>\n        </div>\n    ",
  props: ['data'],
  data: function data() {
    return {
      log: !true
    };
  },
  beforeMount: function beforeMount() {
    this.l('beforeMount', this.id);
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];
      c.push('-state-' + this.data.mode);
      return c.join(' ');
    },
    saveClasses: function saveClasses() {
      var c = [];

      if (siteData.store.state.isMobile) {
        c = ['-save'];
      } else {
        c = ['button', '-save', '-white-outlined'];
      }

      return c.join(' ');
    },
    saveLabel: function saveLabel() {
      return siteData.store.state.isMobile ? gbks.icons.check : 'Save';
    }
  },
  methods: {
    next: function next() {
      var editorData = siteData.store.state.coloringdata;
      var templates = siteData.coloring.templates;
      var index = editorData.template.index + 1;

      if (index >= templates.length) {
        index = 0;
      }

      Vue.set(editorData, 'template', templates[index]);
      siteData.store.commit('updateColoringData', editorData);
      trackman.event('coloring', 'bottom-bar', 'next');
    },
    pick: function pick() {
      var editorData = siteData.store.state.coloringdata;
      Vue.set(editorData, 'mode', 'draw');
      siteData.store.commit('updateColoringData', editorData);
      gbks.events.call('glitter-text', {
        text: 'Time to color!'
      });
      trackman.event('coloring', 'bottom-bar', 'pick');
    },
    save: function save() {
      this.$emit('save');
      trackman.event('coloring', 'bottom-bar', 'save');
      gbks.events.call('glitter-motivate', {// text: 'You\'re the best'
      });
    },
    setSize: function setSize(value) {
      this.l('setSize', value);
      var editorData = siteData.store.state.coloringdata;
      Vue.set(editorData, 'size', value);
      siteData.store.commit('updateColoringData', editorData);
    },
    setOpacity: function setOpacity(value) {
      this.l('setOpacity', value);
      var editorData = siteData.store.state.coloringdata;
      Vue.set(editorData, 'opacity', value);
      siteData.store.commit('updateColoringData', editorData);
    }
  }
});
"use strict";

Vue.component('coloring-color-button', {
  template: "\n        <div :class=\"classObject\">\n            <a\n                ref=\"canvas\"\n                href=\"#\"\n                @click.prevent=\"toggle\"\n            >\n                <div\n                    class=\"-color\"\n                    :style=\"colorStyle\"\n                />\n            </a>\n            <coloring-palette\n                v-if=\"active\"\n                @pick=\"pick\"\n            />\n        </div>\n    ",
  props: [],
  data: function data() {
    return {
      log: !true,
      active: false
    };
  },
  beforeMount: function beforeMount() {
    this.l('beforeMount', this.id);
    gbks.events.listen('activate-picker', $.proxy(this.onActivatePicker, this), this.id);
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];
      return c.join(' ');
    },
    colorStyle: function colorStyle() {
      var color = this.color;
      return {
        backgroundColor: 'rgb(' + color[0] + ',' + color[1] + ',' + color[2] + ')'
      };
    },
    data: function data() {
      return siteData.store.state.coloringdata;
    },
    color: function color() {
      return this.data.editor.color;
    }
  },
  methods: {
    toggle: function toggle() {
      this.active = !this.active;

      if (this.active) {
        gbks.events.call('activate-picker', {
          id: this.id
        });
      }

      trackman.event('coloring', 'color-button', 'toggle');
    },
    onActivatePicker: function onActivatePicker(data) {
      if (data.id != this.id) {
        this.active = false;
      }
    },
    pick: function pick() {
      this.active = false;
    }
  }
});
"use strict";

Vue.component('coloring-scale', {
  template: "\n        <div :class=\"classObject\">\n            <div class=\"wrap\">\n                <div class=\"content\" ref=\"canvas\">\n                    <div\n                        class=\"bar\"\n                        :style=\"barStyle\"\n                        @click=\"clickBar\"\n                    />\n                    <div\n                        class=\"handle\"\n                        :style=\"handleStyle\"\n                        @mousedown=\"onMouseDown\"\n                        @touchstart=\"onMouseDown\"\n                    >\n                        <div class=\"handle-wrap\">\n                            <div\n                                class=\"handle-inner\"\n                                :style=\"handleInnerStyle\"\n                            />\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    ",
  props: [],
  data: function data() {
    return {
      log: true,
      dragging: false,
      mouseDown: false,
      touchMoveMethod: $.proxy(this.onMouseMove, this),
      touchEndMethod: $.proxy(this.onMouseUp, this),
      minSize: 0,
      maxSize: 1,
      barWidth: 100,
      minHandleSize: 10,
      maxHandleSize: 30
    };
  },
  beforeMount: function beforeMount() {
    this.l('beforeMount', this.id);
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];

      if (this.expanded) {
        c.push('-expanded');
      }

      return c.join(' ');
    },
    barStyle: function barStyle() {
      var size = this.data.editor.size; // var percentage = (size - this.minSize)/(this.maxSize - this.minSize)*100;

      var position = this.sizeToPosition(size);
      return {
        width: position + '%'
      };
    },
    handleStyle: function handleStyle() {
      var size = this.data.editor.size; // var percentage = (size - this.minSize)/(this.maxSize - this.minSize)*100;

      var position = this.sizeToPosition(size);
      return {
        left: position + '%'
      };
    },
    handleInnerStyle: function handleInnerStyle() {
      var size = this.data.editor.size;
      var percentage = this.minHandleSize + this.sizeToPercentage(size) * (this.maxHandleSize - this.minHandleSize);
      return {
        width: percentage + 'px',
        height: percentage + 'px'
      };
    },
    data: function data() {
      return siteData.store.state.coloringdata;
    }
  },
  methods: {
    onMouseDown: function onMouseDown(event) {
      if (this.data.mode !== 'draw') {
        return;
      }

      this.l('onMouseDown');
      this.mouseDown = true;
      var position = $(this.$refs.canvas).offset();
      this.position = event.pageX - position.left;
      $('body').bind('mousemove touchmove', this.touchMoveMethod);
      $('body').bind('mouseup touchend', this.touchEndMethod);
    },
    onMouseMove: function onMouseMove(event) {
      this.l('onMouseMove');

      if (this.mouseDown) {
        if (!this.dragging) {
          this.startDrag(event);
        }

        this.updateDrag(event);
      }
    },
    onMouseUp: function onMouseUp(event) {
      this.l('onMouseUp');
      this.mouseDown = false;
      $('body').unbind('mousemove touchmove', this.touchMoveMethod);
      $('body').unbind('mouseup touchend', this.touchEndMethod);

      if (this.dragging) {
        this.stopDrag();
      }
    },
    startDrag: function startDrag(event) {
      this.l('startDrag', event);
      this.dragging = true; // this.drag.start.page.x = event.pageX; // Cursor position on the page.
      // this.drag.start.page.y = event.pageY;
      // this.drag.start.x = this.drag.x; //  Unicorn position within it's container.
      // this.drag.start.y = this.drag.y;
    },
    updateDrag: function updateDrag(event) {
      this.previousPosition = this.position;
      var position = $(this.$refs.canvas).offset();
      var x = event.pageX - position.left; // var maxPosition = 100;
      // x = Math.max(x, 0);
      // x = Math.min(x, maxPosition);

      this.saveSize(this.positionToSize(x));
    },
    stopDrag: function stopDrag(event) {
      this.l('stopDrag');
      this.dragging = false;
    },
    clickBar: function clickBar(event) {
      var position = $(this.$refs.canvas).offset();
      var x = event.pageX - position.left;
      this.saveSize(this.positionToSize(x));
    },
    sizeToPercentage: function sizeToPercentage(size) {
      var percentage = (size - this.minSize) / this.maxSize;
      percentage = Math.max(percentage, 0);
      percentage = Math.min(percentage, 1);
      return percentage;
    },
    sizeToPosition: function sizeToPosition(size) {
      // var percentage = (size - this.minSize) / this.maxSize;
      // percentage = Math.max(percentage, 0);
      // percentage = Math.min(percentage, 1);
      // var position = percentage * this.barWidth;
      var position = this.sizeToPercentage(size) * this.barWidth;
      return position;
    },
    positionToSize: function positionToSize(position) {
      var percentage = position / this.barWidth;
      percentage = Math.max(percentage, 0);
      percentage = Math.min(percentage, 1);
      var size = this.minSize + (this.maxSize - this.minSize) * percentage;
      return size;
    },
    saveSize: function saveSize(size) {
      var editorData = siteData.store.state.coloringdata;
      Vue.set(editorData.editor, 'size', size);
      siteData.store.commit('updateColoringData', editorData);
    }
  }
});
"use strict";

Vue.component('coloring-palette-color', {
  template: "\n        <li :class=\"classObject\">\n            <a\n                :style=\"styleObject\"\n                href=\"#\"\n                v-html=\"icon\"\n                @click.prevent=\"click\"\n            />\n        </li>\n    ",
  props: ['data', 'index', 'activeIndex'],
  data: function data() {
    return {
      log: !true
    };
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];

      if (this.activeIndex == this.index) {
        c.push('-active');
      }

      if (this.data.icon) {
        c.push('-icon');
      }

      return c.join(' ');
    },
    styleObject: function styleObject() {
      var result = {};

      if (!this.data.type) {
        result.backgroundColor = 'rgb(' + this.data.r + ', ' + this.data.g + ', ' + this.data.b + ')';
      }

      return result;
    },
    icon: function icon() {
      return this.data.icon ? gbks.icons[this.data.icon] : null;
    }
  },
  methods: {
    click: function click(event) {
      this.$emit('select', this.index);
    }
  }
});
"use strict";

Vue.component('coloring-palette', {
  template: "\n        <div :class=\"classObject\">\n            <div class=\"wrap\">\n                <div class=\"content\">\n                    <ol>\n                        <coloring-palette-color\n                            v-for=\"(item, index) in colors\"\n                            :key=\"index\"\n                            :index=\"index\"\n                            :data=\"item\"\n                            :activeIndex=\"activeIndex\"\n                            @select=\"select\"\n                        />\n                        <li v-if=\"false\" class=\"-toggle\">\n                            <a\n                                href=\"#\"\n                                @click.prevent=\"expand\"\n                                v-html=\"closeIcon\"\n                            />\n                        </li>\n                    </ol>\n                </div>\n            </div>\n        </div>\n    ",
  props: [],
  data: function data() {
    var palette = siteData.palette.slice();
    palette.push({
      r: 0,
      g: 0,
      b: 0
    });
    palette.push({
      r: 245,
      g: 245,
      b: 245
    }); // palette.push({
    //     type: 'erase',
    //     icon: 'erase'
    // });

    return {
      log: true,
      colors: palette,
      activeIndex: 0,
      expanded: true,
      closeIcon: gbks.icons.close
    };
  },
  beforeMount: function beforeMount() {
    this.l('beforeMount', this.id);
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];

      if (this.expanded) {
        c.push('-expanded');
      }

      return c.join(' ');
    }
  },
  methods: {
    select: function select(activeIndex) {
      this.activeIndex = activeIndex;
      var editorData = siteData.store.state.coloringdata;
      this.l('select', activeIndex, this.colors, editorData, this.colors[activeIndex]);
      var color = this.colors[activeIndex];

      if (!color.type) {
        Vue.set(editorData.editor.color, 0, color.r);
        Vue.set(editorData.editor.color, 1, color.g);
        Vue.set(editorData.editor.color, 2, color.b);
      }

      Vue.set(editorData.editor, 'drawMode', color.type ? color.type : 'draw');
      siteData.store.commit('updateColoringData', editorData);
      this.$emit('pick');
      trackman.event('coloring', 'palette', 'select');
    },
    expand: function expand() {
      this.expanded = !this.expanded;
    }
  }
});
"use strict";

Vue.component('coloring-brush-button', {
  template: "\n        <div :class=\"classObject\">\n            <a\n                ref=\"canvas\"\n                href=\"#\"\n                @click.prevent=\"toggle\"\n            >\n                <div\n                    class=\"-brush\"\n                    :style=\"brushStyle\"\n                />\n            </a>\n            <coloring-brushes\n                v-if=\"active\"\n                @pick=\"pick\"\n            />\n        </div>\n    ",
  props: [],
  data: function data() {
    return {
      log: !true,
      active: false
    };
  },
  beforeMount: function beforeMount() {
    this.l('beforeMount', this.id);
    gbks.events.listen('activate-picker', $.proxy(this.onActivatePicker, this), this.id);
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];
      return c.join(' ');
    },
    brushStyle: function brushStyle() {
      return {
        backgroundImage: "url('" + this.brush.src + "')"
      };
    },
    data: function data() {
      return siteData.store.state.coloringdata;
    },
    brush: function brush() {
      return this.data.editor.brush;
    }
  },
  methods: {
    toggle: function toggle() {
      this.active = !this.active;

      if (this.active) {
        gbks.events.call('activate-picker', {
          id: this.id
        });
      }

      trackman.event('coloring', 'brush-button', 'toggle');
    },
    onActivatePicker: function onActivatePicker(data) {
      if (data.id != this.id) {
        this.active = false;
      }
    },
    pick: function pick() {
      this.active = false;
    }
  }
});
"use strict";

Vue.component('coloring-brushes-brush', {
  template: "\n        <li :class=\"classObject\">\n            <a\n                :style=\"styleObject\"\n                href=\"#\"\n                @click.prevent=\"click\"\n            />\n        </li>\n    ",
  props: ['data', 'index', 'activeIndex'],
  data: function data() {
    return {
      log: !true
    };
  },
  beforeMount: function beforeMount() {
    this.l('beforeMount', this.id);
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];

      if (this.activeIndex == this.index) {
        c.push('-active');
      }

      return c.join(' ');
    },
    styleObject: function styleObject() {
      return {
        backgroundImage: "url('" + this.data.src + "')"
      };
    }
  },
  methods: {
    click: function click(event) {
      this.$emit('select', this.index);
    }
  }
});
"use strict";

Vue.component('coloring-brushes', {
  template: "\n        <div :class=\"classObject\">\n            <div class=\"wrap\">\n                <div class=\"content\">\n                    <ol>\n                        <coloring-brushes-brush\n                            v-for=\"(item, index) in brushes\"\n                            :key=\"index\"\n                            :index=\"index\"\n                            :data=\"item\"\n                            :activeIndex=\"activeIndex\"\n                            @select=\"select\"\n                        />\n                    </ol>\n                </div>\n            </div>\n        </div>\n    ",
  props: [],
  data: function data() {
    return {
      log: true,
      brushes: siteData.coloring.brushes,
      activeIndex: 0
    };
  },
  beforeMount: function beforeMount() {
    this.l('beforeMount', this.id);
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];
      return c.join(' ');
    }
  },
  methods: {
    select: function select(activeIndex) {
      this.activeIndex = activeIndex;
      var editorData = siteData.store.state.coloringdata;
      this.l('select', activeIndex, this.brushes, editorData, this.brushes[activeIndex]);
      var brush = this.brushes[activeIndex]; // for(var i in brush) {
      //     Vue.set(editorData.editor.brush, i, brush[i]);
      // }

      Vue.set(editorData.editor, 'brush', brush);
      siteData.store.commit('updateColoringData', editorData);
      this.$emit('pick');
      trackman.event('coloring', 'brushes', 'select', activeIndex);
    }
  }
});
"use strict";

Vue.component('coloring-save-button', {
  template: "\n        <a\n            ref=\"canvas\"\n            :class=\"classObject\"\n            href=\"#\"\n            v-html=\"label\"\n            @mousedown=\"mousedown\"\n            @click.prevent=\"click\"\n        />\n    ",
  props: [],
  data: function data() {
    return {
      log: !true
    };
  },
  beforeMount: function beforeMount() {
    this.l('beforeMount', this.id);
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];
      return c.join(' ');
    },
    label: function label() {
      return siteData.store.state.isMobile ? gbks.icons.checkInCircleFilled : 'Save';
    }
  },
  methods: {
    click: function click() {
      this.$emit('save');
    },
    mousedown: function mousedown() {
      this.sparkle();
    },
    sparkle: function sparkle() {
      var canvas = $(this.$refs.canvas);
      var position = canvas.offset();
      gbks.events.call('glitter-sparkle', {
        x: position.left + canvas.width() / 2,
        y: position.top + canvas.height() / 2
      });
    }
  }
});
"use strict";

Vue.component('coloring-next-button', {
  template: "\n        <a\n            ref=\"canvas\"\n            :class=\"classObject\"\n            href=\"#\"\n            @mousedown=\"mousedown\"\n            @click.prevent=\"click\"\n        >Next</a>\n    ",
  props: [],
  data: function data() {
    return {
      log: !true
    };
  },
  beforeMount: function beforeMount() {
    this.l('beforeMount', this.id);
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];
      return c.join(' ');
    }
  },
  methods: {
    click: function click() {
      this.$emit('next');
    },
    mousedown: function mousedown() {
      this.sparkle();
    },
    sparkle: function sparkle() {
      var canvas = $(this.$refs.canvas);
      var position = canvas.offset();
      gbks.events.call('glitter-sparkle', {
        x: position.left + canvas.width() / 2,
        y: position.top + canvas.height() / 2
      });
    }
  }
});
"use strict";

Vue.component('coloring-pick-button', {
  template: "\n        <a\n            ref=\"canvas\"\n            :class=\"classObject\"\n            href=\"#\"\n            @mousedown=\"mousedown\"\n            @click.prevent=\"click\"\n        >Pick</a>\n    ",
  props: [],
  data: function data() {
    return {
      log: !true
    };
  },
  beforeMount: function beforeMount() {
    this.l('beforeMount', this.id);
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];
      return c.join(' ');
    }
  },
  methods: {
    click: function click() {
      this.$emit('pick');
    },
    mousedown: function mousedown() {
      this.sparkle();
    },
    sparkle: function sparkle() {
      var canvas = $(this.$refs.canvas);
      var position = canvas.offset();
      gbks.events.call('glitter-sparkle', {
        x: position.left + canvas.width() / 2,
        y: position.top + canvas.height() / 2
      });
    }
  }
});
"use strict";

Vue.component('coloring-size-button', {
  template: "\n        <div :class=\"classObject\">\n            <a\n                ref=\"canvas\"\n                href=\"#\"\n                @click.prevent=\"toggle\"\n                v-html=\"icon\"\n            />\n            <slider-vertical\n                v-if=\"active\"\n                :value=\"value\"\n                @change=\"change\"\n            />\n        </div>\n    ",
  props: [],
  data: function data() {
    return {
      log: true,
      active: false,
      icon: gbks.icons.scale
    };
  },
  beforeMount: function beforeMount() {
    this.l('beforeMount', this.id);
    gbks.events.listen('activate-picker', $.proxy(this.onActivatePicker, this), this.id);
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];
      return c.join(' ');
    },
    data: function data() {
      return siteData.store.state.coloringdata;
    },
    value: function value() {
      return this.data.editor.size;
    }
  },
  methods: {
    toggle: function toggle() {
      this.active = !this.active;

      if (this.active) {
        gbks.events.call('activate-picker', {
          id: this.id
        });
      }

      trackman.event('coloring', 'size-button', 'toggle');
    },
    onActivatePicker: function onActivatePicker(data) {
      if (data.id != this.id) {
        this.active = false;
      }
    },
    change: function change(value) {
      this.l('change', value);
      var editorData = siteData.store.state.coloringdata;
      Vue.set(editorData.editor, 'size', value);
      siteData.store.commit('updateColoringData', editorData);
    }
  }
});
"use strict";

Vue.component('coloring-opacity-button', {
  template: "\n        <div :class=\"classObject\">\n            <a\n                ref=\"canvas\"\n                href=\"#\"\n                @click.prevent=\"toggle\"\n                v-html=\"icon\"\n            />\n            <slider-vertical\n                v-if=\"active\"\n                :value=\"value\"\n                @change=\"change\"\n            />\n        </div>\n    ",
  props: [],
  data: function data() {
    return {
      log: !true,
      active: false,
      icon: gbks.icons.opacity
    };
  },
  beforeMount: function beforeMount() {
    this.l('beforeMount', this.id);
    gbks.events.listen('activate-picker', $.proxy(this.onActivatePicker, this), this.id);
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];
      return c.join(' ');
    },
    data: function data() {
      return siteData.store.state.coloringdata;
    },
    value: function value() {
      return this.data.editor.opacity;
    }
  },
  methods: {
    toggle: function toggle() {
      this.active = !this.active;

      if (this.active) {
        gbks.events.call('activate-picker', {
          id: this.id
        });
      }

      trackman.event('coloring', 'opacity-button', 'toggle');
    },
    onActivatePicker: function onActivatePicker(data) {
      if (data.id != this.id) {
        this.active = false;
      }
    },
    change: function change(value) {
      var editorData = siteData.store.state.coloringdata;
      Vue.set(editorData.editor, 'opacity', value);
      siteData.store.commit('updateColoringData', editorData);
    }
  }
});
"use strict";

Vue.component('coloring-back-button', {
  template: "\n        <a\n            :class=\"classObject\"\n            href=\"#\"\n            v-html=\"icon\"\n            @click.prevent=\"click\"\n        />\n    ",
  props: [],
  data: function data() {
    return {
      log: !true,
      icon: gbks.icons.close
    };
  },
  beforeMount: function beforeMount() {
    this.l('beforeMount', this.id);
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];
      return c.join(' ');
    }
  },
  methods: {
    click: function click(event) {
      if (confirm("Sure you want to go back?")) {
        this.$router.push('/');
      } else {}
    }
  }
});
"use strict";

Vue.component('coloring-top-bar', {
  template: "\n        <div :class=\"classObject\">\n            <div class=\"wrap\">\n                <div class=\"content\">\n                    <coloring-back-button v-if=\"false\" />\n                </div>\n            </div>\n        </div>\n    ",
  props: [],
  data: function data() {
    return {
      log: !true
    };
  },
  beforeMount: function beforeMount() {
    this.l('beforeMount', this.id);
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];
      return c.join(' ');
    }
  },
  methods: {}
});
"use strict";

Vue.component('coloring-frame', {
  template: "\n        <div :class=\"classObject\" :style=\"styleObject\">\n            <div class=\"wrap\">\n                <div class=\"content\">\n                    <coloring-editor \n                        :data=\"data\"\n                    />\n                    <coloring-success \n                        v-if=\"data.mode == 'success'\"\n                        :data=\"data\"\n                    />\n                </div>\n            </div>\n        </div>\n    ",
  props: ['data'],
  data: function data() {
    return {
      log: true,
      windowHeight: null
    };
  },
  beforeMount: function beforeMount() {
    gbks.events.listen(gbks.event.Resize, $.proxy(this.resize, this), this.id);
    this.resize();
  },
  mounted: function mounted() {
    this.resize();
    window.scrollTo(0, -1);
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];
      return c.join(' ');
    },
    styleObject: function styleObject() {
      var height = this.windowHeight - 120;
      return {
        height: height + 'px'
      };
    }
  },
  methods: {
    resize: function resize() {
      this.l('resize', window.innerHeight);
      this.windowHeight = window.innerHeight;
    }
  }
});
"use strict";

Vue.component('coloring-coloring', {
  template: "\n        <div :class=\"classObject\" ref=\"container\">\n            <div class=\"wrap\">\n                <div class=\"content\">\n                    <canvas\n                        ref=\"canvas\"\n                        :width=\"canvasWidth\"\n                        :height=\"canvasHeight\"\n                        @mousedown=\"onMouseDown\"\n                        @touchstart=\"onMouseDown\"\n                    />\n                </div>\n            </div>\n        </div>\n    ",
  props: [],
  data: function data() {
    console.log('coloring', siteData.store.state);
    return {
      log: true,
      active: false,
      dragging: false,
      mouseDown: false,
      touchMoveMethod: $.proxy(this.onMouseMove, this),
      touchEndMethod: $.proxy(this.onMouseUp, this),
      position: null,
      previousPosition: null,
      previousLineWidth: null,
      brushImage: null,
      tintedBrushImage: null,
      opacity: 0.1,
      minBrushSize: 5,
      maxBrushSize: 100
    };
  },
  beforeMount: function beforeMount() {
    this.l('beforeMount', this.id);
    gbks.events.listen('coloring-reset', $.proxy(this.reset, this), this.id);
    this.updateBrush();
  },
  mounted: function mounted() {},
  watch: {
    brush: function brush(next, previous) {
      this.updateBrush();
    },
    color: function color(next, previous) {
      this.tintBrush();
    }
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];

      if (this.data.mode !== 'draw') {
        c.push('-inactive');
      }

      return c.join(' ');
    },
    canvasWidth: function canvasWidth() {
      return this.data.editor.width;
    },
    canvasHeight: function canvasHeight() {
      return this.data.editor.height;
    },
    data: function data() {
      return siteData.store.state.coloringdata;
    },
    color: function color() {
      return this.data.editor.color;
    },
    brush: function brush() {
      return this.data.editor.brush;
    }
  },
  methods: {
    onMouseDown: function onMouseDown(event) {
      if (this.data.mode !== 'draw') {
        return;
      }

      this.l('onMouseDown');
      this.mouseDown = true;
      var position = $(this.$refs.container).offset();

      if (event.pageX) {
        this.position = {
          x: event.pageX - position.left,
          y: event.pageY - position.top
        };
      } else {
        this.position = {
          x: event.originalEvent.touches[0].screenX - position.left,
          y: event.originalEvent.touches[0].screenY - position.top
        };
      }

      var brushWidth = this.minBrushSize + (this.maxBrushSize - this.minBrushSize) * this.data.editor.size;
      var brushHeight = brushWidth * this.brush.height / this.brush.width;
      var x = this.position.x - brushWidth / 2;
      var y = this.position.y - brushHeight / 2;
      this.l('x', x, y, brushWidth, brushHeight);
      var context = this.$refs.canvas.getContext('2d');
      context.globalAlpha = this.opacity * this.data.editor.opacity;
      context.drawImage(this.tintedBrushImage, x, y, brushWidth, brushHeight); // var color = this.color;
      // context.fillStyle = 'rgba('+color[0]+','+color[1]+','+color[2]+', '+this.opacity+')';
      // context.beginPath();
      // context.arc(this.position.x, this.position.y, this.data.editor.size/2, 0, 2 * Math.PI);
      // context.fill();

      this.previousLineWidth = brushWidth;
      $('body').bind('mousemove touchmove', this.touchMoveMethod);
      $('body').bind('mouseup touchend', this.touchEndMethod);
    },
    onMouseMove: function onMouseMove(event) {
      this.l('onMouseMove', event);

      if (this.mouseDown) {
        if (!this.dragging) {
          this.startDrag(event);
        }

        this.updateDrag(event);
      }
    },
    onMouseUp: function onMouseUp(event) {
      this.l('onMouseUp');
      this.mouseDown = false;
      $('body').unbind('mousemove touchmove', this.touchMoveMethod);
      $('body').unbind('mouseup touchend', this.touchEndMethod);

      if (this.dragging) {
        this.stopDrag();
      }
    },
    startDrag: function startDrag(event) {
      this.l('startDrag', event);
      this.dragging = true; // this.drag.start.page.x = event.pageX; // Cursor position on the page.
      // this.drag.start.page.y = event.pageY;
      // this.drag.start.x = this.drag.x; //  Unicorn position within it's container.
      // this.drag.start.y = this.drag.y;
    },
    updateDrag: function updateDrag(event) {
      this.previousPosition = this.position;
      var position = $(this.$refs.container).offset();

      if (event.pageX) {
        this.position = {
          x: event.pageX - position.left,
          y: event.pageY - position.top
        };
      } else {
        this.position = {
          x: event.originalEvent.touches[0].screenX - position.left,
          y: event.originalEvent.touches[0].screenY - position.top
        };
      }

      var color = this.color;
      this.l('updateDraggy', color, this.data);
      var deltaX = this.position.x - this.previousPosition.x;
      var deltaY = this.position.y - this.previousPosition.y;
      var delta = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      var lineWidthDistanceMultiplier = Math.max(0.25, (50 - delta) / 50);
      var targetLineWidth = this.minBrushSize + (this.maxBrushSize - this.minBrushSize) * this.data.editor.size; // What the user has specified.

      var adjustedLineWidth = targetLineWidth * lineWidthDistanceMultiplier;
      var lineWidth = this.previousLineWidth + (adjustedLineWidth - this.previousLineWidth) * 0.2;
      var context = this.$refs.canvas.getContext('2d'); // context.strokeStyle = 'rgba('+color[0]+','+color[1]+','+color[2]+','+this.opacity+')';
      // context.lineWidth = lineWidth;
      // context.lineCap = 'round';
      // context.beginPath();
      // context.moveTo(this.previousPosition.x, this.previousPosition.y);
      // context.lineTo(this.position.x, this.position.y);

      var opacityDistanceMultiplier = lineWidthDistanceMultiplier;
      context.globalAlpha = this.opacity * opacityDistanceMultiplier * this.data.editor.opacity;
      var stepCount = delta / 2;
      var stepDistance = delta / stepCount;
      var step = 0;
      var stepX, stepY, brushWidth, brushHeight, stepLineWidth;

      for (; step < stepCount; step++) {
        stepLineWidth = this.previousLineWidth + (this.previousLineWidth - lineWidth) / stepCount * step;
        brushWidth = stepLineWidth;
        brushHeight = brushWidth * this.brush.height / this.brush.width;
        stepX = this.previousPosition.x + deltaX / stepCount * step - brushWidth / 2;
        stepY = this.previousPosition.y + deltaY / stepCount * step - brushHeight / 2;
        context.drawImage(this.tintedBrushImage, stepX, stepY, brushWidth, brushHeight);
      } // context.stroke();


      this.previousLineWidth = lineWidth; // this.e.canvas.css({
      //     left: x+'px',
      //     top: y+'px'
      // });
    },
    stopDrag: function stopDrag(event) {
      this.l('stopDrag');
      this.dragging = false;
    },
    updateBrush: function updateBrush() {
      var image = new Image();
      image.onload = $.proxy(this.brushLoaded, this);
      image.src = this.brush.src;
      this.l('updateBrush', image);
      this.brushImage = image;
    },
    brushLoaded: function brushLoaded() {
      this.tintBrush();
    },
    tintBrush: function tintBrush() {
      var canvas = $('<canvas></canvas');
      canvas.attr({
        width: this.brush.width,
        height: this.brush.height
      }); // $('body').append(canvas);

      var context = canvas[0].getContext('2d');
      context.fillStyle = 'rgba(' + this.color[0] + ',' + this.color[1] + ',' + this.color[2] + ',1)';
      context.fillRect(0, 0, this.brush.width, this.brush.height);
      context.globalCompositeOperation = 'destination-in';
      context.drawImage(this.brushImage, 0, 0, this.brush.width, this.brush.height);
      context.globalCompositeOperation = 'source-over'; // context.drawImage(this.brushImage, 0, 0, this.brush.width, this.brush.height);
      // context.globalCompositeOperation = 'screen';
      // context.fillStyle = 'rgba('+this.color[0]+','+this.color[1]+','+this.color[2]+',1)';
      // context.fillRect(0, 0, this.brush.width, this.brush.height);
      // context.globalCompositeOperation = 'source-over';

      this.l('tintBrush', canvas[0]);
      this.tintedBrushImage = canvas[0];
    },
    reset: function reset() {
      var canvas = this.$refs.canvas;
      var context = this.$refs.canvas.getContext('2d');
      context.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
    }
  }
});
"use strict";

Vue.component('coloring-template', {
  template: "\n        <div :class=\"classObject\">\n            <div class=\"wrap\">\n                <div class=\"content\">\n                    <img\n                        :src=\"data.template.src\"\n                        :width=\"data.template.width\"\n                        :height=\"data.template.height\"\n                    >\n                </div>\n            </div>\n        </div>\n    ",
  props: [],
  data: function data() {
    return {
      log: true
    };
  },
  beforeMount: function beforeMount() {
    this.l('beforeMount', this.id);
  },
  mounted: function mounted() {},
  computed: {
    classObject: function classObject() {
      var c = [this.id];
      return c.join(' ');
    },
    data: function data() {
      return siteData.store.state.coloringdata;
    }
  },
  methods: {}
});
"use strict";

Vue.component('coloring-editor', {
  template: "\n        <div :class=\"classObject\" :style=\"styleObject\">\n            <div class=\"wrap\">\n                <div class=\"content\">\n                    <coloring-coloring />\n                    <coloring-template />\n                </div>\n            </div>\n        </div>\n    ",
  props: [],
  data: function data() {
    return {
      log: true,
      size: null
    };
  },
  beforeMount: function beforeMount() {
    gbks.events.listen(gbks.event.Resize, $.proxy(this.resize, this), this.id);
    this.calculateSize();
  },
  mounted: function mounted() {
    this.resize();
  },
  watch: {
    template: function template(next, previous) {
      this.calculateSize();
    }
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];
      return c.join(' ');
    },
    styleObject: function styleObject() {
      var s = {};

      if (this.size) {
        s = {
          left: this.size.left + 'px',
          top: this.size.top + 'px',
          width: this.size.width + 'px',
          height: this.size.height + 'px'
        };
      }

      return s;
    },
    template: function template() {
      return this.data.template;
    },
    data: function data() {
      return siteData.store.state.coloringdata;
    },
    windowWidth: function windowWidth() {
      return siteData.store.state.windowWidth;
    },
    windowHeight: function windowHeight() {
      return siteData.store.state.windowHeight;
    }
  },
  methods: {
    calculateSize: function calculateSize() {
      var windowWidth = this.windowWidth;
      var windowHeight = this.windowHeight;

      if (siteData.store.state.isMobile) {
        windowHeight = window.innerHeight;
      }

      var imageWidth = this.data.template.width;
      var imageHeight = this.data.template.height;
      var imageRatio = imageWidth / imageHeight;
      var topMargin = 50;
      var bottomMargin = 70;
      var leftMargin = 20;
      var rightMargin = 20;
      var maxWidth = windowWidth - leftMargin - rightMargin;
      var maxHeight = windowHeight - topMargin - bottomMargin;
      var newWidth = imageWidth;
      var newHeight = imageHeight;

      if (newWidth > maxWidth) {
        newWidth = maxWidth;
        newHeight = newWidth / imageRatio;
      }

      if (newHeight > maxHeight) {
        newHeight = maxHeight;
        newWidth = newHeight * imageRatio;
      }

      var left = leftMargin + (maxWidth - newWidth) / 2;
      var top = topMargin + (maxHeight - newHeight) / 2;
      var s = {
        left: left,
        top: top,
        width: newWidth,
        height: newHeight
      };
      this.data.editor.x = left;
      this.data.editor.y = top;
      this.data.editor.width = newWidth;
      this.data.editor.height = newHeight;
      this.size = s;
    },
    resize: function resize() {
      this.l('resize', window.innerHeight);
      this.calculateSize();
    }
  }
});
"use strict";

Vue.component('coloring-share-options', {
  template: "\n        <div :class=\"classObject\">\n            <div class=\"wrap\">\n                <div class=\"content\">\n                    <h1>Woohoo!!!</h1>\n                    <p class=\"-copy\">Your image turned out so amazing, now go and share the happiness with he world! You can always view it at this link:</p>\n                    <a\n                        :href=\"link\"\n                        target=\"_blank\"\n                        @click=\"clickUrl\"\n                    >{{ link }}</a>\n\n                    <div class=\"-share-options\">\n                        <a\n                            :href=\"data.upload.data.image\"\n                            download\n                            @click=\"download\"\n                        >Download image</a>\n                        <a\n                            v-if=\"supportsWebShare\"\n                            href=\"#\"\n                            @click.prevent=\"webshare\"\n                        >Share image</a>\n                    </div>\n\n                    <div class=\"-next-options\">\n                        <a\n                            href=\"#\"\n                            @click.prevent=\"again\"\n                        >Color another image</a>\n                        <router-link\n                            to=\"/\"\n                            @click.native=\"done\"\n                        >I'm done for now</router-link>\n                    </div>\n                </div>\n            </div>\n        </div>\n    ",
  props: ['data'],
  data: function data() {
    return {
      log: !true
    };
  },
  beforeMount: function beforeMount() {
    this.l('beforeMount', this.id);
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];
      return c.join(' ');
    },
    supportsWebShare: function supportsWebShare() {
      return window.navigator.share ? true : false;
    },
    link: function link() {
      return this.data.upload.data.url;
    }
  },
  methods: {
    download: function download() {
      trackman.event('coloring', 'share-options', 'download');
    },
    webshare: function webshare() {
      trackman.event('coloring', 'share-options', 'webshare');
      navigator.share({
        title: this.data.upload.caption,
        url: this.data.upload.data.url
      });
    },
    again: function again() {
      trackman.event('coloring', 'share-options', 'again');
      gbks.events.call('coloring-reset');
    },
    clickUrl: function clickUrl() {
      trackman.event('coloring', 'share-options', 'url');
    },
    done: function done() {
      trackman.event('coloring', 'share-options', 'done');
    }
  }
});
"use strict";

Vue.component('coloring-share-question', {
  template: "\n        <div :class=\"classObject\">\n            <div class=\"wrap\">\n                <div class=\"content\">\n                    <div class=\"-name\">\n                        <h2>What's your lovely&nbsp;name?</h2>\n                        <input\n                            type=\"text\"\n                            v-model=\"name\"\n                            placeholder=\"Enter your name here...\"\n                        />\n                    </div>\n\n                    <div class=\"-approval\">\n                        <p>Can we post this for others to&nbsp;see?</p>\n                        <a\n                            :class=\"approved ? '-active' : ''\"\n                            href=\"#\" \n                            @click.prevent=\"approve\"\n                        >Yes, sure</a>\n                        <a\n                            :class=\"approved ? '' : '-active'\"\n                            href=\"#\" \n                            @click.prevent=\"decline\"\n                        >No, thanks</a>\n                    </div>\n\n                    <a\n                        class=\"-done\"\n                        href=\"#\" \n                        @click.prevent=\"next\"\n                    >Next</a>\n                </div>\n            </div>\n        </div>\n    ",
  props: [],
  data: function data() {
    return {
      log: !true,
      name: '',
      approved: true
    };
  },
  beforeMount: function beforeMount() {
    this.l('beforeMount', this.id);
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];
      return c.join(' ');
    }
  },
  methods: {
    approve: function approve() {
      this.approved = true;
    },
    decline: function decline() {
      this.approved = false;
    },
    next: function next() {
      var editorData = siteData.store.state.coloringdata;
      this.l('next', editorData);
      Vue.set(editorData.upload, 'name', this.name);
      Vue.set(editorData.upload, 'public', this.approved);
      siteData.store.commit('updateColoringData', editorData);
      this.$emit('next');
    }
  }
});
"use strict";

Vue.component('coloring-success', {
  template: "\n        <div :class=\"classObject\">\n            <div class=\"wrap\">\n                <div class=\"content\">\n                    <coloring-share-question\n                        v-if=\"mode == 'approve'\"\n                        @next=\"next\"\n                    />\n                    <coloring-share-options\n                        v-else\n                        :data=\"data\"\n                    />\n                </div>\n            </div>\n        </div>\n    ",
  props: ['data'],
  data: function data() {
    return {
      log: !true,
      mode: 'approve'
    };
  },
  beforeMount: function beforeMount() {
    this.l('beforeMount', this.id);
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];
      return c.join(' ');
    }
  },
  methods: {
    next: function next(data) {
      gbks.cornify.coloring.updater.update();
      trackman.event('coloring', 'success', 'next');
      this.mode = 'share';
    }
  }
});
"use strict";

var gbks = gbks || {};
gbks.cornify = gbks.cornify || {};
gbks.cornify.coloring = gbks.cornify.coloring || {};
gbks.cornify.coloring.composer = {
  data: null,
  canvas: null,
  context: null,
  compose: function compose(data) {
    this.data = data;

    if (!this.canvas) {
      this.canvas = $('<canvas class="composer"></canvas>');
      this.context = this.canvas[0].getContext('2d'); // $('body').append(this.canvas);
    }

    console.log('composer', data);
    var scale = data.template.width / data.editor.width;
    this.canvas.attr({
      width: data.editor.width,
      height: data.editor.height
    });
    this.context.fillStyle = '#ffffff';
    this.context.fillRect(0, 0, data.editor.width, data.editor.height);
    this.drawColoring();
    this.drawTemplate();
    return this.prepareOutputData();
  },
  drawColoring: function drawColoring() {
    var canvas = $('.coloring-coloring canvas');
    var context = canvas[0].getContext('2d');
    console.log('drawColoring', canvas, context);
    this.context.drawImage(canvas[0], 0, 0, this.data.editor.width, this.data.editor.height);
  },
  drawTemplate: function drawTemplate() {
    var image = $('.coloring-template img');
    this.context.drawImage(image[0], 0, 0, this.data.editor.width, this.data.editor.height);
  },
  prepareOutputData: function prepareOutputData() {
    var width = this.data.editor.width;
    var height = this.data.editor.height;
    var factor = width / height;
    var maxSize = 1200;
    var composedImage; // Redraw it smaller if needed

    if (width > maxSize || height > maxSize) {
      if (width > maxSize) {
        width = maxSize;
        height = width / factor;
      }

      if (height > maxSize) {
        height = maxSize;
        width = height * factor;
      }

      var canvas = $('<canvas width="' + width + '" height="' + height + '"></canvas>');
      var context = canvas[0].getContext('2d');
      context.drawImage(this.canvas[0], 0, 0, width, height);
      composedImage = canvas[0].toDataURL("image/jpeg", 0.85);
    } else {
      composedImage = this.canvas[0].toDataURL("image/jpeg", 0.85);
    } // console.log('prepareOutputData', composedImage, this.e.drawing);
    // this.data.composedImage = composedImage;
    // this.data.composedImageWidth = width;
    // this.data.composedImageHeight = height;


    console.log('prepareOutputData', this.data);
    return {
      composedImage: composedImage,
      width: width,
      height: height
    };
  }
};
"use strict";

var gbks = gbks || {};
gbks.cornify = gbks.cornify || {};
gbks.cornify.coloring = gbks.cornify.coloring || {};
gbks.cornify.coloring.updater = {
  baseUrl: 'https://www.cornify.com/happyi/',
  update: function update() {
    var editorData = siteData.store.state.coloringdata;
    console.log('ColoringUpdater.update', editorData.upload);
    trackman.event('coloring', 'updater', 'update');

    if (editorData.upload.success === true) {
      this.performUpdate();
    } else if (editorData.upload.started === true) {
      // Still saving
      this.startUpdateTimer();
    } else {
      // Didn't event start saving? Probably an error happening
      console.log('ColoringUpdater.update image not saving yet?');
      trackman.event('coloring', 'updater', 'could not update');
    }
  },
  startUpdateTimer: function startUpdateTimer() {
    console.log('ColoringUpdater.startUpdateTimer');
    trackman.event('coloring', 'updater', 'startUpdateTimer');
    clearTimeout(this.updateTimer);
    this.updateTimer = setTimeout($.proxy(this.update, this), 500);
  },
  performUpdate: function performUpdate() {
    var editorData = siteData.store.state.coloringdata;
    var data = {
      id: editorData.upload.data.id,
      name: editorData.upload.name,
      public: editorData.upload.public ? 1 : 0
    }; // Grab current time

    var d = new Date();
    this.updateStartTime = d.getTime();
    console.log('ColoringUpdater.performUpdate', data);

    if (config.isDev) {
      setTimeout($.proxy(this.onUpdateSuccess, this, {
        success: true,
        id: 467,
        name: 'Peter',
        public: 1
      }), 250);
    } else {
      $.ajax({
        url: this.baseUrl + 'updatephoto',
        data: data,
        dataType: 'jsonp',
        type: 'POST',
        success: $.proxy(this.onUpdateSuccess, this),
        error: $.proxy(this.onUpdateError, this)
      });
    }
  },
  onUpdateSuccess: function onUpdateSuccess(data) {
    console.log('ColoringUpdater.onUpdateSuccess', data); // Calculate time passed since start of this call

    var d = new Date();
    var t = d.getTime();
    var delta = t - this.updateStartTime;
    trackman.event('coloring', 'updater', 'updatesuccess', delta);
    this.updateColoringData({
      update: data
    });
    gbks.events.call(gbks.event.PhotoUploadError);
  },
  onUpdateError: function onUpdateError(data) {
    console.log('ColoringUpdater.onUpdateError', data); // Calculate time passed since start of this call

    var d = new Date();
    var t = d.getTime();
    var delta = t - this.updateStartTime;
    trackman.event('coloring', 'updater', 'updateerror', delta);
  },
  updateColoringData: function updateColoringData(props) {
    var editorData = siteData.store.state.coloringdata;

    for (var i in props) {
      Vue.set(editorData.upload, i, props[i]);
    }

    siteData.store.commit('updateColoringData', editorData);
  }
};
"use strict";

var gbks = gbks || {};
gbks.cornify = gbks.cornify || {};
gbks.cornify.coloring = gbks.cornify.coloring || {};
gbks.cornify.coloring.saver = {
  init: function init(data) {
    this.baseUrl = 'https://www.cornify.com/happyi/';
    console.log('ColoringSaver.init', data);
    this.data = data;
    this.saveStartTime = null;
    this.updateStartTime = null;
    this.save();
  },
  updateColoringData: function updateColoringData(props) {
    var editorData = siteData.store.state.coloringdata;

    for (var i in props) {
      Vue.set(editorData.upload, i, props[i]);
    }

    siteData.store.commit('updateColoringData', editorData);
  },
  save: function save() {
    var data = {
      photo: this.data.composedImage,
      width: this.data.width,
      height: this.data.height,
      type: 'coloring'
    }; // if(this.data.text.text != this.data.text.defaultText) {
    //     data.caption = this.data.text.text;
    // }
    // this.data.save.isSaving = true;

    this.updateColoringData({
      started: true
    });
    console.log('ColoringSaver.save', data); // gbks.tools.track('Photoeditor', 'imagesaver', 'save');
    // Grab current time

    var d = new Date();
    this.saveStartTime = d.getTime();

    if (config.isDev) {
      setTimeout($.proxy(this.onSaveSuccess, this, {
        success: true,
        id: 467,
        width: 400,
        height: 400,
        file: 'file.jpg',
        type: 'coloring',
        image: 'https://www.cornify.com/cornfied/file.jpg',
        url: 'https://www.cornify.com/unicorn/' + 467
      }), 250);
    } else {
      $.ajax({
        url: this.baseUrl + 'uploadphoto',
        data: data,
        dataType: 'json',
        type: 'POST',
        method: 'POST',
        success: $.proxy(this.onSaveSuccess, this),
        error: $.proxy(this.onSaveError, this)
      });
    }
  },
  onSaveSuccess: function onSaveSuccess(data) {
    console.log('ColoringSaver.onSaveSuccess', data); // Calculate time passed since start of this call

    var d = new Date();
    var t = d.getTime();
    var delta = t - this.saveStartTime;
    trackman.event('coloring', 'imagesaver', 'savesuccess', delta);
    this.updateColoringData({
      success: true,
      data: data
    }); // this.data.save.isSaving = false;
    // this.data.save.isSaved = true;
    // this.data.save.success = true;
    // this.data.save.result = data;
    // gbks.events.call(gbks.event.PhotoUploadSuccess);
  },
  onSaveError: function onSaveError(data) {
    console.log('ColoringSaver.onSaveError', data); // Calculate time passed since start of this call

    var d = new Date();
    var t = d.getTime();
    var delta = t - this.saveStartTime;
    trackman.event('coloring', 'imagesaver', 'saveerror', delta);
    this.updateColoringData({
      error: true
    }); // this.data.save.isSaving = false;
    // this.data.save.isSaved = false;
    // this.data.save.success = false;
    // this.data.save.result = data;
    // gbks.events.call(gbks.event.PhotoUploadError);
  }
};
"use strict";

Vue.component('home-intro', {
  template: "\n        <div :class=\"classObject\">\n            <h1>Cornify is the #1 unicorn and rainbow service worldwide, spreading sparkly happiness around the world.</h1>\n            <p>400,000,000+ unicorns and rainbows provided since&nbsp;2009.</p>\n        </div>\n    ",
  props: [],
  data: function data() {
    return {
      log: !true
    };
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];
      return c.join(' ');
    }
  },
  methods: {}
});
"use strict";

Vue.component('home-button', {
  template: "\n        <div :class=\"classObject\">\n            <div class=\"wrap\">\n                <div class=\"content\">\n                    <div\n                        class=\"message\" v-if=\"showMessage\"\n                        @click.prevent=\"click\"\n                    >\n                        <p :key=\"'message_'+messageIndex\">{{ messages[messageIndex] }}</p>\n                    </div>\n                    <button\n                        role=\"button\"\n                        title=\"The most powerful button on the Internets\"\n                        aria-label=\"The most powerful button on the Internets\"\n                        @click=\"click\"\n                    >  \n                        <img\n                            src=\"/assets/cornify-button-biggy.png\"\n                            width=\"320\"\n                            height=\"100\"\n                            alt=\"Unicorn and rainbow button\"\n                            title=\"Click this button for unicorns and rainbows to the max\"\n                        >\n                    </button>\n                </div>\n            </div>\n        </div>\n    ",
  props: [],
  data: function data() {
    var messages = ['Try it out, click the button!', 'That\s it! Again!', 'Woohoo! One more time!!!', 'Super, keep going!', '😍😍😍😍😍', 'Yes! Yes! Yes!', 'So much happiness...', 'You are the best!', 'Love it', 'Super cool!', 'OMG LUV!', 'Incredible!', 'Fantastic!', 'Sooo magical!', 'Keep going!', 'So colorful!', 'Those sparkles rock!', 'Intense!', 'Yippie!!!', '...', 'Absolute love!'];
    return {
      log: true,
      showMessage: true,
      messageIndex: 0,
      messages: messages
    };
  },
  beforeMount: function beforeMount() {
    this.l('beforeMount', this.id);
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];
      return c.join(' ');
    }
  },
  methods: {
    click: function click() {
      cornify_add();
      this.messageIndex++;

      if (this.messageIndex >= this.messages.length) {
        this.showMessage = false;
      }

      trackman.event('home', 'button', 'cornify');
    }
  }
});
"use strict";

Vue.component('home-unicorn-day', {
  template: "\n        <div :class=\"classObject\" v-if=\"isActive\">\n            <svg-multiline-text\n                v-if=\"itsToday\"\n                :text=\"'Today is International Unicorn Day ' + currentYear + '!!!'\"\n                :autoResize=\"true\"\n                :color=\"textColor\"\n                :charactersPerLine=\"isMobilee ? 20 : nulls\"\n            />\n            <p v-if=\"itsToday\">Woohoo! <a href=\"https://www.cornify.com/international-unicorn-day\">Time to celebrate</a>!</p>\n            <p v-if=\"!itsToday\">Only {{ textUntil }} until <a href=\"https://www.cornify.com/international-unicorn-day\">International Unicorn Day {{ currentYear }}</a>!</p>\n        </div>\n    ",
  data: function data() {
    return {
      log: true,
      isActive: false,
      textUntil: null,
      itsToday: null,
      timer: null,
      currentYear: new Date().getFullYear(),
      textColor: 'purple',
      textColorTimer: null
    };
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];

      if (this.itsToday) {
        c.push('-today');
      }

      return c.join(' ');
    },
    isMobile: function isMobile() {
      return siteData.store.state.isMobile;
    }
  },
  beforeMount: function beforeMount() {
    this.update();

    if (this.isActive) {
      this.timer = setInterval($.proxy(this.update, this), 1000);
      this.textColorTimer = setInterval($.proxy(this.updateTextColor, this), 1000);
    }
  },
  beforeDestroy: function beforeDestroy() {
    clearInterval(this.timer);
    clearInterval(this.textColorTimer);
  },
  methods: {
    update: function update() {
      var now = new Date();
      var text = '';
      var itsToday = now.getMonth() == 3 && now.getDate() == 9;

      if (!itsToday) {
        var target = new Date();
        target.setMonth(3);
        target.setDate(9);

        if (target < now) {
          target.setFullYear(target.getFullYear() + 1);
        }

        var dayInSeconds = 60 * 60 * 24;
        var hoursInSeconds = 60 * 60;
        var minutesInSeconds = 60;
        var seconds = (target - now) / 1000;
        var days = Math.floor(seconds / dayInSeconds);
        seconds -= days * dayInSeconds;
        var hours = Math.floor(seconds / hoursInSeconds);
        seconds -= hours * hoursInSeconds;
        var minutes = Math.floor(seconds / minutesInSeconds);
        seconds -= Math.round(minutes * minutesInSeconds);
        var bits = [];

        if (days > 0) {
          bits.push(days + ' day' + (days == 1 ? '' : 's'));
        }

        if (hours > 0) {
          bits.push(hours + ' hour' + (hours == 1 ? '' : 's'));
        }

        if (minutes > 0) {
          bits.push(minutes + ' minute' + (minutes == 1 ? '' : 's'));
        } // if(seconds > 0) {
        //     bits.push(seconds + 'second' + (seconds == 1 ? '' : 's'));
        // }


        this.textUntil = bits.join(', ');
      } // itsToday = true;


      this.itsToday = itsToday;
      this.isActive = days <= 30;
    },
    updateTextColor: function updateTextColor() {
      if (this.itsToday) {
        var colors = ['purple', 'blue', 'green', 'orange', 'yellow', 'red'];
        var index = colors.indexOf(this.textColor) + 1;

        if (index >= colors.length) {
          index = 0;
        }

        this.textColor = colors[index];
      }
    }
  }
});
"use strict";

Vue.component('home-list-item-promo', {
  template: "\n        <li :class=\"classObject\">\n            <div class=\"wrap\">\n                <div class=\"content\">\n                    <template v-if=\"type == 'photo-editor'\">\n                        <h2>\n                            <router-link\n                                to=\"/photo\"\n                                @click.native=\"clickPhotoEditor\"\n                            >\n                                <img\n                                    src=\"/assets/icons/brush-big.png\"\n                                    srcset=\"/assets/icons/brush-big.png 1x, /assets/icons/brush-big@2x.png 2x\"\n                                    width=\"179\"\n                                    height=\"166\"\n                                    alt=\"Big colorful paint brush\"\n                                >\n                                Cornify your own photo!!!\n                            </router-link>\n                        </h2>\n                    </template>\n                    <template v-else-if=\"type == 'coloring'\">\n                        <h2>\n                            <router-link\n                                to=\"/coloring\"\n                                @click.native=\"clickColoring\"\n                            >\n                                <img\n                                    src=\"/assets/icons/brush-big.png\"\n                                    srcset=\"/assets/icons/brush-big.png 1x, /assets/icons/brush-big@2x.png 2x\"\n                                    width=\"179\"\n                                    height=\"166\"\n                                    alt=\"Big colorful paint brush\"\n                                >\n                                Create your own unicorn&nbsp;coloring!!!\n                            </router-link>\n                        </h2>\n                    </template>\n                    <template v-else-if=\"type == 'social'\">\n                        <h2>Let's be BeStIeS \uD83D\uDC9C\uD83D\uDC99\uD83E\uDDE1</h2>\n                        <p>\n                            <a \n                                href=\"https://twitter.com/cornify\" \n                                target=\"_blank\" \n                                rel=\"me\"\n                                v-html=\"twitterIcon\"\n                                @click=\"clickSocial('twitter')\"\n                            />\n                            <a \n                                href=\"https://www.instagram.com/cornifylove/\" \n                                target=\"_blank\" \n                                rel=\"me\"\n                                v-html=\"instagramIcon\"\n                                @click=\"clickSocial('instagram')\"\n                            />\n                            <a \n                                href=\"https://www.facebook.com/unicornhappiness\" \n                                target=\"_blank\" \n                                rel=\"me\"\n                                v-html=\"facebookIcon\"\n                                @click=\"clickSocial('facebook')\"\n                            />\n                        </p>\n                    </template>\n                    <template v-else-if=\"type == 'gifts' && gift\">\n                        <router-link\n                            :to=\"'/gift/' + gift.id\"\n                            :title=\"gift.title\"\n                            :style=\"giftlLinkStyle\"\n                            @click.native=\"clickGifts\"\n                        >\n                            <img\n                                :src=\"'https://www.cornify.com/assets/gifts/' + gift.image\"\n                                :width=\"gift.width\"\n                                :height=\"gift.height\"\n                                :alt=\"gift.title\"\n                            />\n                        </router-link>\n                        <div class=\"copy\">\n                            <h3>\n                                <router-link\n                                    :to=\"'/gift/' + gift.id\"\n                                    @click.native=\"clickGifts\"\n                                >\n                                    {{ gift.title }}\n                                </router-link>\n                            </h3>\n                        </div>\n                    </template>\n                    <template v-else-if=\"type == 'gallery' && unicornPic\">\n                        <router-link\n                            :to=\"'/unicornpictures/' + unicornPic.id\"\n                            :title=\"unicornPic.title\"\n                        >\n                            <img\n                                ref=\"image\"\n                                :src=\"'https://www.cornify.com/pics/preview/'+unicornPic.file\"\n                                :width=\"unicornPic.width\"\n                                :height=\"unicornPic.height\"\n                                :alt=\"unicornPic.description\"\n                            />\n                        </router-link>\n                    </template>\n                </div>\n            </div>\n        </li>\n    ",
  props: ['windowWidth', 'windowHeight'],
  data: function data() {
    var types = ['photo-editor', 'coloring', 'gifts', 'social' // 'gallery'
    ];
    var type = types[Math.floor(Math.random() * types.length)];
    var gift = null;

    if (type == 'gifts' && this.gifts) {
      gift = this.gifts[Math.floor(Math.random() * this.gifts.length)];
      console.log('dddd', this.gifts, gift);
    }

    var unicornPic = null;

    if (type == 'gallery' && this.unicornpics) {
      unicornPic = this.unicornpics[Math.floor(Math.random() * this.unicornpics.length)];
    }

    return {
      log: !true,
      loading: true,
      angle: Math.round(Math.random() * 6 - 3),
      type: type,
      gift: gift,
      unicornPic: unicornPic,
      twitterIcon: gbks.icons.twitter,
      instagramIcon: gbks.icons.instagram,
      facebookIcon: gbks.icons.facebook
    };
  },
  beforeMount: function beforeMount() {
    this.l('beforeMount', this.id, this.data);

    if (this.type == 'gallery') {
      if (!this.unicornpics) {
        gbks.events.listen('api-unicorn-pics-success', $.proxy(this.onLoadUnicornPics, this), this.id);
        gbks.api.unicornPics(1, 100);
      }
    } else if (this.type == 'gifts') {
      if (!this.gifts) {
        gbks.events.listen('api-gifts-success', $.proxy(this.onLoadGifts, this), this.id);
        gbks.api.gifts();
      } else if (!this.gift) {
        this.gift = this.gifts[Math.floor(Math.random() * this.gifts.length)];
      }
    }
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];
      c.push('-' + this.type);
      return c.join(' ');
    },
    styleObject: function styleObject() {
      var result = {
        transform: 'rotate(' + this.angle + 'deg)'
      };
      return result;
    },
    unicornpics: function unicornpics() {
      return siteData.store.state.unicornpics;
    },
    gifts: function gifts() {
      return siteData.store.state.gifts;
    },
    giftlLinkStyle: function giftlLinkStyle() {
      var padding = this.gift.height / this.gift.width * 100;
      return {
        paddingBottom: padding + '%',
        backgroundImage: "url('https://www.cornify.com/assets/gifts/" + this.gift.image + "')"
      };
    }
  },
  methods: {
    onLoadUnicornPics: function onLoadUnicornPics() {
      this.unicornPic = this.unicornpics[Math.floor(Math.random() * this.unicornpics.length)];
    },
    onLoadGifts: function onLoadGifts() {
      this.l('onLoadGifts', this.gifts);
      this.gift = this.gifts[Math.floor(Math.random() * this.gifts.length)];
    },
    clickPhotoEditor: function clickPhotoEditor() {
      trackman.event('home', 'list-item-promo', 'click-photo-editor');
    },
    clickColoring: function clickColoring() {
      trackman.event('home', 'list-item-promo', 'click-coloring');
    },
    clickSocial: function clickSocial(id) {
      trackman.event('home', 'list-item-promo', 'click-social-' + id);
    },
    clickGifts: function clickGifts() {
      trackman.event('home', 'list-item-promo', 'click-gift', this.gift.id);
    },
    clickGallery: function clickGallery() {
      trackman.event('home', 'list-item-promo', 'click-gallery');
    }
  }
});
"use strict";

Vue.component('home-list-item', {
  template: "\n        <li :class=\"classObject\">\n            <div class=\"wrap\">\n                <div class=\"content\">\n                    <router-link\n                        class=\"-image\"\n                        :to=\"url\"\n                        :title=\"data.title\"\n                    >\n                        <img\n                            :src=\"image\"\n                            :width=\"data.width\"\n                            :height=\"data.height\"\n                            :alt=\"data.title\"\n                            :title=\"data.title\"\n                            :style=\"styleObject\"\n                            @load=\"imageLoaded\"\n                        />\n                    </router-link>\n                    <like-button-small\n                        :active=\"isLiked\"\n                        @click=\"like\"\n                    />\n                </div>\n            </div>\n        </li>\n    ",
  props: ['data', 'windowWidth', 'windowHeight'],
  data: function data() {
    return {
      log: !true,
      loading: true,
      angle: Math.round(Math.random() * 6 - 3)
    };
  },
  beforeMount: function beforeMount() {
    this.l('beforeMount', this.id, this.data);
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];

      if (this.loading) {
        c.push('-loading');
      }

      var type = this.data.type;

      if (type && type.length > 0) {
        c.push('-' + type);
      }

      return c.join(' ');
    },
    styleObject: function styleObject() {
      var result = {
        transform: 'rotate(' + this.angle + 'deg)'
      };

      if (!siteData.store.state.isMobile) {
        var width = this.data.width;
        var height = this.data.height;
        var maxHeight = this.windowHeight * 0.7;
        height = Math.min(height, maxHeight);
        width = height * width / this.data.height;
        result.width = width + 'px';
        result.height = height + 'px';
      }

      return result;
    },
    likedPhotos: function likedPhotos() {
      return siteData.store.state.likedPhotos;
    },
    isLiked: function isLiked() {
      return this.likedPhotos.indexOf(this.data.id) !== -1;
    },
    url: function url() {
      var result = '/unicorn/' + this.data.id;

      if (this.data.type == 'younicorn') {
        result = '/younicorn/' + this.data.url;
      }

      return result;
    },
    image: function image() {
      var result = 'https://www.cornify.com/cornified/' + this.data.filenew;

      if (this.data.type == 'younicorn') {
        result = 'https://www.cornify.com/younicorn-stable/500/' + this.data.filenew;
      }

      return result;
    }
  },
  methods: {
    imageLoaded: function imageLoaded() {
      this.loading = false;
    },
    like: function like() {
      var likedPhotos = this.likedPhotos;

      if (likedPhotos.indexOf(this.data.id) === -1) {
        gbks.api.votePhoto(this.data.id, 1);
        Vue.set(likedPhotos, likedPhotos.length, this.data.id);
        siteData.store.commit('updateLikedPhotos', likedPhotos);
        trackman.event('home', 'photo', 'like');
      }
    }
  }
});
"use strict";

Vue.component('home-list', {
  template: "\n        <div :class=\"classObject\" ref=\"canvas\">\n            <transition name=\"site-nav-transition\" :duration=\"1000\" appear>\n                <div class=\"wrap\">\n                    <div class=\"content\">\n                        <h2><svg-text text=\"The Rainbow Blog\" autoResize=\"true\" /></h2>\n                        <p>Do you like happiness? Yay, we do too! Let's cornify the world together and spread eternal, sparkly happiness! <router-link to=\"/photo\">Cornify your Photo</router-link></p>\n                        <ol v-if=\"photos\">\n                            <template v-for=\"(item, index) in displayItems\">\n                                <home-list-item\n                                    v-if=\"item.type == 'photo'\"\n                                    :key=\"item.id\"\n                                    :data=\"item.data\"\n                                    :windowWidth=\"windowWidth\"\n                                    :windowHeight=\"windowHeight\"\n                                />\n                                <home-list-item-promo\n                                    v-if=\"item.type == 'promo'\"\n                                    :key=\"item.id\"\n                                    :windowWidth=\"windowWidth\"\n                                    :windowHeight=\"windowHeight\"\n                                />\n                            </template>\n                        </ol>\n                    </div>\n                </div>\n            </transition>\n        </div>\n    ",
  props: [],
  data: function data() {
    return {
      log: !true,
      page: 1,
      loading: false,
      scrollMethod: $.proxy(this.onScroll, this)
    };
  },
  beforeMount: function beforeMount() {
    this.l('beforeMount', this.id);
    $(window).bind('scroll', this.scrollMethod);
    gbks.events.listen('api-photos-success', $.proxy(this.onPhotos, this), this.id);
    this.loadPhotos();
  },
  beforeDestroy: function beforeDestroy() {
    $(window).unbind('scroll', this.scrollMethod);
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];

      if (!this.photos || this.loading) {
        c.push('-loading');
      }

      return c.join(' ');
    },
    displayItems: function displayItems() {
      var result = [];
      var items = siteData.store.state.photos.slice();

      for (var i = 0; i < items.length; i++) {
        result.push({
          type: 'photo',
          id: items[i].id,
          data: items[i]
        });

        if (i % 10 == 0 && i > 0) {
          result.push({
            type: 'promo',
            id: 'promo_' + i
          });
        }
      }

      return result;
    },
    photos: function photos() {
      return siteData.store.state.photos;
    },
    windowWidth: function windowWidth() {
      return siteData.store.state.windowWidth;
    },
    windowHeight: function windowHeight() {
      return siteData.store.state.windowHeight;
    }
  },
  methods: {
    loadPhotos: function loadPhotos() {
      // this.l('loadPhotos', this.page);
      this.loading = true;
      gbks.api.photos(this.page);
    },
    onPhotos: function onPhotos(data) {
      // this.l('onPhotos', data);
      this.loading = false;
    },
    onScroll: function onScroll(event) {
      // this.l('onScroll', event);
      if (this.loading) {
        return;
      }

      var scrollPosition = $(window).scrollTop();
      var windowHeight = $(window).height();
      var windowBottom = scrollPosition + windowHeight;
      var canvas = $(this.$refs.canvas);
      var canvasTop = canvas.offset().top;
      var canvasHeight = canvas.outerHeight();
      var canvasBottom = canvasTop + canvasHeight - 600;
      var bottomInView = false;

      if (canvasBottom > scrollPosition && canvasBottom < windowBottom) {
        bottomInView = true;
      }

      if (bottomInView) {
        this.page += 1;
        trackman.event('home', 'list', 'load', this.page);
        this.loadPhotos();
      }
    }
  }
});
"use strict";

Vue.component('home-promo-list-item', {
  template: "\n        <div :class=\"classObject\">\n            <router-link\n                :to=\"data.to\"\n            >\n                <img\n                    :src=\"data.image.src\"\n                    :src=\"data.image.width\"\n                    :src=\"data.image.height\"\n                    :alt=\"data.name\"\n                >\n            </router-link>\n            <h3>\n                <router-link\n                    :to=\"data.to\"\n                >{{ data.name }}</router-link>\n            </h3>\n            <p\n                v-if=\"data.description\" \n                v-html=\"data.description\"\n            />\n        </div>\n    ",
  props: ['data'],
  data: function data() {
    return {
      log: true
    };
  },
  beforeMount: function beforeMount() {
    this.l('beforeMount', this.id);
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];
      return c.join(' ');
    }
  },
  methods: {
    click: function click() {}
  }
});
"use strict";

Vue.component('home-promo-list', {
  template: "\n        <div :class=\"classObject\">\n            <div class=\"wrap\">\n                <div class=\"content\">\n                    <ol>\n                        <li>\n                            <router-link \n                                to=\"/younicorns\"\n                                title=\"Design a unicorn\"\n                                @click.native=\"clickYounicorn\"\n                            >\n                                <img\n                                    src=\"/assets/younicorns.png\"\n                                    srcset=\"/assets/younicorns.png 1x, /assets/younicorns@2x.png 2x\"\n                                    width=\"440\"\n                                    height=\"330\"\n                                    alt=\"Create your own younicorn\"\n                                    title=\"Make your unicorns\"\n                                >\n                            </router-link>\n                            <h3>\n                                <router-link \n                                    to=\"/younicorns\"\n                                    title=\"Build unicorns\"\n                                    @click.native=\"clickYounicorn\"\n                                >Younicorns!</router-link>\n                            </h3>\n                            <p><router-link to=\"/younicorn\" title=\"The unicorn designer\">Make your own unicorn</router-link> or <router-link to=\"/younicorns\" title=\"The unicorn stable\">see others' younicorns</router-link>.</p>\n                        </li>\n                        <li>\n                            <router-link\n                                to=\"/photo\"\n                                title=\"Add unicorns and rainbows to photos\"\n                                @click.native=\"clickPhotoEditor\"\n                            >\n                                <img\n                                    src=\"/assets/example_barack_after.jpg\"\n                                    width=\"440\"\n                                    height=\"330\"\n                                    alt=\"Cornify your Photo!\"\n                                    title=\"Make your photos beautiful and sparkly\"\n                                >\n                            </router-link>\n                            <h3>\n                                <router-link \n                                    to=\"/photo\"\n                                    title=\"Sparkle up your photos\"\n                                    @click.native=\"clickPhotoEditor\"\n                                >Cornify your Photo!</router-link>\n                            </h3>\n                            <p>Add sparkles and glamour to your photos with the <router-link to=\"/photo\" title=\"Make your photos magical\">photo&nbsp;cornifier!</router-link></p>\n                        </li>\n                        <li>\n                            <router-link \n                                to=\"/coloring\"\n                                title=\"Unicorn and rainbow coloring\"\n                                @click.native=\"clickColoring\"\n                            >\n                                <img\n                                    src=\"/assets/coloring.jpg\"\n                                    width=\"440\"\n                                    height=\"330\"\n                                    alt=\"Unicorn Coloring!\"\n                                    title=\"Draw a unicorn\"\n                                >\n                            </router-link>\n                            <h3>\n                                <router-link \n                                    to=\"/coloring\"\n                                    title=\"Color your unicorn\"\n                                    @click.native=\"clickColoring\"\n                                >Unicorn Coloring!</router-link>\n                            </h3>\n                            <p>Get creative and color your favorite unicorn. <router-link to=\"/coloring\" title=\"Coloring is so much fun\">Yay,&nbsp;let's&nbsp;color!</router-link></p>\n                        </li>\n                        <li>\n                            <router-link \n                                to=\"/extras\"\n                                title=\"Get the corniify button\"\n                                @click.native=\"clickExtras\"\n                            >\n                                <img\n                                    src=\"/assets/cornify-button-pod.jpg\"\n                                    width=\"440\"\n                                    height=\"330\"\n                                    alt=\"Add the Cornify button to your website!\"\n                                    title=\"Cornify extension\"\n                                >\n                            </router-link>\n                            <h3>\n                                <router-link \n                                    to=\"/extras\"\n                                    title=\"Cornify browser extension\"\n                                    @click.native=\"clickExtras\"\n                                >Get the Cornify button!</router-link>\n                            </h3>\n                            <p>For your browser, website, and everything else.</p>\n                        </li>\n                        <li v-if=\"!isMobile && isChrome\">\n                            <a\n                                href=\"https://chrome.google.com/webstore/detail/cornify-unicorn-and-rainb/ghdnfbmfflgelndafnlgabneckbmfpla\"\n                                target=\"_blank\"\n                                title=\"Cornify chrome extension\"\n                                @click=\"clickExtension\"\n                            >\n                                <img\n                                    src=\"/assets/example-facies-after.jpg\"\n                                    width=\"440\"\n                                    height=\"330\"\n                                    alt=\"Cornify any website!\"\n                                    title=\"Power up your browser\"\n                                >\n                            </a>\n                            <h3>\n                                <a\n                                    href=\"https://chrome.google.com/webstore/detail/cornify-unicorn-and-rainb/ghdnfbmfflgelndafnlgabneckbmfpla\"\n                                    target=\"_blank\"\n                                    title=\"The most magical browser button ever!!!\"\n                                    @click=\"clickExtension\"\n                                >Cornify any website!</a>\n                            </h3>\n                            <p>Get the Cornify Chrome extension for extreme Internet&nbsp;happiness!</p>\n                        </li>\n                        <li v-if=\"!isMobile && isFirefox\">\n                            <a\n                                href=\"https://addons.mozilla.org/en-US/firefox/addon/cornify-unicorns-and-rainbows/\"\n                                target=\"_blank\"\n                                title=\"Cornify Firefox extension\"\n                                @click=\"clickExtension\"\n                            >\n                                <img\n                                    src=\"/assets/example-facies-after.jpg\"\n                                    width=\"440\"\n                                    height=\"330\"\n                                    alt=\"Cornify any website!\"\n                                    title=\"Power up your browser\"\n                                >\n                            </a>\n                            <h3>\n                                <a\n                                    href=\"https://addons.mozilla.org/en-US/firefox/addon/cornify-unicorns-and-rainbows/\"\n                                    target=\"_blank\"\n                                    title=\"The most magical browser button ever!!!\"\n                                    @click=\"clickExtension\"\n                                >Cornify any website!</a>\n                            </h3>\n                            <p>Get the Cornify Firefox extension for extreme Internet&nbsp;happiness!</p>\n                        </li>\n                        <li v-if=\"false && !isMobile && !isChrome\" class=\"-bookmarklet\">\n                            <a\n                                href=\"javascript:(function(){var d=document,j=d.getElementById('__cornify_nodes'),k=null;var files=['https://cornify.com/js/cornify.js','https://cornify.com/js/cornify_run.js'];if(j){cornify_add();}else{k=d.createElement('div');k.id='__cornify_nodes';d.getElementsByTagName('body')[0].appendChild(k);for(var l=0;l&lt;files.length;l++){j=d.createElement('script');j.src=files[l];k.appendChild(j);}}})();\"\n                            >Cornify</a>\n                            <h3>Cornify any website!</h3>\n                            <p>Drag the link above to the bookmarks toolbar in your browser. Click it on any site to&nbsp;cornify!</p>\n                        </li>\n                    </ol>\n                </div>\n            </div>\n        </div>\n    ",
  props: [],
  data: function data() {
    return {
      log: true
    };
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];

      if (!this.isMobile && (this.isChrome || this.isFirefox)) {
        c.push('-five');
      } else {
        c.push('-four');
      }

      return c.join(' ');
    },
    isMobile: function isMobile() {
      return siteData.store.state.isMobile;
    },
    isChrome: function isChrome() {
      return gbks.browser.chrome.browserIsChrome();
    },
    isFirefox: function isFirefox() {
      return gbks.browser.firefox.browserIsFirefox();
    }
  },
  methods: {
    clickPhotoEditor: function clickPhotoEditor() {
      trackman.event('home-promo', 'click-photo-editor');
    },
    clickColoring: function clickColoring() {
      trackman.event('home-promo', 'click-coloring');
    },
    clickExtras: function clickExtras() {
      trackman.event('home-promo', 'click-extras');
    },
    clickExtension: function clickExtension() {
      trackman.event('home-promo', 'click-get-extension');
    },
    clickBookmarklet: function clickBookmarklet() {
      trackman.event('home-promo', 'click-bookmarklet');
    },
    clickYounicorn: function clickYounicorn() {
      trackman.event('home-promo', 'click-younicorn');
    }
  }
});
"use strict";

Vue.component('gallery-pic', {
  template: "\n        <div :class=\"classObject\">\n            <div class=\"wrap\" ref=\"wrap\">\n                <router-link\n                    v-if=\"pic\"\n                    class=\"content\" \n                    :to=\"'/unicornpictures/' + nextPicId\"\n                    :style=\"styleObject\"\n                >\n                    <img\n                        ref=\"image\"\n                        :src=\"'https://www.cornify.com/pics/preview/'+pic.file\"\n                        :width=\"pic.width\"\n                        :height=\"pic.height\"\n                        :alt=\"pic.description\"\n                        @load=\"imageLoaded\"\n                    />\n                </router-link>\n            </div>\n        </div>\n    ",
  props: ['picId', 'nextPicId'],
  data: function data() {
    return {
      log: true,
      loading: false,
      pic: null
    };
  },
  watch: {
    picId: function picId(next, previous) {
      this.loadPic();
    }
  },
  beforeMount: function beforeMount() {
    gbks.events.listen('api-unicorn-pic-success', $.proxy(this.onPic, this), this.id);
    this.loadPic();
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];

      if (!this.pic || this.loading) {
        c.push('-loading');
      }

      return c.join(' ');
    },
    styleObject: function styleObject() {
      var result = {};

      if (this.pic) {
        this.l('styleObject', this.$refs.wrap);
        var wrapWidth = this.$refs.wrap.offsetWidth;
        var width = Math.min(wrapWidth, this.pic.width);
        var height = width * this.pic.height / this.pic.width;
        result.width = width + 'px';
        result.height = height + 'px';
      } // this.l('style', this.pic, result);


      return result;
    }
  },
  methods: {
    loadPic: function loadPic() {
      this.loading = true;
      gbks.api.unicornPic(this.picId);
    },
    onPic: function onPic(data) {
      this.pic = data.pic;
      this.loading = false;
      this.$emit('loaded', this.pic);
    },
    imageLoaded: function imageLoaded() {
      this.l('imageLoaded');
      var image = this.$refs.image;

      try {
        var colorThief = new ColorThief();
        var palette = colorThief.getPalette(image, 8);
        gbks.events.call('image-palette-found', {
          file: 'https://www.cornify.com/pics/preview/' + this.pic.file,
          palette: palette
        });
        this.l('palette', palette);
      } catch (error) {
        this.l('error', error);
      }
    }
  }
});
"use strict";

Vue.component('gallery-list-item', {
  template: "\n        <li :class=\"classObject\">\n            <router-link\n                :to=\"'/unicornpictures/' + data.id\"\n                :title=\"data.title\"\n                :style=\"styleObject\"\n                @click.native=\"sparkle\"\n            >\n                <img\n                    :src=\"'https://www.cornify.com/pics/preview/'+data.file\"\n                    :width=\"data.width\"\n                    :height=\"data.height\"\n                    :alt=\"data.description\"\n                    @load=\"imageLoaded\"\n                />\n            </router-link>\n        </li>\n    ",
  props: ['data', 'active'],
  data: function data() {
    return {
      log: !true,
      loading: true
    };
  },
  beforeMount: function beforeMount() {
    this.l('beforeMount', this.id, this.data);
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];

      if (this.active) {
        c.push('-active');
      }

      if (this.loading) {
        c.push('-loading');
      }

      return c.join(' ');
    },
    styleObject: function styleObject() {
      var s = {
        backgroundImage: "url('https://www.cornify.com/pics/preview/" + this.data.file + "')"
      };
      return s;
    }
  },
  methods: {
    imageLoaded: function imageLoaded() {
      this.l('imageLoaded');
      this.loading = false;
    },
    sparkle: function sparkle(event) {
      gbks.events.call('glitter-sparkle', {
        x: event.pageX,
        y: event.pageY
      });
    }
  }
});
"use strict";

Vue.component('gallery-list', {
  template: "\n        <div :class=\"classObject\">\n            <div class=\"wrap\">\n                <div class=\"content\">\n                    <ol v-if=\"pics\">\n                        <gallery-list-item\n                            v-for=\"(item, index) in pics\"\n                            :key=\"item.id\"\n                            :data=\"item\"\n                            :active=\"item.id == picId\"\n                        />\n                    </ol>\n                </div>\n            </div>\n        </div>\n    ",
  props: ['picId', 'pics'],
  data: function data() {
    return {
      log: !true
    };
  },
  beforeMount: function beforeMount() {},
  computed: {
    classObject: function classObject() {
      var c = [this.id];

      if (!this.pics) {
        c.push('-loading');
      }

      return c.join(' ');
    }
  },
  methods: {}
});
"use strict";

Vue.component('gallery-options', {
  template: "\n        <div :class=\"classObject\">\n            <div class=\"wrap\">\n                <div class=\"content\">\n                    <like-button\n                        :count=\"likeCount\"\n                        :active=\"isLiked\"\n                        @click=\"like\"\n                    />\n                    <next-button\n                        :count=\"pic ? pic.votes : null\"\n                        :url=\"'/unicornpictures/' + nextPicId\"\n                    />\n                </div>\n            </div>\n        </div>\n    ",
  props: ['picId', 'nextPicId', 'pic'],
  data: function data() {
    return {
      log: !true,
      loading: false
    };
  },
  beforeMount: function beforeMount() {
    gbks.events.listen('api-vote-unicorn-pic-success', $.proxy(this.onVoteUnicornPic, this), this.id);
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];
      return c.join(' ');
    },
    likedPics: function likedPics() {
      return siteData.store.state.likedPics;
    },
    isLiked: function isLiked() {
      return this.likedPics.indexOf(this.picId) !== -1;
    },
    likeCount: function likeCount() {
      var result = this.pic ? eval(this.pic.votes) : null;

      if (this.isLiked) {
        if (result) {
          result += 1;
        } else {
          result = 1;
        }
      }

      return result;
    }
  },
  methods: {
    like: function like(event) {
      var likedPics = this.likedPics;

      if (likedPics.indexOf(this.picId) === -1) {
        gbks.api.voteUnicornPic(this.picId, 1);
        Vue.set(likedPics, likedPics.length, this.picId);
        siteData.store.commit('updateLikedPics', likedPics);
        trackman.event('gallery', 'options', 'like');
      }
    },
    next: function next(event) {
      // gbks.api.voteUnicornPic(this.picId, 0);
      // this.sparkle(event);
      this.$emit('next');
      trackman.event('gallery', 'options', 'next'); // var likedPics = this.likedPics;
      // if(likedPics.indexOf(this.picId) === -1) {
      //     Vue.set(likedPics, likedPics.length, this.picId);
      //     siteData.store.commit('updateLikedPics', likedPics);
      // }
    },
    onVoteUnicornPic: function onVoteUnicornPic(data) {
      this.l('onVoteUnicornPic', data);
    },
    sparkle: function sparkle(event) {
      gbks.events.call('glitter-sparkle', {
        x: event.pageX,
        y: event.pageY - window.scrollY
      });
    }
  }
});
"use strict";

Vue.component('quotes-list-item', {
  template: "\n        <li :class=\"classObject\" :style=\"styleObject\">\n            <div class=\"wrap\">\n                <div class=\"content\">\n                    <blockquote :cite=\"data.link\">\n                        <p :style=\"textStyle\" v-html=\"quote\" />\n                    </blockquote>\n                    <cite>\n                        <a\n                            :href=\"data.link\"\n                            target=\"_blank\"\n                            rel=\"nofollow\"\n                            v-html=\"name\"\n                        />\n                    </cite>\n                </div>\n            </div>\n        </li>\n    ",
  props: ['data'],
  data: function data() {
    var color = siteData.palette[Math.floor(Math.random() * siteData.palette.length)];
    return {
      log: !true,
      color: color,
      windowHeight: null
    };
  },
  beforeMount: function beforeMount() {
    gbks.events.listen(gbks.event.Resize, $.proxy(this.resize, this), this.id);
    this.resize();
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];
      var length = this.data.quote.length;
      var size = 'short';
      /*
      
      shortest: 19
      longest: 192
      average: 72
        */

      if (length > 130) {
        size = 'long';
      } else if (length > 45) {
        size = 'medium';
      }

      c.push('-' + size);
      return c.join(' ');
    },
    textStyle: function textStyle() {
      return {
        color: 'rgba(' + this.color.r + ',' + this.color.g + ',' + this.color.b + ',1)'
      };
    },
    styleObject: function styleObject() {
      var height = this.windowHeight - 50;
      return {
        height: height + 'px'
      };
    },
    name: function name() {
      return '&mdash; ' + this.data.name;
    },
    quote: function quote() {
      return this.data.quote;
    }
  },
  methods: {
    resize: function resize() {
      this.windowHeight = window.innerHeight;
    }
  }
});
"use strict";

Vue.component('quotes-list', {
  template: "\n        <div :class=\"classObject\">\n            <ol v-if=\"quotes && quoteId\">\n                <quotes-list-item\n                    v-for=\"(item, index) in quotes\"\n                    v-if=\"item.id == quoteId\"\n                    :key=\"item.id\"\n                    :data=\"item\"\n                />\n            </ol>\n        </div>\n    ",
  props: ['quoteId', 'quotes'],
  data: function data() {
    return {
      log: !true
    };
  },
  beforeMount: function beforeMount() {
    this.l('beforeMount', this.id);
  },
  watch: {
    quotes: function quotes(next, previous) {
      this.l('watch.quotes', next, previous);
    },
    quoteId: function quoteId(next, previous) {
      this.l('watch.quoteId', next, previous);
    }
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];

      if (!this.quotes) {
        c.push('-loading');
      }

      return c.join(' ');
    }
  },
  methods: {}
});
"use strict";

Vue.component('quotes-pagination', {
  template: "\n        <div :class=\"classObject\">\n            <router-link\n                v-if=\"quotes && quoteId\"\n                :to=\"previousTo\"\n                aria-label=\"Next quote\"\n                v-html=\"nextIcon\"\n                @click.native=\"previous\"\n            />\n            <router-link\n                v-if=\"quotes && quoteId\"\n                :to=\"nextTo\"\n                aria-label=\"Previous quote\"\n                v-html=\"nextIcon\"\n                @click.native=\"next\"\n            />\n        </div>\n    ",
  props: ['quoteId', 'quotes'],
  data: function data() {
    return {
      log: !true,
      nextIcon: gbks.icons.arrowLeftBlueYellow
    };
  },
  beforeMount: function beforeMount() {
    this.l('beforeMount', this.id);
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];

      if (!this.quotes) {
        c.push('-loading');
      }

      return c.join(' ');
    },
    nextTo: function nextTo() {
      var result = '/quotes/';
      var i = 0,
          length = this.quotes.length,
          quote;

      for (; i < length; i++) {
        quote = this.quotes[i];

        if (quote.id == this.quoteId) {
          if (i >= length - 1) {
            result += '1';
          } else {
            result += this.quotes[i + 1].id;
          }

          break;
        }
      }

      return result;
    },
    previousTo: function previousTo() {
      var result = '/quotes/';
      var i = 0,
          length = this.quotes.length,
          quote;

      for (; i < length; i++) {
        quote = this.quotes[i];

        if (quote.id == this.quoteId) {
          if (i == 0) {
            result += this.quotes[length - 1].id;
          } else {
            result += this.quotes[i - 1].id;
          }

          break;
        }
      }

      return result;
    }
  },
  methods: {
    previous: function previous(event) {
      trackman.event('quotes', 'pagination', 'previous');
      gbks.events.call('glitter-sparkle', {
        x: event.pageX,
        y: event.pageY
      });
    },
    next: function next(event) {
      trackman.event('quotes', 'pagination', 'next');
      gbks.events.call('glitter-sparkle', {
        x: event.pageX,
        y: event.pageY
      });
    }
  }
});
"use strict";

/*

    {
        "id": "unicorn-paper-trophy",
        "title": "Unicorn paper trophy",
        "url": "https:\/\/www.etsy.com\/listing\/157520199\/the-original-papercraft-unicorn-paper",
        "image": "unicorn-paper-trophy.jpg",
        "width": 800,
        "height": 800
    },

 */
Vue.component('gifts-list-item', {
  template: "\n        <li \n            :class=\"classObject\" \n            :style=\"styleObject\" \n            @mouseenter=\"mouseover\"\n        >\n            <router-link\n                :to=\"link\"\n                :title=\"data.title\"\n                :style=\"linkStyle\"\n                @click.native=\"click\"\n            >\n                <img\n                    :src=\"'https://www.cornify.com/assets/gifts/' + data.image\"\n                    :width=\"data.width\"\n                    :height=\"data.height\"\n                    :alt=\"data.title\"\n                    @load=\"imageLoaded\"\n                />\n            </router-link>\n            <div class=\"copy\">\n                <h3>\n                    <router-link\n                        :to=\"link\"\n                        @click.native=\"click\"\n                    >\n                        {{ data.title }}\n                    </router-link>\n                </h3>\n            </div>\n        </li>\n    ",
  props: ['categoryId', 'giftId', 'data'],
  data: function data() {
    return {
      log: !true,
      loading: true,
      angle: Math.round(Math.random() * 10 - 5)
    };
  },
  beforeMount: function beforeMount() {
    this.l('beforeMount', this.id, this.data);
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];

      if (this.loading) {
        c.push('-loading');
      }

      return c.join(' ');
    },
    styleObject: function styleObject() {
      var s = {
        transform: 'rotate(' + this.angle + 'deg)'
      };
      return s;
    },
    link: function link() {
      var result = '/gift/' + this.data.id;

      if (this.categoryId) {
        result = '/gifts/category/' + this.categoryId + '/' + this.data.id;
      }

      return result;
    },
    linkStyle: function linkStyle() {
      var padding = this.data.height / this.data.width * 100;
      return {
        paddingBottom: padding + '%',
        backgroundImage: "url('https://www.cornify.com/assets/gifts/" + this.data.image + "')"
      };
    }
  },
  methods: {
    imageLoaded: function imageLoaded() {
      this.l('imageLoaded');
      this.loading = false;
    },
    mouseover: function mouseover() {
      this.angle = Math.round(Math.random() * 10 - 5);
    },
    click: function click() {// trackman.event('gifts', 'outbound', this.data.title);
    }
  }
});
"use strict";

Vue.component('gifts-list', {
  template: "\n        <div :class=\"classObject\" ref=\"canvas\">\n            <div class=\"wrap\">\n                <div class=\"content\">\n                    <ol>\n                        <gifts-list-item\n                            v-for=\"(item, index) in gifts\"\n                            :key=\"item.id\"\n                            :data=\"item\"\n                            :categoryId=\"categoryId\"\n                            :giftId=\"giftId\"\n                        />\n                    </ol>\n                </div>\n            </div>\n        </div>\n    ",
  props: ['categoryId', 'giftId', 'gifts'],
  data: function data() {
    return {
      log: !true
    };
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];

      if (!this.gifts) {
        c.push('-loading');
      }

      return c.join(' ');
    }
  },
  methods: {}
});
"use strict";

Vue.component('gifts-categories', {
  template: "\n        <div :class=\"classObject\">\n            <nav>\n                <router-link\n                    to=\"/gifts\"\n                    :class=\"!categoryId ? '-active' : null\"\n                >All gifts</router-link>\n                <router-link\n                    v-for=\"(name, slug) in categories\"\n                    :to=\"'/gifts/category/' + slug\"\n                    :key=\"slug\"\n                    :class=\"slug == categoryId ? '-active' : null\"\n                >{{ name }}</router-link>\n            </nav>\n        </div>\n    ",
  props: ['categoryId', 'giftId', 'categories'],
  data: function data() {
    console.log('balls', this.categories, this.categoryId);
    return {
      log: true
    };
  },
  watch: {
    categories: function categories(next, previous) {
      this.l('watch.categories', next, previous);
    }
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];
      return c.join(' ');
    }
  },
  methods: {}
});
"use strict";

Vue.component('gifts-details', {
  template: "\n        <div\n            :class=\"classObject\" \n            ref=\"canvas\"\n            role=\"dialog\" \n            aria-labelledby=\"giftsDetailsTitle\" \n            :aria-describedby=\"giftData && giftData.description ? 'giftsDetailsDescription' : null\"\n        >\n            <div class=\"wrap\">\n                <div class=\"content\" v-if=\"giftData\">\n                    <div class=\"content-inner\">\n                        <a\n                            class=\"-image\"\n                            :href=\"giftData.url\"\n                            :title=\"giftData.title\"\n                            target=\"_blank\"\n                            rel=\"nofollow noopener\"\n                            @click=\"click\"\n                        >\n                            <img\n                                :src=\"'https://www.cornify.com/assets/gifts/' + giftData.image\"\n                                :width=\"giftData.width\"\n                                :height=\"giftData.height\"\n                                :alt=\"giftData.title\"\n                                @load=\"imageLoaded\"\n                            />\n                        </a>\n                        <h3 id=\"giftsDetailsTitle\">\n                            <a\n                                :href=\"giftData.url\"\n                                target=\"_blank\"\n                                rel=\"nofollow noopener\"\n                                @click=\"click\"\n                            >\n                                {{ giftData.title }}\n                            </a>\n                        </h3>\n\n                        <p\n                            id=\"giftsDetailsDescription\"\n                            v-if=\"giftData.description\" \n                            v-html=\"giftData.description\"\n                        />\n\n                        <a\n                            :href=\"giftData.url\"\n                            target=\"_blank\"\n                            rel=\"nofollow noopener\"\n                            class=\"funky-button -filled\"\n                            @click=\"click\"\n                        >View details</a>\n\n                        <router-link\n                            class=\"-close\"\n                            :to=\"closeLink\"\n                            v-html=\"closeIcon\"\n                            aria-label=\"Close\"\n                            @click.native=\"close\"\n                        />\n                    </div>\n                </div>\n            </div>\n        </div>\n    ",
  props: ['categoryId', 'giftId', 'gifts'],
  data: function data() {
    var giftData = this.getGiftData();
    return {
      log: !true,
      loading: true,
      giftData: giftData,
      closeIcon: gbks.icons.close
    };
  },
  watch: {
    giftId: function giftId(next, previous) {
      this.loading = true;
      this.giftData = this.getGiftData();
    }
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];

      if (this.gifts && this.giftId) {
        c.push('-active');
      }

      if (this.loading) {
        c.push('-loading');
      }

      return c.join(' ');
    },
    closeLink: function closeLink() {
      var result = '/gifts';

      if (this.categoryId) {
        result = '/gifts/category/' + this.categoryId;
      }

      return result;
    }
  },
  methods: {
    getGiftData: function getGiftData() {
      var result = null;

      if (this.gifts && this.giftId) {
        for (var i = 0; i < this.gifts.length; i++) {
          if (this.gifts[i].id == this.giftId) {
            result = this.gifts[i];
            break;
          }
        }
      }

      return result;
    },
    imageLoaded: function imageLoaded() {
      this.loading = false;
    },
    click: function click() {
      trackman.event('gifts', 'details-link-click', this.giftId);
    },
    close: function close() {
      trackman.event('gifts', 'close-details');
    }
  }
});
"use strict";

Vue.component('all-the-info-list-item', {
  template: "\n        <li :class=\"classObject\">\n            <h2>\n                <a\n                    href=\"#\"\n                    v-html=\"data.title\"\n                    @click.prevent=\"toggle\"\n                />\n            </h2>\n            <div class=\"wrap\" :style=\"wrapStyle\">\n                <div class=\"content\" ref=\"content\">\n                    <p v-html=\"data.text\" />\n                </div>\n            </div>\n        </li>\n    ",
  props: ['data'],
  data: function data() {
    return {
      log: !true,
      active: false
    };
  },
  beforeMount: function beforeMount() {},
  computed: {
    classObject: function classObject() {
      var c = [this.id];

      if (this.active) {
        c.push('-active');
      }

      return c.join(' ');
    },
    wrapStyle: function wrapStyle() {
      var height = 0;

      if (this.active) {
        height = this.$refs.content.offsetHeight;
      }

      return {
        height: height + 'px'
      };
    }
  },
  methods: {
    toggle: function toggle() {
      this.active = !this.active;
    }
  }
});
"use strict";

Vue.component('all-the-info-list', {
  template: "\n        <ul :class=\"classObject\">\n            <all-the-info-list-item\n                v-for=\"(item, index) in questions\"\n                :key=\"index\"\n                :data=\"item\"\n            />\n        </ul>\n    ",
  props: [],
  data: function data() {
    return {
      log: !true,
      questions: siteData.alltheinfo
    };
  },
  beforeMount: function beforeMount() {},
  computed: {
    classObject: function classObject() {
      var c = [this.id];
      return c.join(' ');
    }
  },
  methods: {}
});
"use strict";

Vue.component('photo-related-list-item', {
  template: "\n        <li :class=\"classObject\">\n            <router-link\n                :to=\"'/unicorn/' + data.id\"\n                :title=\"data.title\"\n                :style=\"styleObject\"\n            >\n                <img\n                    :src=\"src\"\n                    :width=\"this.data.width\"\n                    :height=\"this.data.height\"\n                    @load=\"imageLoaded\"\n                >\n            </router-link>\n        </li>\n    ",
  props: ['data', 'active'],
  data: function data() {
    return {
      log: !true,
      loading: true
    };
  },
  beforeMount: function beforeMount() {
    this.l('beforeMount', this.id, this.data);
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];

      if (this.active) {
        c.push('-active');
      }

      if (this.loading) {
        c.push('-loading');
      }

      return c.join(' ');
    },
    styleObject: function styleObject() {
      var s = {
        backgroundImage: "url('" + this.src + "')"
      };
      return s;
    },
    src: function src() {
      var result = 'https://www.cornify.com/cornified/' + this.data.filenew;

      if (this.data.type == 'younicorn') {
        result = 'https://www.cornify.com/younicorn-stable/' + this.data.filenew;
      }

      return result;
    }
  },
  methods: {
    imageLoaded: function imageLoaded() {
      this.loading = false;
    }
  }
});
"use strict";

Vue.component('photo-related-list', {
  template: "\n        <div :class=\"classObject\" ref=\"canvas\">\n            <div class=\"wrap\">\n                <div class=\"content\" v-if=\"photos\">\n                    <transition-group\n                        name=\"photo-related-list-transition\"\n                        tag=\"ol\"\n                    >\n                        <photo-related-list-item\n                            v-for=\"(item, index) in photos\"\n                            :key=\"item.id\"\n                            :data=\"item\"\n                            :active=\"item.id == photoId\"\n                        />\n                    </transition-group>\n                </div>\n            </div>\n        </div>\n    ",
  props: ['photoId'],
  data: function data() {
    return {
      log: true,
      loading: false,
      photos: null
    };
  },
  beforeMount: function beforeMount() {
    this.l('beforeMount', this.id);
    gbks.events.listen('api-related-photos-success', $.proxy(this.onPhotos, this), this.id);
    this.loadPhotos();
  },
  beforeDestroy: function beforeDestroy() {
    $(window).unbind('scroll', this.scrollMethod);
  },
  watch: {
    photoId: function photoId(next, previous) {
      // console.log('photoId', next);
      var lastVisiblePhoto = this.photos[this.photos.length - 1];

      if (lastVisiblePhoto.id == next) {
        this.loadPhotos();
      }
    }
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];

      if (!this.photos || this.loading) {
        c.push('-loading');
      }

      return c.join(' ');
    }
  },
  methods: {
    loadPhotos: function loadPhotos() {
      this.loading = true;
      gbks.api.relatedPhotos(this.photoId);
    },
    onPhotos: function onPhotos(data) {
      this.l('onPhotos', data);
      this.photos = data.photos.slice(0, 9);
      this.loading = false;
      this.$emit('loadPhotos', this.photos);
    }
  }
});
"use strict";

Vue.component('photo-photo', {
  template: "\n        <div :class=\"classObject\">\n            <div class=\"wrap\" ref=\"wrap\">\n                <router-link \n                    v-if=\"photo\"\n                    class=\"content\"\n                    :to=\"'/unicorn/' + nextPhotoId\"\n                    :style=\"styleObject\"\n                >\n                    <img\n                        ref=\"image\"\n                        :src=\"src\"\n                        :width=\"photo.width\"\n                        :height=\"photo.height\"\n                        :alt=\"photo.description\"\n                        @load=\"imageLoaded\"\n                    />\n                </router-link>\n            </div>\n        </div>\n    ",
  props: ['photoId', 'photo', 'nextPhotoId'],
  data: function data() {
    return {
      log: true,
      pic: null
    };
  },
  watch: {},
  beforeMount: function beforeMount() {},
  computed: {
    classObject: function classObject() {
      var c = [this.id];

      if (!this.photo) {
        c.push('-loading');
      }

      return c.join(' ');
    },
    styleObject: function styleObject() {
      var result = {}; // if(this.photo && !siteData.store.state.isMobile) {

      if (this.photo) {
        var wrapWidth = this.$refs.wrap.offsetWidth;
        var wrapHeight = this.$refs.wrap.offsetHeight;
        var width = Math.min(wrapWidth, this.photo.width);
        var height = width * this.photo.height / this.photo.width;

        if (!siteData.store.state.isMobile && height > wrapHeight) {
          height = wrapHeight;
          width = height * this.photo.width / this.photo.height;
        } // this.l('wrapWidth', wrapWidth);
        // this.l('wrapHeight', wrapHeight);
        // var x = Math.floor((wrapWidth - width)/2);
        // var y = Math.floor((wrapHeight - height)/2);
        // result.left = x+'px';
        // result.top = y+'px';


        result.width = width + 'px';
        result.height = height + 'px';
      } // this.l('styleObject', this.photo, result);
      // this.l('style', this.pic, result);


      return result;
    },
    src: function src() {
      var result = 'https://www.cornify.com/cornified/' + this.photo.filenew;

      if (this.photo.type == 'younicorn') {
        result = 'https://www.cornify.com/younicorn-stable/' + this.photo.filenew;
      }

      return result;
    }
  },
  methods: {
    imageLoaded: function imageLoaded() {// this.l('imageLoaded');
      // var image = this.$refs.image;
      // try {
      //     var colorThief = new ColorThief();
      //     var palette = colorThief.getPalette(image, 8);
      //     gbks.events.call('image-palette-found', {
      //         file: 'https://www.cornify.com/cornified/' + this.photo.filenew,
      //         palette: palette
      //     });
      //     this.l('palette', palette);
      // } catch(error) {
      //     this.l('error', error);
      // }
    }
  }
});
"use strict";

Vue.component('photo-options', {
  template: "\n        <div :class=\"classObject\">\n            <div class=\"wrap\">\n                <div class=\"content\">\n                    <like-button\n                        :count=\"likeCount\"\n                        :active=\"isLiked\"\n                        @click=\"like\"\n                    />\n                    <next-button\n                        :count=\"photo ? photo.votes : null\"\n                        :url=\"'/unicorn/' + nextPhotoId\"\n                    />\n                </div>\n                <router-link\n                    v-if=\"photo && photo.type == 'coloring'\"\n                    to=\"/coloring\"\n                    class=\"-photo-link\"\n                    v-html=\"coloringLinkLabel\"\n                />\n                <router-link\n                    v-if=\"photo && photo.type != 'coloring'\"\n                    to=\"/photo\"\n                    class=\"-photo-link\"\n                    v-html=\"photoLinkLabel\"\n                />\n            </div>\n        </div>\n    ",
  props: ['photoId', 'nextPhotoId', 'photo'],
  data: function data() {
    return {
      log: !true,
      loading: false
    };
  },
  beforeMount: function beforeMount() {
    gbks.events.listen('api-vote-photo-success', $.proxy(this.onVotePhoto, this), this.id);
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];
      return c.join(' ');
    },
    likedPhotos: function likedPhotos() {
      return siteData.store.state.likedPhotos;
    },
    isLiked: function isLiked() {
      return this.likedPhotos.indexOf(this.photoId) !== -1;
    },
    coloringLinkLabel: function coloringLinkLabel() {
      return gbks.icons.brush + 'Color your own unicorn';
    },
    photoLinkLabel: function photoLinkLabel() {
      return gbks.icons.camera + 'Cornify your own photo';
    },
    likeCount: function likeCount() {
      var result = this.photo ? eval(this.photo.rating) : null;

      if (this.isLiked) {
        if (result) {
          result += 1;
        } else {
          result = 1;
        }
      }

      return result;
    }
  },
  methods: {
    like: function like(event) {
      var likedPhotos = this.likedPhotos;

      if (likedPhotos.indexOf(this.photoId) === -1) {
        gbks.api.votePhoto(this.photoId, 1);
        Vue.set(likedPhotos, likedPhotos.length, this.photoId);
        siteData.store.commit('updateLikedPhotos', likedPhotos);
        trackman.event('photo', 'photo', 'like');
      }
    },
    next: function next(event) {
      gbks.api.votePhoto(this.photoId, 0); // this.sparkle(event);

      this.$emit('next');
      trackman.event('photo', 'options', 'next');
    },
    onVotePhoto: function onVotePhoto(data) {
      this.l('onVotePhoto', data);
    },
    sparkle: function sparkle(event) {
      gbks.events.call('glitter-sparkle', {
        x: event.pageX,
        y: event.pageY - window.scrollY
      });
    }
  }
});
"use strict";

Vue.component('younicorn-related-list-item', {
  template: "\n        <li :class=\"classObject\">\n            <router-link\n                :to=\"'/unicorn/' + data.id\"\n                :title=\"data.title\"\n                :style=\"styleObject\"\n            >\n                <img\n                    :src=\"'https://www.cornify.com/cornified/' + this.data.filenew\"\n                    :width=\"this.data.width\"\n                    :height=\"this.data.height\"\n                    @load=\"imageLoaded\"\n                >\n            </router-link>\n        </li>\n    ",
  props: ['data', 'active'],
  data: function data() {
    return {
      log: !true,
      loading: true
    };
  },
  beforeMount: function beforeMount() {
    this.l('beforeMount', this.id, this.data);
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];

      if (this.active) {
        c.push('-active');
      }

      if (this.loading) {
        c.push('-loading');
      }

      return c.join(' ');
    },
    styleObject: function styleObject() {
      var s = {
        backgroundImage: "url('https://www.cornify.com/cornified/" + this.data.filenew + "')"
      };
      return s;
    }
  },
  methods: {
    imageLoaded: function imageLoaded() {
      this.loading = false;
    }
  }
});
"use strict";

Vue.component('younicorn-related-list', {
  template: "\n        <div :class=\"classObject\" ref=\"canvas\">\n            <div class=\"wrap\">\n                <div class=\"content\" v-if=\"younicorns\">\n                    <transition-group\n                        name=\"younicorn-related-list-transition\"\n                        tag=\"ol\"\n                    >\n                        <younicorn-related-list-item\n                            v-for=\"(item, index) in younicorns\"\n                            :key=\"item.id\"\n                            :data=\"item\"\n                            :active=\"item.id == younicornId\"\n                        />\n                    </transition-group>\n                </div>\n            </div>\n        </div>\n    ",
  props: ['younicornId'],
  data: function data() {
    return {
      log: true,
      loading: false,
      younicorns: null
    };
  },
  beforeMount: function beforeMount() {
    this.l('beforeMount', this.id);
    gbks.events.listen('api-related-younicorns-success', $.proxy(this.onYounicorns, this), this.id);
    this.loadYounicorns();
  },
  beforeDestroy: function beforeDestroy() {
    $(window).unbind('scroll', this.scrollMethod);
  },
  watch: {
    younicornId: function younicornId(next, previous) {
      // console.log('younicornId', next);
      var lastVisibleYounicorn = this.younicorns[this.younicorns.length - 1];

      if (lastVisibleYounicorn.id == next) {
        this.loadYounicorns();
      }
    }
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];

      if (!this.younicorns || this.loading) {
        c.push('-loading');
      }

      return c.join(' ');
    }
  },
  methods: {
    loadYounicorns: function loadYounicorns() {
      this.loading = true;
      gbks.api.relatedYounicorns(this.younicornId);
    },
    onYounicorns: function onYounicorns(data) {
      this.l('onYounicorns', data);
      this.younicorns = data.younicorns.slice(0, 9);
      this.loading = false;
      this.$emit('loadYounicorns', this.younicorns);
    }
  }
});
"use strict";

Vue.component('younicorn-background', {
  template: "\n        <div :class=\"classObject\">\n            <div class=\"wrap\">\n                <img\n                     v-if=\"younicorn && file\"\n                    ref=\"image\"\n                    :src=\"file\"\n                    alt=\"Youncorn background\"\n                    @load=\"imageLoaded\"\n                />\n            </div>\n        </div>\n    ",
  props: ['younicornId', 'younicorn'],
  data: function data() {
    return {
      log: !true,
      loading: true
    };
  },
  beforeMount: function beforeMount() {
    this.l('beforeMount', this.younicorn);
  },
  watch: {
    younicornId: function younicornId(next, previous) {// this.loading = true;
    },
    younicorn: function younicorn(next, previous) {
      this.l('younicorn', next, previous);
      var nextFile = this.getBackgroundFile(next);
      var previousFile = this.getBackgroundFile(previous);

      if (nextFile != previousFile) {
        this.loading = true;
      }

      this.l('nextFile', nextFile, previousFile);
    }
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];

      if (this.loading) {
        c.push('-loading');
      }

      return c.join(' ');
    },
    file: function file() {
      return this.getBackgroundFile(this.younicorn);
    }
  },
  methods: {
    imageLoaded: function imageLoaded() {
      this.l('imageLoaded');
      this.loading = false;
      gbks.events.call('younicorn-background-loaded', {
        image: this.$refs.image
      });
    },
    getBackgroundFile: function getBackgroundFile(younicorn) {
      var result = null;

      if (this.younicorn && this.younicorn.bits) {
        var bits = this.younicorn.bits;
        var backgroundId = bits.parts.background;
        var part = siteData.builder.categories.background.parts[backgroundId];
        var file = part.slots.background.full; // this.l(backgroundId, part);

        result = '/assets/builder/' + file;
      }

      this.l('file', this.younicorn, result);
      return result;
    }
  }
});
"use strict";

Vue.component('younicorn-younicorn', {
  template: "\n        <div :class=\"classObject\">\n            <div class=\"wrap\" ref=\"wrap\">\n                <div \n                    class=\"content\"\n                    :style=\"styleObject\"\n                >\n                    <img\n                        v-if=\"younicorn\"\n                        ref=\"image\"\n                        :src=\"src\"\n                        :width=\"younicorn.width\"\n                        :height=\"younicorn.height\"\n                        :alt=\"younicorn.name+', the unicorn'\"\n                        @click=\"click\"\n                        @load=\"imageLoaded\"\n                    />\n                </div>\n            </div>\n        </div>\n    ",
  props: ['younicornId', 'younicorn'],
  data: function data() {
    return {
      log: !true,
      pic: null,
      loading: false
    };
  },
  beforeMount: function beforeMount() {
    gbks.events.listen('api-vote-younicorn-success', $.proxy(this.onVoteYounicorn, this), this.id);
  },
  watch: {
    younicornId: function younicornId(next, previous) {
      this.loading = true;
    }
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];

      if (!this.younicorn || this.loading) {
        c.push('-loading');
      }

      return c.join(' ');
    },
    styleObject: function styleObject() {
      var result = {};
      return result;
    },
    src: function src() {
      var result = 'https://www.cornify.com/younicorn-stable/' + this.younicorn.file;

      if (config.isDev) {
        result = '/assets/temp/15419.png';
      }

      return result;
    }
  },
  methods: {
    imageLoaded: function imageLoaded() {
      this.l('imageLoaded', this.$refs.image);
      this.loading = false;
      gbks.events.call('younicorn-image-loaded', {
        image: this.$refs.image
      });
    },
    click: function click(event) {
      trackman.event('younicorn', 'click-image', this.younicornId);
      var effect = Math.random() > 0.75 ? 'glitter-hearts' : 'glitter-sparkle';
      gbks.events.call(effect, {
        x: event.pageX,
        y: event.pageY
      });
    }
  }
});
"use strict";

Vue.component('younicorn-loader', {
  template: "\n        <div :class=\"classObject\">\n            \n        </div>\n    ",
  props: ['younicornId', 'younicorn'],
  data: function data() {
    return {
      log: true,
      imageLoaded: false,
      backgroundLoaded: false,
      hasBackground: false
    };
  },
  beforeMount: function beforeMount() {
    gbks.events.listen('younicorn-background-loaded', $.proxy(this.onBackgroundLoaded, this), this.id);
    gbks.events.listen('younicorn-image-loaded', $.proxy(this.onImageLoaded, this), this.id);
    this.hasBackground = this.getBackgroundFile() != null;
  },
  watch: {
    younicorn: function younicorn(next, previous) {
      this.imageLoaded = false;
      this.backgroundLoaded = false;
      this.hasBackground = this.getBackgroundFile() != null;
    }
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];

      if (!this.imageLoaded || this.hasBackground && !this.backgroundLoaded) {
        c.push('-loading');
      }

      return c.join(' ');
    }
  },
  methods: {
    onImageLoaded: function onImageLoaded() {
      this.imageLoaded = true;
      this.l('onImageLoaded', this.imageLoaded, this.backgroundLoaded, this.hasBackground);
    },
    onBackgroundLoaded: function onBackgroundLoaded() {
      this.backgroundLoaded = true;
      this.l('onBackgroundLoaded', this.imageLoaded, this.backgroundLoaded, this.hasBackground);
    },
    getBackgroundFile: function getBackgroundFile() {
      var result = null;

      if (this.younicorn && this.younicorn.bits) {
        var bits = this.younicorn.bits;
        var backgroundId = bits.parts.background;
        var part = siteData.builder.categories.background.parts[backgroundId];
        result = part.slots.background.full;
      }

      return result;
    }
  }
});
"use strict";

Vue.component('younicorn-options', {
  template: "\n        <div :class=\"classObject\" v-if=\"younicorn\">\n            <div class=\"wrap\">\n                <div class=\"content\">\n                    <div class=\"-share\">\n                        <like-button-small\n                            :count=\"likeCount\"\n                            :active=\"isLiked\"\n                            @click=\"like\"\n                        />\n                        <div class=\"list\">\n                            <younicorn-extension-button \n                                :younicornId=\"younicornId\" \n                            />\n                            <button\n                                v-if=\"supportsWebShare\"\n                                class=\"-webshare\"\n                                type=\"button\"\n                                @click=\"webshare\"\n                            >\n                                <span v-html=\"shareIcon\" />Share\n                            </button>\n                            <a\n                                v-if=\"!supportsWebShare\"\n                                :href=\"twitterLink\"\n                                class=\"-twitter\"\n                                target=\"_blank\"\n                                rel=\"noopener\"\n                                @click=\"clickTwitter\"\n                            >\n                                <span v-html=\"twitterIcon\" />Share on Twitter\n                            </a>\n                            <a\n                                v-if=\"!supportsWebShare\"\n                                :href=\"facebookLink\"\n                                class=\"-facebook\"\n                                target=\"_blank\"\n                                rel=\"noopener\"\n                                @click=\"clickFacebook\"\n                            >\n                                <span v-html=\"facebookIcon\" />Share on Facebook\n                            </a>\n                            <button\n                                :class=\"'-download'+(downloadActive ? ' -active' : '')\"\n                                type=\"button\"\n                                :aria-expanded=\"downloadActive\"\n                                @click=\"download\"\n                            >\n                                <span v-html=\"downloadIcon\" />View download options\n                            </button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    ",
  props: ['younicornId', 'younicorn', 'downloadActive'],
  data: function data() {
    return {
      log: true,
      loading: false,
      facebookIcon: gbks.icons.facebook,
      twitterIcon: gbks.icons.twitter,
      shareIcon: gbks.icons.shareBubble,
      downloadIcon: gbks.icons.download,
      image: null,
      background: null
    };
  },
  beforeMount: function beforeMount() {
    gbks.events.listen('younicorn-image-loaded', $.proxy(this.onImageLoaded, this), this.uid);
    gbks.events.listen('younicorn-background-loaded', $.proxy(this.onBackgroundLoaded, this), this.uid);
  },
  watch: {
    younicornId: function younicornId(next, previous) {
      this.image = null;
      this.background = null;
    }
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];

      if (this.supportsWebShare) {
        c.push('-web-share');
      }

      return c.join(' ');
    },
    downloadLabel: function downloadLabel() {
      return 'Download' + gbks.icons.down;
    },
    fileName: function fileName() {
      var name = gbks.helpers.stringToSlug(this.younicorn.name);

      if (name.length == 0) {
        name = this.younicorn.id;
      }

      name += '.png';
      return name.toLowerCase();
    },
    supportsWebShare: function supportsWebShare() {
      return window.navigator.share ? true : false;
    },
    likedYounicorns: function likedYounicorns() {
      return siteData.store.state.likedYounicorns;
    },
    file: function file() {
      return 'https://www.cornify.com/younicorn-stable/' + this.younicorn.file;
    },
    isLiked: function isLiked() {
      return this.likedYounicorns.indexOf(this.younicornId) !== -1;
    },
    coloringLinkLabel: function coloringLinkLabel() {
      return gbks.icons.brush + 'Color your own unicorn';
    },
    younicornLinkLabel: function younicornLinkLabel() {
      return gbks.icons.camera + 'Cornify your own younicorn';
    },
    likeCount: function likeCount() {
      var result = this.younicorn ? eval(this.younicorn.rating) : null;

      if (this.isLiked) {
        if (result) {
          result += 1;
        } else {
          result = 1;
        }
      }

      return result;
    },
    facebookLink: function facebookLink() {
      return 'https://www.facebook.com/sharer.php?u=' + encodeURIComponent(this.url);
    },
    twitterLink: function twitterLink() {
      var hashtags = 'younicorn,cornify';
      return 'https://twitter.com/intent/tweet?url=' + encodeURIComponent(this.url) + '&hashtags=' + encodeURIComponent(hashtags);
    },
    url: function url() {
      return 'https://www.cornify.com/younicorn/' + this.younicornId;
    }
  },
  methods: {
    sparkle: function sparkle(event) {
      gbks.events.call('glitter-sparkle', {
        x: event.pageX,
        y: event.pageY - window.scrollY
      });
    },
    webshare: function webshare() {
      trackman.event('younicorn', 'options', 'webshare');
      var title = this.younicorn.name + ', a Younicorn friend of ' + this.younicorn.username; // var text = 'Check out my personal, asparkly unicorn.';

      var ref = this;
      this.l('webshare', title, this.url);
      navigator.share({
        title: title,
        url: this.url
      }).then(function () {
        ref.l('webshare.success', arguments);
        trackman.event('younicorn', 'options', 'webshare-success');
      }).catch(function (error) {
        ref.l('webshare.error', error);
        trackman.event('younicorn', 'options', 'webshare-error');
      });
    },
    download: function download() {
      this.$emit('toggleDownload');
      trackman.event('younicorn', 'options', 'toggle-download');
    },
    clickFacebook: function clickFacebook() {
      trackman.event('younicorn', 'options', 'facebook');
    },
    clickTwitter: function clickTwitter() {
      trackman.event('younicorn', 'options', 'twitter');
    },
    like: function like(event) {
      var likedYounicorns = this.likedYounicorns;
      var isLiked = likedYounicorns.indexOf(this.younicornId) !== -1;

      if (!isLiked) {
        gbks.api.voteYounicorn(this.younicornId, 1);
        Vue.set(likedYounicorns, likedYounicorns.length, this.younicornId);
        siteData.store.commit('updateLikedYounicorns', likedYounicorns);
        trackman.event('younicorn', 'options', 'like');
      } // Also add to favorites.


      var younicorns = siteData.store.state.bookmarkletYounicorns;
      var isAdded = younicorns.indexOf(this.younicornId) !== -1;

      if (!isAdded) {
        gbks.browser.extension.addYounicorn(this.younicornId);
        younicorns.push(this.younicornId);
        siteData.store.commit('updateBookmarkletYounicorns', younicorns);
        trackman.event('younicorn', 'add-to-favorites-via-like', this.younicornId);
      }
    },
    onVoteYounicorn: function onVoteYounicorn(data) {
      this.l('onVoteYounicorn', data);
    },
    onImageLoaded: function onImageLoaded(data) {
      this.image = data.image;
    },
    onBackgroundLoaded: function onBackgroundLoaded(data) {
      this.background = data.image;
    }
  }
});
"use strict";

Vue.component('younicorn-products-item', {
  template: "\n        <a\n            :class=\"classObject\"\n            :href=\"url\"\n            :title=\"data.title\"\n            target=\"_blank\"\n            rel=\"noopener\"\n            @click=\"click\"\n        >\n            <div class=\"image\">\n                <img\n                    :src=\"'/assets/builder/products/'+data.image.back\"\n                    :alt=\"data.image.backalt || ''\"\n                >\n                <canvas\n                    ref=\"canvas\"\n                    width=\"200\"\n                    height=\"200\"\n                    :style=\"canvasStyle\"\n                    alt=\"\"\n                />\n                <img \n                    v-if=\"data.image.front\" \n                    :src=\"'/assets/builder/products/'+data.image.front\"\n                    :alt=\"data.image.frontalt || ''\"\n                >\n            </div>\n            <p>{{ data.name }}</p>\n        </a>\n    ",
  props: ['younicornId', 'younicorn', 'type', 'image', 'background', 'data'],
  data: function data() {
    return {
      log: true
    };
  },
  mounted: function mounted() {
    // this.l('mounted', this.image, this.background);
    if (this.image) {
      this.draw();
    }
  },
  watch: {
    image: function image(next, previous) {
      this.draw();
    },
    background: function background(next, previous) {
      this.draw();
    }
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];
      c.push('-' + this.type);
      return c.join(' ');
    },
    canvasStyle: function canvasStyle() {
      var s = {
        left: this.data.image.x + '%',
        top: this.data.image.y + '%',
        width: this.data.image.size + '%',
        height: this.data.image.size + '%'
      };
      return s;
    },
    url: function url() {
      var file = this.younicorn.scene ? this.younicorn.scene : this.younicorn.file;
      file = 'https://www.cornify.com/younicorn-stable/' + file;
      return this.data.url + file;
    }
  },
  methods: {
    click: function click() {
      trackman.event('younicorn', 'click-product', this.type);
    },
    draw: function draw() {
      if (this.image && this.background) {
        var canvas = this.$refs.canvas;
        var context = canvas.getContext('2d'); // context.fillStyle = '#ededed';
        // context.fillRect(0, 0, canvas.width, canvas.height);
        // context.rotate(-16 * Math.PI / 180);

        var imageSize = 2000; // var newbackgrou
        // var backgroundX = Math.round((canvas.width - this.background.naturalWidth)/2);
        // var backgroundY = Math.round((canvas.height - this.background.naturalHeight)/2);
        // this.l('draw', this.background, backgroundX, backgroundY, this.background.naturalWidth, this.background.naturalHeight, canvas.width, canvas.height);
        // context.drawImage(this.background, backgroundX, backgroundY, canvas.width, canvas.height);

        this.drawImageToCanvasCover(canvas, context, this.background);
        context.drawImage(this.image, 0, 0, canvas.width, canvas.height);
      }
    },
    drawImageToCanvasCover: function drawImageToCanvasCover(canvas, context, image) {
      var imageWidth = image.naturalWidth;
      var imageHeight = image.naturalHeight;
      var newImageWidth = canvas.width;
      var newImageHeight = newImageWidth * imageHeight / imageWidth;

      if (newImageHeight < canvas.height) {
        newImageHeight = canvas.height;
        newImageWidth = newImageHeight * imageWidth / imageHeight;
      }

      var x = Math.round((canvas.width - newImageWidth) / 2);
      var y = Math.round((canvas.height - newImageHeight) / 2); // this.l('drawImageToCanvasCover');
      // this.l('imageWidth', imageWidth);
      // this.l('imageHeight', imageHeight);
      // this.l('newImageWidth', newImageWidth);
      // this.l('newImageHeight', newImageHeight);
      // this.l('x', x);
      // this.l('y', y);
      // this.l('image.naturalWidth', image.naturalWidth);
      // this.l('image.naturalHeight', image.naturalHeight);

      context.drawImage(image, x, y, newImageWidth, newImageHeight);
    }
  }
});
"use strict";

Vue.component('younicorn-products', {
  template: "\n        <div :class=\"classObject\" v-if=\"younicorn\">\n            <div class=\"wrap\">\n                <h2>Bring {{ younicorn.name }} into your&nbsp;world</h2>\n                <div class=\"content\">\n                    <younicorn-products-item\n                        v-if=\"image\"\n                        v-for=\"(item, itemId) in options\"\n                        :younicornId=\"younicornId\"\n                        :younicorn=\"younicorn\"\n                        :key=\"itemId+'_'+younicornId\"\n                        :type=\"itemId\"\n                        :data=\"item\"\n                        :image=\"image\"\n                        :background=\"background\"\"\n                    />\n                </div>\n            </div>\n        </div>\n    ",
  props: ['younicornId', 'younicorn'],
  data: function data() {
    var options = {
      shirt: {
        name: 'Shirt',
        title: 'Shirt',
        url: 'https://www.zazzle.com/api/create/at-238001563383308942?rf=238001563383308942&ax=Linkover&pd=235713341705118194&ed=true&tc=&ic=&t_image1_iid=',
        image: {
          back: 'shirt.svg',
          backAlt: 'T-shirt',
          size: 26.31,
          x: 40,
          y: 43
        }
      },
      stickers: {
        name: 'Stickers',
        title: 'Stickers',
        url: 'https://www.zazzle.com/api/create/at-238001563383308942?rf=238001563383308942&ax=Linkover&pd=217726211566420592&ed=true&tc=&ic=&t_image_iid=',
        image: {
          back: 'stickers.svg',
          backAlt: 'Stickers',
          front: 'stickers-front.svg',
          size: 63.16,
          x: 18.42,
          y: 18.42
        }
      },
      mug: {
        name: 'Mug',
        title: 'Mug',
        url: 'http://www.zazzle.com/api/create/at-238001563383308942?rf=238001563383308942&ax=Linkover&pd=168390409702831759&fwd=ProductPage&ed=true&image=',
        image: {
          back: 'mug.svg',
          backAlt: 'Mug',
          size: 26.31,
          x: 29.74,
          y: 52.37
        }
      }
    };
    return {
      log: true,
      options: options,
      image: null,
      background: null
    };
  },
  beforeMount: function beforeMount() {
    gbks.events.listen('younicorn-image-loaded', $.proxy(this.onImageLoaded, this), this.uid);
    gbks.events.listen('younicorn-background-loaded', $.proxy(this.onBackgroundLoaded, this), this.uid);
  },
  watch: {
    younicornId: function younicornId(next, previous) {
      this.image = null;
      this.background = null;
    }
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];
      return c.join(' ');
    }
  },
  methods: {
    onImageLoaded: function onImageLoaded(data) {
      this.image = data.image;
    },
    onBackgroundLoaded: function onBackgroundLoaded(data) {
      this.background = data.image;
    }
  }
});
"use strict";

Vue.component('younicorn-pagination', {
  template: "\n        <div :class=\"classObject\" v-if=\"younicornData\">\n            <div class=\"wrap\">\n                <div class=\"content\">\n                        <router-link\n                            v-if=\"previousUrl\"\n                            class=\"-previous\"\n                            :to=\"previousUrl\"\n                            v-html=\"previousIcon\"\n                            aria-label=\"Previous younicorn\"\n                            @click=\"clickPrevious\"\n                        />\n                        <router-link\n                            v-if=\"nextUrl\"\n                            class=\"-next\"\n                            :to=\"nextUrl\"\n                            v-html=\"previousIcon\"\n                            aria-label=\"Next younicorn\"\n                            @click=\"clickNext\"\n                        />\n                    </div>\n                </div>\n            </div>\n        </div>\n    ",
  props: ['younicornData'],
  data: function data() {
    return {
      log: !true,
      previousIcon: gbks.icons.arrowLeftBlueYellow
    };
  },
  beforeMount: function beforeMount() {
    this.l('beforeMount', this.younicornData);
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];
      return c.join(' ');
    },
    previousUrl: function previousUrl() {
      return this.younicornData.previousId ? '/younicorn/' + this.younicornData.previousId : null;
    },
    nextUrl: function nextUrl() {
      return this.younicornData.nextId ? '/younicorn/' + this.younicornData.nextId : null;
    }
  },
  methods: {
    clickPrevious: function clickPrevious() {},
    clickNext: function clickNext() {}
  }
});
"use strict";

Vue.component('younicorn-download-options-item-coloring', {
  template: "\n        <a\n            :class=\"classObject\"\n            :href=\"url\"\n            :title=\"data.name\"\n            :download=\"fileName\"\n            target=\"_blank\"\n            @click=\"click\"\n        >\n            <div class=\"wrap\">\n                <div class=\"content\">\n                    <img\n                        :src=\"src\"\n                        :alt=\"data.alt\"\n                    >\n                </div>\n                <p>{{ processingComplete ? data.name : 'Decolorizing...' }}</p>\n            </div>\n        </a>\n    ",
  props: ['sizeId', 'younicornId', 'younicorn', 'image', 'data'],
  data: function data() {
    return {
      log: !true,
      src: null,
      url: null,
      background: null,
      processTimeout: null,
      processingComplete: false
    };
  },
  beforeMount: function beforeMount() {
    this.l('beforeMount', this.data);
    this.loadImage();
  },
  mounted: function mounted() {// if(this.image) {
    //     this.draw();
    // }
  },
  beforeDestroy: function beforeDestroy() {
    clearTimeout(this.processTimeout);
  },
  watch: {
    image: function image(next, previous) {
      this.draw();
    }
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];

      if (!this.url) {
        c.push('-disabled');
      }

      if (!this.processingComplete) {
        c.push('-processing');
      }

      return c.join(' ');
    },
    fileName: function fileName() {
      var file = this.younicorn.name.toLowerCase();
      file = gbks.helpers.stringToSlug(file);

      if (file.length == 0) {
        file = this.younicornId;
      }

      return file + '.png';
    },
    backgroundPartData: function backgroundPartData() {
      var result = null;

      if (this.younicorn.bits) {
        var bits = this.younicorn.bits;
        var backgroundId = bits.parts.background;
        var part = siteData.builder.categories.background.parts[backgroundId];
        var file = part.slots.background.full;
        result = part.slots.background;
      }

      return result;
    }
  },
  methods: {
    click: function click() {
      trackman.event('younicorn', 'download-options', 'download-' + this.sizeId);
    },
    draw: function draw() {
      if (this.image && this.background) {
        var canvas = $('<canvas width="' + this.data.width + '" height="' + this.data.height + '" />');
        var context = canvas[0].getContext('2d'); // this.l('---');
        // this.l('draw', this.data.name);
        // this.l('this.data.width', this.data.width);
        // this.l('this.data.height', this.data.height);

        if (this.background) {
          this.drawImageToCanvasCover(context, this.background);
        }

        this.drawImageToCanvasContain(context, this.image);
        var pixels = context.getImageData(0, 0, this.data.width, this.data.height);
        this.l('pixels', pixels);
        this.processPixelData(canvas, context, pixels, 0); // var index = 0, pixel, average;
        // while(index < pixels.data.length) {
        //     // pixel = [pixels.data[index], pixels.data[index+1], pixels.data[index+3], pixels.data[index+3]];
        //     pixel = pixels.data.slice(index*4, index*4+4);
        //     if(index < 1000) {
        //         this.l(index, pixel);
        //     }
        //     average = (pixel[0] + pixel[1] + pixel[2])/3;
        //     if(average > 5) {
        //         pixel[0] = 255;
        //         pixel[1] = 255;
        //         pixel[2] = 255;
        //         pixel[3] = 255;
        //         // this.l('clearing', pixel);
        //         pixels.data.set(pixel, index*4);
        //     }
        //     index += 1;
        // }
        // this.l('pixels', pixels);
        // context.fillStyle = '#ffffff';
        // context.fillRect(0, 0, this.data.width, this.data.height);
        // context.putImageData(pixels, 0, 0);
        // try {
        //     var data = canvas[0].toDataURL("image/png");
        //     this.src = data;
        //     this.url = data.replace("image/png", "image/octet-stream");
        // } catch(error) {
        //     this.l('draw', error);
        // }
      }
    },
    drawImageToCanvasCover: function drawImageToCanvasCover(context, image) {
      var imageWidth = image.naturalWidth;
      var imageHeight = image.naturalHeight;
      var newImageWidth = this.data.width;
      var newImageHeight = newImageWidth * imageHeight / imageWidth;

      if (newImageHeight < this.data.height) {
        newImageHeight = this.data.height;
        newImageWidth = newImageHeight * imageWidth / imageHeight;
      }

      var x = Math.round((this.data.width - newImageWidth) / 2);
      var y = Math.round((this.data.height - newImageHeight) / 2); // this.l('drawImageToCanvasCover');
      // this.l('imageWidth', imageWidth);
      // this.l('imageHeight', imageHeight);
      // this.l('newImageWidth', newImageWidth);
      // this.l('newImageHeight', newImageHeight);
      // this.l('x', x);
      // this.l('y', y);

      context.drawImage(image, x, y, newImageWidth, newImageHeight);
    },
    drawImageToCanvasContain: function drawImageToCanvasContain(context, image) {
      var imageWidth = image.naturalWidth;
      var imageHeight = image.naturalHeight;
      var newImageWidth = this.data.width;
      var newImageHeight = newImageWidth * imageHeight / imageWidth;

      if (newImageHeight > this.data.height) {
        newImageHeight = this.data.height;
        newImageWidth = newImageHeight * imageWidth / imageHeight;
      }

      var x = Math.round((this.data.width - newImageWidth) / 2);
      var y = Math.round((this.data.height - newImageHeight) / 2); // this.l('drawImageToCanvasContain');
      // this.l('imageWidth', imageWidth);
      // this.l('imageHeight', imageHeight);
      // this.l('newImageWidth', newImageWidth);
      // this.l('newImageHeight', newImageHeight);
      // this.l('x', x);
      // this.l('y', y);

      context.drawImage(image, x, y, newImageWidth, newImageHeight);
    },
    loadImage: function loadImage() {
      this.l('loadImage', this.backgroundPartData);
      var image = new Image();
      image.onload = $.proxy(this.onLoadImage, this, image);
      image.src = '/assets/builder/' + this.backgroundPartData.bw;
    },
    onLoadImage: function onLoadImage(image) {
      this.l('onLoadImage', image);
      this.background = image;
      this.draw();
    },
    processPixelData: function processPixelData(canvas, context, pixels, index) {
      this.l('processPixelData', pixels.data.length, index); // var pixels = context.getImageData(0, 0, this.data.width, this.data.height);
      // this.l('pixels', pixels);

      var pixel, average;
      var indexEnd = Math.min(index + 1000000, pixels.data.length);

      while (index < indexEnd) {
        // pixel = [pixels.data[index], pixels.data[index+1], pixels.data[index+3], pixels.data[index+3]];
        pixel = pixels.data.slice(index * 4, index * 4 + 4);

        if (index < 1000) {
          this.l(index, pixel);
        }

        average = (pixel[0] + pixel[1] + pixel[2]) / 3;

        if (average > 5) {
          pixel[0] = 255;
          pixel[1] = 255;
          pixel[2] = 255;
          pixel[3] = 255; // this.l('clearing', pixel);

          pixels.data.set(pixel, index * 4);
        }

        index += 1;
      }

      if (index >= pixels.data.length) {
        context.fillStyle = '#ffffff';
        context.fillRect(0, 0, this.data.width, this.data.height);
        context.putImageData(pixels, 0, 0);

        try {
          var data = canvas[0].toDataURL("image/png");
          this.src = data;
          this.url = data.replace("image/png", "image/octet-stream");
          this.processingComplete = true;
        } catch (error) {
          this.l('draw', error);
        }
      } else {
        clearTimeout(this.processTimeout);
        this.processTimeout = setTimeout($.proxy(this.processPixelData, this, canvas, context, pixels, index), 25);
      }
    }
  }
});
"use strict";

Vue.component('younicorn-download-options-item-portrait', {
  template: "\n        <a\n            :class=\"classObject\"\n            :href=\"url\"\n            :title=\"data.name\"\n            :download=\"fileName\"\n            target=\"_blank\"\n            @click=\"click\"\n        >\n            <div class=\"wrap\">\n                <div class=\"content\">\n                    <img\n                        :src=\"src\"\n                        :alt=\"data.alt\"\n                    >\n                </div>\n                <p>{{ data.name }}</p>\n            </div>\n        </a>\n    ",
  props: ['sizeId', 'younicornId', 'younicorn', 'image', 'data'],
  data: function data() {
    return {
      log: !true,
      src: null,
      url: null,
      background: null
    };
  },
  beforeMount: function beforeMount() {
    this.l('beforeMount', this.data);
    this.loadImage();
  },
  mounted: function mounted() {// if(this.image) {
    //     this.draw();
    // }
  },
  watch: {
    image: function image(next, previous) {
      this.draw();
    }
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];

      if (!this.url) {
        c.push('-disabled');
      }

      return c.join(' ');
    },
    fileName: function fileName() {
      var file = this.younicorn.name.toLowerCase();
      file = gbks.helpers.stringToSlug(file);

      if (file.length == 0) {
        file = this.younicornId;
      }

      return file + '.png';
    },
    backgroundPartData: function backgroundPartData() {
      var result = null;

      if (this.younicorn.bits) {
        var bits = this.younicorn.bits;
        var backgroundId = bits.parts.background;
        var part = siteData.builder.categories.background.parts[backgroundId];
        var file = part.slots.background.full;
        result = part.slots.background;
      }

      return result;
    }
  },
  methods: {
    click: function click() {
      trackman.event('younicorn', 'download-options', 'download-' + this.sizeId);
    },
    draw: function draw() {
      if (this.image && this.background) {
        var canvas = $('<canvas width="' + this.data.width + '" height="' + this.data.height + '" />');
        var context = canvas[0].getContext('2d'); // this.l('---');
        // this.l('draw', this.data.name);
        // this.l('this.data.width', this.data.width);
        // this.l('this.data.height', this.data.height);

        if (this.background) {
          this.drawImageToCanvasCover(context, this.background);
        }

        this.drawImageToCanvasContain(context, this.image);

        try {
          var data = canvas[0].toDataURL("image/png");
          this.src = data;
          this.url = data.replace("image/png", "image/octet-stream");
        } catch (error) {
          this.l('draw', error);
        }
      }
    },
    drawImageToCanvasCover: function drawImageToCanvasCover(context, image) {
      var imageWidth = image.naturalWidth;
      var imageHeight = image.naturalHeight;
      var newImageWidth = this.data.width;
      var newImageHeight = newImageWidth * imageHeight / imageWidth;

      if (newImageHeight < this.data.height) {
        newImageHeight = this.data.height;
        newImageWidth = newImageHeight * imageWidth / imageHeight;
      }

      var x = Math.round((this.data.width - newImageWidth) / 2);
      var y = Math.round((this.data.height - newImageHeight) / 2); // this.l('drawImageToCanvasCover');
      // this.l('imageWidth', imageWidth);
      // this.l('imageHeight', imageHeight);
      // this.l('newImageWidth', newImageWidth);
      // this.l('newImageHeight', newImageHeight);
      // this.l('x', x);
      // this.l('y', y);

      context.drawImage(image, x, y, newImageWidth, newImageHeight);
    },
    drawImageToCanvasContain: function drawImageToCanvasContain(context, image) {
      var imageWidth = image.naturalWidth;
      var imageHeight = image.naturalHeight;
      var newImageWidth = this.data.width;
      var newImageHeight = newImageWidth * imageHeight / imageWidth;

      if (newImageHeight > this.data.height) {
        newImageHeight = this.data.height;
        newImageWidth = newImageHeight * imageWidth / imageHeight;
      }

      var x = Math.round((this.data.width - newImageWidth) / 2);
      var y = Math.round((this.data.height - newImageHeight) / 2); // this.l('drawImageToCanvasContain');
      // this.l('imageWidth', imageWidth);
      // this.l('imageHeight', imageHeight);
      // this.l('newImageWidth', newImageWidth);
      // this.l('newImageHeight', newImageHeight);
      // this.l('x', x);
      // this.l('y', y);

      context.drawImage(image, x, y, newImageWidth, newImageHeight);
    },
    loadImage: function loadImage() {
      this.l('loadImage', this.backgroundPartData);
      var image = new Image();
      image.onload = $.proxy(this.onLoadImage, this, image);
      image.src = '/assets/builder/' + this.backgroundPartData.portrait;
    },
    onLoadImage: function onLoadImage(image) {
      this.l('onLoadImage', image);
      this.background = image;
      this.draw();
    }
  }
});
"use strict";

Vue.component('younicorn-download-options-item', {
  template: "\n        <a\n            :class=\"classObject\"\n            :href=\"url\"\n            :title=\"data.name\"\n            :download=\"fileName\"\n            target=\"_blank\"\n            @click=\"click\"\n        >\n            <div class=\"wrap\">\n                <div class=\"content\">\n                    <img\n                        :src=\"src\"\n                        :alt=\"data.alt\"\n                    >\n                </div>\n                <p>{{ data.name }}</p>\n            </div>\n        </a>\n    ",
  props: ['sizeId', 'younicornId', 'younicorn', 'image', 'background', 'data'],
  data: function data() {
    return {
      log: !true,
      src: null,
      url: null
    };
  },
  beforeMount: function beforeMount() {
    this.l('beforeMount', this.image, this.background, this.data);
  },
  mounted: function mounted() {
    if (this.image) {
      this.draw();
    }
  },
  watch: {
    image: function image(next, previous) {
      this.draw();
    },
    background: function background(next, previous) {
      this.draw();
    }
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];

      if (!this.url) {
        c.push('-disabled');
      }

      return c.join(' ');
    },
    fileName: function fileName() {
      var file = this.younicorn.name.toLowerCase();
      file = gbks.helpers.stringToSlug(file);

      if (file.length == 0) {
        file = this.younicornId;
      }

      return file + '.png';
    }
  },
  methods: {
    click: function click() {
      trackman.event('younicorn', 'download-options', 'download-' + this.sizeId);
    },
    draw: function draw() {
      if (this.image && this.background) {
        var canvas = $('<canvas width="' + this.data.width + '" height="' + this.data.height + '" />');
        var context = canvas[0].getContext('2d');
        this.l('---');
        this.l('draw', this.data.name);
        this.l('this.data.width', this.data.width);
        this.l('this.data.height', this.data.height);
        this.drawImageToCanvasCover(context, this.background);
        this.drawImageToCanvasContain(context, this.image); // this.l('mounted', context, this.image, canvas.width, this.image.width);
        // // Draw background so cover.
        // var backgroundWidth = this.background.width;
        // var backgroundHeight = this.background.height;
        // var newBackgroundWidth = this.data.width;
        // var newBackgroundHeight = newBackgroundWidth * backgroundHeight / backgroundWidth;
        // if(newBackgroundHeight < this.data.height) {
        //     newBackgroundHeight = this.data.height;
        //     newBackgroundWidth = newBackgroundHeight * backgroundWidth / backgroundHeight;
        // }
        // var backgroundX = Math.round((this.data.width - newBackgroundWidth)/2);
        // var backgroundY = Math.round((this.data.height - newBackgroundHeight)/2);
        // this.context.drawImage(this.background, 0, 0, backgroundWidth, backgroundHeight, backgroundX, backgroundY, newBackgroundWidth, newBackgroundHeight)
        // Draw the corn centered.                

        try {
          var data = canvas[0].toDataURL("image/png");
          this.src = data;
          this.url = data; // this.url = data.replace("image/png", "image/octet-stream");
        } catch (error) {
          this.l('draw', error);
        }
      }
    },
    drawImageToCanvasCover: function drawImageToCanvasCover(context, image) {
      var imageWidth = image.naturalWidth;
      var imageHeight = image.naturalHeight;
      var newImageWidth = this.data.width;
      var newImageHeight = newImageWidth * imageHeight / imageWidth;

      if (newImageHeight < this.data.height) {
        newImageHeight = this.data.height;
        newImageWidth = newImageHeight * imageWidth / imageHeight;
      }

      var x = Math.round((this.data.width - newImageWidth) / 2);
      var y = Math.round((this.data.height - newImageHeight) / 2);
      this.l('drawImageToCanvasCover');
      this.l('imageWidth', imageWidth);
      this.l('imageHeight', imageHeight);
      this.l('newImageWidth', newImageWidth);
      this.l('newImageHeight', newImageHeight);
      this.l('x', x);
      this.l('y', y);
      this.l('image.naturalWidth', image.naturalWidth);
      this.l('image.naturalHeight', image.naturalHeight);
      context.drawImage(image, x, y, newImageWidth, newImageHeight);
    },
    drawImageToCanvasContain: function drawImageToCanvasContain(context, image) {
      var imageWidth = image.naturalWidth;
      var imageHeight = image.naturalHeight;
      var newImageWidth = this.data.width;
      var newImageHeight = newImageWidth * imageHeight / imageWidth;

      if (newImageHeight > this.data.height) {
        newImageHeight = this.data.height;
        newImageWidth = newImageHeight * imageWidth / imageHeight;
      }

      var x = Math.round((this.data.width - newImageWidth) / 2);
      var y = Math.round((this.data.height - newImageHeight) / 2);
      this.l('drawImageToCanvasContain');
      this.l('imageWidth', imageWidth);
      this.l('imageHeight', imageHeight);
      this.l('newImageWidth', newImageWidth);
      this.l('newImageHeight', newImageHeight);
      this.l('x', x);
      this.l('y', y);
      this.l('image.naturalWidth', image.naturalWidth);
      this.l('image.naturalHeight', image.naturalHeight);
      context.drawImage(image, x, y, newImageWidth, newImageHeight);
    }
  }
});
"use strict";

Vue.component('younicorn-download-options', {
  template: "\n        <div :class=\"classObject\" v-if=\"younicorn\">\n            <div class=\"wrap\" v-if=\"active\">\n                <h2>Click an image to download</h2>\n                <div class=\"content\">\n                    <younicorn-download-options-item\n                        key=\"square\"\n                        sizeId=\"square\"\n                        :younicornId=\"younicornId\"\n                        :younicorn=\"younicorn\"\n                        :data=\"options.square\"\n                        :image=\"image\"\n                        :background=\"background\"\n                    />\n                    <younicorn-download-options-item\n                        key=\"landscape\"\n                        sizeId=\"landscape\"\n                        :younicornId=\"younicornId\"\n                        :younicorn=\"younicorn\"\n                        :data=\"options.landscape\"\n                        :image=\"image\"\n                        :background=\"background\"\n                    />\n                    <younicorn-download-options-item-portrait\n                        key=\"portrait\"\n                        sizeId=\"portrait\"\n                        :younicornId=\"younicornId\"\n                        :younicorn=\"younicorn\"\n                        :data=\"options.portrait\"\n                        :image=\"image\"\n                    />\n                    <younicorn-download-options-item-coloring\n                        key=\"coloring\"\n                        sizeId=\"coloring\"\n                        :younicornId=\"younicornId\"\n                        :younicorn=\"younicorn\"\n                        :data=\"options.coloring\"\n                        :image=\"image\"\n                    />\n                </div>\n            </div>\n        </div>\n    ",
  props: ['younicornId', 'younicorn', 'active'],
  data: function data() {
    var options = {
      square: {
        name: 'Square',
        width: 2000,
        height: 2000,
        alt: 'Download a square younicorn image'
      },
      landscape: {
        name: 'Landscape',
        width: 2000,
        height: 1125,
        alt: 'Download a landscape younicorn image'
      },
      portrait: {
        name: 'Portrait',
        width: 1125,
        height: 2000,
        portrait: true,
        alt: 'Download a portrait younicorn image'
      },
      coloring: {
        name: 'Coloring',
        width: 2000,
        height: 2000,
        alt: 'Download a coloring younicorn sheet'
      }
    };
    return {
      log: !true,
      options: options,
      image: null,
      background: null
    };
  },
  beforeMount: function beforeMount() {
    gbks.events.listen('younicorn-image-loaded', $.proxy(this.onImageLoaded, this), this.id);
    gbks.events.listen('younicorn-background-loaded', $.proxy(this.onBackgroundLoaded, this), this.id);
  },
  watch: {
    younicornId: function younicornId(next, previous) {
      this.image = null;
      this.background = null;
    }
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];
      return c.join(' ');
    }
  },
  methods: {
    onImageLoaded: function onImageLoaded(data) {
      this.l('onImageLoaded', data);
      this.image = data.image;
    },
    onBackgroundLoaded: function onBackgroundLoaded(data) {
      this.l('onBackgroundLoaded', data);
      this.background = data.image;
    }
  }
});
"use strict";

Vue.component('younicorn-extension-button', {
  template: "\n        <button\n            :class=\"classObject\"\n            type=\"button\"\n            :aria-pressed=\"added\"\n            @click=\"click\"\n        >\n            <span v-html=\"linkIcon\" />{{ label }}\n        </button>\n    ",
  props: ['younicornId'],
  data: function data() {
    return {
      log: !true
    };
  },
  beforeMount: function beforeMount() {
    this.l('beforeMount', this.younicornId, this.hasExtension, this.younicorns, this.added);
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];

      if (this.added) {
        c.push('-active');
      }

      return c.join(' ');
    },
    hasExtension: function hasExtension() {
      return siteData.store.state.chromeExtensionInstalled || siteData.store.state.firefoxExtensionInstalled;
    },
    younicorns: function younicorns() {
      return siteData.store.state.bookmarkletYounicorns;
    },
    added: function added() {
      return this.younicorns.indexOf(this.younicornId) !== -1;
    },
    linkIcon: function linkIcon() {
      return this.added ? gbks.icons.heartFilled : gbks.icons.heart;
    },
    label: function label() {
      return this.added ? 'Added to favorites' : 'Add to favorites';
    }
  },
  methods: {
    click: function click() {
      var type = this.added ? 'removeYounicorn' : 'addYounicorn';
      this.l('click', this.younicorns, this.added);
      var younicorns = this.younicorns;

      if (this.added) {
        gbks.browser.extension.removeYounicorn(this.younicornId);
        younicorns.splice(younicorns.indexOf(this.younicornId), 1);
      } else {
        gbks.browser.extension.addYounicorn(this.younicornId);
        younicorns.push(this.younicornId);
      }

      siteData.store.commit('updateBookmarkletYounicorns', younicorns);
      trackman.event('younicorn', this.added ? 'remove-from-favorites' : 'add-to-favorites', this.younicornId);
    },
    onMessage: function onMessage(reply) {
      this.l('onMessage', reply);
      siteData.store.commit('updateBookmarkletYounicorns', reply.younicorns);
    }
  }
});
"use strict";

Vue.component('younicorns-list-item-id', {
  template: "\n        <router-link\n            :class=\"classObject\"\n            :to=\"'/younicorn/' + younicornId\"\n            :style=\"styleObject\"\n        >\n            <div class=\"wrap\">\n                <img\n                    :src=\"src\"\n                    :width=\"500\"\n                    :height=\"500\"\n                    @load=\"imageLoaded\"\n                >\n            </div>\n        </router-link>\n    ",
  props: ['younicornId'],
  data: function data() {
    return {
      log: !true,
      loading: true
    };
  },
  beforeMount: function beforeMount() {
    this.l('beforeMount', this.id, this.data);
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];

      if (this.loading) {
        c.push('-loading');
      }

      return c.join(' ');
    },
    styleObject: function styleObject() {
      return {
        backgroundImage: 'url(' + this.src + ')'
      };
    },
    src: function src() {
      return 'https://www.cornify.com/younicorn-stable/500/' + this.younicornId + '-scene.jpg';
    }
  },
  methods: {
    imageLoaded: function imageLoaded() {
      this.loading = false;
    }
  }
});
"use strict";

Vue.component('younicorns-list-item', {
  template: "\n        <router-link\n            :class=\"classObject\"\n            :to=\"url\"\n            :title=\"title\"\n            :style=\"styleObject\"\n        >\n            <div class=\"wrap\">\n                <img\n                    :src=\"src\"\n                    width=\"500\"\n                    height=\"500\"\n                    :alt=\"data.name\"\n                    @load=\"imageLoaded\"\n                >\n            </div>\n        </router-link>\n    ",
  props: ['data'],
  data: function data() {
    return {
      log: !true,
      loading: true
    };
  },
  beforeMount: function beforeMount() {
    this.l('beforeMount', this.id, this.data);
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];

      if (this.loading) {
        c.push('-loading');
      }

      return c.join(' ');
    },
    styleObject: function styleObject() {
      return {
        backgroundImage: 'url(' + this.src + ')'
      };
    },
    url: function url() {
      var result = '/younicorn/' + this.data.id;

      if (this.data.bits.bitcorn) {
        result = '/bitcorn/' + this.data.id;
      }

      if (this.data.name && this.data.name.length > 0) {
        var slug = gbks.helpers.stringToSlug(this.data.name);

        if (slug.length > 0) {
          result += '/' + slug;
        }
      }

      return result;
    },
    src: function src() {
      var result = 'https://www.cornify.com/younicorn-stable/500/';
      result += this.data.scene ? this.data.scene : this.data.file;
      return result;
    },
    title: function title() {
      return this.data.name;
    }
  },
  methods: {
    imageLoaded: function imageLoaded() {
      this.loading = false;
    }
  }
});
"use strict";

Vue.component('younicorns-list', {
  template: "\n        <div :class=\"classObject\" ref=\"canvas\">\n            <younicorns-list-item\n                v-if=\"mode == 'all'\"\n                v-for=\"(item, index) in data\"\n                :key=\"item.id\"\n                :data=\"item\"\n            />\n            <younicorns-list-item-id\n                v-if=\"mode != 'all'\"\n                v-for=\"(younicornId, index) in younicornIds\"\n                :key=\"younicornId\"\n                :younicornId=\"younicornId\"\n            />\n        </div>\n    ",
  props: ['mode', 'data', 'younicornIds'],
  data: function data() {
    return {
      log: !true,
      loading: false
    };
  },
  beforeMount: function beforeMount() {
    this.l('beforeMount', this.data);
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];
      return c.join(' ');
    }
  },
  methods: {}
});
"use strict";

Vue.component('younicorns-no-favorites', {
  template: "\n        <div :class=\"classObject\">\n            <p>Collect your favorite younicorns here. Just create your own younicorns or press the <span v-html=\"heartIcon\"/> button on younicorn&nbsp;pages.</p>\n        </div>\n    ",
  props: [],
  data: function data() {
    return {
      log: true,
      heartIcon: gbks.icons.heartFilled
    };
  },
  beforeMount: function beforeMount() {},
  computed: {
    classObject: function classObject() {
      var c = [this.id];
      return c.join(' ');
    }
  },
  methods: {}
});
"use strict";

Vue.component('younicorns-toggle', {
  template: "\n        <button\n            :class=\"classObject\"\n            type=\"button\"\n            v-html=\"label\"\n            :aria-label=\"isActive ? 'View all' : 'View favorites'\"\n            :aria-pressed=\"isActive\"\n            @click=\"click\"\n        />\n    ",
  props: ['activeTabId'],
  data: function data() {
    return {
      log: !true
    };
  },
  beforeMount: function beforeMount() {},
  computed: {
    classObject: function classObject() {
      var c = [this.id];

      if (this.isActive) {
        c.push('-active');
      }

      return c.join(' ');
    },
    isActive: function isActive() {
      return this.activeTabId == 'favorites';
    },
    isMobile: function isMobile() {
      return siteData.store.state.isMobile;
    },
    label: function label() {
      var result = gbks.icons.heartFilled;

      if (!this.isMobile) {
        result += ' Favorites';
      }

      return result;
    }
  },
  methods: {
    click: function click() {
      var tabId = this.isActive ? 'all' : 'favorites';
      this.$emit('click', tabId);
    }
  }
});
"use strict";

Vue.component('younicorns-info', {
  template: "\n        <div :class=\"classObject\">\n            <p>Have you ever wanted to create your own personal unicorn? Put your own sparkly touch on the most magical creatures known? You are in the right place. All the Younicorns you see here were designed by others like you. What will you come up with?</p>\n            <router-link\n                class=\"button -filled\"\n                to=\"/younicorn\"\n            >Make your own Younicorn</router-link>\n        </div>\n    ",
  props: [],
  data: function data() {
    return {
      log: true
    };
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];
      return c.join(' ');
    }
  },
  methods: {}
});
"use strict";

Vue.component('younicorns-promo', {
  template: "\n        <div :class=\"classObject\" v-if=\"isVisible\">\n            <img\n                v-if=\"imageSource\"\n                :src=\"imageSource\" \n                :alt=\"imageAlt\" \n                width=\"60\" \n                height=\"60\"\n            >\n            <p><router-link to=\"/younicorn\">{{ title }}</router-link></p>\n        </div>\n    ",
  data: function data() {
    // Pyramids
    var isVisible = false;
    var title = 'Come and visit the pyramids!';
    var imageSource = '/assets/builder/background/background-desert-bw.svg';
    var imageAlt = 'Desert landscape with pyramids'; // Coloring download
    // isVisible = true;
    // title = 'You can now download your Younicorns in black and white for coloring!';
    // imageSource = null;
    // imageAlt = null;
    // Part promo
    // isVisible = true;
    // title = 'Do you like butterflies?';
    // imageSource = null;
    // imageAlt = null;

    if (this.isUnicornDay()) {
      isVisible = true;
      title = "Happy International Uncorn Day!!!";
      imageSource = '/assets/builder/background/background-unicorn-day-preview.svg';
      imageAlt = 'Time to celebrate!';
    } else if (this.isValentines()) {
      isVisible = true;
      title = "Happy Valentine's!";
      imageSource = '/assets/builder/background/background-valentines-preview.svg';
      imageAlt = 'Hearts and love';
    } else if (this.isAprilFools()) {
      isVisible = true;
      title = "Happy April Fools!";
      imageSource = '/assets/builder/alicorn/alicorn-banana-preview.svg';
      imageAlt = 'Banana corn';
    } else if (this.isFullMoon()) {
      isVisible = true;
      title = 'Hm... the moon looks really round and full!';
      imageSource = '/assets/builder/background/background-full-moon-preview.svg';
      imageAlt = 'Night time landscape with a large full moon';
    } // Easter promo
    // isVisible = true;
    // title = 'Happy easter!!!';
    // imageSource = '/assets/builder/background/background-easter-preview.svg';
    // imageAlt = 'Happy easter!!!';


    return {
      log: true,
      title: title,
      imageSource: imageSource,
      imageAlt: imageAlt,
      isVisible: isVisible
    };
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];

      if (this.imageSource) {
        c.push('-image');
      }

      return c.join(' ');
    }
  },
  methods: {
    isFullMoon: function isFullMoon() {
      var moonPhase = gbks.helpers.moonPhase();
      var isFullMoon = moonPhase.phase == 4 && moonPhase.percent >= 92;
      return isFullMoon;
    },
    isValentines: function isValentines() {
      var result = false;
      var today = new Date();

      if (today.getMonth() === 1 && today.getDate() === 14) {
        result = true;
      }

      return result;
    },
    isAprilFools: function isAprilFools() {
      var result = false;
      var today = new Date();

      if (today.getMonth() === 3 && today.getDate() === 1) {
        result = true;
      }

      return result;
    },
    isUnicornDay: function isUnicornDay() {
      var result = false;
      var today = new Date();

      if (today.getMonth() === 3 && today.getDate() === 9) {
        result = true;
      }

      return result;
    }
  }
});
"use strict";

/*

Global background layer for amazing effects.

gbks.events.call('site-background-effect', {
    id: 'rainbow',
});

{
    id: 'rainbow'
}

{
    id: 'scroll-color'
}

{
    id: 'solid-color',
    color: [255, 0, 255]
}

{
    id: 'blurry-image',
    file: ''
}

 */
Vue.component('site-background', {
  template: "\n        <div :class=\"classObject\" aria-hidden=\"true\">\n            <div class=\"wrap\">\n                <div class=\"content\">\n                    <site-background-blurry-image :data=\"data\" />\n                    <site-background-rainbow :data=\"data\" />\n                    <site-background-scroll-color :data=\"data\" />\n                    <site-background-solid-color :data=\"data\" />\n                </div>\n            </div>\n        </div>\n    ",
  props: [],
  data: function data() {
    return {
      log: !true,
      data: null
    };
  },
  beforeMount: function beforeMount() {
    gbks.events.listen('site-background-effect', $.proxy(this.changeEffect, this), this.id);
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];
      return c.join(' ');
    }
  },
  methods: {
    changeEffect: function changeEffect(data) {
      this.l('changeEffect', data);
      this.data = data;
    }
  }
});
"use strict";

Vue.component('site-background-blurry-image', {
  template: "\n        <div :class=\"classObject\" :style=\"styleObject\">\n            <div :style=\"innerStyleObject\" />\n        </div>\n    ",
  props: ['data'],
  data: function data() {
    var active = this.data && this.data.id == 'blurry-image';
    return {
      log: true,
      active: active,
      backgroundColor: null
    };
  },
  watch: {
    data: function data(next, previous) {
      this.active = next.id == 'blurry-image';
    }
  },
  beforeMount: function beforeMount() {
    gbks.events.listen('image-palette-found', $.proxy(this.onPalette, this), this.id);
  },
  beforeDestroy: function beforeDestroy() {},
  computed: {
    classObject: function classObject() {
      var c = [this.id];

      if (this.active) {
        c.push('-active');
      }

      return c.join(' ');
    },
    styleObject: function styleObject() {
      var result = {};

      if (this.active) {
        // result.backgroundImage = "url('"+this.data.file+"')";
        if (this.backgroundColor) {
          result.backgroundColor = 'rgba(' + this.backgroundColor[0] + ',' + this.backgroundColor[1] + ',' + this.backgroundColor[2] + ')';
        }
      }

      return result;
    },
    innerStyleObject: function innerStyleObject() {
      var result = {};

      if (this.active) {
        result.backgroundImage = "url('" + this.data.file + "')"; // if(this.backgroundColor) {
        //     result.backgroundColor = 'rgba('+this.backgroundColor[0]+','+this.backgroundColor[1]+','+this.backgroundColor[2]+')';
        // }
      }

      return result;
    }
  },
  methods: {
    onPalette: function onPalette(data) {
      this.l('onPalette', data, this.data);

      if (data.file == this.data.file && data.palette && data.palette.length > 0) {
        this.backgroundColor = data.palette[0];
      }
    }
  }
});
"use strict";

Vue.component('site-background-scroll-color', {
  template: "\n        <div :class=\"classObject\" :style=\"styleObject\">\n            <div class=\"wrap\">\n                <div class=\"content\">\n                    \n\n                </div>\n            </div>\n        </div>\n    ",
  props: ['data'],
  data: function data() {
    var active = this.data && this.data.id == 'scroll-color';
    var palette = gbks.helpers.shuffle(siteData.palette.slice());
    palette.splice(0, 0, {
      r: 255,
      g: 255,
      b: 255
    }); // console.log('data', palette);

    return {
      log: !true,
      active: active,
      palette: palette,
      color: [255, 255, 255],
      baseScrollOffset: 0,
      scrollMethod: $.proxy(this.onScroll, this)
    };
  },
  watch: {
    data: function data(next, previous) {
      this.l('watch.data');
      var active = next.id == 'scroll-color';

      if (active != next.active) {
        this.active = active;

        if (active) {
          $(window).bind('scroll', this.scrollMethod);
        } else {
          $(window).unbind('scroll', this.scrollMethod);
        }
      }
    }
  },
  beforeMount: function beforeMount() {
    this.l('beforeMount');

    if (this.active) {
      $(window).bind('scroll', this.scrollMethod);
    } else {
      $(window).unbind('scroll', this.scrollMethod);
    }
  },
  mounted: function mounted() {
    this.onScroll();
  },
  beforeDestroy: function beforeDestroy() {},
  computed: {
    classObject: function classObject() {
      var c = [this.id];

      if (this.active) {
        c.push('-active');
      }

      return c.join(' ');
    },
    styleObject: function styleObject() {
      return {
        backgroundColor: 'rgb(' + this.color[0] + ', ' + this.color[1] + ', ' + this.color[2] + ')'
      };
    }
  },
  methods: {
    onScroll: function onScroll(event) {
      // this.l('onScroll');
      var colors = this.palette;
      var position = window.scrollY;
      var range = 10000;
      var colorIndex = (this.baseScrollOffset + position / range) * colors.length;
      colorIndex = Math.max(colorIndex, 0);
      colorIndex = Math.min(colorIndex, colors.length - 1);

      while (colorIndex >= colors.length) {
        colorIndex -= colors.length;
      }

      var colorOne = colors[Math.floor(colorIndex)];
      var colorTwo = colors[Math.ceil(colorIndex)];
      var offset = colorIndex - Math.floor(colorIndex);
      var r = colorOne.r + (colorTwo.r - colorOne.r) * offset;
      var g = colorOne.g + (colorTwo.g - colorOne.g) * offset;
      var b = colorOne.b + (colorTwo.b - colorOne.b) * offset;
      this.color = [r, g, b]; // $('body').css({
      //     backgroundColor: 'rgb('+r+', '+g+', '+b+')'
      // });
      // if(this.rainbow) {
      //     this.rainbow.setBackgroundColor(r, g, b);
      // }
      // console.log('onScroll', position, colorIndex, colorOne, colorTwo);
    }
  }
});
"use strict";

Vue.component('site-background-solid-color', {
  template: "\n        <div :class=\"classObject\" :style=\"styleObject\" />\n    ",
  props: ['data'],
  data: function data() {
    var active = this.data && this.data.id == 'solid-color';
    return {
      log: !true,
      active: active,
      color: null
    };
  },
  watch: {
    data: function data(next, previous) {
      this.active = next.id == 'solid-color';
      this.l('data', this.active, next);

      if (next.color) {
        this.color = next.color;
      } else {
        this.l('siteData.palette', siteData.palette);
        var color = this.color = siteData.palette[Math.floor(Math.random() * siteData.palette.length)];
      }
    }
  },
  beforeMount: function beforeMount() {},
  beforeDestroy: function beforeDestroy() {},
  computed: {
    classObject: function classObject() {
      var c = [this.id];

      if (this.active) {
        c.push('-active');
      }

      return c.join(' ');
    },
    styleObject: function styleObject() {
      var result = {};
      var color = this.color;

      if (color) {
        if (color.r) {
          result.backgroundColor = 'rgb(' + color.r + ', ' + color.g + ', ' + color.b + ')';
        } else {
          result.backgroundColor = 'rgb(' + color[0] + ', ' + color[1] + ', ' + color[2] + ')';
        }
      }

      return result;
    }
  },
  methods: {}
});
"use strict";

Vue.component('site-background-rainbow', {
  template: "\n        <div :class=\"classObject\" ref=\"canvas\">\n            <canvas />\n        </div>\n    ",
  props: ['data'],
  data: function data() {
    var active = this.data && this.data.id == 'rainbow';
    return {
      log: !true,
      active: active,
      rainbow: null
    };
  },
  watch: {
    data: function data(next, previous) {
      var active = next.id == 'rainbow';

      if (active != this.active) {
        this.active = active;

        if (active) {
          this.rainbow.start();
        } else {
          this.rainbow.stop();
        }
      }
    }
  },
  beforeMount: function beforeMount() {},
  mounted: function mounted() {
    var rainbowCanvas = $(this.$refs.canvas);
    this.rainbow = new gbks.cornify.RainbowCanvas();
    this.rainbow.init(rainbowCanvas);

    if (this.active) {
      this.rainbow.start();
    }
  },
  beforeDestroy: function beforeDestroy() {},
  computed: {
    classObject: function classObject() {
      var c = [this.id];

      if (this.active) {
        c.push('-active');
      }

      return c.join(' ');
    }
  },
  methods: {}
});
"use strict";

Vue.component('lightning-invoice-default', {
  template: "\n        <div :class=\"classObject\">\n            <svg-text text=\"Make your own Bitcorn\" />\n            <p>This is a simple, just-for-fun tech demo for the <a href=\"https://bitcoin.org\" target=\"_blank\">Bitcoin</a> <a href=\"https://lightning.network\" target=\"_blank\">Lightning</a> network. For <a :href=\"'https://www.urbandictionary.com/define.php?term='+amount\" target=\"_blank\">{{ amount }} </a> Satoshi, you get access to the Bitcoin sticker and retro wave background in the <router-link to=\"/younicorn\">Younicorn designer</router-link>. You have Bitcoin, now get your Bitcorn and sparkle up your&nbsp;life...&nbsp;forever.</p>\n            <p>Start by clicking the button below to generate a Lightning&nbsp;invoice.</p>\n        </div>\n    ",
  props: ['amount'],
  data: function data() {
    return {
      log: !true,
      loading: false
    };
  },
  beforeMount: function beforeMount() {},
  computed: {
    classObject: function classObject() {
      var c = [this.id];

      if (this.loading) {
        c.push('-loading');
      }

      return c.join(' ');
    }
  },
  methods: {
    createInvoice: function createInvoice() {
      if (this.loading) {
        return;
      }

      this.loading = true;
      this.$emit('create');
    }
  }
});
"use strict";

Vue.component('lightning-info', {
  template: "\n        <div :class=\"classObject\">\n            <a\n                :class=\"expanded ? '-active' : ''\"\n                href=\"#\"\n                @click.prevent=\"toggle\"\n                v-html=\"toggleLabel\"\n            />\n            <template v-if=\"expanded\">\n                <h2>Bitcoin? Lightning? Unicorns?</h2>\n                <p>Since 2009, Cornify has been on the forefront of technology by providing unicorn and rainbow distribution services to the world. Bitcoin and Lightning might not be as big of a breakthrough as the democratization of unicorns and rainbows, but it's pretty cool nevertheless. And who could resist a good wordplay like Bitcorn? So here we are, unicorns and Bitcoin united to bring happiness to the world. For ideas, problems, and in-depth conversations about glitter, send an email to <a href=\"mailto:rainbows@cornify.com\">rainbows@cornify.com</a>.</p>\n            </template>\n        </div>\n    ",
  props: [],
  data: function data() {
    return {
      log: !true,
      expanded: false,
      toggleLabel: "What's going on here? " + gbks.icons.down
    };
  },
  beforeMount: function beforeMount() {},
  computed: {
    classObject: function classObject() {
      var c = [this.id];
      return c.join(' ');
    }
  },
  methods: {
    toggle: function toggle() {
      this.expanded = !this.expanded;
    }
  }
});
"use strict";

Vue.component('lightning-invoice-card', {
  template: "\n        <div :class=\"classObject\">\n            <div class=\"card\">\n                <template v-if=\"invoice\">\n                    <h3>Lightning invoice</h3>\n                </template>\n                <div class=\"qr\" ref=\"canvas\" title=\"This is not a labyrinth, it's a QR code\">\n                </div>\n                <template v-if=\"invoice\">\n                    <p v-if=\"false\"><b>Invoice number:</b><br/>{{ invoice.data.id }}</p>\n                    <p v-if=\"hasValidLightningInvoice\"><b>Payment request:</b><br/>{{ invoice.data.lightning_invoice.payreq }}</p>\n                </template>\n            </div>\n            <template v-if=\"!invoice\">\n                <a\n                    class=\"button -filled\"\n                    href=\"#\"\n                    title=\"It's going to the best invoice ever!\"\n                    @click.prevent=\"createInvoice\"\n                >Create a Lightning invoice</a>\n\n                <p v-if=\"false\">If you would like a receipt, enter your email</p>\n                <input\n                    v-if=\"false\"\n                    type=\"email\"\n                    v-model=\"emailModel\"\n                    placeholder=\"Your email\"\n                />\n            </template>\n        </div>\n    ",
  props: ['invoice', 'loading'],
  data: function data() {
    return {
      log: true,
      qrcode: null,
      emailModel: ''
    };
  },
  beforeMount: function beforeMount() {},
  watch: {
    invoice: function invoice(next, previous) {
      console.log('watch.invoice', this.invoice);

      if (next && this.hasValidLightningInvoice) {
        this.drawQRCode();
      }
    }
  },
  mounted: function mounted() {
    var canvas = this.$refs.canvas;
    this.l('mounted', this.invoice);
    this.qrcode = new QRCode(canvas, {
      width: 256,
      height: 256,
      typeNumber: 10,
      correctLevel: 1
    });

    if (this.invoice && this.hasValidLightningInvoice) {
      this.drawQRCode();
    }
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];

      if (this.loading) {
        c.push('-loading');
      }

      if (this.invoice) {
        c.push('-invoice');
        c.push('-' + this.invoice.status);
      } else {
        c.push('-no-invoice');
      }

      return c.join(' ');
    },
    hasValidLightningInvoice: function hasValidLightningInvoice() {
      return this.invoice && this.invoice.data && this.invoice.data.lightning_invoice && this.invoice.data.lightning_invoice.payreq;
    }
  },
  methods: {
    drawQRCode: function drawQRCode() {
      this.l('drawQRCode', this.invoice);
      var code = this.invoice.data.lightning_invoice.payreq;
      this.l('drawQRCode', code, code.length);
      this.qrcode.makeCode(code);
    },
    createInvoice: function createInvoice(event) {
      this.l('createInvoice');

      if (this.loading) {
        return;
      }

      var position = gbks.helpers.getPositionFromEvent(event);
      position.y -= window.scrollY;
      gbks.events.call('glitter-motivate', position);
      this.$emit('create', {
        customer_email: this.emailModel
      });
    }
  }
});
"use strict";

Vue.component('lightning-invoice-details', {
  template: "\n        <div :class=\"classObject\" v-if=\"invoice\">\n            <a\n                href=\"#\"\n                @click.prevent=\"toggle\"\n            >View details</a>\n            <div class=\"details\" v-if=\"expanded\">\n                <p>On-chain addres: {{ invoice.chain_invoice.address }}</p>\n                <p>Created: {{ invoice.lightning_invoice.created_at }}</p>\n                <p>Expires: {{ invoice.lightning_invoice.expires_at }}</p>\n                <p>Payment request: {{ invoice.lightning_invoice.payreq }}</p>\n                <p>URI: {{ invoice.uri }}</p>\n            </div>\n        </div>\n    ",
  props: ['invoice'],
  data: function data() {
    return {
      log: !true,
      expanded: false
    };
  },
  beforeMount: function beforeMount() {},
  mounted: function mounted() {},
  computed: {
    classObject: function classObject() {
      var c = [this.id];

      if (this.expanded) {
        c.push('-expanded');
      }

      return c.join(' ');
    }
  },
  methods: {
    toggle: function toggle() {
      this.expanded = !this.expanded;
    }
  }
});
"use strict";

Vue.component('button-button', {
  template: "\n        <section :class=\"classObject\">\n            <div class=\"wrap\">\n                <div class=\"content\">\n                    <h2>Get a Cornify button for your website!</h2>\n\n                    <a\n                        href=\"#\"\n                        title=\"Cornify your life!\"\n                        @click.prevent=\"cornify\"\n                    >\n                        <img\n                            src=\"/assets/cornify-button.png\" \n                            width=\"82\" \n                            height=\"25\" \n                            alt=\"Cornify\"\n                        />\n                    </a>\n\n                    <p>Just add this code to your website and you're good to go.</p>\n\n                    <textarea\n                        v-html=\"code\"\n                        ref=\"code\"\n                        @click=\"highlightCode\"\n                    />\n                </div>\n            </div>\n        </section>\n    ",
  props: [],
  data: function data() {
    return {
      log: true
    };
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];
      return c.join(' ');
    },
    code: function code() {
      var options = '';
      var younicorns = siteData.store.state.bookmarkletYounicorns;

      if (younicorns && younicorns.length > 0) {
        options = JSON.stringify({
          y: younicorns.join(',')
        });
      }

      var result = '<a href="http://www.cornify.com" onclick="cornify_add(' + options + ');return false;" title="Cornify"><img src="https://www.cornify.com/assets/cornify-button.png" width="82" height="25" border="0" alt="Cornify" /></a><script type="text/javascript" src="https://www.cornify.com/js/cornify.js"></script>';
      return result;
    },
    bookmarkletYounicorns: function bookmarkletYounicorns() {
      return siteData.store.state.bookmarkletYounicorns;
    },
    hasYounicorns: function hasYounicorns() {
      return this.bookmarkletYounicorns && this.bookmarkletYounicorns.length > 0;
    }
  },
  mounted: function mounted() {
    this.resizeCode();
  },
  methods: {
    highlightCode: function highlightCode() {
      trackman.event('button', 'highlight-code');
      $(this.$refs.code).select();
    },
    resizeCode: function resizeCode() {
      var code = this.$refs.code;
      code.style.height = '5px';
      code.style.height = code.scrollHeight + 'px';
    },
    cornify: function cornify() {
      cornify_add();
      trackman.event('button', 'click-cornify');
    }
  }
});
"use strict";

Vue.component('button-bookmarklet', {
  template: "\n        <section :class=\"classObject\">\n            <a\n                class=\"-bookmarklet\"\n                :href=\"bookmarklet\"\n            >Cornify</a>\n            <h2>Cornify for all browsers!</h2>\n            <p>Drag the blue link above to the bookmarks toolbar in your browser. Go to any website and click the new button to start cornificating.</p>\n        </section>\n    ",
  props: [],
  data: function data() {
    return {
      log: true
    };
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];
      return c.join(' ');
    },
    bookmarklet: function bookmarklet() {
      // href="javascript:(function(){var d=document,j=d.getElementById('__cornify_nodes'),k=null;var files=['https://cornify.com/js/cornify.js','https://cornify.com/js/cornify_run.js'];if(j){cornify_add();}else{k=d.createElement('div');k.id='__cornify_nodes';d.getElementsByTagName('body')[0].appendChild(k);for(var l=0;l&lt;files.length;l++){j=d.createElement('script');j.src=files[l];k.appendChild(j);}}})();"
      var options = '';
      var younicorns = siteData.store.state.bookmarkletYounicorns;

      if (younicorns && younicorns.length > 0) {
        options = JSON.stringify({
          y: younicorns.join(',')
        });
      }

      var result = "javascript:(function(){var d=document,j=d.getElementById('__cornify_nodes'),k=null,c='https://cornify.com/js/cornify',l=0;var f=['.js','_run.js'];if(j){cornify_add(" + options + ");}else{k=d.createElement('div');k.id='__cornify_nodes';d.getElementsByTagName('body')[0].appendChild(k);for(;l<f.length;l++){j=d.createElement('script');j.src=c+f[l];k.appendChild(j);}}})();"; // var result = "javascript:(function(){var d=document,j=d.getElementById('__cornify_nodes'),e=d.createElement,k=null,c='https://cornify.com/js/cornify',l=0;var f=['.js','_run.js'];if(j){cornify_add("+options+");}else{k = e('div');k.id='__cornify_nodes';d.getElementsByTagName('body')[0].appendChild(k);for(;l&lt;f.length;l++){j=e('script');j.src=c+f[l];k.appendChild(j);}}})();";

      return result;
    },
    bookmarkletYounicorns: function bookmarkletYounicorns() {
      return siteData.store.state.bookmarkletYounicorns;
    },
    hasYounicorns: function hasYounicorns() {
      return this.bookmarkletYounicorns && this.bookmarkletYounicorns.length > 0;
    }
  },
  methods: {}
});
"use strict";

Vue.component('button-chrome', {
  template: "\n        <section :class=\"classObject\">\n            <template v-if=\"!chromeExtensionInstalled\">\n                <a\n                    :href=\"extensionUrl\"\n                    target=\"_blank\"\n                    title=\"Unicorns and rainbows for the Chrome browser\"\n                    class=\"-image\"\n                    @click=\"clickExtension\"\n                >\n                    <img\n                        src=\"/assets/example-facies-after.jpg\"\n                        width=\"440\"\n                        height=\"330\"\n                        alt=\"Cornify extension for Chrome\"\n                    >\n                </a>\n                <h2>\n                    <a\n                        :href=\"extensionUrl\"\n                        target=\"_blank\"\n                        title=\"Cornify for the Chrome browser\"\n                        @click=\"clickExtension\"\n                    >Cornify for Chrome!</a>\n                </h2>\n                <p>Get the Cornify Chrome extension for extreme Internet happiness!</p>\n                <a\n                    class=\"button -filled\"\n                    :href=\"extensionUrl\"\n                    @click=\"clickExtension\"\n                >Get the extension</a>\n            </template>\n            <template v-else>\n                <h2>Great, you already have the <a :href=\"extensionUrl\" target=\"_blank\">Chrome extension</a> installed.</h2>\n                <p>The Grand Unicorn would love it if you could <a :href=\"extensionUrl\" target=\"_blank\">add a review</a>. Click the extension to summon unicorns and rainbows to your hearts desire.</p>\n            </template>\n        </section>\n    ",
  props: [],
  data: function data() {
    return {
      log: true,
      extensionUrl: 'https://chrome.google.com/webstore/detail/cornify-unicorn-and-rainb/ghdnfbmfflgelndafnlgabneckbmfpla'
    };
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];

      if (this.chromeExtensionInstalled) {
        c.push('-installed');
      } else {
        c.push('-not-installed');
      }

      return c.join(' ');
    },
    isChrome: function isChrome() {
      return gbks.browser.chrome.browserIsChrome();
    },
    chromeExtensionInstalled: function chromeExtensionInstalled() {
      return siteData.store.state.chromeExtensionInstalled;
    },
    bookmarkletYounicorns: function bookmarkletYounicorns() {
      return siteData.store.state.bookmarkletYounicorns;
    },
    hasYounicorns: function hasYounicorns() {
      return this.bookmarkletYounicorns && this.bookmarkletYounicorns.length > 0;
    }
  },
  methods: {
    clickExtension: function clickExtension() {
      trackman.event('button-browser', 'click-get-chrome-extension');
    }
  }
});
"use strict";

Vue.component('button-firefox', {
  template: "\n        <section :class=\"classObject\">\n            <template v-if=\"!firefoxExtensionInstalled\">\n                <a\n                    :href=\"extensionUrl\"\n                    target=\"_blank\"\n                    title=\"Unicorns and rainbows for the Firefox browser\"\n                    class=\"-image\"\n                    @click=\"clickExtension\"\n                >\n                    <img\n                        src=\"/assets/example-facies-after.jpg\"\n                        width=\"440\"\n                        height=\"330\"\n                        alt=\"Cornify extension for Firefox\"\n                    >\n                </a>\n                <h2>\n                    <a\n                        :href=\"extensionUrl\"\n                        target=\"_blank\"\n                        title=\"Cornify for the Firefox browser\"\n                        @click=\"clickExtension\"\n                    >Cornify for Firefox!</a>\n                </h2>\n                <p>Get the Cornify Firefox extension for extreme Internet happiness!</p>\n                <a\n                    class=\"button -filled\"\n                    :href=\"extensionUrl\"\n                    @click=\"clickExtension\"\n                >Get the extension</a>\n            </template>\n            <template v-else>\n                <h2>Great, you already have the <a :href=\"extensionUrl\" target=\"_blank\">Firefox extension</a> installed.</h2>\n                <p>The Grand Unicorn would love it if you could <a :href=\"extensionUrl\" target=\"_blank\">add a review</a>. Click the extension to summon unicorns and rainbows to your hearts desire.</p>\n            </template>\n        </section>\n    ",
  props: [],
  data: function data() {
    return {
      log: true,
      extensionUrl: 'https://addons.mozilla.org/en-US/firefox/addon/cornify-unicorns-and-rainbows/'
    };
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];

      if (this.firefoxExtensionInstalled) {
        c.push('-installed');
      } else {
        c.push('-not-installed');
      }

      return c.join(' ');
    },
    isFirefox: function isFirefox() {
      return gbks.browser.firefox.browserIsFirefox();
    },
    firefoxExtensionInstalled: function firefoxExtensionInstalled() {
      return siteData.store.state.firefoxExtensionInstalled;
    },
    bookmarkletYounicorns: function bookmarkletYounicorns() {
      return siteData.store.state.bookmarkletYounicorns;
    },
    hasYounicorns: function hasYounicorns() {
      return this.bookmarkletYounicorns && this.bookmarkletYounicorns.length > 0;
    }
  },
  methods: {
    clickExtension: function clickExtension() {
      trackman.event('button-browser', 'click-get-firefox-extension');
    }
  }
});
"use strict";

Vue.component('button-younicorns', {
  template: "\n        <section :class=\"classObject\">\n            <img\n                src=\"/assets/younicorn/younicorns.png\"\n                srcset=\"/assets/younicorn/younicorns.png 1x, /assets/younicorn/younicorns@2x.png 2x\"\n                width=\"200\"\n                height=\"123\"\n                alt=\"Younicorns\"\n            >\n            <h2 class=\"-small\">Pick which Younicorns the button should summon!</h2>\n            <p><router-link to=\"/younicorn\">Create younicorns</router-link>, or pick ones <router-link to=\"/younicorns\">others have created</router-link>, and the button, bookmarklet and Chrome extension will only summon them. You don't have to, the button will always help you glitter things up.</p>\n            <p class=\"-small\">Just note that you will have to reinstall the button and bookmarklet after changing your Younicorns. The Chrome extension automatically updates.</p>\n            <p v-if=\"hasYounicorns\">These are the younicorns you picked.</p>\n            <younicorn-list\n                v-if=\"hasYounicorns\"\n                :younicornIds=\"bookmarkletYounicorns\"\n            />\n        </section>\n    ",
  props: [],
  data: function data() {
    return {
      log: true
    };
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];
      return c.join(' ');
    },
    bookmarkletYounicorns: function bookmarkletYounicorns() {
      return siteData.store.state.bookmarkletYounicorns;
    },
    hasYounicorns: function hasYounicorns() {
      return this.bookmarkletYounicorns && this.bookmarkletYounicorns.length > 0;
    }
  },
  methods: {}
});
"use strict";

Vue.component('button-browser', {
  template: "\n        <section :class=\"classObject\">\n            <div class=\"wrap\">\n                <div class=\"content\">\n                    <h2><svg-text text=\"Cornify any website?\" /></h2>\n                    <p>Get the browser button to have infinite sparkles extreme!</p>\n                    <ol class=\"options\">\n                        <button-browser-bookmarklet />\n                        <button-browser-chrome />\n                        \n                        <li v-if=\"false\">\n                            <a\n                                :href=\"bookmarklet\"\n                            >Cornify</a>\n                            <h3>Cornify for all browsers!</h3>\n                            <p>Drag the link above to the bookmarks toolbar in your browser. Go to any website and click the new button to start cornificating.</p>\n                        </li>\n                        <li v-if=\"false\">\n                            <a\n                                href=\"https://chrome.google.com/webstore/detail/cornify-unicorn-and-rainb/ghdnfbmfflgelndafnlgabneckbmfpla\"\n                                target=\"_blank\"\n                                @click=\"clickExtension\"\n                            >\n                                <img\n                                    src=\"/assets/example-facies-after.jpg\"\n                                    width=\"440\"\n                                    height=\"330\"\n                                    alt=\"Cornify extension for Chrome\"\n                                >\n                            </a>\n                            <h3>\n                                <a\n                                    href=\"https://chrome.google.com/webstore/detail/cornify-unicorn-and-rainb/ghdnfbmfflgelndafnlgabneckbmfpla\"\n                                    target=\"_blank\"\n                                    title=\"Cornify for the Chrome browser\"\n                                    @click=\"clickExtension\"\n                                >Cornify for Chrome!</a>\n                            </h3>\n                            <p>Get the Cornify Chrome extension for extreme Internet happiness!</p>\n                        </li>\n                    </ol>\n                </div>\n            </div>\n        </section>\n    ",
  props: [],
  data: function data() {
    return {
      log: true
    };
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];
      return c.join(' ');
    },
    isChrome: function (_isChrome) {
      function isChrome() {
        return _isChrome.apply(this, arguments);
      }

      isChrome.toString = function () {
        return _isChrome.toString();
      };

      return isChrome;
    }(function () {
      return isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
    }),
    bookmarklet: function bookmarklet() {
      // href="javascript:(function(){var d=document,j=d.getElementById('__cornify_nodes'),k=null;var files=['https://cornify.com/js/cornify.js','https://cornify.com/js/cornify_run.js'];if(j){cornify_add();}else{k=d.createElement('div');k.id='__cornify_nodes';d.getElementsByTagName('body')[0].appendChild(k);for(var l=0;l&lt;files.length;l++){j=d.createElement('script');j.src=files[l];k.appendChild(j);}}})();"
      var options = '';
      var younicorns = siteData.store.state.bookmarkletYounicorns;

      if (younicorns && younicorns.length > 0) {
        options = JSON.stringify({
          y: younicorns.join(',')
        });
      }

      var result = "javascript:(function(){var d=document,j=d.getElementById('__cornify_nodes'),e=d.createElement,k=null,c='https://cornify.com/js/cornify',l=0;var f=['.js','_run.js'];if(j){cornify_add(" + options + ");}else{k = e('div');k.id='__cornify_nodes';d.getElementsByTagName('body')[0].appendChild(k);for(;l&lt;f.length;l++){j=e('script');j.src=c+f[l];k.appendChild(j);}}})();";
      return result;
    }
  },
  methods: {
    clickExtension: function clickExtension() {
      trackman.event('button-browser', 'click-get-extension');
    }
  }
});
"use strict";

Vue.component('button-irl', {
  template: "\n        <section :class=\"classObject\">\n            <div class=\"wrap\">\n                <div class=\"content\">\n                    <h2>Cornify IRL?</h2>\n                    <p>Spread the love in the real world and cornify the lives of your beloved ones.</p>\n                    <ol class=\"pics\">\n                        <li>\n                            <img\n                                src=\"/assets/button/cornify-irl-1.jpg\"\n                                width=\"500\"\n                                height=\"375\"\n                                alt=\"Cornify IRL\"\n                            >\n                        </li>\n                        <li>\n                            <img\n                                src=\"/assets/button/cornify-irl-2.jpg\"\n                                width=\"500\"\n                                height=\"375\"\n                                alt=\"Cornify IRL\"\n                            >\n                        </li>\n                    </ol>\n                    <ol class=\"options\">\n                        <li>\n                            <a\n                                href=\"/assets/unicorns.pdf\"\n                                download\n                                title=\"Unicorn print template\"\n                                @click=\"downloadUnicorns\"\n                            >\n                                <img\n                                    src=\"/assets/button/print-template.jpg\"\n                                    width=\"220\"\n                                    height=\"165\"\n                                    alt=\"Unicorn and rainbow print template\"\n                                >\n                            </a>\n                            <br />\n                            <a\n                                href=\"/assets/unicorns.pdf\"\n                                download\n                                title=\"Unicorn print template\"\n                                @click=\"downloadUnicorns\"\n                                class=\"button -filled\"\n                            >Unicorn print template</a>\n                            <br />\n                            <a\n                                href=\"/assets/rainbows.pdf\"\n                                download\n                                title=\"Rainbow print template\"\n                                @click=\"downloadRainbows\"\n                                class=\"button -filled\"\n                            >Rainbow print template</a>\n                        </li>\n                        <li>\n                            <a\n                                href=\"http://www.zazzle.com/cornify_sticker-217931898913135090\"\n                                target=\"_blank\"\n                                title=\"Unicorn and rainbow sticker\"\n                                @click=\"getStickers\"\n                            >\n                                <img\n                                    src=\"/assets/button/sticker.jpg\"\n                                    width=\"140\"\n                                    height=\"140\"\n                                    alt=\"Cornify stickers\"\n                                >\n                            </a>\n                            <br />\n                            <a\n                                href=\"http://www.zazzle.com/cornify_sticker-217931898913135090\"\n                                class=\"button -filled\"\n                                target=\"_blank\"\n                                title=\"Get the cornify stickers\"\n                                @click=\"getStickers\"\n                            >Buy stickers</a>\n                        </li>\n                    </ol>\n                </div>\n            </div>\n        </section>\n    ",
  props: [],
  data: function data() {
    return {
      log: true
    };
  },
  computed: {
    classObject: function classObject() {
      var c = [this.id];
      return c.join(' ');
    }
  },
  methods: {
    downloadUnicorns: function downloadUnicorns() {
      trackman.event('button', 'download-template', 'unicorns');
    },
    downloadRainbows: function downloadRainbows() {
      trackman.event('button', 'download-template', 'rainbows');
    },
    getStickers: function getStickers() {
      trackman.event('button', 'get-stickers');
    }
  }
});
"use strict";

var HomePage = {
  template: "\n        <div :class=\"classObject\" ref=\"canvas\">\n            <div class=\"wrap\">\n                <div class=\"content\">\n                    <home-intro />\n                    <home-button />\n                    <home-promo-list />\n                    <home-unicorn-day />\n                    <home-list />\n                </div>\n            </div>\n        </div>\n    ",
  data: function data() {
    return {
      id: 'HomePage',
      pageName: 'home-page',
      log: true
    };
  },
  beforeMount: function beforeMount() {
    this.l('beforeMount', this.id); // gbks.events.call('site-background-effect', {
    //     id: 'rainbow'
    // });

    gbks.events.call('site-background-effect', {
      id: 'scroll-color'
    }); // setTimeout($.proxy(this.motivate, this), 500);
  },
  mounted: function mounted() {
    gbks.events.call(gbks.event.PageMounted, {
      container: this.$refs.canvas,
      pageName: this.pageName
    });
  },
  computed: {
    classObject: function classObject() {
      var c = ['page', 'home-page'];
      return c.join(' ');
    }
  },
  methods: {
    motivate: function motivate() {
      gbks.events.call('glitter-motivate', {// text: 'You\'re the best'
      });
      setTimeout($.proxy(this.motivate, this), 2500);
    }
  }
};
"use strict";

var AboutPage = {
  template: "\n        <div :class=\"classObject\" ref=\"canvas\">\n            <div class=\"wrap\">\n                <div class=\"content\">\n                    <div class=\"intro\">\n                        <h1>Cornify!!!</h1>\n                        <img\n                            src=\"/assets/about/roflcorn.png\"\n                            srcset=\"/assets/about/roflcorn.png 1x, /assets/about/roflcorn@2x.png 2x\"\n                            width=\"1000\"\n                            heigh=\"456\"\n                            alt=\"ROFLCorn\"\n                        >\n                        <p>Cornify is the #1 unicorn and rainbow service on the internet, and quite possibly in the world.</p>\n                    </div>\n                    <div class=\"copy\">\n                        <p>One of the most technologically advanced (and mystical) services on the Intrawebs, Cornify is founded on the breakthrough insight that \"unicorns + rainbows = happiness\". This revolutionary formula drives the team behind Cornify to push cutting-edge web technology into realms previously unthinkable to optimize the happiness-per-user ratio online.</p>\n\n                        <p>Here's how <a href=\"https://www.urbandictionary.com/define.php?term=Cornify\" target=\"_blank\" >Urban Dictionary</a> defines \"Cornify\":</p>\n                        \n                        <div class=\"quote\">\n                            <blockquote cite=\"https://www.urbandictionary.com/define.php?term=Cornify\">\n                                <p>(verb): To enhance any visual experience by overlaying sparkly unicorn stickers. Stickers are placed willy-nilly and are meant to brighten one's day.</p>\n                                <p><i>\"I was feeling so blue while reading about the swine flu, so I decided to cornify the page.\"</i></p>\n                            </blockquote>\n                        </div>\n\n                        <img\n                            src=\"/assets/about/collage.jpg\"\n                            srcset=\"/assets/about/collage.jpg 1x, /assets/about/collage@2x.jpg 2x\"\n                            width=\"1000\"\n                            heigh=\"676\"\n                            alt=\"So many cornified people!!!\"\n                        >\n\n                        <p>Since it's memorable launch <a href=\"https://news.ycombinator.com/item?id=459861\" target=\"_blank\">Hacker News</a> on January 31, 2009, Cornify has provided over 400,000,000 unicorns & rainbows to it's beloved community. Satisfied Cornify users regularly express their gratitude, as can be seen on our quote page. Cornify has been enthusiastically reviewed by <a href=\"http://blog.wired.com/sterling/2009/02/proof-why-the-c.html\" target=\"_blank\">Wired magazine</a>, <a href=\"http://blog.urbanoutfitters.com/blog/cornify/\" target=\"_blank\">Urban Outfitters</a>, <a href=\"http://popwatch.ew.com/popwatch/2009/02/cornify.html\" target=\"_blank\">Entertainment Weekly</a>, <a href=\"http://current.com/items/89783693/cornify_the_next_big_step_in_ruining_the_internet.htm\" target=\"_blank\">Current</a> and <a href=\"http://www.revision3.com/tekzilla/hubble\" target=\"_blank\">Tekzilla</a> and our services have been implemented in respected sites such as <a href=\"http://www.youtube.com/watch?v=6--yGs6J2_s\" target=\"_blank\">ESPN</a>, <a href=\"http://gadgets.boingboing.net/\" target=\"_blank\">Boing Boing</a> and <a href=\"http://www.stackoverflow.com/\" target=\"_blank\">Stack Overflow</a>. Cornify also won a <a href=\"https://sxtxstate.com/2010/03/cornify-sxsw-web-awards-finalist/\" target=\"_blank\">SXSW people's choice award</a> and participated at <a href=\"https://en.wikipedia.org/wiki/ROFLCon\" target=\"_blank\">ROFLCon</a>, the conference about Internet&nbsp;culture.</p>\n\n                        <p>Here are a few&nbsp;highlights:</p>\n\n                        <ol>\n                            <li>\n                                <img\n                                    src=\"/assets/about/wired.jpg\"\n                                    width=\"500\"\n                                    heigh=\"400\"\n                                    alt=\"wired\"\n                                >\n                                <p>Getting called a Great Internet Invention by&nbsp;Wired</p>\n                            </li>\n                            <li>\n                                <img\n                                    src=\"/assets/about/sxsw.jpg\"\n                                    width=\"500\"\n                                    heigh=\"400\"\n                                    alt=\"sxsw\"\n                                >\n                                <p>Winning the SXSW People's Choice&nbsp;Award</p>\n                            </li>\n                            <li>\n                                <img\n                                    src=\"/assets/about/stackoverflow.jpg\"\n                                    width=\"500\"\n                                    heigh=\"400\"\n                                    alt=\"stackoverflow\"\n                                >\n                                <p>Getting implemented on StackOverflow for April&nbsp;Fool's</p>\n                            </li>\n                            <li>\n                                <img\n                                    src=\"/assets/about/cnn.jpg\"\n                                    width=\"500\"\n                                    heigh=\"400\"\n                                    alt=\"cnn\"\n                                >\n                                <p>Making news on&nbsp;CNN</p>\n                            </li>\n                            <li>\n                                <img\n                                    src=\"/assets/about/roflcon.jpg\"\n                                    width=\"500\"\n                                    heigh=\"400\"\n                                    alt=\"roflcon\"\n                                >\n                                <p>Participating at ROFLCon</p>\n                            </li>\n                            <li>\n                                <img\n                                    src=\"/assets/about/atlassian.jpg\"\n                                    width=\"500\"\n                                    heigh=\"400\"\n                                    alt=\"Atlassian\"\n                                >\n                                <p>Getting implemented on Atlassian's&nbsp;Confluence</p>\n                            </li>\n                            <li>\n                                <img\n                                    src=\"/assets/about/espn.jpg\"\n                                    width=\"500\"\n                                    heigh=\"400\"\n                                    alt=\"\"\n                                >\n                                <p>Getting implemented on&nbsp;ESPN.com</p>\n                            </li>\n                            <li>\n                                <img\n                                    src=\"/assets/about/geeksugar.jpg\"\n                                    width=\"500\"\n                                    heigh=\"400\"\n                                    alt=\"geeksugar\"\n                                >\n                                <p>Site of the Day on&nbsp;geeksugar</p>\n                            </li>\n                            <li>\n                                <img\n                                    src=\"/assets/about/kotaku.jpg\"\n                                    width=\"500\"\n                                    heigh=\"400\"\n                                    alt=\"kotaku\"\n                                >\n                                <p>A mention on&nbsp;Kotaku</p>\n                            </li>\n                            <li>\n                                <img\n                                    src=\"/assets/about/pcworld.jpg\"\n                                    width=\"500\"\n                                    heigh=\"400\"\n                                    alt=\"pcworld\"\n                                >\n                                <p>A write-up on PC&nbsp;World</p>\n                            </li>\n                            <li>\n                                <img\n                                    src=\"/assets/about/popwatch.jpg\"\n                                    width=\"500\"\n                                    heigh=\"400\"\n                                    alt=\"popwatch\"\n                                >\n                                <p>Site of the Day on&nbsp;PopWatch</p>\n                            </li>\n                            <li>\n                                <img\n                                    src=\"/assets/about/urban-outfitters.jpg\"\n                                    width=\"500\"\n                                    heigh=\"400\"\n                                    alt=\"urban-outfitters\"\n                                >\n                                <p>Site of the Day on Urban&nbsp;Outfitters</p>\n                            </li>\n                        </ol>\n\n                        <p>We love hearing from you, just <a href=\"mailto:rainbows@cornify.com\">send an email</a> or get in touch  on <a href=\"https://twitter.com/cornify\" target=\"_blank\" rel=\"me\">Twitter</a>, <a href=\"https://www.instagram.com/cornifylove/\" target=\"_blank\" rel=\"me\">Instagram</a>, and <a href=\"https://www.facebook.com/unicornhappiness\" target=\"_blank\" rel=\"me\">Facebook</a>.</p>\n                    </div>\n\n                    <router-link \n                        v-if=\"wingsEnabled\"\n                        to=\"younicorn\"\n                        class=\"secret -active\" \n                    >\n                        <div class=\"icon\">\n                            <img\n                                src=\"/assets/builder/body-prop/body-prop-wings-preview.svg\"\n                                width=\"60\"\n                                height=\"60\"\n                                alt=\"Younicorn wings\"\n                            >\n                        </div>\n                        <p>You can now add wings to your&nbsp;Younicorns.&nbsp;<u>Try&nbsp;it</u>.</p>\n                    </router-link>\n\n                    <button \n                        v-if=\"!wingsEnabled\"\n                        class=\"secret -inactive\" \n                        role=\"button\"\n                        @click=\"enableWings\"\n                    >\n                        <div class=\"icon\">\n                            <img\n                                src=\"/assets/builder/body-prop/body-prop-wings-preview.svg\"\n                                width=\"60\"\n                                height=\"60\"\n                                alt=\"Younicorn wings\"\n                            >\n                        </div>\n                        <p>Get wings for your Younicorns!!!</p>\n                    </button>\n                </div>\n            </div>\n        </div>\n    ",
  data: function data() {
    return {
      id: 'AboutPage',
      pageName: 'about-page',
      log: !true
    };
  },
  beforeMount: function beforeMount() {
    this.l('beforeMount', this.id);
    gbks.events.call('site-background-effect', {
      id: 'solid-color',
      color: [255, 255, 255]
    });
  },
  mounted: function mounted() {
    gbks.events.call(gbks.event.PageMounted, {
      container: this.$refs.canvas,
      pageName: this.pageName
    });
  },
  computed: {
    classObject: function classObject() {
      var c = ['page', 'about-page'];
      return c.join(' ');
    },
    wingsEnabled: function wingsEnabled() {
      var secrets = siteData.store.state.enabledYounicornSecrets;
      return secrets.indexOf('body-prop-wings') !== -1;
    }
  },
  methods: {
    enableWings: function enableWings() {
      var secrets = siteData.store.state.enabledYounicornSecrets;

      if (!this.wingsEnabled) {
        secrets.push('body-prop-wings');
        secrets.push('body-prop-rainbow-wings');
        siteData.store.commit('updateEnabledYounicornSecrets', secrets);
      }
    }
  }
};
"use strict";

var AllTheInfoPage = {
  template: "\n        <div :class=\"classObject\">\n            <div class=\"wrap\">\n                <div class=\"content\">\n                    <svg-text text=\"All the info\" />\n                    <all-the-info-list />\n                </div>\n            </div>\n        </div>\n    ",
  data: function data() {
    return {
      id: 'AllTheInfoPage',
      pageName: 'all-the-info-page'
    };
  },
  beforeMount: function beforeMount() {
    gbks.events.call('site-background-effect', {
      id: 'solid-color',
      color: {
        r: 255,
        g: 255,
        b: 255
      }
    });
  },
  mounted: function mounted() {
    gbks.events.call(gbks.event.PageMounted, {
      container: this.$refs.canvas,
      pageName: this.pageName
    });
  },
  watch: {},
  computed: {
    classObject: function classObject() {
      var c = ['page', 'all-the-info-page'];
      return c.join(' ');
    }
  },
  methods: {}
};
"use strict";

var BuilderPage = {
  template: "\n        <div :class=\"classObject\">\n            <div class=\"wrap\">\n                <div class=\"content\">\n                    <builder-template\n                        v-if=\"mode == 'template'\"\n                        @pickTemplate=\"pickTemplate\"\n                        @back=\"backFromTemplate\"\n                    />\n                    <builder-editor\n                        v-if=\"mode == 'editor' || mode == 'success'\"\n                        :disabled=\"mode == 'success'\"\n                        @save=\"save\"\n                        @back=\"backFromEditor\"\n                    />\n                    <builder-success\n                        v-if=\"mode == 'success'\"\n                        :data=\"data\"\n                        @setMode=\"setMode\"\n                    />\n                </div>\n            </div>\n        </div>\n    ",
  data: function data() {
    return {
      id: 'BuilderPage',
      pageName: 'builder-page',
      mode: 'template',
      log: !true,
      activeTemplateId: null,
      editStartTime: null,
      scrollMethod: $.proxy(this.scroll, this)
    };
  },
  beforeMount: function beforeMount() {
    this.reset();
    gbks.events.call('site-background-effect', {
      id: 'solid-color',
      color: {
        r: 255,
        g: 255,
        b: 255
      }
    });
    document.body.addEventListener('scroll', this.scrollMethod, {
      passive: false
    });
    document.body.addEventListener('touchmove', this.scrollMethod, {
      passive: false
    });
  },
  mounted: function mounted() {
    gbks.events.call(gbks.event.PageMounted, {
      container: this.$refs.canvas,
      pageName: this.pageName
    });
  },
  beforeDestroy: function beforeDestroy() {
    document.body.removeEventListener('scroll', this.scrollMethod, {
      passive: false
    });
    document.body.removeEventListener('touchmove', this.scrollMethod, {
      passive: false
    });
    gbks.events.clearListener(this.id);
  },
  computed: {
    classObject: function classObject() {
      var c = ['page', 'builder-page'];
      return c.join(' ');
    },
    data: function data() {
      return siteData.store.state.builderdata;
    },
    isBitcorn: function isBitcorn() {
      var invoiceStatus = siteData.store.state.lightningInvoiceStatus;
      return invoiceStatus === 'paid';
    }
  },
  methods: {
    setMode: function setMode(mode) {
      Vue.set(this.data, 'mode', 'edit');
      this.mode = mode;
      siteData.store.commit('updateBuilderData', this.data);
    },
    pickTemplate: function pickTemplate(templateId) {
      this.activeTemplateId = templateId;

      if (templateId == 'random') {
        this.applyRandomTemplate();
      } else {
        this.applyTemplate(templateId);
      } // Apply the Bitcorn body prop if needed.


      if (this.isBitcorn) {
        var builderData = siteData.store.state.builderdata;
        Vue.set(builderData.editor.parts, 'body-prop', 'body-prop-bitcoin');
        Vue.set(builderData.editor.parts, 'background', 'background-retro-wave');
        siteData.store.commit('updateBuilderData', builderData);
      } // this.l('pickTemplate', templateId);


      this.editStartTime = new Date().getTime();
      this.setMode('editor');
    },
    applyTemplate: function applyTemplate(templateId) {
      var template = siteData.builder.templates[templateId];
      var builderData = siteData.store.state.builderdata; // Colors.

      for (var colorId in template.colors) {
        Vue.set(builderData.editor.colors, colorId, template.colors[colorId]);
      } // Parts.


      for (var partId in template.parts) {
        Vue.set(builderData.editor.parts, partId, template.parts[partId]);
      }

      siteData.store.commit('updateBuilderData', builderData);
    },
    applyRandomTemplate: function applyRandomTemplate(templateId) {
      var builderData = siteData.store.state.builderdata;
      var category, parts, partIds, partId, part, slotId, color;
      var colorIds = [];

      for (var categoryId in siteData.builder.categories) {
        category = siteData.builder.categories[categoryId];

        if (category.required || Math.random() > 0.5) {
          parts = siteData.builder.categories[categoryId].parts;
          partIds = Object.keys(parts);
          partId = partIds[Math.floor(Math.random() * partIds.length)];
          part = parts[partId]; // If it's a Bitcoin part, randomize it again, unless it's a non-Bitcoin part.
          // Also keep randomizing if it's a secret part that we haven't enabled yet.
          // Also randomize if it's a weekday part and it's not that day.

          while (this.excludePartFromRandom(partId, part)) {
            partId = partIds[Math.floor(Math.random() * partIds.length)];
            part = parts[partId];
          } // Collect all the color Ids we need.


          for (slotId in part.slots) {
            color = part.slots[slotId].color;

            if (color && colorIds.indexOf(color) === -1) {
              colorIds.push(color);
            }
          }

          Vue.set(builderData.editor.parts, categoryId, partId);
        }
      }

      for (var i = 0; i < colorIds.length; i++) {
        Vue.set(builderData.editor.colors, colorIds[i], siteData.palette[Math.floor(Math.random() * siteData.palette.length)]);
      } // this.l('applyRandomTemplate', colorIds);


      siteData.store.commit('updateBuilderData', builderData);
    },
    // Check if this part should be included in the randomized template.
    excludePartFromRandom: function excludePartFromRandom(partId, part) {
      var result = false;
      var today = new Date();

      if (part.disabled) {
        result = true;
      }

      if (!result && part.bitcoin) {
        result = true;
      } // Is it an enabled secret, like wings?


      if (!result && part.secret) {
        var secrets = siteData.store.state.enabledYounicornSecrets;

        if (secrets.indexOf(partId) === -1) {
          result = true;
        }
      } // Is it weekday specific?


      if (!result && part.weekday) {
        var weekday = new Date().getDay();

        if (parseInt(part.weekday) !== weekday) {
          result = true;
        }
      } // Is it valentines?


      if (!result && part.valentines) {
        if (today.getMonth() !== 1 || today.getDate() !== 14) {
          result = true;
        }
      } // Is it full moon?


      if (!result && part.fullmoon) {
        var moonPhase = gbks.helpers.moonPhase();
        var isFullMoon = moonPhase.phase == 4 && moonPhase.percent >= 92;

        if (!isFullMoon) {
          result = true;
        }
      } // Is it april fools?


      if (!result && part.aprilfools) {
        if (today.getMonth() === 3 && today.getDate() === 1) {
          result = true;
        }
      } // Is it International Unicorn Day?


      if (!result && part.unicornday) {
        if (today.getMonth() === 3 && today.getDate() === 9) {
          result = true;
        }
      }

      return result;
    },
    save: function save() {
      console.log('save');
      this.renderImageForUpload();
      this.setMode('success');
    },
    renderImageForUpload: function renderImageForUpload() {
      console.log('prepareImageForUpload');
      var renderId = gbks.builder.displayRenderer.getRenderId();
      var slots = this.getSlots();
      gbks.builder.displayRenderer.render({
        renderId: renderId,
        slots: slots,
        canvasSize: 2000,
        callback: $.proxy(this.onRender, this),
        startTime: new Date().getTime()
      });
    },
    getSlots: function getSlots() {
      var result = {};

      for (var k in siteData.builder.slots) {
        result[k] = $.extend({}, siteData.builder.slots[k]);
      } // Loop over all parts and collect a list of slots.


      var parts = this.data.editor.parts;
      var categoryId, partId, part;
      var slotId, slot, category;

      for (var categoryId in parts) {
        partId = parts[categoryId]; // this.l('i', categoryId, partId, siteData.builder.categories);

        category = siteData.builder.categories[categoryId];
        part = category.parts[partId]; // this.l('i', categoryId, partId, part, slotId);

        if (part && !category.renderSeparate) {
          for (slotId in part.slots) {
            result[slotId].element = part.slots[slotId];
          }
        } // result.push(part);

      }

      for (var slotId in result) {
        if (!result[slotId].element) {
          // this.l('deleting', slotId);
          delete result[slotId];
        }
      } // this.l('slots', result);
      // this.l('siteData.builder.slots', siteData.builder.slots);


      return result;
    },
    onRender: function onRender(data) {
      console.log('onRender', data); // Store the data to upload

      Vue.set(this.data.upload, 'image', data.canvas);
      Vue.set(this.data.upload, 'width', 2000);
      Vue.set(this.data.upload, 'height', 2000); // Figure out how much time they spend editing.

      var editDuration = new Date().getTime() - this.editStartTime; // Store which parts and colors the younicorn consists of

      var builderData = siteData.store.state.builderdata;
      data.bits = {
        parts: builderData.editor.parts,
        colors: builderData.editor.colors,
        template: this.activeTemplateId,
        duration: editDuration
      };
      var isBitcorn = this.checkBitcorn(builderData.editor.parts);

      if (isBitcorn === true) {
        data.bits.bitcorn = true;
        data.bits.invoiceId = siteData.store.state.lightningInvoiceId; // Clear the invoice.

        siteData.store.commit('updateLightningInvoiceId', null);
        siteData.store.commit('updateLightningInvoiceStatus', null);
      } // Start the upload.


      gbks.cornify.builder.saver.init(data);
    },
    // Check if it's a Bitcorn.
    // If a single part used has bitcoin=true.
    checkBitcorn: function checkBitcorn(parts) {
      var result = false;
      var categories = siteData.builder.categories;
      var part, partId;

      for (var categoryId in parts) {
        partId = parts[categoryId];
        part = categories[categoryId].parts[partId];

        if (part && part.bitcoin) {
          result = true;
          break;
        }
      }

      return result;
    },
    reset: function reset() {
      var colorIdIndex = 0;
      var palette = $.extend([], siteData.palette);
      var colorId;

      for (var i = 0; i < palette.length; i++) {
        colorId = 'color_' + colorIdIndex;
        palette[i].id = colorId;
        colorIdIndex++;
      }

      var data = {
        mode: 'pick',
        // pick, success
        editor: {
          category: 'eyes',
          parts: {
            // List of parts the user has picked.
            background: 'background-meadow',
            eyes: 'eyes',
            body: 'body',
            alicorn: 'alicorn',
            hooves: 'hooves',
            hair: 'hair',
            tail: 'tail',
            mouth: 'mouth',
            nose: 'nose',
            'body-pattern': 'body-pattern-bottom',
            'body-prop': 'body-prop-heart',
            'body-prop-chest': null,
            'ears': 'ears',
            'cheek': 'cheek-dots',
            'head-pattern': 'head-pattern-light',
            'hair-prop': null,
            'tail-prop': null
          },
          colors: {},
          palette: palette
        },
        upload: {
          image: null,
          width: null,
          height: null,
          started: false,
          success: false,
          error: false,
          data: null,
          name: null,
          username: null,
          public: null
        }
      };
      siteData.store.commit('updateBuilderData', data);
    },
    scroll: function scroll(event) {// event.preventDefault();
    },
    backFromTemplate: function backFromTemplate() {
      this.$router.push('/younicorns');
    },
    backFromEditor: function backFromEditor() {
      console.log('builder.backFromEditor');

      if (confirm('Go back and lose your awesome changes?')) {
        this.mode = 'template';
      }
    }
  }
};
"use strict";

var ButtonPage = {
  template: "\n        <section :class=\"classObject\" ref=\"canvas\">\n            <div class=\"wrap\">\n                <div class=\"content\">\n                    <h1><svg-text\n                        text=\"Get your Cornify button!\"\n                    /></h1>\n                    <p>Sparkle up your Interwebs with the super magical, authentic, 100% rainbow-powered Cornify button.</p>\n                    <button-younicorns />\n                    <button-bookmarklet />\n                    <button-chrome />\n                    <button-firefox />\n                    <button-button />\n                    <button-irl />\n                </div>\n            </div>\n        </section>\n    ",
  data: function data() {
    return {
      id: 'ButtonPage',
      pageName: 'button-page',
      log: !true
    };
  },
  beforeMount: function beforeMount() {
    this.l('beforeMount', this.id);
    gbks.events.call('site-background-effect', {
      id: 'solid-color',
      color: [255, 255, 255]
    });
  },
  mounted: function mounted() {
    gbks.events.call(gbks.event.PageMounted, {
      container: this.$refs.canvas,
      pageName: this.pageName
    });
  },
  computed: {
    classObject: function classObject() {
      var c = ['page', 'button-page'];
      return c.join(' ');
    },
    isMobile: function isMobile() {
      return siteData.store.state.isMobile;
    }
  },
  methods: {
    cornify: function cornify() {
      trackman.event('button', 'cornify');
      cornify_add();
    }
  }
};
"use strict";

var ColoringPage = {
  template: "\n        <div :class=\"classObject\" ref=\"canvas\">\n            <div class=\"wrap\">\n                <div class=\"content\">\n                    <coloring-top-bar\n                        :data=\"data\"\n                    />\n                    <coloring-frame\n                        :data=\"data\" \n                    />\n                    <coloring-bottom-bar\n                        :data=\"data\"\n                        @save=\"save\"\n                    />\n                </div>\n            </div>\n        </div>\n    ",
  data: function data() {
    return {
      id: 'ColoringPage',
      pageName: 'coloring-page',
      log: !true,
      scrollMethod: $.proxy(this.scroll, this)
    };
  },
  beforeMount: function beforeMount() {
    this.l('beforeMount', this.id);
    this.reset(); // $(document).bind('scroll', this.scrollMethod);
    // $(document).bind('touchmove', this.scrollMethod);

    gbks.events.call('site-background-effect', {
      id: 'solid-color',
      color: siteData.palette[4]
    });
    document.body.addEventListener('scroll', this.scrollMethod, {
      passive: false
    });
    document.body.addEventListener('touchmove', this.scrollMethod, {
      passive: false
    });
    gbks.events.listen('coloring-reset', $.proxy(this.reset, this), this.id);
  },
  mounted: function mounted() {
    gbks.events.call(gbks.event.PageMounted, {
      container: this.$refs.canvas,
      pageName: this.pageName
    });
  },
  beforeDestroy: function beforeDestroy() {
    // $(document).unbind('scroll', this.scrollMethod);
    // $(document).unbind('touchmove', this.scrollMethod);
    document.body.removeEventListener('scroll', this.scrollMethod, {
      passive: false
    });
    document.body.removeEventListener('touchmove', this.scrollMethod, {
      passive: false
    });
    gbks.events.clearListener(this.id);
  },
  computed: {
    classObject: function classObject() {
      var c = ['page', 'coloring-page'];
      return c.join(' ');
    },
    data: function data() {
      return siteData.store.state.coloringdata;
    }
  },
  methods: {
    setMode: function setMode(mode) {
      Vue.set(this.data, 'mode', 'edit');
      siteData.store.commit('updateColoringData', this.data);
    },
    save: function save() {
      console.log('save start');
      var data = gbks.cornify.coloring.composer.compose(this.data);
      console.log('save', data); // Store the data to upload

      Vue.set(this.data.upload, 'image', data.image);
      Vue.set(this.data.upload, 'width', data.width);
      Vue.set(this.data.upload, 'height', data.height); // Start the upload.

      console.log('do iit now');
      gbks.cornify.coloring.saver.init(data); // Change the display mode

      Vue.set(this.data, 'mode', 'success');
      siteData.store.commit('updateColoringData', this.data);
    },
    reset: function reset() {
      var data = {
        mode: 'pick',
        // pick, draw, success
        template: siteData.coloring.templates[Math.floor(Math.random() * siteData.coloring.templates.length)],
        editor: {
          width: null,
          height: null,
          x: null,
          y: null,
          mode: 'cornify',
          size: 0.5,
          color: [255, 0, 255],
          brush: siteData.coloring.brushes[0],
          opacity: 1
        },
        upload: {
          image: null,
          width: null,
          height: null,
          text: null,
          started: false,
          success: false,
          error: false,
          data: null,
          name: null,
          public: null
        }
      };
      siteData.store.commit('updateColoringData', data);
    },
    scroll: function scroll(event) {
      event.preventDefault();
    }
  }
};
"use strict";

var GiftsPage = {
  template: "\n        <div :class=\"classObject\">\n            <div class=\"wrap\">\n                <div class=\"content\" v-if=\"gifts\">\n                    <h1>\n                        <svg-text \n                            text=\"The unicorn store\" \n                            :autoResize=\"true\" \n                        />\n                    </h1>\n\n                    <p>Unicorn gifts for extreme happiness!</p>\n\n                    <div class=\"content-inner\">\n                        <gifts-categories\n                            v-if=\"categories\"\n                            :categories=\"categories\" \n                            :categoryId=\"categoryId\" \n                            :giftId=\"giftId\" \n                        />\n                        <gifts-list\n                            :categoryId=\"categoryId\" \n                            :giftId=\"giftId\"\n                            :gifts=\"filteredGifts\"\n                        />\n                    </div>\n                    \n                    <gifts-details\n                        :categoryId=\"categoryId\" \n                        :giftId=\"giftId\"\n                        :gifts=\"gifts\"\n                    />\n                </div>\n            </div>\n        </div>\n    ",
  data: function data() {
    return {
      id: 'GiftsPage',
      pageName: 'gifts-page',
      log: !true,
      giftId: this.$route.params.giftId,
      categoryId: this.$route.params.categoryId,
      loading: false,
      categories: null
    };
  },
  beforeMount: function beforeMount() {
    this.l('beforeMount', this.id); // gbks.events.listen('api-gifts-success', $.proxy(this.onQuotes, this), this.id);
    // gbks.events.call('site-background-effect', {
    //     id: 'solid-color',
    //     color: siteData.palette[8] // Orange
    // });

    gbks.events.call('site-background-effect', {
      id: 'solid-color',
      color: {
        r: 255,
        g: 255,
        b: 255,
        hex: 'ffffff'
      }
    });

    if (!this.gifts) {
      this.loadGifts();
    }
  },
  mounted: function mounted() {
    gbks.events.call(gbks.event.PageMounted, {
      container: this.$refs.canvas,
      pageName: this.pageName
    });
  },
  watch: {
    $route: function $route(next, previous) {
      if (next.params.giftId) {
        this.giftId = next.params.giftId;
      } else {
        this.giftId = null;
      }

      if (next.params.categoryId) {
        this.categoryId = next.params.categoryId;
      } else {
        this.categoryId = null;
      }
    },
    gifts: function gifts(next, previous) {
      this.l('watch.gifts', next, previous);

      if (next) {
        this.loading = false;
        this.gatherCategories();
      }
    }
  },
  computed: {
    classObject: function classObject() {
      var c = ['page', 'gifts-page'];

      if (!this.gifts || this.loading) {
        c.push('-loading');
      }

      return c.join(' ');
    },
    gifts: function gifts() {
      return siteData.store.state.gifts;
    },
    filteredGifts: function filteredGifts() {
      var result = siteData.store.state.gifts;

      if (this.categoryId) {
        var name = this.categories[this.categoryId];
        result = [];
        var gift;

        for (var i = 0; i < this.gifts.length; i++) {
          gift = this.gifts[i];

          if (gift.categories && gift.categories.indexOf(name) !== -1) {
            result.push(gift);
          }
        }
      }

      return result;
    }
  },
  methods: {
    loadGifts: function loadGifts() {
      this.loading = true;
      gbks.api.gifts();
    },
    gatherCategories: function gatherCategories() {
      var result = {};
      var gift, k, slug;

      for (var i = 0; i < this.gifts.length; i++) {
        gift = this.gifts[i];

        if (gift.categories && gift.categories.length > 0) {
          for (k = 0; k < gift.categories.length; k++) {
            slug = gbks.helpers.stringToSlug(gift.categories[k]);
            result[slug] = gift.categories[k];
          }
        }
      }

      this.categories = result;
    }
  }
};
"use strict";

var PhotoPage = {
  template: "\n        <div :class=\"classObject\" ref=\"canvas\">\n            <div class=\"wrap\">\n                <div class=\"content\">\n                    <photo-photo\n                        :photoId=\"photoId\"\n                        :nextPhotoId=\"nextPhotoId\"\n                        :photo=\"photo\"\n                    />\n                    <div class=\"secondary\">\n                        <photo-options\n                            :photoId=\"photoId\"\n                            :nextPhotoId=\"nextPhotoId\"\n                            :photo=\"photo\"\n                        />\n                        <photo-related-list\n                            :photoId=\"photoId\"\n                            @loadPhotos=\"loadPhotos\"\n                        />\n                    </div>\n                </div>\n            </div>\n        </div>\n    ",
  data: function data() {
    return {
      id: 'PhotoPage',
      pageName: 'photo-page',
      log: true,
      loading: false,
      photoId: this.$route.params.photoId,
      photo: null,
      relatedPhotos: null,
      angle: Math.round(Math.random() * 6 - 2)
    };
  },
  beforeMount: function beforeMount() {
    this.l('beforeMount', this.$params);
    gbks.events.listen('api-photo-success', $.proxy(this.onPhoto, this), this.id); // gbks.events.listen('api-related-photos-success', $.proxy(this.onRelatedPhotos, this), this.id);

    this.loadPhoto(); // this.loadRelatedPhotos();
  },
  mounted: function mounted() {
    gbks.events.call(gbks.event.PageMounted, {
      container: this.$refs.canvas,
      pageName: this.pageName
    });
  },
  watch: {
    $route: function $route(next, previous) {
      if (next.params.photoId) {
        this.photoId = next.params.photoId;
        this.loadPhoto();

        if (siteData.store.state.isMobile) {
          siteData.scroller.scrollToPosition(0);
        }
      }
    }
  },
  computed: {
    classObject: function classObject() {
      var c = ['page', 'photo-page'];

      if (this.loading) {
        c.push('-loading');
      }

      return c.join(' ');
    },
    styleObject: function styleObject() {
      var s = {
        transform: 'rotate(' + this.angle + 'deg)'
      };
      return s;
    },
    nextPhotoId: function nextPhotoId() {
      var result = null;
      var photos = this.relatedPhotos;

      if (photos && this.photoId) {
        var photo;

        for (var i = 1; i < photos.length; i++) {
          photo = photos[i];

          if (photos[i - 1].id == this.photoId) {
            result = photo.id;
            break;
          }
        }
      }

      if (!result && photos && photos.length > 0) {
        result = photos[0].id;
      }

      this.l('nextPhotoId', result, this.photoId, this.relatedPhotos);
      return result;
    }
  },
  methods: {
    loadPhoto: function loadPhoto() {
      this.loading = true;
      gbks.api.photo(this.photoId);
    },
    onPhoto: function onPhoto(data) {
      this.l('onPhotos', data);

      if (data.id == this.photoId) {
        this.photo = data.photo;
        this.loading = false;
        this.angle = Math.round(Math.random() * 6 - 2);
      }
    },
    loadRelatedPhotos: function loadRelatedPhotos() {
      gbks.api.relatedPhotos(this.photoId);
    },
    onRelatedPhotos: function onRelatedPhotos(data) {
      this.l('onRelatedPhotos', data);

      if (data.id == this.photoId) {
        this.relatedPhotos = data.photos;
      }
    },
    loadPhotos: function loadPhotos(data) {
      this.l('loadPhotos', data);
      this.relatedPhotos = data;
    }
  }
};
"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*

3 modes
- Choose file
- Edit
- Upload & share

 */
var PhotoEditorPage = {
  template: "\n        <div :class=\"classObject\" ref=\"canvas\">\n            <div class=\"wrap\">\n                <div class=\"content\">\n                    <photo-editor-top-bar\n                        :data=\"data\"\n                    />\n\n                    <photo-editor-frame\n                        :data=\"data\" \n                    />\n                    \n                    <photo-editor-bottom-bar\n                        :data=\"data\"\n                        @save=\"save\"\n                        @cornify=\"cornify\"\n                    />\n                </div>\n            </div>\n        </div>\n    ",
  data: function data() {
    return {
      id: 'PhotoEditorPage',
      pageName: 'photo-editor-page',
      log: true
    };
  },
  beforeMount: function beforeMount() {
    this.l('beforeMount', this.id);
    this.reset();
    gbks.events.call('site-background-effect', {
      id: 'solid-color',
      color: siteData.palette[4]
    }); // Success
    // data.mode = 'success';

    gbks.events.listen('photo-editor-reset', $.proxy(this.reset, this), this.id);
  },
  mounted: function mounted() {
    gbks.events.call(gbks.event.PageMounted, {
      container: this.$refs.canvas,
      pageName: this.pageName
    });
  },
  beforeDestroy: function beforeDestroy() {
    gbks.events.clearListener(this.id);
  },
  computed: {
    classObject: function classObject() {
      var c = ['page', 'photo-editor-page'];
      return c.join(' ');
    },
    data: function data() {
      return siteData.store.state.photoeditordata;
    }
  },
  methods: {
    setMode: function setMode(mode) {
      Vue.set(this.data, 'mode', 'edit');
      siteData.store.commit('updatePhotoEditorData', this.data); // this.mode = mode;
    },
    // fileLoaded: function(data) {
    //     this.l('fileLoaded', data);
    //     Vue.set(this.data, 'file', data);
    //     Vue.set(this.data, 'mode', 'edit');
    //     siteData.store.commit('updatePhotoEditorData', this.data);
    //     // this.data.file = data;
    //     // this.mode = 'edit';
    // },
    save: function save() {
      console.log('save start');
      var data = gbks.cornify.composer.compose(this.data);
      console.log('save', data); // Store the data to upload

      Vue.set(this.data.upload, 'image', data.image);
      Vue.set(this.data.upload, 'width', data.width);
      Vue.set(this.data.upload, 'height', data.height);
      Vue.set(this.data.upload, 'text', data.text); // Start the upload.

      console.log('do iit now');
      gbks.cornify.photoEditorSaver.init(data); // Change the display mode

      Vue.set(this.data, 'mode', 'success');
      siteData.store.commit('updatePhotoEditorData', this.data);
    },
    cornify: function cornify() {
      var images = ['r1.gif', 'r2.gif', 'r3.gif', 'r4.gif', 'r5.gif', 'r6.gif', 'r7.gif', 'u1.gif', 'u2.gif', 'u3.gif', 'u4.gif', 'u5.gif', 'u6.gif', 'u7.gif'];
      var file = '/corns/' + images[Math.floor(Math.random() * images.length)];
      var unicorn = {
        id: 'unicorn_' + this.data.editor.unicorns.length,
        rotation: 0,
        scale: 0,
        x: this.data.editor.width / 2,
        y: this.data.editor.height,
        selected: false,
        file: file,
        image: null,
        drag: {
          start: {
            page: {
              x: 0,
              y: 0
            },
            x: 0,
            y: 0
          },
          now: {
            x: 0,
            y: 0
          }
        },
        imageSize: {
          width: 0,
          height: 0
        },
        imageLoaded: false,
        isDragging: false
      };
      this.data.editor.unicorns.push(unicorn);
      this.l('cornify', this.data.editor.unicorns);
    },
    reset: function reset() {
      var _editor;

      var data = {
        mode: 'upload',
        // upload, edit, success
        file: {
          name: null,
          type: null,
          size: null,
          width: null,
          height: null,
          dataUrl: null
        },
        editor: (_editor = {
          mode: ' cornify',
          // cornify, draw
          text: {
            text: 'Cornify!!!',
            x: null,
            y: null,
            width: null,
            height: null,
            focused: false
          },
          unicorns: [],
          filter: '',
          width: null,
          height: null,
          x: null,
          y: null
        }, _defineProperty(_editor, "mode", 'cornify'), _defineProperty(_editor, "color", [255, 0, 255]), _defineProperty(_editor, "opacity", 1), _defineProperty(_editor, "drawMode", 'draw'), _editor),
        upload: {
          image: null,
          width: null,
          height: null,
          text: null,
          started: false,
          success: false,
          error: false,
          data: null,
          name: null,
          public: null
        }
      };
      siteData.store.commit('updatePhotoEditorData', data);
    }
  }
};
"use strict";

var QuotesPage = {
  template: "\n        <div :class=\"classObject\" ref=\"canvas\">\n            <div class=\"wrap\">\n                <div class=\"content\" v-if=\"quotes\">\n                    <h1>What people say about Cornify</h1>\n                    <quotes-list\n                        :quoteId=\"quoteId\"\n                        :quotes=\"quotes\"\n                    />\n                    <quotes-pagination\n                        :quoteId=\"quoteId\"\n                        :quotes=\"quotes\"\n                    />\n                </div>\n            </div>\n        </div>\n    ",
  data: function data() {
    return {
      id: 'QuotesPage',
      pageName: 'quotes-page',
      log: !true,
      quoteId: this.$route.params.quoteId,
      page: 1,
      loading: false
    };
  },
  beforeMount: function beforeMount() {
    this.l('beforeMount', this.id); // gbks.events.listen('api-quotes-success', $.proxy(this.onQuotes, this), this.id);

    gbks.events.call('site-background-effect', {
      id: 'solid-color'
    });

    if (!this.quotes) {
      this.loadQuotes();
    } else {
      if (!this.quoteId) {
        this.quoteId = this.quotes[Math.floor(Math.random() * this.quotes.length)].id;
      }
    }
  },
  mounted: function mounted() {
    gbks.events.call(gbks.event.PageMounted, {
      container: this.$refs.canvas,
      pageName: this.pageName
    });
    window.scrollTo(0, -1);
  },
  watch: {
    $route: function $route(next, previous) {
      if (next.params.quoteId) {
        this.quoteId = next.params.quoteId;
        gbks.events.call('site-background-effect', {
          id: 'solid-color'
        });
      }
    },
    quotes: function quotes(next, previous) {
      this.l('watch.quotes', next, previous);

      if (next && !this.quoteId) {
        this.quoteId = next[Math.floor(Math.random() * next.length)].id;
      }
    }
  },
  computed: {
    classObject: function classObject() {
      var c = ['page', 'quotes-page'];

      if (!this.quotes || this.loading) {
        c.push('-loading');
      }

      return c.join(' ');
    },
    quotes: function quotes() {
      return siteData.store.state.quotes;
    }
  },
  methods: {
    loadQuotes: function loadQuotes() {
      this.loading = true;
      gbks.api.quotes(this.page);
    },
    onQuotes: function onQuotes(data) {
      var quotes = data.quotes;

      if (!this.quoteId) {
        this.quoteId = quotes[Math.floor(Math.random() * quotes.length)].id;
      }

      this.quotes = quotes;
      this.l('onQuotes', quotes, this.quoteId);
      this.loading = false;
    }
  }
};
"use strict";

var GalleryPage = {
  template: "\n        <div :class=\"classObject\" ref=\"canvas\">\n            <div class=\"wrap\">\n                <div class=\"content\">\n                    <gallery-pic\n                        :picId=\"picId\"\n                        :nextPicId=\"nextPicId\"\n                        @loaded=\"imageLoaded\"\n                    />\n                    <div class=\"secondary\">\n                        <gallery-options\n                            :picId=\"picId\"\n                            :nextPicId=\"nextPicId\"\n                            :pic=\"pic\"\n                        />\n                        <gallery-list\n                            :picId=\"picId\"\n                            :pics=\"visiblepics\"\n                        />\n                    </div>\n                </div>\n            </div>\n        </div>\n    ",
  data: function data() {
    return {
      id: 'GalleryPage',
      pageName: 'gallery-page',
      log: true,
      picId: this.$route.params.picId,
      pic: null,
      page: 0,
      pages: null,
      loading: false
    };
  },
  watch: {
    $route: function $route(next, previous) {
      this.picId = next.params.picId;
      this.updateMeta();
      this.evaluatePagination();

      if (siteData.store.state.isMobile) {
        siteData.scroller.scrollToPosition(0);
      }
    }
  },
  beforeMount: function beforeMount() {
    this.l('beforeMount', this.picId);
    gbks.events.listen('api-unicorn-pics-success', $.proxy(this.onLoadPics, this), this.id);
    this.loadPics();
  },
  mounted: function mounted() {
    gbks.events.call(gbks.event.PageMounted, {
      container: this.$refs.canvas,
      pageName: this.pageName
    });
  },
  computed: {
    classObject: function classObject() {
      var c = ['page', 'gallery-page'];

      if (this.loading) {
        c.push('-loading');
      }

      return c.join(' ');
    },
    unicornpics: function unicornpics() {
      return siteData.store.state.unicornpics;
    },
    visiblepics: function visiblepics() {
      var result = null;
      var pics = this.unicornpics;

      if (pics) {
        result = pics.slice(this.page * 9, (this.page + 1) * 9);
      }

      this.l('visiblepics', result, this.page, pics);
      return result;
    },
    nextPicId: function nextPicId() {
      var result = null;
      var pics = this.unicornpics;

      if (pics && this.picId) {
        var pic;
        var nextPicId = null;

        for (var i = 1; i < pics.length; i++) {
          pic = pics[i];

          if (pics[i - 1].id == this.picId) {
            result = pic.id;
            break;
          }
        }
      }

      this.l('nextPicId', result);
      return result;
    }
  },
  methods: {
    loadPics: function loadPics() {
      this.l('loadPics', this.page);
      this.loading = true;
      gbks.api.unicornPics(1, 100);
    },
    onLoadPics: function onLoadPics(data) {
      this.l('onLoadPics', data); // this.pics = data.pics;

      this.pages = Math.floor(data.total / 9);
      this.loading = false;
    },
    imageLoaded: function imageLoaded(pic) {
      this.pic = pic;

      if (pic.id != this.picId) {
        // The API returned a random pic.
        this.picId = pic.id;
        this.evaluatePagination();
      }

      this.l('imageLoaded', pic);
      gbks.events.call('site-background-effect', {
        id: 'blurry-image',
        file: 'https://www.cornify.com/pics/preview/' + pic.file
      });
    },

    /*
    
    If the current image is the last one in the visible list, or not in the visible list at all,
    adjust the pagination.
      */
    evaluatePagination: function evaluatePagination() {
      if (!this.visiblepics) {
        return;
      }

      var currentPicIndex = null; // Is it part of the visible pics?

      var visiblepics = this.visiblepics;

      if (visiblepics) {
        for (var i = 0; i < visiblepics.length; i++) {
          if (visiblepics[i].id == this.picId) {
            currentPicIndex = i;
            break;
          }
        }
      }

      this.l('evaluatePagination', currentPicIndex, this.page, this.pages);

      if (!currentPicIndex) {
        // It's not even visible
        var pics = this.unicornpics;

        if (pics) {
          for (i = 0; i < pics.length; i++) {
            if (pics[i].id == this.picId) {
              var page = Math.floor(i / 9);
              this.l('setting page', page, i / 9);
              this.page = page;
              break;
            }
          }
        }
      } else if (currentPicIndex == this.visiblepics.length - 1) {
        // It's the last one.
        var page = this.page + 1;

        if (page >= this.pages) {
          page = 0;
        }

        this.l('last one', page);
        this.page = page;
      } // var lastPic = this.visiblepics[this.visiblepics.length-1];
      // if(this.picId == lastPic.id) {
      //     var page = this.page + 1;
      //     if(page >= this.pages) {
      //         page = 0;
      //     }
      //     this.l('evaluatePagination', page, this.pages);
      //     this.page = page;
      // }

    },
    updateMeta: function updateMeta() {
      var pics = this.unicornpics;

      if (pics && this.picId) {
        var pic;

        for (var i = 0; i < pics.length; i++) {
          pic = pics[i];

          if (pic.id == this.picId) {
            document.title = pic.title + ' on Cornify';
            break;
          }
        }
      }
    }
  }
};
"use strict";

var InstallPage = {
  template: "\n        <div :class=\"classObject\" ref=\"canvas\">\n            <div class=\"wrap\">\n                <div class=\"content\">\n                    <h1>Find the <img \n                        src=\"/assets/cornify-unicorns-rainbows-192.png\" \n                        width=\"200\" \n                        height=\"200\" \n                        alt=\"This is what the Cornify button looks like!\"\n                        @click=\"clickImage\"\n                    > button in your toolbar above and press it.</h1>\n                    <p>Then press it again. And again. And again...</p>\n                </div>\n            </div>\n        </div>\n    ",
  data: function data() {
    return {
      id: 'InstallPage',
      pageName: 'install-page',
      log: true
    };
  },
  beforeMount: function beforeMount() {
    gbks.events.call('site-background-effect', {
      id: 'solid-color',
      color: {
        r: 255,
        g: 255,
        b: 255
      }
    });
  },
  mounted: function mounted() {
    gbks.events.call(gbks.event.PageMounted, {
      container: this.$refs.canvas,
      pageName: this.pageName
    });
  },
  computed: {
    classObject: function classObject() {
      var c = ['page', 'install-page'];
      return c.join(' ');
    }
  },
  methods: {
    clickImage: function clickImage() {
      cornify_add();
      trackman.event('install', 'click-image');
    }
  }
};
"use strict";

// https://github.com/davidshimjs/qrcodejs
var LightningPage = {
  template: "\n        <div :class=\"classObject\" ref=\"canvas\">\n            <div class=\"wrap\">\n                <div class=\"content\">\n                    <img\n                        src=\"/assets/younicorn/bitcorns.png\"\n                        srcset=\"/assets/younicorn/bitcorns.png 1x, /assets/younicorn/bitcorns@2x.png 2x\"\n                        width=\"200\"\n                        height=\"123\"\n                        alt=\"Three sparkly Bitcorns\"\n                    >\n                    <h1 v-html=\"title\" />\n                    <p v-html=\"description\" />\n\n                    <router-link\n                        v-if=\"invoiceStatus == 'paid'\"\n                        to=\"/younicorn\"\n                        class=\"button -filled\"\n                    >Create your Bitcorn</router-link>\n\n                    <template v-if=\"false\">\n                        <lightning-invoice-paid\n                            v-if=\"invoiceStatus == 'paid'\"\n                            :invoice=\"lightningInvoice\"\n                            @create=\"createInvoice\"\n                        />\n                        <lightning-invoice-expired\n                            v-else-if=\"invoiceStatus == 'invoice-expired'\"\n                            :invoice=\"lightningInvoice\"\n                            @create=\"createInvoice\"\n                        />\n                        <lightning-invoice-processing\n                            v-else-if=\"invoiceStatus == 'processing'\"\n                            :invoice=\"lightningInvoice\"\n                            @cancel=\"cancelInvoice\"\n                        />\n                        <lightning-invoice-unpaid\n                            v-else-if=\"invoiceStatus == 'unpaid'\"\n                            :invoice=\"lightningInvoice\"\n                            @cancel=\"cancelInvoice\"\n                        />\n                    </template>\n\n                    <lightning-invoice-default\n                        v-if=\"!lightningInvoice\"\n                        :amount=\"amount\"\n                        @create=\"createInvoice\"\n                    />\n\n                    <lightning-invoice-card\n                        :invoice=\"lightningInvoice\"\n                        :loading=\"loading\"\n                        @create=\"createInvoice\"\n                    />\n\n                    <button\n                        v-if=\"invoiceStatus == 'expired'\"\n                        class=\"button\"\n                        @click=\"createInvoice\"\n                    >Create another invoice</button>\n\n                    <template v-if=\"invoiceStatus == 'unpaid'\">\n                        <a\n                            class=\"button -filled\"\n                            href=\"#\"\n                            v-html=\"paidButtonLabel\"\n                            @click.prevent=\"checkPayment\"\n                        />\n                        <br/>\n                        <br/>\n                        <a\n                            href=\"#\"\n                            @click.prevent=\"cancelInvoice\"\n                        >Cancel this invoice</a>\n                    </template>\n\n                    <lightning-info />\n                </div>\n            </div>\n        </div>\n    ",
  data: function data() {
    return {
      id: 'LightningPage',
      pageName: 'lightning-page',
      log: true,
      amount: 1337,
      loading: false,
      lightningInvoice: null,
      dev: null,
      paidChecks: 0
    };
  },
  beforeMount: function beforeMount() {
    gbks.events.call('site-background-effect', {
      id: 'solid-color',
      color: {
        r: 255,
        g: 255,
        b: 255
      }
    });
    gbks.events.listen('api-create-lightning-invoice-success', $.proxy(this.onCreateInvoice, this), this.id);
    gbks.events.listen('api-create-lightning-invoice-error', $.proxy(this.onCreateInvoiceError, this), this.id);
    gbks.events.listen('api-get-lightning-invoice-success', $.proxy(this.onLoadInvoice, this), this.id);
    gbks.events.listen('api-get-lightning-invoice-error', $.proxy(this.onLoadInvoiceError, this), this.id);
    var invoiceId = siteData.store.state.lightningInvoiceId;

    if (invoiceId) {
      gbks.api.getLightningInvoice({
        id: siteData.store.state.lightningInvoiceId,
        dev: this.dev
      });
    }
  },
  mounted: function mounted() {
    gbks.events.call(gbks.event.PageMounted, {
      container: this.$refs.canvas,
      pageName: this.pageName
    });
  },
  computed: {
    classObject: function classObject() {
      var c = ['page', this.pageName];
      return c.join(' ');
    },
    title: function title() {
      var result = '';

      switch (this.invoiceStatus) {
        case 'paid':
          result = 'Now go get your Bitcorn!';
          break;

        case 'expired':
          result = 'Oh no! The invoice expired!';
          break;

        case 'processing':
          result = 'Invoice processing';
          break;

        case 'unpaid':
          result = 'Time to pay up';
          break;
      }

      return result;
    },
    description: function description() {
      var result = '';

      switch (this.invoiceStatus) {
        case 'paid':
          result = 'Your payment went through. This is incredible, the future is now! Congratulations, you are one step closer to enlightenment.';
          break;

        case 'expired':
          result = "Well... life is just hard and unfair sometimes. The invoice expired. Don't give up hope though. Dust yourself off, create another invoice and give it a go. You can do it!";
          break;

        case 'processing':
          result = 'This should just take a few seconds... or minutes... or hours. Remember, this is still experimental technology.';
          break;

        case 'unpaid':
          result = 'Scan the QR code or use the complicated payment request to pay the hefty sum of ' + this.amount + ' Satoshi, and get that sweet Bitcorn magic.';
          break;
      }

      return result;
    },
    paidButtonLabel: function paidButtonLabel() {
      var result = 'I paid';

      if (this.loading) {
        result = 'Checking...';
      } else if (this.paidChecks == 1) {
        result = 'I paid (I really did!)';
      } else if (this.paidChecks == 2) {
        result = 'I paid (For real!)';
      } else if (this.paidChecks == 3) {
        result = 'I paid (Seriously!)';
      } else if (this.paidChecks > 3) {
        result = 'I like this button (and paid!)';
      }

      return result;
    },
    lightningInvoiceId: function lightningInvoiceId() {
      return siteData.store.state.lightningInvoiceId;
    },
    hasInvoice: function hasInvoice() {
      return this.lightningInvoiceId != null;
    },
    // null/unpaid/paid/processing
    invoiceStatus: function invoiceStatus() {
      var result;
      this.l('invoiceStatus', this.hasInvoice, this.lightningInvoice);

      if (this.hasInvoice && this.lightningInvoice) {
        result = this.lightningInvoice.status;
      }

      return result;
    }
  },
  methods: {
    onCreateInvoice: function onCreateInvoice(data) {
      this.l('onCreateInvoice', data);
      siteData.store.commit('updateLightningInvoiceId', data.invoice.id);
      this.lightningInvoice = data.invoice;
      siteData.store.commit('updateLightningInvoiceStatus', this.lightningInvoice.status);
    },
    onCreateInvoiceError: function onCreateInvoiceError(data) {
      this.l('onCreateInvoiceError', data);
    },
    loadInvoice: function loadInvoice() {
      if (this.loading) {
        return;
      }

      this.loading = true;
      gbks.api.getLightningInvoice({
        id: this.lightningInvoiceId,
        dev: this.dev
      });
    },
    onLoadInvoice: function onLoadInvoice(data) {
      this.l('onLoadInvoice', data);
      this.loading = false;
      this.lightningInvoice = data.invoice;
      siteData.store.commit('updateLightningInvoiceStatus', this.lightningInvoice.status);
    },
    onLoadInvoiceError: function onLoadInvoiceError(data) {
      this.l('onLoadInvoiceError', data);
      this.loading = false;
    },
    createInvoice: function createInvoice(options) {
      var data = $.extend({
        amount: this.amount,
        dev: this.dev,
        description: 'A very sparkly Bitcorn on cornify.com.'
      }, options);
      gbks.api.createLightningInvoice(data);
    },
    cancelInvoice: function cancelInvoice() {
      siteData.store.commit('updateLightningInvoiceId', null);
      siteData.store.commit('updateLightningInvoiceStatus', null);
      this.lightningInvoice = null;
    },
    checkPayment: function checkPayment() {
      if (!this.loading) {
        this.paidChecks += 1;
        this.loadInvoice();
      }
    }
  }
};
"use strict";

var UninstallPage = {
  template: "\n        <div :class=\"classObject\" ref=\"canvas\">\n            <div class=\"wrap\">\n                <div class=\"content\">\n                    <h1><svg-text text=\"See you soon!!!\" /></h1>\n                    <p>It was so fantastic to spend time with you!</p>\n                </div>\n            </div>\n        </div>\n    ",
  data: function data() {
    return {
      id: 'UninstallPage',
      pageName: 'uninstall-page',
      log: true
    };
  },
  beforeMount: function beforeMount() {
    gbks.events.call('site-background-effect', {
      id: 'rainbow'
    });
  },
  mounted: function mounted() {
    gbks.events.call(gbks.event.PageMounted, {
      container: this.$refs.canvas,
      pageName: this.pageName
    });
  },
  computed: {
    classObject: function classObject() {
      var c = ['page', 'uninstall-page'];
      return c.join(' ');
    }
  },
  methods: {}
};
"use strict";

var YounicornPage = {
  template: "\n        <div :class=\"classObject\" ref=\"canvas\">\n            <div class=\"wrap\">\n                <div class=\"content\">\n                    <div class=\"top\">\n                        <younicorn-background\n                            :younicornId=\"younicornId\"\n                            :younicorn=\"younicorn\"\n                        />\n                        <younicorn-younicorn\n                            :younicornId=\"younicornId\"\n                            :younicorn=\"younicorn\"\n                        />\n                        <younicorn-loader\n                            v-if=\"false\"\n                            :younicornId=\"younicornId\"\n                            :younicorn=\"younicorn\"\n                        />\n                        <younicorn-pagination\n                            v-if=\"younicorn\"\n                            :younicornData=\"younicornData\"\n                        />\n                    </div>\n                    <div :class=\"infoClass\">\n                        <svg-multiline-text \n                            v-if=\"younicorn\"\n                            charactersPerLine=\"15\"\n                            :text=\"younicorn.name ? younicorn.name : 'Unicorn'\"\n                            autoResize=\"true\"\n                            @select=\"clickName\"\n                        />\n                        <p \n                            v-if=\"younicorn\"\n                        >Best friend of {{ younicorn.username ? younicorn.username : 'everyone' }}.</p>\n                    </div>\n                    <div class=\"secondary\">\n                        <younicorn-extension-button\n                            v-if=\"false\"\n                            :younicornId=\"younicornId\"\n                        />\n                        <younicorn-options\n                            :younicornId=\"younicornId\"\n                            :younicorn=\"younicorn\"\n                            :downloadActive=\"downloadActive\"\n                            @toggleDownload=\"toggleDownload\"\n                        />\n                        <younicorn-download-options\n                            :younicornId=\"younicornId\"\n                            :younicorn=\"younicorn\"\n                            :active=\"downloadActive\"\n                        />\n                        <younicorn-products\n                            :younicornId=\"younicornId\"\n                            :younicorn=\"younicorn\"\n                        />\n                    </div>\n                    <div class=\"tertiary\" v-if=\"younicorn\">\n                        <router-link\n                            to=\"/younicorns\"\n                            title=\"Browse younicorns\"\n                        >\n                            <img\n                                src=\"/assets/younicorn/younicorns.png\"\n                                srcset=\"/assets/younicorn/younicorns.png 1x, /assets/younicorn/younicorns@2x.png 2x\"\n                                width=\"200\"\n                                height=\"123\"\n                                alt=\"Three colorful Younicorns\"\n                            >\n                        </router-link>\n                        <h1>{{ younicorn.name ? younicorn.name : 'This' }} is a <router-link :to=\"isBitcorn ? '/bitcorn' : '/younicorns'\">{{ unicornType }}</router-link></h1>\n                        <p>{{ infoDescription }}</p>\n                        <router-link\n                            class=\"-button\"\n                            to=\"/younicorn\"\n                        >Make your own Younicorn</router-link>\n                        <br/>\n                        <router-link\n                            class=\"-browse\"\n                            to=\"/younicorns\"\n                        >Browse Younicorns</router-link>\n                        <br/>\n                        <br/>\n                        <p class=\"-tiny\">How would you make Younicorns better?<br/><a href=\"https://forms.gle/XDysiaX2L38KRkRb7\" target=\"_blank\" @click=\"clickSurvey\">Let us know</a>.</p>\n                        <br/>\n                        <p class=\"-tiny\" v-if=\"isBitcorn\"><router-link to=\"/bitcorn\">Create a Bitcorn</router-link></p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    ",
  data: function data() {
    return {
      id: 'YounicornPage',
      pageName: 'younicorn-page',
      log: !true,
      loading: false,
      younicornId: this.$route.params.younicornId,
      younicorn: null,
      younicornData: null,
      relatedYounicorns: null,
      downloadActive: false,
      infoClass: 'info -pink'
    };
  },
  beforeMount: function beforeMount() {
    this.l('beforeMount', this.$params);
    gbks.events.call('site-background-effect', {
      id: 'solid-color',
      color: {
        r: 255,
        g: 255,
        b: 255
      }
    });
    gbks.events.listen('api-younicorn-success', $.proxy(this.onYounicorn, this), this.id);
    this.loadYounicorn();
  },
  mounted: function mounted() {
    gbks.events.call(gbks.event.PageMounted, {
      container: this.$refs.canvas,
      pageName: this.pageName
    });
  },
  watch: {
    $route: function $route(next, previous) {
      if (next.params.younicornId) {
        this.younicornId = next.params.younicornId;
        this.loadYounicorn();

        if (siteData.store.state.isMobile) {
          siteData.scroller.scrollToPosition(0);
        }
      }
    }
  },
  computed: {
    classObject: function classObject() {
      var c = ['page', 'younicorn-page'];

      if (this.loading) {
        c.push('-loading');
      }

      return c.join(' ');
    },
    styleObject: function styleObject() {
      var s = {// transform: 'rotate('+this.angle+'deg)'
      };
      return s;
    },
    unicornType: function unicornType() {
      var result = 'Younicorn';

      if (this.isBitcorn) {
        result = 'Bitcorn';
      }

      return result;
    },
    isBitcorn: function isBitcorn() {
      return this.younicorn && this.younicorn.bits && this.younicorn.bits.bitcorn == true;
    },
    nextYounicornId: function nextYounicornId() {
      var result = null;
      var younicorns = this.relatedYounicorns;

      if (younicorns && this.younicornId) {
        var younicorn;

        for (var i = 1; i < younicorns.length; i++) {
          younicorn = younicorns[i];

          if (younicorns[i - 1].id == this.younicornId) {
            result = younicorn.id;
            break;
          }
        }
      }

      if (!result && younicorns && younicorns.length > 0) {
        result = younicorns[0].id;
      }

      this.l('nextYounicornId', result, this.younicornId, this.relatedYounicorns);
      return result;
    },
    infoDescription: function infoDescription() {
      var result;
      var hasName = this.younicorn && this.younicorn.username && this.younicorn.username.length > 0;

      if (hasName) {
        result = this.younicorn.username + ' brought this beautiful unicorn to life right here on Cornify.';
      } else {
        result = 'This beautiful unicorn was brought to life right here on Cornify.';
      }

      result += ' And you can do the same. The time has come to make your dreams come true and get a new unicorn friend.';

      if (this.isBitcorn) {
        result += ' A Bitcorn is a particularly sparkly type of Younicorn that was summoned with the power of magic Internet money.';
      }

      return result;
    }
  },
  methods: {
    loadYounicorn: function loadYounicorn() {
      this.loading = true;
      gbks.api.younicorn(this.younicornId);
    },
    onYounicorn: function onYounicorn(data) {
      this.l('onYounicorn', data);

      if (data.id == this.younicornId) {
        if (data.younicorn.bits && typeof data.younicorn.bits == 'string') {
          try {
            data.younicorn.bits = JSON.parse(data.younicorn.bits);
          } catch (error) {
            this.l('error', error);
          }
        }

        this.younicorn = data.younicorn;
        this.younicornData = data;
        this.loading = false;
        document.title = this.younicorn.name + ', a Younicorn friend of ' + this.younicorn.username + ' on Cornify'; // this.updateBackground();
      }
    },
    updateBackground: function updateBackground() {
      var color = {
        r: 255,
        g: 255,
        b: 255
      };

      if (this.younicorn.bits) {
        var backgroundId = this.younicorn.bits.parts.background;

        if (backgroundId) {
          this.l('backgroundId', backgroundId);
          var part = siteData.builder.categories.background.parts[backgroundId];
          color = gbks.helpers.hexToRgb(part.ground);
        }
      }

      gbks.events.call('site-background-effect', {
        id: 'solid-color',
        color: color
      });
    },
    loadRelatedYounicorns: function loadRelatedYounicorns() {// gbks.api.relatedYounicorns(this.younicornId);
    },
    onRelatedYounicorns: function onRelatedYounicorns(data) {
      this.l('onRelatedYounicorns', data);

      if (data.id == this.younicornId) {
        this.relatedYounicorns = data.younicorns;
      }
    },
    loadYounicorns: function loadYounicorns(data) {
      this.l('loadYounicorns', data);
      this.relatedYounicorns = data;
    },
    toggleDownload: function toggleDownload() {
      this.downloadActive = !this.downloadActive;
    },
    clickSurvey: function clickSurvey() {
      trackman.event('younicorns', 'click-survey');
    },
    clickName: function clickName() {
      var bits = ['pink', 'green', 'yellow', 'blue', 'orange', 'red', 'purple'];
      this.infoClass = 'info -' + bits[Math.floor(Math.random() * bits.length)];
    }
  }
};
"use strict";

var YounicornsPage = {
  template: "\n        <div :class=\"classObject\" ref=\"canvas\">\n            <div class=\"wrap\">\n                <div class=\"content\" v-if=\"younicorns\">\n                    <div class=\"header\">\n                        <h1><svg-text\n                            text=\"Younicorns\"\n                            autoResize=\"true\"\n                        /></h1>\n                        <p>\n                            <router-link\n                                class=\"funky-button -filled -pink -small\"\n                                to=\"/younicorn\"\n                            >Make your own</router-link>\n                        </p>\n                        <younicorns-toggle\n                            :activeTabId=\"activeTabId\"\n                            @click=\"changeTab\"\n                        />\n                    </div>\n                    <younicorns-promo />\n                    <younicorns-list\n                        :data=\"younicorns\"\n                        :younicornIds=\"bookmarkletYounicorns\"\n                        :mode=\"activeTabId\"\n                    />\n                    <younicorns-no-favorites\n                        v-if=\"showNoFavorites\"\n                    />\n                    <younicorns-info />\n                </div>\n            </div>\n        </div>\n    ",
  data: function data() {
    console.log('data', siteData.store.state.younicorns);
    var younicorns = siteData.store.state.younicorns;
    var page = 1;
    var perPage = 20;

    if (younicorns && younicorns.length > 0) {
      page = Math.floor(younicorns.length / perPage) + 1;
    }

    return {
      id: 'YounicornsPage',
      pageName: 'younicorns-page',
      log: true,
      loading: false,
      page: page,
      perPage: perPage,
      preLoadStartCount: 0,
      allLoaded: false,
      scrollMethod: $.proxy(this.onScroll, this),
      activeTabId: 'all'
    };
  },
  beforeMount: function beforeMount() {
    this.l('beforeMount', this.$params);
    gbks.events.call('site-background-effect', {
      id: 'solid-color',
      color: {
        r: 255,
        g: 255,
        b: 255
      }
    });
    $(window).bind('scroll', this.scrollMethod);
    gbks.events.listen('api-younicorns-success', $.proxy(this.onYounicorns, this), this.id);
    this.loadYounicorns();
  },
  mounted: function mounted() {
    gbks.events.call(gbks.event.PageMounted, {
      container: this.$refs.canvas,
      pageName: this.pageName
    });
  },
  beforeDestroy: function beforeDestroy() {
    $(window).unbind('scroll', this.scrollMethod);
  },
  computed: {
    classObject: function classObject() {
      var c = ['page', 'younicorns-page'];

      if (this.loading) {
        c.push('-loading');
      }

      return c.join(' ');
    },
    younicorns: function younicorns() {
      return siteData.store.state.younicorns;
    },
    bookmarkletYounicorns: function bookmarkletYounicorns() {
      return siteData.store.state.bookmarkletYounicorns;
    },
    showNoFavorites: function showNoFavorites() {
      return this.activeTabId == 'favorites' && (!this.bookmarkletYounicorns || this.bookmarkletYounicorns.length == 0);
    }
  },
  methods: {
    loadYounicorns: function loadYounicorns() {
      this.loading = true;

      if (this.younicorns) {
        this.preLoadStartCount = this.younicorns.length;
      }

      gbks.api.younicorns(this.page, this.perPage);
    },
    onYounicorns: function onYounicorns(data) {
      this.l('onYounicorns', data);
      this.loading = false;

      if (this.younicorns.length == this.preLoadStartCount) {
        this.allLoaded = true;
        this.l('All younicorns loaded');
        $(window).unbind('scroll', this.scrollMethod);
      } // this.younicorns = data.younicorns;

    },
    onScroll: function onScroll(event) {
      // this.l('onScroll', event);
      if (this.loading || this.activeTabId !== 'all') {
        return;
      }

      var scrollPosition = $(window).scrollTop();
      var windowHeight = $(window).height();
      var windowBottom = scrollPosition + windowHeight;
      var canvas = $(this.$refs.canvas);
      var canvasTop = canvas.offset().top;
      var canvasHeight = canvas.outerHeight();
      var canvasBottom = canvasTop + canvasHeight - 600;
      var bottomInView = false;

      if (canvasBottom > scrollPosition && canvasBottom < windowBottom) {
        bottomInView = true;
      }

      if (bottomInView) {
        this.page += 1;
        trackman.event('younicorns', 'list-load', 'page-' + this.page);
        this.loadYounicorns();
      }
    },
    changeTab: function changeTab(tabId) {
      this.activeTabId = tabId;
    }
  }
};
"use strict";

/*
 
    _______      ,-----.    .-------.    ,---.   .--..-./`)  ________    ____     __  
   /   __  \   .'  .-,  '.  |  _ _   \   |    \  |  |\ .-.')|        |   \   \   /  / 
  | ,_/  \__) / ,-.|  \ _ \ | ( ' )  |   |  ,  \ |  |/ `-' \|   .----'    \  _. /  '  
,-./  )      ;  \  '_ /  | :|(_ o _) /   |  |\_ \|  | `-'`"`|  _|____      _( )_ .'   
\  '_ '`)    |  _`,/ \ _/  || (_,_).' __ |  _( )_\  | .---. |_( )_   | ___(_ o _)'    
 > (_)  )  __: (  '\_/ \   ;|  |\ \  |  || (_ o _)  | |   | (_ o._)__||   |(_,_)'     
(  .  .-'_/  )\ `"/  \  ) / |  | \ `'   /|  (_,_)\  | |   | |(_,_)    |   `-'  /      
 `-'`-'     /  '. \_/``".'  |  |  \    / |  |    |  | |   | |   |      \      /       
   `._____.'     '-----'    ''-'   `'-'  '--'    '--' '---' '---'       `-..-'        
                                                                                      

*/
var Vue, $, console, gbks; // @codekit-prepend "general/_storage.js"
// @codekit-prepend "data/_data.js"
// @codekit-prepend "data/_store.js"
// @codekit-prepend "data/_all-the-info.js"
// @codekit-prepend "data/_builder-parts.js"
// @codekit-prepend "data/_builder-slots.js"
// @codekit-prepend "data/_builder-templates.js"
// @codekit-prepend "data/builder/_body.js"
// @codekit-prepend "data/builder/_eyes.js"
// @codekit-prepend "data/builder/_alicorn.js"
// @codekit-prepend "data/builder/_background.js"
// @codekit-prepend "data/builder/_hooves.js"
// @codekit-prepend "data/builder/_hair-prop.js"
// @codekit-prepend "data/builder/_hair.js"
// @codekit-prepend "data/builder/_tail-prop.js"
// @codekit-prepend "data/builder/_tail.js"
// @codekit-prepend "data/builder/_mouth.js"
// @codekit-prepend "data/builder/_nose.js"
// @codekit-prepend "data/builder/_cheek.js"
// @codekit-prepend "data/builder/_head-pattern.js"
// @codekit-prepend "data/builder/_body-pattern.js"
// @codekit-prepend "data/builder/_body-prop.js"
// @codekit-prepend "data/builder/_body-prop-chest.js"
// @codekit-prepend "data/builder/_ears.js"
// @codekit-prepend "mixins/_id.js"
// @codekit-prepend "tools/_browser-extension.js"
// @codekit-prepend "tools/_chrome.js"
// @codekit-prepend "tools/_firefox.js"
// @codekit-prepend "tools/_ethereum.js"
// @codekit-prepend "general/_events.js"
// @codekit-prepend "general/_file-dropper.js"
// @codekit-prepend "general/_icons.js"
// @codekit-prepend "general/_scroller.js"
// @codekit-prepend "general/_scroll-effects.js"
// @codekit-prepend "general/_trackman.js"
// @codekit-prepend "general/_rainbow.js"
// @codekit-prepend "general/_effects.js"
// @codekit-prepend "general/_helpers.js"
// @codekit-prepend "data/_api.js"
// @codekit-prepend "data/_api-younicorns.js"
// @codekit-prepend "data/_api-lightning.js"
// 
// @codekit-prepend "components/general/_like-button.js"
// @codekit-prepend "components/general/_like-button-small.js"
// @codekit-prepend "components/general/_next-button.js"
// @codekit-prepend "components/general/_slider.js"
// @codekit-prepend "components/general/_slider-vertical.js"
// @codekit-prepend "components/general/_svg-multiline-text.js"
// @codekit-prepend "components/general/_svg-text.js"
// @codekit-prepend "components/general/_younicorn-list.js"
// @codekit-prepend "components/_site-nav.js"
// @codekit-prepend "components/_site-logo.js"
// @codekit-prepend "components/_site-top-bar.js"
// @codekit-prepend "components/_site-footer.js"
// @codekit-prepend "components/glitter/_heart.js"
// @codekit-prepend "components/glitter/_sparkle.js"
// @codekit-prepend "components/glitter/_glitter.js"
// @codekit-prepend "components/glitter/_text.js"
// @codekit-prepend "components/glitter/_motivate.js"
// @codekit-prepend "components/photo-editor/bottom-bar/_bottom-bar.js"
// @codekit-prepend "components/photo-editor/bottom-bar/_color-button.js"
// @codekit-prepend "components/photo-editor/bottom-bar/_cornify-button.js"
// @codekit-prepend "components/photo-editor/bottom-bar/_palette-color.js"
// @codekit-prepend "components/photo-editor/bottom-bar/_palette.js"
// @codekit-prepend "components/photo-editor/bottom-bar/_save-button.js"
// @codekit-prepend "components/photo-editor/top-bar/_back-button.js"
// @codekit-prepend "components/photo-editor/top-bar/_top-bar.js"
// @codekit-prepend "components/photo-editor/editor/_filter-list-item.js"
// @codekit-prepend "components/photo-editor/editor/_filter-list.js"
// @codekit-prepend "components/photo-editor/editor/_text.js"
// @codekit-prepend "components/photo-editor/editor/_unicorn-handle.js"
// @codekit-prepend "components/photo-editor/editor/_unicorn.js"
// @codekit-prepend "components/photo-editor/editor/_unicorns.js"
// @codekit-prepend "components/photo-editor/editor/_frame.js"
// @codekit-prepend "components/photo-editor/editor/_coloring.js"
// @codekit-prepend "components/photo-editor/editor/_photo-display.js"
// @codekit-prepend "components/photo-editor/success/_share-options.js"
// @codekit-prepend "components/photo-editor/success/_share-question.js"
// @codekit-prepend "components/photo-editor/success/_success.js"
// @codekit-prepend "components/photo-editor/upload/_upload-progress.js"
// @codekit-prepend "components/photo-editor/upload/_upload-prompt.js"
// @codekit-prepend "components/photo-editor/upload/_upload.js"
// @codekit-prepend "components/photo-editor/_photo-editor.js"
// @codekit-prepend "components/photo-editor/_composer.js"
// @codekit-prepend "components/photo-editor/_updater.js"
// @codekit-prepend "components/photo-editor/_saver.js"
// @codekit-prepend "components/builder/_editor.js"
// @codekit-prepend "components/builder/_success.js"
// @codekit-prepend "components/builder/_template.js"
// @codekit-prepend "components/builder/data/_saver.js"
// @codekit-prepend "components/builder/data/_updater.js"
// @codekit-prepend "components/builder/template/_template-list-item.js"
// @codekit-prepend "components/builder/template/_template-list.js"
// @codekit-prepend "components/builder/success/_name.js"
// @codekit-prepend "components/builder/success/_options.js"
// @codekit-prepend "components/builder/success/_privacy.js"
// @codekit-prepend "components/builder/success/_question.js"
// @codekit-prepend "components/builder/editor/_background.js"
// @codekit-prepend "components/builder/editor/_display-renderer.js"
// @codekit-prepend "components/builder/editor/_display.js"
// @codekit-prepend "components/builder/editor/_part-list-item.js"
// @codekit-prepend "components/builder/editor/_part-list.js"
// @codekit-prepend "components/builder/editor/_category-list-item-color.js"
// @codekit-prepend "components/builder/editor/_category-list-item-part.js"
// @codekit-prepend "components/builder/editor/_category-list-item.js"
// @codekit-prepend "components/builder/editor/_category-list.js"
// @codekit-prepend "components/builder/editor/_color-list-item.js"
// @codekit-prepend "components/builder/editor/_color-list.js"
// @codekit-prepend "components/builder/editor/color-picker/_color-picker.js"
// @codekit-prepend "components/builder/editor/color-picker/_palette-color.js"
// @codekit-prepend "components/builder/editor/color-picker/_palette.js"
// @codekit-prepend "components/builder/editor/color-picker/_spectrum-color.js"
// @codekit-prepend "components/builder/editor/color-picker/_spectrum-darkness.js"
// @codekit-prepend "components/builder/editor/color-picker/_spectrum.js"
// @codekit-prepend "components/coloring/bottom-bar/_bottom-bar.js"
// @codekit-prepend "components/coloring/bottom-bar/_color-button.js"
// @codekit-prepend "components/coloring/bottom-bar/_scale.js"
// @codekit-prepend "components/coloring/bottom-bar/_palette-color.js"
// @codekit-prepend "components/coloring/bottom-bar/_palette.js"
// @codekit-prepend "components/coloring/bottom-bar/_brush-button.js"
// @codekit-prepend "components/coloring/bottom-bar/_brushes-brush.js"
// @codekit-prepend "components/coloring/bottom-bar/_brushes.js"
// @codekit-prepend "components/coloring/bottom-bar/_save-button.js"
// @codekit-prepend "components/coloring/bottom-bar/_next-button.js"
// @codekit-prepend "components/coloring/bottom-bar/_pick-button.js"
// @codekit-prepend "components/coloring/bottom-bar/_size-button.js"
// @codekit-prepend "components/coloring/bottom-bar/_opacity-button.js"
// @codekit-prepend "components/coloring/top-bar/_back-button.js"
// @codekit-prepend "components/coloring/top-bar/_top-bar.js"
// @codekit-prepend "components/coloring/editor/_frame.js"
// @codekit-prepend "components/coloring/editor/_coloring.js"
// @codekit-prepend "components/coloring/editor/_template.js"
// @codekit-prepend "components/coloring/editor/_editor.js"
// @codekit-prepend "components/coloring/success/_share-options.js"
// @codekit-prepend "components/coloring/success/_share-question.js"
// @codekit-prepend "components/coloring/success/_success.js"
// @codekit-prepend "components/coloring/_composer.js"
// @codekit-prepend "components/coloring/_updater.js"
// @codekit-prepend "components/coloring/_saver.js"
// @codekit-prepend "components/home/_intro.js"
// @codekit-prepend "components/home/_button.js"
// @codekit-prepend "components/home/_unicorn-day.js"
// @codekit-prepend "components/home/_list-item-promo.js"
// @codekit-prepend "components/home/_list-item.js"
// @codekit-prepend "components/home/_list.js"
// @codekit-prepend "components/home/_promo-list-item.js"
// @codekit-prepend "components/home/_promo-list.js"
// @codekit-prepend "components/gallery/_pic.js"
// @codekit-prepend "components/gallery/_list-item.js"
// @codekit-prepend "components/gallery/_list.js"
// @codekit-prepend "components/gallery/_options.js"
// @codekit-prepend "components/quotes/_list-item.js"
// @codekit-prepend "components/quotes/_list.js"
// @codekit-prepend "components/quotes/_pagination.js"
// @codekit-prepend "components/gifts/_list-item.js"
// @codekit-prepend "components/gifts/_list.js"
// @codekit-prepend "components/gifts/_categories.js"
// @codekit-prepend "components/gifts/_details.js"
// @codekit-prepend "components/all-the-info/_list-item.js"
// @codekit-prepend "components/all-the-info/_list.js"
// @codekit-prepend "components/photo/_related-list-item.js"
// @codekit-prepend "components/photo/_related-list.js"
// @codekit-prepend "components/photo/_photo.js"
// @codekit-prepend "components/photo/_options.js"
// @codekit-prepend "components/younicorn/_related-list-item.js"
// @codekit-prepend "components/younicorn/_related-list.js"
// @codekit-prepend "components/younicorn/_background.js"
// @codekit-prepend "components/younicorn/_younicorn.js"
// @codekit-prepend "components/younicorn/_loader.js"
// @codekit-prepend "components/younicorn/_options.js"
// @codekit-prepend "components/younicorn/_products-item.js"
// @codekit-prepend "components/younicorn/_products.js"
// @codekit-prepend "components/younicorn/_pagination.js"
// @codekit-prepend "components/younicorn/_download-options-item-coloring.js"
// @codekit-prepend "components/younicorn/_download-options-item-portrait.js"
// @codekit-prepend "components/younicorn/_download-options-item.js"
// @codekit-prepend "components/younicorn/_download-options.js"
// @codekit-prepend "components/younicorn/_extension-button.js"
// @codekit-prepend "components/younicorns/_list-item-id.js"
// @codekit-prepend "components/younicorns/_list-item.js"
// @codekit-prepend "components/younicorns/_list.js"
// @codekit-prepend "components/younicorns/_no-favorites.js"
// @codekit-prepend "components/younicorns/_toggle.js"
// @codekit-prepend "components/younicorns/_info.js"
// @codekit-prepend "components/younicorns/_promo.js"
// @codekit-prepend "components/background/_site-background.js"
// @codekit-prepend "components/background/_blurry-image.js"
// @codekit-prepend "components/background/_scroll-color.js"
// @codekit-prepend "components/background/_solid-color.js"
// @codekit-prepend "components/background/_rainbow.js"
// @codekit-prepend "components/lightning/_default.js"
// @codekit-prepend "components/lightning/_info.js"
// @codekit-prepend "components/lightning/_invoice-card.js"
// @codekit-prepend "components/lightning/_invoice-details.js"
// @codekit-prepend "components/button/_button.js"
// @codekit-prepend "components/button/_bookmarklet.js"
// @codekit-prepend "components/button/_chrome.js"
// @codekit-prepend "components/button/_firefox.js"
// @codekit-prepend "components/button/_younicorns.js"
// @codekit-prepend "components/button/_browser.js"
// @codekit-prepend "components/button/_irl.js"
// @codekit-prepend "pages/_home.js"
// @codekit-prepend "pages/_about.js"
// @codekit-prepend "pages/_all-the-info.js"
// @codekit-prepend "pages/_builder.js"
// @codekit-prepend "pages/_button.js"
// @codekit-prepend "pages/_coloring.js"
// @codekit-prepend "pages/_gifts.js"
// @codekit-prepend "pages/_photo.js"
// @codekit-prepend "pages/_photo-editor.js"
// @codekit-prepend "pages/_quotes.js"
// @codekit-prepend "pages/_gallery.js"
// @codekit-prepend "pages/_install.js"
// @codekit-prepend "pages/_lightning.js"
// @codekit-prepend "pages/_uninstall.js"
// @codekit-prepend "pages/_younicorn.js"
// @codekit-prepend "pages/_younicorns.js"

var config = config || {};
var gbks = gbks || {};

gbks.Cornify = function () {
  this.init = function () {
    this.id = 'Cornify';
    this.log = !true;
    this.pageName = null;
    this.baseScrollOffset = Math.random();
    this.body = $('body');
    config.isDev = this.isDevServer();
    config.isGithub = this.isGithub();
    config.isMobile = $(window).width() < 640;
    config.isDesktop = $(window).width() >= 1024;
    config.isTablet = !config.isMobile && !config.isDesktop;
    config.isFirefox = navigator.userAgent.match("Firefox");
    config.history = config.isDev || config.isGithub ? 'hash' : 'history'; // config.history = 'hash';

    config.base = config.isDev ? '/' : '/';
    config.chromeExtensionId = config.isDev ? 'ijfegbmefbcdfbeampldmmphoifnahld' : 'ghdnfbmfflgelndafnlgabneckbmfpla';
    config.chromeExtensionId = 'ghdnfbmfflgelndafnlgabneckbmfpla';
    siteData.store.commit('updateMobile', config.isMobile);
    siteData.scroller = new gbks.Scroller();
    siteData.scroller.init();
    $(window).bind('resize', $.proxy(this.onResize, this)); // $(window).bind('scroll', $.proxy(this.onScroll, this));
    // var context = $('#rainbow canvas')[0].getContext('2d');
    // var rainbowCanvas = $('#rainbow');
    // this.rainbow = new gbks.cornify.RainbowCanvas();
    // this.rainbow.init(rainbowCanvas);
    // this.effects = new gbks.cornify.Effects();
    // this.effects.init();

    this.start();
    this.trackErrors(); // setInterval($.proxy(this.sparkle, this), 500);
  };

  this.trackErrors = function () {
    // Track basic JavaScript errors
    window.addEventListener('error', function (e) {
      trackman.event('js error', e.message, window.location.href + ':  ' + e.lineno);
    }); // Track AJAX errors (jQuery API)

    $(document).ajaxError(function (e, request, settings) {
      trackman.event('ajax error', settings.url, e.result);
    });
  };

  this.sparkle = function () {
    gbks.events.call('glitter-sparkle', {
      x: 100,
      y: 100
    });
  };

  this.start = function () {
    this.routes = [{
      path: '/',
      component: HomePage
    }, {
      path: '/page/:page',
      component: HomePage
    }, {
      path: '/cornify-a-photo',
      component: PhotoEditorPage
    }, {
      path: '/photo/:photoId',
      component: PhotoPage
    }, {
      path: '/photo',
      component: PhotoEditorPage
    }, {
      path: '/unicorn/:photoId',
      component: PhotoPage
    }, {
      path: '/unicorn-coloring',
      component: ColoringPage
    }, {
      path: '/coloring',
      component: ColoringPage
    }, {
      path: '/unicornpictures',
      component: GalleryPage
    }, {
      path: '/unicornpictures/:picId',
      component: GalleryPage
    }, {
      path: '/quotes',
      component: QuotesPage
    }, {
      path: '/quotes/:quoteId',
      component: QuotesPage
    }, {
      path: '/store',
      component: GiftsPage
    }, {
      path: '/store/:giftId',
      component: GiftsPage
    }, {
      path: '/about',
      component: AboutPage
    }, {
      path: '/extras',
      component: ButtonPage
    }, {
      path: '/button',
      component: ButtonPage
    }, {
      path: '/younicorn/:younicornId/:name',
      component: YounicornPage
    }, {
      path: '/younicorn/:younicornId',
      component: YounicornPage
    }, {
      path: '/bitcorn/:younicornId/:name',
      component: YounicornPage
    }, {
      path: '/bitcorn/:younicornId',
      component: YounicornPage
    }, {
      path: '/younicorn',
      component: BuilderPage
    }, {
      path: '/younicorns',
      component: YounicornsPage
    }, {
      path: '/all-the-info',
      component: AllTheInfoPage
    }, {
      path: '/install/:browser',
      component: InstallPage
    }, {
      path: '/uninstall/:browser',
      component: UninstallPage
    }, {
      path: '/bitcorn',
      component: LightningPage
    }, {
      path: '/corn/:photoId',
      component: PhotoPage
    }, // Legacy
    {
      path: '/pics',
      component: GalleryPage
    }, {
      path: '/pics/:picId',
      component: GalleryPage
    }, {
      path: '/gifts',
      component: GiftsPage
    }, {
      path: '/gifts/category/:categoryId',
      component: GiftsPage
    }, {
      path: '/gifts/category/:categoryId/:giftId',
      component: GiftsPage
    }, {
      path: '/gift/:giftId',
      component: GiftsPage
    }, {
      path: '*',
      component: HomePage
    }];
    this.router = new VueRouter({
      mode: config.history,
      routes: this.routes,
      base: config.base,
      data: {}
    });
    this.vue = new Vue({
      router: this.router,
      template: "\n                <div id=\"container\" class=\"-active\">\n                    <site-background />\n                    <site-top-bar />\n                    <div class=\"pages\" role=\"main\">\n                        <transition\n                            name=\"page-transition\"\n                            :duration=\"100\"\n                            mode=\"out-in\"\n                            v-on:after-leave=\"afterLeave\"\n                        >\n                            <router-view />\n                        </transition>\n                    </div>\n                    <site-footer />\n                    <glitter />\n                </div>\n            ",
      data: function data() {
        return {
          pageName: null
        };
      },
      watch: {
        $route: function $route(route) {
          // siteData.scroller.scrollToPosition(0);
          // this.updateMeta();
          trackman.page(route.path);
        }
      },
      beforeMount: function beforeMount() {
        gbks.events.listen(gbks.event.PageMounted, $.proxy(this.onPageMounted, this), this.id);
        this.loadData();
        var font = new FontFaceObserver('Comic Neue', {
          weight: 400
        });
        font.load().then(function () {
          // console.log('font loaded');
          gbks.events.call('font-loaded');
        }); // Check if a browser extension is installed.

        gbks.browser.extension.init(); // Test sending a message to the Chrome extension.
        // console.log('Looking for chrome', window.chrome);
        // if(window.chrome && window.chrome.runtime) {
        //     console.log('Checking if the chrome extension is installed', config.chromeExtensionId);
        //     window.chrome.runtime.sendMessage(config.chromeExtensionId, {
        //         type: 'installed'
        //     }, $.proxy(this.onChromeInstalledMessage, this));
        // }
      },
      methods: {
        onChromeInstalledMessage: function onChromeInstalledMessage(reply) {
          console.log('onChromeInstalledMessage', reply);

          if (reply) {
            if (reply.installed === true) {
              siteData.store.commit('updateChromeExtensionInstalled', true);
              chrome.runtime.sendMessage(config.chromeExtensionId, {
                type: 'getYounicorns'
              }, $.proxy(this.onChromeGetYounicorns, this));
            }
          }
        },
        onChromeGetYounicorns: function onChromeGetYounicorns(reply) {
          console.log('onChromeGetYounicorns', reply);

          if (reply.younicorns) {
            siteData.store.commit('updateBookmarkletYounicorns', reply.younicorns);
          }
        },
        loadData: function loadData() {
          $.ajax({
            url: config.base + 'data/sitedata.json',
            dataType: 'json',
            success: $.proxy(this.onLoadData, this),
            error: $.proxy(this.onLoadDataError, this)
          });
        },
        onLoadData: function onLoadData(data) {
          console.log('onLoadData', data);
          siteData.store.commit('updateData', data);

          if (this.pageName) {
            this.updateMeta();
          }
        },
        onLoadDataError: function onLoadDataError(data) {
          console.log('Main.onLoadDataError', data);
        },
        updateMeta: function updateMeta() {
          console.log('updateMeta', this.pageName);
          var pages = siteData.store.state.data ? siteData.store.state.data.pages : null;

          if (pages) {
            var contentId = this.pageName;

            for (var i = 0; i < pages.length; i++) {
              if (pages[i].id == contentId) {
                document.title = pages[i].name + ' | Cornify';
                break;
              }
            }
          }
        },
        onPageMounted: function onPageMounted(data) {
          var body = $('body');

          if (this.pageName) {
            body.removeClass('-' + this.pageName);
          }

          console.log('onPageMounted', data);
          this.pageName = data.pageName;
          body.addClass('-' + this.pageName);
          this.updateMeta();
        },
        afterLeave: function afterLeave() {
          window.scrollTo(0, 0);
        }
      }
    }).$mount('#container'); // this.onScroll();
  };

  this.onResize = function () {
    var windowWidth = $(window).width();
    config.isMobile = windowWidth < 640;
    siteData.store.commit('updateMobile', config.isMobile);
    config.isDesktop = windowWidth >= 1024;
    siteData.store.commit('updateDesktop', config.isDesktop);
    config.isTablet = !config.isMobile && !config.isDesktop;
    siteData.store.commit('updateTablet', config.isTablet);
    clearTimeout(this.resizeTimer);
    this.resizeTimer = setTimeout($.proxy(this.broadcastResize, this), 25);
  };

  this.broadcastResize = function () {
    siteData.store.commit('updateWindowWidth', $(window).width());
    siteData.store.commit('updateWindowHeight', $(window).height());
    gbks.events.call(gbks.event.Resize);
  };

  this.isDevServer = function () {
    var href = window.location.href;
    var isLocalhost = href.indexOf('localhost') !== -1;
    var isCodeKit = href.indexOf(':5757') !== -1;
    return isLocalhost || isCodeKit;
  };

  this.isGithub = function () {
    var href = window.location.href;
    return href.indexOf('.github.') !== -1;
  };
};

$(document).ready(function () {
  var instance = new gbks.Cornify();
  instance.init();
});

//# sourceMappingURL=site.js.map
