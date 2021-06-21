package lk.rent4u.repo;

import lk.rent4u.entity.Admin;
import lk.rent4u.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface CustomerRepo extends JpaRepository<Customer,String> {

    Optional<Customer> findByUserName(String userName);

    Optional<Customer> findByUserNameAndPassword(String userName, String password);

    @Query(value = "SELECT COUNT(customerID) FROM Customer ",nativeQuery = true)
    int countByCustomerID();

    @Query(value = "SELECT customerID FROM Customer ORDER BY customerID DESC LIMIT 1",nativeQuery = true)
    String getLastID();

}
