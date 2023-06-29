package com.app.dtos;

import java.sql.Date;

import com.app.entities.ValidationStatus;

public class SignupDto {

	private Integer userId;
	
	private String responseMsg;
	private String responseCode;
	
	private String userName;
	private String firstName;
	public Integer getUserId() {
		return userId;
	}
	public void setUserId(Integer userId) {
		this.userId = userId;
	}
	private String lastName;
	private String password;
	private Date dob;
	private String address;
	private String phone;
	private ValidationStatus status;
	
	public ValidationStatus getStatus() {
		return status;
	}
	public void setStatus(ValidationStatus status) {
		this.status = status;
	}
	public String getResponseMsg() {
		return responseMsg;
	}
	public void setResponseMsg(String responseMsg) {
		this.responseMsg = responseMsg;
	}
	public String getResponseCode() {
		return responseCode;
	}
	public void setResponseCode(String responseCode) {
		this.responseCode = responseCode;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public Date getDob() {
		return dob;
	}
	public void setDob(Date dob) {
		this.dob = dob;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public SignupDto(Integer userId, String responseMsg, String responseCode, String userName, String firstName,
			String lastName, String password, Date dob, String address, String phone, ValidationStatus status) {
		super();
		this.userId = userId;
		this.responseMsg = responseMsg;
		this.responseCode = responseCode;
		this.userName = userName;
		this.firstName = firstName;
		this.lastName = lastName;
		this.password = password;
		this.dob = dob;
		this.address = address;
		this.phone = phone;
		this.status = status;
	}
	public SignupDto() {
		// TODO Auto-generated constructor stub
	}
}
