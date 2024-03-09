package project.gym.pojos;

import javax.persistence.*;

import lombok.Data;


import java.util.Date;
@Data
@Entity
@Table(name = "health_and_fitness_tracking")
public class HealthAndFitnessTracking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "tracking_id")
    private Long trackingID;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private Users user;

    @Column(name = "tracking_date")
    @Temporal(TemporalType.DATE)
    private Date trackingDate;

    @Column(name = "progress")
    private int progress;

    @Column(name = "goals")
    private int goals;
}
   