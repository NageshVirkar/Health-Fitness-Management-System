package project.gym.pojos;

import javax.persistence.*;

import lombok.Data;

import java.util.Date;

@Entity
@Table(name = "memberships")
@Data
public class Membership {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "membership_id")
	private Long membershipID;

	@ManyToOne
	@JoinColumn(name = "user_id")
	private Users user;

	@Column(name = "membership_type")
	private String membershipType;

	@Column(name = "registration_date")
	@Temporal(TemporalType.DATE)
	private Date registrationDate;

	@Column(name = "renewal_date")
	@Temporal(TemporalType.DATE)
	private Date renewalDate;

	@Column(name = "expiration_date")
	@Temporal(TemporalType.DATE)
	private Date expirationDate;
}
