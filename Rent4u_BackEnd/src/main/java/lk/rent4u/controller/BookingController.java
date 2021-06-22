package lk.rent4u.controller;

import lk.rent4u.dto.BookingDTO;
import lk.rent4u.exception.NotFoundException;
import lk.rent4u.service.BookingService;
import lk.rent4u.util.StandardResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("api/v1/booking")
@CrossOrigin
public class BookingController {

    @Autowired
    private BookingService service;

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity getAllBookings() {
        ArrayList<BookingDTO> allBookings = service.getAllBookings();
        return new ResponseEntity(new StandardResponse("200", "Done", allBookings), HttpStatus.OK);
    }

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity saveBooking(@RequestBody BookingDTO bookingDTO) {
        if (bookingDTO.getBookingID().trim().length() <= 0) {
            throw new NotFoundException("Booking ID cannot be empty");
        }
        service.addBooking(bookingDTO);
        return new ResponseEntity(new StandardResponse("201", "Done", bookingDTO), HttpStatus.CREATED);
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity searchBooking(@PathVariable String id) {
        BookingDTO bookingDTO = service.searchBooking(id);
        return new ResponseEntity(new StandardResponse("200", "Done", bookingDTO), HttpStatus.OK);
    }

    @DeleteMapping(params = {"id"})
    public ResponseEntity deleteBooking(@RequestParam String id) {
        service.deleteBooking(id);
        return new ResponseEntity(new StandardResponse("200", "Done", null), HttpStatus.OK);
    }

    @PutMapping(consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity updateBooking(@RequestBody BookingDTO bookingDTO) {
        if (bookingDTO.getBookingID().trim().length() <= 0) {
            throw new NotFoundException("Booking ID provided to update");
        }
        service.updateBooking(bookingDTO);
        return new ResponseEntity(new StandardResponse("200", "Done", bookingDTO), HttpStatus.OK);

    }


    @GetMapping(path = "/newBookingId")
    public ResponseEntity getNewBookingID(){
        String newID = service.getNewID();

        return new ResponseEntity(new StandardResponse("200","Done",newID),HttpStatus.OK);
    }

}
