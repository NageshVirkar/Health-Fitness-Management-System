package project.gym.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import project.gym.dao.IAttendance;
import project.gym.pojos.Attendance;

import java.util.List;

	@Service
	public class AttendanceService implements IAttendanceService {
		@Autowired
	    private final IAttendance attendanceDAO;

	    
	    public AttendanceService(IAttendance attendanceDAO) {
	        this.attendanceDAO = attendanceDAO;
	    }

	    @Override
	    public Attendance getAttendanceById(Long attendanceId) {
	        return attendanceDAO.findById(attendanceId).orElse(null);
	    }

	    @Override
	    public List<Attendance> getAllAttendances() {
	        return attendanceDAO.findAll();
	    }

	    @Override
	    public Attendance saveAttendance(Attendance attendance) {
	        return attendanceDAO.save(attendance);
	    }

	    @Override
	    public void deleteAttendance(Long attendanceId) {
	        attendanceDAO.deleteById(attendanceId);
	    }
	
}
