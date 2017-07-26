import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@ Injectable()

export class advertiseService {
//     results: string[];

//     constructor(private _http: Http) {

//     }
//     getCategories() {
//         let url = "http://192.168.3.144:9000/categories";
//         return this._http.get(url).map((response: Response) => response.json());
//     }

//     postAd(postAdvobj: any) {
//         let url = "http://192.168.3.144:9000/postAd";

//         let headers = new Headers();
//         headers.append('auth-token', '5976e96a1c0edf75e32798bf');
//         headers.append('Content-Type', 'application/json');

//         let options = new RequestOptions({ headers: headers });
//         let jsonReq = { "title": postAdvobj.title, "name": postAdvobj.name, "category": postAdvobj.category, "description": postAdvobj.desc };
//         let obj = this._http.post(url, jsonReq, options)
//             .map((response: Response) => response.json());
//         obj.subscribe((data: any) => {
//             console.log("Received products: ", data)
//         });

//     }

// getAllAds() {
//       let url = "http://192.168.3.144:9000/posts"; //Akshay machine
//         let headers = new Headers();
//         headers.append('auth-token', '5976e96a1c0edf75e32798bf');
//         headers.append('Content-Type', 'application/json');

//         let options = new RequestOptions({ headers: headers });
//         return this._http.get(url, options).
//             map((response: Response) => response.json());
      
//     }

//     DeleteAdvert(id:any){
//         let urldel="http://192.168.3.144:9000/post?postId=";
//         return  this._http.delete(urldel+id).map((response:Response)=>response.json());

    //}
}
