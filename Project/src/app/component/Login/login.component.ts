import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/userService/user.service';

@Component({
  selector: 'my-login',
  templateUrl: `./login.html`,
  styleUrls: [`./login.css`],
})
export class LoginComponent  { 
    name = 'Angular'; 

    constructor(private router: Router, private userservice:UserService) { 
    }     

     onClick(path:any) { 
        this.router.navigate([path]); 
    }

    onLogin(value:Object){
        this.userservice.login(value);
        console.log(this.userservice.authToken);

        if(this.userservice.authToken!=null)
            {
            alert("Please enter correct Username and Password");
            }
        else{
             alert("Login successful");
            }

    }
}

  
