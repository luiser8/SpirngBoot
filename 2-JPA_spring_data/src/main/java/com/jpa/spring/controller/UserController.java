package com.jpa.spring.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.jpa.spring.models.User;
import com.jpa.spring.service.UserService;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/users")

public class UserController {
	@Autowired
	private UserService userService;

	@GetMapping("/getUsers")
	public ResponseEntity<List<User>> getAll() {
		List<User> users = userService.getUsers();
		return new ResponseEntity<List<User>>(users, HttpStatus.OK);
	}

	@GetMapping("/getUser/{id}")
	public ResponseEntity<User> userById(@PathVariable("id") int id) {

		if (!userService.existsByIdUser(id))
			return new ResponseEntity<User>(HttpStatus.NOT_FOUND);

		User user = userService.getUser(id).get();
		return new ResponseEntity<User>(user, HttpStatus.OK);
	}

	@PostMapping("/create")
	public ResponseEntity<User> createUser(@RequestBody User user) {
		User _user = new User(user.getName(), user.getEmail());
		userService.saveUser(user);
		return new ResponseEntity<>(_user, HttpStatus.OK);
	}

	@PutMapping("/put/{id}")
	public ResponseEntity<User> putUsers(@PathVariable("id") int id, @RequestBody User user) {

		if (!userService.existsByIdUser(id))
			return new ResponseEntity<User>(HttpStatus.NOT_FOUND);

		User _user = userService.getUser(id).get();
		_user.setName(user.getName());
		_user.setEmail(user.getEmail());
		userService.saveUser(user);
		return new ResponseEntity<User>(HttpStatus.OK);
	}

	@DeleteMapping("/delete/{id}")
	public ResponseEntity<User> delete(@PathVariable("id") int id) {
		if (!userService.existsByIdUser(id))
			return new ResponseEntity<User>(HttpStatus.NOT_FOUND);
		userService.deleteUser(id);
		return new ResponseEntity<User>(HttpStatus.OK);
	}
}