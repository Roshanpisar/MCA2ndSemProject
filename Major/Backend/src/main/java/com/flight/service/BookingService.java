package com.flight.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.flight.model.Booking;
import com.flight.model.Flight;
import com.flight.repository.BookingRepository;

@Service
public class BookingService {
	
	
	@Autowired
	BookingRepository bookingRepository;

	
	public void addBooking(Booking booking) {
		bookingRepository.save(booking);
	}
	
	public List<Booking> getAllBooking(){
		return bookingRepository.findAll();
		
	}
	
	public Booking getBookingById(int id)
	{
	Booking booking=bookingRepository.findById(id).orElse(null);
		return booking;
		
	}
	
	public List<Booking> getBookingByUserId(int id)
	{
	List<Booking> booking=bookingRepository.findBookingByUserId(id);
		return booking;
		
	}
	
	
	
	
	
	public void updateBooking(int id,Booking booking ) {
		booking.setBookingId(id);

		bookingRepository.save(booking);
	}
	

	
	public void deleteBooking(int id) {
		System.out.println("id"+id);
		bookingRepository.deleteById(id);
	}

}
