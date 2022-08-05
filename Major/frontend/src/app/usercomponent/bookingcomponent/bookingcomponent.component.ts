import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking } from 'src/app/class/booking';
import { Flight } from 'src/app/class/flight';
import { Offer } from 'src/app/class/offer';
import { BookingService } from 'src/app/services/booking.service';
import { FlightService } from 'src/app/services/flight.service';
import { OfferService } from 'src/app/services/offer.service';

interface OfferInt {
  value: any;
  viewValue: any;
}
@Component({
  selector: 'app-bookingcomponent',
  templateUrl: './bookingcomponent.component.html',
  styleUrls: ['./bookingcomponent.component.css']
})
export class BookingcomponentComponent implements OnInit {
  selectedValue: any;
  booking: Booking = new Booking();
  bookingObj: any;
  offer: OfferInt[] = []
  flightid!: number;
  flight: Flight = new Flight();
  user = JSON.parse(sessionStorage.getItem('user'));
  userId = this.user.userId;
  offers: any;
  offerPrice: any;

  constructor(private bookService: BookingService, private flightservice: FlightService, private activeRouter: ActivatedRoute, private router: Router, private offerService: OfferService) { }

  ngOnInit(): void {
    this.flightid = this.activeRouter.snapshot.params['id'];
    this.flightservice.getFlightById(this.flightid).subscribe(data => {
      this.flight = data;
      
    })

    this.offerService.getAllOffer().subscribe((data: any) => {
      this.offers = data;
      for (let index = 0; index < data.length; index++) {
        this.offer.push({ value: this.offers[index].coupon, viewValue: this.offers[index].offerName })

      }
    })

  }

  saveBooking() {

    for (let index = 0; index < this.offers.length; index++) {
      
      if (this.offers[index].coupon == this.selectedValue) {
        this.offerPrice = (this.flight.price) - (this.offers[index].discount)
        
      }
    }
    this.booking = {
      "bookingId": this.booking.bookingId,
      "bookingDate": new Date(),
      "amount": (this.offerPrice) * (this.booking.countPassenger),
      "countPassenger": this.booking.countPassenger,
      "passenger1": this.booking.passenger1,
      "passenger2": this.booking.passenger2,
      "passenger3": this.booking.passenger3,
      "flight": {
        "flightId": this.flightid

      },
      "user": {
        "userId": this.userId
      }

    }

    this.flight = {
      "flightId": this.flightid,
      "flightName": this.flight.flightName,
      "capacity": this.flight.capacity - this.booking.countPassenger,
      "arrivalTime": this.flight.arrivalTime,
      "departureTime": this.flight.departureTime,
      "schedule": this.flight.schedule,
      "flightDate": this.flight.flightDate,
      "source": this.flight.source,
      "destination": this.flight.destination,
      "price": this.flight.price,
      "offer": this.flight.offer,
      "fares": this.flight.fares,
      "trip": this.flight.trip,
      "type": this.flight.type
    }




    this.bookService.addBooking(this.booking).subscribe(data => {
      

    }),
      error => console.log(error);
  }

  updatePassenger() {
    this.flightservice.updateFlight(this.flightid, this.flight).subscribe(data => {
      
    })
  }

  sendBooking() {
    this.bookingObj.amount = this.booking.amount;
    this.router.navigate(['user/tbooking', JSON.stringify(this.bookingObj)])
    
  }




  onSubmit(formdata: any) {
    if (this.flight.capacity > this.booking.countPassenger) {
      this.bookingObj = formdata;
      this.saveBooking();
      this.sendBooking();
      this.updatePassenger();
    }
    else if (this.booking.countPassenger == null) {
    
      alert("Please Enter the number of passenger");
  } 
    else if (this.booking.countPassenger != 0 )
    {
      alert("Seats Not Available");
    }
     
     
    }


  


}
