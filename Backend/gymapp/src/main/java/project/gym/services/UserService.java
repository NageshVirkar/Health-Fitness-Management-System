package project.gym.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import project.gym.customException.EmailAlreadyExistsException;
import project.gym.customException.NotFoundException;
import project.gym.dao.IAttendance;
import project.gym.dao.IBooking;
import project.gym.dao.IClassSchedule;
import project.gym.dao.IDietPlan;
import project.gym.dao.IFeedbackAndSurveys;
import project.gym.dao.IHealthAndFitnessTracking;
import project.gym.dao.ILogin;
import project.gym.dao.IUsers;
import project.gym.pojos.Admin;
import project.gym.pojos.Attendance;
import project.gym.pojos.Booking;
import project.gym.pojos.ClassSchedule;
import project.gym.pojos.DietPlan;
import project.gym.pojos.FeedbackAndSurveys;
import project.gym.pojos.HealthAndFitnessTracking;
import project.gym.pojos.Login;
import project.gym.pojos.Users;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

@Service
public class UserService implements IUsersService {
	@Autowired
	private final IUsers usersDAO;
	@Autowired
	private final IUsers usersRepository;
	@Autowired
	private final ILogin loginRepository;
	@Autowired
	private final IHealthAndFitnessTracking healthTrackingRepository;
	@Autowired
	private final IBooking bookingRepository;
	@Autowired
	private final IAttendance attendanceRepository;
	@Autowired
	private final IDietPlan dietPlanRepository;
	@Autowired
	private final IClassSchedule classScheduleRepository;


	@Autowired
	public UserService(IUsers usersDAO, IUsers usersRepository, ILogin loginRepository,
			IHealthAndFitnessTracking healthTrackingRepository, IBooking bookingRepository,
			IAttendance attendanceRepository, IDietPlan dietPlanRepository, IClassSchedule classScheduleRepository) {

		this.usersDAO = usersDAO;
		this.usersRepository = usersRepository;
		this.loginRepository = loginRepository;
		this.healthTrackingRepository = healthTrackingRepository;
		this.bookingRepository = bookingRepository;
		this.attendanceRepository = attendanceRepository;
		this.dietPlanRepository = dietPlanRepository;
		this.classScheduleRepository = classScheduleRepository;
	
	}

	@Override
	public List<Users> getAllUsers() {
		return usersDAO.findAll();
	}

	@Override
	public Users getUserById(Long userId) {
		return usersDAO.findById(userId).orElse(null);
	}

	public void saveUser(Users user) {
		// Check if a user with the same email already exists
		Users existingUser = usersRepository.findByEmail(user.getEmail());

		if (existingUser != null) {
			throw new EmailAlreadyExistsException("Email address already in use.");
		}

		// Save the user if email is unique
		usersRepository.save(user);
	}

	@Override
	public String deleteUser(Long userId) {
		try {
			usersDAO.deleteById(userId);
			return "User with ID " + userId + " has been deleted.";
		} catch (EmptyResultDataAccessException e) {
			throw new RuntimeException("User not found with ID: " + userId);
		} catch (DataAccessException e) {
			throw new RuntimeException("Error deleting user with ID: " + userId, e);
		}
	}

	public Users updateUser(int id, Users updatedUser) {
		Optional<Users> optionalUser = usersDAO.findById((long) id);

		if (optionalUser.isPresent()) {
			Users existingUser = optionalUser.get();

			existingUser.setFirstName(updatedUser.getFirstName() != null && !updatedUser.getFirstName().isEmpty()
					? updatedUser.getFirstName()
					: existingUser.getFirstName());
			existingUser.setLastName(updatedUser.getLastName() != null && !updatedUser.getLastName().isEmpty()
					? updatedUser.getLastName()
					: existingUser.getLastName());
			existingUser.setAddress(
					updatedUser.getAddress() != null && !updatedUser.getAddress().isEmpty() ? updatedUser.getAddress()
							: existingUser.getAddress());
			existingUser.setContactNumber(
					updatedUser.getContactNumber() != null && !updatedUser.getContactNumber().isEmpty()
							? updatedUser.getContactNumber()
							: existingUser.getContactNumber());
			existingUser.setEmail(
					updatedUser.getEmail() != null && !updatedUser.getEmail().isEmpty() ? updatedUser.getEmail()
							: existingUser.getEmail());
			existingUser.setHealthRecords(
					updatedUser.getHealthRecords() != null && !updatedUser.getHealthRecords().isEmpty()
							? updatedUser.getHealthRecords()
							: existingUser.getHealthRecords());
			existingUser
					.setRegistrationDate(updatedUser.getRegistrationDate() != null ? updatedUser.getRegistrationDate()
							: existingUser.getRegistrationDate());

			return usersDAO.save(existingUser);
		} else {
			throw new NotFoundException("User not found with ID: " + id);
		}
	}

	@Transactional
	@Override
	public void saveUserAndLoginWithOtherEntities(Users user, Login login, HealthAndFitnessTracking healthTracking,
			DietPlan dietPlan, Booking booking, Attendance attendance,
			ClassSchedule classSchedule) {
		Users savedUser = usersRepository.save(user);

		// Set the user ID in the login object
		login.setUsername(savedUser.getEmail());
		login.setPassword(savedUser.getPassword());
        login.setUser(savedUser);
		
		loginRepository.save(login);

		// Save HealthAndFitnessTracking
		healthTracking.setUser(savedUser);
		healthTrackingRepository.save(healthTracking);

		// Save DietPlan
		dietPlan.setUser(savedUser);
		dietPlanRepository.save(dietPlan);

		// Save Attendance
		attendance.setUser(savedUser);
		attendanceRepository.save(attendance);

		// Save ClassSchedule
		classScheduleRepository.save(classSchedule);

		// Save Booking
		booking.setUser(savedUser);
		bookingRepository.save(booking);

	}

	@Override
	public Users getUserByEmail(String username) {
		
		return usersDAO.findByEmail(username);
	}
	
	@Override
    public Long getUserIdByEmail(String email) {
        Users users = usersDAO.findByEmail(email);
        if (users != null) {
            // Assuming there is a relation between Admin and Users through userId
            return users.getUserId();
        } else {
            return null; // or throw an exception if needed
        }
    }
	
}
