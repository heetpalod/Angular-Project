import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/userService/user.service';

@Component({
  selector: 'my-signup',
  templateUrl: `./signup.html`,
  styleUrls: [`./signup.css`],
})
export class SignupComponent  { 
    name = 'Angular'; 

constructor(private router: Router, private userservice:UserService) { 
    }     
     onSignup(value:Object){
        this.userservice.register(value);
    }

}
