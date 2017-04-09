import { Component } from '@angular/core';
import { AppComponent } from "../../app.component";

@Component({
    moduleId: module.id,
    selector: 'function',
    templateUrl: 'function.component.html'
})
export class FunctionComponent {
    constructor(public appComponent : AppComponent){
    }
    scrollTop(){
        this.appComponent.scrollTop();
    }
}