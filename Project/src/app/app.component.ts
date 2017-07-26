import { Component } from '@angular/core';



@Component({
  selector: 'my-app',
  template: `<router-outlet></router-outlet>`, //<my-login><my-signup></my-signup></my-login>
})
export class AppComponent { name = 'Angular'; }
