package lk.rent4u.repo;

import lk.rent4u.entity.Admin;
import lk.rent4u.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.Optional;

public interface CustomerRepo extends JpaRepository<Customer,String> {

    Optional<Customer> findByUserName(String userName);

    Optional<Customer> findByUserNameAndPassword(String userName, String password);

    @Query(value = "SELECT COUNT(customerID) FROM Customer ",nativeQuery = true)
    int countByCustomerID();

    @Query(value = "SELECT customerID FROM Customer ORDER BY customerID DESC LIMIT 1",nativeQuery = true)
    String getLastID();

    @Query(value = "SELECT c FROM Customer c WHERE c.userName=:userName")
    Customer getuCustomer(@Param("userName") String userName);


}
