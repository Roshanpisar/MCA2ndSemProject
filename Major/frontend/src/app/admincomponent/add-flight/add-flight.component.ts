import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Flight } from 'src/app/class/flight';
import { FlightService } from 'src/app/services/flight.service';

@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.css']
})
export class AddFlightComponent implements OnInit {
  minDate = new Date();
  constructor(private flightService: FlightService, private router: Router) { }

  ngOnInit(): void {
  }
  addFlightForm = new FormGroup({
    flightName: new FormControl('', Validators.required),
    capacity: new FormControl('', Validators.required),
    arrivalTime: new FormControl('', Validators.required),
    departureTime: new FormControl('', Validators.required),
    schedule: new FormControl('', Validators.required),
    flightDate: new FormControl('', Validators.required),
    source: new FormControl('', Validators.required),
    destination: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required),
    trip: new FormControl('', Validators.required),
    fares: new FormControl('', Validators.required),
    // offer: new FormControl('', Validators.required),
  })
  flight: Flight = new Flight();

  saveFlight() {
    this.flightService.addFlight(this.flight).subscribe(data => {
      console.log(data);

    });
  }

  onSubmit() {
    this.saveFlight();
    console.log(this.flight);
    alert("Flight ADded Successfully!!")
    this.router.navigate(['admin/viewFlight'])

  };
}

