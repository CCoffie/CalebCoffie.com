webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/consoleTextArea.js":
/*!***************************************!*\
  !*** ./components/consoleTextArea.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _consoleHook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./consoleHook */ "./components/consoleHook.js");

var _jsxFileName = "/mnt/c/Users/Caleb/Projects/calebcoffie.com/components/consoleTextArea.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



var ConsoleTextArea = function ConsoleTextArea() {
  var _consoleInput = Object(_consoleHook__WEBPACK_IMPORTED_MODULE_3__["consoleInput"])('ccoffie@calebcoffie.com:/$', 0),
      numKeyPresses = _consoleInput.numKeyPresses,
      bind = _consoleInput.bind;

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("textarea", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    id: "console-text-area",
    spellCheck: "false",
    onChange: function onChange() {}
  }, bind, {
    className: "jsx-2625474235" + " " + (bind.className != null && bind.className || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  })), __jsx("div", {
    id: "prompt-to-type",
    hidden: numKeyPresses > 0,
    className: "jsx-2625474235",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Begin by typing in this box"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2625474235",
    __self: this
  }, "#console-text-area.jsx-2625474235{width:100%;height:100%;box-sizing:border-box;resize:none;outline:none;background:transparent;border:none;font-family:inherit;color:inherit;font-size:inherit;overflow:hidden;}#prompt-to-type.jsx-2625474235{position:absolute;z-index:2;top:50%;width:100%;font-size:1.5em;opacity:1;-webkit-animation:blinkingText-jsx-2625474235 1.5s infinite;animation:blinkingText-jsx-2625474235 1.5s infinite;}@-webkit-keyframes blinkingText-jsx-2625474235{0%{opacity:1;}50%{opacity:.25;}100%{opacity:1;}}@keyframes blinkingText-jsx-2625474235{0%{opacity:1;}50%{opacity:.25;}100%{opacity:1;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy9Vc2Vycy9DYWxlYi9Qcm9qZWN0cy9jYWxlYmNvZmZpZS5jb20vY29tcG9uZW50cy9jb25zb2xlVGV4dEFyZWEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZXdCLEFBR2dDLEFBYU8sQUFTQyxBQUNHLEFBQ0gsVUFGQyxBQUVBLENBdkJSLENBc0JXLE1BVGIsS0FaWSxLQWFkLFFBQ0csU0FiQyxFQWNJLFVBYkgsTUFjSCxPQWJhLEdBY2Msb0JBYnpCLFlBQ1Esb0JBQ04sY0FDSSxrQkFDRixnQkFDcEIsWUFTQSIsImZpbGUiOiIvbW50L2MvVXNlcnMvQ2FsZWIvUHJvamVjdHMvY2FsZWJjb2ZmaWUuY29tL2NvbXBvbmVudHMvY29uc29sZVRleHRBcmVhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY29uc29sZUlucHV0IH0gZnJvbSAnLi9jb25zb2xlSG9vayc7XHJcblxyXG5jb25zdCBDb25zb2xlVGV4dEFyZWEgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IG51bUtleVByZXNzZXMsIGJpbmQgfSA9IGNvbnNvbGVJbnB1dCgnY2NvZmZpZUBjYWxlYmNvZmZpZS5jb206LyQnLCAwKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPHRleHRhcmVhIGlkPVwiY29uc29sZS10ZXh0LWFyZWFcIlxyXG4gICAgICAgICAgICAgICAgc3BlbGxDaGVjaz1cImZhbHNlXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKT0+e319XHJcbiAgICAgICAgICAgICAgICB7Li4uYmluZH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGRpdiBpZD1cInByb21wdC10by10eXBlXCIgaGlkZGVuPXtudW1LZXlQcmVzc2VzID4gMH0+XHJcbiAgICAgICAgICAgICAgICBCZWdpbiBieSB0eXBpbmcgaW4gdGhpcyBib3hcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgICNjb25zb2xlLXRleHQtYXJlYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzaXplOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgI3Byb21wdC10by10eXBlIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBibGlua2luZ1RleHQgMS41cyBpbmZpbml0ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgYmxpbmtpbmdUZXh0e1xyXG4gICAgICAgICAgICAgICAgICAgIDAlICAgICAgeyBvcGFjaXR5OiAxOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgNTAlICAgICAgeyBvcGFjaXR5OiAuMjU7IH1cclxuICAgICAgICAgICAgICAgICAgICAxMDAlICAgIHsgb3BhY2l0eTogMTsgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQ29uc29sZVRleHRBcmVhXHJcblxyXG5cclxuXHJcbiJdfQ== */\n/*@ sourceURL=/mnt/c/Users/Caleb/Projects/calebcoffie.com/components/consoleTextArea.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (ConsoleTextArea);

/***/ })

})
//# sourceMappingURL=index.js.ee4448ecc537670256e2.hot-update.js.map