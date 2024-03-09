package project.gym.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import project.gym.dao.IDietPlan;
import project.gym.pojos.DietPlan;
import project.gym.pojos.Users;

import java.util.List;

@Service
public class DietPlanService implements IDietPlanService {

    private final IDietPlan dietPlanDao;

    @Autowired
    public DietPlanService(IDietPlan dietPlanDao) {
        this.dietPlanDao = dietPlanDao;
    }

    @Override
    public DietPlan saveDietPlan(DietPlan dietPlan) {
        return dietPlanDao.save(dietPlan);
    }

    @Override
    public List<DietPlan> getAllDietPlans() {
        return dietPlanDao.findAll();
    }

    @Override
    public List<DietPlan> getDietPlansByUser(Users user) {
        return dietPlanDao.findByUser(user);
    }

    @Override
    public DietPlan getDietPlanById(Long dietPlanId) {
        return dietPlanDao.findById(dietPlanId).orElse(null);
    }

    @Override
    public DietPlan updateDietPlan(Long dietPlanId, DietPlan updatedDietPlan) {
        // Check if the diet plan exists
        DietPlan existingDietPlan = dietPlanDao.findById(dietPlanId).orElse(null);
        if (existingDietPlan != null) {
            // Set the updated values
            existingDietPlan.setDietType(updatedDietPlan.getDietType());
            existingDietPlan.setMealPlan(updatedDietPlan.getMealPlan());
            existingDietPlan.setStartDate(updatedDietPlan.getStartDate());
            existingDietPlan.setEndDate(updatedDietPlan.getEndDate());
            existingDietPlan.setUser(updatedDietPlan.getUser());

            // Save and return the updated diet plan
            return dietPlanDao.save(existingDietPlan);
        } else {
            return null; // Diet plan not found
        }
    }

    @Override
    public void deleteDietPlan(Long dietPlanId) {
        dietPlanDao.deleteById(dietPlanId);
    }
}
