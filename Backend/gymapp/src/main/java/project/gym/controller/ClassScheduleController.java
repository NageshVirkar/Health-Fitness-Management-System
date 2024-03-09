package project.gym.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import project.gym.dto.ClassScheduleDto.ClassScheduleDto;
import project.gym.mapper.ClassScheduleMapper;
import project.gym.pojos.ClassSchedule;
import project.gym.services.IClassScheduleService;
import project.gym.services.ITrainerService;

@RestController
@RequestMapping("/class")
@CrossOrigin("*")
public class ClassScheduleController {

	@Autowired
	private IClassScheduleService classScheduleService;

	@Autowired
	private ITrainerService trainerService;

	@Autowired
	public ClassScheduleController(IClassScheduleService classScheduleService, ITrainerService trainerService) {
		this.classScheduleService = classScheduleService;
		this.trainerService = trainerService;
	}

	@PostMapping("/addClass")
	public ResponseEntity<String> addClass(@RequestBody ClassScheduleDto classScheduleDto) {
		try {
			Long trainerId = classScheduleDto.getTrainerID();
			ClassSchedule classSchedule = ClassScheduleMapper.dtoToEntity(classScheduleDto,
					trainerService.getTrainerById(trainerId));
			// Save the class schedule using the service layer
			ClassSchedule savedClassSchedule = classScheduleService.saveClassSchedule(classSchedule);
			// Return a success message
			String successMessage = "Class registered successfully with ID: " + savedClassSchedule.getClassID();
			return ResponseEntity.status(HttpStatus.CREATED).body(successMessage);
		} catch (Exception e) {
			return ResponseEntity.badRequest().body("Failed to register class");
		}
	}

	@GetMapping("/getAllClasses")
	public List<ClassScheduleDto> getAllClasses() {
		List<ClassSchedule> classes = classScheduleService.getAllClassSchedules();
		return ClassScheduleMapper.entityListToDtoList(classes);
	}

	@PutMapping("/updateClass/{id}")
	public ResponseEntity<ClassScheduleDto> updateClass(@PathVariable Long id,
			@RequestBody ClassScheduleDto updatedClassDto) {
		try {
			// Get the existing class schedule by ID
			ClassSchedule existingClassSchedule = classScheduleService.getClassScheduleById(id);

			if (existingClassSchedule != null) {
				Long trainerId = updatedClassDto.getTrainerID();
				// Convert the updated DTO to an entity object
				ClassSchedule updatedClassSchedule = ClassScheduleMapper.dtoToEntity(updatedClassDto,
						trainerService.getTrainerById(trainerId));
				// Update the class schedule using the service layer
				ClassSchedule result = classScheduleService.updateClassSchedule(id, updatedClassSchedule);

				if (result != null) {
					// If update is successful, return the updated DTO
					return ResponseEntity.ok(ClassScheduleMapper.entityToDto(result));
				} else {
					// If update fails, return not found status
					return new ResponseEntity<>(HttpStatus.NOT_FOUND);
				}
			} else {
				// If class schedule with the given ID doesn't exist, return not found status
				return new ResponseEntity<>(HttpStatus.NOT_FOUND);
			}
		} catch (Exception e) {
			// If an exception occurs, return bad request status
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
	}

	@GetMapping("/getClassById/{id}")
	public ResponseEntity<ClassScheduleDto> getClassById(@PathVariable Long id) {
		try {
			ClassSchedule classSchedule = classScheduleService.getClassScheduleById(id);
			ClassScheduleDto classScheduleDto = ClassScheduleMapper.entityToDto(classSchedule);
			return ResponseEntity.ok(classScheduleDto);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@DeleteMapping("/deleteClass/{id}")
	public ResponseEntity<String> deleteClass(@PathVariable Long id) {
		try {
			classScheduleService.deleteClassSchedule(id);
			return ResponseEntity.ok("Class deleted successfully");
		} catch (Exception e) {
			return new ResponseEntity<>("Failed to delete class", HttpStatus.BAD_REQUEST);
		}
	}
}
