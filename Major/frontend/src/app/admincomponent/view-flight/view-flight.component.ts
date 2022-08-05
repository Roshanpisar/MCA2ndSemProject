import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Flight } from 'src/app/class/flight';
import { FlightService } from 'src/app/services/flight.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-view-flight',
  templateUrl: './view-flight.component.html',
  styleUrls: ['./view-flight.component.css']
})
export class ViewFlightComponent implements OnInit {

  flights: Flight[] = [];
  searchStr: string = "";
  constructor(private flightService: FlightService,
    private router: Router) { }

  ngOnInit(): void {
    this.getAllFlight();

  }
  private getAllFlight() {
    this.flightService.getAllFlight().subscribe((response: Flight[]) => {
      this.flights = response;
      console.log(response)
    });
  }

  addFlight() {
    this.router.navigate(['admin/addFlight'])
  }

  updateFlight(id: number) {
    this.router.navigate(['admin/editFlight', id])
  }

  deleteFlight(id: number) {
    this.flightService.deleteFlight(id).subscribe(data => {
      
    })
    this.getAllFlight();
    // window.location.reload();
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
       
        this.deleteFlight(id);
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
          'Your Flight Details is safe :)',
          'error'
        )
      }
    })
  }

}
