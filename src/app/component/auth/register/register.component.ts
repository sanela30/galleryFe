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
	public errors: any[] = [];

  constructor(
    private authService: AuthService,
  	private router: Router) {
	}
	
	public register(){
    this.authService.register(
					this.user.firstName, 
			  	this.user.lastName, 
					this.user.email, 
					this.user.password,
					this.user.password_confirmation)
      .subscribe((user)=> {
        this.router.navigateByUrl('/login');
      },
        (err: HttpErrorResponse) => {
          alert(`Backend returned code ${err.status} with message: ${err.error}`);
        }
      );
}

  //  register() {
  //  	this.authService.register(
  // 		this.user.firstName, 
  //  		this.user.lastName, 
  // 		this.user.email, 
	// 		 this.user.password,
	// 		 this.user.password_confirmation
  //  	).subscribe(
  //  		(user) => {	
	// 			this.authService.login(user.email, user.password).subscribe(
	// 				(user) => {
	// 					this.router.navigateByUrl('/login');
	// 				}
	// 			)
  //  			},
	//  	    (err: HttpErrorResponse) => {
	//  	    	alert(`${err.error.message}`);
	//  	    }
  //  	);
  //  }
}