package com.flight.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.flight.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

	public User findByEmail(String email);
	public User findByEmailAndPassword(String email,String password);
	public User findByRole(String role);
	@Query("SELECT u FROM User u WHERE u.attempt = 3")
	public List<User> findAllLockedusers();
	
	@Modifying
	@Transactional
	@Query("update User u set u.attempt=0 where u.userId =?1")
	public void unlockUserAccount(int id);
	
}
