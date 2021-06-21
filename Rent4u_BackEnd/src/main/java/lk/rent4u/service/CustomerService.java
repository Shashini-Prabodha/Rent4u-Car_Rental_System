package lk.rent4u.service;

import lk.rent4u.dto.CustomerDTO;
import lk.rent4u.entity.Customer;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.Optional;


public interface CustomerService {
    void addCustomer(CustomerDTO dto);

    void deleteCustomer(String id);

    CustomerDTO searchCustomer(String id);

    ArrayList<CustomerDTO> getAllCustomers();

    void updateCustomer(CustomerDTO dto);

    boolean findByUserName(String userName);

    boolean findByUserNameAndPassword(String userName, String password);

    String getLastID();

    int countByCustomerID();

    CustomerDTO getuCustomer(String userName);

}
