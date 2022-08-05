import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/class/user';
import { LoginserviceService } from 'src/app/services/loginservice.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  email:any;
  password:any;
  user:any;
  user2:any;
  id:any;
captcha:string;

  userObj: User =new User();
    constructor(private service:LoginserviceService,private router:Router) {
     this.userObj=  JSON.parse(sessionStorage.getItem("user"));
  
  
      
    
     }
  
    ngOnInit(): void {
  
    }
  
    update(){

      if(this.userObj.email==this.email){
        this.userObj.password=this.password;
      this.service.updateUser(this.userObj).subscribe();
      sessionStorage.setItem("user",JSON.stringify(this.userObj))
      alert("Password Change Successfully")
      this.router.navigate(['/user/home'])

    }
    else{
      alert("Please enter valid Email")
window.location.reload();
    }
  }
  
  resolved(captchaResponse :string){
    this.captcha=captchaResponse;
    console.log('resolved captcha with response '+ this.captcha)
  }

}
