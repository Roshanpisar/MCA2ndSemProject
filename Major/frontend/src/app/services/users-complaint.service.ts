import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsersComplaintService {

  constructor(private http : HttpClient) { }
  complaints(){
    return this.http.get('http://localhost:8082/getAllComplaint')
  }

  addComplaints(data:any){

return this.http.post('http://localhost:8082/addComplaint',data);
  }

  updateomplaint(action:any,obj:any){
    console.log(action, obj)
    return this.http.put<any>('http://localhost:8082/updateComplaint/'+action,obj)
  }

}
