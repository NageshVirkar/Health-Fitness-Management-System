package project.gym.pojos;

import javax.persistence.*;

import lombok.Data;

import java.util.Date;

@Entity
@Table(name = "attendance")
@Data
public class Attendance {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "attendance_id")
	private Long attendanceID;

	@ManyToOne
	@JoinColumn(name = "user_id")
	private Users user;

	@ManyToOne
	@JoinColumn(name = "trainer_id")
	private Trainer trainer;

	@Column(name = "check_in_time")
	@Temporal(TemporalType.TIMESTAMP)
	private Date checkInTime;

	@Column(name = "check_out_time")
	@Temporal(TemporalType.TIMESTAMP)
	private Date checkOutTime;

	@Column(name = "status")
	private String status;

	// Additional methods, if needed
}
