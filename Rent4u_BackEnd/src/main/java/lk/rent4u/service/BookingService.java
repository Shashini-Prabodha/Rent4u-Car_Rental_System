package lk.rent4u.service;

import lk.rent4u.dto.BookingDTO;

import java.util.ArrayList;

public interface BookingService {
    void addBooking(BookingDTO dto);

    void deleteBooking(String id);

    BookingDTO searchBooking(String id);

    ArrayList<BookingDTO> getAllBookings();

    void updateBooking(BookingDTO dto);

    String getLastID();

    String getNewID();
}
