package project.gym.pojos;

import javax.persistence.*;

import lombok.Data;

import java.util.Date;

@Entity
@Table(name = "bookings")
@Data
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "booking_id")
    private Long bookingID;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private Users user;

    @ManyToOne
    @JoinColumn(name = "class_id")
    private ClassSchedule classSchedule;

    @Column(name = "facility_id")
    private Long facilityID;  // Assuming facilityID is of Long type

    @Column(name = "booking_date")
    @Temporal(TemporalType.DATE)
    private Date bookingDate;

    @Column(name = "status")
    private String status;
}
  
