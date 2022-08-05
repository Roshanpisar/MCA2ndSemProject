import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './usercomponent/home/home.component';

import { SearchFlightComponent } from './usercomponent/search-flight/search-flight.component';
import { OfferComponent } from './admincomponent/offer/offer.component';
import { LoginComponent } from './Login-Registration/login/login.component';
import { RegistrationComponent } from './Login-Registration/registration/registration.component';


import { BookingcomponentComponent } from './usercomponent/bookingcomponent/bookingcomponent.component';
import { ShowofferComponent } from './usercomponent/showoffer/showoffer.component';
import { ViewFlightComponent } from './admincomponent/view-flight/view-flight.component';
import { EditFlightComponent } from './admincomponent/edit-flight/edit-flight.component';
import { AddFlightComponent } from './admincomponent/add-flight/add-flight.component';
import { MybookingComponent } from './usercomponent/mybooking/mybooking.component';


import { UpdateProfileComponent } from './usercomponent/update-profile/update-profile.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { AuthGuard } from './services/auth.guard';
import { MyticketComponent } from './usercomponent/myticket/myticket.component';
import { AllbookingsComponent } from './usercomponent/allbookings/allbookings.component';
import { ChangePasswordComponent } from './usercomponent/change-password/change-password.component';
import { ForgetPasswordComponent } from './Login-Registration/forget-password/forget-password.component';
import { ErrorPageComponent } from './error-page/error-page.component';


const routes: Routes = [ 
  {
    path:'home', component:HomeComponent
  },

{
  path:'forgetPassword', component:ForgetPasswordComponent
},
{
  path:'showoffer1' , component:ShowofferComponent
}
,
{
  path:'login',component:LoginComponent
},
{
  path:'register',component:RegistrationComponent
},

{
  
  path:'booking',component:BookingcomponentComponent
} 
,
 {
  
   path:'myticket',component:MyticketComponent
 } 
, 
  {
    path: 'searchFlight', component: SearchFlightComponent
  },
 
  {
    path:'',redirectTo:'login',pathMatch:'full'
  },
  
//Admin Component
  {
    path:'admin',
    component:AdminHomeComponent,canActivate:[AuthGuard],
    children:[
    {
      path: 'viewFlight', component: ViewFlightComponent
    },
    {
      path: 'offer', component: OfferComponent
    },
    
    {
      path:'home', component:HomeComponent
    },
      {
    path:'allbookings',component:AllbookingsComponent
  },
  {
    path: 'editFlight/:id', component: EditFlightComponent
  },
  {
    path: 'addFlight', component: AddFlightComponent
  } 

  ]
  },

  {
    path:'user',
    component:UserHomeComponent,canActivate:[AuthGuard],
      children:[{
            path:'home', component:HomeComponent
          }
          ,
        
          {
            path:'changePassword' , component:ChangePasswordComponent
          },
        
          {
            path:'showoffer' , component:ShowofferComponent
          },
        
          {
            path: 'booking/:id', component: BookingcomponentComponent
          },
          { 
            path:'booking',component:BookingcomponentComponent
          },
          {
            path:'searchFlight', component:SearchFlightComponent
          },
      
          {
            path:'updateProfile',component:UpdateProfileComponent
          },
          {
            path: 'getBookingsbyUserId', component: MybookingComponent
          },
          {
            path:'tbooking/:bookingObj',component:MyticketComponent
          }
          
      ]
  },

  {
    // Wildcard route for a 404 page
    path:'**',component:ErrorPageComponent

  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
