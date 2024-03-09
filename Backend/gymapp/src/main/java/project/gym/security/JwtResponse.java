package project.gym.security;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import project.gym.pojos.UserType;

@Getter
@Setter
@ToString
public class JwtResponse {
    private String jwtToken;
    private String email;
    private String name;
    private int userTypeIndex;
    private Long id;

    public JwtResponse(String jwtToken, String email,String name, int userTypeIndex,Long id) {
        this.jwtToken = jwtToken;
        this.email = email;
        this.name=name;
        this.userTypeIndex = userTypeIndex;
        this.id=id;
    }

    // Constructors, getters, setters, etc.

    public static JwtResponseBuilder builder() {
        return new JwtResponseBuilder();
    }

    // Builder class
    public static class JwtResponseBuilder {
        private String jwtToken;
        private String email;
        private String name;
        private int userTypeIndex;
        private Long id;

        public JwtResponseBuilder jwtToken(String jwtToken) {
            this.jwtToken = jwtToken;
            return this;
        }

        public JwtResponseBuilder email(String email) {
            this.email = email;
            return this;
        }

        public JwtResponseBuilder userTypeIndex(int userTypeIndex) {
            if (userTypeIndex < 0 || userTypeIndex >= UserType.values().length) {
                throw new IllegalArgumentException("Invalid UserType index");
            }
            this.userTypeIndex = userTypeIndex;
            return this;
        }
        public JwtResponseBuilder name(String name) {
            this.name = name;
            return this;
        }
        public JwtResponseBuilder id(Long id) {
            this.id = id;
            return this;
        }

        public JwtResponse build() {
            return new JwtResponse(this.jwtToken, this.email, this.name,this.userTypeIndex,this.id);
        }
    }

 }
