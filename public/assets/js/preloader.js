/*!-----------------------------------------------------------------
    Name: Fliqs - Online Video Streaming HTML Template
    Version: 1.0.0
    Author: nK
    Website: https://nkdev.info/
    Purchase: https://themeforest.net/user/_nk/portfolio
    Support: https://nk.ticksy.com/
    License: You must have a valid license purchased only from ThemeForest (the above link) in order to legally use the theme for your project.
    Copyright 2021.
-------------------------------------------------------------------*/
    /******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
var $ = window.jQuery;
var $doc = $(document);
var perfData = window.performance.timing; // The PerformanceTiming interface represents timing-related performance information for the given page.

var EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart);
var time = Math.max(600, Math.min(600, parseInt(EstimatedTime / 1000 % 60, 10) * 100)); // Preloader Animation

$doc.on('DOMContentLoaded', function () {
  var $preloader = $('.flq-preloader');
  var $preloaderBg = $('.flq-preloader-bg'); // No preloader available.

  if (!$preloader.length) {
    $doc.trigger('flq.preloader.hide');
    return;
  }

  $preloader.addClass('flq-preloader-show');
  var preloaderTimer;

  function closePreloader() {
    clearTimeout(preloaderTimer);
    $preloader.addClass('flq-preloader-hide').removeClass('flq-preloader-show');
    $preloaderBg.addClass('flq-preloader-bg-hide');
    $doc.trigger('flq.preloader.hide');
  }

  if ($preloader.length) {
    preloaderTimer = setTimeout(closePreloader, time);
  }
});
/******/ })()
;