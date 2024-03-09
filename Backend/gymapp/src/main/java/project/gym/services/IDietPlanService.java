package project.gym.services;


import project.gym.pojos.DietPlan;
import project.gym.pojos.Users;

import java.util.List;

public interface IDietPlanService {

    // Save a new diet plan
    DietPlan saveDietPlan(DietPlan dietPlan);

    // Get all diet plans
    List<DietPlan> getAllDietPlans();

    // Get diet plans by user
    List<DietPlan> getDietPlansByUser(Users user);

    // Get diet plan by ID
    DietPlan getDietPlanById(Long dietPlanId);

    // Update an existing diet plan
    DietPlan updateDietPlan(Long dietPlanId, DietPlan updatedDietPlan);

    // Delete a diet plan by ID
    void deleteDietPlan(Long dietPlanId);
    
}

