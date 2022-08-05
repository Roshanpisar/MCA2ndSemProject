package com.flight.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "flight")
public class Flight {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	int flightId;
	String flightName;
	int capacity;
	String arrivalTime;
	String departureTime;
	String schedule;
	String flightDate;
	String source;
	String destination;
	float price;
	String fares;
	String trip;
	String type;

	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "offerId")
	private Offer offer;

	@OneToMany(mappedBy = "flight", cascade = CascadeType.ALL)
	@JsonIgnore
	private List<Booking> tickets;

	public Flight() {
		// TODO Auto-generated constructor stub
	}



	public Flight(int flightId, String flightName, int capacity, String arrivalTime, String departureTime,
			String schedule, String flightDate, String source, String destination, float price, String fares,
			String trip, String type) {
		super();
		this.flightId = flightId;
		this.flightName = flightName;
		this.capacity = capacity;
		this.arrivalTime = arrivalTime;
		this.departureTime = departureTime;
		this.schedule = schedule;
		this.flightDate = flightDate;
		this.source = source;
		this.destination = destination;
		this.price = price;
		this.fares = fares;
		this.trip = trip;
		this.type = type;
	}



	public int getFlightId() {
		return flightId;
	}

	public void setFlightId(int flightId) {
		this.flightId = flightId;
	}

	public String getFlightName() {
		return flightName;
	}

	public void setFlightName(String flightName) {
		this.flightName = flightName;
	}

	public int getCapacity() {
		return capacity;
	}

	public void setCapacity(int capacity) {
		this.capacity = capacity;
	}

	public String getArrivalTime() {
		return arrivalTime;
	}

	public void setArrivalTime(String arrivalTime) {
		this.arrivalTime = arrivalTime;
	}

	public String getDepartureTime() {
		return departureTime;
	}

	public void setDepartureTime(String departureTime) {
		this.departureTime = departureTime;
	}

	public String getSchedule() {
		return schedule;
	}

	public void setSchedule(String schedule) {
		this.schedule = schedule;
	}

	public String getFlightDate() {
		return flightDate;
	}

	public void setFlightDate(String flightDate) {
		this.flightDate = flightDate;
	}

	public String getSource() {
		return source;
	}

	public void setSource(String source) {
		this.source = source;
	}

	public String getDestination() {
		return destination;
	}

	public void setDestination(String destination) {
		this.destination = destination;
	}

	public float getPrice() {
		return price;
	}

	public void setPrice(float price) {
		this.price = price;
	}

	public Offer getOffer() {
		return offer;
	}

	public void setOffer(Offer offer) {
		this.offer = offer;
	}

	public List<Booking> getTickets() {
		return tickets;
	}

	public void setTickets(List<Booking> tickets) {
		this.tickets = tickets;
	}

	public String getFares() {
		return fares;
	}

	public void setFares(String fares) {
		this.fares = fares;
	}

	public String getTrip() {
		return trip;
	}

	public void setTrip(String trip) {
		this.trip = trip;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	
}
