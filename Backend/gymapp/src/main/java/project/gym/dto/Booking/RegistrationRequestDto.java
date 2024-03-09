package project.gym.dto.Booking;

import java.util.Date;

import lombok.Data;

@Data
public class RegistrationRequestDto {
	private Long facilityID;
	private Date bookingDate;
	private String status;
}
