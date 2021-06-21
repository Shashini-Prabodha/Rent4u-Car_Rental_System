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
    private String pickupDate;
    private String  returnDate;
    private String status;
    private CustomerDTO customerDTO;
    private CarDTO carDTO;
    private DriverDTO driverDTO;
}
