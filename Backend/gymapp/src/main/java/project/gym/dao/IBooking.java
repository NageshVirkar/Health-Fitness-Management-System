package project.gym.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import project.gym.pojos.Booking;

@Repository
public interface IBooking extends JpaRepository<Booking, Long> {
    // You can add custom query methods if needed
}

