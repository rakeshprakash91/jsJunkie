import { Component } from '@angular/core';
import { AppComponent } from "../../app.component";
@Component({
    moduleId: module.id,
    selector: 'datatype',
    templateUrl: 'datatype.component.html'
})
export class DatatypeComponent {
    constructor(public appComponent : AppComponent){
    }
    scrollTop(){
        this.appComponent.scrollTop();
    }
}
