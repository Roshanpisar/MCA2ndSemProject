package com.flight.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.flight.exception.EmailAlreadyExistException;
import com.flight.exception.RecordNotFoundException;
import com.flight.model.User;
import com.flight.service.UserService;

@RestController
@CrossOrigin("http://localhost:4200")
public class UserController {

	@Autowired
	UserService userService;


	// register new user
	@PostMapping("/register")
	public User registerUser(@RequestBody User user) {
		String tempEmailId = user.getEmail();
		if (tempEmailId != null && !"".equals(tempEmailId)) {
			User userobj = userService.fetchUserByEmail(tempEmailId);
			if (userobj != null) {
				throw new EmailAlreadyExistException("User with " + tempEmailId + " is already exist");
			}
		}
		User userObj = null;
		userObj = userService.saveUser(user);
		return userObj;
	}

	@PutMapping("/resetPassword")
	public ResponseEntity<String> resetPassword(@RequestBody User user) {
		// userService.resetPassword(user);

		return new ResponseEntity<>("Password updated !", HttpStatus.OK);
	}

	//login User
	@PostMapping("/login")
	public ResponseEntity<?> loginUser(@RequestBody User user) {
		User userObj = userService.fetchUserByEmail(user.getEmail());

		if (userObj != null) {
			if (userObj.getPassword().equals(user.getPassword())) {
				if (userObj.getAttempt() > 2) {
					return new ResponseEntity<>("Account locked", HttpStatus.UNAUTHORIZED);
				}
				userObj.setAttempt(0);
				userService.saveUser(userObj);

				return new ResponseEntity<>( HttpStatus.OK);
			} else {
				if (userObj.getAttempt() > 2) {
					return new ResponseEntity<>("Account locked", HttpStatus.UNAUTHORIZED);
				}
				userObj.setAttempt(userObj.getAttempt() + 1);
				userService.saveUser(userObj);
				return new ResponseEntity<>("password is wrong ", HttpStatus.UNAUTHORIZED);
			}
		}
		return new ResponseEntity<>("user not found " ,HttpStatus.UNAUTHORIZED);
	}

	// Get all user
	@GetMapping("/getAllUser")
	public ResponseEntity<List<User>> getAllUser() {
		List<User> list = userService.getAllUser();
		return new ResponseEntity<>(list, HttpStatus.OK);
	}

	// getUserById
	@GetMapping("/getUser/{id}")
	public ResponseEntity<User> getUser(@PathVariable int id) {
		User user = userService.getUserById(id);
		if (user != null) {
			return new ResponseEntity<User>(user, HttpStatus.OK);
		} else {
			throw new RecordNotFoundException("User not found=" + id);
		}
	}

//	get user by email
	@GetMapping("/getUserByEmail/{email}")
	public ResponseEntity<User> getUserByEmail(@PathVariable String email) {
		System.out.println("in controller");
		User user = userService.getUserByEmail(email);
		if (user != null) {
			return new ResponseEntity<User>(user, HttpStatus.OK);
		} else {
			throw new RecordNotFoundException("User not found=" + email);
		}
	}

	// getUserByRole
	@GetMapping("/getbyRole/{role}")
	public User getUserByRole(@PathVariable String role) {
		User user = userService.getUserByRole(role);
		return user;
	}

//	update user profile
	@PutMapping("/updateUser")
	public ResponseEntity<String> updateUser(@RequestBody User user)

	{
		userService.updateUser(user);
		return new ResponseEntity<String>("User updated successfully", HttpStatus.OK);
	}
//	get all locked account users
	@GetMapping("/getAllLockedUsers")
	public ResponseEntity<?> getAllLockedUsers(){
		List<User> list = userService.getAllLockedUsers();
		if(!list.isEmpty()) {
		return new ResponseEntity<>(list,HttpStatus.OK);
		}
		else {
	   throw new RecordNotFoundException("no Locked accounts");	
		}}
	
//	unlock user by admin
	@GetMapping("/unlockUser/{id}")
	public ResponseEntity<?> unlockusers(@PathVariable int id){
		userService.unlockuserAccount(id);
		return new ResponseEntity<>("user is unlocked",HttpStatus.OK);
		
		
	}

}
