import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../class/user';



@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

 // private baseURL="http://localhost:8082/register";
  constructor(private httpClient:HttpClient) { }
    // return observable response from server
    // getUsers():Observable<any>{
      
    //   return this._http.get<any>("https://reqres.in/api/users");
    // }
    registerUser(user:User):Observable<any>{
      return this.httpClient.post("http://localhost:8082/register",user);
    }

  
}
