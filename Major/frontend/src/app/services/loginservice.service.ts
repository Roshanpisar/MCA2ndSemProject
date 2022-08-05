import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../class/user';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor(private http: HttpClient ) { }

  getOtp(user:User):Observable<any>{
    return this.http.post("http://localhost:8082/login",user);
  }
  getUser(email:any):Observable<any>{
    return this.http.get("http://localhost:8082/getUserByEmail/"+email);
  }

  getUserById(id:any){
  return this.http.get("http://localhost:8082/getUser/"+id)
}

updateUser(data:any){
  
  return this.http.put<any>('http://localhost:8082/updateUser',data)
}


getAllLockedUser(){
  
  return this.http.get<any>('http://localhost:8082/getAllLockedUsers/')
}

unlockUserById(id:any){
  
  return this.http.get<any>('http://localhost:8082/unlockUser/'+id)
}


}
