package com.flight.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.flight.model.User;
import com.flight.repository.UserRepository;

@Service
public class UserService {
	
	@Autowired
	 UserRepository userRepository;
	
	public User saveUser(User user)
	{
		return userRepository.save(user);
	}
	 
	public User fetchUserByEmail(String email)
	{
		return userRepository.findByEmail(email);
	}
	
	public User fetchUserByEmailAndPassword(String email,String password)
	{
		return userRepository.findByEmailAndPassword(email, password);
	}

	//Get All user 
	public List<User> getAllUser() {
		return userRepository.findAll();
	}

	//get user by Id
	public User getUserById(int id) {
		User user=userRepository.findById(id).orElse(null);
		return user;
	}
	
	public User getUserByEmail(String email) {
		User user=userRepository.findByEmail(email);
		return user;
	}
	//Get UserBy Role admin or user

	public User getUserByRole(String role) {
		return userRepository.findByRole(role);
	}
	
	public void updateUser(User user ) {
		

		userRepository.save(user);
	}
	
	public List<User> getAllLockedUsers() {
		return userRepository.findAllLockedusers();
	}
	
	
	public void unlockuserAccount(int id) {
		userRepository.unlockUserAccount(id);
	}
	
}
