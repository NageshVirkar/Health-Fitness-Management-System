package project.gym.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import project.gym.dao.IFeedbackAndSurveys;
import project.gym.pojos.FeedbackAndSurveys;


import java.util.List;
import java.util.Optional;

@Service
public class FeedbackAndSurveysService {

    private final IFeedbackAndSurveys feedbackAndSurveysRepository;

    @Autowired
    public FeedbackAndSurveysService(IFeedbackAndSurveys feedbackAndSurveysRepository) {
        this.feedbackAndSurveysRepository = feedbackAndSurveysRepository;
    }

    public List<FeedbackAndSurveys> getAllSurveys() {
        return feedbackAndSurveysRepository.findAll();
    }

    public Optional<FeedbackAndSurveys> getSurveyById(Long surveyId) {
        return feedbackAndSurveysRepository.findById(surveyId);
    }

    public FeedbackAndSurveys saveSurvey(FeedbackAndSurveys feedbackAndSurveys) {
        return feedbackAndSurveysRepository.save(feedbackAndSurveys);
    }

    public void deleteSurvey(Long surveyId) {
        feedbackAndSurveysRepository.deleteById(surveyId);
    }
}
