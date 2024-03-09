package project.gym.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import project.gym.dao.IAdmin;
import project.gym.dao.ILogin;
import project.gym.pojos.Admin;
import project.gym.pojos.Attendance;
import project.gym.pojos.Login;
import project.gym.pojos.Trainer;
import project.gym.pojos.Users;

import java.util.List;

import javax.transaction.Transactional;

@Service
public class AdminService implements IAdminService {
	 @Autowired
    private final IAdmin adminDAO;
		@Autowired
		private final ILogin loginRepository;

   
    public AdminService(IAdmin adminDAO,ILogin login) {
        this.adminDAO = adminDAO;
        this.loginRepository=login;
    }

    @Override
    public Admin getAdminById(Long adminId) {
        return adminDAO.findById(adminId).orElse(null);
    }

    @Override
    public List<Admin> getAllAdmins() {
        return adminDAO.findAll();
    }

    @Override
    public Admin saveAdmin(Admin admin) {
        return adminDAO.save(admin);
    }

    @Override
    public void deleteAdmin(Long adminId) {
        adminDAO.deleteById(adminId);
    }
    @Override
    public Long getUserIdByEmail(String username) {
        Admin admin = adminDAO.findByUsername(username);
        if (admin != null) {
            // Assuming there is a relation between Admin and Users through userId
            return admin.getAdminID();
        } else {
            return null; // or throw an exception if needed
        }
    }
    @Transactional
	@Override
	public void saveAdminLogin(Admin admin, Login login) {
		Admin savedTrainer = adminDAO.save(admin);

		// Set the user ID in the login object
		login.setUsername(savedTrainer.getUsername());
		login.setPassword(savedTrainer.getPassword());
		loginRepository.save(login);	
	}

	@Override
	public Admin getUserByEmail(String username) {
		// TODO Auto-generated method stub
		return adminDAO.findByUsername(username);
	}
    
    
}

