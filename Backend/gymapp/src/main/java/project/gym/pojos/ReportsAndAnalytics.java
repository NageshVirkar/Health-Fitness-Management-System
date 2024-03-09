package project.gym.pojos;

import javax.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "reports_and_analytics")
public class ReportsAndAnalytics {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "report_id")
    private Long reportID;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private Users user;

    @Column(name = "report_type")
    private String reportType;

    @Column(name = "generated_date")
    @Temporal(TemporalType.DATE)
    private Date generatedDate;

    @Column(name = "content")
    private String content;


    // Additional methods, if needed
}

