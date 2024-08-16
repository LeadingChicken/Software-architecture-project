"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/quiz/page",{

/***/ "(app-pages-browser)/./src/components/QuizGame.js":
/*!************************************!*\
  !*** ./src/components/QuizGame.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ QuizGame; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Question__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Question */ \"(app-pages-browser)/./src/components/Question.js\");\n// components/QuizGame.js\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst questions = [\n    {\n        question: \"What is the capital of France?\",\n        options: [\n            \"Berlin\",\n            \"Madrid\",\n            \"Paris\",\n            \"Rome\"\n        ],\n        correctAnswer: \"Paris\"\n    },\n    {\n        question: 'Who wrote \"Hamlet\"?',\n        options: [\n            \"William Shakespeare\",\n            \"Charles Dickens\",\n            \"Mark Twain\",\n            \"J.K. Rowling\"\n        ],\n        correctAnswer: \"William Shakespeare\"\n    }\n];\nfunction QuizGame() {\n    _s();\n    const [currentQuestion, setCurrentQuestion] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [score, setScore] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    // Lấy dữ liệu từ localStorage khi trang được tải lại\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const savedQuestionIndex = localStorage.getItem(\"currentQuestion\");\n        const savedScore = localStorage.getItem(\"score\");\n        if (savedQuestionIndex !== null) {\n            setCurrentQuestion(Number(savedQuestionIndex));\n        }\n        if (savedScore !== null) {\n            setScore(Number(savedScore));\n        }\n    }, []);\n    // Lưu dữ liệu vào localStorage khi có thay đổi\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Question Game\"\n            }, void 0, false, {\n                fileName: \"D:\\\\games\\\\nextjs-project\\\\src\\\\components\\\\QuizGame.js\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Question__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                question: questions[currentQuestion].question,\n                options: questions[currentQuestion].options,\n                correctAnswer: questions[currentQuestion].correctAnswer,\n                onAnswer: handleAnswer\n            }, void 0, false, {\n                fileName: \"D:\\\\games\\\\nextjs-project\\\\src\\\\components\\\\QuizGame.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\games\\\\nextjs-project\\\\src\\\\components\\\\QuizGame.js\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, this);\n}\n_s(QuizGame, \"pXsO72iLlvq68RuZl7VbUwXdCq8=\");\n_c = QuizGame;\nvar _c;\n$RefreshReg$(_c, \"QuizGame\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1F1aXpHYW1lLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEseUJBQXlCOzs7QUFJbUI7QUFDVjtBQUVsQyxNQUFNRyxZQUFZO0lBQ2hCO1FBQ0VDLFVBQVU7UUFDVkMsU0FBUztZQUFDO1lBQVU7WUFBVTtZQUFTO1NBQU87UUFDOUNDLGVBQWU7SUFDakI7SUFDQTtRQUNFRixVQUFVO1FBQ1ZDLFNBQVM7WUFBQztZQUF1QjtZQUFtQjtZQUFjO1NBQWU7UUFDakZDLGVBQWU7SUFDakI7Q0FFRDtBQUVjLFNBQVNDOztJQUN0QixNQUFNLENBQUNDLGlCQUFpQkMsbUJBQW1CLEdBQUdULCtDQUFRQSxDQUFDO0lBQ3ZELE1BQU0sQ0FBQ1UsT0FBT0MsU0FBUyxHQUFHWCwrQ0FBUUEsQ0FBQztJQUVuQyxxREFBcUQ7SUFDckRDLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTVcscUJBQXFCQyxhQUFhQyxPQUFPLENBQUM7UUFDaEQsTUFBTUMsYUFBYUYsYUFBYUMsT0FBTyxDQUFDO1FBRXhDLElBQUlGLHVCQUF1QixNQUFNO1lBQy9CSCxtQkFBbUJPLE9BQU9KO1FBQzVCO1FBRUEsSUFBSUcsZUFBZSxNQUFNO1lBQ3ZCSixTQUFTSyxPQUFPRDtRQUNsQjtJQUNGLEdBQUcsRUFBRTtJQUVMLCtDQUErQztJQUcvQyxxQkFDRSw4REFBQ0U7OzBCQUNDLDhEQUFDQzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDaEIsaURBQVFBO2dCQUNQRSxVQUFVRCxTQUFTLENBQUNLLGdCQUFnQixDQUFDSixRQUFRO2dCQUM3Q0MsU0FBU0YsU0FBUyxDQUFDSyxnQkFBZ0IsQ0FBQ0gsT0FBTztnQkFDM0NDLGVBQWVILFNBQVMsQ0FBQ0ssZ0JBQWdCLENBQUNGLGFBQWE7Z0JBQ3ZEYSxVQUFVQzs7Ozs7Ozs7Ozs7O0FBSWxCO0dBaEN3QmI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUXVpekdhbWUuanM/YzBiNCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb21wb25lbnRzL1F1aXpHYW1lLmpzXHJcblxyXG5cInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBRdWVzdGlvbiBmcm9tICcuL1F1ZXN0aW9uJztcclxuXHJcbmNvbnN0IHF1ZXN0aW9ucyA9IFtcclxuICB7XHJcbiAgICBxdWVzdGlvbjogJ1doYXQgaXMgdGhlIGNhcGl0YWwgb2YgRnJhbmNlPycsXHJcbiAgICBvcHRpb25zOiBbJ0JlcmxpbicsICdNYWRyaWQnLCAnUGFyaXMnLCAnUm9tZSddLFxyXG4gICAgY29ycmVjdEFuc3dlcjogJ1BhcmlzJyxcclxuICB9LFxyXG4gIHtcclxuICAgIHF1ZXN0aW9uOiAnV2hvIHdyb3RlIFwiSGFtbGV0XCI/JyxcclxuICAgIG9wdGlvbnM6IFsnV2lsbGlhbSBTaGFrZXNwZWFyZScsICdDaGFybGVzIERpY2tlbnMnLCAnTWFyayBUd2FpbicsICdKLksuIFJvd2xpbmcnXSxcclxuICAgIGNvcnJlY3RBbnN3ZXI6ICdXaWxsaWFtIFNoYWtlc3BlYXJlJyxcclxuICB9LFxyXG4gIC8vIFRow6ptIGPDoWMgY8OidSBo4buPaSBraMOhYy4uLlxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUXVpekdhbWUoKSB7XHJcbiAgY29uc3QgW2N1cnJlbnRRdWVzdGlvbiwgc2V0Q3VycmVudFF1ZXN0aW9uXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtzY29yZSwgc2V0U2NvcmVdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gIC8vIEzhuqV5IGThu68gbGnhu4d1IHThu6sgbG9jYWxTdG9yYWdlIGtoaSB0cmFuZyDEkcaw4bujYyB04bqjaSBs4bqhaVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBzYXZlZFF1ZXN0aW9uSW5kZXggPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3VycmVudFF1ZXN0aW9uJyk7XHJcbiAgICBjb25zdCBzYXZlZFNjb3JlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Njb3JlJyk7XHJcblxyXG4gICAgaWYgKHNhdmVkUXVlc3Rpb25JbmRleCAhPT0gbnVsbCkge1xyXG4gICAgICBzZXRDdXJyZW50UXVlc3Rpb24oTnVtYmVyKHNhdmVkUXVlc3Rpb25JbmRleCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChzYXZlZFNjb3JlICE9PSBudWxsKSB7XHJcbiAgICAgIHNldFNjb3JlKE51bWJlcihzYXZlZFNjb3JlKSk7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICAvLyBMxrB1IGThu68gbGnhu4d1IHbDoG8gbG9jYWxTdG9yYWdlIGtoaSBjw7MgdGhheSDEkeG7lWlcclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aDE+UXVlc3Rpb24gR2FtZTwvaDE+XHJcbiAgICAgIDxRdWVzdGlvblxyXG4gICAgICAgIHF1ZXN0aW9uPXtxdWVzdGlvbnNbY3VycmVudFF1ZXN0aW9uXS5xdWVzdGlvbn1cclxuICAgICAgICBvcHRpb25zPXtxdWVzdGlvbnNbY3VycmVudFF1ZXN0aW9uXS5vcHRpb25zfVxyXG4gICAgICAgIGNvcnJlY3RBbnN3ZXI9e3F1ZXN0aW9uc1tjdXJyZW50UXVlc3Rpb25dLmNvcnJlY3RBbnN3ZXJ9XHJcbiAgICAgICAgb25BbnN3ZXI9e2hhbmRsZUFuc3dlcn1cclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiUXVlc3Rpb24iLCJxdWVzdGlvbnMiLCJxdWVzdGlvbiIsIm9wdGlvbnMiLCJjb3JyZWN0QW5zd2VyIiwiUXVpekdhbWUiLCJjdXJyZW50UXVlc3Rpb24iLCJzZXRDdXJyZW50UXVlc3Rpb24iLCJzY29yZSIsInNldFNjb3JlIiwic2F2ZWRRdWVzdGlvbkluZGV4IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNhdmVkU2NvcmUiLCJOdW1iZXIiLCJkaXYiLCJoMSIsIm9uQW5zd2VyIiwiaGFuZGxlQW5zd2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/QuizGame.js\n"));

/***/ })

});