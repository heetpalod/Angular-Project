import { Component,NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import{FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
selector: 'form-builder',
templateUrl: `app/components/FormBuilder/bform.html`
})

export class FormBuilderComponent{
   productForm: FormGroup;
    constructor(private formBuilder: FormBuilder) 
    { 
        this.productForm = this.formBuilder.group({
             name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(8)]], quantity: [], price: []
            });
 }
}