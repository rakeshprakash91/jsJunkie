"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var scope_component_1 = require("./components/scope/scope.component");
var hoisting_component_1 = require("./components/hoisting/hoisting.component");
var function_component_1 = require("./components/function/function.component");
var datatype_component_1 = require("./components/datatype/datatype.component");
var home_component_1 = require("./components/home/home.component");
var router_1 = require("@angular/router");
var appRoutes = [
    {
        path: '',
        component: home_component_1.HomeComponent
    }, {
        path: 'data-types',
        component: datatype_component_1.DatatypeComponent
    },
    {
        path: 'functions',
        component: function_component_1.FunctionComponent
    },
    {
        path: 'hoisting',
        component: hoisting_component_1.HoistingComponent
    },
    {
        path: 'scope',
        component: scope_component_1.ScopeComponent
    },
    {
        path: 'object',
        component: scope_component_1.ScopeComponent
    },
    {
        path: 'closure',
        component: scope_component_1.ScopeComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map