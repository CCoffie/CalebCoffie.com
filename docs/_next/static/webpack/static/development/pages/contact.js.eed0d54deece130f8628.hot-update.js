webpackHotUpdate("static/development/pages/contact.js",{

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
    className: "jsx-1084102281",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("ul", {
    className: "jsx-1084102281",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("li", {
    className: "jsx-1084102281",
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
    className: "jsx-1084102281",
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
      className: "jsx-1084102281",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, __jsx("a", {
      href: href,
      className: "jsx-1084102281",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, label));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1084102281",
    __self: this
  }, "nav.jsx-1084102281{text-align:center;}ul.jsx-1084102281{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:0;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;overflow:hidden;}li.jsx-1084102281{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:1em;}a.jsx-1084102281{color:#19A123;font-size:3em;font-family:monospace;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy9Vc2Vycy9DYWxlYi9Qcm9qZWN0cy9jYWxlYmNvZmZpZS5jb20vY29tcG9uZW50cy9uYXYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEJnQixBQUcyQixBQUdMLEFBT0EsQUFJQyxjQUVBLElBZmhCLFVBZ0J3QixzQkFDeEIsd0JBZHlCLEFBT1gsWUFDZCx1RkFQWSxVQUNLLHlEQUNDLGdCQUNsQiIsImZpbGUiOiIvbW50L2MvVXNlcnMvQ2FsZWIvUHJvamVjdHMvY2FsZWJjb2ZmaWUuY29tL2NvbXBvbmVudHMvbmF2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5jb25zdCBsaW5rcyA9IFtcbiAgeyBocmVmOiAnL2Jsb2cnLCBsYWJlbDogJ0Jsb2cnIH0sXG4gIHsgaHJlZjogJy9jb250YWN0JywgbGFiZWw6ICdDb250YWN0JyB9LFxuICB7IGhyZWY6ICdodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vY2FsZWItY29mZmllLWI3MTczMDE2Ny8nLCBsYWJlbDogJ0xpbmtlZEluJyB9LFxuICB7IGhyZWY6ICdodHRwczovL2dpdGh1Yi5jb20vQ0NvZmZpZScsIGxhYmVsOiAnR2l0SHViJyB9XG5dLm1hcChsaW5rID0+IHtcbiAgbGluay5rZXkgPSBgbmF2LWxpbmstJHtsaW5rLmxhYmVsfWBcbiAgcmV0dXJuIGxpbmtcbn0pXG5cbmNvbnN0IE5hdiA9ICgpID0+IChcbiAgPG5hdj5cbiAgICA8dWw+XG4gICAgICA8bGk+XG4gICAgICAgIDxMaW5rIGhyZWY9Jy8nPlxuICAgICAgICAgIDxhPkhvbWU8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvbGk+XG4gICAgICB7bGlua3MubWFwKCh7IGtleSwgaHJlZiwgbGFiZWwgfSkgPT4gKFxuICAgICAgICA8bGkga2V5PXtrZXl9PlxuICAgICAgICAgIDxhIGhyZWY9e2hyZWZ9PntsYWJlbH08L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICApKX1cbiAgICA8L3VsPlxuXG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgbmF2IHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuICAgICAgdWwge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgfVxuICAgICAgbGkge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBwYWRkaW5nOiAxZW07XG4gICAgICB9XG4gICAgICBhIHtcbiAgICAgICAgY29sb3I6ICMxOUExMjM7XG4gICAgICAgIC8qIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgKi9cbiAgICAgICAgZm9udC1zaXplOiAzZW07XG4gICAgICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L25hdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgTmF2XG4iXX0= */\n/*@ sourceURL=/mnt/c/Users/Caleb/Projects/calebcoffie.com/components/nav.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ })

})
//# sourceMappingURL=contact.js.eed0d54deece130f8628.hot-update.js.map