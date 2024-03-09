package project.gym.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import project.gym.pojos.Trainer;
import project.gym.pojos.Users;

public interface ITrainer extends JpaRepository<Trainer, Long> {
	Trainer findByEmail(String email);

}
