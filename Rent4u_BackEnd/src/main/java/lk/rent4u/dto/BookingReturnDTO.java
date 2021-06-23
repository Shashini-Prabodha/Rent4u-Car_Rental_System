package lk.rent4u.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class BookingReturnDTO {

    private String returnID;
    private Date date;
    private double noOfKm;
    private BookingDTO bookingDTO;
    private PaymentDTO paymentDTO;

}
