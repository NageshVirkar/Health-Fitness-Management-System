package project.gym.pojos;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Getter
@Setter
public class PaymentRequest {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private Long amount;

    @Column(nullable = false)
    private String receiptId;

    // Default constructor for JPA
    public PaymentRequest() {
    }

    // Getters and Setters
    // Note: With Lombok, you don't need to explicitly write getters and setters

    // Other constructors if needed
}
