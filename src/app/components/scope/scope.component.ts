import { Component } from '@angular/core';
import { AppComponent } from "../../app.component";

@Component({
    moduleId: module.id,
    selector: 'scope',
    templateUrl: 'scope.component.html',
})
export class ScopeComponent {
    constructor(public appComponent : AppComponent){
    }
    scrollTop(){
        this.appComponent.scrollTop();
    }
}