package project.gym.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import project.gym.pojos.DietPlan;
import project.gym.pojos.Users;

public interface IDietPlan extends JpaRepository<DietPlan, Long> {
    List<DietPlan> findByUser(Users user);
}
