import { Pipe, PipeTransform } from '@angular/core';
@Pipe({name: 'search'})

 export class SearchPipe implements PipeTransform { 
     transform(value: Array<any>,args:any): any { 
         let searchArray = []; 
             if (args.length>2) 
             { 
                 console.log(value);
                 for(let val of value) 
                 { 
                    if (val.newCat.match(args)) 
                    { 
                         searchArray.push(val);
                    } 
                 } 
                 console.log(searchArray);
                 return searchArray;
             }
             else return value;
         }
          
        } 
  