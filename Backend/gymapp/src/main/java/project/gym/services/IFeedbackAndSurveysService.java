package project.gym.services;

import java.util.List;

import project.gym.pojos.FeedbackAndSurveys;

public interface IFeedbackAndSurveysService {
	FeedbackAndSurveys getSurveyById(Long surveyId);

    List<FeedbackAndSurveys> getAllSurveys();

    FeedbackAndSurveys saveSurvey(FeedbackAndSurveys survey);

    void deleteSurvey(Long surveyId);
}
