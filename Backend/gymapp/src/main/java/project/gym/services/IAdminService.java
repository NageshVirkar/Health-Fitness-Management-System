package project.gym.services;

import java.util.List;

import project.gym.pojos.Admin;
import project.gym.pojos.Login;
import project.gym.pojos.Users;

public interface IAdminService {

	Admin getAdminById(Long adminId);

    List<Admin> getAllAdmins();

    Admin saveAdmin(Admin admin);

    void deleteAdmin(Long adminId);
    
    Long getUserIdByEmail(String email);
    
   void saveAdminLogin(Admin admin, Login login);
   
   Admin getUserByEmail(String username);
}
