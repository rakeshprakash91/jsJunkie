import { ScopeComponent } from './components/scope/scope.component';
import { AboutComponent } from './components/about/about.component';
import { ClosureComponent } from './components/closure/closure.component';
import { HoistingComponent } from './components/hoisting/hoisting.component';
import { ObjectComponent } from './components/object/object.component';
import { FunctionComponent } from './components/function/function.component';
import { DatatypeComponent } from './components/datatype/datatype.component';
import { HomeComponent } from './components/home/home.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    }, {
        path: 'data-types',
        component: DatatypeComponent
    },
    {
        path: 'functions',
        component: FunctionComponent
    },
    {
        path: 'hoisting',
        component: HoistingComponent
    },
    {
        path: 'scope',
        component: ScopeComponent
    },
    {
        path: 'object',
        component: ObjectComponent
    },
    {
        path: 'closure',
        component: ClosureComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes,{useHash : true});
