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

/***/ "../../../../../src/app/Services/DrinkMachineService/drink-machine-config-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrinkMachineStorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Created by vidhyasagar on 05.04.18.
 */
var DrinkMachineStorageService = /** @class */ (function () {
    function DrinkMachineStorageService(_http) {
        this._http = _http;
        this.drinkInfoLocalStorage = [];
        this.coinInfoLocalStorage = [];
    }
    /**
     *
     * @returns {Array<DrinkInfoModel>}
     */
    DrinkMachineStorageService.prototype.getDrinkInfoLocalStorage = function () {
        return this.drinkInfoLocalStorage;
    };
    /**
     * It fetches the drink info data from backend or in memory and
     * store it here to access all over the app.
     *
     */
    DrinkMachineStorageService.prototype.fetchAndStoreDrinkInfo = function () {
        var _this = this;
        this._http.get("./assets/data/drink_info_mockdata.json").subscribe(function (data) {
            _this.drinkInfoLocalStorage = data;
            console.log("data test after st" + JSON.stringify(_this.drinkInfoLocalStorage));
        });
    };
    /**
     * It fetches the coin info data from backend or in memory and
     * store it here to access all over the app.
     *
     */
    DrinkMachineStorageService.prototype.fetchAndStoreCoinInfo = function () {
        var _this = this;
        this._http.get("./assets/data/coin_info_mockdata.json").subscribe(function (data) {
            console.log("received coins " + JSON.stringify(data));
            _this.coinInfoLocalStorage = data;
        });
    };
    /**
     *
     * Here we fill the coins in the machine.
     *
     * @param coinValue
     */
    DrinkMachineStorageService.prototype.fillMachineCoins = function (coinVal) {
        this.coinInfoLocalStorage.forEach(function (coinInfo) {
            if (coinInfo.coinValue == coinVal) {
                coinInfo.numberOfCoinsAvailable = coinInfo.numberOfCoinsAvailable + 1;
            }
        });
    };
    DrinkMachineStorageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], DrinkMachineStorageService);
    return DrinkMachineStorageService;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#mainContainer{\n  background: rgba(0, 0, 0, 4);\n}\n\n\n\n\n.container-fluid {\n  height: 100%;\n  padding-left: 0px;\n  padding-right: 0px;\n}\n\n\nh1 {\n  font-family: Pacifico;\n  font-size: 35px;\n  font-style: normal;\n  font-variant: normal;\n  font-weight: 500;\n  line-height: 26.4px;\n  color: whitesmoke;\n}\n\nh3 {\n  font-family: Pacifico;\n  font-size: 14px;\n  font-style: normal;\n  font-variant: normal;\n  font-weight: 500;\n  line-height: 15.4px;\n}\np {\n  font-family: Pacifico;\n  font-size: 14px;\n  font-style: normal;\n  font-variant: normal;\n  font-weight: 400;\n  line-height: 20px;\n}\nblockquote {\n  font-family: Pacifico;\n  font-size: 21px;\n  font-style: normal;\n  font-variant: normal;\n  font-weight: 400;\n  line-height: 30px;\n}\npre {\n  font-family: Pacifico;\n  font-size: 13px;\n  font-style: normal;\n  font-variant: normal;\n  font-weight: 400;\n  line-height: 18.5714px;\n}\n\n\n/* Overriding styles */\n\n::-webkit-input-placeholder {\n  font-family: Pacifico!important;\n}\n\n:-moz-placeholder { /* Firefox 18- */\n  font-family: Pacifico!important;\n}\n::-moz-placeholder {  /* Firefox 19+ */\n  font-family: Pacifico!important;\n}\n\n\n\n.logout-button{\n  position: fixed;\n  margin-top: -2.5%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"snap-drawers\">\n  <div class=\"snap-drawer snap-drawer-left\">\n    <div>\n      <!--<h3>v Machine</h3>-->\n      <div class=\"demo-social\">\n      </div>\n      <ul>\n\n        <!--<li><a routerLink=\"newAccount\" routerLinkActive=\"active\">Account Info</a></li>-->\n\n        <li><a routerLink=\"drinkMachine\" routerLinkActive=\"active\">Drink Machine</a></li>\n        <li><a routerLink=\"fillCoins\" routerLinkActive=\"active\">Fill Coins</a></li>\n\n\n      </ul>\n\n\n    </div>\n  </div>\n  <div class=\"snap-drawer snap-drawer-right\"></div>\n</div>\n\n\n  <div id=\"content\" class=\"snap-content\">\n\n  <!--<div id=\"toolbar\"  class=\"row\">-->\n    <div id=\"open-left\"></div>\n\n\n  <div id=\"main-content\">\n\n\n    <router-outlet></router-outlet>\n\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
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
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_router__ = __webpack_require__("../../../../../src/app/app.router.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__drink_automatic_machine_drink_automatic_machine_component__ = __webpack_require__("../../../../../src/app/drink-automatic-machine/drink-automatic-machine.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__fill_machine_fill_machine_component__ = __webpack_require__("../../../../../src/app/fill-machine/fill-machine.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Services_DrinkMachineService_drink_machine_config_service__ = __webpack_require__("../../../../../src/app/Services/DrinkMachineService/drink-machine-config-service.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__drink_automatic_machine_drink_automatic_machine_component__["a" /* DrinkAutomaticMachineComponent */],
                __WEBPACK_IMPORTED_MODULE_8__fill_machine_fill_machine_component__["a" /* FillMachineComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                // FormsModule,
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */],
                // CountryPickerModule.forRoot(),
                __WEBPACK_IMPORTED_MODULE_5__app_router__["a" /* routes */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__Services_DrinkMachineService_drink_machine_config_service__["a" /* DrinkMachineStorageService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.router.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export router */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__drink_automatic_machine_drink_automatic_machine_component__ = __webpack_require__("../../../../../src/app/drink-automatic-machine/drink-automatic-machine.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fill_machine_fill_machine_component__ = __webpack_require__("../../../../../src/app/fill-machine/fill-machine.component.ts");



var router = [
    { path: 'drinkMachine', component: __WEBPACK_IMPORTED_MODULE_1__drink_automatic_machine_drink_automatic_machine_component__["a" /* DrinkAutomaticMachineComponent */] },
    { path: 'fillCoins', component: __WEBPACK_IMPORTED_MODULE_2__fill_machine_fill_machine_component__["a" /* FillMachineComponent */] },
];
var routes = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(router);


/***/ }),

/***/ "../../../../../src/app/drink-automatic-machine/coin-change-model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoinChange; });
/**
 * Created by vidhyasagar on 05.04.18.
 */
var CoinChange = /** @class */ (function () {
    function CoinChange(coinValue) {
        this._coinValue = coinValue;
    }
    Object.defineProperty(CoinChange.prototype, "coinValue", {
        get: function () {
            return this._coinValue;
        },
        set: function (value) {
            this._coinValue = value;
        },
        enumerable: true,
        configurable: true
    });
    return CoinChange;
}());



/***/ }),

/***/ "../../../../../src/app/drink-automatic-machine/drink-automatic-machine.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "label{\n  background-color: whitesmoke;\n  font-size: larger;\n}\n\n\n.roundButton{\n  height: 150px;\n  width: 150px;\n  border-radius: 50%;\n  border: 1px solid red;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/drink-automatic-machine/drink-automatic-machine.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"row\">\n\n  <h1 style=\"color: whitesmoke; display: inline; border: 1px solid green;font-size: 27px;margin-left: 1%;\" *ngFor=\"let coinInfo of _drinkMachineStorageService.coinInfoLocalStorage\">\n    Coin : {{coinInfo.coinValue}} Available : {{coinInfo.numberOfCoinsAvailable}}</h1>\n\n\n</div>\n\n\n\n\n<div class=\"col-lg-offset-2 col-xs-offset-2 col-sm-offset-2 col-md-offset-2\">\n\n\n\n\n\n<div class=\"row\">\n\n    <h1 style=\"color: red\">Please choose the drink</h1>\n\n  <div class=\"col-lg-2 col-xs-2 col-sm-2 col-md-2\">\n\n    <select class=\"btn btn-info\" #t (change)=\"fetchDrinkPrice(t.value)\">\n    <option *ngFor=\"let drinkInfo of _drinkMachineStorageService.drinkInfoLocalStorage\" [value]=\"drinkInfo.drinkId\">Product Id : {{drinkInfo.drinkId}}</option>\n    </select>\n\n   </div>\n\n  <br>\n\n   <h1 style=\"color: whitesmoke\">Price : {{drinkPriceToShow}}</h1>\n\n</div>\n\n\n  <div class=\"row\">\n\n    <div class=\"col-lg-2 col-xs-2 col-sm-2 col-md-2\">\n      <h1 style=\"color: #f5db05\">Insert the coins</h1>\n    </div>\n\n\n    <div class=\"col-lg-2 col-xs-2 col-sm-2 col-md-2\">\n      <button class=\"btn btn-warning btn-block roundButton\" (click)=\"addThrownCoinValue(0.10)\">10 Cent</button>\n    </div>\n    <div class=\"col-lg-2 col-xs-2 col-sm-2 col-md-2\">\n      <button class=\"btn btn-warning btn-block roundButton\" (click)=\"addThrownCoinValue(0.20)\">20 Cent</button>\n    </div>\n    <div class=\"col-lg-2 col-xs-2 col-sm-2 col-md-2\">\n      <button class=\"btn btn-warning btn-block roundButton\" (click)=\"addThrownCoinValue(0.50)\">50 Cent</button>\n    </div>\n    <div class=\"col-lg-2 col-xs-2 col-sm-2 col-md-2\">\n    <button class=\"btn btn-warning btn-block roundButton\" (click)=\"addThrownCoinValue(1.00)\">1 Euro</button>\n  </div>\n    <div class=\"col-lg-2 col-xs-2 col-sm-2 col-md-2\">\n    <button class=\"btn btn-warning btn-block roundButton\" (click)=\"addThrownCoinValue(2.00)\">2 Euro</button>\n  </div>\n  </div>\n\n\n\n\n<div class=\"row\">\n\n  <div class=\"col-lg-2 col-xs-2 col-sm-2 col-md-2\">\n    <h1 style=\"color: whitesmoke\">Paid : {{totallyPaid | number : '1.2-2'}}</h1>\n  </div>\n\n  <div *ngIf=\"drinkPriceNeedToPay>0\">\n    <h1 style=\"color: whitesmoke\">Need to Pay : {{drinkPriceNeedToPay | number : '1.2-2'}}</h1>\n  </div>\n\n  <div *ngIf=\"drinkPriceNeedToPay<0\">\n    <h1 style=\"color: red\">Paid. Stop throwing coins!</h1>\n  </div>\n\n  <div *ngIf=\"drinkPriceNeedToPay<0\">\n    <h1 style=\"color: whitesmoke\">Balance to give : {{balanceToGive | number : '1.2-2'}}</h1>\n  </div>\n\n\n</div>\n\n\n\n\n  <div class=\"row\">\n\n    <div *ngIf=\"drinkPriceNeedToPay<0\" class=\"col-lg-2 col-xs-2 col-sm-2 col-md-2\">\n      <h1 style=\"color: whitesmoke\">You get : </h1>\n\n      <h1 style=\"color: whitesmoke\">1 Euro * {{balInOneEuro}}</h1>\n      <h1 style=\"color: whitesmoke\">2 Euro * {{balInTwoEuro}}</h1>\n      <h1 style=\"color: whitesmoke\">50 Cent * {{balInFiftyCent}}</h1>\n      <h1 style=\"color: whitesmoke\">20 Cent * {{balInTwentyCent}}</h1>\n      <h1 style=\"color: whitesmoke\">10 Cent * {{balIn10Cent}}</h1>\n\n\n    </div>\n\n\n  </div>\n\n\n\n  <div class=\"row\">\n\n    <div *ngIf=\"hasSufficientChange == false\" class=\"col-lg-2 col-xs-2 col-sm-2 col-md-2\">\n      <h1 style=\"color: whitesmoke\">Not Sufficient Change! Please choose different product. </h1>\n    </div>\n\n\n  </div>\n\n\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/drink-automatic-machine/drink-automatic-machine.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrinkAutomaticMachineComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_DrinkMachineService_drink_machine_config_service__ = __webpack_require__("../../../../../src/app/Services/DrinkMachineService/drink-machine-config-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__coin_change_model__ = __webpack_require__("../../../../../src/app/drink-automatic-machine/coin-change-model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DrinkAutomaticMachineComponent = /** @class */ (function () {
    function DrinkAutomaticMachineComponent(_drinkMachineStorageService) {
        this._drinkMachineStorageService = _drinkMachineStorageService;
        this.drinkPriceToShow = 2.40;
        this.drinkPriceNeedToPay = 0;
        this.balanceToGive = 0;
        this.totallyPaid = 0;
        this.hasSufficientChange = true;
        this.balInTwoEuro = 0;
        this.balInOneEuro = 0;
        this.balInFiftyCent = 0;
        this.balInTwentyCent = 0;
        this.balIn10Cent = 0;
    }
    DrinkAutomaticMachineComponent.prototype.ngOnInit = function () {
        this._drinkMachineStorageService.fetchAndStoreCoinInfo();
        this._drinkMachineStorageService.fetchAndStoreDrinkInfo();
        this.drinkPriceNeedToPay = this.drinkPriceToShow;
    };
    /**
     * We detect the changes in UI and show the according price for
     * the choosen product ID.
     *
     * @param drinkId
     */
    DrinkAutomaticMachineComponent.prototype.fetchDrinkPrice = function (drinkId) {
        var _this = this;
        this._drinkMachineStorageService.drinkInfoLocalStorage.forEach(function (drinkInfo) {
            if (drinkInfo.drinkId == drinkId) {
                _this.drinkPriceToShow = drinkInfo.drinkPrice;
                _this.drinkPriceNeedToPay = drinkInfo.drinkPrice;
                //TODO break from for each loop after finding.
            }
        });
    };
    /**
     *
     * add thrown coin values to check paid and need to
     * pay values
     *
     * @param coinValue
     */
    DrinkAutomaticMachineComponent.prototype.addThrownCoinValue = function (coinValue) {
        this.totallyPaid = this.totallyPaid + coinValue;
        this.drinkPriceNeedToPay = this.drinkPriceNeedToPay - coinValue;
        if (this.drinkPriceNeedToPay < 0) {
            this.balanceToGive = Math.abs(this.drinkPriceNeedToPay);
            this.analyzeAndGiveChange();
        }
    };
    /**
     * MAIN LOGIC:
     * analyze the paid and balance values to pay back using
     * available coins.
     */
    DrinkAutomaticMachineComponent.prototype.analyzeAndGiveChange = function () {
        var coinChange = [];
        if (this.balanceToGive > 0) {
            var balance = this.balanceToGive;
            while (balance > 0) {
                if (balance >= 2.0 && this.hasEnoughCoins(2.0)) {
                    console.log("add 2 euro");
                    coinChange.push(new __WEBPACK_IMPORTED_MODULE_2__coin_change_model__["a" /* CoinChange */](2.0));
                    balance = balance - 2.0;
                    balance = parseFloat(balance.toFixed(1));
                    this.deduceTheAmountOfCoins(2.0);
                    continue;
                }
                else if (balance >= 1.0 && this.hasEnoughCoins(1.0)) {
                    console.log("add 1 euro");
                    coinChange.push(new __WEBPACK_IMPORTED_MODULE_2__coin_change_model__["a" /* CoinChange */](1.0));
                    balance = balance - 1.0;
                    balance = parseFloat(balance.toFixed(1));
                    this.deduceTheAmountOfCoins(1.0);
                    continue;
                }
                else if (balance >= 0.50 && this.hasEnoughCoins(0.50)) {
                    console.log("add 50 cent");
                    coinChange.push(new __WEBPACK_IMPORTED_MODULE_2__coin_change_model__["a" /* CoinChange */](0.50));
                    balance = balance - 0.50;
                    this.deduceTheAmountOfCoins(0.50);
                    balance = parseFloat(balance.toFixed(1));
                    continue;
                }
                else if (balance >= 0.20 && this.hasEnoughCoins(0.20)) {
                    console.log("add 20 cent");
                    coinChange.push(new __WEBPACK_IMPORTED_MODULE_2__coin_change_model__["a" /* CoinChange */](0.20));
                    balance = balance - 0.20;
                    this.deduceTheAmountOfCoins(0.20);
                    balance = parseFloat(balance.toFixed(1));
                    continue;
                }
                else if (balance >= 0.10 && this.hasEnoughCoins(0.10)) {
                    console.log("add 10 cent " + balance);
                    coinChange.push(new __WEBPACK_IMPORTED_MODULE_2__coin_change_model__["a" /* CoinChange */](0.10));
                    balance = balance - 0.10;
                    this.deduceTheAmountOfCoins(0.10);
                    balance = parseFloat(balance.toFixed(1));
                    continue;
                }
                else {
                    console.log("not sufficient " + balance);
                    this.hasSufficientChange = false;
                    break;
                }
            }
        }
        if (this.hasSufficientChange == true) {
            this.prepareCoinChangeUI(coinChange);
            this.totallyPaid = 0;
        }
    };
    /**
     *
     * calculating the amount of coins to show in FrontEnd.
     *
     * @param coinChange
     */
    DrinkAutomaticMachineComponent.prototype.prepareCoinChangeUI = function (coinChange) {
        var _this = this;
        if (coinChange.length > 0) {
            coinChange.forEach(function (coinInfo) {
                console.log("coin info " + coinInfo.coinValue);
                if (coinInfo.coinValue == 2.0) {
                    _this.balInTwoEuro = _this.balInTwoEuro + 1;
                }
                else if (coinInfo.coinValue == 1.0) {
                    _this.balInOneEuro = _this.balInOneEuro + 1;
                }
                else if (coinInfo.coinValue == 0.50) {
                    _this.balInFiftyCent = _this.balInFiftyCent + 1;
                }
                else if (coinInfo.coinValue == 0.20) {
                    _this.balInTwentyCent = _this.balInTwentyCent + 1;
                }
                else if (coinInfo.coinValue == 0.10) {
                    _this.balInTwentyCent = _this.balInTwentyCent + 1;
                }
            });
        }
    };
    /**
     *
     * Checks whether we have enough coins in the machine, by comparing
     * in the In-Memory.
     *
     * @param coin
     * @returns {boolean}
     */
    DrinkAutomaticMachineComponent.prototype.hasEnoughCoins = function (coin) {
        var available = false;
        this._drinkMachineStorageService.coinInfoLocalStorage.forEach(function (coinInfo) {
            if (coinInfo.coinValue == coin) {
                if (coinInfo.numberOfCoinsAvailable > 0) {
                    available = true;
                    //TODO end the for each loop
                }
            }
        });
        return available;
    };
    /**
     *
     * deduce the number of coins in the machine, whenever we pay
     * the balance
     *
     * @param coinVal
     */
    DrinkAutomaticMachineComponent.prototype.deduceTheAmountOfCoins = function (coinVal) {
        this._drinkMachineStorageService.coinInfoLocalStorage.forEach(function (coinInfo) {
            if (coinInfo.coinValue == coinVal) {
                coinInfo.numberOfCoinsAvailable = coinInfo.numberOfCoinsAvailable - 1;
            }
        });
    };
    DrinkAutomaticMachineComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-drink-automatic-machine',
            template: __webpack_require__("../../../../../src/app/drink-automatic-machine/drink-automatic-machine.component.html"),
            styles: [__webpack_require__("../../../../../src/app/drink-automatic-machine/drink-automatic-machine.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__Services_DrinkMachineService_drink_machine_config_service__["a" /* DrinkMachineStorageService */]])
    ], DrinkAutomaticMachineComponent);
    return DrinkAutomaticMachineComponent;
}());



/***/ }),

/***/ "../../../../../src/app/fill-machine/fill-machine.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".roundButton{\n  height: 150px;\n  width: 150px;\n  border-radius: 50%;\n  border: 1px solid red;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/fill-machine/fill-machine.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div>\n  <div class=\"col-lg-2 col-xs-2 col-sm-2 col-md-2\">\n    <h1 style=\"color: #f5db05\">Insert the coins</h1>\n  </div>\n\n\n  <div class=\"col-lg-2 col-xs-2 col-sm-2 col-md-2\">\n    <button class=\"btn btn-warning btn-block roundButton\" (click)=\"fillTheCoins(0.10)\">10 Cent</button>\n  </div>\n  <div class=\"col-lg-2 col-xs-2 col-sm-2 col-md-2\">\n    <button class=\"btn btn-warning btn-block roundButton\" (click)=\"fillTheCoins(0.20)\">20 Cent</button>\n  </div>\n  <div class=\"col-lg-2 col-xs-2 col-sm-2 col-md-2\">\n    <button class=\"btn btn-warning btn-block roundButton\" (click)=\"fillTheCoins(0.50)\">50 Cent</button>\n  </div>\n  <div class=\"col-lg-2 col-xs-2 col-sm-2 col-md-2\">\n    <button class=\"btn btn-warning btn-block roundButton\" (click)=\"fillTheCoins(1.00)\">1 Euro</button>\n  </div>\n\n  <div class=\"col-lg-2 col-xs-2 col-sm-2 col-md-2\">\n    <button class=\"btn btn-warning btn-block roundButton\" (click)=\"fillTheCoins(2.00)\">2 Euro</button>\n\n  </div>\n\n</div>\n\n<div>\n\n  <h1 style=\"color: whitesmoke; border: 1px solid #082635;font-size: 27px;margin-left: 1%;\" *ngFor=\"let coinInfo of _drinkMachineStorageService.coinInfoLocalStorage\">\n    Coin : {{coinInfo.coinValue}} Available : {{coinInfo.numberOfCoinsAvailable}}</h1>\n\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/fill-machine/fill-machine.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FillMachineComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_DrinkMachineService_drink_machine_config_service__ = __webpack_require__("../../../../../src/app/Services/DrinkMachineService/drink-machine-config-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FillMachineComponent = /** @class */ (function () {
    function FillMachineComponent(_drinkMachineStorageService) {
        this._drinkMachineStorageService = _drinkMachineStorageService;
    }
    FillMachineComponent.prototype.ngOnInit = function () {
    };
    /**
     *
     * fill the coin in the machine
     *
     * @param coinValue
     */
    FillMachineComponent.prototype.fillTheCoins = function (coinValue) {
        this._drinkMachineStorageService.fillMachineCoins(coinValue);
    };
    FillMachineComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-fill-machine',
            template: __webpack_require__("../../../../../src/app/fill-machine/fill-machine.component.html"),
            styles: [__webpack_require__("../../../../../src/app/fill-machine/fill-machine.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__Services_DrinkMachineService_drink_machine_config_service__["a" /* DrinkMachineStorageService */]])
    ], FillMachineComponent);
    return FillMachineComponent;
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
    production: false,
    firebase: {
        apiKey: "AIzaSyDnEMtuItL48n5Iy7bFUocVQdKg6uIX2lk",
        authDomain: "hobbymatecentral.firebaseapp.com",
        databaseURL: "https://hobbymatecentral.firebaseio.com",
        projectId: "hobbymatecentral",
        storageBucket: "hobbymatecentral.appspot.com",
        messagingSenderId: "664234614690"
    }
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map