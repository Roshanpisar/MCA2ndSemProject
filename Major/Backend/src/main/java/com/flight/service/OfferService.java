package com.flight.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.flight.model.Offer;
import com.flight.repository.OfferRepository;

@Service
public class OfferService   {
  
@Autowired
	OfferRepository offerRepository;
	
	
	public void addOffer(Offer offer) {
		offerRepository.save(offer);
	}

	public List<Offer> getAllOffer(){
		return offerRepository.findAll();
				
	}
	
	public Offer getofferById(int id) {
		Offer offer=offerRepository.findById(id).orElse(null);
		return offer;
	}
	
public void updateOffer(int id , Offer offer) {

	offerRepository.save(offer);
	
}
	


	public void deleteOffer(int id) {
		offerRepository.deleteById(id);
	}
	
	
	}
