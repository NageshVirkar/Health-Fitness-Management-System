package project.gym.mapper;

import project.gym.dto.DietPlan.DietPlanDto;
import project.gym.pojos.DietPlan;
import project.gym.pojos.Users;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Component;
@Component
public class DietPlanMapper {

    public static DietPlanDto entityToDto(DietPlan dietPlan) {
        DietPlanDto dto = new DietPlanDto();
        dto.setId(dietPlan.getId());
        dto.setUserId(dietPlan.getUser().getUserId());
        dto.setDietType(dietPlan.getDietType());
        dto.setMealPlan(dietPlan.getMealPlan());
        dto.setStartDate(dietPlan.getStartDate());
        dto.setEndDate(dietPlan.getEndDate());
        return dto;
    }

    public static List<DietPlanDto> entityListToDtoList(List<DietPlan> dietPlans) {
        return dietPlans.stream().map(DietPlanMapper::entityToDto).collect(Collectors.toList());
    }

    public static DietPlan dtoToEntity(DietPlanDto dto, Users users) {
        DietPlan dietPlan = new DietPlan();
        dietPlan.setId(dto.getId());
        if (users != null) {
        	dietPlan.setUser(users.getUserById(dto.getUserId()));
        }
        dietPlan.setDietType(dto.getDietType());
        dietPlan.setMealPlan(dto.getMealPlan());
        dietPlan.setStartDate(dto.getStartDate());
        dietPlan.setEndDate(dto.getEndDate());
        return dietPlan;
    }

}

