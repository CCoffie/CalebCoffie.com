webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/consoleHook.js":
/*!***********************************!*\
  !*** ./components/consoleHook.js ***!
  \***********************************/
/*! exports provided: consoleInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "consoleInput", function() { return consoleInput; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _consoleData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./consoleData */ "./components/consoleData.js");



var constructConsoleOutput = function constructConsoleOutput(numKeyPresses) {
  var messages = _consoleData__WEBPACK_IMPORTED_MODULE_1__["consoleData"]['messages'];
  var output = "";
  var currentObjectIndex = 0;
  var currentContentStringIndex = 0; // Function to check if end of messages

  var endOfMessages = function endOfMessages() {
    return currentObjectIndex >= messages.length;
  }; // Function to handle moving to next message object


  var nextMesssageObject = function nextMesssageObject() {
    currentObjectIndex++;
    currentContentStringIndex = 0;

    if (!endOfMessages()) {
      output += '\n';

      if (messages[currentObjectIndex].startingText) {
        output += messages[currentObjectIndex].startingText;
      }
    }
  }; // Function to handle single output messages


  var singleOutput = function singleOutput() {
    output += messages[currentObjectIndex].content;
    nextMesssageObject();
  }; // Function to handle multiple output messages


  var multipleOutput = function multipleOutput() {
    if (currentContentStringIndex + 1 > messages[currentObjectIndex].content.length) {
      nextMesssageObject();
    } else {
      output += messages[currentObjectIndex].content[currentContentStringIndex];
      currentContentStringIndex++;
    }
  }; // Add the initial startingText if it exists


  if (messages[currentObjectIndex].startingText) {
    output += messages[currentObjectIndex].startingText;
  } // Loop through for each key press and construct output


  for (var i = 0; i < numKeyPresses; i++) {
    // Check for end of messages
    if (endOfMessages()) break; // Single output don't require key presses

    while (!endOfMessages() && messages[currentObjectIndex].outputMethod === "single") {
      singleOutput();
    } // Check for end of messages


    if (endOfMessages()) break; // Handle multiple key press content

    if (messages[currentObjectIndex].outputMethod === "multiple") {
      multipleOutput();
    } // Check for end of messages


    if (endOfMessages()) break; // Single output don't require key presses

    while (!endOfMessages() && messages[currentObjectIndex].outputMethod === "single") {
      singleOutput();
    }
  }

  return output;
};

var consoleInput = function consoleInput(initialValue, initialKeyPresses) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialValue),
      value = _useState[0],
      setValue = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialKeyPresses),
      numKeyPresses = _useState2[0],
      setNumKeyPresses = _useState2[1];

  return {
    value: value,
    setValue: setValue,
    numKeyPresses: numKeyPresses,
    setNumKeyPresses: setNumKeyPresses,
    reset: function reset() {
      setValue(initialValue);
      setNumKeyPresses(0);
    },
    bind: {
      value: value,
      onKeyPress: function onKeyPress(event) {
        setValue(constructConsoleOutput(numKeyPresses + 1));
        setNumKeyPresses(numKeyPresses + 1);
      }
    }
  };
};

/***/ })

})
//# sourceMappingURL=index.js.9815c057ff8e383165e8.hot-update.js.map