import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/Home/home.component';
import { LoginComponent } from './component/Login/login.component';
import { PostAdComponent } from './component/Advertisement/postAd.component';
import { SignupComponent } from './component/Signup/signup.component';
import { EditAdComponent } from './component/Advertisement/editAd.component';
import { RouterModule } from '@angular/router';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

@NgModule({
  imports: [BrowserModule, HttpModule, FormsModule, RouterModule.forRoot([
    { path: '', component: HomeComponent },
    { path: 'postad', component: PostAdComponent },
    { path: 'editAd/:id', component: EditAdComponent }
  ])
],
  declarations: [AppComponent, HomeComponent, LoginComponent, PostAdComponent, SignupComponent, EditAdComponent],
  bootstrap: [AppComponent],
})

export class AppModule { }
