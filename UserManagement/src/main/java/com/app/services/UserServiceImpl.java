package com.app.services;

import java.util.List;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dtos.SignupDto;
import com.app.entities.User;
import com.app.entities.ValidationStatus;
import com.app.repositories.UserRepository;

@Service
@Transactional
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private ModelMapper modelMapper;

	@Override
	public List<User> getAllUsers() {
		return userRepository.findAll();
	}

	@Override
	public SignupDto signupUser(SignupDto signupDto) {
		SignupDto returnDto = new SignupDto();
		
		User existingUser = userRepository.findUserByUserName(signupDto.getUserName());
		if(existingUser != null) {
			returnDto.setResponseCode("503");
			returnDto.setResponseMsg("Username already exists.");
		}
		
		User saveUser = modelMapper.map(signupDto, User.class);
		saveUser.setStatus(ValidationStatus.NOTVALIDATED);
		
		try {
			User user = userRepository.save(saveUser);
			returnDto = modelMapper.map(user, SignupDto.class);
			returnDto.setResponseCode("200");
			returnDto.setResponseMsg("User registered successfully.");
		}
		catch(Exception e) {
			returnDto.setResponseCode("500");
			returnDto.setResponseMsg("Unable to save user.");
		}
		
		return returnDto;
	}

	@Override
	public SignupDto loginUser(SignupDto signupDto) {
		SignupDto returnDto = new SignupDto();
		User user =  userRepository.findUserByUserNameAndPassword(signupDto.getUserName(), signupDto.getPassword());
		
		if(signupDto.getUserName().equals("admin") && signupDto.getPassword().equals("admin")) {
			returnDto.setResponseCode("201");
			returnDto.setResponseMsg("Logged in successfully.");
		}
		else if(user==null) {
			returnDto.setResponseCode("501");
			returnDto.setResponseMsg("Wrong username or password.");
		}
		else if (user.getStatus() == ValidationStatus.NOTVALIDATED) {
			returnDto.setResponseCode("502");
			returnDto.setResponseMsg("User not yet validated.");
		}
		else {
			returnDto = modelMapper.map(user, SignupDto.class);
			returnDto.setResponseCode("200");
			returnDto.setResponseMsg("Logged in successfully.");
		}
		
		return returnDto;
	}

	@Override
	public SignupDto validateUser(Integer userid) {
		SignupDto returnDto = new SignupDto();
		try {
			User user = userRepository.findById(userid).orElseThrow();
			
			if(user.getStatus() == ValidationStatus.NOTVALIDATED) {
				user.setStatus(ValidationStatus.VALIDATED);
				returnDto = modelMapper.map(user, SignupDto.class);
				returnDto.setResponseCode("200");
				returnDto.setResponseMsg("Status changed successfully.");
			}
			else {
				returnDto = modelMapper.map(user, SignupDto.class);
				returnDto.setResponseCode("200");
				returnDto.setResponseMsg("User is already validated.");
			}
		}
		catch(Exception e) {
			returnDto.setResponseCode("501");
			returnDto.setResponseMsg("Invalid userid.");
		}
		
		return returnDto;
	}

	@Override
	public SignupDto updateUser(SignupDto signupDto) {
		SignupDto returnDto = new SignupDto();
		
		try {
			User user = userRepository.findById(signupDto.getUserId()).orElseThrow();
			
			user.setUserName(signupDto.getUserName());
			user.setFirstName(signupDto.getFirstName());
			user.setLastName(signupDto.getLastName());
			user.setPassword(signupDto.getPassword());
			user.setDob(signupDto.getDob());
			user.setAddress(signupDto.getAddress());
			user.setPhone(signupDto.getPhone());
			
			this.userRepository.save(user);
			
			returnDto = modelMapper.map(user, SignupDto.class);
			returnDto.setResponseCode("200");
			returnDto.setResponseMsg("User updated successfully.");
		}
		catch(Exception e) {
			returnDto.setResponseCode("501");
			returnDto.setResponseMsg("Invalid userid.");
		}
		
		return returnDto;
	}
}
