package lk.rent4u.repo;

import lk.rent4u.entity.Booking;
import lk.rent4u.entity.Car;
import lk.rent4u.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface BookingRepo extends JpaRepository<Booking,String> {

    @Query(value = "SELECT bookingID FROM Booking ORDER BY bookingID DESC LIMIT 1",nativeQuery = true)
    String getLastID();

    List<Booking> readByStatus(String status);

}
