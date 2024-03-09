package project.gym.services;

import java.util.List;

import project.gym.pojos.ClassSchedule;

public interface IClassScheduleService {
	 ClassSchedule getClassScheduleById(Long classId);

	    List<ClassSchedule> getAllClassSchedules();

	    ClassSchedule saveClassSchedule(ClassSchedule classSchedule);

	    String deleteClassSchedule(Long classId);
	    
	    ClassSchedule updateClassSchedule(Long classId,ClassSchedule updatedClass);
}
