package project.gym.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import project.gym.pojos.Login;
@Repository
public interface ILogin extends JpaRepository<Login, Long> {

	Optional<Login> findByUsername(String username);

}
