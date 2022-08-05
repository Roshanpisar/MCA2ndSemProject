import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-allbookings',
  templateUrl: './allbookings.component.html',
  styleUrls: ['./allbookings.component.css']
})
export class AllbookingsComponent implements OnInit {
  bookings:any=[];
  constructor(private bookingservice:BookingService) { }

  ngOnInit(): void {
    this.getAllBookings();
  }

  private getAllBookings(){
    this.bookingservice.getAllBookings().subscribe(data=>{
      this.bookings=data;
      console.log(this.bookings);
      
    })
   }


}
