package project.gym.pojos;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "customer_support")
public class CustomerSupport {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ticket_id")
    private Long ticketID;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private Users user;

    @Column(name = "support_type")
    private String supportType;

    @Column(name = "issue_description")
    private String issueDescription;

    @Column(name = "resolution_status")
    private String resolutionStatus;

    @Column(name = "resolution_date")
    @Temporal(TemporalType.DATE)
    private Date resolutionDate;

    // Constructors, getters, and setters...

    public CustomerSupport() {
        // Default constructor
    }

    public CustomerSupport(Users user, String supportType, String issueDescription,
                            String resolutionStatus, Date resolutionDate) {
        this.user = user;
        this.supportType = supportType;
        this.issueDescription = issueDescription;
        this.resolutionStatus = resolutionStatus;
        this.resolutionDate = resolutionDate;
    }

    public Long getTicketID() {
        return ticketID;
    }

    public void setTicketID(Long ticketID) {
        this.ticketID = ticketID;
    }

    public Users getUser() {
        return user;
    }

    public void setUser(Users user) {
        this.user = user;
    }

    public String getSupportType() {
        return supportType;
    }

    public void setSupportType(String supportType) {
        this.supportType = supportType;
    }

    public String getIssueDescription() {
        return issueDescription;
    }

    public void setIssueDescription(String issueDescription) {
        this.issueDescription = issueDescription;
    }

    public String getResolutionStatus() {
        return resolutionStatus;
    }

    public void setResolutionStatus(String resolutionStatus) {
        this.resolutionStatus = resolutionStatus;
    }

    public Date getResolutionDate() {
        return resolutionDate;
    }

    public void setResolutionDate(Date resolutionDate) {
        this.resolutionDate = resolutionDate;
    }

    // Additional methods, if needed
}
