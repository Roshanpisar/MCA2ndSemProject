import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Flight } from 'src/app/class/flight';
import { FlightService } from 'src/app/services/flight.service';

@Component({
  selector: 'app-edit-flight',
  templateUrl: './edit-flight.component.html',
  styleUrls: ['./edit-flight.component.css']
})
export class EditFlightComponent implements OnInit {
  id:number=0;
  flight:Flight=new Flight();
  
  constructor(private flightservice:FlightService,
    private activeroute: ActivatedRoute,
    private router:Router) { }

    updateFlightForm = new FormGroup({
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

  ngOnInit(): void {
    this.id=this.activeroute.snapshot.params[`id`];
    this.flightservice.getFlightById(this.id).subscribe(data=>{
      this.flight=data;
    })
  }

  updateFlight(){
    this.flightservice.updateFlight(this.id,this.flight).subscribe(data=>{
     console.log("updated data"+data)
    })
  }
  onSubmit(){
    this.updateFlight();
    alert("Flight updated Successfully!!")
    this.router.navigate(['admin/viewFlight']);
  }


}
