package project.gym.pojos;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "billing_and_payments")
public class BillingAndPayments {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "bill_id")
    private Long billID;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private Users user;

    @Column(name = "amount")
    private double amount;

    @Column(name = "bill_date")
    @Temporal(TemporalType.DATE)
    private Date billDate;

    @Column(name = "payment_status")
    private String paymentStatus;

    @Column(name = "payment_date")
    @Temporal(TemporalType.DATE)
    private Date paymentDate;

    @Column(name = "payment_method")
    private String paymentMethod;

    // Constructors, getters, and setters...

    public BillingAndPayments() {
        // Default constructor
    }

    public BillingAndPayments(Users user, double amount, Date billDate,
                              String paymentStatus, Date paymentDate, String paymentMethod) {
        this.user = user;
        this.amount = amount;
        this.billDate = billDate;
        this.paymentStatus = paymentStatus;
        this.paymentDate = paymentDate;
        this.paymentMethod = paymentMethod;
    }

    public Long getBillID() {
        return billID;
    }

    public void setBillID(Long billID) {
        this.billID = billID;
    }

    public Users getUser() {
        return user;
    }

    public void setUser(Users user) {
        this.user = user;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }

    public Date getBillDate() {
        return billDate;
    }

    public void setBillDate(Date billDate) {
        this.billDate = billDate;
    }

    public String getPaymentStatus() {
        return paymentStatus;
    }

    public void setPaymentStatus(String paymentStatus) {
        this.paymentStatus = paymentStatus;
    }

    public Date getPaymentDate() {
        return paymentDate;
    }

    public void setPaymentDate(Date paymentDate) {
        this.paymentDate = paymentDate;
    }

    public String getPaymentMethod() {
        return paymentMethod;
    }

    public void setPaymentMethod(String paymentMethod) {
        this.paymentMethod = paymentMethod;
    }

    // Additional methods, if needed
}
