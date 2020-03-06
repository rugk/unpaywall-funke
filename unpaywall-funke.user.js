// ==UserScript==
// @name         Unpaywall FUNKE
// @namespace    http://github.com/tobimori/unpaywall-funke/
// @version      1.0
// @description  Read articles locked behind paywalls on websites powered by the FUNKE MEDIENGRUPPE CMS, e.g. Hamburger Abendblatt & Berliner Morgenpost
// @updateURL    https://github.com/tobimori/unpaywall-funke/raw/master/unpaywall-funke.user.js
// @downloadURL  https://github.com/tobimori/unpaywall-funke/raw/master/unpaywall-funke.user.js
// @author       tobimori
// @include      *://*.thueringer-allgemeine.de/*
// @include      *://*.abendblatt.de/*
// @include      *://*.waz.de/*
// @include      *://*.nrz.de/*
// @include      *://*.wr.de/*
// @include      *://*.wp.de/*
// @include      *://*.ikz-online.de/*
// @include      *://*.otz.de/*
// @include      *://*.morgenpost.de/*
// @run-at       document-start
// ==/UserScript==

const observer = new MutationObserver(function (mutations, me) {
    const d = document;
    if (d.getElementsByClassName('article__header__headline ispayedcontent')) {
        [...d.getElementsByTagName("script")].map(n => n && n.remove());
        [...d.getElementsByClassName("paging__wrapper")].map(n => n && n.remove());
        [...d.getElementsByClassName("pager pager__bottom")].map(n => n && n.remove());
    }
});

observer.observe(document, {
  childList: true,
  subtree: true
});
