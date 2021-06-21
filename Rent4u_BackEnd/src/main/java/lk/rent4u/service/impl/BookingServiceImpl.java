package lk.rent4u.service.impl;

import lk.rent4u.dto.BookingDTO;
import lk.rent4u.entity.Booking;
import lk.rent4u.exception.ValidateException;
import lk.rent4u.repo.BookingRepo;
import lk.rent4u.service.BookingService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class BookingServiceImpl implements BookingService {
    @Autowired
    BookingRepo repo;

    @Autowired
    ModelMapper mapper;

    @Override
    public void addBooking(BookingDTO dto) {
        if (repo.existsById(dto.getBookingID())) {
            throw new ValidateException("Booking ID Already Exists");
        }
        repo.save(mapper.map(dto, Booking.class));
    }

    @Override
    public void deleteBooking(String id) {
        if (!repo.existsById(id)) {
            throw new ValidateException("No Customer for Delete");
        }
        repo.deleteById(id);
    }

    @Override
    public BookingDTO searchBooking(String id) {
        Optional<Booking> booking = repo.findById(id);
        if (booking.isPresent()) {
            return mapper.map(booking.get(), BookingDTO.class);
        }
        return null;
    }

    @Override
    public ArrayList<BookingDTO> getAllBookings() {
        List<Booking> all = repo.findAll();
        return mapper.map(all,new TypeToken<ArrayList<BookingDTO>>(){}.getType());
    }

    @Override
    public void updateBooking(BookingDTO dto) {
        if(repo.existsById(dto.getBookingID())){
            repo.save(mapper.map(dto,Booking.class));
        };
    }
}
