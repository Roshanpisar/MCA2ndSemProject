package com.flight.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.flight.model.Offer;

@Repository
public interface OfferRepository extends JpaRepository<Offer, Integer>{
	

}
