import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './service/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { GuestGuard } from './guards/guest.guard';
//import { FormsModule } from '@angular/forms';




@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    AuthService,
    AuthGuard,
    GuestGuard,
   // FormsModule

  ],
  declarations: []
})
export class SharedModule { }
