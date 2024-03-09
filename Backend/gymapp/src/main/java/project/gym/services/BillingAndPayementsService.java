package project.gym.services;

	import org.springframework.beans.factory.annotation.Autowired;
	import org.springframework.stereotype.Service;

import project.gym.dao.IBillingAndPayments;
import project.gym.pojos.BillingAndPayments;

import java.util.List;

	@Service
     public class BillingAndPayementsService implements IBillingAndPaymentsService {
		@Autowired
	    private final IBillingAndPayments billingAndPaymentsDAO;

	    
	    public BillingAndPayementsService(IBillingAndPayments billingAndPaymentsDAO) {
	        this.billingAndPaymentsDAO = billingAndPaymentsDAO;
	    }

	    @Override
	    public BillingAndPayments getBillById(Long billId) {
	        return billingAndPaymentsDAO.findById(billId).orElse(null);
	    }

	    @Override
	    public List<BillingAndPayments> getAllBills() {
	        return billingAndPaymentsDAO.findAll();
	    }

	    @Override
	    public BillingAndPayments saveBill(BillingAndPayments bill) {
	        return billingAndPaymentsDAO.save(bill);
	    }

	    @Override
	    public void deleteBill(Long billId) {
	        billingAndPaymentsDAO.deleteById(billId);
	    }
	}

