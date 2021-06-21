package lk.rent4u.controller;


import lk.rent4u.dto.BookingReturnDTO;
import lk.rent4u.exception.NotFoundException;
import lk.rent4u.service.BookingReturnService;
import lk.rent4u.util.StandardResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("api/v1/bookingReturn")
@CrossOrigin
public class BookingReturnController {

    @Autowired
    private BookingReturnService service;

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity getAllBookingReturns() {
        ArrayList<BookingReturnDTO> allBookingReturns = service.getAllBookingReturns();
        return new ResponseEntity(new StandardResponse("200", "Done", allBookingReturns), HttpStatus.OK);
    }

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity saveBookingReturn(@RequestBody BookingReturnDTO bookingReturnDTO) {
        if (bookingReturnDTO.getReturnID().trim().length() <= 0) {
            throw new NotFoundException("BookingReturn ID cannot be empty");
        }
        service.addBookingReturn(bookingReturnDTO);
        return new ResponseEntity(new StandardResponse("201", "Done", bookingReturnDTO), HttpStatus.CREATED);
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity searchBookingReturn(@PathVariable String id) {
        BookingReturnDTO bookingReturnDTO = service.searchBookingReturn(id);
        return new ResponseEntity(new StandardResponse("200", "Done", bookingReturnDTO), HttpStatus.OK);
    }

    @DeleteMapping(params = {"id"})
    public ResponseEntity deleteBookingReturn(@RequestParam String id) {
        service.deleteBookingReturn(id);
        return new ResponseEntity(new StandardResponse("200", "Done", null), HttpStatus.OK);
    }

    @PutMapping(consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity updateBookingReturn(@RequestBody BookingReturnDTO bookingReturnDTO) {
        if (bookingReturnDTO.getReturnID().trim().length() <= 0) {
            throw new NotFoundException("BookingReturn ID provided to update");
        }
        service.updateBookingReturn(bookingReturnDTO);
        return new ResponseEntity(new StandardResponse("200", "Done", bookingReturnDTO), HttpStatus.OK);

    }
}
