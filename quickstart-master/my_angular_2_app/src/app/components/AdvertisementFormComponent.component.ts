import { Component } from '@angular/core';
import { ProductService } from '../services/ProductService/ProductService';
import { EventEmitter} from '@angular/core';

@Component({
selector: 'my-ad',
templateUrl: `app/components/form.html`,
outputs: ['childEvent']
})

export class AdvertisementFormComponent{
    constructor(private productService:ProductService){
}
    YourName:string="Heet";
    Category:string[] =["Cloths","Furniture","Mobile","Real Estate"];

    name2:any;
    cat2:any;
    desc2:any;

    obj:any;

    AdDetails_All(name:any,cat:any,desc:any):void
    {

        console.log("name: ",name,"cat: ",cat,"description: ",desc);
      
        this.obj.push({
                    Name:name,
                    Category : cat,
                    Description: desc,
                });
        console.log("Object", this.obj);

        for (let i = 0; i < this.obj.length; i++)
        {
            console.log(this.obj[i]);
        }

    }

    public childEvent= new EventEmitter<any>();
    onChange(name:any,cat:any,desc:any) 
    { 
        this.productService.postAd().subscribe((data)=> {
        console.log('Response: ', data) 
        });
        let newobj =
        {
            newName:name,
            newCat:cat,
            newDesc:desc
        }

       this.childEvent.emit(newobj);

    } 

 }