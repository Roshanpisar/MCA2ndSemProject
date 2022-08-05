import { Component, OnInit } from '@angular/core';
import { OfferService } from 'src/app/services/offer.service';
@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {
offer:any;
  constructor(private offerService : OfferService) { 
    offerService.getAllOffer().subscribe((data:any)=>{this.offer=data});
  console.log(this.offer);
  }
  ngOnInit(): void {
  
  }
result:any;
addOffer(data:any){
  this.offerService.addOffer(data).subscribe((result)=>{

  
})
window.location.reload();
}

deleteOffer(offerid:number){
  console.log(offerid);
 
  this.offerService.deleteOffer(offerid).subscribe((result)=>{
    console.log(result);

})
window.location.reload();
}

}

