import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  scrollTop(){
    window.scrollTo(0, 0);
  }
 }
