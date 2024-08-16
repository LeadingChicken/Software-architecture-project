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

/***/ "(app-pages-browser)/./src/app/quiz/page.js":
/*!******************************!*\
  !*** ./src/app/quiz/page.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ QuizPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Quiz__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Quiz */ \"(app-pages-browser)/./src/components/Quiz.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst questions = [\n    {\n        question: \"What is the capital of France?\",\n        options: [\n            \"Berlin\",\n            \"Madrid\",\n            \"Paris\",\n            \"Rome\"\n        ],\n        correctAnswer: \"Paris\"\n    },\n    {\n        question: 'Who wrote \"Hamlet\"?',\n        options: [\n            \"William Shakespeare\",\n            \"Charles Dickens\",\n            \"Mark Twain\",\n            \"J.K. Rowling\"\n        ],\n        correctAnswer: \"William Shakespeare\"\n    }\n];\nfunction QuizPage() {\n    _s();\n    const [currentQuestion, setCurrentQuestion] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [score, setScore] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    // Lấy dữ liệu từ localStorage khi trang được tải lại\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const savedQuestionIndex = localStorage.getItem(\"currentQuestion\");\n        const savedScore = localStorage.getItem(\"score\");\n        if (savedQuestionIndex !== null) {\n            setCurrentQuestion(Number(savedQuestionIndex));\n        }\n        if (savedScore !== null) {\n            setScore(Number(savedScore));\n        }\n    }, []);\n    // Lưu dữ liệu vào localStorage khi có thay đổi\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        localStorage.setItem(\"currentQuestion\", currentQuestion);\n        localStorage.setItem(\"score\", score);\n    }, [\n        currentQuestion,\n        score\n    ]);\n    const handleAnswer = (isCorrect)=>{\n        if (isCorrect) {\n            setScore(score + 1);\n        }\n        const nextQuestion = currentQuestion + 1;\n        if (nextQuestion < questions.length) {\n            setCurrentQuestion(nextQuestion);\n        } else {\n            alert(\"Game over! Your score is \".concat(score + (isCorrect ? 1 : 0), \" out of \").concat(questions.length));\n            setCurrentQuestion(0);\n            setScore(0);\n            // Xóa dữ liệu khi game kết thúc\n            localStorage.removeItem(\"currentQuestion\");\n            localStorage.removeItem(\"score\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Question Game\"\n            }, void 0, false, {\n                fileName: \"D:\\\\games\\\\nextjs-project\\\\src\\\\app\\\\quiz\\\\page.js\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Quiz__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                question: questions[currentQuestion].question,\n                options: questions[currentQuestion].options,\n                correctAnswer: questions[currentQuestion].correctAnswer,\n                onAnswer: handleAnswer\n            }, void 0, false, {\n                fileName: \"D:\\\\games\\\\nextjs-project\\\\src\\\\app\\\\quiz\\\\page.js\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\games\\\\nextjs-project\\\\src\\\\app\\\\quiz\\\\page.js\",\n        lineNumber: 63,\n        columnNumber: 5\n    }, this);\n}\n_s(QuizPage, \"w33m8SgxWbHVq5+aAVNotgt5S0M=\");\n_c = QuizPage;\nvar _c;\n$RefreshReg$(_c, \"QuizPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcXVpei9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFNEM7QUFDSDtBQUV6QyxNQUFNRyxZQUFZO0lBQ2hCO1FBQ0VDLFVBQVU7UUFDVkMsU0FBUztZQUFDO1lBQVU7WUFBVTtZQUFTO1NBQU87UUFDOUNDLGVBQWU7SUFDakI7SUFDQTtRQUNFRixVQUFVO1FBQ1ZDLFNBQVM7WUFBQztZQUF1QjtZQUFtQjtZQUFjO1NBQWU7UUFDakZDLGVBQWU7SUFDakI7Q0FFRDtBQUVjLFNBQVNDOztJQUN0QixNQUFNLENBQUNDLGlCQUFpQkMsbUJBQW1CLEdBQUdULCtDQUFRQSxDQUFDO0lBQ3ZELE1BQU0sQ0FBQ1UsT0FBT0MsU0FBUyxHQUFHWCwrQ0FBUUEsQ0FBQztJQUVuQyxxREFBcUQ7SUFDckRDLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTVcscUJBQXFCQyxhQUFhQyxPQUFPLENBQUM7UUFDaEQsTUFBTUMsYUFBYUYsYUFBYUMsT0FBTyxDQUFDO1FBRXhDLElBQUlGLHVCQUF1QixNQUFNO1lBQy9CSCxtQkFBbUJPLE9BQU9KO1FBQzVCO1FBRUEsSUFBSUcsZUFBZSxNQUFNO1lBQ3ZCSixTQUFTSyxPQUFPRDtRQUNsQjtJQUNGLEdBQUcsRUFBRTtJQUVMLCtDQUErQztJQUMvQ2QsZ0RBQVNBLENBQUM7UUFDUlksYUFBYUksT0FBTyxDQUFDLG1CQUFtQlQ7UUFDeENLLGFBQWFJLE9BQU8sQ0FBQyxTQUFTUDtJQUNoQyxHQUFHO1FBQUNGO1FBQWlCRTtLQUFNO0lBRTNCLE1BQU1RLGVBQWUsQ0FBQ0M7UUFDcEIsSUFBSUEsV0FBVztZQUNiUixTQUFTRCxRQUFRO1FBQ25CO1FBRUEsTUFBTVUsZUFBZVosa0JBQWtCO1FBQ3ZDLElBQUlZLGVBQWVqQixVQUFVa0IsTUFBTSxFQUFFO1lBQ25DWixtQkFBbUJXO1FBQ3JCLE9BQU87WUFDTEUsTUFBTSw0QkFBa0VuQixPQUF0Q08sUUFBU1MsQ0FBQUEsWUFBWSxJQUFJLElBQUcsWUFBMkIsT0FBakJoQixVQUFVa0IsTUFBTTtZQUN4RlosbUJBQW1CO1lBQ25CRSxTQUFTO1lBQ1QsZ0NBQWdDO1lBQ2hDRSxhQUFhVSxVQUFVLENBQUM7WUFDeEJWLGFBQWFVLFVBQVUsQ0FBQztRQUMxQjtJQUNGO0lBRUEscUJBQ0UsOERBQUNDOzswQkFDQyw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ3ZCLHdEQUFRQTtnQkFDUEUsVUFBVUQsU0FBUyxDQUFDSyxnQkFBZ0IsQ0FBQ0osUUFBUTtnQkFDN0NDLFNBQVNGLFNBQVMsQ0FBQ0ssZ0JBQWdCLENBQUNILE9BQU87Z0JBQzNDQyxlQUFlSCxTQUFTLENBQUNLLGdCQUFnQixDQUFDRixhQUFhO2dCQUN2RG9CLFVBQVVSOzs7Ozs7Ozs7Ozs7QUFJbEI7R0FyRHdCWDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3F1aXovcGFnZS5qcz9kYmNhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFF1ZXN0aW9uIGZyb20gJ0AvY29tcG9uZW50cy9RdWl6JztcclxuXHJcbmNvbnN0IHF1ZXN0aW9ucyA9IFtcclxuICB7XHJcbiAgICBxdWVzdGlvbjogJ1doYXQgaXMgdGhlIGNhcGl0YWwgb2YgRnJhbmNlPycsXHJcbiAgICBvcHRpb25zOiBbJ0JlcmxpbicsICdNYWRyaWQnLCAnUGFyaXMnLCAnUm9tZSddLFxyXG4gICAgY29ycmVjdEFuc3dlcjogJ1BhcmlzJyxcclxuICB9LFxyXG4gIHtcclxuICAgIHF1ZXN0aW9uOiAnV2hvIHdyb3RlIFwiSGFtbGV0XCI/JyxcclxuICAgIG9wdGlvbnM6IFsnV2lsbGlhbSBTaGFrZXNwZWFyZScsICdDaGFybGVzIERpY2tlbnMnLCAnTWFyayBUd2FpbicsICdKLksuIFJvd2xpbmcnXSxcclxuICAgIGNvcnJlY3RBbnN3ZXI6ICdXaWxsaWFtIFNoYWtlc3BlYXJlJyxcclxuICB9LFxyXG4gIC8vIFRow6ptIGPDoWMgY8OidSBo4buPaSBraMOhYy4uLlxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUXVpelBhZ2UoKSB7XHJcbiAgY29uc3QgW2N1cnJlbnRRdWVzdGlvbiwgc2V0Q3VycmVudFF1ZXN0aW9uXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtzY29yZSwgc2V0U2NvcmVdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gIC8vIEzhuqV5IGThu68gbGnhu4d1IHThu6sgbG9jYWxTdG9yYWdlIGtoaSB0cmFuZyDEkcaw4bujYyB04bqjaSBs4bqhaVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBzYXZlZFF1ZXN0aW9uSW5kZXggPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3VycmVudFF1ZXN0aW9uJyk7XHJcbiAgICBjb25zdCBzYXZlZFNjb3JlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Njb3JlJyk7XHJcblxyXG4gICAgaWYgKHNhdmVkUXVlc3Rpb25JbmRleCAhPT0gbnVsbCkge1xyXG4gICAgICBzZXRDdXJyZW50UXVlc3Rpb24oTnVtYmVyKHNhdmVkUXVlc3Rpb25JbmRleCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChzYXZlZFNjb3JlICE9PSBudWxsKSB7XHJcbiAgICAgIHNldFNjb3JlKE51bWJlcihzYXZlZFNjb3JlKSk7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICAvLyBMxrB1IGThu68gbGnhu4d1IHbDoG8gbG9jYWxTdG9yYWdlIGtoaSBjw7MgdGhheSDEkeG7lWlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2N1cnJlbnRRdWVzdGlvbicsIGN1cnJlbnRRdWVzdGlvbik7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc2NvcmUnLCBzY29yZSk7XHJcbiAgfSwgW2N1cnJlbnRRdWVzdGlvbiwgc2NvcmVdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQW5zd2VyID0gKGlzQ29ycmVjdCkgPT4ge1xyXG4gICAgaWYgKGlzQ29ycmVjdCkge1xyXG4gICAgICBzZXRTY29yZShzY29yZSArIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG5leHRRdWVzdGlvbiA9IGN1cnJlbnRRdWVzdGlvbiArIDE7XHJcbiAgICBpZiAobmV4dFF1ZXN0aW9uIDwgcXVlc3Rpb25zLmxlbmd0aCkge1xyXG4gICAgICBzZXRDdXJyZW50UXVlc3Rpb24obmV4dFF1ZXN0aW9uKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGFsZXJ0KGBHYW1lIG92ZXIhIFlvdXIgc2NvcmUgaXMgJHtzY29yZSArIChpc0NvcnJlY3QgPyAxIDogMCl9IG91dCBvZiAke3F1ZXN0aW9ucy5sZW5ndGh9YCk7XHJcbiAgICAgIHNldEN1cnJlbnRRdWVzdGlvbigwKTtcclxuICAgICAgc2V0U2NvcmUoMCk7XHJcbiAgICAgIC8vIFjDs2EgZOG7ryBsaeG7h3Uga2hpIGdhbWUga+G6v3QgdGjDumNcclxuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2N1cnJlbnRRdWVzdGlvbicpO1xyXG4gICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnc2NvcmUnKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgxPlF1ZXN0aW9uIEdhbWU8L2gxPlxyXG4gICAgICA8UXVlc3Rpb25cclxuICAgICAgICBxdWVzdGlvbj17cXVlc3Rpb25zW2N1cnJlbnRRdWVzdGlvbl0ucXVlc3Rpb259XHJcbiAgICAgICAgb3B0aW9ucz17cXVlc3Rpb25zW2N1cnJlbnRRdWVzdGlvbl0ub3B0aW9uc31cclxuICAgICAgICBjb3JyZWN0QW5zd2VyPXtxdWVzdGlvbnNbY3VycmVudFF1ZXN0aW9uXS5jb3JyZWN0QW5zd2VyfVxyXG4gICAgICAgIG9uQW5zd2VyPXtoYW5kbGVBbnN3ZXJ9XHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlF1ZXN0aW9uIiwicXVlc3Rpb25zIiwicXVlc3Rpb24iLCJvcHRpb25zIiwiY29ycmVjdEFuc3dlciIsIlF1aXpQYWdlIiwiY3VycmVudFF1ZXN0aW9uIiwic2V0Q3VycmVudFF1ZXN0aW9uIiwic2NvcmUiLCJzZXRTY29yZSIsInNhdmVkUXVlc3Rpb25JbmRleCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzYXZlZFNjb3JlIiwiTnVtYmVyIiwic2V0SXRlbSIsImhhbmRsZUFuc3dlciIsImlzQ29ycmVjdCIsIm5leHRRdWVzdGlvbiIsImxlbmd0aCIsImFsZXJ0IiwicmVtb3ZlSXRlbSIsImRpdiIsImgxIiwib25BbnN3ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/quiz/page.js\n"));

/***/ })

});