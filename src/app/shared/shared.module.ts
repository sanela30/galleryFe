import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './service/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { GuestGuard } from './guards/guest.guard';




@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    AuthService,
    AuthGuard,
    GuestGuard,

  ],
  declarations: []
})
export class SharedModule { }
