package project.gym.security;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import project.gym.pojos.UserType;
import project.gym.pojos.Users;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class JwtRequest {

	private String username;
	
	private String password;
	
    private UserType userType;
    
    private Users name;
    public static class JwtRequestBuilder {

        public JwtRequestBuilder userTypeIndex(int userTypeIndex) {
            this.userType = UserType.values()[userTypeIndex];
            return this;
        }
    }
}