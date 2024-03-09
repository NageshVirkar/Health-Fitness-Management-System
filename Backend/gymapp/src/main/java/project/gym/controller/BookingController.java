package project.gym.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import project.gym.dto.Booking.BookingResponseDto;
import project.gym.mapper.BookingMapper;
import project.gym.pojos.Booking;
import project.gym.services.IBookingService;

@RestController
@RequestMapping("/booking")
@CrossOrigin("*")
public class BookingController {
	@Autowired
	private IBookingService bookingService;

	@PostMapping("/addBooking")
	public ResponseEntity<String> saveBooking(@RequestBody Booking booking) {

		bookingService.saveBooking(booking);
		return new ResponseEntity<>("Booking successfully", HttpStatus.OK);
	}

	@GetMapping("/getAllBookings")
	public List<BookingResponseDto> getAllBookings() {
		List<Booking> bookings = bookingService.getAllBookings();
		return BookingMapper.entityListToResponseDtoList(bookings);
	}

	@PutMapping("/updateBooking/{id}")
	public ResponseEntity<BookingResponseDto> updateBookingById(@PathVariable Long id,
			@RequestBody BookingResponseDto bookingResponseDto) {
		try {
			Booking updatedBooking = bookingService.updateBooking(id, BookingMapper.dtoToEntity(bookingResponseDto));
			return ResponseEntity.ok(BookingMapper.entityToResponseDto(updatedBooking));
		} catch (Exception e) {
			// Handle exception properly
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping("/getBookingById/{id}")
	public ResponseEntity<BookingResponseDto> getBookingById(@PathVariable Long id) {
		try {
			Booking booking = bookingService.getBookingById(id);
			return ResponseEntity.ok(BookingMapper.entityToResponseDto(booking));
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@DeleteMapping("/deleteBooking/{id}")
	public ResponseEntity<String> deleteBooking(@PathVariable Long id) {
		try {
			String result = bookingService.deleteBooking(id);
			return ResponseEntity.ok(result);
		} catch (Exception e) {
			// Handle exception properly
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
