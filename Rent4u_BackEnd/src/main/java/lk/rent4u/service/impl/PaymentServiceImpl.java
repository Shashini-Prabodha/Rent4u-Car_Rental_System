package lk.rent4u.service.impl;

import lk.rent4u.dto.PaymentDTO;
import lk.rent4u.entity.Payment;
import lk.rent4u.exception.ValidateException;
import lk.rent4u.repo.PaymentRepo;
import lk.rent4u.service.PaymentService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class PaymentServiceImpl implements PaymentService {
    @Autowired
    PaymentRepo repo;

    @Autowired
    ModelMapper mapper;

    @Override
    public void addPayment(PaymentDTO dto) {
        if (repo.existsById(dto.getPaymentID())) {
            throw new ValidateException("Payment Already Exists");
        }
        repo.save(mapper.map(dto, Payment.class));
    }

    @Override
    public void deletePayment(String id) {
        if (!repo.existsById(id)) {
            throw new ValidateException("No Payment for Delete");
        }
        repo.deleteById(id);
    }

    @Override
    public PaymentDTO searchPayment(String id) {
        Optional<Payment> payment = repo.findById(id);
        if (payment.isPresent()) {
            return mapper.map(payment.get(), PaymentDTO.class);
        }
        return null;
    }

    @Override
    public ArrayList<PaymentDTO> getAllPayments() {
        List<Payment> all = repo.findAll();
        return mapper.map(all,new TypeToken<ArrayList<PaymentDTO>>(){}.getType());
    }

    @Override
    public void updatePayment(PaymentDTO dto) {
        if(repo.existsById(dto.getPaymentID())){
            repo.save(mapper.map(dto,Payment.class));
        };
    }
}
