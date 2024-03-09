package project.gym.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import project.gym.pojos.Membership;

@Repository
public interface IMembership extends JpaRepository<Membership, Long> {
    // You can add custom query methods if needed
}

