// import { Component } from '@angular/core';
// import { advertiseService } from '../../services/Advertise/postAd.service';
// import { Http } from '@angular/http';

// @Component({
//     selector: 'my-ads',
//     templateUrl: `./AllAds.html`,

// })

// export class AllAdsComponent {
    // advertises: any = [];
    // deladvertises: any = [];

    // constructor(private productService: ProductService) {
    //     this.displayAllAds();
    // }

    // displayAllAds() {

    //     this.productService.getAllAds().subscribe((data) => {
    //         this.advertises = data.data.mypostList;
    //         console.log('Received products:', this.advertises)
    //     });
    // }

    // DeleteAd(obj: any) {
    //     this.productService.DeleteAdvert(obj.id).subscribe((data)=>{
    //         console.log("delete",data);
    //         this.displayAllAds();
    //     });
        

    // }


    // // onSubmit(data: any) {
    //     this.productService.postAd(data);
    //     // this.productService.addAdvertise(data);
    // }

//}
