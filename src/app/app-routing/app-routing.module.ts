import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from '../component/auth/login/login.component';
import { RegisterComponent } from '../component/auth/register/register.component';
import { AllGalleriesComponent } from '../component/all-galleries/all-galleries.component';

const appRoutes: Routes = [
  { path: '', 
    redirectTo: '/allGalleries',
    pathMatch: 'full',
  },

  { path: 'allGalleries', 
    component: AllGalleriesComponent
  },
  { path: 'login', 
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
