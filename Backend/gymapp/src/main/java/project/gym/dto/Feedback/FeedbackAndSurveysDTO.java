package project.gym.dto.Feedback;

import java.util.Date;

import lombok.Getter;
import lombok.Setter;
@Getter
@Setter
public class FeedbackAndSurveysDTO {

    private Long surveyID;
    private Long userId; // Assuming this is the ID of the associated user
    private String feedbackType;
    private String feedbackContent;
    private Date surveyDate;
}

