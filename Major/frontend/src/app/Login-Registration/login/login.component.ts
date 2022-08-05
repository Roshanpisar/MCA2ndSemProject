import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/class/user';
import { LoginserviceService } from 'src/app/services/loginservice.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginuser:any;
  user: User=new User();
  otp:any;
  flag:boolean=false;
  hasError:boolean=false;
  hasOtp:boolean=false;
  rememberMe:boolean=false;
  constructor(private loginService:LoginserviceService,private router:Router)
  { }
  
  ngOnInit(): void {

    let user=JSON.parse(sessionStorage.getItem('user'));
    if(user && user.role=='admin'){
      this.router.navigate(['/admin']);
    }
    else if(user && user.role=='user'){
      this.router.navigate(['/user']);
    }

    if(localStorage.getItem('rememberMe'))
    {
      this.rememberMe=true;
    }
  }

  loginForm=new FormGroup(
    {
      email: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required),
      rememberMe:new FormControl('')
    }
  )

  loginUser(data:any)
  {
    console.log(data);
    this.loginService.getOtp(data).subscribe((otp)=>{
      console.log(otp);
      this.otp=otp;
      this.hasOtp=true;
    },(error)=>{
      console.log(error);
      this.hasError=true;
     alert(error.error)
    });

  }

  onSubmit(){
    if(this.rememberMe){
      localStorage.setItem('rememberMe','true');
    }
    else{
      localStorage.removeItem('rememberMe');
    }
    //this.loginUser(this.user);
   
    // this.hasError=false;
    // this.hasOtp=false;
    // console.log(this.rememberMe);
    // console.log(this.loginForm.value);

    
   
      console.log("this =",this.user.email)
      this.loginService.getUser(this.user.email).subscribe((data:any)=>{
        console.log(data);
     this.loginuser=data;
     console.log(this.loginuser);
     
     //According role route
     if(data.role=='admin')
     {
      this.router.navigate(['/admin/viewFlight']);
     }
     else{
       this.router.navigate(['/user/home']);
     }
     sessionStorage.setItem("user",JSON.stringify(this.loginuser));
     
     if(this.rememberMe)
     {
       localStorage.setItem("user",JSON.stringify(this.loginuser));
     }
      } )

     

    
  }
  
  // check(data:any){
    
  //   if(data==this.otp) {
   
  //     console.log("this =",this.user.email)
  //     this.loginService.getUser(this.user.email).subscribe((data:any)=>{
  //       console.log(data);
  //    this.loginuser=data;
  //    console.log(this.loginuser);
     
  //    //According role route
  //    if(data.role=='admin')
  //    {
  //     this.router.navigate(['/admin/viewFlight']);
  //    }
  //    else{
  //      this.router.navigate(['/user/home']);
  //    }
  //    sessionStorage.setItem("user",JSON.stringify(this.loginuser));
     
  //    if(this.rememberMe)
  //    {
  //      localStorage.setItem("user",JSON.stringify(this.loginuser));
  //    }
  //     } )

     

  //   }
  //   else{
  //     alert("wrongOtp")
  //   }
  // }
 
}
