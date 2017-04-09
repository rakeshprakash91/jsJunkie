import { Component } from '@angular/core';
import { AppComponent } from "../../app.component";

@Component({
    moduleId: module.id,
    selector: 'object',
    templateUrl: 'object.component.html',
})
export class ObjectComponent {
constructor(public appComponent : AppComponent){
    }
    scrollTop(){
        this.appComponent.scrollTop();
    }
}
