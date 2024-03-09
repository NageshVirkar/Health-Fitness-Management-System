package project.gym.mapper;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;

import project.gym.customException.InvalidRegistrationException;

import project.gym.dto.Booking.BookingResponseDto;
import project.gym.pojos.Booking;
@Component
public class BookingMapper {

	public static Booking dtoToEntity(BookingResponseDto responseDto) {
		if (responseDto == null) {
			throw new InvalidRegistrationException("Invalid booking : Booking is null");
		}

		// Validate required fields
		if (StringUtils.isEmpty(responseDto.getFacilityID()) || StringUtils.isEmpty(responseDto.getFacilityID())
				|| StringUtils.isEmpty(responseDto.getStatus()) || StringUtils.isEmpty(responseDto.getStatus())
				|| StringUtils.isEmpty(responseDto.getBookingDate())
				|| StringUtils.isEmpty(responseDto.getBookingDate())) {
			throw new InvalidRegistrationException("Invalid booking : Missing required fields");
		}

		Booking booking = new Booking();

		// Set booking class details from BookingClassRequestDto
		booking.setFacilityID(responseDto.getFacilityID());
		booking.setStatus(responseDto.getStatus());
		booking.setBookingDate(responseDto.getBookingDate());

		return booking;
	}

	public static BookingResponseDto entityToResponseDto(Booking bookingentity) {
		if (bookingentity == null) {
			throw new IllegalArgumentException("Bookings entity cannot be null");
		}

		BookingResponseDto responseDto = new BookingResponseDto();

		// Map entity fields to response DTO
		responseDto.setFacilityID(bookingentity.getFacilityID());
		responseDto.setStatus(bookingentity.getStatus());
		responseDto.setBookingDate(bookingentity.getBookingDate());

		return responseDto;
	}

	public static List<BookingResponseDto> entityListToResponseDtoList(List<Booking> entities) {
		return entities.stream().map(BookingMapper::entityToResponseDto).collect(Collectors.toList());
	}
}
