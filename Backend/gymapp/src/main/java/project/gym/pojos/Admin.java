package project.gym.pojos;

import java.util.UUID;

import javax.persistence.*;

import org.springframework.security.crypto.password.PasswordEncoder;

import lombok.Data;
@Data
@Entity
@Table(name = "admin_table")
public class Admin {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "admin_id")
    private Long adminID;

    @Column(name = "first_name", nullable = false)
    private String firstName;

    @Column(name = "last_name", nullable = false)
    private String lastName;

    @Column(name = "username", unique = true, nullable = false)
    private String username;

    @Column(name = "password", nullable = false)
    private String password;

    // Constructors, getters, and setters

    public Login createLoginEntity(Admin admin, PasswordEncoder passwordEncoder) {
		Login login = new Login();

		// Assuming user.getEmail() is the unique identifier for the user
		login.setUsername(admin.getUsername());

		// Assuming you have a PasswordEncoder bean injected
		String hashedPassword = passwordEncoder.encode(admin.getPassword());
		login.setPassword(hashedPassword);

		login.setUsertype(UserType.ADMIN);

		// Generate a random UUID for each login
		login.setUuid(UUID.randomUUID());

		return login;
	}


    
}
