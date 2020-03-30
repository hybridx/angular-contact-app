function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-router.module.ts":
  /*!**************************************!*\
    !*** ./src/app/app-router.module.ts ***!
    \**************************************/

  /*! exports provided: AppRouterModule */

  /***/
  function srcAppAppRouterModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRouterModule", function () {
      return AppRouterModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _panels_notification_channel_panel_notification_channel_panel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./panels/notification-channel-panel/notification-channel-panel.component */
    "./src/app/panels/notification-channel-panel/notification-channel-panel.component.ts");
    /* harmony import */


    var _panels_notification_trigger_panel_notification_trigger_panel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./panels/notification-trigger-panel/notification-trigger-panel.component */
    "./src/app/panels/notification-trigger-panel/notification-trigger-panel.component.ts");
    /* harmony import */


    var _panels_application_panel_application_panel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./panels/application-panel/application-panel.component */
    "./src/app/panels/application-panel/application-panel.component.ts");
    /* harmony import */


    var _panels_add_target_panel_add_target_panel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./panels/add-target-panel/add-target-panel.component */
    "./src/app/panels/add-target-panel/add-target-panel.component.ts");

    var appRoutes = [{
      path: 'channel',
      component: _panels_notification_channel_panel_notification_channel_panel_component__WEBPACK_IMPORTED_MODULE_2__["NotificationChannelPanelComponent"]
    }, {
      path: 'trigger',
      component: _panels_notification_trigger_panel_notification_trigger_panel_component__WEBPACK_IMPORTED_MODULE_3__["NotificationTriggerPanelComponent"]
    }, {
      path: 'application',
      component: _panels_application_panel_application_panel_component__WEBPACK_IMPORTED_MODULE_4__["ApplicationPanelComponent"]
    }, {
      path: 'target',
      component: _panels_add_target_panel_add_target_panel_component__WEBPACK_IMPORTED_MODULE_5__["AddTargetPanelComponent"]
    }, {
      path: '',
      redirectTo: '/',
      pathMatch: 'full'
    }, {
      path: '**',
      redirectTo: '/'
    }];

    var AppRouterModule = function AppRouterModule() {
      _classCallCheck(this, AppRouterModule);
    };

    AppRouterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRouterModule
    });
    AppRouterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRouterModule_Factory(t) {
        return new (t || AppRouterModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRouterModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRouterModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _commons_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./commons/breadcrumbs/breadcrumbs.component */
    "./src/app/commons/breadcrumbs/breadcrumbs.component.ts");
    /* harmony import */


    var _setting_list_setting_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./setting-list/setting-list.component */
    "./src/app/setting-list/setting-list.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'notification-managment-spa';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 5,
      vars: 0,
      consts: [[1, "app-container"], [1, "content"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "opf-breadcrumbs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "opf-setting-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_commons_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbsComponent"], _setting_list_setting_list_component__WEBPACK_IMPORTED_MODULE_2__["SettingListComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
      styles: [".content[_ngcontent-%COMP%] {\n  display: flex;\n}\n.content[_ngcontent-%COMP%]   router-outlet[_ngcontent-%COMP%] {\n  margin: 1.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL2FuZ3VsYXItY29udGFjdC1hcHAvYW5ndWxhci1jb250YWN0LWFwcC9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQ0NKO0FEQUk7RUFDSSxjQUFBO0FDRVIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICByb3V0ZXItb3V0bGV0IHtcbiAgICAgICAgbWFyZ2luOiAxLjVyZW07XG4gICAgfVxufSIsIi5jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5jb250ZW50IHJvdXRlci1vdXRsZXQge1xuICBtYXJnaW46IDEuNXJlbTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _commons_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./commons/breadcrumbs/breadcrumbs.component */
    "./src/app/commons/breadcrumbs/breadcrumbs.component.ts");
    /* harmony import */


    var _app_router_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app-router.module */
    "./src/app/app-router.module.ts");
    /* harmony import */


    var _setting_list_setting_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./setting-list/setting-list.component */
    "./src/app/setting-list/setting-list.component.ts");
    /* harmony import */


    var _panels_application_panel_application_panel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./panels/application-panel/application-panel.component */
    "./src/app/panels/application-panel/application-panel.component.ts");
    /* harmony import */


    var _panels_notification_channel_panel_notification_channel_panel_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./panels/notification-channel-panel/notification-channel-panel.component */
    "./src/app/panels/notification-channel-panel/notification-channel-panel.component.ts");
    /* harmony import */


    var _panels_notification_trigger_panel_notification_trigger_panel_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./panels/notification-trigger-panel/notification-trigger-panel.component */
    "./src/app/panels/notification-trigger-panel/notification-trigger-panel.component.ts");
    /* harmony import */


    var _panels_add_target_panel_add_target_panel_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./panels/add-target-panel/add-target-panel.component */
    "./src/app/panels/add-target-panel/add-target-panel.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _app_router_module__WEBPACK_IMPORTED_MODULE_5__["AppRouterModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _commons_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbsComponent"], _setting_list_setting_list_component__WEBPACK_IMPORTED_MODULE_6__["SettingListComponent"], _panels_application_panel_application_panel_component__WEBPACK_IMPORTED_MODULE_7__["ApplicationPanelComponent"], _panels_notification_channel_panel_notification_channel_panel_component__WEBPACK_IMPORTED_MODULE_8__["NotificationChannelPanelComponent"], _panels_notification_trigger_panel_notification_trigger_panel_component__WEBPACK_IMPORTED_MODULE_9__["NotificationTriggerPanelComponent"], _panels_add_target_panel_add_target_panel_component__WEBPACK_IMPORTED_MODULE_10__["AddTargetPanelComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _app_router_module__WEBPACK_IMPORTED_MODULE_5__["AppRouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _commons_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbsComponent"], _setting_list_setting_list_component__WEBPACK_IMPORTED_MODULE_6__["SettingListComponent"], _panels_application_panel_application_panel_component__WEBPACK_IMPORTED_MODULE_7__["ApplicationPanelComponent"], _panels_notification_channel_panel_notification_channel_panel_component__WEBPACK_IMPORTED_MODULE_8__["NotificationChannelPanelComponent"], _panels_notification_trigger_panel_notification_trigger_panel_component__WEBPACK_IMPORTED_MODULE_9__["NotificationTriggerPanelComponent"], _panels_add_target_panel_add_target_panel_component__WEBPACK_IMPORTED_MODULE_10__["AddTargetPanelComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _app_router_module__WEBPACK_IMPORTED_MODULE_5__["AppRouterModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/commons/breadcrumbs/breadcrumbs.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/commons/breadcrumbs/breadcrumbs.component.ts ***!
    \**************************************************************/

  /*! exports provided: BreadcrumbsComponent */

  /***/
  function srcAppCommonsBreadcrumbsBreadcrumbsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BreadcrumbsComponent", function () {
      return BreadcrumbsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var BreadcrumbsComponent =
    /*#__PURE__*/
    function () {
      function BreadcrumbsComponent() {
        _classCallCheck(this, BreadcrumbsComponent);
      }

      _createClass(BreadcrumbsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BreadcrumbsComponent;
    }();

    BreadcrumbsComponent.ɵfac = function BreadcrumbsComponent_Factory(t) {
      return new (t || BreadcrumbsComponent)();
    };

    BreadcrumbsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BreadcrumbsComponent,
      selectors: [["opf-breadcrumbs"]],
      decls: 2,
      vars: 0,
      template: function BreadcrumbsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "breadcrumbs works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbnMvYnJlYWRjcnVtYnMvYnJlYWRjcnVtYnMuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BreadcrumbsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'opf-breadcrumbs',
          templateUrl: './breadcrumbs.component.html',
          styleUrls: ['./breadcrumbs.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/panels/add-target-panel/add-target-panel.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/panels/add-target-panel/add-target-panel.component.ts ***!
    \***********************************************************************/

  /*! exports provided: AddTargetPanelComponent */

  /***/
  function srcAppPanelsAddTargetPanelAddTargetPanelComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddTargetPanelComponent", function () {
      return AddTargetPanelComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AddTargetPanelComponent =
    /*#__PURE__*/
    function () {
      function AddTargetPanelComponent() {
        _classCallCheck(this, AddTargetPanelComponent);
      }

      _createClass(AddTargetPanelComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AddTargetPanelComponent;
    }();

    AddTargetPanelComponent.ɵfac = function AddTargetPanelComponent_Factory(t) {
      return new (t || AddTargetPanelComponent)();
    };

    AddTargetPanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AddTargetPanelComponent,
      selectors: [["opf-add-target-panel"]],
      decls: 2,
      vars: 0,
      template: function AddTargetPanelComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "add-target-panel works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhbmVscy9hZGQtdGFyZ2V0LXBhbmVsL2FkZC10YXJnZXQtcGFuZWwuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddTargetPanelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'opf-add-target-panel',
          templateUrl: './add-target-panel.component.html',
          styleUrls: ['./add-target-panel.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/panels/application-panel/application-panel.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/panels/application-panel/application-panel.component.ts ***!
    \*************************************************************************/

  /*! exports provided: ApplicationPanelComponent */

  /***/
  function srcAppPanelsApplicationPanelApplicationPanelComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApplicationPanelComponent", function () {
      return ApplicationPanelComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ApplicationPanelComponent =
    /*#__PURE__*/
    function () {
      function ApplicationPanelComponent() {
        _classCallCheck(this, ApplicationPanelComponent);
      }

      _createClass(ApplicationPanelComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ApplicationPanelComponent;
    }();

    ApplicationPanelComponent.ɵfac = function ApplicationPanelComponent_Factory(t) {
      return new (t || ApplicationPanelComponent)();
    };

    ApplicationPanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ApplicationPanelComponent,
      selectors: [["opf-application-panel"]],
      decls: 22,
      vars: 0,
      consts: [[1, "application-panel"], ["action", "channel"], [1, "red"], ["type", "checkbox", "name", "application-name", "id", "outage"], ["for", "outage"], ["type", "checkbox", "name", "application-name", "id", "tsCatalog"], ["for", "tsCatalog"], ["type", "checkbox", "name", "application-name", "id", "dsal"], ["for", "dsal"], [1, "submit"], ["type", "submit", 1, "btn-primary"]],
      template: function ApplicationPanelComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Select Application");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Outage Management");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " TS Catalog");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " DSAL");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Next ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".application-panel[_ngcontent-%COMP%] {\n  padding: 2rem;\n  background: #ffffff;\n  box-shadow: 0px 3px 6px #00000029;\n  width: 1200px;\n}\n.application-panel[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.application-panel[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 0.3rem;\n}\n.application-panel[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%]   .red[_ngcontent-%COMP%] {\n  color: #CE2615;\n}\n.application-panel[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0.5rem;\n}\n.application-panel[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n}\n.application-panel[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  color: #ffffff;\n  background: #0066CC;\n  font-size: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL2FuZ3VsYXItY29udGFjdC1hcHAvYW5ndWxhci1jb250YWN0LWFwcC9zcmMvYXBwL3BhbmVscy9hcHBsaWNhdGlvbi1wYW5lbC9hcHBsaWNhdGlvbi1wYW5lbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFuZWxzL2FwcGxpY2F0aW9uLXBhbmVsL2FwcGxpY2F0aW9uLXBhbmVsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUNBQUE7RUFDQSxhQUFBO0FDQ0o7QURDUTtFQUNJLGdCQUFBO0FDQ1o7QURBWTtFQUNJLG1CQUFBO0FDRWhCO0FEQVk7RUFDSSxjQUFBO0FDRWhCO0FERVk7RUFDSSxnQkFBQTtFQUNBLGVBQUE7QUNBaEI7QURDZ0I7RUFDSSxtQkFBQTtBQ0NwQjtBREdRO0VBQ0ksb0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDRFoiLCJmaWxlIjoic3JjL2FwcC9wYW5lbHMvYXBwbGljYXRpb24tcGFuZWwvYXBwbGljYXRpb24tcGFuZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwbGljYXRpb24tcGFuZWwge1xuICAgIHBhZGRpbmc6IDJyZW07XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCAjMDAwMDAwMjk7XG4gICAgd2lkdGg6IDEyMDBweDtcbiAgICBmb3JtIHtcbiAgICAgICAgJj5wIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMC4zcmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnJlZCB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNDRTI2MTU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdWwge1xuICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMC41cmVtO1xuICAgICAgICAgICAgICAgIGxhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmJ0bi1wcmltYXJ5IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDA2NkNDO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICB9XG4gICAgfVxufSIsIi5hcHBsaWNhdGlvbi1wYW5lbCB7XG4gIHBhZGRpbmc6IDJyZW07XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggNnB4ICMwMDAwMDAyOTtcbiAgd2lkdGg6IDEyMDBweDtcbn1cbi5hcHBsaWNhdGlvbi1wYW5lbCBmb3JtID4gcCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uYXBwbGljYXRpb24tcGFuZWwgZm9ybSA+IHAgc3BhbiB7XG4gIG1hcmdpbi1sZWZ0OiAwLjNyZW07XG59XG4uYXBwbGljYXRpb24tcGFuZWwgZm9ybSA+IHAgLnJlZCB7XG4gIGNvbG9yOiAjQ0UyNjE1O1xufVxuLmFwcGxpY2F0aW9uLXBhbmVsIGZvcm0gdWwgbGkge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwLjVyZW07XG59XG4uYXBwbGljYXRpb24tcGFuZWwgZm9ybSB1bCBsaSBsYWJlbCB7XG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG59XG4uYXBwbGljYXRpb24tcGFuZWwgZm9ybSAuYnRuLXByaW1hcnkge1xuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJhY2tncm91bmQ6ICMwMDY2Q0M7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApplicationPanelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'opf-application-panel',
          templateUrl: './application-panel.component.html',
          styleUrls: ['./application-panel.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/panels/notification-channel-panel/notification-channel-panel.component.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/panels/notification-channel-panel/notification-channel-panel.component.ts ***!
    \*******************************************************************************************/

  /*! exports provided: NotificationChannelPanelComponent */

  /***/
  function srcAppPanelsNotificationChannelPanelNotificationChannelPanelComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationChannelPanelComponent", function () {
      return NotificationChannelPanelComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var NotificationChannelPanelComponent =
    /*#__PURE__*/
    function () {
      function NotificationChannelPanelComponent() {
        _classCallCheck(this, NotificationChannelPanelComponent);
      }

      _createClass(NotificationChannelPanelComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NotificationChannelPanelComponent;
    }();

    NotificationChannelPanelComponent.ɵfac = function NotificationChannelPanelComponent_Factory(t) {
      return new (t || NotificationChannelPanelComponent)();
    };

    NotificationChannelPanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NotificationChannelPanelComponent,
      selectors: [["opf-notification-channel-panel"]],
      decls: 22,
      vars: 0,
      consts: [[1, "notification-channel-panel"], ["action", "trigger"], [1, "red"], ["type", "checkbox", "name", "application-name", "id", "email"], ["for", "email"], ["type", "checkbox", "name", "application-name", "id", "popup"], ["for", "popup"], ["type", "checkbox", "name", "application-name", "id", "banner"], ["for", "banner"], [1, "submit"], ["type", "submit", 1, "btn-primary"]],
      template: function NotificationChannelPanelComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Select Application");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Popup Notification");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Banner ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Next ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".notification-channel-panel[_ngcontent-%COMP%] {\n  padding: 2rem;\n  background: #ffffff;\n  box-shadow: 0px 3px 6px #00000029;\n  width: 1200px;\n}\n.notification-channel-panel[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.notification-channel-panel[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 0.3rem;\n}\n.notification-channel-panel[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%]   .red[_ngcontent-%COMP%] {\n  color: #CE2615;\n}\n.notification-channel-panel[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0.5rem;\n}\n.notification-channel-panel[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n}\n.notification-channel-panel[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  color: #ffffff;\n  background: #0066CC;\n  font-size: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL2FuZ3VsYXItY29udGFjdC1hcHAvYW5ndWxhci1jb250YWN0LWFwcC9zcmMvYXBwL3BhbmVscy9ub3RpZmljYXRpb24tY2hhbm5lbC1wYW5lbC9ub3RpZmljYXRpb24tY2hhbm5lbC1wYW5lbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFuZWxzL25vdGlmaWNhdGlvbi1jaGFubmVsLXBhbmVsL25vdGlmaWNhdGlvbi1jaGFubmVsLXBhbmVsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUNBQUE7RUFDQSxhQUFBO0FDQ0o7QURDUTtFQUNJLGdCQUFBO0FDQ1o7QURBWTtFQUNJLG1CQUFBO0FDRWhCO0FEQVk7RUFDSSxjQUFBO0FDRWhCO0FERVk7RUFDSSxnQkFBQTtFQUNBLGVBQUE7QUNBaEI7QURDZ0I7RUFDSSxtQkFBQTtBQ0NwQjtBREdRO0VBQ0ksb0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDRFoiLCJmaWxlIjoic3JjL2FwcC9wYW5lbHMvbm90aWZpY2F0aW9uLWNoYW5uZWwtcGFuZWwvbm90aWZpY2F0aW9uLWNoYW5uZWwtcGFuZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm90aWZpY2F0aW9uLWNoYW5uZWwtcGFuZWwge1xuICAgIHBhZGRpbmc6IDJyZW07XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCAjMDAwMDAwMjk7XG4gICAgd2lkdGg6IDEyMDBweDtcbiAgICBmb3JtIHtcbiAgICAgICAgJj5wIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMC4zcmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnJlZCB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNDRTI2MTU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdWwge1xuICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMC41cmVtO1xuICAgICAgICAgICAgICAgIGxhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmJ0bi1wcmltYXJ5IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDA2NkNDO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICB9XG4gICAgfVxufSIsIi5ub3RpZmljYXRpb24tY2hhbm5lbC1wYW5lbCB7XG4gIHBhZGRpbmc6IDJyZW07XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggNnB4ICMwMDAwMDAyOTtcbiAgd2lkdGg6IDEyMDBweDtcbn1cbi5ub3RpZmljYXRpb24tY2hhbm5lbC1wYW5lbCBmb3JtID4gcCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4ubm90aWZpY2F0aW9uLWNoYW5uZWwtcGFuZWwgZm9ybSA+IHAgc3BhbiB7XG4gIG1hcmdpbi1sZWZ0OiAwLjNyZW07XG59XG4ubm90aWZpY2F0aW9uLWNoYW5uZWwtcGFuZWwgZm9ybSA+IHAgLnJlZCB7XG4gIGNvbG9yOiAjQ0UyNjE1O1xufVxuLm5vdGlmaWNhdGlvbi1jaGFubmVsLXBhbmVsIGZvcm0gdWwgbGkge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwLjVyZW07XG59XG4ubm90aWZpY2F0aW9uLWNoYW5uZWwtcGFuZWwgZm9ybSB1bCBsaSBsYWJlbCB7XG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG59XG4ubm90aWZpY2F0aW9uLWNoYW5uZWwtcGFuZWwgZm9ybSAuYnRuLXByaW1hcnkge1xuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJhY2tncm91bmQ6ICMwMDY2Q0M7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationChannelPanelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'opf-notification-channel-panel',
          templateUrl: './notification-channel-panel.component.html',
          styleUrls: ['./notification-channel-panel.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/panels/notification-trigger-panel/notification-trigger-panel.component.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/panels/notification-trigger-panel/notification-trigger-panel.component.ts ***!
    \*******************************************************************************************/

  /*! exports provided: NotificationTriggerPanelComponent */

  /***/
  function srcAppPanelsNotificationTriggerPanelNotificationTriggerPanelComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationTriggerPanelComponent", function () {
      return NotificationTriggerPanelComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var NotificationTriggerPanelComponent =
    /*#__PURE__*/
    function () {
      function NotificationTriggerPanelComponent() {
        _classCallCheck(this, NotificationTriggerPanelComponent);
      }

      _createClass(NotificationTriggerPanelComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NotificationTriggerPanelComponent;
    }();

    NotificationTriggerPanelComponent.ɵfac = function NotificationTriggerPanelComponent_Factory(t) {
      return new (t || NotificationTriggerPanelComponent)();
    };

    NotificationTriggerPanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NotificationTriggerPanelComponent,
      selectors: [["opf-notification-trigger-panel"]],
      decls: 2,
      vars: 0,
      template: function NotificationTriggerPanelComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "notification-trigger-panel works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhbmVscy9ub3RpZmljYXRpb24tdHJpZ2dlci1wYW5lbC9ub3RpZmljYXRpb24tdHJpZ2dlci1wYW5lbC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationTriggerPanelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'opf-notification-trigger-panel',
          templateUrl: './notification-trigger-panel.component.html',
          styleUrls: ['./notification-trigger-panel.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/setting-list/setting-list.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/setting-list/setting-list.component.ts ***!
    \********************************************************/

  /*! exports provided: SettingListComponent */

  /***/
  function srcAppSettingListSettingListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingListComponent", function () {
      return SettingListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0(a0) {
      return {
        "active": a0
      };
    };

    function SettingListComponent_li_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingListComponent_li_2_Template_li_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var i_r2 = ctx.index;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.selectCurrentTab(i_r2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var panelLink_r1 = ctx.$implicit;
        var i_r2 = ctx.index;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx_r0.selectedIndex === i_r2));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", panelLink_r1.link);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](panelLink_r1.title);
      }
    }

    var SettingListComponent =
    /*#__PURE__*/
    function () {
      function SettingListComponent() {
        _classCallCheck(this, SettingListComponent);

        this.panelLinks = [{
          link: 'application',
          title: 'Select Application'
        }, {
          link: 'channel',
          title: 'Select Notification Channel'
        }, {
          link: 'trigger',
          title: 'Select Notification Tigger Channel'
        }, {
          link: 'target',
          title: 'Add Target News'
        }];
        this.selectedIndex = 0;
      }

      _createClass(SettingListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "selectCurrentTab",
        value: function selectCurrentTab(i) {
          this.selectedIndex = i;
        }
      }]);

      return SettingListComponent;
    }();

    SettingListComponent.ɵfac = function SettingListComponent_Factory(t) {
      return new (t || SettingListComponent)();
    };

    SettingListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SettingListComponent,
      selectors: [["opf-setting-list"]],
      decls: 3,
      vars: 1,
      consts: [[1, "panel"], [3, "ngClass", "click", 4, "ngFor", "ngForOf"], [3, "ngClass", "click"], [3, "routerLink"]],
      template: function SettingListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SettingListComponent_li_2_Template, 3, 5, "li", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.panelLinks);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      styles: [".panel[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n}\n.panel[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  color: #151515;\n  width: 14rem;\n  min-height: 2.8rem;\n  text-decoration: none;\n}\n.panel[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  font-weight: 600;\n}\n.panel[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  background: #f3f3f3;\n}\n.panel[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #316DC1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL2FuZ3VsYXItY29udGFjdC1hcHAvYW5ndWxhci1jb250YWN0LWFwcC9zcmMvYXBwL3NldHRpbmctbGlzdC9zZXR0aW5nLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NldHRpbmctbGlzdC9zZXR0aW5nLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRVE7RUFDSSxnQkFBQTtBQ0RaO0FERVk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUNBaEI7QURDZ0I7RUFDSSxnQkFBQTtBQ0NwQjtBREdRO0VBQ0ksbUJBQUE7QUNEWjtBREVZO0VBQ0ksY0FBQTtBQ0FoQiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmctbGlzdC9zZXR0aW5nLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFuZWwge1xuICAgIHVsIHtcbiAgICAgICAgbGkge1xuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzE1MTUxNTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTRyZW07XG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogMi44cmVtO1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmFjdGl2ZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjNmM2YzO1xuICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMzMTZEQzE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIucGFuZWwgdWwgbGkge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuLnBhbmVsIHVsIGxpIGEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogIzE1MTUxNTtcbiAgd2lkdGg6IDE0cmVtO1xuICBtaW4taGVpZ2h0OiAyLjhyZW07XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5wYW5lbCB1bCBsaSBhOmhvdmVyIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5wYW5lbCB1bCAuYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogI2YzZjNmMztcbn1cbi5wYW5lbCB1bCAuYWN0aXZlIGEge1xuICBjb2xvcjogIzMxNkRDMTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'opf-setting-list',
          templateUrl: './setting-list.component.html',
          styleUrls: ['./setting-list.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/runner/work/angular-contact-app/angular-contact-app/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map