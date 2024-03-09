package project.gym.mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import project.gym.dto.AttendanceDto.AttendanceDto;
import project.gym.pojos.Attendance;
import project.gym.pojos.Users;
import project.gym.services.UserService;

@Component
public class AttendanceMapper  {
    @Autowired
    private final UserService userService;

    @Autowired
    public AttendanceMapper(UserService userService) {
        this.userService = userService;
    }

    public AttendanceDto entityToDto(Attendance attendance) {
        if (attendance == null) {
            // Handle the case where attendance is null
            throw new IllegalArgumentException("Attendance entity is null");
        }

        AttendanceDto dto = new AttendanceDto();
        dto.setId(attendance.getAttendanceID());

        Users user = attendance.getUser();
        if (user != null) {
            dto.setUserId(user.getUserId());
        } else {
            // Handle the case where user is null
            throw new IllegalStateException("User in attendance is null");
        }

        dto.setCheckInTime(attendance.getCheckInTime());
        dto.setCheckOutTime(attendance.getCheckOutTime());
        dto.setStatus(attendance.getStatus());
        return dto;
    }

    public Attendance dtoToEntity(AttendanceDto dto) {
        if (dto == null) {
            // Handle the case where dto is null
            throw new IllegalArgumentException("AttendanceDto is null");
        }

        Attendance attendance = new Attendance();
        attendance.setAttendanceID(dto.getId());

        Users user = userService.getUserById(dto.getUserId());

        if (user == null) {
            // Handle the case where user is null
            throw new IllegalStateException("User with ID " + dto.getUserId() + " not found");
        }

        attendance.setUser(user);
        attendance.setCheckInTime(dto.getCheckInTime());
        attendance.setCheckOutTime(dto.getCheckOutTime());
        attendance.setStatus(dto.getStatus());
        return attendance;
    }
}
