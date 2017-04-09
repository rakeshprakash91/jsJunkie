import { Component } from '@angular/core';
import { AppComponent } from "../../app.component";

@Component({
    moduleId: module.id,
    selector: 'hoisting',
    templateUrl: 'hoisting.component.html',
})
export class HoistingComponent {
    constructor(public appComponent : AppComponent){
    }
    scrollTop(){
        this.appComponent.scrollTop();
    }
}
