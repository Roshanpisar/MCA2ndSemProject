import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  constructor(private http: HttpClient) { }

  
  getAllOffer(){
    return this.http.get('http://localhost:8082/getAllOffer')
    
      }

  addOffer(data:any){
    return this.http.post('http://localhost:8082/addOffer',data)
  }
  deleteOffer(id:number){
    return this.http.delete('http://localhost:8082/deleteOffer/'+id)
  }
  getOffer(id:any){
    return this.http.get('http://localhost:8082/getOfferByID/'+id)
    
      }
}
