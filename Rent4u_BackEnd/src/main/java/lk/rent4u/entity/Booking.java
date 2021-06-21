package lk.rent4u.entity;


import lk.rent4u.dto.CarDTO;
import lk.rent4u.dto.CustomerDTO;
import lk.rent4u.dto.DriverDTO;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
public class Booking {
    @Id
    private String bookingID;
    private String date;
    private String pickupDate;
    private String  returnDate;
    private String status;

    @ManyToOne
    @JoinColumn(name = "custId", referencedColumnName = "customerID",nullable = false)
    private Customer customer;

    @ManyToOne
    @JoinColumn(name = "carID", referencedColumnName = "carID",nullable = false)
    private Car car;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "driverID", referencedColumnName = "driverID",nullable = false)
    private Driver driver;

//    @OneToOne(mappedBy = "booking", cascade = CascadeType.ALL)
//    private BookingReturn bookingReturn;


}
