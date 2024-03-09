package project.gym.dao;

	import org.springframework.data.jpa.repository.JpaRepository;
	import org.springframework.stereotype.Repository;

import project.gym.pojos.BillingAndPayments;

	@Repository
	public interface IBillingAndPayments  extends JpaRepository<BillingAndPayments, Long> {
	    // You can add custom query methods if needed
	}
