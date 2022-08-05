package com.flight.controller;

import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.flight.exception.RecordNotFoundException;
import com.flight.model.Offer;
import com.flight.service.OfferService;

@RestController
@CrossOrigin(origins="*")
public class OfferController {
	@Autowired
    OfferService offerService;
	
	@PostMapping("/addOffer")
	public ResponseEntity<String> addOffer(@RequestBody Offer offer){
		offerService.addOffer(offer);
		return new ResponseEntity<String>("offer added successfully",HttpStatus.CREATED);
	}
	
    @GetMapping("/getAllOffer")
	public ResponseEntity<List<Offer>> getAllOffer(){
		return new ResponseEntity<List<Offer>>(offerService.getAllOffer(),HttpStatus.OK);
	}
	
    @GetMapping("/getOfferByID/{id}")
    public ResponseEntity<Offer> getOffer(@PathVariable("id") int id){
	Offer offer=offerService.getofferById(id);
	 if(offer==null)
	  {
		  throw new RecordNotFoundException("record not found");
	  }
		 return new ResponseEntity<Offer>(offer,HttpStatus.OK);
	}
 

	
	
	@PutMapping("/updateOffer/{id}")
	public ResponseEntity<String> updateOffer(@PathVariable int id,@RequestBody Offer offer)
	{
		  offerService.updateOffer(id,offer);
		  return new ResponseEntity<String>("offer updated successfully",HttpStatus.OK);  
	}
	
	
	 @DeleteMapping("/deleteOffer/{id}")
		public ResponseEntity<String> deleteOffer(@PathVariable int id){	
		offerService.deleteOffer(id);
		  return new ResponseEntity<String>("Deleted successfully",HttpStatus.FOUND);	
	}
}
