package lk.rent4u.repo;

import lk.rent4u.entity.Booking;
import lk.rent4u.entity.Car;
import lk.rent4u.entity.Customer;
import lk.rent4u.entity.Driver;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface BookingRepo extends JpaRepository<Booking,String> {

    @Query(value = "SELECT bookingID FROM Booking ORDER BY bookingID DESC LIMIT 1",nativeQuery = true)
    String getLastID();

    List<Booking> readByStatus(String status);


    @Query(value = "SELECT b from Booking b where b.customer.customerID=:custId")
    List<Booking> getBookinginCid(@Param("custId") String custId);

    @Query(value = "SELECT b from Booking b where b.status=:state1 OR b.status=:state2 AND b.customer.customerID=:custId")
    List<Booking> getBookingMultiStatus(@Param("state1") String state1, @Param("state2") String state2, @Param("custId") String custId);

    @Query(value = "SELECT b from Booking b where b.status=:state AND b.driver.driverID=:driverId")
    List<Booking> getBookinginId(@Param("state") String state, @Param("driverId") String driverId);

//
//    @Query(value = "SELECT b from Booking b where b.customer.customerID=:custId")
//    Booking getBookingLastBookingInC(@Param("custId") String custId);

}
