package project.gym.services;

import java.util.Random;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import project.gym.pojos.MailStructure;

@Service
public class MailService {

    @Autowired
    private JavaMailSender mailSender;

    @Value("${spring.mail.username}")
    private String fromMail;

    public String sendMailWithOtp(String mail) {
        // Generate OTP
        String generatedOtp = generateOtp();

        // HTML-formatted message with a card-like structure
        String htmlMessage = "<div style='border: 2px solid #3498db; padding: 20px; border-radius: 10px; margin: 20px; text-align: center;'>"
                + "<h2>Welcome to Muscle Factory!</h2>"
                + "<p>Dear customer,</p>"
                + "<p>Your OTP for registration is: <strong>" + generatedOtp + "</strong>.</p>"
                + "<p>Use this OTP to validate your registration. Your code expires in 10 minutes.</p>"
                + "</div>";

        MimeMessage mimeMessage = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, "utf-8");

        try {
            helper.setFrom(fromMail);
            helper.setTo(mail);
            helper.setSubject("Welcome to Muscle Factory");
            helper.setText(htmlMessage, true); // Set the HTML-formatted message
            mailSender.send(mimeMessage);

            // Return the generated OTP
            return generatedOtp;
        } catch (MessagingException e) {
            e.printStackTrace();
            // Handle exception as needed
            return null; // Or throw an exception
        }
    }

    private String generateOtp() {
        // Your OTP generation logic here
        // For example, you can use the same logic from MailStructure
        Random random = new Random();
        int otpValue = 1000 + random.nextInt(9000); // Generate a random 4-digit OTP
        return String.valueOf(otpValue);
    }
}
