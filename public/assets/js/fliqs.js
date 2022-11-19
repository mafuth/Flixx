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
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "options": function() { return /* binding */ options; }
/* harmony export */ });
/*------------------------------------------------------------------

  Theme Options

-------------------------------------------------------------------*/
var options = {
  // enable cursor
  customCursor: true,
  // enable parallax
  parallax: true
};


/***/ }),
/* 2 */,
/* 3 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": function() { return /* binding */ $; },
/* harmony export */   "isIos": function() { return /* binding */ isIos; },
/* harmony export */   "isMobile": function() { return /* binding */ isMobile; },
/* harmony export */   "$wnd": function() { return /* binding */ $wnd; },
/* harmony export */   "$doc": function() { return /* binding */ $doc; },
/* harmony export */   "$html": function() { return /* binding */ $html; },
/* harmony export */   "$body": function() { return /* binding */ $body; },
/* harmony export */   "debounceResize": function() { return /* binding */ debounceResize; },
/* harmony export */   "throttleScroll": function() { return /* binding */ throttleScroll; },
/* harmony export */   "bodyOverflow": function() { return /* binding */ bodyOverflow; },
/* harmony export */   "isInViewport": function() { return /* binding */ isInViewport; }
/* harmony export */ });
/* harmony import */ var throttle_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var raf_schd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/*------------------------------------------------------------------

  Utility

-------------------------------------------------------------------*/


var $ = window.jQuery;
var isIos = ['iPad Simulator', 'iPhone Simulator', 'iPod Simulator', 'iPad', 'iPhone', 'iPod'].includes(navigator.platform) || navigator.userAgent.includes('Mac') && 'ontouchend' in document;
var isMobile = isIos || /Android|BlackBerry|Windows Phone/g.test(navigator.userAgent || navigator.vendor || window.opera);
/**
 * window size
 */

var $wnd = $(window);
var $doc = $(document);
var $body = $('body');
var $html = $('html'); // add 'is-mobile' or 'is-desktop' classname to html tag

$html.addClass(isMobile ? 'is-mobile' : 'is-desktop');

if (isIos) {
  $html.addClass('is-ios');
}
/**
 * Debounce resize
 */


var resizeArr = [];

function debounceResized() {
  if (resizeArr.length) {
    for (var k = 0; k < resizeArr.length; k += 1) {
      resizeArr[k]();
    }
  }
}

$wnd.on('load resize orientationchange', (0,throttle_debounce__WEBPACK_IMPORTED_MODULE_0__.throttle)(200, (0,raf_schd__WEBPACK_IMPORTED_MODULE_1__["default"])(debounceResized)));
$((0,raf_schd__WEBPACK_IMPORTED_MODULE_1__["default"])(debounceResized));
debounceResized();

function debounceResize(func) {
  if (typeof func === 'function') {
    resizeArr.push(func);
  } else {
    window.dispatchEvent(new Event('resize'));
  }
}
/**
 * Throttle scroll
 */


var hideOnScrollList = [];
var lastST = 0;

function hasScrolled() {
  if (!hideOnScrollList.length) {
    return;
  }

  var ST = $wnd.scrollTop();
  var type = ''; // [up, down, end, start]

  if (ST > lastST) {
    type = 'down';
  } else if (ST < lastST) {
    type = 'up';
  } else {
    type = 'none';
  }

  if (ST === 0) {
    type = 'start';
  } else if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
    type = 'end';
  }

  hideOnScrollList.forEach(function (value) {
    if (typeof value === 'function') {
      value(type, ST, lastST, $wnd);
    }
  });
  lastST = ST;
}

$wnd.on('scroll load resize orientationchange', (0,throttle_debounce__WEBPACK_IMPORTED_MODULE_0__.throttle)(200, (0,raf_schd__WEBPACK_IMPORTED_MODULE_1__["default"])(hasScrolled)));
$((0,raf_schd__WEBPACK_IMPORTED_MODULE_1__["default"])(hasScrolled));

function throttleScroll(callback) {
  hideOnScrollList.push(callback);
}
/**
 * Body Overflow
 * Thanks https://jsfiddle.net/mariusc23/s6mLJ/31/
 * Usage:
 *    // enable
 *    bodyOverflow(1);
 *
 *    // disable
 *    bodyOverflow(0);
 */


var bodyOverflowEnabled;
var isBodyOverflowing;
var scrollbarWidth;
var originalBodyStyle;
var originalBodyPadding = parseFloat($body.css('margin-right')) || 0;

function bodyGetScrollbarWidth() {
  // thx d.walsh
  var scrollDiv = document.createElement('div');
  scrollDiv.className = 'body-scrollbar-measure';
  $body[0].appendChild(scrollDiv);
  var result = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  $body[0].removeChild(scrollDiv);
  return result;
}

function bodyCheckScrollbar() {
  var fullWindowWidth = window.innerWidth;

  if (!fullWindowWidth) {
    // workaround for missing window.innerWidth in IE8
    var documentElementRect = document.documentElement.getBoundingClientRect();
    fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left);
  }

  isBodyOverflowing = $body[0].clientWidth < fullWindowWidth;
  scrollbarWidth = isBodyOverflowing ? bodyGetScrollbarWidth() : 0;
}

function bodySetScrollbar() {
  if (typeof originalBodyStyle === 'undefined') {
    originalBodyStyle = $body.attr('style') || '';
  }

  if (isBodyOverflowing) {
    $body.css('margin-right', scrollbarWidth + originalBodyPadding);
  }
}

function bodyResetScrollbar() {
  $body.attr('style', originalBodyStyle);
}

function bodyOverflow(enable) {
  if (enable && !bodyOverflowEnabled) {
    bodyOverflowEnabled = 1;
    bodyCheckScrollbar();
    bodySetScrollbar();
    $body.css('overflow', 'hidden');
  } else if (!enable && bodyOverflowEnabled) {
    bodyOverflowEnabled = 0;
    $body.css('overflow', '');
    bodyResetScrollbar();
  }
} // Set scrollbar size variable.


function updateScrollbarVariable() {
  bodyCheckScrollbar();
  $body[0].style.setProperty('--flq-page-scrollbar__size', "".concat(scrollbarWidth, "px"));
}

$wnd.on('load resize', (0,raf_schd__WEBPACK_IMPORTED_MODULE_1__["default"])(updateScrollbarVariable));
$((0,raf_schd__WEBPACK_IMPORTED_MODULE_1__["default"])(updateScrollbarVariable));
updateScrollbarVariable();
/**
 * In Viewport checker
 * return visible percent from 0 to 1
 */

function isInViewport($item, returnRect) {
  var rect = $item[0].getBoundingClientRect();
  var wndH = window.innerHeight;
  var result = 1;

  if (rect.right <= 0 || rect.left >= window.innerWidth) {
    result = 0;
  } else if (rect.bottom < 0 && rect.top <= wndH) {
    result = 0;
  } else {
    var beforeTopEnd = Math.max(0, rect.height + rect.top);
    var beforeBottomEnd = Math.max(0, rect.height - (rect.top + rect.height - wndH));
    var afterTop = Math.max(0, -rect.top);
    var beforeBottom = Math.max(0, rect.top + rect.height - wndH);

    if (rect.height < wndH) {
      result = 1 - (afterTop || beforeBottom) / rect.height;
    } else if (beforeTopEnd <= wndH) {
      result = beforeTopEnd / wndH;
    } else if (beforeBottomEnd <= wndH) {
      result = beforeBottomEnd / wndH;
    }

    result = result < 0 ? 0 : result;
  }

  if (returnRect) {
    return [result, rect];
  }

  return result;
}



/***/ }),
/* 4 */
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "debounce": function() { return /* binding */ debounce; },
/* harmony export */   "throttle": function() { return /* binding */ throttle; }
/* harmony export */ });
/* eslint-disable no-undefined,no-param-reassign,no-shadow */

/**
 * Throttle execution of a function. Especially useful for rate limiting
 * execution of handlers on events like resize and scroll.
 *
 * @param  {number}    delay -          A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
 * @param  {boolean}   [noTrailing] -   Optional, defaults to false. If noTrailing is true, callback will only execute every `delay` milliseconds while the
 *                                    throttled-function is being called. If noTrailing is false or unspecified, callback will be executed one final time
 *                                    after the last throttled-function call. (After the throttled-function has not been called for `delay` milliseconds,
 *                                    the internal counter is reset).
 * @param  {Function}  callback -       A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
 *                                    to `callback` when the throttled-function is executed.
 * @param  {boolean}   [debounceMode] - If `debounceMode` is true (at begin), schedule `clear` to execute after `delay` ms. If `debounceMode` is false (at end),
 *                                    schedule `callback` to execute after `delay` ms.
 *
 * @returns {Function}  A new, throttled, function.
 */
function throttle(delay, noTrailing, callback, debounceMode) {
  /*
   * After wrapper has stopped being called, this timeout ensures that
   * `callback` is executed at the proper times in `throttle` and `end`
   * debounce modes.
   */
  var timeoutID;
  var cancelled = false; // Keep track of the last time `callback` was executed.

  var lastExec = 0; // Function to clear existing timeout

  function clearExistingTimeout() {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }
  } // Function to cancel next exec


  function cancel() {
    clearExistingTimeout();
    cancelled = true;
  } // `noTrailing` defaults to falsy.


  if (typeof noTrailing !== 'boolean') {
    debounceMode = callback;
    callback = noTrailing;
    noTrailing = undefined;
  }
  /*
   * The `wrapper` function encapsulates all of the throttling / debouncing
   * functionality and when executed will limit the rate at which `callback`
   * is executed.
   */


  function wrapper() {
    for (var _len = arguments.length, arguments_ = new Array(_len), _key = 0; _key < _len; _key++) {
      arguments_[_key] = arguments[_key];
    }

    var self = this;
    var elapsed = Date.now() - lastExec;

    if (cancelled) {
      return;
    } // Execute `callback` and update the `lastExec` timestamp.


    function exec() {
      lastExec = Date.now();
      callback.apply(self, arguments_);
    }
    /*
     * If `debounceMode` is true (at begin) this is used to clear the flag
     * to allow future `callback` executions.
     */


    function clear() {
      timeoutID = undefined;
    }

    if (debounceMode && !timeoutID) {
      /*
       * Since `wrapper` is being called for the first time and
       * `debounceMode` is true (at begin), execute `callback`.
       */
      exec();
    }

    clearExistingTimeout();

    if (debounceMode === undefined && elapsed > delay) {
      /*
       * In throttle mode, if `delay` time has been exceeded, execute
       * `callback`.
       */
      exec();
    } else if (noTrailing !== true) {
      /*
       * In trailing throttle mode, since `delay` time has not been
       * exceeded, schedule `callback` to execute `delay` ms after most
       * recent execution.
       *
       * If `debounceMode` is true (at begin), schedule `clear` to execute
       * after `delay` ms.
       *
       * If `debounceMode` is false (at end), schedule `callback` to
       * execute after `delay` ms.
       */
      timeoutID = setTimeout(debounceMode ? clear : exec, debounceMode === undefined ? delay - elapsed : delay);
    }
  }

  wrapper.cancel = cancel; // Return the wrapper function.

  return wrapper;
}
/* eslint-disable no-undefined */

/**
 * Debounce execution of a function. Debouncing, unlike throttling,
 * guarantees that a function is only executed a single time, either at the
 * very beginning of a series of calls, or at the very end.
 *
 * @param  {number}   delay -         A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
 * @param  {boolean}  [atBegin] -     Optional, defaults to false. If atBegin is false or unspecified, callback will only be executed `delay` milliseconds
 *                                  after the last debounced-function call. If atBegin is true, callback will be executed only at the first debounced-function call.
 *                                  (After the throttled-function has not been called for `delay` milliseconds, the internal counter is reset).
 * @param  {Function} callback -      A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
 *                                  to `callback` when the debounced-function is executed.
 *
 * @returns {Function} A new, debounced function.
 */


function debounce(delay, atBegin, callback) {
  return callback === undefined ? throttle(delay, atBegin, false) : throttle(delay, callback, atBegin !== false);
}



/***/ }),
/* 5 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
var rafSchd = function rafSchd(fn) {
  var lastArgs = [];
  var frameId = null;

  var wrapperFn = function wrapperFn() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    lastArgs = args;

    if (frameId) {
      return;
    }

    frameId = requestAnimationFrame(function () {
      frameId = null;
      fn.apply(void 0, lastArgs);
    });
  };

  wrapperFn.cancel = function () {
    if (!frameId) {
      return;
    }

    cancelAnimationFrame(frameId);
    frameId = null;
  };

  return wrapperFn;
};

/* harmony default export */ __webpack_exports__["default"] = (rafSchd);

/***/ }),
/* 6 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setOptions": function() { return /* binding */ setOptions; }
/* harmony export */ });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);

/*------------------------------------------------------------------

  Set Custom Options

-------------------------------------------------------------------*/

function setOptions(newOpts) {
  var self = this;
  var optsTemplates = _utility__WEBPACK_IMPORTED_MODULE_0__.$.extend({}, this.options.templates, newOpts && newOpts.templates || {});
  var optsShortcuts = _utility__WEBPACK_IMPORTED_MODULE_0__.$.extend({}, this.options.shortcuts, newOpts && newOpts.shortcuts || {});
  self.options = _utility__WEBPACK_IMPORTED_MODULE_0__.$.extend({}, self.options, newOpts);
  self.options.templates = optsTemplates;
  self.options.shortcuts = optsShortcuts;
}



/***/ }),
/* 7 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initCursor": function() { return /* binding */ initCursor; }
/* harmony export */ });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);

/*------------------------------------------------------------------

  Cursor

-------------------------------------------------------------------*/

function initCursor() {
  var self = this;
  var $swiper = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.$)('.swiper');

  if (_utility__WEBPACK_IMPORTED_MODULE_0__.isMobile || !$swiper.length || !self.options.customCursor) {
    return;
  }

  var clientX = 0;
  var clientY = 0;
  var xPos = 0;
  var yPos = 0;
  var delay = 1.5; // Add cursor.

  var $cursor = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.$)('<div class="flq-cursor"><span></span></div>');
  _utility__WEBPACK_IMPORTED_MODULE_0__.$body.append($cursor).addClass('flq-cursor-enabled');
  $cursor.wrapAll('<div></div>'); // Show / hide.

  var classShow = 'flq-cursor-show';
  _utility__WEBPACK_IMPORTED_MODULE_0__.$doc.on('mouseenter', '.swiper', function () {
    $cursor.addClass(classShow);
  }) // Remove class when hover on slider.
  .on('mouseleave', '.swiper', function () {
    $cursor.removeClass(classShow);
  }) // Add class when hover on links.
  .on('mouseleave', '.swiper .btn, .swiper .flq-meta a', function () {
    $cursor.addClass(classShow);
  }) // Remove class when hover on links.
  .on('mouseenter', '.swiper .btn, .swiper .flq-meta a', function () {
    $cursor.removeClass(classShow);
  }); // Move cursor.

  _utility__WEBPACK_IMPORTED_MODULE_0__.$doc.on('mousemove drag', function (e) {
    clientX = e.clientX;
    clientY = e.clientY;
  });

  var moveCursor = function moveCursor() {
    xPos += (clientX - xPos) / delay;
    yPos += (clientY - yPos) / delay;
    $cursor.css('transform', "matrix(1, 0, 0, 1, ".concat(xPos, ", ").concat(yPos, ") translate3d(0,0,0)"));
    requestAnimationFrame(moveCursor);
  };

  requestAnimationFrame(moveCursor);
}



/***/ }),
/* 8 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initNavbar": function() { return /* binding */ initNavbar; }
/* harmony export */ });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);

/*------------------------------------------------------------------

  Navbar

-------------------------------------------------------------------*/

function initNavbar() {
  var $navbarTop = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.$)('.flq-navbar-top');
  var $navbarIcons = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.$)('.flq-navbar-icons');
  var navbarTopClassHide = 'flq-navbar-top-hide';
  var navbarTopClassScroll = 'flq-navbar-top-scroll';
  var navbarIconsClassEnd = 'flq-navbar-icons-end';
  var navbarIconsClassHide = 'flq-navbar-icons-hide';
  (0,_utility__WEBPACK_IMPORTED_MODULE_0__.throttleScroll)(function (type, scroll) {
    // Add class show or hide in the navbar-top.
    if (type === 'down' && scroll > 500) {
      $navbarTop.addClass(navbarTopClassHide);
    } else if (type === 'up' || type === 'start') {
      $navbarTop.removeClass(navbarTopClassHide);
    } // Add scroll class in the navbar-top.


    if (scroll > 100) {
      $navbarTop.addClass(navbarTopClassScroll);
    } else {
      $navbarTop.removeClass(navbarTopClassScroll);
    } // Hide navbar icons when scroll end.


    if (type === 'end') {
      $navbarIcons.addClass(navbarIconsClassEnd);
    } else {
      $navbarIcons.removeClass(navbarIconsClassEnd);
    }
  }); // Hide navbar-icons when open keyboard.

  if (_utility__WEBPACK_IMPORTED_MODULE_0__.isMobile) {
    _utility__WEBPACK_IMPORTED_MODULE_0__.$doc.on('focus', 'select, input:not([type="checkbox"]):not([type="radio"]), textarea', function () {
      $navbarIcons.addClass(navbarIconsClassHide);
    });
    _utility__WEBPACK_IMPORTED_MODULE_0__.$doc.on('blur', 'select, input:not([type="checkbox"]):not([type="radio"]), textarea', function () {
      $navbarIcons.removeClass(navbarIconsClassHide);
    });
  }
}



/***/ }),
/* 9 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initDropdown": function() { return /* binding */ initDropdown; }
/* harmony export */ });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);

/*------------------------------------------------------------------

  Dropdown

-------------------------------------------------------------------*/

function initDropdown() {
  // Dropdown
  var $itemDropdown = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.$)('.flq-dropdown');
  var $dropdownMenu = $itemDropdown.children('.dropdown-menu'); // closing the menu when click to the side

  _utility__WEBPACK_IMPORTED_MODULE_0__.$doc.on('mouseup', function (e) {
    var dropdownHas = $itemDropdown.has(e.target).length;

    if (!dropdownHas && ($itemDropdown.hasClass('focus') || $itemDropdown.hasClass('show'))) {
      $itemDropdown.removeClass('focus show');
      $dropdownMenu.removeClass('focus show');
    }
  }); // don't close the menu with the form

  var focusForm = "\n    .dropdown-menu:not(.show) input,\n    .dropdown-menu:not(.show) textarea,\n    .dropdown-menu:not(.show) button,\n    .dropdown-menu:not(.show) select\n  ";
  _utility__WEBPACK_IMPORTED_MODULE_0__.$doc.on('focus', focusForm, function () {
    // eslint-disable-next-line newline-per-chained-call
    (0,_utility__WEBPACK_IMPORTED_MODULE_0__.$)(this).parents('.flq-dropdown').addClass('show').children('.dropdown-menu').addClass('show');
  }); // closing the menu when hover to the other nav-link

  _utility__WEBPACK_IMPORTED_MODULE_0__.$doc.on('mouseenter', '.flq-dropdown > a', function () {
    var $dropdowns = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.$)(this).closest('.flq-dropdown.focus');

    if ($dropdowns.length) {
      $dropdowns.children('a').blur();
      $dropdowns.removeClass('focus').children('.dropdown-menu').removeClass('focus');
    }
  }); // show and hide the menu with focus

  function toggleShow() {
    var $thisDropdown = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.$)(this).parents('.flq-dropdown');
    var $thisDropdownMenu = $thisDropdown.children('.dropdown-menu');

    if (!$thisDropdown.hasClass('focus')) {
      $thisDropdown.addClass('focus');
      $thisDropdownMenu.addClass('focus');
    } else {
      $thisDropdown.removeClass('focus');
      $thisDropdownMenu.removeClass('focus');
    }
  }

  _utility__WEBPACK_IMPORTED_MODULE_0__.$doc.on('focus', '.flq-dropdown a', toggleShow);
  _utility__WEBPACK_IMPORTED_MODULE_0__.$doc.on('blur', '.flq-dropdown a', toggleShow); // update position

  (0,_utility__WEBPACK_IMPORTED_MODULE_0__.debounceResize)(function () {
    $dropdownMenu.each(function () {
      var $thisDropdown = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.$)(this);
      var rect = $thisDropdown[0].getBoundingClientRect();
      var rectLeft = rect.left;
      var rectRight = rect.right;
      var rectWidth = rect.width;
      var wndW = _utility__WEBPACK_IMPORTED_MODULE_0__.$wnd.width();

      if (wndW - rectRight < 0 && $dropdownMenu.parents('.flq-dropdown-align-left')) {
        $thisDropdown.addClass('flq-dropdown-drop-left');

        if (wndW - rectRight === rectWidth + 10) {
          $thisDropdown.removeClass('flq-dropdown-drop-left');
        }
      }

      if (rectLeft < 0 && $dropdownMenu.parents('.flq-dropdown-align-center, .flq-dropdown-align-right')) {
        $thisDropdown.addClass('flq-dropdown-drop-right');

        if (rectLeft === rectWidth + 10) {
          $thisDropdown.removeClass('flq-dropdown-drop-right');
        }
      }
    });
  }); // Hide when a key is pressed Esc

  _utility__WEBPACK_IMPORTED_MODULE_0__.$doc.on('keyup', function (e) {
    if (e.keyCode === 27) {
      // hide dropdown
      if ($itemDropdown.hasClass('focus show')) {
        $itemDropdown.removeClass('focus show').children('.dropdown-menu').removeClass('focus show');
      }
    }
  });
}



/***/ }),
/* 10 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initAnchors": function() { return /* binding */ initAnchors; }
/* harmony export */ });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);

/*------------------------------------------------------------------

  Anchors

-------------------------------------------------------------------*/

function initAnchors() {
  if ('scrollBehavior' in document.documentElement.style && _utility__WEBPACK_IMPORTED_MODULE_0__.$html.css('scroll-behavior') === 'smooth') {
    return;
  }

  _utility__WEBPACK_IMPORTED_MODULE_0__.$doc.on('click', 'a.flq-anchor, a.btn, .nav a, nav a', function (e) {
    var isHash = this.hash;
    var isURIsame = this.baseURI === window.location.href;

    if (isHash && isHash !== '#' && isHash !== '#!' && isURIsame) {
      var $hashBlock = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.$)(isHash);
      var hash = isHash.replace(/^#/, '');

      if ($hashBlock.length) {
        // add hash to address bar
        $hashBlock.attr('id', '');
        document.location.hash = hash;
        $hashBlock.attr('id', hash); // scroll to block

        (0,_utility__WEBPACK_IMPORTED_MODULE_0__.$)('html, body').stop().animate({
          scrollTop: $hashBlock.offset().top - 80
        }, 700);
        e.preventDefault();
      }
    }
  });
}



/***/ }),
/* 11 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initForms": function() { return /* binding */ initForms; }
/* harmony export */ });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);

/*------------------------------------------------------------------

  Init Forms

-------------------------------------------------------------------*/

function initForms() {
  var self = this; // ajax form submit

  _utility__WEBPACK_IMPORTED_MODULE_0__.$doc.on('submit', '.flq-form-ajax', function (e) {
    e.preventDefault();
    var $form = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.$)(this);
    var $button = $form.find('[type="submit"]'); // if disabled button - stop this action

    if ($button.is('.disabled') || $button.is('[disabled]')) {
      return;
    }

    var $formResponse = $form.next('.flq-form-response');

    if (!$formResponse.length) {
      $formResponse = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.$)('<div class="flq-form-response mt-40"></div>');
      $formResponse.insertAfter($form);
    }

    _utility__WEBPACK_IMPORTED_MODULE_0__.$.ajax({
      type: 'POST',
      url: $form.attr('action'),
      data: $form.serialize(),
      success: function success(response) {
        // eslint-disable-next-line no-param-reassign
        response = JSON.parse(response);

        if (response.type && response.type === 'success') {
          $formResponse.html("<div class=\"alert alert-success\">".concat(response.response, "</div>"));
          $form[0].reset();
        } else {
          $formResponse.html("<div class=\"alert alert-error\">".concat(response.response, "</div>"));
        }

        self.debounceResize();
      },
      error: function error(response) {
        $formResponse.html("<div class=\"alert alert-error\">".concat(response.responseText, "</div>"));
        self.debounceResize();
      }
    });
  });
}



/***/ }),
/* 12 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initImagesTicker": function() { return /* binding */ initImagesTicker; }
/* harmony export */ });
/* harmony import */ var throttle_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);


/*------------------------------------------------------------------

  Init Images Ticker

-------------------------------------------------------------------*/

function initImagesTicker() {
  (0,_utility__WEBPACK_IMPORTED_MODULE_1__.$)('.flq-image-ticker').each(function () {
    var $ticker = (0,_utility__WEBPACK_IMPORTED_MODULE_1__.$)(this);
    var $tickerInner = $ticker.children();
    var $starterElements = $tickerInner.children('div');
    var gap = $ticker.attr('data-gap') || 20;
    var pixelsPerSecond = $ticker.attr('data-pixels-per-second') || 20;

    if (!$starterElements.length) {
      return;
    }

    if (gap) {
      $ticker.css('--flq-image-ticker__gap', "".concat(gap, "px"));
    }

    $starterElements.imagesLoaded(function () {
      var clonesCount = 1;
      var firstRun = true; // Create ticker clones if needed, recalculate animation speed.

      var recalculateTickerClones = (0,throttle_debounce__WEBPACK_IMPORTED_MODULE_0__.throttle)(200, function () {
        var wndW = _utility__WEBPACK_IMPORTED_MODULE_1__.$wnd.width();
        var clonesWidth = 0;
        $starterElements.each(function () {
          clonesWidth += (0,_utility__WEBPACK_IMPORTED_MODULE_1__.$)(this).innerWidth();
        }); // We should fill the whole line + 2 more item to prevent possible blinking.

        var neededClones = 2 + Math.ceil(wndW / clonesWidth);

        if (neededClones > clonesCount) {
          var additionalClones = neededClones - clonesCount;

          for (var i = 0; i < additionalClones; i += 1) {
            $starterElements.clone().appendTo($tickerInner);
            clonesCount += 1;
          }
        } // Set animation.


        $tickerInner.css({
          width: clonesWidth,
          animationDuration: "".concat(clonesWidth / pixelsPerSecond, "s")
        }); // Show ticker on first run.

        if (firstRun) {
          firstRun = false;
          $ticker.addClass('flq-image-ticker-ready');
        }
      });
      (0,_utility__WEBPACK_IMPORTED_MODULE_1__.debounceResize)(recalculateTickerClones);
      recalculateTickerClones();
    });
  });
}



/***/ }),
/* 13 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initBackgroundMove": function() { return /* binding */ initBackgroundMove; }
/* harmony export */ });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);


function initBackgroundMove() {
  var cursorX = 0;
  var cursorY = 0;
  var delayX = 0;
  var delayY = 0;
  var delay = 200;
  var maxMove = 30;
  var $backgroundImage = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.$)('.flq-background-move > .flq-background-image > .flq-image');
  $backgroundImage.css({
    top: -maxMove,
    right: -maxMove,
    bottom: -maxMove,
    left: -maxMove
  });
  _utility__WEBPACK_IMPORTED_MODULE_0__.$doc.on('mousemove drag', function (e) {
    cursorX = e.clientX;
    cursorY = e.clientY;
  });

  function moveBackgroundImage() {
    var wndW = window.innerWidth / 2;
    var wndH = window.innerHeight / 2;
    var xPos = -((cursorX - wndW) / wndW) * maxMove;
    var yPos = -((cursorY - wndH) / wndH) * maxMove;
    delayX += (xPos - delayX) / delay;
    delayY += (yPos - delayY) / delay;
    $backgroundImage.css('transform', "matrix(1, 0, 0, 1, ".concat(delayX, ", ").concat(delayY, ") translate3d(0,0,0)"));
    requestAnimationFrame(moveBackgroundImage);
  }

  requestAnimationFrame(moveBackgroundImage);
}



/***/ }),
/* 14 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initScrollTopButton": function() { return /* binding */ initScrollTopButton; }
/* harmony export */ });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);

/*------------------------------------------------------------------

  Scroll top button

-------------------------------------------------------------------*/

function initScrollTopButton() {
  var $button = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.$)('.flq-scroll-top-wrapper');
  var buttonClassShow = 'flq-scroll-top-button-show';
  var buttonClassHide = 'flq-scroll-top-button-hide';

  if (!$button.length) {
    return;
  } // show / hide.


  (0,_utility__WEBPACK_IMPORTED_MODULE_0__.throttleScroll)(function (type, scroll) {
    if (type === 'end' || scroll > 400) {
      $button.addClass(buttonClassShow);
    } else {
      $button.removeClass(buttonClassShow);
    }
  }); // Hide navbar-icons when open keyboard.

  if (_utility__WEBPACK_IMPORTED_MODULE_0__.isMobile) {
    _utility__WEBPACK_IMPORTED_MODULE_0__.$doc.on('focus', 'select, input, textarea', function () {
      $button.addClass(buttonClassHide);
    });
    _utility__WEBPACK_IMPORTED_MODULE_0__.$doc.on('blur', 'select, input, textarea', function () {
      $button.removeClass(buttonClassHide);
    });
  }
}



/***/ }),
/* 15 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initScrollProgress": function() { return /* binding */ initScrollProgress; }
/* harmony export */ });
/* harmony import */ var raf_schd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);


/*------------------------------------------------------------------

  Scroll top button

-------------------------------------------------------------------*/

function initScrollProgress() {
  var $progress = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.$)('.flq-scroll-progress');

  function updateScrollProgress() {
    var maxHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrollProgress = Math.min(100, _utility__WEBPACK_IMPORTED_MODULE_0__.$wnd.scrollTop() / maxHeight * 100).toFixed(2);
    $progress.each(function () {
      this.style.setProperty('--flq-scroll-progress', "".concat(scrollProgress, "%"));
    });
  }

  if ($progress.length) {
    _utility__WEBPACK_IMPORTED_MODULE_0__.$wnd.on('scroll resize', (0,raf_schd__WEBPACK_IMPORTED_MODULE_1__["default"])(updateScrollProgress));
    (0,_utility__WEBPACK_IMPORTED_MODULE_0__.$)((0,raf_schd__WEBPACK_IMPORTED_MODULE_1__["default"])(updateScrollProgress));
    (0,_utility__WEBPACK_IMPORTED_MODULE_0__.throttleScroll)(function (type, scroll) {
      if (type === 'end' || scroll > 400) {
        // Display progress bar only if document height is twice larger than window height.
        if (window.innerHeight * 2 < document.documentElement.offsetHeight) {
          $progress.addClass('flq-scroll-progress-show');
        }
      } else {
        $progress.removeClass('flq-scroll-progress-show');
      }
    });
  }
}



/***/ }),
/* 16 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initOffcanvas": function() { return /* binding */ initOffcanvas; }
/* harmony export */ });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);

/*------------------------------------------------------------------

  Offcanvas

-------------------------------------------------------------------*/

function initOffcanvas() {
  (0,_utility__WEBPACK_IMPORTED_MODULE_0__.$)('.offcanvas').each(function () {
    var $this = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.$)(this);
    var classClosing = 'flq-offcanvas-is-closing';
    var classBodyActive = 'flq-offcanvas-active';
    $this[0].addEventListener('show.bs.offcanvas', function () {
      _utility__WEBPACK_IMPORTED_MODULE_0__.$body.addClass(classBodyActive);
    });
    $this[0].addEventListener('hide.bs.offcanvas', function () {
      $this.addClass(classClosing);
    });
    $this[0].addEventListener('hidden.bs.offcanvas', function () {
      $this.removeClass(classClosing);

      if (!(0,_utility__WEBPACK_IMPORTED_MODULE_0__.$)('.offcanvas').hasClass('show')) {
        _utility__WEBPACK_IMPORTED_MODULE_0__.$body.removeClass(classBodyActive);
      }
    });
  });
}



/***/ }),
/* 17 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initPluginScrollReveal": function() { return /* binding */ initPluginScrollReveal; }
/* harmony export */ });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);


function initPluginScrollReveal() {
  var _window = window,
      ScrollReveal = _window.ScrollReveal;

  if (typeof ScrollReveal === 'undefined') {
    return;
  }

  _utility__WEBPACK_IMPORTED_MODULE_0__.$doc.on('flq.preloader.hide', function () {
    setTimeout(function () {
      (0,_utility__WEBPACK_IMPORTED_MODULE_0__.$)('[data-sr]').each(function () {
        var $this = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.$)(this);
        var dataId = $this.attr('data-sr') || '';
        var dataInterval = parseInt($this.attr('data-sr-interval'), 10);
        var dataDuration = parseInt($this.attr('data-sr-duration'), 10);
        var dataDelay = parseInt($this.attr('data-sr-delay'), 10);
        var dataScale = parseFloat($this.attr('data-sr-scale'));
        var dataOrigin = $this.attr('data-sr-origin');
        var dataDistance = $this.attr('data-sr-distance');
        var conf = {};
        var $item = $this.find("[data-sr-item=\"".concat(dataId, "\"]")).length ? $this.find("[data-sr-item=\"".concat(dataId, "\"]")) : $this;
        conf.reset = true;
        conf.cleanup = true;
        conf.reset = false;
        conf.interval = dataInterval || 1;
        conf.duration = dataDuration || 100;
        conf.delay = dataDelay || 0;
        conf.scale = dataScale || 1;
        conf.origin = dataOrigin || 'bottom';
        conf.distance = dataDistance ? "".concat(dataDistance, "px") : 0;
        ScrollReveal().reveal($item, conf);
      });
      _utility__WEBPACK_IMPORTED_MODULE_0__.$doc.on('arrangeComplete', '.flq-isotope-grid', function () {
        ScrollReveal().delegate({
          type: 'resize'
        });
      });
    }, 500);
  });
}



/***/ }),
/* 18 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initPluginRellax": function() { return /* binding */ initPluginRellax; }
/* harmony export */ });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);


function initPluginRellax() {
  if (typeof Rellax === 'undefined' || !(0,_utility__WEBPACK_IMPORTED_MODULE_0__.$)('[data-rellax]').length || _utility__WEBPACK_IMPORTED_MODULE_0__.isMobile) {
    return;
  }

  var rellax = new window.Rellax('[data-rellax]', {
    center: true
  });
  _utility__WEBPACK_IMPORTED_MODULE_0__.$doc.imagesLoaded().done(function () {
    rellax.refresh();
  });
}



/***/ }),
/* 19 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initPluginSwiper": function() { return /* binding */ initPluginSwiper; }
/* harmony export */ });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);

/*------------------------------------------------------------------

  Init Plugin Swiper

-------------------------------------------------------------------*/

function initPluginSwiper() {
  var _window = window,
      Swiper = _window.Swiper;

  if (typeof Swiper === 'undefined') {
    return;
  } // Search swiper elements.


  function searchSwiperElement($wrapper, $this, elementClass) {
    return $wrapper.length ? $wrapper.find(elementClass) : $this.find(elementClass);
  } // Add zero before number.


  function addZeroBeforeNumber(number) {
    return number <= 9 ? "0".concat(number) : number;
  } // Add attribute bullets total.


  function addAttrBulletsTotal($pagination, element) {
    $pagination.attr('data-bullets-total', addZeroBeforeNumber(element.snapGrid.length));
  }

  var $cursor = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.$)('.flq-cursor');
  (0,_utility__WEBPACK_IMPORTED_MODULE_0__.$)('.swiper').each(function () {
    var $this = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.$)(this);
    var $wrapper = $this.parents('.flq-swiper-wrapper');
    var classBtnNext = '.flq-swiper-button-next';
    var classBtnPrev = '.flq-swiper-button-prev';
    var classPagination = '.flq-swiper-pagination';
    var classPaginationProgress = '.flq-swiper-pagination-progress';
    var dataButtons = $this.attr('data-buttons');
    var dataPagination = $this.attr('data-pagination');
    var dataPaginationDynamic = $this.attr('data-pagination-dynamic');
    var dataPaginationProgress = $this.attr('data-pagination-progress');
    var dataLoop = $this.attr('data-loop');
    var dataGrabCursor = $this.attr('data-grab-cursor');
    var dataParallax = $this.attr('data-parallax');
    var dataFreeMode = $this.attr('data-free-mode');
    var dataAutoHeight = $this.attr('data-auto-height');
    var dataBreakpoints = $this.attr('data-breakpoints');
    var dataSlides = $this.attr('data-slides');
    var dataTouchRatio = parseFloat($this.attr('data-touch-ratio'));
    var dataAutoplay = parseInt($this.attr('data-autoplay'), 10);
    var dataSpeed = parseInt($this.attr('data-speed'), 10);
    var dataGap = parseInt($this.attr('data-gap'), 10);
    var conf = {}; // fix the conflict with custom cursor movement.

    conf.touchStartPreventDefault = false; // fix touch in the spacebetween when move cursor.

    conf.touchEventsTarget = 'container'; // Options.

    conf.loop = dataLoop ? true : '';
    conf.freeMode = dataFreeMode ? true : '';
    conf.parallax = dataParallax ? true : '';
    conf.grabCursor = dataGrabCursor ? true : '';
    conf.autoHeight = dataAutoHeight ? true : '';
    conf.touchRatio = dataTouchRatio || 1;
    conf.speed = dataSpeed || 400;
    conf.spaceBetween = dataGap || 0;
    conf.autoplay = dataAutoplay ? {
      delay: dataAutoplay
    } : false;
    conf.slidesPerView = dataSlides >= 1 ? parseInt(dataSlides, 10) : 1;
    conf.keyboard = {
      enabled: true
    }; // Buttons.

    if (dataButtons) {
      var $btnNext = searchSwiperElement($wrapper, $this, classBtnNext);
      var $btnPrev = searchSwiperElement($wrapper, $this, classBtnPrev);
      conf.navigation = {
        nextEl: $btnNext[0],
        prevEl: $btnPrev[0],
        disabledClass: 'disabled'
      };
    } // Pagination.


    if (dataPagination) {
      var $pagination = searchSwiperElement($wrapper, $this, classPagination);
      conf.pagination = {
        el: $pagination[0],
        dynamicBullets: dataPaginationDynamic ? true : '',
        clickable: true
      };
    } // Pagination Progress.


    if (dataPaginationProgress) {
      var _$pagination = searchSwiperElement($wrapper, $this, classPaginationProgress);

      conf.pagination = {
        el: _$pagination[0],
        type: 'progressbar'
      };
    } // Breakpoints.


    if (dataBreakpoints) {
      var i = 0;
      var breaks = {};
      var points = dataBreakpoints.split(',');

      while (i < dataBreakpoints.split(',').length) {
        breaks[parseInt(points[i].split(':')[0], 10)] = {
          slidesPerView: parseInt(points[i].split(':')[1], 10)
        };
        i += 1;
      }

      conf.breakpoints = breaks;
    } // Add class "touch" when touch mouse.


    conf.on = {
      touchStart: function touchStart(e) {
        var $slider = e.$el.parent();

        if ($slider.hasClass('flq-swiper-effect-touch')) {
          $slider.addClass('flq-swiper-touch');
        }

        if ($cursor.length) {
          $cursor.addClass('flq-cursor-touch');
        }
      },
      touchEnd: function touchEnd(e) {
        var $slider = e.$el.parent();

        if ($slider.hasClass('flq-swiper-effect-touch')) {
          $slider.removeClass('flq-swiper-touch');
        }

        if ($cursor.length) {
          $cursor.removeClass('flq-cursor-touch');
        }
      },
      slideNextTransitionStart: function slideNextTransitionStart() {
        $this.children().trigger('swiperSlideNextTransitionStart');
      },
      slidePrevTransitionStart: function slidePrevTransitionStart() {
        $this.children().trigger('swiperSlidePrevTransitionStart');
      },
      activeIndexChange: function activeIndexChange() {
        $this.children().trigger('swiperActiveIndexChange');
      }
    }; // eslint-disable-next-line

    new Swiper($this.children()[0], conf);
  }); // Pagination custom.

  (0,_utility__WEBPACK_IMPORTED_MODULE_0__.$)('.swiper-container').each(function () {
    var self = this;
    var $this = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.$)(self);
    var $wrapper = $this.parents('.flq-swiper-wrapper');
    var classPaginationCustom = '.flq-swiper-pagination-custom';
    var classBulletActive = 'swiper-pagination-bullet-active';
    var thisSwiper = self.swiper;
    var slides = thisSwiper.slides.length;
    var $pagination = searchSwiperElement($wrapper, $this, classPaginationCustom); // Added bullets.

    for (var index = 0; index < slides; index += 1) {
      $pagination.append("<span class=\"swiper-pagination-bullet\">".concat(addZeroBeforeNumber(index + 1), "</span>"));
    } // Added active class in the first bullet.


    (0,_utility__WEBPACK_IMPORTED_MODULE_0__.$)($pagination.children()[0]).addClass(classBulletActive); // Added attribute total bullets.

    addAttrBulletsTotal($pagination, thisSwiper);
    thisSwiper.on('snapGridLengthChange', function () {
      addAttrBulletsTotal($pagination, thisSwiper);
    }); // Toggle active class in the bullets.

    thisSwiper.on('slideChange', function (e) {
      $pagination.children().removeClass(classBulletActive);
      (0,_utility__WEBPACK_IMPORTED_MODULE_0__.$)($pagination.children()[e.activeIndex]).addClass(classBulletActive);
    });
  });
}



/***/ }),
/* 20 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initPluginAnime": function() { return /* binding */ initPluginAnime; }
/* harmony export */ });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);

/*------------------------------------------------------------------

  Init Plugin Animejs

-------------------------------------------------------------------*/

function initPluginAnime() {
  var _window = window,
      anime = _window.anime;

  if (typeof anime === 'undefined') {
    return;
  } // Preloader title.


  var preloaderTitle = anime({
    easing: 'easeOutSine',
    duration: 400,
    translateX: ['100%', 0],
    targets: '.flq-preloader .flq-preloader-title > span',
    'clip-path': ['inset(0 100% 0 0)', 'inset(0 0% 0 0)'],
    autoplay: false,
    delay: anime.stagger(50, {
      start: 0
    })
  }); // Card team social.

  var cardTeamSocial;
  _utility__WEBPACK_IMPORTED_MODULE_0__.$doc.on('mouseenter', '.flq-card-team', function (e) {
    cardTeamSocial = anime({
      easing: 'cubicBezier(0.2, 1, 0.2, 1)',
      duration: 700,
      opacity: [0, 1],
      translateY: ['100%', 0],
      targets: e.currentTarget.querySelectorAll('.flq-social li a'),
      autoplay: false,
      delay: anime.stagger(80, {
        start: 0
      })
    });
    cardTeamSocial.play();
  });
  _utility__WEBPACK_IMPORTED_MODULE_0__.$doc.on('mouseleave', '.flq-card-team', function () {
    cardTeamSocial.reverse();
    cardTeamSocial.play();
  }); // Search social show.

  var searchSocialShow = anime({
    easing: 'easeOutSine',
    duration: 300,
    opacity: [0, 1],
    translateY: ['100%', 0],
    targets: '.flq-search .flq-social li',
    autoplay: false,
    delay: anime.stagger(80, {
      start: 500
    })
  }); // Search social close.

  var searchSocialClose = anime({
    easing: 'easeOutSine',
    duration: 300,
    opacity: [1, 0],
    translateY: [0, '100%'],
    targets: '.flq-search .flq-social li',
    autoplay: false,
    delay: anime.stagger(80, {
      start: 0
    })
  }); // Navbar mobile show.

  var navbarMobileShow = anime({
    easing: 'cubicBezier(0.2, 1, 0.2, 1)',
    duration: 1100,
    translateY: ['60%', 0],
    targets: '.flq-navbar-mobile .flq-fancybox-body > .nav > .nav-item, .flq-navbar-mobile .flq-fancybox-body > div > .nav > .nav-item',
    'clip-path': ['inset(0 -100% 100% -100%)', 'inset(0 -100% 0% -100%)'],
    autoplay: false,
    delay: anime.stagger(80, {
      start: 160
    })
  }); // Navbar mobile close.

  var navbarMobileClose = anime({
    easing: 'cubicBezier(0.2, 1, 0.2, 1)',
    duration: 1500,
    translateY: [0, '60%'],
    targets: '.flq-navbar-mobile .flq-fancybox-body > .nav > .nav-item, .flq-navbar-mobile .flq-fancybox-body > div > .nav > .nav-item',
    'clip-path': ['inset(0 -100% 0% -100%)', 'inset(0 -100% 100% -100%)'],
    autoplay: false
  }); // Navbar mobile widgets show.

  var navbarMobileWidgetsShow = anime({
    easing: 'easeOutSine',
    duration: 400,
    opacity: [0, 1],
    translateY: ['30px', 0],
    targets: '.flq-navbar-mobile .flq-sidebar .flq-widget',
    autoplay: false,
    delay: anime.stagger(80, {
      start: 300
    })
  }); // Navbar mobile widgets close.

  var navbarMobileWidgetsClose = anime({
    easing: 'easeOutSine',
    duration: 400,
    opacity: [1, 0],
    translateY: [0, '30px'],
    targets: '.flq-navbar-mobile .flq-sidebar .flq-widget',
    autoplay: false
  });
  preloaderTitle.play();
  _utility__WEBPACK_IMPORTED_MODULE_0__.$doc.on('beforeShow.fb', function () {
    navbarMobileShow.play();
    navbarMobileWidgetsShow.play();
    searchSocialShow.play();
  });
  _utility__WEBPACK_IMPORTED_MODULE_0__.$doc.on('beforeClose.fb', function () {
    navbarMobileClose.play();
    navbarMobileWidgetsClose.play();
    searchSocialClose.play();
  }); // Main slider.

  var classSwiperMain = '.flq-swiper-main .swiper-container';
  var swiperMainTranslate;
  _utility__WEBPACK_IMPORTED_MODULE_0__.$doc.on('swiperSlideNextTransitionStart', classSwiperMain, function () {
    swiperMainTranslate = ['40px', 0];
  });
  _utility__WEBPACK_IMPORTED_MODULE_0__.$doc.on('swiperSlidePrevTransitionStart', classSwiperMain, function () {
    swiperMainTranslate = ['-40px', 0];
  });
  _utility__WEBPACK_IMPORTED_MODULE_0__.$doc.on('swiperActiveIndexChange', classSwiperMain, function () {
    setTimeout(function () {
      anime({
        easing: 'easeOutCubic',
        duration: 600,
        opacity: [0, 1],
        translateX: swiperMainTranslate,
        targets: '.flq-swiper-main .swiper-slide-active [data-animejs]',
        autoplay: true,
        delay: anime.stagger(35, {
          start: 280
        })
      });
    }, 10);
  });
  _utility__WEBPACK_IMPORTED_MODULE_0__.$doc.on('flq.preloader.hide', function () {
    anime({
      easing: 'easeInOutCubic',
      duration: 700,
      opacity: [0, 1],
      translateY: ['15px', 0],
      targets: '.flq-swiper-main .swiper-slide-active [data-animejs]',
      autoplay: true,
      delay: anime.stagger(50, {
        start: 700
      })
    });
    anime({
      easing: 'easeOutCubic',
      duration: 800,
      opacity: [0, 1],
      scale: [1.15, 1],
      targets: '.flq-swiper-main .swiper-slide-active .flq-background-image',
      autoplay: true,
      delay: 800
    });
  });
}



/***/ }),
/* 21 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initPluginObjectFitImages": function() { return /* binding */ initPluginObjectFitImages; }
/* harmony export */ });
/*------------------------------------------------------------------

  Object Fit Images

-------------------------------------------------------------------*/
function initPluginObjectFitImages() {
  if (typeof window.objectFitImages !== 'undefined') {
    window.objectFitImages();
  }
}



/***/ }),
/* 22 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initPluginCountUp": function() { return /* binding */ initPluginCountUp; }
/* harmony export */ });
/* harmony import */ var countup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);


/*------------------------------------------------------------------

  Init CountUp

-------------------------------------------------------------------*/

function initPluginCountUp() {
  if (typeof countup_js__WEBPACK_IMPORTED_MODULE_0__.CountUp === 'undefined') {
    return;
  }

  (0,_utility__WEBPACK_IMPORTED_MODULE_1__.throttleScroll)(function () {
    (0,_utility__WEBPACK_IMPORTED_MODULE_1__.$)('.flq-count:not(.flq-count-stop)').each(function () {
      var $this = (0,_utility__WEBPACK_IMPORTED_MODULE_1__.$)(this);
      var number = parseInt($this.text(), 10);
      var conf = {};

      if ((0,_utility__WEBPACK_IMPORTED_MODULE_1__.isInViewport)($this) > 0) {
        conf.useGrouping = false;
        conf.duration = 3;
        var countUp = new countup_js__WEBPACK_IMPORTED_MODULE_0__.CountUp($this[0], number, conf);
        countUp.start();
        $this.addClass('flq-count-stop');
      }
    });
  });
}



/***/ }),
/* 23 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CountUp": function() { return /* binding */ CountUp; }
/* harmony export */ });
var __assign = undefined && undefined.__assign || function () {
  return (__assign = Object.assign || function (t) {
    for (var i, a = 1, s = arguments.length; a < s; a++) {
      for (var n in i = arguments[a]) {
        Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n]);
      }
    }

    return t;
  }).apply(this, arguments);
},
    CountUp = function () {
  function t(t, i, a) {
    var s = this;
    this.target = t, this.endVal = i, this.options = a, this.version = "2.0.8", this.defaults = {
      startVal: 0,
      decimalPlaces: 0,
      duration: 2,
      useEasing: !0,
      useGrouping: !0,
      smartEasingThreshold: 999,
      smartEasingAmount: 333,
      separator: ",",
      decimal: ".",
      prefix: "",
      suffix: ""
    }, this.finalEndVal = null, this.useEasing = !0, this.countDown = !1, this.error = "", this.startVal = 0, this.paused = !0, this.count = function (t) {
      s.startTime || (s.startTime = t);
      var i = t - s.startTime;
      s.remaining = s.duration - i, s.useEasing ? s.countDown ? s.frameVal = s.startVal - s.easingFn(i, 0, s.startVal - s.endVal, s.duration) : s.frameVal = s.easingFn(i, s.startVal, s.endVal - s.startVal, s.duration) : s.countDown ? s.frameVal = s.startVal - (s.startVal - s.endVal) * (i / s.duration) : s.frameVal = s.startVal + (s.endVal - s.startVal) * (i / s.duration), s.countDown ? s.frameVal = s.frameVal < s.endVal ? s.endVal : s.frameVal : s.frameVal = s.frameVal > s.endVal ? s.endVal : s.frameVal, s.frameVal = Number(s.frameVal.toFixed(s.options.decimalPlaces)), s.printValue(s.frameVal), i < s.duration ? s.rAF = requestAnimationFrame(s.count) : null !== s.finalEndVal ? s.update(s.finalEndVal) : s.callback && s.callback();
    }, this.formatNumber = function (t) {
      var i,
          a,
          n,
          e,
          r = t < 0 ? "-" : "";
      i = Math.abs(t).toFixed(s.options.decimalPlaces);
      var o = (i += "").split(".");

      if (a = o[0], n = o.length > 1 ? s.options.decimal + o[1] : "", s.options.useGrouping) {
        e = "";

        for (var l = 0, h = a.length; l < h; ++l) {
          0 !== l && l % 3 == 0 && (e = s.options.separator + e), e = a[h - l - 1] + e;
        }

        a = e;
      }

      return s.options.numerals && s.options.numerals.length && (a = a.replace(/[0-9]/g, function (t) {
        return s.options.numerals[+t];
      }), n = n.replace(/[0-9]/g, function (t) {
        return s.options.numerals[+t];
      })), r + s.options.prefix + a + n + s.options.suffix;
    }, this.easeOutExpo = function (t, i, a, s) {
      return a * (1 - Math.pow(2, -10 * t / s)) * 1024 / 1023 + i;
    }, this.options = __assign(__assign({}, this.defaults), a), this.formattingFn = this.options.formattingFn ? this.options.formattingFn : this.formatNumber, this.easingFn = this.options.easingFn ? this.options.easingFn : this.easeOutExpo, this.startVal = this.validateValue(this.options.startVal), this.frameVal = this.startVal, this.endVal = this.validateValue(i), this.options.decimalPlaces = Math.max(this.options.decimalPlaces), this.resetDuration(), this.options.separator = String(this.options.separator), this.useEasing = this.options.useEasing, "" === this.options.separator && (this.options.useGrouping = !1), this.el = "string" == typeof t ? document.getElementById(t) : t, this.el ? this.printValue(this.startVal) : this.error = "[CountUp] target is null or undefined";
  }

  return t.prototype.determineDirectionAndSmartEasing = function () {
    var t = this.finalEndVal ? this.finalEndVal : this.endVal;
    this.countDown = this.startVal > t;
    var i = t - this.startVal;

    if (Math.abs(i) > this.options.smartEasingThreshold) {
      this.finalEndVal = t;
      var a = this.countDown ? 1 : -1;
      this.endVal = t + a * this.options.smartEasingAmount, this.duration = this.duration / 2;
    } else this.endVal = t, this.finalEndVal = null;

    this.finalEndVal ? this.useEasing = !1 : this.useEasing = this.options.useEasing;
  }, t.prototype.start = function (t) {
    this.error || (this.callback = t, this.duration > 0 ? (this.determineDirectionAndSmartEasing(), this.paused = !1, this.rAF = requestAnimationFrame(this.count)) : this.printValue(this.endVal));
  }, t.prototype.pauseResume = function () {
    this.paused ? (this.startTime = null, this.duration = this.remaining, this.startVal = this.frameVal, this.determineDirectionAndSmartEasing(), this.rAF = requestAnimationFrame(this.count)) : cancelAnimationFrame(this.rAF), this.paused = !this.paused;
  }, t.prototype.reset = function () {
    cancelAnimationFrame(this.rAF), this.paused = !0, this.resetDuration(), this.startVal = this.validateValue(this.options.startVal), this.frameVal = this.startVal, this.printValue(this.startVal);
  }, t.prototype.update = function (t) {
    cancelAnimationFrame(this.rAF), this.startTime = null, this.endVal = this.validateValue(t), this.endVal !== this.frameVal && (this.startVal = this.frameVal, this.finalEndVal || this.resetDuration(), this.finalEndVal = null, this.determineDirectionAndSmartEasing(), this.rAF = requestAnimationFrame(this.count));
  }, t.prototype.printValue = function (t) {
    var i = this.formattingFn(t);
    "INPUT" === this.el.tagName ? this.el.value = i : "text" === this.el.tagName || "tspan" === this.el.tagName ? this.el.textContent = i : this.el.innerHTML = i;
  }, t.prototype.ensureNumber = function (t) {
    return "number" == typeof t && !isNaN(t);
  }, t.prototype.validateValue = function (t) {
    var i = Number(t);
    return this.ensureNumber(i) ? i : (this.error = "[CountUp] invalid start or end value: " + t, null);
  }, t.prototype.resetDuration = function () {
    this.startTime = null, this.duration = 1e3 * Number(this.options.duration), this.remaining = this.duration;
  }, t;
}();



/***/ }),
/* 24 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initPluginIsotope": function() { return /* binding */ initPluginIsotope; }
/* harmony export */ });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);

/*------------------------------------------------------------------

  Isotope

-------------------------------------------------------------------*/

function initPluginIsotope() {
  if (typeof _utility__WEBPACK_IMPORTED_MODULE_0__.$.fn.isotope === 'undefined') {
    return;
  }

  (0,_utility__WEBPACK_IMPORTED_MODULE_0__.$)('.flq-isotope').each(function () {
    var $this = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.$)(this);
    var $grid = $this.find('.flq-isotope-grid');
    var curIsotopeOptions = $this.find('.flq-isotope-options');
    var dataLayout = $grid.attr('data-isotope-layout');
    var conf = {};
    conf.itemSelector = '.flq-isotope-item';

    if (dataLayout) {
      conf.layoutMode = dataLayout;
    } // init items


    var isotope = $grid.isotope(conf); // refresh for parallax images and isotope images position

    if (isotope.imagesLoaded) {
      _utility__WEBPACK_IMPORTED_MODULE_0__.$doc.imagesLoaded().progress(function () {
        isotope.isotope('layout');
      });
    } // click on filter button


    curIsotopeOptions.on('click', '> li > :not(.active)', function (e) {
      // eslint-disable-next-line newline-per-chained-call
      (0,_utility__WEBPACK_IMPORTED_MODULE_0__.$)(this).addClass('active').parent().siblings().children().removeClass('active');
      var curFilter = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.$)(this).attr('data-filter');
      e.preventDefault();
      isotope.isotope({
        filter: function filter() {
          if (curFilter === 'all') {
            return true;
          }

          var itemFilters = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.$)(this).attr('data-filters');

          if (itemFilters) {
            itemFilters = itemFilters.split(','); // eslint-disable-next-line

            for (var k in itemFilters) {
              if (itemFilters[k].replace(/\s/g, '') === curFilter) {
                return true;
              }
            }
          }

          return false;
        }
      });
    });
  });
}



/***/ }),
/* 25 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initPluginFancybox": function() { return /* binding */ initPluginFancybox; }
/* harmony export */ });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);

/*------------------------------------------------------------------

  Init Plugin Fancybox

-------------------------------------------------------------------*/

function initPluginFancybox() {
  if (typeof _utility__WEBPACK_IMPORTED_MODULE_0__.$.fn.fancybox === 'undefined') {
    return;
  }

  _utility__WEBPACK_IMPORTED_MODULE_0__.$.fancybox.defaults.backFocus = false;
  _utility__WEBPACK_IMPORTED_MODULE_0__.$doc.on('beforeShow.fb', function (e) {
    (0,_utility__WEBPACK_IMPORTED_MODULE_0__.bodyOverflow)(1);
    setTimeout(function () {
      e.target.classList.add('flq-fancybox-open');
    }, 10);
  });
  _utility__WEBPACK_IMPORTED_MODULE_0__.$doc.on('afterClose.fb', function () {
    (0,_utility__WEBPACK_IMPORTED_MODULE_0__.bodyOverflow)(0); // Hide collapse.

    (0,_utility__WEBPACK_IMPORTED_MODULE_0__.$)('.flq-navbar-mobile .collapse').each(function () {
      var bsCollapse = new window.bootstrap.Collapse((0,_utility__WEBPACK_IMPORTED_MODULE_0__.$)(this)[0], {
        toggle: false
      });
      bsCollapse.hide();
    });
  });
  _utility__WEBPACK_IMPORTED_MODULE_0__.$doc.on('keyup', function (e) {
    if (e.keyCode === 27) {
      _utility__WEBPACK_IMPORTED_MODULE_0__.$.fancybox.close();
    }
  });
}



/***/ }),
/* 26 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initPluginTilt": function() { return /* binding */ initPluginTilt; }
/* harmony export */ });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);

/*------------------------------------------------------------------

  Tilt

-------------------------------------------------------------------*/

function initPluginTilt() {
  var _window = window,
      VanillaTilt = _window.VanillaTilt;

  if (typeof VanillaTilt === 'undefined') {
    return;
  }

  (0,_utility__WEBPACK_IMPORTED_MODULE_0__.$)('.flq-card-feature-filled, .flq-card-movie, .flq-card-pricing').each(function () {
    var $this = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.$)(this);
    var conf = {};

    if ($this.parents('.swiper-slide').length) {
      return;
    }

    conf.max = 4;
    conf.speed = 1000;
    VanillaTilt.init($this[0], conf);
  });
}



/***/ }),
/* 27 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initPluginJarallax": function() { return /* binding */ initPluginJarallax; }
/* harmony export */ });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);

/*------------------------------------------------------------------

  Jarallax

-------------------------------------------------------------------*/

function initPluginJarallax() {
  if (!this.options.parallax || _utility__WEBPACK_IMPORTED_MODULE_0__.isMobile) {
    return;
  } // in newest versions used Jarallax plugin


  if (typeof _utility__WEBPACK_IMPORTED_MODULE_0__.$.fn.jarallax === 'undefined') {
    return;
  }

  (0,_utility__WEBPACK_IMPORTED_MODULE_0__.$)('.jarallax').each(function () {
    var speed = parseFloat((0,_utility__WEBPACK_IMPORTED_MODULE_0__.$)(this).attr('data-speed'));
    (0,_utility__WEBPACK_IMPORTED_MODULE_0__.$)(this).jarallax({
      speed: Number.isNaN(speed) ? 0.4 : speed
    });
  });
}



/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _parts_options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _parts_utility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _parts_setOptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _parts_initCursor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var _parts_initNavbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8);
/* harmony import */ var _parts_initDropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9);
/* harmony import */ var _parts_initAnchors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10);
/* harmony import */ var _parts_initForms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(11);
/* harmony import */ var _parts_initImagesTicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(12);
/* harmony import */ var _parts_initBackgroundMove__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(13);
/* harmony import */ var _parts_initScrollTopButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(14);
/* harmony import */ var _parts_initScrollProgress__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(15);
/* harmony import */ var _parts_initOffcanvas__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(16);
/* harmony import */ var _parts_initPluginScrollReveal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(17);
/* harmony import */ var _parts_initPluginRellax__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(18);
/* harmony import */ var _parts_initPluginSwiper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(19);
/* harmony import */ var _parts_initPluginAnime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(20);
/* harmony import */ var _parts_initPluginObjectFitImages__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(21);
/* harmony import */ var _parts_initPluginCountUp__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(22);
/* harmony import */ var _parts_initPluginIsotope__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(24);
/* harmony import */ var _parts_initPluginFancybox__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(25);
/* harmony import */ var _parts_initPluginTilt__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(26);
/* harmony import */ var _parts_initPluginJarallax__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(27);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }













 // plugins











/*------------------------------------------------------------------

  Fliqs Class

-------------------------------------------------------------------*/

var FLIQS = /*#__PURE__*/function () {
  function FLIQS() {
    _classCallCheck(this, FLIQS);

    this.options = _parts_options__WEBPACK_IMPORTED_MODULE_0__.options;
  }

  _createClass(FLIQS, [{
    key: "init",
    value: function init() {
      // prt:sc:dm
      var self = this;
      self.initCursor();
      self.initNavbar();
      self.initDropdown();
      self.initAnchors();
      self.initForms();
      self.initImagesTicker();
      self.initBackgroundMove();
      self.initScrollTopButton();
      self.initScrollProgress();
      self.initOffcanvas(); // init plugins

      self.initPluginScrollReveal();
      self.initPluginRellax();
      self.initPluginSwiper();
      self.initPluginAnime();
      self.initPluginObjectFitImages();
      self.initPluginCountUp();
      self.initPluginIsotope();
      self.initPluginFancybox();
      self.initPluginTilt();
      self.initPluginJarallax();
      var tooltip = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
      tooltip.map(function (tooltipTriggerEl) {
        return new window.bootstrap.Tooltip(tooltipTriggerEl);
      });
      var popover = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
      popover.map(function (popoverTriggerEl) {
        return new window.bootstrap.Popover(popoverTriggerEl);
      });
      return self;
    }
  }, {
    key: "setOptions",
    value: function setOptions(newOpts) {
      return _parts_setOptions__WEBPACK_IMPORTED_MODULE_2__.setOptions.call(this, newOpts);
    }
  }, {
    key: "debounceResize",
    value: function debounceResize(func) {
      return _parts_utility__WEBPACK_IMPORTED_MODULE_1__.debounceResize.call(this, func);
    }
  }, {
    key: "throttleScroll",
    value: function throttleScroll(callback) {
      return _parts_utility__WEBPACK_IMPORTED_MODULE_1__.throttleScroll.call(this, callback);
    }
  }, {
    key: "bodyOverflow",
    value: function bodyOverflow(type) {
      return _parts_utility__WEBPACK_IMPORTED_MODULE_1__.bodyOverflow.call(this, type);
    }
  }, {
    key: "isInViewport",
    value: function isInViewport($item, returnRect) {
      return _parts_utility__WEBPACK_IMPORTED_MODULE_1__.isInViewport.call(this, $item, returnRect);
    }
  }, {
    key: "initCursor",
    value: function initCursor() {
      return _parts_initCursor__WEBPACK_IMPORTED_MODULE_3__.initCursor.call(this);
    }
  }, {
    key: "initNavbar",
    value: function initNavbar() {
      return _parts_initNavbar__WEBPACK_IMPORTED_MODULE_4__.initNavbar.call(this);
    }
  }, {
    key: "initDropdown",
    value: function initDropdown() {
      return _parts_initDropdown__WEBPACK_IMPORTED_MODULE_5__.initDropdown.call(this);
    }
  }, {
    key: "initAnchors",
    value: function initAnchors() {
      return _parts_initAnchors__WEBPACK_IMPORTED_MODULE_6__.initAnchors.call(this);
    }
  }, {
    key: "initForms",
    value: function initForms() {
      return _parts_initForms__WEBPACK_IMPORTED_MODULE_7__.initForms.call(this);
    }
  }, {
    key: "initImagesTicker",
    value: function initImagesTicker() {
      return _parts_initImagesTicker__WEBPACK_IMPORTED_MODULE_8__.initImagesTicker.call(this);
    }
  }, {
    key: "initBackgroundMove",
    value: function initBackgroundMove() {
      return _parts_initBackgroundMove__WEBPACK_IMPORTED_MODULE_9__.initBackgroundMove.call(this);
    }
  }, {
    key: "initScrollTopButton",
    value: function initScrollTopButton() {
      return _parts_initScrollTopButton__WEBPACK_IMPORTED_MODULE_10__.initScrollTopButton.call(this);
    }
  }, {
    key: "initScrollProgress",
    value: function initScrollProgress() {
      return _parts_initScrollProgress__WEBPACK_IMPORTED_MODULE_11__.initScrollProgress.call(this);
    }
  }, {
    key: "initOffcanvas",
    value: function initOffcanvas() {
      return _parts_initOffcanvas__WEBPACK_IMPORTED_MODULE_12__.initOffcanvas.call(this);
    }
  }, {
    key: "initPluginScrollReveal",
    value: function initPluginScrollReveal() {
      return _parts_initPluginScrollReveal__WEBPACK_IMPORTED_MODULE_13__.initPluginScrollReveal.call(this);
    }
  }, {
    key: "initPluginRellax",
    value: function initPluginRellax() {
      return _parts_initPluginRellax__WEBPACK_IMPORTED_MODULE_14__.initPluginRellax.call(this);
    }
  }, {
    key: "initPluginSwiper",
    value: function initPluginSwiper() {
      return _parts_initPluginSwiper__WEBPACK_IMPORTED_MODULE_15__.initPluginSwiper.call(this);
    }
  }, {
    key: "initPluginAnime",
    value: function initPluginAnime() {
      return _parts_initPluginAnime__WEBPACK_IMPORTED_MODULE_16__.initPluginAnime.call(this);
    }
  }, {
    key: "initPluginObjectFitImages",
    value: function initPluginObjectFitImages() {
      return _parts_initPluginObjectFitImages__WEBPACK_IMPORTED_MODULE_17__.initPluginObjectFitImages.call(this);
    }
  }, {
    key: "initPluginCountUp",
    value: function initPluginCountUp() {
      return _parts_initPluginCountUp__WEBPACK_IMPORTED_MODULE_18__.initPluginCountUp.call(this);
    }
  }, {
    key: "initPluginIsotope",
    value: function initPluginIsotope() {
      return _parts_initPluginIsotope__WEBPACK_IMPORTED_MODULE_19__.initPluginIsotope.call(this);
    }
  }, {
    key: "initPluginFancybox",
    value: function initPluginFancybox() {
      return _parts_initPluginFancybox__WEBPACK_IMPORTED_MODULE_20__.initPluginFancybox.call(this);
    }
  }, {
    key: "initPluginTilt",
    value: function initPluginTilt() {
      return _parts_initPluginTilt__WEBPACK_IMPORTED_MODULE_21__.initPluginTilt.call(this);
    }
  }, {
    key: "initPluginJarallax",
    value: function initPluginJarallax() {
      return _parts_initPluginJarallax__WEBPACK_IMPORTED_MODULE_22__.initPluginJarallax.call(this);
    }
  }]);

  return FLIQS;
}();
/*------------------------------------------------------------------

  Init Fliqs

-------------------------------------------------------------------*/


window.Fliqs = new FLIQS();
}();
/******/ })()
;