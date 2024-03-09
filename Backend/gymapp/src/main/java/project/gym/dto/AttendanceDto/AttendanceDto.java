package project.gym.dto.AttendanceDto;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class AttendanceDto {

    private Long id;
    private Long userId;
    //private Long TrainerId;
    private Date checkInTime;
    private Date checkOutTime;
    private String status;

}
