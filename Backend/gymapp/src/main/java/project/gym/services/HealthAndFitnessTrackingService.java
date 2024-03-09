package project.gym.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import project.gym.dao.IHealthAndFitnessTracking;
import project.gym.pojos.HealthAndFitnessTracking;

import java.util.List;

@Service
public class HealthAndFitnessTrackingService implements IHealthAndFitnessTrackingService {
	@Autowired
    private final IHealthAndFitnessTracking trackingDAO;

    
    public HealthAndFitnessTrackingService(IHealthAndFitnessTracking trackingDAO) {
        this.trackingDAO = trackingDAO;
    }

    @Override
    public HealthAndFitnessTracking getTrackingById(Long trackingId) {
        return trackingDAO.findById(trackingId).orElse(null);
    }

    @Override
    public List<HealthAndFitnessTracking> getAllTrackings() {
        return trackingDAO.findAll();
    }

    @Override
    public HealthAndFitnessTracking saveTracking(HealthAndFitnessTracking tracking) {
        return trackingDAO.save(tracking);
    }

    @Override
    public void deleteTracking(Long trackingId) {
        trackingDAO.deleteById(trackingId);
    }
}