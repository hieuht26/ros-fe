(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{206:function(e,t,n){"use strict";var a=n(52);t.__esModule=!0,t.IntlContextConsumer=t.IntlContextProvider=void 0;var r=a(n(1)).default.createContext(),o=r.Provider;t.IntlContextProvider=o;var l=r.Consumer;t.IntlContextConsumer=l},369:function(e,t,n){"use strict";var a=n(52);t.__esModule=!0,t.wrapPageElement=void 0;var r=a(n(370)).default;t.wrapPageElement=r},370:function(e,t,n){"use strict";n(20),n(160),n(161),n(83),n(26);var a=n(52);t.__esModule=!0,t.default=void 0;var r=a(n(1)),o=a(n(371)),l=n(35),i=n(203),u=n(206),d=function(e){var t=function(e){try{return n(388)("./"+e)}catch(t){return!1}}(e.split("-")[0]);if(!t)throw new Error("Cannot find react-intl/locale-data/"+e);i.addLocaleData.apply(void 0,t)};t.default=function(e){var t=e.element,n=e.props;if(n){var a=n.pageContext,c=n.location,s=a.intl,f=s.language,g=s.languages,v=s.redirect,w=s.routed,p=s.originalPath;"undefined"!=typeof window&&(window.___gatsbyIntl=s);var m=v&&!w;if(m){var C=c.search;if("undefined"!=typeof window){var I=window.localStorage.getItem("gatsby-intl-language")||(0,o.default)({languages:g,fallback:f});g.includes(I)||(I=f);var P=C||"",_=(0,l.withPrefix)("/"+I+p+P);window.localStorage.setItem("gatsby-intl-language",I),window.location.replace(_)}}var x=m?null:t;return function(e){return function(t){return d(e.language),r.default.createElement(i.IntlProvider,{locale:e.language,messages:e.messages},r.default.createElement(u.IntlContextProvider,{value:e},t))}}(s)(x)}}}}]);