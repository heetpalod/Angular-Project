import{Component} from "@angular/core";
import { FormsModule, FormControl, FormGroup, Validators } from "@angular/forms";
@Component({
  selector: 'myModelDriven',
  templateUrl: './modelDrivenForm.html' 
})

export class modelDrivenForm {
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

 productForm= new FormGroup({
     name: new FormControl(null,[Validators.required,Validators.minLength(3)]),
     category: new FormControl(null,[Validators.required]),
     price: new FormControl(0,[Validators.required]),
     desc: new FormControl(null,[Validators.required,Validators.maxLength(100)])
 });

 onSubmit(){
     console.log(this.productForm.value);
 }




}
