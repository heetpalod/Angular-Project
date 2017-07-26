import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import{ advertiseComponent} from './component/advertisement/advertiseform';
import{ templateDrivenForm} from './component/TDF/templateDriven.component';
import{ modelDrivenForm} from './component/MDF/modelDriven.component';
import{ formBuilderForm} from './component/FormBuilder/formBuilder';
import{advertiseTableComponent} from './component/advertisement/advertiseTableComponent';
import{SearchPipe} from './component/advertisement/search.pipe';
import{FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, advertiseComponent,advertiseTableComponent,SearchPipe,templateDrivenForm,modelDrivenForm,formBuilderForm],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
