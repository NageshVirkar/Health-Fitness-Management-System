package project.gym.services;

import java.util.List;

import project.gym.pojos.CustomerSupport;

public interface ICustomerSupportService {
	CustomerSupport getTicketById(Long ticketId);

    List<CustomerSupport> getAllTickets();

    CustomerSupport saveTicket(CustomerSupport ticket);

    void deleteTicket(Long ticketId);
}
