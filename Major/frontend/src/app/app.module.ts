import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './Header-footer/footer/footer.component';
import { HeaderComponent } from './Header-footer/header/header.component';
import { HomeComponent } from './usercomponent/home/home.component';
import { AdminHeaderComponent } from './Header-footer/admin-header/admin-header.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './Login-Registration/login/login.component';
import {MatInputModule} from '@angular/material/input';
import { SearchFlightComponent } from './usercomponent/search-flight/search-flight.component';
import { OfferComponent } from './admincomponent/offer/offer.component';
import { UpdateProfileComponent } from './usercomponent/update-profile/update-profile.component';
import { MaterialModule } from './material/material.module';
import { ShowofferComponent } from './usercomponent/showoffer/showoffer.component';
import { RegistrationComponent } from './Login-Registration/registration/registration.component';
import { BookingcomponentComponent } from './usercomponent/bookingcomponent/bookingcomponent.component';
import { MybookingComponent } from './usercomponent/mybooking/mybooking.component';
import { AddFlightComponent } from './admincomponent/add-flight/add-flight.component';
import { ViewFlightComponent } from './admincomponent/view-flight/view-flight.component';
import { EditFlightComponent } from './admincomponent/edit-flight/edit-flight.component';

import { MyticketComponent } from './usercomponent/myticket/myticket.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { NgxPrintModule } from 'ngx-print';
import { AllbookingsComponent } from './usercomponent/allbookings/allbookings.component';
import { MaterialsModule } from './materials/materials.module';
import { SearchPipe } from './pipes/search.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';



import { ChangePasswordComponent } from './usercomponent/change-password/change-password.component';
import { RecaptchaModule } from 'ng-recaptcha';
import { NgxCaptchaModule } from 'ngx-captcha';
import { ForgetPasswordComponent } from './Login-Registration/forget-password/forget-password.component';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { ErrorPageComponent } from './error-page/error-page.component';




@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    AdminHeaderComponent,
    LoginComponent,
    RegistrationComponent,
    BookingcomponentComponent,
    SearchFlightComponent,
    OfferComponent,
    AddFlightComponent, 
    LoginComponent, 
    BookingcomponentComponent,
    SearchFlightComponent,
    OfferComponent,
    UpdateProfileComponent,
    MybookingComponent,
    ViewFlightComponent,
    EditFlightComponent,
   


    ShowofferComponent,
    AdminHomeComponent,
    UserHomeComponent  ,   
    MyticketComponent,   
   AllbookingsComponent, 
   SearchPipe, 
   ChangePasswordComponent,
    ForgetPasswordComponent,
    ErrorPageComponent   

   
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MaterialModule,
    ReactiveFormsModule,
    MatInputModule,
    NgxPrintModule,
MaterialsModule,
RecaptchaModule,
NgxCaptchaModule,
Ng2SearchPipeModule,
NgxStarRatingModule

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
