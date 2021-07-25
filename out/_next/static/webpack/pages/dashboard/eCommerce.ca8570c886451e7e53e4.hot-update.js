self["webpackHotUpdate_N_E"]("pages/dashboard/eCommerce",{

/***/ "./pages/dashboard/eCommerce.js":
/*!**************************************!*\
  !*** ./pages/dashboard/eCommerce.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSP": function() { return /* binding */ __N_SSP; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _jumbo_components_PageComponents_PageLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../@jumbo/components/PageComponents/PageLoader */ "./@jumbo/components/PageComponents/PageLoader.js");
/* harmony import */ var _authentication_auth_page_wrappers_SecurePage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../authentication/auth-page-wrappers/SecurePage */ "./authentication/auth-page-wrappers/SecurePage.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Nanak.seth\\Downloads\\nextjs-demo-master\\nextjs-demo-master\\pages\\dashboard\\eCommerce.js",
    _this = undefined;





var Ecommerce = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(_c = function _c() {
  return Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_material-ui_core_esm_index_js"), __webpack_require__.e("vendors-node_modules_material-ui_icons_CheckCircle_js-node_modules_material-ui_icons_ExpandMo-467596"), __webpack_require__.e("vendors-node_modules_tslib_tslib_es6_js"), __webpack_require__.e("vendors-node_modules_amcharts_amcharts4_charts_js-node_modules_amcharts_amcharts4_core_js-nod-5aef35"), __webpack_require__.e("modules_Dashboards_ECommerce_index_js-node_modules_moment_locale_sync_recursive_")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../modules/Dashboards/ECommerce */ "./modules/Dashboards/ECommerce/index.js"));
}, {
  loading: function loading() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_jumbo_components_PageComponents_PageLoader__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 18
    }, _this);
  },
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../../modules/Dashboards/ECommerce */ "./modules/Dashboards/ECommerce/index.js")];
    },
    modules: ["dashboard\\eCommerce.js -> " + '../../modules/Dashboards/ECommerce']
  }
});
_c2 = Ecommerce;

var EcommerceDashboard = function EcommerceDashboard() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_authentication_auth_page_wrappers_SecurePage__WEBPACK_IMPORTED_MODULE_4__.default, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Ecommerce, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 3
  }, _this);
};

_c3 = EcommerceDashboard;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (EcommerceDashboard);

var _c, _c2, _c3;

$RefreshReg$(_c, "Ecommerce$dynamic");
$RefreshReg$(_c2, "Ecommerce");
$RefreshReg$(_c3, "EcommerceDashboard");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGFzaGJvYXJkL2VDb21tZXJjZS5qcyJdLCJuYW1lcyI6WyJFY29tbWVyY2UiLCJkeW5hbWljIiwibG9hZGluZyIsIkVjb21tZXJjZURhc2hib2FyZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLG1EQUFPLE1BQUM7QUFBQSxTQUFNLDZwQkFBTjtBQUFBLENBQUQsRUFBcUQ7QUFDNUVDLFNBQU8sRUFBRTtBQUFBLHdCQUFNLDhEQUFDLGdGQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBTjtBQUFBLEdBRG1FO0FBQUE7QUFBQTtBQUFBLGtDQUF2QyxtRkFBdUM7QUFBQTtBQUFBLDhDQUF2QyxvQ0FBdUM7QUFBQTtBQUFBLENBQXJELENBQXpCO01BQU1GLFM7O0FBSU4sSUFBTUcsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQjtBQUFBLHNCQUN6Qiw4REFBQyxrRkFBRDtBQUFBLDJCQUNFLDhEQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEeUI7QUFBQSxDQUEzQjs7TUFBTUEsa0I7O0FBWU4sK0RBQWVBLGtCQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Rhc2hib2FyZC9lQ29tbWVyY2UuY2E4NTcwYzg4NjQ1MWU3ZTUzZTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnO1xuaW1wb3J0IFBhZ2VMb2FkZXIgZnJvbSAnLi4vLi4vQGp1bWJvL2NvbXBvbmVudHMvUGFnZUNvbXBvbmVudHMvUGFnZUxvYWRlcic7XG5pbXBvcnQgU2VjdXJlUGFnZSBmcm9tICcuLi8uLi9hdXRoZW50aWNhdGlvbi9hdXRoLXBhZ2Utd3JhcHBlcnMvU2VjdXJlUGFnZSc7XG5cbmNvbnN0IEVjb21tZXJjZSA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCcuLi8uLi9tb2R1bGVzL0Rhc2hib2FyZHMvRUNvbW1lcmNlJyksIHtcbiAgbG9hZGluZzogKCkgPT4gPFBhZ2VMb2FkZXIgLz4sXG59KTtcblxuY29uc3QgRWNvbW1lcmNlRGFzaGJvYXJkID0gKCkgPT4gKFxuICA8U2VjdXJlUGFnZT5cbiAgICA8RWNvbW1lcmNlIC8+XG4gIDwvU2VjdXJlUGFnZT5cbik7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7fSwgLy8gd2lsbCBiZSBwYXNzZWQgdG8gdGhlIHBhZ2UgY29tcG9uZW50IGFzIHByb3BzXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVjb21tZXJjZURhc2hib2FyZDtcbiJdLCJzb3VyY2VSb290IjoiIn0=