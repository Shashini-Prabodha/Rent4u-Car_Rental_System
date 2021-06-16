package lk.rent4u.repo;

import lk.rent4u.entity.Login;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LoginRepo extends JpaRepository<Login,String> {
}
