package project.gym.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import project.gym.pojos.HealthAndFitnessTracking;

@Repository
public interface IHealthAndFitnessTracking extends JpaRepository<HealthAndFitnessTracking, Long> {
    // You can add custom query methods if needed
}

