package project.gym.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import project.gym.pojos.CustomerSupport;

@Repository
public interface ICustomerSupport extends JpaRepository<CustomerSupport, Long> {
    // You can add custom query methods if needed
}
