package lk.rent4u.repo;

import lk.rent4u.entity.Admin;
import lk.rent4u.entity.Driver;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface DriverRepo extends JpaRepository<Driver,String> {
    Optional<Driver> findByUserName(String userName);

    Optional<Driver> findByUserNameAndPassword(String userName, String password);

}
