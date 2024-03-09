package project.gym.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import project.gym.pojos.Admin;
import project.gym.pojos.Users;
@Repository
public interface IAdmin extends JpaRepository<Admin, Long> {
	 Admin findByUsername(String username);
	 
}
