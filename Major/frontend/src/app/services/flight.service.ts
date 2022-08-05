import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from '../class/flight';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  constructor(private httpClient: HttpClient) { }
  private baseURL = "http://localhost:8082"


  getAllFlight(): Observable<Flight[]> {
    return this.httpClient.get<Flight[]>(`${this.baseURL}`+'/getAllFlights');

  }

  getFlightRouteAndDestination(spoint: string, epoint: string, dat: string): Observable<Flight[]> {

    return this.httpClient.get<Flight[]>(`${this.baseURL}`+'/getFlightsByDate?' + 'source=' + spoint + '&destination=' + epoint + '&flightDate=' + dat)
  }

  getFlightById(id: number): Observable<Flight> {
    return this.httpClient.get<Flight>(`${this.baseURL}`+'/getFlight/' + `${id}`);
  }

  addFlight(flight: Flight): Observable<any> {
    return this.httpClient.post(`${this.baseURL}` + '/addFlight', flight);
  }
  updateFlight(id: number, flight: Flight): Observable<any> {
    return this.httpClient.put(`${this.baseURL}` + '/updateFlight/' + `${id}`, flight)
  }

  deleteFlight(id: number): Observable<any> {
    return this.httpClient.delete(`${this.baseURL}` + '/deleteFlight/' + `${id}`);
  }

  getFlightBySchedule(schedule: string): Observable<Flight[]> {

    return this.httpClient.get<Flight[]>(`${this.baseURL}` + '/getFlightsBySchedule?' + 'schedule=' + schedule)
  }
}


