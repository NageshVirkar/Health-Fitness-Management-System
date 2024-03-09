package project.gym.pojos;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.UUID;

import javax.persistence.*;

import org.springframework.security.crypto.password.PasswordEncoder;

import lombok.Data;

@Entity
@Table(name = "trainers")
@Data
public class Trainer {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "trainer_id")
	private Long trainerID;

	@Column(name = "first_name")
	private String firstName;

	@Column(name = "last_name")
	private String lastName;

	@Column(name = "shift_schedule")
	private String shiftSchedule;

	@Column(name = "email", unique = true, nullable = false)
	private String email;

	@Column(name = "password", nullable = false)
	private String password;

	@OneToMany(mappedBy = "trainer", cascade = CascadeType.PERSIST)
	private Set<Login> logins = new HashSet<>();

	@OneToMany(mappedBy = "trainer")
	private List<Attendance> attendances;

	public Long trainerID() {
		return trainerID;
	}

	public Trainer getTrainerById(Long trainerID) {
		Trainer trainer = new Trainer();
		trainer.setTrainerID(trainerID);
		return trainer;
	}

	public Login createLoginEntity(Trainer trainer, PasswordEncoder passwordEncoder) {
		Login login = new Login();

		// Assuming user.getEmail() is the unique identifier for the user
		login.setUsername(trainer.getEmail());

		// Assuming you have a PasswordEncoder bean injected
		String hashedPassword = passwordEncoder.encode(trainer.getPassword());
		login.setPassword(hashedPassword);

		login.setUsertype(UserType.TRAINER);

		// Generate a random UUID for each login
		login.setUuid(UUID.randomUUID());

		return login;
	}

	public Attendance createAttendanceEntity() {
		Attendance attendance = new Attendance();
		// Set properties if needed
		return attendance;
	}
}
