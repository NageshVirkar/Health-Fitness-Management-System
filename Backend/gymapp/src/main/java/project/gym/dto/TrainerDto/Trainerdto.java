package project.gym.dto.TrainerDto;

import lombok.Data;

@Data
public class Trainerdto {
	private Long trainerID;
	private String firstName;
	private String lastName;
	private String shiftSchedule;
	private String email;
}
