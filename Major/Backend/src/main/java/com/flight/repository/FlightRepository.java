package com.flight.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.flight.model.Flight;

@Repository
public interface FlightRepository extends JpaRepository<Flight, Integer> {

	List<Flight> findByschedule(String schedule);
	
	
@Query(value = "select * from flight where source=?1 and destination=?2" ,nativeQuery = true)
 public List<Flight> findByRoute(String source, String destination);

@Query(value = "select * from flight where source=?1 and destination=?2 and flight_date=?3" ,nativeQuery = true)
public List<Flight> findByRouteAndDate(String source, String destination, String flightDate);
}



