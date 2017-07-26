import { Component } from '@angular/core';
import{FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
selector: 'model-driven-form',
templateUrl: `app/components/ModelDrivenForm/mform.html`
})

export class ModelDrivenComopnent{
    productForm = new FormGroup({ 
        name: new FormControl(null,  [Validators.required, Validators.minLength(3),Validators.maxLength(8)]),
         quantity: new FormControl(50), 
         price: new FormControl()
         });
onSubmit() { 
    console.log(this.productForm.value);
 } 
}