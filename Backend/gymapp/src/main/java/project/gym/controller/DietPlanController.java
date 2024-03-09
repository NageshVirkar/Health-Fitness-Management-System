package project.gym.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import project.gym.dto.DietPlan.DietPlanDto;
import project.gym.mapper.DietPlanMapper;
import project.gym.pojos.DietPlan;
import project.gym.services.IDietPlanService;
import project.gym.services.IUsersService;

import java.util.List;

@RestController
@RequestMapping("/dietplans")
@CrossOrigin("*")
public class DietPlanController {

	@Autowired
	private final IDietPlanService dietPlanService;
	@Autowired
	private final IUsersService userService;

	@Autowired
	public DietPlanController(IDietPlanService dietPlanService, IUsersService userService) {
		this.dietPlanService = dietPlanService;
		this.userService = userService;
	}

	@PostMapping("/addPlan")
	public ResponseEntity<DietPlanDto> createDietPlan(@RequestBody DietPlanDto dietPlanDto) {
		try {
			// You may want to validate the user ID here before creating a diet plan
			// For simplicity, I assume the user ID is valid
			Long userId = dietPlanDto.getUserId();
			DietPlan dietPlan = DietPlanMapper.dtoToEntity(dietPlanDto, userService.getUserById(userId));
			DietPlan savedDietPlan = dietPlanService.saveDietPlan(dietPlan);
			return new ResponseEntity<>(DietPlanMapper.entityToDto(savedDietPlan), HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
	}

	@GetMapping("/getAllPlans")
	public List<DietPlanDto> getAllDietPlans() {
		List<DietPlan> dietPlans = dietPlanService.getAllDietPlans();
		return DietPlanMapper.entityListToDtoList(dietPlans);
	}

	@GetMapping("/getPlanById/{id}")
	public ResponseEntity<DietPlanDto> getDietPlanById(@PathVariable Long id) {
		DietPlan dietPlan = dietPlanService.getDietPlanById(id);
		if (dietPlan != null) {
			return ResponseEntity.ok(DietPlanMapper.entityToDto(dietPlan));
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@PutMapping("/updatePlan/{id}")
	public ResponseEntity<DietPlanDto> updateDietPlan(@PathVariable Long id,
			@RequestBody DietPlanDto updatedDietPlanDto) {
		try {
			DietPlan existingDietPlan = dietPlanService.getDietPlanById(id);

			if (existingDietPlan != null) {
				Long userId = updatedDietPlanDto.getUserId();
				DietPlan updatedDietPlan = DietPlanMapper.dtoToEntity(updatedDietPlanDto,
						userService.getUserById(userId));
				DietPlan result = dietPlanService.updateDietPlan(id, updatedDietPlan);

				if (result != null) {
					return ResponseEntity.ok(DietPlanMapper.entityToDto(result));
				} else {
					return new ResponseEntity<>(HttpStatus.NOT_FOUND);
				}
			} else {
				return new ResponseEntity<>(HttpStatus.NOT_FOUND);
			}
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
	}

	@DeleteMapping("deletePlan/{id}")
	public ResponseEntity<Void> deleteDietPlan(@PathVariable Long id) {
		dietPlanService.deleteDietPlan(id);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
}
