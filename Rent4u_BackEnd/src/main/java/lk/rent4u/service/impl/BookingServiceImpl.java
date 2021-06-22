package lk.rent4u.service.impl;

import lk.rent4u.dto.BookingDTO;
import lk.rent4u.dto.CarDTO;
import lk.rent4u.dto.CustomerDTO;
import lk.rent4u.dto.DriverDTO;
import lk.rent4u.entity.Booking;
import lk.rent4u.exception.ValidateException;
import lk.rent4u.repo.BookingRepo;
import lk.rent4u.repo.CarRepo;
import lk.rent4u.repo.CustomerRepo;
import lk.rent4u.repo.DriverRepo;
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
    BookingRepo bookingRepo;

    @Autowired
    CustomerRepo customerbooking;
    
    @Autowired
    DriverRepo driverRepo;
    
    @Autowired
    CarRepo carRepo;

    @Autowired
    ModelMapper mapper;

    @Override
    public void addBooking(BookingDTO dto) {
        if (bookingRepo.existsById(dto.getBookingID())) {
            throw new ValidateException("Booking ID Already Exists");
        }
        dto.setBookingID(getNewID());

        CarDTO carDTO = dto.getCarDTO();
        CustomerDTO customerDTO = dto.getCustomerDTO();
        DriverDTO driverDTO = dto.getDriverDTO();

        if(driverDTO==true){
            
        }else {}


        bookingRepo.save(mapper.map(dto, Booking.class));
    }

    @Override
    public void deleteBooking(String id) {
        if (!bookingRepo.existsById(id)) {
            throw new ValidateException("No Customer for Delete");
        }
        bookingRepo.deleteById(id);
    }

    @Override
    public BookingDTO searchBooking(String id) {
        Optional<Booking> booking = bookingRepo.findById(id);
        if (booking.isPresent()) {
            return mapper.map(booking.get(), BookingDTO.class);
        }
        return null;
    }

    @Override
    public ArrayList<BookingDTO> getAllBookings() {
        List<Booking> all = bookingRepo.findAll();
        return mapper.map(all,new TypeToken<ArrayList<BookingDTO>>(){}.getType());
    }

    @Override
    public void updateBooking(BookingDTO dto) {
        if(bookingRepo.existsById(dto.getBookingID())){
            bookingRepo.save(mapper.map(dto,Booking.class));
        };
    }

    @Override
    public String getLastID() {
        return bookingRepo.getLastID();
    }

    @Override
    public String getNewID() {
        String lastID = getLastID();
        if (lastID!=null){
            String[] s = lastID.split("B");
            int value= Integer.parseInt(s[1]);
            value++;
            return "B"+value;
        }else{
            return "B1";
        }
    }
}
