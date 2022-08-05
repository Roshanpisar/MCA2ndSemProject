import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Booking } from 'src/app/class/booking';
import { BookingService } from 'src/app/services/booking.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mybooking',
  templateUrl: './mybooking.component.html',
  styleUrls: ['./mybooking.component.css']
})
export class MybookingComponent implements OnInit {
  bookings:Booking[];
  user=JSON.parse(sessionStorage.getItem('user'));
  userId=this.user.userId;


  constructor(private bookingservice:BookingService, private router : Router) { }

  ngOnInit(): void {
   this.getBookingsbyUserID();
  }

  updatePassengerCount()
  {
    

  }

  
    deleteById(id:any)
  {
    this.bookingservice.deleteBookingById(id).subscribe(data=>{
      
  })
}

     getBookingsbyUserID(){
      this.bookingservice.getBookingByUserId(this.userId).subscribe(data=>{
        this.bookings=data;
        console.log("By User Id"+this.bookings);
      })
     }

     deleteCur(id: number) {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Are you sure? delete this',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
         
          this.deleteById(id);
          swalWithBootstrapButtons.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'  
          ).then(x=> window.location.reload())
       
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        
          ) {
          swalWithBootstrapButtons.fire(
            'Cancelled',
            'Your booking Details is safe :)',
            'error'
          )
        }
      })
    }
}


