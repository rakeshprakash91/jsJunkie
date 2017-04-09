import { Component } from '@angular/core';
import { AppComponent } from "../../app.component";
@Component({
    moduleId: module.id,
    selector: 'closure',
    templateUrl: 'closure.component.html',
})
export class ClosureComponent {
    constructor(public appComponent : AppComponent){
    }
    scrollTop(){
        this.appComponent.scrollTop();
    }
}
