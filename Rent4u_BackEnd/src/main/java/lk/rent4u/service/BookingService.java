package lk.rent4u.service;

import lk.rent4u.dto.BookingDTO;
import lk.rent4u.entity.Booking;
import lk.rent4u.entity.Customer;
import org.springframework.data.repository.query.Param;

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

    List<BookingDTO> readByStatus(String status);

    List<BookingDTO> getBookinginCid(String id);

    List<BookingDTO> getBookingMultiStatus(String id);



}
//var row = `<tr><td>${bookingID}</td><td>${orddate}</td><td>${customerID}</td><td>${carID}</td><td>${pickupDate}</td><td>${returnDate}</td><td>${d}</td><td>${status}</td></tr>`;

//        $.ajax({
//        method: "get",
//        url: 'http://localhost:8080/Rent4u_BackEnd_war_exploded/api/v1/booking/read/record/' + customer,
//        dataType: 'json',
//        success: function (resp) {
//        let response = resp.data;
//        for (var i in response) {
//        let bookingID = (response[i].bookingID);
//        let orddate = (response[i].date);
//        let customerID = response[i].customer.customerID;
//        let carID = response[i].car.carID;
//        let pickupDate = response[i].pickupDate;
//        let returnDate = response[i].returnDate
//        let driverID = response[i].driver.driverID;
//        let d = driverID;
//        if (driverID == "D0") {
//        d = "No Need Driver";
//        }
//        let status = response[i].status;
//
//        var row = `<tr><td>${bookingID}</td><td>${orddate}</td><td>${customerID}</td><td>${carID}</td><td>${pickupDate}</td><td>${returnDate}</td><td>${d}</td><td>${status}</td></tr>`;
//        $('#custBookingTBody').append(row);
//        }
//        }
//        });