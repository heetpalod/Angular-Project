import { Injectable } from '@angular/core';
@Injectable() 
export class advertiseService 
{ 
 
    products:any = [];
    push1(obj:any){
        this.products.push(obj);
        console.log(this.products);
    }
    getAllAdvertises(){ 
        return this.products;
    }
    addAdvertise(item:Object){
        this.products.push(item);
        console.log("Add adv ",this.products);
    }
    deleteAdvertise(index:any)
    {
        if(index !== -1){
            this.products.splice(index,1)

        }
    }
  
}
