package project.gym.services;

import java.util.List;

import project.gym.pojos.HealthAndFitnessTracking;

public interface IHealthAndFitnessTrackingService {
	HealthAndFitnessTracking getTrackingById(Long trackingId);

    List<HealthAndFitnessTracking> getAllTrackings();

    HealthAndFitnessTracking saveTracking(HealthAndFitnessTracking tracking);

    void deleteTracking(Long trackingId);
}
