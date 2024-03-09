package project.gym.dto.ClassScheduleDto;

import java.util.Date;

import lombok.Data;

@Data
public class ClassScheduleDto {
	private Long classID;
	private Long trainerID;
	private String className;
	private Date scheduleDate;
	private Date startTime;
	private Date endTime;

}
