package project.gym.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import project.gym.pojos.ClassSchedule;

@Repository
public interface IClassSchedule extends JpaRepository<ClassSchedule, Long> {
    // You can add custom query methods if needed
}
