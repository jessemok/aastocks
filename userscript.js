// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://www.aastocks.com/tc/stocks/analysis/company-fundamental/earnings-summary?symbol=*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    setTimeout(function(){ location.reload(); }, 10000);
    var s = '<div style="font-size: 22px">';
    s += '<a href="earnings-summary?symbol=00388">00388</a> ';
    s += '<a href="earnings-summary?symbol=00001">00001</a> ';
    s += '<a href="earnings-summary?symbol=00005">00005</a> ';
    s += '<a href="earnings-summary?symbol=00941">00941</a> ';
    s += '<a href="earnings-summary?symbol=00700">00700</a> ';
    s += '<a href="earnings-summary?symbol=02628">02628</a>';
    s += '</div>';
    $(s).insertAfter('#cp_ucStockBar_pQuote');
})();