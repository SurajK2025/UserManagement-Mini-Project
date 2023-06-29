package com.app.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dtos.SignupDto;
import com.app.entities.User;
import com.app.services.UserService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/user")
public class UserController {

	@Autowired
	private UserService userService;
	
	@GetMapping("/allUsers")
	public List<User> getAllUsers(){
		return userService.getAllUsers();
	}
	
	@PostMapping("/signup")
	public SignupDto signupUser(@RequestBody SignupDto signupDto) {
		return userService.signupUser(signupDto);
	}
	
	@PostMapping("/login")
	public SignupDto loginUser(@RequestBody SignupDto signupDto) {
		return userService.loginUser(signupDto);
	}
	
	@PostMapping("/validateUser")
	public SignupDto validateUser(@RequestBody SignupDto signupDto) {
		return userService.validateUser(signupDto.getUserId());
	}
}