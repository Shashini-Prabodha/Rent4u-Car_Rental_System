package lk.rent4u.dto;

import lk.rent4u.entity.Booking;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class PaymentDTO {
    private String paymentID;
    private String date;
    private double amount;
    private String description;
    private BookingDTO booking;
}
