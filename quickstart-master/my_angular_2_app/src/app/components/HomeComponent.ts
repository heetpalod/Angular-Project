import { Component,ViewChild } from '@angular/core';
import { ProductService } from '../services/ProductService/ProductService';
import{AdvertisementTableComponent} from '../components/AdvertisementTableComponent.component';
@Component({
selector: 'home-comp',
template: `<base href="/">
            <body>
            <my-ad (childEvent)=productService.advPush1($event)> </my-ad>
             <my-adv-table> </my-adv-table>`,
providers:[ProductService]
})

export class HomeComponent{
   @ViewChild(AdvertisementTableComponent) atc: AdvertisementTableComponent;

  appFun(newAd:any)
  {
    console.log(newAd);
    //this.productService.advPush1(newAd);
  }
 constructor(private productService: ProductService) { 
   
         }    
}