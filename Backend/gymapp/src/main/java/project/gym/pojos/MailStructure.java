package project.gym.pojos;

import java.util.Random;

import lombok.Data;

@Data
public class MailStructure {
	private String subject;
	private String message;
	private String otp;

	public void generateOtp() {
		Random random = new Random();
		int otpValue = 1000 + random.nextInt(9000); // Generate a random 4-digit OTP
		this.otp = String.valueOf(otpValue);
	}
}
