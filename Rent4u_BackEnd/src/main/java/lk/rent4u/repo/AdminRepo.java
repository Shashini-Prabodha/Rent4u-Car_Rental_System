package lk.rent4u.repo;

import lk.rent4u.entity.Admin;
import lk.rent4u.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface AdminRepo extends JpaRepository<Admin,String> {
    Optional<Admin> findByUserName(String userName);

    Optional<Admin> findByUserNameAndPassword(String userName,String password);

    @Query(value = "SELECT a FROM Admin a WHERE a.userName=:userName")
    Admin getAdmin(@Param("userName") String userName);

}
