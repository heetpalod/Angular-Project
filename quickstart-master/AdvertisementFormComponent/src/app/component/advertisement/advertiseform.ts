import {Component, NgModule,EventEmitter} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {}
import { advertiseService } from "../advertiseService.component";
@Component({
  selector: 'myadvertise',
  templateUrl:'./advertiseform.html',
  outputs:['childEvent']
})


export class advertiseComponent  {
constructor( private productService: advertiseService){}
  title="Advertisement";
    prodList:any = [];
    options=[
        {
            name:"Furniture",
            value:'furniture'
        }, 
        {
            name:"Hardware",
            value:'hardware'
        }, 
        {
            name:"Mobile",
            value:'mobile'
        }];

        public childEvent=new EventEmitter<Object>();


        addProduct(name:string,category:string,price:number,desc:string){
          //  this.childEvent.emit({'name':name,'category':category,'price':price,'desc':desc});
        }   
      
}
