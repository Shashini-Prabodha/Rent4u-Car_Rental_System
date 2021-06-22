package lk.rent4u.service;

import lk.rent4u.dto.BookingDTO;
import lk.rent4u.entity.Booking;

import java.util.ArrayList;
import java.util.List;

public interface BookingService {
    void addBooking(BookingDTO dto);

    void deleteBooking(String id);

    BookingDTO searchBooking(String id);

    ArrayList<BookingDTO> getAllBookings();

    void updateBooking(BookingDTO dto);

    String getLastID();

    String getNewID();

    List<Booking> readByStatus(String status);

}
