package project.gym.dto.DietPlan;

import lombok.Data;
import java.time.LocalDate;

@Data
public class DietPlanDto {

	private Long id;
	private Long userId;
	private String dietType;
	private String mealPlan;
	private LocalDate startDate;
	private LocalDate endDate;
}
