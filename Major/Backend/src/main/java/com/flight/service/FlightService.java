package com.flight.service;

import java.util.List; 

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.flight.model.Flight;
import com.flight.repository.FlightRepository;



@Service
public class FlightService {
	@Autowired
	FlightRepository flightRepository;
	
	public void addFlight(Flight flight) {
		flightRepository.save(flight);
	}

	public List<Flight> getAllFlights(){
		return flightRepository.findAll();
	}
	
	public Flight getFlightById(int id) {		
		return flightRepository.findById(id).orElse(null);
	}
	
	public void deleteFlight(int id) {
		flightRepository.deleteById(id);
	}
	
	public void UpdateFlight(Flight flight) {
		flightRepository.save(flight);
	}
	
	public List<Flight> GetByRoute(String source, String destination) {
		return flightRepository.findByRoute(source, destination);
	}
	
	public List<Flight> GetBySchedule(String schedule) {
		return flightRepository.findByschedule(schedule);
	}
	
	public List<Flight> GetByDateAndRoute(String source, String destination,String flightDate) {
		return flightRepository.findByRouteAndDate(source, destination, flightDate);
	}
}
