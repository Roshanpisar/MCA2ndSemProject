import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Feedback } from '../class/feedback';
;

@Injectable({
  providedIn: 'root'
})
export class UserFeedbackService {

  constructor(private httpClient:HttpClient) { }

  feedbackSubmit(feedback:Feedback):Observable<any>{
    console.log(feedback);
    return this.httpClient.post("http://localhost:8082/addFeedback",feedback);
  }
  getAllFeedback():Observable<Feedback[]>{
    console.log("inside get al feedback");
    return this.httpClient.get<Feedback[]>('http://localhost:8082/getAllFeedbacks');
   
      }

}
