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

/***/ "(app-pages-browser)/./src/components/Question.js":
/*!************************************!*\
  !*** ./src/components/Question.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n// components/Question.js\n\nvar _s = $RefreshSig$();\n\nconst Question = (param)=>{\n    let { question, options, correctAnswer, onAnswer, selectedAnswer } = param;\n    _s();\n    const [selected, setSelected] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Khởi tạo selected từ selectedAnswer nếu có\n        setSelected(selectedAnswer || null);\n    }, [\n        selectedAnswer\n    ]);\n    const handleSelect = (option)=>{\n        if (selected === null) {\n            setSelected(option);\n            onAnswer(option === correctAnswer, option);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: question\n            }, void 0, false, {\n                fileName: \"D:\\\\games\\\\nextjs-project\\\\src\\\\components\\\\Question.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: options.map((option, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            style: {\n                                backgroundColor: selected === option ? \"lightblue\" : \"white\"\n                            },\n                            onClick: ()=>handleSelect(option),\n                            disabled: selected !== null,\n                            children: option\n                        }, void 0, false, {\n                            fileName: \"D:\\\\games\\\\nextjs-project\\\\src\\\\components\\\\Question.js\",\n                            lineNumber: 26,\n                            columnNumber: 13\n                        }, undefined)\n                    }, index, false, {\n                        fileName: \"D:\\\\games\\\\nextjs-project\\\\src\\\\components\\\\Question.js\",\n                        lineNumber: 25,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"D:\\\\games\\\\nextjs-project\\\\src\\\\components\\\\Question.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\games\\\\nextjs-project\\\\src\\\\components\\\\Question.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Question, \"PTPPEvXEN45kGdaEyuL8EhrK8gY=\");\n_c = Question;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Question);\nvar _c;\n$RefreshReg$(_c, \"Question\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1F1ZXN0aW9uLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSx5QkFBeUI7OztBQUVtQjtBQUU1QyxNQUFNRSxXQUFXO1FBQUMsRUFBRUMsUUFBUSxFQUFFQyxPQUFPLEVBQUVDLGFBQWEsRUFBRUMsUUFBUSxFQUFFQyxjQUFjLEVBQUU7O0lBQzlFLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHVCwrQ0FBUUEsQ0FBQztJQUV6Q0MsZ0RBQVNBLENBQUM7UUFDUiw2Q0FBNkM7UUFDN0NRLFlBQVlGLGtCQUFrQjtJQUNoQyxHQUFHO1FBQUNBO0tBQWU7SUFFbkIsTUFBTUcsZUFBZSxDQUFDQztRQUNwQixJQUFJSCxhQUFhLE1BQU07WUFDckJDLFlBQVlFO1lBQ1pMLFNBQVNLLFdBQVdOLGVBQWVNO1FBQ3JDO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0M7OzBCQUNDLDhEQUFDQzswQkFBSVY7Ozs7OzswQkFDTCw4REFBQ1c7MEJBQ0VWLFFBQVFXLEdBQUcsQ0FBQyxDQUFDSixRQUFRSyxzQkFDcEIsOERBQUNDO2tDQUNDLDRFQUFDQzs0QkFDQ0MsT0FBTztnQ0FDTEMsaUJBQWlCWixhQUFhRyxTQUFTLGNBQWM7NEJBQ3ZEOzRCQUNBVSxTQUFTLElBQU1YLGFBQWFDOzRCQUM1QlcsVUFBVWQsYUFBYTtzQ0FFdEJHOzs7Ozs7dUJBUklLOzs7Ozs7Ozs7Ozs7Ozs7O0FBZW5CO0dBbkNNZDtLQUFBQTtBQXFDTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9RdWVzdGlvbi5qcz9lMTY4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbXBvbmVudHMvUXVlc3Rpb24uanNcclxuXHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBRdWVzdGlvbiA9ICh7IHF1ZXN0aW9uLCBvcHRpb25zLCBjb3JyZWN0QW5zd2VyLCBvbkFuc3dlciwgc2VsZWN0ZWRBbnN3ZXIgfSkgPT4ge1xyXG4gIGNvbnN0IFtzZWxlY3RlZCwgc2V0U2VsZWN0ZWRdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBLaOG7n2kgdOG6oW8gc2VsZWN0ZWQgdOG7qyBzZWxlY3RlZEFuc3dlciBu4bq/dSBjw7NcclxuICAgIHNldFNlbGVjdGVkKHNlbGVjdGVkQW5zd2VyIHx8IG51bGwpO1xyXG4gIH0sIFtzZWxlY3RlZEFuc3dlcl0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVTZWxlY3QgPSAob3B0aW9uKSA9PiB7XHJcbiAgICBpZiAoc2VsZWN0ZWQgPT09IG51bGwpIHsgLy8gQ2jhu4kgY2hvIHBow6lwIGNo4buNbiBraGkgY2jGsGEgY8OzIMSRw6FwIMOhbiBuw6BvIMSRxrDhu6NjIGNo4buNblxyXG4gICAgICBzZXRTZWxlY3RlZChvcHRpb24pO1xyXG4gICAgICBvbkFuc3dlcihvcHRpb24gPT09IGNvcnJlY3RBbnN3ZXIsIG9wdGlvbik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxoMj57cXVlc3Rpb259PC9oMj5cclxuICAgICAgPHVsPlxyXG4gICAgICAgIHtvcHRpb25zLm1hcCgob3B0aW9uLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPGxpIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogc2VsZWN0ZWQgPT09IG9wdGlvbiA/ICdsaWdodGJsdWUnIDogJ3doaXRlJyxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNlbGVjdChvcHRpb24pfVxyXG4gICAgICAgICAgICAgIGRpc2FibGVkPXtzZWxlY3RlZCAhPT0gbnVsbH0gLy8gTsO6dCBjaOG7iSBi4buLIHbDtCBoaeG7h3UgaMOzYSBzYXUga2hpIMSRw6MgY2jhu41uIG3hu5l0IMSRw6FwIMOhblxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge29wdGlvbn1cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFF1ZXN0aW9uO1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJRdWVzdGlvbiIsInF1ZXN0aW9uIiwib3B0aW9ucyIsImNvcnJlY3RBbnN3ZXIiLCJvbkFuc3dlciIsInNlbGVjdGVkQW5zd2VyIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsImhhbmRsZVNlbGVjdCIsIm9wdGlvbiIsImRpdiIsImgyIiwidWwiLCJtYXAiLCJpbmRleCIsImxpIiwiYnV0dG9uIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJvbkNsaWNrIiwiZGlzYWJsZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Question.js\n"));

/***/ })

});