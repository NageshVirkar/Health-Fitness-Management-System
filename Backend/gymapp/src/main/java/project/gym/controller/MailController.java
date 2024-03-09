package project.gym.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import project.gym.pojos.MailStructure;
import project.gym.services.MailService;

@RestController
@RequestMapping("/mail")
@CrossOrigin("*")
public class MailController {

    @Autowired
    private MailService mailService;

    @PostMapping("/send/{mail}")
    public ResponseEntity<Map<String, String>> sendMailWithOtp(@PathVariable String mail) {
    	
    	System.out.println();
        // Send mail with OTP and get the generated OTP
        String generatedOtp = mailService.sendMailWithOtp(mail);

        // Return the response including the OTP
        Map<String, String> response = new HashMap<>();
        response.put("message", "Mail with OTP sent successfully");
        response.put("generatedOtp", generatedOtp);

        return ResponseEntity.ok(response);
    }
}

