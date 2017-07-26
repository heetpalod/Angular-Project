import{Component} from "@angular/core";
import {FormsModule} from "@angular/forms";
@Component({
  selector: 'myTemplateDriven',
  templateUrl: './templateDrivenForm.html' 
})

export class templateDrivenForm {
 option = [
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
}
