package lk.rent4u.service;

import lk.rent4u.dto.BookingDTO;
import lk.rent4u.dto.PaymentDTO;
import lk.rent4u.entity.Booking;
import org.springframework.data.repository.query.Param;

import java.util.ArrayList;
import java.util.List;

public interface PaymentService {
    void addPayment(PaymentDTO dto);

    void deletePayment(String id);

    PaymentDTO searchPayment(String id);

    ArrayList<PaymentDTO> getAllPayments();

    void updatePayment(PaymentDTO dto);

    String getLastID();

    String getNewID();

    List<PaymentDTO> getPaymentCid(String custId);

}
