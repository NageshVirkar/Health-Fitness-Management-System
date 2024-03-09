package project.gym.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import project.gym.dto.MembershipDto.MembershipDto;
import project.gym.mapper.MembershipMapper;
import project.gym.pojos.Membership;
import project.gym.services.IMembershipService;
import project.gym.services.IUsersService;
import project.gym.services.UserService;

import java.util.List;

@RestController
@RequestMapping("/membership")
@CrossOrigin("*")
public class MembershipController {

	@Autowired
	private IMembershipService membershipService;

	@Autowired
	private IUsersService usersService;

	@PostMapping("/addMembership")
	public ResponseEntity<MembershipDto> addMembership(@RequestBody MembershipDto membershipDto) {
		try {
			Long userId = membershipDto.getUserId(); // Assuming userId is present in MembershipDto
			Membership membership = MembershipMapper.dtoToEntity(membershipDto, usersService.getUserById(userId));
			Membership savedMembership = membershipService.saveMembership(membership);
			return new ResponseEntity<>(MembershipMapper.entityToDto(savedMembership), HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
	}

	@GetMapping("/getAllMemberships")
	public List<MembershipDto> getAllMemberships() {
		List<Membership> memberships = membershipService.getAllMemberships();
		return MembershipMapper.entityListToDtoList(memberships);
	}

	@GetMapping("/getMembershipById/{id}")
	public ResponseEntity<MembershipDto> getMembershipById(@PathVariable Long id) {
		try {
			Membership membership = membershipService.getMembershipById(id);
			if (membership != null) {
				return ResponseEntity.ok(MembershipMapper.entityToDto(membership));
			} else {
				return new ResponseEntity<>(HttpStatus.NOT_FOUND);
			}
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@PutMapping("/updateMembership/{id}")
	public ResponseEntity<MembershipDto> updateMembership(@PathVariable Long id,
			@RequestBody MembershipDto updatedMembershipDto) {
		try {
			// Get the existing membership by ID
			Membership existingMembership = membershipService.getMembershipById(id);
			if (existingMembership != null) {
				Long userId = updatedMembershipDto.getUserId(); // Assuming userId is present in MembershipDto
				Membership updatedMembership = MembershipMapper.dtoToEntity(updatedMembershipDto,
						usersService.getUserById(userId));
				// Set the ID of the updated membership
				updatedMembership.setMembershipID(id);
				// Update the membership using the service layer
				Membership result = membershipService.updateMembership(id, updatedMembership);
				// Return the updated DTO
				return ResponseEntity.ok(MembershipMapper.entityToDto(result));
			} else {
				// If membership with the given ID doesn't exist, return not found status
				return new ResponseEntity<>(HttpStatus.NOT_FOUND);
			}
		} catch (Exception e) {
			// If an exception occurs, return internal server error status
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@DeleteMapping("/deleteMembership/{id}")
	public ResponseEntity<Void> deleteMembership(@PathVariable Long id) {
		try {
			membershipService.deleteMembership(id);
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
