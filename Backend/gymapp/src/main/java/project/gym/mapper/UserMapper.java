package project.gym.mapper;

import java.sql.Date;
import java.time.Instant;
import java.time.LocalDate;
import java.time.ZoneId;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;

import project.gym.customException.InvalidRegistrationException;
import project.gym.dto.UsersDto.RegistrationRequestDto;
import project.gym.dto.UsersDto.UserResponseDto;
import project.gym.dto.UsersDto.Userdto;
import project.gym.pojos.Users;

@Component
public class UserMapper {

	public static Users dtoToCustomerEntity(RegistrationRequestDto registrationRequestDto) {
		if (registrationRequestDto == null || registrationRequestDto.getUserdto() == null) {
			throw new InvalidRegistrationException(
					"Invalid registration request: RegistrationRequestDto or Userdto is null");
		}

		Userdto userDTO = registrationRequestDto.getUserdto();

		// Validate required fields
		if (StringUtils.isEmpty(userDTO.getFirstName()) || StringUtils.isEmpty(userDTO.getLastName())
				|| StringUtils.isEmpty(registrationRequestDto.getUsername())
				|| StringUtils.isEmpty(registrationRequestDto.getPassword())) {
			throw new InvalidRegistrationException("Invalid registration request: Missing required fields");
		}

		Users user = new Users();

		// Set user details from Userdto
		user.setFirstName(userDTO.getFirstName());
		user.setLastName(userDTO.getLastName());
		user.setAddress(userDTO.getAddress());
		user.setContactNumber(userDTO.getContactNumber());
		user.setEmail(userDTO.getEmail());
		user.setHealthRecords(userDTO.getHealthRecords());

		// Set username and encode password
		user.setEmail(registrationRequestDto.getUsername());
		user.setPassword(encodePassword(registrationRequestDto.getPassword()));

		// Set registration date if available
		 user.setRegistrationDate(Date.valueOf(LocalDate.now()));

		return user;
	}

	public static UserResponseDto userEntityToUserResponseDTO(Users userEntity) {
		UserResponseDto userResponseDTO = new UserResponseDto();

		userResponseDTO.setUserId(userEntity.getUserId());
		userResponseDTO.setFirstName(userEntity.getFirstName());
		userResponseDTO.setLastName(userEntity.getLastName());
		userResponseDTO.setAddress(userEntity.getAddress());
		userResponseDTO.setContactNumber(userEntity.getContactNumber());
		userResponseDTO.setEmail(userEntity.getEmail());
		userResponseDTO.setHealthRecords(userEntity.getHealthRecords());
		if (userEntity.getRegistrationDate() != null) {
			userResponseDTO.setRegistrationDate(Instant.ofEpochMilli(userEntity.getRegistrationDate().getTime())
					.atZone(ZoneId.systemDefault()).toLocalDate());
		}

		return userResponseDTO;
	}

	public static List<UserResponseDto> userEntityListToUserResponseDtoList(List<Users> users) {
		return users.stream().map(UserMapper::userEntityToUserResponseDTO).collect(Collectors.toList());
	}

	private static String encodePassword(String plainTextPassword) {
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		return encoder.encode(plainTextPassword);
	}
}
