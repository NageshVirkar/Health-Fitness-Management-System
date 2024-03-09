package project.gym.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import project.gym.pojos.FeedbackAndSurveys;

@Repository
public interface IFeedbackAndSurveys extends JpaRepository<FeedbackAndSurveys, Long> {
    // You can add custom query methods if needed
}

