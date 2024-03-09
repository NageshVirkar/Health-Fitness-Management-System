package project.gym.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import project.gym.pojos.Admin;
import project.gym.pojos.Attendance;
import project.gym.pojos.Login;
import project.gym.pojos.Trainer;
import project.gym.services.IAdminService;

@RestController
@RequestMapping("/admin")
@CrossOrigin("*")
public class AdminController {
	@Autowired
	private IAdminService adminservice;
	
	@Autowired
	private PasswordEncoder passwordEncoder;

	@PostMapping("/reg_admin")
	public ResponseEntity<String> registerAdmin(@RequestBody Admin admin) {
		// Encode the password before saving
		admin.setPassword(encodePassword(admin.getPassword()));
		Login login = admin.createLoginEntity(admin, passwordEncoder);

		// Save the trainer
		adminservice.saveAdmin(admin);
		adminservice.saveAdminLogin(admin, login);
		return new ResponseEntity<>("Admin registered successfully", HttpStatus.OK);
	}

	private String encodePassword(String plainTextPassword) {
		return passwordEncoder.encode(plainTextPassword);
	}
}
