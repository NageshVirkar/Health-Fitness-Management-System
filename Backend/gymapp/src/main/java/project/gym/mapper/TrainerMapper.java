package project.gym.mapper;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import project.gym.customException.InvalidRegistrationException;
import project.gym.dto.TrainerDto.RegistrationRequestDto;
import project.gym.dto.TrainerDto.TrainerResponseDto;
import project.gym.dto.TrainerDto.Trainerdto;
import project.gym.pojos.Trainer;

@Component
public class TrainerMapper {

	public static Trainer dtoToTrainerEntity(RegistrationRequestDto registrationRequestDto) {
		if (registrationRequestDto == null || registrationRequestDto.getTrainerdto() == null) {
			throw new InvalidRegistrationException(
					"Invalid registration request: RegistrationRequestDto or Trainerdto is null");
		}

		Trainerdto trainerdto = new Trainerdto();

		// Validate required fields
		if (StringUtils.isEmpty(trainerdto.getFirstName()) || StringUtils.isEmpty(trainerdto.getLastName())
				|| StringUtils.isEmpty(registrationRequestDto.getUsername())
				|| StringUtils.isEmpty(registrationRequestDto.getPassword())) {
			throw new InvalidRegistrationException("Invalid trainer DTO: Missing required fields");
		}

		Trainer trainer = new Trainer();

		// Set trainer details from TrainerDto
		trainer.setFirstName(trainerdto.getFirstName());
		trainer.setLastName(trainerdto.getLastName());
		trainer.setShiftSchedule(trainerdto.getShiftSchedule());
		trainer.setEmail(trainerdto.getEmail());

		trainer.setEmail(registrationRequestDto.getUsername());
		trainer.setPassword(encodePassword(registrationRequestDto.getPassword()));
//		trainer.setPassword(registrationRequestDto.getPassword());

		return trainer;
	}

	public static TrainerResponseDto trainerEntityToDto(Trainer trainerEntity) {
		if (trainerEntity == null) {
			throw new IllegalArgumentException("Trainer entity cannot be null");
		}

		TrainerResponseDto dto = new TrainerResponseDto();

		// Map entity fields to DTO
		dto.setTrainerID(trainerEntity.getTrainerID());
		dto.setFirstName(trainerEntity.getFirstName());
		dto.setLastName(trainerEntity.getLastName());
		dto.setEmail(trainerEntity.getEmail());

		return dto;
	}

	public static TrainerResponseDto trainerEntityToTrainerResponseDto(Trainer trainerEntity) {
		if (trainerEntity == null) {
			throw new IllegalArgumentException("Trainer entity cannot be null");
		}

		TrainerResponseDto trainerresponseDto = new TrainerResponseDto();

		// Map entity fields to response DTO
		trainerresponseDto.setTrainerID(trainerEntity.getTrainerID());
		trainerresponseDto.setFirstName(trainerEntity.getFirstName());
		trainerresponseDto.setLastName(trainerEntity.getLastName());
		trainerresponseDto.setEmail(trainerEntity.getEmail());

		// You can add more mapping logic here if needed

		return trainerresponseDto;
	}

	public static List<TrainerResponseDto> trainerEntityListToResponseDtoList(List<Trainer> trainers) {
		return trainers.stream().map(TrainerMapper::trainerEntityToTrainerResponseDto).collect(Collectors.toList());
	}

	private static String encodePassword(String plainTextPassword) {
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		return encoder.encode(plainTextPassword);
	}
}
