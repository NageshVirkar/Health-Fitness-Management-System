package project.gym.utils;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;

public class JwtUtils {

    public static void decodeJwt(String token) {
        try {
            Jws<Claims> claimsJws = Jwts.parser().setSigningKey("mySecretKey").parseClaimsJws(token);
            Claims claims = claimsJws.getBody();

            // Access claims
            String username = claims.getSubject();
            // Add more claim access as needed

            System.out.println("Decoded Token:");
            System.out.println("Username: " + username);
            // Print more decoded information as needed
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
