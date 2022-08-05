import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/class/user';
import { RegistrationService } from 'src/app/services/registration.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  user: User=new User();
   submitted=false;
   formsubmitted=false;
  currentDate="2022-08-02";
  maxDate = new Date();
  loading: boolean;

  RegistrationForm=new FormGroup(
    {
      
      name: new FormControl('',Validators.required),
      password: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required]),
      phone: new FormControl('',[Validators.required]),
      gender: new FormControl('',[Validators.required]),
      dob: new FormControl('',[Validators.required])
   }
  )
 
  constructor(private registrationService:RegistrationService,
                 private router:Router,private fb:FormBuilder) { 
                   this.registrationForm();
                 }
  
  registrationForm(){
      this.RegistrationForm=this.fb.group({
      name:['',[Validators.required, Validators.pattern("[a-zA-Z][a-zA-Z ]*"), Validators.minLength(3), Validators.maxLength(30)]],
      password:['',[Validators.required, Validators.pattern("^.*(?=.{8,})(?=..*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$")]],
      email:['',[Validators.email]],
      phone:['',[Validators.required, Validators.minLength(10), Validators.maxLength(10),Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      gender:['',[Validators.required]],
      dob: ['',[Validators.required]]
    })
  }

  ngOnInit(): void {
    let user=JSON.parse(sessionStorage.getItem('user'));
    if(user && user.role=='admin'){
      this.router.navigate(['/admin']);
    }
    else if(user && user.role=='user'){
      this.router.navigate(['/user']);
    }
  }
  
  //for saving data
  saveUser(){
    //while registration role will user 
    this.user = this.RegistrationForm.value;
    this.user.role='user';
    this.registrationService.registerUser(this.user).subscribe(data =>{
      console.log(data);
      this.goToUserList();
    },
    error =>console.log(error)
    );
  }
  
  goToUserList(){
    this.router.navigate(['/login']);
  }
  onSubmit(){
    //this.loading = true;
    this.submitted = true;
    
    console.log(this.RegistrationForm.value)
    
      this.saveUser();
      
  }

}
