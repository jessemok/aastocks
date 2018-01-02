// ==UserScript==
// @name         QuickStock
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Enhance aastocks pages
// @author       Jesse Mok
// @match        http://www.aastocks.com/tc/stocks/analysis/company-fundamental/earnings-summary?symbol=*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    window.timeoutVar = setTimeout(function(){ location.reload(); }, 10000);
    var s = '<div style="font-size: 22px">';
    s += '<a href="earnings-summary?symbol=00388">00388</a> ';
    s += '<a href="earnings-summary?symbol=00001">00001</a> ';
    s += '<a href="earnings-summary?symbol=00005">00005</a> ';
    s += '<a href="earnings-summary?symbol=00941">00941</a> ';
    s += '<a href="earnings-summary?symbol=00700">00700</a> ';
    s += '<a href="earnings-summary?symbol=02628">02628</a> ';
    s += '</div>';
    s += '<div style="font-size: 18px">';
    s += '<a href="#" id="monkeyControl" onclick="control()">Click to Pause</a>';
    s += '</div>';
    $(s).insertAfter('#cp_ucStockBar_pQuote');

    window.control = function () {
        clearTimeout(window.timeoutVar);
        $("#monkeyControl").text("Click to Resume");
        $("#monkeyControl").click(function () {location.reload();});
    };
})();