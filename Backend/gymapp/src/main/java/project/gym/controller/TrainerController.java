package project.gym.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import project.gym.dto.TrainerDto.RegistrationRequestDto;
import project.gym.dto.TrainerDto.TrainerResponseDto;
import project.gym.mapper.TrainerMapper;
import project.gym.pojos.Trainer;
import project.gym.pojos.Attendance;
import project.gym.pojos.Login;
import project.gym.services.ITrainerService;
import project.gym.utils.JwtUtils;

import java.util.List;

@RestController
@RequestMapping("/trainer")
@CrossOrigin("*")
public class TrainerController {

	@Autowired
	private ITrainerService trainerService;

	@Autowired
	private PasswordEncoder passwordEncoder;

	@PostMapping("/reg_trainer")
	public ResponseEntity<String> registerTrainer(@RequestBody Trainer trainer) {
		// Encode the password before saving
		trainer.setPassword(encodePassword(trainer.getPassword()));
		Login login = trainer.createLoginEntity(trainer, passwordEncoder);
		Attendance attendence = trainer.createAttendanceEntity();

		// Save the trainer
		trainerService.saveTrainer(trainer);
		trainerService.saveTrainerAndLoginWithOtherEntities(trainer, login, attendence);
		return new ResponseEntity<>("Trainer registered successfully", HttpStatus.OK);
	}

	private String encodePassword(String plainTextPassword) {
		return passwordEncoder.encode(plainTextPassword);
	}

	@GetMapping("/getAllTrainers")
	public List<TrainerResponseDto> getTrainers() {
		List<Trainer> trainers = trainerService.getAllTrainers();
		return TrainerMapper.trainerEntityListToResponseDtoList(trainers);
	}

	@PutMapping("/updateTrainer/{id}")
	public ResponseEntity<TrainerResponseDto> updateTrainerById(@PathVariable Long id,
			@RequestBody RegistrationRequestDto updatedTrainerDto) {
		try {
			Trainer updatedTrainer = trainerService.updateTrainer(id,
					TrainerMapper.dtoToTrainerEntity(updatedTrainerDto));
			return ResponseEntity.ok(TrainerMapper.trainerEntityToTrainerResponseDto(updatedTrainer));
		} catch (Exception e) {
			// Handle exception properly
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping("/getTrainerById/{id}")
	public ResponseEntity<TrainerResponseDto> getTrainerById(@PathVariable Long id) {
		try {
			Trainer trainer = trainerService.getTrainerById(id);
			return ResponseEntity.ok(TrainerMapper.trainerEntityToTrainerResponseDto(trainer));
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@DeleteMapping("/deleteTrainer/{id}")
	public ResponseEntity<String> deleteTrainer(@PathVariable Long id) {
		try {
			String result = trainerService.deleteTrainer(id);
			return ResponseEntity.ok(result);
		} catch (Exception e) {
			// Handle exception properly
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping("/decode-jwt")
	public void decodeJwt(@RequestParam("token") String token) {
		JwtUtils.decodeJwt(token);
	}
}
