package lk.rent4u.entity;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
public class BookingReturn {
@Id
    private String returnID;
    private Date date;
    private double noOfKm;

    @OneToOne(cascade = CascadeType.ALL)
     @JoinColumn(name = "bookingID", referencedColumnName = "bookingID",nullable = false)
    private Booking booking;
//
//    @OneToOne(mappedBy = "bookingReturn", cascade = CascadeType.ALL)
//    private Payment payment;
}
