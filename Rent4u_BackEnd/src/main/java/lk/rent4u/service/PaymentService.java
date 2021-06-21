package lk.rent4u.service;

import lk.rent4u.dto.PaymentDTO;

import java.util.ArrayList;

public interface PaymentService {
    void addPayment(PaymentDTO dto);

    void deletePayment(String id);

    PaymentDTO searchPayment(String id);

    ArrayList<PaymentDTO> getAllPayments();

    void updatePayment(PaymentDTO dto);
}
