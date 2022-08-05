import { Component, OnInit } from '@angular/core';
import { Flight } from 'src/app/class/flight';
import { Router } from '@angular/router';
import { FlightService } from 'src/app/services/flight.service';
import { OfferService } from 'src/app/services/offer.service';
interface allFlight {
  from: any;
  to: any;
}

@Component({
  selector: 'app-search-flight',
  templateUrl: './search-flight.component.html',
  styleUrls: ['./search-flight.component.css']
})
export class SearchFlightComponent implements OnInit {
  flights: Flight[];
  minDate = new Date();
  searchflight: any;
  startPoint: string = '';
  destination: string = '';
  departure_date: string = '';
  selectedValue: any;
  flight: allFlight[] = [];
  allFlights: any;
  constructor(public searchFlight: FlightService, private router: Router) {
  }


  ngOnInit(): void {
    this.searchFlight.getAllFlight().subscribe((data: any) => {
      this.allFlights = data;

      for (let index = 0; index < this.allFlights.length; index++) {
        this.flight.push({ from: this.allFlights[index].source, to: this.allFlights[index].destination })

      }
    })
  }

  getFields() {
    console.log(this.startPoint, this.destination,this.departure_date)

    this.searchFlight.getFlightRouteAndDestination(this.startPoint, this.destination, this.departure_date).subscribe(data => { this.flights = data;
    console.log(data) })



  }

  sendId(id: any) {

    this.router.navigate(['user/booking', id])
  }




}
