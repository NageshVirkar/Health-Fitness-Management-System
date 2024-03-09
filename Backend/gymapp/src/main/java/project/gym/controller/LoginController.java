package project.gym.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import project.gym.dto.TrainerDto.Trainerdto;
import project.gym.dto.UsersDto.Userdto;
import project.gym.pojos.Admin;
import project.gym.pojos.Login;
import project.gym.pojos.Trainer;
import project.gym.pojos.UserType;
import project.gym.pojos.Users;
import project.gym.security.JwtHelper;
import project.gym.security.JwtRequest;
import project.gym.security.JwtResponse;
import project.gym.services.IAdminService;
import project.gym.services.ILoginService;
import project.gym.services.ITrainerService;
import project.gym.services.IUsersService;
@RestController
@RequestMapping("/login")
@CrossOrigin("*")
public class LoginController {
    @Autowired
    private ILoginService loginService;

    @Autowired
    private IUsersService usersService; // Assuming you have a service for Users

    @Autowired
    private ITrainerService trainerService;
//    
    @Autowired
    private IAdminService adminService;
    
//    
    @Autowired
    private AuthenticationManager manager;

    @Autowired
    private JwtHelper helper;

    @Autowired
    private UserDetailsService userDetailsService;

    @PostMapping
    public ResponseEntity<JwtResponse> login(@RequestBody JwtRequest request) {
        System.out.println(request);
        this.doAuthenticate(request.getUsername(), request.getPassword());
        System.out.println("after authenticate");
        Login userDetails = (Login) userDetailsService.loadUserByUsername(request.getUsername());
        System.out.println("after loaduserbyusername");
        //System.out.println(userDetails);
        String token = this.helper.generateToken(userDetails);
        int userTypeIndex = userDetails.getUsertype();
        
        // Fetch Users details by email
      
        if (userTypeIndex < 0 || userTypeIndex >= UserType.values().length) {
            throw new IllegalArgumentException("Invalid UserType index");
        }

        UserType userType = UserType.values()[userTypeIndex];
        System.out.println(userType);
        Long id=4L;
        String name="";
        if(userTypeIndex==0)
        {
        	 id =adminService.getUserIdByEmail(request.getUsername());
        	 Admin user = adminService.getUserByEmail(request.getUsername());

             if (user == null) {
                 throw new RuntimeException("User not found");
             }

            name = user.getFirstName(); // Assuming 'firstName' is the field in Users

        }
        else if(userTypeIndex==1)
        	
        {
        	
        	System.out.println("hit");
        	id =trainerService.getUserIdByEmail(request.getUsername());
        	 Trainer user = trainerService.getUserByEmail(request.getUsername());

             if (user == null) {
                 throw new RuntimeException("User not found");
             }

            name = user.getFirstName(); // Assuming 'firstName' is the field in Users

        }
        else if(userTypeIndex==2)
        {
        	id =usersService.getUserIdByEmail(request.getUsername());
        	  
            Users user = usersService.getUserByEmail(request.getUsername());

            if (user == null) {
                throw new RuntimeException("User not found");
            }

           name = user.getFirstName(); // Assuming 'firstName' is the field in Users

        }
        else {
        	//System.out.println();
        }

        JwtResponse response = JwtResponse.builder()
                .jwtToken(token)
                .email(userDetails.getUsername())
                .userTypeIndex(userTypeIndex)
                .name(name).id(id)
                .build();

        //System.out.println(response);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    private void doAuthenticate(String email, String password) {
        UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(email, password);
        try {
        	System.out.println("in valdiation"+email);
            manager.authenticate(authentication);
            System.out.println("Authentication successful!");
        } catch (BadCredentialsException e) {
            e.printStackTrace();
            System.out.println("Authentication failed: Bad credentials");
            throw new BadCredentialsException("Invalid Username or Password!!");
        } catch (Exception e) {
            e.printStackTrace();
            System.out.println("Authentication error: " + e.getMessage());
            throw new RuntimeException("Authentication error");
        }
    }
}
