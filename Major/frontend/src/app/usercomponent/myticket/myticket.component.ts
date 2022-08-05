import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Flight } from 'src/app/class/flight';

@Component({
  selector: 'app-myticket',
  templateUrl: './myticket.component.html',
  styleUrls: ['./myticket.component.css']
})
export class MyticketComponent implements OnInit {


  bookingDetails:any;
  constructor(private activeRouter: ActivatedRoute) { }

  ngOnInit(): void {

    this.bookingDetails=JSON.parse(this.activeRouter.snapshot.params['bookingObj']);

  }

}
