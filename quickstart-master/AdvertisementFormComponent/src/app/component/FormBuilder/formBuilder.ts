import{Component} from "@angular/core";
import { FormsModule, FormControl, FormGroup, Validators, FormBuilder } from "@angular/forms";
@Component({
  selector: 'myBuilderForm',
  templateUrl: './formBuilderForm.html' 
})

export class formBuilderForm {
  options = [
            {
                name: "Furniture",
                value: 'furniture'
            },
            {
                name: "Hardware",
                value: 'hardware'
            },
            {
                name: "Mobile",
                value: 'mobile'
            }
        ];

 productForm= FormGroup;
 constructor(private formBuilder: FormBuilder){
     this.productForm = this.formBuilder.group({
name:['Heet',[Validators.required, Validators.minLength(3)]],
category:[[],[Validators.required]],
price:[[],[Validators.required]],
desc:[[],[Validators.required]]   
})

 }

 onSubmit(){
     console.log(this.productForm.value);
 }




}
