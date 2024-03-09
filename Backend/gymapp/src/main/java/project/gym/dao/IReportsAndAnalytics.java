package project.gym.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import project.gym.pojos.ReportsAndAnalytics;

@Repository
public interface IReportsAndAnalytics extends JpaRepository<ReportsAndAnalytics, Long> {
    // You can add custom query methods if needed
}
