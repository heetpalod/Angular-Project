import { Component } from '@angular/core';
import { advertiseService } from "./component/advertiseService.component";

@Component({
  selector: 'my-app',
  template:   `<myadvertise (childEvent)="advertiseService.push1($event)"> </myadvertise>
  <myadvertiseTable></myadvertiseTable>`,
  providers:[advertiseService],
  //`<myBuilderForm> </myBuilderForm>`
  //`<myModelDriven> </myModelDriven>`
  //`<myTemplateDriven> </myTemplateDriven>`
})

export class AppComponent { 
  constructor(private advertiseService: advertiseService){

  }

  /*advertisePrint(obj : any) {
    console.log("App get ", obj);
    this.advertiseService.addAdvertise(obj);
  }*/
}
