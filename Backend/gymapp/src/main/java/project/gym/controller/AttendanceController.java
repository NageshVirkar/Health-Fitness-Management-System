package project.gym.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import project.gym.dto.AttendanceDto.AttendanceDto;
import project.gym.mapper.AttendanceMapper;
import project.gym.pojos.Attendance;
import project.gym.services.IAttendanceService;
import project.gym.services.UserService;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/attendance")
@CrossOrigin("*")
public class AttendanceController {

    private final IAttendanceService attendanceService;
    private final AttendanceMapper attendanceMapper;
    private final UserService userService;

    @Autowired
    public AttendanceController(IAttendanceService attendanceService, AttendanceMapper attendanceMapper, UserService userService) {
        this.attendanceService = attendanceService;
        this.attendanceMapper = attendanceMapper;
        this.userService = userService;
    }

    @GetMapping("/{attendanceId}")
    public ResponseEntity<AttendanceDto> getAttendanceById(@PathVariable Long attendanceId) {
        Attendance attendance = attendanceService.getAttendanceById(attendanceId);
        if (attendance != null) {
            AttendanceDto attendanceDto = attendanceMapper.entityToDto(attendance);
            return ResponseEntity.ok(attendanceDto);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/getAttendanceOfAllUser")
    public ResponseEntity<List<AttendanceDto>> getAllAttendances() {
        List<Attendance> allAttendances = attendanceService.getAllAttendances();
        List<AttendanceDto> attendanceDtos = allAttendances.stream()
                .map(attendanceMapper::entityToDto) // using instance method
                .collect(Collectors.toList());
        return ResponseEntity.ok(attendanceDtos);
    }

    @PostMapping("/addAttendance")
    public ResponseEntity<AttendanceDto> saveAttendance(@RequestBody AttendanceDto attendanceDto) {
        Attendance attendance = attendanceMapper.dtoToEntity(attendanceDto);
        Attendance savedAttendance = attendanceService.saveAttendance(attendance);
        AttendanceDto savedAttendanceDto = attendanceMapper.entityToDto(savedAttendance);
        return ResponseEntity.ok(savedAttendanceDto);
    }

    @DeleteMapping("deleteAttendance/{attendanceId}")
    public ResponseEntity<Void> deleteAttendance(@PathVariable Long attendanceId) {
        attendanceService.deleteAttendance(attendanceId);
        return ResponseEntity.noContent().build();
    }
}
