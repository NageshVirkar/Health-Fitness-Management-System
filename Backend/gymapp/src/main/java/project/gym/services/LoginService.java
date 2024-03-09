package project.gym.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import project.gym.customException.NotFoundException;
import project.gym.dao.ILogin;
import project.gym.pojos.Login;

@Service
public class LoginService implements UserDetailsService, ILoginService {
	@Autowired
	private final ILogin logindao;

	@Autowired
	public LoginService(ILogin usersDAO) {
		this.logindao = usersDAO;
	}

	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		System.out.println("recv" + email);
		Login user = logindao.findByUsername(email)
				.orElseThrow(() -> new NotFoundException("Username not found: " + email));
//System.out.println(user);
		// Creating a UserDetails object using Spring Security's User class
		return user;
	}

}
