package project.gym.pojos;
import javax.persistence.*;

import lombok.Data;

import java.util.Date;
@Data
@Entity
@Table(name = "feedback")
public class FeedbackAndSurveys {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "survey_id")
    private Long surveyID;

    @Column(name = "feedback_subject")
    private String feedbackType;

    @Column(name = "feedback_content")
    private String feedbackContent;

    @Column(name= "username")
    private String username;

    @Column(name = "survey_date")
    @Temporal(TemporalType.DATE)
    private Date surveyDate;

    // Constructors, getters, and setters...
}