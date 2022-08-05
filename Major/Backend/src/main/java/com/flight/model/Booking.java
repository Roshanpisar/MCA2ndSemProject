package com.flight.model;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import com.fasterxml.jackson.core.sym.Name;

@Entity
@Table(name = "booking")
public class Booking {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int bookingId;
	private String bookingDate;
	private double amount;
	private int countPassenger;
	private String passenger1;
	private String passenger2;
	private String passenger3;

	@ManyToOne
	@JoinColumn(name = "userId")
	private User user;
	
	@ManyToOne
	@JoinColumn(name = "flightId")
	private Flight flight;
	
	
	
	
	
	public Booking() {
		super();
	}
	public Booking(int bookingId, String bookingDate, double amount, int countPassenger, String passenger1,
			String passenger2, String passenger3, User user, Flight flight) {
		super();
		this.bookingId = bookingId;
		this.bookingDate = bookingDate;
		this.amount = amount;
		this.countPassenger = countPassenger;
		this.passenger1 = passenger1;
		this.passenger2 = passenger2;
		this.passenger3 = passenger3;
		this.user = user;
		this.flight = flight;
	}
	public int getBookingId() {
		return bookingId;
	}
	public void setBookingId(int bookingId) {
		this.bookingId = bookingId;
	}
	public String getBookingDate() {
		return bookingDate;
	}
	public void setBookingDate(String bookingDate) {
		this.bookingDate = bookingDate;
	}
	public double getAmount() {
		return amount;
	}
	public void setAmount(double amount) {
		this.amount = amount;
	}
	public int getCountPassenger() {
		return countPassenger;
	}
	public void setCountPassenger(int countPassenger) {
		this.countPassenger = countPassenger;
	}
	public String getPassenger1() {
		return passenger1;
	}
	public void setPassenger1(String passenger1) {
		this.passenger1 = passenger1;
	}
	public String getPassenger2() {
		return passenger2;
	}
	public void setPassenger2(String passenger2) {
		this.passenger2 = passenger2;
	}
	public String getPassenger3() {
		return passenger3;
	}
	public void setPassenger3(String passenger3) {
		this.passenger3 = passenger3;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}

	public Flight getFlight() {
		return flight;
	}
	public void setFlight(Flight flight) {
		this.flight = flight;
	}

	


	
	
}
