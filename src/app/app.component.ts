import { Component } from '@angular/core';

declare const myFun: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'One-Mount-Case-Study-FrontEnd';

  onActivate($event: any) {
    window.scroll(0, 0);
    myFun();
  }
}
