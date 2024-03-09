package project.gym.mapper;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Component;

import project.gym.customException.InvalidRegistrationException;
import project.gym.dto.ClassScheduleDto.ClassScheduleDto;
import project.gym.pojos.ClassSchedule;
import project.gym.pojos.Trainer;

@Component
public class ClassScheduleMapper {

	public static ClassSchedule dtoToEntity(ClassScheduleDto classScheduleDto, Trainer trainer) {
		if (classScheduleDto == null) {
			throw new InvalidRegistrationException("Invalid class schedule DTO: ClassScheduleRequestDto is null");
		}

		ClassSchedule classSchedule = new ClassSchedule();
		classSchedule.setClassID(classScheduleDto.getClassID());
		if (classSchedule != null) {
			classSchedule.setTrainer(trainer.getTrainerById(classScheduleDto.getTrainerID()));
		}

		classSchedule.setClassName(classScheduleDto.getClassName());
		classSchedule.setScheduleDate(classScheduleDto.getScheduleDate());
		classSchedule.setStartTime(classScheduleDto.getStartTime());
		classSchedule.setEndTime(classScheduleDto.getEndTime());

		return classSchedule;
	}

	public static ClassScheduleDto entityToDto(ClassSchedule classScheduleEntity) {
	    if (classScheduleEntity == null) {
	        throw new IllegalArgumentException("ClassSchedule entity cannot be null");
	    }

	    ClassScheduleDto responseDto = new ClassScheduleDto();

	    // Map entity fields to response DTO
	    responseDto.setClassID(classScheduleEntity.getClassID());
	    
	    // Check if the trainer associated with the class schedule is not null
	    if (classScheduleEntity.getTrainer() != null) {
	        // If not null, set the trainer ID in the DTO
	        responseDto.setTrainerID(classScheduleEntity.getTrainer().getTrainerID());
	    } else {
	        // If null, handle it appropriately (e.g., set to a default value or throw an exception)
	        // For example:
	        throw new IllegalStateException("Trainer associated with ClassSchedule is null");
	    }
	    
	    responseDto.setClassName(classScheduleEntity.getClassName());
	    responseDto.setScheduleDate(classScheduleEntity.getScheduleDate());
	    responseDto.setStartTime(classScheduleEntity.getStartTime());
	    responseDto.setEndTime(classScheduleEntity.getEndTime());

	    return responseDto;
	}


	public static List<ClassScheduleDto> entityListToDtoList(List<ClassSchedule> classSchedules) {
		return classSchedules.stream().map(ClassScheduleMapper::entityToDto).collect(Collectors.toList());
	}
}
