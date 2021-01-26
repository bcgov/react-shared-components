(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    1123: function (module, exports, __webpack_require__) {
      "use strict";
      var _clientApi = __webpack_require__(82),
        _clientLogger = __webpack_require__(51),
        _configFilename = __webpack_require__(1124);
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          enumerableOnly &&
            (symbols = symbols.filter(function (sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            })),
            keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? ownKeys(Object(source), !0).forEach(function (key) {
                _defineProperty(target, key, source[key]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                target,
                Object.getOwnPropertyDescriptors(source)
              )
            : ownKeys(Object(source)).forEach(function (key) {
                Object.defineProperty(
                  target,
                  key,
                  Object.getOwnPropertyDescriptor(source, key)
                );
              });
        }
        return target;
      }
      function _defineProperty(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (obj[key] = value),
          obj
        );
      }
      (_configFilename.args || _configFilename.argTypes) &&
        _clientLogger.logger.warn(
          "Invalid args/argTypes in config, ignoring.",
          JSON.stringify({
            args: _configFilename.args,
            argTypes: _configFilename.argTypes,
          })
        ),
        _configFilename.decorators &&
          _configFilename.decorators.forEach(function (decorator) {
            return (0, _clientApi.addDecorator)(decorator, !1);
          }),
        _configFilename.loaders &&
          _configFilename.loaders.forEach(function (loader) {
            return (0, _clientApi.addLoader)(loader, !1);
          }),
        (_configFilename.parameters ||
          _configFilename.globals ||
          _configFilename.globalTypes) &&
          (0, _clientApi.addParameters)(
            _objectSpread(
              _objectSpread({}, _configFilename.parameters),
              {},
              {
                globals: _configFilename.globals,
                globalTypes: _configFilename.globalTypes,
              }
            ),
            !1
          ),
        _configFilename.argTypesEnhancers &&
          _configFilename.argTypesEnhancers.forEach(function (enhancer) {
            return (0, _clientApi.addArgTypesEnhancer)(enhancer);
          });
    },
    1124: function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      __webpack_require__(1125);
      var _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          244
        ),
        _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          10
        );
      Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.addParameters)({
        docs: {
          container:
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.DocsContainer,
          page:
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.DocsPage,
        },
      });
    },
    1126: function (module, exports, __webpack_require__) {
      "use strict";
      (function (module) {
        (0, __webpack_require__(244).configure)(
          [__webpack_require__(1127)],
          module,
          !1
        );
      }.call(this, __webpack_require__(135)(module)));
    },
    1127: function (module, exports, __webpack_require__) {
      var map = {
        "./components/alert/Alert.stories.js": 1210,
        "./components/button/Button.stories.js": 1224,
        "./components/callout/Callout.stories.js": 1213,
        "./components/confirmation-popup/ConfirmationPopup.stories.js": 1207,
        "./components/date-pick/DatePick.stories.js": 1214,
        "./components/display-box/DisplayBox.stories.js": 1215,
        "./components/dropdown/Dropdown.stories.js": 1216,
        "./components/footer/Footer.stories.js": 1217,
        "./components/header/Header.stories.js": 1218,
        "./components/input/Input.stories.js": 1219,
        "./components/loader/Loader.stories.js": 1225,
        "./components/radio/Radio.stories.js": 1220,
        "./components/sidecard/Sidecard.stories.js": 1221,
        "./components/table/Table.stories.js": 1226,
        "./components/tabs/Tabs.stories.js": 1227,
        "./components/terms-of-use/TermsOfUse.stories.js": 1211,
        "./components/textarea/Textarea.stories.js": 1222,
      };
      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }
      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          throw ((e.code = "MODULE_NOT_FOUND"), e);
        }
        return map[req];
      }
      (webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      }),
        (webpackContext.resolve = webpackContextResolve),
        (module.exports = webpackContext),
        (webpackContext.id = 1127);
    },
    1129: function (module, exports, __webpack_require__) {},
    1130: function (module, exports, __webpack_require__) {},
    1131: function (module, exports, __webpack_require__) {},
    1132: function (module, exports, __webpack_require__) {},
    1138: function (module, exports, __webpack_require__) {},
    1139: function (module, exports, __webpack_require__) {},
    117: function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.d(__webpack_exports__, "a", function () {
        return Loader;
      });
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          3
        ),
        Loader =
          (__webpack_require__(2),
          __webpack_require__(1131),
          function Loader(_ref) {
            var page = _ref.page,
              loaderCss = "bcgov-btn-loader";
            return (
              page && (loaderCss = "bcgov-page-loader"),
              Object(
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs
              )(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                  Object(
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx
                  )("div", { className: loaderCss }),
                  page &&
                    Object(
                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs
                    )(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                      children: [
                        Object(
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx
                        )("br", {}),
                        "Loading... Please Wait",
                      ],
                    }),
                ],
              })
            );
          });
      (Loader.defaultProps = { page: !1 }),
        (Loader.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "Loader",
          props: {
            page: {
              defaultValue: { value: "false", computed: !1 },
              type: { name: "bool" },
              required: !1,
              description: "",
            },
          },
        }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES["src/components/loader/Loader.js"] = {
            name: "Loader",
            docgenInfo: Loader.__docgenInfo,
            path: "src/components/loader/Loader.js",
          });
    },
    1189: function (module, exports, __webpack_require__) {},
    1190: function (module, exports, __webpack_require__) {},
    1193: function (module, exports, __webpack_require__) {},
    1194: function (module, exports, __webpack_require__) {},
    1195: function (module, exports, __webpack_require__) {},
    1196: function (module, exports, __webpack_require__) {},
    1197: function (module, exports, __webpack_require__) {},
    1201: function (module, exports, __webpack_require__) {},
    1202: function (module, exports, __webpack_require__) {},
    1207: function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, "Default", function () {
          return Default;
        }),
        __webpack_require__.d(__webpack_exports__, "Mobile", function () {
          return Mobile;
        });
      var objectSpread2 = __webpack_require__(33),
        jsx_runtime = __webpack_require__(3),
        dist = (__webpack_require__(2), __webpack_require__(165)),
        esm = __webpack_require__(1),
        blocks = __webpack_require__(10),
        Modal = __webpack_require__(198),
        Button = __webpack_require__(76),
        prop_types = __webpack_require__(5),
        prop_types_default = __webpack_require__.n(prop_types),
        ConfirmationPopup_generateButton =
          (prop_types_default.a.shape({
            label: prop_types_default.a.string.isRequired,
            styling: prop_types_default.a.string.isRequired,
            onClick: prop_types_default.a.func.isRequired,
            disabled: prop_types_default.a.bool,
          }).isRequired,
          __webpack_require__(1138),
          function generateButton(onClick, label, styling, testId) {
            return Object(jsx_runtime.jsx)(Button.a, {
              onClick: onClick,
              label: label,
              styling: styling,
              testId: testId,
            });
          });
      function ConfirmationPopup_ConfirmationPopup(_ref) {
        var _ref$modal = _ref.modal,
          show = _ref$modal.show,
          title = _ref$modal.title,
          body = _ref$modal.body,
          mainButton = _ref.mainButton,
          confirmButton = _ref.confirmButton,
          cancelButton = _ref.cancelButton;
        return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment, {
          children: [
            ConfirmationPopup_generateButton(
              mainButton.onClick,
              mainButton.label,
              mainButton.styling,
              "main-cancel-btn"
            ),
            Object(jsx_runtime.jsxs)(Modal.a, {
              show: show,
              onHide: cancelButton.onClick,
              children: [
                Object(jsx_runtime.jsx)(Modal.a.Header, {
                  className: "bcgov-hide-border mt-3",
                  closeButton: !0,
                  children: Object(jsx_runtime.jsx)(Modal.a.Title, {
                    className: "mx-auto bcgov-larger-font",
                    children: title,
                  }),
                }),
                Object(jsx_runtime.jsxs)("div", {
                  className: "mx-auto",
                  children: [
                    Object(jsx_runtime.jsx)(Modal.a.Body, {
                      className: "bcgov-padding-left",
                      children: body(),
                    }),
                    Object(jsx_runtime.jsxs)("div", {
                      className: "mx-auto mb-5",
                      children: [
                        ConfirmationPopup_generateButton(
                          confirmButton.onClick,
                          confirmButton.label,
                          confirmButton.styling,
                          "modal-confirm-btn"
                        ),
                        Object(jsx_runtime.jsx)("p", {}),
                        ConfirmationPopup_generateButton(
                          cancelButton.onClick,
                          cancelButton.label,
                          cancelButton.styling,
                          "modal-cancel-btn"
                        ),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      function _extends() {
        return (_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      (ConfirmationPopup_ConfirmationPopup.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "ConfirmationPopup",
        props: {
          modal: {
            type: {
              name: "shape",
              value: {
                show: { name: "bool", required: !0 },
                title: { name: "string", required: !0 },
                body: { name: "func", required: !0 },
              },
            },
            required: !0,
            description: "",
          },
          mainButton: {
            type: { name: "custom", raw: "propTypes.button" },
            required: !1,
            description: "",
          },
          confirmButton: {
            type: { name: "custom", raw: "propTypes.button" },
            required: !1,
            description: "",
          },
          cancelButton: {
            type: { name: "custom", raw: "propTypes.button" },
            required: !1,
            description: "",
          },
        },
      }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            "src/components/confirmation-popup/ConfirmationPopup.js"
          ] = {
            name: "ConfirmationPopup",
            docgenInfo: ConfirmationPopup_ConfirmationPopup.__docgenInfo,
            path: "src/components/confirmation-popup/ConfirmationPopup.js",
          });
      const layoutProps = {};
      function MDXContent({ components: components, ...props }) {
        return Object(esm.mdx)(
          "wrapper",
          _extends({}, layoutProps, props, {
            components: components,
            mdxType: "MDXLayout",
          }),
          Object(esm.mdx)(blocks.Meta, {
            title: "ConfirmationPopup",
            component: void 0,
            mdxType: "Meta",
          }),
          Object(esm.mdx)(
            "h1",
            { id: "confirmation-popup" },
            "Confirmation Popup"
          ),
          Object(esm.mdx)(
            "p",
            null,
            "Add dialogs to your site for lightboxes or user notifications."
          ),
          Object(esm.mdx)("h2", { id: "when-to-use" }, "When to Use"),
          Object(esm.mdx)(
            "p",
            null,
            "The main use case for a confirmation popup is when you need your users to confirm\nan action that may lead to unexpected behaviour if it occurs without confirmation. Examples include:"
          ),
          Object(esm.mdx)(
            "ul",
            null,
            Object(esm.mdx)(
              "li",
              { parentName: "ul" },
              "Exiting the current site/process"
            ),
            Object(esm.mdx)(
              "li",
              { parentName: "ul" },
              "Cancelling a step of the process"
            ),
            Object(esm.mdx)(
              "li",
              { parentName: "ul" },
              "Anything that causes a loss of progress in the process"
            )
          ),
          Object(esm.mdx)("h2", { id: "when-not-to-use" }, "When not to Use"),
          Object(esm.mdx)(
            "ul",
            null,
            Object(esm.mdx)(
              "li",
              { parentName: "ul" },
              "To display forms for the user to complete"
            ),
            Object(esm.mdx)(
              "li",
              { parentName: "ul" },
              "Displaying non-critical information"
            )
          ),
          Object(esm.mdx)("h2", { id: "api" }, "API"),
          Object(esm.mdx)(
            "table",
            null,
            Object(esm.mdx)(
              "thead",
              { parentName: "table" },
              Object(esm.mdx)(
                "tr",
                { parentName: "thead" },
                Object(esm.mdx)(
                  "th",
                  _extends({ parentName: "tr" }, { align: null }),
                  "Prop"
                ),
                Object(esm.mdx)(
                  "th",
                  _extends({ parentName: "tr" }, { align: null }),
                  "Type"
                ),
                Object(esm.mdx)(
                  "th",
                  _extends({ parentName: "tr" }, { align: null }),
                  "Required"
                ),
                Object(esm.mdx)(
                  "th",
                  _extends({ parentName: "tr" }, { align: null }),
                  "Description"
                ),
                Object(esm.mdx)(
                  "th",
                  _extends({ parentName: "tr" }, { align: null }),
                  "Default"
                )
              )
            ),
            Object(esm.mdx)(
              "tbody",
              { parentName: "table" },
              Object(esm.mdx)(
                "tr",
                { parentName: "tbody" },
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "modal"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "object"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "true"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "object describing aspects of the modal"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null })
                )
              ),
              Object(esm.mdx)(
                "tr",
                { parentName: "tbody" },
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "mainButton"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "object"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "true"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "object describing the main button that appears outside the popup"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null })
                )
              ),
              Object(esm.mdx)(
                "tr",
                { parentName: "tbody" },
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "confirmButton"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "object"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "true"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "object describing the confirmation button that appears within the popup"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null })
                )
              ),
              Object(esm.mdx)(
                "tr",
                { parentName: "tbody" },
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "cancelButton"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "object"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "true"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "object describing the cancel button that appears within the popup"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null })
                )
              )
            )
          ),
          Object(esm.mdx)("h3", { id: "modal-api" }, "Modal API"),
          Object(esm.mdx)(
            "p",
            null,
            "The modal object has its own properties that need to be present within it, as shown below:"
          ),
          Object(esm.mdx)(
            "table",
            null,
            Object(esm.mdx)(
              "thead",
              { parentName: "table" },
              Object(esm.mdx)(
                "tr",
                { parentName: "thead" },
                Object(esm.mdx)(
                  "th",
                  _extends({ parentName: "tr" }, { align: null }),
                  "Prop"
                ),
                Object(esm.mdx)(
                  "th",
                  _extends({ parentName: "tr" }, { align: null }),
                  "Type"
                ),
                Object(esm.mdx)(
                  "th",
                  _extends({ parentName: "tr" }, { align: null }),
                  "Required"
                ),
                Object(esm.mdx)(
                  "th",
                  _extends({ parentName: "tr" }, { align: null }),
                  "Description"
                ),
                Object(esm.mdx)(
                  "th",
                  _extends({ parentName: "tr" }, { align: null }),
                  "Default"
                )
              )
            ),
            Object(esm.mdx)(
              "tbody",
              { parentName: "table" },
              Object(esm.mdx)(
                "tr",
                { parentName: "tbody" },
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "show"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "boolean"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "true"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "value representing whether the popup should be shown or not"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null })
                )
              ),
              Object(esm.mdx)(
                "tr",
                { parentName: "tbody" },
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "title"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "string"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "true"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "value for the heading of the popup"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null })
                )
              ),
              Object(esm.mdx)(
                "tr",
                { parentName: "tbody" },
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "body"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "function"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "true"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "function rendering some jsx to display within the popup body"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null })
                )
              )
            )
          ),
          Object(esm.mdx)("h3", { id: "button-api" }, "Button API"),
          Object(esm.mdx)(
            "p",
            null,
            "The mainButton, confirmButton, and cancelButton have their own properties as well, as shown below:"
          ),
          Object(esm.mdx)(
            "table",
            null,
            Object(esm.mdx)(
              "thead",
              { parentName: "table" },
              Object(esm.mdx)(
                "tr",
                { parentName: "thead" },
                Object(esm.mdx)(
                  "th",
                  _extends({ parentName: "tr" }, { align: null }),
                  "Prop"
                ),
                Object(esm.mdx)(
                  "th",
                  _extends({ parentName: "tr" }, { align: null }),
                  "Type"
                ),
                Object(esm.mdx)(
                  "th",
                  _extends({ parentName: "tr" }, { align: null }),
                  "Required"
                ),
                Object(esm.mdx)(
                  "th",
                  _extends({ parentName: "tr" }, { align: null }),
                  "Description"
                ),
                Object(esm.mdx)(
                  "th",
                  _extends({ parentName: "tr" }, { align: null }),
                  "Default"
                )
              )
            ),
            Object(esm.mdx)(
              "tbody",
              { parentName: "table" },
              Object(esm.mdx)(
                "tr",
                { parentName: "tbody" },
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "onClick"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "function"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "true"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "function executed on button click"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null })
                )
              ),
              Object(esm.mdx)(
                "tr",
                { parentName: "tbody" },
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "label"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "string"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "true"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "text to be displayed on button"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null })
                )
              ),
              Object(esm.mdx)(
                "tr",
                { parentName: "tbody" },
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "styling"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "string"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "true"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "list of css classnames to apply styling based on (ex: normal-blue, normal-white, btn)"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null })
                )
              ),
              Object(esm.mdx)(
                "tr",
                { parentName: "tbody" },
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "disabled"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "boolean"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "false"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "indicates whether button is disabled or enabled"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "false"
                )
              )
            )
          ),
          Object(esm.mdx)("br", null),
          Object(esm.mdx)(
            "h2",
            { id: "default-confirmation-popup" },
            "Default Confirmation Popup"
          ),
          Object(esm.mdx)(
            "p",
            null,
            "Used as a confirmation for a user cancelling their process."
          ),
          Object(esm.mdx)(blocks.Story, {
            name: "Default",
            id: "confirmation-popup--default",
            mdxType: "Story",
          }),
          Object(esm.mdx)(
            "pre",
            null,
            Object(esm.mdx)(
              "code",
              _extends({ parentName: "pre" }, { className: "language-bash" }),
              'const body = () => (\n  <>\n    <p>Your files will not be submitted.</p>\n    <p>\n      You will be returned to:\n      <br />\n      <b>Original</b> website\n    </p>\n  </>\n);\n\nconst modal = {\n  title: "Cancel process?",\n  body\n};\n\nconst onButtonClick = () => store.set({ show: !store.get("show") });\n\nconst mainButton = {\n  label: "Click Me",\n  styling: "bcgov-normal-white btn",\n  onClick: onButtonClick\n};\n\nconst confirmButton = {\n  label: "Yes, cancel my process please",\n  styling: "bcgov-normal-blue btn bcgov-consistent-width",\n  onClick: onButtonClick\n};\n\nconst cancelButton = {\n  label: "No, resume my process please",\n  styling: "bcgov-normal-white btn bcgov-consistent-width",\n  onClick: onButtonClick\n};\n\n<ConfirmationPopup\n  key="popup"\n  modal={{ ...modal, show: state.show }}\n  mainButton={mainButton}\n  confirmButton={confirmButton}\n  cancelButton={cancelButton}\n/>\n'
            )
          )
        );
      }
      MDXContent.isMDXComponent = !0;
      var confirmationPopupTestData_body = function body() {
        return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment, {
          children: [
            Object(jsx_runtime.jsx)("p", {
              children: "Your files will not be submitted.",
            }),
            Object(jsx_runtime.jsxs)("p", {
              children: [
                "You will be returned to:",
                Object(jsx_runtime.jsx)("br", {}),
                Object(jsx_runtime.jsx)("b", { children: "Original" }),
                " website",
              ],
            }),
          ],
        });
      };
      __webpack_exports__.default = {
        title: "Confirmation Popup",
        component: ConfirmationPopup_ConfirmationPopup,
        parameters: { docs: { page: MDXContent } },
      };
      var store = new dist.Store({ show: !1 }),
        modal = {
          title: "Cancel process?",
          body: (function getConfirmationPopupTestData() {
            return { body: confirmationPopupTestData_body };
          })().body,
        },
        onButtonClick = function onButtonClick() {
          return store.set({ show: !store.get("show") });
        },
        ConfirmationPopup_stories_mainButton = {
          label: "Click Me",
          styling: "bcgov-normal-white btn",
          onClick: onButtonClick,
        },
        ConfirmationPopup_stories_confirmButton = {
          label: "Yes, cancel my process please",
          styling: "bcgov-normal-blue btn bcgov-consistent-width",
          onClick: onButtonClick,
        },
        ConfirmationPopup_stories_cancelButton = {
          label: "No, resume my process please",
          styling: "bcgov-normal-white btn bcgov-consistent-width",
          onClick: onButtonClick,
        },
        ConfirmationPopupState = Object(jsx_runtime.jsx)(dist.State, {
          store: store,
          children: function children(state) {
            return [
              Object(jsx_runtime.jsx)(
                ConfirmationPopup_ConfirmationPopup,
                {
                  modal: Object(objectSpread2.a)(
                    Object(objectSpread2.a)({}, modal),
                    {},
                    { show: state.show }
                  ),
                  mainButton: ConfirmationPopup_stories_mainButton,
                  confirmButton: ConfirmationPopup_stories_confirmButton,
                  cancelButton: ConfirmationPopup_stories_cancelButton,
                },
                "popup"
              ),
            ];
          },
        }),
        Default = function Default() {
          return ConfirmationPopupState;
        },
        Mobile = function Mobile() {
          return ConfirmationPopupState;
        };
      (Mobile.parameters = { viewport: { defaultViewport: "mobile2" } }),
        (Default.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "Default",
        }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            "src/components/confirmation-popup/ConfirmationPopup.stories.js"
          ] = {
            name: "Default",
            docgenInfo: Default.__docgenInfo,
            path:
              "src/components/confirmation-popup/ConfirmationPopup.stories.js",
          }),
        (Mobile.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "Mobile",
        }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            "src/components/confirmation-popup/ConfirmationPopup.stories.js"
          ] = {
            name: "Mobile",
            docgenInfo: Mobile.__docgenInfo,
            path:
              "src/components/confirmation-popup/ConfirmationPopup.stories.js",
          });
    },
    1210: function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, "Success", function () {
          return Alert_stories_Success;
        }),
        __webpack_require__.d(__webpack_exports__, "Warning", function () {
          return Alert_stories_Warning;
        }),
        __webpack_require__.d(__webpack_exports__, "Error", function () {
          return Alert_stories_Error;
        }),
        __webpack_require__.d(__webpack_exports__, "Info", function () {
          return Alert_stories_Info;
        }),
        __webpack_require__.d(__webpack_exports__, "Mobile", function () {
          return Alert_stories_Mobile;
        });
      var jsx_runtime = __webpack_require__(3),
        index_esm = (__webpack_require__(2), __webpack_require__(95)),
        esm = __webpack_require__(1),
        blocks = __webpack_require__(10),
        DisplayBox = __webpack_require__(79),
        Alert_Alert =
          (__webpack_require__(1130),
          function Alert(_ref) {
            var type = _ref.type,
              styling = _ref.styling,
              element = _ref.element,
              generatedIcon = (function generateIcon(icon, type) {
                var success = Object(jsx_runtime.jsx)("div", {
                    style: { color: "#2E8540" },
                    children: icon,
                  }),
                  warning = Object(jsx_runtime.jsx)("div", {
                    style: { color: "rgb(252, 186, 25)" },
                    children: icon,
                  }),
                  error = Object(jsx_runtime.jsx)("div", {
                    style: { color: "#D8292F" },
                    children: icon,
                  }),
                  info = Object(jsx_runtime.jsx)(jsx_runtime.Fragment, {
                    children: icon,
                  });
                return "success" === type
                  ? success
                  : "warning" === type
                  ? warning
                  : "error" === type
                  ? error
                  : info;
              })(_ref.icon, type);
            return Object(jsx_runtime.jsx)(DisplayBox.a, {
              styling: styling,
              icon: generatedIcon,
              element: element,
            });
          });
      function _extends() {
        return (_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      (Alert_Alert.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "Alert",
        props: {
          type: { type: { name: "string" }, required: !0, description: "" },
          element: {
            type: {
              name: "union",
              value: [{ name: "string" }, { name: "object" }],
            },
            required: !0,
            description: "",
          },
          icon: { type: { name: "element" }, required: !0, description: "" },
          styling: { type: { name: "string" }, required: !0, description: "" },
        },
      }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES["src/components/alert/Alert.js"] = {
            name: "Alert",
            docgenInfo: Alert_Alert.__docgenInfo,
            path: "src/components/alert/Alert.js",
          });
      const layoutProps = {};
      function MDXContent({ components: components, ...props }) {
        return Object(esm.mdx)(
          "wrapper",
          _extends({}, layoutProps, props, {
            components: components,
            mdxType: "MDXLayout",
          }),
          Object(esm.mdx)(blocks.Meta, {
            title: "Alert",
            component: Alert_Alert,
            mdxType: "Meta",
          }),
          Object(esm.mdx)("h1", { id: "alert" }, "Alert"),
          Object(esm.mdx)(
            "p",
            null,
            "Alert banners notify users of important information or changes on a page.\nTypically, they appear at the top of a page."
          ),
          Object(esm.mdx)("h2", { id: "when-to-use" }, "When to Use"),
          Object(esm.mdx)(
            "p",
            null,
            "Telling users important and typically time sensitive information. This includes:"
          ),
          Object(esm.mdx)(
            "ul",
            null,
            Object(esm.mdx)("li", { parentName: "ul" }, "Success messages"),
            Object(esm.mdx)("li", { parentName: "ul" }, "Error messages"),
            Object(esm.mdx)("li", { parentName: "ul" }, "Warnings"),
            Object(esm.mdx)("li", { parentName: "ul" }, "System statuses"),
            Object(esm.mdx)(
              "li",
              { parentName: "ul" },
              "Important pieces of information"
            )
          ),
          Object(esm.mdx)("h2", { id: "when-not-to-use" }, "When not to Use"),
          Object(esm.mdx)(
            "ul",
            null,
            Object(esm.mdx)(
              "li",
              { parentName: "ul" },
              "In-line error validation on form inputs"
            ),
            Object(esm.mdx)(
              "li",
              { parentName: "ul" },
              "Popular content on your website"
            ),
            Object(esm.mdx)("li", { parentName: "ul" }, "Highlighting content")
          ),
          Object(esm.mdx)("h2", { id: "api" }, "API"),
          Object(esm.mdx)(
            "table",
            null,
            Object(esm.mdx)(
              "thead",
              { parentName: "table" },
              Object(esm.mdx)(
                "tr",
                { parentName: "thead" },
                Object(esm.mdx)(
                  "th",
                  _extends({ parentName: "tr" }, { align: null }),
                  "Prop"
                ),
                Object(esm.mdx)(
                  "th",
                  _extends({ parentName: "tr" }, { align: null }),
                  "Type"
                ),
                Object(esm.mdx)(
                  "th",
                  _extends({ parentName: "tr" }, { align: null }),
                  "Required"
                ),
                Object(esm.mdx)(
                  "th",
                  _extends({ parentName: "tr" }, { align: null }),
                  "Description"
                ),
                Object(esm.mdx)(
                  "th",
                  _extends({ parentName: "tr" }, { align: null }),
                  "Default"
                )
              )
            ),
            Object(esm.mdx)(
              "tbody",
              { parentName: "table" },
              Object(esm.mdx)(
                "tr",
                { parentName: "tbody" },
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "type"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "string"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "true"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "indicates whether the alert is a warning, error, or success message"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null })
                )
              ),
              Object(esm.mdx)(
                "tr",
                { parentName: "tbody" },
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "element"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "string/object"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "true"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "message to be displayed within the alert"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null })
                )
              ),
              Object(esm.mdx)(
                "tr",
                { parentName: "tbody" },
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "icon"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "element"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "true"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "jsx rendering the icon element"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null })
                )
              ),
              Object(esm.mdx)(
                "tr",
                { parentName: "tbody" },
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "styling"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "string"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "true"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "css class name representing the style for your alert dialog"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null })
                )
              )
            )
          ),
          Object(esm.mdx)("br", null),
          Object(esm.mdx)("h2", { id: "success-alert" }, "Success Alert"),
          Object(esm.mdx)(
            "p",
            null,
            "Used for success messages, typically for after an action is successfully performed."
          ),
          Object(esm.mdx)(blocks.Story, {
            name: "Success",
            id: "alert--success",
            mdxType: "Story",
          }),
          Object(esm.mdx)(
            "pre",
            null,
            Object(esm.mdx)(
              "code",
              _extends({ parentName: "pre" }, { className: "language-bash" }),
              '<Alert icon={<MdCheckBox size={32} />} type="success" styling="bcgov-success-background" element="This is a success message!" />\n'
            )
          ),
          Object(esm.mdx)("h2", { id: "warning-alert" }, "Warning Alert"),
          Object(esm.mdx)(
            "p",
            null,
            "Used for warning messages, typically for explicitly informing a user of something important that must be considered."
          ),
          Object(esm.mdx)(blocks.Story, {
            name: "Warning",
            id: "alert--warning",
            mdxType: "Story",
          }),
          Object(esm.mdx)(
            "pre",
            null,
            Object(esm.mdx)(
              "code",
              _extends({ parentName: "pre" }, { className: "language-bash" }),
              '<Alert icon={<MdError size={32} />} type="warning" styling="bcgov-warning-background" element="This is a warning message!" />\n'
            )
          ),
          Object(esm.mdx)("h2", { id: "info-alert" }, "Info Alert"),
          Object(esm.mdx)("p", null, "Used for informative messages."),
          Object(esm.mdx)(blocks.Story, {
            name: "Info",
            id: "alert--info",
            mdxType: "Story",
          }),
          Object(esm.mdx)(
            "pre",
            null,
            Object(esm.mdx)(
              "code",
              _extends({ parentName: "pre" }, { className: "language-bash" }),
              '<Alert icon={<MdInfo size={32} />} type="info" styling="bcgov-info-background" element="This is an info message!" />\n'
            )
          ),
          Object(esm.mdx)("h2", { id: "error-alert" }, "Error Alert"),
          Object(esm.mdx)(
            "p",
            null,
            "Used for error messages, when something has gone wrong unexpectedly and the user needs to be aware of it."
          ),
          Object(esm.mdx)(blocks.Story, {
            name: "Error",
            id: "alert--error",
            mdxType: "Story",
          }),
          Object(esm.mdx)(
            "pre",
            null,
            Object(esm.mdx)(
              "code",
              _extends({ parentName: "pre" }, { className: "language-bash" }),
              '<Alert icon={<MdCancel size={32} />} type="error" styling="bcgov-error-background" element="This is an error message!" />\n'
            )
          )
        );
      }
      function generateAlert(icon, type, styling, element) {
        return Object(jsx_runtime.jsx)(Alert_Alert, {
          icon: icon,
          type: type,
          styling: styling,
          element: element,
        });
      }
      (MDXContent.isMDXComponent = !0),
        (generateAlert.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "generateAlert",
        }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES["src/modules/alertTestData.js"] = {
            name: "generateAlert",
            docgenInfo: generateAlert.__docgenInfo,
            path: "src/modules/alertTestData.js",
          });
      __webpack_exports__.default = {
        title: "Alert",
        component: Alert_Alert,
        parameters: { docs: { page: MDXContent } },
      };
      var Alert_stories_Success = function Success() {
          return generateAlert(
            Object(jsx_runtime.jsx)(index_esm.b, { size: 32 }),
            "success",
            "bcgov-success-background",
            "This is a success message!"
          );
        },
        Alert_stories_Warning = function Warning() {
          return generateAlert(
            Object(jsx_runtime.jsx)(index_esm.e, { size: 32 }),
            "warning",
            "bcgov-warning-background",
            "This is a warning message!"
          );
        },
        Alert_stories_Error = function Error() {
          return generateAlert(
            Object(jsx_runtime.jsx)(index_esm.a, { size: 32 }),
            "error",
            "bcgov-error-background",
            "This is an error message!"
          );
        },
        Alert_stories_Info = function Info() {
          return generateAlert(
            Object(jsx_runtime.jsx)(index_esm.f, { size: 32 }),
            "info",
            "bcgov-info-background",
            "This is an info message!"
          );
        },
        Alert_stories_Mobile = function Mobile() {
          return generateAlert(
            Object(jsx_runtime.jsx)(index_esm.b, { size: 32 }),
            "success",
            "bcgov-success-background",
            "This is a success message!"
          );
        };
      Alert_stories_Mobile.parameters = {
        viewport: { defaultViewport: "mobile2" },
      };
    },
    1211: function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, "Default", function () {
          return Default;
        }),
        __webpack_require__.d(__webpack_exports__, "Mobile", function () {
          return Mobile;
        });
      var jsx_runtime = __webpack_require__(3),
        dist = (__webpack_require__(2), __webpack_require__(41)),
        termsOfUseTestData_content = Object(
          jsx_runtime.jsxs
        )(jsx_runtime.Fragment, {
          children: [
            Object(jsx_runtime.jsx)("p", {
              children:
                'In these Terms of Use, "you" or "your" includes the individual using or accessing the Electronic Criminal Record Check Portal (the "Site") on their own behalf to submit an online request for a criminal record check.',
            }),
            Object(jsx_runtime.jsx)("p", {
              children:
                'These Terms of Use are an agreement between you and Her Majesty the Queen in Right of the Province of British Columbia, represented by the Minister of Public Safety and Solicitor General (the "Province") and they govern your use of the Site and, where applicable, any associated service ("Associated Service" and, together with the Site, the "Services"). By clicking the box to indicate that you accept these Terms of Use, and in consideration of your use of the Services, you agree, to the terms and conditions set out below.',
            }),
            Object(jsx_runtime.jsx)("p", {
              children:
                "Your failure to abide by these Terms of Use may result in the suspension or cancellation of your use of or access to the Services. In addition, the Province reserves the right to pursue any remedy available at law or in equity.",
            }),
            Object(jsx_runtime.jsx)("p", {
              children:
                "Please print a copy of these Terms of Use for your records.",
            }),
            Object(jsx_runtime.jsx)("h2", { children: "Disclaimer:" }),
            Object(jsx_runtime.jsxs)("ol", {
              children: [
                Object(jsx_runtime.jsx)("li", {
                  children: Object(jsx_runtime.jsxs)("b", {
                    children: [
                      "Reasonable efforts have been made to provide accurate, complete and timely information regarding the Services and the Site in general. However, you are encouraged to refer to the ",
                      Object(jsx_runtime.jsx)("i", {
                        children: "Criminal Records Review Act",
                      }),
                      ", any related Regulations, policy and other official information materials before submitting an online request for a CRC.",
                    ],
                  }),
                }),
                Object(jsx_runtime.jsx)("br", {}),
                Object(jsx_runtime.jsx)("li", {
                  children:
                    "The services are provided “as is”, without warranty of any kind including warranty of fitness for a particular purpose. Use of the services is entirely at your own risk and you will be liable for any failure to abide by these terms of use.",
                }),
                Object(jsx_runtime.jsxs)("li", {
                  children: [
                    "Without limiting the general nature of the foregoing, the province does not represent or warrant that:",
                    Object(jsx_runtime.jsxs)("ol", {
                      type: "a",
                      children: [
                        Object(jsx_runtime.jsx)("li", {
                          children:
                            "The accuracy, completeness or currency of services or any associated information, or that any errors will be corrected;",
                        }),
                        Object(jsx_runtime.jsx)("li", {
                          children:
                            "That the services will function in a timely manner or will be available without error, failure or interruption; or",
                        }),
                        Object(jsx_runtime.jsx)("li", {
                          children:
                            "That the services will meet your expectations or requirements.",
                        }),
                      ],
                    }),
                  ],
                }),
                Object(jsx_runtime.jsx)("li", {
                  children:
                    "The Province is not responsible for the content of the Payment Site as defined below.",
                }),
              ],
            }),
            Object(jsx_runtime.jsx)("h2", {
              children: "Information Collection:",
            }),
            Object(jsx_runtime.jsxs)("ol", {
              start: "5",
              children: [
                Object(jsx_runtime.jsxs)("li", {
                  children: [
                    "When you visit the Site or use the Services, certain types of information are automatically collected from you, through the use of audit logs or cookies. This information is collected, used and disclosed in accordance with the Province’s ",
                    Object(jsx_runtime.jsx)("a", {
                      href: "https://www2.gov.bc.ca/gov/content/home/privacy",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      children: "Privacy Policy",
                    }),
                    ".",
                  ],
                }),
                Object(jsx_runtime.jsx)("li", {
                  children:
                    "The date and time of your acceptance of these Terms of Use will be logged. This will enable you to skip this step on future visits. However, if these Terms of Use are modified, they will be presented to you upon your next following visit and you will need to accept the modified terms in order to continue to access the Services. Notwithstanding the foregoing, you are responsible for reviewing these Terms of Use on a regular basis to ensure that you are aware of any modifications that may have been made and your continued use of the Services constitutes your acceptance of any such modified Terms of Use.",
                }),
                Object(jsx_runtime.jsx)("li", {
                  children:
                    "The information that you input on the Site may also be logged and attributed to you for verification purposes",
                }),
                Object(jsx_runtime.jsx)("li", {
                  children:
                    "Any personal information that may be collected from you on this Site is collected, used and disclosed in accordance with the collection notice presented to you at the time of collection.",
                }),
              ],
            }),
            Object(jsx_runtime.jsx)("h2", { children: "Authentication:" }),
            Object(jsx_runtime.jsxs)("ol", {
              start: "9",
              children: [
                Object(jsx_runtime.jsxs)("li", {
                  children: [
                    "You are required to have a ",
                    Object(jsx_runtime.jsx)("a", {
                      href:
                        "https://www2.gov.bc.ca/gov/content/governments/government-id/bc-services-card/login-with-card",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      children: "BC Services Card",
                    }),
                    "  to login and submit an online request for a criminal record check.",
                  ],
                }),
                Object(jsx_runtime.jsxs)("li", {
                  children: [
                    "Each time you access the Site, you must be authenticated by following an external link to the ",
                    Object(jsx_runtime.jsx)("a", {
                      href:
                        "https://www2.gov.bc.ca/gov/content/governments/government-id/bc-services-card",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      children: "BC Services Card Site",
                    }),
                    ", following which you will be returned to, and allowed to access the application portions of, the Site.",
                  ],
                }),
              ],
            }),
            Object(jsx_runtime.jsx)("h2", { children: "Payment:" }),
            Object(jsx_runtime.jsx)("ol", {
              start: "11",
              children: Object(jsx_runtime.jsx)("li", {
                children:
                  'You will be required to access an external payment processing site ("Payment Site") in order to pay the criminal record check fee. For volunteers completing an online request for a criminal record check, no payment is required.',
              }),
            }),
            Object(jsx_runtime.jsx)("h2", {
              children: "Additional Terms and Personal Information Collection:",
            }),
            Object(jsx_runtime.jsxs)("ol", {
              start: "12",
              children: [
                Object(jsx_runtime.jsx)("li", {
                  children:
                    "You may be required to accept additional terms and conditions in order to use or access an Associated Service, including the BC Services Card Site, and/or the Payment Site, in which case your access to, and use of the services offered by, those Associated Services or the Payment Site is governed by such additional terms.",
                }),
                Object(jsx_runtime.jsx)("li", {
                  children:
                    "Additional personal information may be collected from you by the providers of the Additional Sites in accordance with their terms and any associated privacy statement(s).",
                }),
              ],
            }),
            Object(jsx_runtime.jsx)("h2", {
              children: "Acceptable Use and Security:",
            }),
            Object(jsx_runtime.jsx)("ol", {
              start: "14",
              children: Object(jsx_runtime.jsxs)("li", {
                children: [
                  "You must not:",
                  Object(jsx_runtime.jsxs)("ol", {
                    type: "a",
                    children: [
                      Object(jsx_runtime.jsx)("li", {
                        children:
                          "use the Services for any unlawful or inappropriate purpose, including hacking, data mining or other intrusion activities;",
                      }),
                      Object(jsx_runtime.jsx)("li", {
                        children:
                          "input or upload any information which contains viruses, Trojan horses, worms, time bombs or other computer programming routines that may damage or interfere with the performance or function of the Services or any Associated Service;",
                      }),
                      Object(jsx_runtime.jsx)("li", {
                        children:
                          "divulge, share, compromise or permit any other person to use your login and password to access the Services;",
                      }),
                      Object(jsx_runtime.jsx)("li", {
                        children:
                          "take any action that might reasonably be construed as altering, destroying, defeating, compromising or rendering ineffective the security related to the Site or any Associated Service, or being likely to affect other users of the Services;",
                      }),
                      Object(jsx_runtime.jsx)("li", {
                        children:
                          "attempt to collect any information about other users of the Services; or",
                      }),
                      Object(jsx_runtime.jsx)("li", {
                        children:
                          "decompile, disassemble, reverse engineer or otherwise copy any source code associated with the Site or any Associated Service.",
                      }),
                    ],
                  }),
                ],
              }),
            }),
            Object(jsx_runtime.jsx)("h2", {
              children: "Ownership and Non-permitted Uses:",
            }),
            Object(jsx_runtime.jsxs)("ol", {
              start: "15",
              children: [
                Object(jsx_runtime.jsx)("li", {
                  children:
                    "You acknowledge and agree that at all times the Province and/or the providers of the Additional Sites, or their respective licensors, are the owners of any software, hardware, servers, networks or other equipment used to provide the Services.",
                }),
                Object(jsx_runtime.jsx)("li", {
                  children:
                    "You will not take any action that would be inconsistent with or infringe any proprietary or intellectual property rights of the Province, the providers of the Additional Sites or their respective licensors, in any software, hardware, servers, networks or other equipment, documentation or other information used to provide the Services.",
                }),
                Object(jsx_runtime.jsx)("li", {
                  children:
                    "You will not remove or alter any proprietary symbol or notice, including any copyright notice, trademark or logo displayed in connection with the Services.",
                }),
              ],
            }),
            Object(jsx_runtime.jsx)("h2", {
              children: "Suspension or Cancellation of Services:",
            }),
            Object(jsx_runtime.jsxs)("ol", {
              start: "18",
              children: [
                Object(jsx_runtime.jsxs)("li", {
                  children: [
                    "Your use of any of the Services may be suspended or cancelled at any time if:",
                    Object(jsx_runtime.jsxs)("ol", {
                      type: "a",
                      children: [
                        Object(jsx_runtime.jsx)("li", {
                          children:
                            "you fail to abide by these Terms of Use, or other terms and conditions that may be posted on any website used to access the Services; or",
                        }),
                        Object(jsx_runtime.jsx)("li", {
                          children:
                            "the Province or the provider of any Associated Service deems such suspension or cancellation necessary for any good and valid reason.",
                        }),
                      ],
                    }),
                  ],
                }),
                Object(jsx_runtime.jsxs)("li", {
                  children: [
                    "The Province and any provider of any Associated Service reserve the right, at any time, to:",
                    Object(jsx_runtime.jsxs)("ol", {
                      type: "a",
                      children: [
                        Object(jsx_runtime.jsx)("li", {
                          children: "make changes to the Services;",
                        }),
                        Object(jsx_runtime.jsx)("li", {
                          children: "stop providing the Services; and",
                        }),
                        Object(jsx_runtime.jsx)("li", {
                          children:
                            "modify these Terms of Use at any time, without notice being provided directly to you.",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            Object(jsx_runtime.jsx)("h2", {
              children: "Limitation of Liability:",
            }),
            Object(jsx_runtime.jsx)("ol", {
              start: "20",
              children: Object(jsx_runtime.jsxs)("li", {
                children: [
                  "In addition to the Province’s general ",
                  Object(jsx_runtime.jsx)("a", {
                    href: "https://www2.gov.bc.ca/gov/content/home/disclaimer",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: "Limitation of Liabilities",
                  }),
                  ", you agree that under no circumstances will the Province or the provider of any Associated Service be liable to you, a Representative or to any other individual or entity for any direct, indirect, special, incidental, consequential or other loss, claim, injury or damage, whether foreseeable or unforeseeable (including without limitation claims for damages for loss of profits or business opportunities, use of or inability to use the Services, interruptions, deletion or corruption of files, loss of programs or information, errors, defects or delays) arising out of or in any way connected with your or their access to or use of the Services or any failure by you or them to abide by these Terms of Use and whether based on contract, tort, strict liability or any other legal theory. The previous sentence will apply even if the Province or the provider of any Associated Service has been specifically advised of the possibility of any such loss, claim, injury or damage.",
                ],
              }),
            }),
            Object(jsx_runtime.jsx)("h2", {
              children: "Enforceability and Jurisdiction:",
            }),
            Object(jsx_runtime.jsxs)("ol", {
              start: "21",
              children: [
                Object(jsx_runtime.jsx)("li", {
                  children:
                    "If any term or provision of these Terms of Use is invalid, illegal or unenforceable, all other terms and provisions of these Terms of Use will nonetheless remain in full force and effect.",
                }),
                Object(jsx_runtime.jsx)("li", {
                  children:
                    "All access to the Site or use of any Services or Associated Service will be governed by, and construed and interpreted in accordance with, the laws applicable in the Province of British Columbia, Canada.",
                }),
                Object(jsx_runtime.jsx)("li", {
                  children:
                    "You hereby consent to the exclusive jurisdiction and venue of the courts of the Province of British Columbia, sitting in Victoria, for the hearing of any matter relating to or arising from these Terms of Use and/or your access to the Site or use of the Services or any Associated Service.",
                }),
              ],
            }),
          ],
        });
      function getTestData() {
        return termsOfUseTestData_content;
      }
      (getTestData.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "getTestData",
      }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES["src/modules/termsOfUseTestData.js"] = {
            name: "getTestData",
            docgenInfo: getTestData.__docgenInfo,
            path: "src/modules/termsOfUseTestData.js",
          });
      var esm = __webpack_require__(1),
        blocks = __webpack_require__(10),
        index_esm = __webpack_require__(150),
        TermsOfUse_TermsOfUse =
          (__webpack_require__(1201),
          function TermsOfUse(_ref) {
            var acceptTerms = _ref.acceptTerms,
              content = _ref.content,
              heading = _ref.heading,
              confirmText = _ref.confirmText;
            return Object(jsx_runtime.jsxs)("div", {
              children: [
                Object(jsx_runtime.jsxs)("div", {
                  className: "bcgov-non-printable bcgov-full-width",
                  children: [
                    Object(jsx_runtime.jsxs)("span", {
                      role: "button",
                      className: "bcgov-print-page print",
                      tabIndex: 0,
                      onClick: function onClick() {
                        return window.print();
                      },
                      onKeyDown: function onKeyDown() {
                        return window.print();
                      },
                      children: [
                        "Print",
                        Object(jsx_runtime.jsx)(index_esm.c, {
                          style: { marginLeft: "10px" },
                        }),
                      ],
                    }),
                    Object(jsx_runtime.jsx)("h3", { children: heading }),
                  ],
                }),
                Object(jsx_runtime.jsx)("section", {
                  className: "bcgov-scroll-box bcgov-printable",
                  children: content,
                }),
                Object(jsx_runtime.jsx)("section", {
                  className: "bcgov-non-printable pt-2",
                  children: Object(jsx_runtime.jsxs)("label", {
                    htmlFor: "acceptTerms",
                    children: [
                      Object(jsx_runtime.jsx)("input", {
                        id: "acceptTerms",
                        type: "checkbox",
                        onClick: acceptTerms,
                      }),
                      " ",
                      Object(jsx_runtime.jsx)("b", { children: confirmText }),
                      Object(jsx_runtime.jsx)("span", {
                        id: "asterisk",
                        className: "bcgov-mandatory",
                        children: "*",
                      }),
                    ],
                  }),
                }),
              ],
            });
          });
      function _extends() {
        return (_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      (TermsOfUse_TermsOfUse.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "TermsOfUse",
        props: {
          acceptTerms: {
            type: { name: "func" },
            required: !0,
            description: "",
          },
          content: { type: { name: "element" }, required: !0, description: "" },
          heading: { type: { name: "string" }, required: !0, description: "" },
          confirmText: {
            type: { name: "string" },
            required: !0,
            description: "",
          },
        },
      }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            "src/components/terms-of-use/TermsOfUse.js"
          ] = {
            name: "TermsOfUse",
            docgenInfo: TermsOfUse_TermsOfUse.__docgenInfo,
            path: "src/components/terms-of-use/TermsOfUse.js",
          });
      const layoutProps = {};
      function MDXContent({ components: components, ...props }) {
        return Object(esm.mdx)(
          "wrapper",
          _extends({}, layoutProps, props, {
            components: components,
            mdxType: "MDXLayout",
          }),
          Object(esm.mdx)(blocks.Meta, {
            title: "TermsOfUse",
            component: TermsOfUse_TermsOfUse,
            mdxType: "Meta",
          }),
          Object(esm.mdx)("h1", { id: "terms-of-use" }, "Terms Of Use"),
          Object(esm.mdx)(
            "p",
            null,
            "The Terms of Use, or sometimes known as the Electronic Service Agreement, are used when you\nneed to present terms/conditions to the user which they must be aware of and consent to\nprior to proceeding with their process in your application."
          ),
          Object(esm.mdx)("h2", { id: "api" }, "API"),
          Object(esm.mdx)(
            "table",
            null,
            Object(esm.mdx)(
              "thead",
              { parentName: "table" },
              Object(esm.mdx)(
                "tr",
                { parentName: "thead" },
                Object(esm.mdx)(
                  "th",
                  _extends({ parentName: "tr" }, { align: null }),
                  "Prop"
                ),
                Object(esm.mdx)(
                  "th",
                  _extends({ parentName: "tr" }, { align: null }),
                  "Type"
                ),
                Object(esm.mdx)(
                  "th",
                  _extends({ parentName: "tr" }, { align: null }),
                  "Required"
                ),
                Object(esm.mdx)(
                  "th",
                  _extends({ parentName: "tr" }, { align: null }),
                  "Description"
                ),
                Object(esm.mdx)(
                  "th",
                  _extends({ parentName: "tr" }, { align: null }),
                  "Default"
                )
              )
            ),
            Object(esm.mdx)(
              "tbody",
              { parentName: "table" },
              Object(esm.mdx)(
                "tr",
                { parentName: "tbody" },
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "acceptTerms"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "function"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "true"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "describes what happens when user accepts the terms of use"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null })
                )
              ),
              Object(esm.mdx)(
                "tr",
                { parentName: "tbody" },
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "content"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "element"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "true"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "jsx representing the content of the terms of use"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null })
                )
              ),
              Object(esm.mdx)(
                "tr",
                { parentName: "tbody" },
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "heading"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "string"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "true"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "value of the heading for the terms of use"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null })
                )
              ),
              Object(esm.mdx)(
                "tr",
                { parentName: "tbody" },
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "confirmText"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "string"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "true"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "text for the accept terms section"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null })
                )
              )
            )
          ),
          Object(esm.mdx)("br", null),
          Object(esm.mdx)(
            "h2",
            { id: "basic-terms-of-use" },
            "Basic Terms of Use"
          ),
          Object(esm.mdx)(
            "p",
            null,
            "The typical terms of use, with the ability to print the terms."
          ),
          Object(esm.mdx)(blocks.Story, {
            name: "Terms of Use",
            id: "terms-of-use--default",
            mdxType: "Story",
          }),
          Object(esm.mdx)(
            "pre",
            null,
            Object(esm.mdx)(
              "code",
              _extends({ parentName: "pre" }, { className: "language-bash" }),
              'const heading = "Terms of Use";\n\nconst confirmText = "I accept these terms and conditions";\n\nconst content = getTestData();\n\n<TermsOfUse\n  acceptTerms={action("accept terms of use")}\n  content={content}\n  heading={heading}\n  confirmText={confirmText}\n/>\n'
            )
          )
        );
      }
      MDXContent.isMDXComponent = !0;
      __webpack_exports__.default = {
        title: "Terms of Use",
        component: TermsOfUse_TermsOfUse,
        parameters: { docs: { page: MDXContent } },
      };
      var TermsOfUse_stories_content = getTestData(),
        termsOfUseComponent = Object(jsx_runtime.jsx)(TermsOfUse_TermsOfUse, {
          acceptTerms: Object(dist.action)("accept terms of use"),
          content: TermsOfUse_stories_content,
          heading: "Terms of Use",
          confirmText: "I accept these terms and conditions",
        }),
        Default = function Default() {
          return termsOfUseComponent;
        },
        Mobile = function Mobile() {
          return termsOfUseComponent;
        };
      (Mobile.parameters = { viewport: { defaultViewport: "mobile2" } }),
        (Default.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "Default",
        }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            "src/components/terms-of-use/TermsOfUse.stories.js"
          ] = {
            name: "Default",
            docgenInfo: Default.__docgenInfo,
            path: "src/components/terms-of-use/TermsOfUse.stories.js",
          }),
        (Mobile.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "Mobile",
        }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            "src/components/terms-of-use/TermsOfUse.stories.js"
          ] = {
            name: "Mobile",
            docgenInfo: Mobile.__docgenInfo,
            path: "src/components/terms-of-use/TermsOfUse.stories.js",
          });
    },
    1213: function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, "WithText", function () {
          return Callout_stories_WithText;
        }),
        __webpack_require__.d(__webpack_exports__, "WithCheckbox", function () {
          return Callout_stories_WithCheckbox;
        }),
        __webpack_require__.d(__webpack_exports__, "Mobile", function () {
          return Callout_stories_Mobile;
        });
      var jsx_runtime = __webpack_require__(3),
        dist = (__webpack_require__(2), __webpack_require__(41)),
        esm = __webpack_require__(1),
        blocks = __webpack_require__(10),
        Callout_Callout =
          (__webpack_require__(1132),
          function Callout(_ref) {
            var text = _ref.text,
              checkboxLabel = _ref.checkboxLabel,
              agreeCallout = _ref.agreeCallout,
              styling = checkboxLabel
                ? "bcgov-callout-checkbox"
                : "bcgov-callout";
            return Object(jsx_runtime.jsxs)("div", {
              className: styling,
              children: [
                Object(jsx_runtime.jsx)("p", { children: text }),
                checkboxLabel &&
                  Object(jsx_runtime.jsxs)("label", {
                    style: { float: "right" },
                    htmlFor: "agreeCallout",
                    children: [
                      Object(jsx_runtime.jsx)("input", {
                        id: "agreeCallout",
                        type: "checkbox",
                        onClick: agreeCallout,
                      }),
                      " ",
                      Object(jsx_runtime.jsx)("b", { children: checkboxLabel }),
                      Object(jsx_runtime.jsx)("span", {
                        id: "asterisk",
                        className: "bcgov-mandatory",
                        children: "*",
                      }),
                    ],
                  }),
              ],
            });
          });
      function _extends() {
        return (_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      (Callout_Callout.defaultProps = {
        agreeCallout: function agreeCallout() {},
        checkboxLabel: "",
      }),
        (Callout_Callout.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "Callout",
          props: {
            agreeCallout: {
              defaultValue: { value: "() => {}", computed: !1 },
              type: { name: "func" },
              required: !1,
              description: "",
            },
            checkboxLabel: {
              defaultValue: { value: '""', computed: !1 },
              type: { name: "string" },
              required: !1,
              description: "",
            },
            text: { type: { name: "string" }, required: !0, description: "" },
          },
        }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES["src/components/callout/Callout.js"] = {
            name: "Callout",
            docgenInfo: Callout_Callout.__docgenInfo,
            path: "src/components/callout/Callout.js",
          });
      const layoutProps = {};
      function MDXContent({ components: components, ...props }) {
        return Object(esm.mdx)(
          "wrapper",
          _extends({}, layoutProps, props, {
            components: components,
            mdxType: "MDXLayout",
          }),
          Object(esm.mdx)(blocks.Meta, {
            title: "Callout",
            component: Callout_Callout,
            mdxType: "Meta",
          }),
          Object(esm.mdx)("h1", { id: "callout" }, "Callout"),
          Object(esm.mdx)(
            "p",
            null,
            "Callouts are an excerpt of text that has been pulled out and used as a visual clue to draw the eye to the text. They are used\nto help direct a user's attention to important pieces of information."
          ),
          Object(esm.mdx)("h2", { id: "when-to-use" }, "When to Use"),
          Object(esm.mdx)(
            "p",
            null,
            "Differentiating a block of text from the content that surrounds it, for example:"
          ),
          Object(esm.mdx)(
            "ul",
            null,
            Object(esm.mdx)(
              "li",
              { parentName: "ul" },
              "Important snippets of information"
            ),
            Object(esm.mdx)("li", { parentName: "ul" }, "Quotes"),
            Object(esm.mdx)("li", { parentName: "ul" }, "Examples"),
            Object(esm.mdx)(
              "li",
              { parentName: "ul" },
              "Additional information about the page"
            )
          ),
          Object(esm.mdx)("h2", { id: "when-not-to-use" }, "When not to Use"),
          Object(esm.mdx)(
            "ul",
            null,
            Object(esm.mdx)(
              "li",
              { parentName: "ul" },
              "Warning notifications"
            ),
            Object(esm.mdx)("li", { parentName: "ul" }, "Page alerts")
          ),
          Object(esm.mdx)(
            "p",
            null,
            "Use callouts very sparingly - it’s less effective if it’s overused."
          ),
          Object(esm.mdx)("h2", { id: "api" }, "API"),
          Object(esm.mdx)(
            "table",
            null,
            Object(esm.mdx)(
              "thead",
              { parentName: "table" },
              Object(esm.mdx)(
                "tr",
                { parentName: "thead" },
                Object(esm.mdx)(
                  "th",
                  _extends({ parentName: "tr" }, { align: null }),
                  "Prop"
                ),
                Object(esm.mdx)(
                  "th",
                  _extends({ parentName: "tr" }, { align: null }),
                  "Type"
                ),
                Object(esm.mdx)(
                  "th",
                  _extends({ parentName: "tr" }, { align: null }),
                  "Required"
                ),
                Object(esm.mdx)(
                  "th",
                  _extends({ parentName: "tr" }, { align: null }),
                  "Description"
                ),
                Object(esm.mdx)(
                  "th",
                  _extends({ parentName: "tr" }, { align: null }),
                  "Default"
                )
              )
            ),
            Object(esm.mdx)(
              "tbody",
              { parentName: "table" },
              Object(esm.mdx)(
                "tr",
                { parentName: "tbody" },
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "text"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "string"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "true"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "value of the text for the callout"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null })
                )
              ),
              Object(esm.mdx)(
                "tr",
                { parentName: "tbody" },
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "checkboxLabel"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "string"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "false"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "value of the label for the checkbox if it exists"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  '""'
                )
              ),
              Object(esm.mdx)(
                "tr",
                { parentName: "tbody" },
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "agreeCallout"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "func"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "false"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "function to execute on callout checkbox click"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null })
                )
              )
            )
          ),
          Object(esm.mdx)("br", null),
          Object(esm.mdx)("h2", { id: "with-text" }, "With Text"),
          Object(esm.mdx)("p", null, "Callout with just basic text."),
          Object(esm.mdx)(blocks.Story, {
            name: "With Text",
            id: "callout--with-text",
            mdxType: "Story",
          }),
          Object(esm.mdx)(
            "pre",
            null,
            Object(esm.mdx)(
              "code",
              _extends({ parentName: "pre" }, { className: "language-bash" }),
              "<Callout text={text} />\n"
            )
          ),
          Object(esm.mdx)("h2", { id: "with-checkbox" }, "With Checkbox"),
          Object(esm.mdx)(
            "p",
            null,
            "Callout with text and a checkbox to confirm/agree."
          ),
          Object(esm.mdx)(blocks.Story, {
            name: "With Checkbox",
            id: "callout--with-checkbox",
            mdxType: "Story",
          }),
          Object(esm.mdx)(
            "pre",
            null,
            Object(esm.mdx)(
              "code",
              _extends({ parentName: "pre" }, { className: "language-bash" }),
              '<Callout\n  text={text}\n  checkboxLabel="I agree"\n  agreeCallout={action("onAgreeCallout")}\n/>\n'
            )
          )
        );
      }
      MDXContent.isMDXComponent = !0;
      __webpack_exports__.default = {
        title: "Callout",
        component: Callout_Callout,
        parameters: { docs: { page: MDXContent } },
      };
      var Callout_stories_text =
          "By March 1, 2018, eligible residents of B.C. are expected to renew enrolment in the Medical Services Plan (MSP) and get a BC Services Card.",
        Callout_stories_WithText = function WithText() {
          return Object(jsx_runtime.jsx)(Callout_Callout, {
            text: Callout_stories_text,
          });
        },
        Callout_stories_WithCheckbox = function WithCheckbox() {
          return Object(jsx_runtime.jsx)(Callout_Callout, {
            text: Callout_stories_text,
            checkboxLabel: "I agree",
            agreeCallout: Object(dist.action)("onAgreeCallout"),
          });
        },
        Callout_stories_Mobile = function Mobile() {
          return Object(jsx_runtime.jsx)(Callout_Callout, {
            text: Callout_stories_text,
          });
        };
      (Callout_stories_Mobile.parameters = {
        viewport: { defaultViewport: "mobile2" },
      }),
        (Callout_stories_WithText.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "WithText",
        }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            "src/components/callout/Callout.stories.js"
          ] = {
            name: "WithText",
            docgenInfo: Callout_stories_WithText.__docgenInfo,
            path: "src/components/callout/Callout.stories.js",
          }),
        (Callout_stories_WithCheckbox.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "WithCheckbox",
        }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            "src/components/callout/Callout.stories.js"
          ] = {
            name: "WithCheckbox",
            docgenInfo: Callout_stories_WithCheckbox.__docgenInfo,
            path: "src/components/callout/Callout.stories.js",
          }),
        (Callout_stories_Mobile.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "Mobile",
        }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            "src/components/callout/Callout.stories.js"
          ] = {
            name: "Mobile",
            docgenInfo: Callout_stories_Mobile.__docgenInfo,
            path: "src/components/callout/Callout.stories.js",
          });
    },
    1214: function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, "Default", function () {
          return Default;
        }),
        __webpack_require__.d(__webpack_exports__, "WithLabel", function () {
          return WithLabel;
        }),
        __webpack_require__.d(__webpack_exports__, "Mobile", function () {
          return Mobile;
        });
      var jsx_runtime = __webpack_require__(3),
        dist = (__webpack_require__(2), __webpack_require__(165)),
        esm = __webpack_require__(1),
        blocks = __webpack_require__(10),
        react_datepicker_min = __webpack_require__(543),
        react_datepicker_min_default = __webpack_require__.n(
          react_datepicker_min
        ),
        index_esm = __webpack_require__(95),
        DatePick_DatePick =
          (__webpack_require__(1139),
          __webpack_require__(1140),
          function DatePick(_ref) {
            var isRequired = _ref.isRequired,
              label = _ref.label,
              selectedDate = _ref.selectedDate,
              setSelectedDate = _ref.setSelectedDate,
              asterisk = "";
            return (
              isRequired &&
                (asterisk = Object(jsx_runtime.jsx)("span", {
                  id: "asterisk",
                  className: "bcgov-mandatory",
                  children: "*",
                })),
              Object(jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                  label &&
                    Object(jsx_runtime.jsxs)("div", {
                      className: "bcgov-input-label",
                      children: [
                        Object(jsx_runtime.jsx)("label", {
                          htmlFor: label,
                          children: label,
                        }),
                        asterisk,
                        " ",
                      ],
                    }),
                  Object(jsx_runtime.jsxs)("div", {
                    className: "bcgov-flex",
                    children: [
                      Object(jsx_runtime.jsx)(index_esm.c, {
                        size: 32,
                        className: "bcgov-move-right",
                      }),
                      Object(jsx_runtime.jsx)(react_datepicker_min_default.a, {
                        selected: selectedDate,
                        onChange: setSelectedDate,
                      }),
                    ],
                  }),
                ],
              })
            );
          });
      function _extends() {
        return (_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      (DatePick_DatePick.defaultProps = { label: "", isRequired: !1 }),
        (DatePick_DatePick.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "DatePick",
          props: {
            label: {
              defaultValue: { value: '""', computed: !1 },
              type: { name: "string" },
              required: !1,
              description: "",
            },
            isRequired: {
              defaultValue: { value: "false", computed: !1 },
              type: { name: "bool" },
              required: !1,
              description: "",
            },
            selectedDate: {
              type: { name: "instanceOf", value: "Date" },
              required: !0,
              description: "",
            },
            setSelectedDate: {
              type: { name: "func" },
              required: !0,
              description: "",
            },
          },
        }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES["src/components/date-pick/DatePick.js"] = {
            name: "DatePick",
            docgenInfo: DatePick_DatePick.__docgenInfo,
            path: "src/components/date-pick/DatePick.js",
          });
      const layoutProps = {};
      function MDXContent({ components: components, ...props }) {
        return Object(esm.mdx)(
          "wrapper",
          _extends({}, layoutProps, props, {
            components: components,
            mdxType: "MDXLayout",
          }),
          Object(esm.mdx)(blocks.Meta, {
            title: "DatePick",
            component: DatePick_DatePick,
            mdxType: "Meta",
          }),
          Object(esm.mdx)("h1", { id: "date-pick" }, "Date Pick"),
          Object(esm.mdx)(
            "p",
            null,
            "Date picker component for allowing users to select a date."
          ),
          Object(esm.mdx)("h2", { id: "api" }, "API"),
          Object(esm.mdx)(
            "table",
            null,
            Object(esm.mdx)(
              "thead",
              { parentName: "table" },
              Object(esm.mdx)(
                "tr",
                { parentName: "thead" },
                Object(esm.mdx)(
                  "th",
                  _extends({ parentName: "tr" }, { align: null }),
                  "Prop"
                ),
                Object(esm.mdx)(
                  "th",
                  _extends({ parentName: "tr" }, { align: null }),
                  "Type"
                ),
                Object(esm.mdx)(
                  "th",
                  _extends({ parentName: "tr" }, { align: null }),
                  "Required"
                ),
                Object(esm.mdx)(
                  "th",
                  _extends({ parentName: "tr" }, { align: null }),
                  "Description"
                ),
                Object(esm.mdx)(
                  "th",
                  _extends({ parentName: "tr" }, { align: null }),
                  "Default"
                )
              )
            ),
            Object(esm.mdx)(
              "tbody",
              { parentName: "table" },
              Object(esm.mdx)(
                "tr",
                { parentName: "tbody" },
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "selectedDate"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "date"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "true"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "sets the default selected date"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null })
                )
              ),
              Object(esm.mdx)(
                "tr",
                { parentName: "tbody" },
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "setSelectedDate"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "function"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "true"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "function to set the newly selected date state"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null })
                )
              ),
              Object(esm.mdx)(
                "tr",
                { parentName: "tbody" },
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "label"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "string"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "false"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "label text to display above the date picker"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  '""'
                )
              ),
              Object(esm.mdx)(
                "tr",
                { parentName: "tbody" },
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "isRequired"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "boolean"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "false"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "determines whether date picker selection is mandatory or not"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "false"
                )
              )
            )
          ),
          Object(esm.mdx)("br", null),
          Object(esm.mdx)(
            "h2",
            { id: "default-date-picker" },
            "Default Date Picker"
          ),
          Object(esm.mdx)("p", null, "Used for selecting a date."),
          Object(esm.mdx)(blocks.Story, {
            name: "Default",
            id: "date-pick--default",
            mdxType: "Story",
          }),
          Object(esm.mdx)(
            "pre",
            null,
            Object(esm.mdx)(
              "code",
              _extends({ parentName: "pre" }, { className: "language-bash" }),
              "const [selectedDate, setSelectedDate] = useState(new Date('August 19, 1975 23:15:30'));\n\n<DatePick\n  selectedDate={selectedDate}\n  setSelectedDate={setSelectedDate}\n/>\n"
            )
          ),
          Object(esm.mdx)(
            "h2",
            { id: "with-label-mandatory-date-picker" },
            "With Label (Mandatory) Date Picker"
          ),
          Object(esm.mdx)(
            "p",
            null,
            "Used when selecting a date is mandatory."
          ),
          Object(esm.mdx)(blocks.Story, {
            name: "With Label (Mandatory)",
            id: "date-pick--with-label",
            mdxType: "Story",
          }),
          Object(esm.mdx)(
            "pre",
            null,
            Object(esm.mdx)(
              "code",
              _extends({ parentName: "pre" }, { className: "language-bash" }),
              '<DatePick\n  label="Select date"\n  isRequired\n  selectedDate={selectedDate}\n  setSelectedDate={setSelectedDate}\n/>\n'
            )
          )
        );
      }
      MDXContent.isMDXComponent = !0;
      __webpack_exports__.default = {
        title: "Date Pick",
        component: DatePick_DatePick,
        parameters: { docs: { page: MDXContent } },
      };
      var store = new dist.Store({
          selectedDate: new Date("August 19, 1975 23:15:30"),
        }),
        DatePick_stories_setSelectedDate = function setSelectedDate(date) {
          return store.set({ selectedDate: date });
        },
        DatePick_stories_basicDatePickState = function basicDatePickState(
          label
        ) {
          return Object(jsx_runtime.jsx)(dist.State, {
            store: store,
            children: function children(state) {
              return [
                Object(jsx_runtime.jsx)(
                  DatePick_DatePick,
                  {
                    label: label,
                    selectedDate: state.selectedDate,
                    setSelectedDate: DatePick_stories_setSelectedDate,
                  },
                  "datepick"
                ),
              ];
            },
          });
        },
        Default = function Default() {
          return DatePick_stories_basicDatePickState();
        },
        WithLabel = function WithLabel() {
          return DatePick_stories_basicDatePickState("Select date");
        },
        Mobile = function Mobile() {
          return DatePick_stories_basicDatePickState();
        };
      (Mobile.parameters = { viewport: { defaultViewport: "mobile2" } }),
        (Default.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "Default",
        }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            "src/components/date-pick/DatePick.stories.js"
          ] = {
            name: "Default",
            docgenInfo: Default.__docgenInfo,
            path: "src/components/date-pick/DatePick.stories.js",
          }),
        (WithLabel.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "WithLabel",
        }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            "src/components/date-pick/DatePick.stories.js"
          ] = {
            name: "WithLabel",
            docgenInfo: WithLabel.__docgenInfo,
            path: "src/components/date-pick/DatePick.stories.js",
          }),
        (Mobile.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "Mobile",
        }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            "src/components/date-pick/DatePick.stories.js"
          ] = {
            name: "Mobile",
            docgenInfo: Mobile.__docgenInfo,
            path: "src/components/date-pick/DatePick.stories.js",
          });
    },
    1215: function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, "WithoutIcon", function () {
          return DisplayBox_stories_WithoutIcon;
        }),
        __webpack_require__.d(
          __webpack_exports__,
          "WithSideBySideContent",
          function () {
            return DisplayBox_stories_WithSideBySideContent;
          }
        ),
        __webpack_require__.d(__webpack_exports__, "WithIcon", function () {
          return DisplayBox_stories_WithIcon;
        }),
        __webpack_require__.d(
          __webpack_exports__,
          "WithBlueBackground",
          function () {
            return DisplayBox_stories_WithBlueBackground;
          }
        ),
        __webpack_require__.d(__webpack_exports__, "WithBorder", function () {
          return DisplayBox_stories_WithBorder;
        }),
        __webpack_require__.d(__webpack_exports__, "WithFileData", function () {
          return DisplayBox_stories_WithFileData;
        }),
        __webpack_require__.d(__webpack_exports__, "Mobile", function () {
          return DisplayBox_stories_Mobile;
        });
      var jsx_runtime = __webpack_require__(3),
        index_esm = (__webpack_require__(2), __webpack_require__(95)),
        esm = __webpack_require__(1),
        blocks = __webpack_require__(10),
        DisplayBox = __webpack_require__(79);
      function _extends() {
        return (_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      const layoutProps = {};
      function MDXContent({ components: components, ...props }) {
        return Object(esm.mdx)(
          "wrapper",
          _extends({}, layoutProps, props, {
            components: components,
            mdxType: "MDXLayout",
          }),
          Object(esm.mdx)(blocks.Meta, {
            title: "DisplayBox",
            component: DisplayBox.a,
            mdxType: "Meta",
          }),
          Object(esm.mdx)("h1", { id: "display-box" }, "Display Box"),
          Object(esm.mdx)(
            "p",
            null,
            "The display box is used to highlight or group together information with an optional icon."
          ),
          Object(esm.mdx)("h2", { id: "api" }, "API"),
          Object(esm.mdx)(
            "table",
            null,
            Object(esm.mdx)(
              "thead",
              { parentName: "table" },
              Object(esm.mdx)(
                "tr",
                { parentName: "thead" },
                Object(esm.mdx)(
                  "th",
                  _extends({ parentName: "tr" }, { align: null }),
                  "Prop"
                ),
                Object(esm.mdx)(
                  "th",
                  _extends({ parentName: "tr" }, { align: null }),
                  "Type"
                ),
                Object(esm.mdx)(
                  "th",
                  _extends({ parentName: "tr" }, { align: null }),
                  "Required"
                ),
                Object(esm.mdx)(
                  "th",
                  _extends({ parentName: "tr" }, { align: null }),
                  "Description"
                ),
                Object(esm.mdx)(
                  "th",
                  _extends({ parentName: "tr" }, { align: null }),
                  "Default"
                )
              )
            ),
            Object(esm.mdx)(
              "tbody",
              { parentName: "table" },
              Object(esm.mdx)(
                "tr",
                { parentName: "tbody" },
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "styling"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "string"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "false"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "css classnames representing the styling you wish to apply"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  '""'
                )
              ),
              Object(esm.mdx)(
                "tr",
                { parentName: "tbody" },
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "icon"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "element"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "false"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "jsx element representing the icon"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "null"
                )
              ),
              Object(esm.mdx)(
                "tr",
                { parentName: "tbody" },
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "element"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "string/element"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "true"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "display element jsx for the content of the display box"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null })
                )
              )
            )
          ),
          Object(esm.mdx)("br", null),
          Object(esm.mdx)(
            "h2",
            { id: "display-box-without-icon" },
            "Display Box (Without Icon)"
          ),
          Object(esm.mdx)(
            "p",
            null,
            "Used for content with no icon. In this case, rendering a table within the display box."
          ),
          Object(esm.mdx)(blocks.Story, {
            name: "Without Icon",
            id: "displaybox--without-icon",
            mdxType: "Story",
          }),
          Object(esm.mdx)(
            "pre",
            null,
            Object(esm.mdx)(
              "code",
              _extends({ parentName: "pre" }, { className: "language-bash" }),
              'const elements = [\n  { name: "BCeID", value: "bobross42" },\n  {\n    name: "Last Name",\n    value: "Ross"\n  },\n  { name: "First Name", value: "Bob" },\n  { name: "Email Address", value: "bob.ross@example.com" }\n];\n\nconst table = <Table elements={elements} />\n\n<DisplayBox element={table} />;\n'
            )
          ),
          Object(esm.mdx)(
            "h2",
            { id: "display-box-with-side-by-side-content" },
            "Display Box (With Side by Side Content)"
          ),
          Object(esm.mdx)("p", null, "Used for left and right column content."),
          Object(esm.mdx)(blocks.Story, {
            name: "With Side by Side Content",
            id: "displaybox--with-side-by-side-content",
            mdxType: "Story",
          }),
          Object(esm.mdx)(
            "pre",
            null,
            Object(esm.mdx)(
              "code",
              _extends({ parentName: "pre" }, { className: "language-bash" }),
              'const elements = [\n  {\n    name: <p style={{ width: "80%" }}>This is the content on the left of the display box. Maybe there will be other content on the right too.</p>,\n    value: <p style={{ width: "80%" }}>This is the content on the right of the display box. There already is content on the left side of the box.</p>\n  },\n];\n\n<DisplayBox styling="bcgov-display-left-element" element={<Table elements={elements} />} />;\n'
            )
          ),
          Object(esm.mdx)(
            "h2",
            { id: "display-box-with-icon" },
            "Display Box (With Icon)"
          ),
          Object(esm.mdx)("p", null, "Used for content with an icon."),
          Object(esm.mdx)(blocks.Story, {
            name: "With Icon",
            id: "displaybox--with-icon",
            mdxType: "Story",
          }),
          Object(esm.mdx)(
            "pre",
            null,
            Object(esm.mdx)(
              "code",
              _extends({ parentName: "pre" }, { className: "language-bash" }),
              "const icon = <MdPerson size={32} />;\n\n<DisplayBox icon={icon} element={table} />;\n"
            )
          ),
          Object(esm.mdx)(
            "h2",
            { id: "display-box-with-blue-background" },
            "Display Box (With Blue Background)"
          ),
          Object(esm.mdx)(
            "p",
            null,
            "Used for content with a gov-themed blue background."
          ),
          Object(esm.mdx)(blocks.Story, {
            name: "With Blue Background",
            id: "displaybox--with-blue-background",
            mdxType: "Story",
          }),
          Object(esm.mdx)(
            "pre",
            null,
            Object(esm.mdx)(
              "code",
              _extends({ parentName: "pre" }, { className: "language-bash" }),
              'const icon = <MdPerson size={32} />;\n\n<DisplayBox styling="bcgov-blue-background" icon={icon} element={table} />\n'
            )
          ),
          Object(esm.mdx)(
            "h2",
            { id: "display-box-with-border" },
            "Display Box (With Border)"
          ),
          Object(esm.mdx)(
            "p",
            null,
            "Used for content with a border around it."
          ),
          Object(esm.mdx)(blocks.Story, {
            name: "With Border",
            id: "displaybox--with-border",
            mdxType: "Story",
          }),
          Object(esm.mdx)(
            "pre",
            null,
            Object(esm.mdx)(
              "code",
              _extends({ parentName: "pre" }, { className: "language-bash" }),
              '<DisplayBox styling="bcgov-border-background" icon={icon} element={table} />\n'
            )
          ),
          Object(esm.mdx)(
            "h2",
            { id: "display-box-with-file-data" },
            "Display Box (With File Data)"
          ),
          Object(esm.mdx)(
            "p",
            null,
            "Used to display file information usually with description, icon, and fees."
          ),
          Object(esm.mdx)(blocks.Story, {
            name: "With File Data",
            id: "displaybox--with-file-data",
            mdxType: "Story",
          }),
          Object(esm.mdx)(
            "pre",
            null,
            Object(esm.mdx)(
              "code",
              _extends({ parentName: "pre" }, { className: "language-bash" }),
              'const fileData = [\n  {\n    name: "Description:",\n    value: "some file description",\n    isValueBold: true\n  },\n  {\n    name: "Statutory Fee:",\n    value: "$10.00",\n    isValueBold: true\n  }\n];\n\nconst generateTableData = () => {\n  return [\n    {\n      name: (\n        <div style={{ width: "80%" }}>\n          <span>file name</span>\n        </div>\n      ),\n      value: (\n        <Table elements={fileData} />\n      )\n    }\n  ];\n};\n\nconst documentIcon = (\n  <div style={{ color: "rgb(252, 186, 25)" }}>\n    <MdDescription size={32} />\n  </div>\n);\n\n<DisplayBox\n  styling="border-background display-file"\n  icon={documentIcon}\n  element={<Table elementStyles={{ columnStyle: "bcgov-vertical-middle bcgov-fill-width" }} elements={generateTableData()} />}\n/>\n'
            )
          )
        );
      }
      MDXContent.isMDXComponent = !0;
      var Table = __webpack_require__(62),
        modules_tableTestData = __webpack_require__(254);
      function getTestTable() {
        var tableTestData = Object(modules_tableTestData.a)();
        return Object(jsx_runtime.jsx)(Table.a, { elements: tableTestData });
      }
      (getTestTable.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "getTestTable",
      }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES["src/modules/displayBoxTestData.js"] = {
            name: "getTestTable",
            docgenInfo: getTestTable.__docgenInfo,
            path: "src/modules/displayBoxTestData.js",
          });
      __webpack_exports__.default = {
        title: "DisplayBox",
        component: DisplayBox.a,
        parameters: { docs: { page: MDXContent } },
      };
      var DisplayBox_stories_elements = [
          {
            name: Object(jsx_runtime.jsx)("p", {
              style: { width: "80%" },
              children:
                "This is the content on the left of the display box. Maybe there will be other content on the right too.",
            }),
            value: Object(jsx_runtime.jsx)("p", {
              style: { width: "80%" },
              children:
                "This is the content on the right of the display box. There already is content on the left side of the box.",
            }),
            isSideBySide: !0,
          },
        ],
        fileData = [
          {
            name: "Description:",
            value: "some file description",
            isValueBold: !0,
          },
          { name: "Statutory Fee:", value: "$10.00", isValueBold: !0 },
        ],
        DisplayBox_stories_generateTableData = function generateTableData() {
          return [
            {
              name: Object(jsx_runtime.jsx)("div", {
                style: { width: "80%" },
                children: Object(jsx_runtime.jsx)("span", {
                  children: "file name",
                }),
              }),
              value: Object(jsx_runtime.jsx)(Table.a, { elements: fileData }),
            },
          ];
        },
        table = getTestTable(),
        icon = Object(jsx_runtime.jsx)(index_esm.g, { size: 32 }),
        documentIcon = Object(jsx_runtime.jsx)("div", {
          style: { color: "rgb(252, 186, 25)" },
          children: Object(jsx_runtime.jsx)(index_esm.d, { size: 32 }),
        }),
        DisplayBox_stories_WithoutIcon = function WithoutIcon() {
          return Object(jsx_runtime.jsx)(DisplayBox.a, { element: table });
        },
        DisplayBox_stories_WithSideBySideContent = function WithSideBySideContent() {
          return Object(jsx_runtime.jsx)(DisplayBox.a, {
            styling: "bcgov-display-left-element",
            element: Object(jsx_runtime.jsx)(Table.a, {
              elements: DisplayBox_stories_elements,
            }),
          });
        },
        DisplayBox_stories_WithIcon = function WithIcon() {
          return Object(jsx_runtime.jsx)(DisplayBox.a, {
            icon: icon,
            element: table,
          });
        },
        DisplayBox_stories_WithBlueBackground = function WithBlueBackground() {
          return Object(jsx_runtime.jsx)(DisplayBox.a, {
            styling: "bcgov-blue-background",
            icon: icon,
            element: table,
          });
        },
        DisplayBox_stories_WithBorder = function WithBorder() {
          return Object(jsx_runtime.jsx)(DisplayBox.a, {
            styling: "bcgov-border-background",
            icon: icon,
            element: table,
          });
        },
        DisplayBox_stories_WithFileData = function WithFileData() {
          return Object(jsx_runtime.jsx)(DisplayBox.a, {
            styling: "bcgov-border-background bcgov-display-file",
            icon: documentIcon,
            element: Object(jsx_runtime.jsx)(Table.a, {
              elementStyles: {
                columnStyle: "bcgov-vertical-middle bcgov-fill-width",
              },
              elements: DisplayBox_stories_generateTableData(),
            }),
          });
        },
        DisplayBox_stories_Mobile = function Mobile() {
          return Object(jsx_runtime.jsx)(DisplayBox.a, {
            styling: "bcgov-blue-background",
            icon: icon,
            element: table,
          });
        };
      (DisplayBox_stories_Mobile.parameters = {
        viewport: { defaultViewport: "mobile2" },
      }),
        (DisplayBox_stories_WithoutIcon.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "WithoutIcon",
        }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            "src/components/display-box/DisplayBox.stories.js"
          ] = {
            name: "WithoutIcon",
            docgenInfo: DisplayBox_stories_WithoutIcon.__docgenInfo,
            path: "src/components/display-box/DisplayBox.stories.js",
          }),
        (DisplayBox_stories_WithSideBySideContent.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "WithSideBySideContent",
        }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            "src/components/display-box/DisplayBox.stories.js"
          ] = {
            name: "WithSideBySideContent",
            docgenInfo: DisplayBox_stories_WithSideBySideContent.__docgenInfo,
            path: "src/components/display-box/DisplayBox.stories.js",
          }),
        (DisplayBox_stories_WithIcon.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "WithIcon",
        }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            "src/components/display-box/DisplayBox.stories.js"
          ] = {
            name: "WithIcon",
            docgenInfo: DisplayBox_stories_WithIcon.__docgenInfo,
            path: "src/components/display-box/DisplayBox.stories.js",
          }),
        (DisplayBox_stories_WithBlueBackground.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "WithBlueBackground",
        }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            "src/components/display-box/DisplayBox.stories.js"
          ] = {
            name: "WithBlueBackground",
            docgenInfo: DisplayBox_stories_WithBlueBackground.__docgenInfo,
            path: "src/components/display-box/DisplayBox.stories.js",
          }),
        (DisplayBox_stories_WithBorder.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "WithBorder",
        }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            "src/components/display-box/DisplayBox.stories.js"
          ] = {
            name: "WithBorder",
            docgenInfo: DisplayBox_stories_WithBorder.__docgenInfo,
            path: "src/components/display-box/DisplayBox.stories.js",
          }),
        (DisplayBox_stories_WithFileData.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "WithFileData",
        }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            "src/components/display-box/DisplayBox.stories.js"
          ] = {
            name: "WithFileData",
            docgenInfo: DisplayBox_stories_WithFileData.__docgenInfo,
            path: "src/components/display-box/DisplayBox.stories.js",
          }),
        (DisplayBox_stories_Mobile.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "Mobile",
        }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            "src/components/display-box/DisplayBox.stories.js"
          ] = {
            name: "Mobile",
            docgenInfo: DisplayBox_stories_Mobile.__docgenInfo,
            path: "src/components/display-box/DisplayBox.stories.js",
          });
    },
    1216: function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(
          __webpack_exports__,
          "NoPreSelectedOption",
          function () {
            return Dropdown_stories_NoPreSelectedOption;
          }
        ),
        __webpack_require__.d(
          __webpack_exports__,
          "PreSelectedOption",
          function () {
            return Dropdown_stories_PreSelectedOption;
          }
        ),
        __webpack_require__.d(__webpack_exports__, "NoLabel", function () {
          return Dropdown_stories_NoLabel;
        }),
        __webpack_require__.d(__webpack_exports__, "Mobile", function () {
          return Dropdown_stories_Mobile;
        });
      var jsx_runtime = __webpack_require__(3),
        dist = (__webpack_require__(2), __webpack_require__(41)),
        esm = __webpack_require__(1),
        blocks = __webpack_require__(10),
        index_esm = __webpack_require__(150),
        Dropdown_Dropdown =
          (__webpack_require__(1190),
          function Dropdown(_ref) {
            var items = _ref.items,
              label = _ref.label,
              onSelect = _ref.onSelect;
            return Object(jsx_runtime.jsxs)("div", {
              className: "bcgov-form",
              children: [
                label &&
                  Object(jsx_runtime.jsx)("label", {
                    className: "bcgov-dropdown-label",
                    htmlFor: "dropdown",
                    children: label,
                  }),
                Object(jsx_runtime.jsxs)("div", {
                  className: "bcgov-dropdown-wrapper",
                  children: [
                    Object(jsx_runtime.jsx)(index_esm.a, {
                      className: "fa-chevron-down",
                    }),
                    Object(jsx_runtime.jsx)("select", {
                      className: "bcgov-dropdown",
                      name: "options",
                      id: "dropdown",
                      "data-testid": "dropdown",
                      onChange: function onChange(e) {
                        return onSelect(e.target.value);
                      },
                      children: items.map(function (val) {
                        return Object(jsx_runtime.jsx)(
                          "option",
                          { value: val, children: val },
                          val
                        );
                      }),
                    }),
                  ],
                }),
              ],
            });
          });
      function _extends() {
        return (_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      (Dropdown_Dropdown.defaultProps = { label: "" }),
        (Dropdown_Dropdown.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "Dropdown",
          props: {
            label: {
              defaultValue: { value: '""', computed: !1 },
              type: { name: "string" },
              required: !1,
              description: "",
            },
            items: {
              type: { name: "arrayOf", value: { name: "string" } },
              required: !0,
              description: "",
            },
            onSelect: { type: { name: "func" }, required: !0, description: "" },
          },
        }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES["src/components/dropdown/Dropdown.js"] = {
            name: "Dropdown",
            docgenInfo: Dropdown_Dropdown.__docgenInfo,
            path: "src/components/dropdown/Dropdown.js",
          });
      const layoutProps = {};
      function MDXContent({ components: components, ...props }) {
        return Object(esm.mdx)(
          "wrapper",
          _extends({}, layoutProps, props, {
            components: components,
            mdxType: "MDXLayout",
          }),
          Object(esm.mdx)(blocks.Meta, {
            title: "Dropdown",
            component: Dropdown_Dropdown,
            mdxType: "Meta",
          }),
          Object(esm.mdx)("h1", { id: "dropdown" }, "Dropdown"),
          Object(esm.mdx)(
            "p",
            null,
            "Dropdowns allow users to select one option from a list."
          ),
          Object(esm.mdx)("h2", { id: "when-to-use" }, "When to Use"),
          Object(esm.mdx)(
            "p",
            null,
            "When users have to select one option from a list of seven (7) to fifteen (15) different options."
          ),
          Object(esm.mdx)("h2", { id: "when-not-to-use" }, "When not to Use"),
          Object(esm.mdx)(
            "ul",
            null,
            Object(esm.mdx)(
              "li",
              { parentName: "ul" },
              "When users have to select one option from a list of less than seven (7) items. Consider using a Radio Button instead"
            ),
            Object(esm.mdx)(
              "li",
              { parentName: "ul" },
              "When users have to select multiple options from a list. Use Checkboxes instead"
            ),
            Object(esm.mdx)(
              "li",
              { parentName: "ul" },
              "When users have to select one option from a very long list such as their country of birth. Consider using a Text Input that suggests input options instead"
            )
          ),
          Object(esm.mdx)("h2", { id: "api" }, "API"),
          Object(esm.mdx)(
            "table",
            null,
            Object(esm.mdx)(
              "thead",
              { parentName: "table" },
              Object(esm.mdx)(
                "tr",
                { parentName: "thead" },
                Object(esm.mdx)(
                  "th",
                  _extends({ parentName: "tr" }, { align: null }),
                  "Prop"
                ),
                Object(esm.mdx)(
                  "th",
                  _extends({ parentName: "tr" }, { align: null }),
                  "Type"
                ),
                Object(esm.mdx)(
                  "th",
                  _extends({ parentName: "tr" }, { align: null }),
                  "Required"
                ),
                Object(esm.mdx)(
                  "th",
                  _extends({ parentName: "tr" }, { align: null }),
                  "Description"
                ),
                Object(esm.mdx)(
                  "th",
                  _extends({ parentName: "tr" }, { align: null }),
                  "Default"
                )
              )
            ),
            Object(esm.mdx)(
              "tbody",
              { parentName: "table" },
              Object(esm.mdx)(
                "tr",
                { parentName: "tbody" },
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "label"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "string"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "false"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "value of the heading label for the dropdown"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  '""'
                )
              ),
              Object(esm.mdx)(
                "tr",
                { parentName: "tbody" },
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "items"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "array"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "true"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "an array of strings representing the items in the dropdown"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null })
                )
              ),
              Object(esm.mdx)(
                "tr",
                { parentName: "tbody" },
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "onSelect"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "function"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "true"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "function describing action to take on selection of dropdown item"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null })
                )
              )
            )
          ),
          Object(esm.mdx)("br", null),
          Object(esm.mdx)(
            "h2",
            { id: "with-pre-selected-option" },
            "With Pre-Selected Option"
          ),
          Object(esm.mdx)(
            "p",
            null,
            "Basic dropdown with a pre-selected option."
          ),
          Object(esm.mdx)(blocks.Story, {
            name: "With Pre-selected Option",
            id: "dropdown--pre-selected-option",
            mdxType: "Story",
          }),
          Object(esm.mdx)(
            "pre",
            null,
            Object(esm.mdx)(
              "code",
              _extends({ parentName: "pre" }, { className: "language-bash" }),
              'const items = ["Option 1", "Option 2", "Option 3", "Option 4"];\n\n<Dropdown label="My dropdown" items={items} onSelect={onSelect} />\n'
            )
          ),
          Object(esm.mdx)(
            "h2",
            { id: "with-no-pre-selected-option" },
            "With No Pre-Selected Option"
          ),
          Object(esm.mdx)(
            "p",
            null,
            "Basic dropdown with no pre-selected option."
          ),
          Object(esm.mdx)(blocks.Story, {
            name: "With No Pre-selected Option",
            id: "dropdown--no-pre-selected-option",
            mdxType: "Story",
          }),
          Object(esm.mdx)(
            "pre",
            null,
            Object(esm.mdx)(
              "code",
              _extends({ parentName: "pre" }, { className: "language-bash" }),
              'const items = ["Select", "Option 1", "Option 2", "Option 3", "Option 4"];\n\n<Dropdown label="My dropdown" items={items} onSelect={onSelect} />\n'
            )
          ),
          Object(esm.mdx)("h2", { id: "with-no-label" }, "With No Label"),
          Object(esm.mdx)("p", null, "Basic dropdown with no label."),
          Object(esm.mdx)(blocks.Story, {
            name: "With No Label",
            id: "dropdown--no-label",
            mdxType: "Story",
          }),
          Object(esm.mdx)(
            "pre",
            null,
            Object(esm.mdx)(
              "code",
              _extends({ parentName: "pre" }, { className: "language-bash" }),
              'const items = ["Select", "Option 1", "Option 2", "Option 3", "Option 4"];\n\n<Dropdown items={items} onSelect={onSelect} />\n'
            )
          )
        );
      }
      MDXContent.isMDXComponent = !0;
      __webpack_exports__.default = {
        title: "Dropdown",
        component: Dropdown_Dropdown,
        parameters: { docs: { page: MDXContent } },
      };
      var Dropdown_stories_onSelect = function onSelect() {
          return Object(dist.action)("dropdown option selected");
        },
        itemsNoDefault = [
          "Select",
          "Option 1",
          "Option 2",
          "Option 3",
          "Option 4",
        ],
        itemsDefault = ["Option 1", "Option 2", "Option 3", "Option 4"],
        Dropdown_stories_NoPreSelectedOption = function NoPreSelectedOption() {
          return Object(jsx_runtime.jsx)(Dropdown_Dropdown, {
            label: "My dropdown",
            items: itemsNoDefault,
            onSelect: Dropdown_stories_onSelect,
          });
        },
        Dropdown_stories_PreSelectedOption = function PreSelectedOption() {
          return Object(jsx_runtime.jsx)(Dropdown_Dropdown, {
            label: "My dropdown",
            items: itemsDefault,
            onSelect: Dropdown_stories_onSelect,
          });
        },
        Dropdown_stories_NoLabel = function NoLabel() {
          return Object(jsx_runtime.jsx)(Dropdown_Dropdown, {
            items: itemsDefault,
            onSelect: Dropdown_stories_onSelect,
          });
        },
        Dropdown_stories_Mobile = function Mobile() {
          return Object(jsx_runtime.jsx)(Dropdown_Dropdown, {
            label: "My dropdown",
            items: itemsNoDefault,
            onSelect: Dropdown_stories_onSelect,
          });
        };
      (Dropdown_stories_Mobile.parameters = {
        viewport: { defaultViewport: "mobile2" },
      }),
        (Dropdown_stories_NoPreSelectedOption.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "NoPreSelectedOption",
        }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            "src/components/dropdown/Dropdown.stories.js"
          ] = {
            name: "NoPreSelectedOption",
            docgenInfo: Dropdown_stories_NoPreSelectedOption.__docgenInfo,
            path: "src/components/dropdown/Dropdown.stories.js",
          }),
        (Dropdown_stories_PreSelectedOption.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "PreSelectedOption",
        }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            "src/components/dropdown/Dropdown.stories.js"
          ] = {
            name: "PreSelectedOption",
            docgenInfo: Dropdown_stories_PreSelectedOption.__docgenInfo,
            path: "src/components/dropdown/Dropdown.stories.js",
          }),
        (Dropdown_stories_NoLabel.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "NoLabel",
        }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            "src/components/dropdown/Dropdown.stories.js"
          ] = {
            name: "NoLabel",
            docgenInfo: Dropdown_stories_NoLabel.__docgenInfo,
            path: "src/components/dropdown/Dropdown.stories.js",
          }),
        (Dropdown_stories_Mobile.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "Mobile",
        }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            "src/components/dropdown/Dropdown.stories.js"
          ] = {
            name: "Mobile",
            docgenInfo: Dropdown_stories_Mobile.__docgenInfo,
            path: "src/components/dropdown/Dropdown.stories.js",
          });
    },
    1217: function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, "Basic", function () {
          return Footer_stories_Basic;
        }),
        __webpack_require__.d(__webpack_exports__, "Mobile", function () {
          return Footer_stories_Mobile;
        });
      var jsx_runtime = __webpack_require__(3),
        esm = (__webpack_require__(2), __webpack_require__(1)),
        blocks = __webpack_require__(10),
        Footer_LinkElement =
          (__webpack_require__(1191),
          function LinkElement(url, label) {
            return Object(jsx_runtime.jsx)("li", {
              className: "nav-item m-1",
              children: Object(jsx_runtime.jsx)("a", {
                className: "nav-link",
                href: url,
                target: "_blank",
                rel: "noopener noreferrer",
                children: label,
              }),
            });
          }),
        Footer_FooterToggler = function FooterToggler() {
          return Object(jsx_runtime.jsx)("button", {
            className: "navbar-toggler",
            type: "button",
            "data-toggle": "collapse",
            "data-target": "#footerBar",
            children: Object(jsx_runtime.jsx)("span", {
              className: "navbar-toggler-icon",
            }),
          });
        },
        Footer_Footer = function Footer() {
          return Object(jsx_runtime.jsx)("footer", {
            className: "bcgov-footer",
            children: Object(jsx_runtime.jsxs)("nav", {
              className:
                "navbar navbar-expand-sm navbar-dark justify-content-end",
              "aria-label": "Footer",
              children: [
                Object(jsx_runtime.jsx)(Footer_FooterToggler, {}),
                Object(jsx_runtime.jsx)("div", {
                  className: "collapse navbar-collapse flex-grow-0",
                  id: "footerBar",
                  children: Object(jsx_runtime.jsxs)("ul", {
                    className: "navbar-nav text-right",
                    children: [
                      Footer_LinkElement(
                        "https://www2.gov.bc.ca",
                        "BC Government"
                      ),
                      Footer_LinkElement(
                        "https://www2.gov.bc.ca/gov/content/home/disclaimer",
                        "Disclaimer"
                      ),
                      Footer_LinkElement(
                        "https://www2.gov.bc.ca/gov/content/home/privacy",
                        "Privacy"
                      ),
                      Footer_LinkElement(
                        "https://www2.gov.bc.ca/gov/content/home/accessibility",
                        "Accessibility"
                      ),
                      Footer_LinkElement(
                        "https://www2.gov.bc.ca/gov/content/home/copyright",
                        "Copyright"
                      ),
                    ],
                  }),
                }),
              ],
            }),
          });
        };
      function _extends() {
        return (_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      (Footer_LinkElement.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "LinkElement",
      }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES["src/components/footer/Footer.js"] = {
            name: "LinkElement",
            docgenInfo: Footer_LinkElement.__docgenInfo,
            path: "src/components/footer/Footer.js",
          }),
        (Footer_FooterToggler.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "FooterToggler",
        }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES["src/components/footer/Footer.js"] = {
            name: "FooterToggler",
            docgenInfo: Footer_FooterToggler.__docgenInfo,
            path: "src/components/footer/Footer.js",
          }),
        (Footer_Footer.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "Footer",
        }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES["src/components/footer/Footer.js"] = {
            name: "Footer",
            docgenInfo: Footer_Footer.__docgenInfo,
            path: "src/components/footer/Footer.js",
          });
      const layoutProps = {};
      function MDXContent({ components: components, ...props }) {
        return Object(esm.mdx)(
          "wrapper",
          _extends({}, layoutProps, props, {
            components: components,
            mdxType: "MDXLayout",
          }),
          Object(esm.mdx)(blocks.Meta, {
            title: "Footer",
            component: Footer_Footer,
            mdxType: "Meta",
          }),
          Object(esm.mdx)("h1", { id: "footer" }, "Footer"),
          Object(esm.mdx)(
            "p",
            null,
            "Footers help people find what they need after scrolling to the bottom of a web page.\nThey provide supplementary information such as copyright, contact\ninformation, social media links, and links to other pages within a website."
          ),
          Object(esm.mdx)("h2", { id: "when-to-use" }, "When to Use"),
          Object(esm.mdx)(
            "p",
            null,
            "This footer must appear on all public-facing online B.C. Government content and services"
          ),
          Object(esm.mdx)("h2", { id: "when-not-to-use" }, "When not to Use"),
          Object(esm.mdx)(
            "p",
            null,
            "When the product or service is not owned by the Government of British Columbia"
          ),
          Object(esm.mdx)("h2", { id: "api" }, "API"),
          Object(esm.mdx)(
            "p",
            null,
            "No explicit properties are required to be passed in while consuming this component."
          ),
          Object(esm.mdx)("br", null),
          Object(esm.mdx)("h2", { id: "basic-footer" }, "Basic Footer"),
          Object(esm.mdx)("p", null, "Used at the bottom of the page."),
          Object(esm.mdx)(blocks.Story, {
            name: "Basic Footer",
            id: "footer--basic",
            mdxType: "Story",
          }),
          Object(esm.mdx)(
            "pre",
            null,
            Object(esm.mdx)(
              "code",
              _extends({ parentName: "pre" }, { className: "language-bash" }),
              "<Footer />;\n"
            )
          )
        );
      }
      MDXContent.isMDXComponent = !0;
      __webpack_exports__.default = {
        title: "Footer",
        component: Footer_Footer,
        parameters: { docs: { page: MDXContent } },
      };
      var Footer_stories_Basic = function Basic() {
          return Object(jsx_runtime.jsx)(Footer_Footer, {});
        },
        Footer_stories_Mobile = function Mobile() {
          return Object(jsx_runtime.jsx)(Footer_Footer, {});
        };
      (Footer_stories_Mobile.parameters = {
        viewport: { defaultViewport: "mobile2" },
      }),
        (Footer_stories_Basic.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "Basic",
        }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            "src/components/footer/Footer.stories.js"
          ] = {
            name: "Basic",
            docgenInfo: Footer_stories_Basic.__docgenInfo,
            path: "src/components/footer/Footer.stories.js",
          }),
        (Footer_stories_Mobile.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "Mobile",
        }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            "src/components/footer/Footer.stories.js"
          ] = {
            name: "Mobile",
            docgenInfo: Footer_stories_Mobile.__docgenInfo,
            path: "src/components/footer/Footer.stories.js",
          });
    },
    1218: function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, "Basic", function () {
          return Header_stories_Basic;
        }),
        __webpack_require__.d(
          __webpack_exports__,
          "WithButtonAndText",
          function () {
            return Header_stories_WithButtonAndText;
          }
        ),
        __webpack_require__.d(__webpack_exports__, "Mobile", function () {
          return Header_stories_Mobile;
        });
      var objectSpread2 = __webpack_require__(33),
        jsx_runtime = __webpack_require__(3),
        dist = (__webpack_require__(2), __webpack_require__(41)),
        node_modules_history = __webpack_require__(545),
        Button = __webpack_require__(76),
        esm = __webpack_require__(1),
        blocks = __webpack_require__(10),
        bcidSymbol =
          (__webpack_require__(1193),
          "".concat(".", "/images/bcid-symbol-rev.svg")),
        bcidLogoRev = "".concat(".", "/images/bcid-logo-rev-en.svg"),
        Header_HeadingTitle = function HeadingTitle(classNames) {
          return Object(jsx_runtime.jsx)("div", {
            className: classNames,
            "aria-labelledby": "title",
          });
        },
        Header_HeaderImage = function HeaderImage(
          history,
          classNames,
          width,
          src
        ) {
          return Object(jsx_runtime.jsx)("img", {
            className: classNames,
            src: src,
            width: width,
            height: "44",
            alt: "B.C. Government Logo",
            onClick: function onClick() {
              return history.push("/");
            },
            onKeyDown: function onKeyDown() {
              return history.push("/");
            },
          });
        },
        Header_Header = function Header(_ref) {
          var _ref$header = _ref.header,
            name = _ref$header.name,
            history = _ref$header.history,
            button = _ref$header.button,
            additionalText = _ref$header.additionalText;
          return Object(jsx_runtime.jsx)("header", {
            className: "bcgov-header",
            children: Object(jsx_runtime.jsxs)("nav", {
              className: "container-fluid navbar navbar-expand-lg navbar-dark",
              "aria-label": "Header",
              children: [
                Header_HeadingTitle("navbar-brand bcgov-pointer"),
                Header_HeaderImage(
                  history,
                  "img-fluid d-none d-md-block bcgov-pointer",
                  181,
                  bcidLogoRev
                ),
                Header_HeaderImage(
                  history,
                  "img-fluid d-md-none bcgov-pointer",
                  64,
                  bcidSymbol
                ),
                Header_HeadingTitle(
                  "bcgov-pointer navbar-brand nav-item nav-link"
                ),
                Object(jsx_runtime.jsxs)("div", {
                  className: "bcgov-flex-spacing",
                  children: [
                    Object(jsx_runtime.jsx)("div", {
                      id: "title",
                      className: "navbar-brand bcgov-vertical-center",
                      children: name,
                    }),
                    Object(jsx_runtime.jsxs)("div", {
                      children: [
                        additionalText &&
                          Object(jsx_runtime.jsx)("div", {
                            className: "navbar-brand",
                            children: additionalText,
                          }),
                        button &&
                          Object(jsx_runtime.jsx)("div", {
                            className: "navbar-brand",
                            children: button(),
                          }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        };
      function _extends() {
        return (_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      (Header_HeadingTitle.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "HeadingTitle",
      }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES["src/components/header/Header.js"] = {
            name: "HeadingTitle",
            docgenInfo: Header_HeadingTitle.__docgenInfo,
            path: "src/components/header/Header.js",
          }),
        (Header_HeaderImage.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "HeaderImage",
        }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES["src/components/header/Header.js"] = {
            name: "HeaderImage",
            docgenInfo: Header_HeaderImage.__docgenInfo,
            path: "src/components/header/Header.js",
          }),
        (Header_Header.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "Header",
          props: {
            header: {
              type: {
                name: "shape",
                value: {
                  name: { name: "string", required: !0 },
                  history: { name: "any", required: !0 },
                  button: { name: "func", required: !1 },
                  additionalText: { name: "string", required: !1 },
                },
              },
              required: !0,
              description: "",
            },
          },
        }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES["src/components/header/Header.js"] = {
            name: "Header",
            docgenInfo: Header_Header.__docgenInfo,
            path: "src/components/header/Header.js",
          });
      const layoutProps = {};
      function MDXContent({ components: components, ...props }) {
        return Object(esm.mdx)(
          "wrapper",
          _extends({}, layoutProps, props, {
            components: components,
            mdxType: "MDXLayout",
          }),
          Object(esm.mdx)(blocks.Meta, {
            title: "Header",
            component: Header_Header,
            mdxType: "Meta",
          }),
          Object(esm.mdx)("h1", { id: "header" }, "Header"),
          Object(esm.mdx)(
            "p",
            null,
            "Headers help people understand what the product or service is about while providing a consistent\nlook, feel, and functionality across government sites."
          ),
          Object(esm.mdx)("h2", { id: "when-to-use" }, "When to Use"),
          Object(esm.mdx)(
            "p",
            null,
            "This header must appear on all public-facing online B.C. Government content and services"
          ),
          Object(esm.mdx)("h2", { id: "when-not-to-use" }, "When not to Use"),
          Object(esm.mdx)(
            "p",
            null,
            "When the product or service is not owned by the Government of British Columbia"
          ),
          Object(esm.mdx)("h2", { id: "api" }, "API"),
          Object(esm.mdx)(
            "table",
            null,
            Object(esm.mdx)(
              "thead",
              { parentName: "table" },
              Object(esm.mdx)(
                "tr",
                { parentName: "thead" },
                Object(esm.mdx)(
                  "th",
                  _extends({ parentName: "tr" }, { align: null }),
                  "Prop"
                ),
                Object(esm.mdx)(
                  "th",
                  _extends({ parentName: "tr" }, { align: null }),
                  "Type"
                ),
                Object(esm.mdx)(
                  "th",
                  _extends({ parentName: "tr" }, { align: null }),
                  "Required"
                ),
                Object(esm.mdx)(
                  "th",
                  _extends({ parentName: "tr" }, { align: null }),
                  "Description"
                ),
                Object(esm.mdx)(
                  "th",
                  _extends({ parentName: "tr" }, { align: null }),
                  "Default"
                )
              )
            ),
            Object(esm.mdx)(
              "tbody",
              { parentName: "table" },
              Object(esm.mdx)(
                "tr",
                { parentName: "tbody" },
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "header"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "object"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "true"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "object with details regarding the header"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null })
                )
              )
            )
          ),
          Object(esm.mdx)("h3", { id: "header-api" }, "Header API"),
          Object(esm.mdx)(
            "p",
            null,
            "The header object has its own properties that need to be present within it, as shown below:"
          ),
          Object(esm.mdx)(
            "table",
            null,
            Object(esm.mdx)(
              "thead",
              { parentName: "table" },
              Object(esm.mdx)(
                "tr",
                { parentName: "thead" },
                Object(esm.mdx)(
                  "th",
                  _extends({ parentName: "tr" }, { align: null }),
                  "Prop"
                ),
                Object(esm.mdx)(
                  "th",
                  _extends({ parentName: "tr" }, { align: null }),
                  "Type"
                ),
                Object(esm.mdx)(
                  "th",
                  _extends({ parentName: "tr" }, { align: null }),
                  "Required"
                ),
                Object(esm.mdx)(
                  "th",
                  _extends({ parentName: "tr" }, { align: null }),
                  "Description"
                )
              )
            ),
            Object(esm.mdx)(
              "tbody",
              { parentName: "table" },
              Object(esm.mdx)(
                "tr",
                { parentName: "tbody" },
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "name"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "string"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "true"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "label for the header"
                )
              ),
              Object(esm.mdx)(
                "tr",
                { parentName: "tbody" },
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "history"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "object"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "true"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "javascript DOM history object"
                )
              )
            )
          ),
          Object(esm.mdx)("br", null),
          Object(esm.mdx)("h2", { id: "basic-header" }, "Basic Header"),
          Object(esm.mdx)("p", null, "Used at the top of the page."),
          Object(esm.mdx)(blocks.Story, {
            name: "Basic Header",
            id: "header--basic",
            mdxType: "Story",
          }),
          Object(esm.mdx)(
            "pre",
            null,
            Object(esm.mdx)(
              "code",
              _extends({ parentName: "pre" }, { className: "language-bash" }),
              'import { useHistory } from "react-router-dom";\n\nconst header = {\n  name: "Header title",\n  history: useHistory()\n};\n\n<Header header={header} />;\n'
            )
          )
        );
      }
      MDXContent.isMDXComponent = !0;
      __webpack_exports__.default = {
        title: "Header",
        component: Header_Header,
        parameters: { docs: { page: MDXContent } },
      };
      var header = {
          name: "Header title",
          history: Object(node_modules_history.a)({
            initialEntries: [{ key: "testKey" }],
          }),
        },
        headerWithButtonAndText = Object(objectSpread2.a)(
          Object(objectSpread2.a)({}, header),
          {},
          {
            button: function button() {
              return Object(jsx_runtime.jsx)(Button.a, {
                label: "Login",
                styling: "bcgov-normal-white btn",
                onClick: Object(dist.action)("button was clicked"),
              });
            },
            additionalText: "Username",
          }
        ),
        Header_stories_Basic = function Basic() {
          return Object(jsx_runtime.jsx)(Header_Header, { header: header });
        },
        Header_stories_WithButtonAndText = function WithButtonAndText() {
          return Object(jsx_runtime.jsx)(Header_Header, {
            header: headerWithButtonAndText,
          });
        },
        Header_stories_Mobile = function Mobile() {
          return Object(jsx_runtime.jsx)(Header_Header, { header: header });
        };
      (Header_stories_Mobile.parameters = {
        viewport: { defaultViewport: "mobile2" },
      }),
        (Header_stories_Basic.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "Basic",
        }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            "src/components/header/Header.stories.js"
          ] = {
            name: "Basic",
            docgenInfo: Header_stories_Basic.__docgenInfo,
            path: "src/components/header/Header.stories.js",
          }),
        (Header_stories_WithButtonAndText.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "WithButtonAndText",
        }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            "src/components/header/Header.stories.js"
          ] = {
            name: "WithButtonAndText",
            docgenInfo: Header_stories_WithButtonAndText.__docgenInfo,
            path: "src/components/header/Header.stories.js",
          }),
        (Header_stories_Mobile.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "Mobile",
        }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            "src/components/header/Header.stories.js"
          ] = {
            name: "Mobile",
            docgenInfo: Header_stories_Mobile.__docgenInfo,
            path: "src/components/header/Header.stories.js",
          });
    },
    1219: function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(
          __webpack_exports__,
          "EditableWhiteMandatory",
          function () {
            return Input_stories_EditableWhiteMandatory;
          }
        ),
        __webpack_require__.d(
          __webpack_exports__,
          "EditableWhiteWithLabel",
          function () {
            return Input_stories_EditableWhiteWithLabel;
          }
        ),
        __webpack_require__.d(
          __webpack_exports__,
          "EditableWhiteNoLabel",
          function () {
            return Input_stories_EditableWhiteNoLabel;
          }
        ),
        __webpack_require__.d(
          __webpack_exports__,
          "NonEditableGrey",
          function () {
            return Input_stories_NonEditableGrey;
          }
        ),
        __webpack_require__.d(
          __webpack_exports__,
          "WithErrorMessage",
          function () {
            return Input_stories_WithErrorMessage;
          }
        ),
        __webpack_require__.d(__webpack_exports__, "Mobile", function () {
          return Input_stories_Mobile;
        });
      var objectSpread2 = __webpack_require__(33),
        jsx_runtime = __webpack_require__(3),
        dist = (__webpack_require__(2), __webpack_require__(41)),
        esm = __webpack_require__(1),
        blocks = __webpack_require__(10),
        Input_Input =
          (__webpack_require__(1194),
          function Input(_ref) {
            var _ref$input = _ref.input,
              label = _ref$input.label,
              id = _ref$input.id,
              value = _ref$input.value,
              placeholder = _ref$input.placeholder,
              isRequired = _ref$input.isRequired,
              errorMsg = _ref$input.errorMsg,
              styling = _ref$input.styling,
              note = _ref$input.note,
              isReadOnly = _ref$input.isReadOnly,
              _onChange = _ref.onChange,
              asterisk = "";
            isRequired &&
              (asterisk = Object(jsx_runtime.jsx)("span", {
                id: "asterisk",
                className: "bcgov-mandatory",
                children: "*",
              }));
            var labelPart = null,
              labelPartExists = !1 !== label;
            return (
              label &&
                (labelPart = Object(jsx_runtime.jsxs)("label", {
                  htmlFor: id,
                  className: "bcgov-label",
                  children: [
                    Object(jsx_runtime.jsx)("div", {
                      className: "bcgov-input-label",
                      children: label,
                    }),
                    asterisk,
                    " ",
                    Object(jsx_runtime.jsx)("span", {
                      className: "bcgov-note",
                      children: note,
                    }),
                  ],
                })),
              Object(jsx_runtime.jsxs)("div", {
                children: [
                  labelPartExists && labelPart,
                  Object(jsx_runtime.jsx)("input", {
                    className: styling,
                    type: "text",
                    id: id,
                    defaultValue: value,
                    placeholder: placeholder,
                    readOnly: isReadOnly,
                    onChange: function onChange(event) {
                      return _onChange(event.target.value);
                    },
                  }),
                  Object(jsx_runtime.jsx)("br", {}),
                  Object(jsx_runtime.jsx)("span", {
                    className: "bcgov-error",
                    children: errorMsg,
                  }),
                ],
              })
            );
          });
      function _extends() {
        return (_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      (Input_Input.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "Input",
        props: {
          input: {
            type: {
              name: "shape",
              value: {
                label: { name: "string", required: !1 },
                id: { name: "string", required: !0 },
                value: { name: "string", required: !1 },
                placeholder: { name: "string", required: !1 },
                isRequired: { name: "bool", required: !0 },
                errorMsg: { name: "string", required: !1 },
                styling: { name: "string", required: !0 },
                note: { name: "string", required: !1 },
                isReadOnly: { name: "bool", required: !1 },
              },
            },
            required: !0,
            description: "",
          },
          onChange: { type: { name: "func" }, required: !0, description: "" },
        },
      }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES["src/components/input/Input.js"] = {
            name: "Input",
            docgenInfo: Input_Input.__docgenInfo,
            path: "src/components/input/Input.js",
          });
      const layoutProps = {};
      function MDXContent({ components: components, ...props }) {
        return Object(esm.mdx)(
          "wrapper",
          _extends({}, layoutProps, props, {
            components: components,
            mdxType: "MDXLayout",
          }),
          Object(esm.mdx)(blocks.Meta, {
            title: "Input",
            component: Input_Input,
            mdxType: "Meta",
          }),
          Object(esm.mdx)("h1", { id: "input" }, "Input"),
          Object(esm.mdx)(
            "p",
            null,
            "Text inputs allow users to enter a single line of text."
          ),
          Object(esm.mdx)("h2", { id: "when-to-use" }, "When to Use"),
          Object(esm.mdx)(
            "ul",
            null,
            Object(esm.mdx)(
              "li",
              { parentName: "ul" },
              "Input text is no longer than a single line"
            ),
            Object(esm.mdx)(
              "li",
              { parentName: "ul" },
              "Users have to input an answer that cannot be easily predicted"
            )
          ),
          Object(esm.mdx)("h2", { id: "when-not-to-use" }, "When not to Use"),
          Object(esm.mdx)(
            "ul",
            null,
            Object(esm.mdx)(
              "li",
              { parentName: "ul" },
              "A user needs to input multiple lines of text"
            ),
            Object(esm.mdx)(
              "li",
              { parentName: "ul" },
              "Users can only choose from a selected list of responses"
            )
          ),
          Object(esm.mdx)("h2", { id: "api" }, "API"),
          Object(esm.mdx)(
            "table",
            null,
            Object(esm.mdx)(
              "thead",
              { parentName: "table" },
              Object(esm.mdx)(
                "tr",
                { parentName: "thead" },
                Object(esm.mdx)(
                  "th",
                  _extends({ parentName: "tr" }, { align: null }),
                  "Prop"
                ),
                Object(esm.mdx)(
                  "th",
                  _extends({ parentName: "tr" }, { align: null }),
                  "Type"
                ),
                Object(esm.mdx)(
                  "th",
                  _extends({ parentName: "tr" }, { align: null }),
                  "Required"
                ),
                Object(esm.mdx)(
                  "th",
                  _extends({ parentName: "tr" }, { align: null }),
                  "Description"
                ),
                Object(esm.mdx)(
                  "th",
                  _extends({ parentName: "tr" }, { align: null }),
                  "Default"
                )
              )
            ),
            Object(esm.mdx)(
              "tbody",
              { parentName: "table" },
              Object(esm.mdx)(
                "tr",
                { parentName: "tbody" },
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "input"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "object"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "true"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "object with input field details"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null })
                )
              ),
              Object(esm.mdx)(
                "tr",
                { parentName: "tbody" },
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "onChange"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "function"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "true"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "function to execute when value in input field changes"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null })
                )
              )
            )
          ),
          Object(esm.mdx)("h3", { id: "input-api" }, "Input API"),
          Object(esm.mdx)(
            "p",
            null,
            "The input object has its own properties that need to be present within it, as shown below:"
          ),
          Object(esm.mdx)(
            "table",
            null,
            Object(esm.mdx)(
              "thead",
              { parentName: "table" },
              Object(esm.mdx)(
                "tr",
                { parentName: "thead" },
                Object(esm.mdx)(
                  "th",
                  _extends({ parentName: "tr" }, { align: null }),
                  "Prop"
                ),
                Object(esm.mdx)(
                  "th",
                  _extends({ parentName: "tr" }, { align: null }),
                  "Type"
                ),
                Object(esm.mdx)(
                  "th",
                  _extends({ parentName: "tr" }, { align: null }),
                  "Required"
                ),
                Object(esm.mdx)(
                  "th",
                  _extends({ parentName: "tr" }, { align: null }),
                  "Description"
                ),
                Object(esm.mdx)(
                  "th",
                  _extends({ parentName: "tr" }, { align: null }),
                  "Default"
                )
              )
            ),
            Object(esm.mdx)(
              "tbody",
              { parentName: "table" },
              Object(esm.mdx)(
                "tr",
                { parentName: "tbody" },
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "label"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "string"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "false"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "value of the heading label for the input field"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null })
                )
              ),
              Object(esm.mdx)(
                "tr",
                { parentName: "tbody" },
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "id"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "string"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "true"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "value of the unique identifier for the input field"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null })
                )
              ),
              Object(esm.mdx)(
                "tr",
                { parentName: "tbody" },
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "value"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "string"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "false"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "actual value present in the input field"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null })
                )
              ),
              Object(esm.mdx)(
                "tr",
                { parentName: "tbody" },
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "placeholder"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "string"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "false"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "placeholder string present in the input field"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null })
                )
              ),
              Object(esm.mdx)(
                "tr",
                { parentName: "tbody" },
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "isRequired"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "boolean"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "true"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "value representing whether the input field is mandatory or not"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null })
                )
              ),
              Object(esm.mdx)(
                "tr",
                { parentName: "tbody" },
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "errorMsg"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "string"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "false"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "value to be displayed as an error message if the value entered in the input field is incorrect"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null })
                )
              ),
              Object(esm.mdx)(
                "tr",
                { parentName: "tbody" },
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "styling"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "string"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "true"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "css classes to apply styling to the input field"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null })
                )
              ),
              Object(esm.mdx)(
                "tr",
                { parentName: "tbody" },
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "note"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "string"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "false"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "note for the label of the input field"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null })
                )
              ),
              Object(esm.mdx)(
                "tr",
                { parentName: "tbody" },
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "isReadOnly"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "boolean"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "false"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "if true, the input field is non-editable"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null })
                )
              )
            )
          ),
          Object(esm.mdx)("br", null),
          Object(esm.mdx)(
            "h2",
            { id: "editable-white-with-label" },
            "Editable White With Label"
          ),
          Object(esm.mdx)(
            "p",
            null,
            "The most commonly used input field with a label heading."
          ),
          Object(esm.mdx)(blocks.Story, {
            name: "Editable White With Label",
            id: "input--editable-white-with-label",
            mdxType: "Story",
          }),
          Object(esm.mdx)(
            "pre",
            null,
            Object(esm.mdx)(
              "code",
              _extends({ parentName: "pre" }, { className: "language-bash" }),
              'const input = {\n  label: "Label Heading",\n  id: "textInputId",\n  placeholder: "Enter value",\n  isReadOnly: false,\n  isRequired: false\n};\n\n<Input\n  input={{\n    ...input,\n    styling: "bcgov-editable-white"\n  }}\n  onChange={action("onChange")}\n/>\n'
            )
          ),
          Object(esm.mdx)(
            "h2",
            { id: "editable-white-mandatory" },
            "Editable White Mandatory"
          ),
          Object(esm.mdx)("p", null, "This is a mandatory field."),
          Object(esm.mdx)(blocks.Story, {
            name: "Editable White Mandatory",
            id: "input--editable-white-mandatory",
            mdxType: "Story",
          }),
          Object(esm.mdx)(
            "pre",
            null,
            Object(esm.mdx)(
              "code",
              _extends({ parentName: "pre" }, { className: "language-bash" }),
              '<Input\n  input={{\n    ...input,\n    styling: "bcgov-editable-white",\n    isRequired: true\n  }}\n  onChange={action("onChange")}\n/>\n'
            )
          ),
          Object(esm.mdx)(
            "h2",
            { id: "editable-white-no-label" },
            "Editable White No Label"
          ),
          Object(esm.mdx)("p", null, "Input field with no label heading."),
          Object(esm.mdx)(blocks.Story, {
            name: "Editable White No Label",
            id: "input--editable-white-no-label",
            mdxType: "Story",
          }),
          Object(esm.mdx)(
            "pre",
            null,
            Object(esm.mdx)(
              "code",
              _extends({ parentName: "pre" }, { className: "language-bash" }),
              '<Input\n  input={{\n    ...input,\n    styling: "bcgov-editable-white",\n    label: ""\n  }}\n  onChange={action("onChange")}\n/>\n'
            )
          ),
          Object(esm.mdx)(
            "h2",
            { id: "non-editable-grey" },
            "Non Editable Grey"
          ),
          Object(esm.mdx)(
            "p",
            null,
            "Input field that is non-editable. Used for values that are constant."
          ),
          Object(esm.mdx)(blocks.Story, {
            name: "Non Editable Grey",
            id: "input--non-editable-grey",
            mdxType: "Story",
          }),
          Object(esm.mdx)(
            "pre",
            null,
            Object(esm.mdx)(
              "code",
              _extends({ parentName: "pre" }, { className: "language-bash" }),
              '<Input\n  input={{\n    ...input,\n    styling: "bcgov-non-editable-grey"\n  }}\n  onChange={action("onChange")}\n/>\n'
            )
          ),
          Object(esm.mdx)(
            "h2",
            { id: "with-error-message" },
            "With Error Message"
          ),
          Object(esm.mdx)(
            "p",
            null,
            "Input field with an error message, meaning that the value in the input field is incorrect."
          ),
          Object(esm.mdx)(blocks.Story, {
            name: "With Error Message",
            id: "input--with-error-message",
            mdxType: "Story",
          }),
          Object(esm.mdx)(
            "pre",
            null,
            Object(esm.mdx)(
              "code",
              _extends({ parentName: "pre" }, { className: "language-bash" }),
              '<Input\n  input={{\n    ...input,\n    styling: "bcgov-editable-white",\n    errorMsg: "There is an error.",\n    value: "some wrong value"\n  }}\n  onChange={action("onChange")}\n/>\n'
            )
          )
        );
      }
      MDXContent.isMDXComponent = !0;
      var input = {
          label: "Label Heading",
          id: "textInputId",
          placeholder: "Enter value",
          isReadOnly: !1,
          isRequired: !1,
        },
        Input_stories_EditableWhiteMandatory =
          ((__webpack_exports__.default = {
            title: "Input",
            component: Input_Input,
            parameters: { docs: { page: MDXContent } },
          }),
          function EditableWhiteMandatory() {
            return Object(jsx_runtime.jsx)(Input_Input, {
              input: Object(objectSpread2.a)(
                Object(objectSpread2.a)({}, input),
                {},
                { styling: "bcgov-editable-white", isRequired: !0 }
              ),
              onChange: Object(dist.action)("onChange"),
            });
          }),
        Input_stories_EditableWhiteWithLabel = function EditableWhiteWithLabel() {
          return Object(jsx_runtime.jsx)(Input_Input, {
            input: Object(objectSpread2.a)(
              Object(objectSpread2.a)({}, input),
              {},
              { styling: "bcgov-editable-white" }
            ),
            onChange: Object(dist.action)("onChange"),
          });
        },
        Input_stories_EditableWhiteNoLabel = function EditableWhiteNoLabel() {
          return Object(jsx_runtime.jsx)(Input_Input, {
            input: Object(objectSpread2.a)(
              Object(objectSpread2.a)({}, input),
              {},
              { styling: "bcgov-editable-white", label: "" }
            ),
            onChange: Object(dist.action)("onChange"),
          });
        },
        Input_stories_NonEditableGrey = function NonEditableGrey() {
          return Object(jsx_runtime.jsx)(Input_Input, {
            input: Object(objectSpread2.a)(
              Object(objectSpread2.a)({}, input),
              {},
              { styling: "bcgov-non-editable-grey", isReadOnly: !0 }
            ),
            onChange: Object(dist.action)("onChange"),
          });
        },
        Input_stories_WithErrorMessage = function WithErrorMessage() {
          return Object(jsx_runtime.jsx)(Input_Input, {
            input: Object(objectSpread2.a)(
              Object(objectSpread2.a)({}, input),
              {},
              {
                styling: "bcgov-editable-white",
                errorMsg: "There is an error.",
                value: "some wrong value",
              }
            ),
            onChange: Object(dist.action)("onChange"),
          });
        },
        Input_stories_Mobile = function Mobile() {
          return Object(jsx_runtime.jsx)(Input_Input, {
            input: Object(objectSpread2.a)(
              Object(objectSpread2.a)({}, input),
              {},
              { styling: "bcgov-non-editable-grey", isReadOnly: !0 }
            ),
            onChange: Object(dist.action)("onChange"),
          });
        };
      (Input_stories_Mobile.parameters = {
        viewport: { defaultViewport: "mobile2" },
      }),
        (Input_stories_EditableWhiteMandatory.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "EditableWhiteMandatory",
        }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES["src/components/input/Input.stories.js"] = {
            name: "EditableWhiteMandatory",
            docgenInfo: Input_stories_EditableWhiteMandatory.__docgenInfo,
            path: "src/components/input/Input.stories.js",
          }),
        (Input_stories_EditableWhiteWithLabel.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "EditableWhiteWithLabel",
        }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES["src/components/input/Input.stories.js"] = {
            name: "EditableWhiteWithLabel",
            docgenInfo: Input_stories_EditableWhiteWithLabel.__docgenInfo,
            path: "src/components/input/Input.stories.js",
          }),
        (Input_stories_EditableWhiteNoLabel.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "EditableWhiteNoLabel",
        }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES["src/components/input/Input.stories.js"] = {
            name: "EditableWhiteNoLabel",
            docgenInfo: Input_stories_EditableWhiteNoLabel.__docgenInfo,
            path: "src/components/input/Input.stories.js",
          }),
        (Input_stories_NonEditableGrey.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "NonEditableGrey",
        }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES["src/components/input/Input.stories.js"] = {
            name: "NonEditableGrey",
            docgenInfo: Input_stories_NonEditableGrey.__docgenInfo,
            path: "src/components/input/Input.stories.js",
          }),
        (Input_stories_WithErrorMessage.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "WithErrorMessage",
        }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES["src/components/input/Input.stories.js"] = {
            name: "WithErrorMessage",
            docgenInfo: Input_stories_WithErrorMessage.__docgenInfo,
            path: "src/components/input/Input.stories.js",
          }),
        (Input_stories_Mobile.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "Mobile",
        }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES["src/components/input/Input.stories.js"] = {
            name: "Mobile",
            docgenInfo: Input_stories_Mobile.__docgenInfo,
            path: "src/components/input/Input.stories.js",
          });
    },
    1220: function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, "Default", function () {
          return Radio_stories_Default;
        }),
        __webpack_require__.d(__webpack_exports__, "Mobile", function () {
          return Radio_stories_Mobile;
        });
      var jsx_runtime = __webpack_require__(3),
        dist = (__webpack_require__(2), __webpack_require__(41)),
        esm = __webpack_require__(1),
        blocks = __webpack_require__(10),
        Radio_Radio =
          (__webpack_require__(1195),
          function Radio(_ref) {
            var id = _ref.id,
              name = _ref.name,
              label = _ref.label,
              onSelect = _ref.onSelect;
            return Object(jsx_runtime.jsxs)("label", {
              className: "bcgov-radio",
              htmlFor: id,
              children: [
                label,
                Object(jsx_runtime.jsx)("input", {
                  type: "radio",
                  name: name,
                  id: id,
                  onChange: function onChange(e) {
                    return onSelect(e.target.id);
                  },
                }),
                Object(jsx_runtime.jsx)("span", { className: "bcgov-dot" }),
              ],
            });
          });
      function _extends() {
        return (_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      (Radio_Radio.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "Radio",
        props: {
          label: { type: { name: "string" }, required: !0, description: "" },
          name: { type: { name: "string" }, required: !0, description: "" },
          id: { type: { name: "string" }, required: !0, description: "" },
          onSelect: { type: { name: "func" }, required: !0, description: "" },
        },
      }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES["src/components/radio/Radio.js"] = {
            name: "Radio",
            docgenInfo: Radio_Radio.__docgenInfo,
            path: "src/components/radio/Radio.js",
          });
      const layoutProps = {};
      function MDXContent({ components: components, ...props }) {
        return Object(esm.mdx)(
          "wrapper",
          _extends({}, layoutProps, props, {
            components: components,
            mdxType: "MDXLayout",
          }),
          Object(esm.mdx)(blocks.Meta, {
            title: "Radio",
            component: Radio_Radio,
            mdxType: "Meta",
          }),
          Object(esm.mdx)("h1", { id: "radio" }, "Radio"),
          Object(esm.mdx)(
            "p",
            null,
            "Radio buttons are a type of input that allow users to select only one option from a list."
          ),
          Object(esm.mdx)("h2", { id: "when-to-use" }, "When to Use"),
          Object(esm.mdx)(
            "p",
            null,
            "A user can only select one option from a list"
          ),
          Object(esm.mdx)("h2", { id: "when-not-to-use" }, "When not to Use"),
          Object(esm.mdx)(
            "p",
            null,
            "A user can select more than one option from a list. In this case, use a checkbox"
          ),
          Object(esm.mdx)("h2", { id: "api" }, "API"),
          Object(esm.mdx)(
            "table",
            null,
            Object(esm.mdx)(
              "thead",
              { parentName: "table" },
              Object(esm.mdx)(
                "tr",
                { parentName: "thead" },
                Object(esm.mdx)(
                  "th",
                  _extends({ parentName: "tr" }, { align: null }),
                  "Prop"
                ),
                Object(esm.mdx)(
                  "th",
                  _extends({ parentName: "tr" }, { align: null }),
                  "Type"
                ),
                Object(esm.mdx)(
                  "th",
                  _extends({ parentName: "tr" }, { align: null }),
                  "Required"
                ),
                Object(esm.mdx)(
                  "th",
                  _extends({ parentName: "tr" }, { align: null }),
                  "Description"
                ),
                Object(esm.mdx)(
                  "th",
                  _extends({ parentName: "tr" }, { align: null }),
                  "Default"
                )
              )
            ),
            Object(esm.mdx)(
              "tbody",
              { parentName: "table" },
              Object(esm.mdx)(
                "tr",
                { parentName: "tbody" },
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "id"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "string"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "true"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "id of the radio button"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null })
                )
              ),
              Object(esm.mdx)(
                "tr",
                { parentName: "tbody" },
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "name"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "string"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "true"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "name of the radio button"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null })
                )
              ),
              Object(esm.mdx)(
                "tr",
                { parentName: "tbody" },
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "label"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "string"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "true"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "label text for the radio button"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null })
                )
              )
            )
          ),
          Object(esm.mdx)("br", null),
          Object(esm.mdx)("h2", { id: "default" }, "Default"),
          Object(esm.mdx)("p", null, "Default Radio button."),
          Object(esm.mdx)(blocks.Story, {
            name: "Default",
            id: "radio--default",
            mdxType: "Story",
          }),
          Object(esm.mdx)(
            "pre",
            null,
            Object(esm.mdx)(
              "code",
              _extends({ parentName: "pre" }, { className: "language-bash" }),
              'const label = "Yes";\n\n<Radio id="yes" name="yes" label={label} onSelect={onSelect} />\n'
            )
          )
        );
      }
      MDXContent.isMDXComponent = !0;
      __webpack_exports__.default = {
        title: "Radio",
        component: Radio_Radio,
        parameters: { docs: { page: MDXContent } },
      };
      var Radio_stories_onSelect = function onSelect() {
          return Object(dist.action)("radio selected");
        },
        Radio_stories_Default = function Default() {
          return Object(jsx_runtime.jsx)(Radio_Radio, {
            id: "yes",
            name: "yes",
            label: "Yes",
            onSelect: Radio_stories_onSelect,
          });
        },
        Radio_stories_Mobile = function Mobile() {
          return Object(jsx_runtime.jsx)(Radio_Radio, {
            id: "yes",
            name: "yes",
            label: "Yes",
            onSelect: Radio_stories_onSelect,
          });
        };
      (Radio_stories_Mobile.parameters = {
        viewport: { defaultViewport: "mobile2" },
      }),
        (Radio_stories_Default.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "Default",
        }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES["src/components/radio/Radio.stories.js"] = {
            name: "Default",
            docgenInfo: Radio_stories_Default.__docgenInfo,
            path: "src/components/radio/Radio.stories.js",
          }),
        (Radio_stories_Mobile.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "Mobile",
        }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES["src/components/radio/Radio.stories.js"] = {
            name: "Mobile",
            docgenInfo: Radio_stories_Mobile.__docgenInfo,
            path: "src/components/radio/Radio.stories.js",
          });
    },
    1221: function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, "Blue", function () {
          return Sidecard_stories_Blue;
        }),
        __webpack_require__.d(__webpack_exports__, "Grey", function () {
          return Sidecard_stories_Grey;
        }),
        __webpack_require__.d(__webpack_exports__, "BlueGrey", function () {
          return Sidecard_stories_BlueGrey;
        }),
        __webpack_require__.d(__webpack_exports__, "WithIcon", function () {
          return Sidecard_stories_WithIcon;
        }),
        __webpack_require__.d(__webpack_exports__, "Mobile", function () {
          return Sidecard_stories_Mobile;
        });
      var objectSpread2 = __webpack_require__(33),
        jsx_runtime = __webpack_require__(3),
        index_esm = (__webpack_require__(2), __webpack_require__(150)),
        esm = __webpack_require__(1),
        blocks = __webpack_require__(10),
        Sidecard_Sidecard =
          (__webpack_require__(1196),
          function Sidecard(_ref) {
            var _ref$sideCard = _ref.sideCard,
              id = _ref$sideCard.id,
              heading = _ref$sideCard.heading,
              content = _ref$sideCard.content,
              type = _ref$sideCard.type,
              image = _ref$sideCard.image,
              imageLink = _ref$sideCard.imageLink,
              isWide = _ref$sideCard.isWide,
              icon = _ref$sideCard.icon,
              sideCardCss = "bcgov-dashboard-spacing";
            isWide && (sideCardCss = "bcgov-wide-dashboard-spacing");
            var sideCardTitleCss =
              heading.length > 30
                ? "bcgov-large-title"
                : "bcgov-side-card-title";
            return Object(jsx_runtime.jsx)("div", {
              className: sideCardCss,
              style: { position: "relative" },
              children: Object(jsx_runtime.jsxs)("div", {
                className: "col-12 pt-2",
                style: { position: "relative" },
                children: [
                  Object(jsx_runtime.jsx)("p", {}),
                  "grey" === type &&
                    Object(jsx_runtime.jsxs)("section", {
                      id: id,
                      className: "bcgov-submit-container",
                      style: {
                        backgroundColor: "#F2F2F2",
                        color: "#000",
                        border: "none",
                      },
                      children: [
                        Object(jsx_runtime.jsx)("h2", {
                          style: { color: "#000" },
                          children: heading,
                        }),
                        Object(jsx_runtime.jsx)("div", {
                          className: "bcgov-submit-content",
                          children: Object(jsx_runtime.jsx)("span", {
                            children: content,
                          }),
                        }),
                      ],
                    }),
                  "blue" === type &&
                    Object(jsx_runtime.jsxs)("section", {
                      id: id,
                      className: "bcgov-submit-container",
                      children: [
                        Object(jsx_runtime.jsx)("h2", {
                          className: "bcgov-heading-style",
                          children: heading,
                        }),
                        Object(jsx_runtime.jsxs)("div", {
                          className: "bcgov-submit-content",
                          children: [
                            Object(jsx_runtime.jsx)("span", {
                              children: content,
                            }),
                            image &&
                              imageLink &&
                              Object(jsx_runtime.jsx)("a", {
                                href: imageLink,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: Object(jsx_runtime.jsx)("img", {
                                  src: image,
                                  alt: "imagelink",
                                  height: "65px",
                                  width: "310px",
                                }),
                              }),
                          ],
                        }),
                      ],
                    }),
                  "bluegrey" === type &&
                    Object(jsx_runtime.jsxs)("section", {
                      id: id,
                      className: "bcgov-bluegrey-container",
                      children: [
                        Object(jsx_runtime.jsxs)("div", {
                          className:
                            "bcgov-container-background bcgov-bluegrey-heading",
                          children: [
                            !icon &&
                              Object(jsx_runtime.jsx)("h2", {
                                className: "bcgov-heading-style",
                                children: heading,
                              }),
                            icon &&
                              Object(jsx_runtime.jsx)("h2", {
                                className: "bcgov-heading-style",
                                children: Object(jsx_runtime.jsxs)("div", {
                                  className: "bcgov-side-card-row",
                                  children: [
                                    Object(jsx_runtime.jsx)("div", {
                                      className: "bcgov-round-icon-wrapper",
                                      children: icon,
                                    }),
                                    Object(jsx_runtime.jsx)("div", {
                                      className: sideCardTitleCss,
                                      children: heading,
                                    }),
                                  ],
                                }),
                              }),
                          ],
                        }),
                        Object(jsx_runtime.jsx)("div", {
                          className: "bcgov-bluegrey-content",
                          children: Object(jsx_runtime.jsx)("span", {
                            className: "bcgov-content-style",
                            children: content,
                          }),
                        }),
                      ],
                    }),
                ],
              }),
            });
          });
      function _extends() {
        return (_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      (Sidecard_Sidecard.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "Sidecard",
        props: {
          sideCard: {
            type: {
              name: "shape",
              value: {
                id: { name: "string", required: !0 },
                heading: { name: "string", required: !0 },
                content: { name: "array", required: !0 },
                type: { name: "string", required: !0 },
                image: { name: "string", required: !1 },
                imageLink: { name: "string", required: !1 },
                isWide: { name: "bool", required: !1 },
                icon: { name: "element", required: !1 },
              },
            },
            required: !0,
            description: "",
          },
        },
      }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES["src/components/sidecard/Sidecard.js"] = {
            name: "Sidecard",
            docgenInfo: Sidecard_Sidecard.__docgenInfo,
            path: "src/components/sidecard/Sidecard.js",
          });
      const layoutProps = {};
      function MDXContent({ components: components, ...props }) {
        return Object(esm.mdx)(
          "wrapper",
          _extends({}, layoutProps, props, {
            components: components,
            mdxType: "MDXLayout",
          }),
          Object(esm.mdx)(blocks.Meta, {
            title: "Sidecard",
            component: Sidecard_Sidecard,
            mdxType: "Meta",
          }),
          Object(esm.mdx)("h1", { id: "sidecard" }, "Sidecard"),
          Object(esm.mdx)(
            "p",
            null,
            "Sidecards are an excerpt of text that has been pulled out and used as a visual clue\nto draw the eye to the text. They are used to help direct a user's attention\nto important pieces of information."
          ),
          Object(esm.mdx)("h2", { id: "when-to-use" }, "When to Use"),
          Object(esm.mdx)(
            "p",
            null,
            "Differentiating a block of text from the content that surrounds it, for example:"
          ),
          Object(esm.mdx)(
            "ul",
            null,
            Object(esm.mdx)(
              "li",
              { parentName: "ul" },
              "Important snippets of information"
            ),
            Object(esm.mdx)("li", { parentName: "ul" }, "Quotes"),
            Object(esm.mdx)("li", { parentName: "ul" }, "Examples"),
            Object(esm.mdx)(
              "li",
              { parentName: "ul" },
              "Additional information about the page"
            )
          ),
          Object(esm.mdx)("h2", { id: "when-not-to-use" }, "When not to Use"),
          Object(esm.mdx)(
            "ul",
            null,
            Object(esm.mdx)(
              "li",
              { parentName: "ul" },
              "Warning notifications"
            ),
            Object(esm.mdx)("li", { parentName: "ul" }, "Page alerts")
          ),
          Object(esm.mdx)("h2", { id: "api" }, "API"),
          Object(esm.mdx)(
            "table",
            null,
            Object(esm.mdx)(
              "thead",
              { parentName: "table" },
              Object(esm.mdx)(
                "tr",
                { parentName: "thead" },
                Object(esm.mdx)(
                  "th",
                  _extends({ parentName: "tr" }, { align: null }),
                  "Prop"
                ),
                Object(esm.mdx)(
                  "th",
                  _extends({ parentName: "tr" }, { align: null }),
                  "Type"
                ),
                Object(esm.mdx)(
                  "th",
                  _extends({ parentName: "tr" }, { align: null }),
                  "Required"
                ),
                Object(esm.mdx)(
                  "th",
                  _extends({ parentName: "tr" }, { align: null }),
                  "Description"
                ),
                Object(esm.mdx)(
                  "th",
                  _extends({ parentName: "tr" }, { align: null }),
                  "Default"
                )
              )
            ),
            Object(esm.mdx)(
              "tbody",
              { parentName: "table" },
              Object(esm.mdx)(
                "tr",
                { parentName: "tbody" },
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "sidecard"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "object"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "true"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "object with details regarding the sidecard"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null })
                )
              )
            )
          ),
          Object(esm.mdx)(
            "p",
            null,
            "The sidecard object has its own properties that need to be present within it, as shown below:"
          ),
          Object(esm.mdx)(
            "table",
            null,
            Object(esm.mdx)(
              "thead",
              { parentName: "table" },
              Object(esm.mdx)(
                "tr",
                { parentName: "thead" },
                Object(esm.mdx)(
                  "th",
                  _extends({ parentName: "tr" }, { align: null }),
                  "Prop"
                ),
                Object(esm.mdx)(
                  "th",
                  _extends({ parentName: "tr" }, { align: null }),
                  "Type"
                ),
                Object(esm.mdx)(
                  "th",
                  _extends({ parentName: "tr" }, { align: null }),
                  "Required"
                ),
                Object(esm.mdx)(
                  "th",
                  _extends({ parentName: "tr" }, { align: null }),
                  "Description"
                ),
                Object(esm.mdx)(
                  "th",
                  _extends({ parentName: "tr" }, { align: null }),
                  "Default"
                )
              )
            ),
            Object(esm.mdx)(
              "tbody",
              { parentName: "table" },
              Object(esm.mdx)(
                "tr",
                { parentName: "tbody" },
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "heading"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "string"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "true"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "text representing the label you wish to display as the heading of the sidecard"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null })
                )
              ),
              Object(esm.mdx)(
                "tr",
                { parentName: "tbody" },
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "content"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "array"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "true"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "list of strings for content to be present in the sidecard"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null })
                )
              ),
              Object(esm.mdx)(
                "tr",
                { parentName: "tbody" },
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "type"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "string"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "true"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "represents the type of sidecard you wish to render"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null })
                )
              ),
              Object(esm.mdx)(
                "tr",
                { parentName: "tbody" },
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "image"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "string"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "false"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "url to your image to display"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null })
                )
              ),
              Object(esm.mdx)(
                "tr",
                { parentName: "tbody" },
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "imageLink"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "string"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "false"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "url that your image links to on click"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null })
                )
              ),
              Object(esm.mdx)(
                "tr",
                { parentName: "tbody" },
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "isWide"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "boolean"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "false"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "indicates if your sidecard is extra wide"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "false"
                )
              ),
              Object(esm.mdx)(
                "tr",
                { parentName: "tbody" },
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "icon"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "element"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "false"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "html (jsx) representing the icon you wish to display"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null })
                )
              )
            )
          ),
          Object(esm.mdx)("br", null),
          Object(esm.mdx)(
            "h2",
            { id: "information-blue-sidecard" },
            "Information (Blue) Sidecard"
          ),
          Object(esm.mdx)(
            "p",
            null,
            "Used to provide useful additional information to compliment content present on the screen."
          ),
          Object(esm.mdx)(blocks.Story, {
            name: "Information (Blue) Sidecard",
            id: "sidecard--blue",
            mdxType: "Story",
          }),
          Object(esm.mdx)(
            "pre",
            null,
            Object(esm.mdx)(
              "code",
              _extends({ parentName: "pre" }, { className: "language-bash" }),
              'const sideCard = {\n  heading: "Heading",\n  content: [\n    "This is where I put my content for the sidecard"\n  ],\n  type: "blue"\n};\n\n<Sidecard sideCard={sideCard} />;\n'
            )
          ),
          Object(esm.mdx)(
            "h2",
            { id: "notice-grey-sidecard" },
            "Notice (Grey) Sidecard"
          ),
          Object(esm.mdx)(
            "p",
            null,
            "Used to typically provide info about a collection notice, or similar information."
          ),
          Object(esm.mdx)(blocks.Story, {
            name: "Notice (Grey) Sidecard",
            id: "sidecard--grey",
            mdxType: "Story",
          }),
          Object(esm.mdx)(
            "pre",
            null,
            Object(esm.mdx)(
              "code",
              _extends({ parentName: "pre" }, { className: "language-bash" }),
              'const sideCard = {{ ...sideCard, type: "grey" }};\n\n<Sidecard sideCard={sideCard} />;\n'
            )
          ),
          Object(esm.mdx)(
            "h2",
            { id: "information-blue-grey-sidecard" },
            "Information (Blue grey) Sidecard"
          ),
          Object(esm.mdx)(
            "p",
            null,
            "Used to provide useful additional information to compliment content present on the screen."
          ),
          Object(esm.mdx)(blocks.Story, {
            name: "Information (Blue grey) Sidecard",
            id: "sidecard--blue-grey",
            mdxType: "Story",
          }),
          Object(esm.mdx)(
            "pre",
            null,
            Object(esm.mdx)(
              "code",
              _extends({ parentName: "pre" }, { className: "language-bash" }),
              'const sideCard = {{ ...sideCard, type: "bluegrey" }};\n\n<Sidecard sideCard={sideCard} />;\n'
            )
          ),
          Object(esm.mdx)(
            "h2",
            { id: "sidecard-with-icon" },
            "Sidecard with Icon"
          ),
          Object(esm.mdx)(
            "p",
            null,
            "Can be used with any of the above types of sidecards, to add an icon to the heading."
          ),
          Object(esm.mdx)(blocks.Story, {
            name: "Sidecard with Icon",
            id: "sidecard--with-icon",
            mdxType: "Story",
          }),
          Object(esm.mdx)(
            "pre",
            null,
            Object(esm.mdx)(
              "code",
              _extends({ parentName: "pre" }, { className: "language-bash" }),
              'const sideCard = {{ ...sideCard, icon: <FaIdCard className="bcgov-side-card-icon" /> }}\n\n<Sidecard sideCard={sideCard} />;\n'
            )
          )
        );
      }
      MDXContent.isMDXComponent = !0;
      __webpack_exports__.default = {
        title: "Sidecard",
        component: Sidecard_Sidecard,
        parameters: { docs: { page: MDXContent } },
      };
      var sideCard = {
          heading: "Heading",
          content: ["This is where I put my content for the sidecard"],
          type: "blue",
          id: "bluecard",
        },
        Sidecard_stories_Blue = function Blue() {
          return Object(jsx_runtime.jsx)(Sidecard_Sidecard, {
            sideCard: sideCard,
          });
        },
        Sidecard_stories_Grey = function Grey() {
          return Object(jsx_runtime.jsx)(Sidecard_Sidecard, {
            sideCard: Object(objectSpread2.a)(
              Object(objectSpread2.a)({}, sideCard),
              {},
              { type: "grey", id: "greycard" }
            ),
          });
        },
        Sidecard_stories_BlueGrey = function BlueGrey() {
          return Object(jsx_runtime.jsx)(Sidecard_Sidecard, {
            sideCard: Object(objectSpread2.a)(
              Object(objectSpread2.a)({}, sideCard),
              {},
              { type: "bluegrey", id: "bluegreycard" }
            ),
          });
        },
        Sidecard_stories_WithIcon = function WithIcon() {
          return Object(jsx_runtime.jsx)(Sidecard_Sidecard, {
            sideCard: Object(objectSpread2.a)(
              Object(objectSpread2.a)({}, sideCard),
              {},
              {
                type: "bluegrey",
                id: "bluegreyiconcard",
                icon: Object(jsx_runtime.jsx)(index_esm.b, {
                  className: "bcgov-side-card-icon",
                }),
              }
            ),
          });
        },
        Sidecard_stories_Mobile = function Mobile() {
          return Object(jsx_runtime.jsx)(Sidecard_Sidecard, {
            sideCard: Object(objectSpread2.a)(
              Object(objectSpread2.a)({}, sideCard),
              {},
              {
                type: "bluegrey",
                id: "bluegreycard",
                icon: Object(jsx_runtime.jsx)(index_esm.b, {
                  className: "bcgov-side-card-icon",
                }),
              }
            ),
          });
        };
      (Sidecard_stories_Mobile.parameters = {
        viewport: { defaultViewport: "mobile2" },
      }),
        (Sidecard_stories_Blue.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "Blue",
        }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            "src/components/sidecard/Sidecard.stories.js"
          ] = {
            name: "Blue",
            docgenInfo: Sidecard_stories_Blue.__docgenInfo,
            path: "src/components/sidecard/Sidecard.stories.js",
          }),
        (Sidecard_stories_Grey.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "Grey",
        }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            "src/components/sidecard/Sidecard.stories.js"
          ] = {
            name: "Grey",
            docgenInfo: Sidecard_stories_Grey.__docgenInfo,
            path: "src/components/sidecard/Sidecard.stories.js",
          }),
        (Sidecard_stories_BlueGrey.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "BlueGrey",
        }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            "src/components/sidecard/Sidecard.stories.js"
          ] = {
            name: "BlueGrey",
            docgenInfo: Sidecard_stories_BlueGrey.__docgenInfo,
            path: "src/components/sidecard/Sidecard.stories.js",
          }),
        (Sidecard_stories_WithIcon.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "WithIcon",
        }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            "src/components/sidecard/Sidecard.stories.js"
          ] = {
            name: "WithIcon",
            docgenInfo: Sidecard_stories_WithIcon.__docgenInfo,
            path: "src/components/sidecard/Sidecard.stories.js",
          }),
        (Sidecard_stories_Mobile.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "Mobile",
        }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            "src/components/sidecard/Sidecard.stories.js"
          ] = {
            name: "Mobile",
            docgenInfo: Sidecard_stories_Mobile.__docgenInfo,
            path: "src/components/sidecard/Sidecard.stories.js",
          });
    },
    1222: function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, "WithLabel", function () {
          return Textarea_stories_WithLabel;
        }),
        __webpack_require__.d(__webpack_exports__, "WithoutLabel", function () {
          return Textarea_stories_WithoutLabel;
        }),
        __webpack_require__.d(__webpack_exports__, "Mobile", function () {
          return Textarea_stories_Mobile;
        });
      var jsx_runtime = __webpack_require__(3),
        dist = (__webpack_require__(2), __webpack_require__(41)),
        esm = __webpack_require__(1),
        blocks = __webpack_require__(10),
        Textarea_Textarea =
          (__webpack_require__(1202),
          function Textarea(_ref) {
            var id = _ref.id,
              isRequired = _ref.isRequired,
              label = _ref.label,
              _onChange = _ref.onChange,
              asterisk = "";
            return (
              isRequired &&
                (asterisk = Object(jsx_runtime.jsx)("span", {
                  id: "asterisk",
                  className: "bcgov-mandatory",
                  children: "*",
                })),
              Object(jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                  label &&
                    Object(jsx_runtime.jsxs)("div", {
                      className: "bcgov-input-label",
                      children: [
                        Object(jsx_runtime.jsx)("label", {
                          htmlFor: id,
                          children: label,
                        }),
                        asterisk,
                        " ",
                      ],
                    }),
                  Object(jsx_runtime.jsx)("textarea", {
                    id: id,
                    className: "bcgov-text-input",
                    rows: "8",
                    cols: "60",
                    onChange: function onChange(event) {
                      return _onChange(event.target.value);
                    },
                  }),
                ],
              })
            );
          });
      function _extends() {
        return (_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      (Textarea_Textarea.defaultProps = { label: "", isRequired: !1 }),
        (Textarea_Textarea.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "Textarea",
          props: {
            label: {
              defaultValue: { value: '""', computed: !1 },
              type: { name: "string" },
              required: !1,
              description: "",
            },
            isRequired: {
              defaultValue: { value: "false", computed: !1 },
              type: { name: "bool" },
              required: !1,
              description: "",
            },
            id: { type: { name: "string" }, required: !0, description: "" },
            onChange: { type: { name: "func" }, required: !0, description: "" },
          },
        }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES["src/components/textarea/Textarea.js"] = {
            name: "Textarea",
            docgenInfo: Textarea_Textarea.__docgenInfo,
            path: "src/components/textarea/Textarea.js",
          });
      const layoutProps = {};
      function MDXContent({ components: components, ...props }) {
        return Object(esm.mdx)(
          "wrapper",
          _extends({}, layoutProps, props, {
            components: components,
            mdxType: "MDXLayout",
          }),
          Object(esm.mdx)(blocks.Meta, {
            title: "Textarea",
            component: Textarea_Textarea,
            mdxType: "Meta",
          }),
          Object(esm.mdx)("h1", { id: "textarea" }, "Textarea"),
          Object(esm.mdx)(
            "p",
            null,
            "A textarea allows users to input multiple lines of text."
          ),
          Object(esm.mdx)("h2", { id: "when-to-use" }, "When to Use"),
          Object(esm.mdx)(
            "p",
            null,
            "Users need to enter more than a single line of text"
          ),
          Object(esm.mdx)("h2", { id: "when-not-to-use" }, "When not to Use"),
          Object(esm.mdx)(
            "p",
            null,
            "When users need to enter only one line of text, use a text input instead"
          ),
          Object(esm.mdx)("h2", { id: "api" }, "API"),
          Object(esm.mdx)(
            "table",
            null,
            Object(esm.mdx)(
              "thead",
              { parentName: "table" },
              Object(esm.mdx)(
                "tr",
                { parentName: "thead" },
                Object(esm.mdx)(
                  "th",
                  _extends({ parentName: "tr" }, { align: null }),
                  "Prop"
                ),
                Object(esm.mdx)(
                  "th",
                  _extends({ parentName: "tr" }, { align: null }),
                  "Type"
                ),
                Object(esm.mdx)(
                  "th",
                  _extends({ parentName: "tr" }, { align: null }),
                  "Required"
                ),
                Object(esm.mdx)(
                  "th",
                  _extends({ parentName: "tr" }, { align: null }),
                  "Description"
                ),
                Object(esm.mdx)(
                  "th",
                  _extends({ parentName: "tr" }, { align: null }),
                  "Default"
                )
              )
            ),
            Object(esm.mdx)(
              "tbody",
              { parentName: "table" },
              Object(esm.mdx)(
                "tr",
                { parentName: "tbody" },
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "label"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "string"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "false"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "value of the heading label for the textarea"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  '""'
                )
              ),
              Object(esm.mdx)(
                "tr",
                { parentName: "tbody" },
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "onChange"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "function"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "true"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "function describing what to do on text area value change"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null })
                )
              ),
              Object(esm.mdx)(
                "tr",
                { parentName: "tbody" },
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "id"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "string"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "true"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "value uniquely identifying the textarea"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null })
                )
              ),
              Object(esm.mdx)(
                "tr",
                { parentName: "tbody" },
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "isRequired"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "boolean"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "false"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "determines if the textarea is mandatory or not"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "false"
                )
              )
            )
          ),
          Object(esm.mdx)("br", null),
          Object(esm.mdx)("h2", { id: "with-label" }, "With Label"),
          Object(esm.mdx)(
            "p",
            null,
            "Textarea with a label for an additional description of what text needs to be entered."
          ),
          Object(esm.mdx)(blocks.Story, {
            name: "With Label",
            id: "textarea--with-label",
            mdxType: "Story",
          }),
          Object(esm.mdx)(
            "pre",
            null,
            Object(esm.mdx)(
              "code",
              _extends({ parentName: "pre" }, { className: "language-bash" }),
              '<Textarea id="1" onChange={action("onChange")} label="Can you provide more detail?" />;\n'
            )
          ),
          Object(esm.mdx)("h2", { id: "without-label" }, "Without Label"),
          Object(esm.mdx)("p", null, "Textarea without any heading label."),
          Object(esm.mdx)(blocks.Story, {
            name: "Without Label",
            id: "textarea--without-label",
            mdxType: "Story",
          }),
          Object(esm.mdx)(
            "pre",
            null,
            Object(esm.mdx)(
              "code",
              _extends({ parentName: "pre" }, { className: "language-bash" }),
              '<Textarea id="1" onChange={action("onChange")} />;\n'
            )
          )
        );
      }
      MDXContent.isMDXComponent = !0;
      __webpack_exports__.default = {
        title: "Textarea",
        component: Textarea_Textarea,
        parameters: { docs: { page: MDXContent } },
      };
      var Textarea_stories_WithLabel = function WithLabel() {
          return Object(jsx_runtime.jsx)(Textarea_Textarea, {
            onChange: Object(dist.action)("onChange"),
            label: "Can you provide more detail?",
            id: "1",
          });
        },
        Textarea_stories_WithoutLabel = function WithoutLabel() {
          return Object(jsx_runtime.jsx)(Textarea_Textarea, {
            onChange: Object(dist.action)("onChange"),
            id: "1",
          });
        },
        Textarea_stories_Mobile = function Mobile() {
          return Object(jsx_runtime.jsx)(Textarea_Textarea, {
            onChange: Object(dist.action)("onChange"),
            label: "Can you provide more detail?",
            id: "1",
          });
        };
      (Textarea_stories_Mobile.parameters = {
        viewport: { defaultViewport: "mobile2" },
      }),
        (Textarea_stories_WithLabel.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "WithLabel",
        }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            "src/components/textarea/Textarea.stories.js"
          ] = {
            name: "WithLabel",
            docgenInfo: Textarea_stories_WithLabel.__docgenInfo,
            path: "src/components/textarea/Textarea.stories.js",
          }),
        (Textarea_stories_WithoutLabel.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "WithoutLabel",
        }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            "src/components/textarea/Textarea.stories.js"
          ] = {
            name: "WithoutLabel",
            docgenInfo: Textarea_stories_WithoutLabel.__docgenInfo,
            path: "src/components/textarea/Textarea.stories.js",
          }),
        (Textarea_stories_Mobile.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "Mobile",
        }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            "src/components/textarea/Textarea.stories.js"
          ] = {
            name: "Mobile",
            docgenInfo: Textarea_stories_Mobile.__docgenInfo,
            path: "src/components/textarea/Textarea.stories.js",
          });
    },
    1224: function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, "Primary", function () {
          return Button_stories_Primary;
        }),
        __webpack_require__.d(__webpack_exports__, "Secondary", function () {
          return Button_stories_Secondary;
        }),
        __webpack_require__.d(__webpack_exports__, "Disabled", function () {
          return Button_stories_Disabled;
        }),
        __webpack_require__.d(__webpack_exports__, "HasLoader", function () {
          return Button_stories_HasLoader;
        }),
        __webpack_require__.d(__webpack_exports__, "Mobile", function () {
          return Button_stories_Mobile;
        });
      var jsx_runtime = __webpack_require__(3),
        dist = (__webpack_require__(2), __webpack_require__(41)),
        esm = __webpack_require__(1),
        blocks = __webpack_require__(10),
        Button = __webpack_require__(76);
      function _extends() {
        return (_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      const layoutProps = {};
      function MDXContent({ components: components, ...props }) {
        return Object(esm.mdx)(
          "wrapper",
          _extends({}, layoutProps, props, {
            components: components,
            mdxType: "MDXLayout",
          }),
          Object(esm.mdx)(blocks.Meta, {
            title: "Button",
            component: Button.a,
            mdxType: "Meta",
          }),
          Object(esm.mdx)("h1", { id: "button" }, "Button"),
          Object(esm.mdx)(
            "p",
            null,
            "Buttons allow users to take actions, and make choices, with a single click."
          ),
          Object(esm.mdx)("h2", { id: "api" }, "API"),
          Object(esm.mdx)(
            "table",
            null,
            Object(esm.mdx)(
              "thead",
              { parentName: "table" },
              Object(esm.mdx)(
                "tr",
                { parentName: "thead" },
                Object(esm.mdx)(
                  "th",
                  _extends({ parentName: "tr" }, { align: null }),
                  "Prop"
                ),
                Object(esm.mdx)(
                  "th",
                  _extends({ parentName: "tr" }, { align: null }),
                  "Type"
                ),
                Object(esm.mdx)(
                  "th",
                  _extends({ parentName: "tr" }, { align: null }),
                  "Required"
                ),
                Object(esm.mdx)(
                  "th",
                  _extends({ parentName: "tr" }, { align: null }),
                  "Description"
                ),
                Object(esm.mdx)(
                  "th",
                  _extends({ parentName: "tr" }, { align: null }),
                  "Default"
                )
              )
            ),
            Object(esm.mdx)(
              "tbody",
              { parentName: "table" },
              Object(esm.mdx)(
                "tr",
                { parentName: "tbody" },
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "onClick"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "function"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "true"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "function executed on button click"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null })
                )
              ),
              Object(esm.mdx)(
                "tr",
                { parentName: "tbody" },
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "label"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "string"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "true"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "text to be displayed on button"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null })
                )
              ),
              Object(esm.mdx)(
                "tr",
                { parentName: "tbody" },
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "styling"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "string"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "true"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "list of css classnames to apply styling based on (ex: normal-blue, normal-white, btn)"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null })
                )
              ),
              Object(esm.mdx)(
                "tr",
                { parentName: "tbody" },
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "disabled"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "boolean"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "false"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "indicates whether button is disabled or enabled"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "false"
                )
              ),
              Object(esm.mdx)(
                "tr",
                { parentName: "tbody" },
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "hasLoader"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "boolean"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "false"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "indicates whether you want to show a loader within button"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "false"
                )
              )
            )
          ),
          Object(esm.mdx)("br", null),
          Object(esm.mdx)("h2", { id: "primary-button" }, "Primary Button"),
          Object(esm.mdx)(
            "p",
            null,
            "Primary buttons allow users to carry out an important action on your service, such as Download or Submit."
          ),
          Object(esm.mdx)("h3", { id: "when-to-use" }, "When to Use"),
          Object(esm.mdx)(
            "p",
            null,
            "The most important actions you want users to take on your site."
          ),
          Object(esm.mdx)("h3", { id: "when-not-to-use" }, "When not to Use"),
          Object(esm.mdx)(
            "p",
            null,
            "Supporting actions on your page such as Cancel, Delete, or supporting information."
          ),
          Object(esm.mdx)(blocks.Story, {
            name: "Primary",
            id: "button--primary",
            mdxType: "Story",
          }),
          Object(esm.mdx)(
            "pre",
            null,
            Object(esm.mdx)(
              "code",
              _extends({ parentName: "pre" }, { className: "language-bash" }),
              '<Button onClick={onClick} label="Submit" styling="bcgov-normal-blue btn" />\n'
            )
          ),
          Object(esm.mdx)("h2", { id: "secondary-button" }, "Secondary Button"),
          Object(esm.mdx)(
            "p",
            null,
            "Secondary buttons allow users to carry out a supporting action on your service, such as Back or Cancel."
          ),
          Object(esm.mdx)("h3", { id: "when-to-use-1" }, "When to Use"),
          Object(esm.mdx)(
            "p",
            null,
            "Supporting actions users can take on your site."
          ),
          Object(esm.mdx)("h3", { id: "when-not-to-use-1" }, "When not to Use"),
          Object(esm.mdx)(
            "p",
            null,
            "Primary actions on your page such as Submit, or Start. Use a ",
            Object(esm.mdx)(
              "inlineCode",
              { parentName: "p" },
              "Primary Button"
            ),
            " instead."
          ),
          Object(esm.mdx)(blocks.Story, {
            name: "Secondary",
            id: "button--secondary",
            mdxType: "Story",
          }),
          Object(esm.mdx)(
            "pre",
            null,
            Object(esm.mdx)(
              "code",
              _extends({ parentName: "pre" }, { className: "language-bash" }),
              '<Button onClick={onClick} label="Submit" styling="bcgov-normal-white btn" />\n'
            )
          ),
          Object(esm.mdx)("h2", { id: "disabled-button" }, "Disabled Button"),
          Object(esm.mdx)(
            "p",
            null,
            "A button that can’t be clicked and doesn’t react to hover. A disabled button is\ngreyed out to indicate to users that they cannot undertake the action associated\nwith it. This is usually for page logic reasons."
          ),
          Object(esm.mdx)(blocks.Story, {
            name: "Disabled",
            id: "button--disabled",
            mdxType: "Story",
          }),
          Object(esm.mdx)(
            "pre",
            null,
            Object(esm.mdx)(
              "code",
              _extends({ parentName: "pre" }, { className: "language-bash" }),
              '<Button onClick={onClick} label="Disabled" styling="bcgov-normal-blue btn" disabled />\n'
            )
          ),
          Object(esm.mdx)("h2", { id: "has-loader" }, "Has Loader"),
          Object(esm.mdx)(
            "p",
            null,
            "A button that you want to display a loader within, for when an async action is\ntaking place that you want the user to wait for before proceeding."
          ),
          Object(esm.mdx)(blocks.Story, {
            name: "Has Loader",
            id: "button--has-loader",
            mdxType: "Story",
          }),
          Object(esm.mdx)(
            "pre",
            null,
            Object(esm.mdx)(
              "code",
              _extends({ parentName: "pre" }, { className: "language-bash" }),
              '<Button\n  onClick={onClick}\n  label="Has Loader"\n  styling="bcgov-normal-blue btn"\n  hasLoader\n/>\n'
            )
          )
        );
      }
      MDXContent.isMDXComponent = !0;
      __webpack_require__(530),
        (__webpack_exports__.default = {
          title: "Button",
          component: Button.a,
          parameters: { docs: { page: MDXContent } },
        });
      var Button_stories_onClick = function onClick() {
          return Object(dist.action)("button was clicked");
        },
        Button_stories_Primary = function Primary() {
          return Object(jsx_runtime.jsx)(Button.a, {
            onClick: Button_stories_onClick,
            label: "Submit",
            styling: "bcgov-normal-blue btn",
          });
        },
        Button_stories_Secondary = function Secondary() {
          return Object(jsx_runtime.jsx)(Button.a, {
            onClick: Button_stories_onClick,
            label: "Cancel",
            styling: "bcgov-normal-white btn",
          });
        },
        Button_stories_Disabled = function Disabled() {
          return Object(jsx_runtime.jsx)(Button.a, {
            onClick: Button_stories_onClick,
            label: "Disabled",
            styling: "bcgov-normal-blue btn",
            disabled: !0,
          });
        },
        Button_stories_HasLoader = function HasLoader() {
          return Object(jsx_runtime.jsx)(Button.a, {
            onClick: Button_stories_onClick,
            label: "Has Loader",
            styling: "bcgov-normal-blue btn",
            hasLoader: !0,
          });
        },
        Button_stories_Mobile = function Mobile() {
          return Object(jsx_runtime.jsx)(Button.a, {
            onClick: Button_stories_onClick,
            label: "Submit",
            styling: "bcgov-normal-blue btn",
          });
        };
      (Button_stories_Mobile.parameters = {
        viewport: { defaultViewport: "mobile2" },
      }),
        (Button_stories_Primary.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "Primary",
        }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            "src/components/button/Button.stories.js"
          ] = {
            name: "Primary",
            docgenInfo: Button_stories_Primary.__docgenInfo,
            path: "src/components/button/Button.stories.js",
          }),
        (Button_stories_Secondary.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "Secondary",
        }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            "src/components/button/Button.stories.js"
          ] = {
            name: "Secondary",
            docgenInfo: Button_stories_Secondary.__docgenInfo,
            path: "src/components/button/Button.stories.js",
          }),
        (Button_stories_Disabled.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "Disabled",
        }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            "src/components/button/Button.stories.js"
          ] = {
            name: "Disabled",
            docgenInfo: Button_stories_Disabled.__docgenInfo,
            path: "src/components/button/Button.stories.js",
          }),
        (Button_stories_HasLoader.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "HasLoader",
        }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            "src/components/button/Button.stories.js"
          ] = {
            name: "HasLoader",
            docgenInfo: Button_stories_HasLoader.__docgenInfo,
            path: "src/components/button/Button.stories.js",
          }),
        (Button_stories_Mobile.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "Mobile",
        }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            "src/components/button/Button.stories.js"
          ] = {
            name: "Mobile",
            docgenInfo: Button_stories_Mobile.__docgenInfo,
            path: "src/components/button/Button.stories.js",
          });
    },
    1225: function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, "Page", function () {
          return Loader_stories_Page;
        }),
        __webpack_require__.d(__webpack_exports__, "Container", function () {
          return Loader_stories_Container;
        }),
        __webpack_require__.d(__webpack_exports__, "Mobile", function () {
          return Loader_stories_Mobile;
        });
      var jsx_runtime = __webpack_require__(3),
        esm = (__webpack_require__(2), __webpack_require__(1)),
        blocks = __webpack_require__(10),
        Loader = __webpack_require__(117);
      function _extends() {
        return (_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      const layoutProps = {};
      function MDXContent({ components: components, ...props }) {
        return Object(esm.mdx)(
          "wrapper",
          _extends({}, layoutProps, props, {
            components: components,
            mdxType: "MDXLayout",
          }),
          Object(esm.mdx)(blocks.Meta, {
            title: "Loader",
            component: Loader.a,
            mdxType: "Meta",
          }),
          Object(esm.mdx)("h1", { id: "loader" }, "Loader"),
          Object(esm.mdx)(
            "p",
            null,
            "Loaders serve as an indicator that there is an action being awaited on (usually async)."
          ),
          Object(esm.mdx)("h2", { id: "api" }, "API"),
          Object(esm.mdx)(
            "table",
            null,
            Object(esm.mdx)(
              "thead",
              { parentName: "table" },
              Object(esm.mdx)(
                "tr",
                { parentName: "thead" },
                Object(esm.mdx)(
                  "th",
                  _extends({ parentName: "tr" }, { align: null }),
                  "Prop"
                ),
                Object(esm.mdx)(
                  "th",
                  _extends({ parentName: "tr" }, { align: null }),
                  "Type"
                ),
                Object(esm.mdx)(
                  "th",
                  _extends({ parentName: "tr" }, { align: null }),
                  "Required"
                ),
                Object(esm.mdx)(
                  "th",
                  _extends({ parentName: "tr" }, { align: null }),
                  "Description"
                ),
                Object(esm.mdx)(
                  "th",
                  _extends({ parentName: "tr" }, { align: null }),
                  "Default"
                )
              )
            ),
            Object(esm.mdx)(
              "tbody",
              { parentName: "table" },
              Object(esm.mdx)(
                "tr",
                { parentName: "tbody" },
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "page"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "boolean"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "false"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "indicates if it is a page-level loader or not"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "false"
                )
              )
            )
          ),
          Object(esm.mdx)("br", null),
          Object(esm.mdx)("h2", { id: "page-loader" }, "Page Loader"),
          Object(esm.mdx)(
            "p",
            null,
            "For usage when an entire page's contents need to be awaited on to load.\nEx: Fetching data from BC Services Card to display on the page."
          ),
          Object(esm.mdx)(blocks.Story, {
            name: "Page Loader",
            id: "loader--page",
            mdxType: "Story",
          }),
          Object(esm.mdx)(
            "pre",
            null,
            Object(esm.mdx)(
              "code",
              _extends({ parentName: "pre" }, { className: "language-bash" }),
              "<Loader page />;\n"
            )
          ),
          Object(esm.mdx)("h2", { id: "container-loader" }, "Container Loader"),
          Object(esm.mdx)(
            "p",
            null,
            "For usage when a container's contents need to be awaited on to load.\nEx: After click of a button, need to wait on an action to occur."
          ),
          Object(esm.mdx)(blocks.Story, {
            name: "Container Loader",
            id: "loader--container",
            mdxType: "Story",
          }),
          Object(esm.mdx)(
            "pre",
            null,
            Object(esm.mdx)(
              "code",
              _extends({ parentName: "pre" }, { className: "language-bash" }),
              '<div style={{ background: "rgba(225, 232, 242, 1)", width: "200px" }}>\n  <Loader />\n</div>\n'
            )
          )
        );
      }
      MDXContent.isMDXComponent = !0;
      __webpack_exports__.default = {
        title: "Loader",
        component: Loader.a,
        parameters: { docs: { page: MDXContent } },
      };
      var Loader_stories_Page = function Page() {
          return Object(jsx_runtime.jsx)(Loader.a, { page: !0 });
        },
        Loader_stories_Container = function Container() {
          return Object(jsx_runtime.jsx)("div", {
            style: { background: "rgba(225, 232, 242, 1)", width: "200px" },
            children: Object(jsx_runtime.jsx)(Loader.a, {}),
          });
        },
        Loader_stories_Mobile = function Mobile() {
          return Object(jsx_runtime.jsx)(Loader.a, { page: !0 });
        };
      (Loader_stories_Mobile.parameters = {
        viewport: { defaultViewport: "mobile2" },
      }),
        (Loader_stories_Page.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "Page",
        }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            "src/components/loader/Loader.stories.js"
          ] = {
            name: "Page",
            docgenInfo: Loader_stories_Page.__docgenInfo,
            path: "src/components/loader/Loader.stories.js",
          }),
        (Loader_stories_Container.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "Container",
        }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            "src/components/loader/Loader.stories.js"
          ] = {
            name: "Container",
            docgenInfo: Loader_stories_Container.__docgenInfo,
            path: "src/components/loader/Loader.stories.js",
          }),
        (Loader_stories_Mobile.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "Mobile",
        }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            "src/components/loader/Loader.stories.js"
          ] = {
            name: "Mobile",
            docgenInfo: Loader_stories_Mobile.__docgenInfo,
            path: "src/components/loader/Loader.stories.js",
          });
    },
    1226: function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, "WithHeader", function () {
          return Table_stories_WithHeader;
        }),
        __webpack_require__.d(
          __webpack_exports__,
          "WithoutHeader",
          function () {
            return Table_stories_WithoutHeader;
          }
        ),
        __webpack_require__.d(
          __webpack_exports__,
          "WithBlueStripe",
          function () {
            return Table_stories_WithBlueStripe;
          }
        ),
        __webpack_require__.d(
          __webpack_exports__,
          "WithBoldValues",
          function () {
            return Table_stories_WithBoldValues;
          }
        ),
        __webpack_require__.d(
          __webpack_exports__,
          "WithBoldNames",
          function () {
            return Table_stories_WithBoldNames;
          }
        ),
        __webpack_require__.d(__webpack_exports__, "WithFees", function () {
          return Table_stories_WithFees;
        }),
        __webpack_require__.d(__webpack_exports__, "Mobile", function () {
          return Table_stories_Mobile;
        });
      var objectSpread2 = __webpack_require__(33),
        jsx_runtime = __webpack_require__(3),
        esm = (__webpack_require__(2), __webpack_require__(1)),
        blocks = __webpack_require__(10),
        Table = __webpack_require__(62);
      function _extends() {
        return (_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            }
            return target;
          }).apply(this, arguments);
      }
      const layoutProps = {};
      function MDXContent({ components: components, ...props }) {
        return Object(esm.mdx)(
          "wrapper",
          _extends({}, layoutProps, props, {
            components: components,
            mdxType: "MDXLayout",
          }),
          Object(esm.mdx)(blocks.Meta, {
            title: "Table",
            component: Table.a,
            mdxType: "Meta",
          }),
          Object(esm.mdx)("h1", { id: "table" }, "Table"),
          Object(esm.mdx)(
            "p",
            null,
            "The table lets you aggregate a huge amount of data and present it in a clear and orderly way."
          ),
          Object(esm.mdx)("h2", { id: "api" }, "API"),
          Object(esm.mdx)(
            "table",
            null,
            Object(esm.mdx)(
              "thead",
              { parentName: "table" },
              Object(esm.mdx)(
                "tr",
                { parentName: "thead" },
                Object(esm.mdx)(
                  "th",
                  _extends({ parentName: "tr" }, { align: null }),
                  "Prop"
                ),
                Object(esm.mdx)(
                  "th",
                  _extends({ parentName: "tr" }, { align: null }),
                  "Type"
                ),
                Object(esm.mdx)(
                  "th",
                  _extends({ parentName: "tr" }, { align: null }),
                  "Required"
                ),
                Object(esm.mdx)(
                  "th",
                  _extends({ parentName: "tr" }, { align: null }),
                  "Description"
                ),
                Object(esm.mdx)(
                  "th",
                  _extends({ parentName: "tr" }, { align: null }),
                  "Default"
                )
              )
            ),
            Object(esm.mdx)(
              "tbody",
              { parentName: "table" },
              Object(esm.mdx)(
                "tr",
                { parentName: "tbody" },
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "heading"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "string/object"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "false"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "value representing heading to display within table"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  '""'
                )
              ),
              Object(esm.mdx)(
                "tr",
                { parentName: "tbody" },
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "elements"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "array of objects"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "false"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "content of the table"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "[]"
                )
              ),
              Object(esm.mdx)(
                "tr",
                { parentName: "tbody" },
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "styling"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "string"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "false"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "represents the styling you wish to apply for your table"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  '""'
                )
              ),
              Object(esm.mdx)(
                "tr",
                { parentName: "tbody" },
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "isFeesData"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "boolean"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "false"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "if the table data is displaying fee data or not"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "false"
                )
              ),
              Object(esm.mdx)(
                "tr",
                { parentName: "tbody" },
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "elementStyles"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "object"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "false"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "represents row and column styles you wish to apply"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "{}"
                )
              )
            )
          ),
          Object(esm.mdx)("h3", { id: "elements-api" }, "Elements API"),
          Object(esm.mdx)(
            "p",
            null,
            "The elements array contains objects of the following structure:"
          ),
          Object(esm.mdx)(
            "table",
            null,
            Object(esm.mdx)(
              "thead",
              { parentName: "table" },
              Object(esm.mdx)(
                "tr",
                { parentName: "thead" },
                Object(esm.mdx)(
                  "th",
                  _extends({ parentName: "tr" }, { align: null }),
                  "Prop"
                ),
                Object(esm.mdx)(
                  "th",
                  _extends({ parentName: "tr" }, { align: null }),
                  "Type"
                ),
                Object(esm.mdx)(
                  "th",
                  _extends({ parentName: "tr" }, { align: null }),
                  "Required"
                ),
                Object(esm.mdx)(
                  "th",
                  _extends({ parentName: "tr" }, { align: null }),
                  "Description"
                ),
                Object(esm.mdx)(
                  "th",
                  _extends({ parentName: "tr" }, { align: null }),
                  "Default"
                )
              )
            ),
            Object(esm.mdx)(
              "tbody",
              { parentName: "table" },
              Object(esm.mdx)(
                "tr",
                { parentName: "tbody" },
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "name"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "string/object"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "true"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "the key of the key:value pair in the table"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null })
                )
              ),
              Object(esm.mdx)(
                "tr",
                { parentName: "tbody" },
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "value"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "string/object"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "true"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "the value of the key:value pair in the table"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null })
                )
              ),
              Object(esm.mdx)(
                "tr",
                { parentName: "tbody" },
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "isValueBold"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "boolean"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "false"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "represents if you want your values to be bolded in the table"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "false"
                )
              ),
              Object(esm.mdx)(
                "tr",
                { parentName: "tbody" },
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "isNameBold"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "boolean"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "false"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "represents if you want your keys to be bolded in the table"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "false"
                )
              ),
              Object(esm.mdx)(
                "tr",
                { parentName: "tbody" },
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "isEmptyRow"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "boolean"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "false"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "represents if you want to have an empty row with hr tag"
                ),
                Object(esm.mdx)(
                  "td",
                  _extends({ parentName: "tr" }, { align: null }),
                  "false"
                )
              )
            )
          ),
          Object(esm.mdx)("br", null),
          Object(esm.mdx)("h2", { id: "without-header" }, "Without Header"),
          Object(esm.mdx)("p", null, "A table without a header."),
          Object(esm.mdx)(blocks.Story, {
            name: "Without Header",
            id: "table--without-header",
            mdxType: "Story",
          }),
          Object(esm.mdx)(
            "pre",
            null,
            Object(esm.mdx)(
              "code",
              _extends({ parentName: "pre" }, { className: "language-bash" }),
              'const elements = [\n  { name: "BCeID", value: "bobross42" },\n  {\n    name: "Last Name",\n    value: "Ross"\n  },\n  { name: "First Name", value: "Bob" },\n  { name: "Email Address", value: "bob.ross@example.com" }\n];\n\n<Table elements={elements} />;\n'
            )
          ),
          Object(esm.mdx)("h2", { id: "with-header" }, "With Header"),
          Object(esm.mdx)("p", null, "A table with a header."),
          Object(esm.mdx)(blocks.Story, {
            name: "With Header",
            id: "table--with-header",
            mdxType: "Story",
          }),
          Object(esm.mdx)(
            "pre",
            null,
            Object(esm.mdx)(
              "code",
              _extends({ parentName: "pre" }, { className: "language-bash" }),
              '<Table heading="BCeID Info" elements={elements} />;\n'
            )
          ),
          Object(esm.mdx)("h2", { id: "with-blue-stripe" }, "With Blue Stripe"),
          Object(esm.mdx)("p", null, "A table with blue stripes."),
          Object(esm.mdx)(blocks.Story, {
            name: "With Blue Stripe",
            id: "table--with-blue-stripe",
            mdxType: "Story",
          }),
          Object(esm.mdx)(
            "pre",
            null,
            Object(esm.mdx)(
              "code",
              _extends({ parentName: "pre" }, { className: "language-bash" }),
              '<Table elements={elements} styling="bcgov-blue-stripe" />\n'
            )
          ),
          Object(esm.mdx)("h2", { id: "with-bold-values" }, "With Bold Values"),
          Object(esm.mdx)("p", null, "A table with bolded values."),
          Object(esm.mdx)(blocks.Story, {
            name: "With Bold Values",
            id: "table--with-bold-values",
            mdxType: "Story",
          }),
          Object(esm.mdx)(
            "pre",
            null,
            Object(esm.mdx)(
              "code",
              _extends({ parentName: "pre" }, { className: "language-bash" }),
              'const tableDataWithBoldValues = [\n  { name: "Key", value: "Value", isValueBold: true }\n];\n\n<Table elements={tableDataWithBoldValues} />\n'
            )
          ),
          Object(esm.mdx)("h2", { id: "with-bold-names" }, "With Bold Names"),
          Object(esm.mdx)("p", null, "A table with bolded names."),
          Object(esm.mdx)(blocks.Story, {
            name: "With Bold Names",
            id: "table--with-bold-names",
            mdxType: "Story",
          }),
          Object(esm.mdx)(
            "pre",
            null,
            Object(esm.mdx)(
              "code",
              _extends({ parentName: "pre" }, { className: "language-bash" }),
              'const tableDataWithBoldNames = [\n  { name: "Key", value: "Value", isNameBold: true }\n];\n\n<Table elements={tableDataWithBoldNames} />\n'
            )
          ),
          Object(esm.mdx)("h2", { id: "with-fees" }, "With Fees"),
          Object(esm.mdx)("p", null, "A table for displaying fees."),
          Object(esm.mdx)(blocks.Story, {
            name: "With Fees",
            id: "table--with-fees",
            mdxType: "Story",
          }),
          Object(esm.mdx)(
            "pre",
            null,
            Object(esm.mdx)(
              "code",
              _extends({ parentName: "pre" }, { className: "language-bash" }),
              'const feesData = [\n  { name: "Some Fees:", value: "$100.00", isValueBold: true },\n  { name: "Some More Fees:", value: "$10.00", isValueBold: true }\n];\n\n<Table isFeesData elements={feesData} />\n'
            )
          )
        );
      }
      MDXContent.isMDXComponent = !0;
      var tableTestData = __webpack_require__(254),
        feesData =
          ((__webpack_exports__.default = {
            title: "Table",
            component: Table.a,
            parameters: { docs: { page: MDXContent } },
          }),
          [
            { name: "Some Fees:", value: "$100.00", isValueBold: !0 },
            { name: "Some More Fees:", value: "$10.00", isValueBold: !0 },
            { name: "", value: "", isEmptyRow: !0 },
            { name: "Total Fees:", value: "$110.00", isValueBold: !0 },
          ]),
        tableData = Object(tableTestData.a)(),
        basicTableElement = { name: "Key", value: "Value" },
        tableDataWithBoldValues = [
          Object(objectSpread2.a)(
            Object(objectSpread2.a)({}, basicTableElement),
            {},
            { isValueBold: !0 }
          ),
        ],
        tableDataWithBoldNames = [
          Object(objectSpread2.a)(
            Object(objectSpread2.a)({}, basicTableElement),
            {},
            { isNameBold: !0 }
          ),
        ],
        Table_stories_WithHeader = function WithHeader() {
          return Object(jsx_runtime.jsx)(Table.a, {
            heading: "BCeID Info",
            elements: tableData,
          });
        },
        Table_stories_WithoutHeader = function WithoutHeader() {
          return Object(jsx_runtime.jsx)(Table.a, { elements: tableData });
        },
        Table_stories_WithBlueStripe = function WithBlueStripe() {
          return Object(jsx_runtime.jsx)(Table.a, {
            elements: tableData,
            styling: "bcgov-blue-stripe",
          });
        },
        Table_stories_WithBoldValues = function WithBoldValues() {
          return Object(jsx_runtime.jsx)(Table.a, {
            elements: tableDataWithBoldValues,
          });
        },
        Table_stories_WithBoldNames = function WithBoldNames() {
          return Object(jsx_runtime.jsx)(Table.a, {
            elements: tableDataWithBoldNames,
          });
        },
        Table_stories_WithFees = function WithFees() {
          return Object(jsx_runtime.jsx)(Table.a, {
            isFeesData: !0,
            elements: feesData,
          });
        },
        Table_stories_Mobile = function Mobile() {
          return Object(jsx_runtime.jsx)(Table.a, {
            heading: "BCeID Info",
            elements: tableData,
          });
        };
      (Table_stories_Mobile.parameters = {
        viewport: { defaultViewport: "mobile2" },
      }),
        (Table_stories_WithHeader.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "WithHeader",
        }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES["src/components/table/Table.stories.js"] = {
            name: "WithHeader",
            docgenInfo: Table_stories_WithHeader.__docgenInfo,
            path: "src/components/table/Table.stories.js",
          }),
        (Table_stories_WithoutHeader.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "WithoutHeader",
        }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES["src/components/table/Table.stories.js"] = {
            name: "WithoutHeader",
            docgenInfo: Table_stories_WithoutHeader.__docgenInfo,
            path: "src/components/table/Table.stories.js",
          }),
        (Table_stories_WithBlueStripe.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "WithBlueStripe",
        }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES["src/components/table/Table.stories.js"] = {
            name: "WithBlueStripe",
            docgenInfo: Table_stories_WithBlueStripe.__docgenInfo,
            path: "src/components/table/Table.stories.js",
          }),
        (Table_stories_WithBoldValues.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "WithBoldValues",
        }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES["src/components/table/Table.stories.js"] = {
            name: "WithBoldValues",
            docgenInfo: Table_stories_WithBoldValues.__docgenInfo,
            path: "src/components/table/Table.stories.js",
          }),
        (Table_stories_WithBoldNames.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "WithBoldNames",
        }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES["src/components/table/Table.stories.js"] = {
            name: "WithBoldNames",
            docgenInfo: Table_stories_WithBoldNames.__docgenInfo,
            path: "src/components/table/Table.stories.js",
          }),
        (Table_stories_WithFees.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "WithFees",
        }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES["src/components/table/Table.stories.js"] = {
            name: "WithFees",
            docgenInfo: Table_stories_WithFees.__docgenInfo,
            path: "src/components/table/Table.stories.js",
          }),
        (Table_stories_Mobile.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "Mobile",
        }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES["src/components/table/Table.stories.js"] = {
            name: "Mobile",
            docgenInfo: Table_stories_Mobile.__docgenInfo,
            path: "src/components/table/Table.stories.js",
          });
    },
    1227: function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, "GovTabs", function () {
          return Tabs_stories_GovTabs;
        });
      var jsx_runtime = __webpack_require__(3),
        esm_Tabs = (__webpack_require__(2), __webpack_require__(547)),
        Tab = __webpack_require__(546),
        Tabs_Tabs =
          (__webpack_require__(1197),
          function Tabs(_ref) {
            var tabs = _ref.tabs,
              styling = _ref.styling;
            return Object(jsx_runtime.jsx)("div", {
              className: "".concat(styling),
              children: Object(jsx_runtime.jsx)(esm_Tabs.a, {
                defaultActiveKey: "home",
                id: "uncontrolled-tab-example",
                children: tabs.map(function (tab) {
                  return Object(jsx_runtime.jsx)(
                    Tab.a,
                    { title: tab.title, children: tab.content },
                    tab.title
                  );
                }),
              }),
            });
          });
      (Tabs_Tabs.defaultProps = { styling: "" }),
        (Tabs_Tabs.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "Tabs",
          props: {
            styling: {
              defaultValue: { value: '""', computed: !1 },
              type: { name: "string" },
              required: !1,
              description: "",
            },
            tabs: {
              type: {
                name: "arrayOf",
                value: {
                  name: "shape",
                  value: {
                    title: { name: "string", required: !0 },
                    content: { name: "any", required: !1 },
                  },
                },
              },
              required: !0,
              description: "",
            },
          },
        }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES["src/components/tabs/Tabs.js"] = {
            name: "Tabs",
            docgenInfo: Tabs_Tabs.__docgenInfo,
            path: "src/components/tabs/Tabs.js",
          });
      __webpack_exports__.default = { title: "Tabs", component: Tabs_Tabs };
      var Tabs_stories_tabs = [
          {
            title: "howdy",
            content: Object(jsx_runtime.jsx)("h2", {
              children: "This town aint big enough for the both of us",
            }),
          },
        ],
        Tabs_stories_GovTabs = function GovTabs() {
          return Object(jsx_runtime.jsx)(Tabs_Tabs, {
            tabs: Tabs_stories_tabs,
          });
        };
      (Tabs_stories_GovTabs.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "GovTabs",
      }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES["src/components/tabs/Tabs.stories.js"] = {
            name: "GovTabs",
            docgenInfo: Tabs_stories_GovTabs.__docgenInfo,
            path: "src/components/tabs/Tabs.stories.js",
          });
    },
    254: function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.d(__webpack_exports__, "a", function () {
        return getTableElementsTestData;
      });
      var elements = [
        { name: "BCeID", value: "bobross42" },
        { name: "Last Name", value: "Ross" },
        { name: "First Name", value: "Bob" },
        { name: "Email Address", value: "bob.ross@example.com" },
      ];
      function getTableElementsTestData() {
        return elements;
      }
    },
    530: function (module, exports, __webpack_require__) {},
    550: function (module, exports, __webpack_require__) {
      __webpack_require__(551),
        __webpack_require__(700),
        __webpack_require__(701),
        __webpack_require__(856),
        __webpack_require__(1072),
        __webpack_require__(1104),
        __webpack_require__(1116),
        __webpack_require__(1118),
        __webpack_require__(1123),
        (module.exports = __webpack_require__(1126));
    },
    615: function (module, exports) {},
    62: function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.d(__webpack_exports__, "a", function () {
        return Table;
      });
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          3
        ),
        TableElement =
          (__webpack_require__(2),
          __webpack_require__(1189),
          function TableElement(_ref) {
            var _ref$element = _ref.element,
              name = _ref$element.name,
              value = _ref$element.value,
              isValueBold = _ref$element.isValueBold,
              isNameBold = _ref$element.isNameBold,
              isEmptyRow = _ref$element.isEmptyRow,
              isFeesData = _ref.isFeesData,
              elementStyles = _ref.elementStyles,
              emptyRow = isEmptyRow ? "bcgov-empty-row" : "",
              rightAlign = isFeesData ? "bcgov-right-align" : "",
              rowStyle = isFeesData ? "bcgov-row-fees" : "bcgov-row",
              columnStyle = "bcgov-fill-width";
            return (
              elementStyles &&
                (elementStyles.rowStyle &&
                  (rowStyle += " ".concat(elementStyles.rowStyle)),
                elementStyles.columnStyle &&
                  (columnStyle = elementStyles && elementStyles.columnStyle)),
              Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                "div",
                {
                  className: "".concat(rowStyle, " ").concat(emptyRow),
                  children: [
                    isNameBold &&
                      Object(
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx
                      )("div", {
                        className: columnStyle,
                        children: Object(
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx
                        )("b", { children: name }),
                      }),
                    !isNameBold &&
                      Object(
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx
                      )("div", { className: columnStyle, children: name }),
                    isValueBold &&
                      Object(
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx
                      )("div", {
                        className: "bcgov-table-value ".concat(rightAlign),
                        children: Object(
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx
                        )("b", { children: value }),
                      }),
                    !isValueBold &&
                      Object(
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx
                      )("div", {
                        className: "bcgov-table-value ".concat(rightAlign),
                        children: value,
                      }),
                  ],
                }
              )
            );
          }),
        Table = function Table(_ref2) {
          var heading = _ref2.heading,
            elements = _ref2.elements,
            styling = _ref2.styling,
            isFeesData = _ref2.isFeesData,
            elementStyles = _ref2.elementStyles,
            tableComponents = elements.map(function (element) {
              return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                TableElement,
                {
                  isFeesData: isFeesData,
                  element: element,
                  elementStyles: elementStyles,
                },
                element.key || element.name
              );
            });
          return Object(
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs
          )("div", {
            className: "bcgov-table ".concat(styling),
            children: [
              Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
                children: heading,
              }),
              Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                "div",
                { className: "bcgov-table-body", children: tableComponents }
              ),
            ],
          });
        };
      (Table.defaultProps = {
        styling: "",
        heading: "",
        elements: [],
        isFeesData: !1,
        elementStyles: {},
      }),
        (TableElement.defaultProps = { elementStyles: {} }),
        (Table.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "Table",
          props: {
            styling: {
              defaultValue: { value: '""', computed: !1 },
              type: { name: "string" },
              required: !1,
              description: "",
            },
            heading: {
              defaultValue: { value: '""', computed: !1 },
              type: {
                name: "union",
                value: [{ name: "string" }, { name: "object" }],
              },
              required: !1,
              description: "",
            },
            elements: {
              defaultValue: { value: "[]", computed: !1 },
              type: {
                name: "arrayOf",
                value: {
                  name: "shape",
                  value: {
                    name: {
                      name: "union",
                      value: [{ name: "string" }, { name: "object" }],
                      required: !0,
                    },
                    value: {
                      name: "union",
                      value: [{ name: "string" }, { name: "object" }],
                      required: !0,
                    },
                    isValueBold: { name: "bool", required: !1 },
                    isNameBold: { name: "bool", required: !1 },
                    isEmptyRow: { name: "bool", required: !1 },
                  },
                },
              },
              required: !1,
              description: "",
            },
            isFeesData: {
              defaultValue: { value: "false", computed: !1 },
              type: { name: "bool" },
              required: !1,
              description: "",
            },
            elementStyles: {
              defaultValue: { value: "{}", computed: !1 },
              type: { name: "object" },
              required: !1,
              description: "",
            },
          },
        }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES["src/components/table/Table.js"] = {
            name: "Table",
            docgenInfo: Table.__docgenInfo,
            path: "src/components/table/Table.js",
          });
    },
    701: function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      __webpack_require__(244);
    },
    76: function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.d(__webpack_exports__, "a", function () {
        return Button;
      });
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          3
        ),
        _loader_Loader__WEBPACK_IMPORTED_MODULE_2__ =
          (__webpack_require__(2), __webpack_require__(117)),
        Button =
          (__webpack_require__(530),
          function Button(_ref) {
            var hasLoader = _ref.hasLoader,
              onClick = _ref.onClick,
              label = _ref.label,
              styling = _ref.styling,
              disabled = _ref.disabled,
              testId = _ref.testId;
            return Object(
              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs
            )("button", {
              className: "bcgov-button ".concat(styling),
              onClick: onClick,
              type: "button",
              disabled: disabled,
              "data-test-id": testId,
              children: [
                label,
                hasLoader &&
                  Object(
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx
                  )("div", {
                    className: "bcgov-loader-show",
                    children: Object(
                      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx
                    )(_loader_Loader__WEBPACK_IMPORTED_MODULE_2__.a, {}),
                  }),
              ],
            });
          });
      (Button.defaultProps = { disabled: !1, testId: "", hasLoader: !1 }),
        (Button.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "Button",
          props: {
            disabled: {
              defaultValue: { value: "false", computed: !1 },
              type: { name: "bool" },
              required: !1,
              description: "",
            },
            testId: {
              defaultValue: { value: '""', computed: !1 },
              type: { name: "string" },
              required: !1,
              description: "",
            },
            hasLoader: {
              defaultValue: { value: "false", computed: !1 },
              type: { name: "bool" },
              required: !1,
              description: "",
            },
            onClick: { type: { name: "func" }, required: !0, description: "" },
            label: { type: { name: "string" }, required: !0, description: "" },
            styling: {
              type: { name: "string" },
              required: !0,
              description: "",
            },
          },
        }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES["src/components/button/Button.js"] = {
            name: "Button",
            docgenInfo: Button.__docgenInfo,
            path: "src/components/button/Button.js",
          });
    },
    79: function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.d(__webpack_exports__, "a", function () {
        return DisplayBox;
      });
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          3
        ),
        DisplayBox =
          (__webpack_require__(2),
          __webpack_require__(1129),
          function DisplayBox(_ref) {
            var styling = _ref.styling,
              icon = _ref.icon,
              element = _ref.element;
            return Object(
              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs
            )("div", {
              className: "bcgov-display-box ".concat(styling),
              children: [
                icon &&
                  Object(
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx
                  )("div", { className: "bcgov-display-icon", children: icon }),
                Object(
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx
                )("div", {
                  className: "bcgov-display-right-element",
                  children: element,
                }),
              ],
            });
          });
      (DisplayBox.defaultProps = { styling: "", icon: null }),
        (DisplayBox.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "DisplayBox",
          props: {
            styling: {
              defaultValue: { value: '""', computed: !1 },
              type: { name: "string" },
              required: !1,
              description: "",
            },
            icon: {
              defaultValue: { value: "null", computed: !1 },
              type: { name: "element" },
              required: !1,
              description: "",
            },
            element: {
              type: {
                name: "union",
                value: [{ name: "string" }, { name: "element" }],
              },
              required: !0,
              description: "",
            },
          },
        }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            "src/components/display-box/DisplayBox.js"
          ] = {
            name: "DisplayBox",
            docgenInfo: DisplayBox.__docgenInfo,
            path: "src/components/display-box/DisplayBox.js",
          });
    },
  },
  [[550, 1, 2]],
]);
//# sourceMappingURL=main.b06743f04875f87d8fe6.bundle.js.map
