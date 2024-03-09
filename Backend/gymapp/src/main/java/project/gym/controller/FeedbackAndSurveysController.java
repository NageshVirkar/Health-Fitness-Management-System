package project.gym.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import project.gym.pojos.FeedbackAndSurveys;
import project.gym.services.FeedbackAndSurveysService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/feedbackAndSurveys")
public class FeedbackAndSurveysController {

    private final FeedbackAndSurveysService feedbackAndSurveysService;

    @Autowired
    public FeedbackAndSurveysController(FeedbackAndSurveysService feedbackAndSurveysService) {
        this.feedbackAndSurveysService = feedbackAndSurveysService;
    }

    @GetMapping("/getAllSurveys")
    public ResponseEntity<List<FeedbackAndSurveys>> getAllSurveys() {
        List<FeedbackAndSurveys> feedbackAndSurveysList = feedbackAndSurveysService.getAllSurveys();
        return ResponseEntity.ok(feedbackAndSurveysList);
    }

    @GetMapping("/getSurveyById/{surveyId}")
    public ResponseEntity<FeedbackAndSurveys> getSurveyById(@PathVariable Long surveyId) {
        Optional<FeedbackAndSurveys> feedbackAndSurveys = feedbackAndSurveysService.getSurveyById(surveyId);
        return feedbackAndSurveys.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("/saveSurvey")
    public ResponseEntity<FeedbackAndSurveys> saveSurvey(@RequestBody FeedbackAndSurveys feedbackAndSurveys) {
        FeedbackAndSurveys savedSurvey = feedbackAndSurveysService.saveSurvey(feedbackAndSurveys);
        return ResponseEntity.ok(savedSurvey);
    }

    @DeleteMapping("/deleteSurvey/{surveyId}")
    public ResponseEntity<Void> deleteSurvey(@PathVariable Long surveyId) {
        feedbackAndSurveysService.deleteSurvey(surveyId);
        return ResponseEntity.noContent().build();
    }
}
