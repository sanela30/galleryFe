import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from '../component/auth/login/login.component';
import { RegisterComponent } from '../component/auth/register/register.component';
import { AllGalleriesComponent } from '../component/all-galleries/all-galleries.component';
import { GuestGuard } from '../shared/guards/guest.guard';
import { AuthGuard } from '../shared/guards/auth.guard';
import { CreateGalleryComponent } from '../component/create-gallery/create-gallery.component';
import { MyGalleryComponent } from '../component/my-gallery/my-gallery.component';
import { SingleGalleryComponent } from '../component/single-gallery/single-gallery.component';

const appRoutes: Routes = [
  { path: '', 
    redirectTo: '/allGalleries',
    canActivate: [AuthGuard],
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
  },
  { path: 'create', 
  canActivate: [AuthGuard],
  component: CreateGalleryComponent
 },
 { path: 'my-galleries', 
 canActivate: [AuthGuard],
 component: MyGalleryComponent
},
{ path: 'gallerie/:id', 
 canActivate: [AuthGuard],
 component: SingleGalleryComponent
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
