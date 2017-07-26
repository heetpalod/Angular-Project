import { Component } from '@angular/core';
import { ProductService } from '../services/ProductService/ProductService';
import { Router } from '@angular/router'; 
@Component({
selector: 'my-adv-table',
templateUrl: `app/components/table.html`,
//inputs: ['appTextBox']
})

export class AdvertisementTableComponent{

advList:{newName:any, newCat:any, newdesc:any}[] = [];
advPush(childAd:any)
{
    this.advList.push(childAd);
    console.log(this.advList);
}

deleterow(obj:any)
 {
 return this.productService.deleterow1(obj);
 }
constructor(private productService:ProductService,private router: Router){
}

onClick(Obj:any){
    return Obj;
}

getAdfromService()
{
   return this.productService.getProducts();
}
}