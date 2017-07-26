import { Component, NgModule } from '@angular/core';
import{TemplateDrivenComopnent} from './components/TemplateDrivenForm/TemplateDrivenForm.component';
import{ModelDrivenComopnent} from './components/ModelDrivenForm/ModelDrivenForm.component';
import{FormBuilderComponent} from './components/FormBuilder/FormBuilder.component';
import { FormsModule, ReactiveFormsModule, FormBuilder,FormControl,FormGroup } from '@angular/forms';
import { ProductService } from './services/ProductService/ProductService';
import { AdvertisementTableComponent } from './components/AdvertisementTableComponent.component';
import{EditProductComponent} from './components/EditProductComponent';
@Component({
  selector: 'my-app',
  template: `<router-outlet></router-outlet>`,
  
   providers: [ProductService]
})
export class AppComponent  
{
   
}
