package lk.rent4u.service.impl;

import lk.rent4u.dto.BookingReturnDTO;
import lk.rent4u.entity.BookingReturn;
import lk.rent4u.exception.ValidateException;
import lk.rent4u.repo.BookingReturnRepo;
import lk.rent4u.service.BookingReturnService;
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
public class BookingReturnServiceImpl implements BookingReturnService {
    @Autowired
    BookingReturnRepo repo;

    @Autowired
    ModelMapper mapper;

    @Override
    public void addBookingReturn(BookingReturnDTO dto) {
        if (repo.existsById(dto.getReturnID())) {
            throw new ValidateException("Booking Return Already Exists");
        }
        repo.save(mapper.map(dto, BookingReturn.class));
    }

    @Override
    public void deleteBookingReturn(String id) {
        if (!repo.existsById(id)) {
            throw new ValidateException("No Booking return for Delete");
        }
        repo.deleteById(id);
    }

    @Override
    public BookingReturnDTO searchBookingReturn(String id) {
        Optional<BookingReturn> bookingReturn = repo.findById(id);
        if (bookingReturn.isPresent()) {
            return mapper.map(bookingReturn.get(), BookingReturnDTO.class);
        }
        return null;
    }

    @Override
    public ArrayList<BookingReturnDTO> getAllBookingReturns() {
        List<BookingReturn> all = repo.findAll();
        return mapper.map(all,new TypeToken<ArrayList<BookingReturnDTO>>(){}.getType());
    }

    @Override
    public void updateBookingReturn(BookingReturnDTO dto) {
       if(repo.existsById(dto.getReturnID())){
           repo.save(mapper.map(dto,BookingReturn.class));
       };
    }
}
