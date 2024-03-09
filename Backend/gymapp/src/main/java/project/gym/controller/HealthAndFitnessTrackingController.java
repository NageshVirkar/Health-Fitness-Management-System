package project.gym.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import project.gym.pojos.HealthAndFitnessTracking;
import project.gym.services.HealthAndFitnessTrackingService;

import java.util.List;

@RestController
@RequestMapping("/healthfitness")
@CrossOrigin("*")
public class HealthAndFitnessTrackingController {

    private final HealthAndFitnessTrackingService trackingService;

    public HealthAndFitnessTrackingController(HealthAndFitnessTrackingService trackingService) {
        this.trackingService = trackingService;
    }

    @GetMapping("/tracking/{id}")
    public ResponseEntity<HealthAndFitnessTracking> getTrackingById(@PathVariable Long id) {
        HealthAndFitnessTracking tracking = trackingService.getTrackingById(id);
        if (tracking != null) {
            return ResponseEntity.ok(tracking);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/allTrackings")
    public List<HealthAndFitnessTracking> getAllTrackings() {
        return trackingService.getAllTrackings();
    }

    @PostMapping("/addTracking")
    public ResponseEntity<HealthAndFitnessTracking> addTracking(@RequestBody HealthAndFitnessTracking tracking) {
        HealthAndFitnessTracking savedTracking = trackingService.saveTracking(tracking);
        return new ResponseEntity<>(savedTracking, HttpStatus.CREATED);
    }

    @DeleteMapping("/deleteTracking/{id}")
    public ResponseEntity<String> deleteTracking(@PathVariable Long id) {
        trackingService.deleteTracking(id);
        return ResponseEntity.ok("Tracking with ID " + id + " deleted successfully");
    }
}
