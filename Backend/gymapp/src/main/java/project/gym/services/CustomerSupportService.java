package project.gym.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import project.gym.dao.ICustomerSupport;
import project.gym.pojos.CustomerSupport;

import java.util.List;

@Service
public class CustomerSupportService implements ICustomerSupportService {
	@Autowired
    private final ICustomerSupport ticketDAO;

    
    public CustomerSupportService(ICustomerSupport ticketDAO) {
        this.ticketDAO = ticketDAO;
    }

    @Override
    public CustomerSupport getTicketById(Long ticketId) {
        return ticketDAO.findById(ticketId).orElse(null);
    }

    @Override
    public List<CustomerSupport> getAllTickets() {
        return ticketDAO.findAll();
    }

    @Override
    public CustomerSupport saveTicket(CustomerSupport ticket) {
        return ticketDAO.save(ticket);
    }

    @Override
    public void deleteTicket(Long ticketId) {
        ticketDAO.deleteById(ticketId);
    }
}
