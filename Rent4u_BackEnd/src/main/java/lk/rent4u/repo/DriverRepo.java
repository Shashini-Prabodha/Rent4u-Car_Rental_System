package lk.rent4u.repo;

import lk.rent4u.entity.Admin;
import lk.rent4u.entity.Car;
import lk.rent4u.entity.Customer;
import lk.rent4u.entity.Driver;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface DriverRepo extends JpaRepository<Driver,String> {
    Optional<Driver> findByUserName(String userName);

    Optional<Driver> findByUserNameAndPassword(String userName, String password);


    @Query(value = "SELECT d FROM Driver d WHERE d.userName=:userName")
    Driver getDriver(@Param("userName") String userName);

    List<Driver> readByAvailable(boolean available);


}
