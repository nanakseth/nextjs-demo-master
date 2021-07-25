self["webpackHotUpdate_N_E"]("pages/dashboard/intranet",{

/***/ "./pages/dashboard/intranet.js":
/*!*************************************!*\
  !*** ./pages/dashboard/intranet.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _jumbo_components_PageComponents_PageLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../@jumbo/components/PageComponents/PageLoader */ "./@jumbo/components/PageComponents/PageLoader.js");
/* harmony import */ var _authentication_auth_page_wrappers_SecurePage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../authentication/auth-page-wrappers/SecurePage */ "./authentication/auth-page-wrappers/SecurePage.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Nanak.seth\\Downloads\\nextjs-demo-master\\nextjs-demo-master\\pages\\dashboard\\intranet.js",
    _this = undefined;





var Intranet = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(_c = function _c() {
  return Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_material-ui_core_esm_index_js-node_modules_material-ui_icons_AddShopping-e1816b"), __webpack_require__.e("vendors-node_modules_material-ui_icons_Add_js-node_modules_material-ui_icons_AllInclusive_js--357b21"), __webpack_require__.e("modules_Dashboards_Intranet_index_js-node_modules_moment_locale_sync_recursive_")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../modules/Dashboards/Intranet */ "./modules/Dashboards/Intranet/index.js"));
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
      return [/*require.resolve*/(/*! ../../modules/Dashboards/Intranet */ "./modules/Dashboards/Intranet/index.js")];
    },
    modules: ["dashboard\\intranet.js -> " + '../../modules/Dashboards/Intranet']
  }
});
_c2 = Intranet;

var IntranetDashboard = function IntranetDashboard() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_authentication_auth_page_wrappers_SecurePage__WEBPACK_IMPORTED_MODULE_4__.default, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Intranet, {}, void 0, false, {
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

_c3 = IntranetDashboard;
/* harmony default export */ __webpack_exports__["default"] = (IntranetDashboard);

var _c, _c2, _c3;

$RefreshReg$(_c, "Intranet$dynamic");
$RefreshReg$(_c2, "Intranet");
$RefreshReg$(_c3, "IntranetDashboard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGFzaGJvYXJkL2ludHJhbmV0LmpzIl0sIm5hbWVzIjpbIkludHJhbmV0IiwiZHluYW1pYyIsImxvYWRpbmciLCJJbnRyYW5ldERhc2hib2FyZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxRQUFRLEdBQUdDLG1EQUFPLE1BQUM7QUFBQSxTQUFNLDJnQkFBTjtBQUFBLENBQUQsRUFBb0Q7QUFDMUVDLFNBQU8sRUFBRTtBQUFBLHdCQUFNLDhEQUFDLGdGQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBTjtBQUFBLEdBRGlFO0FBQUE7QUFBQTtBQUFBLGtDQUF0QyxpRkFBc0M7QUFBQTtBQUFBLDZDQUF0QyxtQ0FBc0M7QUFBQTtBQUFBLENBQXBELENBQXhCO01BQU1GLFE7O0FBSU4sSUFBTUcsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQjtBQUFBLHNCQUN4Qiw4REFBQyxrRkFBRDtBQUFBLDJCQUNFLDhEQUFDLFFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEd0I7QUFBQSxDQUExQjs7TUFBTUEsaUI7QUFNTiwrREFBZUEsaUJBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGFzaGJvYXJkL2ludHJhbmV0LmFjN2M5NmVjOGI1Mzk0ZmNiM2FkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcbmltcG9ydCBQYWdlTG9hZGVyIGZyb20gJy4uLy4uL0BqdW1iby9jb21wb25lbnRzL1BhZ2VDb21wb25lbnRzL1BhZ2VMb2FkZXInO1xuaW1wb3J0IFNlY3VyZVBhZ2UgZnJvbSAnLi4vLi4vYXV0aGVudGljYXRpb24vYXV0aC1wYWdlLXdyYXBwZXJzL1NlY3VyZVBhZ2UnO1xuXG5jb25zdCBJbnRyYW5ldCA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCcuLi8uLi9tb2R1bGVzL0Rhc2hib2FyZHMvSW50cmFuZXQnKSwge1xuICBsb2FkaW5nOiAoKSA9PiA8UGFnZUxvYWRlciAvPixcbn0pO1xuXG5jb25zdCBJbnRyYW5ldERhc2hib2FyZCA9ICgpID0+IChcbiAgPFNlY3VyZVBhZ2U+XG4gICAgPEludHJhbmV0IC8+XG4gIDwvU2VjdXJlUGFnZT5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEludHJhbmV0RGFzaGJvYXJkO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==