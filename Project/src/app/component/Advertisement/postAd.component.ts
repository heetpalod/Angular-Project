import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdvertisementService } from '../../services/advertisementService/advertisement.service';

@Component({
  selector: 'my-postad',
  templateUrl: `./postad.html`,
  styleUrls: [`./postad.css`],
})

export class PostAdComponent  { 
    options: Array<any> = [];
    advertisements: Array<any> = [];
    constructor(private router: Router, private advertisementservice: AdvertisementService) {
        advertisementservice.getCategories().subscribe((data) => {
            this.options = data.data.itemList;
        });
        advertisementservice.getAllAdvertisements().subscribe((data) => {
            this.advertisements = data.data.mypostList
        })

    }
    onSubmit(object: Object) {
        this.advertisementservice.postAd(object).subscribe((data) => {
            console.log('Response: ', data)
        });
        this.advertisementservice.getAllAdvertisements().subscribe((data) => {
            this.advertisements = data.data.mypostList
            console.log('list', data);
        })
    
    }
    deleteObject(index: any) {
        this.advertisementservice.deleteAdvertisement(index).subscribe((data) => {
            console.log('Response: ', data)
        });
        this.advertisementservice.getAllAdvertisements().subscribe((data) => {
            this.advertisements = data.data.mypostList
            console.log('list', data);
        })
    }
    editObject(index: any) {
      console.log("index r postad",index)
        this.router.navigate(['/editAd', index]);
    }
    
}
