package com.jpa.spring.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.jpa.spring.models.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
	public List<User> findByName(String name);

	public List<User> findByEmail(String email);

	public List<User> findByNameAndEmail(String name, String email);
	
	public List<User> findByEmailAndPassword(String email, String password);

}