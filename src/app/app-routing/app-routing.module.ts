import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from '../component/auth/login/login.component';
import { RegisterComponent } from '../component/auth/register/register.component';
import { AllGalleriesComponent } from '../component/all-galleries/all-galleries.component';
import { GuestGuard } from '../shared/guards/guest.guard';
import { AuthGuard } from '../shared/guards/auth.guard';

const appRoutes: Routes = [
  { path: '', 
    redirectTo: '/allGalleries',
    pathMatch: 'full',
  },

  { path: 'allGalleries', 
   canActivate: [AuthGuard],
   component: AllGalleriesComponent
  },
  { path: 'login', 
   canActivate: [GuestGuard],
    component: LoginComponent
  },
  { path: 'register', 
    component: RegisterComponent
  }

]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes
)
  ],
  exports: [
    RouterModule
],
  declarations: []
})
export class AppRoutingModule { }
