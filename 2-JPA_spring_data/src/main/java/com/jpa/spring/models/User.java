package com.jpa.spring.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "users")
public class User {
	
	public User(){}
	
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private int id;
    
	@Column(name = "name")
	private String name;

	@Column(name = "email")
	private String email;

	public User(String name, String email) {
		this.name = name;
		this.email = email;
	}
	
	public int getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
}