package project.gym.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import project.gym.customException.HandledException;
import project.gym.dto.UsersDto.RegistrationRequestDto;
import project.gym.dto.UsersDto.UserResponseDto;
import project.gym.mapper.UserMapper;
import project.gym.pojos.Attendance;
import project.gym.pojos.Booking;
import project.gym.pojos.ClassSchedule;
import project.gym.pojos.DietPlan;
import project.gym.pojos.FeedbackAndSurveys;
import project.gym.pojos.HealthAndFitnessTracking;
import project.gym.pojos.Login;
import project.gym.pojos.Users;
import project.gym.services.IUsersService;
import project.gym.utils.JwtUtils;

@RestController
@RequestMapping("/customer")
@CrossOrigin("*")
public class UsersController {
	@Autowired
    private IUsersService userService;

    @Autowired
    private PasswordEncoder passwordEncoder;  
    
    @PostMapping("/reg_user")
    public ResponseEntity<String> registerUser(@RequestBody Users user) {
    	System.out.println(user);
        // Encode the password before saving
        user.setPassword(encodePassword(user.getPassword()));
        Login login = user.createLoginEntity(user, passwordEncoder);
        HealthAndFitnessTracking healthTracking = user.createHealthTrackingEntity();
        DietPlan dietplan = user.createDietPlanEntity();
        //FeedbackAndSurveys feedback= user.createFeedbackAndSurveysEntity();
        Booking booking = user.createBookingEntity();
        Attendance attendence = user.createAttendanceEntity();
        ClassSchedule classschedule = user.createClassScheduleEntity();
        // Save the user
        userService.saveUser(user);
        userService.saveUserAndLoginWithOtherEntities(user,
                login,
                healthTracking,dietplan,booking,attendence, classschedule);
        
        return new ResponseEntity<>("User registered successfully", HttpStatus.OK);
    }

    private String encodePassword(String plainTextPassword) {
        return passwordEncoder.encode(plainTextPassword);
    }



    @GetMapping("/getAllUsers")
    public List<UserResponseDto> getUsers() {
        List<Users> users = userService.getAllUsers();
        return UserMapper.userEntityListToUserResponseDtoList(users);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<UserResponseDto> updateUserById(@PathVariable int id, @RequestBody RegistrationRequestDto updatedUserDto) {
        try {
            Users updatedUser = userService.updateUser(id, UserMapper.dtoToCustomerEntity(updatedUserDto));
            return ResponseEntity.ok(UserMapper.userEntityToUserResponseDTO(updatedUser));
        } catch (Exception e) {
            throw new HandledException("Failed to update user");
        }
    }

    @GetMapping("/getUserById/{id}")
    public ResponseEntity<UserResponseDto> getUserById(@PathVariable Long id) {
        try {
            Users user = userService.getUserById(id);
            return ResponseEntity.ok(UserMapper.userEntityToUserResponseDTO(user));
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable Long id) {
        try {
            String result = userService.deleteUser(id);
            return ResponseEntity.ok(result);
        } catch (Exception e) {
            throw new HandledException("failed to delete");
        }
    }
    @GetMapping("/decode-jwt")
    public void decodeJwt(@RequestParam("token") String token) {
        JwtUtils.decodeJwt(token);
    }
}
