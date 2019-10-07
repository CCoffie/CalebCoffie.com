webpackHotUpdate("static/development/pages/blog.js",{

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
    className: "jsx-2248117983",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("ul", {
    className: "jsx-2248117983",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("li", {
    className: "jsx-2248117983",
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
    className: "jsx-2248117983",
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
      className: "jsx-2248117983",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, __jsx("a", {
      href: href,
      className: "jsx-2248117983",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, label));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2248117983",
    __self: this
  }, "nav.jsx-2248117983{text-align:center;}ul.jsx-2248117983{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:0;}li.jsx-2248117983{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:1em;}a.jsx-2248117983{color:#19A123;font-size:3em;font-family:monospace;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy9Vc2Vycy9DYWxlYi9Qcm9qZWN0cy9jYWxlYmNvZmZpZS5jb20vY29tcG9uZW50cy9uYXYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEJnQixBQUcyQixBQUdMLEFBS0EsQUFJQyxjQUVBLElBYmhCLFVBY3dCLHNCQUN4Qix3QkFaeUIsQUFLWCxZQUNkLHVGQUxZLFVBQ1oiLCJmaWxlIjoiL21udC9jL1VzZXJzL0NhbGViL1Byb2plY3RzL2NhbGViY29mZmllLmNvbS9jb21wb25lbnRzL25hdi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuY29uc3QgbGlua3MgPSBbXG4gIHsgaHJlZjogJy9ibG9nJywgbGFiZWw6ICdCbG9nJyB9LFxuICB7IGhyZWY6ICcvY29udGFjdCcsIGxhYmVsOiAnQ29udGFjdCcgfSxcbiAgeyBocmVmOiAnaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2NhbGViLWNvZmZpZS1iNzE3MzAxNjcvJywgbGFiZWw6ICdMaW5rZWRJbicgfSxcbiAgeyBocmVmOiAnaHR0cHM6Ly9naXRodWIuY29tL0NDb2ZmaWUnLCBsYWJlbDogJ0dpdEh1YicgfVxuXS5tYXAobGluayA9PiB7XG4gIGxpbmsua2V5ID0gYG5hdi1saW5rLSR7bGluay5sYWJlbH1gXG4gIHJldHVybiBsaW5rXG59KVxuXG5jb25zdCBOYXYgPSAoKSA9PiAoXG4gIDxuYXY+XG4gICAgPHVsPlxuICAgICAgPGxpPlxuICAgICAgICA8TGluayBocmVmPScvJz5cbiAgICAgICAgICA8YT5Ib21lPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2xpPlxuICAgICAge2xpbmtzLm1hcCgoeyBrZXksIGhyZWYsIGxhYmVsIH0pID0+IChcbiAgICAgICAgPGxpIGtleT17a2V5fT5cbiAgICAgICAgICA8YSBocmVmPXtocmVmfT57bGFiZWx9PC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgKSl9XG4gICAgPC91bD5cblxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIG5hdiB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICAgIHVsIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICB9XG4gICAgICBsaSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHBhZGRpbmc6IDFlbTtcbiAgICAgIH1cbiAgICAgIGEge1xuICAgICAgICBjb2xvcjogIzE5QTEyMztcbiAgICAgICAgLyogdGV4dC1kZWNvcmF0aW9uOiBub25lOyAqL1xuICAgICAgICBmb250LXNpemU6IDNlbTtcbiAgICAgICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvbmF2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBOYXZcbiJdfQ== */\n/*@ sourceURL=/mnt/c/Users/Caleb/Projects/calebcoffie.com/components/nav.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ })

})
//# sourceMappingURL=blog.js.c85d1c2cca449ea7baf9.hot-update.js.map