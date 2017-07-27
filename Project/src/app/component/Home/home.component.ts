import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/userService/user.service';
import { OnChanges, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'my-home',
  templateUrl: `./home.html`,
  styleUrls: [`./home.css`],
})

export class HomeComponent  { 
    name = 'Angular'; 

 constructor(private router: Router, private userservice:UserService) { 
    }     
   onClick(path:any) { 
         this.router.navigate([path]);          
         console.log(this.userservice.authToken)
   }
}



