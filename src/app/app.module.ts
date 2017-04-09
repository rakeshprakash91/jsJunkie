import { AboutComponent } from './components/about/about.component';
import { ClosureComponent } from './components/closure/closure.component';
import { ObjectComponent } from './components/object/object.component';
import { HoistingComponent } from './components/hoisting/hoisting.component';
import { FunctionComponent } from './components/function/function.component';
import { DatatypeComponent } from './components/datatype/datatype.component';
import { ScopeComponent } from './components/scope/scope.component';
import { routing } from './app.routing';
import { HomeComponent } from './components/home/home.component';
import { NgModule, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {} from '@angular/core';

enableProdMode();
@NgModule({
  imports: [BrowserModule, HttpModule, FormsModule, routing],
  declarations: [AppComponent, HomeComponent, DatatypeComponent, FunctionComponent, HoistingComponent, ScopeComponent, ObjectComponent, ClosureComponent, AboutComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
