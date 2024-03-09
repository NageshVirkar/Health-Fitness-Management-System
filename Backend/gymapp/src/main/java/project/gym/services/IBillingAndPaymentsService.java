package project.gym.services;

import java.util.List;

import project.gym.pojos.BillingAndPayments;

public interface IBillingAndPaymentsService {
	  BillingAndPayments getBillById(Long billId);

	    List<BillingAndPayments> getAllBills();

	    BillingAndPayments saveBill(BillingAndPayments bill);

	    void deleteBill(Long billId);
}
