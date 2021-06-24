package lk.rent4u.repo;

import lk.rent4u.entity.Booking;
import lk.rent4u.entity.Payment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface PaymentRepo extends JpaRepository<Payment,String> {


    @Query(value = "SELECT paymentID FROM Payment ORDER BY paymentID DESC LIMIT 1",nativeQuery = true)
    String getLastID();

    @Query(value = "SELECT p from Payment p where p.booking.customer.customerID=:custId")
    List<Payment> getPaymentCid(@Param("custId") String custId);

}
