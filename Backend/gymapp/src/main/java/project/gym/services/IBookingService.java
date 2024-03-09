package project.gym.services;

import java.util.List;

import project.gym.pojos.Booking;

public interface IBookingService {
	Booking getBookingById(Long bookingId);

    List<Booking> getAllBookings();

    Booking saveBooking(Booking booking);

    String deleteBooking(Long bookingId);
    
    Booking updateBooking(Long bookingId,Booking updatedBooking);
}
