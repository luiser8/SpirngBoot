package com.basico.demo;

import java.util.HashMap;
import java.util.Map;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BasicoApplication {

	@GetMapping("/")
	public String index() {
		return "Spring Boot!";
	}
	
	@GetMapping("/map")
	public Map<String, String> sayHello() {
	    HashMap<String, String> map = new HashMap<>();
	    map.put("key", "value");
	    return map;
	}
	
	@PostMapping("/post")
	public String postIndex(@RequestBody String name) {
		return "Post " + name;
	}
	
	@PutMapping("/put")
	public String putIndex(@RequestBody String name) {
		return "Put " + name;
	}
	
	@DeleteMapping("/delete")
	public String deleteIndex(int id) {
		return "Delete " + id;
	}
}