"use strict";
(self["webpackChunkcar_rendal"] = self["webpackChunkcar_rendal"] || []).push([["main"],{

/***/ 8696:
/*!****************************************************!*\
  !*** ./src/app/about-page/about-page.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutPageComponent": () => (/* binding */ AboutPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class AboutPageComponent {}
AboutPageComponent.ɵfac = function AboutPageComponent_Factory(t) {
  return new (t || AboutPageComponent)();
};
AboutPageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AboutPageComponent,
  selectors: [["app-about-page"]],
  decls: 26,
  vars: 0,
  consts: [[1, "container"], [1, "row"], [1, "col-9"], [1, "btn"], [1, "col-3"], ["src", "", "alt", ""]],
  template: function AboutPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Plan your trip with us");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Contact");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1)(8, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Select your car");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "We offer a big variety of vehicles for all your driving needs.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Customer support");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "We provide 24hrs customer support, who can resolve any question you have");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Safety");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "First, we focus in your safety so we provide a special safe insurance for the driver and passengers");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);



const routes = [];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header/header.component */ 3482);


class AppComponent {
  constructor() {
    this.title = 'car-rendal';
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)();
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 1,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-header");
    }
  },
  dependencies: [_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ 3482);
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-page/home-page.component */ 5079);
/* harmony import */ var _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about-page/about-page.component */ 8696);
/* harmony import */ var _vehicles_page_vehicles_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vehicles-page/vehicles-page.component */ 2841);
/* harmony import */ var _faq_page_faq_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./faq-page/faq-page.component */ 4822);
/* harmony import */ var _footer_page_footer_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer-page/footer-page.component */ 492);
/* harmony import */ var _contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contact-page/contact-page.component */ 750);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);











class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__.HomePageComponent, _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_4__.AboutPageComponent, _vehicles_page_vehicles_page_component__WEBPACK_IMPORTED_MODULE_5__.VehiclesPageComponent, _faq_page_faq_page_component__WEBPACK_IMPORTED_MODULE_6__.FaqComponent, _footer_page_footer_page_component__WEBPACK_IMPORTED_MODULE_7__.FooterPageComponent, _contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_8__.ContactPageComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule]
  });
})();

/***/ }),

/***/ 750:
/*!********************************************************!*\
  !*** ./src/app/contact-page/contact-page.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactPageComponent": () => (/* binding */ ContactPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class ContactPageComponent {}
ContactPageComponent.ɵfac = function ContactPageComponent_Factory(t) {
  return new (t || ContactPageComponent)();
};
ContactPageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ContactPageComponent,
  selectors: [["app-contact-page"]],
  decls: 4,
  vars: 0,
  consts: [[1, "container"], [1, "row"], [1, "col-10"], ["action", ""]],
  template: function ContactPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "form", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 4822:
/*!************************************************!*\
  !*** ./src/app/faq-page/faq-page.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FaqComponent": () => (/* binding */ FaqComponent)
/* harmony export */ });
/* harmony import */ var _fqa_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../fqa.model */ 149);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);



function FaqComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FaqComponent_div_11_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const fqa_r2 = restoredCtx.$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4.onSelect(fqa_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const fqa_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", fqa_r2.question, " ");
  }
}
function FaqComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.selectedFqa.answer, " ");
  }
}
class FaqComponent {
  constructor() {
    this.fqas = [new _fqa_model__WEBPACK_IMPORTED_MODULE_0__.Fqa('How old have to be to rent a car?', `With many rental companies, you must be at least 21 years of age to rent a car, and any driver under 25 may have to pay a Young Driver Fee. Similarly, people aged 70+ may find some companies will charge a Senior Driver Fee, or may not rent to them at all.
    So car rental for the under-25s or over-70s can be more expensive – which is one more reason to book with Rentalcars.com, as we work with all the big brands. Just check each car’s terms and conditions to see if your age would make any difference.`)];
  }
  onSelect(fqa) {
    this.selectedFqa = fqa;
  }
}
FaqComponent.ɵfac = function FaqComponent_Factory(t) {
  return new (t || FaqComponent)();
};
FaqComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: FaqComponent,
  selectors: [["app-faq-page"]],
  decls: 13,
  vars: 2,
  consts: [[1, "container"], [1, "row"], [1, "col-10"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [3, "click"]],
  template: function FaqComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "FAQ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Frequently Asked Qiestions");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Frequently Asked Questions about car rental process or payment etc.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 1)(10, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, FaqComponent_div_11_Template, 3, 1, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, FaqComponent_div_12_Template, 3, 1, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.fqas);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.selectedFqa);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 492:
/*!******************************************************!*\
  !*** ./src/app/footer-page/footer-page.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterPageComponent": () => (/* binding */ FooterPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class FooterPageComponent {}
FooterPageComponent.ɵfac = function FooterPageComponent_Factory(t) {
  return new (t || FooterPageComponent)();
};
FooterPageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: FooterPageComponent,
  selectors: [["app-footer-page"]],
  decls: 32,
  vars: 0,
  consts: [[1, "row", "justify-content-center", "align-self-end"], [1, "col-3"], ["href", "", 1, "nav-link"], ["type", "email", "name", "", "id", "", 1, "form-control"], ["type", "button", 1, "btn", "btn-success"], [1, "text-center", "p-3", 2, "background-color", "rgba(0, 0, 0, 0.2)"], ["href", "http://www.linkedin.com/in/christos-dovris\n\n    ", 1, "text-dark", 2, "text-decoration", "none"]],
  template: function FooterPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer")(1, "div", 0)(2, "div", 1)(3, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "COMPANY");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Contact us");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Careers");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Blog");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1)(12, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "WORKING HOURS");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Mon - Fri: 9:00 AM - 9:00 PM");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Sat: 9:00 AM - 5:00 PM");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Sunday: Closed");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 1)(21, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "SUBSCIPTION");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Subscribe on our newsletter for latest news and updates.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Submit");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " \u00A9 2023 Copyright: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "ChrisDovris");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 149:
/*!******************************!*\
  !*** ./src/app/fqa.model.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Fqa": () => (/* binding */ Fqa)
/* harmony export */ });
class Fqa {
  constructor(question, answer) {
    this.answer = answer;
    this.question = question;
  }
}

/***/ }),

/***/ 3482:
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../home-page/home-page.component */ 5079);
/* harmony import */ var _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../about-page/about-page.component */ 8696);
/* harmony import */ var _vehicles_page_vehicles_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../vehicles-page/vehicles-page.component */ 2841);
/* harmony import */ var _faq_page_faq_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../faq-page/faq-page.component */ 4822);
/* harmony import */ var _footer_page_footer_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../footer-page/footer-page.component */ 492);







class HeaderComponent {}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
  return new (t || HeaderComponent)();
};
HeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: HeaderComponent,
  selectors: [["app-header"]],
  decls: 31,
  vars: 0,
  consts: [[1, "navbar", "navbar-expand-lg", "bg-body-tertiary"], [1, "container-fluid"], ["href", "#home", 1, "navbar-brand"], ["src", "../../assets/car-logo.png", "width", "40", "height", "30", "alt", ""], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse", "d-flex", "justify-content-center"], [1, "navbar-nav"], [1, "nav-item"], ["href", "#home", 1, "nav-link"], ["href", "#about", 1, "nav-link"], ["href", "#models", 1, "nav-link"], ["routerLink", "/contact", 1, "nav-link"], [1, "d-flex", "justify-self-end"], [1, "btn"], ["id", "home"], ["id", "about"], ["id", "models"]],
  template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "CarRendal ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "img", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 6)(8, "ul", 7)(9, "li", 8)(10, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Home");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "li", 8)(13, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "About");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "li", 8)(16, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Vehicle Models");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "li", 8)(19, "a", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "Contact");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 13)(22, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "Sign in");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "Log out");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](26, "app-home-page", 15)(27, "app-about-page", 16)(28, "app-vehicles-page", 17)(29, "app-faq-page")(30, "app-footer-page");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_0__.HomePageComponent, _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_1__.AboutPageComponent, _vehicles_page_vehicles_page_component__WEBPACK_IMPORTED_MODULE_2__.VehiclesPageComponent, _faq_page_faq_page_component__WEBPACK_IMPORTED_MODULE_3__.FaqComponent, _footer_page_footer_page_component__WEBPACK_IMPORTED_MODULE_4__.FooterPageComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 5079:
/*!**************************************************!*\
  !*** ./src/app/home-page/home-page.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageComponent": () => (/* binding */ HomePageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class HomePageComponent {}
HomePageComponent.ɵfac = function HomePageComponent_Factory(t) {
  return new (t || HomePageComponent)();
};
HomePageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: HomePageComponent,
  selectors: [["app-home-page"]],
  decls: 46,
  vars: 0,
  consts: [[1, "container"], [1, "row", "justify-content-center"], [1, "col-5"], [2, "padding-top", "30px"], [1, "homeBtns"], [1, "btn", "btn-lg", "btn-secondary"], [1, "col-7"], ["src", "../../assets/car-home-page.png", "alt", ""], ["action", ""], [1, "row", "align-items-start"], [1, "col-4"], ["for", "vehicle", 1, "form-label"], ["type", "text", "name", "vehicle", "id", "vehicle", 1, "form-control"], ["for", "pick-up", 1, "form-label"], ["type", "text", "id", "pick-up", 1, "form-control"], ["for", "drop-of", 1, "form-label"], ["type", "text", "id", "drop-of", 1, "form-control"], [1, "row"], ["for", "pickUpDate", 1, "form-label"], ["type", "text", "id", "pickUpDate", 1, "form-control"], ["for", "dropOfDate", 1, "form-label"], ["type", "text", "id", "dropOfDate", 1, "form-control"], [1, "d-grid", "gap-2"], [1, "btn", "btn-primary"]],
  template: function HomePageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Rend a car, ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "quick and easy");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3)(9, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Choose your type of our variety of vehicles. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4)(12, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Book now");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " | ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Learn more");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "form", 8)(20, "div", 9)(21, "div", 10)(22, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Select vehicle:");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 10)(26, "label", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Pick-up:");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 10)(30, "label", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Drop-of:");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 17)(34, "div", 10)(35, "label", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Pick-up date:");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 10)(39, "label", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Drop-off date:");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 10)(43, "div", 22)(44, "button", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Search");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
    }
  },
  styles: ["body[_ngcontent-%COMP%] {\n  min-height: 85vh;\n}\n\n.row[_ngcontent-%COMP%] {\n  padding-top: 4rem;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztBQUNiIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XG4gIG1pbi1oZWlnaHQ6IDg1dmg7XG59XG5cbi5yb3cge1xuICBwYWRkaW5nLXRvcDogNHJlbTtcbn1cblxuaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 6238:
/*!**********************************!*\
  !*** ./src/app/vehicle.model.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Vehicle": () => (/* binding */ Vehicle)
/* harmony export */ });
class Vehicle {
  constructor(img, mark, tier, model, doors, fuel, transition, price) {
    this.img = img;
    this.mark = mark;
    this.tier = tier;
    this.model = model;
    this.doors = doors;
    this.fuel = fuel;
    this.transition = transition;
    this.price = price;
  }
}

/***/ }),

/***/ 2841:
/*!**********************************************************!*\
  !*** ./src/app/vehicles-page/vehicles-page.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VehiclesPageComponent": () => (/* binding */ VehiclesPageComponent)
/* harmony export */ });
/* harmony import */ var _vehicle_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vehicle.model */ 6238);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);



function VehiclesPageComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VehiclesPageComponent_div_9_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const vehicle_r3 = restoredCtx.$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4.onSelect(vehicle_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const vehicle_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", vehicle_r3.mark, " ", vehicle_r3.model, "");
  }
}
function VehiclesPageComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r1.selectedVehicle.img, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function VehiclesPageComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 1)(2, "div", 10)(3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 1)(6, "div", 11)(7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Mark: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 11)(10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 1)(13, "div", 11)(14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Model: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 11)(17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 1)(20, "div", 11)(21, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " Tier: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 11)(24, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 1)(27, "div", 11)(28, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, " Doors: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 11)(31, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 1)(34, "div", 11)(35, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, " Fuel: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 11)(38, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 1)(41, "div", 11)(42, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, " Trasition: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 11)(45, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.selectedVehicle.price, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.selectedVehicle.mark, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.selectedVehicle.model, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.selectedVehicle.tier, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.selectedVehicle.doors, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.selectedVehicle.fuel, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.selectedVehicle.transition, " ");
  }
}
class VehiclesPageComponent {
  constructor() {
    this.vehicles = [new _vehicle_model__WEBPACK_IMPORTED_MODULE_0__.Vehicle('../../assets/car-fleet/fiat500.png', 'Fiat', 'small', '500', 3, 'Diesel', 'Auto', 15), new _vehicle_model__WEBPACK_IMPORTED_MODULE_0__.Vehicle('../../assets/car-fleet/fiat500.png', 'Fiat', 'big', '500', 3, 'Diesel', 'Auto', 15)];
  }
  onSelect(vehicle) {
    this.selectedVehicle = vehicle;
  }
}
VehiclesPageComponent.ɵfac = function VehiclesPageComponent_Factory(t) {
  return new (t || VehiclesPageComponent)();
};
VehiclesPageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: VehiclesPageComponent,
  selectors: [["app-vehicles-page"]],
  decls: 16,
  vars: 3,
  consts: [[1, "container"], [1, "row"], [1, "col-10"], [1, "col-3"], [4, "ngFor", "ngForOf"], [1, "col-4"], [4, "ngIf"], [1, "btn", "btn-success"], ["type", "button", 3, "click"], ["alt", "", 3, "src"], [1, "col"], [1, "col-6"]],
  template: function VehiclesPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Vehicle Models");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Our rental fleet");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 1)(8, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, VehiclesPageComponent_div_9_Template, 3, 2, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, VehiclesPageComponent_div_11_Template, 2, 1, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, VehiclesPageComponent_div_13_Template, 47, 7, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Book");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.vehicles);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.selectedVehicle);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.selectedVehicle);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
  styles: ["img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdmVoaWNsZXMtcGFnZS92ZWhpY2xlcy1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(1211), __webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map