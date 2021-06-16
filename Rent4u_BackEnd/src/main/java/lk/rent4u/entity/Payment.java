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
public class Payment {
    @Id
    private String paymentID;
    private Date date;
    private double amount;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "returnID", referencedColumnName = "returnID",nullable = false)
    private BookingReturn bookingReturn;
}
