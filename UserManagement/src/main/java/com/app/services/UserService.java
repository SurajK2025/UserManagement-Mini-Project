package com.app.services;

import java.util.List;

import com.app.dtos.SignupDto;
import com.app.entities.User;

public interface UserService {

	List<User> getAllUsers();

	SignupDto signupUser(SignupDto signupDto);

	SignupDto loginUser(SignupDto signupDto);

	SignupDto validateUser(Integer userid);

}
