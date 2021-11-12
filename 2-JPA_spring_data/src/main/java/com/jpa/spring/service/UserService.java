package com.jpa.spring.service;

import com.jpa.spring.models.User;
import com.jpa.spring.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class UserService {
	@Autowired
	private UserRepository userRepository;
	
    public List<User> getUsers(){
        return userRepository.findAll();
    }

    public Optional<User> getUser(int id){
        return userRepository.findById(id);
    }

    public void saveUser(User user){
        userRepository.save(user);
    }

    public void deleteUser(int id){
    	userRepository.deleteById(id);
    }
    
    public boolean existsByIdUser(int id){
        return userRepository.existsById(id);
    }
    
    public List<User> loginUser(User user){
    	return userRepository.findByEmailAndPassword(user.getEmail(), user.getPassword());
    }
}
