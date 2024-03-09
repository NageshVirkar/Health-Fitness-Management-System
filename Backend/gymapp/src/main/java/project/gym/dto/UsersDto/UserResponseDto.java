package project.gym.dto.UsersDto;

import java.time.LocalDate;

import lombok.Data;

@Data
public class UserResponseDto {

	private Long userId;
	private String firstName;
	private String lastName;
	private String address;
	private String contactNumber;
	private String email;
	private String healthRecords;
	private LocalDate registrationDate;

}
