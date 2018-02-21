import { Component } from '@angular/core';

import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../../../shared/model/user';
import { AuthService } from '../../../shared/service/auth.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{

	user = new User();

  constructor(
    private authService: AuthService,
  	private router: Router) {
  }

   register() {
   	this.authService.register(
  		this.user.firstName, 
   		this.user.lastName, 
  		this.user.email, 
   		this.user.password
   	).subscribe(
   		() => {
   				this.router.navigateByUrl('/');
   			},
	 	    (err: HttpErrorResponse) => {
	 	    	alert(`${err.error.message}`);
	 	    }
   	);
   }
}