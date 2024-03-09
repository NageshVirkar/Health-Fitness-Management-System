package project.gym.services;

import java.util.List;

import project.gym.pojos.Admin;
import project.gym.pojos.Attendance;
import project.gym.pojos.Login;
import project.gym.pojos.Trainer;

public interface ITrainerService {
	Trainer getTrainerById(Long trainerId);

	List<Trainer> getAllTrainers();

	void saveTrainer(Trainer trainer);

	String deleteTrainer(Long trainerId);

	Trainer updateTrainer(Long trainerId, Trainer updatedTrainer);

	void saveTrainerAndLoginWithOtherEntities(Trainer trainer, Login login, Attendance attendance);
	   Trainer getUserByEmail(String username);
	Long getUserIdByEmail(String email);
	
}
