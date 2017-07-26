import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Router } from '@angular/router'; 
import 'rxjs/add/operator/map'
@Injectable()

export class ProductService {

constructor(private _http: Http) { 

}

/*editAdvertise(editAd:any){
     this.router.navigate(['/Edit', editAd]);
} */

postAd() {
        let url = "http://192.168.3.144:9000/postAd";
        let headers = new Headers();
        headers.append('auth-token', '5976e96a1c0edf75e32798bf');
        headers.append('Content-Type', 'application/json');

        let options = new RequestOptions({ headers: headers });
        let jsonReq = {"title": "laptop sale", "name": "Heet Palod", "category": "Mobile", "description": "intel core 3"};
        return this._http.post(url, jsonReq, options)
			.map((response: Response)=>response.json());

    }

serviceAdvList:{newName:any, newCat:any, newdesc:any}[] = [];

getProducts()
 { 
     return  this.serviceAdvList;

 }
 advPush1(childAd:any)
{
    this.serviceAdvList.push(childAd);
    console.log(this.serviceAdvList);
}

 deleterow1(obj:any){
var index=this.serviceAdvList.indexOf(obj,0);
if(index>-1)
{
    this.serviceAdvList.splice(index,1)
}
}
}