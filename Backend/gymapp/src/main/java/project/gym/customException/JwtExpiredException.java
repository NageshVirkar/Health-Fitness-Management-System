package project.gym.customException;


import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.MalformedJwtException;
import lombok.Getter;
import lombok.Setter;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Getter
@Setter
public class JwtExpiredException extends RuntimeException {
    private static final Logger logger = LoggerFactory.getLogger(JwtExpiredException.class);

}