webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/nav.js":
/*!***************************!*\
  !*** ./components/nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/mnt/c/Users/Caleb/Projects/calebcoffie.com/components/nav.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var links = [{
  href: '/blog',
  label: 'Blog'
}, {
  href: '/contact',
  label: 'Contact'
}, {
  href: 'https://www.linkedin.com/in/caleb-coffie-b71730167/',
  label: 'LinkedIn'
}, {
  href: 'https://github.com/CCoffie',
  label: 'GitHub'
}].map(function (link) {
  link.key = "nav-link-".concat(link.label);
  return link;
});

var Nav = function Nav() {
  return __jsx("nav", {
    className: "jsx-1652336850",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("ul", {
    className: "jsx-1652336850",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("li", {
    className: "jsx-1652336850",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-1652336850",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Home"))), links.map(function (_ref) {
    var key = _ref.key,
        href = _ref.href,
        label = _ref.label;
    return __jsx("li", {
      key: key,
      className: "jsx-1652336850",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, __jsx("a", {
      href: href,
      className: "jsx-1652336850",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, label));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1652336850",
    __self: this
  }, "nav.jsx-1652336850{text-align:center;}ul.jsx-1652336850{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:0;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}li.jsx-1652336850{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:1em;}a.jsx-1652336850{color:#19A123;font-family:monospace;}@media screen and (min-width:600px){a.jsx-1652336850{font-size:3vw;}}@media screen and (min-width:1200px){a.jsx-1652336850{font-size:3em;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy9Vc2Vycy9DYWxlYi9Qcm9qZWN0cy9jYWxlYmNvZmZpZS5jb20vY29tcG9uZW50cy9uYXYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEJnQixBQUcyQixBQUdMLEFBTUEsQUFJQyxBQUtFLEFBS0EsY0FUTSxBQUt0QixBQUtBLElBdkJGLGtCQWNBLHNDQVh5QixBQU1YLFlBQ2QsdUZBTlksVUFDSyx5REFDakIiLCJmaWxlIjoiL21udC9jL1VzZXJzL0NhbGViL1Byb2plY3RzL2NhbGViY29mZmllLmNvbS9jb21wb25lbnRzL25hdi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuY29uc3QgbGlua3MgPSBbXG4gIHsgaHJlZjogJy9ibG9nJywgbGFiZWw6ICdCbG9nJyB9LFxuICB7IGhyZWY6ICcvY29udGFjdCcsIGxhYmVsOiAnQ29udGFjdCcgfSxcbiAgeyBocmVmOiAnaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2NhbGViLWNvZmZpZS1iNzE3MzAxNjcvJywgbGFiZWw6ICdMaW5rZWRJbicgfSxcbiAgeyBocmVmOiAnaHR0cHM6Ly9naXRodWIuY29tL0NDb2ZmaWUnLCBsYWJlbDogJ0dpdEh1YicgfVxuXS5tYXAobGluayA9PiB7XG4gIGxpbmsua2V5ID0gYG5hdi1saW5rLSR7bGluay5sYWJlbH1gXG4gIHJldHVybiBsaW5rXG59KVxuXG5jb25zdCBOYXYgPSAoKSA9PiAoXG4gIDxuYXY+XG4gICAgPHVsPlxuICAgICAgPGxpPlxuICAgICAgICA8TGluayBocmVmPScvJz5cbiAgICAgICAgICA8YT5Ib21lPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2xpPlxuICAgICAge2xpbmtzLm1hcCgoeyBrZXksIGhyZWYsIGxhYmVsIH0pID0+IChcbiAgICAgICAgPGxpIGtleT17a2V5fT5cbiAgICAgICAgICA8YSBocmVmPXtocmVmfT57bGFiZWx9PC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgKSl9XG4gICAgPC91bD5cblxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIG5hdiB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICAgIHVsIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgIH1cbiAgICAgIGxpIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgcGFkZGluZzogMWVtO1xuICAgICAgfVxuICAgICAgYSB7XG4gICAgICAgIGNvbG9yOiAjMTlBMTIzO1xuICAgICAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xuICAgICAgfVxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgICAgICAgYSB7XG4gICAgICAgICAgZm9udC1zaXplOiAzdnc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAgICAgICBhIHtcbiAgICAgICAgICBmb250LXNpemU6IDNlbTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9uYXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IE5hdlxuIl19 */\n/*@ sourceURL=/mnt/c/Users/Caleb/Projects/calebcoffie.com/components/nav.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ })

})
//# sourceMappingURL=index.js.3058ff379df3b26aa940.hot-update.js.map