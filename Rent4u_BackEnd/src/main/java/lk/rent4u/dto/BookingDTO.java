package lk.rent4u.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class BookingDTO {
    private String bookingID;
    private String date;
    private String pickupdate;
    private String status;
    private String  returnDate;
    private CustomerDTO customerDTO;
    private CarDTO carDTO;
    private DriverDTO driverDTO;
}
