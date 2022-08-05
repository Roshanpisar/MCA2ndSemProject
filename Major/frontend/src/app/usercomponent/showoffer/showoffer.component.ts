import { Component, OnInit } from '@angular/core';
import { OfferService } from 'src/app/services/offer.service';

@Component({
  selector: 'app-showoffer',
  templateUrl: './showoffer.component.html',
  styleUrls: ['./showoffer.component.css']
})
export class ShowofferComponent implements OnInit {

  offers:any;
  constructor(private offerService : OfferService) { 
    offerService.getAllOffer().subscribe((data:any)=>{this.offers=data});
  console.log(this.offers);
  }
  ngOnInit(): void {
  }

}
