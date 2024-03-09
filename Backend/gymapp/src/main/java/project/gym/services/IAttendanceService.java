package project.gym.services;

import java.util.List;

import project.gym.pojos.Attendance;

public interface IAttendanceService {
	Attendance getAttendanceById(Long attendanceId);

    List<Attendance> getAllAttendances();

    Attendance saveAttendance(Attendance attendance);

    void deleteAttendance(Long attendanceId);
}
