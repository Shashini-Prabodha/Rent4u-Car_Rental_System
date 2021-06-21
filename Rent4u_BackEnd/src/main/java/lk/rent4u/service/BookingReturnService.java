package lk.rent4u.service;

import lk.rent4u.dto.BookingReturnDTO;

import java.util.ArrayList;

public interface BookingReturnService {
    void addBookingReturn(BookingReturnDTO dto);

    void deleteBookingReturn(String id);

    BookingReturnDTO searchBookingReturn(String id);

    ArrayList<BookingReturnDTO> getAllBookingReturns();

    void updateBookingReturn(BookingReturnDTO dto);
}
