/*! For license information please see microsoft.eff2ee17a5a0076857c2.js.LICENSE.txt */
(self.homePageWebpackChunks=self.homePageWebpackChunks||[]).push([["microsoft"],{356:function(t,e,n){"use strict";n.d(e,{l:function(){return s}});var i=n(68136),r=n(97004);const{create:o}=i.G,s=o("base-layer-luminance",r.y.LightMode)},416:function(t,e,n){"use strict";n.d(e,{Y:function(){return a}});var i=n(96293),r=n(29194),o=n(10108);class s extends o.u{constructor(t){super(t),this.observerProperty=Symbol(),this.handleEvent=(t,e)=>{const n=e.target;this.updateTarget(this.getSource(n),this.computeNodes(n))},t.childList=!0}observe(t){let e=t[this.observerProperty];e||(e=new MutationObserver(this.handleEvent),e.toJSON=i.lQ,t[this.observerProperty]=e),e.target=t,e.observe(t,this.options)}disconnect(t){const e=t[this.observerProperty];e.target=null,e.disconnect()}getNodes(t){return"selector"in this.options?Array.from(t.querySelectorAll(this.options.selector)):Array.from(t.childNodes)}}function a(t){return(0,i.Kg)(t)&&(t={property:t}),new s(t)}r.dg.define(s)},2202:function(t){t.exports='<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4.09 4.22l.06-.07a.5.5 0 01.63-.06l.07.06L10 9.29l5.15-5.14a.5.5 0 01.63-.06l.07.06c.18.17.2.44.06.63l-.06.07L10.71 10l5.14 5.15c.18.17.2.44.06.63l-.06.07a.5.5 0 01-.63.06l-.07-.06L10 10.71l-5.15 5.14a.5.5 0 01-.63.06l-.07-.06a.5.5 0 01-.06-.63l.06-.07L9.29 10 4.15 4.85a.5.5 0 01-.06-.63l.06-.07-.06.07z"></path></svg>'},2298:function(t,e,n){"use strict";function i(...t){return t.every(t=>t instanceof HTMLElement)}function r(t,e){if(!t||!e||!i(t))return;return Array.from(t.querySelectorAll(e)).filter(t=>null!==t.offsetParent)}n.d(e,{JL:function(){return r},sb:function(){return i}})},2958:function(t,e,n){"use strict";n.d(e,{m:function(){return Y}});var i=n(56911),r=n(22870),o=n(74849),s=n(22131),a=n(50882),c=n(92011),u=n(60815),l=n(38493),h=n(96950),d=n(64187),f=n(57606),p=n(5291),v=n(95239),g=n(48751),b=n(61201),m=n(31023),y=n(74838),w=n(72691),$=n(57416),x=n(26920),k=n(79288),C=n(62047),S=n(61138),E=n(41123),M=n(89580),F=n(71157),D=n(62198),O=n(37079),A=n(68136);const{create:T}=A.G,I=T("type-ramp-plus-5-font-size","32px"),B=T("type-ramp-plus-5-line-height","40px"),{create:N}=A.G,R=N("type-ramp-plus-6-font-size","40px"),L=N("type-ramp-plus-6-line-height","52px");var j=n(35901),P=n(90757),z=n(37947),H=n(17252),_=n(47691),V=n(14205),U=n(8315),W=n(356),q=n(6352),G=n(43404),K=n(37180);const X={toView:t=>null==t?null:t?.toColorString(),fromView(t){if(null==t)return null;const e=(0,r.Hs)(t);return e?p.q.create(e.r,e.g,e.b):null}},J=o.A`
    :host {
        background-color: ${v.p};
        color: ${g.l};
    }
`.withBehaviors((0,s.mr)(o.A`
            :host {
                background-color: ${a.A.Canvas};
                box-shadow: 0 0 0 1px ${a.A.CanvasText};
                color: ${a.A.CanvasText};
            }
        `));function Z(t){return(e,n)=>{e[n+"Changed"]=function(e,n){null!=n?t.setValueFor(this,n):t.deleteValueFor(this)}}}class Q extends c.L{constructor(){super(),this.noPaint=!1,u.cP.getNotifier(this).subscribe({handleChange:this.noPaintChanged.bind(this)},"fillColor")}noPaintChanged(){this.noPaint||void 0===this.fillColor?this.$fastController.removeStyles(J):this.$fastController.addStyles(J)}accentBaseColorChanged(t,e){null!=e?b.c.setValueFor(this,f.p.create(e)):b.c.deleteValueFor(this)}neutralBaseColorChanged(t,e){null!=e?m.r.setValueFor(this,f.p.create(e)):m.r.deleteValueFor(this)}}(0,i.Cg)([(0,l.CF)({attribute:"no-paint",mode:"boolean"}),(0,i.Sn)("design:type",Object)],Q.prototype,"noPaint",void 0),(0,i.Cg)([(0,l.CF)({attribute:"fill-color",converter:X}),Z(v.p),(0,i.Sn)("design:type",Object)],Q.prototype,"fillColor",void 0),(0,i.Cg)([(0,l.CF)({attribute:"accent-base-color",converter:X,mode:"fromView"}),(0,i.Sn)("design:type",Object)],Q.prototype,"accentBaseColor",void 0),(0,i.Cg)([(0,l.CF)({attribute:"neutral-base-color",converter:X,mode:"fromView"}),(0,i.Sn)("design:type",Object)],Q.prototype,"neutralBaseColor",void 0),(0,i.Cg)([u.sH,Z(m.r),(0,i.Sn)("design:type",Object)],Q.prototype,"neutralPalette",void 0),(0,i.Cg)([u.sH,Z(b.c),(0,i.Sn)("design:type",Object)],Q.prototype,"accentPalette",void 0),(0,i.Cg)([(0,l.CF)({converter:l.R$}),Z(y.Br),(0,i.Sn)("design:type",Number)],Q.prototype,"density",void 0),(0,i.Cg)([(0,l.CF)({attribute:"design-unit",converter:l.R$}),Z(y.vR),(0,i.Sn)("design:type",Number)],Q.prototype,"designUnit",void 0),(0,i.Cg)([(0,l.CF)({attribute:"direction"}),Z(w.o),(0,i.Sn)("design:type",String)],Q.prototype,"direction",void 0),(0,i.Cg)([(0,l.CF)({attribute:"base-height-multiplier",converter:l.R$}),Z(y.Ss),(0,i.Sn)("design:type",Number)],Q.prototype,"baseHeightMultiplier",void 0),(0,i.Cg)([(0,l.CF)({attribute:"base-horizontal-spacing-multiplier",converter:l.R$}),Z(y.a9),(0,i.Sn)("design:type",Number)],Q.prototype,"baseHorizontalSpacingMultiplier",void 0),(0,i.Cg)([(0,l.CF)({attribute:"control-corner-radius",converter:l.R$}),Z($.Pb),(0,i.Sn)("design:type",Number)],Q.prototype,"controlCornerRadius",void 0),(0,i.Cg)([(0,l.CF)({attribute:"stroke-width",converter:l.R$}),Z(x.XA),(0,i.Sn)("design:type",Number)],Q.prototype,"strokeWidth",void 0),(0,i.Cg)([(0,l.CF)({attribute:"focus-stroke-width",converter:l.R$}),Z(x.vd),(0,i.Sn)("design:type",Number)],Q.prototype,"focusStrokeWidth",void 0),(0,i.Cg)([(0,l.CF)({attribute:"disabled-opacity",converter:l.R$}),Z(k.q),(0,i.Sn)("design:type",Number)],Q.prototype,"disabledOpacity",void 0),(0,i.Cg)([(0,l.CF)({attribute:"type-ramp-minus-2-font-size"}),Z(C.t),(0,i.Sn)("design:type",String)],Q.prototype,"typeRampMinus2FontSize",void 0),(0,i.Cg)([(0,l.CF)({attribute:"type-ramp-minus-2-line-height"}),Z(C.e),(0,i.Sn)("design:type",String)],Q.prototype,"typeRampMinus2LineHeight",void 0),(0,i.Cg)([(0,l.CF)({attribute:"type-ramp-minus-1-font-size"}),Z(S.k),(0,i.Sn)("design:type",String)],Q.prototype,"typeRampMinus1FontSize",void 0),(0,i.Cg)([(0,l.CF)({attribute:"type-ramp-minus-1-line-height"}),Z(S.F),(0,i.Sn)("design:type",String)],Q.prototype,"typeRampMinus1LineHeight",void 0),(0,i.Cg)([(0,l.CF)({attribute:"type-ramp-base-font-size"}),Z(E.K),(0,i.Sn)("design:type",String)],Q.prototype,"typeRampBaseFontSize",void 0),(0,i.Cg)([(0,l.CF)({attribute:"type-ramp-base-line-height"}),Z(E.Z),(0,i.Sn)("design:type",String)],Q.prototype,"typeRampBaseLineHeight",void 0),(0,i.Cg)([(0,l.CF)({attribute:"type-ramp-plus-1-font-size"}),Z(M.Y),(0,i.Sn)("design:type",String)],Q.prototype,"typeRampPlus1FontSize",void 0),(0,i.Cg)([(0,l.CF)({attribute:"type-ramp-plus-1-line-height"}),Z(M.v),(0,i.Sn)("design:type",String)],Q.prototype,"typeRampPlus1LineHeight",void 0),(0,i.Cg)([(0,l.CF)({attribute:"type-ramp-plus-2-font-size"}),Z(F.T),(0,i.Sn)("design:type",String)],Q.prototype,"typeRampPlus2FontSize",void 0),(0,i.Cg)([(0,l.CF)({attribute:"type-ramp-plus-2-line-height"}),Z(F.O),(0,i.Sn)("design:type",String)],Q.prototype,"typeRampPlus2LineHeight",void 0),(0,i.Cg)([(0,l.CF)({attribute:"type-ramp-plus-3-font-size"}),Z(D.a),(0,i.Sn)("design:type",String)],Q.prototype,"typeRampPlus3FontSize",void 0),(0,i.Cg)([(0,l.CF)({attribute:"type-ramp-plus-3-line-height"}),Z(D.b),(0,i.Sn)("design:type",String)],Q.prototype,"typeRampPlus3LineHeight",void 0),(0,i.Cg)([(0,l.CF)({attribute:"type-ramp-plus-4-font-size"}),Z(O.F),(0,i.Sn)("design:type",String)],Q.prototype,"typeRampPlus4FontSize",void 0),(0,i.Cg)([(0,l.CF)({attribute:"type-ramp-plus-4-line-height"}),Z(O.w),(0,i.Sn)("design:type",String)],Q.prototype,"typeRampPlus4LineHeight",void 0),(0,i.Cg)([(0,l.CF)({attribute:"type-ramp-plus-5-font-size"}),Z(I),(0,i.Sn)("design:type",String)],Q.prototype,"typeRampPlus5FontSize",void 0),(0,i.Cg)([(0,l.CF)({attribute:"type-ramp-plus-5-line-height"}),Z(B),(0,i.Sn)("design:type",String)],Q.prototype,"typeRampPlus5LineHeight",void 0),(0,i.Cg)([(0,l.CF)({attribute:"type-ramp-plus-6-font-size"}),Z(R),(0,i.Sn)("design:type",String)],Q.prototype,"typeRampPlus6FontSize",void 0),(0,i.Cg)([(0,l.CF)({attribute:"type-ramp-plus-6-line-height"}),Z(L),(0,i.Sn)("design:type",String)],Q.prototype,"typeRampPlus6LineHeight",void 0),(0,i.Cg)([(0,l.CF)({attribute:"accent-fill-rest-delta",converter:l.R$}),Z(j.yz),(0,i.Sn)("design:type",Number)],Q.prototype,"accentFillRestDelta",void 0),(0,i.Cg)([(0,l.CF)({attribute:"accent-fill-hover-delta",converter:l.R$}),Z(j.MA),(0,i.Sn)("design:type",Number)],Q.prototype,"accentFillHoverDelta",void 0),(0,i.Cg)([(0,l.CF)({attribute:"accent-fill-active-delta",converter:l.R$}),Z(j.uP),(0,i.Sn)("design:type",Number)],Q.prototype,"accentFillActiveDelta",void 0),(0,i.Cg)([(0,l.CF)({attribute:"accent-fill-focus-delta",converter:l.R$}),Z(j._S),(0,i.Sn)("design:type",Number)],Q.prototype,"accentFillFocusDelta",void 0),(0,i.Cg)([(0,l.CF)({attribute:"accent-foreground-rest-delta",converter:l.R$}),Z(P.kw),(0,i.Sn)("design:type",Number)],Q.prototype,"accentForegroundRestDelta",void 0),(0,i.Cg)([(0,l.CF)({attribute:"accent-foreground-hover-delta",converter:l.R$}),Z(P.CX),(0,i.Sn)("design:type",Number)],Q.prototype,"accentForegroundHoverDelta",void 0),(0,i.Cg)([(0,l.CF)({attribute:"accent-foreground-active-delta",converter:l.R$}),Z(P.mD),(0,i.Sn)("design:type",Number)],Q.prototype,"accentForegroundActiveDelta",void 0),(0,i.Cg)([(0,l.CF)({attribute:"accent-foreground-focus-delta",converter:l.R$}),Z(P.em),(0,i.Sn)("design:type",Number)],Q.prototype,"accentForegroundFocusDelta",void 0),(0,i.Cg)([(0,l.CF)({attribute:"neutral-fill-rest-delta",converter:l.R$}),Z(z.DE),(0,i.Sn)("design:type",Number)],Q.prototype,"neutralFillRestDelta",void 0),(0,i.Cg)([(0,l.CF)({attribute:"neutral-fill-hover-delta",converter:l.R$}),Z(z.l2),(0,i.Sn)("design:type",Number)],Q.prototype,"neutralFillHoverDelta",void 0),(0,i.Cg)([(0,l.CF)({attribute:"neutral-fill-active-delta",converter:l.R$}),Z(z.L6),(0,i.Sn)("design:type",Number)],Q.prototype,"neutralFillActiveDelta",void 0),(0,i.Cg)([(0,l.CF)({attribute:"neutral-fill-focus-delta",converter:l.R$}),Z(z.tN),(0,i.Sn)("design:type",Number)],Q.prototype,"neutralFillFocusDelta",void 0),(0,i.Cg)([(0,l.CF)({attribute:"neutral-fill-input-rest-delta",converter:l.R$}),Z(H.DZ),(0,i.Sn)("design:type",Number)],Q.prototype,"neutralFillInputRestDelta",void 0),(0,i.Cg)([(0,l.CF)({attribute:"neutral-fill-input-hover-delta",converter:l.R$}),Z(H.nK),(0,i.Sn)("design:type",Number)],Q.prototype,"neutralFillInputHoverDelta",void 0),(0,i.Cg)([(0,l.CF)({attribute:"neutral-fill-input-active-delta",converter:l.R$}),Z(H.xK),(0,i.Sn)("design:type",Number)],Q.prototype,"neutralFillInputActiveDelta",void 0),(0,i.Cg)([(0,l.CF)({attribute:"neutral-fill-input-focus-delta",converter:l.R$}),Z(H.dc),(0,i.Sn)("design:type",Number)],Q.prototype,"neutralFillInputFocusDelta",void 0),(0,i.Cg)([(0,l.CF)({attribute:"neutral-fill-layer-rest-delta",converter:l.R$}),Z(_.E),(0,i.Sn)("design:type",Number)],Q.prototype,"neutralFillLayerRestDelta",void 0),(0,i.Cg)([(0,l.CF)({attribute:"neutral-fill-stealth-rest-delta",converter:l.R$}),Z(V.q),(0,i.Sn)("design:type",Number)],Q.prototype,"neutralFillStealthRestDelta",void 0),(0,i.Cg)([(0,l.CF)({attribute:"neutral-fill-stealth-hover-delta",converter:l.R$}),Z(V.oj),(0,i.Sn)("design:type",Number)],Q.prototype,"neutralFillStealthHoverDelta",void 0),(0,i.Cg)([(0,l.CF)({attribute:"neutral-fill-stealth-active-delta",converter:l.R$}),Z(V.Ws),(0,i.Sn)("design:type",Number)],Q.prototype,"neutralFillStealthActiveDelta",void 0),(0,i.Cg)([(0,l.CF)({attribute:"neutral-fill-stealth-focus-delta",converter:l.R$}),Z(V.Mc),(0,i.Sn)("design:type",Number)],Q.prototype,"neutralFillStealthFocusDelta",void 0),(0,i.Cg)([(0,l.CF)({attribute:"neutral-fill-strong-hover-delta",converter:l.R$}),Z(U.YO),(0,i.Sn)("design:type",Number)],Q.prototype,"neutralFillStrongHoverDelta",void 0),(0,i.Cg)([(0,l.CF)({attribute:"neutral-fill-strong-active-delta",converter:l.R$}),Z(U.WF),(0,i.Sn)("design:type",Number)],Q.prototype,"neutralFillStrongActiveDelta",void 0),(0,i.Cg)([(0,l.CF)({attribute:"neutral-fill-strong-focus-delta",converter:l.R$}),Z(U.k7),(0,i.Sn)("design:type",Number)],Q.prototype,"neutralFillStrongFocusDelta",void 0),(0,i.Cg)([(0,l.CF)({attribute:"base-layer-luminance",converter:l.R$}),Z(W.l),(0,i.Sn)("design:type",Number)],Q.prototype,"baseLayerLuminance",void 0),(0,i.Cg)([(0,l.CF)({attribute:"neutral-stroke-divider-rest-delta",converter:l.R$}),Z(q.X),(0,i.Sn)("design:type",Number)],Q.prototype,"neutralStrokeDividerRestDelta",void 0),(0,i.Cg)([(0,l.CF)({attribute:"neutral-stroke-rest-delta",converter:l.R$}),Z(G.uC),(0,i.Sn)("design:type",Number)],Q.prototype,"neutralStrokeRestDelta",void 0),(0,i.Cg)([(0,l.CF)({attribute:"neutral-stroke-hover-delta",converter:l.R$}),Z(G.iS),(0,i.Sn)("design:type",Number)],Q.prototype,"neutralStrokeHoverDelta",void 0),(0,i.Cg)([(0,l.CF)({attribute:"neutral-stroke-active-delta",converter:l.R$}),Z(G.C2),(0,i.Sn)("design:type",Number)],Q.prototype,"neutralStrokeActiveDelta",void 0),(0,i.Cg)([(0,l.CF)({attribute:"neutral-stroke-focus-delta",converter:l.R$}),Z(G.Q2),(0,i.Sn)("design:type",Number)],Q.prototype,"neutralStrokeFocusDelta",void 0);const Y=Q.compose({name:`${K.c.prefix}-design-system-provider`,template:h.qy`
        <slot></slot>
    `,styles:o.A`
        ${(0,d.V)("block")}
    `})},4126:function(t,e,n){"use strict";n.d(e,{o:function(){return r}});var i=n(60815);class r{constructor(t,e,n){this.propertyName=t,this.value=e,this.styles=n}addedCallback(t){i.cP.getNotifier(t.source).subscribe(this,this.propertyName),this.handleChange(t.source,this.propertyName)}removedCallback(t){i.cP.getNotifier(t.source).unsubscribe(this,this.propertyName),t.removeStyles(this.styles)}handleChange(t,e){const n=t.$fastController;t[e]===this.value?n.addStyles(this.styles):n.removeStyles(this.styles)}}},4283:function(t,e,n){"use strict";n.d(e,{am:function(){return p},KJ:function(){return v},OS:function(){return f},IR:function(){return d}});var i=n(68136);var r=n(95239),o=n(37947),s=n(31023),a=n(35901),c=n(61201),u=n(57065);const{create:l}=i.G,h=l({name:"accent-fill-recipe"},{evaluate:(t,e)=>(u.i.normal,(t,e)=>function(t,e,n,i,r,o){const s=t.source,a=t.closestIndexOf(s),c=a+1*i,u=a+1*r,l=a+1*o;return{rest:t.get(a),hover:t.get(c),active:t.get(u),focus:t.get(l)}}(t(c.c),t(s.r),e||t(r.p),t(a.MA),t(a.uP),t(a._S),t(o.DE),t(o.l2),t(o.L6)))(t,e)}),d=l("accent-fill-rest",t=>t(h).evaluate(t).rest),f=l("accent-fill-hover",t=>t(h).evaluate(t).hover),p=l("accent-fill-active",t=>t(h).evaluate(t).active),v=l("accent-fill-focus",t=>t(h).evaluate(t).focus)},4731:function(t,e,n){"use strict";n.d(e,{m:function(){return a}});var i=n(37180),r=n(56063),o=n(69128),s=n(41817);const a=r.b.compose({name:`${i.c.prefix}-button`,template:s.v,styles:o.R,shadowOptions:{delegatesFocus:!0}})},5096:function(t,e,n){"use strict";function i(t,e,n){return n<t?e:n>e?t:n}function r(t,e,n){return Math.min(Math.max(n,t),e)}function o(t,e,n=0){return[e,n]=[e,n].sort((t,e)=>t-e),e<=t&&t<n}n.d(e,{AB:function(){return r},Vf:function(){return i},r4:function(){return o}})},5291:function(t,e,n){"use strict";n.d(e,{q:function(){return s}});var i=n(14848),r=n(87122),o=n(87989);const s=Object.freeze({create:(t,e,n)=>new a(t,e,n),from:t=>new a(t.r,t.g,t.b)});class a extends r.M{constructor(t,e,n){super(t,e,n,1),this.toColorString=this.toStringHexRGB,this.contrast=o.v.bind(null,this),this.createCSS=this.toColorString,this.relativeLuminance=(0,i.Z8)(this)}static fromObject(t){return new a(t.r,t.g,t.b)}}},5410:function(t,e,n){"use strict";n.d(e,{Ds:function(){return z},Fc:function(){return H},Hm:function(){return A},Q3:function(){return B},So:function(){return R},Ym:function(){return N},ee:function(){return P},oS:function(){return V},sq:function(){return _},vF:function(){return U}});var i=n(14777),r=n(58625),o=n(88383),s=n(62044),a=n(89449),c="on",u="attachEvent",l="addEventListener",h="detachEvent",d="removeEventListener",f="events",p="visibilitychange",v="pagehide",g="pageshow",b="unload",m="beforeunload",y=(0,r.Z)("aiEvtPageHide"),w=(0,r.Z)("aiEvtPageShow"),$=/\.[\.]+/g,x=/[\.]+$/,k=1,C=(0,r.T)("events"),S=/^([^.]*)(?:\.(.+)|)/;function E(t){return t&&t[i.W7]?t[i.W7](/^[\s\.]+|(?=[\s\.])[\.\s]+$/g,a.m5):t}function M(t,e){var n;if(e){var r=a.m5;(0,s.cy)(e)?(r=a.m5,(0,s.Iu)(e,function(t){(t=E(t))&&("."!==t[0]&&(t="."+t),r+=t)})):r=E(e),r&&("."!==r[0]&&(r="."+r),t=(t||a.m5)+r)}var o=S.exec(t||a.m5)||[];return(n={})[i.QM]=o[1],n.ns=(o[2]||a.m5).replace($,".").replace(x,a.m5)[i.sY](".").sort().join("."),n}function F(t,e,n){void 0===n&&(n=!0);var i=C.get(t,f,{},n),r=i[e];return r||(r=i[e]=[]),r}function D(t,e,n,r){t&&e&&e[i.QM]&&(t[d]?t[d](e[i.QM],n,r):t[h]&&t[h](c+e[i.QM],n))}function O(t,e,n,r){for(var o=e[i.oI];o--;){var s=e[o];s&&(n.ns&&n.ns!==s.evtName.ns||r&&!r(s)||(D(t,s.evtName,s[i.Yo],s.capture),e[i.Ic](o,1)))}}function A(t,e){return e?M("xx",(0,s.cy)(e)?[t].concat(e):[t,e]).ns[i.sY]("."):t}function T(t,e,n,r,o){var s;void 0===o&&(o=!1);var a=!1;if(t)try{var h=M(e,r);if(a=function(t,e,n,r){var o=!1;return t&&e&&e[i.QM]&&n&&(t[l]?(t[l](e[i.QM],n,r),o=!0):t[u]&&(t[u](c+e[i.QM],n),o=!0)),o}(t,h,n,o),a&&C.accept(t)){var d=((s={guid:k++,evtName:h})[i.Yo]=n,s.capture=o,s);F(t,h.type)[i.y5](d)}}catch(t){}return a}function I(t,e,n,r,o){if(void 0===o&&(o=!1),t)try{var a=M(e,r),c=!1;!function(t,e,n){if(e[i.QM])O(t,F(t,e[i.QM]),e,n);else{var r=C.get(t,f,{});(0,s.z)(r,function(i,r){O(t,r,e,n)}),0===(0,s.cG)(r)[i.oI]&&C.kill(t,f)}}(t,a,function(t){return!((!a.ns||n)&&t[i.Yo]!==n)&&(c=!0,!0)}),c||D(t,a,n,o)}catch(t){}}function B(t,e,n,i){return void 0===i&&(i=!1),T(t,e,n,null,i)}function N(t,e,n,i){void 0===i&&(i=!1),I(t,e,n,null,i)}function R(t,e,n){var i=!1,r=(0,o.zk)();r&&(i=T(r,t,e,n),i=T(r.body,t,e,n)||i);var s=(0,o.YE)();return s&&(i=T(s,t,e,n)||i),i}function L(t,e,n,r){var o=!1;return e&&t&&t[i.oI]>0&&(0,s.Iu)(t,function(t){t&&(n&&-1!==(0,s.rD)(n,t)||(o=R(t,e,r)||o))}),o}function j(t,e,n){t&&(0,s.cy)(t)&&(0,s.Iu)(t,function(t){t&&function(t,e,n){var i=(0,o.zk)();i&&(I(i,t,e,n),I(i.body,t,e,n));var r=(0,o.YE)();r&&I(r,t,e,n)}(t,e,n)})}function P(t,e,n){return function(t,e,n,r){var o=!1;return e&&t&&(0,s.cy)(t)&&!(o=L(t,e,n,r))&&n&&n[i.oI]>0&&(o=L(t,e,null,r)),o}([m,b,v],t,e,n)}function z(t,e){j([m,b,v],t,e)}function H(t,e,n){var i=A(y,n),r=L([v],t,e,i);return e&&-1!==(0,s.rD)(e,p)||(r=L([p],function(e){var n=(0,o.YE)();t&&n&&"hidden"===n.visibilityState&&t(e)},e,i)||r),!r&&e&&(r=H(t,null,n)),r}function _(t,e){var n=A(y,e);j([v],t,n),j([p],null,n)}function V(t,e,n){var i=A(w,n),r=L([g],t,e,i);return!(r=L([p],function(e){var n=(0,o.YE)();t&&n&&"visible"===n.visibilityState&&t(e)},e,i)||r)&&e&&(r=V(t,null,n)),r}function U(t,e){var n=A(w,e);j([g],t,n),j([p],null,n)}},5793:function(t,e,n){"use strict";n.d(e,{A:function(){return l}});var i=n(56911),r=n(60815),o=n(23429),s=n(38493),a=n(55230),c=n(5096),u=n(17884);class l extends u.U{constructor(){super(...arguments),this.activeIndex=-1,this.rangeStartIndex=-1}get activeOption(){return this.options[this.activeIndex]}get checkedOptions(){return this.options?.filter(t=>t.checked)}get firstSelectedOptionIndex(){return this.options.indexOf(this.firstSelectedOption)}activeIndexChanged(t,e){this.ariaActiveDescendant=this.options[e]?.id??"",this.focusAndScrollOptionIntoView()}checkActiveIndex(){if(!this.multiple)return;const t=this.activeOption;t&&(t.checked=!0)}checkFirstOption(t=!1){t?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex+1),this.options.forEach((t,e)=>{t.checked=(0,c.r4)(e,this.rangeStartIndex)})):this.uncheckAllOptions(),this.activeIndex=0,this.checkActiveIndex()}checkLastOption(t=!1){t?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex),this.options.forEach((t,e)=>{t.checked=(0,c.r4)(e,this.rangeStartIndex,this.options.length)})):this.uncheckAllOptions(),this.activeIndex=this.options.length-1,this.checkActiveIndex()}connectedCallback(){super.connectedCallback(),this.addEventListener("focusout",this.focusoutHandler)}disconnectedCallback(){this.removeEventListener("focusout",this.focusoutHandler),super.disconnectedCallback()}checkNextOption(t=!1){t?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex),this.options.forEach((t,e)=>{t.checked=(0,c.r4)(e,this.rangeStartIndex,this.activeIndex+1)})):this.uncheckAllOptions(),this.activeIndex+=this.activeIndex<this.options.length-1?1:0,this.checkActiveIndex()}checkPreviousOption(t=!1){t?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex),1===this.checkedOptions.length&&(this.rangeStartIndex+=1),this.options.forEach((t,e)=>{t.checked=(0,c.r4)(e,this.activeIndex,this.rangeStartIndex)})):this.uncheckAllOptions(),this.activeIndex-=this.activeIndex>0?1:0,this.checkActiveIndex()}clickHandler(t){if(!this.multiple)return super.clickHandler(t);const e=t.target?.closest("[role=option]");return e&&!e.disabled?(this.uncheckAllOptions(),this.activeIndex=this.options.indexOf(e),this.checkActiveIndex(),this.toggleSelectedForAllCheckedOptions(),!0):void 0}focusAndScrollOptionIntoView(){super.focusAndScrollOptionIntoView(this.activeOption)}focusinHandler(t){if(!this.multiple)return super.focusinHandler(t);this.shouldSkipFocus||t.target!==t.currentTarget||(this.uncheckAllOptions(),-1===this.activeIndex&&(this.activeIndex=-1!==this.firstSelectedOptionIndex?this.firstSelectedOptionIndex:0),this.checkActiveIndex(),this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}focusoutHandler(t){this.multiple&&this.uncheckAllOptions()}keydownHandler(t){if(!this.multiple)return super.keydownHandler(t);if(this.disabled)return!0;const{key:e,shiftKey:n}=t;switch(this.shouldSkipFocus=!1,e){case a.kE:return void this.checkFirstOption(n);case a.HX:return void this.checkNextOption(n);case a.I5:return void this.checkPreviousOption(n);case a.FM:return void this.checkLastOption(n);case a.J9:return this.focusAndScrollOptionIntoView(),!0;case a.F9:return this.uncheckAllOptions(),this.checkActiveIndex(),!0;case a.gG:if(t.preventDefault(),this.typeAheadExpired)return void this.toggleSelectedForAllCheckedOptions();default:return 1===e.length&&this.handleTypeAhead(`${e}`),!0}}mousedownHandler(t){if(t.offsetX>=0&&t.offsetX<=this.scrollWidth)return super.mousedownHandler(t)}multipleChanged(t,e){this.ariaMultiSelectable=e?"true":null,this.options?.forEach(t=>{t.checked=!e&&void 0}),this.setSelectedOptions()}setSelectedOptions(){this.multiple?this.$fastController.isConnected&&this.options&&(this.selectedOptions=this.options.filter(t=>t.selected),this.focusAndScrollOptionIntoView()):super.setSelectedOptions()}sizeChanged(t,e){const n=Math.max(0,parseInt(e?.toFixed()??"",10));n!==e&&o.L.enqueue(()=>{this.size=n})}toggleSelectedForAllCheckedOptions(){const t=this.checkedOptions.filter(t=>!t.disabled),e=!t.every(t=>t.selected);t.forEach(t=>t.selected=e),this.selectedIndex=this.options.indexOf(t[t.length-1]),this.setSelectedOptions()}typeaheadBufferChanged(t,e){if(this.multiple){if(this.$fastController.isConnected){const t=this.getTypeaheadMatches(),e=this.options.indexOf(t[0]);e>-1&&(this.activeIndex=e,this.uncheckAllOptions(),this.checkActiveIndex()),this.typeAheadExpired=!1}}else super.typeaheadBufferChanged(t,e)}uncheckAllOptions(t=!1){this.options.forEach(t=>t.checked=!this.multiple&&void 0),t||(this.rangeStartIndex=-1)}}(0,i.Cg)([r.sH,(0,i.Sn)("design:type",Number)],l.prototype,"activeIndex",void 0),(0,i.Cg)([(0,s.CF)({mode:"boolean"}),(0,i.Sn)("design:type",Boolean)],l.prototype,"multiple",void 0),(0,i.Cg)([(0,s.CF)({converter:s.R$}),(0,i.Sn)("design:type",Number)],l.prototype,"size",void 0)},5926:function(t,e,n){"use strict";n.d(e,{A:function(){return A}});var i=n(39813),r=n(58207),o=n(20468),s=n(88383),a=n(50090),c=n(14777),u=n(62044),l=n(89449),h=n(6608),d=n(39407),f=500;function p(t,e,n){e&&(0,u.cy)(e)&&e[c.oI]>0&&(e=e.sort(function(t,e){return t[l.Vo]-e[l.Vo]}),(0,u.Iu)(e,function(t){t[l.Vo]<f&&(0,u.$8)("Channel has invalid priority - "+t[c.Ju])}),t[c.y5]({queue:(0,u.N6)(e),chain:(0,h.PV)(e,n[c.GA],n)}))}var v=n(12839),g=n(58625),b=n(53894),m=n(13765),y=function(t){function e(){var n,i,a=t.call(this)||this;function h(){n=0,i=[]}return a.identifier="TelemetryInitializerPlugin",a.priority=199,h(),(0,r.A)(e,a,function(t,e){t.addTelemetryInitializer=function(t){var e={id:n++,fn:t};return i[c.y5](e),{remove:function(){(0,u.Iu)(i,function(t,n){if(t.id===e.id)return i[c.Ic](n,1),-1})}}},t[l.qT]=function(e,n){for(var r=!1,a=i[c.oI],l=0;l<a;++l){var h=i[l];if(h)try{if(!1===h.fn[c.y9](null,[e])){r=!0;break}}catch(t){(0,o.ZP)(n[c.e4](),1,64,"One of telemetry initializers failed, telemetry item will not be sent: "+(0,u.lL)(t),{exception:(0,s.mm)(t)},!0)}}r||t[c.$5](e,n)},t[c.tn]=function(){h()}}),a}return(0,i.qU)(e,t),e.__ieDyn=1,e}(n(58168).s),w=n(13023),$="Plugins must provide initialize method",x="_notificationManager",k="SDK is still unloading...",C={loggingLevelConsole:1};function S(t,e){return new m.NS(e)}function E(t,e){var n=!1;return(0,u.Iu)(e,function(e){if(e===t)return n=!0,-1}),n}var M=function(){function t(){var e,n,s,M,F,D,O,A,T,I,B,N,R,L,j,P,z,H,_,V,U=0;(0,r.A)(t,this,function(t){function r(){n=!1,e=(0,u.CP)(!0,{},C),t[c.GA]=e,t[c.Uw]=new o.wq(e),t[c.H7]=[],j=new y,s=[],M=null,F=null,D=null,O=null,A=null,I=null,T=[],B=null,N=null,R=null,L=!1,P=null,z=(0,g.Z)("AIBaseCore",!0),H=(0,w.P)(),V=null}function W(){return(0,h.i8)(K(),e,t)}function q(n){var i=function(t,e,n){var i,r=[],s={};return(0,u.Iu)(n,function(n){((0,u.hX)(n)||(0,u.hX)(n[c.mE]))&&(0,u.$8)($);var i=n[l.Vo],a=n[c.Ju];n&&i&&((0,u.hX)(s[i])?s[i]=a:(0,o.OG)(t,"Two extensions have same priority #"+i+" - "+s[i]+", "+a)),(!i||i<e)&&r[c.y5](n)}),(i={all:n})[l.eT]=r,i}(t[c.Uw],f,T);I=i[l.eT],A=null;var r=i.all;if(R=(0,u.N6)(function(t,e,n){var i=[];if(t&&(0,u.Iu)(t,function(t){return p(i,t,n)}),e){var r=[];(0,u.Iu)(e,function(t){t[l.Vo]>f&&r[c.y5](t)}),p(i,r,n)}return i}(N,r,t)),B){var s=(0,u.rD)(r,B);-1!==s&&r[c.Ic](s,1),-1!==(s=(0,u.rD)(I,B))&&I[c.Ic](s,1),B._setQueue(R)}else B=function(t,e){function n(){return(0,h.i8)(null,e[c.GA],e,null)}function i(t,e,n,i){var r=t?t[c.oI]+1:1;function o(){0===--r&&(i&&i(),i=null)}r>0&&(0,u.Iu)(t,function(t){if(t&&t.queue[c.oI]>0){var i=t.chain,s=e[c.$o](i);s[c.by](o),n(s)}else r--}),o()}var r=!1,o={identifier:"ChannelControllerPlugin",priority:f,initialize:function(e,n,i,o){r=!0,(0,u.Iu)(t,function(t){t&&t.queue[c.oI]>0&&(0,d.pI)((0,h.i8)(t.chain,e,n),i)})},isInitialized:function(){return r},processTelemetry:function(e,r){i(t,r||n(),function(t){t[c.$5](e)},function(){r[c.$5](e)})},update:function(e,n){var r=n||{reason:0};return i(t,e,function(t){t[c.$5](r)},function(){e[c.$5](r)}),!0},pause:function(){i(t,n(),function(t){t.iterate(function(t){t.pause&&t.pause()})},null)},resume:function(){i(t,n(),function(t){t.iterate(function(t){t.resume&&t.resume()})},null)},teardown:function(e,n){var o=n||{reason:0,isAsync:!1};return i(t,e,function(t){t[c.$5](o)},function(){e[c.$5](o),r=!1}),!0},getChannel:function(e){var n=null;return t&&t[c.oI]>0&&(0,u.Iu)(t,function(t){if(t&&t.queue[c.oI]>0&&((0,u.Iu)(t.queue,function(t){if(t[c.Ju]===e)return n=t,-1}),n))return-1}),n},flush:function(e,r,o,s){var a=1,u=!1,l=null;function h(){a--,u&&0===a&&(l&&(clearTimeout(l),l=null),r&&r(u),r=null)}return s=s||5e3,i(t,n(),function(t){t.iterate(function(t){if(t[c.EX]){a++;var n=!1;t[c.EX](e,function(){n=!0,h()},o)||n||(e&&null==l?l=setTimeout(function(){l=null,h()},s):h())}})},function(){u=!0,h()}),!0},_setQueue:function(e){t=e}};return o}(R,t);r[c.y5](B),I[c.y5](B),t[c.H7]=(0,d.Xc)(r),B[c.mE](e,t,r),(0,d.pI)(W(),r),t[c.H7]=(0,u.N6)((0,d.Xc)(I||[])).slice(),n&&function(e){var n=(0,h.nU)(K(),t);t._updateHook&&!0===t._updateHook(n,e)||n[c.$5](e)}(n)}function G(e){var n,i=null,r=null;return(0,u.Iu)(t[c.H7],function(t){if(t[c.Ju]===e&&t!==B&&t!==j)return r=t,-1}),!r&&B&&(r=B.getChannel(e)),r&&((n={plugin:r})[c.kt]=function(t){(0,d.Cr)(r)[l.Hr]=!t},n.isEnabled=function(){var t=(0,d.Cr)(r);return!t[c.Ik]&&!t[l.Hr]},n.remove=function(t,e){var n;void 0===t&&(t=!0);var i=[r],o=((n={reason:1})[c.tI]=t,n);X(i,o,function(t){t&&q({reason:32,removed:i}),e&&e(t)})},i=n),i}function K(){if(!A){var n=(I||[]).slice();-1===(0,u.rD)(n,j)&&n[c.y5](j),A=(0,h.PV)((0,d.Xc)(n),e,t)}return A}function X(n,i,r){if(n&&n[c.oI]>0){var o=(0,h.PV)(n,e,t),s=(0,h.tS)(o,t);s[c.by](function(){var t=!1,e=[];(0,u.Iu)(T,function(i,r){E(i,n)?t=!0:e[c.y5](i)}),T=e;var i=[];N&&((0,u.Iu)(N,function(e,r){var o=[];(0,u.Iu)(e,function(e){E(e,n)?t=!0:o[c.y5](e)}),i[c.y5](o)}),N=i),r&&r(t)}),s[c.$5](i)}else r(!1)}function J(){var n=t[c.Uw]?t[c.Uw].queue:[];n&&((0,u.Iu)(n,function(n){var i,r=((i={})[c.RS]=P||"InternalMessageId: "+n[c.JR],i.iKey=(0,u.SA)(e[c.sl]),i.time=(0,u._u)(new Date),i.baseType=o.WD.dataType,i.baseData={message:n[c.pM]},i);t.track(r)}),n[c.oI]=0)}function Z(t,e,n,i){return B?B[c.EX](t,e,n||6,i):(e&&e(!1),!0)}function Q(e){var n=t[c.Uw];n?(0,o.ZP)(n,2,73,e):(0,u.$8)(e)}r(),t[c.tZ]=function(){return n},t[c.mE]=function(r,o,s,a){L&&(0,u.$8)(k),t[c.tZ]()&&(0,u.$8)("Core should not be initialized more than once"),e=r||{},t[c.GA]=e,(0,u.hX)(r[c.sl])&&(0,u.$8)("Please provide instrumentation key"),M=a,t[x]=a,function(){var t=(0,u.SA)(e.disableDbgExt);!0===t&&_&&(M[c.TP](_),_=null);M&&!_&&!0!==t&&(_=(0,b.M)(e),M[c.vR](_))}(),function(){var t=(0,u.SA)(e.enablePerfMgr);!t&&D&&(D=null);t&&(0,u.c2)(e,l.Yd,S)}(),(0,u.c2)(e,l.Bw,{}).NotificationManager=M,s&&(t[c.Uw]=s);var h=(0,u.c2)(e,l.jy,[]);(T=[])[c.y5].apply(T,(0,i.vz)((0,i.vz)([],o,!1),h,!1)),N=(0,u.c2)(e,l.LZ,[]),q(null),R&&0!==R[c.oI]||(0,u.$8)("No "+l.LZ+" available"),n=!0,t.releaseQueue()},t.getTransmissionControls=function(){var t=[];return R&&(0,u.Iu)(R,function(e){t[c.y5](e.queue)}),(0,u.N6)(t)},t.track=function(n){n.iKey=n.iKey||e[c.sl],n[c.fA]=n[c.fA]||(0,u._u)(new Date),n.ver=n.ver||"4.0",!L&&t[c.tZ]()?W()[c.$5](n):s[c.y5](n)},t[c.ps]=W,t[c.RF]=function(){var e;return M||(M=(0,a.AQ)(((e={})[c.vR]=function(t){},e[c.TP]=function(t){},e[l.fc]=function(t){},e[l.Yp]=function(t,e){},e[l.dI]=function(t,e){},e)),t[x]=M),M},t[c.vR]=function(t){M&&M[c.vR](t)},t[c.TP]=function(t){M&&M[c.TP](t)},t.getCookieMgr=function(){return O||(O=(0,v.xN)(e,t[c.Uw])),O},t.setCookieMgr=function(t){O=t},t[l.kI]=function(){if(!F&&!D&&(0,u.SA)(e.enablePerfMgr)){var n=(0,u.SA)(e[l.Yd]);(0,u.Tn)(n)&&(D=n(t,t[c.RF]()))}return F||D||(0,m.Z4)()},t.setPerfMgr=function(t){F=t},t.eventCnt=function(){return s[c.oI]},t.releaseQueue=function(){if(n&&s[c.oI]>0){var t=s;s=[],(0,u.Iu)(t,function(t){W()[c.$5](t)})}},t.pollInternalLogs=function(t){P=t||null;var n=(0,u.SA)(e.diagnosticLogInterval);return n&&n>0||(n=1e4),U&&clearInterval(U),U=setInterval(function(){J()},n)},t[c.Di]=function(){U&&(clearInterval(U),U=0,J())},(0,u.o$)(t,function(){return j},["addTelemetryInitializer"]),t.unload=function(e,i,o){var s;void 0===e&&(e=!0),n||(0,u.$8)("SDK is not initialized"),L&&(0,u.$8)(k);var a=((s={reason:50})[c.tI]=e,s.flushComplete=!1,s),l=(0,h.tS)(K(),t);function d(e){a.flushComplete=e,L=!0,H.run(l,a),t[c.Di](),l[c.$5](a)}l[c.by](function(){r(),i&&i(a)},t),Z(e,d,6,o)||d(!1)},t[c.AP]=G,t.addPlugin=function(t,e,n,i){if(!t)return i&&i(!1),void Q($);var r=G(t[c.Ju]);if(r&&!e)return i&&i(!1),void Q("Plugin ["+t[c.Ju]+"] is already loaded!");var o={reason:16};function s(e){T[c.y5](t),o.added=[t],q(o),i&&i(!0)}if(r){var a=[r.plugin];X(a,{reason:2,isAsync:!!n},function(t){t?(o.removed=a,o.reason|=32,s()):i&&i(!1)})}else s()},t.evtNamespace=function(){return z},t[c.EX]=Z,t.getTraceCtx=function(t){return V||(V=(0,d.u7)()),V},t.setTraceCtx=function(t){V=t||null},(0,u.RF)(t,"addUnloadCb",function(){return H},"add")})}return t.__ieDyn=1,t}(),F=n(18622),D=n(99577),O=function(t){function e(){var n=t.call(this)||this;return(0,r.A)(e,n,function(t,e){t.initialize=function(n,i,r,a){n&&!n.endpointUrl&&(n.endpointUrl=F.S),t.getWParam=function(){return D.g8||n.enableWParam?0:-1};try{e.initialize(n,i,r,a)}catch(e){(0,o.ZP)(t.logger,1,514,"Initialization Failed: "+(0,s.mm)(e)+"\n - Note: Channels must be provided through config.channels only")}},t.track=function(t){var n=t;if(n){var i=n.ext=n.ext||{};i.sdk=i.sdk||{},i.sdk.ver=D.xE}e.track(n)}}),n}return(0,i.qU)(e,t),e.__ieDyn=1,e}(M),A=O},6352:function(t,e,n){"use strict";n.d(e,{X:function(){return o}});var i=n(68136);const{create:r}=i.G,o=r("neutral-stroke-divider-rest-delta",8)},6608:function(t,e,n){"use strict";n.d(e,{PV:function(){return m},i8:function(){return v},nU:function(){return b},tS:function(){return g}});var i=n(14777),r=n(20468),o=n(88383),s=n(62044),a=n(89449),c=n(13765),u=n(39407),l="TelemetryPluginChain",h="_hasRun",d="_getTelCtx",f=0;function p(t,e,n,c){var u=null,l=[];null!==c&&(u=c?function(t,e,n){for(;t;){if(t[i.AP]()===n)return t;t=t[i.uR]()}return m([n],e[i.GA]||{},e)}(t,n,c):t);var h={_next:function(){var t=u;if(u=t?t[i.uR]():null,!t){var e=l;e&&e[i.oI]>0&&((0,s.Iu)(e,function(t){try{t.func[i.Ek](t.self,t.args)}catch(t){(0,r.ZP)(n[i.Uw],2,73,"Unexpected Exception during onComplete - "+(0,o.mm)(t))}}),l=[])}return t},ctx:{core:function(){return n},diagLog:function(){return(0,r.y0)(n,e)},getCfg:function(){return e},getExtCfg:d,getConfig:function(t,n,i){void 0===i&&(i=!1);var r,o=d(t,null);o&&!(0,s.hX)(o[n])?r=o[n]:e&&!(0,s.hX)(e[n])&&(r=e[n]);return(0,s.hX)(r)?i:r},hasNext:function(){return!!u},getNext:function(){return u},setNext:function(t){u=t},iterate:function(t){var e;for(;e=h._next();){var n=e[i.AP]();n&&t(n)}},onComplete:function(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];t&&l[i.y5]({func:t,self:(0,s.b0)(e)?h.ctx:e,args:n})}}};function d(t,n,i){var r;if(void 0===n&&(n={}),void 0===i&&(i=0),e){var o=e[a.Bw];o&&t&&(r=o[t])}if(r){if((0,s.Gv)(n)&&0!==i){var c=(0,s.CP)(!0,n,r);e&&2===i&&(0,s.z)(n,function(t){if((0,s.hX)(c[t])){var n=e[t];(0,s.hX)(n)||(c[t]=n)}}),r=c}}else r=n;return r}return h}function v(t,e,n,r){var o=p(t,e,n,r),c=o.ctx;return c[i.$5]=function(t){var e=o._next();return e&&e[a.qT](t,c),!e},c[i.$o]=function(t,r){return void 0===t&&(t=null),(0,s.cy)(t)&&(t=m(t,e,n,r)),v(t||c[i.uR](),e,n,r)},c}function g(t,e,n){var r=e[i.GA]||{},o=p(t,r,e,n),a=o.ctx;return a[i.$5]=function(t){var e=o._next();return e&&e.unload(a,t),!e},a[i.$o]=function(t,n){return void 0===t&&(t=null),(0,s.cy)(t)&&(t=m(t,r,e,n)),g(t||a[i.uR](),e,n)},a}function b(t,e,n){var r=e[i.GA]||{},o=p(t,r,e,n).ctx;return o[i.$5]=function(t){return o.iterate(function(e){(0,s.Tn)(e[i.HC])&&e[i.HC](o,t)})},o[i.$o]=function(t,n){return void 0===t&&(t=null),(0,s.cy)(t)&&(t=m(t,r,e,n)),b(t||o[i.uR](),e,n)},o}function m(t,e,n,p){var g=null,b=!p;if((0,s.cy)(t)&&t[i.oI]>0){var y=null;(0,s.Iu)(t,function(t){if(b||p!==t||(b=!0),b&&t&&(0,s.Tn)(t[a.qT])){var m=function(t,e,n){var p,g=null,b=(0,s.Tn)(t[a.qT]),m=(0,s.Tn)(t[i.YH]);p=t?t[i.Ju]+"-"+t[a.Vo]+"-"+f++:"Unknown-0-"+f++;var y={getPlugin:function(){return t},getNext:function(){return g},processTelemetry:x,unload:k,update:C,_id:p,_setNext:function(t){g=t}};function w(){var i;return t&&(0,s.Tn)(t[d])&&(i=t[d]()),i||(i=v(y,e,n)),i}function $(e,n,s,u,d){var f=!1,v=t?t[i.Ju]:l,b=e[h];return b||(b=e[h]={}),e.setNext(g),t&&(0,c.r2)(e[a.eT](),function(){return v+":"+s},function(){b[p]=!0;try{var t=g?g._id:a.m5;t&&(b[t]=!1),f=n(e)}catch(t){var c=!g||b[g._id];c&&(f=!0),g&&c||(0,r.ZP)(e[i.e4](),1,73,"Plugin ["+v+"] failed during "+s+" - "+(0,o.mm)(t)+", run flags: "+(0,o.mm)(b))}},u,d),f}function x(e,n){function r(n){if(!t||!b)return!1;var r=(0,u.Cr)(t);return!r[i.Ik]&&!r[a.Hr]&&(m&&t[i.YH](g),t[a.qT](e,n),!0)}$(n=n||w(),r,"processTelemetry",function(){return{item:e}},!e.sync)||n[i.$5](e)}function k(e,n){function r(){var r=!1;if(t){var o=(0,u.Cr)(t),s=t[a.eT]||o[a.eT];!t||s&&s!==e.core()||o[i.Ik]||(o[a.eT]=null,o[i.Ik]=!0,o[i.tZ]=!1,t[i.Ik]&&!0===t[i.Ik](e,n)&&(r=!0))}return r}$(e,r,"unload",function(){},n[i.tI])||e[i.$5](n)}function C(e,n){function r(){var r=!1;if(t){var o=(0,u.Cr)(t),s=t[a.eT]||o[a.eT];!t||s&&s!==e.core()||o[i.Ik]||t[i.HC]&&!0===t[i.HC](e,n)&&(r=!0)}return r}$(e,r,"update",function(){},!1)||e[i.$5](n)}return(0,s.N6)(y)}(t,e,n);g||(g=m),y&&y._setNext(m),y=m}})}return p&&!g?m([p],e,n):g}},6711:function(t,e,n){"use strict";n.d(e,{$P:function(){return c},DE:function(){return u},FX:function(){return a},L6:function(){return h},Mc:function(){return b},SL:function(){return f},Ws:function(){return g},l2:function(){return l},li:function(){return y},oR:function(){return o},oj:function(){return v},pW:function(){return m},q:function(){return p},ro:function(){return s},tN:function(){return d},vY:function(){return w}});var i=n(55609);function r(t){return e=>e&&void 0!==e[t]?e[t]:i.Ay[t]}const o=r("backgroundColor"),s=(r("accentBaseColor"),r("cornerRadius"),r("elevatedCornerRadius"),r("neutralPalette")),a=(r("accentPalette"),r("contrast"),r("designUnit"),r("baseHeightMultiplier"),r("baseHorizontalSpacingMultiplier"),r("direction"),r("outlineWidth")),c=r("focusOutlineWidth"),u=(r("disabledOpacity"),r("accentFillRestDelta"),r("accentFillHoverDelta"),r("accentFillActiveDelta"),r("accentFillFocusDelta"),r("accentFillSelectedDelta"),r("accentForegroundRestDelta"),r("accentForegroundHoverDelta"),r("accentForegroundActiveDelta"),r("accentForegroundFocusDelta"),r("neutralFillRestDelta")),l=r("neutralFillHoverDelta"),h=r("neutralFillActiveDelta"),d=r("neutralFillFocusDelta"),f=r("neutralFillSelectedDelta"),p=(r("neutralFillInputRestDelta"),r("neutralFillInputHoverDelta"),r("neutralFillInputActiveDelta"),r("neutralFillInputFocusDelta"),r("neutralFillInputSelectedDelta"),r("neutralFillStealthRestDelta")),v=r("neutralFillStealthHoverDelta"),g=r("neutralFillStealthActiveDelta"),b=r("neutralFillStealthFocusDelta"),m=r("neutralFillStealthSelectedDelta"),y=(r("neutralFillToggleHoverDelta"),r("neutralFillToggleActiveDelta"),r("neutralFillToggleFocusDelta"),r("baseLayerLuminance")),w=r("neutralFillCardDelta");r("neutralForegroundDarkIndex"),r("neutralForegroundLightIndex"),r("neutralForegroundHoverDelta"),r("neutralForegroundActiveDelta"),r("neutralForegroundFocusDelta"),r("neutralDividerRestDelta"),r("neutralOutlineRestDelta"),r("neutralOutlineHoverDelta"),r("neutralOutlineActiveDelta"),r("fontWeight"),r("neutralOutlineFocusDelta")},7040:function(t,e,n){"use strict";n.d(e,{Tk:function(){return m},dR:function(){return y},k6:function(){return w},pq:function(){return $}});var i,r,o,s=n(76989),a=n(87122),c=n(37820),u=n(6711),l=n(67860),h=n(24642);function d(t,e){return n=>-1===(0,u.li)(n)?e(n):t(n)}!function(t){t[t.L1=0]="L1",t[t.L1Alt=3]="L1Alt",t[t.L2=10]="L2",t[t.L3=13]="L3",t[t.L4=16]="L4"}(i||(i={})),function(t){t[t.L1=76]="L1",t[t.L1Alt=76]="L1Alt",t[t.L2=79]="L2",t[t.L3=82]="L3",t[t.L4=85]="L4"}(r||(r={})),function(t){t[t.LightMode=1]="LightMode",t[t.DarkMode=.23]="DarkMode"}(o||(o={}));const f=(0,l.F7)(u.ro,t=>{const e=(0,u.li)(t);return new a.M(e,e,e,1).toStringHexRGB()}),p=t=>(0,c.qE)((0,s.Re)(f,u.vY)(t),0,(0,u.ro)(t).length-1),v=(0,h.el)(u.DE,u.l2,u.L6),g=(0,h.el)((0,s.WQ)(f,u.vY),v),b=t=>{const e=.14,n=new a.M(e,e,e,1);return(0,l.F7)(u.ro,n.toStringHexRGB())(t)},m=(0,h.kT)(d((0,l.FD)((0,s.Re)(p,u.vY),u.ro),(0,l.jK)(u.ro)(0,(0,s.Re)(b,(0,s.lw)(u.vY,5))))),y=(0,h.kT)(d((0,l.FD)(p,u.ro),(0,l.jK)(u.ro)(0,(0,s.Re)(b,(0,s.lw)(u.vY,4))))),w=(0,h.kT)(d((0,l.FD)((0,s.WQ)(p,u.vY),u.ro),(0,l.jK)(u.ro)(u.vY,(0,s.Re)(b,(0,s.lw)(u.vY,3))))),$=((0,h.kT)(d((0,l.FD)(f,u.ro),(0,l.jK)(u.ro)(0,(0,s.Re)(b,(0,s.lw)(u.vY,3))))),(0,h.kT)(d((0,l.FD)(g,u.ro),(0,l.jK)(u.ro)(v,(0,s.Re)(b,(0,s.lw)(u.vY,2))))),(0,h.kT)(d((0,l.FD)((0,s.WQ)(g,u.vY),u.ro),(0,l.jK)(u.ro)((0,s.WQ)(v,u.vY),(0,s.Re)(b,u.vY)))),(0,h.kT)(d((0,l.FD)((0,s.WQ)(g,(0,s.lw)(u.vY,2)),u.ro),(0,l.jK)(u.ro)((0,s.WQ)(v,(0,s.lw)(u.vY,2)),b))))},7511:function(t,e,n){"use strict";n.d(e,{I:function(){return h},_:function(){return l}});var i=n(56911),r=n(60815),o=n(92011),s=n(38493),a=n(29025),c=n(35106),u=n(88458);class l extends o.L{constructor(){super(...arguments),this.handleUnsupportedDelegatesFocus=()=>{window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&this.$fastController.definition.shadowOptions?.delegatesFocus&&(this.focus=()=>{this.control.focus()})}}connectedCallback(){super.connectedCallback(),this.handleUnsupportedDelegatesFocus()}}(0,i.Cg)([s.CF,(0,i.Sn)("design:type",String)],l.prototype,"download",void 0),(0,i.Cg)([s.CF,(0,i.Sn)("design:type",String)],l.prototype,"href",void 0),(0,i.Cg)([s.CF,(0,i.Sn)("design:type",String)],l.prototype,"hreflang",void 0),(0,i.Cg)([s.CF,(0,i.Sn)("design:type",String)],l.prototype,"ping",void 0),(0,i.Cg)([s.CF,(0,i.Sn)("design:type",String)],l.prototype,"referrerpolicy",void 0),(0,i.Cg)([s.CF,(0,i.Sn)("design:type",String)],l.prototype,"rel",void 0),(0,i.Cg)([s.CF,(0,i.Sn)("design:type",String)],l.prototype,"target",void 0),(0,i.Cg)([s.CF,(0,i.Sn)("design:type",String)],l.prototype,"type",void 0),(0,i.Cg)([r.sH,(0,i.Sn)("design:type",Array)],l.prototype,"defaultSlottedContent",void 0);class h{}(0,i.Cg)([(0,s.CF)({attribute:"aria-expanded"}),(0,i.Sn)("design:type",Object)],h.prototype,"ariaExpanded",void 0),(0,u.X)(h,a.z),(0,u.X)(l,c.qw,h)},7813:function(t,e,n){"use strict";n.d(e,{I:function(){return d}});var i=n(96293),r=n(60815),o=n(19470),s=n(81263),a=n(38493);const c={mode:"open"},u={},l=new Set,h=o.Zx.getById(i.uL.elementRegistry,()=>(0,o.Mg)());class d{constructor(t,e=t.definition){var n;this.platformDefined=!1,(0,i.Kg)(e)&&(e={name:e}),this.type=t,this.name=e.name,this.template=e.template,this.registry=null!==(n=e.registry)&&void 0!==n?n:customElements;const o=t.prototype,l=a.O1.collect(t,e.attributes),d=new Array(l.length),f={},p={};for(let t=0,e=l.length;t<e;++t){const e=l[t];d[t]=e.attribute,f[e.name]=e,p[e.attribute]=e,r.cP.defineProperty(o,e)}Reflect.defineProperty(t,"observedAttributes",{value:d,enumerable:!0}),this.attributes=l,this.propertyLookup=f,this.attributeLookup=p,this.shadowOptions=void 0===e.shadowOptions?c:null===e.shadowOptions?void 0:{...c,...e.shadowOptions},this.elementOptions=void 0===e.elementOptions?u:{...u,...e.elementOptions},this.styles=s.v.normalize(e.styles),h.register(this)}get isDefined(){return this.platformDefined}define(t=this.registry){const e=this.type;return t.get(this.name)||(this.platformDefined=!0,t.define(this.name,e,this.elementOptions)),this}static compose(t,e){return l.has(t)||h.getByType(t)?new d(class extends t{},e):new d(t,e)}static registerBaseType(t){l.add(t)}}d.getByType=h.getByType,d.getForInstance=h.getForInstance},7896:function(t,e,n){"use strict";n.d(e,{O:function(){return o}});var i=n(68136);const{create:r}=i.G,o=r("body-font","Segoe UI, Segoe UI Midlevel, sans-serif")},7927:function(t,e,n){"use strict";n.d(e,{m:function(){return b}});var i=n(56911),r=n(92011),o=n(23429),s=n(38493),a=n(60815),c=n(31157),u=n(73473),l=n(42938);class h extends r.L{constructor(){super(...arguments),this.anchor="",this.viewport="",this.horizontalPositioningMode="uncontrolled",this.horizontalDefaultPosition="unset",this.horizontalViewportLock=!1,this.horizontalInset=!1,this.horizontalScaling="content",this.verticalPositioningMode="uncontrolled",this.verticalDefaultPosition="unset",this.verticalViewportLock=!1,this.verticalInset=!1,this.verticalScaling="content",this.fixedPlacement=!1,this.autoUpdateMode="anchor",this.anchorElement=null,this.viewportElement=null,this.initialLayoutComplete=!1,this.resizeDetector=null,this.baseHorizontalOffset=0,this.baseVerticalOffset=0,this.pendingPositioningUpdate=!1,this.pendingReset=!1,this.currentDirection=c.O.ltr,this.regionVisible=!1,this.forceUpdate=!1,this.updateThreshold=.5,this.update=()=>{this.pendingPositioningUpdate||this.requestPositionUpdates()},this.startObservers=()=>{this.stopObservers(),null!==this.anchorElement&&(this.requestPositionUpdates(),null!==this.resizeDetector&&(this.resizeDetector.observe(this.anchorElement),this.resizeDetector.observe(this)))},this.requestPositionUpdates=()=>{null===this.anchorElement||this.pendingPositioningUpdate||(h.intersectionService.requestPosition(this,this.handleIntersection),h.intersectionService.requestPosition(this.anchorElement,this.handleIntersection),null!==this.viewportElement&&h.intersectionService.requestPosition(this.viewportElement,this.handleIntersection),this.pendingPositioningUpdate=!0)},this.stopObservers=()=>{this.pendingPositioningUpdate&&(this.pendingPositioningUpdate=!1,h.intersectionService.cancelRequestPosition(this,this.handleIntersection),null!==this.anchorElement&&h.intersectionService.cancelRequestPosition(this.anchorElement,this.handleIntersection),null!==this.viewportElement&&h.intersectionService.cancelRequestPosition(this.viewportElement,this.handleIntersection)),null!==this.resizeDetector&&this.resizeDetector.disconnect()},this.getViewport=()=>{if("string"!=typeof this.viewport||""===this.viewport)return document.documentElement;const t=this.getRootNode();return t instanceof ShadowRoot?t.getElementById(this.viewport):document.getElementById(this.viewport)},this.getAnchor=()=>{const t=this.getRootNode();return t instanceof ShadowRoot?t.getElementById(this.anchor):document.getElementById(this.anchor)},this.handleIntersection=t=>{this.pendingPositioningUpdate&&(this.pendingPositioningUpdate=!1,this.applyIntersectionEntries(t)&&this.updateLayout())},this.applyIntersectionEntries=t=>{const e=t.find(t=>t.target===this),n=t.find(t=>t.target===this.anchorElement),i=t.find(t=>t.target===this.viewportElement);return void 0!==e&&void 0!==i&&void 0!==n&&(!!(!this.regionVisible||this.forceUpdate||void 0===this.regionRect||void 0===this.anchorRect||void 0===this.viewportRect||this.isRectDifferent(this.anchorRect,n.boundingClientRect)||this.isRectDifferent(this.viewportRect,i.boundingClientRect)||this.isRectDifferent(this.regionRect,e.boundingClientRect))&&(this.regionRect=e.boundingClientRect,this.anchorRect=n.boundingClientRect,this.viewportElement===document.documentElement?this.viewportRect=new DOMRectReadOnly(i.boundingClientRect.x+document.documentElement.scrollLeft,i.boundingClientRect.y+document.documentElement.scrollTop,i.boundingClientRect.width,i.boundingClientRect.height):this.viewportRect=i.boundingClientRect,this.updateRegionOffset(),this.forceUpdate=!1,!0))},this.updateRegionOffset=()=>{this.anchorRect&&this.regionRect&&(this.baseHorizontalOffset=this.baseHorizontalOffset+(this.anchorRect.left-this.regionRect.left)+(this.translateX-this.baseHorizontalOffset),this.baseVerticalOffset=this.baseVerticalOffset+(this.anchorRect.top-this.regionRect.top)+(this.translateY-this.baseVerticalOffset))},this.isRectDifferent=(t,e)=>Math.abs(t.top-e.top)>this.updateThreshold||Math.abs(t.right-e.right)>this.updateThreshold||Math.abs(t.bottom-e.bottom)>this.updateThreshold||Math.abs(t.left-e.left)>this.updateThreshold,this.handleResize=t=>{this.update()},this.reset=()=>{this.pendingReset&&(this.pendingReset=!1,null===this.anchorElement&&(this.anchorElement=this.getAnchor()),null===this.viewportElement&&(this.viewportElement=this.getViewport()),this.currentDirection=(0,l.u)(this),this.startObservers())},this.updateLayout=()=>{let t,e;if("uncontrolled"!==this.horizontalPositioningMode){const t=this.getPositioningOptions(this.horizontalInset);if("center"===this.horizontalDefaultPosition)e="center";else if("unset"!==this.horizontalDefaultPosition){let t=this.horizontalDefaultPosition;if("start"===t||"end"===t){const e=(0,l.u)(this);if(e!==this.currentDirection)return this.currentDirection=e,void this.initialize();t=this.currentDirection===c.O.ltr?"start"===t?"left":"right":"start"===t?"right":"left"}switch(t){case"left":e=this.horizontalInset?"insetStart":"start";break;case"right":e=this.horizontalInset?"insetEnd":"end"}}const n=void 0!==this.horizontalThreshold?this.horizontalThreshold:void 0!==this.regionRect?this.regionRect.width:0,i=void 0!==this.anchorRect?this.anchorRect.left:0,r=void 0!==this.anchorRect?this.anchorRect.right:0,o=void 0!==this.anchorRect?this.anchorRect.width:0,s=void 0!==this.viewportRect?this.viewportRect.left:0,a=void 0!==this.viewportRect?this.viewportRect.right:0;(void 0===e||"locktodefault"!==this.horizontalPositioningMode&&this.getAvailableSpace(e,i,r,o,s,a)<n)&&(e=this.getAvailableSpace(t[0],i,r,o,s,a)>this.getAvailableSpace(t[1],i,r,o,s,a)?t[0]:t[1])}if("uncontrolled"!==this.verticalPositioningMode){const e=this.getPositioningOptions(this.verticalInset);if("center"===this.verticalDefaultPosition)t="center";else if("unset"!==this.verticalDefaultPosition)switch(this.verticalDefaultPosition){case"top":t=this.verticalInset?"insetStart":"start";break;case"bottom":t=this.verticalInset?"insetEnd":"end"}const n=void 0!==this.verticalThreshold?this.verticalThreshold:void 0!==this.regionRect?this.regionRect.height:0,i=void 0!==this.anchorRect?this.anchorRect.top:0,r=void 0!==this.anchorRect?this.anchorRect.bottom:0,o=void 0!==this.anchorRect?this.anchorRect.height:0,s=void 0!==this.viewportRect?this.viewportRect.top:0,a=void 0!==this.viewportRect?this.viewportRect.bottom:0;(void 0===t||"locktodefault"!==this.verticalPositioningMode&&this.getAvailableSpace(t,i,r,o,s,a)<n)&&(t=this.getAvailableSpace(e[0],i,r,o,s,a)>this.getAvailableSpace(e[1],i,r,o,s,a)?e[0]:e[1])}const n=this.getNextRegionDimension(e,t),i=this.horizontalPosition!==e||this.verticalPosition!==t;if(this.setHorizontalPosition(e,n),this.setVerticalPosition(t,n),this.updateRegionStyle(),!this.initialLayoutComplete)return this.initialLayoutComplete=!0,void this.requestPositionUpdates();this.regionVisible||(this.regionVisible=!0,this.style.removeProperty("pointer-events"),this.style.removeProperty("opacity"),this.classList.toggle("loaded",!0),this.$emit("loaded",this,{bubbles:!1})),this.updatePositionClasses(),i&&this.$emit("positionchange",this,{bubbles:!1})},this.updateRegionStyle=()=>{this.style.width=this.regionWidth,this.style.height=this.regionHeight,this.style.transform=`translate(${this.translateX}px, ${this.translateY}px)`},this.updatePositionClasses=()=>{this.classList.toggle("top","start"===this.verticalPosition),this.classList.toggle("bottom","end"===this.verticalPosition),this.classList.toggle("inset-top","insetStart"===this.verticalPosition),this.classList.toggle("inset-bottom","insetEnd"===this.verticalPosition),this.classList.toggle("vertical-center","center"===this.verticalPosition),this.classList.toggle("left","start"===this.horizontalPosition),this.classList.toggle("right","end"===this.horizontalPosition),this.classList.toggle("inset-left","insetStart"===this.horizontalPosition),this.classList.toggle("inset-right","insetEnd"===this.horizontalPosition),this.classList.toggle("horizontal-center","center"===this.horizontalPosition)},this.setHorizontalPosition=(t,e)=>{if(void 0===t||void 0===this.regionRect||void 0===this.anchorRect||void 0===this.viewportRect)return;let n=0;switch(this.horizontalScaling){case"anchor":case"fill":n=this.horizontalViewportLock?this.viewportRect.width:e.width,this.regionWidth=`${n}px`;break;case"content":n=this.regionRect.width,this.regionWidth="unset"}let i=0;switch(t){case"start":this.translateX=this.baseHorizontalOffset-n,this.horizontalViewportLock&&this.anchorRect.left>this.viewportRect.right&&(this.translateX=this.translateX-(this.anchorRect.left-this.viewportRect.right));break;case"insetStart":this.translateX=this.baseHorizontalOffset-n+this.anchorRect.width,this.horizontalViewportLock&&this.anchorRect.right>this.viewportRect.right&&(this.translateX=this.translateX-(this.anchorRect.right-this.viewportRect.right));break;case"insetEnd":this.translateX=this.baseHorizontalOffset,this.horizontalViewportLock&&this.anchorRect.left<this.viewportRect.left&&(this.translateX=this.translateX-(this.anchorRect.left-this.viewportRect.left));break;case"end":this.translateX=this.baseHorizontalOffset+this.anchorRect.width,this.horizontalViewportLock&&this.anchorRect.right<this.viewportRect.left&&(this.translateX=this.translateX-(this.anchorRect.right-this.viewportRect.left));break;case"center":if(i=(this.anchorRect.width-n)/2,this.translateX=this.baseHorizontalOffset+i,this.horizontalViewportLock){const t=this.anchorRect.left+i,e=this.anchorRect.right-i;t<this.viewportRect.left&&!(e>this.viewportRect.right)?this.translateX=this.translateX-(t-this.viewportRect.left):e>this.viewportRect.right&&!(t<this.viewportRect.left)&&(this.translateX=this.translateX-(e-this.viewportRect.right))}}this.horizontalPosition=t},this.setVerticalPosition=(t,e)=>{if(void 0===t||void 0===this.regionRect||void 0===this.anchorRect||void 0===this.viewportRect)return;let n=0;switch(this.verticalScaling){case"anchor":case"fill":n=this.verticalViewportLock?this.viewportRect.height:e.height,this.regionHeight=`${n}px`;break;case"content":n=this.regionRect.height,this.regionHeight="unset"}let i=0;switch(t){case"start":this.translateY=this.baseVerticalOffset-n,this.verticalViewportLock&&this.anchorRect.top>this.viewportRect.bottom&&(this.translateY=this.translateY-(this.anchorRect.top-this.viewportRect.bottom));break;case"insetStart":this.translateY=this.baseVerticalOffset-n+this.anchorRect.height,this.verticalViewportLock&&this.anchorRect.bottom>this.viewportRect.bottom&&(this.translateY=this.translateY-(this.anchorRect.bottom-this.viewportRect.bottom));break;case"insetEnd":this.translateY=this.baseVerticalOffset,this.verticalViewportLock&&this.anchorRect.top<this.viewportRect.top&&(this.translateY=this.translateY-(this.anchorRect.top-this.viewportRect.top));break;case"end":this.translateY=this.baseVerticalOffset+this.anchorRect.height,this.verticalViewportLock&&this.anchorRect.bottom<this.viewportRect.top&&(this.translateY=this.translateY-(this.anchorRect.bottom-this.viewportRect.top));break;case"center":if(i=(this.anchorRect.height-n)/2,this.translateY=this.baseVerticalOffset+i,this.verticalViewportLock){const t=this.anchorRect.top+i,e=this.anchorRect.bottom-i;t<this.viewportRect.top&&!(e>this.viewportRect.bottom)?this.translateY=this.translateY-(t-this.viewportRect.top):e>this.viewportRect.bottom&&!(t<this.viewportRect.top)&&(this.translateY=this.translateY-(e-this.viewportRect.bottom))}}this.verticalPosition=t},this.getPositioningOptions=t=>t?["insetStart","insetEnd"]:["start","end"],this.getAvailableSpace=(t,e,n,i,r,o)=>{const s=e-r,a=o-(e+i);switch(t){case"start":return s;case"insetStart":return s+i;case"insetEnd":return a+i;case"end":return a;case"center":return 2*Math.min(s,a)+i}},this.getNextRegionDimension=(t,e)=>{const n={height:void 0!==this.regionRect?this.regionRect.height:0,width:void 0!==this.regionRect?this.regionRect.width:0};return void 0!==t&&"fill"===this.horizontalScaling?n.width=this.getAvailableSpace(t,void 0!==this.anchorRect?this.anchorRect.left:0,void 0!==this.anchorRect?this.anchorRect.right:0,void 0!==this.anchorRect?this.anchorRect.width:0,void 0!==this.viewportRect?this.viewportRect.left:0,void 0!==this.viewportRect?this.viewportRect.right:0):"anchor"===this.horizontalScaling&&(n.width=void 0!==this.anchorRect?this.anchorRect.width:0),void 0!==e&&"fill"===this.verticalScaling?n.height=this.getAvailableSpace(e,void 0!==this.anchorRect?this.anchorRect.top:0,void 0!==this.anchorRect?this.anchorRect.bottom:0,void 0!==this.anchorRect?this.anchorRect.height:0,void 0!==this.viewportRect?this.viewportRect.top:0,void 0!==this.viewportRect?this.viewportRect.bottom:0):"anchor"===this.verticalScaling&&(n.height=void 0!==this.anchorRect?this.anchorRect.height:0),n},this.startAutoUpdateEventListeners=()=>{window.addEventListener(u.zs,this.update,{passive:!0}),window.addEventListener(u.oQ,this.update,{passive:!0,capture:!0}),null!==this.resizeDetector&&null!==this.viewportElement&&this.resizeDetector.observe(this.viewportElement)},this.stopAutoUpdateEventListeners=()=>{window.removeEventListener(u.zs,this.update),window.removeEventListener(u.oQ,this.update),null!==this.resizeDetector&&null!==this.viewportElement&&this.resizeDetector.unobserve(this.viewportElement)}}anchorChanged(){this.initialLayoutComplete&&(this.anchorElement=this.getAnchor())}viewportChanged(){this.initialLayoutComplete&&(this.viewportElement=this.getViewport())}horizontalPositioningModeChanged(){this.requestReset()}horizontalDefaultPositionChanged(){this.updateForAttributeChange()}horizontalViewportLockChanged(){this.updateForAttributeChange()}horizontalInsetChanged(){this.updateForAttributeChange()}horizontalThresholdChanged(){this.updateForAttributeChange()}horizontalScalingChanged(){this.updateForAttributeChange()}verticalPositioningModeChanged(){this.requestReset()}verticalDefaultPositionChanged(){this.updateForAttributeChange()}verticalViewportLockChanged(){this.updateForAttributeChange()}verticalInsetChanged(){this.updateForAttributeChange()}verticalThresholdChanged(){this.updateForAttributeChange()}verticalScalingChanged(){this.updateForAttributeChange()}fixedPlacementChanged(){this.$fastController.isConnected&&this.initialLayoutComplete&&this.initialize()}autoUpdateModeChanged(t,e){this.$fastController.isConnected&&this.initialLayoutComplete&&("auto"===t&&this.stopAutoUpdateEventListeners(),"auto"===e&&this.startAutoUpdateEventListeners())}anchorElementChanged(){this.requestReset()}viewportElementChanged(){this.$fastController.isConnected&&this.initialLayoutComplete&&this.initialize()}connectedCallback(){super.connectedCallback(),"auto"===this.autoUpdateMode&&this.startAutoUpdateEventListeners(),this.initialize()}disconnectedCallback(){super.disconnectedCallback(),"auto"===this.autoUpdateMode&&this.stopAutoUpdateEventListeners(),this.stopObservers(),this.disconnectResizeDetector()}adoptedCallback(){this.initialize()}disconnectResizeDetector(){null!==this.resizeDetector&&(this.resizeDetector.disconnect(),this.resizeDetector=null)}initializeResizeDetector(){this.disconnectResizeDetector(),this.resizeDetector=new window.ResizeObserver(this.handleResize)}updateForAttributeChange(){this.$fastController.isConnected&&this.initialLayoutComplete&&(this.forceUpdate=!0,this.update())}initialize(){this.initializeResizeDetector(),null===this.anchorElement&&(this.anchorElement=this.getAnchor()),this.requestReset()}requestReset(){this.$fastController.isConnected&&!1===this.pendingReset&&(this.setInitialState(),o.L.enqueue(()=>this.reset()),this.pendingReset=!0)}setInitialState(){this.initialLayoutComplete=!1,this.regionVisible=!1,this.translateX=0,this.translateY=0,this.baseHorizontalOffset=0,this.baseVerticalOffset=0,this.viewportRect=void 0,this.regionRect=void 0,this.anchorRect=void 0,this.verticalPosition=void 0,this.horizontalPosition=void 0,this.style.opacity="0",this.style.pointerEvents="none",this.forceUpdate=!1,this.style.position=this.fixedPlacement?"fixed":"absolute",this.updatePositionClasses(),this.updateRegionStyle()}}h.intersectionService=new class{constructor(){this.intersectionDetector=null,this.observedElements=new Map,this.requestPosition=(t,e)=>{null!==this.intersectionDetector&&(this.observedElements.has(t)?this.observedElements.get(t)?.push(e):(this.observedElements.set(t,[e]),this.intersectionDetector.observe(t)))},this.cancelRequestPosition=(t,e)=>{const n=this.observedElements.get(t);if(void 0!==n){const t=n.indexOf(e);-1!==t&&n.splice(t,1)}},this.initializeIntersectionDetector=()=>{globalThis.IntersectionObserver&&(this.intersectionDetector=new IntersectionObserver(this.handleIntersection,{root:null,rootMargin:"0px",threshold:[0,1]}))},this.handleIntersection=t=>{if(null===this.intersectionDetector)return;const e=[],n=[];t.forEach(t=>{this.intersectionDetector?.unobserve(t.target);const i=this.observedElements.get(t.target);void 0!==i&&(i.forEach(i=>{let r=e.indexOf(i);-1===r&&(r=e.length,e.push(i),n.push([])),n[r].push(t)}),this.observedElements.delete(t.target))}),e.forEach((t,e)=>{t(n[e])})},this.initializeIntersectionDetector()}},(0,i.Cg)([s.CF,(0,i.Sn)("design:type",String)],h.prototype,"anchor",void 0),(0,i.Cg)([s.CF,(0,i.Sn)("design:type",String)],h.prototype,"viewport",void 0),(0,i.Cg)([(0,s.CF)({attribute:"horizontal-positioning-mode"}),(0,i.Sn)("design:type",String)],h.prototype,"horizontalPositioningMode",void 0),(0,i.Cg)([(0,s.CF)({attribute:"horizontal-default-position"}),(0,i.Sn)("design:type",String)],h.prototype,"horizontalDefaultPosition",void 0),(0,i.Cg)([(0,s.CF)({attribute:"horizontal-viewport-lock",mode:"boolean"}),(0,i.Sn)("design:type",Boolean)],h.prototype,"horizontalViewportLock",void 0),(0,i.Cg)([(0,s.CF)({attribute:"horizontal-inset",mode:"boolean"}),(0,i.Sn)("design:type",Boolean)],h.prototype,"horizontalInset",void 0),(0,i.Cg)([(0,s.CF)({attribute:"horizontal-threshold"}),(0,i.Sn)("design:type",Number)],h.prototype,"horizontalThreshold",void 0),(0,i.Cg)([(0,s.CF)({attribute:"horizontal-scaling"}),(0,i.Sn)("design:type",String)],h.prototype,"horizontalScaling",void 0),(0,i.Cg)([(0,s.CF)({attribute:"vertical-positioning-mode"}),(0,i.Sn)("design:type",String)],h.prototype,"verticalPositioningMode",void 0),(0,i.Cg)([(0,s.CF)({attribute:"vertical-default-position"}),(0,i.Sn)("design:type",String)],h.prototype,"verticalDefaultPosition",void 0),(0,i.Cg)([(0,s.CF)({attribute:"vertical-viewport-lock",mode:"boolean"}),(0,i.Sn)("design:type",Boolean)],h.prototype,"verticalViewportLock",void 0),(0,i.Cg)([(0,s.CF)({attribute:"vertical-inset",mode:"boolean"}),(0,i.Sn)("design:type",Boolean)],h.prototype,"verticalInset",void 0),(0,i.Cg)([(0,s.CF)({attribute:"vertical-threshold"}),(0,i.Sn)("design:type",Number)],h.prototype,"verticalThreshold",void 0),(0,i.Cg)([(0,s.CF)({attribute:"vertical-scaling"}),(0,i.Sn)("design:type",String)],h.prototype,"verticalScaling",void 0),(0,i.Cg)([(0,s.CF)({attribute:"fixed-placement",mode:"boolean"}),(0,i.Sn)("design:type",Boolean)],h.prototype,"fixedPlacement",void 0),(0,i.Cg)([(0,s.CF)({attribute:"auto-update-mode"}),(0,i.Sn)("design:type",String)],h.prototype,"autoUpdateMode",void 0),(0,i.Cg)([a.sH,(0,i.Sn)("design:type",Object)],h.prototype,"anchorElement",void 0),(0,i.Cg)([a.sH,(0,i.Sn)("design:type",Object)],h.prototype,"viewportElement",void 0),(0,i.Cg)([a.sH,(0,i.Sn)("design:type",Boolean)],h.prototype,"initialLayoutComplete",void 0);var d=n(37180);const f=n(74849).A`
    :host {
        contain: layout;
        display: block;
    }
`;var p=n(96950),v=n(91640);const g=p.qy`
        <template data-loaded="${t=>t.initialLayoutComplete?"loaded":""}">
            ${(0,v.z)(t=>t.initialLayoutComplete,p.qy`
                    <slot></slot>
                `)}
        </template>
    `,b=h.compose({name:`${d.c.prefix}-anchored-region`,template:g,styles:f})},8315:function(t,e,n){"use strict";n.d(e,{WF:function(){return a},YO:function(){return s},a9:function(){return o},k7:function(){return c}});var i=n(68136);const{create:r}=i.G,o=r("neutral-fill-strong-rest-delta",0),s=r("neutral-fill-strong-hover-delta",8),a=r("neutral-fill-strong-active-delta",-5),c=r("neutral-fill-strong-focus-delta",0)},9982:function(t){t.exports='<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4.4 4.55l.07-.08a.75.75 0 01.98-.07l.08.07L12 10.94l6.47-6.47a.75.75 0 111.06 1.06L13.06 12l6.47 6.47c.27.27.3.68.07.98l-.07.08a.75.75 0 01-.98.07l-.08-.07L12 13.06l-6.47 6.47a.75.75 0 01-1.06-1.06L10.94 12 4.47 5.53a.75.75 0 01-.07-.98l.07-.08-.07.08z"></path></svg>'},10108:function(t,e,n){"use strict";n.d(e,{Y:function(){return s},u:function(){return a}});var i=n(19470),r=n(29194);const o=t=>1===t.nodeType,s=t=>t?e=>1===e.nodeType&&e.matches(t):o;class a extends r.Yi{get id(){return this._id}set id(t){this._id=t,this._controllerProperty=`${t}-c`}bind(t){const e=t.targets[this.targetNodeId];e[this._controllerProperty]=t,this.updateTarget(t.source,this.computeNodes(e)),this.observe(e),t.onUnbind(this)}unbind(t){const e=t.targets[this.targetNodeId];this.updateTarget(t.source,i.tR),this.disconnect(e),e[this._controllerProperty]=null}getSource(t){return t[this._controllerProperty].source}updateTarget(t,e){t[this.options.property]=e}computeNodes(t){let e=this.getNodes(t);return"filter"in this.options&&(e=e.filter(this.options.filter)),e}}},10735:function(t,e,n){"use strict";n.d(e,{T:function(){return l}});var i=n(68136),r=n(97004);var o=n(47691),s=n(356),a=n(31023);const{create:c}=i.G,u=c({name:"neutral-layer-floating-recipe"},{evaluate:t=>function(t,e,n){const i=t.closestIndexOf((0,r.Z)(e))-n;return t.get(i-n)}(t(a.r),t(s.l),t(o.E))}),l=c("neutral-layer-floating",t=>t(u).evaluate(t))},11152:function(t,e,n){"use strict";n.d(e,{R7:function(){return O},x7:function(){return F},x9:function(){return D}});var i=n(60993),r=n(64187),o=n(22131),s=n(73477),a=n(74849),c=n(50882),u=n(37998),l=n(48196),h=n(17767),d=n(57416),f=n(41123),p=n(64699),v=n(14996),g=n(74838),b=n(4283),m=n(79288),y=n(7896),w=n(74089),$=n(26920),x=n(37302),k=n(46203),C=n(45476),S=n(48751),E=n(10735),M=n(36452);const F=a.A`
    :host([appearance="filled"]) {
        background: ${x.F7};
        border-color: transparent;
    }

    :host([appearance="filled"]:hover:not([disabled])) {
        background: ${x.Xt};
        border-color: transparent;
    }

    :host([appearance="filled"]:${s.N}) {
        border-color: ${v.WN};
    }
`,D=a.A`
    ${(0,r.V)("inline-flex")} :host {
        --elevation: 14;
        background: ${k.le};
        border-radius: calc(${d.Pb} * 1px);
        border: calc(${$.XA} * 1px) solid ${M.I2};
        box-sizing: border-box;
        color: ${S.l};
        font-family: ${y.O};
        height: calc(${l.D} * 1px);
        position: relative;
        user-select: none;
        min-width: 250px;
        vertical-align: top;
    }

    .listbox {
        ${u.ET}
        background: ${E.T};
        border-radius: calc(${d.Pb} * 1px);
        box-sizing: border-box;
        display: inline-flex;
        flex-direction: column;
        left: 0;
        max-height: calc(var(--max-height) - (${l.D} * 1px));
        padding: calc(${g.vR} * 1px) 0;
        overflow-y: auto;
        position: fixed;
        top: 0;
        z-index: 1;
        margin: 1px 0;
    }

    .listbox[hidden] {
        display: none;
    }

    .control {
        align-items: center;
        box-sizing: border-box;
        cursor: pointer;
        display: flex;
        font-size: ${f.K};
        font-family: inherit;
        min-height: 100%;
        line-height: ${f.Z};
        padding: 0 calc(${g.vR} * 2.25px);
        width: 100%;
    }

    :host(:not([disabled]):hover) {
        background: ${k.jM};
        border-color: ${M.mb};
    }

    :host(:focus) {
        outline: none;
    }

    :host(:${s.N}) {
        border-color: ${v.WN};
        outline: none;
        box-shadow: 0 0 0 1px inset ${v.WN};
    }

    :host([open]:${s.N}) {
        border-color: ${M.I2};
        outline: none;
        box-shadow: none;
    }

    :host(:${s.N}) ::slotted([aria-selected="true"][role="option"]:not([disabled])) {
        box-shadow: 0 0 0 calc(${$.vd} * 1px) inset ${p.fF};
        border-color: ${v.WN};
        background: ${b.KJ};
        color: ${w.Bg};
    }

    :host([disabled]) {
        cursor: ${i.Z};
        opacity: ${m.q};
    }

    :host([disabled]) .control {
        cursor: ${i.Z};
        user-select: none;
    }

    :host([disabled]:hover) {
        background: ${C.Wl};
        color: ${S.l};
        fill: currentcolor;
    }

    :host(:not([disabled])) .control:active {
        background: ${k.RS};
        border-color: ${M.MY};
        border-radius: calc(${d.Pb} * 1px);
    }

    .selected-value {
        font-family: inherit;
        flex: 1 1 auto;
        text-align: start;
    }

    .indicator {
        flex: 0 0 auto;
        margin-inline-start: 1em;
    }

    ::slotted([name="listbox"]) {
        display: none;
        width: 100%;
    }

    :host([open]) ::slotted([name="listbox"]) {
        display: flex;
        position: absolute;
        ${u.ET}
    }

    ::slotted([slot="end"]) {
        margin-inline-start: auto;
    }

    ::slotted([slot="start"]),
    ::slotted([slot="end"]),
    .indicator,
    .select-indicator,
    ::slotted(svg) {
        ${""}
        fill: currentcolor;
        height: 1em;
        min-height: calc(${g.vR} * 4px);
        min-width: calc(${g.vR} * 4px);
        width: 1em;
    }

    ::slotted([role="option"]) {
        flex: 0 0 auto;
    }
`.withBehaviors((0,h.f)("filled",F),(0,o.mr)(a.A`
            :host([disabled]) {
                border-color: ${c.A.GrayText};
                background-color: ${c.A.ButtonFace};
                color: ${c.A.GrayText};
                opacity: 1;
                forced-color-adjust: none;
            }

            :host([disabled]:hover) {
                background: ${c.A.ButtonFace};
            }

            :host([disabled]) .control {
                color: ${c.A.GrayText};
                border-color: ${c.A.GrayText};
            }

            :host(:not([disabled]):hover) {
                background: ${c.A.ButtonFace};
                border-color: ${c.A.Highlight};
            }

            :host(:${s.N}) {
                forced-color-adjust: none;
                background: ${c.A.ButtonFace};
                border-color: ${c.A.Highlight};
                box-shadow: 0 0 0 1px inset ${c.A.Highlight};
                color: ${c.A.ButtonText};
                fill: currentcolor;
            }

            :host([open]) .listbox {
                background: ${c.A.ButtonFace};
                border: 1px solid ${c.A.ButtonText};
            }

            :host(:${s.N}) ::slotted([aria-selected="true"][role="option"]:not([disabled])) {
                background: ${c.A.Highlight};
                border-color: ${c.A.ButtonText};
                box-shadow: 0 0 0 calc(${$.vd} * 1px) inset
                    ${c.A.HighlightText};
                color: ${c.A.HighlightText};
                fill: currentcolor;
            }

            ::slotted([role="option"]:not([aria-selected="true"]):not([disabled]):hover) {
                forced-color-adjust: none;
                color: ${c.A.ButtonText};
                background: ${c.A.ButtonFace};
                border-color: ${c.A.Highlight};
                box-shadow: none;
            }
        `)),O=a.A`
    ${D}
`},11971:function(t,e,n){"use strict";n.d(e,{Ur:function(){return N},eM:function(){return R}});var i=n(17469),r=n(73208),o=n(96950),s=n(32286),a=n(50882),c=n(48751),u=n(92393),l=n(57416),h=n(45476),d=n(86856),f=n(10735),p=n(7896),v=n(37998),g=n(74838),b=n(14996),m=n(64003),y=n(74849),w=n(64187),$=n(73477),x=n(60993),k=n(22131),C=n(4126),S=n(33462),E=n(32257),M=n(42323),F=n(39677),D=n(33315);const O=y.A` fluent-button{border-radius:0 var(--search-box-radius) var(--search-box-radius) 0}.enable-clr-btn::part(control){border-bottom-right-radius:24px;border-top-right-radius:24px}.searchoptions{right:70px}`,A=y.A` fluent-button{border-radius:var(--search-box-radius) 0 0 var(--search-box-radius)}.enable-clr-btn::part(control){border-bottom-left-radius:24px;border-top-left-radius:24px}.searchoptions{left:70px}`,T=(y.A` .core-search-kumo .search-btn::part(control){color:${S.Nd}}.core.core-search-kumo{border:8px solid ${S.RY};
        background: ${S.nw};
        box-shadow:  0px 1px 2px 0px ${S.o7} inset}.core.core-search-kumo svg{fill:${S.Nd}}.core.core-search-kumo .search-btn.stealth > .search-icon-asset-img{filter:${S.JU} !important;
        background-color: transparent;
        content: unset;
    }
}
`,y.A`
@media (forced-colors:active){.core.core-search-kumo{border:8px solid #FFF}}`,y.A` .root{border:1px solid #C8CCD3;border-radius:12px}.control::placeholder{font-size:12px;color:#6C7077}fluent-button::part(control){padding-right:0px !important;padding-left:0px !important;margin-inline-start:12px}`),I=y.A` :host{display:block}.form-kumo{position:relative;height:40px;box-shadow:none;backdrop-filter:none;border-radius:32px;border-end-start-radius:${E.lb8};
        border-start-start-radius: ${E.lb8}}.kumo-wrapper{height:40px;border-end-start-radius:${E.lb8};
        border-start-start-radius: ${E.lb8}}.search-hidden{visibility:hidden}@keyframes blink{0%{opacity:1}61.55%{opacity:0}}.fake-cursor{background:${c.l};position:absolute;width:1px;top:12px;bottom:12px;margin-inline-start:56px;margin-inline-end:16px;animation:blink 1.3s step-end infinite}.search-icon{display:flex;justify-content:center;align-items:center}.core{display:flex;height:100%;--search-box-radius:22px;user-select:none;--elevation:4;border-radius:var(--search-box-radius);transition:none;position:relative;overflow:hidden;background:${f.T};
        font-family: ${p.O};
        ${v.ET}}.core #q{-webkit-appearance:none;outline:none;background:transparent;border:0;margin-top:auto;margin-bottom:auto;border:none;padding:calc(${g.vR} * 2px + 2px) 12px calc(${g.vR} * 2px + 2px) 12px;
        color: ${c.l};font-size:16px;font-weight:400;line-height:24px;width:100%;font-family:inherit;flex:1;padding-inline-start:16px}.core #q:placeholder-shown{text-overflow:ellipsis}.core .search-btn .search-btn-txt{font-size:16px;font-weight:400}.core-search-kumo .search-btn::part(control){color:${S.T3}}.core-search-kumo .search-btn::part(content){height:20px;width:20px}.core-search-kumo .search-btn::part(control):active,.core-search-kumo .search-btn:active{background-color:initial}.core .search-btn{height:inherit;min-width:auto}.core .search-btn::part(control){width:100%}.core.core-search-kumo{border-radius:50px;--search-box-radius:44px;border:8px solid ${S.$C};
        background: ${S.jr};
        box-shadow: 0px 1px 2px 0px ${S.y6} inset;box-sizing:border-box}.core.core-search-kumo .clear-btn{min-width:20px;height:${E.Szr};background:transparent}.core.core-search-kumo .clear-container{margin-inline-end:0px;height:${E.Szr}}.core.core-search-kumo .clear-container #clear_srch svg{fill:${E.LUZ}}.core.core-search-kumo .search-btn.stealth > .search-icon-asset-img{filter:${M.a1}}.core.core-search-kumo .search-btn::part(control):focus-visible{box-shadow:0 0 0 2px inset ${b.WN}}.core.search-btn-on-left.core-search-kumo{border:${E.KUh} solid ${E.giY};
        background: ${E.GTW};
        border-radius: ${E.lb8};padding:0px;align-items:center;box-shadow:none}.core.search-btn-on-left.core-search-kumo .search-btn{border-end-start-radius:${E.lb8};
        border-start-start-radius: ${E.lb8};border-start-end-radius:0;border-end-end-radius:0;background:transparent;height:40px}.core.search-btn-on-left.core-search-kumo .search-btn::part(control){color:${S.T3};
        border: none;
        padding: 0px ${F.Gkw} 0px ${E.ACF} !important;
        height: 40px;
        border-end-start-radius: ${E.lb8};
        border-start-start-radius: ${E.lb8}}.core.search-btn-on-left #q{padding-inline-start:6px}.core.search-btn-on-left.core-search-kumo #q{font-weight:${D.Tn};
        color: ${E.Adh};
        caret-color: ${E.Adh};
        font-size: ${E.vtK};
        line-height: ${E.EXe};padding:0px}.core.search-btn-on-left.core-search-kumo #q::placeholder{color:${E.Adh}}.core.search-btn-on-left .search-btn.stealth > svg{fill:${m.c}}.core .search-btn.stealth{background:transparent}.core .search-btn > svg{height:24px;width:24px}.core.core-search-kumo .search-btn > svg{height:20px;width:20px;color:${S.OF}}.core.core-search-kumo svg{fill:${S.OF}}.core .search-btn.stealth > svg{fill:var(--search-svg-fill,${u.W_})}.core input[type="search"]::-webkit-search-decoration,.core input[type="search"]::-webkit-search-cancel-button,.core input[type="search"]::-webkit-search-results-button,.core input[type="search"]::-webkit-search-results-decoration{display:none}.clear-container{display:flex;align-items:center;z-index:2;height:46px}.core-search-kumo .cc-pa{padding-inline:0}.clear-btn{background:transparent;height:30px;min-width:20px}fluent-button::part(control){padding-inline-start:unset !important;padding-inline-end:${F.Gkw} !important;
        border-start-end-radius: ${E.lb8};
        border-end-end-radius: ${E.lb8}}.clear-btn > svg{width:20px;height:20px}.clear-container{display:flex;align-items:center;z-index:2;height:30px;margin-top:auto;margin-bottom:auto}`,B=y.A`
    ${(0,w.V)("inline-flex")} :host{--search-box-radius:calc(${l.Pb} * 2px);
        font-family: ${p.O};
        outline: none;
        user-select: none;
        --elevation: 4;
        border-radius: var(--search-box-radius);
        transition: all 0.2s ease-in-out;
        position: relative;
        background: ${f.T};
        ${v.ET}}.root{box-sizing:border-box;position:relative;display:flex;flex-direction:row;color:${m.c};border-radius:var(--search-box-radius) 0 0 var(--search-box-radius)}.control{-webkit-appearance:none;background:transparent;border:0;margin-top:auto;margin-bottom:auto;border:none;padding:calc(${g.vR} * 2px + 2px) 12px;
        color: ${c.l};
        ${""} font-size:15px;font-weight:400;letter-spacing:inherit;line-height:24px;width:100%;word-spacing:inherit;z-index:1}.control::placeholder{color:${a.A.GrayText}}.searchoptions{position:absolute;z-index:900}input[type="search"]::-webkit-search-decoration,input[type="search"]::-webkit-search-cancel-button,input[type="search"]::-webkit-search-results-button,input[type="search"]::-webkit-search-results-decoration{display:none}.control:hover,.control:${$.N},.control:disabled,.control:active{outline:none}.before-content,.after-content{${""} width: 16px;
        height: 16px;
        margin: auto;
        fill: ${c.l}}.end-slot{display:flex;justify-content:center;align-items:center}fluent-button{height:auto;position:relative}fluent-button.stealth{background:transparent}fluent-button.stealth:hover{background:${h.oO}}fluent-button::part(control){padding-right:24px !important;padding-left:24px !important}:host(:hover:not([disabled])){--elevation:6;${v.ET}}:host([isonimage]) .end-slot slot[name="end"] > svg{fill:${u.W_}}:host([isonimage]) fluent-button.stealth:hover{background:transparent}:host([disabled]) .label,:host([readOnly]) .label,:host([readOnly]) .control,:host([disabled]) .control{cursor:${x.Z}}:host([disabled]){opacity:var(--disabled-opacity)}:host([disabled]) fluent-button{pointer-events:none}.enable-clr-btn{width:78px}.enable-clr-btn::part(control){padding-right:0px !important;padding-left:0px !important}.enable-clr-btn .end-slot{margin-left:15px}`.withBehaviors(new d.t(O,A),(0,k.G2)(y.A` :host([isonimage]) .end-slot slot[name="end"] > svg{fill:${c.l}}.control::placeholder{color:var(--dark-fill-color-text-secondary,rgba(255,255,255,0.79))}`),(0,k.mr)(y.A` :host{forced-color-adjust:none;background:${a.A.Field};
                    box-shadow: ${a.A.FieldText} 0px 0px 0px 1px}:host(:hover:not([disabled])){box-shadow:${a.A.Highlight} 0px 0px 0px 1px}:host([isonimage]) .end-slot slot[name="end"] > svg{fill:${a.A.ButtonText}}:host([isonimage]) fluent-button.stealth:hover svg{fill:${a.A.HighlightText}}:host([disabled]){box-shadow:${a.A.GrayText} 0px 0px 0px 1px;opacity:1}:host([disabled]) .label,input::placeholder{color:${a.A.GrayText}}:host([disabled]) fluent-button::part(control){background:${a.A.ButtonFace};
                    color: ${a.A.GrayText};fill:currentColor}.control{color:${a.A.FieldText};fill:currentColor}.enable-clr-btn::part(control):focus-visible{border-color:${a.A.Highlight};
                    box-shadow: 0 0 0 calc((var(--focus-stroke-width) - var(--stroke-width)) * 1px) ${a.A.Highlight};
                }
            `),new C.o("isRubySearchBox",!0,I),new C.o("isProngRubySearchBox",!0,T)),N=r.G.compose({name:`${i.i.prefix}-search-box`,template:(0,s.W)({endContent:o.qy`
        <svg
            width="20"
            height="20"
            viewBox="3 3 14 14"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M8.5 3a5.5 5.5 0 014.23 9.02l4.12 4.13a.5.5 0 01-.63.76l-.07-.06-4.13-4.12A5.5 5.5 0 118.5 3zm0 1a4.5 4.5 0 100 9 4.5 4.5 0 000-9z"
            />
        </svg>
        `,clearContent:o.qy`<svg width="18" height="18" viewBox="0 0 12 12"><path d="M6.85 6 12 11.15l-.85.85L6 6.85.85 12 0 11.15 5.15 6 0 .85.85 0 6 5.15 11.15 0l.85.85L6.85 6Z"></path></svg>`}),styles:B,shadowOptions:{delegatesFocus:!0}}),R=B},12839:function(t,e,n){"use strict";n.d(e,{It:function(){return I},d5:function(){return x},gi:function(){return M},um:function(){return S},xN:function(){return E}});var i=n(14777),r=n(20468),o=n(88383),s=n(62044),a=n(89449),c="toGMTString",u="toUTCString",l="cookie",h="expires",d="enabled",f="isCookieUseDisabled",p="disableCookiesUsage",v="_ckMgr",g=null,b=null,m=null,y=(0,o.YE)(),w={},$={};function x(t,e){var n=E[v]||$[v];return n||(n=E[v]=E(t,e),$[v]=n),n}function k(t){return!t||t.isEnabled()}function C(t,e){return!!(e&&t&&(0,s.cy)(t.ignoreCookies))&&-1!==t.ignoreCookies[i.Sj](e)}function S(t,e){var n;if(t)n=t.getCookieMgr();else if(e){var r=e[i.lK];n=r[v]?r[v]:E(e)}return n||(n=x(e,(t||{})[i.Uw])),n}function E(t,e){var n,r=function(t){var e=t[i.lK]=t[i.lK]||{};if((0,s.KY)(e,"domain",t.cookieDomain,s.Gh,s.hX),(0,s.KY)(e,"path",t.cookiePath||"/",null,s.hX),(0,s.hX)(e[d])){var n=void 0;(0,s.b0)(t[f])||(n=!t[f]),(0,s.b0)(t[p])||(n=!t[p]),e[d]=n}return e}(t||$),l=r.path||"/",g=r.domain,m=!1!==r[d],y=((n={isEnabled:function(){var t=m&&M(e),n=$[v];return t&&n&&y!==n&&(t=k(n)),t}})[i.kt]=function(t){m=!1!==t},n.set=function(t,e,n,d,f){var p=!1;if(k(y)&&!function(t,e){return!!(e&&t&&(0,s.cy)(t.blockedCookies)&&-1!==t.blockedCookies[i.Sj](e))||C(t,e)}(r,t)){var v={},m=(0,s.EH)(e||a.m5),w=m[i.Sj](";");if(-1!==w&&(m=(0,s.EH)(e[i.Re](0,w)),v=F(e[i.Re](w+1))),(0,s.KY)(v,"domain",d||g,s.zz,s.b0),!(0,s.hX)(n)){var $=(0,o.lT)();if((0,s.b0)(v[h])){var x=(0,s.x3)()+1e3*n;if(x>0){var S=new Date;S.setTime(x),(0,s.KY)(v,h,D(S,$?c:u)||D(S,$?c:u)||a.m5,s.zz)}}$||(0,s.KY)(v,"max-age",a.m5+n,null,s.b0)}var E=(0,o.g$)();E&&"https:"===E.protocol&&((0,s.KY)(v,"secure",null,null,s.b0),null===b&&(b=!I(((0,o.w3)()||{})[i.tX])),b&&(0,s.KY)(v,"SameSite","None",null,s.b0)),(0,s.KY)(v,"path",f||l,null,s.b0),(r.setCookie||T)(t,O(m,v)),p=!0}return p},n.get=function(t){var e=a.m5;return k(y)&&!C(r,t)&&(e=(r.getCookie||A)(t)),e},n.del=function(t,e){var n=!1;return k(y)&&(n=y.purge(t,e)),n},n.purge=function(t,n){var i,s=!1;if(M(e)){var c=((i={}).path=n||"/",i[h]="Thu, 01 Jan 1970 00:00:01 GMT",i);(0,o.lT)()||(c["max-age"]="0"),(r.delCookie||T)(t,O(a.m5,c)),s=!0}return s},n);return y[v]=y,y}function M(t){if(null===g){g=!1;try{g=void 0!==(y||{})[l]}catch(e){(0,r.ZP)(t,2,68,"Cannot access document.cookie - "+(0,s.lL)(e),{exception:(0,o.mm)(e)})}}return g}function F(t){var e={};if(t&&t[i.oI]){var n=(0,s.EH)(t)[i.sY](";");(0,s.Iu)(n,function(t){if(t=(0,s.EH)(t||a.m5)){var n=t[i.Sj]("=");-1===n?e[t]=null:e[(0,s.EH)(t[i.Re](0,n))]=(0,s.EH)(t[i.Re](n+1))}})}return e}function D(t,e){return(0,s.Tn)(t[e])?t[e]():null}function O(t,e){var n=t||a.m5;return(0,s.z)(e,function(t,e){n+="; "+t+((0,s.hX)(e)?a.m5:"="+e)}),n}function A(t){var e=a.m5;if(y){var n=y[l]||a.m5;m!==n&&(w=F(n),m=n),e=(0,s.EH)(w[t]||a.m5)}return e}function T(t,e){y&&(y[l]=t+"="+e)}function I(t){return!!(0,s.Kg)(t)&&(!(!(0,s.Ju)(t,"CPU iPhone OS 12")&&!(0,s.Ju)(t,"iPad; CPU OS 12"))||(!!((0,s.Ju)(t,"Macintosh; Intel Mac OS X 10_14")&&(0,s.Ju)(t,"Version/")&&(0,s.Ju)(t,"Safari"))||(!(!(0,s.Ju)(t,"Macintosh; Intel Mac OS X 10_14")||!(0,s.Cv)(t,"AppleWebKit/605.1.15 (KHTML, like Gecko)"))||(!(!(0,s.Ju)(t,"Chrome/5")&&!(0,s.Ju)(t,"Chrome/6"))||(!(!(0,s.Ju)(t,"UnrealEngine")||(0,s.Ju)(t,"Chrome"))||!(!(0,s.Ju)(t,"UCBrowser/12")&&!(0,s.Ju)(t,"UCBrowser/11")))))))}},12938:function(t,e,n){"use strict";n.d(e,{m:function(){return y}});var i=n(56911),r=n(92011),o=n(23429),s=n(60815),a=n(55230),c=n(2298),u=n(84471);class l extends r.L{constructor(){super(...arguments),this.currentFocused=null,this.handleFocus=t=>{if(!(this.slottedTreeItems.length<1))return t.target===this?(null===this.currentFocused&&(this.currentFocused=this.getValidFocusableItem()),void(null!==this.currentFocused&&u._.focusItem(this.currentFocused))):void(this.contains(t.target)&&(this.setAttribute("tabindex","-1"),this.currentFocused=t.target))},this.handleBlur=t=>{t.target instanceof HTMLElement&&(null===t.relatedTarget||!this.contains(t.relatedTarget))&&this.setAttribute("tabindex","0")},this.handleKeyDown=t=>{if(t.defaultPrevented)return;if(this.slottedTreeItems.length<1)return!0;const e=this.getVisibleNodes();switch(t.key){case a.kE:return void(e.length&&u._.focusItem(e[0]));case a.FM:return void(e.length&&u._.focusItem(e[e.length-1]));case a.kT:if(t.target&&this.isFocusableElement(t.target)){const e=t.target;e instanceof u._&&e.childItemLength>0&&e.expanded?e.expanded=!1:e instanceof u._&&e.parentElement instanceof u._&&u._.focusItem(e.parentElement)}return!1;case a.bb:if(t.target&&this.isFocusableElement(t.target)){const e=t.target;e instanceof u._&&e.childItemLength>0&&!e.expanded?e.expanded=!0:e instanceof u._&&e.childItemLength>0&&this.focusNextNode(1,t.target)}return;case a.HX:return void(t.target&&this.isFocusableElement(t.target)&&this.focusNextNode(1,t.target));case a.I5:return void(t.target&&this.isFocusableElement(t.target)&&this.focusNextNode(-1,t.target));case a.Mm:return void this.handleClick(t)}return!0},this.handleSelectedChange=t=>{if(t.defaultPrevented)return;if(!(t.target instanceof Element&&(0,u.W)(t.target)))return!0;const e=t.target;e.selected?(this.currentSelected&&this.currentSelected!==e&&(this.currentSelected.selected=!1),this.currentSelected=e):e.selected||this.currentSelected!==e||(this.currentSelected=null)},this.setItems=()=>{if(!this.treeView)return;const t=this.treeView.querySelector("[aria-selected='true']");this.currentSelected=t,null!==this.currentFocused&&this.contains(this.currentFocused)||(this.currentFocused=this.getValidFocusableItem()),this.nested=this.checkForNestedItems();this.getVisibleNodes().forEach(t=>{(0,u.W)(t)&&(t.nested=this.nested)})},this.isFocusableElement=t=>(0,u.W)(t),this.isSelectedElement=t=>t.selected}slottedTreeItemsChanged(){this.$fastController.isConnected&&this.setItems()}connectedCallback(){super.connectedCallback(),this.setAttribute("tabindex","0"),o.L.enqueue(()=>{this.setItems()})}handleClick(t){if(t.defaultPrevented)return;if(!(t.target instanceof Element&&(0,u.W)(t.target)))return!0;const e=t.target;e.disabled||(e.selected=!e.selected)}focusNextNode(t,e){const n=this.getVisibleNodes();if(!n)return;const i=n[n.indexOf(e)+t];(0,c.sb)(i)&&u._.focusItem(i)}getValidFocusableItem(){const t=this.getVisibleNodes();let e=t.findIndex(this.isSelectedElement);return-1===e&&(e=t.findIndex(this.isFocusableElement)),-1!==e?t[e]:null}checkForNestedItems(){return this.slottedTreeItems.some(t=>(0,u.W)(t)&&t.querySelector("[role='treeitem']"))}getVisibleNodes(){return(0,c.JL)(this,"[role='treeitem']")||[]}}(0,i.Cg)([s.sH,(0,i.Sn)("design:type",Object)],l.prototype,"currentSelected",void 0),(0,i.Cg)([s.sH,(0,i.Sn)("design:type",Array)],l.prototype,"slottedTreeItems",void 0);var h=n(37180),d=n(74849),f=n(64187);const p=d.A`
    :host([hidden]) {
        display: none;
    }

    ${(0,f.V)("flex")} :host {
        flex-direction: column;
        align-items: stretch;
        min-width: fit-content;
        font-size: 0;
    }

    :host:focus-visible {
        outline: none;
    }
`;var v=n(96950),g=n(60402),b=n(82774);const m=v.qy`
        <template
            role="tree"
            ${(0,g.K)("treeView")}
            @keydown="${(t,e)=>t.handleKeyDown(e.event)}"
            @focusin="${(t,e)=>t.handleFocus(e.event)}"
            @focusout="${(t,e)=>t.handleBlur(e.event)}"
            @click="${(t,e)=>t.handleClick(e.event)}"
            @selected-change="${(t,e)=>t.handleSelectedChange(e.event)}"
        >
            <slot ${(0,b.e)("slottedTreeItems")}></slot>
        </template>
    `;const y=class extends l{}.compose({name:`${h.c.prefix}-tree-view`,template:m,styles:p})},13023:function(t,e,n){"use strict";n.d(e,{P:function(){return a}});var i=n(14777),r=n(20468),o=n(88383),s=n(62044);function a(){var t=[];return{add:function(e){e&&t[i.y5](e)},run:function(e,n){(0,s.Iu)(t,function(t){try{t(e,n)}catch(t){(0,r.ZP)(e[i.e4](),2,73,"Unexpected error calling unload handler - "+(0,o.mm)(t))}}),t=[]}}}},13312:function(t,e,n){"use strict";n.d(e,{_4:function(){return a},am:function(){return u},tA:function(){return c}});var i=n(56911),r=n(60815),o=n(92011),s=n(38493);const a={C1:"C1",C2:"C2",C3:"C3",C4:"C4",C5:"C5",C6:"C6"};class c extends o.L{constructor(){super(...arguments),this.layout=a.C4,this.childrenLayout=[],this.disabledKeyListeners=[]}layoutChanged(){this.updateLayout()}childTemplateMapChanged(){this.updateLayout()}dataChanged(){this.updateLayout()}layoutStylesChanged(t,e){t&&this.$fastController.removeStyles(t),this.$fastController.addStyles(e)}selectTemplate(t){if(t.childTemplateType)return this.childTemplateMap?.[t.childTemplateType]}updateLayout(){if(void 0===this.data)return;const t=this.data[this.layout];this.childrenLayout=this.data.defaultLayout.map(e=>({...e,...t?.find(t=>t.id===e.id)})).sort((t,e)=>t.childDOMOrder&&e.childDOMOrder?t.childDOMOrder-e.childDOMOrder:0)}handleKeyDown(t){const e=Array.from(this.getRootNode().querySelectorAll(this.tagName)).reduce((t,e)=>t.concat(Array.from(e.shadowRoot?.children||[])),[]).filter(t=>t.offsetWidth>0&&t.offsetHeight>0);return!(!this.disabledKeyListeners||!this.disabledKeyListeners.find(e=>e===t.key))||u(t,e)}}function u(t,e){const n=!!["ArrowDown","ArrowLeft","ArrowRight","ArrowUp","End","Home","PageUp","PageDown"].find(e=>e===t.key);if(t.defaultPrevented||!n||!e)return!0;const i=e.reduce((t,e,n)=>{const{offsetLeft:i,offsetHeight:r,offsetTop:o,offsetWidth:s}=e;return t.push({x:i,y:o,x2:i+s,y2:o+r,index:n}),t},[]),r=e.findIndex(e=>t.composedPath().find(t=>t===e))??0,o=t=>{const e=t.currentTarget;e&&(e.removeAttribute("tabindex"),e.removeEventListener("blur",o))},s=i.reduce((t,e,n)=>{const o=i[r||0],s={x:["ArrowLeft","ArrowRight"],y:["ArrowUp","ArrowDown"]},a=t=>Math.min(e[`${t}2`],o[`${t}2`])-Math.max(e[t],o[t]),c=t=>Math.abs(e[t]>=o[`${t}2`]?e[t]-o[`${t}2`]:o[t]-e[`${t}2`]);for(const i in s){const u=i,l=a("x"===u?"y":"x"),h=c(u);if(l>0){const i=e[u]>=o[`${u}2`]?1:0,a=s[u][i];n!==r&&(void 0===t[a]||(t[a]?.distance||0)>h)&&(t[a]=Object.assign({},e,{overlap:l,distance:h})),"y"===u&&("ArrowUp"===a?(!t.PageUp||t.PageUp.y>e.y)&&(t.PageUp=e):(!t.PageDown||t.PageDown.y2<e.y2)&&(t.PageDown=e))}}return(!t.Home||t.Home.x>e.x||t.Home.y>e.y)&&(t.Home=e),(!t.End||t.End.x<e.x||t.End.y<e.y)&&(t.End=e),t},{})[t.key];var a;return void 0!==s&&(a=s.index,e&&e.length>a&&(e[a].setAttribute("tabindex","0"),e[a].addEventListener("blur",o),e[a].focus())),!0}(0,i.Cg)([s.CF,(0,i.Sn)("design:type",String)],c.prototype,"layout",void 0),(0,i.Cg)([r.sH,(0,i.Sn)("design:type",Array)],c.prototype,"childrenLayout",void 0),(0,i.Cg)([r.sH,(0,i.Sn)("design:type",Object)],c.prototype,"childTemplateMap",void 0),(0,i.Cg)([r.sH,(0,i.Sn)("design:type",Object)],c.prototype,"data",void 0),(0,i.Cg)([r.sH,(0,i.Sn)("design:type",Object)],c.prototype,"layoutStyles",void 0),(0,i.Cg)([r.sH,(0,i.Sn)("design:type",Array)],c.prototype,"disabledKeyListeners",void 0)},13765:function(t,e,n){"use strict";n.d(e,{NS:function(){return d},Z4:function(){return v},r2:function(){return p}});var i=n(58207),r=n(14777),o=n(62044),s=n(89449),a="ctx",c="ParentContextKey",u="ChildrenContextKey",l=null,h=function(){function t(e,n,i){var s,l=this,h=!1;(l.start=(0,o.x3)(),l[r.RS]=e,l[r.tI]=i,l[r.Zu]=function(){return!1},(0,o.Tn)(n))&&(h=(0,o.r)(l,"payload",function(){return!s&&(0,o.Tn)(n)&&(s=n(),n=null),s}));l[r.O_]=function(e){return e?e===t[c]||e===t[u]?l[e]:(l[a]||{})[e]:null},l[r.e_]=function(e,n){if(e)if(e===t[c])l[e]||(l[r.Zu]=function(){return!0}),l[e]=n;else if(e===t[u])l[e]=n;else{(l[a]=l[a]||{})[e]=n}},l[r.Ru]=function(){var e=0,i=l[r.O_](t[u]);if((0,o.cy)(i))for(var s=0;s<i[r.oI];s++){var a=i[s];a&&(e+=a[r.fA])}l[r.fA]=(0,o.x3)()-l.start,l.exTime=l[r.fA]-e,l[r.Ru]=function(){},!h&&(0,o.Tn)(n)&&(l.payload=n())}}return t.ParentContextKey="parent",t.ChildrenContextKey="childEvts",t}(),d=function(){function t(e){this.ctx={},(0,i.A)(t,this,function(t){t.create=function(t,e,n){return new h(t,e,n)},t.fire=function(t){t&&(t[r.Ru](),e&&(0,o.Tn)(e[s.l0])&&e[s.l0](t))},t[r.e_]=function(e,n){e&&((t[a]=t[a]||{})[e]=n)},t[r.O_]=function(e){return(t[a]||{})[e]}})}return t.__ieDyn=1,t}(),f="CoreUtils.doPerf";function p(t,e,n,i,o){if(t){var a=t;if(a[s.kI]&&(a=a[s.kI]()),a){var l=void 0,d=a[r.O_](f);try{if(l=a.create(e(),i,o)){if(d&&l[r.e_]&&(l[r.e_](h[c],d),d[r.O_]&&d[r.e_])){var p=d[r.O_](h[u]);p||(p=[],d[r.e_](h[u],p)),p[r.y5](l)}return a[r.e_](f,l),n(l)}}catch(t){l&&l[r.e_]&&l[r.e_]("exception",t)}finally{l&&a.fire(l),a[r.e_](f,d)}}}return n()}function v(){return l}},14205:function(t,e,n){"use strict";n.d(e,{Mc:function(){return c},Ws:function(){return a},oj:function(){return s},q:function(){return o}});var i=n(68136);const{create:r}=i.G,o=r("neutral-fill-stealth-rest-delta",0),s=r("neutral-fill-stealth-hover-delta",5),a=r("neutral-fill-stealth-active-delta",3),c=r("neutral-fill-stealth-focus-delta",0)},14338:function(t,e,n){"use strict";n.d(e,{h:function(){return r}});var i=n(37820);class r{constructor(t,e,n){this.l=t,this.a=e,this.b=n}static fromObject(t){return!t||isNaN(t.l)||isNaN(t.a)||isNaN(t.b)?null:new r(t.l,t.a,t.b)}equalValue(t){return this.l===t.l&&this.a===t.a&&this.b===t.b}roundToPrecision(t){return new r((0,i.l)(this.l,t),(0,i.l)(this.a,t),(0,i.l)(this.b,t))}toObject(){return{l:this.l,a:this.a,b:this.b}}}r.epsilon=216/24389,r.kappa=24389/27},14475:function(t,e,n){"use strict";n.d(e,{z:function(){return i}});const i={_self:"_self",_blank:"_blank",_parent:"_parent",_top:"_top"}},14481:function(t){t.exports='<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.01 2.25c.74 0 1.47.1 2.18.25.32.07.55.33.59.65l.17 1.53a1.38 1.38 0 001.92 1.11l1.4-.61c.3-.13.64-.06.85.17a9.8 9.8 0 012.2 3.8c.1.3 0 .63-.26.82l-1.24.92a1.38 1.38 0 000 2.22l1.24.92c.26.19.36.52.27.82a9.8 9.8 0 01-2.2 3.8.75.75 0 01-.85.17l-1.4-.62a1.38 1.38 0 00-1.93 1.12l-.17 1.52a.75.75 0 01-.58.65 9.52 9.52 0 01-4.4 0 .75.75 0 01-.57-.65l-.17-1.52a1.38 1.38 0 00-1.93-1.11l-1.4.62a.75.75 0 01-.85-.18 9.8 9.8 0 01-2.2-3.8c-.1-.3 0-.63.27-.82l1.24-.92a1.38 1.38 0 000-2.22l-1.24-.92a.75.75 0 01-.28-.82 9.8 9.8 0 012.2-3.8c.23-.23.57-.3.86-.17l1.4.62c.4.17.86.15 1.25-.08.38-.22.63-.6.68-1.04l.17-1.53a.75.75 0 01.58-.65c.72-.16 1.45-.24 2.2-.25zM12 9a3 3 0 100 6 3 3 0 000-6z"></path></svg>'},14777:function(t,e,n){"use strict";n.d(e,{$4:function(){return z},$5:function(){return p},$o:function(){return I},AP:function(){return w},Di:function(){return m},EX:function(){return $},Ek:function(){return G},GA:function(){return u},H7:function(){return x},HC:function(){return D},Ic:function(){return k},Ik:function(){return C},JR:function(){return S},Ju:function(){return s},OL:function(){return q},O_:function(){return Z},P5:function(){return tt},QM:function(){return K},RF:function(){return o},RS:function(){return r},Re:function(){return R},Rr:function(){return nt},Ru:function(){return Y},Sj:function(){return N},TP:function(){return b},Uw:function(){return h},W7:function(){return V},YH:function(){return T},Yo:function(){return X},Zu:function(){return J},a$:function(){return U},by:function(){return y},e4:function(){return A},e_:function(){return Q},fA:function(){return f},kt:function(){return P},lK:function(){return B},mE:function(){return i},oI:function(){return d},pM:function(){return E},ps:function(){return v},re:function(){return H},sY:function(){return j},sl:function(){return l},sx:function(){return W},tI:function(){return M},tX:function(){return L},tZ:function(){return c},tn:function(){return F},uR:function(){return O},vR:function(){return g},wi:function(){return et},y5:function(){return a},y9:function(){return _}});var i="initialize",r="name",o="getNotifyMgr",s="identifier",a="push",c="isInitialized",u="config",l="instrumentationKey",h="logger",d="length",f="time",p="processNext",v="getProcessTelContext",g="addNotificationListener",b="removeNotificationListener",m="stopPollingInternalLogs",y="onComplete",w="getPlugin",$="flush",x="_extensions",k="splice",C="teardown",S="messageId",E="message",M="isAsync",F="_doTeardown",D="update",O="getNext",A="diagLog",T="setNextPlugin",I="createNew",B="cookieCfg",N="indexOf",R="substring",L="userAgent",j="split",P="setEnabled",z="substr",H="nodeType",_="apply",V="replace",U="enableDebugExceptions",W="logInternalMessage",q="toLowerCase",G="call",K="type",X="handler",J="isChildEvt",Z="getCtx",Q="setCtx",Y="complete",tt="traceId",et="spanId",nt="traceFlags"},14848:function(t,e,n){"use strict";n.d(e,{Eq:function(){return b},Es:function(){return g},Gy:function(){return x},Mx:function(){return m},QX:function(){return v},SU:function(){return p},Z8:function(){return h},eK:function(){return $},k5:function(){return k},mi:function(){return w},s8:function(){return l},yN:function(){return f},ym:function(){return y}});var i=n(40778),r=n(15128),o=n(14338),s=n(54130),a=n(87122),c=n(27478),u=n(37820);function l(t){return.2126*t.r+.7152*t.g+.0722*t.b}function h(t){function e(t){return t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)}return l(new a.M(e(t.r),e(t.g),e(t.b),1))}const d=(t,e)=>(t+.05)/(e+.05);function f(t,e){const n=h(t),i=h(e);return n>i?d(n,i):d(i,n)}function p(t){const e=Math.max(t.r,t.g,t.b),n=Math.min(t.r,t.g,t.b),r=e-n;let o=0;0!==r&&(o=e===t.r?(t.g-t.b)/r%6*60:e===t.g?60*((t.b-t.r)/r+2):60*((t.r-t.g)/r+4)),o<0&&(o+=360);const s=(e+n)/2;let a=0;return 0!==r&&(a=r/(1-Math.abs(2*s-1))),new i.D(o,a,s)}function v(t,e=1){const n=(1-Math.abs(2*t.l-1))*t.s,i=n*(1-Math.abs(t.h/60%2-1)),r=t.l-n/2;let o=0,s=0,c=0;return t.h<60?(o=n,s=i,c=0):t.h<120?(o=i,s=n,c=0):t.h<180?(o=0,s=n,c=i):t.h<240?(o=0,s=i,c=n):t.h<300?(o=i,s=0,c=n):t.h<360&&(o=n,s=0,c=i),new a.M(o+r,s+r,c+r,e)}function g(t){const e=Math.max(t.r,t.g,t.b),n=e-Math.min(t.r,t.g,t.b);let i=0;0!==n&&(i=e===t.r?(t.g-t.b)/n%6*60:e===t.g?60*((t.b-t.r)/n+2):60*((t.r-t.g)/n+4)),i<0&&(i+=360);let o=0;return 0!==e&&(o=n/e),new r.D(i,o,e)}function b(t,e=1){const n=t.s*t.v,i=n*(1-Math.abs(t.h/60%2-1)),r=t.v-n;let o=0,s=0,c=0;return t.h<60?(o=n,s=i,c=0):t.h<120?(o=i,s=n,c=0):t.h<180?(o=0,s=n,c=i):t.h<240?(o=0,s=i,c=n):t.h<300?(o=i,s=0,c=n):t.h<360&&(o=n,s=0,c=i),new a.M(o+r,s+r,c+r,e)}function m(t){function e(t){return t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)}const n=e(t.r),i=e(t.g),r=e(t.b),o=.4124564*n+.3575761*i+.1804375*r,s=.2126729*n+.7151522*i+.072175*r,a=.0193339*n+.119192*i+.9503041*r;return new c.P(o,s,a)}function y(t,e=1){function n(t){return t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055}const i=n(3.2404542*t.x-1.5371385*t.y-.4985314*t.z),r=n(-.969266*t.x+1.8760108*t.y+.041556*t.z),o=n(.0556434*t.x-.2040259*t.y+1.0572252*t.z);return new a.M(i,r,o,e)}function w(t){return function(t){function e(t){return t>o.h.epsilon?Math.pow(t,1/3):(o.h.kappa*t+16)/116}const n=e(t.x/c.P.whitePoint.x),i=e(t.y/c.P.whitePoint.y),r=116*i-16,s=500*(n-i),a=200*(i-e(t.z/c.P.whitePoint.z));return new o.h(r,s,a)}(m(t))}function $(t,e=1){return y(function(t){const e=(t.l+16)/116,n=e+t.a/500,i=e-t.b/200,r=Math.pow(n,3),s=Math.pow(e,3),a=Math.pow(i,3);let u=0;u=r>o.h.epsilon?r:(116*n-16)/o.h.kappa;let l=0;l=t.l>o.h.epsilon*o.h.kappa?s:t.l/o.h.kappa;let h=0;return h=a>o.h.epsilon?a:(116*i-16)/o.h.kappa,u=c.P.whitePoint.x*u,l=c.P.whitePoint.y*l,h=c.P.whitePoint.z*h,new c.P(u,l,h)}(t),e)}function x(t){return function(t){let e=0;(Math.abs(t.b)>.001||Math.abs(t.a)>.001)&&(e=(0,u.nv)(Math.atan2(t.b,t.a))),e<0&&(e+=360);const n=Math.sqrt(t.a*t.a+t.b*t.b);return new s.b(t.l,n,e)}(w(t))}function k(t,e=1){return $(function(t){let e=0,n=0;return 0!==t.h&&(e=Math.cos((0,u.tR)(t.h))*t.c,n=Math.sin((0,u.tR)(t.h))*t.c),new o.h(t.l,e,n)}(t),e)}},14996:function(t,e,n){"use strict";n.d(e,{WN:function(){return u},_Y:function(){return l}});var i=n(68136),r=n(62036),o=n(95239),s=n(31023);const{create:a}=i.G,c=a({name:"focus-stroke-outer-recipe"},{evaluate:t=>(0,r.W)(t(s.r),t(o.p))}),u=a("focus-stroke-outer",t=>t(c).evaluate(t)),l=u},15125:function(t){t.exports='<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M2.59 2.72l.06-.07a.5.5 0 01.63-.06l.07.06L8 7.29l4.65-4.64a.5.5 0 01.7.7L8.71 8l4.64 4.65c.18.17.2.44.06.63l-.06.07a.5.5 0 01-.63.06l-.07-.06L8 8.71l-4.65 4.64a.5.5 0 01-.7-.7L7.29 8 2.65 3.35a.5.5 0 01-.06-.63l.06-.07-.06.07z"></path></svg>'},15128:function(t,e,n){"use strict";n.d(e,{D:function(){return r}});var i=n(37820);class r{constructor(t,e,n){this.h=t,this.s=e,this.v=n}static fromObject(t){return!t||isNaN(t.h)||isNaN(t.s)||isNaN(t.v)?null:new r(t.h,t.s,t.v)}equalValue(t){return this.h===t.h&&this.s===t.s&&this.v===t.v}roundToPrecision(t){return new r((0,i.l)(this.h,t),(0,i.l)(this.s,t),(0,i.l)(this.v,t))}toObject(){return{h:this.h,s:this.s,v:this.v}}}},15454:function(t,e,n){"use strict";n.d(e,{J$:function(){return f},KU:function(){return d},OR:function(){return h},QV:function(){return a},Wy:function(){return u},_1:function(){return r},bA:function(){return o},hW:function(){return i},s6:function(){return c},vR:function(){return s},zi:function(){return l}});var i="function",r="object",o="undefined",s="prototype",a="hasOwnProperty",c=Object,u=c[s],l=c.assign,h=c.create,d=c.defineProperty,f=u[a]},16198:function(t,e,n){"use strict";n.d(e,{A:function(){return qt}});var i=n(39813),r=n(58207),o=n(99577),s=n(62044),a=n(58168),c=n(15454),u="call",l="toISOString",h="endsWith",d="startsWith",f="trim",p="toString",v=c.s6.freeze,g=(c.s6.seal,c.s6.keys,String[c.vR]),b=(g[f],g[h],g[d],Date[c.vR][l],Array.isArray),m=c.Wy[p],y=c.J$[p];y[u](c.s6),Object.getPrototypeOf;function w(t){return!(!t||typeof t!==c._1)}function $(t,e){if(t)for(var n in t)c.J$[u](t,n)&&e[u](t,n,t[n])}var x=b||function(t){return!(!t||"[object Array]"!==m[u](t))};({toString:null}).propertyIsEnumerable("toString");function k(t){return t}var C=v||k;function S(t){var e,n={};return $(t,function(t,e){n[t]=e[1],n[e[0]]=e[1]}),e=n,v&&$(e,function(t,e){(x(e)||w(e))&&v(e)}),C(e)}var E,M="locale",F="ver",D="name",O=S({UserExt:[0,"user"],DeviceExt:[1,"device"],TraceExt:[2,"trace"],WebExt:[3,"web"],AppExt:[4,"app"],OSExt:[5,"os"],SdkExt:[6,"sdk"],IntWebExt:[7,"intweb"],UtcExt:[8,"utc"],LocExt:[9,"loc"],CloudExt:[10,"cloud"],DtExt:[11,"dt"]}),A=S({id:[0,"id"],ver:[1,F],appName:[2,D],locale:[3,M],expId:[4,"expId"],env:[5,"env"]}),T=S({domain:[0,"domain"],browser:[1,"browser"],browserVer:[2,"browserVer"],screenRes:[3,"screenRes"],userConsent:[4,"userConsent"],consentDetails:[5,"consentDetails"]}),I=S({locale:[0,M],localId:[1,"localId"],id:[2,"id"]}),B=S({osName:[0,D],ver:[1,F]}),N=S({ver:[0,F],seq:[1,"seq"],installId:[2,"installId"],epoch:[3,"epoch"]}),R=S({msfpc:[0,"msfpc"],anid:[1,"anid"],serviceName:[2,"serviceName"]}),L=S({popSample:[0,"popSample"],eventFlags:[1,"eventFlags"]}),j=S({tz:[0,"tz"]}),P=S({sessionId:[0,"sesId"]}),z=S({localId:[0,"localId"],deviceClass:[1,"deviceClass"],make:[2,"make"],model:[3,"model"]}),H=S({role:[0,"role"],roleInstance:[1,"roleInstance"],roleVer:[2,"roleVer"]}),_=S({traceId:[0,"traceID"],traceName:[1,D],parentId:[2,"parentID"]}),V=S({traceId:[0,"traceId"],spanId:[1,"spanId"],traceFlags:[2,"traceFlags"]}),U=n(46543),W=n(20468),q=n(12839),G=n(69912),K=n(50090);function X(){return void 0===E&&(E=!!Z(0)),E}function J(){return X()?Z(0):null}function Z(t){var e,n,i=null;try{var r=(0,K.mS)();if(!r)return null;n=new Date,(i=0===t?r.localStorage:r.sessionStorage)&&(0,s.Tn)(i.setItem)&&(i.setItem(n,n),e=i.getItem(n)!==n,i.removeItem(n),e&&(i=null))}catch(t){i=null}return i}function Q(){return this.getId()}function Y(t){this.setId(t)}var tt=function(){function t(){(0,r.A)(t,this,function(t){t.setId=function(e){t.customId=e},t.getId=function(){return(0,s.Kg)(t.customId)?t.customId:t.automaticId}})}return t._staticInit=void(0,s.r)(t.prototype,"id",Q,Y),t}(),et="ai_session",nt=function(){function t(e,n){var i,a,c=(0,W.y0)(e),u=(0,q.um)(e);(0,r.A)(t,this,function(e){var r,l={sessionRenewalMs:(r=n).sessionRenewalMs&&function(){return r.sessionRenewalMs},sessionExpirationMs:r.sessionExpirationMs&&function(){return r.sessionExpirationMs},cookieDomain:r.cookieDomain&&function(){return r.cookieDomain},namePrefix:r.namePrefix&&function(){return r.namePrefix},sessionAsGuid:function(){return r.sessionAsGuid},idLength:function(){return r.idLength?r.idLength:22}};function h(t){var n=e.automaticSession,i=t.split("|");i.length>0&&n.setId(i[0]);try{if(i.length>1){var r=+i[1];n.acquisitionDate=+new Date(r),n.acquisitionDate=n.acquisitionDate>0?n.acquisitionDate:0}if(i.length>2){var o=+i[2];n.renewalDate=+new Date(o),n.renewalDate=n.renewalDate>0?n.renewalDate:0}}catch(t){(0,W.ZP)(c,1,510,"Error parsing ai_session cookie, session will be reset: "+t)}0===n.renewalDate&&(0,W.ZP)(c,2,517,"AI session renewal date is 0, session will be reset.")}function d(){var t=e.automaticSession,n=(new Date).getTime(),i=e.config.sessionAsGuid();!(0,s.b0)(i)&&i?(0,s.Lm)(i)?t.setId((0,o.gj)()):t.setId((0,o.gj)(i)):t.setId((0,G.Si)(l&&l.idLength?l.idLength():22)),t.acquisitionDate=n,t.renewalDate=n,f(t.getId(),t.acquisitionDate,t.renewalDate),X()||(0,W.ZP)(c,2,505,"Browser does not support local storage. Session durations will be inaccurate.")}function f(t,n,r){var o=n+e.config.sessionExpirationMs(),s=r+e.config.sessionRenewalMs(),c=new Date,l=[t,n,r];o<s?c.setTime(o):c.setTime(s);var h=e.config.cookieDomain?e.config.cookieDomain():null;u.set(a(),l.join("|")+";expires="+c.toUTCString(),null,h),i=(new Date).getTime()}(0,s.Tn)(n.sessionExpirationMs)||(l.sessionExpirationMs=function(){return t.acquisitionSpan}),(0,s.Tn)(n.sessionRenewalMs)||(l.sessionRenewalMs=function(){return t.renewalSpan}),e.config=l,a=function(){return e.config.namePrefix&&e.config.namePrefix()?et+e.config.namePrefix():et},e.automaticSession=new tt,e.update=function(){e.automaticSession.getId()||function(){var t=u.get(a());if(t&&(0,s.Tn)(t.split))h(t);else{var n=function(t,e){var n=J();if(null!==n)try{return n.getItem(e)}catch(e){E=!1,(0,W.ZP)(t,1,503,"Browser failed read of local storage. "+e)}return null}(c,a());n&&h(n)}e.automaticSession.getId()||d()}();var n=e.automaticSession,r=e.config,o=(new Date).getTime(),l=o-n.acquisitionDate>r.sessionExpirationMs(),p=o-n.renewalDate>r.sessionRenewalMs();if(l||p)d();else{(!i||o-i>t.cookieUpdateInterval)&&(n.renewalDate=o,f(n.getId(),n.acquisitionDate,n.renewalDate))}},e.backup=function(){var t,n,i,r=e.automaticSession;t=r.getId(),n=r.acquisitionDate,i=r.renewalDate,function(t,e,n){var i=J();if(null!==i)try{return i.setItem(e,n),!0}catch(e){E=!1,(0,W.ZP)(t,1,504,"Browser failed write to local storage. "+e)}}(c,a(),[t,n,i].join("|"))}})}return t.acquisitionSpan=864e5,t.renewalSpan=18e5,t.cookieUpdateInterval=6e4,t}(),it=n(88383),rt=["AX","EX","SF","CS","CF","CT","CU","DC","DF","H5","HL","WS","WP"];function ot(t,e){void 0===e&&(e=rt);var n=null;if(t)for(var i=t.split(","),r=0;r<i.length;r++)st(i[r],e)&&(n?n+=","+i[r]:n=i[r]);return n}function st(t,e){if(void 0===e&&(e=rt),!t||t.length<4)return!1;for(var n=!1,i=t.substring(0,3).toString().toUpperCase(),r=0;r<e.length;r++)if(e[r]+":"===i&&t.length<=256){n=!0;break}return n}function at(){return this.getExpId()}var ct=function(){function t(e,n){var i=null,s=rt.slice(0),a="Treatments",c=(0,q.um)(n),u=e;(0,r.A)(t,this,function(t){if((0,it.Wt)()){var n=(0,it.YE)().documentElement;n&&(t.locale=n.lang)}function r(t){t!==i&&(i=ot(t,s))}t.env=e.env?e.env:function(t){var e,n={},i=(0,it.YE)();if(i){e=i&&i.querySelectorAll("meta");for(var r=0;r<e.length;r++){var o=e[r];if(o.name)if(0===o.name.toLowerCase().indexOf(t))n[o.name.replace(t,"")]=o.content}}return n}("awa-").env,t.getExpId=function(){return u.expId?(r(u.expId),i):(r((0,o.UM)(c,a)),i)}})}return t.validateAppExpId=ot,t._staticInit=void(0,s.r)(t.prototype,"expId",at),t}(),ut=function(){},lt=function(){};function ht(){return this.getMsfpc()}function dt(){return this.getAnid()}var ft=function(){function t(e,n){var i=(0,q.um)(n);(0,r.A)(t,this,function(t){e.serviceName&&(t.serviceName=e.serviceName),t.getMsfpc=function(){return(0,o.UM)(i,"MSFPC")},t.getAnid=function(){return(0,o.UM)(i,"ANON").slice(0,34)}})}var e;return t._staticInit=(e=t.prototype,(0,s.r)(e,"msfpc",ht),void(0,s.r)(e,"anid",dt)),t}(),pt=function(){var t=(new Date).getTimezoneOffset(),e=t%60,n=(t-e)/60,i="+";n>0&&(i="-"),n=Math.abs(n),e=Math.abs(e),this.tz=i+(n<10?"0"+n:n.toString())+":"+(e<10?"0"+e:e.toString())},vt={WIN:/(windows|win32)/i,WINRT:/ arm;/i,WINPHONE:/windows\sphone\s\d+\.\d+/i,OSX:/(macintosh|mac os x)/i,IOS:/(ipad|iphone|ipod)(?=.*like mac os x)/i,LINUX:/(linux|joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk)/i,ANDROID:/android/i,CROS:/CrOS/i},gt={5.1:"XP","6.0":"Vista",6.1:"7",6.2:"8",6.3:"8.1","10.0":"10"},bt="([\\d,_,.]+)",mt="Unknown",yt=[{r:vt.WINPHONE,os:"Windows Phone"},{r:vt.WINRT,os:"Windows RT"},{r:vt.WIN,os:"Windows"},{r:vt.IOS,os:"iOS"},{r:vt.ANDROID,os:"Android"},{r:vt.LINUX,os:"Linux"},{r:vt.CROS,os:"Chrome OS"},{s:"x11",os:"Unix"},{s:"blackberry",os:"BlackBerry"},{s:"symbian",os:"Symbian"},{s:"nokia",os:"Nokia"},{r:vt.OSX,os:"Mac OS X"}];function wt(t,e){return"Windows"===e?$t(t,"Windows NT"):"Android"===e?$t(t,e):"Mac OS X"===e?function(t){var e=t.match(new RegExp("Mac OS X "+bt));if(e){var n=e[1].replace(/_/g,".");if(n){var i=xt(n);return i?n.split(i)[0]:n}}return mt}(t):"iOS"===e?function(t){var e=t.match(new RegExp("OS "+bt));if(e){var n=e[1].replace(/_/g,".");if(n){var i=xt(n);return i?n.split(i)[0]:n}}return mt}(t):mt}function $t(t,e){var n=t.match(new RegExp(e+" ([\\d,.]+)"));return n?gt[n[1]]?gt[n[1]]:n[1]:mt}function xt(t){return t.indexOf(".")>-1?".":t.indexOf("_")>-1?"_":null}var kt=function(t){if(t.populateOperatingSystemInfo){var e=this,n=(0,it.w3)()||{},i=t.userAgent||n.userAgent||"",r=t.userAgentData||n.userAgentData||{};if(i){var o=function(t){for(var e=0;e<yt.length;e++){var n=yt[e];if(n.r&&t.match(n.r))return n.os;if(n.s&&-1!==t.indexOf(n.s))return n.os}return mt}(i.toLowerCase());e.name=o,e.ver=wt(i,o)}e.name&&e.name!==mt||!(0,s.Kg)(r.platform)||(e.name=r.platform)}},Ct=n(96271),St="MicrosoftApplicationsTelemetryDeviceId";var Et=function(){function t(e,n){var i=0;(0,r.A)(t,this,function(t){var r=e.propertyStorageOverride;t.seq=i,t.epoch=(0,G.VN)(!1).toString();var s=(0,q.um)(n,e);if(s.isEnabled()||r){var a=function(t,e,n){return e?e.getProperty(n)||"":(0,o.UM)(t,n)}(s,r,St);a||(a=(0,Ct.aq)()),function(t,e,n,i){e?e.setProperty(n,i):t.set(n,i,31536e3)}(s,r,St,a),t.installId=a}else s.purge(St);t.getSequenceId=function(){return++i}})}return t.__ieDyn=1,t}(),Mt=function(t,e,n,i){var r=this;if(r.traceId=e||(0,Ct.cL)(),t.enableDistributedTracing&&!n&&(n=(0,Ct.cL)().substring(0,16)),r.parentId=n,t.enableApplicationInsightsTrace){r.name=i;var o=(0,it.g$)();o&&o.pathname&&(r.name=o.pathname)}},Ft="setLocalId";function Dt(){return this.getLocalId()}function Ot(t){this[Ft](t)}var At=function(){function t(e,n,i){var a,c=n,u=(0,q.um)(i,e);(0,r.A)(t,this,function(n){if(u&&u.isEnabled()&&(p(),c.enableApplicationInsightsUser)){var i=(0,o.UM)(u,t.userCookieName);if(i){var r=i.split(t.cookieSeparator);r.length>0&&(n.id=r[0])}if(!n.id){n.id=(0,G.Si)(e&&!(0,s.b0)(e.idLength)?e.idLength:22);var l=(0,s._u)(new Date);n.accountAcquisitionDate=l;var h=[n.id,l],d=c.cookieDomain?c.cookieDomain:void 0;u.set(t.userCookieName,h.join(t.cookieSeparator),31536e3,d)}}if("undefined"!=typeof navigator){var f=navigator;n.locale=f.userLanguage||f.language}function p(){if(!c.hashIdentifiers&&!c.dropIdentifiers){var t=(0,o.UM)(u,"MUID");t&&(a="t:"+t)}return a}n.getLocalId=function(){return a||p()},n[Ft]=function(t){a=t}})}return t.cookieSeparator="|",t.userCookieName="ai_user",t._staticInit=void(0,s.r)(t.prototype,"localId",Dt,Ot),t}(),Tt=function(t){var e=this;e.popSample=100,e.eventFlags=0,t.hashIdentifiers&&(e.eventFlags=1048576|e.eventFlags),t.dropIdentifiers&&(e.eventFlags=2097152|e.eventFlags)},It="([\\d,.]+)",Bt="Unknown",Nt="Edg/",Rt=[{ua:"OPR/",b:"Opera"},{ua:"PhantomJS",b:"PhantomJS"},{ua:"Edge",b:"Edge"},{ua:Nt,b:"Edge"},{ua:"Electron",b:"Electron"},{ua:"Chrome",b:"Chrome"},{ua:"Trident",b:"MSIE"},{ua:"MSIE ",b:"MSIE"},{ua:"Firefox",b:"Firefox"},{ua:"Safari",b:"Safari"},{ua:"SkypeShell",b:"SkypeShell"}],Lt=[{br:"Microsoft Edge",b:"Edge"},{br:"Google Chrome",b:"Chrome"},{br:"Opera",b:"Opera"}];function jt(t,e){return e.indexOf(t)>-1}function Pt(t,e){for(var n=0;n<e.length;n++)if(t==e[n].brand)return e[n].version;return null}function zt(t,e){return"MSIE"===e?function(t){var e=t.match(new RegExp("MSIE "+It));if(e)return e[1];var n=t.match(new RegExp("rv:"+It));if(n)return n[1]}(t):function(t,e){"Safari"===t?t="Version":"Edge"===t&&jt(Nt,e)&&(t="Edg");var n=e.match(new RegExp(t+"/"+It));if(n)return n[1];if("Opera"===t&&(n=e.match(new RegExp("OPR/"+It))))return n[1];return Bt}(e,t)}function Ht(){return this.getUserConsent()}var _t=function(){function t(e,n){var i=(0,q.um)(n),a=e||{};(0,r.A)(t,this,function(t){var e=(0,it.g$)();if(e){var n=e.hostname;n&&(t.domain="file:"===e.protocol?"local":n)}if(a.populateBrowserInfo){var r=a.userAgent,c=(a.userAgentData||{}).brands,u=(0,it.w3)();u&&(r=r||u.userAgent||"",c=c||(u.userAgentData||{}).brands),function(e,n){if((0,s.cy)(n))try{for(var i=0;i<Lt.length;i++){var r=Pt(Lt[i].br,n);if(r)return t.browser=Lt[i].b,void(t.browserVer=r)}}catch(t){}if(e){var o=function(t){if(t)for(var e=0;e<Rt.length;e++)if(jt(Rt[e].ua,t))return Rt[e].b;return Bt}(e);t.browser=o,t.browserVer=zt(e,o)}}(r,c);var l=function(){var t={h:0,w:0},e=(0,it.zk)();return e&&e.screen&&(t.h=screen.height,t.w=screen.width),t}();t.screenRes=l.w+"X"+l.h}t.getUserConsent=function(){return a.userConsented||!!(0,o.UM)(i,a.userConsentCookieName||"MSCC")},t.getUserConsentDetails=function(){try{var t=a.callback;if(t&&t.userConsentDetails){var e=t.userConsentDetails();if(e)return JSON.stringify({Required:e.Required||!1,Analytics:e.Analytics||!1,SocialMedia:e.SocialMedia||!1,Advertising:e.Advertising||!1})}}catch(t){}return null},(0,s.r)(t,"userConsent",t.getUserConsent)})}return t._staticInit=void(0,s.r)(t.prototype,"userConsent",Ht),t}();function Vt(t,e,n,i,r){var o=e.ext[O[t]];return o&&(0,s.z)(i,function(t,e){if((0,s.Kg)(e)||(0,s.Et)(e)||(0,s.Lm)(e)){var i=o[n[t]];!r&&(i||(0,s.Kg)(i)||(0,s.Et)(i)||(0,s.Lm)(i))&&(e=i),o[n[t]]=e}}),o}var Ut=function(){function t(e,n,i){(0,r.A)(t,this,function(t){t.app=new ct(n,i),t.cloud=new ut,t.user=new At(e,n,i),t.os=new kt(n),t.web=new _t(n,i);var r=new Et(e,i),o=new ft(n,i),a=new Tt(n);t.loc=new pt,t.device=new lt;var c=new nt(i,n);t.session=new tt;var u,l,h,d=(u=new Mt(n),l=v(),h=u||{},{getName:function(){return h.name},setName:function(t){l&&l.setName(t),h.name=t},getTraceId:function(){return h.traceId},setTraceId:function(t){l&&l.setTraceId(t),(0,U.hX)(t)&&(h.traceId=t)},getSpanId:function(){return h.parentId},setSpanId:function(t){l&&l.setSpanId(t),(0,U.wN)(t)&&(h.parentId=t)},getTraceFlags:function(){return h.traceFlags},setTraceFlags:function(t){l&&l.setTraceFlags(t),h.traceFlags=t}}),f=!(n||{}).eventContainExtFields;function p(){var e=t.session;if(e&&(0,s.Kg)(e.customId))return e.customId;c.update();var n=c.automaticSession;if(n){var i=n.getId();i&&(0,s.Kg)(i)&&(e.automaticId=i)}return e.automaticId}function v(){var t=d;return i&&i.getTraceCtx&&(t=i.getTraceCtx(!1)||d),t}t.getTraceCtx=function(){return d},t.getSessionId=p,t.applyApplicationContext=function(e){var n,i=t.app;Vt(4,e,A,((n={})[0]=i.id,n[1]=i.ver,n[2]=i.name,n[3]=i.locale,n[4]=i.getExpId(),n[5]=i.env,n),f)},t.applyUserContext=function(e){var n,i=t.user;Vt(0,e,I,((n={})[1]=i.getLocalId(),n[0]=i.locale,n[2]=i.id,n),f)},t.applyWebContext=function(e){var n,i=t.web;Vt(3,e,T,((n={})[0]=i.domain,n[1]=i.browser,n[2]=i.browserVer,n[3]=i.screenRes,n[5]=i.getUserConsentDetails(),n[4]=i.getUserConsent(),n),f)},t.applyOsContext=function(e){var n,i=t.os;Vt(5,e,B,((n={})[0]=i.name,n[1]=i.ver,n),f)},t.applySdkContext=function(t){var e;Vt(6,t,N,((e={})[2]=r.installId,e[1]=r.getSequenceId(),e[3]=r.epoch,e),f)},t.applyIntWebContext=function(t){var e;Vt(7,t,R,((e={})[0]=o.getMsfpc(),e[1]=o.getAnid(),e[2]=o.serviceName,e),f)},t.applyUtcContext=function(t){var e,n=((e={})[0]=a.popSample,e);a.eventFlags>0&&(n[1]=a.eventFlags),Vt(8,t,L,n,f)},t.applyLocContext=function(e){var n;Vt(9,e,j,((n={})[0]=t.loc.tz,n),f)},t.applySessionContext=function(t){var e;Vt(4,t,P,((e={})[0]=p(),e),f)},t.applyDeviceContext=function(e){var n,i=t.device;Vt(1,e,z,((n={})[0]=i.localId,n[2]=i.make,n[3]=i.model,n[1]=i.deviceClass,n),f)},t.applyCloudContext=function(e){var n,i=t.cloud;Vt(10,e,H,((n={})[0]=i.role,n[1]=i.roleInstance,n[2]=i.roleVer,n),f)},t.applyAITraceContext=function(t){var e;if(n.enableApplicationInsightsTrace){var i=v();i&&Vt(2,t,_,((e={})[0]=i.getTraceId(),e[1]=i.getName(),e[2]=i.getSpanId(),e),!1)}},t.applyDistributedTraceContext=function(t){var e,n=v();if(n){var i=((e={})[0]=n.getTraceId(),e[1]=n.getSpanId(),e),r=n.getTraceFlags();(0,s.hX)(r)||(i[2]=r),Vt(11,t,V,i,!1)}}})}return t.__ieDyn=1,t}();var Wt=[O[4],O[0],O[3],O[5],O[6],O[7],O[8],O[9],O[1],O[2],O[11],O[10]],qt=function(t){function e(){var n,i,a,c=t.call(this)||this;return c.identifier="SystemPropertiesCollector",c.priority=3,c.version="3.2.8",(0,r.A)(e,c,function(t,e){function r(){n=null,i={}}r(),t.initialize=function(i,r,o){e.initialize(i,r,o),a=t._getTelCtx().getExtCfg(t.identifier),n=new Ut(i,a,r),r&&r.setTraceCtx&&r.setTraceCtx(n.getTraceCtx())},t.processTelemetry=function(e,r){(0,o.u9)(e,t.identifier),r=t._getTelCtx(r);var c,u,l=e.ext=e.ext?e.ext:{};e.data=e.data?e.data:{},(0,s.Iu)(Wt,function(t){l[t]=l[t]||{}}),n&&(n.applyApplicationContext(e),n.applyUserContext(e),n.applyWebContext(e),n.applyOsContext(e),n.applySdkContext(e),n.applyIntWebContext(e),n.applyUtcContext(e),n.applyLocContext(e),n.applySessionContext(e),n.applyDeviceContext(e),a.enableApplicationInsightsTrace&&n.applyAITraceContext(e),a.enableDistributedTracing&&n.applyDistributedTraceContext(e),n.applyCloudContext(e)),(0,s.Iu)((0,s.cG)(l),function(t){0===(0,s.cG)(l[t]).length&&delete l[t]}),c=i,u=e.data,c&&(0,s.z)(c,function(t,e){u[t]||(u[t]=e)}),t.processNext(e,r)},t.getPropertiesContext=function(){return n},t.setProperty=function(t,e){i[t]=e},t._doTeardown=function(t,e){var i=(t||{}).core();if(i&&i.getTraceCtx&&n){var o=i.getTraceCtx(!1);o&&o===n.getTraceCtx()&&i.setTraceCtx(null)}r()}}),c}return(0,i.qU)(e,t),e.__ieDyn=1,e}(a.s)},17252:function(t,e,n){"use strict";n.d(e,{DZ:function(){return o},dc:function(){return c},nK:function(){return s},xK:function(){return a}});var i=n(68136);const{create:r}=i.G,o=r("neutral-fill-input-rest-delta",0),s=r("neutral-fill-input-hover-delta",0),a=r("neutral-fill-input-active-delta",0),c=r("neutral-fill-input-focus-delta",0)},17469:function(t,e,n){"use strict";n.d(e,{i:function(){return i},u:function(){return r}});const i=Object.freeze({prefix:"msft",shadowRootMode:"open",registry:customElements}),r=Object.freeze({prefix:"msn",shadowRootMode:"open",registry:customElements})},17767:function(t,e,n){"use strict";n.d(e,{f:function(){return r}});var i=n(4126);function r(t,e){return new i.o("appearance",t,e)}},17884:function(t,e,n){"use strict";n.d(e,{r:function(){return f},U:function(){return d}});var i=n(56911),r=n(92011),o=n(60815),s=n(38493),a=n(55230);var c=n(50180),u=n(82239),l=n(29025),h=n(88458);class d extends r.L{constructor(){super(...arguments),this._options=[],this.selectedIndex=-1,this.selectedOptions=[],this.shouldSkipFocus=!1,this.typeaheadBuffer="",this.typeaheadExpired=!0,this.typeaheadTimeout=-1}get firstSelectedOption(){return this.selectedOptions[0]??null}get hasSelectableOptions(){return this.options.length>0&&!this.options.every(t=>t.disabled)}get length(){return this.options?.length??0}get options(){return o.cP.track(this,"options"),this._options}set options(t){this._options=t,o.cP.notify(this,"options")}get typeAheadExpired(){return this.typeaheadExpired}set typeAheadExpired(t){this.typeaheadExpired=t}clickHandler(t){const e=t.target.closest("option,[role=option]");if(e&&!e.disabled)return this.selectedIndex=this.options.indexOf(e),!0}focusAndScrollOptionIntoView(t=this.firstSelectedOption){this.contains(document.activeElement)&&null!==t&&(t.focus(),requestAnimationFrame(()=>{t.scrollIntoView({block:"nearest"})}))}focusinHandler(t){this.shouldSkipFocus||t.target!==t.currentTarget||(this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}getTypeaheadMatches(){const t=this.typeaheadBuffer.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&"),e=new RegExp(`^${t}`,"gi");return this.options.filter(t=>t.text.trim().match(e))}getSelectableIndex(t=this.selectedIndex,e){const n=t>e?-1:t<e?1:0,i=t+n;let r=null;switch(n){case-1:r=this.options.reduceRight((t,e,n)=>!t&&!e.disabled&&n<i?e:t,r);break;case 1:r=this.options.reduce((t,e,n)=>!t&&!e.disabled&&n>i?e:t,r)}return this.options.indexOf(r)}handleChange(t,e){if("selected"===e)d.slottedOptionFilter(t)&&(this.selectedIndex=this.options.indexOf(t)),this.setSelectedOptions()}handleTypeAhead(t){this.typeaheadTimeout&&window.clearTimeout(this.typeaheadTimeout),this.typeaheadTimeout=window.setTimeout(()=>this.typeaheadExpired=!0,d.TYPE_AHEAD_TIMEOUT_MS),t.length>1||(this.typeaheadBuffer=`${this.typeaheadExpired?"":this.typeaheadBuffer}${t}`)}keydownHandler(t){if(this.disabled)return!0;this.shouldSkipFocus=!1;const e=t.key;switch(e){case a.kE:t.shiftKey||(t.preventDefault(),this.selectFirstOption());break;case a.HX:t.shiftKey||(t.preventDefault(),this.selectNextOption());break;case a.I5:t.shiftKey||(t.preventDefault(),this.selectPreviousOption());break;case a.FM:t.preventDefault(),this.selectLastOption();break;case a.J9:return this.focusAndScrollOptionIntoView(),!0;case a.Mm:case a.F9:return!0;case a.gG:if(this.typeaheadExpired)return!0;default:return 1===e.length&&this.handleTypeAhead(`${e}`),!0}}mousedownHandler(t){return this.shouldSkipFocus=!this.contains(document.activeElement),!0}multipleChanged(t,e){this.ariaMultiSelectable=e?"true":null}selectedIndexChanged(t,e){if(this.hasSelectableOptions){if(this.options[this.selectedIndex]?.disabled&&"number"==typeof t){const n=this.getSelectableIndex(t,e),i=n>-1?n:t;return this.selectedIndex=i,void(e===i&&this.selectedIndexChanged(e,i))}this.setSelectedOptions()}else this.selectedIndex=-1}selectedOptionsChanged(t,e){const n=e.filter(d.slottedOptionFilter);this.options?.forEach(t=>{const e=o.cP.getNotifier(t);e.unsubscribe(this,"selected"),t.selected=n.includes(t),e.subscribe(this,"selected")})}selectFirstOption(){this.disabled||(this.selectedIndex=this.options?.findIndex(t=>!t.disabled)??-1)}selectLastOption(){this.disabled||(this.selectedIndex=function(t,e){let n=t.length;for(;n--;)if(e(t[n],n,t))return n;return-1}(this.options,t=>!t.disabled))}selectNextOption(){!this.disabled&&this.selectedIndex<this.options.length-1&&(this.selectedIndex+=1)}selectPreviousOption(){!this.disabled&&this.selectedIndex>0&&(this.selectedIndex=this.selectedIndex-1)}setDefaultSelectedOption(){this.selectedIndex=this.options?.findIndex(t=>t.defaultSelected)??-1}setSelectedOptions(){this.options?.length&&(this.selectedOptions=[this.options[this.selectedIndex]],this.ariaActiveDescendant=this.firstSelectedOption?.id??"",this.focusAndScrollOptionIntoView())}slottedOptionsChanged(t,e){this.options=e.reduce((t,e)=>((0,u.nA)(e)&&t.push(e),t),[]);const n=`${this.options.length}`;this.options.forEach((t,e)=>{t.id||(t.id=(0,c.NF)("option-")),t.ariaPosInSet=`${e+1}`,t.ariaSetSize=n}),this.$fastController.isConnected&&(this.setSelectedOptions(),this.setDefaultSelectedOption())}typeaheadBufferChanged(t,e){if(this.$fastController.isConnected){const t=this.getTypeaheadMatches();if(t.length){const e=this.options.indexOf(t[0]);e>-1&&(this.selectedIndex=e)}this.typeaheadExpired=!1}}}d.slottedOptionFilter=t=>(0,u.nA)(t)&&!t.hidden,d.TYPE_AHEAD_TIMEOUT_MS=1e3,(0,i.Cg)([(0,s.CF)({mode:"boolean"}),(0,i.Sn)("design:type",Boolean)],d.prototype,"disabled",void 0),(0,i.Cg)([o.sH,(0,i.Sn)("design:type",Number)],d.prototype,"selectedIndex",void 0),(0,i.Cg)([o.sH,(0,i.Sn)("design:type",Array)],d.prototype,"selectedOptions",void 0),(0,i.Cg)([o.sH,(0,i.Sn)("design:type",Array)],d.prototype,"slottedOptions",void 0),(0,i.Cg)([o.sH,(0,i.Sn)("design:type",String)],d.prototype,"typeaheadBuffer",void 0);class f{}(0,i.Cg)([o.sH,(0,i.Sn)("design:type",Object)],f.prototype,"ariaActiveDescendant",void 0),(0,i.Cg)([o.sH,(0,i.Sn)("design:type",Object)],f.prototype,"ariaDisabled",void 0),(0,i.Cg)([o.sH,(0,i.Sn)("design:type",Object)],f.prototype,"ariaExpanded",void 0),(0,i.Cg)([o.sH,(0,i.Sn)("design:type",Object)],f.prototype,"ariaMultiSelectable",void 0),(0,h.X)(f,l.z),(0,h.X)(d,f)},18622:function(t,e,n){"use strict";n.d(e,{S:function(){return r},m5:function(){return i}});var i="",r="https://browser.events.data.microsoft.com/OneCollector/1.0/"},18893:function(t,e,n){"use strict";n.d(e,{R:function(){return r}});var i=n(96950);function r(t){return t?"string"==typeof t?new i.dj(t):"inline"in t?t.inline():t:i.dj.empty}},18931:function(t,e,n){"use strict";n.d(e,{V7:function(){return v},lT:function(){return x}});var i=n(93800),r=n(60815),o=n(19470),s=n(81263),a=n(47429),c=n(7813),u=n(34188);const l={bubbles:!0,composed:!0,cancelable:!0},h="isConnected",d=new WeakMap;function f(t){var e,n;return null!==(n=null!==(e=t.shadowRoot)&&void 0!==e?e:d.get(t))&&void 0!==n?n:null}let p;class v extends i.S{constructor(t,e){super(t),this.boundObservables=null,this.needsInitialization=!0,this.hasExistingShadowRoot=!1,this._template=null,this.stage=3,this.guardBehaviorConnection=!1,this.behaviors=null,this.behaviorsConnected=!1,this._mainStyles=null,this.$fastController=this,this.view=null,this.source=t,this.definition=e;const n=e.shadowOptions;if(void 0!==n){let e=t.shadowRoot;e?this.hasExistingShadowRoot=!0:(e=t.attachShadow(n),"closed"===n.mode&&d.set(t,e))}const i=r.cP.getAccessors(t);if(i.length>0){const e=this.boundObservables=Object.create(null);for(let n=0,r=i.length;n<r;++n){const r=i[n].name,o=t[r];void 0!==o&&(delete t[r],e[r]=o)}}}get isConnected(){return r.cP.track(this,h),1===this.stage}setNeedsInitialization(t){this.needsInitialization=t}get context(){var t,e;return null!==(e=null===(t=this.view)||void 0===t?void 0:t.context)&&void 0!==e?e:r.ao.default}get isBound(){var t,e;return null!==(e=null===(t=this.view)||void 0===t?void 0:t.isBound)&&void 0!==e&&e}get sourceLifetime(){var t;return null===(t=this.view)||void 0===t?void 0:t.sourceLifetime}get template(){var t;if(null===this._template){const e=this.definition;this.source.resolveTemplate?this._template=this.source.resolveTemplate():e.template&&(this._template=null!==(t=e.template)&&void 0!==t?t:null)}return"function"==typeof this._template&&(this._template=this._template(this.source)),this._template}set template(t){this._template!==t&&(this._template=t,"function"==typeof this._template&&(this._template=this._template(this.source)),this.needsInitialization||this.renderTemplate(this._template))}get mainStyles(){var t;if(null===this._mainStyles){const e=this.definition;this.source.resolveStyles?this._mainStyles=this.source.resolveStyles():e.styles&&(this._mainStyles=null!==(t=e.styles)&&void 0!==t?t:null)}return this._mainStyles}set mainStyles(t){this._mainStyles!==t&&(null!==this._mainStyles&&this.removeStyles(this._mainStyles),this._mainStyles=t,this.needsInitialization||this.addStyles(t))}onUnbind(t){var e;null===(e=this.view)||void 0===e||e.onUnbind(t)}addBehavior(t){var e,n;const i=null!==(e=this.behaviors)&&void 0!==e?e:this.behaviors=new Map,r=null!==(n=i.get(t))&&void 0!==n?n:0;0===r?(i.set(t,1),t.addedCallback&&t.addedCallback(this),!t.connectedCallback||this.guardBehaviorConnection||1!==this.stage&&0!==this.stage||t.connectedCallback(this)):i.set(t,r+1)}removeBehavior(t,e=!1){const n=this.behaviors;if(null===n)return;const i=n.get(t);void 0!==i&&(1===i||e?(n.delete(t),t.disconnectedCallback&&3!==this.stage&&t.disconnectedCallback(this),t.removedCallback&&t.removedCallback(this)):n.set(t,i-1))}addStyles(t){var e;if(!t)return;const n=this.source;if(t instanceof HTMLElement){(null!==(e=f(n))&&void 0!==e?e:this.source).append(t)}else if(!t.isAttachedTo(n)){const e=t.behaviors;if(t.addStylesTo(n),null!==e)for(let t=0,n=e.length;t<n;++t)this.addBehavior(e[t])}}removeStyles(t){var e;if(!t)return;const n=this.source;if(t instanceof HTMLElement){(null!==(e=f(n))&&void 0!==e?e:n).removeChild(t)}else if(t.isAttachedTo(n)){const e=t.behaviors;if(t.removeStylesFrom(n),null!==e)for(let t=0,n=e.length;t<n;++t)this.removeBehavior(e[t])}}connect(){3===this.stage&&(this.stage=0,this.bindObservables(),this.connectBehaviors(),this.needsInitialization?(this.renderTemplate(this.template),this.addStyles(this.mainStyles),this.needsInitialization=!1):null!==this.view&&this.view.bind(this.source),this.stage=1,r.cP.notify(this,h))}bindObservables(){if(null!==this.boundObservables){const t=this.source,e=this.boundObservables,n=Object.keys(e);for(let i=0,r=n.length;i<r;++i){const r=n[i];t[r]=e[r]}this.boundObservables=null}}connectBehaviors(){if(!1===this.behaviorsConnected){const t=this.behaviors;if(null!==t){this.guardBehaviorConnection=!0;for(const e of t.keys())e.connectedCallback&&e.connectedCallback(this);this.guardBehaviorConnection=!1}this.behaviorsConnected=!0}}disconnectBehaviors(){if(!0===this.behaviorsConnected){const t=this.behaviors;if(null!==t)for(const e of t.keys())e.disconnectedCallback&&e.disconnectedCallback(this);this.behaviorsConnected=!1}}disconnect(){1===this.stage&&(this.stage=2,r.cP.notify(this,h),null!==this.view&&this.view.unbind(),this.disconnectBehaviors(),this.stage=3)}onAttributeChangedCallback(t,e,n){const i=this.definition.attributeLookup[t];void 0!==i&&i.onAttributeChangedCallback(this.source,n)}emit(t,e,n){return 1===this.stage&&this.source.dispatchEvent(new CustomEvent(t,{detail:e,...l,...n}))}renderTemplate(t){var e;const n=this.source,i=null!==(e=f(n))&&void 0!==e?e:n;if(null!==this.view)this.view.dispose(),this.view=null;else if(!this.needsInitialization||this.hasExistingShadowRoot){this.hasExistingShadowRoot=!1;for(let t=i.firstChild;null!==t;t=i.firstChild)i.removeChild(t)}t&&(this.view=t.render(n,i,n),this.view.sourceLifetime=r.Nx.coupled)}static forCustomElement(t){const e=t.$fastController;if(void 0!==e)return e;const n=c.I.getForInstance(t);if(void 0===n)throw o.Zx.error(1401);return t.$fastController=new p(t,n)}static setStrategy(t){p=t}}function g(t){var e;return"adoptedStyleSheets"in t?t:null!==(e=f(t))&&void 0!==e?e:t.getRootNode()}(0,o.rV)(v),v.setStrategy(v);class b{constructor(t){const e=b.styleSheetCache;this.sheets=t.map(t=>{if(t instanceof CSSStyleSheet)return t;let n=e.get(t);return void 0===n&&(n=new CSSStyleSheet,n.replaceSync(t),e.set(t,n)),n})}addStylesTo(t){const e=g(t);e.adoptedStyleSheets=[...e.adoptedStyleSheets,...this.sheets]}removeStylesFrom(t){const e=g(t),n=this.sheets;e.adoptedStyleSheets=e.adoptedStyleSheets.filter(t=>-1===n.indexOf(t))}}b.styleSheetCache=new Map;let m=0;function y(t){return t===document?document.body:t}s.v.setDefaultStrategy(s.v.supportsAdoptedStyleSheets?b:class{constructor(t){this.styles=t,this.styleClass="fast-"+ ++m}addStylesTo(t){t=y(g(t));const e=this.styles,n=this.styleClass;for(let i=0;i<e.length;i++){const r=document.createElement("style");r.innerHTML=e[i],r.className=n,t.append(r)}}removeStylesFrom(t){const e=(t=y(g(t))).querySelectorAll(`.${this.styleClass}`);for(let n=0,i=e.length;n<i;++n)t.removeChild(e[n])}});const w="defer-hydration",$="needs-hydration";class x extends v{static hydrationObserverHandler(t){for(const e of t)x.hydrationObserver.unobserve(e.target),e.target.$fastController.connect()}connect(){var t,e;if(void 0===this.needsHydration&&(this.needsHydration=null!==this.source.getAttribute($)),this.source.hasAttribute(w))return void x.hydrationObserver.observe(this.source,{attributeFilter:[w]});if(!this.needsHydration)return void super.connect();if(3!==this.stage)return;this.stage=0,this.bindObservables(),this.connectBehaviors();const n=this.source,i=null!==(t=f(n))&&void 0!==t?t:n;if(this.template)if((0,u.VS)(this.template)){let t=i.firstChild,r=i.lastChild;null===n.shadowRoot&&(u.fB.isElementBoundaryStartMarker(t)&&(t.data="",t=t.nextSibling),u.fB.isElementBoundaryEndMarker(r)&&(r.data="",r=r.previousSibling)),this.view=this.template.hydrate(t,r,n),null===(e=this.view)||void 0===e||e.bind(this.source)}else this.renderTemplate(this.template);this.addStyles(this.mainStyles),this.stage=1,this.source.removeAttribute($),this.needsInitialization=this.needsHydration=!1,r.cP.notify(this,h)}disconnect(){super.disconnect(),x.hydrationObserver.unobserve(this.source)}static install(){v.setStrategy(x)}}x.hydrationObserver=new a.ss(x.hydrationObserverHandler)},19249:function(t,e,n){"use strict";n.d(e,{m:function(){return R}});var i=n(37180),r=n(56911),o=n(76881),s=n(38493);class a extends o.Og{appearanceChanged(t,e){t!==e&&(this.classList.add(e),this.classList.remove(t))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline")}}(0,r.Cg)([s.CF,(0,r.Sn)("design:type",String)],a.prototype,"appearance",void 0);var c=n(74849),u=n(22131),l=n(50882),h=n(64187),d=n(73477),f=n(60993),p=n(61484),v=n(48196),g=n(17767),b=n(37302),m=n(7896),y=n(48751),w=n(46203),$=n(57416),x=n(26920),k=n(36452),C=n(74838),S=n(41123),E=n(14996),M=n(79288);const F=c.A`
    :host([appearance="filled"]) .root {
        background: ${b.F7};
        border-color: transparent;
    }

    :host([appearance="filled"]:hover:not([disabled])) .root {
        background: ${b.Xt};
        border-color: transparent;
    }

    :host([appearance="filled"]:focus-within:not([disabled])) .root {
        border-color: transparent;
        box-shadow: none;
    }
    ${p.p}
`.withBehaviors((0,u.mr)(c.A`
            :host([appearance="filled"]) .root {
                background: ${l.A.Field};
                border-color: ${l.A.FieldText};
            }
            :host([appearance="filled"]:hover:not([disabled])) .root,
            :host([appearance="filled"]:focus-within:not([disabled])) .root {
                background: ${l.A.Field};
                border-color: ${l.A.FieldText};
            }
            :host([appearance="filled"]:active:not([disabled])) .root {
                background: ${l.A.Field};
                border-color: ${l.A.FieldText};
            }
            :host([appearance="filled"]:not([disabled]):active)::after,
            :host(
                    [appearance="filled"]:not([disabled]):focus-within:not(:active)
                )::after {
                border-bottom-color: ${l.A.Highlight};
            }
            :host([appearance="filled"][disabled]) .root {
                border-color: ${l.A.GrayText};
                background: ${l.A.Field};
            }
        `)),D=c.A`
    ${(0,h.V)("inline-block")} :host {
        font-family: ${m.O};
        outline: none;
        user-select: none;
        position: relative;
    }

    .root {
        box-sizing: border-box;
        position: relative;
        display: flex;
        flex-direction: row;
        color: ${y.l};
        background: ${w.le};
        border-radius: calc(${$.Pb} * 1px);
        border: calc(${x.XA} * 1px) solid ${k.I2};
        height: calc(${v.D} * 1px);
    }

    .control {
        -webkit-appearance: none;
        background: transparent;
        border: 0;
        height: calc(100% - 4px);
        width: 100%;
        margin-top: auto;
        margin-bottom: auto;
        border: none;
        padding: 0 calc(${C.vR} * 2px + 1px);
        color: ${y.l};
        font-family: inherit;
        font-size: ${S.K};
        line-height: ${S.Z};
    }

    .control:hover,
    .control:${d.N},
    .control:disabled,
    .control:active {
        outline: none;
    }

    .label {
        display: block;
        color: ${y.l};
        cursor: pointer;
        font-size: ${S.K};
        line-height: ${S.Z};
        margin-bottom: 4px;
    }

    .label__hidden {
        display: none;
        visibility: hidden;
    }

    ::slotted([slot="start"]),
    ::slotted([slot="end"]) {
        display: flex;
        margin: auto;
        fill: currentcolor;
    }

    ::slotted(svg) {
        ${""} width: 16px;
        height: 16px;
    }

    ::slotted([slot="start"]) {
        margin-inline-start: 11px;
    }

    ::slotted([slot="end"]) {
        margin-inline-end: 11px;
    }

    :host(:hover:not([disabled])) .root {
        background: ${w.jM};
        border-color: ${k.mb};
    }

    :host(:focus-within:not([disabled])) .root {
        border-color: ${E.WN};
        box-shadow: 0 0 0 1px ${E.WN} inset;
    }

    :host([disabled]) .label,
    :host([readonly]) .label,
    :host([readonly]) .control,
    :host([disabled]) .control {
        cursor: ${f.Z};
    }

    :host([disabled]) {
        opacity: ${M.q};
    }
`.withBehaviors((0,g.f)("filled",F),(0,u.mr)(c.A`
            .root {
                forced-color-adjust: none;
                background: ${l.A.Field};
                border-color: ${l.A.FieldText};
            }
            :host(:hover:not([disabled])) .root {
                background: ${l.A.Field};
                border-color: ${l.A.Highlight};
            }
            ::slotted([slot="start"]),
            ::slotted([slot="end"]) {
                fill: ${l.A.ButtonText};
            }
            :host([disabled]) {
                opacity: 1;
            }
            :host([disabled]) .root {
                border-color: ${l.A.GrayText};
                background: ${l.A.Field};
            }
            :host(:focus-within:enabled) .root {
                border-color: ${l.A.Highlight};
                box-shadow: 0 0 0 1px ${l.A.Highlight} inset;
            }
            .control {
                color: ${l.A.ButtonText};
            }
            ::placeholder,
            ::-webkit-input-placeholder {
                color: ${l.A.FieldText};
            }
            :host([disabled]) ::placeholder,
            :host([disabled]) ::-webkit-input-placeholder,
            :host([disabled]) .label {
                color: ${l.A.GrayText};
            }
        `));var O=n(96950),A=n(82774),T=n(60402),I=n(35106),B=n(79109);const N=function(t={}){return O.qy`
        <label
            part="label"
            for="control"
            class="${t=>t.defaultSlottedNodes&&t.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot
                ${(0,A.e)({property:"defaultSlottedNodes",filter:B.g})}
            ></slot>
        </label>
        <div class="root" part="root">
            ${(0,I.LT)(t)}
            <input
                class="control"
                part="control"
                id="control"
                @input="${t=>t.handleTextInput()}"
                @change="${t=>t.handleChange()}"
                ?autofocus="${t=>t.autofocus}"
                ?disabled="${t=>t.disabled}"
                list="${t=>t.list}"
                maxlength="${t=>t.maxlength}"
                name="${t=>t.name}"
                minlength="${t=>t.minlength}"
                pattern="${t=>t.pattern}"
                placeholder="${t=>t.placeholder}"
                ?readonly="${t=>t.readOnly}"
                ?required="${t=>t.required}"
                size="${t=>t.size}"
                ?spellcheck="${t=>t.spellcheck}"
                :value="${t=>t.value}"
                type="${t=>t.type}"
                aria-atomic="${t=>t.ariaAtomic}"
                aria-busy="${t=>t.ariaBusy}"
                aria-controls="${t=>t.ariaControls}"
                aria-current="${t=>t.ariaCurrent}"
                aria-describedby="${t=>t.ariaDescribedby}"
                aria-details="${t=>t.ariaDetails}"
                aria-disabled="${t=>t.ariaDisabled}"
                aria-errormessage="${t=>t.ariaErrormessage}"
                aria-flowto="${t=>t.ariaFlowto}"
                aria-haspopup="${t=>t.ariaHaspopup}"
                aria-hidden="${t=>t.ariaHidden}"
                aria-invalid="${t=>t.ariaInvalid}"
                aria-keyshortcuts="${t=>t.ariaKeyshortcuts}"
                aria-label="${t=>t.ariaLabel}"
                aria-labelledby="${t=>t.ariaLabelledby}"
                aria-live="${t=>t.ariaLive}"
                aria-owns="${t=>t.ariaOwns}"
                aria-relevant="${t=>t.ariaRelevant}"
                aria-roledescription="${t=>t.ariaRoledescription}"
                ${(0,T.K)("control")}
            />
            ${(0,I.aO)(t)}
        </div>
    `}(),R=a.compose({name:`${i.c.prefix}-text-field`,template:N,styles:D,shadowOptions:{delegatesFocus:!0}})},19470:function(t,e,n){"use strict";n.d(e,{Zx:function(){return s},iX:function(){return u},Mg:function(){return c},tR:function(){return a},rV:function(){return l}});var i=n(96293);!function(){if("undefined"==typeof globalThis)if("undefined"!=typeof global)global.globalThis=global;else if("undefined"!=typeof self)self.globalThis=self;else if("undefined"!=typeof window)window.globalThis=window;else{const t=new Function("return this")();t.globalThis=t}}();const r={configurable:!1,enumerable:!1,writable:!1},o=globalThis.window||globalThis;void 0===o.FAST&&Reflect.defineProperty(o,"FAST",{value:Object.create(null),...r});const s=o.FAST;if(void 0===s.getById){const t=Object.create(null);Reflect.defineProperty(s,"getById",{value(e,n){let i=t[e];return void 0===i&&(i=n?t[e]=n():null),i},...r})}void 0===s.error&&Object.assign(s,{warn(){},error:t=>new Error(`Error ${t}`),addMessages(){}});const a=Object.freeze([]);function c(){const t=new WeakMap;return Object.freeze({register:e=>!t.has(e.type)&&(t.set(e.type,e),!0),getByType:e=>t.get(e),getForInstance(e){if(null!=e)return t.get(e.constructor)}})}function u(){const t=new WeakMap;return function(e){let n=t.get(e);if(void 0===n){let i=Reflect.getPrototypeOf(e);for(;void 0===n&&null!==i;)n=t.get(i),i=Reflect.getPrototypeOf(i);n=void 0===n?[]:n.slice(0),t.set(e,n)}return n}}function l(t){t.prototype.toJSON=i.lQ}},20468:function(t,e,n){"use strict";n.d(e,{OG:function(){return g},WD:function(){return h},ZP:function(){return v},wq:function(){return f},y0:function(){return d}});var i=n(58207),r=n(14777),o=n(53894),s=n(88383),a=n(62044),c=n(89449);function u(t){return t?'"'+t[r.W7](/\"/g,c.m5)+'"':c.m5}function l(t,e){var n=(0,s.U5)();if(n){var i="log";n[t]&&(i=t),(0,a.Tn)(n[i])&&n[i](e)}}var h=function(){function t(t,e,n,i){void 0===n&&(n=!1);var o=this;o[r.JR]=t,o[r.pM]=(n?"AI: ":"AI (Internal): ")+t;var a=c.m5;(0,s.Z)()&&(a=(0,s.hm)().stringify(i));var l=(e?" message:"+u(e):c.m5)+(i?" props:"+u(a):c.m5);o[r.pM]+=l}return t.dataType="MessageData",t}();function d(t,e){return(t||{})[r.Uw]||new f(e)}var f=function(){function t(e){this.identifier="DiagnosticLogger",this.queue=[];var n,u,d,f,p=0,v={};(0,i.A)(t,this,function(t){function i(e,n){if(!(p>=d)){var i=!0,o="AITR_"+n[r.JR];if(v[o]?i=!1:v[o]=!0,i&&(e<=u&&(t.queue[r.y5](n),p++,g(1===e?"error":"warn",n)),p===d)){var s="Internal events throttle limit per PageView reached for this app.",a=new h(23,s,!1);t.queue[r.y5](a),1===e?t[c.Zi](s):t[c.Tj](s)}}}function g(t,n){var i=(0,o.$)(e||{});i&&i[r.e4]&&i[r.e4](t,n)}!function(t){n=(0,a.SA)(t.loggingLevelConsole,0),u=(0,a.SA)(t.loggingLevelTelemetry,1),d=(0,a.SA)(t.maxMessageLimit,25),f=(0,a.SA)(t[r.a$],!1)}(e||{}),t.consoleLoggingLevel=function(){return n},t.telemetryLoggingLevel=function(){return u},t.maxInternalMessageLimit=function(){return d},t[r.a$]=function(){return f},t.throwInternal=function(e,o,u,l,d){void 0===d&&(d=!1);var p=new h(o,u,d,l);if(f)throw(0,s.mm)(p);var b=1===e?c.Zi:c.Tj;if((0,a.b0)(p[r.pM]))g("throw"+(1===e?"Critical":"Warning"),p);else{if(d){var m=+p[r.JR];!v[m]&&n>=e&&(t[b](p[r.pM]),v[m]=!0)}else n>=e&&t[b](p[r.pM]);i(e,p)}},t[c.Tj]=function(t){l("warn",t),g("warning",t)},t[c.Zi]=function(t){l("error",t),g("error",t)},t.resetInternalMessageCount=function(){p=0,v={}},t[r.sx]=i})}return t.__ieDyn=1,t}();function p(t){return t||new f}function v(t,e,n,i,r,o){void 0===o&&(o=!1),p(t).throwInternal(e,n,i,r,o)}function g(t,e){p(t)[c.Tj](e)}},21743:function(t,e,n){"use strict";n.d(e,{E:function(){return u}});var i=n(96950),r=n(60402),o=n(82774),s=n(17884),a=n(35106),c=n(18893);function u(t={}){return i.qy`
        <template
            aria-disabled="${t=>t.ariaDisabled}"
            autocomplete="${t=>t.autocomplete}"
            ?open="${t=>t.open}"
            tabindex="${t=>t.disabled?null:"0"}"
            @click="${(t,e)=>t.clickHandler(e.event)}"
            @focusout="${(t,e)=>t.focusoutHandler(e.event)}"
            @keydown="${(t,e)=>t.keydownHandler(e.event)}"
        >
            <div class="control" part="control">
                ${(0,a.LT)(t)}
                <slot name="control">
                    <input
                        aria-activedescendant="${t=>t.open?t.ariaActiveDescendant:null}"
                        aria-autocomplete="${t=>t.ariaAutoComplete}"
                        aria-controls="${t=>t.ariaControls}"
                        aria-disabled="${t=>t.ariaDisabled}"
                        aria-expanded="${t=>t.ariaExpanded}"
                        aria-haspopup="listbox"
                        class="selected-value"
                        part="selected-value"
                        placeholder="${t=>t.placeholder}"
                        role="combobox"
                        type="text"
                        ?disabled="${t=>t.disabled}"
                        :value="${t=>t.value}"
                        @input="${(t,e)=>t.inputHandler(e.event)}"
                        @keyup="${(t,e)=>t.keyupHandler(e.event)}"
                        ${(0,r.K)("control")}
                    />
                    <div class="indicator" part="indicator" aria-hidden="true">
                        <slot name="indicator">
                            ${(0,c.R)(t.indicator)}
                        </slot>
                    </div>
                </slot>
                ${(0,a.aO)(t)}
            </div>
            <div
                class="listbox"
                id="${t=>t.listboxId}"
                part="listbox"
                role="listbox"
                ?disabled="${t=>t.disabled}"
                ?hidden="${t=>!t.open}"
                ${(0,r.K)("listbox")}
            >
                <slot
                    ${(0,o.e)({filter:s.U.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
                ></slot>
            </div>
        </template>
    `}},22020:function(t,e,n){"use strict";n.d(e,{NA:function(){return g},qQ:function(){return m},xW:function(){return b},Sk:function(){return y}});var i=n(34188);class r extends Error{constructor(t,e,n){super(t),this.factories=e,this.node=n}}function o(t){return t.nodeType===Node.COMMENT_NODE}function s(t){return t.nodeType===Node.TEXT_NODE}function a(t,e){const n=document.createRange();return n.setStart(t,0),n.setEnd(e,o(e)||s(e)?e.data.length:e.childNodes.length),n}function c(t,e,n){const o=i.fB.parseAttributeBinding(t);if(null!==o){for(const i of o){if(!e[i])throw new r(`HydrationView was unable to successfully target factory on ${t.nodeName} inside ${t.getRootNode().host.nodeName}. This likely indicates a template mismatch between SSR rendering and hydration.`,e,t);l(e[i],t,n)}t.removeAttribute(i.fB.attributeMarkerName)}}function u(t,e,n,a,c){if(i.fB.isElementBoundaryStartMarker(t))!function(t,e){const n=i.fB.parseElementBoundaryStartMarker(t.data);let r=e.nextSibling();for(;null!==r;){if(o(r)){const t=i.fB.parseElementBoundaryEndMarker(r.data);if(t&&t===n)break}r=e.nextSibling()}}(t,e);else if(i.fB.isContentBindingStartMarker(t.data)){const u=i.fB.parseContentBindingStartMarker(t.data);if(null===u)return;const[h,d]=u,f=n[h];if(!f)throw new r(`HydrationView was unable to successfully target factory on ${t.nodeName} for ${t.data}. This likely indicates a template mismatch between SSR rendering and hydration.`,n,e.root);const p=[];let v=e.nextSibling();t.data="";const g=v;for(;null!==v;){if(o(v)){const t=i.fB.parseContentBindingEndMarker(v.data);if(t&&t[1]===d)break}p.push(v),v=e.nextSibling()}if(null===v){const e=t.getRootNode();throw new Error(`Error when hydrating inside ${function(t){return t instanceof DocumentFragment&&"mode"in t}(e)?e.host.nodeName:e.nodeName}: current should never be null. This is a SSR software defect`)}if(v.data="",1===p.length&&s(p[0]))l(f,p[0],a);else{v!==g&&null!==v.previousSibling&&(c[f.targetNodeId]={first:g,last:v.previousSibling});l(f,v.parentNode.insertBefore(document.createTextNode(""),v),a)}}}function l(t,e,n){if(void 0===t.targetNodeId)throw new Error("Factory could not be target to the node");n[t.targetNodeId]=e}var h,d=n(60815),f=n(19470);function p(t,e){const n=t.parentNode;let i,r=t;for(;r!==e;){if(i=r.nextSibling,!i)throw new Error(`Unmatched first/last child inside ${e.getRootNode().host.nodeName}. This is a SSR software defect`);n.removeChild(r),r=i}n.removeChild(e)}class v{constructor(){this.index=0,this.length=0}get event(){return d.ao.getEvent()}get isEven(){return this.index%2==0}get isOdd(){return this.index%2!=0}get isFirst(){return 0===this.index}get isInMiddle(){return!this.isFirst&&!this.isLast}get isLast(){return this.index===this.length-1}eventDetail(){return this.event.detail}eventTarget(){return this.event.target}}class g extends v{constructor(t,e,n){super(),this.fragment=t,this.factories=e,this.targets=n,this.behaviors=null,this.unbindables=[],this.source=null,this.isBound=!1,this.sourceLifetime=d.Nx.unknown,this.context=this,this.firstChild=t.firstChild,this.lastChild=t.lastChild}appendTo(t){t.appendChild(this.fragment)}insertBefore(t){if(this.fragment.hasChildNodes())t.parentNode.insertBefore(this.fragment,t);else{const e=this.lastChild;if(t.previousSibling===e)return;const n=t.parentNode;let i,r=this.firstChild;for(;r!==e;)i=r.nextSibling,n.insertBefore(r,t),r=i;n.insertBefore(e,t)}}remove(){const t=this.fragment,e=this.lastChild;let n,i=this.firstChild;for(;i!==e;)n=i.nextSibling,t.appendChild(i),i=n;t.appendChild(e)}dispose(){p(this.firstChild,this.lastChild),this.unbind()}onUnbind(t){this.unbindables.push(t)}bind(t,e=this){if(this.source===t)return;let n=this.behaviors;if(null===n){this.source=t,this.context=e,this.behaviors=n=new Array(this.factories.length);const i=this.factories;for(let t=0,e=i.length;t<e;++t){const e=i[t].createBehavior();e.bind(this),n[t]=e}}else{null!==this.source&&this.evaluateUnbindables(),this.isBound=!1,this.source=t,this.context=e;for(let t=0,e=n.length;t<e;++t)n[t].bind(this)}this.isBound=!0}unbind(){this.isBound&&null!==this.source&&(this.evaluateUnbindables(),this.source=null,this.context=this,this.isBound=!1)}evaluateUnbindables(){const t=this.unbindables;for(let e=0,n=t.length;e<n;++e)t[e].unbind(this);t.length=0}static disposeContiguousBatch(t){if(0!==t.length){p(t[0].firstChild,t[t.length-1].lastChild);for(let e=0,n=t.length;e<n;++e)t[e].unbind()}}}(0,f.rV)(g),d.cP.defineProperty(g.prototype,"index"),d.cP.defineProperty(g.prototype,"length");const b={unhydrated:"unhydrated",hydrating:"hydrating",hydrated:"hydrated"};class m extends Error{constructor(t,e,n,i){super(t),this.factory=e,this.fragment=n,this.templateString=i}}class y extends v{constructor(t,e,n,r){super(),this.firstChild=t,this.lastChild=e,this.sourceTemplate=n,this.hostBindingTarget=r,this[h]=i.vB,this.context=this,this.source=null,this.isBound=!1,this.sourceLifetime=d.Nx.unknown,this.unbindables=[],this.fragment=null,this.behaviors=null,this._hydrationStage=b.unhydrated,this._bindingViewBoundaries={},this._targets={},this.factories=n.compile().factories}get hydrationStage(){return this._hydrationStage}get targets(){return this._targets}get bindingViewBoundaries(){return this._bindingViewBoundaries}insertBefore(t){if(null!==this.fragment)if(this.fragment.hasChildNodes())t.parentNode.insertBefore(this.fragment,t);else{const e=this.lastChild;if(t.previousSibling===e)return;const n=t.parentNode;let i,r=this.firstChild;for(;r!==e;)i=r.nextSibling,n.insertBefore(r,t),r=i;n.insertBefore(e,t)}}appendTo(t){null!==this.fragment&&t.appendChild(this.fragment)}remove(){const t=this.fragment||(this.fragment=document.createDocumentFragment()),e=this.lastChild;let n,i=this.firstChild;for(;i!==e;){if(n=i.nextSibling,!n)throw new Error(`Unmatched first/last child inside ${e.getRootNode().host.nodeName}. This is a SSR software defect`);t.appendChild(i),i=n}t.appendChild(e)}bind(t,e=this){if(this.hydrationStage!==b.hydrated&&(this._hydrationStage=b.hydrating),this.source===t)return;let n=this.behaviors;if(null===n){this.source=t,this.context=e;try{const{targets:t,boundaries:e}=function(t,e,n){const i=a(t,e),r=i.commonAncestorContainer,o=document.createTreeWalker(r,NodeFilter.SHOW_ELEMENT+NodeFilter.SHOW_COMMENT+NodeFilter.SHOW_TEXT,{acceptNode:t=>0===i.comparePoint(t,0)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}),s={},l={};let h=o.currentNode=t;for(;null!==h;){switch(h.nodeType){case Node.ELEMENT_NODE:c(h,n,s);break;case Node.COMMENT_NODE:u(h,o,n,s,l)}h=o.nextNode()}return i.detach(),{targets:s,boundaries:l}}(this.firstChild,this.lastChild,this.factories);this._targets=t,this._bindingViewBoundaries=e}catch(t){if(t instanceof r){let e=this.sourceTemplate.html;"string"!=typeof e&&(e=e.innerHTML),t.templateString=e}throw t}this.behaviors=n=new Array(this.factories.length);const i=this.factories;for(let t=0,e=i.length;t<e;++t){const e=i[t];if("h"===e.targetNodeId&&this.hostBindingTarget&&l(e,this.hostBindingTarget,this._targets),!(e.targetNodeId in this.targets)){let t=this.sourceTemplate.html;throw"string"!=typeof t&&(t=t.innerHTML),new m(`HydrationView was unable to successfully target bindings inside ${this.firstChild.getRootNode().host.nodeName}.This is likely a hydration software defect.`,e,a(this.firstChild,this.lastChild).cloneContents(),t)}{const i=e.createBehavior();i.bind(this),n[t]=i}}}else{null!==this.source&&this.evaluateUnbindables(),this.isBound=!1,this.source=t,this.context=e;for(let t=0,e=n.length;t<e;++t)n[t].bind(this)}this.isBound=!0,this._hydrationStage=b.hydrated}unbind(){this.isBound&&null!==this.source&&(this.evaluateUnbindables(),this.source=null,this.context=this,this.isBound=!1)}dispose(){p(this.firstChild,this.lastChild),this.unbind()}onUnbind(t){this.unbindables.push(t)}evaluateUnbindables(){const t=this.unbindables;for(let e=0,n=t.length;e<n;++e)t[e].unbind(this);t.length=0}}h=i.vB,(0,f.rV)(y)},22131:function(t,e,n){"use strict";n.d(e,{C7:function(){return a},G2:function(){return s},mr:function(){return o},s5:function(){return r}});class i{constructor(t){this.listenerCache=new WeakMap,this.query=t}connectedCallback(t){const{query:e}=this;let n=this.listenerCache.get(t);n||(n=this.constructListener(t),this.listenerCache.set(t,n)),n.bind(e)(),e.addEventListener("change",n)}disconnectedCallback(t){const e=this.listenerCache.get(t);e&&this.query.removeEventListener("change",e)}}class r extends i{constructor(t,e){super(t),this.styles=e}static with(t){return e=>new r(t,e)}constructListener(t){let e=!1;const n=this.styles;return function(){const{matches:i}=this;i&&!e?(t.addStyles(n),e=i):!i&&e&&(t.removeStyles(n),e=i)}}removedCallback(t){t.removeStyles(this.styles)}}const o=r.with(window.matchMedia("(forced-colors)")),s=r.with(window.matchMedia("(prefers-color-scheme: dark)")),a=r.with(window.matchMedia("(prefers-color-scheme: light)"))},22448:function(t,e,n){"use strict";n.d(e,{z:function(){return s}});var i=n(56911),r=n(65923),o=n(38493);class s extends r.th{connectedCallback(){super.connectedCallback(),this.startColumnCount||(this.startColumnCount=1)}}(0,i.Cg)([(0,o.CF)({attribute:"start-column-count"}),(0,i.Sn)("design:type",Object)],s.prototype,"startColumnCount",void 0)},22683:function(t,e,n){"use strict";n.d(e,{Rq:function(){return h},hb:function(){return l}});var i=n(68136),r=n(68009);var o=n(95239),s=n(6352),a=n(31023);const{create:c}=i.G,u=c({name:"neutral-stroke-divider-recipe"},{evaluate:(t,e)=>function(t,e,n){return t.get(t.closestIndexOf(e)+(0,r.F)(e)*n)}(t(a.r),e||t(o.p),t(s.X))}),l=c("neutral-stroke-divider-rest",t=>t(u).evaluate(t)),h=l},22870:function(t,e,n){"use strict";n.d(e,{Bi:function(){return l},wD:function(){return d},H0:function(){return v},Hs:function(){return f},QI:function(){return p}});var i=n(87122),r=n(37820);const o={aliceblue:{r:.941176,g:.972549,b:1},antiquewhite:{r:.980392,g:.921569,b:.843137},aqua:{r:0,g:1,b:1},aquamarine:{r:.498039,g:1,b:.831373},azure:{r:.941176,g:1,b:1},beige:{r:.960784,g:.960784,b:.862745},bisque:{r:1,g:.894118,b:.768627},black:{r:0,g:0,b:0},blanchedalmond:{r:1,g:.921569,b:.803922},blue:{r:0,g:0,b:1},blueviolet:{r:.541176,g:.168627,b:.886275},brown:{r:.647059,g:.164706,b:.164706},burlywood:{r:.870588,g:.721569,b:.529412},cadetblue:{r:.372549,g:.619608,b:.627451},chartreuse:{r:.498039,g:1,b:0},chocolate:{r:.823529,g:.411765,b:.117647},coral:{r:1,g:.498039,b:.313725},cornflowerblue:{r:.392157,g:.584314,b:.929412},cornsilk:{r:1,g:.972549,b:.862745},crimson:{r:.862745,g:.078431,b:.235294},cyan:{r:0,g:1,b:1},darkblue:{r:0,g:0,b:.545098},darkcyan:{r:0,g:.545098,b:.545098},darkgoldenrod:{r:.721569,g:.52549,b:.043137},darkgray:{r:.662745,g:.662745,b:.662745},darkgreen:{r:0,g:.392157,b:0},darkgrey:{r:.662745,g:.662745,b:.662745},darkkhaki:{r:.741176,g:.717647,b:.419608},darkmagenta:{r:.545098,g:0,b:.545098},darkolivegreen:{r:.333333,g:.419608,b:.184314},darkorange:{r:1,g:.54902,b:0},darkorchid:{r:.6,g:.196078,b:.8},darkred:{r:.545098,g:0,b:0},darksalmon:{r:.913725,g:.588235,b:.478431},darkseagreen:{r:.560784,g:.737255,b:.560784},darkslateblue:{r:.282353,g:.239216,b:.545098},darkslategray:{r:.184314,g:.309804,b:.309804},darkslategrey:{r:.184314,g:.309804,b:.309804},darkturquoise:{r:0,g:.807843,b:.819608},darkviolet:{r:.580392,g:0,b:.827451},deeppink:{r:1,g:.078431,b:.576471},deepskyblue:{r:0,g:.74902,b:1},dimgray:{r:.411765,g:.411765,b:.411765},dimgrey:{r:.411765,g:.411765,b:.411765},dodgerblue:{r:.117647,g:.564706,b:1},firebrick:{r:.698039,g:.133333,b:.133333},floralwhite:{r:1,g:.980392,b:.941176},forestgreen:{r:.133333,g:.545098,b:.133333},fuchsia:{r:1,g:0,b:1},gainsboro:{r:.862745,g:.862745,b:.862745},ghostwhite:{r:.972549,g:.972549,b:1},gold:{r:1,g:.843137,b:0},goldenrod:{r:.854902,g:.647059,b:.12549},gray:{r:.501961,g:.501961,b:.501961},green:{r:0,g:.501961,b:0},greenyellow:{r:.678431,g:1,b:.184314},grey:{r:.501961,g:.501961,b:.501961},honeydew:{r:.941176,g:1,b:.941176},hotpink:{r:1,g:.411765,b:.705882},indianred:{r:.803922,g:.360784,b:.360784},indigo:{r:.294118,g:0,b:.509804},ivory:{r:1,g:1,b:.941176},khaki:{r:.941176,g:.901961,b:.54902},lavender:{r:.901961,g:.901961,b:.980392},lavenderblush:{r:1,g:.941176,b:.960784},lawngreen:{r:.486275,g:.988235,b:0},lemonchiffon:{r:1,g:.980392,b:.803922},lightblue:{r:.678431,g:.847059,b:.901961},lightcoral:{r:.941176,g:.501961,b:.501961},lightcyan:{r:.878431,g:1,b:1},lightgoldenrodyellow:{r:.980392,g:.980392,b:.823529},lightgray:{r:.827451,g:.827451,b:.827451},lightgreen:{r:.564706,g:.933333,b:.564706},lightgrey:{r:.827451,g:.827451,b:.827451},lightpink:{r:1,g:.713725,b:.756863},lightsalmon:{r:1,g:.627451,b:.478431},lightseagreen:{r:.12549,g:.698039,b:.666667},lightskyblue:{r:.529412,g:.807843,b:.980392},lightslategray:{r:.466667,g:.533333,b:.6},lightslategrey:{r:.466667,g:.533333,b:.6},lightsteelblue:{r:.690196,g:.768627,b:.870588},lightyellow:{r:1,g:1,b:.878431},lime:{r:0,g:1,b:0},limegreen:{r:.196078,g:.803922,b:.196078},linen:{r:.980392,g:.941176,b:.901961},magenta:{r:1,g:0,b:1},maroon:{r:.501961,g:0,b:0},mediumaquamarine:{r:.4,g:.803922,b:.666667},mediumblue:{r:0,g:0,b:.803922},mediumorchid:{r:.729412,g:.333333,b:.827451},mediumpurple:{r:.576471,g:.439216,b:.858824},mediumseagreen:{r:.235294,g:.701961,b:.443137},mediumslateblue:{r:.482353,g:.407843,b:.933333},mediumspringgreen:{r:0,g:.980392,b:.603922},mediumturquoise:{r:.282353,g:.819608,b:.8},mediumvioletred:{r:.780392,g:.082353,b:.521569},midnightblue:{r:.098039,g:.098039,b:.439216},mintcream:{r:.960784,g:1,b:.980392},mistyrose:{r:1,g:.894118,b:.882353},moccasin:{r:1,g:.894118,b:.709804},navajowhite:{r:1,g:.870588,b:.678431},navy:{r:0,g:0,b:.501961},oldlace:{r:.992157,g:.960784,b:.901961},olive:{r:.501961,g:.501961,b:0},olivedrab:{r:.419608,g:.556863,b:.137255},orange:{r:1,g:.647059,b:0},orangered:{r:1,g:.270588,b:0},orchid:{r:.854902,g:.439216,b:.839216},palegoldenrod:{r:.933333,g:.909804,b:.666667},palegreen:{r:.596078,g:.984314,b:.596078},paleturquoise:{r:.686275,g:.933333,b:.933333},palevioletred:{r:.858824,g:.439216,b:.576471},papayawhip:{r:1,g:.937255,b:.835294},peachpuff:{r:1,g:.854902,b:.72549},peru:{r:.803922,g:.521569,b:.247059},pink:{r:1,g:.752941,b:.796078},plum:{r:.866667,g:.627451,b:.866667},powderblue:{r:.690196,g:.878431,b:.901961},purple:{r:.501961,g:0,b:.501961},red:{r:1,g:0,b:0},rosybrown:{r:.737255,g:.560784,b:.560784},royalblue:{r:.254902,g:.411765,b:.882353},saddlebrown:{r:.545098,g:.270588,b:.07451},salmon:{r:.980392,g:.501961,b:.447059},sandybrown:{r:.956863,g:.643137,b:.376471},seagreen:{r:.180392,g:.545098,b:.341176},seashell:{r:1,g:.960784,b:.933333},sienna:{r:.627451,g:.321569,b:.176471},silver:{r:.752941,g:.752941,b:.752941},skyblue:{r:.529412,g:.807843,b:.921569},slateblue:{r:.415686,g:.352941,b:.803922},slategray:{r:.439216,g:.501961,b:.564706},slategrey:{r:.439216,g:.501961,b:.564706},snow:{r:1,g:.980392,b:.980392},springgreen:{r:0,g:1,b:.498039},steelblue:{r:.27451,g:.509804,b:.705882},tan:{r:.823529,g:.705882,b:.54902},teal:{r:0,g:.501961,b:.501961},thistle:{r:.847059,g:.74902,b:.847059},tomato:{r:1,g:.388235,b:.278431},transparent:{r:0,g:0,b:0,a:0},turquoise:{r:.25098,g:.878431,b:.815686},violet:{r:.933333,g:.509804,b:.933333},wheat:{r:.960784,g:.870588,b:.701961},white:{r:1,g:1,b:1},whitesmoke:{r:.960784,g:.960784,b:.960784},yellow:{r:1,g:1,b:0},yellowgreen:{r:.603922,g:.803922,b:.196078}},s=/^rgb\(\s*((?:(?:25[0-5]|2[0-4]\d|1\d\d|\d{1,2})\s*,\s*){2}(?:25[0-5]|2[0-4]\d|1\d\d|\d{1,2})\s*)\)$/i,a=/^rgba\(\s*((?:(?:25[0-5]|2[0-4]\d|1\d\d|\d{1,2})\s*,\s*){3}(?:0|1|0?\.\d*)\s*)\)$/i,c=/^#((?:[0-9a-f]{6}|[0-9a-f]{3}))$/i,u=/^#((?:[0-9a-f]{8}|[0-9a-f]{4}))$/i;function l(t){return c.test(t)}function h(t){return function(t){return u.test(t)}(t)}function d(t){return s.test(t)}function f(t){const e=c.exec(t);if(null===e)return null;let n=e[1];if(3===n.length){const t=n.charAt(0),e=n.charAt(1),i=n.charAt(2);n=t.concat(t,e,e,i,i)}const o=parseInt(n,16);return isNaN(o)?null:new i.M((0,r.S8)((16711680&o)>>>16,0,255),(0,r.S8)((65280&o)>>>8,0,255),(0,r.S8)(255&o,0,255),1)}function p(t){const e=s.exec(t);if(null===e)return null;const n=e[1].split(",");return new i.M((0,r.S8)(Number(n[0]),0,255),(0,r.S8)(Number(n[1]),0,255),(0,r.S8)(Number(n[2]),0,255),1)}function v(t){const e=t.toLowerCase();return l(e)?f(e):h(e)?function(t){const e=u.exec(t);if(null===e)return null;let n=e[1];if(4===n.length){const t=n.charAt(0),e=n.charAt(1),i=n.charAt(2),r=n.charAt(3);n=t.concat(t,e,e,i,i,r,r)}const o=parseInt(n,16);return isNaN(o)?null:new i.M((0,r.S8)((16711680&o)>>>16,0,255),(0,r.S8)((65280&o)>>>8,0,255),(0,r.S8)(255&o,0,255),(0,r.S8)((4278190080&o)>>>24,0,255))}(e):d(e)?p(e):function(t){return a.test(t)}(e)?function(t){const e=a.exec(t);if(null===e)return null;const n=e[1].split(",");return 4===n.length?new i.M((0,r.S8)(Number(n[0]),0,255),(0,r.S8)(Number(n[1]),0,255),(0,r.S8)(Number(n[2]),0,255),Number(n[3])):null}(e):function(t){return o.hasOwnProperty(t)}(e)?function(t){const e=o[t.toLowerCase()];return e?new i.M(e.r,e.g,e.b,e.hasOwnProperty("a")?e.a:void 0):null}(e):null}},23429:function(t,e,n){"use strict";n.d(e,{L:function(){return r}});var i=n(96293);const r=n(19470).Zx.getById(i.uL.updateQueue,()=>{const t=[],e=[];let n=!0;function i(){if(e.length)throw e.shift()}function r(r){try{r.call()}catch(r){if(!n)throw t.length=0,r;e.push(r),setTimeout(i,0)}}function o(){let e=0;for(;e<t.length;)if(r(t[e]),e++,e>1024){for(let n=0,i=t.length-e;n<i;n++)t[n]=t[n+e];t.length-=e,e=0}t.length=0}function s(e){t.push(e),t.length<2&&(n?globalThis.requestAnimationFrame(o):o())}return Object.freeze({enqueue:s,next:()=>new Promise(s),process:o,setMode:t=>n=t})})},23837:function(t,e,n){"use strict";n.d(e,{FASTElement:function(){return i.L}});var i=n(92011)},24458:function(t,e,n){"use strict";n.d(e,{HW:function(){return l},M3:function(){return c},m_:function(){return u}});var i=n(68136);var r=n(95239),o=n(47691),s=n(31023);const{create:a}=i.G,c=a({name:"neutral-fill-layer-recipe"},{evaluate:(t,e)=>function(t,e,n){const i=t.closestIndexOf(e);return t.get(i-n)}(t(s.r),e||t(r.p),t(o.E))}),u=a("neutral-fill-layer-rest",t=>t(c).evaluate(t)),l=u},24642:function(t,e,n){"use strict";n.d(e,{Nk:function(){return f},TF:function(){return i},el:function(){return p},kT:function(){return a},o1:function(){return l},qE:function(){return v},sP:function(){return c},v2:function(){return d},vp:function(){return h}});var i,r=n(14848),o=n(22870),s=n(18284);function a(t){const e=(0,s.A)(t);return function(t){return"function"==typeof t?n=>e(Object.assign({},n,{backgroundColor:t(n)})):e(t)}}function c(t,e){const n=(0,s.A)(e);return e=>"function"==typeof e?i=>n(Object.assign({},i,{backgroundColor:e(i)}))[t]:n(e)[t]}!function(t){t.rest="rest",t.hover="hover",t.active="active",t.focus="focus",t.selected="selected"}(i||(i={}));const u=(0,s.A)(t=>{let e=(0,o.Hs)(t);if(null!==e)return e;if(e=(0,o.QI)(t),null!==e)return e;throw new Error(`${t} cannot be converted to a ColorRGBA64. Color strings must be one of the following formats: "#RGB", "#RRGGBB", or "rgb(r, g, b)"`)});function l(t){return(0,o.Bi)(t)||(0,o.wD)(t)}function h(t,e){return u(t).equalValue(u(e))}const d=(0,s.A)((t,e)=>(0,r.yN)(u(t),u(e)),(t,e)=>t+e);function f(t){return(0,r.Z8)(u(t))}function p(...t){return e=>Math.max.apply(null,t.map(t=>t(e)))}const v=(t,e,n)=>Math.min(Math.max(t,e),n)},25984:function(t,e,n){"use strict";n.d(e,{LA:function(){return M},Vw:function(){return C},ZI:function(){return E},_9:function(){return k},aY:function(){return S},ss:function(){return F}});var i=n(64187),r=n(22131),o=n(73477),s=n(74849),a=n(50882),c=n(48196),u=n(41123),l=n(57416),h=n(64699),d=n(74838),f=n(14996),p=n(4283),v=n(92393),g=n(7896),b=n(74089),m=n(26920),y=n(37302),w=n(45476),$=n(48751),x=n(36452);const k=s.A`
    ${(0,i.V)("inline-flex")} :host {
        font-family: ${g.O};
        outline: none;
        font-size: ${u.K};
        line-height: ${u.Z};
        height: calc(${c.D} * 1px);
        min-width: calc(${c.D} * 1px);
        background-color: ${y.F7};
        color: ${$.l};
        border-radius: calc(${l.Pb} * 1px);
        fill: currentcolor;
        cursor: pointer;
    }

    .control {
        background: transparent;
        height: inherit;
        flex-grow: 1;
        box-sizing: border-box;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        padding: 0 calc((10 + (${d.vR} * 2 * ${d.Br})) * 1px);
        white-space: nowrap;
        outline: none;
        text-decoration: none;
        border: calc(${m.XA} * 1px) solid transparent;
        color: inherit;
        border-radius: inherit;
        fill: inherit;
        cursor: inherit;
        font-family: inherit;
    }

    .control,
    ::slotted([slot="end"]),
    ::slotted([slot="start"]) {
        font: inherit;
    }

    :host([icon-only]) .control,
    .control.icon-only {
        padding: 0;
        line-height: 0;
    }

    :host(:hover) {
        background-color: ${y.Xt};
    }

    :host(:active) {
        background-color: ${y.X4};
    }

    ${""}
    .control:${o.N} {
        border: calc(${m.XA} * 1px) solid ${f.WN};
        box-shadow: 0 0 0 calc((${m.vd} - ${m.XA}) * 1px)
            ${f.WN};
    }

    .control::-moz-focus-inner {
        border: 0;
    }

    .content {
        pointer-events: none;
    }

    ::slotted([slot="start"]),
    ::slotted([slot="end"]) {
        display: flex;
        pointer-events: none;
    }

    ::slotted(svg) {
        ${""} width: 16px;
        height: 16px;
        pointer-events: none;
    }

    ::slotted([slot="start"]) {
        margin-inline-end: 11px;
    }

    ::slotted([slot="end"]) {
        margin-inline-start: 11px;
    }
`.withBehaviors((0,r.mr)(s.A`
        :host,
        :host([appearance="neutral"]) .control {
          background-color: ${a.A.ButtonFace};
          border-color: ${a.A.ButtonText};
          color: ${a.A.ButtonText};
          fill: currentcolor;
        }

        :host(:not([disabled][href]):hover),
        :host([appearance="neutral"]:not([disabled]):hover) .control {
          forced-color-adjust: none;
          background-color: ${a.A.Highlight};
          color: ${a.A.HighlightText};
        }

        .control:${o.N},
        :host([appearance="outline"]) .control:${o.N},
        :host([appearance="neutral"]:${o.N}) .control {
          forced-color-adjust: none;
          background-color: ${a.A.Highlight};
          border-color: ${a.A.ButtonText};
          box-shadow: 0 0 0 calc((${m.vd} - ${m.XA}) * 1px) ${a.A.ButtonText};
          color: ${a.A.HighlightText};
        }

        .control:not([disabled]):hover,
        :host([appearance="outline"]) .control:hover {
          border-color: ${a.A.ButtonText};
        }

        :host([href]) .control {
          border-color: ${a.A.LinkText};
          color: ${a.A.LinkText};
        }

        :host([href]) .control:hover,
        :host(.neutral[href]) .control:hover,
        :host(.outline[href]) .control:hover,
        :host([href]) .control:${o.N}{
          forced-color-adjust: none;
          background: ${a.A.ButtonFace};
          border-color: ${a.A.LinkText};
          box-shadow: 0 0 0 1px ${a.A.LinkText} inset;
          color: ${a.A.LinkText};
          fill: currentcolor;
        }
    `)),C=s.A`
    :host([appearance="accent"]) {
        background: ${p.IR};
        color: ${b.l_};
    }

    :host([appearance="accent"]:hover) {
        background: ${p.OS};
        color: ${b.XK};
    }

    :host([appearance="accent"]:active) .control:active {
        background: ${p.am};
        color: ${b.J_};
    }

    :host([appearance="accent"]) .control:${o.N} {
        box-shadow: 0 0 0 calc(${m.vd} * 1px) inset ${h.fF},
            0 0 0 calc((${m.vd} - ${m.XA}) * 1px) ${f.WN};
    }
`.withBehaviors((0,r.mr)(s.A`
            :host([appearance="accent"]) .control {
                forced-color-adjust: none;
                background: ${a.A.Highlight};
                color: ${a.A.HighlightText};
            }

            :host([appearance="accent"]) .control:hover,
            :host([appearance="accent"]:active) .control:active {
                background: ${a.A.HighlightText};
                border-color: ${a.A.Highlight};
                color: ${a.A.Highlight};
            }

            :host([appearance="accent"]) .control:${o.N} {
                border-color: ${a.A.ButtonText};
                box-shadow: 0 0 0 2px ${a.A.HighlightText} inset;
            }

            :host([appearance="accent"][href]) .control {
                background: ${a.A.LinkText};
                color: ${a.A.HighlightText};
            }

            :host([appearance="accent"][href]) .control:hover {
                background: ${a.A.ButtonFace};
                border-color: ${a.A.LinkText};
                box-shadow: none;
                color: ${a.A.LinkText};
                fill: currentcolor;
            }

            :host([appearance="accent"][href]) .control:${o.N} {
                border-color: ${a.A.LinkText};
                box-shadow: 0 0 0 2px ${a.A.HighlightText} inset;
            }
        `)),S=s.A`
    :host([appearance="hypertext"]) {
        height: auto;
        font-size: inherit;
        line-height: inherit;
        background: transparent;
        min-width: 0;
    }

    :host([appearance="hypertext"]) .control {
        display: inline;
        padding: 0;
        border: none;
        box-shadow: none;
        border-radius: 0;
        line-height: 1;
    }
    :host a.control:not(:link) {
        background-color: transparent;
        cursor: default;
    }
    :host([appearance="hypertext"]) .control:link,
    :host([appearance="hypertext"]) .control:visited {
        background: transparent;
        color: ${v.W_};
        border-bottom: calc(${m.XA} * 1px) solid ${v.W_};
    }
    :host([appearance="hypertext"]) .control:hover {
        border-bottom-color: ${v.YL};
    }
    :host([appearance="hypertext"]) .control:active {
        border-bottom-color: ${v.QL};
    }
    :host([appearance="hypertext"]) .control:${o.N} {
        border-bottom: calc(${m.vd} * 1px) solid ${f.WN};
        margin-bottom: calc(calc(${m.XA} - ${m.vd}) * 1px);
    }
`.withBehaviors((0,r.mr)(s.A`
            :host([appearance="hypertext"]) .control:${o.N} {
                color: ${a.A.LinkText};
                border-bottom-color: ${a.A.LinkText};
            }
        `)),E=s.A`
    :host([appearance="lightweight"]) {
        background: transparent;
        color: ${v.W_};
    }

    :host([appearance="lightweight"]) .control {
        padding: 0;
        height: initial;
        border: none;
        box-shadow: none;
        border-radius: 0;
    }

    :host([appearance="lightweight"]:hover) {
        color: ${v.YL};
    }

    :host([appearance="lightweight"]:active) {
        color: ${v.QL};
    }

    :host([appearance="lightweight"]) .content {
        position: relative;
    }

    :host([appearance="lightweight"]) .content::before {
        content: "";
        display: block;
        height: calc(${m.XA} * 1px);
        position: absolute;
        top: calc(1em + 3px);
        width: 100%;
    }

    :host([appearance="lightweight"]:hover) .content::before {
        background: ${v.YL};
    }

    :host([appearance="lightweight"]:active) .content::before {
        background: ${v.QL};
    }

    :host([appearance="lightweight"]) .control:${o.N} .content::before {
        background: ${$.l};
        height: calc(${m.vd} * 1px);
    }
`.withBehaviors((0,r.mr)(s.A`
            :host([appearance="lightweight"]) {
                color: ${a.A.ButtonText};
            }
            :host([appearance="lightweight"]) .control:hover,
        :host([appearance="lightweight"]) .control:${o.N} {
                forced-color-adjust: none;
                background: ${a.A.ButtonFace};
                color: ${a.A.Highlight};
            }
            :host([appearance="lightweight"]) .control:hover .content::before,
        :host([appearance="lightweight"]) .control:${o.N} .content::before {
                background: ${a.A.Highlight};
            }

            :host([appearance="lightweight"][href]) .control:hover,
        :host([appearance="lightweight"][href]) .control:${o.N} {
                background: ${a.A.ButtonFace};
                box-shadow: none;
                color: ${a.A.LinkText};
            }

            :host([appearance="lightweight"][href]) .control:hover .content::before,
        :host([appearance="lightweight"][href]) .control:${o.N} .content::before {
                background: ${a.A.LinkText};
            }
        `)),M=s.A`
    :host([appearance="outline"]) {
        background: transparent;
        border-color: ${x.I2};
    }

    :host([appearance="outline"]:hover) {
        border-color: ${x.mb};
    }

    :host([appearance="outline"]:active) {
        border-color: ${x.MY};
    }

    :host([appearance="outline"]) .control {
        border-color: inherit;
    }

    :host([appearance="outline"]) .control:${o.N} {
        box-shadow: 0 0 0 calc((${m.vd} - ${m.XA}) * 1px)
            ${f.WN};
        border-color: ${f.WN};
    }
`.withBehaviors((0,r.mr)(s.A`
            :host([appearance="outline"]) {
                border-color: ${a.A.ButtonText};
            }
            :host([appearance="outline"][href]) {
                border-color: ${a.A.LinkText};
            }
        `)),F=s.A`
    :host([appearance="stealth"]) {
        background: ${w.Wl};
    }

    :host([appearance="stealth"]:hover) {
        background: ${w.oO};
    }

    :host([appearance="stealth"]:active) {
        background: ${w.wO};
    }
`.withBehaviors((0,r.mr)(s.A`
            :host([appearance="stealth"]),
            :host([appearance="stealth"]) .control {
                forced-color-adjust: none;
                background: ${a.A.ButtonFace};
                border-color: transparent;
                color: ${a.A.ButtonText};
                fill: currentcolor;
            }

            :host([appearance="stealth"]:hover) .control {
                background: ${a.A.Highlight};
                border-color: ${a.A.Highlight};
                color: ${a.A.HighlightText};
                fill: currentcolor;
            }

            :host([appearance="stealth"]:${o.N}) .control {
                background: ${a.A.Highlight};
                box-shadow: 0 0 0 1px ${a.A.Highlight};
                color: ${a.A.HighlightText};
                fill: currentcolor;
            }

            :host([appearance="stealth"][href]) .control {
                color: ${a.A.LinkText};
            }

            :host([appearance="stealth"]:hover[href]) .control,
        :host([appearance="stealth"]:${o.N}[href]) .control {
                background: ${a.A.LinkText};
                border-color: ${a.A.LinkText};
                color: ${a.A.HighlightText};
                fill: currentcolor;
            }

            :host([appearance="stealth"]:${o.N}[href]) .control {
                box-shadow: 0 0 0 1px ${a.A.LinkText};
            }
        `))},26633:function(t,e,n){"use strict";n.d(e,{b:function(){return $}});var i=n(56911),r=n(92011),o=n(23429),s=n(60815),a=n(38493),c=n(55230),u=["input","select","textarea","a[href]","button","[tabindex]:not(slot)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"],l=u.join(","),h="undefined"==typeof Element,d=h?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,f=!h&&Element.prototype.getRootNode?function(t){return t.getRootNode()}:function(t){return t.ownerDocument},p=function(t,e){return t.tabIndex<0&&(e||/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName)||t.isContentEditable)&&isNaN(parseInt(t.getAttribute("tabindex"),10))?0:t.tabIndex},v=function(t){return"INPUT"===t.tagName},g=function(t){return function(t){return v(t)&&"radio"===t.type}(t)&&!function(t){if(!t.name)return!0;var e,n=t.form||f(t),i=function(t){return n.querySelectorAll('input[type="radio"][name="'+t+'"]')};if("undefined"!=typeof window&&void 0!==window.CSS&&"function"==typeof window.CSS.escape)e=i(window.CSS.escape(t.name));else try{e=i(t.name)}catch(t){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",t.message),!1}var r=function(t,e){for(var n=0;n<t.length;n++)if(t[n].checked&&t[n].form===e)return t[n]}(e,t.form);return!r||r===t}(t)},b=function(t){var e=t.getBoundingClientRect(),n=e.width,i=e.height;return 0===n&&0===i},m=function(t,e){return!(e.disabled||function(t){return v(t)&&"hidden"===t.type}(e)||function(t,e){var n=e.displayCheck,i=e.getShadowRoot;if("hidden"===getComputedStyle(t).visibility)return!0;var r=d.call(t,"details>summary:first-of-type")?t.parentElement:t;if(d.call(r,"details:not([open]) *"))return!0;var o=f(t).host,s=(null==o?void 0:o.ownerDocument.contains(o))||t.ownerDocument.contains(t);if(n&&"full"!==n){if("non-zero-area"===n)return b(t)}else{if("function"==typeof i){for(var a=t;t;){var c=t.parentElement,u=f(t);if(c&&!c.shadowRoot&&!0===i(c))return b(t);t=t.assignedSlot?t.assignedSlot:c||u===t.ownerDocument?c:u.host}t=a}if(s)return!t.getClientRects().length}return!1}(e,t)||function(t){return"DETAILS"===t.tagName&&Array.prototype.slice.apply(t.children).some(function(t){return"SUMMARY"===t.tagName})}(e)||function(t){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))for(var e=t.parentElement;e;){if("FIELDSET"===e.tagName&&e.disabled){for(var n=0;n<e.children.length;n++){var i=e.children.item(n);if("LEGEND"===i.tagName)return!!d.call(e,"fieldset[disabled] *")||!i.contains(t)}return!0}e=e.parentElement}return!1}(e))},y=function(t,e){return!(g(e)||p(e)<0||!m(t,e))},w=function(t,e){if(e=e||{},!t)throw new Error("No node provided");return!1!==d.call(t,l)&&y(e,t)};class $ extends r.L{constructor(){super(...arguments),this.modal=!1,this.hidden=!1,this.noFocusTrap=!1,this.noFocusTrapChanged=()=>{this.$fastController.isConnected&&this.updateTrapFocus()},this.isTrappingFocus=!1,this.handleDocumentKeydown=t=>{if(!t.defaultPrevented&&!this.hidden)switch(t.key){case c.F9:this.dismiss(),t.preventDefault();break;case c.J9:this.handleTabKeyDown(t)}},this.handleDocumentFocus=t=>{!t.defaultPrevented&&this.shouldForceFocus(t.target)&&(this.focusFirstElement(),t.preventDefault())},this.handleTabKeyDown=t=>{if(this.noFocusTrap||this.hidden)return;const e=this.getTabQueueBounds();return 0!==e.length?1===e.length?(e[0].focus(),void t.preventDefault()):void(t.shiftKey&&t.target===e[0]?(e[e.length-1].focus(),t.preventDefault()):t.shiftKey||t.target!==e[e.length-1]||(e[0].focus(),t.preventDefault())):void 0},this.getTabQueueBounds=()=>$.reduceTabbableItems([],this),this.focusFirstElement=()=>{const t=this.getTabQueueBounds();t.length>0?t[0].focus():this.dialog instanceof HTMLElement&&this.dialog.focus()},this.shouldForceFocus=t=>this.isTrappingFocus&&!this.contains(t),this.shouldTrapFocus=()=>!this.noFocusTrap&&!this.hidden,this.updateTrapFocus=t=>{const e=void 0===t?this.shouldTrapFocus():t;e&&!this.isTrappingFocus?(this.isTrappingFocus=!0,document.addEventListener("focusin",this.handleDocumentFocus),o.L.enqueue(()=>{this.shouldForceFocus(document.activeElement)&&this.focusFirstElement()})):!e&&this.isTrappingFocus&&(this.isTrappingFocus=!1,document.removeEventListener("focusin",this.handleDocumentFocus))}}dismiss(){this.$emit("dismiss"),this.$emit("cancel")}show(){this.hidden=!1}hide(){this.hidden=!0,this.$emit("close")}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",this.handleDocumentKeydown),this.notifier=s.cP.getNotifier(this),this.notifier.subscribe(this,"hidden"),this.updateTrapFocus()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this.handleDocumentKeydown),this.updateTrapFocus(!1),this.notifier.unsubscribe(this,"hidden")}handleChange(t,e){if("hidden"===e)this.updateTrapFocus()}static reduceTabbableItems(t,e){return"-1"===e.getAttribute("tabindex")?t:w(e)||$.isFocusableFastElement(e)&&$.hasTabbableShadow(e)?(t.push(e),t):e.childElementCount?t.concat(Array.from(e.children).reduce($.reduceTabbableItems,[])):t}static isFocusableFastElement(t){return!!t.$fastController?.definition.shadowOptions?.delegatesFocus}static hasTabbableShadow(t){return Array.from(t.shadowRoot?.querySelectorAll("*")??[]).some(t=>w(t))}}(0,i.Cg)([(0,a.CF)({mode:"boolean"}),(0,i.Sn)("design:type",Boolean)],$.prototype,"modal",void 0),(0,i.Cg)([(0,a.CF)({mode:"boolean"}),(0,i.Sn)("design:type",Boolean)],$.prototype,"hidden",void 0),(0,i.Cg)([(0,a.CF)({attribute:"no-focus-trap",mode:"boolean"}),(0,i.Sn)("design:type",Boolean)],$.prototype,"noFocusTrap",void 0),(0,i.Cg)([(0,a.CF)({attribute:"aria-describedby"}),(0,i.Sn)("design:type",String)],$.prototype,"ariaDescribedby",void 0),(0,i.Cg)([(0,a.CF)({attribute:"aria-labelledby"}),(0,i.Sn)("design:type",String)],$.prototype,"ariaLabelledby",void 0),(0,i.Cg)([(0,a.CF)({attribute:"aria-label"}),(0,i.Sn)("design:type",String)],$.prototype,"ariaLabel",void 0)},26920:function(t,e,n){"use strict";n.d(e,{$P:function(){return c},FX:function(){return a},XA:function(){return o},vd:function(){return s}});var i=n(68136);const{create:r}=i.G,o=r("stroke-width",1),s=r("focus-stroke-width",2),a=o,c=s},27478:function(t,e,n){"use strict";n.d(e,{P:function(){return r}});var i=n(37820);class r{constructor(t,e,n){this.x=t,this.y=e,this.z=n}static fromObject(t){return!t||isNaN(t.x)||isNaN(t.y)||isNaN(t.z)?null:new r(t.x,t.y,t.z)}equalValue(t){return this.x===t.x&&this.y===t.y&&this.z===t.z}roundToPrecision(t){return new r((0,i.l)(this.x,t),(0,i.l)(this.y,t),(0,i.l)(this.z,t))}toObject(){return{x:this.x,y:this.y,z:this.z}}}r.whitePoint=new r(.95047,1,1.08883)},29025:function(t,e,n){"use strict";n.d(e,{z:function(){return o}});var i=n(56911),r=n(38493);class o{}(0,i.Cg)([(0,r.CF)({attribute:"aria-atomic"}),(0,i.Sn)("design:type",Object)],o.prototype,"ariaAtomic",void 0),(0,i.Cg)([(0,r.CF)({attribute:"aria-busy"}),(0,i.Sn)("design:type",Object)],o.prototype,"ariaBusy",void 0),(0,i.Cg)([(0,r.CF)({attribute:"aria-controls"}),(0,i.Sn)("design:type",Object)],o.prototype,"ariaControls",void 0),(0,i.Cg)([(0,r.CF)({attribute:"aria-current"}),(0,i.Sn)("design:type",Object)],o.prototype,"ariaCurrent",void 0),(0,i.Cg)([(0,r.CF)({attribute:"aria-describedby"}),(0,i.Sn)("design:type",Object)],o.prototype,"ariaDescribedby",void 0),(0,i.Cg)([(0,r.CF)({attribute:"aria-details"}),(0,i.Sn)("design:type",Object)],o.prototype,"ariaDetails",void 0),(0,i.Cg)([(0,r.CF)({attribute:"aria-disabled"}),(0,i.Sn)("design:type",Object)],o.prototype,"ariaDisabled",void 0),(0,i.Cg)([(0,r.CF)({attribute:"aria-errormessage"}),(0,i.Sn)("design:type",Object)],o.prototype,"ariaErrormessage",void 0),(0,i.Cg)([(0,r.CF)({attribute:"aria-flowto"}),(0,i.Sn)("design:type",Object)],o.prototype,"ariaFlowto",void 0),(0,i.Cg)([(0,r.CF)({attribute:"aria-haspopup"}),(0,i.Sn)("design:type",Object)],o.prototype,"ariaHaspopup",void 0),(0,i.Cg)([(0,r.CF)({attribute:"aria-hidden"}),(0,i.Sn)("design:type",Object)],o.prototype,"ariaHidden",void 0),(0,i.Cg)([(0,r.CF)({attribute:"aria-invalid"}),(0,i.Sn)("design:type",Object)],o.prototype,"ariaInvalid",void 0),(0,i.Cg)([(0,r.CF)({attribute:"aria-keyshortcuts"}),(0,i.Sn)("design:type",Object)],o.prototype,"ariaKeyshortcuts",void 0),(0,i.Cg)([(0,r.CF)({attribute:"aria-label"}),(0,i.Sn)("design:type",Object)],o.prototype,"ariaLabel",void 0),(0,i.Cg)([(0,r.CF)({attribute:"aria-labelledby"}),(0,i.Sn)("design:type",Object)],o.prototype,"ariaLabelledby",void 0),(0,i.Cg)([(0,r.CF)({attribute:"aria-live"}),(0,i.Sn)("design:type",Object)],o.prototype,"ariaLive",void 0),(0,i.Cg)([(0,r.CF)({attribute:"aria-owns"}),(0,i.Sn)("design:type",Object)],o.prototype,"ariaOwns",void 0),(0,i.Cg)([(0,r.CF)({attribute:"aria-relevant"}),(0,i.Sn)("design:type",Object)],o.prototype,"ariaRelevant",void 0),(0,i.Cg)([(0,r.CF)({attribute:"aria-roledescription"}),(0,i.Sn)("design:type",Object)],o.prototype,"ariaRoledescription",void 0)},29194:function(t,e,n){"use strict";n.d(e,{Yi:function(){return c},dg:function(){return a}});var i=n(42277),r=n(19470),o=n(35727);const s=(0,r.Mg)(),a=Object.freeze({getForInstance:s.getForInstance,getByType:s.getByType,define:(t,e)=>((e=e||{}).type=t,s.register(e),t),assignAspect(t,e){if(e)switch(t.sourceAspect=e,e[0]){case":":t.targetAspect=e.substring(1),t.aspectType="classList"===t.targetAspect?i.D.tokenList:i.D.property;break;case"?":t.targetAspect=e.substring(1),t.aspectType=i.D.booleanAttribute;break;case"@":t.targetAspect=e.substring(1),t.aspectType=i.D.event;break;default:t.targetAspect=e,t.aspectType=i.D.attribute}else t.aspectType=i.D.content}});class c{constructor(t){this.options=t}createHTML(t){return o.VK.attribute(t(this))}createBehavior(){return this}}(0,r.rV)(c)},29586:function(t,e,n){"use strict";n.d(e,{R:function(){return x}});var i=n(60993),r=n(64187),o=n(22131),s=n(73477),a=n(74849),c=n(50882),u=n(48196),l=n(57416),h=n(41123),d=n(64699),f=n(74838),p=n(14996),v=n(4283),g=n(79288),b=n(7896),m=n(74089),y=n(26920),w=n(37302),$=n(48751);const x=a.A`
    ${(0,r.V)("inline-flex")} :host {
        font-family: ${b.O};
        border-radius: calc(${l.Pb} * 1px);
        border: calc(${y.vd} * 1px) solid transparent;
        box-sizing: border-box;
        color: ${$.l};
        cursor: pointer;
        fill: currentcolor;
        font-size: ${h.K};
        height: calc(${u.D} * 1px);
        line-height: ${h.Z};
        margin: 0 calc(${f.vR} * 1px);
        outline: none;
        overflow: hidden;
        align-items: center;
        padding: 0 calc(${f.vR} * 2.25px);
        user-select: none;
        white-space: nowrap;
    }

    :host(:${s.N}) {
        box-shadow: 0 0 0 calc(${y.vd} * 1px) inset ${d.fF};
        border-color: ${p.WN};
        background: ${v.KJ};
        color: ${m.Bg};
    }

    :host([aria-selected="true"]) {
        background: ${v.IR};
        color: ${m.l_};
    }

    :host(:hover) {
        background: ${v.OS};
        color: ${m.XK};
    }

    :host(:active) {
        background: ${v.am};
        color: ${m.J_};
    }

    :host(:not([aria-selected="true"]):hover) {
        background: ${w.Xt};
        color: ${$.l};
    }

    :host(:not([aria-selected="true"]):active) {
        background: ${w.X4};
        color: ${$.l};
    }

    :host([disabled]) {
        cursor: ${i.Z};
        opacity: ${g.q};
    }

    :host([disabled]:hover) {
        background-color: inherit;
    }

    .content {
        grid-column-start: 2;
        justify-self: start;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    ::slotted([slot="start"]),
    ::slotted([slot="end"]),
    ::slotted(svg) {
        display: flex;
    }

    ::slotted(svg) {
        ${""}
        height: calc(${f.vR} * 4px);
        width: calc(${f.vR} * 4px);
    }

    ::slotted([slot="end"]) {
        margin-inline-start: 1ch;
    }

    ::slotted([slot="start"]) {
        margin-inline-end: 1ch;
    }
`.withBehaviors((0,o.mr)(a.A`
            :host {
                border-color: transparent;
                color: ${c.A.ButtonText};
                forced-color-adjust: none;
            }

            :host(:not([aria-selected="true"]):hover),
            :host([aria-selected="true"]) {
                background: ${c.A.Highlight};
                color: ${c.A.HighlightText};
            }

            :host([disabled]),
            :host([disabled]:not([aria-selected="true"]):hover) {
                background: ${c.A.Canvas};
                color: ${c.A.GrayText};
                fill: currentcolor;
                opacity: 1;
            }
        `))},31023:function(t,e,n){"use strict";n.d(e,{r:function(){return a}});var i=n(68136),r=n(57606),o=n(86627);const{create:s}=i.G,a=s({name:"neutral-palette"},r.p.create(o.zW))},31157:function(t,e,n){"use strict";var i;n.d(e,{O:function(){return i}}),function(t){t.ltr="ltr",t.rtl="rtl"}(i||(i={}))},32286:function(t,e,n){"use strict";n.d(e,{W:function(){return v}});var i=n(87353),r=n(17254),o=n(2202),s=n(96950),a=n(60402),c=n(91640);const u=`${(0,r.rA)().StaticsUrl}latest/fluent-icons/search_24_regular.svg`,l=s.qy`${s.qy.partial(o)}`,h=s.qy`<div class="clear-container cc-pa" style="${t=>""!==t.value?"":"display: none"}"><fluent-button class="clear-btn" id="clear_srch" data-targetid="ClearSearchButton" appearance="stealth" data-customhandled="true" title="${t=>t.clearTitle}" aria-label="${t=>t.clearLabel}" part="button" appearance="${t=>t.isOnImage?"stealth":"accent"}" ?disabled="${t=>""===t.value}" @focus=${t=>t.clearBtnOnFocus()} @blur=${t=>t.clearBtnOnBlurs()} @click="${(t,e)=>t.clearValue(e.event)}" @keypress=${(t,e)=>t.clearValue(e.event)} icon-only data-t="${t=>t.clearButtonTelemetryTag}">${l}</fluent-button></div>`,d=s.qy`<img class="search-icon-asset-img" src="${u}" aria-hidden="true" width="24" height="24" />`,f=s.qy`<fluent-button class="search-btn" part="button" part="button" title=${t=>t.buttonLabel} aria-label=${t=>t.buttonLabel} tabIndex=${t=>t.disabled?"-1":"0"} @click="${(t,e)=>t.submitSearch(e.event)}" @keypress="${(t,e)=>t.submitSearch(e.event)}" data-t="${t=>t.buttonTelemetryTag}" data-customhandled="true" appearance="stealth">${d}</fluent-button>`,p=s.qy`<div class="form-kumo" part="form"><div class="kumo-wrapper"><div class="core search-btn-on-left core-search-kumo" part="searchcore"><slot name="search-options-left"></slot>${f}<input class="control" type="search" id="q" name="q" part="control" title="${t=>t.title}" @input=${(t,e)=>t.handleTextInput(e.event)} @focus=${t=>t.inputOnFocus()} @blur=${t=>t.inputOnBlur()} aria-label="${t=>t.title}" placeholder=${t=>t.isRubySearchBox&&t.isInputFocused?"":t.placeholder} autocomplete=${t=>!t.isRubySearchBox&&t.autocomplete} ?required=${t=>t.required} ?disabled=${t=>t.disabled} ?readonly=${t=>t.readOnly} maxlength="${t=>t.maxlength}" minlength="${t=>t.minlength}" ?spellcheck="${t=>t.spellcheck}" ${(0,a.K)("control")} data-t="${t=>t.inputTelemetryTag}" />${h}</div></div></div>`;function v(t){return s.qy`<template tabindex="${t=>t.disabled?null:0}" class=" ${t=>t.readOnly?"readonly":""} ${t=>t.isOnImage?"onimage":""} " @focus=${t=>t.onFocus()} @blur=${t=>t.onBlurs()}>${(0,c.z)(t=>t.isRubySearchBox,p,function(t){const e=s.qy`<fluent-button class="${t=>t.isOnImage?"stealth":"accent"} ${t=>t.enableClearButton?"enable-clr-btn ":""}" part="button" title="${t=>t.buttonLabel}" aria-label="${t=>t.buttonLabel}" tabIndex="${t=>t.disabled?"-1":"0"}" appearance="${t=>t.isOnImage?"stealth":"accent"}" @click="${(t,e)=>t.submitSearch(e.event)}" @keypress="${(t,e)=>t.submitSearch(e.event)}" data-t="${t=>t.buttonTelemetryTag}"><span part="end" class="end-slot" ${(0,a.K)("endContainer")}><slot name="end" ${(0,a.K)("end")} @slotchange=${t=>t.handleEndContentChange()}>${t.endContent||""}</slot></span></fluent-button>`;return s.qy`<div class="root" part="root">${(0,c.z)(t=>t.isProngRubySearchBox,e)} ${i.p}<input class="control" part="control" type="search" id="${t=>t.id}" title="${t=>t.title}" name="${t=>t.name}" @input=${(t,e)=>t.handleTextInput(e.event)} aria-label="${t=>t.title}" placeholder=${t=>t.placeholder} autocomplete=${t=>t.autocomplete} ?required=${t=>t.required} ?disabled=${t=>t.disabled} ?readonly=${t=>t.readOnly} maxlength="${t=>t.maxlength}" minlength="${t=>t.minlength}" ?spellcheck="${t=>t.spellcheck}" ${(0,a.K)("control")} data-t="${t=>t.inputTelemetryTag}" /></div><div class="searchoptions"><slot name="search-options"></slot></div>${(0,c.z)(t=>t.showClearButton&&!t.isProngRubySearchBox,s.qy`<fluent-button class="${t=>t.isOnImage?"stealth":"accent"} ${t=>t.enableClearButton?"enable-clr-btn ":""}" title="${t=>t.clearTitle}" aria-label="${t=>t.clearLabel}" part="button" appearance="${t=>t.isOnImage?"stealth":"accent"}" ?disabled="${t=>""===t.value}" @focus=${t=>t.clearBtnOnFocus()} @blur=${t=>t.clearBtnOnBlurs()} @click="${(t,e)=>t.clearValue(e.event)}" @keypress=${(t,e)=>t.clearValue(e.event)} data-t="${t=>t.clearButtonTelemetryTag}"><span part="end" class="end-slot" ${(0,a.K)("endContainer")}><slot name="end" ${(0,a.K)("end")} @slotchange=${t=>t.handleEndContentChange()}>${t.clearContent||""}</slot></span></fluent-button>`)} ${(0,c.z)(t=>!t.showClearButton&&!t.isProngRubySearchBox,e)} `}(t))}</template>`}},32625:function(t,e,n){"use strict";n.d(e,{a:function(){return s}});var i=n(19470),r=n(72454);class o extends r.O{createObserver(){return this}bind(t){return this.evaluate(t.source,t.context)}}function s(t,e){return new o(t,e)}(0,i.rV)(o)},34188:function(t,e,n){"use strict";n.d(e,{VS:function(){return v},fB:function(){return l},vB:function(){return p}});const i=/fe-b\$\$start\$\$(\d+)\$\$(.+)\$\$fe-b/,r=/fe-b\$\$end\$\$(\d+)\$\$(.+)\$\$fe-b/,o=/fe-repeat\$\$start\$\$(\d+)\$\$fe-repeat/,s=/fe-repeat\$\$end\$\$(\d+)\$\$fe-repeat/,a=/fe-eb\$\$start\$\$(.+)\$\$fe-eb/,c=/fe-eb\$\$end\$\$(.+)\$\$fe-eb/;function u(t){return t&&t.nodeType===Node.COMMENT_NODE}const l=Object.freeze({attributeMarkerName:"data-fe-b",attributeBindingSeparator:" ",contentBindingStartMarker:(t,e)=>`fe-b$$start$$${t}$$${e}$$fe-b`,contentBindingEndMarker:(t,e)=>`fe-b$$end$$${t}$$${e}$$fe-b`,repeatStartMarker:t=>`fe-repeat$$start$$${t}$$fe-repeat`,repeatEndMarker:t=>`fe-repeat$$end$$${t}$$fe-repeat`,isContentBindingStartMarker:t=>i.test(t),isContentBindingEndMarker:t=>r.test(t),isRepeatViewStartMarker:t=>o.test(t),isRepeatViewEndMarker:t=>s.test(t),isElementBoundaryStartMarker:t=>u(t)&&a.test(t.data),isElementBoundaryEndMarker:t=>u(t)&&c.test(t.data),parseAttributeBinding(t){const e=t.getAttribute(this.attributeMarkerName);return null===e?e:e.split(this.attributeBindingSeparator).map(t=>parseInt(t))},parseContentBindingStartMarker:t=>f(i,t),parseContentBindingEndMarker:t=>f(r,t),parseRepeatStartMarker:t=>h(o,t),parseRepeatEndMarker:t=>h(s,t),parseElementBoundaryStartMarker:t=>d(a,t),parseElementBoundaryEndMarker:t=>d(c,t)});function h(t,e){const n=t.exec(e);return null===n?n:parseInt(n[1])}function d(t,e){const n=t.exec(e);return null===n?n:n[1]}function f(t,e){const n=t.exec(e);return null===n?n:[parseInt(n[1]),n[2]]}const p=Symbol.for("fe-hydration");function v(t){return t[p]===p}},35106:function(t,e,n){"use strict";n.d(e,{LT:function(){return c},aO:function(){return a},qw:function(){return s}});var i=n(96950),r=n(60402),o=n(18893);class s{}function a(t){return i.qy`
        <slot name="end" ${(0,r.K)("end")}>${(0,o.R)(t.end)}</slot>
    `.inline()}function c(t){return i.qy`
        <slot name="start" ${(0,r.K)("start")}>${(0,o.R)(t.start)}</slot>
    `.inline()}},35727:function(t,e,n){"use strict";n.d(e,{Hn:function(){return c},VK:function(){return u},iX:function(){return l}});const i=`fast-${Math.random().toString(36).substring(2,8)}`,r=`${i}{`,o=`}${i}`,s=o.length;let a=0;const c=()=>`${i}-${++a}`,u=Object.freeze({interpolation:t=>`${r}${t}${o}`,attribute:t=>`${c()}="${r}${t}${o}"`,comment:t=>`\x3c!--${r}${t}${o}--\x3e`}),l=Object.freeze({parse(t,e){const n=t.split(r);if(1===n.length)return null;const i=[];for(let t=0,r=n.length;t<r;++t){const r=n[t],a=r.indexOf(o);let c;if(-1===a)c=r;else{const t=r.substring(0,a);i.push(e[t]),c=r.substring(a+s)}""!==c&&i.push(c)}return i}})},35901:function(t,e,n){"use strict";n.d(e,{MA:function(){return s},_S:function(){return c},uP:function(){return a},yz:function(){return o}});var i=n(68136);const{create:r}=i.G,o=r("accent-fill-rest-delta",0),s=r("accent-fill-hover-delta",4),a=r("accent-fill-active-delta",-5),c=r("accent-fill-focus-delta",0)},36452:function(t,e,n){"use strict";n.d(e,{IH:function(){return g},U7:function(){return v},Ez:function(){return p},MY:function(){return d},u4:function(){return f},mb:function(){return h},I2:function(){return l}});var i=n(68136),r=n(68009);var o=n(95239),s=n(43404),a=n(31023);const{create:c}=i.G,u=c({name:"neutral-stroke-recipe"},{evaluate:t=>function(t,e,n,i,o,s){const a=t.closestIndexOf(e),c=(0,r.F)(e),u=a+c*n,l=u+c*(i-n),h=u+c*(o-n),d=u+c*(s-n);return{rest:t.get(u),hover:t.get(l),active:t.get(h),focus:t.get(d)}}(t(a.r),t(o.p),t(s.uC),t(s.iS),t(s.C2),t(s.Q2))}),l=c("neutral-stroke-rest",t=>t(u).evaluate(t).rest),h=c("neutral-stroke-hover",t=>t(u).evaluate(t).hover),d=c("neutral-stroke-active",t=>t(u).evaluate(t).active),f=c("neutral-stroke-focus",t=>t(u).evaluate(t).focus),p=l,v=h,g=d},37079:function(t,e,n){"use strict";n.d(e,{F:function(){return o},w:function(){return s}});var i=n(68136);const{create:r}=i.G,o=r("type-ramp-plus-4-font-size","28px"),s=r("type-ramp-plus-4-line-height","36px")},37180:function(t,e,n){"use strict";n.d(e,{c:function(){return i}});const i=Object.freeze({prefix:"fluent",shadowRootMode:"open",registry:customElements})},37302:function(t,e,n){"use strict";n.d(e,{X4:function(){return h},rM:function(){return d},Xt:function(){return l},jO:function(){return c},F7:function(){return u}});var i=n(68136);var r=n(95239),o=n(37947),s=n(31023);const{create:a}=i.G,c=a({name:"neutral-fill-recipe"},{evaluate:(t,e)=>function(t,e,n,i,r,o){const s=t.closestIndexOf(e),a=s>=Math.max(n,i,r,o)?-1:1;return{rest:t.get(s+a*n),hover:t.get(s+a*i),active:t.get(s+a*r),focus:t.get(s+a*o)}}(t(s.r),e||t(r.p),t(o.DE),t(o.l2),t(o.L6),t(o.tN))}),u=a("neutral-fill-rest",t=>t(c).evaluate(t).rest),l=a("neutral-fill-hover",t=>t(c).evaluate(t).hover),h=a("neutral-fill-active",t=>t(c).evaluate(t).active),d=a("neutral-fill-focus",t=>t(c).evaluate(t).focus)},37492:function(t,e,n){"use strict";function i(t,e){let n=e;for(;null!==n;){if(n===t)return!0;n=r(n)}return!1}function r(t){const e=t.parentElement;if(e)return e;{const e=t.getRootNode();if(e.host instanceof HTMLElement)return e.host}return null}n.d(e,{W:function(){return i},Z:function(){return r}})},37820:function(t,e,n){"use strict";function i(t,e,n){return isNaN(t)||t<=e?e:t>=n?n:t}function r(t,e,n){return isNaN(t)||t<=e?0:t>=n?1:t/(n-e)}function o(t,e,n){return isNaN(t)?e:e+t*(n-e)}function s(t){return t*(Math.PI/180)}function a(t){return t*(180/Math.PI)}function c(t){const e=Math.round(i(t,0,255)).toString(16);return 1===e.length?"0"+e:e}function u(t,e,n){return isNaN(t)||t<=0?e:t>=1?n:e+t*(n-e)}function l(t,e,n){if(t<=0)return e%360;if(t>=1)return n%360;const i=(e-n+360)%360;return i<=(n-e+360)%360?(e-i*t+360)%360:(e+i*t+360)%360}n.d(e,{Cc:function(){return u},IG:function(){return c},NU:function(){return o},S8:function(){return r},c5:function(){return l},l:function(){return h},nv:function(){return a},qE:function(){return i},tR:function(){return s}});Math.PI;function h(t,e){const n=Math.pow(10,e);return Math.round(t*n)/n}},37947:function(t,e,n){"use strict";n.d(e,{DE:function(){return o},L6:function(){return a},l2:function(){return s},tN:function(){return c}});var i=n(68136);const{create:r}=i.G,o=r("neutral-fill-rest-delta",7),s=r("neutral-fill-hover-delta",10),a=r("neutral-fill-active-delta",5),c=r("neutral-fill-focus-delta",0)},37998:function(t,e,n){"use strict";n.d(e,{ET:function(){return i}});const i="box-shadow: 0 0 calc((var(--elevation) * 0.225px) + 2px) rgba(0, 0, 0, calc(.11 * (2 - var(--background-luminance, 1)))), 0 calc(var(--elevation) * 0.4px) calc((var(--elevation) * 0.9px)) rgba(0, 0, 0, calc(.13 * (2 - var(--background-luminance, 1))));"},38493:function(t,e,n){"use strict";n.d(e,{$u:function(){return l},Bs:function(){return h},CF:function(){return g},IJ:function(){return d},O1:function(){return v},R$:function(){return p}});var i=n(60815),r=n(96293),o=n(23429),s=n(42277),a=n(19470);const c="boolean",u="reflect",l=Object.freeze({locate:(0,a.iX)()}),h={toView:t=>t?"true":"false",fromView:t=>null!=t&&"false"!==t&&!1!==t&&0!==t},d={toView:t=>"boolean"==typeof t?t.toString():"",fromView:t=>[null,void 0,void 0].includes(t)?null:h.fromView(t)};function f(t){if(null==t)return null;const e=1*t;return isNaN(e)?null:e}const p={toView(t){const e=f(t);return e?e.toString():e},fromView:f};class v{constructor(t,e,n=e.toLowerCase(),i=u,r){this.guards=new Set,this.Owner=t,this.name=e,this.attribute=n,this.mode=i,this.converter=r,this.fieldName=`_${e}`,this.callbackName=`${e}Changed`,this.hasCallback=this.callbackName in t.prototype,i===c&&void 0===r&&(this.converter=h)}setValue(t,e){const n=t[this.fieldName],i=this.converter;void 0!==i&&(e=i.fromView(e)),n!==e&&(t[this.fieldName]=e,this.tryReflectToAttribute(t),this.hasCallback&&t[this.callbackName](n,e),t.$fastController.notify(this.name))}getValue(t){return i.cP.track(t,this.name),t[this.fieldName]}onAttributeChangedCallback(t,e){this.guards.has(t)||(this.guards.add(t),this.setValue(t,e),this.guards.delete(t))}tryReflectToAttribute(t){const e=this.mode,n=this.guards;n.has(t)||"fromView"===e||o.L.enqueue(()=>{n.add(t);const i=t[this.fieldName];switch(e){case u:const e=this.converter;s.d.setAttribute(t,this.attribute,void 0!==e?e.toView(i):i);break;case c:s.d.setBooleanAttribute(t,this.attribute,i)}n.delete(t)})}static collect(t,...e){const n=[];e.push(l.locate(t));for(let i=0,o=e.length;i<o;++i){const o=e[i];if(void 0!==o)for(let e=0,i=o.length;e<i;++e){const i=o[e];(0,r.Kg)(i)?n.push(new v(t,i)):n.push(new v(t,i.property,i.attribute,i.mode,i.converter))}}return n}}function g(t,e){let n;function i(t,e){arguments.length>1&&(n.property=e),l.locate(t.constructor).push(n)}return arguments.length>1?(n={},void i(t,e)):(n=void 0===t?{}:t,i)}},39407:function(t,e,n){"use strict";n.d(e,{Cr:function(){return u},Xc:function(){return h},pI:function(){return l},u7:function(){return d}});var i=n(14777),r=n(58625),o=n(62044),s=n(89449),a=n(46543),c=(0,r.T)("plugin");function u(t){return c.get(t,"state",{},!0)}function l(t,e){for(var n,r=[],a=null,c=t[i.uR]();c;){var l=c[i.AP]();if(l){a&&(0,o.Tn)(a[i.YH])&&(0,o.Tn)(l[s.qT])&&a[i.YH](l);((0,o.Tn)(l[i.tZ])?l[i.tZ]():(n=u(l))[i.tZ])||r[i.y5](l),a=l,c=c[i.uR]()}}(0,o.Iu)(r,function(r){var o=t[s.eT]();r[i.mE](t.getCfg(),o,e,t[i.uR]()),n=u(r),r[s.eT]||n[s.eT]||(n[s.eT]=o),n[i.tZ]=!0,delete n[i.Ik]})}function h(t){return t.sort(function(t,e){var n=0;if(e){var i=(0,o.Tn)(e[s.qT]);(0,o.Tn)(t[s.qT])?n=i?t[s.Vo]-e[s.Vo]:1:i&&(n=-1)}else n=t?1:-1;return n})}function d(t){var e={};return{getName:function(){return e[i.RS]},setName:function(n){t&&t.setName(n),e[i.RS]=n},getTraceId:function(){return e[i.P5]},setTraceId:function(n){t&&t.setTraceId(n),(0,a.hX)(n)&&(e[i.P5]=n)},getSpanId:function(){return e[i.wi]},setSpanId:function(n){t&&t.setSpanId(n),(0,a.wN)(n)&&(e[i.wi]=n)},getTraceFlags:function(){return e[i.Rr]},setTraceFlags:function(n){t&&t.setTraceFlags(n),e[i.Rr]=n}}}},39692:function(t,e,n){"use strict";n.d(e,{f:function(){return a}});var i=n(96293),r=n(72454),o=n(93809),s=n(32625);function a(t){return(0,i.Tn)(t)?(0,o.U)(t):t instanceof r.O?t:(0,s.a)(()=>t)}},39813:function(t,e,n){"use strict";n.d(e,{Im:function(){return o},qU:function(){return a},vz:function(){return c}});var i=n(15454),r=n(50090),o=(((0,r.mS)()||{}).Symbol,((0,r.mS)()||{}).Reflect,i.zi||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])i.Wy[i.QV].call(e,o)&&(t[o]=e[o]);return t}),s=function(t,e){return s=i.s6.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e[i.QV](n)&&(t[n]=e[n])},s(t,e)};function a(t,e){function n(){this.constructor=t}typeof e!==i.hW&&null!==e&&(0,r.zk)("Class extends value "+String(e)+" is not a constructor or null"),s(t,e),t[i.vR]=null===e?(0,r.AQ)(e):(n[i.vR]=e[i.vR],new n)}function c(t,e){for(var n=0,i=e.length,r=t.length;n<i;n++,r++)t[r]=e[n];return t}},39957:function(t,e,n){"use strict";n.d(e,{RR:function(){return O},ux:function(){return A}});var i=n(34188),r=n(19470),o=n(93800),s=n(60815),a=n(23429);class c{constructor(t,e,n){this.index=t,this.removed=e,this.addedCount=n}adjustTo(t){let e=this.index;const n=t.length;return e>n?e=n-this.addedCount:e<0&&(e=n+this.removed.length+e-this.addedCount),this.index=e<0?0:e,this}}const u=Object.freeze({reset:1,splice:2,optimized:3}),l=new c(0,r.tR,0);l.reset=!0;const h=[l];function d(t,e,n,i){return e<n||i<t?-1:e===n||i===t?0:t<n?e<i?e-n:i-n:i<e?i-t:e-t}function f(t,e,n,i,o,s){let a=0,u=0;const l=Math.min(n-e,s-o);if(0===e&&0===o&&(a=function(t,e,n){for(let i=0;i<n;++i)if(t[i]!==e[i])return i;return n}(t,i,l)),n===t.length&&s===i.length&&(u=function(t,e,n){let i=t.length,r=e.length,o=0;for(;o<n&&t[--i]===e[--r];)o++;return o}(t,i,l-a)),o+=a,s-=u,(n-=u)-(e+=a)===0&&s-o===0)return r.tR;if(e===n){const t=new c(e,[],0);for(;o<s;)t.removed.push(i[o++]);return[t]}if(o===s)return[new c(e,[],n-e)];const h=function(t){let e=t.length-1,n=t[0].length-1,i=t[e][n];const r=[];for(;e>0||n>0;){if(0===e){r.push(2),n--;continue}if(0===n){r.push(3),e--;continue}const o=t[e-1][n-1],s=t[e-1][n],a=t[e][n-1];let c;c=s<a?s<o?s:o:a<o?a:o,c===o?(o===i?r.push(0):(r.push(1),i=o),e--,n--):c===s?(r.push(3),e--,i=s):(r.push(2),n--,i=a)}return r.reverse()}(function(t,e,n,i,r,o){const s=o-r+1,a=n-e+1,c=new Array(s);let u,l;for(let t=0;t<s;++t)c[t]=new Array(a),c[t][0]=t;for(let t=0;t<a;++t)c[0][t]=t;for(let n=1;n<s;++n)for(let o=1;o<a;++o)t[e+o-1]===i[r+n-1]?c[n][o]=c[n-1][o-1]:(u=c[n-1][o]+1,l=c[n][o-1]+1,c[n][o]=u<l?u:l);return c}(t,e,n,i,o,s)),d=[];let f,p=e,v=o;for(let t=0;t<h.length;++t)switch(h[t]){case 0:void 0!==f&&(d.push(f),f=void 0),p++,v++;break;case 1:void 0===f&&(f=new c(p,[],0)),f.addedCount++,p++,f.removed.push(i[v]),v++;break;case 2:void 0===f&&(f=new c(p,[],0)),f.addedCount++,p++;break;case 3:void 0===f&&(f=new c(p,[],0)),f.removed.push(i[v]),v++}return void 0!==f&&d.push(f),d}function p(t,e){let n=!1,i=0;for(let r=0;r<e.length;r++){const o=e[r];if(o.index+=i,n)continue;const s=d(t.index,t.index+t.removed.length,o.index,o.index+o.addedCount);if(s>=0){e.splice(r,1),r--,i-=o.addedCount-o.removed.length,t.addedCount+=o.addedCount-s;const a=t.removed.length+o.removed.length-s;if(t.addedCount||a){let e=o.removed;if(t.index<o.index){const n=t.removed.slice(0,o.index-t.index);n.push(...e),e=n}if(t.index+t.removed.length>o.index+o.addedCount){const n=t.removed.slice(o.index+o.addedCount-t.index);e.push(...n)}t.removed=e,o.index<t.index&&(t.index=o.index)}else n=!0}else if(t.index<o.index){n=!0,e.splice(r,0,t),r++;const s=t.addedCount-t.removed.length;o.index+=s,i+=s}}n||e.push(t)}let v=Object.freeze({support:u.optimized,normalize:(t,e,n)=>void 0===t?void 0===n?r.tR:function(t,e){let n=[];const i=[];for(let t=0,n=e.length;t<n;t++)p(e[t],i);for(let e=0,r=i.length;e<r;++e){const r=i[e];1!==r.addedCount||1!==r.removed.length?n=n.concat(f(t,r.index,r.index+r.addedCount,r.removed,0,r.removed.length)):r.removed[0]!==t[r.index]&&n.push(r)}return n}(e,n):h,pop(t,e,n,i){const r=t.length>0,o=n.apply(t,i);return r&&e.addSplice(new c(t.length,[o],0)),o},push(t,e,n,i){const r=n.apply(t,i);return e.addSplice(new c(t.length-i.length,[],i.length).adjustTo(t)),r},reverse(t,e,n,i){const r=n.apply(t,i);return e.reset(t),r},shift(t,e,n,i){const r=t.length>0,o=n.apply(t,i);return r&&e.addSplice(new c(0,[o],0)),o},sort(t,e,n,i){const r=n.apply(t,i);return e.reset(t),r},splice(t,e,n,i){const r=n.apply(t,i);return e.addSplice(new c(+i[0],r,i.length>2?i.length-2:0).adjustTo(t)),r},unshift(t,e,n,i){const r=n.apply(t,i);return e.addSplice(new c(0,[],i.length).adjustTo(t)),r}});Object.freeze({reset:h,setDefaultStrategy(t){v=t}});function g(t,e,n){Reflect.defineProperty(t,e,{value:n,enumerable:!1})}class b extends o.l{constructor(t){super(t),this.oldCollection=void 0,this.splices=void 0,this.needsQueue=!0,this._strategy=null,this._lengthObserver=void 0,this.call=this.flush,g(t,"$fastController",this)}get strategy(){return this._strategy}set strategy(t){this._strategy=t}get lengthObserver(){let t=this._lengthObserver;if(void 0===t){const e=this.subject;this._lengthObserver=t={length:e.length,handleChange(){this.length!==e.length&&(this.length=e.length,s.cP.notify(t,"length"))}},this.subscribe(t)}return t}subscribe(t){this.flush(),super.subscribe(t)}addSplice(t){void 0===this.splices?this.splices=[t]:this.splices.push(t),this.enqueue()}reset(t){this.oldCollection=t,this.enqueue()}flush(){var t;const e=this.splices,n=this.oldCollection;void 0===e&&void 0===n||(this.needsQueue=!0,this.splices=void 0,this.oldCollection=void 0,this.notify((null!==(t=this._strategy)&&void 0!==t?t:v).normalize(n,this.subject,e)))}enqueue(){this.needsQueue&&(this.needsQueue=!1,a.L.enqueue(this))}}let m=!1;const y=Object.freeze({enable(){if(m)return;m=!0,s.cP.setArrayObserverFactory(t=>new b(t));const t=Array.prototype;t.$fastPatch||(g(t,"$fastPatch",1),[t.pop,t.push,t.reverse,t.shift,t.sort,t.splice,t.unshift].forEach(e=>{t[e.name]=function(...t){var n;const i=this.$fastController;return void 0===i?e.apply(this,t):(null!==(n=i.strategy)&&void 0!==n?n:v)[e.name](this,i,e,t)}}))}});var w=n(39692),$=n(29194),x=n(35727),k=n(22020);const C=Object.freeze({positioning:!1,recycle:!0});function S(t,e,n,i){t.context.parent=i.source,t.context.parentContext=i.context,t.bind(e[n])}function E(t,e,n,i){t.context.parent=i.source,t.context.parentContext=i.context,t.context.length=e.length,t.context.index=n,t.bind(e[n])}function M(t){return t.nodeType===Node.COMMENT_NODE}class F extends Error{constructor(t,e){super(t),this.propertyBag=e}}class D{constructor(t){this.directive=t,this.items=null,this.itemsObserver=null,this.bindView=S,this.views=[],this.itemsBindingObserver=t.dataBinding.createObserver(this,t),this.templateBindingObserver=t.templateBinding.createObserver(this,t),t.options.positioning&&(this.bindView=E)}bind(t){this.location=t.targets[this.directive.targetNodeId],this.controller=t,this.items=this.itemsBindingObserver.bind(t),this.template=this.templateBindingObserver.bind(t),this.observeItems(!0),(0,i.VS)(this.template)&&(0,i.VS)(t)&&t.hydrationStage!==k.xW.hydrated?this.hydrateViews(this.template):this.refreshAllViews(),t.onUnbind(this)}unbind(){null!==this.itemsObserver&&this.itemsObserver.unsubscribe(this),this.unbindAllViews()}handleChange(t,e){if(e===this.itemsBindingObserver)this.items=this.itemsBindingObserver.bind(this.controller),this.observeItems(),this.refreshAllViews();else if(e===this.templateBindingObserver)this.template=this.templateBindingObserver.bind(this.controller),this.refreshAllViews(!0);else{if(!e[0])return;e[0].reset?this.refreshAllViews():this.updateViews(e)}}observeItems(t=!1){if(!this.items)return void(this.items=r.tR);const e=this.itemsObserver,n=this.itemsObserver=s.cP.getNotifier(this.items),i=e!==n;i&&null!==e&&e.unsubscribe(this),(i||t)&&n.subscribe(this)}updateViews(t){const e=this.views,n=this.bindView,i=this.items,r=this.template,o=this.controller,s=this.directive.options.recycle,a=[];let c=0,u=0;for(let l=0,h=t.length;l<h;++l){const h=t[l],d=h.removed;let f=0,p=h.index;const v=p+h.addedCount,g=e.splice(h.index,d.length),b=u=a.length+g.length;for(;p<v;++p){const t=e[p],l=t?t.firstChild:this.location;let h;s&&u>0?(f<=b&&g.length>0?(h=g[f],f++):(h=a[c],c++),u--):h=r.create(),e.splice(p,0,h),n(h,i,p,o),h.insertBefore(l)}g[f]&&a.push(...g.slice(f))}for(let t=c,e=a.length;t<e;++t)a[t].dispose();if(this.directive.options.positioning)for(let t=0,n=e.length;t<n;++t){const i=e[t].context;i.length=n,i.index=t}}refreshAllViews(t=!1){const e=this.items,n=this.template,i=this.location,r=this.bindView,o=this.controller;let s=e.length,a=this.views,c=a.length;if(0!==s&&!t&&this.directive.options.recycle||(k.NA.disposeContiguousBatch(a),c=0),0===c){this.views=a=new Array(s);for(let t=0;t<s;++t){const s=n.create();r(s,e,t,o),a[t]=s,s.insertBefore(i)}}else{let t=0;for(;t<s;++t)if(t<c){const i=a[t];if(!i){const e=new XMLSerializer;throw new F(`View is null or undefined inside ${this.location.getRootNode().host.nodeName}. This is a SSR software defect`,{index:t,hydrationStage:this.controller.hydrationStage,itemsLength:s,viewsState:a.map(t=>t?"hydrated":"empty"),viewTemplateString:e.serializeToString(n.create().fragment),rootNodeContent:e.serializeToString(this.location.getRootNode())})}r(i,e,t,o)}else{const s=n.create();r(s,e,t,o),a.push(s),s.insertBefore(i)}const u=a.splice(t,c-t);for(t=0,s=u.length;t<s;++t)u[t].dispose()}}unbindAllViews(){const t=this.views;for(let e=0,n=t.length;e<n;++e){const n=t[e];if(!n){const n=new XMLSerializer;throw new F(`View is null or undefined inside ${this.location.getRootNode().host.nodeName}. This is a SSR software defect`,{index:e,hydrationStage:this.controller.hydrationStage,viewsState:t.map(t=>t?"hydrated":"empty"),rootNodeContent:n.serializeToString(this.location.getRootNode())})}n.unbind()}}hydrateViews(t){if(!this.items)return;this.views=new Array(this.items.length);let e=this.location.previousSibling;for(;null!==e;){if(!M(e)){e=e.previousSibling;continue}const n=i.fB.parseRepeatEndMarker(e.data);if(null===n){e=e.previousSibling;continue}e.data="";const r=e.previousSibling;if(!r)throw new Error(`Error when hydrating inside ${this.location.getRootNode().host.nodeName}: end should never be null. This is a SSR software defect`);let o=r,s=0;for(;null!==o;){if(M(o))if(i.fB.isRepeatViewEndMarker(o.data))s++;else if(i.fB.isRepeatViewStartMarker(o.data)){if(!s){if(i.fB.parseRepeatStartMarker(o.data)!==n)throw new Error(`Error when hydrating inside ${this.location.getRootNode().host.nodeName}: Mismatched start and end markers. This is a SSR software defect`);o.data="",e=o.previousSibling,o=o.nextSibling;const s=t.hydrate(o,r);this.views[n]=s,this.bindView(s,this.items,n,this.controller);break}s--}o=o.previousSibling}if(!o)throw new Error(`Error when hydrating inside ${this.location.getRootNode().host.nodeName}:start should never be null. This is a SSR software defect`)}}}class O{constructor(t,e,n){this.dataBinding=t,this.templateBinding=e,this.options=n,y.enable()}createHTML(t){return x.VK.comment(t(this))}createBehavior(){return new D(this)}}function A(t,e,n=C){const i=(0,w.f)(t),r=(0,w.f)(e);return new O(i,r,{...C,...n})}$.dg.define(O)},40778:function(t,e,n){"use strict";n.d(e,{D:function(){return r}});var i=n(37820);class r{constructor(t,e,n){this.h=t,this.s=e,this.l=n}static fromObject(t){return!t||isNaN(t.h)||isNaN(t.s)||isNaN(t.l)?null:new r(t.h,t.s,t.l)}equalValue(t){return this.h===t.h&&this.s===t.s&&this.l===t.l}roundToPrecision(t){return new r((0,i.l)(this.h,t),(0,i.l)(this.s,t),(0,i.l)(this.l,t))}toObject(){return{h:this.h,s:this.s,l:this.l}}}},41097:function(t,e,n){"use strict";function i(t,e){if("undefined"==typeof window||!window.document||window.isRenderServiceEnv)return t;const n=window.trustedTypes;if(!n||!n.createPolicy)return t;const i=window.trustedTypePolicies||(window.trustedTypePolicies={});if(i[e])return i[e].createHTML(t);const r=window.trustedTypes.createPolicy(e,{createHTML:t=>t});return i[e]=r,r.createHTML(t)}n.d(e,{v:function(){return i}})},41123:function(t,e,n){"use strict";n.d(e,{K:function(){return o},Z:function(){return s}});var i=n(68136);const{create:r}=i.G,o=r("type-ramp-base-font-size","14px"),s=r("type-ramp-base-line-height","20px")},41817:function(t,e,n){"use strict";n.d(e,{v:function(){return a}});var i=n(96950),r=n(60402),o=n(82774),s=n(35106);const a=function(t={}){return i.qy`
        <button
            class="control"
            part="control"
            ?autofocus="${t=>t.autofocus}"
            ?disabled="${t=>t.disabled}"
            form="${t=>t.formId}"
            formaction="${t=>t.formaction}"
            formenctype="${t=>t.formenctype}"
            formmethod="${t=>t.formmethod}"
            ?formnovalidate="${t=>t.formnovalidate}"
            formtarget="${t=>t.formtarget}"
            name="${t=>t.name}"
            type="${t=>t.type}"
            value="${t=>t.value}"
            aria-atomic="${t=>t.ariaAtomic}"
            aria-busy="${t=>t.ariaBusy}"
            aria-controls="${t=>t.ariaControls}"
            aria-current="${t=>t.ariaCurrent}"
            aria-describedby="${t=>t.ariaDescribedby}"
            aria-details="${t=>t.ariaDetails}"
            aria-disabled="${t=>t.ariaDisabled}"
            aria-errormessage="${t=>t.ariaErrormessage}"
            aria-expanded="${t=>t.ariaExpanded}"
            aria-flowto="${t=>t.ariaFlowto}"
            aria-haspopup="${t=>t.ariaHaspopup}"
            aria-hidden="${t=>t.ariaHidden}"
            aria-invalid="${t=>t.ariaInvalid}"
            aria-keyshortcuts="${t=>t.ariaKeyshortcuts}"
            aria-label="${t=>t.ariaLabel}"
            aria-labelledby="${t=>t.ariaLabelledby}"
            aria-live="${t=>t.ariaLive}"
            aria-owns="${t=>t.ariaOwns}"
            aria-pressed="${t=>t.ariaPressed}"
            aria-relevant="${t=>t.ariaRelevant}"
            aria-roledescription="${t=>t.ariaRoledescription}"
            ${(0,r.K)("control")}
        >
            ${(0,s.LT)(t)}
            <span class="content" part="content">
                <slot ${(0,o.e)("defaultSlottedContent")}></slot>
            </span>
            ${(0,s.aO)(t)}
        </button>
    `}()},41922:function(t,e,n){"use strict";n.d(e,{A:function(){return bt}});var i=n(39813),r=n(58207),o=n(13765),s=n(5410),a=n(58625),c=n(99577),u=n(62044),l=n(88383),h=(0,n(96423).Hj)({Unknown:0,NonRetryableStatus:1,InvalidEvent:2,SizeLimitExceeded:3,KillSwitch:4,QueueFull:5}),d=n(20468),f=n(58168),p="REAL_TIME",v="",g="POST",b="drop",m="send",y="requeue",w="rspFail",$="application/x-json-stream",x="cache-control",k="content-type",C="kill-tokens",S="kill-duration",E="time-delta-millis",M="client-version",F="client-id",D="time-delta-to-apply-millis",O="upload-time",A="apikey",T="AuthMsaDeviceTicket",I="AuthXToken",B="msfpc",N="trace",R="user";function L(t){var e=(t.ext||{}).intweb;return e&&(0,c.yD)(e[B])?e[B]:null}function j(t){for(var e=null,n=0;null===e&&n<t.length;n++)e=L(t[n]);return e}var P=function(){function t(e,n){var i=n?[].concat(n):[],r=this,o=j(i);r.iKey=function(){return e},r.Msfpc=function(){return o||v},r.count=function(){return i.length},r.events=function(){return i},r.addEvent=function(t){return!!t&&(i.push(t),o||(o=L(t)),!0)},r.split=function(n,r){var s;if(n<i.length){var a=i.length-n;(0,u.hX)(r)||(a=r<a?r:a),s=i.splice(n,a),o=j(i)}return new t(e,s)}}return t.create=function(e,n){return new t(e,n)},t}(),z=function(){function t(){var e=!0,n=!0,i=!0,o="use-collector-delta",s=!1;(0,r.A)(t,this,function(t){t.allowRequestSending=function(){return e},t.firstRequestSent=function(){i&&(i=!1,s||(e=!1))},t.shouldAddClockSkewHeaders=function(){return n},t.getClockSkewHeaderValue=function(){return o},t.setClockSkew=function(t){s||(t?(o=t,n=!0,s=!0):n=!1,e=!0)}})}return t.__ieDyn=1,t}(),H=function(){function t(){var e={};(0,r.A)(t,this,function(t){t.setKillSwitchTenants=function(t,n){if(t&&n)try{var i=(s=t.split(","),a=[],s&&(0,u.Iu)(s,function(t){a.push((0,u.EH)(t))}),a);if("this-request-only"===n)return i;for(var r=1e3*parseInt(n,10),o=0;o<i.length;++o)e[i[o]]=(0,u.x3)()+r}catch(t){return[]}var s,a;return[]},t.isTenantKilled=function(t){var n=e,i=(0,u.EH)(t);return void 0!==n[i]&&n[i]>(0,u.x3)()||(delete n[i],!1)}})}return t.__ieDyn=1,t}(),_=n(15454);function V(t){var e,n=Math.floor(1200*Math.random())+2400;return e=Math.pow(2,t)*n,Math.min(e,6e5)}var U,W=2e6,q=Math.min(W,65e3),G="metadata",K="f",X=/\./,J=function(){function t(e,n,i,s){var a="data",l="baseData",h=!!s,d=!0,f=n,p={};(0,r.A)(t,this,function(t){function n(t,e,r,o,s,a,l){(0,u.z)(t,function(t,d){var v=null;if(d||(0,c.yD)(d)){var g=r,b=t,m=s,y=e;if(h&&!o&&X.test(t)){var w=t.split("."),$=w.length;if($>1){m&&(m=m.slice());for(var x=0;x<$-1;x++){var k=w[x];y=y[k]=y[k]||{},g+="."+k,m&&m.push(k)}b=w[$-1]}}var C=o&&function(t){var e=p[t];return void 0===e&&(t.length>=7&&(e=(0,u.tG)(t,"ext.metadata")||(0,u.tG)(t,"ext.web")),p[t]=e),e}(g);if(v=!C&&f&&f.handleField(g,b)?f.value(g,b,d,i):(0,c.TC)(b,d,i)){var S=v.value;if(y[b]=S,a&&a(m,b,v),l&&"object"==typeof S&&!(0,u.cy)(S)){var E=m;E&&(E=E.slice()).push(b),n(d,S,g+"."+b,o,E,a,l)}}}})}t.createPayload=function(t,e,n,i,r,o){return{apiKeys:[],payloadBlob:v,overflow:null,sizeExceed:[],failedEvts:[],batches:[],numEvents:0,retryCnt:t,isTeardown:e,isSync:n,isBeacon:i,sendType:o,sendReason:r}},t.appendPayload=function(n,i,r){var s=n&&i&&!n.overflow;return s&&(0,o.r2)(e,function(){return"Serializer:appendPayload"},function(){for(var e=i.events(),o=n.payloadBlob,s=n.numEvents,a=!1,c=[],l=[],h=n.isBeacon,d=h?65e3:3984588,f=h?q:W,p=0,v=0;p<e.length;){var g=e[p];if(g){if(s>=r){n.overflow=i.split(p);break}var b=t.getEventBlob(g);if(b&&b.length<=f){var m=b.length;if(o.length+m>d){n.overflow=i.split(p);break}o&&(o+="\n"),o+=b,++v>20&&(o.substr(0,1),v=0),a=!0,s++}else b?c.push(g):l.push(g),e.splice(p,1),p--}p++}if(c&&c.length>0&&n.sizeExceed.push(P.create(i.iKey(),c)),l&&l.length>0&&n.failedEvts.push(P.create(i.iKey(),l)),a){n.batches.push(i),n.payloadBlob=o,n.numEvents=s;var y=i.iKey();-1===(0,u.rD)(n.apiKeys,y)&&n.apiKeys.push(y)}},function(){return{payload:n,theBatch:{iKey:i.iKey(),evts:i.events()},max:r}}),s},t.getEventBlob=function(t){try{return(0,o.r2)(e,function(){return"Serializer.getEventBlob"},function(){var e={};e.name=t.name,e.time=t.time,e.ver=t.ver,e.iKey="o:"+(0,c.EO)(t.iKey);var i={},r=t.ext;r&&(e.ext=i,(0,u.z)(r,function(t,e){n(e,i[t]={},"ext."+t,!0,null,null,!0)}));var o=e[a]={};o.baseType=t.baseType;var s=o[l]={};return n(t.baseData,s,l,!1,[l],function(t,e,n){Z(i,t,e,n)},d),n(t.data,o,a,!1,[],function(t,e,n){Z(i,t,e,n)},d),JSON.stringify(e)},function(){return{item:t}})}catch(t){return null}}})}return t.__ieDyn=1,t}();function Z(t,e,n,i){if(i&&t){var r=(0,c.Go)(i.value,i.kind,i.propertyType);if(r>-1){var o=t[G];o||(o=t[G]={f:{}});var s=o[K];if(s||(s=o[K]={}),e)for(var a=0;a<e.length;a++){var l=e[a];s[l]||(s[l]={f:{}});var h=s[l][K];h||(h=s[l][K]={}),s=h}s=s[n]={},(0,u.cy)(i.value)?s.a={t:r}:s.t=r}}}var Q="sendAttempt",Y="&NoResponseBody=true",tt=((U={})[1]=y,U[100]=y,U[200]="sent",U[8004]=b,U[8003]=b,U),et={},nt={};function it(t,e,n){et[t]=e,!1!==n&&(nt[e]=t)}function rt(t){try{return t.responseText}catch(t){}return v}function ot(t,e){var n=!1;if(t&&e){var i=(0,u.cG)(t);if(i&&i.length>0)for(var r=e.toLowerCase(),o=0;o<i.length;o++){var s=i[o];if(s&&(0,u.mQ)(e,s)&&s.toLowerCase()===r){n=!0;break}}}return n}function st(t,e,n,i){e&&n&&n.length>0&&(i&&et[e]?(t.hdrs[et[e]]=n,t.useHdrs=!0):t.url+="&"+e+"="+n)}function at(t,e){return e&&((0,u.Et)(e)?t=[e].concat(t):(0,u.cy)(e)&&(t=e.concat(t))),t}it(T,T,!1),it(M,M),it(F,"Client-Id"),it(A,A),it(D,D),it(O,O),it(I,I);var ct=function(){function t(e,n,i,s,a){this._responseHandlers=[];var h,f,p,y,T,I,N,R,L,j,P="?cors=true&"+k.toLowerCase()+"="+$,U=new H,W=!1,q=new z,G=!1,K=0,X=!0,Z=[],et={},it=[],ct=null,ut=!1,lt=!1,ht=!1;(0,r.A)(t,this,function(t){var r=!0;function z(t,e){for(var n=0,i=null,r=0;null==i&&r<t.length;)1===(n=t[r])?(0,l.PV)()?i=H:(0,l.xk)()&&(i=ft):2===n&&(0,l.R7)(e)&&(!e||e&&!R)?i=dt:G&&3===n&&(0,l.Uf)()&&(i=vt),r++;return i?{_transport:n,_isSync:e,sendPOST:i}:null}function H(t,e,n){var i=new XDomainRequest;i.open(g,t.urlString),t.timeout&&(i.timeout=t.timeout),i.onload=function(){var t=rt(i);pt(e,200,{},t),Mt(t)},i.onerror=function(){pt(e,400,{})},i.ontimeout=function(){pt(e,500,{})},i.onprogress=function(){},n?i.send(t.data):a.set(function(){i.send(t.data)},0)}function dt(t,e,n){var i,o=t.urlString,s=!1,c=!1,l=((i={body:t.data,method:g}).Microsoft_ApplicationInsights_BypassAjaxInstrumentation=!0,i);n&&(l.keepalive=!0,2===t._sendReason&&(s=!0,j&&(o+=Y))),r&&(l.credentials="include"),t.headers&&(0,u.cG)(t.headers).length>0&&(l.headers=t.headers),fetch(o,l).then(function(t){var n={},i=v,r=t.headers;r&&r.forEach(function(t,e){n[e]=t}),t.body&&t.text().then(function(t){i=t}),c||(c=!0,pt(e,t.status,n,i),Mt(i))}).catch(function(t){c||(c=!0,pt(e,0,{}))}),s&&!c&&(c=!0,pt(e,200,{})),!c&&t.timeout>0&&a.set(function(){c||(c=!0,pt(e,500,{}))},t.timeout)}function ft(t,e,n){var i=t.urlString;function o(t,e,n){if(!t[n]&&e&&e.getResponseHeader){var i=e.getResponseHeader(n);i&&(t[n]=(0,u.EH)(i))}return t}function s(t){var e={};return t.getAllResponseHeaders?e=function(t){var e={};if((0,u.Kg)(t)){var n=(0,u.EH)(t).split(/[\r\n]+/);(0,u.Iu)(n,function(t){if(t){var n=t.indexOf(": ");if(-1!==n){var i=(0,u.EH)(t.substring(0,n)).toLowerCase(),r=(0,u.EH)(t.substring(n+1));e[i]=r}else e[(0,u.EH)(t)]=1}})}return e}(t.getAllResponseHeaders()):(e=o(e,t,E),e=o(e,t,S),e=o(e,t,"kill-duration-seconds")),e}function a(t,n){pt(e,t.status,s(t),n)}n&&t.disableXhrSync&&(n=!1);var l=(0,c.H$)(g,i,r,!0,n,t.timeout);(0,u.z)(t.headers,function(t,e){l.setRequestHeader(t,e)}),l.onload=function(){var t=rt(l);a(l,t),Mt(t)},l.onerror=function(){a(l)},l.ontimeout=function(){a(l)},l.send(t.data)}function pt(t,e,n,i){try{t(e,n,i)}catch(t){(0,d.ZP)(f,2,518,(0,l.mm)(t))}}function vt(t,e,n){var i=200,r=t._thePayload,o=t.urlString+(j?Y:v);try{var s=(0,l.w3)();if(!s.sendBeacon(o,t.data))if(r){var a=[];(0,u.Iu)(r.batches,function(t){if(a&&t&&t.count()>0){for(var e=t.events(),n=0;n<e.length;n++)if(!s.sendBeacon(o,ct.getEventBlob(e[n]))){a.push(t.split(n));break}}else a.push(t.split(0))}),Ft(a,8003,r.sendType,!0)}else i=0}catch(t){(0,d.OG)(f,"Failed to send telemetry using sendBeacon API. Ex:"+(0,l.mm)(t)),i=0}finally{pt(e,i,{},v)}}function gt(t){return 2===t||3===t}function bt(t){return lt&&gt(t)&&(t=2),t}function mt(){return!W&&K<n}function yt(){var t=it;return it=[],t}function wt(t,e,n){var i=!1;return t&&t.length>0&&!W&&p[e]&&ct&&(i=0!==e||mt()&&(n>0||q.allowRequestSending())),i}function $t(t){var e={};return t&&(0,u.Iu)(t,function(t,n){e[n]={iKey:t.iKey(),evts:t.events()}}),e}function xt(t,n,i,r,s){if(t&&0!==t.length)if(W)Ft(t,1,r);else{r=bt(r);try{var a=t,u=0!==r;(0,o.r2)(y,function(){return"HttpManager:_sendBatches"},function(o){o&&(t=t.slice(0));for(var a=[],l=null,h=(0,c.WB)(),d=p[r]||(u?p[1]:p[0]),f=d&&d._transport,v=L&&(lt||gt(r)||3===f||d._isSync&&2===f);wt(t,r,n);){var g=t.shift();g&&g.count()>0&&(U.isTenantKilled(g.iKey())?a.push(g):(l=l||ct.createPayload(n,i,u,v,s,r),ct.appendPayload(l,g,e)?null!==l.overflow&&(t=[l.overflow].concat(t),l.overflow=null,St(l,h,(0,c.WB)(),s),h=(0,c.WB)(),l=null):(St(l,h,(0,c.WB)(),s),h=(0,c.WB)(),t=[g].concat(t),l=null)))}l&&St(l,h,(0,c.WB)(),s),t.length>0&&(it=t.concat(it)),Ft(a,8004,r)},function(){return{batches:$t(a),retryCount:n,isTeardown:i,isSynchronous:u,sendReason:s,useSendBeacon:gt(r),sendType:r}},!u)}catch(t){(0,d.ZP)(f,2,48,"Unexpected Exception sending batch: "+(0,l.mm)(t))}}}function kt(t,e){var n={url:P,hdrs:{},useHdrs:!1};e?(n.hdrs=(0,c.X$)(n.hdrs,et),n.useHdrs=(0,u.cG)(n.hdrs).length>0):(0,u.z)(et,function(t,e){nt[t]?st(n,nt[t],e,!1):(n.hdrs[t]=e,n.useHdrs=!0)}),st(n,F,"NO_AUTH",e),st(n,M,c.xE,e);var i=v;(0,u.Iu)(t.apiKeys,function(t){i.length>0&&(i+=","),i+=t}),st(n,A,i,e),st(n,O,(0,u.x3)().toString(),e);var r=function(t){for(var e=0;e<t.batches.length;e++){var n=t.batches[e].Msfpc();if(n)return encodeURIComponent(n)}return v}(t);if((0,c.yD)(r)&&(n.url+="&ext.intweb.msfpc="+r),q.shouldAddClockSkewHeaders()&&st(n,D,q.getClockSkewHeaderValue(),e),y.getWParam){var o=y.getWParam();o>=0&&(n.url+="&w="+o)}for(var s=0;s<Z.length;s++)n.url+="&"+Z[s].name+"="+Z[s].value;return n}function Ct(t,e,n){t[e]=t[e]||{},t[e][h.identifier]=n}function St(e,n,r,s){if(e&&e.payloadBlob&&e.payloadBlob.length>0){var a=!!t.sendHook,v=p[e.sendType];!gt(e.sendType)&&e.isBeacon&&2===e.sendReason&&(v=p[2]||p[3]||v);var g=ht;(e.isBeacon||3===v._transport)&&(g=!1);var b=kt(e,g);g=g||b.useHdrs;var m=(0,c.WB)();(0,o.r2)(y,function(){return"HttpManager:_doPayloadSend"},function(){for(var p=0;p<e.batches.length;p++)for(var w=e.batches[p].events(),M=0;M<w.length;M++){var F=w[M];if(ut){var D=F.timings=F.timings||{};Ct(D,"sendEventStart",m),Ct(D,"serializationStart",n),Ct(D,"serializationCompleted",r)}F[Q]>0?F[Q]++:F[Q]=1}Ft(e.batches,1e3+(s||0),e.sendType,!0);var O={data:e.payloadBlob,urlString:b.url,headers:b.hdrs,_thePayload:e,_sendReason:s,timeout:I,disableXhrSync:N,disableFetchKeepAlive:R};g&&(ot(O.headers,x)||(O.headers[x]="no-cache, no-store"),ot(O.headers,k)||(O.headers[k]=$));var A=null;v&&(A=function(n){q.firstRequestSent();var r=function(n,r){!function(e,n,r,o){var s=9e3,a=null,l=!1,d=!1;try{var f=!0;if(typeof e!==_.bA){if(n){q.setClockSkew(n[E]);var p=n[S]||n["kill-duration-seconds"];(0,u.Iu)(U.setKillSwitchTenants(n[C],p),function(t){(0,u.Iu)(r.batches,function(e){if(e.iKey()===t){a=a||[];var n=e.split(0);r.numEvents-=n.count(),a.push(n)}})})}if(200==e||204==e)return void(s=200);((g=e)>=300&&g<500&&408!=g&&429!=g||501==g||505==g||r.numEvents<=0)&&(f=!1),s=9e3+e%1e3}if(f){s=100;var v=r.retryCnt;0===r.sendType&&(v<i?(l=!0,Et(function(){0===r.sendType&&K--,xt(r.batches,v+1,r.isTeardown,lt?2:r.sendType,5)},lt,V(v))):(d=!0,lt&&(s=8001)))}}finally{l||(q.setClockSkew(),function(e,n,i,r){try{r&&h._backOffTransmission(),200===n&&(r||e.isSync||h._clearBackOff(),function(t){if(ut){var e=(0,c.WB)();(0,u.Iu)(t,function(t){t&&t.count()>0&&function(t,e){ut&&(0,u.Iu)(t,function(t){Ct(t.timings=t.timings||{},"sendEventCompleted",e)})}(t.events(),e)})}}(e.batches)),Ft(e.batches,n,e.sendType,!0)}finally{0===e.sendType&&(K--,5!==i&&t.sendQueuedRequests(e.sendType,i))}}(r,s,o,d)),Ft(a,8004,r.sendType)}var g}(n,r,e,s)},o=e.isTeardown||e.isSync;try{v.sendPOST(n,r,o),t.sendListener&&t.sendListener(O,n,o,e.isBeacon)}catch(t){(0,d.OG)(f,"Unexpected exception sending payload. Ex:"+(0,l.mm)(t)),pt(r,0,{})}}),(0,o.r2)(y,function(){return"HttpManager:_doPayloadSend.sender"},function(){if(A)if(0===e.sendType&&K++,a&&!e.isBeacon&&3!==v._transport){var n={data:O.data,urlString:O.urlString,headers:(0,c.X$)({},O.headers),timeout:O.timeout,disableXhrSync:O.disableXhrSync,disableFetchKeepAlive:O.disableFetchKeepAlive},i=!1;(0,o.r2)(y,function(){return"HttpManager:_doPayloadSend.sendHook"},function(){try{t.sendHook(n,function(t){i=!0,X||t._thePayload||(t._thePayload=t._thePayload||O._thePayload,t._sendReason=t._sendReason||O._sendReason),A(t)},e.isSync||e.isTeardown)}catch(t){i||A(O)}})}else A(O)})},function(){return{thePayload:e,serializationStart:n,serializationCompleted:r,sendReason:s}},e.isSync)}e.sizeExceed&&e.sizeExceed.length>0&&Ft(e.sizeExceed,8003,e.sendType),e.failedEvts&&e.failedEvts.length>0&&Ft(e.failedEvts,8002,e.sendType)}function Et(t,e,n){e?t():a.set(t,n)}function Mt(e){var n=t._responseHandlers;try{for(var i=0;i<n.length;i++)try{n[i](e)}catch(t){(0,d.ZP)(f,1,519,"Response handler failed: "+t)}if(e){var r=JSON.parse(e);(0,c.yD)(r.webResult)&&(0,c.yD)(r.webResult[B])&&T.set("MSFPC",r.webResult[B],31536e3)}}catch(t){}}function Ft(t,e,n,i){if(t&&t.length>0&&s){var r=s[function(t){var e=tt[t];(0,c.yD)(e)||(e="oth",t>=9e3&&t<=9999?e=w:t>=8e3&&t<=8999?e=b:t>=1e3&&t<=1999&&(e=m));return e}(e)];if(r){var a=0!==n;(0,o.r2)(y,function(){return"HttpManager:_sendBatchesNotification"},function(){Et(function(){try{r.call(s,t,e,a,n)}catch(t){(0,d.ZP)(f,1,74,"send request notification failed: "+t)}},i||a,0)},function(){return{batches:$t(t),reason:e,isSync:a,sendSync:i,sendType:n}},!a)}}}t.initialize=function(t,e,n,i,o){var s;o||(o={}),P=t+P,ht=!!(0,u.b0)(o.avoidOptions)||!o.avoidOptions,y=e,T=e.getCookieMgr(),ut=!y.config.disableEventTimings;var a=!!y.config.enableCompoundKey;f=(h=n).diagLog();var c=o.valueSanitizer,v=o.stringifyObjects;(0,u.b0)(o.enableCompoundKey)||(a=!!o.enableCompoundKey),I=o.xhrTimeout,N=!!o.disableXhrSync,R=!!o.disableFetchKeepAlive,j=!1!==o.addNoResponse,G=!(0,l.lV)(),ct=new J(y,c,v,a),(0,u.hX)(o.useSendBeacon)||(G=!!o.useSendBeacon);var g=i,b=o.alwaysUseXhrOverride?i:null,m=o.alwaysUseXhrOverride?i:null,w=[3,2];if(!i){X=!1;var $=(0,l.g$)();$&&$.protocol&&"file:"===$.protocol.toLowerCase()&&(r=!1);var x=[];(0,l.lV)()?(x=[2,1],w=[2,1,3]):x=[1,2,3],(i=z(x=at(x,o.transports),!1))||(0,d.OG)(f,"No available transport to send events"),g=z(x,!0)}b||(b=z(w=at(w,o.unloadTransports),!0)),L=!X&&(G&&(0,l.Uf)()||!R&&(0,l.R7)(!0)),(s={})[0]=i,s[1]=g||z([1,2,3],!0),s[2]=b||g||z([1],!0),s[3]=m||z([2,3],!0)||g||z([1],!0),p=s},t._getDbgPlgTargets=function(){return[p[0],U,ct,p]},t.addQueryStringParameter=function(t,e){for(var n=0;n<Z.length;n++)if(Z[n].name===t)return void(Z[n].value=e);Z.push({name:t,value:e})},t.addHeader=function(t,e){et[t]=e},t.canSendRequest=function(){return mt()&&q.allowRequestSending()},t.sendQueuedRequests=function(t,e){(0,u.b0)(t)&&(t=0),lt&&(t=bt(t),e=2),wt(it,t,0)&&xt(yt(),0,!1,t,e||0)},t.isCompletelyIdle=function(){return!W&&0===K&&0===it.length},t.setUnloading=function(t){lt=t},t.addBatch=function(t){if(t&&t.count()>0){if(U.isTenantKilled(t.iKey()))return!1;it.push(t)}return!0},t.teardown=function(){it.length>0&&xt(yt(),0,!0,2,2)},t.pause=function(){W=!0},t.resume=function(){W=!1,t.sendQueuedRequests(0,4)},t.sendSynchronousBatch=function(t,e,n){t&&t.count()>0&&((0,u.hX)(e)&&(e=1),lt&&(e=bt(e),n=2),xt([t],0,!1,e,n||0))}})}return t.__ieDyn=1,t}();function ut(t,e){for(var n=[],i=2;i<arguments.length;i++)n[i-2]=arguments[i];return setTimeout(t,e,n)}function lt(t){clearTimeout(t)}function ht(t,e){return{set:t||ut,clear:e||lt}}var dt="eventsDiscarded",ft="overrideInstrumentationKey",pt="maxEventRetryAttempts",vt="maxUnloadEventRetryAttempts",gt=function(t){function e(){var n,i=t.call(this)||this;i.identifier="PostChannel",i.priority=1011,i.version="3.2.8";var f,v,g,b,m,y,w,$=!1,x=[],k=null,C=!1,S=0,E=500,M=0,F=1e4,D={},O=p,A=null,I=null,B=0,L=0,j={},z=-1,H=!0,_=!1,U=6,W=2;return(0,r.A)(e,i,function(t,e){function i(t){"beforeunload"!==(t||(0,l.zk)().event).type&&(_=!0,v.setUnloading(_)),Y(2,2)}function r(t){_=!1,v.setUnloading(_)}function q(t,e){if(t.sendAttempt||(t.sendAttempt=0),t.latency||(t.latency=1),t.ext&&t.ext[N]&&delete t.ext[N],t.ext&&t.ext[R]&&t.ext[R].id&&delete t.ext[R].id,H&&(c.u9,t.ext=(0,u.hW)(t.ext),t.baseData&&(t.baseData=(0,u.hW)(t.baseData)),t.data&&(t.data=(0,u.hW)(t.data))),t.sync)if(B||C)t.latency=3,t.sync=!1;else if(v)return H&&(t=(0,u.hW)(t)),void v.sendSynchronousBatch(P.create(t.iKey,[t]),!0===t.sync?1:t.sync,3);var n=t.latency,i=M,r=F;4===n&&(i=S,r=E);var o=!1;if(i<r)o=!nt(t,e);else{var s=1,a=20;4===n&&(s=4,a=1),o=!0,function(t,e,n,i){for(;n<=e;){var r=tt(t,e,!0);if(r&&r.count()>0){var o=r.split(0,i),s=o.count();if(s>0)return 4===n?S-=s:M-=s,bt(dt,[o],h.QueueFull),!0}n++}return it(),!1}(t.iKey,t.latency,s,a)&&(o=!nt(t,e))}o&&gt(dt,[t],h.QueueFull)}function G(t,e,n){var i=rt(t,e,n);return v.sendQueuedRequests(e,n),i}function K(){return M>0}function X(){if(z>=0&&rt(z,0,m)&&v.sendQueuedRequests(0,m),S>0&&!I&&!C){var t=D[O][2];t>=0&&(I=Z(function(){I=null,G(4,0,1),X()},t))}var e=D[O][1];!A&&!k&&e>=0&&!C&&(K()?A=Z(function(){A=null,G(0===L?3:1,0,1),L++,L%=2,X()},e):L=0)}function J(){n=null,$=!1,x=[],k=null,C=!1,S=0,E=500,M=0,F=1e4,D={},O=p,A=null,I=null,B=0,L=0,f=null,j={},g=void 0,b=0,z=-1,m=null,H=!0,_=!1,U=6,W=2,y=null,w=ht(),v=new ct(500,2,1,{requeue:ut,send:mt,sent:yt,drop:wt,rspFail:$t,oth:xt},w),at(),j[4]={batches:[],iKeyMap:{}},j[3]={batches:[],iKeyMap:{}},j[2]={batches:[],iKeyMap:{}},j[1]={batches:[],iKeyMap:{}},kt()}function Z(t,e){0===e&&B&&(e=1);var n=1e3;return B&&(n=V(B-1)),w.set(t,e*n)}function Q(){return null!==A&&(w.clear(A),A=null,L=0,!0)}function Y(t,e){Q(),k&&(w.clear(k),k=null),C||G(1,t,e)}function tt(t,e,n){var i=j[e];i||(i=j[e=1]);var r=i.iKeyMap[t];return!r&&n&&(r=P.create(t),i.batches.push(r),i.iKeyMap[t]=r),r}function et(e,n){v.canSendRequest()&&!B&&(g>0&&M>g&&(n=!0),n&&null==k&&t.flush(e,null,20))}function nt(t,e){H&&(t=(0,u.hW)(t));var n=t.latency,i=tt(t.iKey,n,!0);return!!i.addEvent(t)&&(4!==n?(M++,e&&0===t.sendAttempt&&et(!t.sync,b>0&&i.count()>=b)):S++,!0)}function it(){for(var t=0,e=0,n=function(n){var i=j[n];i&&i.batches&&(0,u.Iu)(i.batches,function(i){4===n?t+=i.count():e+=i.count()})},i=1;i<=4;i++)n(i);M=e,S=t}function rt(e,n,i){var r=!1,s=0===n;return!s||v.canSendRequest()?(0,o.r2)(t.core,function(){return"PostChannel._queueBatches"},function(){for(var t=[],n=4;n>=e;){var i=j[n];i&&i.batches&&i.batches.length>0&&((0,u.Iu)(i.batches,function(e){v.addBatch(e)?r=r||e&&e.count()>0:t=t.concat(e.events()),4===n?S-=e.count():M-=e.count()}),i.batches=[],i.iKeyMap={}),n--}t.length>0&&gt(dt,t,h.KillSwitch),r&&z>=e&&(z=-1,m=0)},function(){return{latency:e,sendType:n,sendReason:i}},!s):(z=z>=0?Math.min(z,e):e,m=Math.max(m,i)),r}function ot(t,e){G(1,0,e),it(),st(function(){t&&t(),x.length>0?k=Z(function(){k=null,ot(x.shift(),e)},0):(k=null,X())})}function st(t){v.isCompletelyIdle()?t():k=Z(function(){k=null,st(t)},.25)}function at(){(D={})[p]=[2,1,0],D.NEAR_REAL_TIME=[6,3,0],D.BEST_EFFORT=[18,9,0]}function ut(e,n){var i=[],r=U;_&&(r=W),(0,u.Iu)(e,function(e){e&&e.count()>0&&(0,u.Iu)(e.events(),function(e){e&&(e.sync&&(e.latency=4,e.sync=!1),e.sendAttempt<r?((0,c.u9)(e,t.identifier),q(e,!1)):i.push(e))})}),i.length>0&&gt(dt,i,h.NonRetryableStatus),_&&Y(2,2)}function lt(e,n){var i=t._notificationManager||{},r=i[e];if(r)try{r.apply(i,n)}catch(n){(0,d.ZP)(t.diagLog(),1,74,e+" notification failed: "+n)}}function gt(t,e){for(var n=[],i=2;i<arguments.length;i++)n[i-2]=arguments[i];e&&e.length>0&&lt(t,[e].concat(n))}function bt(t,e){for(var n=[],i=2;i<arguments.length;i++)n[i-2]=arguments[i];e&&e.length>0&&(0,u.Iu)(e,function(e){e&&e.count()>0&&lt(t,[e.events()].concat(n))})}function mt(t,e,n){t&&t.length>0&&lt("eventsSendRequest",[e>=1e3&&e<=1999?e-1e3:0,!0!==n])}function yt(t,e){bt("eventsSent",t,e),X()}function wt(t,e){bt(dt,t,e>=8e3&&e<=8999?e-8e3:h.Unknown)}function $t(t){bt(dt,t,h.NonRetryableStatus),X()}function xt(t,e){bt(dt,t,h.Unknown),X()}function kt(){b=n&&n.disableAutoBatchFlushLimit?0:Math.max(1500,F/6)}J(),t._getDbgPlgTargets=function(){return[v]},t.initialize=function(l,h,d){(0,o.r2)(h,function(){return"PostChannel:initialize"},function(){var o=h;e.initialize(l,h,d);try{h.addUnloadCb;y=(0,s.Hm)((0,a.Z)(t.identifier),h.evtNamespace&&h.evtNamespace());var p=t._getTelCtx();l.extensionConfig[t.identifier]=l.extensionConfig[t.identifier]||{},n=p.getExtCfg(t.identifier),w=ht(n.setTimeoutOverride,n.clearTimeoutOverride),H=!n.disableOptimizeObj&&(0,c.F2)(),function(t){var e=t.getWParam;t.getWParam=function(){var t=0;return n.ignoreMc1Ms0CookieProcessing&&(t|=2),t|e()}}(o),n.eventsLimitInMem>0&&(F=n.eventsLimitInMem),n.immediateEventLimit>0&&(E=n.immediateEventLimit),n.autoFlushEventsLimit>0&&(g=n.autoFlushEventsLimit),(0,u.Et)(n[pt])&&(U=n[pt]),(0,u.Et)(n[vt])&&(W=n[vt]),kt(),n.httpXHROverride&&n.httpXHROverride.sendPOST&&(f=n.httpXHROverride),(0,c.yD)(l.anonCookieName)&&v.addQueryStringParameter("anoncknm",l.anonCookieName),v.sendHook=n.payloadPreprocessor,v.sendListener=n.payloadListener;var b=n.overrideEndpointUrl?n.overrideEndpointUrl:l.endpointUrl;t._notificationManager=h.getNotifyMgr(),v.initialize(b,t.core,t,f,n);var m=l.disablePageUnloadEvents||[];(0,s.ee)(i,m,y),(0,s.Fc)(i,m,y),(0,s.oS)(r,l.disablePageShowEvents,y)}catch(e){throw t.setInitialized(!1),e}},function(){return{coreConfig:l,core:h,extensions:d}})},t.processTelemetry=function(e,i){(0,c.u9)(e,t.identifier);var r=(i=t._getTelCtx(i)).getExtCfg(t.identifier),o=!!n.disableTelemetry;r&&(o=o||!!r.disableTelemetry);var s=e;o||$||(n[ft]&&(s.iKey=n[ft]),r&&r[ft]&&(s.iKey=r[ft]),q(s,!0),_?Y(2,2):X()),t.processNext(s,i)},t._doTeardown=function(t,e){Y(2,2),$=!0,v.teardown(),(0,s.Ds)(null,y),(0,s.sq)(null,y),(0,s.vF)(null,y),J()},t.setEventQueueLimits=function(t,e){F=t>0?t:1e4,g=e>0?e:0,kt();var n=M>t;if(!n&&b>0)for(var i=1;!n&&i<=3;i++){var r=j[i];r&&r.batches&&(0,u.Iu)(r.batches,function(t){t&&t.count()>=b&&(n=!0)})}et(!0,n)},t.pause=function(){Q(),C=!0,v.pause()},t.resume=function(){C=!1,v.resume(),X()},t.addResponseHandler=function(t){v._responseHandlers.push(t)},t._loadTransmitProfiles=function(t){Q(),at(),O=p,X(),(0,u.z)(t,function(t,e){var n=e.length;if(n>=2){var i=n>2?e[2]:0;if(e.splice(0,n-2),e[1]<0&&(e[0]=-1),e[1]>0&&e[0]>0){var r=e[0]/e[1];e[0]=Math.ceil(r)*e[1]}i>=0&&e[1]>=0&&i>e[1]&&(i=e[1]),e.push(i),D[t]=e}})},t.flush=function(t,e,n){if(void 0===t&&(t=!0),!C)if(n=n||1,t)null==k?(Q(),rt(1,0,n),k=Z(function(){k=null,ot(e,n)},0)):x.push(e);else{var i=Q();G(1,1,n),null!=e&&e(),i&&X()}},t.setMsaAuthTicket=function(t){v.addHeader(T,t)},t.hasEvents=K,t._setTransmitProfile=function(t){O!==t&&void 0!==D[t]&&(Q(),O=t,X())},t._backOffTransmission=function(){B<4&&(B++,Q(),X())},t._clearBackOff=function(){B&&(B=0,Q(),X())},(0,u.r)(t,"_setTimeoutOverride",function(){return w.set},function(t){w=ht(t,w.clear)}),(0,u.r)(t,"_clearTimeoutOverride",function(){return w.clear},function(t){w=ht(w.set,t)})}),i}return(0,i.qU)(e,t),e.__ieDyn=1,e}(f.s),bt=gt},42258:function(t,e,n){"use strict";n.d(e,{IN:function(){return c}});var i=n(42277),r=n(68244),o=n(41097);const s=r.F.create({trustedType:{createHTML:t=>t.indexOf("<img")>-1&&-1==t.indexOf(":src")&&(t.indexOf('src="fast-')>-1||t.indexOf("src=fast-")>-1)?t.replaceAll("src=",":src="):t}}),a=r.F.create({trustedType:{createHTML:t=>(0,o.v)(t,"base-html-policy")}});function c(){const t=navigator.userAgent.toLowerCase();t.indexOf("chrome")>-1||t.indexOf("edg")>-1?i.d.setPolicy(a):i.d.setPolicy(s)}},42277:function(t,e,n){"use strict";n.d(e,{D:function(){return r},d:function(){return u}});var i=n(19470);const r=Object.freeze({none:0,attribute:1,booleanAttribute:2,property:3,content:4,tokenList:5,event:6}),o=t=>t,s=globalThis.trustedTypes?globalThis.trustedTypes.createPolicy("fast-html",{createHTML:o}):{createHTML:o};let a=Object.freeze({createHTML:t=>s.createHTML(t),protect:(t,e,n,i)=>i});const c=a,u=Object.freeze({get policy(){return a},setPolicy(t){if(a!==c)throw i.Zx.error(1201);a=t},setAttribute(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)},setBooleanAttribute(t,e,n){n?t.setAttribute(e,""):t.removeAttribute(e)}})},42938:function(t,e,n){"use strict";n.d(e,{u:function(){return r}});var i=n(31157);const r=t=>"rtl"===t.closest("[dir]")?.dir?i.O.rtl:i.O.ltr},43103:function(t,e,n){"use strict";n.d(e,{N:function(){return l},e:function(){return u}});var i=n(97004),r=n(95239),o=n(14848),s=n(22870),a=n(23429);const c=(0,n(18284).A)(t=>{let e=(0,s.Hs)(t);if(null!==e)return e;if(e=(0,s.QI)(t),null!==e)return e;throw new Error(`${t} cannot be converted to a ColorRGBA64. Color strings must be one of the following formats: "#RGB", "#RRGGBB", or "rgb(r, g, b)"`)});function u(t){return(0,o.Z8)(c(t))}class l{constructor(t,e){this.cache=new WeakMap,this.light=t,this.dark=e}connectedCallback(t){const e=t.source,n=this.cache.get(e);n?a.L.enqueue(()=>this.attach(e,n)):this.attach(e,new h(this.light,this.dark,e))}disconnectedCallback(t){const e=this.cache.get(t.source);e&&r.p.unsubscribe(e)}attach(t,e){const n=r.p.getValueFor(t);r.p.subscribe(e),e.attach(n),this.cache.set(t,e)}}class h{constructor(t,e,n){this.light=t,this.dark=e,this.source=n,this.attached=null}handleChange(t,e){try{this.attach("default"===e.target?t.default:t.getValueFor(this.source))}catch{}}attach(t){if(window.matchMedia("(forced-colors: active)").matches)return;const e=u(t.toColorString())<=i.y.DarkMode?"dark":"light";window.__theme=e,this.attached!==this[e]&&(null!==this.attached&&this.source.$fastController.removeStyles(this.attached),this.attached=this[e],null!==this.attached&&this.source.$fastController.addStyles(this.attached))}}},43404:function(t,e,n){"use strict";n.d(e,{C2:function(){return a},Q2:function(){return c},iS:function(){return s},uC:function(){return o}});var i=n(68136);const{create:r}=i.G,o=r("neutral-stroke-rest-delta",25),s=r("neutral-stroke-hover-delta",40),a=r("neutral-stroke-active-delta",16),c=r("neutral-stroke-focus-delta",25)},43919:function(t,e,n){"use strict";n.d(e,{j:function(){return i}});const i={menuitem:"menuitem",menuitemcheckbox:"menuitemcheckbox",menuitemradio:"menuitemradio"};i.menuitem,i.menuitemcheckbox,i.menuitemradio},44767:function(t,e,n){"use strict";n.d(e,{m:function(){return F}});var i=n(37180),r=n(56911),o=n(92011),s=n(23429),a=n(60815),c=n(2298),u=n(55230),l=n(43919),h=n(65923);class d extends o.L{constructor(){super(...arguments),this.expandedItem=null,this.focusIndex=-1,this.isNestedMenu=()=>null!==this.parentElement&&(0,c.sb)(this.parentElement)&&"menuitem"===this.parentElement.getAttribute("role"),this.handleFocusOut=t=>{if(!this.contains(t.relatedTarget)&&void 0!==this.menuItems){this.collapseExpandedItem();const t=this.menuItems.findIndex(this.isFocusableElement);this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.menuItems[t].setAttribute("tabindex","0"),this.focusIndex=t}},this.handleItemFocus=t=>{const e=t.target;void 0!==this.menuItems&&e!==this.menuItems[this.focusIndex]&&(this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.focusIndex=this.menuItems.indexOf(e),e.setAttribute("tabindex","0"))},this.handleExpandedChanged=t=>{if(t.defaultPrevented||null===t.target||void 0===this.menuItems||this.menuItems.indexOf(t.target)<0)return;t.preventDefault();const e=t.target;null===this.expandedItem||e!==this.expandedItem||!1!==e.expanded?e.expanded&&(null!==this.expandedItem&&this.expandedItem!==e&&(this.expandedItem.expanded=!1),this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.expandedItem=e,this.focusIndex=this.menuItems.indexOf(e),e.setAttribute("tabindex","0")):this.expandedItem=null},this.changeHandler=t=>{if(void 0===this.menuItems)return;const e=t.target,n=this.menuItems.indexOf(e);if(-1!==n&&"menuitemradio"===e.role&&!0===e.checked){for(let t=n-1;t>=0;--t){const e=this.menuItems[t],n=e.getAttribute("role");if(n===l.j.menuitemradio&&(e.checked=!1),"separator"===n)break}const t=this.menuItems.length-1;for(let e=n+1;e<=t;++e){const t=this.menuItems[e],n=t.getAttribute("role");if(n===l.j.menuitemradio&&(t.checked=!1),"separator"===n)break}}},this.isMenuItemElement=t=>t instanceof h.th||(0,c.sb)(t)&&t.getAttribute("role")in d.focusableElementRoles,this.isFocusableElement=t=>this.isMenuItemElement(t)}itemsChanged(t,e){this.$fastController.isConnected&&void 0!==this.menuItems&&this.setItems()}connectedCallback(){super.connectedCallback(),s.L.enqueue(()=>{this.setItems()}),this.addEventListener("change",this.changeHandler)}disconnectedCallback(){super.disconnectedCallback(),this.removeItemListeners(),this.menuItems=void 0,this.removeEventListener("change",this.changeHandler)}focus(){this.setFocus(0,1)}collapseExpandedItem(){null!==this.expandedItem&&(this.expandedItem.expanded=!1,this.expandedItem=null)}handleMenuKeyDown(t){if(!t.defaultPrevented&&void 0!==this.menuItems)switch(t.key){case u.HX:return void this.setFocus(this.focusIndex+1,1);case u.I5:return void this.setFocus(this.focusIndex-1,-1);case u.FM:return void this.setFocus(this.menuItems.length-1,-1);case u.kE:return void this.setFocus(0,1);default:return!0}}removeItemListeners(t=this.items){t.forEach(t=>{t.removeEventListener("focus",this.handleItemFocus),t.removeEventListener("expanded-changed",this.handleExpandedChanged),a.cP.getNotifier(t).unsubscribe(this,"hidden")})}setItems(){const t=Array.from(this.children);this.removeItemListeners(t),t.forEach(t=>a.cP.getNotifier(t).subscribe(this,"hidden"));const e=t.filter(t=>!t.hasAttribute("hidden"));this.menuItems=e;const n=this.menuItems.filter(this.isMenuItemElement);n.length&&(this.focusIndex=0),n.forEach((t,e)=>{t.setAttribute("tabindex",0===e?"0":"-1"),t.addEventListener("expanded-change",this.handleExpandedChanged),t.addEventListener("focus",this.handleItemFocus)})}handleChange(t,e){"hidden"===e&&this.setItems()}setFocus(t,e){if(void 0!==this.menuItems)for(;t>=0&&t<this.menuItems.length;){const n=this.menuItems[t];if(this.isFocusableElement(n)){this.focusIndex>-1&&this.menuItems.length>=this.focusIndex-1&&this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.focusIndex=t,n.setAttribute("tabindex","0"),n.focus();break}t+=e}}}d.focusableElementRoles=l.j,(0,r.Cg)([a.sH,(0,r.Sn)("design:type",Array)],d.prototype,"items",void 0);var f=n(95239),p=n(22448),v=n(10735);class g extends d{setItems(){super.setItems();const t=this.menuItems?.filter(this.isMenuItemElement);t?.forEach((e,n)=>{const i=t?.reduce((t,e)=>{const n=g.elementIndent(e);return Math.max(t,n)},0);e instanceof p.z&&(e.startColumnCount=i)})}static elementIndent(t){const e=t.getAttribute("role"),n=t.querySelector("[slot=start]");return e&&e!==l.j.menuitem?n?2:1:n?1:0}connectedCallback(){super.connectedCallback(),f.p.setValueFor(this,v.T)}}var b=n(74849),m=n(64187),y=n(37998),w=n(26920),$=n(57416),x=n(74838),k=n(22683);const C=b.A`
    ${(0,m.V)("block")} :host {
        --elevation: 11;
        background: ${f.p};
        border: calc(${w.XA} * 1px) solid transparent;
        border-radius: ${$.JU};
        ${y.ET}
        margin: 0;
        border-radius: calc(${$.Pb} * 1px);
        padding: calc(${x.vR} * 1px) 0;
        max-width: 368px;
        min-width: 64px;
    }

    :host([slot="submenu"]) {
        width: max-content;
        margin: 0 calc(${x.vR} * 1px);
    }

    ::slotted(hr) {
        box-sizing: content-box;
        height: 0;
        margin: 0;
        border: none;
        border-top: calc(${w.XA} * 1px) solid ${k.hb};
    }
`;var S=n(96950),E=n(82774);const M=S.qy`
        <template
            slot="${t=>t.slot?t.slot:t.isNestedMenu()?"submenu":void 0}"
            role="menu"
            @keydown="${(t,e)=>t.handleMenuKeyDown(e.event)}"
            @focusout="${(t,e)=>t.handleFocusOut(e.event)}"
        >
            <slot ${(0,E.e)("items")}></slot>
        </template>
    `,F=g.compose({name:`${i.c.prefix}-menu`,template:M,styles:C})},44929:function(t){t.exports='<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a8 8 0 110 16 8 8 0 010-16zm0 1a7 7 0 100 14 7 7 0 000-14zm0 9.5a.75.75 0 110 1.5.75.75 0 010-1.5zM10 6a.5.5 0 01.5.41V11a.5.5 0 01-1 .09V6.5c0-.28.22-.5.5-.5z"></path></svg>'},45089:function(t){t.exports='<svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M5.7 3.28A1 1 0 004 4v4.02a1 1 0 001.7.7l2.04-2a1 1 0 000-1.42l-2.04-2z"></path></svg>'},45476:function(t,e,n){"use strict";n.d(e,{wO:function(){return d},oO:function(){return h},EE:function(){return u},Wl:function(){return l}});var i=n(68136);var r=n(95239),o=n(37947),s=n(14205),a=n(31023);const{create:c}=i.G,u=c({name:"neutral-fill-stealth-recipe"},{evaluate:(t,e)=>function(t,e,n,i,r,o,s,a,c,u){const l=Math.max(n,i,r,o,s,a,c,u),h=t.closestIndexOf(e),d=h>=l?-1:1;return{rest:t.get(h+d*n),hover:t.get(h+d*i),active:t.get(h+d*r),focus:t.get(h+d*o)}}(t(a.r),e||t(r.p),t(s.q),t(s.oj),t(s.Ws),t(s.Mc),t(o.DE),t(o.l2),t(o.L6),t(o.tN))}),l=c("neutral-fill-stealth-rest",t=>t(u).evaluate(t).rest),h=c("neutral-fill-stealth-hover",t=>t(u).evaluate(t).hover),d=c("neutral-fill-stealth-active",t=>t(u).evaluate(t).active);c("neutral-fill-stealth-focus",t=>t(u).evaluate(t).focus)},46203:function(t,e,n){"use strict";n.d(e,{RS:function(){return d},jM:function(){return h},le:function(){return l}});var i=n(68136),r=n(68009);var o=n(95239),s=n(17252),a=n(31023);const{create:c}=i.G,u=c({name:"neutral-fill-input-recipe"},{evaluate:(t,e)=>function(t,e,n,i,o,s){const a=(0,r.F)(e),c=t.closestIndexOf(e);return{rest:t.get(c-a*n),hover:t.get(c-a*i),active:t.get(c-a*o),focus:t.get(c-a*s)}}(t(a.r),e||t(o.p),t(s.DZ),t(s.nK),t(s.xK),t(s.dc))}),l=c("neutral-fill-input-rest",t=>t(u).evaluate(t).rest),h=c("neutral-fill-input-hover",t=>t(u).evaluate(t).hover),d=c("neutral-fill-input-active",t=>t(u).evaluate(t).active);c("neutral-fill-input-focus",t=>t(u).evaluate(t).focus)},46543:function(t,e,n){"use strict";n.d(e,{hX:function(){return a},wN:function(){return c}});var i=n(14777),r="00000000000000000000000000000000",o="0000000000000000";function s(t,e,n){return!(!t||t[i.oI]!==e||t===n)&&!!t.match(/^[\da-f]*$/)}function a(t){return s(t,32,r)}function c(t){return s(t,16,o)}},47429:function(t,e,n){"use strict";n.d(e,{Wu:function(){return a},Zo:function(){return s},ss:function(){return c},yF:function(){return u}});var i=n(42277),r=n(60815),o=n(35727);function s(t){const e=t.parentElement;if(e)return e;{const e=t.getRootNode();if(e.host instanceof HTMLElement)return e.host}return null}function a(t,e){let n=e;for(;null!==n;){if(n===t)return!0;n=s(n)}return!1}class c extends MutationObserver{constructor(t){super(function(t){this.callback.call(null,t.filter(t=>this.observedNodes.has(t.target)))}),this.callback=t,this.observedNodes=new Set}observe(t,e){this.observedNodes.add(t),super.observe(t,e)}unobserve(t){this.observedNodes.delete(t),this.observedNodes.size<1&&this.disconnect()}}const u=Object.freeze({create(t){const e=[],n={};let s=null,a=!1;return{source:t,context:r.ao.default,targets:n,get isBound(){return a},addBehaviorFactory(t,e){var n,r,s,a;const c=t;c.id=null!==(n=c.id)&&void 0!==n?n:(0,o.Hn)(),c.targetNodeId=null!==(r=c.targetNodeId)&&void 0!==r?r:(0,o.Hn)(),c.targetTagName=null!==(s=e.tagName)&&void 0!==s?s:null,c.policy=null!==(a=c.policy)&&void 0!==a?a:i.d.policy,this.addTarget(c.targetNodeId,e),this.addBehavior(c.createBehavior())},addTarget(t,e){n[t]=e},addBehavior(t){e.push(t),a&&t.bind(this)},onUnbind(t){null===s&&(s=[]),s.push(t)},connectedCallback(t){a||(a=!0,e.forEach(t=>t.bind(this)))},disconnectedCallback(t){a&&(a=!1,null!==s&&s.forEach(t=>t.unbind(this)))}}}})},47691:function(t,e,n){"use strict";n.d(e,{E:function(){return o}});var i=n(68136);const{create:r}=i.G,o=r("neutral-fill-layer-rest-delta",3)},48196:function(t,e,n){"use strict";n.d(e,{D:function(){return o}});var i=n(74849),r=n(74838);const o=i.A.partial`(${r.Ss} + ${r.Br}) * ${r.vR}`},48751:function(t,e,n){"use strict";n.d(e,{l:function(){return c}});var i=n(68136);var r=n(95239),o=n(31023);const{create:s}=i.G,a=s({name:"neutral-foreground-recipe"},{evaluate:t=>{return e=t(o.r),n=t(r.p),e.colorContrast(n,14);var e,n}}),c=s("neutral-foreground-rest",t=>t(a).evaluate(t))},49399:function(t,e,n){"use strict";n.d(e,{H:function(){return r}});const i=(-.1+Math.sqrt(.21))/2;function r(t){return t.relativeLuminance<=i}},50090:function(t,e,n){"use strict";n.d(e,{AQ:function(){return a},mS:function(){return o},zk:function(){return s}});var i=n(15454),r=null;function o(t){void 0===t&&(t=!0);var e=!1===t?null:r;return e||(typeof globalThis!==i.bA&&(e=globalThis),e||typeof self===i.bA||(e=self),e||typeof window===i.bA||(e=window),e||typeof n.g===i.bA||(e=n.g),r=e),e}function s(t){throw new TypeError(t)}function a(t){var e=i.OR;if(e)return e(t);if(null==t)return{};var n=typeof t;function r(){}return n!==i._1&&n!==i.hW&&s("Object prototype may only be an Object:"+t),r[i.vR]=t,new r}},50180:function(t,e,n){"use strict";n.d(e,{GP:function(){return o},NF:function(){return r},oT:function(){return s}});let i=0;function r(t=""){return`${t}${i++}`}function o(t,...e){return t.replace(/{(\d+)}/g,function(t,n){if(n>=e.length)return t;const i=e[n];return"number"==typeof i||i?i:""})}function s(t){return!t||!t.trim()}},50882:function(t,e,n){"use strict";var i;n.d(e,{A:function(){return i}}),function(t){t.Canvas="Canvas",t.CanvasText="CanvasText",t.LinkText="LinkText",t.VisitedText="VisitedText",t.ActiveText="ActiveText",t.ButtonFace="ButtonFace",t.ButtonText="ButtonText",t.Field="Field",t.FieldText="FieldText",t.Highlight="Highlight",t.HighlightText="HighlightText",t.GrayText="GrayText"}(i||(i={}))},52374:function(t){t.exports='<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M10.06 2.45a1.5 1.5 0 00-2.39.35L5.65 6.59l-2.8.94a.5.5 0 00-.2.82l2.14 2.15-2.64 2.65L2 14l.85-.15 2.65-2.64 2.15 2.14a.5.5 0 00.82-.2l.94-2.8 3.78-2.03a1.5 1.5 0 00.35-2.38l-3.48-3.5z"></path></svg>'},53894:function(t,e,n){"use strict";n.d(e,{$:function(){return u},M:function(){return l}});var i,r=n(14777),o=n(88383),s=["eventsSent","eventsDiscarded","eventsSendRequest","perfEvent"],a=null;function c(t,e){return function(){var n=arguments,i=u(e);if(i){var o=i.listener;o&&o[t]&&o[t][r.y9](o,n)}}}function u(t){var e,n=a;return n||!0===t.disableDbgExt||(n=a||((e=(0,o.EH)("Microsoft"))&&(a=e.ApplicationInsights),a)),n?n.ChromeDbgExt:null}function l(t){if(!i){i={};for(var e=0;e<s[r.oI];e++)i[s[e]]=c(s[e],t)}return i}},54130:function(t,e,n){"use strict";n.d(e,{b:function(){return r}});var i=n(37820);class r{constructor(t,e,n){this.l=t,this.c=e,this.h=n}static fromObject(t){return!t||isNaN(t.l)||isNaN(t.c)||isNaN(t.h)?null:new r(t.l,t.c,t.h)}equalValue(t){return this.l===t.l&&this.c===t.c&&this.h===t.h}roundToPrecision(t){return new r((0,i.l)(this.l,t),(0,i.l)(this.c,t),(0,i.l)(this.h,t))}toObject(){return{l:this.l,c:this.c,h:this.h}}}},55153:function(t,e,n){"use strict";n.d(e,{QG:function(){return a},Sn:function(){return c},cu:function(){return u},l8:function(){return s}});var i=n(68136),r=n(97004),o=n(356);const s=i.G.create("card-base-height",146),a=i.G.create("card-base-width",300),c=i.G.create("card-base-gap",14),u=i.G.create("card-stroke-color",t=>t(o.l)===r.y.DarkMode?"rgba(0,0,0,0.1)":"rgba(0,0,0,0.0578)")},55230:function(t,e,n){"use strict";n.d(e,{Ac:function(){return d},F9:function(){return l},FM:function(){return c},HX:function(){return r},I5:function(){return a},Is:function(){return b},J9:function(){return g},Mm:function(){return u},bb:function(){return s},f_:function(){return f},gG:function(){return v},kE:function(){return h},kT:function(){return o},lS:function(){return i},oK:function(){return p}});const i="Control",r="ArrowDown",o="ArrowLeft",s="ArrowRight",a="ArrowUp",c="End",u="Enter",l="Escape",h="Home",d="F2",f="PageDown",p="PageUp",v=" ",g="Tab",b={ArrowDown:r,ArrowLeft:o,ArrowRight:s,ArrowUp:a}},55609:function(t,e,n){"use strict";var i;n.d(e,{OB:function(){return u},Ay:function(){return l},cX:function(){return a}}),function(t){t.ltr="ltr",t.rtl="rtl"}(i||(i={}));var r=n(9790),o=n(22870);const s={steps:94,clipLight:0,clipDark:0},a=(Object.assign({},s),Object.assign(Object.assign({},s),{baseColor:(0,o.Hs)("#0078D4")}),{light:100,semilight:200,normal:400,semibold:600,bold:700}),c={backgroundColor:"#FFFFFF",contrast:0,density:0,designUnit:4,baseHeightMultiplier:8,baseHorizontalSpacingMultiplier:3,direction:i.ltr,cornerRadius:2,elevatedCornerRadius:4,focusOutlineWidth:2,fontWeight:a,disabledOpacity:.3,outlineWidth:1,neutralPalette:["#FFFFFF","#FCFCFC","#FAFAFA","#F7F7F7","#F5F5F5","#F2F2F2","#EFEFEF","#EDEDED","#EAEAEA","#E8E8E8","#E5E5E5","#E2E2E2","#E0E0E0","#DDDDDD","#DBDBDB","#D8D8D8","#D6D6D6","#D3D3D3","#D0D0D0","#CECECE","#CBCBCB","#C9C9C9","#C6C6C6","#C3C3C3","#C1C1C1","#BEBEBE","#BCBCBC","#B9B9B9","#B6B6B6","#B4B4B4","#B1B1B1","#AFAFAF","#ACACAC","#A9A9A9","#A7A7A7","#A4A4A4","#A2A2A2","#9F9F9F","#9D9D9D","#9A9A9A","#979797","#959595","#929292","#909090","#8D8D8D","#8A8A8A","#888888","#858585","#838383","#808080","#7D7D7D","#7B7B7B","#787878","#767676","#737373","#717171","#6E6E6E","#6B6B6B","#696969","#666666","#646464","#616161","#5F5F5F","#5C5C5C","#5A5A5A","#575757","#545454","#525252","#4F4F4F","#4D4D4D","#4A4A4A","#484848","#454545","#424242","#404040","#3D3D3D","#3B3B3B","#383838","#363636","#333333","#313131","#2E2E2E","#2B2B2B","#292929","#262626","#242424","#212121","#1E1E1E","#1B1B1B","#181818","#151515","#121212","#101010","#000000"],accentPalette:["#FFFFFF","#FBFDFE","#F6FAFE","#F2F8FD","#EEF6FC","#E9F4FB","#E5F1FB","#E1EFFA","#DCEDF9","#D8EAF8","#D4E8F8","#CFE6F7","#CBE4F6","#C7E1F6","#C2DFF5","#BEDDF4","#BADAF3","#B6D8F3","#B1D6F2","#ADD4F1","#A9D1F0","#A4CFF0","#A0CDEF","#9CCAEE","#97C8EE","#93C6ED","#8FC4EC","#8AC1EB","#86BFEB","#82BDEA","#7DBAE9","#79B8E8","#75B6E8","#70B3E7","#6CB1E6","#68AFE5","#63ADE5","#5FAAE4","#5BA8E3","#56A6E3","#52A3E2","#4EA1E1","#499FE0","#459DE0","#419ADF","#3D98DE","#3896DD","#3493DD","#3091DC","#2B8FDB","#278DDB","#238ADA","#1E88D9","#1A86D8","#1683D8","#1181D7","#0D7FD6","#097DD5","#047AD5","#0078D4","#0075CF","#0072C9","#006FC4","#006CBE","#0069B9","#0066B4","#0063AE","#0060A9","#005CA3","#00599E","#005699","#005393","#00508E","#004D88","#004A83","#00477D","#004478","#004173","#003E6D","#003B68","#003862","#00355D","#003258","#002F52","#002B4D","#002847","#002542","#00223C","#001F36","#001B30","#00182B","#001525","#00121F","#000000"],accentBaseColor:"#0078D4",accentFillRestDelta:0,accentFillHoverDelta:4,accentFillActiveDelta:-5,accentFillFocusDelta:0,accentFillSelectedDelta:12,accentForegroundRestDelta:0,accentForegroundHoverDelta:6,accentForegroundActiveDelta:-4,accentForegroundFocusDelta:0,neutralFillRestDelta:7,neutralFillHoverDelta:10,neutralFillActiveDelta:5,neutralFillFocusDelta:0,neutralFillSelectedDelta:7,neutralFillInputRestDelta:0,neutralFillInputHoverDelta:0,neutralFillInputActiveDelta:0,neutralFillInputFocusDelta:0,neutralFillInputSelectedDelta:0,neutralFillStealthRestDelta:0,neutralFillStealthHoverDelta:5,neutralFillStealthActiveDelta:3,neutralFillStealthFocusDelta:0,neutralFillStealthSelectedDelta:7,neutralFillToggleHoverDelta:8,neutralFillToggleActiveDelta:-5,neutralFillToggleFocusDelta:0,baseLayerLuminance:-1,neutralFillCardDelta:3,neutralForegroundDarkIndex:93,neutralForegroundLightIndex:0,neutralForegroundHoverDelta:0,neutralForegroundActiveDelta:0,neutralForegroundFocusDelta:0,neutralDividerRestDelta:8,neutralOutlineRestDelta:25,neutralOutlineHoverDelta:40,neutralOutlineActiveDelta:16,neutralOutlineFocusDelta:25};function u(t,e){return(0,r.A)(t)?t(e):t}var l=c},56063:function(t,e,n){"use strict";n.d(e,{b:function(){return b}});var i=n(56911),r=n(38493),o=n(60815),s=n(29025),a=n(35106),c=n(88458),u=n(92011),l=n(56863);class h extends u.L{}class d extends((0,l.rf)(h)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}const f="submit",p="reset";class v extends d{constructor(){super(...arguments),this.handleSubmission=()=>{if(!this.form)return;const t=this.proxy.isConnected;t||this.attachProxy(),"function"==typeof this.form.requestSubmit?this.form.requestSubmit(this.proxy):this.proxy.click(),t||this.detachProxy()},this.handleFormReset=()=>{this.form?.reset()},this.handleUnsupportedDelegatesFocus=()=>{window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&this.$fastController.definition.shadowOptions?.delegatesFocus&&(this.focus=()=>{this.control.focus()})}}formactionChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formAction=this.formaction)}formenctypeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formEnctype=this.formenctype)}formmethodChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formMethod=this.formmethod)}formnovalidateChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formNoValidate=this.formnovalidate)}formtargetChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formTarget=this.formtarget)}typeChanged(t,e){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type),e===f&&this.addEventListener("click",this.handleSubmission),t===f&&this.removeEventListener("click",this.handleSubmission),e===p&&this.addEventListener("click",this.handleFormReset),t===p&&this.removeEventListener("click",this.handleFormReset)}validate(){super.validate(this.control)}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.handleUnsupportedDelegatesFocus()}}(0,i.Cg)([(0,r.CF)({mode:"boolean"}),(0,i.Sn)("design:type",Boolean)],v.prototype,"autofocus",void 0),(0,i.Cg)([(0,r.CF)({attribute:"form"}),(0,i.Sn)("design:type",String)],v.prototype,"formId",void 0),(0,i.Cg)([r.CF,(0,i.Sn)("design:type",String)],v.prototype,"formaction",void 0),(0,i.Cg)([r.CF,(0,i.Sn)("design:type",String)],v.prototype,"formenctype",void 0),(0,i.Cg)([r.CF,(0,i.Sn)("design:type",String)],v.prototype,"formmethod",void 0),(0,i.Cg)([(0,r.CF)({mode:"boolean"}),(0,i.Sn)("design:type",Boolean)],v.prototype,"formnovalidate",void 0),(0,i.Cg)([r.CF,(0,i.Sn)("design:type",String)],v.prototype,"formtarget",void 0),(0,i.Cg)([r.CF,(0,i.Sn)("design:type",String)],v.prototype,"type",void 0),(0,i.Cg)([o.sH,(0,i.Sn)("design:type",Array)],v.prototype,"defaultSlottedContent",void 0);class g{}(0,i.Cg)([(0,r.CF)({attribute:"aria-expanded"}),(0,i.Sn)("design:type",Object)],g.prototype,"ariaExpanded",void 0),(0,i.Cg)([(0,r.CF)({attribute:"aria-pressed"}),(0,i.Sn)("design:type",Object)],g.prototype,"ariaPressed",void 0),(0,c.X)(g,s.z),(0,c.X)(v,a.qw,g);class b extends v{constructor(){super(...arguments),this.iconOnly=!1}appearanceChanged(t,e){t!==e&&(this.classList.add(e),this.classList.remove(t))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="neutral")}defaultSlottedContentChanged(){const t=this.defaultSlottedContent.filter(t=>t.nodeType===Node.ELEMENT_NODE);1===t.length&&t[0]instanceof SVGElement?this.control.classList.add("icon-only"):this.control.classList.remove("icon-only")}}(0,i.Cg)([r.CF,(0,i.Sn)("design:type",String)],b.prototype,"appearance",void 0),(0,i.Cg)([(0,r.CF)({attribute:"icon-only",mode:"boolean"}),(0,i.Sn)("design:type",Boolean)],b.prototype,"iconOnly",void 0)},56095:function(t){t.exports='<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.01 2.25c.74 0 1.47.1 2.18.25.32.07.55.33.59.65l.17 1.53a1.38 1.38 0 001.92 1.11l1.4-.61c.3-.13.64-.06.85.17a9.8 9.8 0 012.2 3.8c.1.3 0 .63-.26.82l-1.24.92a1.38 1.38 0 000 2.22l1.24.92c.26.19.36.52.27.82a9.8 9.8 0 01-2.2 3.8.75.75 0 01-.85.17l-1.4-.62a1.38 1.38 0 00-1.93 1.12l-.17 1.52a.75.75 0 01-.58.65 9.52 9.52 0 01-4.4 0 .75.75 0 01-.57-.65l-.17-1.52a1.38 1.38 0 00-1.93-1.11l-1.4.62a.75.75 0 01-.85-.18 9.8 9.8 0 01-2.2-3.8c-.1-.3 0-.63.27-.82l1.24-.92a1.38 1.38 0 000-2.22l-1.24-.92a.75.75 0 01-.28-.82 9.8 9.8 0 012.2-3.8c.23-.23.57-.3.86-.17l1.4.62c.4.17.86.15 1.25-.08.38-.22.63-.6.68-1.04l.17-1.53a.75.75 0 01.58-.65c.72-.16 1.45-.24 2.2-.25zm0 1.5c-.45 0-.9.04-1.35.12l-.11.97a2.89 2.89 0 01-4.02 2.33l-.9-.4A8.3 8.3 0 004.28 9.1l.8.59a2.88 2.88 0 010 4.64l-.8.59a8.3 8.3 0 001.35 2.32l.9-.4a2.88 2.88 0 014.02 2.32l.1.99c.9.15 1.8.15 2.7 0l.1-.99a2.88 2.88 0 014.02-2.32l.9.4a8.3 8.3 0 001.36-2.32l-.8-.59a2.88 2.88 0 010-4.64l.8-.59a8.3 8.3 0 00-1.35-2.32l-.9.4a2.88 2.88 0 01-4.02-2.32l-.11-.98c-.45-.08-.9-.11-1.34-.12zM12 8.25a3.75 3.75 0 110 7.5 3.75 3.75 0 010-7.5zm0 1.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"></path></svg>'},56863:function(t,e,n){"use strict";n.d(e,{dx:function(){return f},rf:function(){return d}});var i=n(19470),r=n(60815),o=n(23429),s=n(38493),a=n(55230);const c="form-associated-proxy",u="ElementInternals",l=u in window&&"setFormValue"in window[u].prototype,h=new WeakMap;function d(t){const e=class extends t{constructor(...t){super(...t),this.dirtyValue=!1,this.disabled=!1,this.proxyEventsToBlock=["change","click"],this.proxyInitialized=!1,this.required=!1,this.initialValue=this.initialValue||"",this.elementInternals||(this.formResetCallback=this.formResetCallback.bind(this))}static get formAssociated(){return l}get validity(){return this.elementInternals?this.elementInternals.validity:this.proxy.validity}get form(){return this.elementInternals?this.elementInternals.form:this.proxy.form}get validationMessage(){return this.elementInternals?this.elementInternals.validationMessage:this.proxy.validationMessage}get willValidate(){return this.elementInternals?this.elementInternals.willValidate:this.proxy.willValidate}get labels(){if(this.elementInternals)return Object.freeze(Array.from(this.elementInternals.labels));if(this.proxy instanceof HTMLElement&&this.proxy.ownerDocument&&this.id){const t=this.proxy.labels,e=Array.from(this.proxy.getRootNode().querySelectorAll(`[for='${this.id}']`)),n=t?e.concat(Array.from(t)):e;return Object.freeze(n)}return i.tR}valueChanged(t,e){this.dirtyValue=!0,this.proxy instanceof HTMLElement&&(this.proxy.value=this.value),this.currentValue=this.value,this.setFormValue(this.value),this.validate()}currentValueChanged(){this.value=this.currentValue}initialValueChanged(t,e){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}disabledChanged(t,e){this.proxy instanceof HTMLElement&&(this.proxy.disabled=this.disabled),o.L.enqueue(()=>this.classList.toggle("disabled",this.disabled))}nameChanged(t,e){this.proxy instanceof HTMLElement&&(this.proxy.name=this.name)}requiredChanged(t,e){this.proxy instanceof HTMLElement&&(this.proxy.required=this.required),o.L.enqueue(()=>this.classList.toggle("required",this.required)),this.validate()}get elementInternals(){if(!l)return null;let t=h.get(this);return t||(t=this.attachInternals(),h.set(this,t)),t}connectedCallback(){super.connectedCallback(),this.addEventListener("keypress",this._keypressHandler),this.value||(this.value=this.initialValue,this.dirtyValue=!1),this.elementInternals||(this.attachProxy(),this.form&&this.form.addEventListener("reset",this.formResetCallback))}disconnectedCallback(){super.disconnectedCallback(),this.proxyEventsToBlock.forEach(t=>this.proxy.removeEventListener(t,this.stopPropagation)),!this.elementInternals&&this.form&&this.form.removeEventListener("reset",this.formResetCallback)}checkValidity(){return this.elementInternals?this.elementInternals.checkValidity():this.proxy.checkValidity()}reportValidity(){return this.elementInternals?this.elementInternals.reportValidity():this.proxy.reportValidity()}setValidity(t,e,n){this.elementInternals?this.elementInternals.setValidity(t,e,n):"string"==typeof e&&this.proxy.setCustomValidity(e)}formDisabledCallback(t){this.disabled=t}formResetCallback(){this.value=this.initialValue,this.dirtyValue=!1}attachProxy(){this.proxyInitialized||(this.proxyInitialized=!0,this.proxy.style.display="none",this.proxyEventsToBlock.forEach(t=>this.proxy.addEventListener(t,this.stopPropagation)),this.proxy.disabled=this.disabled,this.proxy.required=this.required,"string"==typeof this.name&&(this.proxy.name=this.name),"string"==typeof this.value&&(this.proxy.value=this.value),this.proxy.setAttribute("slot",c),this.proxySlot=document.createElement("slot"),this.proxySlot.setAttribute("name",c)),this.shadowRoot?.appendChild(this.proxySlot),this.appendChild(this.proxy)}detachProxy(){this.removeChild(this.proxy),this.shadowRoot?.removeChild(this.proxySlot)}validate(t){this.proxy instanceof HTMLElement&&this.setValidity(this.proxy.validity,this.proxy.validationMessage,t)}setFormValue(t,e){this.elementInternals&&this.elementInternals.setFormValue(t,e||t)}_keypressHandler(t){if(t.key===a.Mm)if(this.form instanceof HTMLFormElement){const t=this.form.querySelector("[type=submit]");t?.click()}}stopPropagation(t){t.stopPropagation()}};return(0,s.CF)({mode:"boolean"})(e.prototype,"disabled"),(0,s.CF)({mode:"fromView",attribute:"value"})(e.prototype,"initialValue"),(0,s.CF)({attribute:"current-value"})(e.prototype,"currentValue"),(0,s.CF)(e.prototype,"name"),(0,s.CF)({mode:"boolean"})(e.prototype,"required"),(0,r.sH)(e.prototype,"value"),e}function f(t){class e extends(d(t)){}class n extends e{constructor(...t){super(t),this.dirtyChecked=!1,this.checkedAttribute=!1,this.checked=!1,this.dirtyChecked=!1}checkedAttributeChanged(){this.defaultChecked=this.checkedAttribute}defaultCheckedChanged(){this.dirtyChecked||(this.checked=this.defaultChecked,this.dirtyChecked=!1)}checkedChanged(t,e){this.dirtyChecked||(this.dirtyChecked=!0),this.currentChecked=this.checked,this.updateForm(),this.proxy instanceof HTMLInputElement&&(this.proxy.checked=this.checked),void 0!==t&&this.$emit("change"),this.validate()}currentCheckedChanged(t,e){this.checked=this.currentChecked}updateForm(){const t=this.checked?this.value:null;this.setFormValue(t,t)}connectedCallback(){super.connectedCallback(),this.updateForm()}formResetCallback(){super.formResetCallback(),this.checked=!!this.checkedAttribute,this.dirtyChecked=!1}}return(0,s.CF)({attribute:"checked",mode:"boolean"})(n.prototype,"checkedAttribute"),(0,s.CF)({attribute:"current-checked",converter:s.Bs})(n.prototype,"currentChecked"),(0,r.sH)(n.prototype,"defaultChecked"),(0,r.sH)(n.prototype,"checked"),n}},57065:function(t,e,n){"use strict";n.d(e,{i:function(){return i}});const i={normal:4.5,large:7}},57209:function(){var t;!function(t){var e=function(){function t(){}return t.getGlobal=function(){return"undefined"!=typeof globalThis&&globalThis?globalThis:"undefined"!=typeof self&&self?self:"undefined"!=typeof window&&window?window:null},t.hasWindow=function(){return Boolean("object"==typeof window&&window)},t.getGlobalInst=function(t){if("window"===t&&this.hasWindow())return window;var e=this.getGlobal();return e&&e[t]?e[t]:null},t}();t.getGlobalWindow=e}(t||(t={})),function(t){var e=function(){function t(){}return t.trackerConfig={useTelemetryService:!1,selectorMethod:".",directFunctionCall:!0,impressionIdParamName:"",publisherName:"msnperegrine"},t}();t.Config=e}(t||(t={})),t||(t={}),function(t){var e=function(){this.element=null,this.trackBeacons=[]};t.VideoTrackEvents=e}(t||(t={})),function(t){var e=function(){function t(){}return t.appinsights={stagingConnectionString:"9b1500b8-3f89-4126-8af8-cd9020439a04",prodConnectionString:"922c1827-2168-46e4-b953-34fef5deff39"},t.msn={videoViewIdMacro:"VIDEO_VIEW_ID"},t}();t.Constants=e}(t||(t={})),function(t){t._window=t.getGlobalWindow.getGlobalInst("window");var e=function(){function e(){}return e.isDebug=function(t){return"true"===this.getQueryParam("na-debug",t.location.search)},e.getRid=function(e){if(t.config.publisherName.indexOf("msn")>=0)for(var n=0;n<e.beacons.length;n++){if(0==e.beacons[n].url.indexOf("https://srtb.msn.com"))return this.getQueryParam("rid",e.beacons[n].url)}return e.impid},e.replaceQueryParam=function(t,e,n){var i=this.getQueryParam(t,n),r=t.concat("=").concat(i),o=t.concat("=").concat(e);return n&&n.indexOf(r)>=0?n.replace(r,o):n},e.getQueryParam=function(t,e){var n=this.getQueryParams(new RegExp("^"+this.escapeRegExp(t)+"$"),e);return n&&n.length>0?n[0].value:null},e.getQueryParams=function(t,e){return e&&e.indexOf("?")>=0&&(e=e.substring(e.indexOf("?")+1)),this.getKeyValuePairs(t,e,"&")},e.getKeyValuePairs=function(t,e,n){if(!e||!t||!t.test)return[];for(var i=[],r=e.split(n),o=0;o<r.length;o++){var s=r[o],a=s.indexOf("=");if(-1!==a){var c=s.substring(0,a).trim(),u=s.substring(a+1).trim();t.test(c)&&i.push({name:c,value:u})}}return i},e.escapeRegExp=function(t){return t?t.replace(this.regexSpecialCharsRegex,"\\$1"):t},e.consoleLog=function(t,e){this.isDebug(e)&&console.log(t)},e.JSONstringify=function(t){if("function"==typeof JSON.stringify)return JSON.stringify(t)},e.getMetaContentByName=function(e,n){try{n||(n=t._window);for(var i=n.document.getElementsByTagName("meta"),r=0;r<i.length;r++)if(i[r].getAttribute("name")===e)return i[r].getAttribute("content");return""}catch(t){return""}},e.loadScript=function(t,e){var n=document.getElementsByTagName("head")[0],i=document.createElement("script");i.type="text/javascript",i.src=t,i.onload=e,i.onreadystatechange=function(){"complete"===this.readyState&&e()},n.appendChild(i)},e.fireBeacon=function(e){e&&t._window&&t._window.Image&&((new t._window.Image).src=e)},e.addQueryParam=function(t,e,n){return t+=-1==t.indexOf("?")?"?":"&",t+=e+"="+n},e.isIE=function(t){return t.navigator.userAgent.indexOf("MSIE ")>-1},e.getCurrentScriptTag=function(t){if(!t)return null;if((e=t.document.currentScript)&&e.src)return e.src;var e,n=t.document.getElementsByTagName("script");if(n&&n.length>0&&-1!=(e=n[n.length-1]).src.indexOf("nativeads/msantracker"))return e.src;var i="",r=t.document.querySelector("script[src*='nativeads/msantracker']");return r&&(i=r.src),i},e.isMSN=function(t){return t?-1!=t.location.href.indexOf("msn.com"):null},e.isStagingEnv=function(t){if(!t)return null;var e=this.getCurrentScriptTag(t);return!!e&&-1!=e.indexOf("nativeads/staging/")},e.getPublisherName=function(t){return t?this.getQueryParam("publisherName",t):""},e.inIframe=function(){try{return t._window.self!==t._window.top}catch(t){return!0}},e.getTargetWindow=function(){return this.inIframe()?t._window.parent:t._window},e.isDocumentReady=function(t){return!!t&&(!(!t.navigator.userAgent||-1===t.navigator.userAgent.indexOf("Android")||"loaded"!=t.document.readyState)||"complete"==t.document.readyState)},e.getVideoViewId=function(){return this.getGuid().replace(/-/g,"")},e.getGuid=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=16*Math.random()|0;return("x"===t?e:3&e|8).toString(16)})},e.regexSpecialCharsRegex="/([.*+?^=!:${}()|[]/\\])/g",e}();t.utils=e}(t||(t={})),function(t){var e=function(){function e(){}return e.initialize=function(t){},e.logEvent=function(t,e,n){this.logEventForMSN(t,e,n)},e.logEventForMSN=function(e,n,i){if(n&&i){var r=void 0;this.elementsToTrack&&e&&this.elementsToTrack[e]&&(r=this.elementsToTrack[e]),i.publishername=t.config.publisherName;var o=this.targetWindow.btoa(t.utils.JSONstringify(i)).substring(0,1800),s="https://srtb.msn.com/log?r="+r+"&n="+n+"&d="+encodeURIComponent(o);t.utils.fireBeacon(s),i.rid=r,t.utils.consoleLog("TelemetryEvent: "+n+" "+t.utils.JSONstringify(i),this.targetWindow)}},e.setElementToTrack=function(t,e){t&&e&&(this.elementsToTrack[t]=e)},e.logAdView=function(t,e,n){var i={elementId:e,percentage:n.percentage,duration:n.duration,type:n.type,triggerType:n.triggerType,url:n.url};this.logEvent(t,"mt_view",i)},e.logVideoAdPlay=function(t,e,n){var i={elementId:e,percentage:n.percentage,duration:n.duration,type:n.type,triggerType:n.triggerType,url:n.url};this.logEvent(t,"mt_view",i)},e.logAdClick=function(t,e,n){var i={elementId:e,type:n.type,url:n.url};this.logEvent(t,"mt_click",i)},e.targetWindow=t._window,e.elementsToTrack={},e}();t.Telemetry=e}(t||(t={})),function(t){var e=function(){function e(){}return e.trackElement=function(t,n,i,r,o){var s=e.DEFAULT_PERCENTINVIEW,a=e.DEFAULT_DURATIONINVIEW;return r&&(r.percentage&&(s=r.percentage),r.duration&&(a=r.duration)),e.elementsToTrack.push({selector:t,element:n,targetWindow:i,percentInView:s,milliSecondsInView:a,viewBeacon:r,action:o}),null==e.processing&&(e.processing=setInterval(e.process,e.interval)),this},e.process=function(){try{if(e.elementsToTrack.length>0){for(var n=0;n<e.elementsToTrack.length;n++)e.appearedElements.indexOf(n)<0&&e.elementsWaitingForTimeout.indexOf(n)<0&&e.isElementInView(e.elementsToTrack[n])&&(e.elementsWaitingForTimeout.push(n),setTimeout(e.checkAfterTimeout,e.elementsToTrack[n].milliSecondsInView,e.elementsToTrack[n],n));e.elementsToTrack.length===e.appearedElements.length&&e.stopProcessing()}}catch(n){var i=e.elementsToTrack;i.length>0&&i[0]&&i[0].viewBeacon?t.Telemetry.logEvent(i[0].viewBeacon.guid,"mt_err",{msg:n.message,details:i[0].viewBeacon}):t.Telemetry.logEvent("","mt_err",{msg:n.message})}},e.checkAfterTimeout=function(t,n){e.appearedElements.indexOf(n)<0&&e.isElementInView(t)&&(e.appearedElements.push(n),t.action.call(void 0,t.selector,t.viewBeacon,t.targetWindow)),e.elementsWaitingForTimeout.splice(e.elementsWaitingForTimeout.indexOf(n),1)},e.isElementInView=function(n){var i=n.targetWindow,r=i.document;if(!n.element)return!1;var o,s=n.element,a=r.getElementsByTagName("body");a&&(o=a[0]);var c=s.getBoundingClientRect();if(!c)return!1;var u=-1===c.left?0:c.left,l=-1===c.top?0:c.top,h=s.offsetHeight,d=s.offsetWidth,f=r.elementFromPoint(u+d/2,l+h/2);if("msnperegrine"!=t.config.publisherName&&(!f||f&&s!==f&&!s.contains(f)))return!1;var p=i.innerHeight||r.clientWidth||o.clientWidth,v=i.innerWidth||r.clientHeight||o.clientHeight,g=i.pageYOffset,b=g+p,m=l+i.scrollY,y=m+h,w=i.pageXOffset,$=w+v,x=u+i.scrollX,k={pTop:g,pBottom:b,pLeft:w,pRight:$,eTop:m,eBottom:y,eLeft:x,eRight:x+d,eWidth:d,eHeight:h,percentInView:n.percentInView};return e.validateIsElementInView(k)},e.validateIsElementInView=function(t){if(t.eBottom<=t.pTop||t.eTop>=t.pBottom||t.eRight<=t.pLeft||t.eLeft>=t.pRight)return!1;var e=0,n=0,i=0,r=0;t.pTop>t.eTop&&t.pTop<t.eBottom&&(e=t.pTop-t.eTop),t.pBottom<t.eBottom&&t.pBottom>t.eTop&&(i=t.eBottom-t.pBottom),t.pLeft>t.eLeft&&t.pLeft<t.eRight&&(r=t.pLeft-t.eLeft),t.pRight<t.eRight&&t.pRight>t.eLeft&&(n=t.eRight-t.pRight);var o=r+n;return(e+i)*t.eWidth+o*t.eHeight<=t.eHeight*t.eWidth*(100-t.percentInView)/100},e.stopProcessing=function(){clearInterval(e.processing),e.processing=null},e.DEFAULT_PERCENTINVIEW=50,e.DEFAULT_DURATIONINVIEW=1e3,e.elementsToTrack=[],e.appearedElements=[],e.elementsWaitingForTimeout=[],e.processing=null,e.interval=100,e}();t.AppearUtils=e}(t||(t={})),function(t){var e=function(){function e(){}return e.trackElement=function(n,i,r,o,s,a){for(var c=t.utils.getVideoViewId(),u=[],l=0;l<o.length;l++){var h=o[l];if(e.toTrackUrlCounts=e.toTrackUrlCounts+1,"videoView"!=h.type){var d=t.utils.getQueryParam("rlink",h.url),f=decodeURIComponent(d),p=t.utils.replaceQueryParam("vi",c,f),v=encodeURIComponent(p);h.url=t.utils.replaceQueryParam("rlink",v,h.url)}u.push({selector:n,element:i,videoParenentElement:s,videoBeacon:h,action:a,targetWindow:r,percentInView:h.percentage?h.percentage:50})}return e.elementsToTrack.push({element:i,trackBeacons:u}),null==e.processing&&(e.processing=setInterval(e.process,e.interval)),i.onplay=function(){e.refreshBeaconsWhenStart(i,r)},i.onseeking=function(){e.refreshBeaconsWhenStart(i,r)},this},e.untrackElement=function(t){var n=e.getElementBeaconsIndex(e.elementsToTrack,t);n>=0&&e.elementsToTrack.splice(n,1)},e.getElementBeaconsIndex=function(t,e){if(t&&t.length>0)for(var n=0;n<t.length;n++)if(t[n].element==e)return n;return-1},e.refreshBeaconsWhenStart=function(n,i){if(n&&0==n.currentTime){var r=t.utils.getVideoViewId(),o=e.getElementBeaconsIndex(e.elementsToTrack,n);if(o>=0){for(var s=e.elementsToTrack[o].trackBeacons,a=[],c=0;c<s.length;c++){var u=s[c],l=u.videoBeacon;if("videoView"!=l.type){e.trackedBeacons.indexOf(l.url)>=0&&(e.toTrackUrlCounts=e.toTrackUrlCounts+1);var h=t.utils.getQueryParam("rlink",l.url),d=decodeURIComponent(h),f=t.utils.replaceQueryParam("vi",r,d),p=encodeURIComponent(f);l.url=t.utils.replaceQueryParam("rlink",p,l.url)}a.push({selector:u.selector,element:u.element,videoParenentElement:u.videoParenentElement,videoBeacon:l,action:u.action,targetWindow:i,percentInView:u.percentInView?u.percentInView:50})}e.elementsToTrack[o].trackBeacons=a}null==e.processing&&(e.processing=setInterval(e.process,e.interval))}},e.process=function(){try{if(e.elementsToTrack&&e.elementsToTrack.length>0){for(var n=0;n<e.elementsToTrack.length;n++)for(var i=e.elementsToTrack[n].trackBeacons,r=0;r<i.length;r++){var o=i[r];e.trackedBeacons.indexOf(o.videoBeacon.url)<0&&e.trackPlay(o)}e.toTrackUrlCounts===e.trackedBeacons.length&&e.stopProcessing()}}catch(n){var s=e.elementsToTrack;if(s&&s.length>0&&s[0].trackBeacons&&s[0].trackBeacons[0].videoBeacon){var a=s[0].trackBeacons[0].videoBeacon;t.Telemetry.logEvent(a.guid,"mt_err",{msg:n.message,details:a})}else t.Telemetry.logEvent("","mt_err",{msg:n.message})}},e.trackPlay=function(n){var i=n.element,r=n.videoBeacon.duration,o=1e3*i.currentTime,s=n.videoBeacon.type,a={targetWindow:n.targetWindow,element:n.videoParenentElement?n.videoParenentElement:n.element,percentInView:n.percentInView};t.AppearUtils.isElementInView(a)&&e.trackedBeacons.indexOf(n.videoBeacon.url)<0&&("videoView"==s?this.checkPlayedTime(i)>=r&&(n.action.call(void 0,n.selector,n.videoBeacon),e.trackedBeacons.push(n.videoBeacon.url)):(0==r&&o>r||r>0&&this.checkCurrentTime(o,r))&&(n.action.call(void 0,n.selector,n.videoBeacon),e.trackedBeacons.push(n.videoBeacon.url)))},e.checkCurrentTime=function(t,e){return t>=e-50&&t<=e+50},e.checkPlayedTime=function(t){var e=0;if(t.played&&t.played.length>0)for(var n=0;n<t.played.length;n++)e+=t.played.end(n)-t.played.start(n);return 1e3*e},e.stopProcessing=function(){clearInterval(e.processing),e.processing=null},e.elementsToTrack=[],e.trackedBeacons=[],e.processing=null,e.interval=100,e.toTrackUrlCounts=0,e}();t.PlayUtils=e}(t||(t={})),function(t){var e=function(){this.type="view",this.url="",this.guid="",this.triggerType="view",this.percentage=50,this.duration=1e3};t.ViewBeacon=e}(t||(t={})),function(t){var e=function(){this.type="videoView",this.url="",this.guid="",this.triggerType="play",this.percentage=50,this.duration=0};t.VideoBeacon=e}(t||(t={})),function(t){var e=function(){this.impid="",this.rid="",this.beacons=[]};t.TrackableElement=e}(t||(t={})),function(t){function e(e){var i=new t.TrackableElement,r=new URLSearchParams(t.scriptSrc);if(r){var o="";if(r.has("v")){if(o=r.get("v"),r.has("d")){var s=r.get("d");t.Telemetry.logEvent("","mt_info",{msg:"Version",clientVersion:s})}var a=decodeURI(o),c=new URLSearchParams(a),u=t.config.impressionIdParamName;if(c.has(u)&&(i.impid=c.get(u)),""!=i.impid){c.has("rId")&&(i.rid=c.get("rId"));var l=new t.ViewBeacon;l.url=a,i.beacons=[l],n([i],e,!1)}else t.Telemetry.logEvent("","mt_err",{msg:"view_id is empty or null",url:a})}else t.Telemetry.logEvent("","mt_err",{msg:"viewability beacon not present",url:t.scriptSrc})}else t.Telemetry.logEvent("","mt_err",{msg:"invalid script src url for params",url:t.scriptSrc})}function n(e,n,r){void 0===r&&(r=!0),!e&&e&&e.length>0?t.Telemetry.logEvent("","mt_err",{msg:"elements null or empty"}):e.forEach(function(e){var r=t.utils.getGuid();if(e.rid||(e.rid=t.utils.getRid(e)),t.Telemetry.setElementToTrack(r,e.rid),e.beacons&&e.impid){var o=e.impid;"msn"==t.config.publisherName&&(o="bing-"+e.impid);var s=!0;e.element&&(s=!1);var a=t.config.selectorMethod+""+o;if(s){var c=n.document.querySelector(a);c&&(e.element=c)}if(e.element)i(e,a,n,o,r);else{t.Telemetry.logEvent(r,"mt_err",{msg:"No element with id or element, setting an interval to wait",id:o,selector:a});var u=setInterval(function(){var s=n.document.querySelector(a);s&&(t.Telemetry.logEvent(r,"mt_info",{msg:"Found element after retry",element:a}),clearInterval(u),e.element=s,i(e,a,n,o,r))},100)}}else t.Telemetry.logEvent(r,"mt_err",{msg:"Beacon or imp id is empty or null"})})}function i(e,n,i,r,o){var s=e.beacons,a=[];s&&s.length>0&&s.forEach(function(s){t.Telemetry.logEvent(o,"mt_info",{msg:"Beacon Information",id:r,beaconUrl:s.url}),s.guid=o,"play"==s.triggerType?a.push(s):function(e,n,i,r){var o=this;if(e.triggerType&&"view"!==e.triggerType)if("click"===e.type){n.element.addEventListener("click",function(n){t.Telemetry.logAdClick(e.guid,o.id,e),t.utils.fireBeacon(e.url)})}else t.Telemetry.logEvent(e.guid,"mt_err",{msg:"Unsupported tracker event",impid:n.impid});else{var s=e;t.AppearUtils.trackElement(i,n.element,r,s,function(e,n,i){var r=e.split(t.config.selectorMethod)[1];t.Telemetry.logAdView(n.guid,r,n),t.utils.fireBeacon(n.url),console.log("[MSAN view beacon fired] "+n.url)})}}(s,e,n,i)}),a&&a.length>0&&function(e,n,i,r){var o=e;t.PlayUtils.trackElement(i,n.element,r,o,n.videoParenentElement,function(e,n){var i=e.split(t.config.selectorMethod)[1];t.Telemetry.logVideoAdPlay(n.guid,i,n),t.utils.fireBeacon(n.url),console.log("[MSAN video beacon fired] "+n.url)})}(a,e,n,i)}t.config=null,t.isInitialized=!1,t.scriptSrc="",t.Initialize=function(){t.config=t.Config.trackerConfig,t.Telemetry.initialize(t._window),"msnperegrine"!=t.config.publisherName&&t.Telemetry.logEvent("","mt_info",{msg:"MSANTracker JS Inserted"});var n=t.utils.getCurrentScriptTag(t._window);if(n){if(t.scriptSrc=n,!t.isInitialized&&!t.config.directFunctionCall)var i=setInterval(function(){t.utils.isDocumentReady(t._window)&&(t.isInitialized=!0,t.Telemetry.logEvent("","mt_info",{msg:"Document in ready state"}),clearInterval(i),e(t._window))},100)}else"msnperegrine"!=t.config.publisherName&&t.Telemetry.logEvent("","mt_err",{msg:"Cannot find current script src"})},t.ProcessTrackers=e,t.TrackElements=function(e,i,r){if(void 0===r&&(r=!0),t.Telemetry.logEvent("","mt_info",{msg:"MSANTracker function called",directCall:r}),e||t.Telemetry.logEvent("","mt_err",{msg:"elements null or empty"}),!t.isInitialized&&r)var o=setInterval(function(){t.utils.isDocumentReady(i)&&(t.isInitialized=!0,t.Telemetry.logEvent("","mt_info",{msg:"Document in ready state"}),clearInterval(o),n(e,i,r))},100);else r&&n(e,i,r)}}(t||(t={})),t._window&&(t.Initialize(),t._window.MSANTracker=t)},57416:function(t,e,n){"use strict";n.d(e,{JU:function(){return s},Pb:function(){return o}});var i=n(68136);const{create:r}=i.G,o=r("control-corner-radius",4),s=r("layer-corner-radius",4)},57606:function(t,e,n){"use strict";n.d(e,{p:function(){return M}});var i,r=n(37820),o=n(87122),s=n(14848),a=n(54130);function c(t,e,n=18){const i=(0,s.Gy)(t);let r=i.c+e*n;return r<0&&(r=0),(0,s.k5)(new a.b(i.l,r,i.h))}function u(t,e){return t*e}function l(t,e){return new o.M(u(t.r,e.r),u(t.g,e.g),u(t.b,e.b),1)}function h(t,e){return t<.5?(0,r.qE)(2*e*t,0,1):(0,r.qE)(1-2*(1-e)*(1-t),0,1)}function d(t,e){return new o.M(h(t.r,e.r),h(t.g,e.g),h(t.b,e.b),1)}!function(t){t[t.Burn=0]="Burn",t[t.Color=1]="Color",t[t.Darken=2]="Darken",t[t.Dodge=3]="Dodge",t[t.Lighten=4]="Lighten",t[t.Multiply=5]="Multiply",t[t.Overlay=6]="Overlay",t[t.Screen=7]="Screen"}(i||(i={}));var f,p=n(40778),v=n(15128),g=n(14338),b=n(27478);function m(t,e,n,i){if(isNaN(t)||t<=0)return n;if(t>=1)return i;switch(e){case f.HSL:return(0,s.QX)(function(t,e,n){return isNaN(t)||t<=0?e:t>=1?n:new p.D((0,r.c5)(t,e.h,n.h),(0,r.Cc)(t,e.s,n.s),(0,r.Cc)(t,e.l,n.l))}(t,(0,s.SU)(n),(0,s.SU)(i)));case f.HSV:return(0,s.Eq)(function(t,e,n){return isNaN(t)||t<=0?e:t>=1?n:new v.D((0,r.c5)(t,e.h,n.h),(0,r.Cc)(t,e.s,n.s),(0,r.Cc)(t,e.v,n.v))}(t,(0,s.Es)(n),(0,s.Es)(i)));case f.XYZ:return(0,s.ym)(function(t,e,n){return isNaN(t)||t<=0?e:t>=1?n:new b.P((0,r.Cc)(t,e.x,n.x),(0,r.Cc)(t,e.y,n.y),(0,r.Cc)(t,e.z,n.z))}(t,(0,s.Mx)(n),(0,s.Mx)(i)));case f.LAB:return(0,s.eK)(function(t,e,n){return isNaN(t)||t<=0?e:t>=1?n:new g.h((0,r.Cc)(t,e.l,n.l),(0,r.Cc)(t,e.a,n.a),(0,r.Cc)(t,e.b,n.b))}(t,(0,s.mi)(n),(0,s.mi)(i)));case f.LCH:return(0,s.k5)(function(t,e,n){return isNaN(t)||t<=0?e:t>=1?n:new a.b((0,r.Cc)(t,e.l,n.l),(0,r.Cc)(t,e.c,n.c),(0,r.c5)(t,e.h,n.h))}(t,(0,s.Gy)(n),(0,s.Gy)(i)));default:return function(t,e,n){return isNaN(t)||t<=0?e:t>=1?n:new o.M((0,r.Cc)(t,e.r,n.r),(0,r.Cc)(t,e.g,n.g),(0,r.Cc)(t,e.b,n.b),(0,r.Cc)(t,e.a,n.a))}(t,n,i)}}!function(t){t[t.RGB=0]="RGB",t[t.HSL=1]="HSL",t[t.HSV=2]="HSV",t[t.XYZ=3]="XYZ",t[t.LAB=4]="LAB",t[t.LCH=5]="LCH"}(f||(f={}));class y{constructor(t){if(null==t||0===t.length)throw new Error("The stops argument must be non-empty");this.stops=this.sortColorScaleStops(t)}static createBalancedColorScale(t){if(null==t||0===t.length)throw new Error("The colors argument must be non-empty");const e=new Array(t.length);for(let n=0;n<t.length;n++)0===n?e[n]={color:t[n],position:0}:n===t.length-1?e[n]={color:t[n],position:1}:e[n]={color:t[n],position:n*(1/(t.length-1))};return new y(e)}getColor(t,e=f.RGB){if(1===this.stops.length)return this.stops[0].color;if(t<=0)return this.stops[0].color;if(t>=1)return this.stops[this.stops.length-1].color;let n=0;for(let e=0;e<this.stops.length;e++)this.stops[e].position<=t&&(n=e);let i=n+1;i>=this.stops.length&&(i=this.stops.length-1);return m((t-this.stops[n].position)*(1/(this.stops[i].position-this.stops[n].position)),e,this.stops[n].color,this.stops[i].color)}trim(t,e,n=f.RGB){if(t<0||e>1||e<t)throw new Error("Invalid bounds");if(t===e)return new y([{color:this.getColor(t,n),position:0}]);const i=[];for(let n=0;n<this.stops.length;n++)this.stops[n].position>=t&&this.stops[n].position<=e&&i.push(this.stops[n]);if(0===i.length)return new y([{color:this.getColor(t),position:t},{color:this.getColor(e),position:e}]);i[0].position!==t&&i.unshift({color:this.getColor(t),position:t}),i[i.length-1].position!==e&&i.push({color:this.getColor(e),position:e});const r=e-t,o=new Array(i.length);for(let e=0;e<i.length;e++)o[e]={color:i[e].color,position:(i[e].position-t)/r};return new y(o)}findNextColor(t,e,n=!1,i=f.RGB,r=.005,o=32){isNaN(t)||t<=0?t=0:t>=1&&(t=1);const a=this.getColor(t,i),c=n?0:1,u=this.getColor(c,i);if((0,s.yN)(a,u)<=e)return c;let l=n?0:t,h=n?t:0,d=c,p=0;for(;p<=o;){d=Math.abs(h-l)/2+l;const t=this.getColor(d,i),o=(0,s.yN)(a,t);if(Math.abs(o-e)<=r)return d;o>e?n?l=d:h=d:n?h=d:l=d,p++}return d}clone(){const t=new Array(this.stops.length);for(let e=0;e<t.length;e++)t[e]={color:this.stops[e].color,position:this.stops[e].position};return new y(t)}sortColorScaleStops(t){return t.sort((t,e)=>{const n=t.position,i=e.position;return n<i?-1:n>i?1:0})}}var w=n(22870);class ${constructor(t){this.config=Object.assign({},$.defaultPaletteConfig,t),this.palette=[],this.updatePaletteColors()}updatePaletteGenerationValues(t){let e=!1;for(const n in t)this.config[n]&&(this.config[n].equalValue?this.config[n].equalValue(t[n])||(this.config[n]=t[n],e=!0):t[n]!==this.config[n]&&(this.config[n]=t[n],e=!0));return e&&this.updatePaletteColors(),e}updatePaletteColors(){const t=this.generatePaletteColorScale();for(let e=0;e<this.config.steps;e++)this.palette[e]=t.getColor(e/(this.config.steps-1),this.config.interpolationMode)}generatePaletteColorScale(){const t=(0,s.SU)(this.config.baseColor),e=new y([{position:0,color:this.config.scaleColorLight},{position:.5,color:this.config.baseColor},{position:1,color:this.config.scaleColorDark}]).trim(this.config.clipLight,1-this.config.clipDark);let n=e.getColor(0),i=e.getColor(1);if(t.s>=this.config.saturationAdjustmentCutoff&&(n=c(n,this.config.saturationLight),i=c(i,this.config.saturationDark)),0!==this.config.multiplyLight){const t=l(this.config.baseColor,n);n=m(this.config.multiplyLight,this.config.interpolationMode,n,t)}if(0!==this.config.multiplyDark){const t=l(this.config.baseColor,i);i=m(this.config.multiplyDark,this.config.interpolationMode,i,t)}if(0!==this.config.overlayLight){const t=d(this.config.baseColor,n);n=m(this.config.overlayLight,this.config.interpolationMode,n,t)}if(0!==this.config.overlayDark){const t=d(this.config.baseColor,i);i=m(this.config.overlayDark,this.config.interpolationMode,i,t)}return this.config.baseScalePosition?this.config.baseScalePosition<=0?new y([{position:0,color:this.config.baseColor},{position:1,color:i.clamp()}]):this.config.baseScalePosition>=1?new y([{position:0,color:n.clamp()},{position:1,color:this.config.baseColor}]):new y([{position:0,color:n.clamp()},{position:this.config.baseScalePosition,color:this.config.baseColor},{position:1,color:i.clamp()}]):new y([{position:0,color:n.clamp()},{position:.5,color:this.config.baseColor},{position:1,color:i.clamp()}])}}$.defaultPaletteConfig={baseColor:(0,w.Hs)("#808080"),steps:11,interpolationMode:f.RGB,scaleColorLight:new o.M(1,1,1,1),scaleColorDark:new o.M(0,0,0,1),clipLight:.185,clipDark:.16,saturationAdjustmentCutoff:.05,saturationLight:.35,saturationDark:1.25,overlayLight:0,overlayDark:.25,multiplyLight:0,multiplyDark:0,baseScalePosition:.5},$.greyscalePaletteConfig={baseColor:(0,w.Hs)("#808080"),steps:11,interpolationMode:f.RGB,scaleColorLight:new o.M(1,1,1,1),scaleColorDark:new o.M(0,0,0,1),clipLight:0,clipDark:0,saturationAdjustmentCutoff:0,saturationLight:0,saturationDark:0,overlayLight:0,overlayDark:0,multiplyLight:0,multiplyDark:0,baseScalePosition:.5};$.defaultPaletteConfig.scaleColorLight,$.defaultPaletteConfig.scaleColorDark;class x{constructor(t){this.palette=[],this.config=Object.assign({},x.defaultPaletteConfig,t),this.regenPalettes()}regenPalettes(){let t=this.config.steps;(isNaN(t)||t<3)&&(t=3);const e=.14,n=new o.M(e,e,e,1),i=new $(Object.assign(Object.assign({},$.greyscalePaletteConfig),{baseColor:n,baseScalePosition:86/94,steps:t})).palette,r=((0,s.s8)(this.config.baseColor)+(0,s.SU)(this.config.baseColor).l)/2,a=this.matchRelativeLuminanceIndex(r,i)/(t-1),c=this.matchRelativeLuminanceIndex(e,i)/(t-1),u=(0,s.SU)(this.config.baseColor),l=(0,s.QX)(p.D.fromObject({h:u.h,s:u.s,l:e})),h=(0,s.QX)(p.D.fromObject({h:u.h,s:u.s,l:.06})),d=new Array(5);d[0]={position:0,color:new o.M(1,1,1,1)},d[1]={position:a,color:this.config.baseColor},d[2]={position:c,color:l},d[3]={position:.99,color:h},d[4]={position:1,color:new o.M(0,0,0,1)};const v=new y(d);this.palette=new Array(t);for(let e=0;e<t;e++){const n=v.getColor(e/(t-1),f.RGB);this.palette[e]=n}}matchRelativeLuminanceIndex(t,e){let n=Number.MAX_VALUE,i=0,r=0;const o=e.length;for(;r<o;r++){const o=Math.abs((0,s.s8)(e[r])-t);o<n&&(n=o,i=r)}return i}}x.defaultPaletteConfig={baseColor:(0,w.Hs)("#808080"),steps:94};var k=n(5291);function C(t,e,n=0,i=t.length-1){if(i===n)return t[n];const r=Math.floor((i-n)/2)+n;return e(t[r])?C(t,e,n,r):C(t,e,r+1,i)}var S=n(68009),E=n(87989);const M=Object.freeze({create:t=>F.from(t)});class F{constructor(t,e){this.closestIndexCache=new Map,this.source=t,this.swatches=e,this.reversedSwatches=Object.freeze([...this.swatches].reverse()),this.lastIndex=this.swatches.length-1}colorContrast(t,e,n,i){void 0===n&&(n=this.closestIndexOf(t));let r=this.swatches;const o=this.lastIndex;let s=n;void 0===i&&(i=(0,S.F)(t));return-1===i&&(r=this.reversedSwatches,s=o-s),C(r,n=>(0,E.v)(t,n)>=e,s,o)}get(t){return this.swatches[t]||this.swatches[(0,r.qE)(t,0,this.lastIndex)]}closestIndexOf(t){if(this.closestIndexCache.has(t.relativeLuminance))return this.closestIndexCache.get(t.relativeLuminance);let e=this.swatches.indexOf(t);if(-1!==e)return this.closestIndexCache.set(t.relativeLuminance,e),e;const n=this.swatches.reduce((e,n)=>Math.abs(n.relativeLuminance-t.relativeLuminance)<Math.abs(e.relativeLuminance-t.relativeLuminance)?n:e);return e=this.swatches.indexOf(n),this.closestIndexCache.set(t.relativeLuminance,e),e}static from(t){return new F(t,Object.freeze(new x({baseColor:o.M.fromObject(t)}).palette.map(t=>{const e=(0,w.Hs)(t.toStringHexRGB());return k.q.create(e.r,e.g,e.b)})))}}},58168:function(t,e,n){"use strict";n.d(e,{s:function(){return l}});var i=n(58207),r=n(14777),o=n(62044),s=n(89449),a=n(6608),c=n(13023),u="getPlugin",l=function(){function t(){var e,n,l,h,d,f=this;function p(t){void 0===t&&(t=null);var e=t;if(!e){var i=n||(0,a.i8)(null,{},f[s.eT]);e=l&&l[u]?i[r.$o](null,l[u]):i[r.$o](null,l)}return e}function v(t,e,i){t&&(0,o.KY)(t,s.Bw,[],null,o.hX),!i&&e&&(i=e[r.ps]()[r.uR]());var c=l;l&&l[u]&&(c=l[u]()),f[s.eT]=e,n=(0,a.i8)(i,t,e,c)}function g(){e=!1,f[s.eT]=null,n=null,l=null,d=[],h=(0,c.P)()}g(),(0,i.A)(t,f,function(t){t[r.mE]=function(t,n,i,r){v(t,n,r),e=!0},t[r.Ik]=function(e,n){var i,c=t[s.eT];if(c&&(!e||c===e[s.eT]())){var f,p=!1,v=e||(0,a.tS)(null,c,l&&l[u]?l[u]():l),b=n||((i={reason:0})[r.tI]=!1,i);return t[r.tn]&&!0===t[r.tn](v,b,m)?f=!0:m(),f}function m(){if(!p){p=!0,h.run(v,n);var t=d;d=[],(0,o.Iu)(t,function(t){t.rm()}),!0===f&&v[r.$5](b),g()}}},t[r.HC]=function(e,n){var i=t[s.eT];if(i&&(!e||i===e[s.eT]())){var o,c=!1,h=e||(0,a.nU)(null,i,l&&l[u]?l[u]():l),d=n||{reason:0};return t._doUpdate&&!0===t._doUpdate(h,d,f)?o=!0:f(),o}function f(){c||(c=!0,v(h.getCfg(),h.core(),h[r.uR]()))}},t._addHook=function(t){t&&((0,o.cy)(t)?d=d.concat(t):d[r.y5](t))},(0,o.RF)(t,"_addUnloadCb",function(){return h},"add")}),f[r.e4]=function(t){return p(t)[r.e4]()},f[r.tZ]=function(){return e},f.setInitialized=function(t){e=t},f[r.YH]=function(t){l=t},f[r.$5]=function(t,e){e?e[r.$5](t):l&&(0,o.Tn)(l[s.qT])&&l[s.qT](t,null)},f._getTelCtx=p}return t.__ieDyn=1,t}()},58207:function(t,e,n){"use strict";var i;n.d(e,{A:function(){return P}});var r="undefined",o="constructor",s="prototype",a="function",c="_dynInstFuncs",u="_isDynProxy",l="_dynClass",h="_dynCls$",d="_dynInstChk",f=d,p="_dfOpts",v="_unknown_",g="__proto__",b="_dyn"+g,m="__dynProto$Gbl",y="_dynInstProto",w="useBaseInst",$="setInstFuncs",x=Object,k=x.getPrototypeOf,C=x.getOwnPropertyNames;var S,E=(typeof globalThis!==r&&(S=globalThis),S||typeof self===r||(S=self),S||typeof window===r||(S=window),S||typeof n.g===r||(S=n.g),S||{}),M=E[m]||(E[m]={o:(i={},i[$]=!0,i[w]=!0,i),n:1e3});function F(t,e){return t&&x[s].hasOwnProperty.call(t,e)}function D(t){return t&&(t===x[s]||t===Array[s])}function O(t){return D(t)||t===Function[s]}function A(t){var e;if(t){if(k)return k(t);var n=t[g]||t[s]||(t[o]?t[o][s]:null);e=t[b]||n,F(t,b)||(delete t[y],e=t[b]=t[y]||t[b],t[y]=n)}return e}function T(t,e){var n=[];if(C)n=C(t);else for(var i in t)"string"==typeof i&&F(t,i)&&n.push(i);if(n&&n.length>0)for(var r=0;r<n.length;r++)e(n[r])}function I(t,e,n){return e!==o&&typeof t[e]===a&&(n||F(t,e))&&e!==g&&e!==s}function B(t){throw new TypeError("DynamicProto: "+t)}function N(){return Object.create?(t=null,(e=Object.create)?e(t):{}):{};var t,e}function R(t,e){for(var n=t.length-1;n>=0;n--)if(t[n]===e)return!0;return!1}function L(t,e,n,i,r){function o(t,e){var n=function(){var i=function(t,e,n,i){var r=null;if(t&&F(n,l)){var o=t[c]||N();if((r=(o[n[l]]||N())[e])||B("Missing ["+e+"] "+a),!r[d]&&!1!==o[f]){for(var s=!F(t,e),u=A(t),h=[];s&&u&&!O(u)&&!R(h,u);){var p=u[e];if(p){s=p===i;break}h.push(u),u=A(u)}try{s&&(t[e]=r),r[d]=1}catch(t){o[f]=!1}}}return r}(this,e,t,n)||function(t,e,n){var i=e[t];return i===n&&(i=A(e)[t]),typeof i!==a&&B("["+t+"] is not a "+a),i}(e,t,n);return i.apply(this,arguments)};return n[u]=1,n}if(!D(t)){var s=n[c]=n[c]||N();if(!D(s)){var h=s[e]=s[e]||N();!1!==s[f]&&(s[f]=!!r),D(h)||T(n,function(e){I(n,e,!1)&&n[e]!==i[e]&&(h[e]=n[e],delete n[e],(!F(t,e)||t[e]&&!t[e][u])&&(t[e]=o(t,e)))})}}}function j(t,e){return F(t,s)?t.name||e||v:((t||{})[o]||{}).name||e||v}function P(t,e,n,i){F(t,s)||B("theClass is an invalid class definition.");var r=t[s];(function(t,e){if(k){for(var n=[],i=A(e);i&&!O(i)&&!R(n,i);){if(i===t)return!0;n.push(i),i=A(i)}return!1}return!0})(r,e)||B("["+j(t)+"] not in hierarchy of ["+j(e)+"]");var o=null;F(r,l)?o=r[l]:(o=h+j(t,"_")+"$"+M.n,M.n++,r[l]=o);var a=P[p],d=!!a[w];d&&i&&void 0!==i[w]&&(d=!!i[w]);var v=function(t){var e=N();return T(t,function(n){!e[n]&&I(t,n,!1)&&(e[n]=t[n])}),e}(e),g=function(t,e,n,i){function r(t,e,n){var r=e[n];if(r[u]&&i){var o=t[c]||{};!1!==o[f]&&(r=(o[e[l]]||{})[n]||r)}return function(){return r.apply(t,arguments)}}var o=N();T(n,function(t){o[t]=r(e,n,t)});for(var s=A(t),a=[];s&&!O(s)&&!R(a,s);)T(s,function(t){!o[t]&&I(s,t,!k)&&(o[t]=r(e,s,t))}),a.push(s),s=A(s);return o}(r,e,v,d);n(e,g);var b=!!k&&!!a[$];b&&i&&(b=!!i[$]),L(r,o,e,v,!1!==b)}P[p]=M.o},58625:function(t,e,n){"use strict";n.d(e,{T:function(){return v},Z:function(){return p}});var i=n(15454),r=n(14777),o=n(62044),s=n(89449),a=n(69912),c=i.KU,u="2.8.9",l="."+(0,a.Si)(6),h=0;function d(t){return 1===t[r.re]||9===t[r.re]||!+t[r.re]}function f(t,e){var n=e[t.id];if(!n){n={};try{d(e)&&(function(t,e,n){if(c)try{return c(t,e,{value:n,enumerable:!1,configurable:!0}),!0}catch(t){}return!1}(e,t.id,n)||(e[t.id]=n))}catch(t){}}return n}function p(t,e){return void 0===e&&(e=!1),(0,o.cH)(t+h+++(e?"."+u:s.m5)+l)}function v(t){var e={id:p("_aiData-"+(t||s.m5)+"."+u),accept:function(t){return d(t)},get:function(t,n,i,r){var s=t[e.id];return s?s[(0,o.cH)(n)]:(r&&((s=f(e,t))[(0,o.cH)(n)]=i),i)},kill:function(t,e){if(t&&t[e])try{delete t[e]}catch(t){}}};return e}},58976:function(t,e,n){"use strict";n.d(e,{C:function(){return o}});var i=n(96751),r=n(97482);class o extends i.I{connectedCallback(){super.connectedCallback(),"mobile"!==this.view&&this.$fastController.addStyles(r.g)}}},60402:function(t,e,n){"use strict";n.d(e,{K:function(){return o}});var i=n(29194);class r extends i.Yi{bind(t){t.source[this.options]=t.targets[this.targetNodeId]}}i.dg.define(r);const o=t=>new r(t)},60815:function(t,e,n){"use strict";n.d(e,{Jg:function(){return l},Nx:function(){return a},ao:function(){return d},cP:function(){return c},sH:function(){return u}});var i=n(96293),r=n(19470),o=n(23429),s=n(93800);const a=Object.freeze({unknown:void 0,coupled:1}),c=r.Zx.getById(i.uL.observable,()=>{const t=o.L.enqueue,e=/(:|&&|\|\||if|\?\.)/,n=new WeakMap;let c,u=t=>{throw r.Zx.error(1101)};function l(t){var e;let i=null!==(e=t.$fastController)&&void 0!==e?e:n.get(t);return void 0===i&&(Array.isArray(t)?i=u(t):n.set(t,i=new s.S(t))),i}const h=(0,r.iX)();class d{constructor(t){this.name=t,this.field=`_${t}`,this.callback=`${t}Changed`}getValue(t){return void 0!==c&&c.watch(t,this.name),t[this.field]}setValue(t,e){const n=this.field,r=t[n];if(r!==e){t[n]=e;const o=t[this.callback];(0,i.Tn)(o)&&o.call(t,r,e),l(t).notify(this.name)}}}class f extends s.l{constructor(t,e,n=!1){super(t,e),this.expression=t,this.isVolatileBinding=n,this.needsRefresh=!0,this.needsQueue=!0,this.isAsync=!0,this.first=this,this.last=null,this.propertySource=void 0,this.propertyName=void 0,this.notifier=void 0,this.next=void 0}setMode(t){this.isAsync=this.needsQueue=t}bind(t){this.controller=t;const e=this.observe(t.source,t.context);return!t.isBound&&this.requiresUnbind(t)&&t.onUnbind(this),e}requiresUnbind(t){return t.sourceLifetime!==a.coupled||this.first!==this.last||this.first.propertySource!==t.source}unbind(t){this.dispose()}observe(t,e){this.needsRefresh&&null!==this.last&&this.dispose();const n=c;let i;c=this.needsRefresh?this:void 0,this.needsRefresh=this.isVolatileBinding;try{i=this.expression(t,e)}finally{c=n}return i}disconnect(){this.dispose()}dispose(){if(null!==this.last){let t=this.first;for(;void 0!==t;)t.notifier.unsubscribe(this,t.propertyName),t=t.next;this.last=null,this.needsRefresh=this.needsQueue=this.isAsync}}watch(t,e){const n=this.last,i=l(t),r=null===n?this.first:{};if(r.propertySource=t,r.propertyName=e,r.notifier=i,i.subscribe(this,e),null!==n){if(!this.needsRefresh){let e;c=void 0,e=n.propertySource[n.propertyName],c=this,t===e&&(this.needsRefresh=!0)}n.next=r}this.last=r}handleChange(){this.needsQueue?(this.needsQueue=!1,t(this)):this.isAsync||this.call()}call(){null!==this.last&&(this.needsQueue=this.isAsync,this.notify(this))}*records(){let t=this.first;for(;void 0!==t;)yield t,t=t.next}}return(0,r.rV)(f),Object.freeze({setArrayObserverFactory(t){u=t},getNotifier:l,track(t,e){c&&c.watch(t,e)},trackVolatile(){c&&(c.needsRefresh=!0)},notify(t,e){l(t).notify(e)},defineProperty(t,e){(0,i.Kg)(e)&&(e=new d(e)),h(t).push(e),Reflect.defineProperty(t,e.name,{enumerable:!0,get(){return e.getValue(this)},set(t){e.setValue(this,t)}})},getAccessors:h,binding(t,e,n=this.isVolatileBinding(t)){return new f(t,e,n)},isVolatileBinding:t=>e.test(t.toString())})});function u(t,e){c.defineProperty(t,e)}function l(t,e,n){return Object.assign({},n,{get(){return c.trackVolatile(),n.get.apply(this)}})}const h=r.Zx.getById(i.uL.contextEvent,()=>{let t=null;return{get:()=>t,set(e){t=e}}}),d=Object.freeze({default:{index:0,length:0,get event(){return d.getEvent()},eventDetail(){return this.event.detail},eventTarget(){return this.event.target}},getEvent:()=>h.get(),setEvent(t){h.set(t)}})},60993:function(t,e,n){"use strict";n.d(e,{Z:function(){return i}});const i="not-allowed"},61138:function(t,e,n){"use strict";n.d(e,{F:function(){return s},k:function(){return o}});var i=n(68136);const{create:r}=i.G,o=r("type-ramp-minus-1-font-size","12px"),s=r("type-ramp-minus-1-line-height","16px")},61201:function(t,e,n){"use strict";n.d(e,{c:function(){return a}});var i=n(68136),r=n(57606),o=n(86627);const{create:s}=i.G,a=s({name:"accent-palette"},r.p.create(o.Eq))},61484:function(t,e,n){"use strict";n.d(e,{p:function(){return a}});var i=n(74849),r=n(57416),o=n(4283),s=n(26920);const a=i.A`
    :host([appearance="filled"]:not([disabled]):active)::after,
    :host([appearance="filled"]:not([disabled]):focus-within:not(:active))::after {
        content: "";
        position: absolute;
        bottom: 0;
        border-bottom: calc(${s.vd} * 1px) solid ${o.IR};
        border-bottom-left-radius: calc(${r.Pb} * 1px);
        border-bottom-right-radius: calc(${r.Pb} * 1px);
        z-index: 2;
        transition: all 300ms cubic-bezier(0.1, 0.9, 0.2, 1);
    }

    :host([appearance="filled"]:not([disabled]):active)::after {
        left: 50%;
        width: 40%;
        transform: translateX(-50%);
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
    }

    :host([appearance="filled"]:not([disabled]):focus-within:not(:active))::after {
        left: 0;
        width: 100%;
    }
`},61607:function(t,e,n){"use strict";n.d(e,{oq:function(){return d}});var i=n(41667);function r(t,...e){return n=>e.reduce((t,e,i)=>t.replace(new RegExp(`\\{${i}\\}`,"g"),e(n)),t)}function o(t){return(0,i.A)(t)?`${t} !important`:e=>o(t(e))}var s=n(87944),a=n(76989),c=n(93333);function u(){return(0,c.S)()&&(window.matchMedia("(forced-colors: none)").matches||window.matchMedia("(forced-colors: active)").matches)}var l=n(6711);const h="@media (-ms-high-contrast:active)";var d;!function(t){t.text="WindowText",t.forcedColorLink="LinkText",t.msLink="-ms-hotlight",t.disabledText="GrayText",t.selectedText="HighlightText",t.selectedBackground="Highlight",t.buttonText="ButtonText",t.buttonBackground="ButtonFace",t.background="Window"}(d||(d={}));const f={"-ms-high-contrast-adjust":"none"};const p=u()?"LinkText !important":"-ms-hotlight !important";Object.assign({background:d.buttonBackground,border:"none",color:d.buttonText,fill:d.buttonText},f),Object.assign({background:d.buttonBackground,"border-color":d.buttonText,color:d.buttonText,fill:d.buttonText},f),Object.assign({background:d.selectedBackground,"border-color":d.selectedBackground,color:d.selectedText,fill:d.selectedText},f),d.background,o(d.buttonBackground),o(d.disabledText),o(d.disabledText),o(d.buttonBackground),o(d.disabledText),o(d.disabledText),o(d.disabledText),o(d.disabledText),o(d.disabledText),o(d.disabledText),d.buttonText,r("0 0 0 {0} inset {1}",(0,s.c)(l.FX),()=>d.buttonText),r("0 0 0 2px Background, 0 0 0 {0} {1}",(0,s.c)((0,a.WQ)(l.$P,2)),()=>d.buttonText),o(d.buttonText),r("0 0 0 {0} inset {1}",(0,s.c)(l.$P),()=>d.buttonBackground),d.selectedBackground,d.selectedText,d.selectedText,d.selectedText,d.selectedBackground,d.selectedBackground,d.selectedBackground,o(d.text),o(d.text),o(d.buttonText),o(d.buttonText),o(d.selectedText),o(d.selectedText),o(d.selectedBackground),o(d.selectedBackground),r("{0} solid {1}",(0,s.c)(l.FX),()=>d.text),d.buttonText,d.buttonBackground,r("0 0 0 {0} inset {1}",(0,s.c)(l.FX),()=>p),d.background,d.buttonText,d.buttonBackground,d.selectedText,d.selectedBackground,d.buttonBackground,d.selectedText,d.selectedBackground,d.selectedText},61963:function(t,e,n){"use strict";n.d(e,{t:function(){return o},x:function(){return r}});const i=(0,n(19470).Mg)(),r=Object.freeze({getForInstance:i.getForInstance,getByType:i.getByType,define:t=>(i.register({type:t}),t)});function o(){return function(t){r.define(t)}}},62036:function(t,e,n){"use strict";n.d(e,{W:function(){return r},f:function(){return o}});var i=n(68009);function r(t,e){return t.colorContrast(e,3.5)}function o(t,e,n){return t.colorContrast(n,3.5,t.closestIndexOf(t.source),-1*(0,i.F)(e))}},62044:function(t,e,n){"use strict";n.d(e,{$8:function(){return bt},$P:function(){return W},CP:function(){return xt},Cv:function(){return _},EH:function(){return it},Ed:function(){return I},Et:function(){return X},Gh:function(){return R},Gv:function(){return j},Iu:function(){return Y},Ju:function(){return U},KT:function(){return nt},KY:function(){return ft},Kg:function(){return K},Lm:function(){return J},N6:function(){return lt},RF:function(){return yt},SA:function(){return vt},Tn:function(){return P},W$:function(){return et},_u:function(){return Q},b0:function(){return B},bJ:function(){return G},c2:function(){return pt},cG:function(){return st},cH:function(){return z},cy:function(){return q},hW:function(){return $t},hX:function(){return N},lL:function(){return dt},mQ:function(){return L},o$:function(){return wt},ol:function(){return ut},r:function(){return at},rD:function(){return tt},tG:function(){return V},x3:function(){return ht},z:function(){return H},zz:function(){return gt}});var i=n(15454),r=n(50090),o=n(14777),s=n(89449),a="toISOString",c="endsWith",u="startsWith",l="indexOf",h="map",d="reduce",f="trim",p="toString",v="__proto__",g="constructor",b=i.KU,m=i.s6.freeze,y=(i.s6.seal,i.s6.keys),w=String[i.vR],$=w[f],x=w[c],k=w[u],C=Date[i.vR][a],S=Array.isArray,E=i.Wy[p],M=i.J$[p],F=M[o.Ek](i.s6),D=/-([a-z])/g,O=/([^\w\d_$])/g,A=/^(\d+[\w\d_$])/,T=Object.getPrototypeOf;function I(t,e){return typeof t===e}function B(t){return void 0===t||typeof t===i.bA}function N(t){return null===t||B(t)}function R(t){return!N(t)}function L(t,e){return!(!t||!i.J$[o.Ek](t,e))}function j(t){return!(!t||typeof t!==i._1)}function P(t){return!(!t||typeof t!==i.hW)}function z(t){var e=t;return e&&K(e)&&(e=(e=(e=e[o.W7](D,function(t,e){return e.toUpperCase()}))[o.W7](O,"_"))[o.W7](A,function(t,e){return"_"+e})),e}function H(t,e){if(t)for(var n in t)i.J$[o.Ek](t,n)&&e[o.Ek](t,n,t[n])}function _(t,e){var n=!1;return t&&e&&!(n=t===e)&&(n=x?t[c](e):function(t,e){var n=!1,i=e?e[o.oI]:0,r=t?t[o.oI]:0;if(i&&r&&r>=i&&!(n=t===e)){for(var s=r-1,a=i-1;a>=0;a--){if(t[s]!=e[a])return!1;s--}n=!0}return n}(t,e)),n}function V(t,e){var n=!1;return t&&e&&!(n=t===e)&&(n=k?t[u](e):function(t,e){var n=!1,i=e?e[o.oI]:0;if(t&&i&&t[o.oI]>=i&&!(n=t===e)){for(var r=0;r<i;r++)if(t[r]!==e[r])return!1;n=!0}return n}(t,e)),n}function U(t,e){return!(!t||!e)&&-1!==t[o.Sj](e)}function W(t){return!(!t||"[object Date]"!==E[o.Ek](t))}var q=S||function(t){return!(!t||"[object Array]"!==E[o.Ek](t))};function G(t){return!(!t||"[object Error]"!==E[o.Ek](t))}function K(t){return"string"==typeof t}function X(t){return"number"==typeof t}function J(t){return"boolean"==typeof t}function Z(t){var e=!1;if(t&&"object"==typeof t){var n=T?T(t):function(t){if(t){if(T)return T(t);var e=t[v]||t[i.vR]||t[g];if(e)return e}return null}(t);n?(n[g]&&i.J$[o.Ek](n,g)&&(n=n[g]),e=typeof n===i.hW&&M[o.Ek](n)===F):e=!0}return e}function Q(t){if(t)return C?t[a]():function(t){if(t&&t.getUTCFullYear){var e=function(t){var e=String(t);return 1===e[o.oI]&&(e="0"+e),e};return t.getUTCFullYear()+"-"+e(t.getUTCMonth()+1)+"-"+e(t.getUTCDate())+"T"+e(t.getUTCHours())+":"+e(t.getUTCMinutes())+":"+e(t.getUTCSeconds())+"."+String((t.getUTCMilliseconds()/1e3).toFixed(3)).slice(2,5)+"Z"}}(t)}function Y(t,e,n){var i=t[o.oI];try{for(var r=0;r<i&&(!(r in t)||-1!==e[o.Ek](n||t,t[r],r,t));r++);}catch(t){}}function tt(t,e,n){if(t){if(t[l])return t[l](e,n);var i=t[o.oI],r=n||0;try{for(var s=Math.max(r>=0?r:i-Math.abs(r),0);s<i;s++)if(s in t&&t[s]===e)return s}catch(t){}}return-1}function et(t,e,n){var i;if(t){if(t[h])return t[h](e,n);var r=t[o.oI],s=n||t;i=new Array(r);try{for(var a=0;a<r;a++)a in t&&(i[a]=e[o.Ek](s,t[a],t))}catch(t){}}return i}function nt(t,e,n){var i;if(t){if(t[d])return t[d](e,n);var r=t[o.oI],s=0;if(arguments[o.oI]>=3)i=n;else{for(;s<r&&!(s in t);)s++;i=t[s++]}for(;s<r;)s in t&&(i=e(i,t[s],s,t)),s++}return i}function it(t){return t&&(t=$&&t[f]?t[f]():t[o.W7]?t[o.W7](/^\s+|(?=\s)\s+$/g,s.m5):t),t}var rt=!{toString:null}.propertyIsEnumerable("toString"),ot=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];function st(t){var e=typeof t;if(e===i.hW||e===i._1&&null!==t||(0,r.zk)("objKeys called on non-object"),!rt&&y)return y(t);var n=[];for(var s in t)t&&i.J$[o.Ek](t,s)&&n[o.y5](s);if(rt)for(var a=ot[o.oI],c=0;c<a;c++)t&&i.J$[o.Ek](t,ot[c])&&n[o.y5](ot[c]);return n}function at(t,e,n,i){if(b)try{var r={enumerable:!0,configurable:!0};return n&&(r.get=n),i&&(r.set=i),b(t,e,r),!0}catch(t){}return!1}function ct(t){return t}function ut(t){return m&&H(t,function(t,e){(q(e)||j(e))&&m(e)}),lt(t)}var lt=m||ct;function ht(){var t=Date;return t.now?t.now():(new t).getTime()}function dt(t){return G(t)?t[o.RS]:s.m5}function ft(t,e,n,i,r){var o=n;return t&&((o=t[e])===n||r&&!r(o)||i&&!i(n)||(o=n,t[e]=o)),o}function pt(t,e,n){var i;return t?!(i=t[e])&&N(i)&&(i=B(n)?{}:n,t[e]=i):i=B(n)?{}:n,i}function vt(t,e){return N(t)?e:t}function gt(t){return!!t}function bt(t){throw new Error(t)}function mt(t,e){var n=null,i=null;return P(t)?n=t:i=t,function(){var t=arguments;if(n&&(i=n()),i)return i[e][o.y9](i,t)}}function yt(t,e,n,i,r){t&&e&&n&&(!1!==r||B(t[e]))&&(t[e]=mt(n,i))}function wt(t,e,n,i){return t&&e&&j(t)&&q(n)&&Y(n,function(n){K(n)&&yt(t,n,e,n,i)}),t}function $t(t){return t&&i.zi&&(t=(0,i.s6)((0,i.zi)({},t))),t}function xt(t,e,n,r,s,a){var c=arguments,u=c[0]||{},l=c[o.oI],h=!1,d=1;for(l>0&&J(u)&&(h=u,u=c[d]||{},d++),j(u)||(u={});d<l;d++){var f=c[d],p=q(f),v=j(f);for(var g in f){if(p&&g in f||v&&i.J$[o.Ek](f,g)){var b=f[g],m=void 0;if(h&&b&&((m=q(b))||Z(b))){var y=u[g];m?q(y)||(y=[]):Z(y)||(y={}),b=xt(h,y,b)}void 0!==b&&(u[g]=b)}}}return u}},62047:function(t,e,n){"use strict";n.d(e,{e:function(){return s},t:function(){return o}});var i=n(68136);const{create:r}=i.G,o=r("type-ramp-minus-2-font-size","10px"),s=r("type-ramp-minus-2-line-height","14px")},62198:function(t,e,n){"use strict";n.d(e,{a:function(){return o},b:function(){return s}});var i=n(68136);const{create:r}=i.G,o=r("type-ramp-plus-3-font-size","24px"),s=r("type-ramp-plus-3-line-height","32px")},62292:function(t,e,n){"use strict";n.d(e,{k:function(){return s}});var i=n(42277),r=n(68244),o=n(41097);const s=r.F.create({trustedType:{createHTML:t=>(0,o.v)(t,"svgPassThroughPolicy")},guards:{aspects:{[i.D.property]:{innerHTML:(t,e,n,i)=>function(t,e,n){for(var r=arguments.length,s=new Array(r>3?r-3:0),a=3;a<r;a++)s[a-3]=arguments[a];i(t,e,(0,o.v)(n,"svgPassThroughPolicy"),...s)}}}}})},63563:function(t){t.exports='<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M5 8a1 1 0 11-2 0 1 1 0 012 0zm4 0a1 1 0 11-2 0 1 1 0 012 0zm3 1a1 1 0 100-2 1 1 0 000 2z"></path></svg>'},64003:function(t,e,n){"use strict";n.d(e,{c:function(){return c},g:function(){return a}});var i=n(68136);var r=n(95239),o=n(31023);const{create:s}=i.G,a=s({name:"neutral-foreground-hint-recipe"},{evaluate:t=>{return e=t(o.r),n=t(r.p),e.colorContrast(n,4.5);var e,n}}),c=s("neutral-foreground-hint",t=>t(a).evaluate(t))},64187:function(t,e,n){"use strict";n.d(e,{V:function(){return r}});const i=":host([hidden]){display:none}";function r(t){return`${i}:host{display:${t}}`}},64332:function(t,e,n){"use strict";n.d(e,{DI:function(){return y},cH:function(){return H},WQ:function(){return k}});var i=n(19470);if(!("metadata"in Reflect)){const t=new Map;Reflect.metadata=function(t,e){return function(n){Reflect.defineMetadata(t,e,n)}},Reflect.defineMetadata=function(e,n,i){let r=t.get(i);void 0===r&&t.set(i,r=new Map),r.set(e,n)},Reflect.getOwnMetadata=function(e,n){const i=t.get(n);if(void 0!==i)return i.get(e)}}const r="annotation:paramtypes",o=Object.freeze({getDesignParamTypes:t=>{var e;return null!==(e=Reflect.getOwnMetadata("design:paramtypes",t))&&void 0!==e?e:i.tR},getAnnotationParamTypes:t=>{var e;return null!==(e=Reflect.getOwnMetadata(r,t))&&void 0!==e?e:i.tR},getOrCreateAnnotationParamTypes(t){let e=this.getAnnotationParamTypes(t);return e===i.tR&&Reflect.defineMetadata(r,e=[],t),e}}),s=new Map,a="context-request";let c;const u=Object.freeze({eventType:a,for(t){let e=s.get(t);return void 0===e&&(e=u.create(t),s.set(t,e)),e},create(t,e){const n=function(t,e,r){if(null==t||void 0!==new.target)throw i.Zx.error(1501,{name:n.name});if(e)u.defineProperty(t,e,n);else{o.getOrCreateAnnotationParamTypes(t)[r]=n}};return n.$isInterface=!0,n.initialValue=e,Reflect.defineProperty(n,"name",{value:t}),n.handle=(t,e)=>u.handle(t,e,n),n.provide=(t,e)=>u.provide(t,n,e),n.get=t=>u.get(t,n),n.request=(t,e,i)=>u.request(t,n,e,i),n.toString=()=>`Context<${n.name}>`,n},setDefaultRequestStrategy(t){c=t},get(t,e){var n;let i;return c(t,e,t=>i=t,!1),null!==(n=i)&&void 0!==n?n:e.initialValue},request(t,e,n,i=!1){c(t,e,n,i)},dispatch(t,e,n,i=!1){t.dispatchEvent(new l(e,n,i))},provide(t,e,n){u.handle(t,t=>{t.stopImmediatePropagation(),t.callback(n)},e)},handle(t,e,n){n?t.addEventListener(a,t=>{t.context===n&&e(t)}):t.addEventListener(a,e)},defineProperty(t,e,n){const i=Symbol.for(`fast:di:${e}`);Reflect.defineProperty(t,e,{get:function(){var t;return null!==(t=this[i])&&void 0!==t?t:this[i]=u.get(this,n)}})}});u.setDefaultRequestStrategy(u.dispatch);class l extends Event{constructor(t,e,n){super(a,{bubbles:!0,composed:!0}),this.context=t,this.callback=e,this.multiple=n}}class h{constructor(t,e){this.container=t,this.key=e}instance(t){return this.registerResolver(0,t)}singleton(t){return this.registerResolver(1,t)}transient(t){return this.registerResolver(2,t)}callback(t){return this.registerResolver(3,t)}cachedCallback(t){return this.registerResolver(3,z(t))}aliasTo(t){return this.registerResolver(5,t)}registerResolver(t,e){const{container:n,key:i}=this;return this.container=this.key=void 0,n.registerResolver(i,new F(i,t,e))}}function d(t){const e=t.slice(),n=Object.keys(t),i=n.length;let r;for(let o=0;o<i;++o)r=n[o],K(r)||(e[r]=t[r]);return e}const f=Object.freeze({none(t){throw i.Zx.error(1512,{key:t})},singleton:t=>new F(t,1,t),transient:t=>new F(t,2,t)}),p=Object.freeze({default:Object.freeze({parentLocator:()=>null,asyncRegistrationLocator:async()=>null,responsibleForOwnerRequests:!1,defaultResolver:f.singleton})});const v=new Map,g=new WeakMap;let b=null,m=0;const y=Object.freeze({installAsContextRequestStrategy(t){u.setDefaultRequestStrategy((e,n,i)=>{i(y.findResponsibleContainer(e,t).get(n))})},createContainer:t=>new j(null,Object.assign({},p.default,t)),findResponsibleContainer(t,e){const n=t.$$container$$;return n&&n.responsibleForOwnerRequests?n:y.findParentContainer(t,e)},findParentContainer(t,e){if(m<1)return e?e():y.getOrCreateDOMContainer();let n;return u.dispatch(t,$,t=>n=t),null!=n?n:e?e():y.getOrCreateDOMContainer()},getOrCreateDOMContainer(t,e){if(!t)return"undefined"!=typeof window?(g.has(window)||g.set(window,new j(window,Object.assign({},p.default,e,{parentLocator:()=>null}))),g.get(window)):b||(b=new j(null,Object.assign({},p.default,e,{parentLocator:()=>null})));let n=t.$$container$$;return void 0===n&&(m++,n=new j(t,Object.assign({},p.default,e,{parentLocator:y.findParentContainer}))),n},getDependencies(t){let e=v.get(t);if(void 0===e){const n=t.inject;if(void 0===n){const n=o.getDesignParamTypes(t),r=o.getAnnotationParamTypes(t);if(n===i.tR)if(r===i.tR){const n=Object.getPrototypeOf(t);e="function"==typeof n&&n!==Function.prototype?d(y.getDependencies(n)):[]}else e=d(r);else if(r===i.tR)e=d(n);else{e=d(n);let t,i=r.length;for(let n=0;n<i;++n)t=r[n],void 0!==t&&(e[n]=t);const o=Object.keys(r);let s;i=o.length;for(let t=0;t<i;++t)s=o[t],K(s)||(e[s]=r[s])}}else e=d(n);v.set(t,e)}return e},defineProperty(t,e,n,r=!1){const o=Symbol.for(`fast:di:${e}`);Reflect.defineProperty(t,e,{get:function(){let t=this[o];if(void 0===t){const s=this instanceof Node?y.findResponsibleContainer(this):y.getOrCreateDOMContainer();if(t=s.get(n),this[o]=t,r){const r=this.$fastController;if(!r)throw i.Zx.error(1514);const s=()=>{y.findResponsibleContainer(this).get(n)!==this[o]&&(this[o]=t,r.notify(e))};r.subscribe({handleChange:s},"isConnected")}}return t}})},createContext:function(t,e){const n="function"==typeof t?t:e,r="string"==typeof t?t:t&&"friendlyName"in t&&t.friendlyName||U,s="string"!=typeof t&&(t&&"respectConnection"in t&&t.respectConnection||!1),a=function(t,e,n){if(null==t||void 0!==new.target)throw i.Zx.error(1501,{name:a.name});if(e)y.defineProperty(t,e,a,s);else{o.getOrCreateAnnotationParamTypes(t)[n]=a}};return a.$isInterface=!0,Reflect.defineProperty(a,"name",{value:null!=r?r:U}),null!=n&&(a.register=function(t,e){return n(new h(t,null!=e?e:a))}),a.toString=function(){return`DIContext<${a.name}>`},a},inject:(...t)=>function(e,n,i){if("number"==typeof i){const n=o.getOrCreateAnnotationParamTypes(e),r=t[0];void 0!==r&&(n[i]=r)}else if(n)y.defineProperty(e,n,t[0]);else{const n=i?o.getOrCreateAnnotationParamTypes(i.value):o.getOrCreateAnnotationParamTypes(e);let r;for(let e=0;e<t.length;++e)r=t[e],void 0!==r&&(n[e]=r)}},transient:t=>(t.register=function(e){return H.transient(t,t).register(e)},t.registerInRequestor=!1,t),singleton:(t,e=C)=>(t.register=function(e){return H.singleton(t,t).register(e)},t.registerInRequestor=e.scoped,t)}),w=y.createContext("Container"),$=w;function x(t){return function(e){const n=function(t,e,i){y.inject(n)(t,e,i)};return n.$isResolver=!0,n.resolve=function(n,i){return t(e,n,i)},n}}const k=y.inject;const C={scoped:!1};S=(t,e,n,i)=>n.getAll(t,i);var S;x((t,e,n)=>()=>n.get(t)),x((t,e,n)=>n.has(t,!0)?n.get(t):void 0);function E(t,e,n){y.inject(E)(t,e,n)}E.$isResolver=!0,E.resolve=()=>{};x((t,e,n)=>{const i=M(t,e),r=new F(t,0,i);return n.registerResolver(t,r),i}),x((t,e,n)=>M(t,e));function M(t,e){return e.getFactory(t).construct(e)}class F{constructor(t,e,n){this.key=t,this.strategy=e,this.state=n,this.resolving=!1}get $isResolver(){return!0}register(t){return t.registerResolver(this.key,this)}resolveAsync(t,e){switch(this.strategy){case 1:if(this.resolving)throw i.Zx.error(1513,{name:this.state.name});return this.resolving=!0,t.getFactory(this.state).constructAsync(e).then(t=>(this.state=t,this.strategy=0,this.resolving=!1,t));case 2:{const n=t.getFactory(this.state);if(null===n)throw i.Zx.error(1502,{key:this.key});return n.constructAsync(e)}default:return Promise.resolve(this.resolve(t,e))}}resolve(t,e){switch(this.strategy){case 0:return this.state;case 1:if(this.resolving)throw i.Zx.error(1513,{name:this.state.name});return this.resolving=!0,this.state=t.getFactory(this.state).construct(e),this.strategy=0,this.resolving=!1,this.state;case 2:{const n=t.getFactory(this.state);if(null===n)throw i.Zx.error(1502,{key:this.key});return n.construct(e)}case 3:return this.state(t,e,this);case 4:return this.state[0].resolve(t,e);case 5:return e.get(this.state);default:throw i.Zx.error(1503,{strategy:this.strategy})}}getFactory(t){var e,n,i;switch(this.strategy){case 1:case 2:return t.getFactory(this.state);case 5:return null!==(i=null===(n=null===(e=t.getResolver(this.state))||void 0===e?void 0:e.getFactory)||void 0===n?void 0:n.call(e,t))&&void 0!==i?i:null;default:return null}}}function D(t){return this.get(t)}function O(t,e){return e(t)}class A{constructor(t,e){this.Type=t,this.dependencies=e,this.transformers=null}async constructAsync(t,e){const n=await Promise.all(this.dependencies.map(e=>t.getAsync(e)));return this.constructCore(n,e)}construct(t,e){const n=this.dependencies.map(D,t);return this.constructCore(n,e)}constructCore(t,e){let n;return n=void 0===e?new this.Type(...t):new this.Type(...t,...e),null===this.transformers?n:this.transformers.reduce(O,n)}registerTransformer(t){(this.transformers||(this.transformers=[])).push(t)}}const T={$isResolver:!0,resolve:(t,e)=>e,resolveAsync:function(t,e){return Promise.resolve(e)}};function I(t){return"function"==typeof t.register}function B(t){return function(t){return I(t)&&"boolean"==typeof t.registerInRequestor}(t)&&t.registerInRequestor}function N(t){return void 0!==t.prototype}const R=new Set(["Array","ArrayBuffer","Boolean","DataView","Date","Error","EvalError","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Number","Object","Promise","RangeError","ReferenceError","RegExp","Set","SharedArrayBuffer","String","SyntaxError","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","URIError","WeakMap","WeakSet"]),L=new Map;class j{constructor(t,e){this.owner=t,this.config=e,this._parent=void 0,this.registerDepth=0,this.isHandlingContextRequests=!1,this.resolvers=new Map,this.resolvers.set(w,T),t&&(t.$$container$$=this,"addEventListener"in t&&u.handle(t,t=>{if(this.isHandlingContextRequests)try{const e=this.get(t.context);t.stopImmediatePropagation(),t.callback(e)}catch(t){}else t.context===w&&t.composedPath()[0]!==this.owner&&(t.stopImmediatePropagation(),t.callback(this))}))}get parent(){return void 0===this._parent&&(this._parent=this.config.parentLocator(this.owner)),this._parent}get depth(){return null===this.parent?0:this.parent.depth+1}get responsibleForOwnerRequests(){return this.config.responsibleForOwnerRequests}handleContextRequests(t){this.isHandlingContextRequests=t}register(...t){if(100===++this.registerDepth)throw i.Zx.error(1504);let e,n,r,o,s;for(let i=0,a=t.length;i<a;++i)if(e=t[i],W(e))if(I(e))e.register(this);else if(N(e))H.singleton(e,e).register(this);else for(n=Object.keys(e),o=0,s=n.length;o<s;++o)r=e[n[o]],W(r)&&(I(r)?r.register(this):this.register(r));return--this.registerDepth,this}registerResolver(t,e){_(t);const n=this.resolvers,i=n.get(t);return null==i?n.set(t,e):i instanceof F&&4===i.strategy?i.state.push(e):n.set(t,new F(t,4,[i,e])),e}registerTransformer(t,e){const n=this.getResolver(t);if(null==n)return!1;if(n.getFactory){const t=n.getFactory(this);return null!=t&&(t.registerTransformer(e),!0)}return!1}getResolver(t,e=!0){if(_(t),void 0!==t.resolve)return t;let n,i=this;for(;null!=i;){if(n=i.resolvers.get(t),null!=n)return n;if(null==i.parent){const n=B(t)?this:i;return e?this.jitRegister(t,n):null}i=i.parent}return null}has(t,e=!1){return!!this.resolvers.has(t)||!(!e||null==this.parent)&&this.parent.has(t,!0)}async getAsync(t){if(_(t),t.$isResolver)return t.resolveAsync(this,this);let e,n=this;for(;null!=n;){if(e=n.resolvers.get(t),null!=e)return e.resolveAsync(n,this);if(null==n.parent){const r=await this.config.asyncRegistrationLocator(t);if(!r)throw i.Zx.error(1505,{key:t});const o=B(t)?this:n;return e=r.register(o),e.resolveAsync(n,this)}n=n.parent}throw i.Zx.error(1505,{key:t})}get(t){if(_(t),t.$isResolver)return t.resolve(this,this);let e,n=this;for(;null!=n;){if(e=n.resolvers.get(t),null!=e)return e.resolve(n,this);if(null==n.parent){const i=B(t)?this:n;return e=this.jitRegister(t,i),e.resolve(n,this)}n=n.parent}throw i.Zx.error(1505,{key:t})}getAll(t,e=!1){_(t);const n=this;let r,o=n;if(e){let e=i.tR;for(;null!=o;)r=o.resolvers.get(t),null!=r&&(e=e.concat(V(r,o,n))),o=o.parent;return e}for(;null!=o;){if(r=o.resolvers.get(t),null!=r)return V(r,o,n);if(o=o.parent,null==o)return i.tR}return i.tR}getFactory(t){let e=L.get(t);if(void 0===e){if(q(t))throw i.Zx.error(1506,{name:t.name});L.set(t,e=new A(t,y.getDependencies(t)))}return e}registerFactory(t,e){L.set(t,e)}createChild(t){return new j(null,Object.assign({},this.config,t,{parentLocator:()=>this}))}jitRegister(t,e){if("function"!=typeof t)throw i.Zx.error(1507,{value:t});if(R.has(t.name))throw i.Zx.error(1508,{value:t.name});if(I(t)){const n=t.register(e);if(!(n instanceof Object)||null==n.resolve){const n=e.resolvers.get(t);if(null!=n)return n;throw i.Zx.error(1510)}return n}if(t.$isInterface)throw i.Zx.error(1509,{value:t.name});{const n=this.config.defaultResolver(t,e);return e.resolvers.set(t,n),n}}}const P=new WeakMap;function z(t){return function(e,n,i){if(P.has(i))return P.get(i);const r=t(e,n,i);return P.set(i,r),r}}const H=Object.freeze({instance:(t,e)=>new F(t,0,e),singleton:(t,e)=>new F(t,1,e),transient:(t,e)=>new F(t,2,e),callback:(t,e)=>new F(t,3,e),cachedCallback:(t,e)=>new F(t,3,z(e)),aliasTo:(t,e)=>new F(e,5,t)});function _(t){if(null==t)throw i.Zx.error(1511)}function V(t,e,n){if(t instanceof F&&4===t.strategy){const i=t.state;let r=i.length;const o=new Array(r);for(;r--;)o[r]=i[r].resolve(e,n);return o}return[t.resolve(e,n)]}const U="(anonymous)";function W(t){return"object"==typeof t&&null!==t||"function"==typeof t}const q=function(){const t=new WeakMap;let e=!1,n="",i=0;return function(r){return e=t.get(r),void 0===e&&(n=r.toString(),i=n.length,e=i>=29&&i<=100&&125===n.charCodeAt(i-1)&&n.charCodeAt(i-2)<=32&&93===n.charCodeAt(i-3)&&101===n.charCodeAt(i-4)&&100===n.charCodeAt(i-5)&&111===n.charCodeAt(i-6)&&99===n.charCodeAt(i-7)&&32===n.charCodeAt(i-8)&&101===n.charCodeAt(i-9)&&118===n.charCodeAt(i-10)&&105===n.charCodeAt(i-11)&&116===n.charCodeAt(i-12)&&97===n.charCodeAt(i-13)&&110===n.charCodeAt(i-14)&&88===n.charCodeAt(i-15),t.set(r,e)),e}}(),G={};function K(t){switch(typeof t){case"number":return t>=0&&(0|t)===t;case"string":{const e=G[t];if(void 0!==e)return e;const n=t.length;if(0===n)return G[t]=!1;let i=0;for(let e=0;e<n;++e)if(i=t.charCodeAt(e),0===e&&48===i&&n>1||i<48||i>57)return G[t]=!1;return G[t]=!0}default:return!1}}},64699:function(t,e,n){"use strict";n.d(e,{fF:function(){return l}});var i=n(68136),r=n(62036),o=n(95239),s=n(61201),a=n(14996);const{create:c}=i.G,u=c({name:"focus-stroke-inner-recipe"},{evaluate:t=>(0,r.f)(t(s.c),t(o.p),t(a.WN))}),l=c("focus-stroke-inner",t=>t(u).evaluate(t))},65007:function(t,e,n){"use strict";n.d(e,{m:function(){return l}});var i=n(82239),r=n(37180),o=n(29586),s=n(96950),a=n(82774),c=n(35106);const u=function(t={}){return s.qy`
        <template
            aria-checked="${t=>t.ariaChecked}"
            aria-disabled="${t=>t.ariaDisabled}"
            aria-posinset="${t=>t.ariaPosInSet}"
            aria-selected="${t=>t.ariaSelected}"
            aria-setsize="${t=>t.ariaSetSize}"
            role="option"
        >
            ${(0,c.LT)(t)}
            <span class="content" part="content">
                <slot ${(0,a.e)("content")}></slot>
            </span>
            ${(0,c.aO)(t)}
        </template>
    `}(),l=i.Re.compose({name:`${r.c.prefix}-option`,template:u,styles:o.R})},65614:function(t,e,n){"use strict";n.d(e,{G:function(){return i}});const i=Object.freeze({prefix:"cs",shadowRootMode:"open",registry:customElements})},65636:function(t,e,n){"use strict";n.d(e,{m:function(){return F}});var i=n(37180),r=n(56911),o=n(50106),s=n(23429),a=n(60815),c=n(38493),u=n(50180),l=n(55230),h=n(17884),d=n(35106),f=n(88458),p=n(5793),v=n(56863);class g extends p.A{}class b extends((0,v.rf)(g)){constructor(){super(...arguments),this.proxy=document.createElement("select")}}class m extends b{constructor(){super(...arguments),this.open=!1,this.shiftListbox="0",this.listboxId=(0,u.NF)("listbox-")}shiftListboxChanged(t,e){void 0!==e&&this.setPositioning()}openChanged(t,e){if(this.collapsible){if(this.open)return this.ariaControls=this.listboxId,this.ariaExpanded="true",s.L.enqueue(()=>this.setPositioning()),this.focusAndScrollOptionIntoView(),this.indexWhenOpened=this.selectedIndex,void s.L.enqueue(()=>this.focus());this.cleanup?.(),this.ariaControls="",this.ariaExpanded="false"}}get collapsible(){return!(this.multiple||"number"==typeof this.size)}get value(){return a.cP.track(this,"value"),this._value}set value(t){const e=`${this._value}`;if(this._options?.length){const e=this._options.findIndex(e=>e.value===t),n=this._options[this.selectedIndex]?.value??null,i=this._options[e]?.value??null;-1!==e&&n===i||(t="",this.selectedIndex=e),t=this.firstSelectedOption?.value??t}e!==t&&(this._value=t,super.valueChanged(e,t),a.cP.notify(this,"value"),this.updateDisplayValue())}updateValue(t){this.$fastController.isConnected&&(this.value=this.firstSelectedOption?.value??""),t&&(this.$emit("input"),this.$emit("change",this,{bubbles:!0,composed:void 0}))}selectedIndexChanged(t,e){super.selectedIndexChanged(t,e),this.updateValue()}setPositioning(){this.$fastController.isConnected&&(this.cleanup=(0,o.ll)(this,this.listbox,async()=>{const t=this.shiftListbox?parseFloat(this.shiftListbox):0,{middlewareData:e,x:n,y:i}=await(0,o.rD)(this.control,this.listbox,{placement:"bottom",strategy:"fixed",middleware:[(0,o.UU)(),(0,o.BN)({padding:t}),(0,o.Ej)({apply:({availableHeight:t,rects:e})=>{Object.assign(this.listbox.style,{maxHeight:`${t}px`,minWidth:`${e.reference.width}px`})}}),(0,o.jD)()]});e.hide?.referenceHidden?this.open=!1:Object.assign(this.listbox.style,{position:"fixed",top:"0",left:"0",transform:`translate(${n}px, ${i}px)`})}))}get displayValue(){return a.cP.track(this,"displayValue"),this.firstSelectedOption?.text??""}disabledChanged(t,e){super.disabledChanged&&super.disabledChanged(t,e),this.ariaDisabled=this.disabled?"true":"false"}formResetCallback(){this.setProxyOptions(),super.setDefaultSelectedOption(),-1===this.selectedIndex&&(this.selectedIndex=0)}clickHandler(t){if(!this.disabled){if(this.open){const e=t.target.closest("option,[role=option]");if(e&&e.disabled)return}return super.clickHandler(t),this.open=this.collapsible&&!this.open,this.open||this.indexWhenOpened===this.selectedIndex||this.updateValue(!0),!0}}focusoutHandler(t){if(super.focusoutHandler(t),!this.open)return!0;const e=t.relatedTarget;this.isSameNode(e)?this.focus():this.options?.includes(e)||(this.open=!1,this.indexWhenOpened!==this.selectedIndex&&this.updateValue(!0))}handleChange(t,e){super.handleChange(t,e),"value"===e&&this.updateValue()}slottedOptionsChanged(t,e){this.options.forEach(t=>{a.cP.getNotifier(t).unsubscribe(this,"value")}),super.slottedOptionsChanged(t,e),this.options.forEach(t=>{a.cP.getNotifier(t).subscribe(this,"value")}),this.setProxyOptions(),this.updateValue()}mousedownHandler(t){return t.offsetX>=0&&t.offsetX<=this.listbox?.scrollWidth?super.mousedownHandler(t):this.collapsible}multipleChanged(t,e){super.multipleChanged(t,e),this.proxy&&(this.proxy.multiple=e)}selectedOptionsChanged(t,e){super.selectedOptionsChanged(t,e),this.options?.forEach((t,e)=>{const n=this.proxy?.options.item(e);n&&(n.selected=t.selected)})}setDefaultSelectedOption(){const t=this.options??Array.from(this.children).filter(h.U.slottedOptionFilter),e=t?.findIndex(t=>t.hasAttribute("selected")||t.selected||t.value===this.value);this.selectedIndex=-1===e?0:e}setProxyOptions(){this.proxy instanceof HTMLSelectElement&&this.options&&(this.proxy.options.length=0,this.options.forEach(t=>{const e=t.proxy||(t instanceof HTMLOptionElement?t.cloneNode():null);e&&this.proxy.options.add(e)}))}keydownHandler(t){super.keydownHandler(t);const e=t.key||t.key.charCodeAt(0);switch(e){case l.gG:t.preventDefault(),this.collapsible&&this.typeAheadExpired&&(this.open=!this.open);break;case l.kE:case l.FM:t.preventDefault();break;case l.Mm:t.preventDefault(),this.open=!this.open;break;case l.F9:this.collapsible&&this.open&&(t.preventDefault(),this.open=!1);break;case l.J9:return this.collapsible&&this.open&&(t.preventDefault(),this.open=!1),!0}return this.open||this.indexWhenOpened===this.selectedIndex||(this.updateValue(!0),this.indexWhenOpened=this.selectedIndex),!(e===l.HX||e===l.I5)}connectedCallback(){super.connectedCallback(),this.addEventListener("contentchange",this.updateDisplayValue)}disconnectedCallback(){this.removeEventListener("contentchange",this.updateDisplayValue),this.cleanup?.(),super.disconnectedCallback()}sizeChanged(t,e){super.sizeChanged(t,e),this.proxy&&(this.proxy.size=e)}updateDisplayValue(){this.collapsible&&a.cP.notify(this,"displayValue")}}(0,r.Cg)([(0,c.CF)({attribute:"open",mode:"boolean"}),(0,r.Sn)("design:type",Boolean)],m.prototype,"open",void 0),(0,r.Cg)([(0,c.CF)({attribute:"shift-listbox"}),(0,r.Sn)("design:type",String)],m.prototype,"shiftListbox",void 0),(0,r.Cg)([a.Jg,(0,r.Sn)("design:type",Boolean),(0,r.Sn)("design:paramtypes",[])],m.prototype,"collapsible",null),(0,r.Cg)([a.sH,(0,r.Sn)("design:type",HTMLElement)],m.prototype,"control",void 0);class y{}(0,r.Cg)([a.sH,(0,r.Sn)("design:type",Object)],y.prototype,"ariaControls",void 0),(0,f.X)(y,h.r),(0,f.X)(m,d.qw,y);class w extends m{appearanceChanged(t,e){t!==e&&(this.classList.add(e),this.classList.remove(t))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline")}}(0,r.Cg)([(0,c.CF)({mode:"fromView"}),(0,r.Sn)("design:type",String)],w.prototype,"appearance",void 0);var $=n(11152),x=n(96950),k=n(91640),C=n(60402),S=n(82774),E=n(18893);const M=function(t={}){return x.qy`
        <template
            aria-activedescendant="${t=>t.ariaActiveDescendant}"
            aria-controls="${t=>t.ariaControls}"
            aria-disabled="${t=>t.ariaDisabled}"
            aria-expanded="${t=>t.ariaExpanded}"
            aria-haspopup="${t=>t.collapsible?"listbox":null}"
            aria-multiselectable="${t=>t.ariaMultiSelectable}"
            ?open="${t=>t.open}"
            role="combobox"
            tabindex="${t=>t.disabled?null:"0"}"
            @click="${(t,e)=>t.clickHandler(e.event)}"
            @focusin="${(t,e)=>t.focusinHandler(e.event)}"
            @focusout="${(t,e)=>t.focusoutHandler(e.event)}"
            @keydown="${(t,e)=>t.keydownHandler(e.event)}"
            @mousedown="${(t,e)=>t.mousedownHandler(e.event)}"
        >
            ${(0,k.z)(t=>t.collapsible,x.qy`
                    <div
                        class="control"
                        part="control"
                        ?disabled="${t=>t.disabled}"
                        ${(0,C.K)("control")}
                    >
                        ${(0,d.LT)(t)}
                        <slot name="button-container">
                            <div class="selected-value" part="selected-value">
                                <slot name="selected-value">${t=>t.displayValue}</slot>
                            </div>
                            <div aria-hidden="true" class="indicator" part="indicator">
                                <slot name="indicator">
                                    ${(0,E.R)(t.indicator)}
                                </slot>
                            </div>
                        </slot>
                        ${(0,d.aO)(t)}
                    </div>
                `)}
            <div
                class="listbox"
                id="${t=>t.listboxId}"
                part="listbox"
                role="listbox"
                ?disabled="${t=>t.disabled}"
                ?hidden="${t=>!!t.collapsible&&!t.open}"
                ${(0,C.K)("listbox")}
            >
                <slot
                    ${(0,S.e)({filter:h.U.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
                ></slot>
            </div>
        </template>
    `}({indicator:x.qy`
        <svg
            class="select-indicator"
            part="select-indicator"
            viewBox="0 0 12 7"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M11.85.65c.2.2.2.5 0 .7L6.4 6.84a.55.55 0 01-.78 0L.14 1.35a.5.5 0 11.71-.7L6 5.8 11.15.65c.2-.2.5-.2.7 0z"
            />
        </svg>
    `}),F=w.compose({name:`${i.c.prefix}-select`,template:M,styles:$.R7})},65923:function(t,e,n){"use strict";n.d(e,{th:function(){return f}});var i=n(56911),r=n(50106),o=n(60815),s=n(23429),a=n(92011),c=n(38493),u=n(55230),l=n(35106),h=n(88458),d=n(43919);class f extends a.L{constructor(){super(...arguments),this.role=d.j.menuitem,this.focusSubmenuOnLoad=!1,this.handleMenuItemKeyDown=t=>{if(t.defaultPrevented)return!1;switch(t.key){case u.Mm:case u.gG:return this.invoke(),!1;case u.bb:return this.expandAndFocus(),!1;case u.F9:case u.kT:if(this.expanded)return this.closeSubMenu(),!1}return!0},this.handleMenuItemClick=t=>(t.defaultPrevented||this.disabled||this.invoke(),!1),this.submenuLoaded=()=>{this.focusSubmenuOnLoad&&(this.focusSubmenuOnLoad=!1,this.submenu&&(this.submenu.focus(),this.setAttribute("tabindex","-1")))},this.handleMouseOver=t=>(this.disabled||!this.hasSubmenu||this.expanded||(this.expanded=!0),!1),this.handleMouseOut=t=>(!this.expanded||this.contains(document.activeElement)||(this.expanded=!1),!1),this.closeSubMenu=()=>{this.expanded=!1,this.focus()},this.expandAndFocus=()=>{this.hasSubmenu&&(this.focusSubmenuOnLoad=!0,this.expanded=!0)},this.invoke=()=>{if(!this.disabled)switch(this.role){case d.j.menuitemcheckbox:this.checked=!this.checked;break;case d.j.menuitem:if(this.hasSubmenu){this.expandAndFocus();break}this.$emit("change");break;case d.j.menuitemradio:this.checked||(this.checked=!0)}}}expandedChanged(t,e){this.$fastController.isConnected&&(e&&this.submenu&&this.updateSubmenu(),this.$emit("expanded-change",this,{bubbles:!1}))}checkedChanged(t,e){this.$fastController.isConnected&&this.$emit("change")}get hasSubmenu(){return!!this.submenu}slottedSubmenuChanged(t,e){e.length&&(this.submenu=e[0],this.updateSubmenu())}disconnectedCallback(){this.cleanup?.(),super.disconnectedCallback()}updateSubmenu(){this.cleanup?.(),this.submenu&&this.expanded&&s.L.enqueue(()=>{this.cleanup=(0,r.ll)(this,this.submenuContainer,async()=>{const t=["left-start","right-start"],{x:e,y:n}=await(0,r.rD)(this,this.submenuContainer,{middleware:[(0,r.BN)(),(0,r.Ej)({apply:({availableWidth:e,rects:n})=>{e<n.floating.width&&t.push("bottom-end","top-end")}}),(0,r.UU)({fallbackPlacements:t})],placement:"right-start",strategy:"fixed"});Object.assign(this.submenuContainer.style,{left:`${e}px`,position:"fixed",top:`${n}px`}),this.submenuLoaded()})})}}(0,i.Cg)([(0,c.CF)({mode:"boolean"}),(0,i.Sn)("design:type",Boolean)],f.prototype,"disabled",void 0),(0,i.Cg)([(0,c.CF)({mode:"boolean"}),(0,i.Sn)("design:type",Boolean)],f.prototype,"expanded",void 0),(0,i.Cg)([c.CF,(0,i.Sn)("design:type",String)],f.prototype,"role",void 0),(0,i.Cg)([(0,c.CF)({mode:"boolean"}),(0,i.Sn)("design:type",Boolean)],f.prototype,"checked",void 0),(0,i.Cg)([(0,c.CF)({mode:"boolean"}),(0,i.Sn)("design:type",Boolean)],f.prototype,"hidden",void 0),(0,i.Cg)([o.sH,(0,i.Sn)("design:type",Array)],f.prototype,"slottedSubmenu",void 0),(0,i.Cg)([o.sH,(0,i.Sn)("design:type",Object)],f.prototype,"submenu",void 0),(0,h.X)(f,l.qw)},66591:function(t,e,n){"use strict";function i(...t){return t.reduce((t,e)=>{const n=t.length?" ":"",r=Array.isArray(e)&&e[1]?i.call(null,e[0]):"function"==typeof e?e():"string"==typeof e?e:"";return r.length?t+n+r:t},"")}n.d(e,{x:function(){return i}})},67860:function(t,e,n){"use strict";n.d(e,{A2:function(){return f},EC:function(){return g},F7:function(){return c},FD:function(){return l},HE:function(){return p},jK:function(){return h},ud:function(){return u},xL:function(){return v},yB:function(){return a}});var i,r=n(55609),o=n(6711),s=n(24642);function a(t,e){return n=>{if(!(0,s.o1)(e))return-1;const i=(0,r.OB)(t,n),o=i.indexOf(e);return-1!==o?o:i.findIndex(t=>(0,s.o1)(t)&&(0,s.vp)(e,t))}}function c(t,e){return n=>{const i=(0,r.OB)(t,n),o=(0,r.OB)(e,n),c=a(i,o)(n);let u;if(-1!==c)return c;try{u=(0,s.Nk)(o)}catch(t){u=-1}return-1===u?0:i.map((t,e)=>({luminance:(0,s.Nk)(t),index:e})).reduce((t,e)=>Math.abs(e.luminance-u)<Math.abs(t.luminance-u)?e:t).index}}function u(t){return(0,s.Nk)((0,o.oR)(t))<=(-.1+Math.sqrt(.21))/2}function l(t,e){return"function"==typeof t?n=>e(n)[(0,s.qE)(t(n),0,e(n).length-1)]:e[(0,s.qE)(t,0,e.length-1)]}function h(t){return(e,n)=>i=>l(u(i)?(0,r.OB)(n,i):(0,r.OB)(e,i),t(i))}function d(t,e,n=0,i=t.length-1){if(i===n)return t[n];const r=Math.floor((i-n)/2)+n;return e(t[r])?d(t,e,n,r):d(t,e,r+1,i)}function f(t){return e=>n=>i=>o=>a=>{const c=(0,r.OB)(t,a),u=(0,r.OB)(e,a),l=u.length,h=(0,s.qE)(n(c,u,a),0,l-1),f=i(h,u,a);const p=[].concat(u),v=l-1;let g=h;return-1===f&&(p.reverse(),g=v-g),d(p,function(t){return o((0,s.v2)(c,t))},g,v)}}function p(t,e,n){return c(e,t)(n)}function v(t){return c(o.ro,(0,o.oR)(t))(t)}function g(t){return e=>e>=t}!function(t){t.neutral="neutral",t.accent="accent"}(i||(i={}))},68009:function(t,e,n){"use strict";n.d(e,{F:function(){return r}});var i=n(49399);function r(t){return(0,i.H)(t)?-1:1}},68136:function(t,e,n){"use strict";n.d(e,{G:function(){return k}});var i=n(56911),r=n(60815),o=n(93800),s=n(92011),a=n(61963),c=n(47429);class u{constructor(t){this.value=t,this.notifier=r.cP.getNotifier(this),this.dependencies=new Set,this.binding=r.cP.binding(t,this),this.binding.setMode(!1)}static getOrCreate(t){let e=u.cache.get(t);return e||(e=new u(t),u.cache.set(t,e),e)}evaluate(t,e){return this.binding.observe(n=>{if(this.dependencies.add(n),e===n){if(t.parent)return t.parent.getTokenValue(n);throw new Error("DesignTokenNode has encountered a circular token reference. Avoid this by setting the token value for an ancestor node.")}return t.getTokenValue(n)})}handleChange(){this.notifier.notify(void 0)}}u.cache=new WeakMap;class l{constructor(t,e,n,i){this.token=t,this.evaluator=e,this.node=n,this.subscriber=i,this.value=e.evaluate(n,t),this.subscriber&&r.cP.getNotifier(this.evaluator).subscribe(this.subscriber)}dispose(){this.subscriber&&r.cP.getNotifier(this.evaluator).unsubscribe(this.subscriber)}update(){return this.value=this.evaluator.evaluate(this.node,this.token),this}}class h{constructor(t,e,n,i){this.target=t,this.type=e,this.token=n,this.value=i}notify(){r.cP.getNotifier(this.token).notify(this)}}class d{constructor(){this._parent=null,this._children=new Set,this._values=new Map,this._derived=new Map,this.dependencyGraph=new Map}static isDerivedTokenValue(t){return"function"==typeof t}static isDerivedFor(t,e){return t._derived.has(e)}static collectDerivedContext(t){const e=new Map;if(null===t.parent)return e;let n=d.getAssignedTokensForNode(t),i=t.parent;do{const t=d.getAssignedTokensForNode(i);for(let r=0,o=t.length;r<o;r++){const o=t[r];!n.includes(o)&&d.isDerivedFor(i,o)&&e.set(o,i._derived.get(o))}n=Array.from(new Set(n.concat(t))),i=i.parent}while(null!==i);return e}static getLocalTokenValue(t,e){return d.isAssigned(t,e)?d.isDerivedFor(t,e)?t._derived.get(e).value:t._values.get(e):void 0}static getOrCreateDependencyGraph(t,e){let n=t.dependencyGraph.get(e);return n||(n=new Set,t.dependencyGraph.set(e,n),n)}static notify(){const t=this._notifications;this._notifications=[];for(const e of t)e.notify()}static queueNotification(...t){this._notifications.push(...t)}static getAssignedTokensForNode(t){return Array.from(t._values.keys())}static composeAssignedTokensForNode(t){const e=new Set(d.getAssignedTokensForNode(t));let n=t.parent;for(;null!==n;){const t=d.getAssignedTokensForNode(n);for(const n of t)e.add(n);n=n.parent}return Array.from(e)}static isAssigned(t,e){return t._values.has(e)}get parent(){return this._parent}get children(){return Array.from(this._children)}appendChild(t){let e=null;null!==t.parent&&(e=d.composeAssignedTokensForNode(t.parent),t.parent._children.delete(t));const n=d.composeAssignedTokensForNode(this),i=d.collectDerivedContext(this);t._parent=this,this._children.add(t);for(const r of n){let n=0;if(null!==e){const t=e.indexOf(r);-1!==t&&(n=1,e.splice(t,1))}t.dispatch(new h(this,n,r,i.get(r)?.evaluator.value))}if(null!==e&&e.length>0)for(const n of e)t.dispatch(new h(this,2,n,i.get(n)?.evaluator.value));d.notify()}removeChild(t){if(t.parent===this){const e=d.composeAssignedTokensForNode(this);t._parent=null,this._children.delete(t);for(const n of e)t.dispatch(new h(this,2,n));d.notify()}}dispose(){this.parent&&(this.parent._children.delete(this),this._parent=null);for(const[,t]of this._derived)t.dispose()}setTokenValue(t,e){const n=d.isAssigned(this,t)||d.isDerivedFor(this,t)?1:0,i=d.getLocalTokenValue(this,t);this._values.set(t,e),d.isDerivedFor(this,t)&&this.tearDownDerivedTokenValue(t);const r=d.isDerivedTokenValue(e),o=d.collectDerivedContext(this);let s;if(r){s=this.setupDerivedTokenValue(t,e,!0).value}else s=e;i!==s&&d.queueNotification(new h(this,n,t,e)),this.dispatch(new h(this,n,t,e)),o.forEach((t,e)=>{if(!d.isDerivedFor(this,e)){d.getLocalTokenValue(this,e)!==(t=this.setupDerivedTokenValue(e,t.evaluator.value)).value&&d.queueNotification(new h(this,1,e,t.evaluator.value)),this.dispatch(new h(this,0,e,t.evaluator.value))}}),d.notify()}getTokenValue(t){let e,n=this;for(;null!==n;){if(d.isDerivedFor(n,t)){e=n._derived.get(t).value;break}if(d.isAssigned(n,t)){e=n._values.get(t);break}n=n._parent}if(void 0!==e)return e;throw new Error(`No value set for token '${t.name??t}' in node tree.`)}deleteTokenValue(t){if(d.isAssigned(this,t)){const e=d.getLocalTokenValue(this,t);let n;this._values.delete(t),this.tearDownDerivedTokenValue(t);try{n=this.getTokenValue(t)}catch(t){n=void 0}d.queueNotification(new h(this,2,t)),e!==n&&this.dispatch(new h(this,2,t)),d.notify()}}dispatch(t){if(this!==t.target){const{token:e}=t,n=d.isAssigned(this,e),i=n&&this._derived.get(e)?.evaluator.dependencies.has(e);if(n&&!i)return;2===t.type&&!n&&d.isDerivedFor(this,e)&&(this.tearDownDerivedTokenValue(e),d.queueNotification(new h(this,2,e))),i&&(t=new h(this,1,e,this._derived.get(e)?.evaluator.value));const{value:r}=t;if(r&&d.isDerivedTokenValue(r)){const n=u.getOrCreate(r).dependencies;let i=!1;for(const t of n)if(d.isAssigned(this,t)){i=!0;break}if(i){const n=this._derived.get(e)?.value,i=this.setupDerivedTokenValue(e,r);if(n!==i.value){const r=new h(this,void 0===n?0:1,e,i.evaluator.value);d.queueNotification(r),t=r}}}}this.collectLocalChangeRecords(t).forEach(t=>{d.queueNotification(t),this.dispatch(t)}),this.notifyChildren(t)}collectLocalChangeRecords(t){const e=new Map;for(const n of d.getOrCreateDependencyGraph(this,t.token))n.value!==n.update().value&&e.set(n.token,new h(this,1,n.token,n.evaluator.value));return e}notifyChildren(...t){if(this.children.length)for(let e=0,n=this.children.length;e<n;e++)for(let n=0;n<t.length;n++)this.children[e].dispatch(t[n])}tearDownDerivedTokenValue(t){if(d.isDerivedFor(this,t)){const e=this._derived.get(t);e.dispose(),this._derived.delete(t),e.evaluator.dependencies.forEach(t=>{d.getOrCreateDependencyGraph(this,t).delete(e)})}}setupDerivedTokenValue(t,e,n=!1){const i=new l(t,u.getOrCreate(e),this,n?{handleChange:()=>{if(i.value!==i.update().value){const t=new h(this,1,i.token,i.evaluator.value);d.queueNotification(t),this.dispatch(t),d.notify()}}}:void 0);return this._derived.set(t,i),i.evaluator.dependencies.forEach(e=>{e!==t&&d.getOrCreateDependencyGraph(this,e).add(i)}),i}}d._notifications=[];var f=n(23429),p=n(81263);class v{setProperty(t,e){f.L.enqueue(()=>this.target.setProperty(t,e))}removeProperty(t){f.L.enqueue(()=>this.target.removeProperty(t))}}class g extends v{constructor(){super();const t=new CSSStyleSheet;this.target=t.cssRules[t.insertRule(":root{}")].style,document.adoptedStyleSheets=[...document.adoptedStyleSheets,t]}}class b extends v{constructor(){super(),this.style=document.createElement("style"),document.head.appendChild(this.style);const{sheet:t}=this.style;if(t){const e=t.insertRule(":root{}",t.cssRules.length);this.target=t.cssRules[e].style}}}class m{constructor(t){this.store=new Map,this.target=null;const e=t.$fastController;this.style=document.createElement("style"),e.addStyles(this.style),r.cP.getNotifier(e).subscribe(this,"isConnected"),this.handleChange(e,"isConnected")}targetChanged(){if(null!==this.target)for(const[t,e]of this.store.entries())this.target.setProperty(t,e)}setProperty(t,e){this.store.set(t,e),f.L.enqueue(()=>{null!==this.target&&this.target.setProperty(t,e)})}removeProperty(t){this.store.delete(t),f.L.enqueue(()=>{null!==this.target&&this.target.removeProperty(t)})}handleChange(t,e){const{sheet:n}=this.style;if(n){const t=n.insertRule(":host{}",n.cssRules.length);this.target=n.cssRules[t].style}else this.target=null}}(0,i.Cg)([r.sH,(0,i.Sn)("design:type",Object)],m.prototype,"target",void 0);class y{setProperty(t,e){y.properties[t]=e;for(const n of y.roots.values())n.setProperty(t,e)}removeProperty(t){delete y.properties[t];for(const e of y.roots.values())e.removeProperty(t)}static registerRoot(t){const{roots:e}=y;if(!e.has(t)){e.add(t);for(const e in y.properties)t.setProperty(e,y.properties[e])}}static unregisterRoot(t){const{roots:e}=y;if(e.has(t)){e.delete(t);for(const e in y.properties)t.removeProperty(e)}}}y.roots=new Set,y.properties={};const w=new WeakMap,$=p.v.supportsAdoptedStyleSheets?class extends v{constructor(t){super();const e=new CSSStyleSheet;this.target=e.cssRules[e.insertRule(":host{}")].style,t.$fastController.addStyles(new p.v([e]))}}:m,x=Object.freeze({getOrCreate(t){if(w.has(t))return w.get(t);let e;return e=t instanceof Document?p.v.supportsAdoptedStyleSheets?new g:new b:new $(t),w.set(t,e),e}});class k{constructor(t){this.subscriberNotifier={handleChange:(t,e)=>{const n={target:e.target===M.defaultNode||Reflect.get(e.target,E)===E?"default":e.target.target,token:this};this.subscribers.notify(n)}},this.name=t.name,r.cP.getNotifier(this).subscribe(this.subscriberNotifier)}get $value(){return this.default}get default(){return M.defaultOverridesNode.getTokenValue(this)}get subscribers(){return this._subscribers||(this._subscribers=new o.l(this)),this._subscribers}static isCSSDesignTokenConfiguration(t){return"string"==typeof t.cssCustomPropertyName}static create(t,e){let n;return n="string"==typeof t?new C({name:t,cssCustomPropertyName:t}):k.isCSSDesignTokenConfiguration(t)?new C(t):new k(t),void 0!==e&&M.defaultNode.setTokenValue(n,e),n}static withStrategy(t){M.withStrategy(t)}static registerDefaultStyleTarget(t=document){(t instanceof s.L||t instanceof Document)&&(t=x.getOrCreate(t)),y.registerRoot(t)}static unregisterDefaultStyleTarget(t=document){(t instanceof s.L||t instanceof Document)&&(t=x.getOrCreate(t)),y.unregisterRoot(t)}static clear(){M.clear()}getValueFor(t){return M.getOrCreate(t).getTokenValue(this)}setValueFor(t,e){M.getOrCreate(t).setTokenValue(this,this.normalizeValue(e))}deleteValueFor(t){return M.getOrCreate(t).deleteTokenValue(this),this}withDefault(t){return t=this.normalizeValue(t),d.isAssigned(M.defaultNode,this)||M.defaultNode.setTokenValue(this,t),M.defaultOverridesNode.setTokenValue(this,t),this}subscribe(t){this.subscribers.subscribe(t)}unsubscribe(t){this.subscribers.unsubscribe(t)}alias(t){return e=>e(t)}normalizeValue(t){return t instanceof k&&(t=this.alias(t)),t}}let C=class extends k{constructor(t){super(t),this.cssReflector={handleChange:(t,e)=>{const n=e.target===M.defaultNode||Reflect.get(e.target,E)===E?M.rootStyleSheetTarget:e.target instanceof M?x.getOrCreate(e.target.target):null;n&&(2===e.type?n.removeProperty(this.cssCustomProperty):n.setProperty(this.cssCustomProperty,this.resolveCSSValue(e.target.getTokenValue(this))))}},this.cssCustomProperty=`--${t.cssCustomPropertyName}`,this.cssVar=`var(${this.cssCustomProperty})`,r.cP.getNotifier(this).subscribe(this.cssReflector)}createCSS(){return this.cssVar}resolveCSSValue(t){return t&&"function"==typeof t.createCSS?t.createCSS():t}};C=(0,i.Cg)([(0,a.t)(),(0,i.Sn)("design:paramtypes",[Object])],C);const S={contains:c.Wu,parent(t){let e=(0,c.Zo)(t);for(;null!==e;){if(e instanceof s.L)return e;e=(0,c.Zo)(e)}return null}},E=Symbol();class M extends d{constructor(t){super(),this.target=t,this.setTokenValue=this.lazyAttachToDefault(super.setTokenValue),this.getTokenValue=this.lazyAttachToDefault(this.getTokenValue),this.deleteTokenValue=this.lazyAttachToDefault(super.deleteTokenValue)}static get strategy(){return void 0===this._strategy&&M.withStrategy(S),this._strategy}static get defaultOverridesNode(){let t=M.overridesNodes.get(document);return t||(t=new d,M.overridesNodes.set(document,t),M.defaultNode.appendChild(t),Reflect.defineProperty(t,E,{value:E,enumerable:!1,configurable:!1}),t)}static clear(){!function t(e){for(const n of e.children)t(n);e.dispose()}(M.defaultOverridesNode),M.overridesNodes.delete(document)}connectedCallback(t){let e=M.findParent(t.source);if(null===e&&(e=M.defaultOverridesNode),e!==this.parent){const n=[];for(const i of e.children)i instanceof M&&M.strategy.contains(t.source,i.target)&&n.push(i);e.appendChild(this);for(const t of n)this.appendChild(t)}}disconnectedCallback(t){this.dispose()}static getOrCreate(t){let e=M.cache.get(t);return e||(e=new M(t),M.cache.set(t,e),t.$fastController.addBehavior(M.strategy),t.$fastController.addBehavior(e),e)}static withStrategy(t){this._strategy=t}static findParent(t){let e=M.strategy.parent(t);for(;null!==e;){const t=M.cache.get(e);if(t)return t;e=M.strategy.parent(e)}return null}lazyAttachToDefault(t){return(...e)=>(null===this.parent&&M.defaultOverridesNode.appendChild(this),t.apply(this,e))}getTokenValue(t){try{return super.getTokenValue(t)}catch(t){const e=(t?.message??"Unknown error")+`Target node: ${this.target?.tagName}.  IsFastConnected: ${this.target?.$fastController?.isConnected}. IsConnected: ${this.target?.isConnected}`;throw new Error(e)}}}M.overridesNodes=new WeakMap,M.defaultNode=new d,M.rootStyleSheetTarget=new y,M.cache=new WeakMap},68244:function(t,e,n){"use strict";n.d(e,{F:function(){return p}});var i=n(42277),r=n(96293),o=n(19470);function s(t,e,n,i){return(t,e,n,...o)=>{(0,r.Kg)(n)&&(n=n.replace("javascript:","")),i(t,e,n,...o)}}function a(t,e,n,i){throw o.Zx.error(1209,{aspectName:n,tagName:null!=t?t:"text"})}const c={onabort:a,onauxclick:a,onbeforeinput:a,onbeforematch:a,onblur:a,oncancel:a,oncanplay:a,oncanplaythrough:a,onchange:a,onclick:a,onclose:a,oncontextlost:a,oncontextmenu:a,oncontextrestored:a,oncopy:a,oncuechange:a,oncut:a,ondblclick:a,ondrag:a,ondragend:a,ondragenter:a,ondragleave:a,ondragover:a,ondragstart:a,ondrop:a,ondurationchange:a,onemptied:a,onended:a,onerror:a,onfocus:a,onformdata:a,oninput:a,oninvalid:a,onkeydown:a,onkeypress:a,onkeyup:a,onload:a,onloadeddata:a,onloadedmetadata:a,onloadstart:a,onmousedown:a,onmouseenter:a,onmouseleave:a,onmousemove:a,onmouseout:a,onmouseover:a,onmouseup:a,onpaste:a,onpause:a,onplay:a,onplaying:a,onprogress:a,onratechange:a,onreset:a,onresize:a,onscroll:a,onsecuritypolicyviolation:a,onseeked:a,onseeking:a,onselect:a,onslotchange:a,onstalled:a,onsubmit:a,onsuspend:a,ontimeupdate:a,ontoggle:a,onvolumechange:a,onwaiting:a,onwebkitanimationend:a,onwebkitanimationiteration:a,onwebkitanimationstart:a,onwebkittransitionend:a,onwheel:a},u={elements:{a:{[i.D.attribute]:{href:s},[i.D.property]:{href:s}},area:{[i.D.attribute]:{href:s},[i.D.property]:{href:s}},button:{[i.D.attribute]:{formaction:s},[i.D.property]:{formAction:s}},embed:{[i.D.attribute]:{src:a},[i.D.property]:{src:a}},form:{[i.D.attribute]:{action:s},[i.D.property]:{action:s}},frame:{[i.D.attribute]:{src:s},[i.D.property]:{src:s}},iframe:{[i.D.attribute]:{src:s},[i.D.property]:{src:s,srcdoc:a}},input:{[i.D.attribute]:{formaction:s},[i.D.property]:{formAction:s}},link:{[i.D.attribute]:{href:a},[i.D.property]:{href:a}},object:{[i.D.attribute]:{codebase:a,data:a},[i.D.property]:{codeBase:a,data:a}},script:{[i.D.attribute]:{src:a,text:a},[i.D.property]:{src:a,text:a,innerText:a,textContent:a}},style:{[i.D.property]:{innerText:a,textContent:a}}},aspects:{[i.D.attribute]:{...c},[i.D.property]:{innerHTML:a,...c},[i.D.event]:{...c}}};function l(t,e){const n={};for(const i in e){const r=t[i],o=e[i];switch(r){case null:break;case void 0:n[i]=o;break;default:n[i]=r}}for(const e in t)e in n||(n[e]=t[e]);return Object.freeze(n)}function h(t,e){const n={};for(const i in e){const r=t[i],o=e[i];switch(r){case null:break;case void 0:n[i]=l(o,{});break;default:n[i]=l(r,o)}}for(const e in t)e in n||(n[e]=l(t[e],{}));return Object.freeze(n)}function d(t,e){const n={};for(const i in e){const r=t[i],o=e[i];switch(r){case null:break;case void 0:n[i]=h(r,{});break;default:n[i]=h(r,o)}}for(const e in t)e in n||(n[e]=h(t[e],{}));return Object.freeze(n)}function f(t,e,n,i,r){const o=t[n];if(o){const t=o[i];if(t)return t(e,n,i,r)}}const p=Object.freeze({create(t={}){var e,n;const i=null!==(e=t.trustedType)&&void 0!==e?e:function(){const t=t=>t;return globalThis.trustedTypes?globalThis.trustedTypes.createPolicy("fast-html",{createHTML:t}):{createHTML:t}}(),r=(o=null!==(n=t.guards)&&void 0!==n?n:{},s=u,Object.freeze({elements:o.elements?d(o.elements,s.elements):s.elements,aspects:o.aspects?h(o.aspects,s.aspects):s.aspects}));var o,s;return Object.freeze({createHTML:t=>i.createHTML(t),protect(t,e,n,i){var o;const s=(null!=t?t:"").toLowerCase(),a=r.elements[s];if(a){const r=f(a,t,e,n,i);if(r)return r}return null!==(o=f(r.aspects,t,e,n,i))&&void 0!==o?o:i}})}})},69128:function(t,e,n){"use strict";n.d(e,{R:function(){return v}});var i=n(60993),r=n(22131),o=n(74849),s=n(50882),a=n(25984),c=n(17767),u=n(79288),l=n(4283),h=n(92393),d=n(37302),f=n(45476),p=n(36452);const v=o.A`
    :host([disabled]),
    :host([disabled]:hover),
    :host([disabled]:active) {
        opacity: ${u.q};
        background-color: ${d.F7};
        cursor: ${i.Z};
    }

    ${a._9}
`.withBehaviors((0,r.mr)(o.A`
            :host([disabled]),
            :host([disabled]:hover),
            :host([disabled]:active),
            :host([disabled]) .control,
            :host([disabled]) .control:hover,
            :host([appearance="neutral"][disabled]:hover) .control {
                forced-color-adjust: none;
                background-color: ${s.A.ButtonFace};
                border-color: ${s.A.GrayText};
                color: ${s.A.GrayText};
                opacity: 1;
            }
        `),(0,c.f)("accent",o.A`
            :host([appearance="accent"][disabled]),
            :host([appearance="accent"][disabled]:hover),
            :host([appearance="accent"][disabled]:active) {
                background: ${l.IR};
            }

            ${a.Vw}
        `.withBehaviors((0,r.mr)(o.A`
                    :host([appearance="accent"][disabled]) .control,
                    :host([appearance="accent"][disabled]) .control:hover {
                        background: ${s.A.ButtonFace};
                        border-color: ${s.A.GrayText};
                        color: ${s.A.GrayText};
                    }
                `))),(0,c.f)("lightweight",o.A`
            :host([appearance="lightweight"][disabled]:hover),
            :host([appearance="lightweight"][disabled]:active) {
                background-color: transparent;
                color: ${h.W_};
            }

            :host([appearance="lightweight"][disabled]) .content::before,
            :host([appearance="lightweight"][disabled]:hover) .content::before,
            :host([appearance="lightweight"][disabled]:active) .content::before {
                background: transparent;
            }

            ${a.ZI}
        `.withBehaviors((0,r.mr)(o.A`
                    :host([appearance="lightweight"][disabled]) .control {
                        forced-color-adjust: none;
                        color: ${s.A.GrayText};
                    }

                    :host([appearance="lightweight"][disabled])
                        .control:hover
                        .content::before {
                        background: none;
                    }
                `))),(0,c.f)("outline",o.A`
            :host([appearance="outline"][disabled]:hover),
            :host([appearance="outline"][disabled]:active) {
                background: transparent;
                border-color: ${p.I2};
            }

            ${a.LA}
        `.withBehaviors((0,r.mr)(o.A`
                    :host([appearance="outline"][disabled]) .control {
                        border-color: ${s.A.GrayText};
                    }
                `))),(0,c.f)("stealth",o.A`
            :host([appearance="stealth"][disabled]),
            :host([appearance="stealth"][disabled]:hover),
            :host([appearance="stealth"][disabled]:active) {
                background: ${f.Wl};
            }

            ${a.ss}
        `.withBehaviors((0,r.mr)(o.A`
                    :host([appearance="stealth"][disabled]),
                    :host([appearance="stealth"][disabled]:hover) {
                        background: ${s.A.ButtonFace};
                    }

                    :host([appearance="stealth"][disabled]) .control {
                        background: ${s.A.ButtonFace};
                        border-color: transparent;
                        color: ${s.A.GrayText};
                    }
                `))))},69400:function(t,e,n){"use strict";n.d(e,{m:function(){return v}});var i=n(26633),r=n(37180),o=n(74849),s=n(37998),a=n(57416),c=n(95239),u=n(26920);const l=o.A`
    :host([hidden]) {
        display: none;
    }

    :host {
        --elevation: 14;
        --dialog-height: 480px;
        --dialog-width: 640px;
        display: block;
    }

    .overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.3);
        touch-action: none;
    }

    .positioning-region {
        display: flex;
        justify-content: center;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        overflow: auto;
    }

    .control {
        ${s.ET}
        margin-top: auto;
        margin-bottom: auto;
        border-radius: calc(${a.JU} * 1px);
        width: var(--dialog-width);
        height: var(--dialog-height);
        background: ${c.p};
        z-index: 1;
        border: calc(${u.XA} * 1px) solid transparent;
    }
`;var h=n(96950),d=n(91640),f=n(60402);const p=h.qy`
        <div class="positioning-region" part="positioning-region">
            ${(0,d.z)(t=>t.modal,h.qy`
                    <div
                        class="overlay"
                        part="overlay"
                        role="presentation"
                        @click="${t=>t.dismiss()}"
                    ></div>
                `)}
            <div
                role="dialog"
                tabindex="-1"
                class="control"
                part="control"
                aria-modal="${t=>t.modal?t.modal:void 0}"
                aria-describedby="${t=>t.ariaDescribedby}"
                aria-labelledby="${t=>t.ariaLabelledby}"
                aria-label="${t=>t.ariaLabel}"
                ${(0,f.K)("dialog")}
            >
                <slot></slot>
            </div>
        </div>
    `,v=i.b.compose({name:`${r.c.prefix}-dialog`,template:p,styles:l})},69912:function(t,e,n){"use strict";n.d(e,{Si:function(){return m},VN:function(){return v},Z1:function(){return p},k5:function(){return b},yc:function(){return g}});var i=n(14777),r=n(88383),o=n(62044),s=n(89449),a=4294967296,c=4294967295,u=!1,l=123456789,h=987654321;function d(t){t<0&&(t>>>=0),l=123456789+t&c,h=987654321-t&c,u=!0}function f(){try{var t=2147483647&(0,o.x3)();d((Math.random()*a^t)+t)}catch(t){}}function p(t){return t>0?Math.floor(v()/c*(t+1))>>>0:0}function v(t){var e=0,n=(0,r.MY)()||(0,r.iN)();return n&&n.getRandomValues&&(e=n.getRandomValues(new Uint32Array(1))[0]&c),0===e&&(0,r.lT)()&&(u||f(),e=b()&c),0===e&&(e=Math.floor(a*Math.random()|0)),t||(e>>>=0),e}function g(t){t?d(t):f()}function b(t){var e=((h=36969*(65535&h)+(h>>16)&c)<<16)+(65535&(l=18e3*(65535&l)+(l>>16)&c))>>>0&c;return t||(e>>>=0),e}function m(t){void 0===t&&(t=22);for(var e=v()>>>0,n=0,r=s.m5;r[i.oI]<t;)n++,r+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(63&e),e>>>=6,5===n&&(e=(v()<<2&4294967295|3&e)>>>0,n=0);return r}},70082:function(t){t.exports='<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10 2.75a7.25 7.25 0 015.63 11.82l4.9 4.9a.75.75 0 01-.98 1.13l-.08-.07-4.9-4.9A7.25 7.25 0 1110 2.75zm0 1.5a5.75 5.75 0 100 11.5 5.75 5.75 0 000-11.5z"></path></svg>'},71157:function(t,e,n){"use strict";n.d(e,{O:function(){return s},T:function(){return o}});var i=n(68136);const{create:r}=i.G,o=r("type-ramp-plus-2-font-size","20px"),s=r("type-ramp-plus-2-line-height","28px")},71481:function(t,e,n){"use strict";var i=n(34188),r=n(96950),o=n(22020);Object.defineProperties(r.kc.prototype,{[i.vB]:{value:i.vB,enumerable:!1,configurable:!1},hydrate:{value:function(t,e,n){return new o.Sk(t,e,this,n)},enumerable:!0,configurable:!1}})},71804:function(t,e,n){"use strict";var i=n(93333),r=n(75084);e.A=new class{constructor(){this._breakpoints=r.KL,this._defaultBreakpoint=0,this.subscriptions=[],this.update=()=>{const t=(0,i.S)()?(0,r.UE)(window.innerWidth,this._breakpoints):this.defaultBreakpoint;this.breakpoint!==t&&(this.breakpoint=t,this.notifySubscribers(this.breakpoint)),this.openRequestAnimationFrame=!1},this.currentBreakpoint=()=>this.breakpoint,this.requestFrame=()=>{this.openRequestAnimationFrame||(this.openRequestAnimationFrame=!0,window.requestAnimationFrame(this.update))},(0,i.S)()?(this.breakpoint=(0,r.UE)(window.innerWidth,this._breakpoints),window.addEventListener("resize",this.requestFrame)):this.breakpoint=this.defaultBreakpoint}get breakpoints(){return this._breakpoints}set breakpoints(t){this._breakpoints=t,this.update()}get defaultBreakpoint(){return this._defaultBreakpoint}set defaultBreakpoint(t){this._defaultBreakpoint=t,this.update()}subscribe(t){this.subscriptions.includes(t)||this.subscriptions.push(t)}unsubscribe(t){this.subscriptions=this.subscriptions.filter(e=>t!==e)}notifySubscribers(t){this.subscriptions.forEach(e=>{e(t)})}}},72454:function(t,e,n){"use strict";n.d(e,{O:function(){return i}});class i{constructor(t,e,n=!1){this.evaluate=t,this.policy=e,this.isVolatile=n}}},72691:function(t,e,n){"use strict";n.d(e,{o:function(){return s}});var i=n(68136),r=n(31157);const{create:o}=i.G,s=o("direction",r.O.ltr)},73079:function(t,e,n){"use strict";n.d(e,{m:function(){return T}});var i=n(37180),r=n(22448),o=n(74849),s=n(64187),a=n(73477),c=n(60993),u=n(22131),l=n(50882),h=n(48196),d=n(7896),f=n(74838),p=n(48751),v=n(41123),g=n(57416),b=n(26920),m=n(14996),y=n(45476),w=n(79288),$=n(64003);const x=o.A`
    ${(0,s.V)("grid")} :host {
        contain: layout;
        overflow: visible;
        font-family: ${d.O};
        outline: none;
        box-sizing: border-box;
        height: calc(${h.D} * 1px);
        grid-template-columns: minmax(42px, auto) 1fr minmax(42px, auto);
        grid-template-rows: auto;
        justify-items: center;
        align-items: center;
        padding: 0;
        margin: 0 calc(${f.vR} * 1px);
        white-space: nowrap;
        color: ${p.l};
        fill: currentcolor;
        cursor: pointer;
        font-size: ${v.K};
        line-height: ${v.Z};
        border-radius: calc(${g.Pb} * 1px);
        border: calc(${b.XA} * 1px) solid transparent;
        position: relative;
    }

    :host([start-column-count="0"]) {
        grid-template-columns: auto 1fr minmax(42px, auto);
    }

    :host([start-column-count="0"]) .content {
        grid-column: 1;
        grid-row: 1;
        margin-inline-start: 10px;
    }

    :host([start-column-count="0"]) .expand-collapse-glyph-container {
        grid-column: 5;
        grid-row: 1;
    }

    :host([start-column-count="2"]) {
        grid-template-columns:
            minmax(42px, auto) minmax(42px, auto) 1fr minmax(42px, auto)
            minmax(42px, auto);
    }

    :host([start-column-count="2"]) .content {
        grid-column: 3;
        grid-row: 1;
        margin-inline-start: 10px;
    }

    :host([start-column-count="2"]) .expand-collapse-glyph-container {
        grid-column: 5;
        grid-row: 1;
    }

    :host([start-column-count="2"]) ::slotted([slot="start"]) {
        grid-column: 2;
    }

    :host([start-column-count="2"]) ::slotted([slot="end"]) {
        grid-column: 4;
    }

    :host(:${a.N}) {
        border: calc(${b.XA} * 1px) solid ${m.WN};
        box-shadow: 0 0 0 calc((${b.vd} - ${b.XA}) * 1px)
            ${m.WN};
    }

    :host(:hover) {
        background: ${y.oO};
    }

    :host([aria-checked="true"]),
    :host(:active),
    :host([aria-expanded="true"]) {
        background: ${y.wO};
        color: ${p.l};
        z-index: 2;
    }

    :host([disabled]) {
        cursor: ${c.Z};
        opacity: ${w.q};
    }

    :host([disabled]:hover) ::slotted([slot="start"]),
    :host([disabled]:hover) ::slotted([slot="end"]),
    :host([disabled]:hover)::slotted(svg) {
        fill: currentcolor;
    }

    .content {
        grid-column-start: 2;
        justify-self: start;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    ::slotted([slot="start"]),
    ::slotted([slot="end"]) {
        display: flex;
        justify-content: center;
    }

    ::slotted([slot="end"]) {
        grid-column: 3;
    }

    ::slotted(svg) {
        ${""} width: 16px;
        height: 16px;
        display: flex;
    }

    :host(:hover) ::slotted([slot="start"]),
    :host(:hover) ::slotted([slot="end"]),
    :host(:hover)::slotted(svg),
    :host(:active) ::slotted([slot="start"]),
    :host(:active) ::slotted([slot="end"]),
    :host(:active)::slotted(svg) {
        fill: ${p.l};
    }

    :host([start-column-count="0"][aria-haspopup="menu"]) {
        display: grid;
        grid-template-columns: minmax(42px, auto) auto 1fr minmax(42px, auto) minmax(
                42px,
                auto
            );
        align-items: center;
        min-height: 32px;
    }

    :host([start-column-count="1"][aria-haspopup="menu"]),
    :host([start-column-count="1"][role="menuitemcheckbox"]),
    :host([start-column-count="1"][role="menuitemradio"]) {
        display: grid;
        grid-template-columns: minmax(42px, auto) auto 1fr minmax(42px, auto) minmax(
                42px,
                auto
            );
        align-items: center;
        min-height: 32px;
    }

    :host([start-column-count="2"]:not([aria-haspopup="menu"])) ::slotted([slot="end"]) {
        grid-column: 5;
    }

    :host .input-container,
    :host .expand-collapse-glyph-container {
        display: none;
    }

    :host([aria-haspopup="menu"]) .expand-collapse-glyph-container,
    :host([role="menuitemcheckbox"]) .input-container,
    :host([role="menuitemradio"]) .input-container {
        display: grid;
        margin-inline-end: 10px;
    }

    :host([aria-haspopup="menu"]) .content,
    :host([role="menuitemcheckbox"]) .content,
    :host([role="menuitemradio"]) .content {
        grid-column-start: 3;
    }

    :host([aria-haspopup="menu"][start-column-count="0"]) .content {
        grid-column-start: 1;
    }

    :host([aria-haspopup="menu"]) ::slotted([slot="end"]),
    :host([role="menuitemcheckbox"]) ::slotted([slot="end"]),
    :host([role="menuitemradio"]) ::slotted([slot="end"]) {
        grid-column-start: 4;
    }

    :host .expand-collapse,
    :host .checkbox,
    :host .radio {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        width: 20px;
        height: 20px;
        box-sizing: border-box;
        outline: none;
        margin-inline-start: 10px;
    }

    :host .checkbox {
        border-radius: calc(${g.Pb} * 1px);
    }

    :host .radio {
        border-radius: 999px;
    }

    :host .checkbox-indicator,
    :host .radio-indicator,
    ::slotted([slot="checkbox-indicator"]),
    ::slotted([slot="radio-indicator"]) {
        display: none;
    }

    ::slotted([slot="end"]:not(svg)) {
        margin-inline-end: 10px;
        color: ${$.c};
    }

    :host([aria-checked="true"]) .checkbox-indicator,
    :host([aria-checked="true"]) ::slotted([slot="checkbox-indicator"]) {
        width: 100%;
        height: 100%;
        display: block;
        fill: ${p.l};
        pointer-events: none;
    }

    :host([aria-checked="true"]) .radio-indicator {
        display: block;
        pointer-events: none;
    }

    :host([aria-checked="true"]) ::slotted([slot="radio-indicator"]) {
        display: block;
        pointer-events: none;
    }

    .submenu-container {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1;
    }
`.withBehaviors((0,u.mr)(o.A`
            :host {
                forced-color-adjust: none;
                border-color: transparent;
                color: ${l.A.ButtonText};
                fill: ${l.A.ButtonText};
            }
            :host(:hover) {
                background: ${l.A.Highlight};
                color: ${l.A.HighlightText};
            }
            :host(:hover) ::slotted([slot="start"]),
            :host(:hover) ::slotted([slot="end"]),
            :host(:hover)::slotted(svg),
            :host(:active) ::slotted([slot="start"]),
            :host(:active) ::slotted([slot="end"]),
            :host(:active)::slotted(svg) {
                fill: ${l.A.HighlightText};
            }

            :host([aria-expanded="true"]) {
                background: ${l.A.Highlight};
                border-color: ${l.A.Highlight};
                color: ${l.A.HighlightText};
            }

            :host(:${a.N}) {
                background: ${l.A.Highlight};
                border-color: ${l.A.ButtonText};
                box-shadow: 0 0 0 calc(${b.XA} * 1px) inset
                    ${l.A.HighlightText};
                color: ${l.A.HighlightText};
                fill: currentcolor;
            }

            :host([disabled]),
            :host([disabled]:hover),
            :host([disabled]:hover) ::slotted([slot="start"]),
            :host([disabled]:hover) ::slotted([slot="end"]),
            :host([disabled]:hover)::slotted(svg) {
                background: ${l.A.Canvas};
                color: ${l.A.GrayText};
                fill: currentcolor;
                opacity: 1;
            }

            :host .expanded-toggle,
            :host .checkbox,
            :host .radio {
                border-color: ${l.A.ButtonText};
                background: ${l.A.HighlightText};
            }

            :host([checked="true"]) .checkbox,
            :host([checked="true"]) .radio {
                background: ${l.A.HighlightText};
                border-color: ${l.A.HighlightText};
            }

            :host(:hover) .expanded-toggle,
            :host(:hover) .checkbox,
            :host(:hover) .radio,
            :host(:${a.N}) .expanded-toggle,
            :host(:${a.N}) .checkbox,
            :host(:${a.N}) .radio,
            :host([checked="true"]:hover) .checkbox,
            :host([checked="true"]:hover) .radio,
            :host([checked="true"]:${a.N}) .checkbox,
            :host([checked="true"]:${a.N}) .radio {
                border-color: ${l.A.HighlightText};
            }

            :host([aria-checked="true"]) {
                background: ${l.A.Highlight};
                color: ${l.A.HighlightText};
            }

            :host([aria-checked="true"]) .checkbox-indicator,
            :host([aria-checked="true"]) ::slotted([slot="checkbox-indicator"]),
            :host([aria-checked="true"]) ::slotted([slot="radio-indicator"]) {
                fill: ${l.A.Highlight};
            }

            :host([aria-checked="true"]) .radio-indicator {
                background: ${l.A.Highlight};
            }
        `));var k=n(96950),C=n(91640),S=n(60402),E=n(82774),M=n(10108),F=n(35106),D=n(18893),O=n(43919);const A=function(t={}){return k.qy`
    <template
        aria-haspopup="${t=>t.hasSubmenu?"menu":void 0}"
        aria-checked="${t=>t.role!==O.j.menuitem?t.checked:void 0}"
        aria-disabled="${t=>t.disabled}"
        aria-expanded="${t=>t.expanded}"
        @keydown="${(t,e)=>t.handleMenuItemKeyDown(e.event)}"
        @click="${(t,e)=>t.handleMenuItemClick(e.event)}"
        @mouseover="${(t,e)=>t.handleMouseOver(e.event)}"
        @mouseout="${(t,e)=>t.handleMouseOut(e.event)}"
    >
            ${(0,C.z)(t=>t.role===O.j.menuitemcheckbox,k.qy`
                    <div part="input-container" class="input-container">
                        <span part="checkbox" class="checkbox">
                            <slot name="checkbox-indicator">
                                ${(0,D.R)(t.checkboxIndicator)}
                            </slot>
                        </span>
                    </div>
                `)}
            ${(0,C.z)(t=>t.role===O.j.menuitemradio,k.qy`
                    <div part="input-container" class="input-container">
                        <span part="radio" class="radio">
                            <slot name="radio-indicator">
                                ${(0,D.R)(t.radioIndicator)}
                            </slot>
                        </span>
                    </div>
                `)}
        </div>
        ${(0,F.LT)(t)}
        <span class="content" part="content">
            <slot></slot>
        </span>
        ${(0,F.aO)(t)}
        ${(0,C.z)(t=>t.hasSubmenu,k.qy`
                <div
                    part="expand-collapse-glyph-container"
                    class="expand-collapse-glyph-container"
                >
                    <span part="expand-collapse" class="expand-collapse">
                        <slot name="expand-collapse-indicator">
                            ${(0,D.R)(t.expandCollapseGlyph)}
                        </slot>
                    </span>
                </div>
            `)}
        <span
            ?hidden="${t=>!t.expanded}"
            class="submenu-container"
            part="submenu-container"
            ${(0,S.K)("submenuContainer")}
        >
            <slot name="submenu" ${(0,E.e)({property:"slottedSubmenu",filter:(0,M.Y)("[role='menu']")})}></slot>
        </span>
    </template>
    `}({checkboxIndicator:k.qy`
        <svg
            aria-hidden="true"
            part="checkbox-indicator"
            class="checkbox-indicator"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.143 12.6697L15.235 4.5L16.8 5.90363L8.23812 15.7667L3.80005 11.2556L5.27591 9.7555L8.143 12.6697Z"
            />
        </svg>
    `,expandCollapseGlyph:k.qy`
        <svg
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            class="expand-collapse-glyph"
            part="expand-collapse-glyph"
        >
            <path
                d="M5.00001 12.3263C5.00124 12.5147 5.05566 12.699 5.15699 12.8578C5.25831 13.0167 5.40243 13.1437 5.57273 13.2242C5.74304 13.3047 5.9326 13.3354 6.11959 13.3128C6.30659 13.2902 6.4834 13.2152 6.62967 13.0965L10.8988 8.83532C11.0739 8.69473 11.2153 8.51658 11.3124 8.31402C11.4096 8.11146 11.46 7.88966 11.46 7.66499C11.46 7.44033 11.4096 7.21853 11.3124 7.01597C11.2153 6.81341 11.0739 6.63526 10.8988 6.49467L6.62967 2.22347C6.48274 2.10422 6.30501 2.02912 6.11712 2.00691C5.92923 1.9847 5.73889 2.01628 5.56823 2.09799C5.39757 2.17969 5.25358 2.30817 5.153 2.46849C5.05241 2.62882 4.99936 2.8144 5.00001 3.00369V12.3263Z"
            />
        </svg>
    `,radioIndicator:k.qy`
        <svg
            aria-hidden="true"
            part="radio-indicator"
            class="radio-indicator"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.143 12.6697L15.235 4.5L16.8 5.90363L8.23812 15.7667L3.80005 11.2556L5.27591 9.7555L8.143 12.6697Z"
            />
        </svg>
    `}),T=r.z.compose({name:`${i.c.prefix}-menu-item`,template:A,styles:x})},73208:function(t,e,n){"use strict";n.d(e,{G:function(){return f}});var i=n(56911),r=n(88458),o=n(35106),s=n(38493),a=n(60815),c=n(56863),u=n(92011);class l extends u.L{}class h extends((0,c.rf)(l)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}var d=n(70177);class f extends h{constructor(){var t;super(...arguments),t=this,this.clearButtonCallback=()=>{},this.clearButtonFocusCallback=()=>{},this.clearButtonBlurCallback=()=>{},this.isRubySearchBox=!1,this.isProngRubySearchBox=!1,this.isInputFocused=!1,this.inputOnFocus=()=>{this.isInputFocused=!0},this.inputOnBlur=function(){t.isInputFocused=!1}}readOnlyChanged(){this.proxy instanceof HTMLElement&&(this.proxy.readOnly=this.readOnly)}autocompleteChanged(){this.proxy instanceof HTMLElement&&(this.proxy.autocomplete=this.autocomplete)}autofocusChanged(){this.proxy instanceof HTMLElement&&(this.proxy.autofocus=this.autofocus)}placeholderChanged(){this.proxy instanceof HTMLElement&&(this.proxy.placeholder=this.placeholder)}maxlengthChanged(){this.proxy instanceof HTMLElement&&(this.proxy.maxLength=this.maxlength)}minlengthChanged(){this.proxy instanceof HTMLElement&&(this.proxy.minLength=this.minlength)}sizeChanged(){this.proxy instanceof HTMLElement&&(this.proxy.size=this.size)}spellcheckChanged(){this.proxy instanceof HTMLElement&&(this.proxy.spellcheck=this.spellcheck)}handleEndContentChange(){this.endContainer.classList.toggle("end",this.end.assignedNodes().length>0)}valueChanged(){this.$fastController.isConnected&&this.setFormValue(this.value),this.proxy instanceof HTMLElement&&(this.proxy.value=this.value),this.$emit("change")}submitSearch(t){var e;this.$emit("submit"),null===(e=this.form)||void 0===e||e.submit(),this.searchBoxEventHandler&&this.searchBoxEventHandler(t)}connectedCallback(){super.connectedCallback(),this.autofocus&&this.focus(),this.setFormValue(this.value,this.value),(0,d._Z)(this).then(()=>{this.control&&null!==this.control.value&&(this.value=this.control.value)})}handleTextInput(t){this.control&&null!==this.control.value&&(this.value=this.control.value,this.searchBoxEventHandler&&this.searchBoxEventHandler(t))}onFocus(){this.enableClearButton&&(this.showClearButton=!0)}onBlurs(){this.enableClearButton&&(this.showClearButton=!1)}clearBtnOnFocus(){this.clearButtonFocusCallback()}clearBtnOnBlurs(){this.clearButtonBlurCallback()}clearValue(t){this.control&&(this.control.value="",this.clearButtonCallback(),this.searchBoxClearHandler&&this.searchBoxClearHandler(t))}}(0,i.Cg)([(0,s.CF)({attribute:"readonly",mode:"boolean"})],f.prototype,"readOnly",void 0),(0,i.Cg)([s.CF],f.prototype,"autocomplete",void 0),(0,i.Cg)([(0,s.CF)({mode:"boolean"})],f.prototype,"autofocus",void 0),(0,i.Cg)([s.CF],f.prototype,"placeholder",void 0),(0,i.Cg)([(0,s.CF)({converter:s.R$})],f.prototype,"maxlength",void 0),(0,i.Cg)([(0,s.CF)({converter:s.R$})],f.prototype,"minlength",void 0),(0,i.Cg)([(0,s.CF)({converter:s.R$})],f.prototype,"size",void 0),(0,i.Cg)([(0,s.CF)({mode:"boolean"})],f.prototype,"spellcheck",void 0),(0,i.Cg)([(0,s.CF)({mode:"boolean"})],f.prototype,"isOnImage",void 0),(0,i.Cg)([(0,s.CF)({attribute:"clear-title"})],f.prototype,"clearTitle",void 0),(0,i.Cg)([(0,s.CF)({attribute:"clear-label"})],f.prototype,"clearLabel",void 0),(0,i.Cg)([(0,s.CF)({mode:"boolean"})],f.prototype,"enableClearButton",void 0),(0,i.Cg)([a.sH],f.prototype,"showClearButton",void 0),(0,i.Cg)([a.sH],f.prototype,"clearButtonCallback",void 0),(0,i.Cg)([a.sH],f.prototype,"clearButtonFocusCallback",void 0),(0,i.Cg)([a.sH],f.prototype,"clearButtonBlurCallback",void 0),(0,i.Cg)([a.sH],f.prototype,"isRubySearchBox",void 0),(0,i.Cg)([a.sH],f.prototype,"isProngRubySearchBox",void 0),(0,i.Cg)([a.sH],f.prototype,"isInputFocused",void 0),(0,i.Cg)([(0,s.CF)({attribute:"button-label"})],f.prototype,"buttonLabel",void 0),(0,i.Cg)([a.sH],f.prototype,"buttonTelemetryTag",void 0),(0,i.Cg)([a.sH],f.prototype,"inputTelemetryTag",void 0),(0,i.Cg)([a.sH],f.prototype,"clearButtonTelemetryTag",void 0),(0,i.Cg)([a.sH],f.prototype,"searchBoxEventHandler",void 0),(0,i.Cg)([a.sH],f.prototype,"searchBoxClearHandler",void 0),(0,i.Cg)([a.sH],f.prototype,"defaultSlottedNodes",void 0),(0,r.X)(f,o.qw)},73473:function(t,e,n){"use strict";n.d(e,{Gh:function(){return s},b4:function(){return o},bt:function(){return i},ks:function(){return r},oQ:function(){return c},zs:function(){return a}});const i="focus",r="focusin",o="focusout",s="keydown",a="resize",c="scroll"},73477:function(t,e,n){"use strict";n.d(e,{N:function(){return i}});const i="focus-visible"},74089:function(t,e,n){"use strict";n.d(e,{J_:function(){return d},Bg:function(){return f},XK:function(){return h},l_:function(){return l}});var i=n(68136),r=n(4283),o=n(57065),s=n(86627);const a=t=>(e,n)=>function(t,e){return t.contrast(s.ON)>=e?s.ON:s.Ql}(n||e(r.IR),t),{create:c}=i.G,u=c({name:"foreground-on-accent-recipe"},{evaluate:(t,e)=>a(o.i.normal)(t,e)}),l=c("foreground-on-accent-rest",t=>t(u).evaluate(t,t(r.IR))),h=c("foreground-on-accent-hover",t=>t(u).evaluate(t,t(r.OS))),d=c("foreground-on-accent-active",t=>t(u).evaluate(t,t(r.am))),f=c("foreground-on-accent-focus",t=>t(u).evaluate(t,t(r.KJ)))},74838:function(t,e,n){"use strict";n.d(e,{Br:function(){return a},Ss:function(){return o},a9:function(){return s},vR:function(){return c}});var i=n(68136);const{create:r}=i.G,o=r("base-height-multiplier",8),s=r("base-horizontal-spacing-multiplier",3),a=r("density",0),c=r("design-unit",4)},74849:function(t,e,n){"use strict";n.d(e,{A:function(){return p}});var i=n(96293),r=n(72454),o=n(93809),s=n(61963),a=n(81263);function c(t,e,n){e.source.style.setProperty(t.targetAspect,n.bind(e))}class u{constructor(t,e){this.dataBinding=t,this.targetAspect=e}createCSS(t){return t(this),`var(${this.targetAspect})`}addedCallback(t){var e;const n=t.source;if(!n.$cssBindings){n.$cssBindings=new Map;const t=n.setAttribute;n.setAttribute=(e,i)=>{t.call(n,e,i),"style"===e&&n.$cssBindings.forEach((t,e)=>c(e,t.controller,t.observer))}}const i=null!==(e=t[this.targetAspect])&&void 0!==e?e:t[this.targetAspect]=this.dataBinding.createObserver(this,this);i.controller=t,t.source.$cssBindings.set(this,{controller:t,observer:i})}connectedCallback(t){c(this,t,t[this.targetAspect])}removedCallback(t){t.source.$cssBindings&&t.source.$cssBindings.delete(this)}handleChange(t,e){c(this,e.controller,e)}}s.x.define(u);const l=`${Math.random().toString(36).substring(2,8)}`;let h=0;const d=()=>`--v${l}${++h}`;function f(t,e){const n=[];let c="";const l=[],h=t=>{l.push(t)};for(let l=0,f=t.length-1;l<f;++l){c+=t[l];let f=e[l];(0,i.Tn)(f)?f=new u((0,o.U)(f),d()).createCSS(h):f instanceof r.O?f=new u(f,d()).createCSS(h):void 0!==s.x.getForInstance(f)&&(f=f.createCSS(h)),f instanceof a.v||f instanceof CSSStyleSheet?(""!==c.trim()&&(n.push(c),c=""),n.push(f)):c+=f}return c+=t[t.length-1],""!==c.trim()&&n.push(c),{styles:n,behaviors:l}}const p=(t,...e)=>{const{styles:n,behaviors:i}=f(t,e),r=new a.v(n);return i.length?r.withBehaviors(...i):r};class v{constructor(t,e){this.behaviors=e,this.css="";const n=t.reduce((t,e)=>((0,i.Kg)(e)?this.css+=e:t.push(e),t),[]);n.length&&(this.styles=new a.v(n))}createCSS(t){return this.behaviors.forEach(t),this.styles&&t(this),this.css}addedCallback(t){t.addStyles(this.styles)}removedCallback(t){t.removeStyles(this.styles)}}s.x.define(v),p.partial=(t,...e)=>{const{styles:n,behaviors:i}=f(t,e);return new v(n,i)}},75084:function(t,e,n){"use strict";n.d(e,{KL:function(){return i},UE:function(){return r}});const i=[0,540,768,1084,1400,1779];function r(t,e=i){for(let n=e.length-1;n>=0;n--)if(t>=e[n])return n}},75904:function(t,e,n){"use strict";n.d(e,{KF:function(){return w}});var i=n(56911),r=n(38493),o=n(58976);class s extends o.C{constructor(){super(...arguments),this.speed=1200,this.headingLevel=3}}(0,i.Cg)([r.CF],s.prototype,"speed",void 0),(0,i.Cg)([(0,r.CF)({attribute:"heading-level",mode:"fromView",converter:r.R$})],s.prototype,"headingLevel",void 0),(0,i.Cg)([r.CF],s.prototype,"heading",void 0);var a=n(96950),c=n(60402),u=n(82774),l=n(10108),h=n(91640),d=n(87353);const f=a.qy`<template>${d.p}<div class="heading-container" part="heading-container"><span class="header"><slot name="icon"></slot><slot name="heading"><span class="heading" role="heading" aria-level=${t=>t.headingLevel}>${t=>t.heading}</span><slot name="details"></slot></slot><slot name="description"></slot></span><slot name="action"></slot></div><div class="scroll-area"><div part="scroll-view" class="scroll-view" @scroll="${t=>t.scrolled()}" ${(0,c.K)("scrollContainer")}><div role="list" class="content-container" part="content-container" ${(0,c.K)("content")}><slot ${(0,u.e)({property:"scrollItems",filter:(0,l.Y)()})}></slot></div></div>${(0,h.z)(t=>"mobile"!==t.view,a.qy`<div class="scroll scroll-prev" part="scroll-prev" ${(0,c.K)("previousFlipperContainer")}><div class="scroll-action" @click="${t=>t.scrollToPrevious()}"><slot name="previous-flipper"><fluent-flipper direction="previous"></fluent-flipper></slot></div></div><div class="scroll scroll-next" part="scroll-next" ${(0,c.K)("nextFlipperContainer")}><div class="scroll-action" @click="${t=>t.scrollToNext()}"><slot name="next-flipper"><fluent-flipper></fluent-flipper></slot></div></div>`)}</div>${d.S}</template>`;var p=n(95239),v=n(71157),g=n(61138),b=n(97482);const m=n(74849).A`
    ${b.R} :host{--scroll-fade-next:${p.p}}.heading-container{display:grid;grid-template-columns:1fr auto;margin:0 0 12px}::slotted([slot="action"]){display:flex;align-items:flex-end}::slotted([slot="icon"]){margin-inline-end:8px}.header,.header ::slotted(h1),.header ::slotted(h2),.header ::slotted(h3),.header ::slotted(h4),.header ::slotted(h5),.header ::slotted(h6){font-size:var(--stripe-heading-font-size,${v.T});
        line-height: var(--stripe-heading-line-height, ${v.O});font-weight:600;margin:0}::slotted([slot="description"]){font-size:${g.k};
        line-height: ${g.F};
        margin: 8px 0 0;
    }
`;var y=n(17469);const w=s.compose({name:`${y.i.prefix}-stripe`,template:f,styles:m})},76881:function(t,e,n){"use strict";n.d(e,{gs:function(){return g},Og:function(){return v}});var i=n(56911),r=n(23429),o=n(38493),s=n(60815),a=n(29025),c=n(35106),u=n(88458),l=n(92011),h=n(56863);class d extends l.L{}class f extends((0,h.rf)(d)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}const p="text";class v extends f{constructor(){super(...arguments),this.type=p}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly,this.validate())}autofocusChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.autofocus=this.autofocus,this.validate())}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}typeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type,this.validate())}listChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.setAttribute("list",this.list),this.validate())}maxlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.maxLength=this.maxlength,this.validate())}minlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.minLength=this.minlength,this.validate())}patternChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.pattern=this.pattern,this.validate())}sizeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.size=this.size)}spellcheckChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.spellcheck=this.spellcheck)}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.validate(),this.autofocus&&r.L.enqueue(()=>{this.focus()})}select(){this.control.select(),this.$emit("select")}handleTextInput(){this.value=this.control.value}handleChange(){this.$emit("change")}validate(){super.validate(this.control)}}(0,i.Cg)([(0,o.CF)({attribute:"readonly",mode:"boolean"}),(0,i.Sn)("design:type",Boolean)],v.prototype,"readOnly",void 0),(0,i.Cg)([(0,o.CF)({mode:"boolean"}),(0,i.Sn)("design:type",Boolean)],v.prototype,"autofocus",void 0),(0,i.Cg)([o.CF,(0,i.Sn)("design:type",String)],v.prototype,"placeholder",void 0),(0,i.Cg)([o.CF,(0,i.Sn)("design:type",String)],v.prototype,"type",void 0),(0,i.Cg)([o.CF,(0,i.Sn)("design:type",String)],v.prototype,"list",void 0),(0,i.Cg)([(0,o.CF)({converter:o.R$}),(0,i.Sn)("design:type",Number)],v.prototype,"maxlength",void 0),(0,i.Cg)([(0,o.CF)({converter:o.R$}),(0,i.Sn)("design:type",Number)],v.prototype,"minlength",void 0),(0,i.Cg)([o.CF,(0,i.Sn)("design:type",String)],v.prototype,"pattern",void 0),(0,i.Cg)([(0,o.CF)({converter:o.R$}),(0,i.Sn)("design:type",Number)],v.prototype,"size",void 0),(0,i.Cg)([(0,o.CF)({mode:"boolean"}),(0,i.Sn)("design:type",Boolean)],v.prototype,"spellcheck",void 0),(0,i.Cg)([s.sH,(0,i.Sn)("design:type",Array)],v.prototype,"defaultSlottedNodes",void 0);class g{}(0,u.X)(g,a.z),(0,u.X)(v,c.qw,g)},76989:function(t,e,n){"use strict";function i(t){return(...e)=>n=>{const i=e[0];let r="function"==typeof i?i(n):i;for(let i=1;i<e.length;i++){const o=e[i];r=t(r,"function"==typeof o?o(n):o)}return r}}n.d(e,{Re:function(){return c},WQ:function(){return a},lw:function(){return u}});const r=i((t,e)=>t+e),o=i((t,e)=>t-e),s=i((t,e)=>t*e);i((t,e)=>t/e);function a(...t){return r.apply(this,t)}function c(...t){return o.apply(this,t)}function u(...t){return s.apply(this,t)}},79109:function(t,e,n){"use strict";n.d(e,{g:function(){return i}});const i=t=>t.nodeType!==Node.TEXT_NODE||!!t.nodeValue?.trim().length},79288:function(t,e,n){"use strict";n.d(e,{q:function(){return o}});var i=n(68136);const{create:r}=i.G,o=r("disabled-opacity",.3)},79737:function(t,e,n){"use strict";n.d(e,{nS:function(){return r}});var i=n(92011);new Map;class r{constructor(t){this.target=t}}i.L},81263:function(t,e,n){"use strict";var i;let r;function o(t){return t.map(t=>t instanceof s?o(t.styles):[t]).reduce((t,e)=>t.concat(e),[])}n.d(e,{v:function(){return s}});class s{constructor(t){this.styles=t,this.targets=new WeakSet,this._strategy=null,this.behaviors=t.map(t=>t instanceof s?t.behaviors:null).reduce((t,e)=>null===e?t:null===t?e:t.concat(e),null)}get strategy(){return null===this._strategy&&this.withStrategy(r),this._strategy}addStylesTo(t){this.strategy.addStylesTo(t),this.targets.add(t)}removeStylesFrom(t){this.strategy.removeStylesFrom(t),this.targets.delete(t)}isAttachedTo(t){return this.targets.has(t)}withBehaviors(...t){return this.behaviors=null===this.behaviors?t:this.behaviors.concat(t),this}withStrategy(t){return this._strategy=new t(o(this.styles)),this}static setDefaultStrategy(t){r=t}static normalize(t){return void 0===t?void 0:Array.isArray(t)?new s(t):t instanceof s?t:new s([t])}}s.supportsAdoptedStyleSheets=!(null===(i=globalThis.CSS)||void 0===i?void 0:i.supports("background","-webkit-named-image(i)"))&&Array.isArray(document.adoptedStyleSheets)&&"replace"in CSSStyleSheet.prototype},82239:function(t,e,n){"use strict";n.d(e,{Re:function(){return d},nA:function(){return h}});var i=n(56911),r=n(60815),o=n(92011),s=n(38493),a=n(2298),c=n(29025),u=n(35106),l=n(88458);function h(t){return(0,a.sb)(t)&&("option"===t.getAttribute("role")||t instanceof HTMLOptionElement)}class d extends o.L{constructor(t,e,n,i){super(),this.defaultSelected=!1,this.dirtySelected=!1,this.selected=this.defaultSelected,this.dirtyValue=!1,t&&(this.textContent=t),e&&(this.initialValue=e),n&&(this.defaultSelected=n),i&&(this.selected=i),this.proxy=new Option(`${this.textContent}`,this.initialValue,this.defaultSelected,this.selected),this.proxy.disabled=this.disabled}checkedChanged(t,e){this.ariaChecked="boolean"!=typeof e?null:e?"true":"false"}contentChanged(t,e){this.proxy instanceof HTMLOptionElement&&(this.proxy.textContent=this.textContent),this.$emit("contentchange",null,{bubbles:!0})}defaultSelectedChanged(){this.dirtySelected||(this.selected=this.defaultSelected,this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.defaultSelected))}disabledChanged(t,e){this.ariaDisabled=this.disabled?"true":"false",this.proxy instanceof HTMLOptionElement&&(this.proxy.disabled=this.disabled)}selectedAttributeChanged(){this.defaultSelected=this.selectedAttribute,this.proxy instanceof HTMLOptionElement&&(this.proxy.defaultSelected=this.defaultSelected)}selectedChanged(){this.ariaSelected=this.selected?"true":"false",this.dirtySelected||(this.dirtySelected=!0),this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.selected)}initialValueChanged(t,e){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}get label(){return this.value??this.text}get text(){return this.textContent?.replace(/\s+/g," ").trim()??""}set value(t){const e=`${t??""}`;this._value=e,this.dirtyValue=!0,this.proxy instanceof HTMLOptionElement&&(this.proxy.value=e),r.cP.notify(this,"value")}get value(){return r.cP.track(this,"value"),this._value??this.text}get form(){return this.proxy?this.proxy.form:null}}(0,i.Cg)([r.sH,(0,i.Sn)("design:type",Boolean)],d.prototype,"checked",void 0),(0,i.Cg)([r.sH,(0,i.Sn)("design:type",Array)],d.prototype,"content",void 0),(0,i.Cg)([r.sH,(0,i.Sn)("design:type",Boolean)],d.prototype,"defaultSelected",void 0),(0,i.Cg)([(0,s.CF)({mode:"boolean"}),(0,i.Sn)("design:type",Boolean)],d.prototype,"disabled",void 0),(0,i.Cg)([(0,s.CF)({attribute:"selected",mode:"boolean"}),(0,i.Sn)("design:type",Boolean)],d.prototype,"selectedAttribute",void 0),(0,i.Cg)([r.sH,(0,i.Sn)("design:type",Boolean)],d.prototype,"selected",void 0),(0,i.Cg)([(0,s.CF)({attribute:"value",mode:"fromView"}),(0,i.Sn)("design:type",String)],d.prototype,"initialValue",void 0);class f{}(0,i.Cg)([r.sH,(0,i.Sn)("design:type",Object)],f.prototype,"ariaChecked",void 0),(0,i.Cg)([r.sH,(0,i.Sn)("design:type",Object)],f.prototype,"ariaPosInSet",void 0),(0,i.Cg)([r.sH,(0,i.Sn)("design:type",Object)],f.prototype,"ariaSelected",void 0),(0,i.Cg)([r.sH,(0,i.Sn)("design:type",Object)],f.prototype,"ariaSetSize",void 0),(0,l.X)(f,c.z),(0,l.X)(d,u.qw,f)},82774:function(t,e,n){"use strict";n.d(e,{e:function(){return c}});var i=n(96293),r=n(29194),o=n(10108);const s="slotchange";class a extends o.u{observe(t){t.addEventListener(s,this)}disconnect(t){t.removeEventListener(s,this)}getNodes(t){return t.assignedNodes(this.options)}handleEvent(t){const e=t.currentTarget;this.updateTarget(this.getSource(e),this.computeNodes(e))}}function c(t){return(0,i.Kg)(t)&&(t={property:t}),new a(t)}r.dg.define(a)},83781:function(t,e,n){"use strict";n.d(e,{t:function(){return i}});const i={horizontal:"horizontal",vertical:"vertical"}},84471:function(t,e,n){"use strict";n.d(e,{W:function(){return l},_:function(){return h}});var i=n(56911),r=n(60815),o=n(92011),s=n(38493),a=n(2298),c=n(35106),u=n(88458);function l(t){return(0,a.sb)(t)&&t.isTreeItem}class h extends o.L{constructor(){super(...arguments),this.expanded=!1,this.isTreeItem=!0,this.focusable=!1,this.nested=!1,this.isNestedItem=()=>l(this.parentElement),this.handleExpandCollapseButtonClick=t=>{this.disabled||t.defaultPrevented||(this.expanded=!this.expanded)},this.handleFocus=t=>{this.setAttribute("tabindex","0")},this.handleBlur=t=>{this.setAttribute("tabindex","-1")}}expandedChanged(t,e){this.$fastController.isConnected&&this.$emit("expanded-change",this)}selectedChanged(t,e){this.$fastController.isConnected&&this.$emit("selected-change",this)}itemsChanged(t,e){this.$fastController.isConnected&&this.items.forEach(t=>{l(t)&&(t.nested=!0)})}static focusItem(t){t.focusable=!0,t.focus()}get childItemLength(){return this.$fastController.isConnected?this.childItems?.filter(t=>l(t)).length:0}}(0,i.Cg)([(0,s.CF)({mode:"boolean"}),(0,i.Sn)("design:type",Boolean)],h.prototype,"expanded",void 0),(0,i.Cg)([(0,s.CF)({mode:"boolean"}),(0,i.Sn)("design:type",Boolean)],h.prototype,"selected",void 0),(0,i.Cg)([(0,s.CF)({mode:"boolean"}),(0,i.Sn)("design:type",Boolean)],h.prototype,"disabled",void 0),(0,i.Cg)([r.sH,(0,i.Sn)("design:type",Boolean)],h.prototype,"focusable",void 0),(0,i.Cg)([r.sH,(0,i.Sn)("design:type",Array)],h.prototype,"childItems",void 0),(0,i.Cg)([r.sH,(0,i.Sn)("design:type",Array)],h.prototype,"items",void 0),(0,i.Cg)([(0,s.CF)({mode:"boolean"}),(0,i.Sn)("design:type",Boolean)],h.prototype,"nested",void 0),(0,u.X)(h,c.qw)},86627:function(t,e,n){"use strict";n.d(e,{Eq:function(){return u},ON:function(){return o},Ql:function(){return s},zW:function(){return a}});var i=n(22870),r=n(5291);const o=r.q.create(1,1,1),s=r.q.create(0,0,0),a=r.q.create(.5,.5,.5),c=(0,i.Hs)("#0078D4"),u=r.q.create(c.r,c.g,c.b)},86699:function(t,e,n){"use strict";n.d(e,{q:function(){return h}});var i=n(10108),r=n(96950),o=n(60402),s=n(91640),a=n(82774),c=n(416),u=n(35106),l=n(18893);function h(t={}){return r.qy`
        <template
            role="treeitem"
            slot="${t=>t.isNestedItem()?"item":void 0}"
            tabindex="-1"
            aria-expanded="${t=>t.childItems&&t.childItemLength>0?t.expanded:void 0}"
            aria-selected="${t=>t.selected}"
            aria-disabled="${t=>t.disabled}"
            @focusin="${(t,e)=>t.handleFocus(e.event)}"
            @focusout="${(t,e)=>t.handleBlur(e.event)}"
            ${(0,c.Y)({property:"childItems",filter:(0,i.Y)()})}
        >
            <div class="positioning-region" part="positioning-region">
                <div class="content-region" part="content-region">
                    ${(0,s.z)(t=>t.childItems&&t.childItemLength>0,r.qy`
                            <div
                                aria-hidden="true"
                                class="expand-collapse-button"
                                part="expand-collapse-button"
                                @click="${(t,e)=>t.handleExpandCollapseButtonClick(e.event)}"
                                ${(0,o.K)("expandCollapseButton")}
                            >
                                <slot name="expand-collapse-glyph">
                                    ${(0,l.R)(t.expandCollapseGlyph)}
                                </slot>
                            </div>
                        `)}
                    ${(0,u.LT)(t)}
                    <slot></slot>
                    ${(0,u.aO)(t)}
                </div>
            </div>
            ${(0,s.z)(t=>t.childItems&&t.childItemLength>0&&t.expanded,r.qy`
                    <div role="group" class="items" part="items">
                        <slot name="item" ${(0,a.e)("items")}></slot>
                    </div>
                `)}
        </template>
    `}},86856:function(t,e,n){"use strict";n.d(e,{t:function(){return o}});var i=n(23429),r=n(72691);class o{constructor(t,e){this.cache=new WeakMap,this.ltr=t,this.rtl=e}connectedCallback(t){i.L.enqueue(()=>{this.attach(t.source)})}disconnectedCallback(t){const e=this.cache.get(t.source);e&&r.o.unsubscribe(e)}attach(t){if("object"!=typeof globalThis.process&&!t.isConnected)return;const e=this.cache.get(t)||new s(this.ltr,this.rtl,t),n=r.o.getValueFor(t);r.o.subscribe(e),e.attach(n),this.cache.set(t,e)}}class s{constructor(t,e,n){this.ltr=t,this.rtl=e,this.source=n,this.attached=null}handleChange(t,e){this.attach("default"===e.target?t.default:t.getValueFor(e.target))}attach(t){this.attached!==this[t]&&(null!==this.attached&&this.source.$fastController.removeStyles(this.attached),this.attached=this[t],null!==this.attached&&this.source.$fastController.addStyles(this.attached))}}},87122:function(t,e,n){"use strict";n.d(e,{M:function(){return r}});var i=n(37820);class r{constructor(t,e,n,i){this.r=t,this.g=e,this.b=n,this.a="number"!=typeof i||isNaN(i)?1:i}static fromObject(t){return!t||isNaN(t.r)||isNaN(t.g)||isNaN(t.b)?null:new r(t.r,t.g,t.b,t.a)}equalValue(t){return this.r===t.r&&this.g===t.g&&this.b===t.b&&this.a===t.a}toStringHexRGB(){return"#"+[this.r,this.g,this.b].map(this.formatHexValue).join("")}toStringHexRGBA(){return this.toStringHexRGB()+this.formatHexValue(this.a)}toStringHexARGB(){return"#"+[this.a,this.r,this.g,this.b].map(this.formatHexValue).join("")}toStringWebRGB(){return`rgb(${Math.round((0,i.NU)(this.r,0,255))},${Math.round((0,i.NU)(this.g,0,255))},${Math.round((0,i.NU)(this.b,0,255))})`}toStringWebRGBA(){return`rgba(${Math.round((0,i.NU)(this.r,0,255))},${Math.round((0,i.NU)(this.g,0,255))},${Math.round((0,i.NU)(this.b,0,255))},${(0,i.qE)(this.a,0,1)})`}roundToPrecision(t){return new r((0,i.l)(this.r,t),(0,i.l)(this.g,t),(0,i.l)(this.b,t),(0,i.l)(this.a,t))}clamp(){return new r((0,i.qE)(this.r,0,1),(0,i.qE)(this.g,0,1),(0,i.qE)(this.b,0,1),(0,i.qE)(this.a,0,1))}toObject(){return{r:this.r,g:this.g,b:this.b,a:this.a}}formatHexValue(t){return(0,i.IG)((0,i.NU)(t,0,255))}}},87353:function(t,e,n){"use strict";n.d(e,{S:function(){return r},p:function(){return o}});var i=n(96950);const r=i.qy`
<span part="end" class="end">
    <slot name="end"></slot>
</span>
`,o=i.qy`
<span part="start" class="start">
    <slot name="start"></slot>
</span>
`},87944:function(t,e,n){"use strict";n.d(e,{c:function(){return o}});var i=n(9790);const r=function(t="px"){return e=>e+t}();function o(t){return(0,i.A)(t)?e=>r(t(e)):r(t)}},87989:function(t,e,n){"use strict";function i(t,e){const n=t.relativeLuminance>e.relativeLuminance?t:e,i=t.relativeLuminance>e.relativeLuminance?e:t;return(n.relativeLuminance+.05)/(i.relativeLuminance+.05)}n.d(e,{v:function(){return i}})},88383:function(t,e,n){"use strict";n.d(e,{EH:function(){return M},FJ:function(){return R},MY:function(){return P},PV:function(){return q},R7:function(){return W},U5:function(){return N},Uf:function(){return U},Wt:function(){return O},YE:function(){return A},Z:function(){return L},g$:function(){return B},hm:function(){return j},iN:function(){return z},lT:function(){return _},lV:function(){return H},mm:function(){return V},w3:function(){return I},xk:function(){return G},zk:function(){return D}});var i=n(15454),r=n(50090),o=n(14777),s=n(62044),a=n(89449),c="window",u="document",l="navigator",h="location",d="console",f="performance",p="JSON",v="crypto",g="msCrypto",b="ReactNative",m="msie",y="trident/",w="XMLHttpRequest",$=null,x=null,k=!1,C=null,S=null;function E(t,e){var n=!1;if(t){try{if(!(n=e in t)){var r=t[i.vR];r&&(n=e in r)}}catch(t){}if(!n)try{var o=new t;n=!(0,s.b0)(o[e])}catch(t){}}return n}function M(t){var e=(0,r.mS)();return e&&e[t]?e[t]:t===c&&F()?window:null}function F(){return Boolean(typeof window===i._1&&window)}function D(){return F()?window:M(c)}function O(){return Boolean(typeof document===i._1&&document)}function A(){return O()?document:M(u)}function T(){return Boolean(typeof navigator===i._1&&navigator)}function I(){return T()?navigator:M(l)}function B(t){if(t&&k){var e=M("__mockLocation");if(e)return e}return typeof location===i._1&&location?location:M(h)}function N(){return typeof console!==i.bA?console:M(d)}function R(){return M(f)}function L(){return Boolean(typeof JSON===i._1&&JSON||null!==M(p))}function j(){return L()?JSON||M(p):null}function P(){return M(v)}function z(){return M(g)}function H(){var t=I();return!(!t||!t.product)&&t.product===b}function _(){var t=I();if(t&&(t[o.tX]!==x||null===$)){var e=((x=t[o.tX])||a.m5)[o.OL]();$=(0,s.Ju)(e,m)||(0,s.Ju)(e,y)}return $}function V(t){var e=Object[i.vR].toString[o.Ek](t),n=a.m5;return"[object Error]"===e?n="{ stack: '"+t.stack+"', message: '"+t.message+"', name: '"+t[o.RS]+"'":L()&&(n=j().stringify(t)),e+n}function U(){return null===S&&(S=T()&&Boolean(I().sendBeacon)),S}function W(t){var e=!1;try{e=!!M("fetch");var n=M("Request");e&&t&&n&&(e=E(n,"keepalive"))}catch(t){}return e}function q(){return null===C&&(C=typeof XDomainRequest!==i.bA)&&G()&&(C=C&&!E(M(w),"withCredentials")),C}function G(){var t=!1;try{t=!!M(w)}catch(t){}return t}},88458:function(t,e,n){"use strict";n.d(e,{X:function(){return r}});var i=n(38493);function r(t,...e){const n=i.$u.locate(t);e.forEach(e=>{Object.getOwnPropertyNames(e.prototype).forEach(n=>{"constructor"!==n&&Object.defineProperty(t.prototype,n,Object.getOwnPropertyDescriptor(e.prototype,n))});i.$u.locate(e).forEach(t=>n.push(t))})}},89449:function(t,e,n){"use strict";n.d(e,{Bw:function(){return c},Hr:function(){return a},LZ:function(){return r},Tj:function(){return b},Vo:function(){return h},Yd:function(){return s},Yp:function(){return f},Zi:function(){return g},dI:function(){return p},eT:function(){return o},fc:function(){return d},jy:function(){return u},kI:function(){return m},l0:function(){return v},m5:function(){return i},qT:function(){return l}});var i="",r="channels",o="core",s="createPerfMgr",a="disabled",c="extensionConfig",u="extensions",l="processTelemetry",h="priority",d="eventsSent",f="eventsDiscarded",p="eventsSendRequest",v="perfEvent",g="errorToConsole",b="warnToConsole",m="getPerfMgr"},89580:function(t,e,n){"use strict";n.d(e,{Y:function(){return o},v:function(){return s}});var i=n(68136);const{create:r}=i.G,o=r("type-ramp-plus-1-font-size","16px"),s=r("type-ramp-plus-1-line-height","22px")},90757:function(t,e,n){"use strict";n.d(e,{CX:function(){return s},em:function(){return c},kw:function(){return o},mD:function(){return a}});var i=n(68136);const{create:r}=i.G,o=r("accent-foreground-rest-delta",0),s=r("accent-foreground-hover-delta",6),a=r("accent-foreground-active-delta",-4),c=r("accent-foreground-focus-delta",0)},91326:function(t,e,n){"use strict";n.d(e,{XA:function(){return k}});var i,r=n(39813),o=n(96423),s=n(62044),a="Failed",c=a+"MonitorAjax",u="Track",l="Start",h="Stop",d="Event",f="AuthContext",p="Exception",v="Local",g="Session",b="Storage",m="Browser",y="Cannot",w="Buffer",$="InstrumentationKey",x=((0,o.Hj)({CRITICAL:1,WARNING:2}),(0,o.Hj)(((i={})[m+"DoesNotSupport"+v+b]=0,i[m+y+"Read"+v+b]=1,i[m+y+"Read"+g+b]=2,i[m+y+"Write"+v+b]=3,i[m+y+"Write"+g+b]=4,i[m+a+"RemovalFrom"+v+b]=5,i[m+a+"RemovalFrom"+g+b]=6,i[y+"SendEmptyTelemetry"]=7,i.ClientPerformanceMathError=8,i["ErrorParsingAI"+g+"Cookie"]=9,i.ErrorPVCalc=10,i[p+"WhileLoggingError"]=11,i[a+"AddingTelemetryTo"+w]=12,i[c+"Abort"]=13,i[c+"Dur"]=14,i[c+"Open"]=15,i[c+"RSC"]=16,i[c+"Send"]=17,i[c+"GetCorrelationHeader"]=18,i[a+"ToAddHandlerForOnBeforeUnload"]=19,i[a+"ToSendQueuedTelemetry"]=20,i[a+"ToReportDataLoss"]=21,i["Flush"+a]=22,i.MessageLimitPerPVExceeded=23,i.MissingRequiredFieldSpecification=24,i.NavigationTimingNotSupported=25,i.OnError=26,i[g+"RenewalDateIsZero"]=27,i.SenderNotInitialized=28,i[l+u+d+a]=29,i[h+u+d+a]=30,i[l+u+a]=31,i[h+u+a]=32,i.TelemetrySampledAndNotSent=33,i[u+d+a]=34,i[u+p+a]=35,i[u+"Metric"+a]=36,i[u+"PV"+a]=37,i[u+"PV"+a+"Calc"]=38,i[u+"Trace"+a]=39,i["Transmission"+a]=40,i[a+"ToSet"+b+w]=41,i[a+"ToRestore"+b+w]=42,i.InvalidBackendResponse=43,i[a+"ToFixDepricatedValues"]=44,i.InvalidDurationValue=45,i.TelemetryEnvelopeInvalid=46,i.CreateEnvelopeError=47,i[y+"SerializeObject"]=48,i[y+"SerializeObjectNonSerializable"]=49,i.CircularReferenceDetected=50,i["Clear"+f+a]=51,i[p+"Truncated"]=52,i.IllegalCharsInName=53,i.ItemNotInArray=54,i.MaxAjaxPerPVExceeded=55,i.MessageTruncated=56,i.NameTooLong=57,i.SampleRateOutOfRange=58,i["Set"+f+a]=59,i["Set"+f+a+"AccountName"]=60,i.StringValueTooLong=61,i.StartCalledMoreThanOnce=62,i.StopCalledWithoutStart=63,i["TelemetryInitializer"+a]=64,i.TrackArgumentsNotSpecified=65,i.UrlTooLong=66,i[g+b+w+"Full"]=67,i[y+"AccessCookie"]=68,i.IdTooLong=69,i.InvalidEvent=70,i[c+"SetRequestHeader"]=71,i["Send"+m+"InfoOnUserInit"]=72,i["Plugin"+p]=73,i["Notification"+p]=74,i.SnippetScriptLoadFailure=99,i["Invalid"+$]=100,i[y+"ParseAiBlobValue"]=101,i.InvalidContentBlob=102,i[u+"PageAction"+d+a]=103,i[a+"AddingCustomDefinedRequestContext"]=104,i["InMemory"+b+w+"Full"]=105,i[$+"Deprecation"]=106,i))),k=((0,o.Hj)({NotSet:0,Pii_DistinguishedName:1,Pii_GenericData:2,Pii_IPV4Address:3,Pii_IPv6Address:4,Pii_MailSubject:5,Pii_PhoneNumber:6,Pii_QueryString:7,Pii_SipAddress:8,Pii_SmtpAddress:9,Pii_Identity:10,Pii_Uri:11,Pii_Fqdn:12,Pii_IPV4AddressLegacy:13,CustomerContent_GenericContent:32}),(0,o.Hj)({Normal:1,CostDeferred:2,RealTime:3,Immediate:4}));(0,o.Hj)({Unspecified:0,String:1,Int32:2,UInt32:3,Int64:4,UInt64:5,Double:6,Bool:7,Guid:8,DateTime:9}),(0,o.Hj)({Normal:1,Critical:2}),(0,o.Hj)({NONE:0,ERROR:1,WARNING:2,INFORMATION:3}),(0,s.N6)((0,r.Im)((0,r.Im)({},x),(0,o.Hj)({AuthHandShakeError:501,AuthRedirectFail:502,BrowserCannotReadLocalStorage:503,BrowserCannotWriteLocalStorage:504,BrowserDoesNotSupportLocalStorage:505,CannotParseBiBlobValue:506,CannotParseDataAttribute:507,CVPluginNotAvailable:508,DroppedEvent:509,ErrorParsingAISessionCookie:510,ErrorProvidedChannels:511,FailedToGetCookies:512,FailedToInitializeCorrelationVector:513,FailedToInitializeSDK:514,InvalidContentBlob:515,InvalidCorrelationValue:516,SessionRenewalDateIsZero:517,SendPostOnCompleteFailure:518,PostResponseHandler:519,SDKNotInitialized:520})))},91640:function(t,e,n){"use strict";n.d(e,{z:function(){return s}});var i=n(96293);const r=()=>null;function o(t){return void 0===t?r:(0,i.Tn)(t)?t:()=>t}function s(t,e,n){const r=(0,i.Tn)(t)?t:()=>t,s=o(e),a=o(n);return(t,e)=>r(t,e)?s(t,e):a(t,e)}},92011:function(t,e,n){"use strict";n.d(e,{E:function(){return u},L:function(){return c}});var i=n(96293),r=n(18931),o=n(7813);function s(t){const e=class extends t{constructor(){super(),r.V7.forCustomElement(this)}$emit(t,e,n){return this.$fastController.emit(t,e,n)}connectedCallback(){this.$fastController.connect()}disconnectedCallback(){this.$fastController.disconnect()}attributeChangedCallback(t,e,n){this.$fastController.onAttributeChangedCallback(t,e,n)}};return o.I.registerBaseType(e),e}function a(t,e){return(0,i.Tn)(t)?o.I.compose(t,e).define().type:o.I.compose(this,t).define().type}const c=Object.assign(s(HTMLElement),{from:function(t){return s(t)},define:a,compose:function(t,e){return(0,i.Tn)(t)?o.I.compose(t,e):o.I.compose(this,t)}});function u(t){return function(e){a(e,t)}}},92393:function(t,e,n){"use strict";n.d(e,{QL:function(){return p},iL:function(){return v},YL:function(){return f},W_:function(){return d}});var i=n(68136),r=n(68009);var o=n(95239),s=n(90757),a=n(61201),c=n(57065);const{create:u}=i.G,l=t=>(e,n)=>function(t,e,n,i,o,s,a){const c=t.source,u=t.closestIndexOf(c),l=(0,r.F)(e),h=u+(1===l?Math.min(i,o):Math.max(l*i,l*o)),d=t.colorContrast(e,n,h,l),f=t.closestIndexOf(d),p=f+l*Math.abs(i-o);let v,g;return(1===l?i<o:l*i>l*o)?(v=f,g=p):(v=p,g=f),{rest:t.get(v),hover:t.get(g),active:t.get(v+l*s),focus:t.get(v+l*a)}}(e(a.c),n||e(o.p),t,e(s.kw),e(s.CX),e(s.mD),e(s.em)),h=u({name:"accent-foreground-recipe"},{evaluate:(t,e)=>l(c.i.normal)(t,e)}),d=u("accent-foreground-rest",t=>t(h).evaluate(t).rest),f=u("accent-foreground-hover",t=>t(h).evaluate(t).hover),p=u("accent-foreground-active",t=>t(h).evaluate(t).active),v=u("accent-foreground-focus",t=>t(h).evaluate(t).focus)},93800:function(t,e,n){"use strict";n.d(e,{S:function(){return r},l:function(){return i}});class i{constructor(t,e){this.sub1=void 0,this.sub2=void 0,this.spillover=void 0,this.subject=t,this.sub1=e}has(t){return void 0===this.spillover?this.sub1===t||this.sub2===t:-1!==this.spillover.indexOf(t)}subscribe(t){const e=this.spillover;if(void 0===e){if(this.has(t))return;if(void 0===this.sub1)return void(this.sub1=t);if(void 0===this.sub2)return void(this.sub2=t);this.spillover=[this.sub1,this.sub2,t],this.sub1=void 0,this.sub2=void 0}else{-1===e.indexOf(t)&&e.push(t)}}unsubscribe(t){const e=this.spillover;if(void 0===e)this.sub1===t?this.sub1=void 0:this.sub2===t&&(this.sub2=void 0);else{const n=e.indexOf(t);-1!==n&&e.splice(n,1)}}notify(t){const e=this.spillover,n=this.subject;if(void 0===e){const e=this.sub1,i=this.sub2;void 0!==e&&e.handleChange(n,t),void 0!==i&&i.handleChange(n,t)}else for(let i=0,r=e.length;i<r;++i)e[i].handleChange(n,t)}}class r{constructor(t){this.subscribers={},this.subjectSubscribers=null,this.subject=t}notify(t){var e,n;null===(e=this.subscribers[t])||void 0===e||e.notify(t),null===(n=this.subjectSubscribers)||void 0===n||n.notify(t)}subscribe(t,e){var n,r;let o;o=e?null!==(n=this.subscribers[e])&&void 0!==n?n:this.subscribers[e]=new i(this.subject):null!==(r=this.subjectSubscribers)&&void 0!==r?r:this.subjectSubscribers=new i(this.subject),o.subscribe(t)}unsubscribe(t,e){var n,i;e?null===(n=this.subscribers[e])||void 0===n||n.unsubscribe(t):null===(i=this.subjectSubscribers)||void 0===i||i.unsubscribe(t)}}},93809:function(t,e,n){"use strict";n.d(e,{F:function(){return a},U:function(){return s}});var i=n(60815),r=n(72454);class o extends r.O{createObserver(t){return i.cP.binding(this.evaluate,t,this.isVolatile)}}function s(t,e,n=i.cP.isVolatileBinding(t)){return new o(t,e,n)}function a(t,e){const n=new o(t);return n.options=e,n}},95239:function(t,e,n){"use strict";n.d(e,{p:function(){return s}});var i=n(68136),r=n(95639);const{create:o}=i.G,s=o("fill-color",t=>t(r.Ef))},95639:function(t,e,n){"use strict";n.d(e,{Ef:function(){return u}});var i=n(68136),r=n(97004);var o=n(356),s=n(31023);const{create:a}=i.G,c=a({name:"neutral-layer-1-recipe"},{evaluate:t=>{return e=t(s.r),n=t(o.l),e.get(e.closestIndexOf((0,r.Z)(n)));var e,n}}),u=a("neutral-layer-1",t=>t(c).evaluate(t))},96271:function(t,e,n){"use strict";n.d(e,{UU:function(){return p},aq:function(){return f},cL:function(){return v}});var i,r=n(50090),o=n(14777),s=n(12839),a=n(88383),c=n(5410),u=n(62044),l=n(89449),h=n(69912),d=null;function f(){var t=v();return t[o.Re](0,8)+"-"+t[o.Re](8,12)+"-"+t[o.Re](12,16)+"-"+t[o.Re](16,20)+"-"+t[o.Re](20)}function p(){var t=(0,a.FJ)();return t&&t.now?t.now():(0,u.x3)()}function v(){for(var t,e=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"],n=l.m5,i=0;i<4;i++)n+=e[15&(t=(0,h.VN)())]+e[t>>4&15]+e[t>>8&15]+e[t>>12&15]+e[t>>16&15]+e[t>>20&15]+e[t>>24&15]+e[t>>28&15];var r=e[8+(3&(0,h.VN)())|0];return n[o.$4](0,8)+n[o.$4](9,4)+"4"+n[o.$4](13,3)+r+n[o.$4](16,3)+n[o.$4](19,12)}var g={_canUseCookies:void 0,isTypeof:u.Ed,isUndefined:u.b0,isNullOrUndefined:u.hX,hasOwnProperty:u.mQ,isFunction:u.Tn,isObject:u.Gv,isDate:u.$P,isArray:u.cy,isError:u.bJ,isString:u.Kg,isNumber:u.Et,isBoolean:u.Lm,toISOString:u._u,arrForEach:u.Iu,arrIndexOf:u.rD,arrMap:u.W$,arrReduce:u.KT,strTrim:u.EH,objCreate:r.AQ,objKeys:u.cG,objDefineAccessors:u.r,addEventHandler:c.So,dateNow:u.x3,isIE:a.lT,disableCookies:function(){b()[o.kt](!1)},newGuid:f,perfNow:p,newId:h.Si,randomValue:h.Z1,random32:h.VN,mwcRandomSeed:h.yc,mwcRandom32:h.k5,generateW3CId:v};c.Q3,c.Q3,c.Ym,c.Ym;function b(t,e){var n=(0,s.d5)(t,e),r=g._canUseCookies;return null===d&&(d=[],i=r,(0,u.r)(g,"_canUseCookies",function(){return i},function(t){i=t,(0,u.Iu)(d,function(e){e[o.kt](t)})})),-1===(0,u.rD)(d,n)&&d[o.y5](n),(0,u.Lm)(r)&&n[o.kt](r),(0,u.Lm)(i)&&n[o.kt](i),n}},96293:function(t,e,n){"use strict";let i;n.d(e,{Kg:function(){return a},Tn:function(){return s},lQ:function(){return c},uL:function(){return o}});const r="fast-kernel";try{if(document.currentScript)i=document.currentScript.getAttribute(r);else{const t=document.getElementsByTagName("script");i=t[t.length-1].getAttribute(r)}}catch(t){i="isolate"}let o;switch(i){case"share":o=Object.freeze({updateQueue:1,observable:2,contextEvent:3,elementRegistry:4});break;case"share-v2":o=Object.freeze({updateQueue:1.2,observable:2.2,contextEvent:3.2,elementRegistry:4.2});break;default:const t=`-${Math.random().toString(36).substring(2,8)}`;o=Object.freeze({updateQueue:`1.2${t}`,observable:`2.2${t}`,contextEvent:`3.2${t}`,elementRegistry:`4.2${t}`})}const s=t=>"function"==typeof t,a=t=>"string"==typeof t,c=()=>{}},96423:function(t,e,n){"use strict";n.d(e,{Hj:function(){return r}});var i=n(62044);function r(t){var e={};return(0,i.z)(t,function(t,n){e[t]=n,e[n]=t}),(0,i.ol)(e)}},96600:function(t,e,n){"use strict";n.d(e,{m:function(){return N}});var i=n(84471),r=n(37180),o=n(74849),s=n(64187),a=n(73477),c=n(60993),u=n(22131),l=n(50882),h=n(48196),d=n(86856),f=n(26920),p=n(74838),v=n(48751),g=n(45476),b=n(7896),m=n(14996),y=n(57416),w=n(41123),$=n(79288),x=n(37302),k=n(92393),C=n(68136);const S=C.G.create("tree-item-expand-collapse-hover",t=>{const e=t(g.EE);return e.evaluate(t,e.evaluate(t).hover).hover}),E=C.G.create("tree-item-expand-collapse-selected-hover",t=>{const e=t(x.jO);return t(g.EE).evaluate(t,e.evaluate(t).rest).hover}),M=o.A`
    .expand-collapse-glyph {
        transform: rotate(0deg);
    }
    :host([nested]) .expand-collapse-button {
        left: var(--expand-collapse-button-nested-width, calc(${h.D} * -1px));
    }
    :host([selected])::after {
        left: calc(${f.vd} * 1px);
    }
    :host([expanded]) > .positioning-region .expand-collapse-glyph {
        transform: rotate(45deg);
    }
`,F=o.A`
    .expand-collapse-glyph {
        transform: rotate(180deg);
    }
    :host([nested]) .expand-collapse-button {
        right: var(--expand-collapse-button-nested-width, calc(${h.D} * -1px));
    }
    :host([selected])::after {
        right: calc(${f.vd} * 1px);
    }
    :host([expanded]) > .positioning-region .expand-collapse-glyph {
        transform: rotate(135deg);
    }
`,D=o.A.partial`((${p.Ss} / 2) * ${p.vR}) + ((${p.vR} * ${p.Br}) / 2)`,O=o.A`
    ${(0,s.V)("block")} :host {
        contain: content;
        position: relative;
        outline: none;
        color: ${v.l};
        background: ${g.Wl};
        cursor: pointer;
        font-family: ${b.O};
        --expand-collapse-button-size: calc(${h.D} * 1px);
        --tree-item-nested-width: 0;
    }

    :host(:focus) > .positioning-region {
        outline: none;
    }

    :host(:focus) .content-region {
        outline: none;
    }

    .positioning-region {
        display: flex;
        position: relative;
        box-sizing: border-box;
        border: calc(${f.XA} * 1px) solid transparent;
        height: calc((${h.D} + 1) * 1px);
    }

    :host(:${a.N}) .positioning-region {
        border: calc(${f.XA} * 1px) solid ${m.WN};
        border-radius: calc(${y.Pb} * 1px);
        color: ${v.l};
    }

    .positioning-region::before {
        content: "";
        display: block;
        width: var(--tree-item-nested-width);
        flex-shrink: 0;
    }

    .positioning-region:hover {
        background: ${g.oO};
    }

    .positioning-region:active {
        background: ${g.wO};
    }

    .content-region {
        display: inline-flex;
        align-items: center;
        white-space: nowrap;
        width: 100%;
        height: calc(${h.D} * 1px);
        margin-inline-start: calc(${p.vR} * 2px + 8px);
        font-size: ${w.K};
        line-height: ${w.Z};
        font-weight: 400;
    }

    .items {
        display: none;
        ${""} font-size: calc(1em + (${p.vR} + 16) * 1px);
    }

    .expand-collapse-button {
        background: none;
        border: none;
        outline: none;
        ${""} width: calc((${D} + (${p.vR} * 2)) * 1px);
        height: calc((${D} + (${p.vR} * 2)) * 1px);
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        margin: 0 6px;
    }

    .expand-collapse-glyph {
        width: 16px;
        height: 16px;
        transition: transform 0.1s linear;
        pointer-events: none;
        fill: ${v.l};
    }

    ::slotted([slot="start"]),
    ::slotted([slot="end"]) {
        display: flex;
        fill: currentcolor;
    }

    ::slotted(svg) {
        ${""} width: 16px;
        height: 16px;
    }

    ::slotted([slot="start"]) {
        ${""} margin-inline-end: calc(${p.vR} * 2px + 2px);
    }

    ::slotted([slot="end"]) {
        ${""} margin-inline-start: calc(${p.vR} * 2px + 2px);
    }

    :host([aria-expanded="true"]) > .items {
        display: block;
    }

    :host([disabled]) .content-region {
        opacity: ${$.q};
        cursor: ${c.Z};
    }

    :host([nested]) .content-region {
        position: relative;
        margin-inline-start: var(--expand-collapse-button-size);
    }

    :host([nested]) .expand-collapse-button {
        position: absolute;
    }

    :host([nested]) .expand-collapse-button:hover {
        background: ${S};
    }

    :host([selected]) .positioning-region {
        background: ${x.F7};
    }

    :host([selected]) .expand-collapse-button:hover {
        background: ${E};
    }

    :host([selected])::after {
        content: "";
        display: block;
        position: absolute;
        top: calc((${h.D} / 4) * 1px);
        width: 3px;
        height: calc((${h.D} / 2) * 1px);
        ${""} background: ${k.W_};
        border-radius: calc(${y.Pb} * 1px);
    }

    ::slotted(fluent-tree-item) {
        --tree-item-nested-width: 1em;
        --expand-collapse-button-nested-width: calc(${h.D} * -1px);
    }
`.withBehaviors(new d.t(M,F),(0,u.mr)(o.A`
            :host {
                forced-color-adjust: none;
                border-color: transparent;
                background: ${l.A.Field};
                color: ${l.A.FieldText};
            }
            :host .content-region {
                color: ${l.A.FieldText};
            }
            :host .content-region .expand-collapse-glyph,
            :host .content-region ::slotted([slot="start"]),
            :host .content-region ::slotted([slot="end"]) {
                fill: ${l.A.FieldText};
            }
            :host .positioning-region:hover,
            :host([selected]) .positioning-region {
                background: ${l.A.Highlight};
            }
            :host .positioning-region:hover .content-region,
            :host([selected]) .positioning-region .content-region {
                color: ${l.A.HighlightText};
            }
            :host .positioning-region:hover .content-region .expand-collapse-glyph,
            :host .positioning-region:hover .content-region ::slotted([slot="start"]),
            :host .positioning-region:hover .content-region ::slotted([slot="end"]),
            :host([selected]) .content-region .expand-collapse-glyph,
            :host([selected]) .content-region ::slotted([slot="start"]),
            :host([selected]) .content-region ::slotted([slot="end"]) {
                fill: ${l.A.HighlightText};
            }
            :host([selected])::after {
                background: ${l.A.Field};
            }
            :host(:${a.N}) .positioning-region {
                border-color: ${l.A.FieldText};
                box-shadow: 0 0 0 2px inset ${l.A.Field};
                color: ${l.A.FieldText};
            }
            :host([disabled]) .content-region,
            :host([disabled]) .positioning-region:hover .content-region {
                opacity: 1;
                color: ${l.A.GrayText};
            }
            :host([disabled]) .content-region .expand-collapse-glyph,
            :host([disabled]) .content-region ::slotted([slot="start"]),
            :host([disabled]) .content-region ::slotted([slot="end"]),
            :host([disabled])
                .positioning-region:hover
                .content-region
                .expand-collapse-glyph,
            :host([disabled])
                .positioning-region:hover
                .content-region
                ::slotted([slot="start"]),
            :host([disabled])
                .positioning-region:hover
                .content-region
                ::slotted([slot="end"]) {
                fill: ${l.A.GrayText};
            }
            :host([disabled]) .positioning-region:hover {
                background: ${l.A.Field};
            }
            .expand-collapse-glyph,
            ::slotted([slot="start"]),
            ::slotted([slot="end"]) {
                fill: ${l.A.FieldText};
            }
            :host([nested]) .expand-collapse-button:hover {
                background: ${l.A.Field};
            }
            :host([nested]) .expand-collapse-button:hover .expand-collapse-glyph {
                fill: ${l.A.FieldText};
            }
        `));var A=n(86699),T=n(96950);const I=(0,A.q)({expandCollapseGlyph:T.qy`
        <svg
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            class="expand-collapse-glyph"
        >
            <path
                d="M5.00001 12.3263C5.00124 12.5147 5.05566 12.699 5.15699 12.8578C5.25831 13.0167 5.40243 13.1437 5.57273 13.2242C5.74304 13.3047 5.9326 13.3354 6.11959 13.3128C6.30659 13.2902 6.4834 13.2152 6.62967 13.0965L10.8988 8.83532C11.0739 8.69473 11.2153 8.51658 11.3124 8.31402C11.4096 8.11146 11.46 7.88966 11.46 7.66499C11.46 7.44033 11.4096 7.21853 11.3124 7.01597C11.2153 6.81341 11.0739 6.63526 10.8988 6.49467L6.62967 2.22347C6.48274 2.10422 6.30501 2.02912 6.11712 2.00691C5.92923 1.9847 5.73889 2.01628 5.56823 2.09799C5.39757 2.17969 5.25358 2.30817 5.153 2.46849C5.05241 2.62882 4.99936 2.8144 5.00001 3.00369V12.3263Z"
            />
        </svg>
    `});class B extends i._{}const N=B.compose({name:`${r.c.prefix}-tree-item`,template:I,styles:O})},96751:function(t,e,n){"use strict";n.d(e,{I:function(){return h}});var i=n(56911),r=n(92011),o=n(23429),s=n(38493),a=n(60815),c=n(88458),u=n(35106);const l="ease-in-out";class h extends r.L{constructor(){super(...arguments),this.framesPerSecond=60,this.updatingItems=!1,this.speed=600,this.easing=l,this.flippersHiddenFromAT=!1,this.scrolling=!1,this.resizeDetector=null}get frameTime(){return 1e3/this.framesPerSecond}scrollingChanged(t,e){if(this.scrollContainer){const t=1==this.scrolling?"scrollstart":"scrollend";this.$emit(t,this.scrollContainer.scrollLeft)}}get isRtl(){return this.scrollItems.length>1&&this.scrollItems[0].offsetLeft>this.scrollItems[1].offsetLeft}connectedCallback(){super.connectedCallback(),this.initializeResizeDetector()}disconnectedCallback(){this.disconnectResizeDetector(),super.disconnectedCallback()}scrollItemsChanged(t,e){e&&!this.updatingItems&&o.L.enqueue(()=>this.setStops())}disconnectResizeDetector(){this.resizeDetector&&(this.resizeDetector.disconnect(),this.resizeDetector=null)}initializeResizeDetector(){this.disconnectResizeDetector(),this.resizeDetector=new window.ResizeObserver(this.resized.bind(this)),this.resizeDetector.observe(this)}updateScrollStops(){this.updatingItems=!0;const t=this.scrollItems.reduce((t,e)=>e instanceof HTMLSlotElement?t.concat(e.assignedElements()):(t.push(e),t),[]);this.scrollItems=t,this.updatingItems=!1}setStops(){this.updateScrollStops();const{scrollContainer:t}=this,{scrollLeft:e}=t,{width:n,left:i}=t.getBoundingClientRect();this.width=n;let r=0,o=this.scrollItems.map((t,n)=>{const{left:o,width:s}=t.getBoundingClientRect(),a=Math.round(o+e-i),c=Math.round(a+s);return this.isRtl?-c:(r=c,0===n?0:a)}).concat(r);o=this.fixScrollMisalign(o),o.sort((t,e)=>Math.abs(t)-Math.abs(e)),this.scrollStops=o,this.setFlippers()}validateStops(t=!0){const e=()=>!!this.scrollStops.find(t=>Math.abs(t)>0);return!e()&&t&&this.setStops(),e()}fixScrollMisalign(t){if(this.isRtl&&t.some(t=>t>0)){t.sort((t,e)=>e-t);const e=t[0];t=t.map(t=>t-e)}return t}setFlippers(){const t=this.scrollContainer.scrollLeft;this.previousFlipperContainer?.classList.toggle("disabled",0===t),this.scrollStops&&this.nextFlipperContainer?.classList.toggle("disabled",this.validateStops(!1)&&Math.abs(t)+this.width>=this.content?.offsetWidth||(this.scrollContainer?.offsetWidth??0)>=(this.content?.offsetWidth??0))}scrollInView(t,e=0,n){if("number"!=typeof t&&t&&(t=this.scrollItems.findIndex(e=>e===t||e.contains(t))),void 0!==t){n=n??e;const{scrollContainer:i,scrollStops:r,scrollItems:o}=this,{scrollLeft:s}=this.scrollContainer,{width:a}=i.getBoundingClientRect(),c=r[t],{width:u}=o[t].getBoundingClientRect(),l=c+u,h=s+e>c;if(h||s+a-n<l){const t=[...r].sort((t,e)=>h?e-t:t-e).find(t=>h?t+e<c:t+a-(n??0)>l)??0;this.scrollToPosition(t)}}}keyupHandler(t){switch(t.key){case"ArrowLeft":this.scrollToPrevious();break;case"ArrowRight":this.scrollToNext()}}scrollToPrevious(){this.validateStops();const t=this.scrollContainer.scrollLeft;let e=0;e=this.isRtl?this.scrollStops.findIndex((e,n)=>e<=t&&(n===this.scrollStops.length-1||this.scrollStops[n+1]<t)):this.scrollStops.findIndex((e,n)=>e>=t&&(n===this.scrollStops.length-1||this.scrollStops[n+1]>t));const n=Math.abs(this.scrollStops[e+1]);let i=this.scrollStops.findIndex(t=>Math.abs(t)+this.width>n);(i>=e||-1===i)&&(i=e>0?e-1:0),this.scrollToPosition(this.scrollStops[i],t)}scrollToNext(){this.validateStops();const t=this.scrollContainer.scrollLeft,e=this.scrollStops.findIndex(e=>Math.abs(e)>=Math.abs(t)),n=this.scrollStops.findIndex(e=>Math.abs(t)+this.width<=Math.abs(e));let i=e;n>e+2?i=n-2:e<this.scrollStops.length-2&&(i=e+1),this.scrollToPosition(this.scrollStops[i],t)}scrollToPosition(t,e=this.scrollContainer.scrollLeft){if(this.scrolling)return;this.scrolling=!0;const n=this.duration??Math.abs(t-e)/this.speed+"s";this.content.style.setProperty("transition-duration",n);const i=parseFloat(getComputedStyle(this.content).getPropertyValue("transition-duration")),r=e=>{e&&e.target!==e.currentTarget||(this.content.style.setProperty("transition-duration","0s"),this.content.style.removeProperty("transform"),this.scrollContainer.style.setProperty("scroll-behavior","auto"),this.scrollContainer.scrollLeft=t,this.setFlippers(),this.content.removeEventListener("transitionend",r),this.scrolling=!1)};if(0===i)return void r();this.content.addEventListener("transitionend",r);const o=this.scrollContainer.scrollWidth-this.scrollContainer.clientWidth;let s=this.scrollContainer.scrollLeft-Math.min(t,o);this.isRtl&&(s=this.scrollContainer.scrollLeft+Math.min(Math.abs(t),o)),this.content.style.setProperty("transition-property","transform"),this.content.style.setProperty("transition-timing-function",this.easing),this.content.style.setProperty("transform",`translateX(${s}px)`)}resized(){this.resizeTimeout&&(this.resizeTimeout=clearTimeout(this.resizeTimeout)),this.resizeTimeout=setTimeout(()=>{this.width=this.scrollContainer.offsetWidth,this.setFlippers()},this.frameTime)}scrolled(){this.scrollTimeout&&(this.scrollTimeout=clearTimeout(this.scrollTimeout)),this.scrollTimeout=setTimeout(()=>{this.setFlippers()},this.frameTime)}getScrollStops(){return this.scrollStops}getWidth(){return this.width}}(0,i.Cg)([(0,s.CF)({converter:s.R$}),(0,i.Sn)("design:type",Number)],h.prototype,"speed",void 0),(0,i.Cg)([s.CF,(0,i.Sn)("design:type",String)],h.prototype,"duration",void 0),(0,i.Cg)([s.CF,(0,i.Sn)("design:type",String)],h.prototype,"easing",void 0),(0,i.Cg)([(0,s.CF)({attribute:"flippers-hidden-from-at",converter:s.Bs}),(0,i.Sn)("design:type",Boolean)],h.prototype,"flippersHiddenFromAT",void 0),(0,i.Cg)([a.sH,(0,i.Sn)("design:type",Boolean)],h.prototype,"scrolling",void 0),(0,i.Cg)([a.sH,(0,i.Sn)("design:type",Array)],h.prototype,"scrollItems",void 0),(0,i.Cg)([(0,s.CF)({attribute:"view"}),(0,i.Sn)("design:type",String)],h.prototype,"view",void 0),(0,c.X)(h,u.qw)},96950:function(t,e,n){"use strict";n.d(e,{dj:function(){return D},kc:function(){return A},qy:function(){return T}});var i=n(19470),r=n(96293),o=n(72454),s=n(32625),a=n(93809),c=n(34188),u=n(42277),l=n(60815),h=n(29194),d=n(35727),f=n(22020);const p={[u.D.attribute]:u.d.setAttribute,[u.D.booleanAttribute]:u.d.setBooleanAttribute,[u.D.property]:(t,e,n)=>t[e]=n,[u.D.content]:function(t,e,n,i){if(null==n&&(n=""),function(t){return void 0!==t.create}(n)){t.textContent="";let e=t.$fastView;if(void 0===e)if((0,c.VS)(i)&&(0,c.VS)(n)&&void 0!==i.bindingViewBoundaries[this.targetNodeId]&&i.hydrationStage!==f.xW.hydrated){const t=i.bindingViewBoundaries[this.targetNodeId];e=n.hydrate(t.first,t.last)}else e=n.create();else t.$fastTemplate!==n&&(e.isComposed&&(e.remove(),e.unbind()),e=n.create());e.isComposed?e.needsBindOnly&&(e.needsBindOnly=!1,e.bind(i.source,i.context)):(e.isComposed=!0,e.bind(i.source,i.context),e.insertBefore(t),t.$fastView=e,t.$fastTemplate=n)}else{const e=t.$fastView;void 0!==e&&e.isComposed&&(e.isComposed=!1,e.remove(),e.needsBindOnly?e.needsBindOnly=!1:e.unbind()),t.textContent=n}},[u.D.tokenList]:function(t,e,n){var i;const r=`${this.id}-t`,o=null!==(i=t[r])&&void 0!==i?i:t[r]={v:0,cv:Object.create(null)},s=o.cv;let a=o.v;const c=t[e];if(null!=n&&n.length){const t=n.split(/\s+/);for(let e=0,n=t.length;e<n;++e){const n=t[e];""!==n&&(s[n]=a,c.add(n))}}if(o.v=a+1,0!==a){a-=1;for(const t in s)s[t]===a&&c.remove(t)}},[u.D.event]:()=>{}};class v{constructor(t){this.dataBinding=t,this.updateTarget=null,this.aspectType=u.D.content}createHTML(t){return d.VK.interpolation(t(this))}createBehavior(){var t;if(null===this.updateTarget){const e=p[this.aspectType],n=null!==(t=this.dataBinding.policy)&&void 0!==t?t:this.policy;if(!e)throw i.Zx.error(1205);this.data=`${this.id}-d`,this.updateTarget=n.protect(this.targetTagName,this.aspectType,this.targetAspect,e)}return this}bind(t){var e;const n=t.targets[this.targetNodeId],i=(0,c.VS)(t)&&t.hydrationStage&&t.hydrationStage!==f.xW.hydrated;switch(this.aspectType){case u.D.event:n[this.data]=t,n.addEventListener(this.targetAspect,this,this.dataBinding.options);break;case u.D.content:t.onUnbind(this);default:const r=null!==(e=n[this.data])&&void 0!==e?e:n[this.data]=this.dataBinding.createObserver(this,this);if(r.target=n,r.controller=t,i&&(this.aspectType===u.D.attribute||this.aspectType===u.D.booleanAttribute)){r.bind(t);break}this.updateTarget(n,this.targetAspect,r.bind(t),t)}}unbind(t){const e=t.targets[this.targetNodeId].$fastView;void 0!==e&&e.isComposed&&(e.unbind(),e.needsBindOnly=!0)}handleEvent(t){const e=t.currentTarget[this.data];if(e.isBound){l.ao.setEvent(t);const n=this.dataBinding.evaluate(e.source,e.context);l.ao.setEvent(null),!0!==n&&t.preventDefault()}}handleChange(t,e){const n=e.target,i=e.controller;this.updateTarget(n,this.targetAspect,e.bind(i),i)}}h.dg.define(v,{aspected:!0});const g=(t,e)=>`${t}.${e}`,b={},m={index:0,node:null};function y(t){t.startsWith("fast-")||i.Zx.warn(1204,{name:t})}const w=new Proxy(document.createElement("div"),{get(t,e){y(e);const n=Reflect.get(t,e);return(0,r.Tn)(n)?n.bind(t):n},set:(t,e,n)=>(y(e),Reflect.set(t,e,n))});class ${constructor(t,e,n){this.fragment=t,this.directives=e,this.policy=n,this.proto=null,this.nodeIds=new Set,this.descriptors={},this.factories=[]}addFactory(t,e,n,i,r){var o,s;this.nodeIds.has(n)||(this.nodeIds.add(n),this.addTargetDescriptor(e,n,i)),t.id=null!==(o=t.id)&&void 0!==o?o:(0,d.Hn)(),t.targetNodeId=n,t.targetTagName=r,t.policy=null!==(s=t.policy)&&void 0!==s?s:this.policy,this.factories.push(t)}freeze(){return this.proto=Object.create(null,this.descriptors),this}addTargetDescriptor(t,e,n){const i=this.descriptors;if("r"===e||"h"===e||i[e])return;if(!i[t]){const e=t.lastIndexOf("."),n=t.substring(0,e),i=parseInt(t.substring(e+1));this.addTargetDescriptor(n,t,i)}let r=b[e];if(!r){const i=`_${e}`;b[e]=r={get(){var e;return null!==(e=this[i])&&void 0!==e?e:this[i]=this[t].childNodes[n]}}}i[e]=r}createView(t){const e=this.fragment.cloneNode(!0),n=Object.create(this.proto);n.r=e,n.h=null!=t?t:w;for(const t of this.nodeIds)n[t];return new f.NA(e,this.factories,n)}}function x(t,e,n,i,r,o=!1){const a=n.attributes,c=t.directives;for(let u=0,l=a.length;u<l;++u){const f=a[u],p=f.value,g=d.iX.parse(p,c);let b=null;null===g?o&&(b=new v((0,s.a)(()=>p,t.policy)),h.dg.assignAspect(b,f.name)):b=E.aggregate(g,t.policy),null!==b&&(n.removeAttributeNode(f),u--,l--,t.addFactory(b,e,i,r,n.tagName))}}function k(t,e,n){let i=0,r=e.firstChild;for(;r;){const e=C(t,n,r,i);r=e.node,i=e.index}}function C(t,e,n,i){const o=g(e,i);switch(n.nodeType){case 1:x(t,e,n,o,i),k(t,n,o);break;case 3:return function(t,e,n,i,o){const s=d.iX.parse(e.textContent,t.directives);if(null===s)return m.node=e.nextSibling,m.index=o+1,m;let a,c=a=e;for(let e=0,u=s.length;e<u;++e){const u=s[e];0!==e&&(o++,i=g(n,o),a=c.parentNode.insertBefore(document.createTextNode(""),c.nextSibling)),(0,r.Kg)(u)?a.textContent=u:(a.textContent=" ",h.dg.assignAspect(u),t.addFactory(u,n,i,o,null)),c=a}return m.index=o+1,m.node=c.nextSibling,m}(t,n,e,o,i);case 8:const s=d.iX.parse(n.data,t.directives);null!==s&&t.addFactory(E.aggregate(s),e,o,i,null)}return m.index=i+1,m.node=n.nextSibling,m}const S="TEMPLATE",E={compile(t,e,n=u.d.policy,i){let o;if((0,r.Kg)(t)){o=document.createElement(S),o.innerHTML=n.createHTML(t);const e=o.content.firstElementChild;null!==e&&e.tagName===S&&(o=e)}else o=t;o.content.firstChild||o.content.lastChild||o.content.appendChild(document.createComment(""));const s=document.adoptNode(o.content),a=new $(s,e,n);var c,l;return x(a,"",o,"h",0,!0),c=s.firstChild,l=e,(c&&8==c.nodeType&&null!==d.iX.parse(c.data,l)||1===s.childNodes.length&&Object.keys(e).length>0)&&s.insertBefore(document.createComment(""),s.firstChild),k(a,s,"r"),m.node=null,a.freeze()},setDefaultStrategy(t){this.compile=t},aggregate(t,e=u.d.policy){if(1===t.length)return t[0];let n,i,o=!1;const s=t.length,c=t.map(t=>(0,r.Kg)(t)?()=>t:(n=t.sourceAspect||n,o=o||t.dataBinding.isVolatile,i=i||t.dataBinding.policy,t.dataBinding.evaluate)),l=new v((0,a.U)((t,e)=>{let n="";for(let i=0;i<s;++i)n+=c[i](t,e);return n},null!=i?i:e,o));return h.dg.assignAspect(l,n),l}},M=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/,F=Object.create(null);class D{constructor(t,e=F){this.html=t,this.factories=e}createHTML(t){const e=this.factories;for(const n in e)t(e[n]);return this.html}}function O(t,e,n,i=h.dg.getForInstance(t)){if(i.aspected){const n=M.exec(e);null!==n&&h.dg.assignAspect(t,n[2])}return t.createHTML(n)}D.empty=new D(""),h.dg.define(D);class A{constructor(t,e={},n,i){this.policy=i,this.result=null,this.html=t,this.factories=e,this.opCodes=n}compile(){return null===this.result&&(this.result=E.compile(this.html,this.factories,this.policy,this.opCodes)),this.result}create(t){return this.compile().createView(t)}inline(){return new D((0,r.Kg)(this.html)?this.html:this.html.innerHTML,this.factories)}withPolicy(t){if(this.result)throw i.Zx.error(1208);if(this.policy)throw i.Zx.error(1207);return this.policy=t,this}render(t,e,n){const i=this.create(n);return i.bind(t),i.appendTo(e),i}static createFromOpCodes(t){return new A("",void 0,t,void 0)}static create(t,e,n){let i="";const r=Object.create(null),o=t=>{var e;const n=null!==(e=t.id)&&void 0!==e?e:t.id=(0,d.Hn)();return r[n]=t,n};for(let n=0,r=t.length-1;n<r;++n){const r=t[n],s=e[n];let a;i+=r;let c=A.createBindingDirectiveFromExpression(s);c||(a=h.dg.getForInstance(s),c=s),i+=O(c,r,o,a)}return new A(i+t[t.length-1],r,void 0,n)}static createBindingDirective(t,e){let n;const i=t=>{var e;const i=null!==(e=t.id)&&void 0!==e?e:t.id=(0,d.Hn)();return n=t,i};{const n=t,r=e;let o,s=A.createBindingDirectiveFromExpression(r);s||(o=h.dg.getForInstance(r),s=r),O(s,n,i,o)}return n}static createBindingDirectiveFromExpression(t){let e;if((0,r.Tn)(t))e=new v((0,a.U)(t));else if(t instanceof o.O)e=new v(t);else if(!h.dg.getForInstance(t)){const n=t;e=new v((0,s.a)(()=>n))}return e}}(0,i.rV)(A);const T=(t,...e)=>{if(Array.isArray(t)&&Array.isArray(t.raw))return A.create(t,e);throw i.Zx.error(1206)};T.partial=t=>new D(t)},97004:function(t,e,n){"use strict";n.d(e,{Z:function(){return o},y:function(){return i}});var i,r=n(5291);function o(t){return r.q.create(t,t,t)}!function(t){t[t.LightMode=1]="LightMode",t[t.DarkMode=.23]="DarkMode"}(i||(i={}))},97482:function(t,e,n){"use strict";n.d(e,{R:function(){return u},g:function(){return c}});var i=n(64187),r=n(74849),o=n(86856);const s=r.A`
    .scroll-prev {
        right: auto;
        left: 0;
    }

    .scroll.scroll-next::before,
    .scroll-next .scroll-action {
        left: auto;
        right: 0;
    }

    .scroll.scroll-next::before {
        background: linear-gradient(to right, transparent, var(--scroll-fade-next));
    }

    .scroll-next .scroll-action {
        transform: translate(50%, -50%);
    }
`,a=r.A`
    .scroll.scroll-next {
        right: auto;
        left: 0;
    }

    .scroll.scroll-next::before {
        background: linear-gradient(to right, var(--scroll-fade-next), transparent);
        left: auto;
        right: 0;
    }

    .scroll.scroll-prev::before {
        background: linear-gradient(to right, transparent, var(--scroll-fade-previous));
    }

    .scroll-prev .scroll-action {
        left: auto;
        right: 0;
        transform: translate(50%, -50%);
    }
`,c=r.A`
    .scroll-area {
        position: relative;
    }

    div.scroll-view {
        overflow-x: hidden;
    }

    .scroll {
        bottom: 0;
        pointer-events: none;
        position: absolute;
        right: 0;
        top: 0;
        user-select: none;
        width: 100px;
    }

    .scroll.disabled {
        display: none;
    }

    .scroll::before,
    .scroll-action {
        left: 0;
        position: absolute;
    }

    .scroll::before {
        background: linear-gradient(to right, var(--scroll-fade-previous), transparent);
        content: "";
        display: block;
        height: 100%;
        width: 100%;
    }

    .scroll-action {
        pointer-events: auto;
        right: auto;
        top: 50%;
        transform: translate(-50%, -50%);
    }

    ::slotted(fluent-flipper) {
        opacity: 0;
        transition: opacity 0.2s ease-in-out;
    }

    .scroll-area:hover ::slotted(fluent-flipper) {
        opacity: 1;
    }
`.withBehaviors(new o.t(s,a)),u=r.A`
    ${(0,i.V)("block")} :host {
        --scroll-align: center;
        --scroll-item-spacing: 4px;
        contain: layout;
        position: relative;
    }

    .scroll-view {
        overflow-x: auto;
        scrollbar-width: none;
    }

    ::-webkit-scrollbar {
        display: none;
    }

    .content-container {
        align-items: var(--scroll-align);
        display: inline-flex;
        flex-wrap: nowrap;
        position: relative;
    }

    .content-container ::slotted(*) {
        margin-right: var(--scroll-item-spacing);
    }

    .content-container ::slotted(*:last-child) {
        margin-right: 0;
    }
`},98228:function(t,e,n){"use strict";n.d(e,{a:function(){return w}});var i=n(56911),r=n(50106),o=n(23429),s=n(60815),a=n(38493),c=n(50180),u=n(5096),l=n(17884),h=n(35106),d=n(88458),f=n(56863);class p extends l.U{}class v extends((0,f.rf)(p)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}const g="inline",b="list",m="both",y="none";class w extends v{constructor(){super(...arguments),this._value="",this.filteredOptions=[],this.filter="",this.listboxId=(0,c.NF)("listbox-"),this.open=!1}formResetCallback(){super.formResetCallback(),this.setDefaultSelectedOption(),this.firstSelectedOption?this.updateValue():this.value=this.initialValue??""}validate(){super.validate(this.control)}get isAutocompleteInline(){return this.autocomplete===g||this.isAutocompleteBoth}get isAutocompleteList(){return this.autocomplete===b||this.isAutocompleteBoth}get isAutocompleteBoth(){return this.autocomplete===m}openChanged(){if(this.open)return this.ariaControls=this.listboxId,this.ariaExpanded="true",o.L.enqueue(()=>this.setPositioning()),this.focusAndScrollOptionIntoView(),void o.L.enqueue(()=>this.focus());this.ariaControls="",this.ariaExpanded="false"}get options(){return s.cP.track(this,"options"),this.filteredOptions.length?this.filteredOptions:this._options}set options(t){this._options=t,s.cP.notify(this,"options")}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}get value(){return s.cP.track(this,"value"),this._value}set value(t){const e=`${this._value}`;if(this.$fastController.isConnected&&this.options){const e=this.options.findIndex(e=>e.text.toLowerCase()===t.toLowerCase()),n=this.options[this.selectedIndex]?.text,i=this.options[e]?.text;this.selectedIndex=n!==i?e:this.selectedIndex,t=this.firstSelectedOption?.text||t}e!==t&&(this._value=t,super.valueChanged(e,t),s.cP.notify(this,"value"))}clickHandler(t){if(!this.disabled){if(this.open){const e=t.target.closest("option,[role=option]");if(!e||e.disabled)return;this.selectedOptions=[e],this.control.value=e.text,this.clearSelectionRange(),this.updateValue(!0)}return this.open=!this.open,this.open&&this.control.focus(),!0}}connectedCallback(){super.connectedCallback(),this.value&&(this.initialValue=this.value)}disabledChanged(t,e){super.disabledChanged&&super.disabledChanged(t,e),this.ariaDisabled=this.disabled?"true":"false"}disconnectedCallback(){this.cleanup?.(),super.disconnectedCallback()}filterOptions(){this.autocomplete&&this.autocomplete!==y||(this.filter="");const t=this.filter.toLowerCase();this.filteredOptions=this._options.filter(t=>t.text.toLowerCase().startsWith(this.filter.toLowerCase())),this.isAutocompleteList&&(this.filteredOptions.length||t||(this.filteredOptions=this._options),this._options.forEach(t=>{t.hidden=!this.filteredOptions.includes(t)}))}focusAndScrollOptionIntoView(){this.contains(document.activeElement)&&(this.control.focus(),this.firstSelectedOption&&requestAnimationFrame(()=>{this.firstSelectedOption?.scrollIntoView({block:"nearest"})}))}focusoutHandler(t){if(this.updateValue(),!this.open)return!0;const e=t.relatedTarget;this.isSameNode(e)?this.focus():this.options&&this.options.includes(e)||(this.open=!1)}inputHandler(t){if(this.filter=this.control.value,this.filterOptions(),"deleteContentBackward"===t.inputType||!this.filter.length)return!0;this.isAutocompleteList&&!this.open&&(this.open=!0),this.isAutocompleteInline&&this.filteredOptions.length&&(this.selectedOptions=[this.filteredOptions[0]],this.selectedIndex=this.options.indexOf(this.firstSelectedOption),this.setInlineSelection())}keydownHandler(t){const e=t.key;if(t.ctrlKey||t.shiftKey)return!0;switch(e){case"Enter":this.updateValue(!0),this.isAutocompleteInline&&(this.filter=this.value),this.open=!1,this.clearSelectionRange();break;case"Escape":if(this.isAutocompleteInline||(this.selectedIndex=-1),this.open){this.open=!1;break}this.value="",this.control.value="",this.filter="",this.filterOptions();break;case"Tab":if(this.updateValue(),!this.open)return!0;t.preventDefault(),this.open=!1;break;case"ArrowUp":case"ArrowDown":if(this.filterOptions(),!this.open){this.open=!0;break}this.filteredOptions.length>0&&super.keydownHandler(t),this.isAutocompleteInline&&(this.updateValue(),this.setInlineSelection());break;default:return!0}}keyupHandler(t){switch(t.key){case"ArrowLeft":case"ArrowRight":case"Backspace":case"Delete":case"Home":case"End":this.filter=this.control.value,this.selectedIndex=-1,this.filterOptions()}}selectedIndexChanged(t,e){if(this.$fastController.isConnected){if((e=(0,u.AB)(-1,this.options.length-1,e))!==this.selectedIndex)return void(this.selectedIndex=e);super.selectedIndexChanged(t,e)}}selectPreviousOption(){!this.disabled&&this.selectedIndex>=0&&(this.selectedIndex=this.selectedIndex-1)}setDefaultSelectedOption(){if(this.$fastController.isConnected&&this.options){const t=this.options.findIndex(t=>null!==t.getAttribute("selected")||t.selected);this.selectedIndex=t,!this.dirtyValue&&this.firstSelectedOption?this.value=this.firstSelectedOption.text:this.value="",this.setSelectedOptions()}}setInlineSelection(){this.firstSelectedOption&&(this.control.value=this.firstSelectedOption.text,this.control.focus(),this.control.setSelectionRange(this.filter.length,this.control.value.length,"backward"))}setPositioning(){this.$fastController.isConnected&&(this.cleanup=(0,r.ll)(this,this.listbox,async()=>{const{middlewareData:t,x:e,y:n}=await(0,r.rD)(this,this.listbox,{placement:"bottom",strategy:"fixed",middleware:[(0,r.UU)(),(0,r.Ej)({apply:({availableHeight:t,rects:e})=>{Object.assign(this.listbox.style,{maxHeight:`${t}px`,width:`${e.reference.width}px`})}}),(0,r.jD)()]});if(t.hide?.referenceHidden)return this.open=!1,void this.cleanup();Object.assign(this.listbox.style,{position:"fixed",top:"0",left:"0",transform:`translate(${e}px, ${n}px)`})}))}selectedOptionsChanged(t,e){this.$fastController.isConnected&&this._options.forEach(t=>{t.selected=e.includes(t)})}slottedOptionsChanged(t,e){super.slottedOptionsChanged(t,e),this.updateValue()}updateValue(t){this.$fastController.isConnected&&(this.value=this.firstSelectedOption?.text||this.control.value),t&&this.$emit("change")}clearSelectionRange(){const t=this.control.value.length;this.control.setSelectionRange(t,t)}}(0,i.Cg)([(0,a.CF)({attribute:"autocomplete",mode:"fromView"}),(0,i.Sn)("design:type",Object)],w.prototype,"autocomplete",void 0),(0,i.Cg)([(0,a.CF)({attribute:"open",mode:"boolean"}),(0,i.Sn)("design:type",Boolean)],w.prototype,"open",void 0),(0,i.Cg)([a.CF,(0,i.Sn)("design:type",String)],w.prototype,"placeholder",void 0);class ${}(0,i.Cg)([s.sH,(0,i.Sn)("design:type",Object)],$.prototype,"ariaAutoComplete",void 0),(0,i.Cg)([s.sH,(0,i.Sn)("design:type",Object)],$.prototype,"ariaControls",void 0),(0,d.X)($,l.r),(0,d.X)(w,h.qw,$)},98264:function(t,e,n){"use strict";n.d(e,{m:function(){return b}});var i=n(56911),r=n(92011),o=n(38493),s=n(83781);const a="separator";class c extends r.L{constructor(){super(...arguments),this.role=a,this.orientation=s.t.horizontal}}(0,i.Cg)([o.CF,(0,i.Sn)("design:type",String)],c.prototype,"role",void 0),(0,i.Cg)([o.CF,(0,i.Sn)("design:type",String)],c.prototype,"orientation",void 0);var u=n(37180),l=n(74849),h=n(64187),d=n(74838),f=n(26920),p=n(22683);const v=l.A`
    ${(0,h.V)("block")} :host {
        box-sizing: content-box;
        height: 0;
        margin: calc(${d.vR} * 1px) 0;
        border: none;
        border-top: calc(${f.XA} * 1px) solid ${p.hb};
    }
`;const g=n(96950).qy`
        <template
            role="${t=>t.role}"
            aria-orientation="${t=>t.orientation}"
        ></template>
    `;const b=class extends c{}.compose({name:`${u.c.prefix}-divider`,template:g,styles:v})},99577:function(t,e,n){"use strict";n.d(e,{EO:function(){return $},F2:function(){return T},Go:function(){return k},H$:function(){return I},TC:function(){return x},UM:function(){return C},WB:function(){return M},X$:function(){return E},g8:function(){return y},gj:function(){return S},u9:function(){return O},xE:function(){return p},yD:function(){return w}});var i,r=n(15454),o=n(69912),s=n(96271),a=n(62044),c=n(5410),u=n(88383),l=n(12839),h=n(50090),d=n(18622),f="3.2.8",p="1DS-Web-JS-"+f,v="Microsoft_ApplicationInsights_BypassAjaxInstrumentation",g="withCredentials",b="timeout",m=((i={})[0]=0,i[2]=6,i[1]=1,i[3]=7,i[4098]=6,i[4097]=1,i[4099]=7,i),y=Boolean((0,u.YE)());Boolean((0,u.zk)());function w(t){return!(t===d.m5||(0,a.hX)(t))}function $(t){if(t){var e=t.indexOf("-");if(e>-1)return t.substring(0,e)}return d.m5}function x(t,e,n){if(!e&&!w(e)||"string"!=typeof t)return null;var i=typeof e;if("string"===i||"number"===i||"boolean"===i||(0,a.cy)(e))e={value:e};else if("object"!==i||r.J$.call(e,"value")){if((0,a.hX)(e.value)||e.value===d.m5||!(0,a.Kg)(e.value)&&!(0,a.Et)(e.value)&&!(0,a.Lm)(e.value)&&!(0,a.cy)(e.value))return null}else e={value:n?JSON.stringify(e):e};if((0,a.cy)(e.value)&&!D(e.value))return null;if(!(0,a.hX)(e.kind)){if((0,a.cy)(e.value)||!F(e.kind))return null;e.value=e.value.toString()}return e}function k(t,e,n){var i=-1;if(!(0,a.b0)(t))if(e>0&&(32===e?i=8192:e<=13&&(i=e<<5)),function(t){if(t>=0&&t<=9)return!0;return!1}(n))-1===i&&(i=0),i|=n;else{var r=m[A(t)]||-1;-1!==i&&-1!==r?i|=r:6===r&&(i=r)}return i}function C(t,e,n){var i;return void 0===n&&(n=!0),t&&(i=t.get(e),n&&i&&decodeURIComponent&&(i=decodeURIComponent(i))),i||d.m5}function S(t){void 0===t&&(t="D");var e=(0,s.aq)();return"B"===t?e="{"+e+"}":"P"===t?e="("+e+")":"N"===t&&(e=e.replace(/-/g,d.m5)),e}function E(t,e,n,i,o){var s={},c=!1,u=0,l=arguments.length,h=arguments;for("[object Boolean]"===Object[r.vR].toString.call(h[0])&&(c=h[0],u++);u<l;u++){t=h[u];(0,a.z)(t,function(t,e){c&&e&&(0,a.Gv)(e)?(0,a.cy)(e)?(s[t]=s[t]||[],(0,a.Iu)(e,function(e,n){e&&(0,a.Gv)(e)?s[t][n]=E(!0,s[t][n],e):s[t][n]=e})):s[t]=E(!0,s[t],e):s[t]=e})}return s}var M=s.UU;function F(t){return 0===t||t>0&&t<=13||32===t}function D(t){return t.length>0}function O(t,e){var n=t;n.timings=n.timings||{},n.timings.processTelemetryStart=n.timings.processTelemetryStart||{},n.timings.processTelemetryStart[e]=M()}function A(t){var e=0;if(null!=t){var n=typeof t;"string"===n?e=1:"number"===n?e=2:"boolean"===n?e=3:n===r._1&&(e=4,(0,a.cy)(t)?(e=4096,t.length>0&&(e|=A(t[0]))):r.J$.call(t,"value")&&(e=8192|A(t.value)))}return e}r.bA,r._1,r.bA,a.Iu,a.rD,a.W$,a.KT,a.cG,a._u,u.lV,a.Kg,a.Et,a.Lm,a.Tn,a.cy,a.Gv,a.EH,u.Uf,a._u,u.PV,l.gi,l.It,a.r,c.ee,c.So,a.Cv,a.z,a.Ed,a.b0,a.hX,a.mQ,a.Tn,a.Gv,a.$P,a.cy,a.bJ,a.Kg,a.Et,a.Lm,a._u,a.Iu,a.rD,a.W$,a.KT,a.EH,h.AQ,a.cG,a.r,c.So,a.x3,u.lT,s.aq,s.UU,o.Si,o.Z1,o.VN,o.yc,o.k5,s.cL;function T(){return!!(0,u.EH)("chrome")}function I(t,e,n,i,r,o){function s(t,e,n){try{t[e]=n}catch(t){}}void 0===i&&(i=!1),void 0===r&&(r=!1);var a=new XMLHttpRequest;return i&&s(a,v,i),n&&s(a,g,n),a.open(t,e,!r),n&&s(a,g,n),!r&&o&&s(a,b,o),a}}}]);