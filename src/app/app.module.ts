import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './component/layout/layout.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';

import { LoginComponent } from './component/auth/login/login.component';
import { RegisterComponent } from './component/auth/register/register.component';
import { AllGalleriesComponent } from './component/all-galleries/all-galleries.component';
import {SharedModule} from './shared/shared.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CustomFormsModule } from 'ng2-validation';

import { MyGalleryComponent } from './component/my-gallery/my-gallery.component';
import { CreateGalleryComponent } from './component/create-gallery/create-gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    NavBarComponent,
    LoginComponent,
    RegisterComponent,
    AllGalleriesComponent,
    CreateGalleryComponent,
    MyGalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
    CustomFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
