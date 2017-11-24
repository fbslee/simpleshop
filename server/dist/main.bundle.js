webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".inputForm{\n    width: 80%;\n    margin-bottom: 5%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"margin-left:0; margin-right: 0\">\n  <div class=\"col-xs-12\" *ngIf=\"!done\">\n    <div class=\"col-xs-6 col-xs-offset-3\">\n      <h2 align=\"center\">Make your purchase</h2>\n      <h5 align=\"center\">Choose the items to add to your cart</h5>\n    </div>\n    <div class=\"col-xs-10 col-xs-offset-1\">\n      <div class=\"col-xs-6\" *ngFor=\"let item of listItems; let i = index\" (click)=\"addItem(item)\">\n        <div class=\"col-xs-6\">\n          <p>{{item.name}}</p>\n        </div>\n        <div class=\"col-xs-6\">\n          <p>$ {{item.price}}</p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xs-10 col-xs-offset-1\" *ngIf=\"cart.length > 0\">\n      <div class=\"col-xs-10 col-xs-offset-1\">\n        <h3>Here are the items you chose</h3>\n      </div>\n      <div class=\"col-xs-10 col-xs-offset-1\">\n          <div class=\"col-xs-4\">\n            <h5>Item Name</h5>\n          </div>\n          <div class=\"col-xs-4\">\n            <h5>Price per item</h5>\n          </div>\n          <div class=\"col-xs-4\">\n            <h5>Amount</h5>\n          </div>\n      </div>\n      <div class=\"col-xs-10 col-xs-offset-1\" *ngFor=\"let item of cart; let i = index\">\n          <div class=\"col-xs-4\">\n            <p>{{item.name}}</p>\n          </div>\n          <div class=\"col-xs-4\">\n            <p>$ {{item.price}}</p>\n          </div>\n          <div class=\"col-xs-4\">\n            <p>{{item.amount}}</p>\n          </div>\n      </div>\n      <div class=\"col-xs-10 col-xs-offset-1\">\n        <h4>Your total is $ {{total}} <button (click)=\"showForm()\">Checkout</button></h4>\n      </div>\n    </div>\n    <div class=\"col-xs-10 col-xs-offset-1\" *ngIf=\"formShow\">\n      <h4 align=\"center\">Here is your credit card form</h4>\n        <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\" novalidate>\n          <div class=\"col-xs-4 col-xs-offset-2\">\n              <input name=\"name\" ngModel required #name=\"ngModel\" class=\"inputForm\" placeholder=\"Name on the Card\">\n          </div>\n          <div class=\"col-xs-4 col-xs-offset-2\">\n              <input name=\"CC\" ngModel required #CC=\"ngModel\" class=\"inputForm\" placeholder=\"Card Number\">\n          </div>\n          <div class=\"col-xs-4 col-xs-offset-2\">\n              <input name=\"exp\" ngModel required #exp=\"ngModel\" class=\"inputForm\" placeholder=\"Expiration Date\">\n          </div>\n          <div class=\"col-xs-4 col-xs-offset-2\">\n              <input name=\"CVC\" ngModel required #CVC=\"ngModel\" class=\"inputForm\" placeholder=\"CVC\">\n          </div>\n          <div class=\"col-xs-4 col-xs-offset-2\">\n              <input name=\"address\" ngModel required #address=\"ngModel\" class=\"inputForm\" placeholder=\"Address\">\n          </div>\n          <div class=\"col-xs-4 col-xs-offset-2\">\n              <input name=\"zip\" ngModel required #zip=\"ngModel\" class=\"inputForm\" placeholder=\"Zip Code\">\n          </div>\n          <div class=\"col-xs-6 col-xs-offset-2\">\n            <button>Submit</button>\n          </div>\n        </form>\n    </div>\n  </div>\n  <div class=\"col-xs-12\" *ngIf=\"done\">\n      <h3>Congratulations! You have successfully checked out</h3>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(http) {
        this.http = http;
        this.title = 'app';
        this.formShow = false;
        this.done = false;
        this.listItems = [
            { "name": "Coke", "price": 1.00, "amount": 1 },
            { "name": "Hot Cheetos", "price": 1.50, "amount": 1 },
            { "name": "Chocolate bar", "price": 0.75, "amount": 1 },
            { "name": "Gum", "price": 1.25, "amount": 1 }
        ];
        this.cart = [];
        this.total = 0;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.uri = window.location.href + 'api/purchase';
        this.transaction = {
            "command": "cc:sale",
            "amount": "",
            "amount_detail": {
                "tax": "0.00",
                "tip": "0.00"
            },
            "creditcard": {
                "cardholder": "",
                "number": "",
                "expiration": "",
                "cvc": "",
                "avs_street": "",
                "avs_zip": ""
            },
            "invoice": "12356"
        };
    }
    AppComponent.prototype.ngOnInit = function () {
        console.log('where am i', window.location.href);
    };
    AppComponent.prototype.addItem = function (item) {
        if (this.cart.indexOf(item) === -1) {
            this.cart.push(item);
        }
        else {
            this.cart[this.cart.indexOf(item)].amount += 1;
        }
        this.updateTotal(item);
    };
    AppComponent.prototype.updateTotal = function (item) {
        this.total += item.price;
    };
    AppComponent.prototype.showForm = function () {
        this.formShow = true;
    };
    AppComponent.prototype.onSubmit = function (f) {
        var _this = this;
        if (f.valid === false) {
            alert('Please finish filling out the form');
        }
        else {
            this.transaction.amount = this.total.toString();
            this.transaction.creditcard.cardholder = f.value.name.toString();
            this.transaction.creditcard.number = f.value.CC.toString();
            this.transaction.creditcard.expiration = f.value.exp.toString();
            this.transaction.creditcard.cvc = f.value.exp.toString();
            this.transaction.creditcard.avs_street = f.value.address.toString();
            this.transaction.creditcard.avs_zip = f.value.zip.toString();
            this.http.post(this.uri, this.transaction, { "headers": this.headers })
                .map(function (data) {
                return data.json();
            })
                .subscribe(function (data) {
                if (data.result === "Error") {
                    alert('Please check your credit card form for any mistakes');
                }
                else {
                    f.reset();
                    _this.done = true;
                }
            });
        }
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map