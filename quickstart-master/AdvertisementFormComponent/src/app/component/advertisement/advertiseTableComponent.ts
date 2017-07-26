import {Component, NgModule,EventEmitter} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import { advertiseService } from "../advertiseService.component";

@Component({
  selector: 'myadvertiseTable',
  templateUrl:'./advertiseTable.html',
  inputs:['childTable']
})


export class advertiseTableComponent  {

  constructor (private advertiseService: advertiseService){
  }
  displayAd(){
      return this.advertiseService.getAllAdvertises();
  }
  deleteObject(index:any){
      return this.advertiseService.deleteAdvertise(index);
  }
    }

         
