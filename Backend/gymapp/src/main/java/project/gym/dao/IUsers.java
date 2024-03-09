package project.gym.dao;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import project.gym.pojos.Admin;
import project.gym.pojos.Users;

@Repository
public interface IUsers extends JpaRepository<Users, Long> {
	<Optional>Users findByEmail(String email);
	
    
}

