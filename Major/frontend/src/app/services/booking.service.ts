import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking } from '../class/booking';
import { HttpClient } from '@angular/common/http';
import { Flight } from '../class/flight';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  //private baseURL="http://localhost:8082/addBooking"

  constructor(private http: HttpClient) { }

  addBooking(booking:Booking ):Observable<any>
  {
    return this.http.post('http://localhost:8082/addBooking',booking);
  }
  deleteBookingById(id:number):Observable<Booking>{
    return this.http.delete<Booking>('http://localhost:8082/deleteBooking/'+`${id}`);
      }
      getBookingByUserId(userid:number):Observable<any>{
        return this.http.get<Booking>('http://localhost:8082/getBookings/'+`${userid}`);
          }
      getAllBookings():Observable<any>{
        return this.http.get<Booking[]>('http://localhost:8082/getAllBooking');
      }

}
