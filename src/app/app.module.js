"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var closure_component_1 = require("./components/closure/closure.component");
var object_component_1 = require("./components/object/object.component");
var hoisting_component_1 = require("./components/hoisting/hoisting.component");
var function_component_1 = require("./components/function/function.component");
var datatype_component_1 = require("./components/datatype/datatype.component");
var scope_component_1 = require("./components/scope/scope.component");
var app_routing_1 = require("./app.routing");
var home_component_1 = require("./components/home/home.component");
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, http_1.HttpModule, forms_1.FormsModule, app_routing_1.routing],
        declarations: [app_component_1.AppComponent, home_component_1.HomeComponent, datatype_component_1.DatatypeComponent, function_component_1.FunctionComponent, hoisting_component_1.HoistingComponent, scope_component_1.ScopeComponent, object_component_1.ObjectComponent, closure_component_1.ClosureComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map