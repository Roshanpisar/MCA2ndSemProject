import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/class/user';
import { LoginserviceService } from 'src/app/services/loginservice.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {
user:any;
user2:any;
id:any;
userObj: User =new User();
  constructor(private service:LoginserviceService,private route:Router) {
   this.userObj=  JSON.parse(sessionStorage.getItem("user"));


    
  
   }

  ngOnInit(): void {

  }

  update(){
    this.service.updateUser(this.userObj).subscribe();
    sessionStorage.setItem("user",JSON.stringify(this.userObj))
    alert(" Your profile update successfully")
this.route.navigate(['user/home'])
  }

}
