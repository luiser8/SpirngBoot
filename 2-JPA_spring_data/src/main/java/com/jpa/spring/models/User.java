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

	@Column(name = "password")
	private String password;
	
	@Column(name = "rol")
	private int rol;
	
	public User(String name, String email, String password, int rol) {
		this.name = name;
		this.email = email;
		this.password = password;
		this.rol = rol;
	}
	
	public int getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public String getEmail() {
		return email;
	}
	
	public String getPassword() {
		return password;
	}
	
	public int getRol() {
		return rol;
	}
	
	public void setName(String name) {
		this.name = name;
	}

	public void setEmail(String email) {
		this.email = email;
	}
	
	public void setPassword(String password) {
		this.password = password;
	}
	
	public void setRol(int rol) {
		this.rol = rol;
	}
}