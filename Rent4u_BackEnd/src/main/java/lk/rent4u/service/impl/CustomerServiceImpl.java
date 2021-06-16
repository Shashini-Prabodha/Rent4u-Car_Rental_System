package lk.rent4u.service.impl;

import lk.rent4u.dto.CustomerDTO;
import lk.rent4u.entity.Customer;
import lk.rent4u.exception.ValidateException;
import lk.rent4u.repo.CustomerRepo;
import lk.rent4u.service.CustomerService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.modelmapper.ValidationException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class CustomerServiceImpl implements CustomerService {
    @Autowired
    private CustomerRepo repo;

    @Autowired
    private ModelMapper mapper;

    public void addCustomer(CustomerDTO dto) {
        if (repo.existsById(dto.getCustomerID())) {
            throw new ValidateException("Customer Already Exists");
        }
        repo.save(mapper.map(dto, Customer.class));
    }

    public void deleteCustomer(String id) {
        if (!repo.existsById(id)) {
            throw new ValidateException("No Customer for Delete");
        }
        repo.deleteById(id);
    }

    public CustomerDTO searchCustomer(String id) {
        Optional<Customer> customer = repo.findById(id);
        if (customer.isPresent()) {
            return mapper.map(customer.get(), CustomerDTO.class);
        }
        return null;
    }

    public ArrayList<CustomerDTO> getAllCustomers() {
        List<Customer> all = repo.findAll();
        return mapper.map(all, new TypeToken<ArrayList<CustomerDTO>>() {
        }.getType());
    }

    public void updateCustomer(CustomerDTO dto) {
        if (repo.existsById(dto.getCustomerID())) {
            repo.save(mapper.map(dto, Customer.class));
        }
    }
}
