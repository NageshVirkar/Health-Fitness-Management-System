package project.gym.pojos;

import javax.persistence.*;

import lombok.Data;

import java.util.Date;

@Entity
@Table(name = "class_schedule")
@Data
public class ClassSchedule {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "class_id")
	private Long classID;

	@Column(name = "class_name")
	private String className;

	@Column(name = "schedule_date")
	@Temporal(TemporalType.DATE)
	private Date scheduleDate;

	@Column(name = "start_time")
	@Temporal(TemporalType.TIME)
	private Date startTime;

	@Column(name = "end_time")
	@Temporal(TemporalType.TIME)
	private Date endTime;

	@ManyToOne
	@JoinColumn(name = "trainer_id")
	private Trainer trainer;

}
