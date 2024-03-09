package project.gym.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import project.gym.customException.NotFoundException;
import project.gym.dao.IBooking;
import project.gym.pojos.Booking;

import java.util.List;
import java.util.Optional;

@Service
public class BookingService implements IBookingService {
	@Autowired
	private final IBooking bookingDAO;

	public BookingService(IBooking bookingDAO) {
		this.bookingDAO = bookingDAO;
	}

	@Override
	public Booking getBookingById(Long bookingId) {
		return bookingDAO.findById(bookingId).orElse(null);
	}

	@Override
	public List<Booking> getAllBookings() {
		return bookingDAO.findAll();
	}

	@Override
	public Booking saveBooking(Booking booking) {
		return bookingDAO.save(booking);
	}

	@Override
	public String deleteBooking(Long bookingId) {
		try {
			bookingDAO.deleteById(bookingId);
			return "Booking with ID " + bookingId + " has been deleted.";
		} catch (EmptyResultDataAccessException e) {
			throw new RuntimeException("Booking not found with ID: " + bookingId);
		} catch (DataAccessException e) {
			throw new RuntimeException("Error deleting Booking with ID: " + bookingId, e);
		}
	}

	@Override
	public Booking updateBooking(Long bookingId, Booking updatedBooking) {

		Optional<Booking> optionalBooking = bookingDAO.findById((long) bookingId);
		if (optionalBooking.isPresent()) {
			Booking existingBooking = optionalBooking.get();
			if (updatedBooking.getFacilityID() != null) {
				existingBooking.setFacilityID(updatedBooking.getFacilityID());
			}
			if (updatedBooking.getStatus() != null && !updatedBooking.getStatus().isEmpty()) {
				existingBooking.setStatus(updatedBooking.getStatus());
			}

			return bookingDAO.save(existingBooking);
		} else {
			throw new NotFoundException("Booking not found with ID: " + bookingId);

		}
	}
}
