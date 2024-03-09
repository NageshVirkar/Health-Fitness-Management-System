package project.gym.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import project.gym.customException.EmailAlreadyExistsException;
import project.gym.customException.NotFoundException;
import project.gym.dao.IAttendance;
import project.gym.dao.ILogin;
import project.gym.dao.ITrainer;
import project.gym.pojos.Admin;
import project.gym.pojos.Attendance;
import project.gym.pojos.Login;
import project.gym.pojos.Trainer;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

@Service
public class TrainerService implements ITrainerService {
	@Autowired
	private final ITrainer trainerDAO;
	@Autowired
	private final ITrainer trainerRepository;
	@Autowired
	private final ILogin loginRepository;
	@Autowired
	private final IAttendance attendanceRepository;

	public TrainerService(ITrainer trainerDAO, ITrainer trainerRepository, ILogin loginRepository,
			IAttendance attendanceRepository) {
		super();
		this.trainerDAO = trainerDAO;
		this.trainerRepository = trainerRepository;
		this.loginRepository = loginRepository;
		this.attendanceRepository = attendanceRepository;
	}

	@Override
	public Trainer getTrainerById(Long trainerId) {
		return trainerDAO.findById(trainerId).orElse(null);
	}

	@Override
	public List<Trainer> getAllTrainers() {
		return trainerDAO.findAll();
	}

	@Override
	public void saveTrainer(Trainer trainer) {
		Trainer existingTrainer = trainerRepository.findByEmail(trainer.getEmail());
		if (existingTrainer != null) {
			throw new EmailAlreadyExistsException("Email address already in use.");
		}
		trainerRepository.save(trainer);
	}

	@Override
	public String deleteTrainer(Long trainerId) {
		try {
			trainerDAO.deleteById(trainerId);

			return "Trainer with ID " + trainerId + " has been deleted.";
		} catch (EmptyResultDataAccessException e) {
			throw new RuntimeException("Trainer not found with ID: " + trainerId);
		} catch (DataAccessException e) {
			throw new RuntimeException("Error deleting Trainer with ID: " + trainerId, e);
		}
	}

	@Override
	public Trainer updateTrainer(Long trainerId, Trainer updatedTrainer) {
		Optional<Trainer> optionalTrainer = trainerDAO.findById((long) trainerId);
		if (optionalTrainer.isPresent()) {
			Trainer existingTrainer = optionalTrainer.get();

			existingTrainer
					.setFirstName(updatedTrainer.getFirstName() != null && !updatedTrainer.getFirstName().isEmpty()
							? updatedTrainer.getFirstName()
							: existingTrainer.getFirstName());

			existingTrainer.setLastName(updatedTrainer.getLastName() != null && !updatedTrainer.getLastName().isEmpty()
					? updatedTrainer.getLastName()
					: existingTrainer.getLastName());

			existingTrainer.setEmail(updatedTrainer.getEmail() != null && !updatedTrainer.getEmail().isEmpty()
					? updatedTrainer.getEmail()
					: existingTrainer.getEmail());

			existingTrainer.setShiftSchedule(
					updatedTrainer.getShiftSchedule() != null && !updatedTrainer.getShiftSchedule().isEmpty()
							? updatedTrainer.getShiftSchedule()
							: existingTrainer.getShiftSchedule());

			return trainerDAO.save(existingTrainer);
		} else {
			throw new NotFoundException("Trainer not found with ID: " + trainerId);
		}
	}

	@Transactional
	@Override
	public void saveTrainerAndLoginWithOtherEntities(Trainer trainer, Login login, Attendance attendance) {
		Trainer savedTrainer = trainerRepository.save(trainer);

		// Set the user ID in the login object
		login.setUsername(savedTrainer.getEmail());
		login.setPassword(savedTrainer.getPassword());
		loginRepository.save(login);
		
		// Save Attendance
		attendance.setTrainer(savedTrainer);
		attendanceRepository.save(attendance);
	}

	@Override
    public Long getUserIdByEmail(String email) {
        Trainer trainer = trainerDAO.findByEmail(email);
        if (trainer != null) {
            // Assuming there is a relation between Admin and Users through userId
            return trainer.getTrainerID();
        } else {
            return null; // or throw an exception if needed
        }
    }

	@Override
	public Trainer getUserByEmail(String username) {
		// TODO Auto-generated method stub
		return trainerDAO.findByEmail(username);
	}
}
