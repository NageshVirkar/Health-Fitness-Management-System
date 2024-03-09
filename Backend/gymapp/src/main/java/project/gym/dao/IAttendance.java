package project.gym.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import project.gym.pojos.Attendance;

@Repository
public interface IAttendance extends JpaRepository<Attendance, Long> {
    // You can add custom query methods if needed
}
