package project.gym.dto.MembershipDto;

import java.util.Date;

import lombok.Data;

@Data
public class MembershipDto {
	private Long membershipID;
	private Long userId;
	private String membershipType;
	private Date registrationDate;
	private Date renewalDate;
	private Date expirationDate;
}
