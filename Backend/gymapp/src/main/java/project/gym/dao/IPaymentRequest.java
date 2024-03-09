package project.gym.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import project.gym.pojos.PaymentRequest;

public interface IPaymentRequest extends JpaRepository<PaymentRequest,Long>{

}
