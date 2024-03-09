package project.gym.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import project.gym.customException.NotFoundException;
import project.gym.dao.IClassSchedule;
import project.gym.pojos.ClassSchedule;
import java.util.List;
import java.util.Optional;

@Service
public class ClassScheduleService implements IClassScheduleService {
	@Autowired
	private final IClassSchedule classScheduleDAO;

	public ClassScheduleService(IClassSchedule classScheduleDAO) {
		this.classScheduleDAO = classScheduleDAO;
	}

	@Override
	public ClassSchedule getClassScheduleById(Long classId) {
		return classScheduleDAO.findById(classId).orElse(null);
	}

	@Override
	public List<ClassSchedule> getAllClassSchedules() {
		return classScheduleDAO.findAll();
	}

	@Override
	public ClassSchedule saveClassSchedule(ClassSchedule classSchedule) {
		return classScheduleDAO.save(classSchedule);
	}

	@Override
	public String deleteClassSchedule(Long classId) {
		try {
			classScheduleDAO.deleteById(classId);
			return "Class with ID " + classId + " has been deleted.";
		} catch (EmptyResultDataAccessException e) {
			throw new RuntimeException("class not found with ID: " + classId);
		} catch (DataAccessException e) {
			throw new RuntimeException("Error deleting class with ID: " + classId, e);
		}
	}

	@Override
	public ClassSchedule updateClassSchedule(Long classId, ClassSchedule updatedClass) {
		Optional<ClassSchedule> optionalClass = classScheduleDAO.findById((long) classId);

		if (optionalClass.isPresent()) {
			ClassSchedule existingClass = optionalClass.get();

			if (updatedClass.getClassName() != null && !updatedClass.getClassName().isEmpty()) {
				existingClass.setClassName(updatedClass.getClassName());
			}
			if (updatedClass.getEndTime() != null) {
				existingClass.setEndTime(updatedClass.getEndTime());
			}
			if (updatedClass.getScheduleDate() != null) {
				existingClass.setScheduleDate(updatedClass.getScheduleDate());
			}
			if (updatedClass.getStartTime() != null) {
				existingClass.setStartTime(updatedClass.getStartTime());
			}

			if (updatedClass.getTrainer() != null) {
				existingClass.setTrainer(updatedClass.getTrainer());
			}

			return classScheduleDAO.save(existingClass);
		} else {
			throw new NotFoundException("Class not found with ID: " + classId);
		}
	}

}
