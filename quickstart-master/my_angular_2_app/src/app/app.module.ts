import { Component,NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule, FormBuilder,FormControl,FormGroup } from '@angular/forms';
import { HttpModule } from '@angular/http'; 
import { RouterModule } from '@angular/router'; 
import { AppComponent }  from './app.component';
import { AdvertisementFormComponent }  from './components/AdvertisementFormComponent.component';
import{AdvertisementTableComponent} from './components/AdvertisementTableComponent.component';
import{SearchPipe} from './components/search.component'
import{TemplateDrivenComopnent} from './components/TemplateDrivenForm/TemplateDrivenForm.component';
import{ModelDrivenComopnent} from './components/ModelDrivenForm/ModelDrivenForm.component';
import{FormBuilderComponent} from './components/FormBuilder/FormBuilder.component';
import { ProductService } from './services/ProductService/ProductService';
import{EditProductComponent} from './components/EditProductComponent';
import{HomeComponent} from './components/HomeComponent'; 

@NgModule({
  imports:      [ BrowserModule,FormsModule,ReactiveFormsModule, HttpModule,
                  RouterModule.forRoot([  {path: '', component: HomeComponent}, {path: 'Edit', component: EditProductComponent} ]) ],
  declarations: [ AppComponent,AdvertisementFormComponent,AdvertisementTableComponent,SearchPipe,TemplateDrivenComopnent,ModelDrivenComopnent,FormBuilderComponent,EditProductComponent,HomeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { 

}
